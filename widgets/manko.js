/**
 * Manko ForwardWidget — manko.fun 番号匹配播放源聚合
 *
 * 跨模块匹配器：不提供列表/详情，只在其他模块播放影片时按番号匹配 manko.fun 的在线播放线路
 * （Wasabi / MMTV / Jable / MissAV 多线路）并附外挂字幕（ZH/TW/EN/KO/TH srt）。
 *
 * 接口链路（2026-11-10 实测）：
 *   搜索   https://healertanker.com/swx/movie/search?keyword=<CODE>&size=24&page=1
 *          （备用 https://alpharomeo.shop；响应 {data:"<xn编码>"} → 解码为影片数组）
 *   详情   /swx/movie/detail/<_id>                          响应 {data:"<xn编码>"}
 *   线路1  wasabi_embed_url 形如 https://sadie-shop.site/e/<hashId>
 *          → GET <embedOrigin>/stream?id=<hashId> 返回 {media:{stream:<新m3u8>}}
 *          → 播放需 Referer: <embedOrigin>/（实测 manko referer 403）
 *          数据库中的 wasabi_url_1 常已过期（403），仅作 stream 解析失败时的兜底
 *   线路2  mmtv_m3u8（免头）；mmtv_time 超过 5 小时过期，
 *          → GET /swx/extract_mmtv_embed?id=<_id>（明文 JSON）取新地址
 *   线路3  jable_hls → Referer: https://jable.tv/
 *   线路4  missav_video（surrit.com，部分网络 403，作最低优先兜底）
 *   字幕   /swx/subtitle-link/<_id> → {data:"<xn编码>"} → subtitle_link [{ZH: s3直链},...]
 *
 * xn 解码：manko 前端 build.js 中的 Base94 位流解码器（xn 函数）逐字移植。
 */

var MANKO_API_HOSTS = ["https://healertanker.com", "https://alpharomeo.shop"];
var MANKO_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var MANKO_SITE_BASE = "https://manko.fun";

var MANKO_API_TIMEOUT_MS = 8000;
var MANKO_STREAM_TIMEOUT_MS = 8000;
// mmtv 源存活窗口（与前端 window.mmtvSurviveHour = 5 一致）
var MANKO_MMTV_SURVIVE_MS = 5 * 60 * 60 * 1000;
var MANKO_MAX_DETAIL_ROWS = 3; // 同番号多行（不同 _id）时最多解析几个
var MANKO_MAX_LINES = 8;

var MANKO_RESOLVE_CACHE_MEM = {};
var MANKO_RESOLVE_STORAGE_PREFIX = "manko.resolve.v1.";
var MANKO_RESOLVE_TTL_OK_MS = 30 * 60 * 1000; // 线路结果缓存 30 分钟
var MANKO_RESOLVE_TTL_MISS_MS = 15 * 60 * 1000; // 无结果负缓存 15 分钟
var MANKO_SUBTITLE_CACHE_MEM = {};
var MANKO_SUBTITLE_STORAGE_PREFIX = "manko.subtitle.v1.";
var MANKO_SUBTITLE_TTL_OK_MS = 6 * 60 * 60 * 1000;
var MANKO_SUBTITLE_TTL_MISS_MS = 30 * 60 * 1000;
// API 主机全挂时短负缓存，避免每次聚合都连撞两个死主机
var MANKO_NETGATE_MEM = { down: 0 };
var MANKO_NETGATE_STORE_PREFIX = "manko.netGate.v1.";
var MANKO_NETGATE_TTL_MS = 5 * 60 * 1000;

/* ========================= xn 解码（Base94 位流，来自 manko build.js xn 函数） ========================= */

var MANKO_XN_ALPHABET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"';

// 桥接环境没有 Buffer/TextDecoder，手工 UTF-8 解码
function mankoUtf8Decode(bytes) {
  var out = "";
  var i = 0;
  while (i < bytes.length) {
    var c = bytes[i++];
    if (c < 0x80) {
      out += String.fromCharCode(c);
    } else if (c < 0xe0) {
      var c2 = bytes[i++] || 0;
      out += String.fromCharCode(((c & 0x1f) << 6) | (c2 & 0x3f));
    } else if (c < 0xf0) {
      var d2 = bytes[i++] || 0;
      var d3 = bytes[i++] || 0;
      out += String.fromCharCode(((c & 0x0f) << 12) | ((d2 & 0x3f) << 6) | (d3 & 0x3f));
    } else {
      var e2 = bytes[i++] || 0;
      var e3 = bytes[i++] || 0;
      var e4 = bytes[i++] || 0;
      var cp = ((c & 0x07) << 18) | ((e2 & 0x3f) << 12) | ((e3 & 0x3f) << 6) | (e4 & 0x3f);
      cp -= 0x10000;
      out += String.fromCharCode(0xd800 + (cp >> 10), 0xdc00 + (cp & 0x3ff));
    }
  }
  return out;
}

function xnDecode(encoded) {
  var t = String(encoded || "");
  var n = t.length;
  var r = [];
  var a = 0;
  var i = 0;
  var o = -1;
  for (var s = 0; s < n; s++) {
    var l = MANKO_XN_ALPHABET.indexOf(t.charAt(s));
    if (l !== -1) {
      if (o < 0) {
        o = l;
      } else {
        a |= (o += 91 * l) << i;
        i += (8191 & o) > 88 ? 13 : 14;
        do {
          r.push(a & 255);
          a >>= 8;
          i -= 8;
        } while (i > 7);
        o = -1;
      }
    }
  }
  if (o > -1) r.push((a | (o << i)) & 255);
  return mankoUtf8Decode(r);
}

// swx/movie/search、swx/movie/detail、swx/subtitle-link 均返回 {data:"<xn编码>"}；
// swx/extract_mmtv_embed 返回明文 JSON，data 直接是对象。
function decodeXnPayload(payload) {
  var raw = payload && typeof payload.data === "string" ? payload.data : "";
  if (!raw) return null;
  var text = xnDecode(raw);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (e) {
    return null;
  }
}

/* ========================= 通用工具 ========================= */

function mankoSafeText(str) {
  return String(str === null || str === undefined ? "" : str).replace(/\s+/g, " ").trim();
}

function isHttpUrl(url) {
  return /^https?:\/\/.+/i.test(String(url || "").trim());
}

function urlOrigin(url) {
  var m = String(url || "").trim().match(/^(https?:\/\/[^\/\s]+)/i);
  return m ? m[1] : "";
}

function urlHostname(url) {
  var origin = urlOrigin(url);
  if (!origin) return "";
  return origin.replace(/^https?:\/\//i, "").toLowerCase();
}

function buildUrl(base, path, query) {
  var url = String(base || "").replace(/\/+$/, "") + "/" + String(path || "").replace(/^\/+/, "");
  if (query) {
    var parts = [];
    Object.keys(query).forEach(function (key) {
      var val = query[key];
      if (val === undefined || val === null) return;
      parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(val)));
    });
    if (parts.length) url += "?" + parts.join("&");
  }
  return url;
}

function storageGet(key) {
  try {
    if (!Widget.storage || typeof Widget.storage.get !== "function") return null;
    return Widget.storage.get(key);
  } catch (e) {
    return null;
  }
}

function storageSet(key, value) {
  try {
    if (!Widget.storage || typeof Widget.storage.set !== "function") return;
    Widget.storage.set(key, JSON.stringify(value));
  } catch (e) {}
}

/* ========================= 番号提取（与 catemby.js 同一套规则，保持两模块行为一致） ========================= */

function extractSearchCode(text) {
  var s = String(text || "")
    .toUpperCase()
    .replace(/\./g, " ")
    .replace(/_/g, "-")
    .replace(/\s+/g, " ")
    .trim();
  if (!s) return "";
  var patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?\d{5,8}\b/,
    /\b(?:S2M|MIAA|SSNI|SNIS|IPX|IPZZ|SSIS|JUQ|MIDE|MIDV|STARS|ABW|RKI|DVAJ|WANZ|LULU|DLDSS|VRTM|SDMU|SDDE|MKMP|HMN|MUDR|ADN|CAWD|PPPE|PRED|MGR|SHKD|MXGS|FSDSS|JUL|KTB|MIAB|GVH|MIMK|JUY|JUTA|IDBD|HND|DASD|CLO|BF|HONB|ROE|CEMD|MIUM|NITR|RCTD|RCT|IPVR|MIBD|JUR|JURD|SOE|ORE|PYO|START|NSFS|JJGG|BANK|MILK|SIR|FSOK|KV|KIWVR|MREC|DVRT|VOD)\s*[-_ ]?\d{2,6}[A-Z]?(?:[-_][A-Z]{1,4})?\b/,
    /\b[A-Z]{2,10}\s*[-_ ]?\d{2,8}[A-Z]?\b/,
    /\b\d{6,8}\b/,
  ];
  for (var i = 0; i < patterns.length; i++) {
    var match = s.match(patterns[i]);
    if (match && match[0]) {
      return match[0].replace(/\s+/g, "").replace(/_/g, "-").replace(/-+/g, "-").toUpperCase();
    }
  }
  return "";
}

function isValidJavCatalogCode(code) {
  var raw = String(code || "").trim();
  if (!raw) return false;
  var upper = raw.toUpperCase().replace(/\s+/g, " ");
  if (/^\d{4,}$/.test(upper.replace(/[\s\-_]+/g, ""))) return false;
  if (/^FC2(?:[- ]?PPV)?[- ]?\d{5,8}$/i.test(upper)) return true;
  if (/^(?:CARIB|1PONDO|HEYZO|T28)[- ]?\d+/i.test(upper)) return true;
  // 通用前缀字母+数字（与 manko 库内 "SONE-247"/"FC2-PPV-4538137" 形态一致）
  return /^[A-Z]{2,10}-\d{2,8}[A-Z]?(?:-[A-Z]{1,4})?$/.test(upper);
}

function collectStringValues(value, depth, out, visited) {
  depth = depth || 0;
  out = out || [];
  visited = visited || new Set();
  if (value === null || value === undefined || depth > 5) return out;
  var type = typeof value;
  if (type === "string" || type === "number") {
    var text = String(value).trim();
    if (text) out.push(text);
    return out;
  }
  if (type !== "object") return out;
  if (visited.has(value)) return out;
  visited.add(value);
  if (Array.isArray(value)) {
    value.forEach(function (item) {
      collectStringValues(item, depth + 1, out, visited);
    });
    return out;
  }
  Object.keys(value).forEach(function (key) {
    collectStringValues(value[key], depth + 1, out, visited);
  });
  return out;
}

function extractCodeFromParams(params) {
  params = params || {};
  // 优先读取显式番号；title/fileName 次之，id/link 兜底
  var priority = [
    params.code, params.number, params.catalogCode, params.catalog_code,
    params.fileName, params.filename, params.file_name,
    params.name, params.path, params.filePath, params.file_path,
    params.mediaPath, params.media_path,
    params.title, params.seriesName, params.originalTitle, params.originalName,
    params.episodeName, params.id, params.description, params.link,
    params.videoId, params.url, params.videoUrl, params.playUrl, params.streamUrl,
  ];
  if (params.extra) {
    priority.push(params.extra.code, params.extra.number, params.extra.catalogCode);
  }
  if (params.tmdbInfo) {
    priority.push(
      params.tmdbInfo.title, params.tmdbInfo.name,
      params.tmdbInfo.originalTitle, params.tmdbInfo.originalName
    );
  }
  if (params.info) {
    priority.push(
      params.info.code, params.info.number, params.info.title,
      params.info.name, params.info.originalTitle, params.info.originalName
    );
  }
  for (var i = 0; i < priority.length; i++) {
    var code = extractSearchCode(priority[i]);
    if (code && isValidJavCatalogCode(code)) return code;
  }
  // 第二遍：无横杠字母+数字番号（如 SONE247）补横杠放行；IMDb 等库标识仍拒绝
  var rest = collectStringValues(params);
  for (var p = 0; p < priority.length; p++) {
    var undashed = undashedVariantCode(priority[p]);
    if (undashed) return undashed;
  }
  for (var j = 0; j < rest.length; j++) {
    var undashed2 = undashedVariantCode(rest[j]);
    if (undashed2) return undashed2;
  }
  return "";
}

// 无横杠字母+数字番号（SONE247）补横杠；IMDb（tt+数字）等纯库标识拒绝。
// 只在严格遍历全部失败后使用，返回补横杠后的规范番号或 ""。
function undashedVariantCode(text) {
  var s = String(text || "")
    .toUpperCase()
    .replace(/\./g, " ")
    .replace(/_/g, "-")
    .replace(/\s+/g, " ")
    .trim();
  if (!s) return "";
  var m = s.match(/\b[A-Z]{2,10}\d{2,8}[A-Z]?\b/);
  if (!m) return "";
  var token = m[0];
  if (/^TT\d{6,}$/.test(token)) return ""; // IMDb id
  var parts = token.match(/^([A-Z]{2,10})(\d{2,8}[A-Z]?)$/);
  if (!parts) return "";
  var candidate = parts[1] + "-" + parts[2];
  return isValidJavCatalogCode(candidate) ? candidate : "";
}

/* ========================= 番号规范化与搜索变体 ========================= */

// 规范形态：大写、去空白、下划线转横杠、连续横杠合并
function normalizeCodeKey(code) {
  return String(code || "")
    .trim()
    .toUpperCase()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// manko 库内标题形如 "SONE-247"、"FC2-PPV-4538137"。
// 搜索是标题前缀匹配（实测 "sone247" 命中 0 条），无横杠变体需补横杠后搜索。
function codeSearchVariants(code) {
  var up = normalizeCodeKey(code);
  var variants = [up];
  var m = up.match(/^FC2-?PPV-?(\d+)$/);
  if (m) {
    variants.push("FC2-PPV-" + m[1]);
    variants.push("FC2-" + m[1]);
  } else if (/^[A-Z]{2,10}\d{2,8}[A-Z]?$/.test(up)) {
    var m2 = up.match(/^([A-Z]{2,10})(\d{2,8}[A-Z]?)$/);
    if (m2) variants.push(m2[1] + "-" + m2[2]);
  } else if (/^[A-Z]{2,10}-\d{2,8}[A-Z]?$/.test(up)) {
    variants.push(up.replace(/-/g, ""));
  }
  var seen = {};
  var out = [];
  for (var i = 0; i < variants.length; i++) {
    var key = normalizeCodeKey(variants[i]);
    if (key && !seen[key]) {
      seen[key] = 1;
      out.push(key);
    }
  }
  return out;
}

// 身份核对：影片标题必须与请求番号的某个变体完全一致（前缀命中但番号不同的要拒绝，
// 例如搜 "SONE-24" 会前缀命中 "SONE-247"，不属于同一部影片）
function titleMatchesCode(title, variants) {
  var key = normalizeCodeKey(title);
  if (!key) return false;
  for (var i = 0; i < variants.length; i++) {
    if (key === variants[i]) return true;
  }
  return false;
}

/* ========================= API 主机负缓存 ========================= */

function netGateActive() {
  var savedAt = Number(MANKO_NETGATE_MEM.down) || 0;
  if (!savedAt) {
    var raw = storageGet(MANKO_NETGATE_STORE_PREFIX + "down");
    savedAt = Number(typeof raw === "string" ? JSON.parse(raw) : raw) || 0;
    MANKO_NETGATE_MEM.down = savedAt;
  }
  if (!savedAt) return false;
  if (Date.now() - savedAt > MANKO_NETGATE_TTL_MS) {
    MANKO_NETGATE_MEM.down = 0;
    return false;
  }
  return true;
}

function markNetGate() {
  var now = Date.now();
  MANKO_NETGATE_MEM.down = now;
  storageSet(MANKO_NETGATE_STORE_PREFIX + "down", now);
}

function clearNetGate() {
  MANKO_NETGATE_MEM.down = 0;
  storageSet(MANKO_NETGATE_STORE_PREFIX + "down", 0);
}

/* ========================= API 调用 ========================= */

async function mankoApiGet(path, query) {
  if (netGateActive()) return null;
  var lastError = null;
  for (var i = 0; i < MANKO_API_HOSTS.length; i++) {
    var url = buildUrl(MANKO_API_HOSTS[i], path, query);
    try {
      var resp = await Widget.http.get(url, {
        headers: { "User-Agent": MANKO_UA, Accept: "application/json", Referer: MANKO_SITE_BASE + "/" },
        timeout: MANKO_API_TIMEOUT_MS,
      });
      var body = resp && resp.data;
      if (body && typeof body === "string") body = JSON.parse(body);
      if (!body || typeof body !== "object") throw new Error("bad body");
      clearNetGate();
      return body;
    } catch (e) {
      lastError = e;
    }
  }
  console.error("[manko] API 全部主机失败(" + path + "): " + (lastError && lastError.message ? lastError.message : lastError));
  markNetGate();
  return null;
}

// 按番号搜索，返回通过身份核对的影片行（同番号可能多行，不同 _id 对应不同线路）
async function searchMankoMovies(code) {
  var variants = codeSearchVariants(code);
  if (!variants.length) return [];
  for (var v = 0; v < variants.length; v++) {
    var keyword = variants[v];
    var payload = await mankoApiGet("swx/movie/search", { keyword: keyword, size: "24", page: "1" });
    if (!payload) return [];
    var rows = decodeXnPayload(payload);
    if (!Array.isArray(rows)) return [];
    if (rows.length || v === variants.length - 1) {
      // 只保留标题与番号完全一致的行
      var matched = [];
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (row && row._id && titleMatchesCode(row.title, variants)) matched.push(row);
      }
      if (matched.length || rows.length) return matched;
    }
  }
  return [];
}

async function fetchMankoDetail(movieId) {
  var id = String(movieId || "").trim();
  // 只接受 MongoDB ObjectId 形态（24 位十六进制），防止外部 id 拼进路径
  if (!/^[0-9a-fA-F]{24}$/.test(id)) return null;
  var payload = await mankoApiGet("swx/movie/detail/" + id);
  if (!payload) return null;
  var detail = decodeXnPayload(payload);
  return detail && typeof detail === "object" ? detail : null;
}

/* ========================= 线路构建 ========================= */

function mankoLine(name, description, url, customHeaders) {
  return {
    name: name,
    description: description,
    url: url,
    playerType: "system",
    customHeaders: customHeaders || undefined,
  };
}

// wasabi：从 embed 地址（https://sadie-shop.site/e/<hashId>?...）解析 hashId，
// GET <embedOrigin>/stream?id=<hashId> 换取新鲜 m3u8。
// 数据库 wasabi_url_1 常已过期（实测 403），仅在 stream 解析失败时兜底。
async function buildWasabiLines(detail, label) {
  var lines = [];
  var embedUrl = String((detail && detail.wasabi_embed_url) || "").trim();
  var origin = urlOrigin(embedUrl);
  var hashMatch = embedUrl.match(/\/e\/([A-Za-z0-9_]+)/);
  var hashId = hashMatch ? hashMatch[1] : "";
  if (origin && hashId && isHttpUrl(origin)) {
    try {
      var streamApi = origin + "/stream?id=" + encodeURIComponent(hashId);
      var resp = await Widget.http.get(streamApi, {
        headers: { "User-Agent": MANKO_UA, Referer: MANKO_SITE_BASE + "/", Accept: "application/json" },
        timeout: MANKO_STREAM_TIMEOUT_MS,
      });
      var body = resp && resp.data;
      if (body && typeof body === "string") body = JSON.parse(body);
      var media = body && body.media;
      var stream = media && String(media.stream || "").trim();
      if (stream && isHttpUrl(stream)) {
        lines.push(
          mankoLine(
            label,
            "在线线路 | 实时解析 | 720P+",
            stream,
            { "User-Agent": MANKO_UA, Referer: origin + "/" }
          )
        );
      }
    } catch (e) {
      console.error("[manko] wasabi stream 解析失败: " + (e && e.message ? e.message : e));
    }
  }
  if (!lines.length) {
    // 兜底：数据库直链（部分条目仍有效）
    var dbUrl = String((detail && detail.wasabi_url_1) || "").trim();
    if (dbUrl && isHttpUrl(dbUrl)) {
      lines.push(
        mankoLine(
          label + "·缓存",
          "在线线路 | 站点缓存直链 | 720P+",
          dbUrl,
          { "User-Agent": MANKO_UA, Referer: (origin || "https://sadie-shop.site") + "/" }
        )
      );
    }
  }
  return lines;
}

// mmtv：mmtv_m3u8 免请求头；mmtv_time 距今超过 5 小时则走 extract 接口刷新
async function buildMmtvLines(detail, label, movieId) {
  var url = String((detail && detail.mmtv_m3u8) || "").trim();
  var mmtvTime = Number(detail && detail.mmtv_time) || 0;
  var fresh = mmtvTime > 0 && Date.now() - mmtvTime * 1000 < MANKO_MMTV_SURVIVE_MS;
  if (!url || !fresh) {
    try {
      var payload = await mankoApiGet("swx/extract_mmtv_embed", { id: movieId });
      var data = payload && payload.data;
      var freshUrl = data && String(data.mmtv_m3u8 || "").trim();
      if (freshUrl && isHttpUrl(freshUrl)) url = freshUrl;
    } catch (e) {
      console.error("[manko] mmtv 刷新失败: " + (e && e.message ? e.message : e));
    }
  }
  if (!url || !isHttpUrl(url)) return [];
  return [mankoLine(label, "在线线路 | MMTV | 720P", url, undefined)];
}

// jable 源：mushroomtrack CDN，需 jable referer
function buildJableLines(detail, label) {
  var url = String((detail && detail.jable_hls) || "").trim();
  if (!url || !isHttpUrl(url)) return [];
  return [
    mankoLine(label, "在线线路 | Jable 源 | 720P", url, {
      "User-Agent": MANKO_UA,
      Referer: "https://jable.tv/",
    }),
  ];
}

// missav 源：surrit CDN；部分网络环境 403，作最低优先兜底线路
function buildMissavLines(detail, label) {
  var url = String((detail && detail.missav_video) || "").trim();
  if (!url || !isHttpUrl(url)) return [];
  return [mankoLine(label, "在线线路 | MissAV 源 | 720P", url, { "User-Agent": MANKO_UA })];
}

function dedupeLines(lines) {
  var seen = {};
  var out = [];
  for (var i = 0; i < lines.length; i++) {
    var key = String(lines[i] && lines[i].url || "").trim();
    if (!key || seen[key]) continue;
    seen[key] = 1;
    out.push(lines[i]);
  }
  return out;
}

/* ========================= 结果缓存 ========================= */

function cacheGet(mem, prefix, key, ttlOk, ttlMiss) {
  var cacheKey = normalizeCodeKey(key);
  if (!cacheKey) return undefined;
  var entry = mem[cacheKey];
  if (!entry) {
    var raw = storageGet(prefix + cacheKey);
    if (!raw) return undefined;
    try {
      entry = typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch (e) {
      return undefined;
    }
    if (!entry || !entry.savedAt) return undefined;
    mem[cacheKey] = entry;
  }
  var ttl = entry.ok ? ttlOk : ttlMiss;
  if (Date.now() - Number(entry.savedAt) > ttl) {
    delete mem[cacheKey];
    return undefined;
  }
  return entry.ok ? entry.value : [];
}

function cacheSet(mem, prefix, key, ok, value) {
  var cacheKey = normalizeCodeKey(key);
  if (!cacheKey) return;
  var entry = { ok: !!ok, value: ok ? value || [] : [], savedAt: Date.now() };
  mem[cacheKey] = entry;
  storageSet(prefix + cacheKey, entry);
}

/* ========================= 播放源聚合（Forward type: stream） ========================= */

async function loadResource(params) {
  try {
    params = params || {};
    if (netGateActive()) return [];
    var code = extractCodeFromParams(params);
    if (!code) return [];

    var cached = cacheGet(
      MANKO_RESOLVE_CACHE_MEM, MANKO_RESOLVE_STORAGE_PREFIX, code,
      MANKO_RESOLVE_TTL_OK_MS, MANKO_RESOLVE_TTL_MISS_MS
    );
    if (cached !== undefined) return cached;

    var variants = codeSearchVariants(code);
    var rows = await searchMankoMovies(code);
    if (!rows.length) {
      cacheSet(MANKO_RESOLVE_CACHE_MEM, MANKO_RESOLVE_STORAGE_PREFIX, code, false, []);
      return [];
    }

    // 同番号可能存在多行（不同 _id、不同源），逐行取详情聚合线路
    var seenIds = {};
    var ids = [];
    for (var i = 0; i < rows.length && ids.length < MANKO_MAX_DETAIL_ROWS; i++) {
      var id = String(rows[i]._id || "").trim();
      if (id && !seenIds[id]) {
        seenIds[id] = 1;
        ids.push(id);
      }
    }

    var lines = [];
    for (var d = 0; d < ids.length; d++) {
      var movieId = ids[d];
      var detail = await fetchMankoDetail(movieId);
      if (!detail) continue;
      var label = "Manko·Wasabi" + (d > 0 ? " " + (d + 1) : "");
      lines = lines.concat(await buildWasabiLines(detail, label));
      lines = lines.concat(await buildMmtvLines(detail, "Manko·MMTV" + (d > 0 ? " " + (d + 1) : ""), movieId));
      lines = lines.concat(buildJableLines(detail, "Manko·Jable" + (d > 0 ? " " + (d + 1) : "")));
      lines = lines.concat(buildMissavLines(detail, "Manko·MissAV" + (d > 0 ? " " + (d + 1) : "")));
    }

    lines = dedupeLines(lines).slice(0, MANKO_MAX_LINES);
    if (lines.length) {
      for (var l = 0; l < lines.length; l++) {
        lines[l].description = "番号：" + code + "\n" + lines[l].description;
      }
    }
    cacheSet(MANKO_RESOLVE_CACHE_MEM, MANKO_RESOLVE_STORAGE_PREFIX, code, lines.length > 0, lines);
    return lines;
  } catch (e) {
    console.error("[manko] loadResource 失败: " + (e && e.message ? e.message : e));
    return [];
  }
}

/* ========================= 外挂字幕（Forward type: subtitle） ========================= */

// subtitle_link 键（站点前端语言命名）：ZH=简中 TW=繁中 EN=英 KO=韩 TH=泰 JA=日
function subtitleLangOf(key) {
  var k = String(key || "").toUpperCase();
  if (k === "ZH") return { lang: "zh-CN", label: "简中" };
  if (k === "TW" || k === "ZH-TW" || k === "CT") return { lang: "zh-TW", label: "繁中" };
  if (k === "EN") return { lang: "en", label: "English" };
  if (k === "KO") return { lang: "ko", label: "한국어" };
  if (k === "TH") return { lang: "th", label: "ไทย" };
  if (k === "JA" || k === "JP") return { lang: "ja", label: "日本語" };
  return null;
}

async function fetchSubtitleItems(movieId, code) {
  var payload = await mankoApiGet("swx/subtitle-link/" + movieId);
  var parsed = decodeXnPayload(payload);
  var links = parsed && parsed.subtitle_link;
  if (!Array.isArray(links)) return [];
  var items = [];
  for (var i = 0; i < links.length; i++) {
    var entry = links[i];
    if (!entry || typeof entry !== "object") continue;
    var keys = Object.keys(entry);
    for (var j = 0; j < keys.length; j++) {
      var meta = subtitleLangOf(keys[j]);
      var url = String(entry[keys[j]] || "").trim();
      if (!meta || !isHttpUrl(url)) continue;
      items.push({
        id: url,
        title: meta.label + " · " + code,
        lang: meta.lang,
        url: url,
        format: "srt",
        description: code + " · " + meta.label,
      });
    }
  }
  return items;
}

function subtitleLangRank(lang) {
  if (lang === "zh-CN") return 0;
  if (lang === "zh-TW") return 1;
  if (lang === "en") return 2;
  if (lang === "ja") return 3;
  if (lang === "ko") return 4;
  return 5; // th 等
}

async function loadSubtitle(params) {
  try {
    params = params || {};
    if (netGateActive()) return [];
    var code = extractCodeFromParams(params);
    if (!code) return [];

    var cached = cacheGet(
      MANKO_SUBTITLE_CACHE_MEM, MANKO_SUBTITLE_STORAGE_PREFIX, code,
      MANKO_SUBTITLE_TTL_OK_MS, MANKO_SUBTITLE_TTL_MISS_MS
    );
    if (cached !== undefined) return cached;

    var rows = await searchMankoMovies(code);
    var items = [];
    if (rows.length) {
      var seenIds = {};
      var count = 0;
      for (var i = 0; i < rows.length && count < 2; i++) {
        var id = String(rows[i]._id || "").trim();
        if (!id || seenIds[id]) continue;
        seenIds[id] = 1;
        count++;
        items = items.concat(await fetchSubtitleItems(id, code));
      }
    }
    // 同语言去重（同番号多行时字幕通常一致），中文排前
    var seenLang = {};
    var unique = [];
    for (var u = 0; u < items.length; u++) {
      if (seenLang[items[u].lang]) continue;
      seenLang[items[u].lang] = 1;
      unique.push(items[u]);
    }
    unique.sort(function (a, b) {
      return subtitleLangRank(a.lang) - subtitleLangRank(b.lang);
    });
    cacheSet(MANKO_SUBTITLE_CACHE_MEM, MANKO_SUBTITLE_STORAGE_PREFIX, code, unique.length > 0, unique);
    return unique;
  } catch (e) {
    console.error("[manko] loadSubtitle 失败: " + (e && e.message ? e.message : e));
    return [];
  }
}

/** zip 字幕包时由客户端回调；本站为 srt 直链，保留兼容 */
async function resolveSubtitleArchive(params) {
  try {
    var subtitleFiles = JSON.parse((params && params.subtitleFiles) || "[]");
    if (!Array.isArray(subtitleFiles) || !subtitleFiles.length) return null;
    var prefer =
      subtitleFiles.find(function (file) {
        return /zh-?cn|简|chs|(?:^|[-._])zh(?:[-._]|$)/i.test(String((file && file.name) || ""));
      }) ||
      subtitleFiles.find(function (file) {
        return /zh-?tw|繁|cht|(?:^|[-._])tw(?:[-._]|$)/i.test(String((file && file.name) || ""));
      }) ||
      subtitleFiles.find(function (file) {
        return /\.(srt|ass|ssa|vtt)$/i.test(String((file && file.name) || ""));
      }) ||
      subtitleFiles[0];
    return prefer && prefer.path ? prefer.path : null;
  } catch (e) {
    return null;
  }
}

/* ========================= ForwardWidget 元数据 ========================= */

WidgetMetadata = {
  id: "manko_player",
  title: "Manko播放源",
  description: "manko.fun 番号匹配播放聚合（Wasabi/MMTV/Jable/MissAV 多线路）+ 外挂字幕",
  author: "老头",
  site: "https://manko.fun",
  version: "1.0.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 600,
  modules: [
    {
      id: "loadResource",
      title: "Manko 播放源",
      description: "通过番号匹配 manko.fun 在线播放线路",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 600,
      params: [],
    },
    {
      id: "loadSubtitle",
      title: "Manko 字幕",
      description: "通过番号匹配 manko.fun 外挂字幕（简中/繁中/英/韩/泰 srt）",
      functionName: "loadSubtitle",
      type: "subtitle",
      cacheDuration: 3600,
      params: [],
    },
  ],
};

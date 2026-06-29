// ==================== 光鸭云盘 番号模块 ====================
// 功能：
//   1. 按番号 / 欧美 Scene 关键词搜索光鸭网盘文件
//   2. 作为 Stream Source，在番号详情页自动匹配网盘文件并直链播放
//   3. guangyadetail:// 按 fileId 直接播放，guangyafolder:// 浏览文件夹
//
// 授权：globalParams 填入 refresh_token（光鸭登录后获取）

WidgetMetadata = {
  id: "guangya.jav",
  title: "光鸭-番号",
  description: "按番号搜索光鸭云盘，详情页自动匹配播放源",
  author: "老头",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  site: "https://www.guangyapan.com",
  detailCacheDuration: 300,

  globalParams: [
    {
      name: "refresh_token",
      title: "光鸭 Refresh Token",
      type: "input",
      value: "",
      placeholder: "填入光鸭 refresh_token（gy.- 开头）"
    }
  ],

  search: {
    title: "番号搜索",
    functionName: "searchGuangyaJav",
    params: [
      { name: "keyword", title: "番号/关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  },

  modules: [
    {
      title: "浏览文件夹",
      description: "浏览光鸭网盘文件夹",
      functionName: "loadFolder",
      cacheDuration: 300,
      params: [
        { name: "parentId", title: "目录 ID", type: "input", value: "", placeholder: "留空=根目录" },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "loadResource",
      title: "光鸭番号",
      description: "匹配光鸭网盘番号文件",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 30,
      params: []
    }
  ]
};

console.log("[guangya-jav] version: " + WidgetMetadata.version);

// ==================== 常量 ====================
var CLIENT_ID = "aMe-8VSlkrbQXpUR";
var ACCOUNT_URL = "https://account.guangyapan.com";
var API_BASE = "https://api.guangyapan.com";
var SITE_ORIGIN = "https://www.guangyapan.com";
var TIMEOUT = 15000;
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

var VIDEO_EXTS = new Set([
  "mp4", "mkv", "avi", "wmv", "mov", "m4v",
  "ts", "flv", "rmvb", "webm", "3gp"
]);

var FILE_ID_MAP = {};

// ==================== 工具 ====================
function getText(v) {
  return String(v || "").trim();
}

function randomHex(len) {
  var s = "";
  for (var i = 0; i < len; i++) {
    s += Math.floor(Math.random() * 16).toString(16);
  }
  return s;
}

function getDeviceId() {
  var did = Widget.storage.get("guangya_did");
  if (!did) {
    did = randomHex(32);
    Widget.storage.set("guangya_did", did);
  }
  return did;
}

function formatSize(bytes) {
  var n = Number(bytes || 0);
  if (!n) return "";
  var units = ["B", "KB", "MB", "GB", "TB"];
  var i = Math.min(Math.floor(Math.log(n) / Math.log(1024)), units.length - 1);
  return (n / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0) + " " + units[i];
}

function isVideoFile(name) {
  var ext = String(name || "").split(".").pop().toLowerCase();
  return VIDEO_EXTS.has(ext);
}

function resolveRefreshToken(params) {
  return getText(params && params.refresh_token) || getText(Widget.storage.get("guangya_refresh_token"));
}

function accountHeaders() {
  var did = getDeviceId();
  return {
    "accept": "*/*",
    "content-type": "application/json",
    "origin": SITE_ORIGIN,
    "referer": SITE_ORIGIN + "/",
    "user-agent": UA,
    "x-client-id": CLIENT_ID,
    "x-client-version": "0.0.1",
    "x-device-id": did,
    "x-device-model": "chrome%2F131.0.0.0",
    "x-device-name": "PC-Chrome",
    "x-device-sign": "wdi10." + did + randomHex(32),
    "x-net-work-type": "NONE",
    "x-os-version": "Win32",
    "x-platform-version": "1",
    "x-protocol-version": "301",
    "x-provider-name": "NONE",
    "x-sdk-version": "9.0.2",
    "x-action": "401"
  };
}

function apiHeaders(token) {
  return {
    "accept": "application/json, text/plain, */*",
    "authorization": "Bearer " + token,
    "content-type": "application/json",
    "did": getDeviceId(),
    "dt": "4",
    "origin": SITE_ORIGIN,
    "referer": SITE_ORIGIN + "/",
    "user-agent": UA
  };
}

async function httpPost(url, body, headers) {
  var resp = await Widget.http.post(url, body, { headers: headers || {}, timeout: TIMEOUT });
  return resp && resp.data;
}

function normalizeFile(item) {
  return {
    fileId: String(item.fileId || item.id || ""),
    filename: item.fileName || item.name || "",
    size: Number(item.fileSize || item.size || 0),
    isDir: item.resType === 2,
    parentId: String(item.parentId || "")
  };
}

// ==================== 认证 ====================
async function refreshAccessToken(refreshToken) {
  var data = await httpPost(
    ACCOUNT_URL + "/v1/auth/token",
    { client_id: CLIENT_ID, grant_type: "refresh_token", refresh_token: refreshToken },
    accountHeaders()
  );
  if (!data || !data.access_token) {
    throw new Error((data && data.error_description) || (data && data.msg) || "刷新 token 失败");
  }
  Widget.storage.set("guangya_access_token", data.access_token);
  Widget.storage.set(
    "guangya_token_expires",
    String(Date.now() + (Number(data.expires_in || 7200) - 60) * 1000)
  );
  if (data.refresh_token) {
    Widget.storage.set("guangya_refresh_token", data.refresh_token);
  }
  return data.access_token;
}

async function ensureToken(params) {
  var refresh = resolveRefreshToken(params);
  if (!refresh) throw new Error("未配置 refresh_token");

  var cached = Widget.storage.get("guangya_access_token");
  var expires = Number(Widget.storage.get("guangya_token_expires") || 0);
  if (cached && Date.now() < expires) return cached;

  return await refreshAccessToken(refresh);
}

async function apiPost(token, path, body) {
  var url = path.indexOf("http") === 0 ? path : API_BASE + path;
  var data = await httpPost(url, body, apiHeaders(token));
  if (!data) throw new Error("空响应");
  if (data.error || (data.msg && data.msg !== "success")) {
    throw new Error(data.msg || data.error_description || "API 错误");
  }
  return data;
}

// ==================== 文件 API ====================
async function searchFiles(token, keyword, page, pageSize) {
  var data = await apiPost(token, "/userres/v1/file/search_files", {
    name: keyword,
    page: Math.max(0, (page || 1) - 1),
    pageSize: pageSize || 50
  });
  var list = (data.data && data.data.list) || [];
  return list.map(normalizeFile).filter(function (f) { return f.fileId; });
}

async function listFolder(token, parentId, page, pageSize) {
  var data = await apiPost(token, "/userres/v1/file/get_file_list", {
    parentId: parentId || "",
    page: Math.max(0, (page || 1) - 1),
    pageSize: pageSize || 100
  });
  var list = (data.data && data.data.list) || [];
  return list.map(normalizeFile).filter(function (f) { return f.fileId; });
}

async function getDownloadUrl(token, fileId) {
  var data = await apiPost(
    token,
    "/nd.bizuserres.s/v1/get_res_download_url",
    { fileId: fileId }
  );
  return (data.data && data.data.signedURL) || "";
}

function guessQualityLabel(filename) {
  var fn = String(filename || "").toLowerCase();
  if (fn.indexOf("2160") !== -1 || fn.indexOf("4k") !== -1) return "4K";
  if (fn.indexOf("1080") !== -1) return "1080P";
  if (fn.indexOf("720") !== -1) return "720P";
  return "";
}

async function buildStreamSources(token, file) {
  if (!file || !file.fileId || !isVideoFile(file.filename)) return [];
  var url = await getDownloadUrl(token, file.fileId);
  if (!url) return [];

  var label = guessQualityLabel(file.filename);
  var number = extractNumber(file.filename);
  return [{
    name: "光鸭云盘" + (label ? " (" + label + ")" : ""),
    description: (number ? "番号: " + number + "\n" : "") +
      "文件: " + file.filename +
      (file.size ? "\n大小: " + formatSize(file.size) : ""),
    url: url,
    customHeaders: { Referer: SITE_ORIGIN + "/", "User-Agent": UA }
  }];
}

// ==================== 番号提取（与 115 番号模块一致） ====================
function extractNumber(text) {
  var s = getText(text).toUpperCase();
  if (!s) return "";
  s = s.replace(/^[A-Z0-9]+(?:\.[A-Z0-9]+)+@/, "");
  s = s.replace(/^(?:HHD800|HHB800)[_\-@.\s]?/, "");
  var normalized = s.replace(/_/g, "-").replace(/\s+/g, " ").trim();
  var patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?(\d{5,8})\b/,
    /\bCARIB[- ]?(\d{6,8})\b/,
    /\b1PONDO[- ]?(\d{6,8})\b/,
    /\bHEYZO[- ]?(\d{3,6})\b/,
    /\bT28[- ]?(\d{6,8})\b/,
    /\b([A-Z]{2,15})[- ]?(\d{2,10})\b/,
    /\b(\d{6}[-_]\d{2,3})\b/
  ];
  for (var i = 0; i < patterns.length; i++) {
    var match = normalized.match(patterns[i]);
    if (match) {
      if (match[1] && match[2]) return match[1] + "-" + match[2];
      if (match[1]) return match[1].replace(/\s+/g, "");
    }
  }
  return "";
}

var WESTERN_NOISE = /\b(?:xxx|1080p|2160p|4k|mp4|mkv|x264|x265|hevc|web-dl|webdl|ktr|n1c)\b/gi;

function extractWesternSceneKey(text) {
  var s = getText(text).toLowerCase();
  if (!s) return null;
  s = s.replace(WESTERN_NOISE, "");
  var clean = s.replace(/[_\s:]+/g, ".").replace(/\.+/g, ".").replace(/^\.|\.$/g, "").trim();
  if (!clean) return null;
  var dateMatch = clean.match(/(\d{2})[-.](\d{2})[-.](\d{2})/);
  if (!dateMatch) return null;
  var dateStr = dateMatch[0];
  var dateIndex = dateMatch.index || 0;
  var beforeRaw = clean.slice(0, dateIndex).replace(/\.+$/, "").replace(/^\.+/, "");
  var beforeParts = beforeRaw.split(".").filter(Boolean);
  var studio = beforeParts.length ? beforeParts[beforeParts.length - 1] : "";
  var afterRaw = clean.slice(dateIndex + dateStr.length).replace(/^\.+/, "").replace(/\.+$/, "");
  var performerParts = afterRaw.split(".").filter(Boolean);
  if (!studio || !performerParts.length) return null;
  return {
    type: "western",
    key: studio + "." + dateStr + "." + performerParts.join("."),
    searchText: studio,
    strictTarget: (studio + dateStr.replace(/\./g, "") + performerParts.join(".")).replace(/[^a-z0-9]/g, "")
  };
}

function extractWesternDateKey(text) {
  var s = getText(text).toLowerCase();
  if (!s) return null;
  s = s.replace(WESTERN_NOISE, "");
  var clean = s.replace(/[_\s:]+/g, ".").replace(/\.+/g, ".").replace(/^\.|\.$/g, "").trim();
  var dateMatch = clean.match(/(\d{2})[-.](\d{2})[-.](\d{2})/);
  if (!dateMatch) return null;
  var dateStr = dateMatch[0];
  var studio = clean.slice(0, dateMatch.index || 0).replace(/\.+$/, "").split(".").filter(Boolean).pop() || "";
  if (!studio) return null;
  return {
    type: "western_date",
    key: studio + "." + dateStr,
    searchText: studio,
    strictTarget: (studio + dateStr.replace(/\./g, "")).replace(/[^a-z0-9]/g, ""),
    displayTitle: studio + " " + dateStr
  };
}

function extractMatchKey(text) {
  var number = extractNumber(text);
  if (number) return { type: "jav", key: number, searchText: number };
  var western = extractWesternSceneKey(text);
  if (western) return western;
  var dateKey = extractWesternDateKey(text);
  if (dateKey) return dateKey;
  return null;
}

function scoreWesternFile(file) {
  var fn = String(file.filename || "").toLowerCase();
  var score = 0;
  if (fn.indexOf("trailer") !== -1 || fn.indexOf("sample") !== -1 || fn.indexOf("preview") !== -1) score -= 100;
  var size = Number(file.size || 0);
  if (size >= 2 * 1024 * 1024 * 1024) score += 30;
  else if (size >= 1024 * 1024 * 1024) score += 20;
  else if (size < 50 * 1024 * 1024) score -= 20;
  return score;
}

function displayTitleFromFile(filename) {
  var number = extractNumber(filename);
  if (number) return number;
  var name = String(filename || "").replace(/\.[^.]+$/, "");
  return name.length > 50 ? name.slice(0, 50) + "..." : name;
}

// ==================== 浏览项构建 ====================
function cacheFile(file) {
  if (file && file.fileId) {
    FILE_ID_MAP[file.fileId] = {
      fileId: file.fileId,
      filename: file.filename,
      size: file.size
    };
  }
}

function buildBrowseItem(file) {
  cacheFile(file);
  if (file.isDir) {
    return {
      id: file.fileId,
      type: "url",
      title: file.filename,
      link: "guangyafolder://" + file.fileId,
      description: "文件夹",
      mediaType: "movie"
    };
  }
  var title = displayTitleFromFile(file.filename);
  return {
    id: file.fileId,
    type: "url",
    title: title,
    link: "guangyadetail://" + file.fileId,
    description: formatSize(file.size),
    mediaType: "movie"
  };
}

function needTokenItem() {
  return [{
    id: "no-token",
    type: "url",
    title: "需要光鸭 Refresh Token",
    description: "请在全局参数中填入 refresh_token",
    mediaType: "movie",
    link: ""
  }];
}

// ==================== 入口 ====================
async function searchGuangyaJav(params) {
  try {
    var token = await ensureToken(params);
    var keyword = getText(params.keyword);
    if (!keyword) return [];

    var files = await searchFiles(token, keyword, params.page, 50);
    var items = [];
    for (var i = 0; i < files.length; i++) {
      if (files[i].isDir || isVideoFile(files[i].filename)) {
        items.push(buildBrowseItem(files[i]));
      }
    }
    return items;
  } catch (err) {
    console.error("[guangya-jav/search]", err && err.message || err);
    if (String(err && err.message || "").indexOf("refresh_token") !== -1) return needTokenItem();
    return [];
  }
}

async function loadFolder(params) {
  try {
    var token = await ensureToken(params);
    var parentId = getText(params.parentId);
    var files = await listFolder(token, parentId, params.page, 100);
    var items = [];
    for (var i = 0; i < files.length; i++) {
      if (files[i].isDir || isVideoFile(files[i].filename)) {
        items.push(buildBrowseItem(files[i]));
      }
    }
    return items;
  } catch (err) {
    console.error("[guangya-jav/folder]", err && err.message || err);
    if (String(err && err.message || "").indexOf("refresh_token") !== -1) return needTokenItem();
    return [];
  }
}

async function loadDetail(link) {
  var clean = String(link || "");
  if (clean.indexOf("guangyafolder://") === 0) {
    var parentId = clean.slice("guangyafolder://".length).split("?")[0];
    return await loadFolder({ parentId: parentId, page: 1, refresh_token: Widget.storage.get("guangya_refresh_token") });
  }
  if (clean.indexOf("guangyadetail://") === 0) {
    var fileId = clean.slice("guangyadetail://".length).split("?")[0];
    var cached = FILE_ID_MAP[fileId] || { fileId: fileId, filename: "光鸭视频" };
    return {
      id: fileId,
      type: "url",
      title: displayTitleFromFile(cached.filename),
      link: clean,
      description: cached.filename,
      mediaType: "movie"
    };
  }
  return null;
}

async function handleDirectFileResource(params, link) {
  var token = await ensureToken(params);
  var fileId = link.slice("guangyadetail://".length).split("?")[0];
  var cached = FILE_ID_MAP[fileId] || {};
  var file = {
    fileId: fileId,
    filename: cached.filename || params.title || params.name || "video.mp4",
    size: cached.size || 0
  };
  return await buildStreamSources(token, file);
}

async function loadResource(params) {
  var link = String(params && params.link || "");

  if (link.indexOf("guangyadetail://") === 0) {
    try {
      return await handleDirectFileResource(params, link);
    } catch (err) {
      console.error("[guangya-jav/direct]", err && err.message || err);
      return [];
    }
  }

  try {
    var token = await ensureToken(params);
    var texts = [];
    if (params.title) texts.push(params.title);
    if (params.name) texts.push(params.name);
    if (params.originalTitle) texts.push(params.originalTitle);
    if (params.id) texts.push(params.id);
    if (params.link) texts.push(params.link);
    if (params.description) texts.push(params.description);
    if (params.episodeName) texts.push(params.episodeName);

    var matchKey = extractMatchKey(texts.join(" "));
    if (!matchKey) return [];

    var files = await searchFiles(token, matchKey.searchText, 1, 50);
    if (!files.length) return [];

    var matched = [];
    if (matchKey.type === "jav") {
      var target = matchKey.key.replace(/[^a-z0-9]/gi, "").toLowerCase();
      for (var mi = 0; mi < files.length; mi++) {
        var fn = String(files[mi].filename).replace(/[^a-z0-9]/gi, "").toLowerCase();
        if (fn.indexOf(target) !== -1) matched.push(files[mi]);
      }
    } else {
      var strict = matchKey.strictTarget;
      for (var wi = 0; wi < files.length; wi++) {
        var wfn = String(files[wi].filename).replace(/[^a-z0-9]/gi, "").toLowerCase();
        if (wfn.indexOf(strict) !== -1) matched.push(files[wi]);
      }
      if (matchKey.type === "western_date" && matched.length > 1) {
        matched.sort(function (a, b) { return scoreWesternFile(b) - scoreWesternFile(a); });
        matched = matched.filter(function (f) { return scoreWesternFile(f) >= 0; });
        if (!matched.length) matched = [files[0]];
      }
    }

    if (!matched.length) return [];

    var streams = [];
    for (var si = 0; si < matched.length; si++) {
      if (!isVideoFile(matched[si].filename)) continue;
      var part = await buildStreamSources(token, matched[si]);
      if (part.length) streams = streams.concat(part);
      if (streams.length >= 3) break;
    }
    return streams;
  } catch (err) {
    console.error("[guangya-jav/stream]", err && err.message || err);
    return [];
  }
}

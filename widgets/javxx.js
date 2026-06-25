WidgetMetadata = {
  id: "forward.javxx",
  title: "JavXX",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  description: "JavXX \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u70ed\u95e8\u5f71\u7247\u3001\u6700\u65b0\u5f71\u7247\u3001\u6700\u8fd1\u66f4\u65b0\u3001\u6709\u7801\u5f71\u7247\u3001\u65e0\u7801\u5f71\u7247\u3001\u641c\u7d22",
  author: "Forward",
  site: "https://123av.com",
  detailCacheDuration: 300,
  modules: [
    {
      id: "hot",
      title: "\u70ed\u95e8\u5f71\u7247",
      functionName: "loadHot",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "new",
      title: "\u6700\u65b0\u5f71\u7247",
      functionName: "loadNew",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "recent",
      title: "\u6700\u8fd1\u66f4\u65b0",
      functionName: "loadRecent",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "censored",
      title: "\u6709\u7801\u5f71\u7247",
      functionName: "loadCensored",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "uncensored",
      title: "\u65e0\u7801\u5f71\u7247",
      functionName: "loadUncensored",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    }
  ],
  search: {
    title: "\u641c\u7d22",
    functionName: "search",
    params: [
      { name: "keyword", title: "\u5173\u952e\u8bcd", type: "input" },
      { name: "page", title: "\u9875\u7801", type: "page" }
    ]
  }
};

const BASE_URL = "https://123av.com";
const LANG_PREFIX = "/cn";
const SURRIT_BASE = "https://surrit.store";
const XOR_KEY = "G9zhUyphqPWZGWzZ";
const AES_KEY = "ym1eS4t0jTLakZYQ";
const STREAM_SOURCES = ["123av", "javxx"];
const VIDEO_CACHE_TTL = 3600;
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://123av.com/"
};
const CATEGORY_MAP = {
  hot: "/hot",
  new: "/new",
  recent: "/recent",
  censored: "/censored",
  uncensored: "/uncensored"
};

function isMigrationPage(html) {
  return /We have moved to 123av\.com|我们已迁移至 123av\.com|Please remember our new domain and update/i.test(String(html || ""));
}

function resolveUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return BASE_URL + "/" + href;
}

function normalizeImageUrl(url) {
  if (!url) return "";
  url = String(url).trim();
  if (url.startsWith("//")) return "https:" + url;
  if (url.startsWith("/")) return BASE_URL + url;
  return url;
}

function isValidImageUrl(url) {
  if (!url || !url.startsWith("http")) return false;
  if (/placeholder|loading|blank|data:image|1x1|spacer|avatar/i.test(url)) return false;
  return /\.(webp|jpg|jpeg|png|gif)(\?|$)/i.test(url) || url.includes("icdn.");
}

function upgradeCoverUrl(url) {
  if (!url) return "";
  return normalizeImageUrl(url)
    .replace(/\/s360\//i, "/s1080/")
    .replace(/\/s480\//i, "/s1080/")
    .replace(/\/s720\//i, "/s1080/");
}

function pickImageUrl($img) {
  if (!$img || !$img.length) return "";
  const attrs = ["data-src", "data-original", "data-lazy-src", "srcset", "src"];
  for (let i = 0; i < attrs.length; i++) {
    let val = $img.attr(attrs[i]) || "";
    if (val.includes(",")) val = val.split(",")[0].trim().split(/\s+/)[0];
    val = normalizeImageUrl(val);
    if (isValidImageUrl(val)) return upgradeCoverUrl(val);
  }
  return "";
}

function extractCoverFromHtml(html) {
  if (!html) return "";
  const og1 = String(html).match(/property=["']og:image["']\s+content=["']([^"']+)["']/i);
  const og2 = String(html).match(/content=["']([^"']+)["']\s+property=["']og:image["']/i);
  const og = (og1 && og1[1]) || (og2 && og2[1]) || "";
  if (og && isValidImageUrl(normalizeImageUrl(og))) return upgradeCoverUrl(og);

  const ogBase = String(html).match(/og:image["']\s+content=["'](.*?)cover-n\.jpg/i);
  if (ogBase && ogBase[1]) return upgradeCoverUrl(ogBase[1] + "cover-n.jpg");

  const icdn = String(html).match(/https?:\/\/icdn[^"'\s<>]+cover(?:-n)?\.(?:webp|jpg|jpeg)/i);
  if (icdn) return upgradeCoverUrl(icdn[0]);

  return "";
}

function collectBackdropPaths(html, primaryCover) {
  const paths = [];
  const seen = new Set();
  function add(url) {
    const u = upgradeCoverUrl(normalizeImageUrl(url));
    if (!isValidImageUrl(u) || seen.has(u)) return;
    seen.add(u);
    paths.push(u);
  }
  if (primaryCover) add(primaryCover);
  const re = /https?:\/\/icdn[^"'\s<>]+cover(?:-n)?\.(?:webp|jpg|jpeg)/gi;
  let m;
  while ((m = re.exec(String(html || ""))) && paths.length < 12) add(m[0]);
  return paths.length > 0 ? paths : undefined;
}

function sanitizeDurationText(text) {
  if (!text) return undefined;
  const t = String(text).trim();
  return /^\d{1,2}:\d{2}(:\d{2})?$/.test(t) ? t : undefined;
}

function readVideoCache(link) {
  try {
    const raw = Widget.storage.get("vurl:v2:" + String(link));
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (data && data.videoUrl && data.ts && Date.now() - data.ts < VIDEO_CACHE_TTL * 1000) return data;
  } catch (e) {}
  return null;
}

function writeVideoCache(link, videoUrl, customHeaders) {
  if (!videoUrl) return;
  try {
    Widget.storage.set("vurl:v2:" + String(link), JSON.stringify({ videoUrl, customHeaders, ts: Date.now() }));
  } catch (e) {}
}

function buildPlayHeaders(videoUrl) {
  const base = videoUrl && videoUrl.includes("surrit")
    ? { "User-Agent": HEADERS["User-Agent"], "Origin": "https://surrit.store", "Referer": "https://surrit.store/" }
    : { "User-Agent": HEADERS["User-Agent"], "Referer": "https://123av.com/", "Origin": "https://123av.com" };
  return Object.assign({ "Accept": "*/*", "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8" }, base);
}

function resolveAbsoluteUrl(base, ref) {
  if (!ref) return "";
  if (ref.startsWith("http")) return ref;
  if (ref.startsWith("//")) return "https:" + ref;
  if (ref.startsWith("/")) {
    const origin = String(base).match(/^(https?:\/\/[^/]+)/);
    return origin ? origin[1] + ref : ref;
  }
  const root = String(base).substring(0, String(base).lastIndexOf("/") + 1);
  return root + ref;
}

function parseStreamBandwidth(line) {
  const m = String(line).match(/BANDWIDTH=(\d+)/i);
  return m ? Number(m[1]) : 0;
}

async function optimizeM3u8Url(url, headers, depth) {
  if (!url || !/\.m3u8(\?|$)/i.test(url) || depth > 2) return url;
  try {
    const res = await Widget.http.get(url, { headers });
    const text = typeof res.data === "string" ? res.data : String(res.data || "");
    if (!text.includes("#EXTM3U")) return url;
    const lines = text.split(/\r?\n/);
    const variants = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line.startsWith("#EXT-X-STREAM-INF")) continue;
      const next = (lines[i + 1] || "").trim();
      if (next && !next.startsWith("#")) variants.push({ bw: parseStreamBandwidth(line), url: resolveAbsoluteUrl(url, next) });
    }
    if (variants.length === 0) return url;
    variants.sort((a, b) => a.bw - b.bw);
    const picked = variants.length > 1 ? variants[1] : variants[0];
    return await optimizeM3u8Url(picked.url, headers, depth + 1);
  } catch (e) {
    return url;
  }
}

async function finalizeVideoUrl(url, headers) {
  if (!url) return "";
  if (/\.mp4(\?|$)/i.test(url)) return url;
  if (/\.m3u8(\?|$)/i.test(url)) return await optimizeM3u8Url(url, headers, 0);
  return url;
}

function b64Decode(str) {
  const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const indices = {};
  for (let i = 0; i < map.length; i++) indices[map[i]] = i;
  const pos = str.indexOf("=");
  const padded = pos > -1;
  const len = padded ? pos : str.length;
  let i = -1;
  let data = "";
  while (i < len) {
    const code = (indices[str[++i]] << 18) | (indices[str[++i]] << 12) | (indices[str[++i]] << 6) | indices[str[++i]];
    if (code !== 0) data += String.fromCharCode((code >>> 16) & 255, (code >>> 8) & 255, code & 255);
  }
  if (padded) data = data.slice(0, pos - str.length);
  return data;
}

function xorDecode(encoded, key) {
  const decoded = b64Decode(encoded);
  let result = "";
  for (let i = 0; i < decoded.length; i++) {
    result += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return decodeURIComponent(result);
}

function xorEncrypt(input, key) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    result.push(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  const bytes = new Uint8Array(result);
  const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let b64 = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const b0 = bytes[i];
    const b1 = i + 1 < bytes.length ? bytes[i + 1] : 0;
    const b2 = i + 2 < bytes.length ? bytes[i + 2] : 0;
    b64 += map[(b0 >> 2) & 0x3F];
    b64 += map[((b0 << 4) | (b1 >> 4)) & 0x3F];
    b64 += i + 1 < bytes.length ? map[((b1 << 2) | (b2 >> 6)) & 0x3F] : "=";
    b64 += i + 2 < bytes.length ? map[b2 & 0x3F] : "=";
  }
  return b64;
}

function extractM3u8FromHtml(html) {
  const m = String(html || "").match(/'m3u8([\s\S]*?)video/);
  if (!m) return "";
  try {
    const parts = m[1].split("|").reverse();
    if (parts.length >= 9) {
      return `${parts[1]}://${parts[2]}.${parts[3]}/${parts[4]}-${parts[5]}-${parts[6]}-${parts[7]}-${parts[8]}/playlist.m3u8`;
    }
  } catch (e) {}
  return "";
}

async function resolveSurritStream(videoId, surritBase, srcName) {
  const token = encodeURIComponent(xorEncrypt(videoId, AES_KEY));
  const streamHeaders = {
    ...HEADERS,
    "Referer": `${surritBase}/e/${videoId}?src=${srcName}`,
    "X-Requested-With": "XMLHttpRequest",
  };
  const streamRes = await Widget.http.get(`${surritBase}/stream?src=${srcName}&token=${token}`, { headers: streamHeaders });
  let streamJson = streamRes.data;
  if (typeof streamJson === "string") streamJson = JSON.parse(streamJson);
  const media = streamJson && streamJson.result && streamJson.result.media;
  if (!media) return "";
  const parsed = JSON.parse(xorDecode(media, AES_KEY));
  return parsed.stream || parsed.mp4 || "";
}

async function resolveSurritStreamAny(videoId, surritBase) {
  for (let i = 0; i < STREAM_SOURCES.length; i++) {
    try {
      const url = await resolveSurritStream(videoId, surritBase, STREAM_SOURCES[i]);
      if (url) return url;
    } catch (e) {}
  }
  return "";
}

function parseVideoList(html) {
  if (!html || isMigrationPage(html)) return [];
  const $ = Widget.html.load(html);
  const items = [];
  const seen = new Set();

  function pushItem(href, title, cover, duration) {
    if (!href || !title) return;
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) return;
    seen.add(detailLink);
    const coverUrl = upgradeCoverUrl(cover) || undefined;
    const item = {
      id: href,
      type: "url",
      title: String(title).trim(),
      backdropPath: coverUrl,
      posterPath: coverUrl,
      link: detailLink,
      mediaType: "movie",
    };
    const durationText = sanitizeDurationText(duration);
    if (durationText) item.durationText = durationText;
    items.push(item);
  }

  $(".vid-items > div.item").each((_, el) => {
    const $el = $(el);
    const href = $el.find(".title").attr("href") || $el.find("a[href*='/v/']").attr("href") || "";
    const title = $el.find(".title").text().trim() || $el.find("img").attr("alt") || "";
    const cover = pickImageUrl($el.find(".image img, img").first()) || extractCoverFromHtml($el.html());
    const duration = $el.find(".duration").text().trim() || "";
    pushItem(href, title, cover, duration);
  });

  $("div.thumbnail").each((_, el) => {
    const $el = $(el);
    const $a = $el.find('a[href*="/v/"]').first();
    const href = $a.attr("href") || "";
    const $img = $el.find("img").first();
    const cover = pickImageUrl($img) || extractCoverFromHtml($el.html());
    const title = $img.attr("alt") || $a.attr("title") || $el.find(".truncate, h2").first().text().trim();
    const duration = $el.find(".absolute.bottom-1, .duration, .text-nord9").first().text().trim();
    pushItem(href, title, cover, duration);
  });

  if (items.length === 0) {
    $('a[href*="/v/"]').each((_, el) => {
      const $a = $(el);
      const href = $a.attr("href") || "";
      if (!/\/v\//.test(href)) return;
      const $scope = $a.closest("div.thumbnail, div.item, article, .group");
      const $img = $scope.length ? $scope.find("img").first() : $a.find("img").first();
      const title = ($img.attr("alt") || $a.attr("title") || $a.text().trim() || "").trim();
      const cover = pickImageUrl($img) || extractCoverFromHtml($scope.html() || $a.html());
      pushItem(href, title, cover, "");
    });
  }

  return items;
}

async function fetchHtml(pathOrUrl) {
  const url = pathOrUrl.startsWith("http") ? pathOrUrl : `${BASE_URL}${LANG_PREFIX}${pathOrUrl}`;
  const res = await Widget.http.get(url, { headers: HEADERS });
  return { url, html: res.data || "" };
}

async function loadCategory(categoryId, params) {
  if (params.genreId) return loadGenreList(params);
  const page = Number(params.page || 1);
  const path = CATEGORY_MAP[categoryId] || "/new";
  let url = `${BASE_URL}${LANG_PREFIX}${path}`;
  if (page > 1) url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  try {
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadGenreList(params) {
  const genreId = String(params.genreId || "").trim();
  if (!genreId) return [];
  const page = Number(params.page || 1);
  let url = genreId.startsWith("http") ? genreId : resolveUrl(genreId);
  if (url.includes("javxx.com")) url = url.replace("https://javxx.com", BASE_URL).replace("http://javxx.com", BASE_URL);
  if (page > 1) url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  try {
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadHot(params) { return loadCategory("hot", params); }
async function loadNew(params) { return loadCategory("new", params); }
async function loadRecent(params) { return loadCategory("recent", params); }
async function loadCensored(params) { return loadCategory("censored", params); }
async function loadUncensored(params) { return loadCategory("uncensored", params); }

async function resolveVideoUrl(html, detailUrl) {
  let videoUrl = extractM3u8FromHtml(html);
  const $ = Widget.html.load(html);

  if (!videoUrl) {
    const dataUrl = $("#video-files div").attr("data-url") || $("[data-url*='surrit']").attr("data-url") || "";
    if (dataUrl) {
      try {
        const decodedUrl = xorDecode(dataUrl, XOR_KEY);
        const videoId = decodedUrl.replace(/https?:\/\/[^/]+/, "").split("/").filter(Boolean).pop() || "";
        if (videoId) videoUrl = await resolveSurritStreamAny(videoId, SURRIT_BASE);
      } catch (e) {}
    }
  }

  if (!videoUrl) {
    $("script").each((_, el) => {
      const content = $(el).html() || "";
      if (content.includes(".mp4")) {
        const match = content.match(/https?:\/\/[\w./-]+\.mp4[\w./-]*/);
        if (match) { videoUrl = match[0]; return false; }
      }
    });
  }
  if (!videoUrl) {
    $("script").each((_, el) => {
      const content = $(el).html() || "";
      if (content.includes(".m3u8")) {
        const match = content.match(/https?:\/\/[\w./-]+\.m3u8[\w./-]*/);
        if (match) { videoUrl = match[0]; return false; }
      }
    });
  }
  if (!videoUrl) {
    videoUrl = $('video source[type="video/mp4"]').attr("src") || $("video source").attr("src") || $("video").attr("src") || "";
  }
  if (videoUrl && videoUrl.startsWith("//")) videoUrl = "https:" + videoUrl;

  if (!videoUrl) {
    const embedMatch = html.match(/https?:\/\/surrit\.\w+\/e\/[a-zA-Z0-9_]+/);
    if (embedMatch) {
      const surritBase = embedMatch[0].replace(/\/e\/.*/, "");
      const vidMatch = embedMatch[0].match(/\/e\/([a-zA-Z0-9_]+)/);
      if (vidMatch && vidMatch[1]) {
        try { videoUrl = await resolveSurritStreamAny(vidMatch[1], surritBase); } catch (e) {}
      }
    }
  }

  if (videoUrl && !videoUrl.startsWith("http")) videoUrl = "";
  return videoUrl;
}

async function loadDetail(link) {
  try {
    let detailUrl = String(link).startsWith("http") ? String(link) : resolveUrl(String(link));
    if (detailUrl.includes("javxx.com")) detailUrl = detailUrl.replace("https://javxx.com", BASE_URL).replace("http://javxx.com", BASE_URL);

    const cached = readVideoCache(detailUrl);
    const res = await Widget.http.get(detailUrl, { headers: HEADERS });
    const html = res.data || "";
    if (isMigrationPage(html)) return null;

    const $ = Widget.html.load(html);
    const title = $("h1").first().text().trim()
      || $('meta[property="og:title"]').attr("content")
      || $("title").text().trim()
      || "";
    let cover = extractCoverFromHtml(html)
      || pickImageUrl($(".video-cover img, .movie-cover img, .image img, img[data-src*='icdn'], img[src*='icdn']").first())
      || pickImageUrl($("video").first());

    let videoUrl = cached ? cached.videoUrl : "";
    let playHeaders = cached ? cached.customHeaders : null;

    if (!videoUrl) {
      videoUrl = await resolveVideoUrl(html, detailUrl);
      if (videoUrl) {
        playHeaders = buildPlayHeaders(videoUrl);
        videoUrl = await finalizeVideoUrl(videoUrl, playHeaders);
        writeVideoCache(detailUrl, videoUrl, playHeaders);
      }
    }
    if (!playHeaders) playHeaders = buildPlayHeaders(videoUrl);

    const genreItems = [];
    $("a[href*='/genres/'], a[href*='/tags/'], a[href*='/tag/']").each((_, el) => {
      const $a = $(el);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href && /\/(genres|tags|tag)\//.test(href)) genreItems.push({ id: href, title: text });
    });

    const relatedItems = [];
    const seenRelated = new Set([detailUrl]);
    $(".vid-items > div.item, div.thumbnail, .related-videos article").each((_, el) => {
      if (relatedItems.length >= 8) return false;
      const $el = $(el);
      const $rLink = $el.find(".title, a[href*='/v/']").first();
      const rHref = $rLink.attr("href") || "";
      const rDetailLink = resolveUrl(rHref);
      if (!rDetailLink || seenRelated.has(rDetailLink)) return;
      seenRelated.add(rDetailLink);
      const rTitle = $rLink.text().trim() || $el.find("img").attr("alt") || "\u76f8\u5173\u5f71\u7247";
      const rCover = pickImageUrl($el.find("img").first()) || extractCoverFromHtml($el.html());
      relatedItems.push({
        id: rHref,
        type: "url",
        title: rTitle,
        backdropPath: rCover || undefined,
        posterPath: rCover || undefined,
        link: rDetailLink,
        mediaType: "movie",
      });
    });

    const backdropPaths = collectBackdropPaths(html, cover);
    if (!cover && backdropPaths && backdropPaths.length > 0) cover = backdropPaths[0];

    return {
      id: link,
      type: "url",
      title,
      backdropPath: cover || undefined,
      posterPath: cover || undefined,
      backdropPaths,
      videoUrl: videoUrl || "",
      playerType: "system",
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      link: detailUrl,
      mediaType: "movie",
      customHeaders: playHeaders
    };
  } catch (e) {
    return null;
  }
}

async function search(params) {
  if (params.genreId) return loadGenreList(params);
  const keyword = params.keyword || "";
  const page = Number(params.page || 1);
  if (!keyword) return [];
  try {
    let url = `${BASE_URL}${LANG_PREFIX}/search/?keyword=${encodeURIComponent(keyword)}`;
    if (page > 1) url += `&page=${page}`;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

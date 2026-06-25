WidgetMetadata = {
  id: "forward.youtube",
  title: "油管",
  version: "1.2.1",
  requiredVersion: "0.0.1",
  description: "YouTube 视频源，支持推荐、热门、分类频道与搜索",
  author: "Forward",
  site: "https://www.youtube.com",
  detailCacheDuration: 300,
  globalParams: [
    {
      name: "cookie",
      title: "Cookie（粘贴 Cookie 值，不要带 Cookie: 前缀）",
      type: "input",
      value: "",
    },
    {
      name: "authorization",
      title: "Authorization（一般留空，有 Cookie 会自动生成）",
      type: "input",
      value: "",
    },
    {
      name: "follows",
      title: "订阅频道 JSON",
      type: "input",
      value:
        '[{"name":"徐雅","code":"@e_seoa"},{"name":"陈一发儿","code":"@chenyifaer","type":"vod"}]',
    },
  ],
  modules: [
    {
      id: "home",
      title: "推荐",
      functionName: "loadHome",
      cacheDuration: 1800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      id: "trending",
      title: "热门",
      functionName: "loadTrending",
      cacheDuration: 3600,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      id: "music",
      title: "音乐",
      functionName: "loadMusic",
      cacheDuration: 3600,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      id: "gaming",
      title: "游戏",
      functionName: "loadGaming",
      cacheDuration: 3600,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      id: "news",
      title: "新闻",
      functionName: "loadNews",
      cacheDuration: 3600,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      id: "sports",
      title: "体育",
      functionName: "loadSports",
      cacheDuration: 3600,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      id: "movies",
      title: "电影",
      functionName: "loadMovies",
      cacheDuration: 3600,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      id: "follow",
      title: "订阅",
      functionName: "loadFollow",
      cacheDuration: 3600,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
  ],
  search: {
    title: "搜索",
    functionName: "search",
    params: [
      { name: "keyword", title: "关键词", type: "input" },
      { name: "page", title: "页码", type: "page" },
    ],
  },
};

const SITE = "https://www.youtube.com";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const IOS_UA =
  "com.google.ios.youtube/19.45.4 (iPhone14,3; U; CPU iOS 17_0 like Mac OS X)";
const ANDROID_UA =
  "com.google.android.youtube/19.45.37 (Linux; U; Android 13) gzip";
const FALLBACK_API_KEY = "AIzaSyB-63vPrdThhKuerbB2N_l7Kwwcxj6yUAc";
const STORAGE_KEY = "yt:";
const PAGE_SIZE = 30;
const VIDEO_CACHE_TTL = 3600;

const BROWSE_MAP = {
  home: "FEwhat_to_watch",
  trending: "FEtrending",
  music: "FEmusic",
  gaming: "FEgaming",
  news: "FEnews",
  sports: "FEsports",
  movies: "FEmovies_and_shows",
};

const HTML_FEEDS = {
  trending: "/feed/trending",
  music: "/feed/music",
  gaming: "/gaming",
  news: "/feed/news",
  sports: "/feed/sports",
  movies: "/feed/storefront",
};

const SEARCH_FALLBACK = {
  home: "最新 推荐",
  trending: "trending",
  music: "music",
  gaming: "gaming",
  news: "news",
  sports: "sports",
  movies: "movie trailer",
};

const DEFAULT_CONTEXT = {
  client: {
    clientName: "WEB",
    clientVersion: "2.20241218.01.00",
    hl: "zh-CN",
    gl: "HK",
    userAgent: UA,
    timeZone: "Asia/Shanghai",
    utcOffsetMinutes: 480,
    originalUrl: "https://www.youtube.com/",
  },
  user: { lockedSafetyMode: false },
  request: { useSsl: true },
};

const PLAYER_CLIENTS = [
  {
    clientName: "TVHTML5_SIMPLY_EMBEDDED_PLAYER",
    clientVersion: "2.0",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    clientNameHeader: "85",
  },
  {
    clientName: "IOS",
    clientVersion: "19.45.4",
    userAgent: IOS_UA,
    clientNameHeader: "5",
    deviceModel: "iPhone14,3",
  },
  {
    clientName: "ANDROID",
    clientVersion: "19.45.37",
    userAgent: ANDROID_UA,
    clientNameHeader: "3",
    androidSdkVersion: 33,
  },
  {
    clientName: "TVHTML5",
    clientVersion: "7.20241218.00.00",
    userAgent:
      "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version/gfx-goltron-impl",
    clientNameHeader: "7",
  },
  {
    clientName: "MWEB",
    clientVersion: "2.20241218.01.00",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    clientNameHeader: "2",
  },
  {
    clientName: "WEB",
    clientVersion: "2.20241218.01.00",
    userAgent: UA,
    clientNameHeader: "1",
  },
];

const PLAY_HEADERS = {
  "User-Agent": UA,
  Referer: "https://www.youtube.com/",
  Origin: "https://www.youtube.com",
  Accept: "*/*",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
};

function storageGet(key) {
  return Widget.storage.get(STORAGE_KEY + key);
}

function storageSet(key, value) {
  Widget.storage.set(STORAGE_KEY + key, value);
}

function parseStoredJson(raw) {
  if (!raw) return null;
  if (typeof raw === "object") return raw;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function parseFollows(params) {
  const raw = params && params.follows;
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  const parsed = parseStoredJson(raw);
  return Array.isArray(parsed) ? parsed : [];
}

function normalizeCookie(raw) {
  if (!raw) return "";
  let cookie = String(raw).trim();
  if (/^cookie\s*:/i.test(cookie)) {
    cookie = cookie.replace(/^cookie\s*:/i, "").trim();
  }
  return cookie;
}

function getCookieValue(cookie, name) {
  if (!cookie) return "";
  const parts = cookie.split(";");
  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i].trim();
    const eq = seg.indexOf("=");
    if (eq <= 0) continue;
    const key = seg.slice(0, eq).trim();
    if (key === name) return decodeURIComponent(seg.slice(eq + 1));
  }
  return "";
}

function sha1Hex(message) {
  const str = unescape(encodeURIComponent(String(message)));
  const words = [];
  for (let i = 0; i < str.length; i++) {
    words[i >> 2] |= str.charCodeAt(i) << (24 - (i % 4) * 8);
  }
  words[str.length >> 2] |= 0x80 << (24 - (str.length % 4) * 8);
  words[(((str.length + 8) >> 6) << 4) + 15] = str.length * 8;

  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  let e = -1009589776;

  for (let i = 0; i < words.length; i += 16) {
    const oldA = a;
    const oldB = b;
    const oldC = c;
    const oldD = d;
    const oldE = e;
    const w = new Array(80);

    for (let t = 0; t < 16; t++) w[t] = words[i + t] | 0;
    for (let t = 16; t < 80; t++) {
      w[t] = ((w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16]) << 1) |
        ((w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16]) >>> 31);
    }

    for (let t = 0; t < 80; t++) {
      let f;
      let k;
      if (t < 20) {
        f = (b & c) | (~b & d);
        k = 1518500249;
      } else if (t < 40) {
        f = b ^ c ^ d;
        k = 1859775393;
      } else if (t < 60) {
        f = (b & c) | (b & d) | (c & d);
        k = -1894007588;
      } else {
        f = b ^ c ^ d;
        k = -899497514;
      }
      const temp =
        (((a << 5) | (a >>> 27)) + f + e + k + (w[t] | 0)) | 0;
      e = d;
      d = c;
      c = ((b << 30) | (b >>> 2)) | 0;
      b = a;
      a = temp;
    }

    a = (a + oldA) | 0;
    b = (b + oldB) | 0;
    c = (c + oldC) | 0;
    d = (d + oldD) | 0;
    e = (e + oldE) | 0;
  }

  function hex(val) {
    let out = "";
    for (let i = 7; i >= 0; i--) {
      out += ((val >>> (i * 4)) & 0x0f).toString(16);
    }
    return out;
  }

  return hex(a) + hex(b) + hex(c) + hex(d) + hex(e);
}

function buildSapisidHash(cookie) {
  const names = ["__Secure-3PAPISID", "__Secure-1PAPISID", "SAPISID"];
  let sapisid = "";
  for (let i = 0; i < names.length; i++) {
    sapisid = getCookieValue(cookie, names[i]);
    if (sapisid) break;
  }
  if (!sapisid) return "";
  const timestamp = Math.floor(Date.now() / 1000);
  const origin = "https://www.youtube.com";
  return (
    "SAPISIDHASH " +
    timestamp +
    "_" +
    sha1Hex(timestamp + " " + sapisid + " " + origin)
  );
}

function cacheAuthFromParams(params) {
  if (!params) return;
  const nextCookie = normalizeCookie(params.cookie || "");
  const prevCookie = storageGet("user_cookie") || "";
  if (nextCookie && nextCookie !== prevCookie) {
    storageSet("session_tag", "");
    storageSet("api_key", "");
    storageSet("context", "");
    storageSet("visitor_data", "");
  }
  if (nextCookie) storageSet("user_cookie", nextCookie);
  if (params.authorization) storageSet("user_authorization", params.authorization);
}

function getAuthParams() {
  return {
    cookie: storageGet("user_cookie") || "",
    authorization: storageGet("user_authorization") || "",
  };
}

function buildAuthHeaders(params) {
  const headers = { "User-Agent": UA };
  const auth = params || getAuthParams();
  const cookie = normalizeCookie(auth.cookie);
  if (cookie) headers.Cookie = cookie;
  let authorization = auth.authorization || "";
  if (!authorization && cookie) {
    authorization = buildSapisidHash(cookie);
  }
  if (authorization && authorization.indexOf("SAPISIDHASH") === 0) {
    headers.Authorization = authorization;
  } else if (authorization) {
    headers.Authorization = authorization;
  }
  return headers;
}

function readVideoCache(link) {
  try {
    const raw = Widget.storage.get("vurl:v2:" + String(link));
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (
      data &&
      data.videoUrl &&
      data.ts &&
      Date.now() - data.ts < VIDEO_CACHE_TTL * 1000
    ) {
      return data;
    }
  } catch (e) {}
  return null;
}

function writeVideoCache(link, videoUrl, customHeaders) {
  if (!videoUrl) return;
  try {
    Widget.storage.set(
      "vurl:v2:" + String(link),
      JSON.stringify({
        videoUrl,
        customHeaders,
        ts: Date.now(),
      })
    );
  } catch (e) {}
}

function b64EncodeBytes(bytes) {
  const map =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let result = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const b0 = bytes[i];
    const b1 = i + 1 < bytes.length ? bytes[i + 1] : 0;
    const b2 = i + 2 < bytes.length ? bytes[i + 2] : 0;
    result += map[b0 >> 2];
    result += map[((b0 & 3) << 4) | (b1 >> 4)];
    result += i + 1 < bytes.length ? map[((b1 & 15) << 2) | (b2 >> 6)] : "=";
    result += i + 2 < bytes.length ? map[b2 & 63] : "=";
  }
  return result;
}

function getSearchParam() {
  const d = new Uint8Array(50);
  let t = 0;
  let c = 0;
  d[t++] = 0x12;
  c = t++;
  d[t++] = 0x10;
  d[t++] = 2;
  d[c] = t - c - 1;
  return b64EncodeBytes(d.slice(0, t));
}

function thumbUrl(thumbnails, videoId) {
  if (thumbnails && thumbnails.length) {
    const last = thumbnails[thumbnails.length - 1];
    if (last && last.url) return last.url;
  }
  if (videoId) return "https://i.ytimg.com/vi/" + videoId + "/hqdefault.jpg";
  return "";
}

function bannerUrl(videoId) {
  return "https://i.ytimg.com/vi/" + videoId + "/maxresdefault.jpg";
}

function sanitizeDurationText(text) {
  if (!text) return undefined;
  const t = String(text).trim();
  return /^\d{1,2}:\d{2}(:\d{2})?$/.test(t) ? t : undefined;
}

function videoLink(videoId) {
  return "yt:" + videoId;
}

function channelLink(code, type) {
  const kind = type || "vod";
  return "yt-channel:" + encodeURIComponent(code) + ":" + kind;
}

function mapVideoRenderer(item) {
  if (!item || !item.videoId) return null;
  const videoId = item.videoId;
  const title =
    (item.title &&
      item.title.runs &&
      item.title.runs[0] &&
      item.title.runs[0].text) ||
    (item.headline && item.headline.simpleText) ||
    "";
  const pic = thumbUrl(item.thumbnail && item.thumbnail.thumbnails, videoId);
  const remarks =
    (item.publishedTimeText && item.publishedTimeText.simpleText) ||
    (item.viewCountText && item.viewCountText.simpleText) ||
    "";
  const durationText = sanitizeDurationText(
    (item.lengthText && item.lengthText.simpleText) ||
      (item.lengthText && item.lengthText.accessibility &&
        item.lengthText.accessibility.accessibilityData &&
        item.lengthText.accessibility.accessibilityData.label)
  );
  const mapped = {
    id: videoId,
    type: "url",
    title: title,
    backdropPath: pic || undefined,
    description: remarks || undefined,
    link: videoLink(videoId),
    mediaType: "movie",
  };
  if (durationText) mapped.durationText = durationText;
  return mapped;
}

function dedupeItems(items) {
  const seen = new Set();
  const out = [];
  items.forEach((item) => {
    if (!item || !item.id || seen.has(item.id)) return;
    seen.add(item.id);
    out.push(item);
  });
  return out;
}

function extractAllVideoRenderers(obj, out) {
  if (!obj || typeof obj !== "object") return;
  if (obj.videoRenderer && obj.videoRenderer.videoId) {
    const mapped = mapVideoRenderer(obj.videoRenderer);
    if (mapped) out.push(mapped);
    return;
  }
  if (obj.compactVideoRenderer && obj.compactVideoRenderer.videoId) {
    const mapped = mapVideoRenderer(obj.compactVideoRenderer);
    if (mapped) out.push(mapped);
    return;
  }
  if (obj.gridVideoRenderer && obj.gridVideoRenderer.videoId) {
    const mapped = mapVideoRenderer(obj.gridVideoRenderer);
    if (mapped) out.push(mapped);
    return;
  }
  if (
    obj.richItemRenderer &&
    obj.richItemRenderer.content &&
    obj.richItemRenderer.content.videoRenderer
  ) {
    const mapped = mapVideoRenderer(obj.richItemRenderer.content.videoRenderer);
    if (mapped) out.push(mapped);
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach(function (each) {
      extractAllVideoRenderers(each, out);
    });
    return;
  }
  Object.keys(obj).forEach(function (key) {
    extractAllVideoRenderers(obj[key], out);
  });
}

function mapRichGridVideos(videos) {
  const cards = [];
  if (!videos) return cards;
  videos.forEach((e) => {
    if (e.richItemRenderer && e.richItemRenderer.content) {
      const mapped = mapVideoRenderer(e.richItemRenderer.content.videoRenderer);
      if (mapped) cards.push(mapped);
    } else if (e.continuationItemRenderer) {
      const token =
        e.continuationItemRenderer.continuationEndpoint &&
        e.continuationItemRenderer.continuationEndpoint.continuationCommand &&
        e.continuationItemRenderer.continuationEndpoint.continuationCommand
          .token;
      if (token) storageSet("continuation_token", token);
    }
  });
  return cards;
}

function extractJsonObject(str, start) {
  if (!str || start < 0 || str.charAt(start) !== "{") return null;
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let i = start; i < str.length; i++) {
    const ch = str.charAt(i);
    if (inStr) {
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') {
      inStr = true;
      continue;
    }
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        try {
          return JSON.parse(str.slice(start, i + 1));
        } catch (e) {
          return null;
        }
      }
    }
  }
  return null;
}

function parseInitialData(html) {
  const markers = ["var ytInitialData = ", "window[\"ytInitialData\"] = "];
  for (let i = 0; i < markers.length; i++) {
    const idx = html.indexOf(markers[i]);
    if (idx >= 0) {
      const parsed = extractJsonObject(html, idx + markers[i].length);
      if (parsed) return parsed;
    }
  }
  let matches = html.match(/var ytInitialData = (.*?);<\/script>/);
  if (matches) {
    try {
      return JSON.parse(matches[1]);
    } catch (e) {}
  }
  matches = html.match(/var ytInitialData = (.*)}}};/);
  if (matches) {
    try {
      return JSON.parse(matches[1] + "}}}");
    } catch (e) {}
  }
  return null;
}

function saveContinuationFromData(data, storageKey) {
  const collected = [];
  extractAllVideoRenderers(data, collected);
  function walk(obj) {
    if (!obj || typeof obj !== "object") return;
    if (obj.continuationItemRenderer) {
      const token =
        obj.continuationItemRenderer.continuationEndpoint &&
        obj.continuationItemRenderer.continuationEndpoint.continuationCommand &&
        obj.continuationItemRenderer.continuationEndpoint.continuationCommand
          .token;
      if (token) storageSet(storageKey, token);
    }
    if (Array.isArray(obj)) {
      obj.forEach(walk);
      return;
    }
    Object.keys(obj).forEach(function (key) {
      walk(obj[key]);
    });
  }
  walk(data);
}

function parseYtcfg(html) {
  const flat = html.replace(/\n/g, "");
  const markers = ["ytcfg.set(", "window.ytcfg.set("];
  for (let m = 0; m < markers.length; m++) {
    let idx = flat.indexOf(markers[m]);
    while (idx >= 0) {
      const parsed = extractJsonObject(flat, idx + markers[m].length);
      if (parsed && parsed.INNERTUBE_API_KEY) return parsed;
      idx = flat.indexOf(markers[m], idx + 1);
    }
  }
  const legacy = flat.match(/ytplayer=\{\};ytcfg\.set\(([\s\S]*?)\);/);
  if (legacy) {
    try {
      const parsed = JSON.parse(legacy[1]);
      if (parsed && parsed.INNERTUBE_API_KEY) return parsed;
    } catch (e) {}
  }
  return null;
}

async function initSession(params) {
  cacheAuthFromParams(params || {});
  const auth = getAuthParams();
  const sessionTag =
    normalizeCookie(auth.cookie) + "|" + (auth.authorization || "");
  if (
    storageGet("session_tag") === sessionTag &&
    storageGet("api_key") &&
    storageGet("context")
  ) {
    return;
  }

  let ytcfg = null;
  try {
    const res = await Widget.http.get(SITE, {
      headers: buildAuthHeaders(auth),
    });
    const html =
      typeof res.data === "string" ? res.data : String(res.data || "");
    ytcfg = parseYtcfg(html);
  } catch (e) {
    console.error("[initSession] 拉取首页失败:", e.message || e);
  }

  storageSet("api_key", (ytcfg && ytcfg.INNERTUBE_API_KEY) || FALLBACK_API_KEY);
  const ctx =
    ytcfg && ytcfg.INNERTUBE_CONTEXT
      ? ytcfg.INNERTUBE_CONTEXT
      : DEFAULT_CONTEXT;
  storageSet("context", JSON.stringify(ctx));
  const visitorData =
    (ytcfg && ytcfg.VISITOR_DATA) ||
    (ctx.client && ctx.client.visitorData) ||
    "";
  if (visitorData) storageSet("visitor_data", visitorData);
  storageSet("session_tag", sessionTag);
}

function getApiKey() {
  return storageGet("api_key") || FALLBACK_API_KEY;
}

function getContext() {
  const stored = parseStoredJson(storageGet("context"));
  const ctx = stored
    ? JSON.parse(JSON.stringify(stored))
    : JSON.parse(JSON.stringify(DEFAULT_CONTEXT));
  if (!ctx.client) ctx.client = JSON.parse(JSON.stringify(DEFAULT_CONTEXT.client));
  if (!ctx.user) ctx.user = JSON.parse(JSON.stringify(DEFAULT_CONTEXT.user));
  if (!ctx.request) ctx.request = JSON.parse(JSON.stringify(DEFAULT_CONTEXT.request));
  const visitorData = storageGet("visitor_data");
  if (visitorData) ctx.client.visitorData = visitorData;
  return ctx;
}

function buildInnertubeHeaders(params, clientOverride) {
  const ctx = getContext();
  const client = clientOverride || ctx.client || DEFAULT_CONTEXT.client;
  const headers = Object.assign(
    {
      "Content-Type": "application/json",
      Accept: "*/*",
      Origin: "https://www.youtube.com",
      Referer: "https://www.youtube.com/",
      "User-Agent": client.userAgent || UA,
      "X-YouTube-Client-Name": "1",
      "X-YouTube-Client-Version": client.clientVersion || "2.20241218.01.00",
    },
    buildAuthHeaders(params)
  );
  if (client.visitorData) headers["X-Goog-Visitor-Id"] = client.visitorData;
  else {
    const visitorData = storageGet("visitor_data");
    if (visitorData) headers["X-Goog-Visitor-Id"] = visitorData;
  }
  return headers;
}

async function postInnertube(path, body, params) {
  const apiKey = getApiKey();
  const res = await Widget.http.post(
    SITE + path + "?key=" + encodeURIComponent(apiKey),
    JSON.stringify(body),
    { headers: buildInnertubeHeaders(params || getAuthParams()) }
  );
  const data =
    typeof res.data === "object" ? res.data : parseStoredJson(res.data);
  if (data && data.error) {
    throw new Error(
      (data.error.message || "InnerTube error") +
        " (" +
        (data.error.code || "unknown") +
        ")"
    );
  }
  return data;
}

async function loadListFromHtml(feedPath, params) {
  const res = await Widget.http.get(SITE + feedPath, {
    headers: Object.assign({ Origin: SITE }, buildAuthHeaders(params)),
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  const parsedResponse = parseInitialData(html);
  if (!parsedResponse) return [];
  const collected = [];
  extractAllVideoRenderers(parsedResponse, collected);
  return dedupeItems(collected);
}

async function loadHomeFromHtml(params) {
  const url =
    SITE + "/results?search_query=" + encodeURIComponent("最新|推薦");
  const res = await Widget.http.get(url, {
    headers: buildAuthHeaders(params),
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  const parsedResponse = parseInitialData(html);
  if (!parsedResponse) return [];
  const contents =
    parsedResponse.contents &&
    parsedResponse.contents.twoColumnSearchResultsRenderer &&
    parsedResponse.contents.twoColumnSearchResultsRenderer.primaryContents &&
    parsedResponse.contents.twoColumnSearchResultsRenderer.primaryContents
      .sectionListRenderer &&
    parsedResponse.contents.twoColumnSearchResultsRenderer.primaryContents
      .sectionListRenderer.contents;
  if (!contents || !contents[0]) {
    const collected = [];
    extractAllVideoRenderers(parsedResponse, collected);
    return dedupeItems(collected);
  }
  const cards = [];
  contents[0].itemSectionRenderer.contents.forEach(function (e) {
    const mapped = mapVideoRenderer(e.videoRenderer);
    if (mapped) cards.push(mapped);
  });
  if (contents[1] && contents[1].continuationItemRenderer) {
    const token =
      contents[1].continuationItemRenderer.continuationEndpoint
        .continuationCommand.token;
    storageSet("home_continuation_token", token);
  }
  return cards;
}

async function browseCategory(categoryKey, params) {
  const pageNum = Number((params && params.page) || 1);
  const keyword = SEARCH_FALLBACK[categoryKey] || categoryKey;
  const feedPath = HTML_FEEDS[categoryKey];

  if (pageNum === 1 && feedPath) {
    try {
      const htmlItems = await loadListFromHtml(feedPath, params);
      if (htmlItems.length) return htmlItems;
    } catch (e) {
      console.error("[browseCategory] HTML 失败:", categoryKey, e.message || e);
    }
  }

  try {
    return await searchVideosInternal(keyword, pageNum, params);
  } catch (e) {
    console.error("[browseCategory] 搜索失败:", categoryKey, e.message || e);
    if (pageNum === 1 && feedPath) {
      return loadListFromHtml(feedPath, params);
    }
    return [];
  }
}

async function searchVideosInternal(keyword, page, params) {
  await initSession(params);
  const pageNum = Number(page || 1);
  const context = getContext();
  const tokenKey = "search_token:" + keyword;

  try {
    if (pageNum === 1) {
      const data = await postInnertube(
        "/youtubei/v1/search",
        {
          context: context,
          params: getSearchParam(),
          query: keyword,
        },
        params
      );
      const contents =
        data.contents &&
        data.contents.twoColumnSearchResultsRenderer &&
        data.contents.twoColumnSearchResultsRenderer.primaryContents &&
        data.contents.twoColumnSearchResultsRenderer.primaryContents
          .sectionListRenderer &&
        data.contents.twoColumnSearchResultsRenderer.primaryContents
          .sectionListRenderer.contents;
      if (!contents || !contents[0]) return [];
      const videos = contents[0].itemSectionRenderer.contents;
      const cards = [];
      videos.forEach(function (e) {
        const mapped = mapVideoRenderer(e.videoRenderer);
        if (mapped) cards.push(mapped);
      });
      if (contents[1] && contents[1].continuationItemRenderer) {
        const token =
          contents[1].continuationItemRenderer.continuationEndpoint
            .continuationCommand.token;
        storageSet(tokenKey, token);
      }
      return cards;
    }

    const continuation = storageGet(tokenKey);
    if (!continuation) return [];
    const data = await postInnertube(
      "/youtubei/v1/search",
      { context: context, continuation: continuation },
      params
    );
    const cmds = data.onResponseReceivedCommands || [];
    if (!cmds.length) return [];
    const videos =
      cmds[0].appendContinuationItemsAction.continuationItems[0]
        .itemSectionRenderer.contents;
    const cards = [];
    videos.forEach(function (e) {
      const mapped = mapVideoRenderer(e.videoRenderer);
      if (mapped) cards.push(mapped);
    });
    const contItems =
      cmds[0].appendContinuationItemsAction.continuationItems;
    if (contItems[1] && contItems[1].continuationItemRenderer) {
      const token =
        contItems[1].continuationItemRenderer.continuationEndpoint
          .continuationCommand.token;
      storageSet(tokenKey, token);
    }
    return cards;
  } catch (e) {
    console.error("[searchVideosInternal] 失败:", keyword, e.message || e);
    return [];
  }
}

async function parseHomeVideos(page, params) {
  const pageNum = Number(page || 1);
  if (pageNum === 1) {
    try {
      const htmlItems = await loadHomeFromHtml(params);
      if (htmlItems.length) return htmlItems;
    } catch (e) {
      console.error("[loadHome] HTML 失败:", e.message || e);
    }
    try {
      return await searchVideosInternal(SEARCH_FALLBACK.home, 1, params);
    } catch (e) {
      console.error("[loadHome] 搜索失败:", e.message || e);
      return [];
    }
  }

  const continuationToken = storageGet("home_continuation_token");
  if (!continuationToken) {
    return searchVideosInternal(SEARCH_FALLBACK.home, pageNum, params);
  }
  try {
    const context = getContext();
    const data = await postInnertube(
      "/youtubei/v1/search",
      { context: context, continuation: continuationToken },
      params
    );
    const cmds = data.onResponseReceivedCommands || [];
    if (!cmds.length) return [];
    const videos =
      cmds[0].appendContinuationItemsAction.continuationItems[0]
        .itemSectionRenderer.contents;
    const cards = [];
    videos.forEach(function (e) {
      const mapped = mapVideoRenderer(e.videoRenderer);
      if (mapped) cards.push(mapped);
    });
    const contItems =
      cmds[0].appendContinuationItemsAction.continuationItems;
    if (contItems[1] && contItems[1].continuationItemRenderer) {
      const token =
        contItems[1].continuationItemRenderer.continuationEndpoint
          .continuationCommand.token;
      storageSet("home_continuation_token", token);
    }
    return cards;
  } catch (e) {
    return searchVideosInternal(SEARCH_FALLBACK.home, pageNum, params);
  }
}

async function parseTrendingVideos(params) {
  return browseCategory("trending", { page: 1, cookie: params && params.cookie, authorization: params && params.authorization });
}

async function getChannelId(code) {
  const url = SITE + "/" + encodeURIComponent(code);
  const res = await Widget.http.get(url, {
    headers: Object.assign({ Origin: SITE }, buildAuthHeaders()),
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  const $ = Widget.html.load(html);
  const link = $('link[rel="canonical"]').attr("href") || "";
  const parts = link.split("/channel/");
  if (parts.length < 2) throw new Error("无法解析频道 ID: " + code);
  return parts[1];
}

async function parseChannelVideos(code, page, type) {
  const pageNum = Number(page || 1);
  const apiKey = getApiKey();
  const context = getContext();
  const params =
    type === "live"
      ? "EgdzdHJlYW1z8gYECgJ6AA%3D%3D"
      : "EgZ2aWRlb3MYAyAAMAE%3D";
  const url = SITE + "/youtubei/v1/browse?key=" + encodeURIComponent(apiKey);
  const headers = {
    "User-Agent": UA,
    "Content-Type": "application/json",
  };
  let postData;

  if (pageNum === 1) {
    storageSet("is_last_page", "false");
    const channelId = await getChannelId(code);
    storageSet("channel_id:" + code, channelId);
    postData = { context, browseId: channelId, params };
  } else {
    if (storageGet("is_last_page") === "true") return [];
    postData = {
      context,
      continuation: storageGet("continuation_token"),
    };
  }

  const res = await Widget.http.post(url, JSON.stringify(postData), {
    headers: buildInnertubeHeaders(getAuthParams()),
  });
  const data = typeof res.data === "object" ? res.data : parseStoredJson(res.data);
  let videos;
  if (pageNum === 1) {
    const tabIndex = type === "live" ? 3 : 1;
    videos =
      data.contents.twoColumnBrowseResultsRenderer.tabs[tabIndex].tabRenderer
        .content.richGridRenderer.contents;
  } else {
    videos =
      data.onResponseReceivedActions[0].appendContinuationItemsAction
        .continuationItems;
  }

  const cards = mapRichGridVideos(videos);
  if (cards.length < PAGE_SIZE) storageSet("is_last_page", "true");
  return cards;
}

async function fetchChannelVideosFromHtml(code) {
  const url = SITE + "/" + encodeURIComponent(code) + "/videos";
  const res = await Widget.http.get(url, {
    headers: Object.assign({ Origin: SITE }, buildAuthHeaders()),
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  const parsedResponse = parseInitialData(html);
  if (!parsedResponse) return [];
  const collected = [];
  extractAllVideoRenderers(parsedResponse, collected);
  return dedupeItems(collected);
}

function buildPlayerBody(videoId, client) {
  const context = getContext();
  const clientObj = Object.assign({}, context.client || {}, {
    clientName: client.clientName,
    clientVersion: client.clientVersion,
    userAgent: client.userAgent,
    hl: "zh-CN",
    gl: "US",
    timeZone: "Asia/Shanghai",
    utcOffsetMinutes: 480,
  });
  if (client.deviceModel) clientObj.deviceModel = client.deviceModel;
  if (client.androidSdkVersion) clientObj.androidSdkVersion = client.androidSdkVersion;

  return {
    context: Object.assign({}, context, { client: clientObj }),
    videoId,
    playbackContext: {
      contentPlaybackContext: { html5Preference: "HTML5_PREF_WANTS" },
    },
    contentCheckOk: true,
    racyCheckOk: true,
  };
}

function pickDirectFormat(formats) {
  if (!formats || !formats.length) return "";
  const usable = formats
    .filter((f) => f.url && !f.signatureCipher && !f.cipher)
    .sort((a, b) => Number(b.height || b.itag || 0) - Number(a.height || a.itag || 0));

  if (!usable.length) return "";

  const muxed = usable.find(
    (f) =>
      f.mimeType &&
      f.mimeType.indexOf("video") >= 0 &&
      f.mimeType.indexOf("audio") >= 0
  );
  if (muxed) return muxed.url;

  const progressive = usable.find(
    (f) => f.mimeType && /video\/(mp4|webm)/i.test(f.mimeType)
  );
  return progressive ? progressive.url : usable[0].url;
}

function extractPlayUrl(playerData) {
  if (!playerData || !playerData.streamingData) return "";

  const streamingData = playerData.streamingData;
  if (streamingData.hlsManifestUrl) return streamingData.hlsManifestUrl;

  const muxedUrl = pickDirectFormat(streamingData.formats);
  if (muxedUrl) return muxedUrl;

  return pickDirectFormat(streamingData.adaptiveFormats);
}

function parsePlayerResponseFromHtml(html) {
  const markers = [
    "ytInitialPlayerResponse = ",
    "var ytInitialPlayerResponse = ",
  ];
  for (let i = 0; i < markers.length; i++) {
    const idx = html.indexOf(markers[i]);
    if (idx >= 0) {
      const parsed = extractJsonObject(html, idx + markers[i].length);
      if (parsed) return parsed;
    }
  }
  return null;
}

async function requestPlayer(videoId, client, params) {
  const apiKey = getApiKey();
  const headers = buildInnertubeHeaders(params || getAuthParams(), {
    userAgent: client.userAgent,
    clientVersion: client.clientVersion,
    visitorData: getContext().client && getContext().client.visitorData,
  });
  headers["X-YouTube-Client-Name"] = client.clientNameHeader;
  headers["X-YouTube-Client-Version"] = client.clientVersion;
  headers["User-Agent"] = client.userAgent;
  const res = await Widget.http.post(
    SITE + "/youtubei/v1/player?key=" + encodeURIComponent(apiKey),
    JSON.stringify(buildPlayerBody(videoId, client)),
    { headers: headers }
  );
  const data =
    typeof res.data === "object" ? res.data : parseStoredJson(res.data);
  if (data && data.error) {
    throw new Error(data.error.message || "player error");
  }
  return data;
}

async function fetchPlayerFromEmbedPage(videoId, params) {
  const res = await Widget.http.get(SITE + "/embed/" + videoId, {
    headers: Object.assign({ Origin: SITE }, buildAuthHeaders(params)),
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  return parsePlayerResponseFromHtml(html);
}

async function fetchPlayerFromWatchPage(videoId, params) {
  const res = await Widget.http.get(SITE + "/watch?v=" + videoId, {
    headers: Object.assign({ Origin: SITE }, buildAuthHeaders(params)),
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  return parsePlayerResponseFromHtml(html);
}

async function fetchPlayerData(videoId, params) {
  let lastError = null;
  const authParams = params || getAuthParams();
  const clients = PLAYER_CLIENTS.slice();
  if (normalizeCookie(authParams.cookie)) {
    const webClient = clients.find(function (c) {
      return c.clientName === "WEB";
    });
    if (webClient) {
      clients.unshift(webClient);
    }
  }

  for (let i = 0; i < clients.length; i++) {
    try {
      const data = await requestPlayer(videoId, clients[i], authParams);
      const status =
        data && data.playabilityStatus && data.playabilityStatus.status;
      const playUrl = extractPlayUrl(data);
      if (playUrl && status !== "LOGIN_REQUIRED" && status !== "UNPLAYABLE") {
        return { playerData: data, playUrl };
      }
      if (data && data.playabilityStatus && data.playabilityStatus.reason) {
        lastError = new Error(data.playabilityStatus.reason);
      }
    } catch (e) {
      lastError = e;
    }
  }

  const htmlFallbacks = [
    function () {
      return fetchPlayerFromWatchPage(videoId, authParams);
    },
    function () {
      return fetchPlayerFromEmbedPage(videoId, authParams);
    },
  ];
  for (let j = 0; j < htmlFallbacks.length; j++) {
    try {
      const data = await htmlFallbacks[j]();
      const playUrl = extractPlayUrl(data);
      if (playUrl) return { playerData: data, playUrl };
    } catch (e) {
      lastError = e;
    }
  }

  throw lastError || new Error("无法获取播放地址，请检查 Cookie 是否有效");
}

async function fetchPlayInfo(videoId, params) {
  const result = await fetchPlayerData(videoId, params);
  const data = result.playerData || {};
  const details = data.videoDetails || {};
  const thumbnails = details.thumbnail && details.thumbnail.thumbnails;
  return {
    playUrl: result.playUrl,
    title: details.title || videoId,
    description: details.shortDescription || "",
    posterPath: thumbUrl(thumbnails, videoId),
    backdropPath: bannerUrl(videoId),
    duration: Number(details.lengthSeconds || 0) || undefined,
  };
}

function parseChannelLink(link) {
  const raw = String(link).replace(/^yt-channel:/, "");
  const parts = raw.split(":");
  const encodedCode = parts.slice(0, -1).join(":");
  const type = parts[parts.length - 1] || "vod";
  const code = decodeURIComponent(encodedCode);
  return { code, type };
}

async function loadCategory(categoryKey, params) {
  cacheAuthFromParams(params);
  await initSession(params);
  return browseCategory(categoryKey, params);
}

async function loadHome(params) {
  try {
    cacheAuthFromParams(params);
    await initSession(params);
    const page = Number(params.page || 1);
    return await parseHomeVideos(page, params);
  } catch (error) {
    console.error("[loadHome] 失败:", error.message || error);
    throw error;
  }
}

async function loadTrending(params) {
  try {
    cacheAuthFromParams(params);
    await initSession(params);
    const page = Number(params.page || 1);
    if (page > 1) {
      return searchVideosInternal(SEARCH_FALLBACK.trending, page, params);
    }
    return await parseTrendingVideos(params);
  } catch (error) {
    console.error("[loadTrending] 失败:", error.message || error);
    throw error;
  }
}

async function loadMusic(params) {
  try {
    return await loadCategory("music", params);
  } catch (error) {
    console.error("[loadMusic] 失败:", error.message || error);
    throw error;
  }
}

async function loadGaming(params) {
  try {
    return await loadCategory("gaming", params);
  } catch (error) {
    console.error("[loadGaming] 失败:", error.message || error);
    throw error;
  }
}

async function loadNews(params) {
  try {
    return await loadCategory("news", params);
  } catch (error) {
    console.error("[loadNews] 失败:", error.message || error);
    throw error;
  }
}

async function loadSports(params) {
  try {
    return await loadCategory("sports", params);
  } catch (error) {
    console.error("[loadSports] 失败:", error.message || error);
    throw error;
  }
}

async function loadMovies(params) {
  try {
    return await loadCategory("movies", params);
  } catch (error) {
    console.error("[loadMovies] 失败:", error.message || error);
    throw error;
  }
}

async function loadFollow(params) {
  try {
    cacheAuthFromParams(params);
    await initSession(params);
    const page = Number(params.page || 1);
    if (page > 1) return [];

    const follows = parseFollows(params);
    return follows.map((each) => ({
      id: each.code,
      type: "url",
      title: each.name,
      backdropPath: "https://www.youtube.com/img/desktop/yt_1200.png",
      link: channelLink(each.code, each.type || "vod"),
      mediaType: "movie",
      description: each.type === "live" ? "直播" : "视频",
    }));
  } catch (error) {
    console.error("[loadFollow] 失败:", error.message || error);
    throw error;
  }
}

async function loadDetail(link) {
  try {
    const key = String(link);

    if (key.startsWith("yt-channel:")) {
      cacheAuthFromParams(getAuthParams());
      await initSession(getAuthParams());
      const { code, type } = parseChannelLink(key);
      let childItems = [];
      try {
        childItems = await parseChannelVideos(code, 1, type);
      } catch (e) {
        childItems = await fetchChannelVideosFromHtml(code);
      }
      if (!childItems.length) return null;
      return {
        id: key,
        type: "url",
        title: code,
        link: key,
        mediaType: "movie",
        childItems,
      };
    }

    if (key.startsWith("yt:")) {
      const videoId = key.replace(/^yt:/, "");
      const authParams = getAuthParams();
      const cached = readVideoCache(key);
      if (cached) {
        return {
          id: videoId,
          type: "url",
          title: videoId,
          link: key,
          videoUrl: cached.videoUrl,
          playerType: "system",
          mediaType: "movie",
          customHeaders: cached.customHeaders || PLAY_HEADERS,
        };
      }

      await initSession(authParams);
      const play = await fetchPlayInfo(videoId, authParams);
      writeVideoCache(key, play.playUrl, PLAY_HEADERS);
      return {
        id: videoId,
        type: "url",
        title: play.title,
        description: play.description || undefined,
        posterPath: play.posterPath || undefined,
        backdropPath: play.backdropPath || play.posterPath || undefined,
        duration: play.duration,
        link: key,
        videoUrl: play.playUrl,
        playerType: "system",
        mediaType: "movie",
        customHeaders: PLAY_HEADERS,
      };
    }

    return null;
  } catch (error) {
    console.error("[loadDetail] 失败:", error.message || error);
    return null;
  }
}

async function searchVideos(keyword, page, params) {
  return searchVideosInternal(keyword, page, params);
}

async function search(params) {
  try {
    cacheAuthFromParams(params);
    const keyword = (params.keyword || "").trim();
    if (!keyword) return [];
    return await searchVideos(keyword, params.page, params);
  } catch (error) {
    console.error("[search] 失败:", error.message || error);
    throw error;
  }
}

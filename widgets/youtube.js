WidgetMetadata = {
  id: "forward.youtube",
  title: "油管",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  description: "YouTube 视频源，支持推荐、热门、分类频道与搜索",
  author: "Forward",
  site: "https://www.youtube.com",
  detailCacheDuration: 300,
  globalParams: [
    {
      name: "cookie",
      title: "Cookie（可选，用于登录态）",
      type: "input",
      value: "",
    },
    {
      name: "authorization",
      title: "Authorization（可选）",
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

const FEED_MAP = {
  music: "/feed/music",
  gaming: "/gaming",
  news: "/feed/news",
  sports: "/feed/sports",
  movies: "/feed/storefront",
};

const PLAYER_CLIENTS = [
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

function cacheAuthFromParams(params) {
  if (!params) return;
  if (params.cookie) storageSet("user_cookie", params.cookie);
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
  if (auth.cookie) headers.Cookie = auth.cookie;
  if (auth.authorization) headers.Authorization = auth.authorization;
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
  return encodeURIComponent(b64EncodeBytes(d.slice(0, t)));
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
    "";
  const pic = thumbUrl(item.thumbnail && item.thumbnail.thumbnails, videoId);
  const remarks =
    (item.publishedTimeText && item.publishedTimeText.simpleText) || "";
  const durationText = sanitizeDurationText(
    item.lengthText && item.lengthText.simpleText
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
    obj.forEach((each) => extractAllVideoRenderers(each, out));
    return;
  }
  Object.keys(obj).forEach((key) => extractAllVideoRenderers(obj[key], out));
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

function parseInitialData(html) {
  let matches = html.match(/var ytInitialData = (.*?);<\/script>/);
  if (matches) return JSON.parse(matches[1]);
  matches = html.match(/var ytInitialData = (.*)}}};/);
  if (matches) return JSON.parse(matches[1] + "}}}");
  return null;
}

async function initSession() {
  const cachedKey = storageGet("api_key");
  const cachedContext = storageGet("context");
  if (cachedKey && cachedContext) return;

  const res = await Widget.http.get(SITE, {
    headers: buildAuthHeaders(),
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  const regex = /window.*?ytplayer=\{\};ytcfg\.set\((.*?)\);/;
  const match = html.replace(/\n/g, "").match(regex);
  if (!match) throw new Error("无法解析 YouTube 会话配置");
  const ytcfg = JSON.parse(match[1]);
  storageSet("api_key", ytcfg.INNERTUBE_API_KEY);
  storageSet("context", JSON.stringify(ytcfg.INNERTUBE_CONTEXT));
}

function getApiKey() {
  return storageGet("api_key") || FALLBACK_API_KEY;
}

function getContext() {
  return parseStoredJson(storageGet("context")) || {};
}

async function parseHomeVideos(page) {
  const pageNum = Number(page || 1);
  if (pageNum === 1) {
    const url =
      SITE + "/results?search_query=" + encodeURIComponent("最新|推薦");
    const res = await Widget.http.get(url, {
      headers: buildAuthHeaders(),
    });
    const html = typeof res.data === "string" ? res.data : String(res.data || "");
    const parsedResponse = parseInitialData(html);
    if (!parsedResponse) return [];
    const contents =
      parsedResponse.contents.twoColumnSearchResultsRenderer.primaryContents
        .sectionListRenderer.contents;
    const items = contents[0].itemSectionRenderer.contents;
    const cards = [];
    items.forEach((e) => {
      const mapped = mapVideoRenderer(e.videoRenderer);
      if (mapped) cards.push(mapped);
    });
    const token =
      contents[1].continuationItemRenderer.continuationEndpoint
        .continuationCommand.token;
    storageSet("continuation_token", token);
    return cards;
  }

  const apiKey = getApiKey();
  const context = getContext();
  const continuationToken = storageGet("continuation_token");
  const res = await Widget.http.post(
    SITE + "/youtubei/v1/search?key=" + apiKey,
    JSON.stringify({ context, continuation: continuationToken }),
    {
      headers: {
        "User-Agent": UA,
        "Content-Type": "application/json",
      },
    }
  );
  const data = typeof res.data === "object" ? res.data : parseStoredJson(res.data);
  const videos =
    data.onResponseReceivedCommands[0].appendContinuationItemsAction
      .continuationItems[0].itemSectionRenderer.contents;
  const cards = [];
  videos.forEach((e) => {
    const mapped = mapVideoRenderer(e.videoRenderer);
    if (mapped) cards.push(mapped);
  });
  const token =
    data.onResponseReceivedCommands[0].appendContinuationItemsAction
      .continuationItems[1].continuationItemRenderer.continuationEndpoint
      .continuationCommand.token;
  storageSet("continuation_token", token);
  return cards;
}

async function parseFeedVideos(feedPath, page) {
  const pageNum = Number(page || 1);
  if (pageNum > 1) return [];

  const res = await Widget.http.get(SITE + feedPath, {
    headers: Object.assign({ Origin: SITE }, buildAuthHeaders()),
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  const parsedResponse = parseInitialData(html);
  if (!parsedResponse) return [];

  const collected = [];
  extractAllVideoRenderers(parsedResponse, collected);
  return dedupeItems(collected);
}

async function parseTrendingVideos() {
  return parseFeedVideos("/feed/trending", 1);
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
  const url = SITE + "/youtubei/v1/browse?key=" + apiKey;
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

  const res = await Widget.http.post(url, JSON.stringify(postData), { headers });
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
  const clientObj = {
    clientName: client.clientName,
    clientVersion: client.clientVersion,
    userAgent: client.userAgent,
    hl: "zh-CN",
    gl: "US",
    timeZone: "Asia/Shanghai",
    utcOffsetMinutes: 480,
  };
  if (client.deviceModel) clientObj.deviceModel = client.deviceModel;
  if (client.androidSdkVersion) clientObj.androidSdkVersion = client.androidSdkVersion;

  return {
    context: { client: clientObj },
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
  const patterns = [
    /ytInitialPlayerResponse\s*=\s*(\{.+?\})\s*;/,
    /var ytInitialPlayerResponse = (\{.+?\});/,
    /"playerResponse":"(\{.+?\})"/,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = html.match(patterns[i]);
    if (!match) continue;
    try {
      const raw = match[1].replace(/\\u0026/g, "&").replace(/\\"/g, '"');
      return JSON.parse(raw);
    } catch (e) {}
  }
  return null;
}

async function requestPlayer(videoId, client, params) {
  const apiKey = getApiKey();
  const authHeaders = buildAuthHeaders(params);
  const headers = {
    "Content-Type": "application/json",
    "X-YouTube-Client-Name": client.clientNameHeader,
    "X-YouTube-Client-Version": client.clientVersion,
    Origin: "https://www.youtube.com",
    "User-Agent": client.userAgent,
  };
  if (authHeaders.Cookie) headers.Cookie = authHeaders.Cookie;
  if (authHeaders.Authorization) headers.Authorization = authHeaders.Authorization;

  const res = await Widget.http.post(
    SITE + "/youtubei/v1/player?key=" + apiKey + "&prettyPrint=false",
    JSON.stringify(buildPlayerBody(videoId, client)),
    { headers }
  );
  return typeof res.data === "object" ? res.data : parseStoredJson(res.data);
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

  for (let i = 0; i < PLAYER_CLIENTS.length; i++) {
    try {
      const data = await requestPlayer(videoId, PLAYER_CLIENTS[i], params);
      const status =
        data &&
        data.playabilityStatus &&
        data.playabilityStatus.status;
      const playUrl = extractPlayUrl(data);
      if (playUrl && status !== "LOGIN_REQUIRED") {
        return { playerData: data, playUrl };
      }
      if (data && !playUrl) lastError = new Error("客户端无可用流: " + PLAYER_CLIENTS[i].clientName);
    } catch (e) {
      lastError = e;
    }
  }

  try {
    const data = await fetchPlayerFromWatchPage(videoId, params);
    const playUrl = extractPlayUrl(data);
    if (playUrl) return { playerData: data, playUrl };
  } catch (e) {
    lastError = e;
  }

  throw lastError || new Error("无法获取播放地址");
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

async function loadCategory(feedKey, params) {
  cacheAuthFromParams(params);
  await initSession();
  const page = Number(params.page || 1);
  return parseFeedVideos(FEED_MAP[feedKey], page);
}

async function loadHome(params) {
  try {
    cacheAuthFromParams(params);
    await initSession();
    const page = Number(params.page || 1);
    return await parseHomeVideos(page);
  } catch (error) {
    console.error("[loadHome] 失败:", error.message || error);
    throw error;
  }
}

async function loadTrending(params) {
  try {
    cacheAuthFromParams(params);
    await initSession();
    const page = Number(params.page || 1);
    if (page > 1) return [];
    return await parseTrendingVideos();
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
    await initSession();
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
      await initSession();
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

      const play = await fetchPlayInfo(videoId, getAuthParams());
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

async function searchVideos(keyword, page) {
  await initSession();
  const pageNum = Number(page || 1);

  if (pageNum === 1) {
    const apiKey = getApiKey();
    const context = getContext();
    const url = SITE + "/youtubei/v1/search?key=" + apiKey;
    const postData = {
      context,
      params: getSearchParam(),
      query: keyword,
    };
    const res = await Widget.http.post(url, JSON.stringify(postData), {
      headers: {
        "User-Agent": UA,
        "Content-Type": "application/json",
      },
    });
    const data =
      typeof res.data === "object" ? res.data : parseStoredJson(res.data);
    const videos =
      data.contents.twoColumnSearchResultsRenderer.primaryContents
        .sectionListRenderer.contents[0].itemSectionRenderer.contents;
    const cards = [];
    videos.forEach((e) => {
      const mapped = mapVideoRenderer(e.videoRenderer);
      if (mapped) cards.push(mapped);
    });
    const token =
      data.contents.twoColumnSearchResultsRenderer.primaryContents
        .sectionListRenderer.contents[1].continuationItemRenderer
        .continuationEndpoint.continuationCommand.token;
    storageSet("search_continuation_token", token);
    return cards;
  }

  const context = getContext();
  const continuation = storageGet("search_continuation_token");
  const res = await Widget.http.post(
    SITE + "/youtubei/v1/search?prettyPrint=false",
    JSON.stringify({ context, continuation }),
    {
      headers: {
        "User-Agent": UA,
        "Content-Type": "application/json",
      },
    }
  );
  const data = typeof res.data === "object" ? res.data : parseStoredJson(res.data);
  const videos =
    data.onResponseReceivedCommands[0].appendContinuationItemsAction
      .continuationItems[0].itemSectionRenderer.contents;
  const cards = [];
  videos.forEach((e) => {
    const mapped = mapVideoRenderer(e.videoRenderer);
    if (mapped) cards.push(mapped);
  });
  const token =
    data.onResponseReceivedCommands[0].appendContinuationItemsAction
      .continuationItems[1].continuationItemRenderer.continuationEndpoint
      .continuationCommand.token;
  storageSet("search_continuation_token", token);
  return cards;
}

async function search(params) {
  try {
    cacheAuthFromParams(params);
    const keyword = (params.keyword || "").trim();
    if (!keyword) return [];
    return await searchVideos(keyword, params.page);
  } catch (error) {
    console.error("[search] 失败:", error.message || error);
    throw error;
  }
}

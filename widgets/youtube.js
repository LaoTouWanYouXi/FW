WidgetMetadata = {
  id: "forward.youtube",
  title: "油管",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "YouTube 视频源，支持推荐、热门、订阅频道与搜索",
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
      value: '[{"name":"徐雅","code":"@e_seoa"},{"name":"陈一发儿","code":"@chenyifaer","type":"vod"}]',
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
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36";
const IOS_UA =
  "com.google.ios.youtube/19.09.3 (iPhone14,3; U; CPU iOS 15_6 like Mac OS X)";
const FALLBACK_API_KEY = "AIzaSyB-63vPrdThhKuerbB2N_l7Kwwcxj6yUAc";
const STORAGE_KEY = "yt:";
const PAGE_SIZE = 30;

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

function thumbUrl(thumbnails) {
  if (!thumbnails || !thumbnails.length) return "";
  const last = thumbnails[thumbnails.length - 1];
  return (last && last.url) || "";
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
  const title =
    (item.title &&
      item.title.runs &&
      item.title.runs[0] &&
      item.title.runs[0].text) ||
    "";
  const pic = thumbUrl(item.thumbnail && item.thumbnail.thumbnails);
  const remarks =
    (item.publishedTimeText && item.publishedTimeText.simpleText) || "";
  return {
    id: item.videoId,
    type: "url",
    title: title,
    posterPath: pic || undefined,
    backdropPath: pic || undefined,
    description: remarks || undefined,
    link: videoLink(item.videoId),
    mediaType: "movie",
  };
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

async function initSession() {
  const cachedKey = storageGet("api_key");
  const cachedContext = storageGet("context");
  if (cachedKey && cachedContext) return;

  const res = await Widget.http.get(SITE, {
    headers: { "User-Agent": UA },
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
      SITE +
      "/results?search_query=" +
      encodeURIComponent("最新|推薦");
    const res = await Widget.http.get(url, {
      headers: { "User-Agent": UA },
    });
    const html = typeof res.data === "string" ? res.data : String(res.data || "");
    const matches = html.match(/var ytInitialData = (.*?);<\/script>/);
    if (!matches) return [];
    const parsedResponse = JSON.parse(matches[1]);
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

async function parseTrendingVideos() {
  const res = await Widget.http.get(SITE + "/feed/trending", {
    headers: {
      Origin: SITE,
      "User-Agent": UA,
    },
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  const matches = html.match(/var ytInitialData = (.*)}}};/);
  if (!matches) return [];
  const parsedResponse = JSON.parse(matches[1] + "}}}");
  const items =
    parsedResponse.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer
      .content.sectionListRenderer.contents;
  const cards = [];
  items.forEach((each) => {
    const shelf =
      each.itemSectionRenderer &&
      each.itemSectionRenderer.contents[0] &&
      each.itemSectionRenderer.contents[0].shelfRenderer &&
      each.itemSectionRenderer.contents[0].shelfRenderer.content &&
      each.itemSectionRenderer.contents[0].shelfRenderer.content
        .expandedShelfContentsRenderer &&
      each.itemSectionRenderer.contents[0].shelfRenderer.content
        .expandedShelfContentsRenderer.items;
    if (!shelf) return;
    shelf.forEach((one) => {
      const mapped = mapVideoRenderer(one.videoRenderer);
      if (mapped) cards.push(mapped);
    });
  });
  return cards;
}

async function getChannelId(code) {
  const url = SITE + "/" + encodeURIComponent(code);
  const res = await Widget.http.get(url, {
    headers: { Origin: SITE, "User-Agent": UA },
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
    headers: { Origin: SITE, "User-Agent": UA },
  });
  const html = typeof res.data === "string" ? res.data : String(res.data || "");
  const matches = html.match(/var ytInitialData = (.*)}}};/);
  if (!matches) return [];
  const parsedResponse = JSON.parse(matches[1] + "}}}");
  const tab =
    parsedResponse.contents.twoColumnBrowseResultsRenderer.tabs[1];
  const items =
    tab.tabRenderer.content.richGridRenderer.contents;
  const cards = [];
  items.forEach((each) => {
    if (each.richItemRenderer) {
      const mapped = mapVideoRenderer(
        each.richItemRenderer.content.videoRenderer
      );
      if (mapped) cards.push(mapped);
    }
  });
  return cards;
}

async function fetchHlsUrl(videoId, params) {
  const apiKey = FALLBACK_API_KEY;
  const authHeaders = buildAuthHeaders(params);
  const headers = {
    "X-YouTube-Client-Name": "5",
    "X-YouTube-Client-Version": "19.09.3",
    Origin: "https://m.youtube.com",
    "User-Agent": IOS_UA,
    "Content-Type": "application/json",
  };
  if (authHeaders.Cookie) headers.Cookie = authHeaders.Cookie;
  if (authHeaders.Authorization) headers.Authorization = authHeaders.Authorization;

  const body = {
    context: {
      client: {
        clientName: "IOS",
        clientVersion: "19.09.3",
        deviceModel: "iPhone14,3",
        userAgent: IOS_UA,
        hl: "en",
        timeZone: "UTC",
        utcOffsetMinutes: 0,
      },
    },
    videoId,
    playbackContext: {
      contentPlaybackContext: { html5Preference: "HTML5_PREF_WANTS" },
    },
    contentCheckOk: true,
    racyCheckOk: true,
  };

  const res = await Widget.http.post(
    SITE +
      "/youtubei/v1/player?key=" +
      apiKey +
      "&prettyPrint=false",
    JSON.stringify(body),
    { headers }
  );
  const data = typeof res.data === "object" ? res.data : parseStoredJson(res.data);
  if (!data || !data.streamingData || !data.streamingData.hlsManifestUrl) {
    throw new Error("无法获取播放地址");
  }
  const title =
    (data.videoDetails && data.videoDetails.title) || videoId;
  return {
    hlsUrl: data.streamingData.hlsManifestUrl,
    title,
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
      const play = await fetchHlsUrl(videoId, getAuthParams());
      return {
        id: videoId,
        type: "url",
        title: play.title,
        link: key,
        videoUrl: play.hlsUrl,
        playerType: "system",
        mediaType: "movie",
      };
    }

    return null;
  } catch (error) {
    console.error("[loadDetail] 失败:", error.message || error);
    return null;
  }
}

async function searchVideos(keyword, page, params) {
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
    return await searchVideos(keyword, params.page, params);
  } catch (error) {
    console.error("[search] 失败:", error.message || error);
    throw error;
  }
}

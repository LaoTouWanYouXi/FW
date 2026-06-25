WidgetMetadata = {
  id: "forward.javxx",
  title: "JavXX",
  version: "1.0.2",
  requiredVersion: "0.0.1",
  description: "JavXX \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u70ed\u95e8\u5f71\u7247\u3001\u6700\u65b0\u5f71\u7247\u3001\u6700\u8fd1\u66f4\u65b0\u3001\u6709\u7801\u5f71\u7247\u3001\u65e0\u7801\u5f71\u7247\u3001\u641c\u7d22",
  author: "Forward",
  site: "https://javxx.com",
  detailCacheDuration: 300,
  modules: [
    {
      id: "hot",
      title: "\u70ed\u95e8\u5f71\u7247",
      functionName: "loadHot",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
    },
    {
      id: "new",
      title: "\u6700\u65b0\u5f71\u7247",
      functionName: "loadNew",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
    },
    {
      id: "recent",
      title: "\u6700\u8fd1\u66f4\u65b0",
      functionName: "loadRecent",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
    },
    {
      id: "censored",
      title: "\u6709\u7801\u5f71\u7247",
      functionName: "loadCensored",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
    },
    {
      id: "uncensored",
      title: "\u65e0\u7801\u5f71\u7247",
      functionName: "loadUncensored",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
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

const BASE_URL = "https://javxx.com";
const SURRIT_BASE = "https://surrit.store";
const XOR_KEY = "G9zhUyphqPWZGWzZ";
const AES_KEY = "ym1eS4t0jTLakZYQ";
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://javxx.com/"
};

const CATEGORY_MAP = {
  hot: "/cn/hot",
  new: "/cn/new",
  recent: "/cn/recent",
  censored: "/cn/censored",
  uncensored: "/cn/uncensored"
};
const VIDEO_CACHE_TTL = 3600;

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
    if (data && data.videoUrl && data.ts && Date.now() - data.ts < VIDEO_CACHE_TTL * 1000) {
      return data;
    }
  } catch (e) {}
  return null;
}

function writeVideoCache(link, videoUrl, customHeaders) {
  if (!videoUrl) return;
  try {
    Widget.storage.set("vurl:v2:" + String(link), JSON.stringify({
      videoUrl,
      customHeaders,
      ts: Date.now(),
    }));
  } catch (e) {}
}

function buildPlayHeaders(videoUrl) {
  const base = videoUrl && videoUrl.includes("surrit")
    ? {
        "User-Agent": HEADERS["User-Agent"],
        "Origin": "https://surrit.store",
        "Referer": "https://surrit.store/",
      }
    : {
        "User-Agent": HEADERS["User-Agent"],
        "Referer": "https://javxx.com/",
        "Origin": "https://javxx.com",
      };
  return Object.assign({
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  }, base);
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
      if (next && !next.startsWith("#")) {
        variants.push({
          bw: parseStreamBandwidth(line),
          url: resolveAbsoluteUrl(url, next),
        });
      }
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

async function resolveSurritStream(videoId, surritBase) {
  const token = encodeURIComponent(xorEncrypt(videoId, AES_KEY));
  const streamHeaders = {
    ...HEADERS,
    "Referer": `${surritBase}/e/${videoId}?src=javxx`,
    "X-Requested-With": "XMLHttpRequest",
  };
  const streamRes = await Widget.http.get(
    `${surritBase}/stream?src=javxx&token=${token}`,
    { headers: streamHeaders }
  );
  let streamJson = streamRes.data;
  if (typeof streamJson === "string") streamJson = JSON.parse(streamJson);
  const media = streamJson && streamJson.result && streamJson.result.media;
  if (!media) return "";
  const decryptedMedia = xorDecode(media, AES_KEY);
  const parsed = JSON.parse(decryptedMedia);
  return parsed.stream || parsed.mp4 || "";
}

function resolveUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return BASE_URL + "/" + href;
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
    if (code !== 0) {
      data += String.fromCharCode((code >>> 16) & 255, (code >>> 8) & 255, code & 255);
    }
  }

  if (padded) {
    data = data.slice(0, pos - str.length);
  }

  return data;
}

function xorDecode(encoded, key) {
  const decoded = b64Decode(encoded);
  let result = "";
  for (let i = 0; i < decoded.length; i++) {
    const k = key.charCodeAt(i % key.length);
    result += String.fromCharCode(decoded.charCodeAt(i) ^ k);
  }
  return decodeURIComponent(result);
}

function xorEncrypt(input, key) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const k = key.charCodeAt(i % key.length);
    result.push(input.charCodeAt(i) ^ k);
  }
  // 纯 JS 实现 base64 编码，不依赖 CryptoJS
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

function parseVideoList(html) {
  if (!html) return [];
  const $ = Widget.html.load(html);
  const items = [];

  $(".vid-items > div.item").each((_, el) => {
    const $el = $(el);
    const href = $el.find(".title").attr("href") || "";
    const title = $el.find(".title").text().trim();
    const cover = $el.find(".image > img").attr("src") || "";
    const duration = $el.find(".duration").text().trim() || "";

    if (!title || !href) return;

    const item = {
      id: href,
      type: "url",
      title,
      backdropPath: cover || undefined,
      link: resolveUrl(href),
      mediaType: "movie",
    };
    const durationText = sanitizeDurationText(duration);
    if (durationText) item.durationText = durationText;
    items.push(item);
  });

  return items;
}

async function loadCategory(categoryId, params = {}) {
  if (params.genreId) return loadGenreList(params);

  const page = Number(params.page || 1);
  const path = CATEGORY_MAP[categoryId] || "/cn/new";
  let url = `${BASE_URL}${path}`;
  if (page > 1) url += `?page=${page}`;

  try {
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadGenreList(params = {}) {
  const genreId = String(params.genreId || "").trim();
  if (!genreId) return [];

  const page = Number(params.page || 1);
  let url = genreId.startsWith("http") ? genreId : resolveUrl(genreId);
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

async function loadDetail(link) {
  try {
    const detailUrl = String(link).startsWith("http") ? String(link) : BASE_URL + String(link);
    const cached = readVideoCache(detailUrl);
    const res = await Widget.http.get(detailUrl, { headers: HEADERS });
    const html = res.data || "";
    const $ = Widget.html.load(html);

    const title = $("h1").first().text().trim() || $('meta[property="og:title"]').attr("content") || "";
    const cover = $('meta[property="og:image"]').attr("content") || $(".image > img").attr("src") || "";

    let videoUrl = cached ? cached.videoUrl : "";
    let playHeaders = cached ? cached.customHeaders : null;

    if (!videoUrl) {
      const dataUrl = $("#video-files div").attr("data-url") || "";
      if (dataUrl) {
        try {
          const decodedUrl = xorDecode(dataUrl, XOR_KEY);
          const urlPath = decodedUrl.replace(/https?:\/\/[^/]+/, "");
          const videoId = urlPath.split("/").filter(Boolean).pop() || "";
          if (videoId) {
            videoUrl = await resolveSurritStream(videoId, SURRIT_BASE);
          }
        } catch (e) {}
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
        videoUrl = $('video source[type="video/mp4"]').attr("src")
          || $("video source").attr("src")
          || $("video").attr("src")
          || "";
      }
      if (videoUrl && videoUrl.startsWith("//")) videoUrl = "https:" + videoUrl;

      if (!videoUrl) {
        const embedMatch = html.match(/https?:\/\/surrit\.\w+\/e\/[a-zA-Z0-9_]+/);
        if (embedMatch) {
          const embedUrl = embedMatch[0];
          const surritBase = embedUrl.replace(/\/e\/.*/, "");
          const vidMatch = embedUrl.match(/\/e\/([a-zA-Z0-9_]+)/);
          if (vidMatch && vidMatch[1]) {
            try {
              videoUrl = await resolveSurritStream(vidMatch[1], surritBase);
            } catch (e) {}
          }
        }
      }

      if (!videoUrl) {
        const embedMatch = html.match(/https?:\/\/[a-z0-9.-]+\/e\/[a-zA-Z0-9_]+/);
        if (embedMatch) {
          try {
            const embedRes = await Widget.http.get(embedMatch[0], { headers: HEADERS });
            const embedHtml = embedRes.data || "";
            const m = embedHtml.match(/https?:\/\/[\w./-]+?\.mp4[\w./-]*/i)
              || embedHtml.match(/https?:\/\/[\w./-]+?\.m3u8[\w./-]*/i);
            if (m) videoUrl = m[0];
          } catch (e) {}
        }
      }

      if (videoUrl && !videoUrl.startsWith("http")) videoUrl = "";
      if (videoUrl) {
        playHeaders = buildPlayHeaders(videoUrl);
        videoUrl = await finalizeVideoUrl(videoUrl, playHeaders);
        writeVideoCache(detailUrl, videoUrl, playHeaders);
      }
    }

    if (!playHeaders) playHeaders = buildPlayHeaders(videoUrl);

    const genreItems = [];
    $("a[href*='/genres/'], a[href*='/tag/'], .tags a").each((_, el) => {
      const $a = $(el);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href) genreItems.push({ id: href, title: text });
    });

    const relatedItems = [];
    const seenRelated = new Set([detailUrl]);
    $(".vid-items > div.item, .related-videos article").each((_, el) => {
      if (relatedItems.length >= 8) return false;
      const $el = $(el);
      const $rLink = $el.find(".title");
      const rHref = $rLink.attr("href") || "";
      const rDetailLink = resolveUrl(rHref);
      if (!rDetailLink || seenRelated.has(rDetailLink)) return;
      seenRelated.add(rDetailLink);

      const rTitle = $rLink.text().trim() || "\u76f8\u5173\u5f71\u7247";
      const rCover = $el.find(".image > img").attr("src") || $el.find("img").attr("src") || "";

      relatedItems.push({
        id: rHref,
        type: "url",
        title: rTitle,
        backdropPath: rCover || undefined,
        link: rDetailLink,
        mediaType: "movie",
      });
    });

    return {
      id: link,
      type: "url",
      title,
      backdropPath: cover || undefined,
      posterPath: cover || undefined,
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

async function search(params = {}) {
  if (params.genreId) return loadGenreList(params);

  const keyword = params.keyword || "";
  const page = Number(params.page || 1);
  if (!keyword) return [];

  try {
    let url = `${BASE_URL}/cn/search/?keyword=${encodeURIComponent(keyword)}`;
    if (page > 1) url += `&page=${page}`;

    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

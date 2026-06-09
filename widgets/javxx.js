WidgetMetadata = {
  id: "forward.javxx",
  title: "JavXX",
  version: "1.0.2",
  requiredVersion: "0.0.1",
  description: "JavXX 视频聚合模块，支持热门影片、最新影片、最近更新、有码影片、无码影片、搜索",
  author: "Forward",
  site: "https://javxx.com",
  detailCacheDuration: 300,
  columns: 2,
  modules: [
    {
      id: "hot",
      title: "热门影片",
      functionName: "loadHot",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "new",
      title: "最新影片",
      functionName: "loadNew",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "recent",
      title: "最近更新",
      functionName: "loadRecent",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "censored",
      title: "有码影片",
      functionName: "loadCensored",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "uncensored",
      title: "无码影片",
      functionName: "loadUncensored",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ],
  search: {
    title: "搜索",
    functionName: "search",
    params: [
      { name: "keyword", title: "关键词", type: "input" },
      { name: "page", title: "页码", type: "page" }
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

    items.push({
      id: href,
      type: "url",
      title,
      posterPath: cover,
      backdropPath: cover,
      durationText: duration,
      link: resolveUrl(href),
      mediaType: "tvshow",
    });
  });

  return items;
}

async function loadCategory(categoryId, params = {}) {
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

async function loadHot(params) { return loadCategory("hot", params); }
async function loadNew(params) { return loadCategory("new", params); }
async function loadRecent(params) { return loadCategory("recent", params); }
async function loadCensored(params) { return loadCategory("censored", params); }
async function loadUncensored(params) { return loadCategory("uncensored", params); }

async function loadDetail(link) {
  try {
    const detailUrl = String(link).startsWith("http") ? String(link) : BASE_URL + String(link);
    const res = await Widget.http.get(detailUrl, { headers: HEADERS });
    const html = res.data || "";
    const $ = Widget.html.load(html);

    const title = $("h1").first().text().trim() || $('meta[property="og:title"]').attr("content") || "";
    const cover = $('meta[property="og:image"]').attr("content") || $(".image > img").attr("src") || "";

    let videoUrl = "";

    // === 策略1：通过 data-url 解密 + stream API ===
    const dataUrl = $("#video-files div").attr("data-url") || "";
    if (dataUrl) {
      try {
        // XOR_KEY 解密 data-url → 得到 embed URL（如 https://surrit.store/e/2VPP3NN2）
        const decodedUrl = xorDecode(dataUrl, XOR_KEY);

        // 从 embed URL 提取 videoId（路径最后一段）
        const urlPath = decodedUrl.replace(/https?:\/\/[^/]+/, "");
        const videoId = urlPath.split("/").filter(Boolean).pop() || "";

        if (videoId) {
          // 用 AES_KEY 加密 videoId 生成 token
          const token = encodeURIComponent(xorEncrypt(videoId, AES_KEY));

          // 请求 stream API
          const streamHeaders = {
            ...HEADERS,
            "Referer": `${SURRIT_BASE}/e/${videoId}?src=javxx`,
            "X-Requested-With": "XMLHttpRequest",
          };
          const streamRes = await Widget.http.get(
            `${SURRIT_BASE}/stream?src=javxx&token=${token}`,
            { headers: streamHeaders }
          );

          // 解析响应（兼容字符串和对象格式）
          let streamJson = streamRes.data;
          if (typeof streamJson === "string") {
            streamJson = JSON.parse(streamJson);
          }

          const media = streamJson && streamJson.result && streamJson.result.media;
          if (media) {
            // 用 AES_KEY 解密 media → 得到 JSON { stream: "...", vtt: "..." }
            const decryptedMedia = xorDecode(media, AES_KEY);
            const parsed = JSON.parse(decryptedMedia);
            videoUrl = parsed.stream || "";
          }
        }
      } catch (e) {}
    }

    // === 策略2：从 WatchPlayer d-tag 的 code 属性构造 embed URL ===
    if (!videoUrl) {
      try {
        const playerCode = $('d-tag[src="WatchPlayer"]').attr("code") || "";
        if (playerCode) {
          // 尝试用 videoId（code 通常是 MIDA-614-Uncensored-Leaked 格式）
          // embed URL 的 videoId 是简短哈希，不能直接从 code 推导
          // 回退：从 HTML 中正则提取 surrit.store URL
        }
      } catch (e) {}
    }

    // === 策略3：正则从 HTML 提取 surrit embed URL ===
    if (!videoUrl) {
      const embedMatch = html.match(/https?:\/\/surrit\.store\/e\/[a-zA-Z0-9_]+/);
      if (embedMatch) {
        const embedUrl = embedMatch[0];
        const vidMatch = embedUrl.match(/\/e\/([a-zA-Z0-9_]+)/);
        if (vidMatch && vidMatch[1]) {
          const videoId = vidMatch[1];
          const token = encodeURIComponent(xorEncrypt(videoId, AES_KEY));
          try {
            const streamHeaders = {
              ...HEADERS,
              "Referer": `${SURRIT_BASE}/e/${videoId}?src=javxx`,
              "X-Requested-With": "XMLHttpRequest",
            };
            const streamRes = await Widget.http.get(
              `${SURRIT_BASE}/stream?src=javxx&token=${token}`,
              { headers: streamHeaders }
            );
            let streamJson = streamRes.data;
            if (typeof streamJson === "string") {
              streamJson = JSON.parse(streamJson);
            }
            const media = streamJson && streamJson.result && streamJson.result.media;
            if (media) {
              const decryptedMedia = xorDecode(media, AES_KEY);
              const parsed = JSON.parse(decryptedMedia);
              videoUrl = parsed.stream || "";
            }
          } catch (e) {}
        }
      }
    }

    // 确保 videoUrl 是有效 URL
    if (videoUrl && !videoUrl.startsWith("http")) videoUrl = "";

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

      const rTitle = $rLink.text().trim() || "相关影片";
      const rCover = $el.find(".image > img").attr("src") || $el.find("img").attr("src") || "";

      relatedItems.push({
        id: rHref,
        type: "url",
        title: rTitle,
        posterPath: rCover,
        backdropPath: rCover,
        link: rDetailLink,
        mediaType: "tvshow",
      });
    });

    return {
      id: link,
      type: "url",
      title,
      posterPath: cover,
      backdropPath: cover,
      videoUrl: videoUrl || "",
      playerType: videoUrl.includes(".m3u8") ? "system" : "system",
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      link: detailUrl,
      mediaType: "tvshow",
      customHeaders: {
        "User-Agent": HEADERS["User-Agent"],
        "Origin": "https://surrit.store",
        "Referer": "https://surrit.store/"
      }
    };
  } catch (e) {
    return null;
  }
}

async function search(params = {}) {
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

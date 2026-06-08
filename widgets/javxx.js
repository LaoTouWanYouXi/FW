WidgetMetadata = {
  id: "forward.javxx",
  title: "JavXX",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "JavXX \\u89c6\\u9891\\u805a\\u5408\\u6a21\\u5757\\uff0c\\u652f\\u6301\\u70ed\\u95e8\\u5f71\\u7247\\u3001\\u6700\\u65b0\\u5f71\\u7247\\u3001\\u6700\\u8fd1\\u66f4\\u65b0\\u3001\\u6709\\u7801\\u5f71\\u7247\\u3001\\u65e0\\u7801\\u5f71\\u7247\\u3001\\u641c\\u7d22",
  author: "Forward",
  site: "https://javxx.com",
  detailCacheDuration: 300,
  modules: [
    {
      id: "hot",
      title: "\\u70ed\\u95e8\\u5f71\\u7247",
      functionName: "loadHot",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\\u9875\\u7801", type: "page" }
      ]
    },
    {
      id: "new",
      title: "\\u6700\\u65b0\\u5f71\\u7247",
      functionName: "loadNew",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\\u9875\\u7801", type: "page" }
      ]
    },
    {
      id: "recent",
      title: "\\u6700\\u8fd1\\u66f4\\u65b0",
      functionName: "loadRecent",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\\u9875\\u7801", type: "page" }
      ]
    },
    {
      id: "censored",
      title: "\\u6709\\u7801\\u5f71\\u7247",
      functionName: "loadCensored",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\\u9875\\u7801", type: "page" }
      ]
    },
    {
      id: "uncensored",
      title: "\\u65e0\\u7801\\u5f71\\u7247",
      functionName: "loadUncensored",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\\u9875\\u7801", type: "page" }
      ]
    }
  ],
  search: {
    title: "\\u641c\\u7d22",
    functionName: "search",
    params: [
      { name: "keyword", title: "\\u5173\\u952e\\u8bcd", type: "input" },
      { name: "page", title: "\\u9875\\u7801", type: "page" }
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
  const wordArray = CryptoJS.lib.WordArray.create(Uint8Array.from(result));
  return CryptoJS.enc.Base64.stringify(wordArray);
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
      link: resolveUrl(href)
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

    const dataUrl = $("#video-files div").attr("data-url") || "";
    if (!dataUrl) return null;

    const decodedUrl = xorDecode(dataUrl, XOR_KEY);
    const fileName = decodedUrl.split("/").pop().split("?")[0];
    const token = xorEncrypt(fileName, AES_KEY);

    const streamRes = await Widget.http.get(`${SURRIT_BASE}/stream?src=javxx&poster=&token=${token}`, { headers: HEADERS });
    const streamData = streamRes.data || {};
    const media = JSON.parse(streamData).result.media;

    const decryptedMedia = xorDecode(media, AES_KEY);
    const parsed = JSON.parse(decryptedMedia);
    const videoUrl = parsed.stream || "";
    const subtitle = parsed.vtt || "";

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

      const rTitle = $rLink.text().trim() || "\\u76f8\\u5173\\u5f71\\u7247";
      const rCover = $el.find(".image > img").attr("src") || $el.find("img").attr("src") || "";

      relatedItems.push({
        id: rHref,
        type: "url",
        title: rTitle,
        posterPath: rCover,
        backdropPath: rCover,
        link: rDetailLink
      });
    });

    return {
      id: link,
      type: "url",
      title,
      posterPath: cover,
      backdropPath: cover,
      videoUrl: videoUrl || "",
      playerType: "system",
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      link: detailUrl,
      mediaType: "movie",
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

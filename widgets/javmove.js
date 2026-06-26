WidgetMetadata = {
  id: "forward.javmove",
  title: "JavMove",
  version: "1.0.5",
  requiredVersion: "0.0.1",
  description: "JavMove \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u6700\u65b0\u5f71\u7247\u3001\u5373\u5c06\u4e0a\u6620\u3001\u641c\u7d22",
  author: "老头",
  site: "https://javmove.com",
  detailCacheDuration: 300,
  modules: [
    {
      id: "latest",
      title: "\u6700\u65b0\u5f71\u7247",
      functionName: "loadLatest",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }],
    },
    {
      id: "upcoming",
      title: "\u5373\u5c06\u4e0a\u6620",
      functionName: "loadUpcoming",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }],
    },
  ],
  search: {
    title: "\u641c\u7d22",
    functionName: "search",
    params: [
      { name: "keyword", title: "\u5173\u952e\u8bcd", type: "input" },
      { name: "page", title: "\u9875\u7801", type: "page" },
    ],
  },
};

const BASE_URL = "https://javmove.com";
const VIDEO_CACHE_TTL = 3600;
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0.1 Mobile/15E148 Safari/604.1",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  Referer: "https://javmove.com/",
};

function mergeHeaders(extra) {
  return Object.assign({}, HEADERS, extra || {});
}

function isErrorPage(body) {
  const text = String(body || "").trim();
  if (!text || text.length < 200) {
    return text.startsWith("{") && /"error"|"status"\s*:\s*400/.test(text);
  }
  return false;
}

async function fetchHtml(url, referer) {
  const ref = referer || BASE_URL + "/";
  let res = await Widget.http.get(url, {
    headers: mergeHeaders({ Referer: ref }),
  });
  let html = typeof res.data === "string" ? res.data : String(res.data || "");
  if (isErrorPage(html)) {
    res = await Widget.http.get(url, {
      headers: {
        "User-Agent": HEADERS["User-Agent"],
        Accept: "text/html",
        Referer: ref,
      },
    });
    html = typeof res.data === "string" ? res.data : String(res.data || "");
  }
  return html;
}

function extractTokenFromHtml(html) {
  const text = String(html || "");
  const patterns = [
    /id="video-player"[^>]*data-id="([^"]+)"/i,
    /data-id="([^"]+)"[^>]*id="video-player"/i,
    /id='video-player'[^>]*data-id='([^']+)'/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = text.match(patterns[i]);
    if (match && match[1]) return match[1];
  }
  return "";
}

function resolveUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return BASE_URL + "/" + href;
}

function resolveAbsoluteUrl(base, ref) {
  if (!ref) return "";
  if (ref.startsWith("http")) return ref;
  if (ref.startsWith("//")) return "https:" + ref;
  if (ref.startsWith("/")) {
    const origin = String(base).match(/^(https?:\/\/[^/]+)/);
    return origin ? origin[1] + ref : ref;
  }
  if (ref.startsWith("?")) return String(base).split("?")[0] + ref;
  const root = String(base).substring(0, String(base).lastIndexOf("/") + 1);
  return root + ref;
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
        videoUrl: videoUrl,
        customHeaders: customHeaders,
        ts: Date.now(),
      })
    );
  } catch (e) {}
}

function buildPlayHeaders(videoUrl) {
  return mergeHeaders({
    Accept: "*/*",
    Origin: "https://javmove.com",
    Referer: "https://javmove.com/",
  });
}

function parseWatchUrl(raw) {
  if (raw == null) return "";
  if (typeof raw === "string") {
    const text = raw.trim().replace(/^"+|"+$/g, "");
    if (text.indexOf("http") === 0) return text;
    try {
      return parseWatchUrl(JSON.parse(text));
    } catch (e) {}
    const match = text.match(/https?:\/\/[^\s"'<>]+?\.(?:mp4|m3u8)[^\s"'<>]*/i);
    return match ? match[0] : "";
  }
  if (typeof raw === "object") {
    if (typeof raw.url === "string") return parseWatchUrl(raw.url);
    if (typeof raw.data === "string") return parseWatchUrl(raw.data);
    if (typeof raw.videoUrl === "string") return parseWatchUrl(raw.videoUrl);
    if (typeof raw.src === "string") return parseWatchUrl(raw.src);
  }
  return "";
}

function extractVideoUrlFromHtml(html) {
  if (!html) return "";
  const patterns = [
    /https?:\/\/[^\s"'<>]+?\.mp4[^\s"'<>]*/i,
    /https?:\/\/[^\s"'<>]+?\.m3u8[^\s"'<>]*/i,
    /["']file["']\s*:\s*["']([^"']+)["']/i,
    /["']url["']\s*:\s*["']([^"']*(?:\.mp4|\.m3u8)[^"']*)["']/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = String(html).match(patterns[i]);
    if (match) {
      const url = match[1] || match[0];
      if (url && url.indexOf("http") === 0) return url;
    }
  }
  return "";
}

async function fetchWatchUrl(token, referer) {
  if (!token) return "";
  const watchApi = BASE_URL + "/watch?token=" + encodeURIComponent(token);
  try {
    const res = await Widget.http.get(watchApi, {
      headers: {
        "User-Agent": HEADERS["User-Agent"],
        Referer: referer || BASE_URL + "/",
        Accept: "*/*",
        "Accept-Language": HEADERS["Accept-Language"],
      },
    });
    const raw = res.data;
    if (raw && typeof raw === "object" && (raw.error || raw.status === 400)) {
      return "";
    }
    const url = parseWatchUrl(raw);
    if (url) return url;
  } catch (e) {
    console.error("[fetchWatchUrl] 失败:", e.message || e);
  }
  return "";
}

function collectPartUrls($, detailUrl, html) {
  const urls = [];
  const seen = new Set();
  $(".video-source-btn").each(function (_, el) {
    const href = $(el).attr("href") || "";
    if (!href || href === "#" || href.indexOf("#") === 0) return;
    const partUrl = resolveAbsoluteUrl(detailUrl, href);
    if (partUrl && !seen.has(partUrl)) {
      seen.add(partUrl);
      urls.push(partUrl);
    }
  });
  if (urls.length) return urls;

  const re = /class="video-source-btn"[^>]*href="([^"]+)"/gi;
  let match;
  while ((match = re.exec(String(html || "")))) {
    const href = match[1];
    if (!href || href === "#" || href.indexOf("#") === 0) continue;
    const partUrl = resolveAbsoluteUrl(detailUrl, href);
    if (partUrl && !seen.has(partUrl)) {
      seen.add(partUrl);
      urls.push(partUrl);
    }
  }
  return urls;
}

async function resolveTokenFromPage(pageUrl, referer) {
  try {
    const html = await fetchHtml(pageUrl, referer || BASE_URL + "/");
    const token = extractTokenFromHtml(html);
    if (token) {
      const videoUrl = await fetchWatchUrl(token, pageUrl);
      if (videoUrl) return videoUrl;
    }
    return extractVideoUrlFromHtml(html);
  } catch (e) {}
  return "";
}

async function resolveVideoUrl($, detailUrl, html) {
  const htmlText = String(html || "");
  let mainToken = "";
  try {
    mainToken = $("#video-player").attr("data-id") || "";
  } catch (e) {}
  if (!mainToken) mainToken = extractTokenFromHtml(htmlText);
  if (mainToken) {
    const mainUrl = await fetchWatchUrl(mainToken, detailUrl);
    if (mainUrl) return mainUrl;
  }

  const partUrls = collectPartUrls($, detailUrl, htmlText);
  for (let i = 0; i < partUrls.length; i++) {
    const partVideoUrl = await resolveTokenFromPage(partUrls[i], detailUrl);
    if (partVideoUrl) return partVideoUrl;
  }

  const inlineUrl = extractVideoUrlFromHtml(htmlText);
  if (inlineUrl) return inlineUrl;

  return "";
}

function parseDetailMeta(html) {
  const text = String(html || "");
  const ogTitle =
    text.match(/property="og:title"\s+content="([^"]+)"/i) ||
    text.match(/content="([^"]+)"\s+property="og:title"/i);
  const ogImage =
    text.match(/property="og:image"\s+content="([^"]+)"/i) ||
    text.match(/content="([^"]+)"\s+property="og:image"/i);
  const h1 = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = decodeHtml(
    (ogTitle && ogTitle[1]) || (h1 && h1[1].replace(/<[^>]+>/g, "")) || ""
  ).trim();
  const cover = (ogImage && ogImage[1]) || "";
  return { title, cover };
}

function emptyQuery() {
  const node = {
    first: function () {
      return node;
    },
    find: function () {
      return node;
    },
    each: function () {},
    text: function () {
      return "";
    },
    attr: function () {
      return "";
    },
  };
  return node;
}

function safeLoadHtml(html) {
  try {
    const $ = Widget.html.load(html);
    if (typeof $ === "function") {
      const probe = $("body");
      if (probe && typeof probe.attr === "function") return $;
    }
  } catch (e) {}
  return function () {
    return emptyQuery();
  };
}

function decodeHtml(text) {
  return String(text || "")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function parseVideoListRegex(html) {
  const items = [];
  const seen = new Set();
  const articleRe = /<article\b[\s\S]*?<\/article>/gi;
  let match;
  while ((match = articleRe.exec(String(html || ""))) && items.length < 60) {
    const block = match[0];
    const hrefM =
      block.match(/href="(\/movie\/[^"]+)"[^>]*rel="bookmark"/i) ||
      block.match(/rel="bookmark"[^>]*href="(\/movie\/[^"]+)"/i);
    if (!hrefM) continue;
    const href = hrefM[1];
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) continue;
    seen.add(detailLink);

    const titleM =
      block.match(/<h2[^>]*title="([^"]+)"/i) ||
      block.match(/\balt="([^"]+)"/i);
    const rawTitle = titleM ? decodeHtml(titleM[1]) : href.split("/").pop();
    const title = rawTitle.split(" Thumbnail")[0].split(" ")[0] || rawTitle;

    const coverM =
      block.match(/class="movie-image"[^>]*src="([^"]+)"/i) ||
      block.match(/class="movie-image"[^>]*data-srcset="([^"]+)"/i);
    const pubM = block.match(/datetime="([^"]+)"/i);

    items.push({
      id: detailLink,
      type: "url",
      title: title,
      backdropPath: coverM ? coverM[1] : undefined,
      releaseDate: pubM ? pubM[1].split("T")[0] : "",
      link: detailLink,
      mediaType: "movie",
    });
  }
  return items;
}

function parseVideoList(html) {
  if (!html) return [];
  let items = [];

  try {
    const $ = Widget.html.load(html);
    $("#movie-list article").each(function (_, el) {
      const $el = $(el);
      const $link = $el.find('a[rel="bookmark"]').first();
      const href = $link.attr("href") || "";
      const $h2 = $el.find("h2").first();
      const titleRaw =
        $h2.attr("title") ||
        $h2.text().trim() ||
        $el.find("img.movie-image").attr("alt") ||
        "";
      const title = decodeHtml(titleRaw.split(" Thumbnail")[0].split(" ")[0]);
      if (!title || !href) return;

      const cover =
        $el.find("img.movie-image").attr("src") ||
        $el.find(".movie-image").attr("data-srcset") ||
        $el.find(".movie-image").attr("src") ||
        "";
      const pubdate = $el.find("time").first().attr("datetime") || "";
      const detailLink = resolveUrl(href);

      items.push({
        id: detailLink,
        type: "url",
        title: title,
        backdropPath: cover || undefined,
        releaseDate: pubdate ? pubdate.split("T")[0] : "",
        link: detailLink,
        mediaType: "movie",
      });
    });
  } catch (e) {}

  if (items.length > 0) return items;
  return parseVideoListRegex(html);
}

async function loadGenreList(params) {
  const genreId = String(params.genreId || "").trim();
  if (!genreId) return [];

  const page = Number(params.page || 1);
  let url = genreId.startsWith("http") ? genreId : resolveUrl(genreId);
  if (page > 1) url += (url.indexOf("?") >= 0 ? "&" : "?") + "page=" + page;

  try {
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadLatest(params) {
  if (params.genreId) return loadGenreList(params);
  const page = Number(params.page || 1);
  try {
    const url = BASE_URL + "/release?page=" + page;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadUpcoming(params) {
  if (params.genreId) return loadGenreList(params);
  const page = Number(params.page || 1);
  try {
    const url = BASE_URL + "/upcoming?page=" + page;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadDetail(link) {
  try {
    const detailUrl = String(link);
    const cached = readVideoCache(detailUrl);
    if (cached) {
      return {
        id: detailUrl,
        type: "url",
        title: "",
        link: detailUrl,
        videoUrl: cached.videoUrl,
        playerType: "system",
        mediaType: "movie",
        customHeaders: cached.customHeaders || buildPlayHeaders(cached.videoUrl),
      };
    }

    const html = await fetchHtml(detailUrl, BASE_URL + "/");
    const $ = safeLoadHtml(html);
    const meta = parseDetailMeta(html);

    const title =
      $("h1").first().text().trim() ||
      $('meta[property="og:title"]').attr("content") ||
      meta.title ||
      "";
    const cover =
      $('meta[property="og:image"]').attr("content") ||
      $("video").attr("poster") ||
      meta.cover ||
      "";

    const videoUrl = await resolveVideoUrl($, detailUrl, html);
    if (!videoUrl) return null;

    const playHeaders = buildPlayHeaders(videoUrl);
    writeVideoCache(detailUrl, videoUrl, playHeaders);

    const genreItems = [];
    $("a[href*='/genre/'], a[href*='/tag/']").each(function (_, el) {
      const $a = $(el);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href) genreItems.push({ id: href, title: text });
    });

    const relatedItems = [];
    const seenRelated = new Set([detailUrl]);
    $("div.thumbnail, #related article, .related-videos article").each(
      function (_, el) {
        if (relatedItems.length >= 8) return false;
        const $el = $(el);
        const $rLink = $el.find('a[rel="bookmark"]');
        const rHref = $rLink.attr("href") || "";
        const rDetailLink = resolveUrl(rHref);
        if (!rDetailLink || seenRelated.has(rDetailLink)) return;
        seenRelated.add(rDetailLink);

        const rTitle =
          ($el.find("h2").attr("title") || "").split(" ")[0] ||
          "\u76f8\u5173\u5f71\u7247";
        const rCover =
          $el.find(".movie-image").attr("data-srcset") ||
          $el.find(".movie-image").attr("src") ||
          $el.find("img").attr("src") ||
          "";

        relatedItems.push({
          id: rDetailLink,
          type: "url",
          title: rTitle,
          backdropPath: rCover || undefined,
          link: rDetailLink,
          mediaType: "movie",
        });
      }
    );

    return {
      id: detailUrl,
      type: "url",
      title: title,
      backdropPath: cover || undefined,
      posterPath: cover || undefined,
      videoUrl: videoUrl,
      playerType: "system",
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      link: detailUrl,
      mediaType: "movie",
      customHeaders: playHeaders,
    };
  } catch (e) {
    console.error("[loadDetail] 失败:", e.message || e);
    return null;
  }
}

async function search(params) {
  if (params.genreId) return loadGenreList(params);

  const keyword = params.keyword || "";
  const page = Number(params.page || 1);
  if (!keyword) return [];

  try {
    const url =
      BASE_URL +
      "/search?q=" +
      encodeURIComponent(keyword) +
      "&page=" +
      page;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

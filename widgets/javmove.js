WidgetMetadata = {
  id: "forward.javmove",
  title: "JavMove",
  version: "1.0.8",
  requiredVersion: "0.0.1",
  description: "JavMove \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u6700\u65b0\u3001\u5373\u5c06\u4e0a\u6620\u3001\u5206\u7c7b\u5bfc\u822a\u3001\u641c\u7d22",
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
    {
      id: "genres",
      title: "\u5206\u7c7b\u6d4f\u89c8",
      functionName: "loadGenres",
      sectionMode: true,
      cacheDuration: 60,
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
const HOT_GENRE_PATHS = [
  "/genres/javuncensored/jav-uncensored",
  "/genres/QxHGjE/solowork",
  "/genres/GVWkCw/creampie",
  "/genres/BJiygps/big-tits",
  "/genres/BcEqYww/married-woman",
  "/genres/DFiQTPU/mature-woman",
  "/genres/BHCJmMg/amateur",
  "/genres/Ljbfjc/beautiful-girl",
  "/genres/CMwMXEY/school-girls",
  "/genres/HVOSKBU/nasty-hardcore",
  "/genres/BMPngcQ/slut",
  "/genres/DSqPmNM/cuckold",
];
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
  const cover = extractCoverFromHtml(text, null) || (ogImage && ogImage[1]) || "";
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

function normalizeImageUrl(url) {
  const raw = decodeHtml(String(url || "").trim());
  if (!raw) return "";
  if (raw.startsWith("//")) return "https:" + raw;
  return raw;
}

function isValidCover(url) {
  const u = normalizeImageUrl(url);
  if (!u) return false;
  if (u.indexOf("data:image") === 0) return false;
  return u.indexOf("http") === 0;
}

function pickCoverFromAttrs(attrs) {
  const list = attrs || [];
  for (let i = 0; i < list.length; i++) {
    const url = normalizeImageUrl(list[i]);
    if (isValidCover(url)) return url;
  }
  return "";
}

function pickCoverFromNode($img) {
  if (!$img || !$img.length) return "";
  return pickCoverFromAttrs([
    $img.attr("data-srcset"),
    $img.attr("data-src"),
    $img.attr("data-original"),
    $img.attr("src"),
  ]);
}

function extractCoverFromHtml(html, $) {
  const text = String(html || "");
  const patterns = [
    /class="movie-image"[^>]*data-srcset="([^"]+)"/i,
    /data-srcset="(https?:\/\/[^"]+)"/i,
    /class="movie-image"[^>]*src="(https?:\/\/[^"]+)"/i,
    /https?:\/\/ie2\.javmove\.com\/media\/[^"'\s]+\.(?:jpg|jpeg|webp|png)/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = text.match(patterns[i]);
    const url = normalizeImageUrl(match && (match[1] || match[0]));
    if (isValidCover(url)) return url;
  }
  try {
    if ($) {
      const fromNode = pickCoverFromNode($(".movie-image").first());
      if (fromNode) return fromNode;
      const fromRelated = pickCoverFromNode($("img[data-srcset]").first());
      if (fromRelated) return fromRelated;
    }
  } catch (e) {}
  return "";
}

function parseListCover(block, $img) {
  if ($img && $img.length) {
    const fromNode = pickCoverFromNode($img);
    if (fromNode) return fromNode;
  }
  const text = String(block || "");
  const patterns = [
    /data-srcset="([^"]+)"/i,
    /class="movie-image"[^>]*src="(https?:\/\/[^"]+)"/i,
    /src="(https?:\/\/ie2\.javmove\.com\/[^"]+)"/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = text.match(patterns[i]);
    const url = normalizeImageUrl(match && match[1]);
    if (isValidCover(url)) return url;
  }
  return "";
}

function normalizeGenreId(raw) {
  const text = decodeHtml(String(raw || "").trim());
  if (!text) return "";
  if (text.indexOf("/genres/") >= 0) {
    const path = text.match(/(\/genres\/[^\s?#]+)/);
    return path ? resolveUrl(path[1]) : resolveUrl(text);
  }
  if (text.indexOf("javmove.com") >= 0 && text.indexOf("http") === 0) return text;
  return "";
}

function extractMovieListHtml(html) {
  const text = String(html || "");
  const match = text.match(/id="movie-list"[\s\S]*?<\/section>/i);
  return match ? match[0] : text;
}

function buildGenrePageUrl(genreUrl, page) {
  let url = normalizeGenreId(genreUrl);
  if (!url) return "";
  const p = Number(page || 1);
  if (p > 1) url += (url.indexOf("?") >= 0 ? "&" : "?") + "page=" + p;
  return url;
}

async function fetchGenreVideoList(genreRef, page) {
  const baseUrl = normalizeGenreId(genreRef);
  if (!baseUrl) return [];
  const fetchUrl = buildGenrePageUrl(baseUrl, page);
  try {
    const html = await fetchHtml(fetchUrl, baseUrl);
    return parseVideoList(html);
  } catch (e) {
    return [];
  }
}

function parseVideoListRegex(html) {
  const items = [];
  const seen = new Set();
  const scoped = extractMovieListHtml(html);
  const articleRe = /<article\b[\s\S]*?<\/article>/gi;
  let match;
  while ((match = articleRe.exec(scoped)) && items.length < 60) {
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

    const coverM = parseListCover(block);
    const pubM = block.match(/datetime="([^"]+)"/i);

    items.push({
      id: detailLink,
      type: "url",
      title: title,
      backdropPath: coverM || undefined,
      releaseDate: pubM ? pubM[1].split("T")[0] : "",
      link: detailLink,
      mediaType: "movie",
    });
  }
  return items;
}

function parseVideoList(html) {
  if (!html) return [];
  const scoped = extractMovieListHtml(html);
  let items = [];

  try {
    const $ = Widget.html.load(scoped);
    $("#movie-list article, article").each(function (_, el) {
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

      const cover = parseListCover($el.html(), $el.find("img.movie-image, .movie-image").first());
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
  return parseVideoListRegex(scoped);
}

async function loadGenreList(params) {
  const genreId = normalizeGenreId(
    params.genreId || params.link || params.id || ""
  );
  if (!genreId) return [];
  return fetchGenreVideoList(genreId, params.page);
}

function parseGenreNavFromHtml(html) {
  const items = [];
  const seen = new Set();
  const re = /href="(\/genres\/[^"?#]+)"[^>]*>([^<]+)</gi;
  let match;
  while ((match = re.exec(String(html || "")))) {
    const path = match[1];
    const url = resolveUrl(path);
    const title = decodeHtml(match[2]).trim();
    if (!title || seen.has(url)) continue;
    seen.add(url);
    items.push({ id: url, title: title, url: url, path: path });
  }
  return items;
}

function toGenreNavItem(genre) {
  const genreUrl = normalizeGenreId(genre.url || genre.path || genre.id);
  return {
    id: genreUrl,
    type: "url",
    title: genre.title,
    link: genreUrl,
    mediaType: "movie",
    genreItems: [{ id: genreUrl, title: genre.title }],
  };
}

function buildGenreSections(allGenres) {
  const hotSet = new Set(
    HOT_GENRE_PATHS.map(function (p) {
      return resolveUrl(p);
    })
  );
  const hot = [];
  for (let i = 0; i < HOT_GENRE_PATHS.length; i++) {
    const url = resolveUrl(HOT_GENRE_PATHS[i]);
    const found = allGenres.find(function (g) {
      return g.url === url;
    });
    if (found) hot.push(found);
  }
  const rest = allGenres.filter(function (g) {
    return !hotSet.has(g.url);
  });
  const sections = [];
  if (hot.length) {
    sections.push({
      id: "javmove-hot-genres",
      type: "url",
      title: "\u70ed\u95e8\u5206\u7c7b",
      childItems: hot.map(toGenreNavItem),
    });
  }
  if (rest.length) {
    sections.push({
      id: "javmove-all-genres",
      type: "url",
      title: "\u5168\u90e8\u7c7b\u578b (" + rest.length + ")",
      childItems: rest.map(toGenreNavItem),
    });
  }
  return sections;
}

async function loadAllGenreNav() {
  try {
    const html = await fetchHtml(BASE_URL + "/genres", BASE_URL + "/");
    return parseGenreNavFromHtml(html);
  } catch (e) {
    return [];
  }
}

async function loadGenres(params) {
  const genreId = normalizeGenreId(
    params.genreId || params.link || params.id || ""
  );
  if (genreId) return fetchGenreVideoList(genreId, params.page);

  const allGenres = await loadAllGenreNav();
  if (!allGenres.length) return [];
  return buildGenreSections(allGenres);
}

function isGenreLink(link) {
  return /\/genres\//.test(String(link || ""));
}

async function loadGenreDetail(genreUrl) {
  const url = normalizeGenreId(genreUrl);
  if (!url) return null;
  const html = await fetchHtml(url, url);
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = decodeHtml(h1 ? h1[1].replace(/<[^>]+>/g, "") : "").trim();
  const videos = await fetchGenreVideoList(url, 1);
  if (!videos.length) return null;
  return {
    id: url,
    type: "url",
    title: title || "\u5206\u7c7b",
    link: url,
    mediaType: "movie",
    childItems: videos,
    genreItems: [{ id: url, title: title || "\u5206\u7c7b" }],
  };
}

async function loadLatest(params) {
  if (params.genreId) return loadGenreList(params);
  const page = Number(params.page || 1);
  try {
    const url = BASE_URL + "/release?page=" + page;
    const html = await fetchHtml(url, BASE_URL + "/");
    return parseVideoList(html);
  } catch (e) {
    return [];
  }
}

async function loadUpcoming(params) {
  if (params.genreId) return loadGenreList(params);
  const page = Number(params.page || 1);
  try {
    const url = BASE_URL + "/upcoming?page=" + page;
    const html = await fetchHtml(url, BASE_URL + "/");
    return parseVideoList(html);
  } catch (e) {
    return [];
  }
}

async function loadDetail(link) {
  try {
    const detailUrl = String(link);
    if (isGenreLink(detailUrl)) {
      return loadGenreDetail(detailUrl);
    }
    const cached = readVideoCache(detailUrl);
    const html = await fetchHtml(detailUrl, BASE_URL + "/");
    const $ = safeLoadHtml(html);
    const meta = parseDetailMeta(html);

    const title =
      $("h1").first().text().trim() ||
      $('meta[property="og:title"]').attr("content") ||
      meta.title ||
      "";
    const cover =
      extractCoverFromHtml(html, $) ||
      $('meta[property="og:image"]').attr("content") ||
      $("video").attr("poster") ||
      meta.cover ||
      "";

    let videoUrl = cached ? cached.videoUrl : "";
    let playHeaders = cached ? cached.customHeaders : null;
    if (!videoUrl) {
      videoUrl = await resolveVideoUrl($, detailUrl, html);
      if (!videoUrl) return null;
      playHeaders = buildPlayHeaders(videoUrl);
      writeVideoCache(detailUrl, videoUrl, playHeaders);
    }
    if (!playHeaders) playHeaders = buildPlayHeaders(videoUrl);

    const genreItems = [];
    $("a[href*='/genres/'], a[href*='/stars/'], a[href*='/makers/']").each(
      function (_, el) {
        const $a = $(el);
        const href = resolveUrl($a.attr("href") || "");
        const text = $a.text().trim();
        const genreUrl = normalizeGenreId(href);
        if (text && genreUrl) genreItems.push({ id: genreUrl, title: text });
      }
    );
    if (!genreItems.length) {
      const genreRe =
        /href="(\/(?:genres|stars|makers)\/[^"]+)"[^>]*>([^<]+)</gi;
      let genreMatch;
      while ((genreMatch = genreRe.exec(String(html || "")))) {
        const href = resolveUrl(genreMatch[1]);
        const text = decodeHtml(genreMatch[2]).trim();
        const genreUrl = normalizeGenreId(href);
        if (text && genreUrl) genreItems.push({ id: genreUrl, title: text });
      }
    }

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
        const rCover = parseListCover(
          $el.html(),
          $el.find(".movie-image, img").first()
        );

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
    const html = await fetchHtml(url, BASE_URL + "/");
    return parseVideoList(html);
  } catch (e) {
    return [];
  }
}

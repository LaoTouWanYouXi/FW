WidgetMetadata = {
  id: "forward.javxx",
  title: "JavXX",
  version: "1.2.1",
  requiredVersion: "0.0.1",
  description: "JavXX \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u70ed\u95e8\u3001\u65b0\u53d1\u5e03\u3001\u89c2\u770b\u699c\u3001\u6709/\u65e0\u7801\u3001\u7d20\u4eba\u5236\u4f5c\u5546\u3001\u7c7b\u522b/\u5973\u6f14\u5458/\u5236\u4f5c\u5546/\u7cfb\u5217\u7d22\u5f15\u4e0e\u641c\u7d22",
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
      title: "\u65b0\u53d1\u5e03",
      functionName: "loadNew",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "recent",
      title: "\u6700\u8fd1\u6dfb\u52a0",
      functionName: "loadRecent",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "today",
      title: "\u4eca\u65e5\u89c2\u770b",
      functionName: "loadToday",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "week",
      title: "\u672c\u5468\u89c2\u770b",
      functionName: "loadWeek",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "month",
      title: "\u672c\u6708\u89c2\u770b",
      functionName: "loadMonth",
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
    },
    {
      id: "leaked",
      title: "\u65e0\u7801\u6cc4\u9732",
      functionName: "loadLeaked",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "vr",
      title: "VR",
      functionName: "loadVr",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "fc2",
      title: "FC2",
      functionName: "loadFc2",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "siro",
      title: "SIRO \u7d20\u4eba",
      functionName: "loadSiro",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "luxu",
      title: "LUXU \u7d20\u4eba",
      functionName: "loadLuxu",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "gana",
      title: "200GANA",
      functionName: "loadGana",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "heyzo",
      title: "HEYZO",
      functionName: "loadHeyzo",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "genres",
      title: "\u7c7b\u522b",
      functionName: "loadGenres",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "actresses",
      title: "\u5973\u6f14\u5458",
      functionName: "loadActresses",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "makers",
      title: "\u5236\u4f5c\u5546",
      functionName: "loadMakers",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "series",
      title: "\u7cfb\u5217",
      functionName: "loadSeries",
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
const STREAM_SOURCES = ["123av", "javxx", "missav"];
const SURRIT_BASES = ["https://surrit.store", "https://surrit.com"];
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
  today: "/all?sort=today",
  week: "/all?sort=week",
  month: "/all?sort=month",
  censored: "/censored",
  uncensored: "/uncensored",
  leaked: "/uncensored-leaked",
  vr: "/vr",
  fc2: "/makers/fc2",
  siro: "/tags/siro",
  luxu: "/tags/259luxu",
  gana: "/tags/200gana",
  heyzo: "/makers/heyzo"
};

const DIRECTORY_INDEX_MAP = {
  genres: "/genres",
  actresses: "/actresses",
  makers: "/makers",
  series: "/series"
};

function isVideoDetailUrl(url) {
  return /\/v\/[^/?#]+/i.test(String(url || ""));
}

function isDirectoryListingUrl(url) {
  return /\/(genres|actresses|makers|series)\/[^/?#]+/i.test(String(url || "")) && !isVideoDetailUrl(url);
}

function isDirectoryIndexUrl(url) {
  const u = String(url || "").replace(/\/+$/, "");
  return new RegExp(`${LANG_PREFIX.replace("/", "\\/")}\\/(genres|actresses|makers|series)$`, "i").test(u);
}

function cleanDirectoryTitle(text, slug) {
  let t = normalizeListText(text);
  t = t.replace(/\s+\+\s*\u5173\u6ce8.*$/i, "").replace(/\s*\u5df2\u5173\u6ce8.*$/i, "");
  t = t.replace(/\s+\d[\d,.\sKk\u4e07\u4e2a\u89c6\u9891\u4f4d\u6b21\u89c2\u770b\u5173\u6ce8]*$/i, "").trim();
  if (!t || t.length > 80 || looksLikeDuration(t) || /^\d/.test(t)) {
    t = String(slug || "").replace(/-/g, " ");
  }
  return t || String(slug || "").replace(/-/g, " ");
}

function parseDirectoryListRegex(html, indexPath) {
  const items = [];
  const seen = new Set();
  const prefix = LANG_PREFIX + indexPath;
  const esc = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`href="((?:https?:\\/\\/[^"']+)?${esc}\\/([^"#?/]+))"`, "gi");
  let m;
  while ((m = re.exec(String(html || ""))) && items.length < 120) {
    const href = m[1];
    const slug = m[2];
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) continue;
    seen.add(detailLink);
    const window = String(html).slice(m.index, m.index + 400);
    const titleM = window.match(/>([^<]{2,100})</);
    const title = cleanDirectoryTitle(titleM ? titleM[1] : "", slug);
    items.push({
      id: detailLink,
      type: "url",
      title,
      link: detailLink,
      mediaType: "movie",
    });
  }
  return items;
}

function parseDirectoryList(html, indexPath) {
  if (!html || isMigrationPage(html)) return [];
  const $ = Widget.html.load(html);
  const items = [];
  const seen = new Set();
  const prefix = LANG_PREFIX + indexPath;

  $("a[href]").each((_, el) => {
    if (items.length >= 120) return false;
    const $a = $(el);
    let href = $a.attr("href") || "";
    if (!href) return;
    let path = href;
    if (path.startsWith("http")) path = path.replace(BASE_URL, "");
    if (!path.startsWith(prefix + "/")) return;
    const slug = path.slice(prefix.length + 1).split(/[?#]/)[0];
    if (!slug || slug.includes("/")) return;
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) return;
    seen.add(detailLink);
    const title = cleanDirectoryTitle($a.text(), slug);
    const $scope = $a.closest("article, .group, div").length ? $a.closest("article, .group, div") : $a;
    const cover = pickImageUrl($scope.find("img").first()) || pickImageUrl($a.find("img").first());
    items.push({
      id: detailLink,
      type: "url",
      title,
      backdropPath: cover || undefined,
      posterPath: cover || undefined,
      link: detailLink,
      mediaType: "movie",
    });
  });

  if (items.length > 0) return items;
  return parseDirectoryListRegex(html, indexPath);
}

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

function isLogoImage(url) {
  if (!url) return true;
  const u = String(url).toLowerCase();
  return /\/assets\/|logo\.|favicon|avatar\.|\/logo[/_-]|123av\.png|brand|spinner|loading\.gif|1x1/i.test(u);
}

function extractVideoSlug(detailUrl) {
  const m = String(detailUrl || "").match(/\/v\/([^/?#]+)/i);
  return m ? decodeURIComponent(m[1]).toLowerCase() : "";
}

function extractVideoCode(slug) {
  if (!slug) return "";
  return slug.replace(/-(?:uncensored-leaked|chinese-subtitle|english-subtitle|censored|leaked|subtitle)$/gi, "");
}

function belongsToVideo(url, slug) {
  if (!url || !slug) return false;
  const u = String(url).toLowerCase();
  const s = slug.toLowerCase();
  if (u.includes("/" + s + "/") || u.includes("/" + s + ".") || u.includes("/" + s + "?")) return true;
  const code = extractVideoCode(s);
  if (code && code !== s) {
    if (u.includes("/" + code + "/") || u.includes("/" + code + ".") || u.includes("/" + code + "?")) return true;
  }
  return false;
}

function isCoverImage(url) {
  return /\/cover(?:-n|-t)?\.(?:webp|jpg|jpeg)/i.test(String(url || ""));
}

function isValidImageUrl(url) {
  if (!url || !url.startsWith("http")) return false;
  if (isLogoImage(url)) return false;
  if (/placeholder|loading|blank|data:image|spacer/i.test(url)) return false;
  return /\.(webp|jpg|jpeg|png|gif)(\?|$)/i.test(url) || url.includes("icdn.") || url.includes("fourhoi.com");
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

function extractPosterFromHtml(html, detailUrl, $) {
  const slug = extractVideoSlug(detailUrl);
  const text = String(html || "");

  if ($ && $.fn) {
    const selectors = [
      ".video-cover img",
      ".movie-cover img",
      ".detail img[src*='icdn'], .detail img[data-src*='icdn']",
      "img[data-src*='icdn'][data-src*='cover']",
      "img[src*='icdn'][src*='cover']",
      "img[data-src*='cover.webp'], img[src*='cover.webp']",
    ];
    for (let i = 0; i < selectors.length; i++) {
      const url = pickImageUrl($(selectors[i]).first());
      if (url && !isLogoImage(url) && (!slug || belongsToVideo(url, slug))) return url;
    }
    const poster = normalizeImageUrl($("video[poster]").attr("poster") || "");
    if (poster && isValidImageUrl(poster) && (!slug || belongsToVideo(poster, slug))) return upgradeCoverUrl(poster);
  }

  if (slug) {
    const icdnRe = /https?:\/\/icdn[^"'\s<>]+cover(?:-n|-t)?\.(?:webp|jpg|jpeg)(?:\?[^"'\s<>]*)?/gi;
    let m;
    while ((m = icdnRe.exec(text))) {
      if (belongsToVideo(m[0], slug) && !isLogoImage(m[0])) return upgradeCoverUrl(m[0]);
    }
    const code = extractVideoCode(slug);
    if (code) return upgradeCoverUrl(`https://fourhoi.com/${code}/cover-t.jpg?class=normal`);
    return upgradeCoverUrl(`https://fourhoi.com/${slug}/cover-t.jpg?class=normal`);
  }

  const og1 = text.match(/property=["']og:image["']\s+content=["']([^"']+)["']/i);
  const og2 = text.match(/content=["']([^"']+)["']\s+property=["']og:image["']/i);
  const og = normalizeImageUrl((og1 && og1[1]) || (og2 && og2[1]) || "");
  if (og && isValidImageUrl(og) && !isLogoImage(og) && (!slug || belongsToVideo(og, slug))) return upgradeCoverUrl(og);

  return "";
}

function collectBackdropPaths(html, detailUrl, posterUrl, $) {
  const slug = extractVideoSlug(detailUrl);
  if (!slug) return undefined;
  const paths = [];
  const seen = new Set();
  const posterNorm = posterUrl ? upgradeCoverUrl(normalizeImageUrl(posterUrl)) : "";

  function add(url) {
    const u = upgradeCoverUrl(normalizeImageUrl(url));
    if (!isValidImageUrl(u) || isLogoImage(u) || seen.has(u)) return;
    if (posterNorm && u === posterNorm) return;
    if (isCoverImage(u)) return;
    if (!belongsToVideo(u, slug)) return;
    seen.add(u);
    paths.push(u);
  }

  const text = String(html || "");
  const slugEsc = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const icdnStillsRe = new RegExp(`https?:\\/\\/icdn[^"'\\s<>]*\\/${slugEsc}\\/[^"'\\s<>]+\\.(?:webp|jpg|jpeg)`, "gi");
  let m;
  while ((m = icdnStillsRe.exec(text)) && paths.length < 20) add(m[0]);

  const previewRes = [
    /https?:\/\/icdn[^"'\s<>]*\/(?:preview|sample|screen)[^"'\s<>]*\.(?:webp|jpg|jpeg)/gi,
    /https?:\/\/fourhoi\.com\/[^"'\s<>]*\/(?:preview|sample|screen)[^"'\s<>]*\.(?:webp|jpg|jpeg|png)/gi,
  ];
  for (let i = 0; i < previewRes.length; i++) {
    while ((m = previewRes[i].exec(text)) && paths.length < 20) add(m[0]);
  }

  if ($ && $.fn) {
    $("#preview-show img, [id*='preview'] img, .preview img, .screenshots img").each((_, el) => {
      if (paths.length >= 20) return false;
      add(pickImageUrl($(el)));
    });
  }

  return paths.length > 0 ? paths : undefined;
}

function sanitizeDurationText(text) {
  if (!text) return undefined;
  const t = String(text).trim();
  return /^\d{1,2}:\d{2}(:\d{2})?$/.test(t) ? t : undefined;
}

function looksLikeDuration(text) {
  return /^\d{1,2}:\d{2}(:\d{2})?$/.test(String(text || "").trim());
}

function normalizeListText(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function slugToDisplayTitle(href) {
  const slug = extractVideoSlug(resolveUrl(href));
  if (!slug) return "";
  return slug.toUpperCase();
}

function extractListTitle($scope, href) {
  function pick(text) {
    const t = normalizeListText(text);
    if (!t || looksLikeDuration(t)) return "";
    return t;
  }

  const tries = [
    () => pick($scope.find("h3 a[href*='/v/']").first().text()),
    () => pick($scope.find("h3").first().text()),
    () => pick($scope.find(".truncate a[href*='/v/']").first().text()),
    () => pick($scope.find(".truncate").first().text()),
    () => pick($scope.find(".text-secondary a[href*='/v/']").first().text()),
    () => pick($scope.find(".text-secondary").first().text()),
    () => pick($scope.find(".title a[href*='/v/']").first().text()),
    () => pick($scope.find(".title").first().text()),
    () => {
      let found = "";
      $scope.find("a[href*='/v/']").each((_, el) => {
        const t = pick($(el).text());
        if (t && t.length > (found.length || 0)) found = t;
      });
      return found;
    },
    () => pick($scope.find("img").first().attr("alt")),
    () => pick($scope.find('a[href*="/v/"]').first().attr("title")),
  ];

  for (let i = 0; i < tries.length; i++) {
    const title = tries[i]();
    if (title) return title;
  }
  return slugToDisplayTitle(href);
}

function extractListDuration($scope) {
  function pick(text) {
    const t = String(text || "").trim();
    return looksLikeDuration(t) ? t : "";
  }

  const tries = [
    () => pick($scope.find(".duration").first().text()),
    () => pick($scope.find(".absolute.bottom-1").first().text()),
    () => pick($scope.find(".text-nord9").first().text()),
  ];
  for (let i = 0; i < tries.length; i++) {
    const d = tries[i]();
    if (d) return d;
  }
  const m = normalizeListText($scope.text()).match(/\b(\d{1,2}:\d{2}:\d{2})\b/);
  return m ? m[1] : "";
}

function resolveListScope($, el) {
  const $el = $(el);
  if ($el.is("div.thumbnail, .thumbnail")) {
    const $parent = $el.parent();
    if ($parent.length && ($parent.find("h3, .truncate, .text-secondary").length > 0)) return $parent;
    const $group = $el.closest(".grid .group, article, .vid-items > div.item");
    if ($group.length) return $group;
    return $parent.length ? $parent : $el;
  }
  if ($el.hasClass("group") && $el.parent().hasClass("grid")) return $el;
  if ($el.hasClass("group") || $el.is("article")) {
    const $gridGroup = $el.closest(".grid .group");
    return $gridGroup.length ? $gridGroup : $el;
  }
  const $group = $el.closest(".grid .group, article, .vid-items > div.item");
  return $group.length ? $group : $el;
}

function parseVideoListRegex(html) {
  const items = [];
  const seen = new Set();
  const text = String(html || "");
  const linkRe = /href="((?:https?:\/\/[^"']+)?\/cn\/v\/[^"#?]+)"/gi;
  let m;
  while ((m = linkRe.exec(text)) && items.length < 60) {
    const href = m[1];
    if (!/\/v\//.test(href)) continue;
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) continue;
    const window = text.slice(Math.max(0, m.index - 1200), m.index + 600);
    const titleM =
      window.match(/<h3[^>]*>[\s\S]*?<a[^>]+href="[^"]*\/v\/[^"]+"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/h3>/i) ||
      window.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i) ||
      window.match(/class="[^"]*truncate[^"]*"[^>]*>([\s\S]*?)<\//i);
    let title = titleM ? normalizeListText(titleM[1].replace(/<[^>]+>/g, "")) : "";
    if (!title || looksLikeDuration(title)) title = slugToDisplayTitle(href);
    if (!title) continue;
    seen.add(detailLink);
    const coverM = window.match(/https?:\/\/icdn[^"'\s<>]+cover(?:-n|-t)?\.(?:webp|jpg|jpeg)/i);
    const durationM = window.match(/\b(\d{1,2}:\d{2}:\d{2})\b/);
    const item = {
      id: href,
      type: "url",
      title,
      backdropPath: coverM ? upgradeCoverUrl(coverM[0]) : undefined,
      posterPath: coverM ? upgradeCoverUrl(coverM[0]) : undefined,
      link: detailLink,
      mediaType: "movie",
    };
    const durationText = durationM ? sanitizeDurationText(durationM[1]) : undefined;
    if (durationText) item.durationText = durationText;
    items.push(item);
  }
  return items;
}

function readVideoCache(link) {
  try {
    const raw = Widget.storage.get("vurl:v3:" + String(link));
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (data && data.videoUrl && data.ts && Date.now() - data.ts < VIDEO_CACHE_TTL * 1000) return data;
  } catch (e) {}
  return null;
}

function writeVideoCache(link, videoUrl, customHeaders) {
  if (!videoUrl) return;
  try {
    Widget.storage.set("vurl:v3:" + String(link), JSON.stringify({ videoUrl, customHeaders, ts: Date.now() }));
  } catch (e) {}
}

function buildPlayHeaders(videoUrl) {
  const isSurrit = videoUrl && /surrit\.(?:com|store)/i.test(videoUrl);
  const base = isSurrit
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
  const text = String(html || "");

  const pipeMatch = text.match(/m3u8\|([a-f0-9|]+)\|com\|surrit\|https\|video/i);
  if (pipeMatch) {
    const uuid = pipeMatch[1].split("|").reverse().join("-");
    if (/^[a-f0-9-]{36}$/i.test(uuid)) return `https://surrit.com/${uuid}/playlist.m3u8`;
  }

  const packed = text.match(/'m3u8([\s\S]*?)video/);
  if (packed) {
    try {
      const parts = packed[1].split("|").reverse();
      if (parts.length >= 9) {
        return `${parts[1]}://${parts[2]}.${parts[3]}/${parts[4]}-${parts[5]}-${parts[6]}-${parts[7]}-${parts[8]}/playlist.m3u8`;
      }
    } catch (e) {}
  }

  const direct = text.match(/https?:\/\/surrit\.(?:com|store)\/[a-f0-9-]{36}\/playlist\.m3u8/i);
  if (direct) return direct[0];

  const generic = text.match(/https?:\/\/[^\s"'<>]+\.m3u8(?:\?[^\s"'<>]*)?/i);
  if (generic && !/\.css|\.js/i.test(generic[0])) return generic[0];

  return "";
}

function extractSurritVideoId(html) {
  const text = String(html || "");
  const dataMatch = text.match(/data-url=["']([^"']+)["']/i);
  if (dataMatch) {
    try {
      const decoded = xorDecode(dataMatch[1], XOR_KEY);
      const id = decoded.replace(/https?:\/\/[^/]+/, "").split("/").filter(Boolean).pop();
      if (id) return id;
    } catch (e) {}
  }
  const embed = text.match(/surrit\.(?:com|store)\/e\/([a-zA-Z0-9_-]+)/i);
  if (embed) return embed[1];
  const uuid = text.match(/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i);
  if (uuid) return uuid[1];
  return "";
}

function detectSurritBases(html) {
  const bases = [];
  const text = String(html || "");
  const embedMatch = text.match(/https?:\/\/surrit\.\w+/i);
  if (embedMatch) bases.push(embedMatch[0].replace(/\/e\/.*$/, "").replace(/\/stream.*$/, ""));
  for (let i = 0; i < SURRIT_BASES.length; i++) bases.push(SURRIT_BASES[i]);
  const unique = [];
  const seen = new Set();
  for (let i = 0; i < bases.length; i++) {
    const b = bases[i];
    if (!b || seen.has(b)) continue;
    seen.add(b);
    unique.push(b);
  }
  return unique;
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

async function resolveSurritStreamAny(videoId, html) {
  const bases = detectSurritBases(html);
  for (let b = 0; b < bases.length; b++) {
    for (let i = 0; i < STREAM_SOURCES.length; i++) {
      try {
        const url = await resolveSurritStream(videoId, bases[b], STREAM_SOURCES[i]);
        if (url) return url;
      } catch (e) {}
    }
  }
  return "";
}

function pickItemCover(scopeHtml, href, $img) {
  const slug = extractVideoSlug(resolveUrl(href));
  const fromImg = pickImageUrl($img);
  if (fromImg && !isLogoImage(fromImg) && (!slug || belongsToVideo(fromImg, slug))) return fromImg;
  const fromPoster = extractPosterFromHtml(scopeHtml, resolveUrl(href));
  if (fromPoster) return fromPoster;
  return fromImg && !isLogoImage(fromImg) ? fromImg : "";
}

function parseVideoList(html) {
  if (!html || isMigrationPage(html)) return [];
  const $ = Widget.html.load(html);
  const items = [];
  const seen = new Set();

  function pushItem(href, title, cover, duration, scopeHtml, $img) {
    if (!href) return;
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) return;
    const finalTitle = normalizeListText(title) || slugToDisplayTitle(href);
    if (!finalTitle || looksLikeDuration(finalTitle)) return;
    seen.add(detailLink);
    const coverUrl = upgradeCoverUrl(cover || pickItemCover(scopeHtml || "", href, $img)) || undefined;
    const item = {
      id: href,
      type: "url",
      title: finalTitle,
      backdropPath: coverUrl,
      posterPath: coverUrl,
      link: detailLink,
      mediaType: "movie",
    };
    const durationText = sanitizeDurationText(duration);
    if (durationText) item.durationText = durationText;
    items.push(item);
  }

  function parseCard(el) {
    const $scope = resolveListScope($, el);
    const href =
      $scope.find('a[href*="/v/"]').first().attr("href") ||
      $scope.find("a[href*='/v/']").first().attr("href") ||
      "";
    if (!/\/v\//.test(href)) return;
    const title = extractListTitle($scope, href);
    const duration = extractListDuration($scope);
    const $img = $scope.find("img").first();
    pushItem(href, title, pickItemCover($scope.html(), href, $img), duration, $scope.html(), $img);
  }

  const cardSelectors = [".grid .group", ".vid-items > div.item", "div.thumbnail"];
  for (let i = 0; i < cardSelectors.length; i++) {
    const $cards = $(cardSelectors[i]);
    if ($cards.length === 0) continue;
    $cards.each((_, el) => parseCard(el));
    if (items.length > 0) break;
  }

  if (items.length === 0) {
    $('a[href*="/v/"], a[href*="/cn/v/"]').each((_, el) => {
      const $a = $(el);
      const href = $a.attr("href") || "";
      if (!/\/v\//.test(href)) return;
      const $scope = $a.closest(".grid .group, div.thumbnail, div.item, article");
      const $root = $scope.length ? $scope : $a.parent();
      const title = extractListTitle($root, href);
      const duration = extractListDuration($root);
      const $img = $root.find("img").first();
      pushItem(href, title, pickItemCover($root.html() || $a.html(), href, $img), duration, $root.html() || $a.html(), $img);
    });
  }

  if (items.length === 0) return parseVideoListRegex(html);

  return items;
}

async function fetchHtml(pathOrUrl) {
  const url = pathOrUrl.startsWith("http") ? pathOrUrl : `${BASE_URL}${LANG_PREFIX}${pathOrUrl}`;
  const res = await Widget.http.get(url, { headers: HEADERS });
  return { url, html: res.data || "" };
}

async function loadCategory(categoryId, params) {
  if (params && (params.genreId || params.peopleId)) return loadFilterList(params);
  const page = Number((params && params.page) || 1);
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

async function loadFilterList(params) {
  const filterId = String((params && (params.genreId || params.peopleId)) || "").trim();
  if (!filterId) return [];
  const page = Number(params.page || 1);
  let url = filterId.startsWith("http") ? filterId : resolveUrl(filterId);
  if (url.includes("javxx.com")) url = url.replace("https://javxx.com", BASE_URL).replace("http://javxx.com", BASE_URL);
  if (page > 1) url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  try {
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadBrowseModule(moduleKey, params) {
  if (params && (params.genreId || params.peopleId)) return loadFilterList(params);
  const indexPath = DIRECTORY_INDEX_MAP[moduleKey];
  if (!indexPath) return [];
  const page = Number((params && params.page) || 1);
  let url = `${BASE_URL}${LANG_PREFIX}${indexPath}`;
  if (page > 1) url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  try {
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseDirectoryList(res.data, indexPath);
  } catch (e) {
    return [];
  }
}

async function loadGenreList(params) {
  return loadFilterList(params);
}

async function loadHot(params) { return loadCategory("hot", params); }
async function loadNew(params) { return loadCategory("new", params); }
async function loadRecent(params) { return loadCategory("recent", params); }
async function loadToday(params) { return loadCategory("today", params); }
async function loadWeek(params) { return loadCategory("week", params); }
async function loadMonth(params) { return loadCategory("month", params); }
async function loadCensored(params) { return loadCategory("censored", params); }
async function loadUncensored(params) { return loadCategory("uncensored", params); }
async function loadLeaked(params) { return loadCategory("leaked", params); }
async function loadVr(params) { return loadCategory("vr", params); }
async function loadFc2(params) { return loadCategory("fc2", params); }
async function loadSiro(params) { return loadCategory("siro", params); }
async function loadLuxu(params) { return loadCategory("luxu", params); }
async function loadGana(params) { return loadCategory("gana", params); }
async function loadHeyzo(params) { return loadCategory("heyzo", params); }
async function loadGenres(params) { return loadBrowseModule("genres", params); }
async function loadActresses(params) { return loadBrowseModule("actresses", params); }
async function loadMakers(params) { return loadBrowseModule("makers", params); }
async function loadSeries(params) { return loadBrowseModule("series", params); }

async function resolveVideoUrl(html, detailUrl) {
  let videoUrl = extractM3u8FromHtml(html);
  const $ = Widget.html.load(html);

  if (!videoUrl) {
    const dataUrl = $("#video-files div").attr("data-url")
      || $("[data-url]").filter((_, el) => {
        const val = $(el).attr("data-url") || "";
        return val.length > 20;
      }).first().attr("data-url")
      || "";
    if (dataUrl) {
      try {
        const decodedUrl = xorDecode(dataUrl, XOR_KEY);
        const videoId = decodedUrl.replace(/https?:\/\/[^/]+/, "").split("/").filter(Boolean).pop() || "";
        if (videoId) videoUrl = await resolveSurritStreamAny(videoId, html);
      } catch (e) {}
    }
  }

  if (!videoUrl) {
    const videoId = extractSurritVideoId(html);
    if (videoId) {
      try { videoUrl = await resolveSurritStreamAny(videoId, html); } catch (e) {}
    }
  }

  if (!videoUrl) {
    $("script").each((_, el) => {
      const content = $(el).html() || "";
      if (content.includes(".mp4")) {
        const match = content.match(/https?:\/\/[\w./-]+\.mp4[\w./?=-]*/);
        if (match) { videoUrl = match[0]; return false; }
      }
    });
  }
  if (!videoUrl) {
    $("script").each((_, el) => {
      const content = $(el).html() || "";
      if (content.includes(".m3u8")) {
        const match = content.match(/https?:\/\/[\w./-]+\.m3u8[\w./?=-]*/);
        if (match) { videoUrl = match[0]; return false; }
      }
    });
  }
  if (!videoUrl) {
    videoUrl = $('video source[type="video/mp4"]').attr("src") || $("video source").attr("src") || $("video").attr("src") || "";
  }
  if (videoUrl && videoUrl.startsWith("//")) videoUrl = "https:" + videoUrl;

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

    if (isDirectoryListingUrl(detailUrl)) {
      const videos = parseVideoList(html);
      const firstCover = videos[0] && (videos[0].posterPath || videos[0].backdropPath);
      return {
        id: link,
        type: "url",
        title,
        backdropPath: firstCover || undefined,
        posterPath: firstCover || undefined,
        link: detailUrl,
        relatedItems: videos.length > 0 ? videos : undefined,
        mediaType: "movie",
      };
    }

    if (isDirectoryIndexUrl(detailUrl)) {
      const indexPath = detailUrl.replace(BASE_URL + LANG_PREFIX, "").split("?")[0];
      const dirItems = parseDirectoryList(html, indexPath);
      return {
        id: link,
        type: "url",
        title: title || indexPath,
        link: detailUrl,
        relatedItems: dirItems.length > 0 ? dirItems : undefined,
        mediaType: "movie",
      };
    }

    let cover = extractPosterFromHtml(html, detailUrl, $)
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
    $("a[href*='/genres/'], a[href*='/tags/'], a[href*='/tag/'], a[href*='/makers/'], a[href*='/series/']").each((_, el) => {
      const $a = $(el);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href && /\/(genres|tags|tag|makers|series)\//.test(href)) genreItems.push({ id: href, title: text });
    });

    const peoples = [];
    $("a[href*='/actresses/']").each((_, el) => {
      const $a = $(el);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href && /\/actresses\//.test(href)) peoples.push({ id: href, title: text, role: "actress" });
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
      const rCover = pickItemCover($el.html(), rHref, $el.find("img").first());
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

    const backdropPaths = collectBackdropPaths(html, detailUrl, cover, $);

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
      peoples: peoples.length > 0 ? peoples : undefined,
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
  if (params && (params.genreId || params.peopleId)) return loadFilterList(params);
  const keyword = (params && params.keyword) || "";
  const page = Number((params && params.page) || 1);
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

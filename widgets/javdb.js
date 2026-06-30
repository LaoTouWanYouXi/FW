/**
 * JavDB ForwardWidget 模块
 * 抓取影片列表与详情（名称、横向封面、详情海报、剧照、简介）。
 * 封面高清化逻辑参考 jable.js；分类结构参考 jable 模块化设计。
 */

var JAVDB_SORT_FILTER = ["published", "score", "fav"];

var JAVDB_PRESET_ACTORS = [
  { title: "三上悠亚", value: "/actors/Av2e" },
  { title: "桥本有菜", value: "/actors/Xa1G" },
  { title: "明里つむぎ", value: "/actors/GgVz" },
  { title: "楪カレン", value: "/actors/QV2x9" },
  { title: "河北彩花", value: "/actors/B8K29" },
  { title: "小野夕子", value: "/actors/wm9B" },
  { title: "深田えいみ", value: "/actors/ZX5Q" },
  { title: "天使もえ", value: "/actors/0Rve" },
  { title: "JULIA", value: "/actors/WRqJ" },
  { title: "桃乃木かな", value: "/actors/2aYp" },
];

var JAVDB_PRESET_TAGS = [
  { title: "中文字幕", value: "/tags/chinese_subtitle?id=1" },
  { title: "VR", value: "/tags/vr?id=1" },
  { title: "巨乳", value: "/tags/big_tits?id=1" },
  { title: "连裤袜", value: "/tags/pantyhose?id=1" },
  { title: "角色扮演", value: "/tags/cosplay?id=1" },
  { title: "NTR", value: "/tags/ntr?id=1" },
  { title: "熟女", value: "/tags/mature?id=1" },
  { title: "无码流出", value: "/tags/uncensored_leak?id=1" },
  { title: "剧情", value: "/tags/plot?id=1" },
  { title: "女教师", value: "/tags/female_teacher?id=1" },
  { title: "制服", value: "/tags/uniform?id=1" },
  { title: "中出", value: "/tags/creampie?id=1" },
];

var JAVDB_PRESET_SERIES = [
  { title: "S1 NO.1 STYLE", value: "/series/s1" },
  { title: "MOODYZ", value: "/series/moodyz" },
  { title: "IDEAPOCKET", value: "/series/ideapocket" },
  { title: "PRESTIGE", value: "/series/prestige" },
  { title: "FALENO", value: "/series/faleno" },
  { title: "Madonna", value: "/series/madonna" },
];

var JAVDB_PRESET_MAKERS = [
  { title: "S1", value: "/makers/s1" },
  { title: "MOODYZ", value: "/makers/moodyz" },
  { title: "IDEAPOCKET", value: "/makers/ideapocket" },
  { title: "PRESTIGE", value: "/makers/prestige" },
  { title: "FALENO", value: "/makers/faleno" },
  { title: "Madonna", value: "/makers/madonna" },
  { title: "SOD", value: "/makers/sod" },
  { title: "Attackers", value: "/makers/attackers" },
];

function categoryModuleParams(options) {
  return [
    {
      name: "path",
      title: options.pickTitle,
      type: "enumeration",
      belongTo: {
        paramName: "sort_by",
        value: JAVDB_SORT_FILTER,
      },
      enumOptions: options.presets,
      value: options.presets[0].value,
    },
    {
      name: "library",
      title: options.libraryTitle,
      type: "enumeration",
      belongTo: {
        paramName: "sort_by",
        value: ["browse"],
      },
      enumOptions: options.libraries,
      value: options.libraries[0].value,
    },
    {
      name: "sort_by",
      title: "排序",
      type: "enumeration",
      enumOptions: [
        { title: "最近上市", value: "published" },
        { title: "最高评分", value: "score" },
        { title: "最多收藏", value: "fav" },
        { title: options.browseLabel, value: "browse" },
      ],
      value: "published",
    },
    { name: "page", title: "页码", type: "page", value: "1" },
  ];
}

WidgetMetadata = {
  id: "forward.javdb",
  title: "JavDB",
  version: "1.3.0",
  requiredVersion: "0.0.1",
  description: "获取 JavDB 影片列表、演员、系列、标签、片商分类与高清详情，播放时在半屏浏览器打开详情页",
  author: "Forward",
  site: "https://github.com/InchStudio/ForwardWidgets",
  detailCacheDuration: 3600,
  globalParams: [
    {
      name: "baseUrl",
      title: "站点地址",
      type: "input",
      value: "https://javdb.com",
    },
    {
      name: "locale",
      title: "语言",
      type: "enumeration",
      enumOptions: [
        { title: "简体中文", value: "zh" },
        { title: "繁体中文", value: "tw" },
        { title: "English", value: "en" },
      ],
      value: "zh",
    },
  ],
  modules: [
    {
      id: "loadResource",
      title: "JavDB 页面",
      functionName: "loadResource",
      type: "stream",
      requiresWebView: true,
      cacheDuration: 0,
      params: [],
    },
    {
      id: "latest",
      title: "最新上市",
      functionName: "loadLatest",
      cacheDuration: 1800,
      params: [{ name: "page", title: "页码", type: "page", value: "1" }],
    },
    {
      id: "rankings",
      title: "排行榜",
      functionName: "loadRankings",
      cacheDuration: 3600,
      params: [
        {
          name: "period",
          title: "周期",
          type: "enumeration",
          enumOptions: [
            { title: "日榜", value: "daily" },
            { title: "周榜", value: "weekly" },
            { title: "月榜", value: "monthly" },
          ],
          value: "daily",
        },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      id: "movies",
      title: "影片分类",
      functionName: "loadMovies",
      cacheDuration: 1800,
      params: [
        {
          name: "path",
          title: "分类",
          type: "enumeration",
          enumOptions: [
            { title: "有码", value: "/censored" },
            { title: "无码", value: "/uncensored" },
          ],
          value: "/censored",
        },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      id: "actors",
      title: "演员",
      description: "按演员分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryModuleParams({
        pickTitle: "选择演员",
        libraryTitle: "演员库",
        browseLabel: "浏览演员库",
        presets: JAVDB_PRESET_ACTORS,
        libraries: [
          { title: "有码演员", value: "/actors/censored" },
          { title: "无码演员", value: "/actors/uncensored" },
          { title: "欧美演员", value: "/actors/western" },
        ],
      }),
    },
    {
      id: "series",
      title: "系列",
      description: "按系列分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryModuleParams({
        pickTitle: "选择系列",
        libraryTitle: "系列库",
        browseLabel: "浏览系列库",
        presets: JAVDB_PRESET_SERIES,
        libraries: [
          { title: "有码系列", value: "/series" },
          { title: "无码系列", value: "/series/uncensored" },
        ],
      }),
    },
    {
      id: "tags",
      title: "标签",
      description: "按标签分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryModuleParams({
        pickTitle: "选择标签",
        libraryTitle: "标签库",
        browseLabel: "浏览标签库",
        presets: JAVDB_PRESET_TAGS,
        libraries: [{ title: "全部标签", value: "/tags" }],
      }),
    },
    {
      id: "makers",
      title: "片商",
      description: "按片商分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryModuleParams({
        pickTitle: "选择片商",
        libraryTitle: "片商库",
        browseLabel: "浏览片商库",
        presets: JAVDB_PRESET_MAKERS,
        libraries: [
          { title: "有码片商", value: "/makers" },
          { title: "无码片商", value: "/makers/uncensored" },
        ],
      }),
    },
  ],
  search: {
    title: "番号搜索",
    functionName: "searchJavdb",
    params: [
      { name: "keyword", title: "番号/关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" },
    ],
  },
};

var JAVDB_DEFAULT_BASE = "https://javdb.com";
var JAVDB_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function javdbBase(params) {
  var base = String((params && params.baseUrl) || JAVDB_DEFAULT_BASE).replace(/\/+$/, "");
  return base || JAVDB_DEFAULT_BASE;
}

function javdbLocale(params) {
  return String((params && params.locale) || "zh");
}

function javdbHeaders(params) {
  return {
    "User-Agent": JAVDB_UA,
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  };
}

function absUrl(url, base) {
  if (!url) return "";
  var value = String(url).trim();
  if (!value) return "";
  if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
  if (value.indexOf("//") === 0) return "https:" + value;
  if (value.indexOf("/") === 0) return base + value;
  return base + "/" + value;
}

function buildPageUrl(base, path, params) {
  var locale = javdbLocale(params);
  var page = Number(params.page || 1);
  var url = base + path;
  var query = [];
  if (locale) query.push("locale=" + encodeURIComponent(locale));
  if (page > 1) query.push("page=" + page);
  if (query.length) {
    url += (url.indexOf("?") >= 0 ? "&" : "?") + query.join("&");
  }
  return url;
}

function encodeLink(pathOrUrl) {
  return "javdb:" + String(pathOrUrl || "");
}

function decodeLink(link) {
  var raw = String(link || "");
  if (raw.indexOf("javdb:") === 0) return raw.slice(6);
  return raw;
}

function extractPath(url, base) {
  var value = decodeLink(url);
  if (!value) return "";
  if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) {
    return value.replace(base, "");
  }
  if (value.charAt(0) !== "/") return "/" + value;
  return value;
}

function detailPageUrl(pathOrLink, params) {
  var base = javdbBase(params);
  var path = extractPath(pathOrLink, base);
  var url = absUrl(path, base);
  var locale = javdbLocale(params);
  if (locale && url.indexOf("locale=") < 0) {
    url += (url.indexOf("?") >= 0 ? "&" : "?") + "locale=" + encodeURIComponent(locale);
  }
  return url;
}

function normalizePath(href, base) {
  if (!href) return "";
  var path = href.indexOf("http") === 0 ? href.replace(base, "") : href;
  if (path.charAt(0) !== "/") path = "/" + path;
  return path.split("#")[0];
}

function stripCountSuffix(title) {
  return String(title || "")
    .replace(/\(\d+\)\s*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveFilteredPath(params, fallbackPath) {
  params = params || {};
  if (params.peopleId) {
    var actorId = String(params.peopleId).replace(/^\/actors\//, "").split(/[/?#]/)[0];
    return "/actors/" + actorId;
  }
  if (params.genreId) {
    var genreId = String(params.genreId);
    if (genreId.indexOf("series:") === 0) return "/series/" + genreId.slice(7);
    if (genreId.indexOf("maker:") === 0) return "/makers/" + genreId.slice(6);
    if (genreId.charAt(0) === "/") return genreId;
    return "/" + genreId;
  }
  if (params.seriesId) {
    var seriesId = String(params.seriesId).replace(/^\/series\//, "").split(/[/?#]/)[0];
    return "/series/" + seriesId;
  }
  if (params.makerId) {
    var makerId = String(params.makerId).replace(/^\/makers\//, "").split(/[/?#]/)[0];
    return "/makers/" + makerId;
  }
  return fallbackPath;
}

function extractMatchCode(text) {
  var s = String(text || "").trim();
  if (!s) return "";
  s = s.toUpperCase();
  s = s.replace(/^[A-Z0-9]+(?:\.[A-Z0-9]+)+@/, "");
  s = s.replace(/^(?:HHD800|HHB800)[_\-@.\s]?/, "");
  var normalized = s.replace(/_/g, "-").replace(/\s+/g, " ").trim();
  var patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?(\d{5,8})\b/,
    /\bCARIB[- ]?(\d{6,8})\b/,
    /\b1PONDO[- ]?(\d{6,8})\b/,
    /\bHEYZO[- ]?(\d{3,6})\b/,
    /\bT28[- ]?(\d{6,8})\b/,
    /\b([A-Z]{2,15})[- ]?(\d{2,10})\b/,
    /\b(\d{6}[-_]\d{2,3})\b/,
  ];
  for (var i = 0; i < patterns.length; i++) {
    var match = normalized.match(patterns[i]);
    if (!match) continue;
    if (match[1] && match[2]) return match[1] + "-" + match[2];
    if (match[1]) return match[1].replace(/\s+/g, "");
  }
  return "";
}

function extractJavCode(text) {
  var code = extractMatchCode(text);
  if (!code) return "";
  var parts = code.match(/^([A-Z0-9]+)-(\d+)$/i);
  if (parts) return parts[1] + "-" + String(parseInt(parts[2], 10));
  return code;
}

function normalizeSearchKeyword(keyword) {
  var text = String(keyword || "").trim();
  if (!text) return "";
  return extractJavCode(text) || text;
}

function buildGuangyaMatchFields(rawCode, rawTitle, description) {
  rawCode = String(rawCode || "").trim();
  rawTitle = String(rawTitle || "").replace(/\s+/g, " ").trim();
  description = String(description || "").replace(/\s+/g, " ").trim();
  var fields = {};
  if (rawCode) fields.name = rawCode;
  if (rawTitle) fields.originalTitle = rawTitle;
  if (rawCode && description && description.toUpperCase().indexOf(rawCode.toUpperCase()) < 0) {
    fields.description = rawCode + " " + description;
  } else if (description) {
    fields.description = description;
  }
  return fields;
}

function formatDisplayTitle(code, title) {
  code = String(code || "").trim();
  title = String(title || "").replace(/\s+/g, " ").trim();
  if (!code) return title;
  if (!title) return code;
  var upperTitle = title.toUpperCase();
  var upperCode = code.toUpperCase();
  var looseCode = upperCode.replace(/[^A-Z0-9]/g, "");
  var looseTitlePrefix = upperTitle.replace(/[^A-Z0-9]/g, "");
  if (upperTitle.indexOf(upperCode) === 0) {
    title = title.slice(code.length).replace(/^[\s\-–—:]+/, "").trim();
  } else if (looseTitlePrefix.indexOf(looseCode) === 0) {
    title = title.replace(/^[\s\-–—:]*/, "").replace(new RegExp("^" + code.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "i"), "").trim();
  }
  return title ? code + " " + title : code;
}

async function verifyCoverUrl(url) {
  if (!url) return "";
  try {
    var resp = await Widget.http.get(url, { timeout: 3000, headers: { "User-Agent": JAVDB_UA } });
    var data = resp && resp.data;
    if (!data) return "";
    if (typeof data === "string" && data.length < 15360) return "";
    return url;
  } catch (error) {
    return "";
  }
}

var MGSTAGE_COVER_RULES = {
  ABF: { maker: "prestige" },
  ABW: { maker: "prestige" },
  ABP: { maker: "prestige" },
  CHN: { maker: "prestige" },
  JUFE: { maker: "prestige" },
  MAAN: { maker: "prestige" },
  PPT: { maker: "prestige" },
  "390JAC": { maker: "jackson" },
};

function compactUniqueUrls(urls) {
  var seen = {};
  var result = [];
  for (var i = 0; i < (urls || []).length; i++) {
    var value = String(urls[i] || "").trim();
    if (!value || seen[value]) continue;
    seen[value] = true;
    result.push(value);
  }
  return result;
}

function parseJavCodeParts(title) {
  var raw = String(title || "").toUpperCase();
  var match = raw.match(/\b([A-Z0-9]+)-?(\d{2,5})\b/);
  if (!match) return null;
  var prefix = match[1];
  var prefixLower = prefix.toLowerCase();
  var number5 = match[2];
  while (number5.length < 5) number5 = "0" + number5;
  var numMap = {
    WSA: "2",
    FSDSS: "1",
    FCDSS: "1",
    FNS: "1",
    FTHTD: "1",
    FALENO: "1",
    FGAN: "1",
    FSNF: "1",
    FLAV: "1",
    ABP: "118",
    CHN: "118",
    STARS: "1",
    STAR: "1",
    START: "1",
    SODS: "1",
    REBD: "h_346",
    REBDB: "h_346",
    GSHRB: "h_346",
  };
  var number3 = match[2];
  while (number3.length < 3) number3 = "0" + number3;
  return {
    prefix: prefix,
    prefixLower: prefixLower,
    number: match[2],
    number3: number3,
    number5: number5,
    code: String(numMap[prefix] || "") + prefixLower + number5,
    plainCode: prefixLower + number5,
  };
}

function buildMgstageCoverCandidatesFromParts(parts, rule) {
  if (!parts || !rule || !rule.maker) return { posterCandidates: [], backdropCandidates: [] };
  var number = String(parseInt(parts.number, 10));
  if (!parts.prefixLower || !number || number === "NaN") return { posterCandidates: [], backdropCandidates: [] };
  var dvdDash = parts.prefixLower + "-" + number;
  var base = "https://image.mgstage.com/images/" + rule.maker + "/" + parts.prefixLower + "/" + number;
  return {
    posterCandidates: compactUniqueUrls([base + "/pf_e_" + dvdDash + ".jpg", base + "/pf_o1_" + dvdDash + ".jpg"]),
    backdropCandidates: compactUniqueUrls([base + "/pb_e_" + dvdDash + ".jpg"]),
  };
}

function buildDmmCoverCandidatesFromParts(parts) {
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };
  var contentId = String(parts.code || "").toLowerCase();
  if (!contentId) return { posterCandidates: [], backdropCandidates: [] };
  var awsBase = "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + contentId;
  var picsBase = "https://pics.dmm.co.jp/digital/video/" + contentId;
  return {
    posterCandidates: compactUniqueUrls([awsBase + "/" + contentId + "ps.jpg", picsBase + "/" + contentId + "ps.jpg"]),
    backdropCandidates: compactUniqueUrls([awsBase + "/" + contentId + "pl.jpg", picsBase + "/" + contentId + "pl.jpg"]),
  };
}

function buildCoverCandidatesFromVideoId(videoIdOrTitle) {
  var parts = parseJavCodeParts(videoIdOrTitle);
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };
  var rule = MGSTAGE_COVER_RULES[parts.prefix];
  if (rule) return buildMgstageCoverCandidatesFromParts(parts, rule);
  return buildDmmCoverCandidatesFromParts(parts);
}

function buildCoverUrlsFromVideoId(videoIdOrTitle) {
  var candidates = buildCoverCandidatesFromVideoId(videoIdOrTitle);
  return {
    posterUrl: candidates.posterCandidates[0] || "",
    backdropUrl: candidates.backdropCandidates[0] || "",
  };
}

function cleanDvdId(raw) {
  return String(raw || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/-UNCENSORED-LEAK$/i, "")
    .replace(/-CHINESE-SUBTITLE$/i, "")
    .replace(/\s+/g, "")
    .trim();
}

function buildDmmContentIdFromDvdId(dvdId) {
  var clean = cleanDvdId(dvdId).toLowerCase();
  var match = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
  if (!match) return clean.replace(/[^a-z0-9]/gi, "");
  var number5 = String(parseInt(match[2], 10));
  while (number5.length < 5) number5 = "0" + number5;
  return match[1].toLowerCase() + number5;
}

function buildDmmGallery(contentId, count) {
  count = count || 10;
  var id = String(contentId || "").toLowerCase();
  if (!id) return [];
  var urls = [];
  for (var i = 1; i <= count; i++) {
    urls.push("https://pics.dmm.co.jp/digital/video/" + id + "/" + id + "jp-" + i + ".jpg");
  }
  return urls;
}

function buildMgstageGalleryFromDvdId(dvdId, count) {
  count = count || 10;
  var clean = cleanDvdId(dvdId).toLowerCase();
  var match = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
  if (!match) return [];
  var prefix = match[1].toLowerCase();
  var number = String(parseInt(match[2], 10));
  var dvdDash = prefix + "-" + number;
  var urls = [];
  for (var j = 1; j <= count; j++) {
    urls.push("https://image.mgstage.com/images/prestige/" + prefix + "/" + number + "/cap_e_" + j + "_" + dvdDash + ".jpg");
  }
  return urls;
}

async function fetchJavTrailersMeta(dvdId) {
  var empty = { backdropPath: "", backdropPaths: [] };
  if (!dvdId) return empty;
  var contentId = buildDmmContentIdFromDvdId(dvdId);
  var parts = parseJavCodeParts(dvdId);
  var backdropPath = "";
  var backdropPaths = [];
  if (parts && MGSTAGE_COVER_RULES[parts.prefix]) {
    var mg = buildMgstageCoverCandidatesFromParts(parts, MGSTAGE_COVER_RULES[parts.prefix]);
    backdropPath = mg.backdropCandidates[0] || "";
    backdropPaths = buildMgstageGalleryFromDvdId(dvdId, 10);
  } else if (contentId) {
    var dmm = buildDmmCoverCandidatesFromParts(parts || { code: contentId });
    backdropPath = dmm.backdropCandidates[0] || "";
    backdropPaths = buildDmmGallery(contentId, 10);
  }
  if (backdropPath) {
    var verifiedBackdrop = await verifyCoverUrl(backdropPath);
    if (!verifiedBackdrop) backdropPath = "";
  }
  return { backdropPath: backdropPath, backdropPaths: backdropPaths };
}

function upgradeJavdbImageUrl(url) {
  var value = String(url || "").trim();
  if (!value) return "";
  value = value.replace(/\/thumbs\//gi, "/covers/");
  value = value.replace(/\/samples\//gi, "/covers/");
  value = value.replace(/jdbimgs\.com\/thumbs/gi, "jdbimgs.com/covers");
  return value;
}

function buildJavdbCoverFromVideoId(videoId) {
  var id = String(videoId || "").trim();
  if (!id || id.length < 2) return "";
  var prefix = id.slice(0, 2).toLowerCase();
  return "https://c0.jdbstatic.com/covers/" + prefix + "/" + id + ".jpg";
}

function resolveJavdbCoverUrl(fallbackCover, videoId) {
  var fromId = buildJavdbCoverFromVideoId(videoId);
  var upgraded = upgradeJavdbImageUrl(fallbackCover);
  return fromId || upgraded || fallbackCover || "";
}

function extractBestImageUrl($, node, base) {
  if (!node || !node.length) return "";
  var dataSrc = attrOf($, node, "data-src") || attrOf($, node, "data-original");
  var src = attrOf($, node, "src");
  var srcset = attrOf($, node, "srcset");
  var best = dataSrc || src;
  if (srcset) {
    var parts = srcset.split(",");
    for (var i = parts.length - 1; i >= 0; i--) {
      var piece = String(parts[i] || "")
        .trim()
        .split(/\s+/)[0];
      if (piece) {
        best = piece;
        break;
      }
    }
  }
  return upgradeJavdbImageUrl(absUrl(best, base));
}

async function pickVerifiedCover(candidates, fallback) {
  var list = compactUniqueUrls(candidates || []);
  for (var i = 0; i < list.length; i++) {
    var verified = await verifyCoverUrl(list[i]);
    if (verified) return verified;
  }
  return fallback || "";
}

async function applyHdCovers(code, fallbackCover, options) {
  options = options || {};
  var javdbCover = resolveJavdbCoverUrl(fallbackCover, options.videoId);
  var candidates = buildCoverCandidatesFromVideoId(code);
  var backdropCandidates = [javdbCover].concat(candidates.backdropCandidates || []);
  var posterCandidates = [javdbCover].concat(candidates.posterCandidates || []);

  var backdropPath = await pickVerifiedCover(backdropCandidates, javdbCover);
  var posterPath = await pickVerifiedCover(posterCandidates, javdbCover);
  if (!backdropPath) backdropPath = javdbCover;
  if (!posterPath) posterPath = backdropPath;

  return {
    backdropPath: backdropPath,
    posterPath: posterPath,
    detailPoster: posterPath,
    coverUrl: backdropPath,
  };
}

function attachExternalLinks(item, pageUrl) {
  // 官方 README 未文档化这些字段；Forward App 详情页豆瓣/TMDB 图标通常按标题自动匹配，不一定生效。
  item.tmdbLink = pageUrl;
  item.doubanLink = pageUrl;
  item.tmdbUrl = pageUrl;
  item.doubanUrl = pageUrl;
  item.imdbLink = pageUrl;
  item.imdbUrl = pageUrl;
  item.externalLinks = [
    { type: "tmdb", title: "TMDB", url: pageUrl },
    { type: "douban", title: "豆瓣", url: pageUrl },
    { type: "imdb", title: "IMDB", url: pageUrl },
  ];
  return item;
}

function parseRatingText(text) {
  if (!text) return 0;
  var match = String(text).match(/([\d.]+)/);
  if (!match) return 0;
  var score = parseFloat(match[1]);
  if (isNaN(score)) return 0;
  return score <= 5 ? Math.round(score * 2 * 10) / 10 : score;
}

function textOf($, el) {
  if (!el || !el.length) return "";
  return $(el).text().replace(/\s+/g, " ").trim();
}

function attrOf($, el, name) {
  if (!el || !el.length) return "";
  return String($(el).attr(name) || "").trim();
}

async function fetchHtml(url, params) {
  var res = await Widget.http.get(url, {
    headers: javdbHeaders(params),
    allow_redirects: true,
  });
  if (!res || !res.data) throw new Error("空响应: " + url);
  return res.data;
}

function parseListItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var rawItems = [];
  var seen = {};

  $(".movie-list .item a.box, #videos .grid-item a.box, .grid-item.column a.box").each(function () {
    var box = $(this);
    var href = attrOf($, box, "href");
    var path = href.indexOf("http") === 0 ? href.replace(base, "") : href;
    if (!path || path.indexOf("/v/") !== 0 || seen[path]) return;
    seen[path] = true;
    var titleNode = box.find(".video-title strong").first();
    var titleText = textOf($, titleNode);
    var subTitle = textOf($, box.find(".video-title").first());
    var rawTitle = box.attr("title") || subTitle || titleText;
    var matchCode = titleText || extractMatchCode(rawTitle);
    rawItems.push({
      id: path.split("/").pop() || path,
      type: "url",
      mediaType: "movie",
      title: formatDisplayTitle(matchCode, rawTitle) || String(rawTitle || path.split("/").pop()).replace(/\s+/g, " ").trim(),
      fallbackCover: extractBestImageUrl($, box.find("img").first(), base),
      rating: parseRatingText(textOf($, box.find(".score").first())),
      releaseDate: textOf($, box.find(".meta").first()) || "",
      link: encodeLink(path),
      matchCode: matchCode,
      originalTitle: rawTitle,
      code: matchCode,
      videoId: path.split("/").pop() || path,
      description: matchCode ? "番号: " + matchCode : "",
    });
  });

  return rawItems;
}

async function enrichMovieItems(rawItems) {
  var items = [];
  for (var i = 0; i < rawItems.length; i++) {
    var raw = rawItems[i];
    var covers = await applyHdCovers(raw.code, raw.fallbackCover, { videoId: raw.videoId || raw.id });
    items.push(Object.assign(
      {
        id: raw.id,
        type: raw.type,
        mediaType: raw.mediaType,
        title: raw.title,
        backdropPath: covers.backdropPath,
        posterPath: covers.posterPath,
        coverUrl: covers.coverUrl,
        detailPoster: covers.detailPoster,
        rating: raw.rating,
        releaseDate: raw.releaseDate,
        link: raw.link,
        description: raw.description,
      },
      buildGuangyaMatchFields(raw.matchCode || raw.code, raw.originalTitle || raw.title, raw.description)
    ));
  }
  return items;
}

function hasJumpFilter(params) {
  params = params || {};
  return !!(params.genreId || params.peopleId);
}

function buildPeopleBrowseItem(id, title, avatar) {
  return {
    id: String(id),
    type: "url",
    title: title,
    posterPath: avatar || "",
    description: "点击查看作品",
  };
}

function buildGenreBrowseItem(genreId, title, poster) {
  return {
    id: String(genreId),
    type: "url",
    title: title,
    posterPath: poster || "",
    description: "点击查看作品",
  };
}
function parseActorBrowseItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var items = [];
  var seen = {};

  $(".box.actor-box a, a.box.actor-box, .actor-box a").each(function () {
    var node = $(this);
    var href = attrOf($, node, "href");
    var path = normalizePath(href, base);
    if (path.indexOf("/actors/") !== 0 || seen[path]) return;
    seen[path] = true;
    var id = path.split("/").pop();
    var title = textOf($, node.find("strong").first()) || textOf($, node);
    var avatar = absUrl(attrOf($, node.find("img").first(), "src"), base);
    items.push(buildPeopleBrowseItem(id, title, avatar));
  });

  return items;
}

function parseSeriesBrowseItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var items = [];
  var seen = {};

  $("a[href*='/series/']").each(function () {
    var node = $(this);
    var href = attrOf($, node, "href");
    var path = normalizePath(href, base);
    if (path === "/series" || path.indexOf("/series/") !== 0 || seen[path]) return;
    seen[path] = true;
    var id = path.split("/").pop();
    var title = stripCountSuffix(textOf($, node));
    if (!title) return;
    items.push(buildGenreBrowseItem("series:" + id, title, ""));
  });

  return items;
}

function parseMakerBrowseItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var items = [];
  var seen = {};

  $("a[href*='/makers/']").each(function () {
    var node = $(this);
    var href = attrOf($, node, "href");
    var path = normalizePath(href, base);
    if (path === "/makers" || path.indexOf("/makers/") !== 0 || seen[path]) return;
    seen[path] = true;
    var id = path.split("/").pop();
    var title = stripCountSuffix(textOf($, node));
    if (!title) return;
    items.push(buildGenreBrowseItem("maker:" + id, title, ""));
  });

  return items;
}

function isBrowseLibraryPath(path) {
  if (!path) return false;
  var clean = String(path).split("?")[0];
  if (clean === "/series" || clean === "/series/uncensored") return true;
  if (clean === "/makers" || clean === "/makers/uncensored") return true;
  if (clean === "/tags") return true;
  return /^\/actors\/(censored|uncensored|western)$/.test(clean);
}

function getBrowseParser(path) {
  var clean = String(path || "").split("?")[0];
  if (/^\/actors\/(censored|uncensored|western)$/.test(clean)) return parseActorBrowseItems;
  if (clean === "/series" || clean === "/series/uncensored") return parseSeriesBrowseItems;
  if (clean === "/makers" || clean === "/makers/uncensored") return parseMakerBrowseItems;
  if (clean === "/tags") return parseTagBrowseItems;
  return null;
}

function resolveCategoryPath(params) {
  params = params || {};
  var sortBy = String(params.sort_by || "published");
  if (sortBy === "browse") {
    return String(params.library || params.path || "");
  }
  return String(params.path || params.url || "");
}

function applyCategorySort(path, sortBy) {
  if (!path || sortBy === "browse") return path;
  var sortMap = { published: "0", score: "1", fav: "2" };
  var sortType = sortMap[String(sortBy || "")];
  if (sortType === undefined) return path;
  return path + (path.indexOf("?") >= 0 ? "&" : "?") + "sort_type=" + sortType;
}

async function loadPage(params) {
  try {
    params = params || {};
    if (hasJumpFilter(params)) {
      var moviePath = resolveFilteredPath(params, "");
      var jumpMovies = await fetchMovieList(moviePath, params);
      if (!jumpMovies.length) throw new Error("未解析到影片列表");
      return jumpMovies;
    }

    var path = applyCategorySort(resolveCategoryPath(params), params.sort_by);
    if (!path) throw new Error("请选择分类路径");

    if (isBrowseLibraryPath(path)) {
      var browseParser = getBrowseParser(path);
      if (!browseParser) throw new Error("未找到分类解析器");
      var browseUrl = buildPageUrl(javdbBase(params), path, params);
      var browseHtml = await fetchHtml(browseUrl, params);
      var browseItems = browseParser(browseHtml, params);
      if (!browseItems.length) throw new Error("未解析到分类列表");
      return browseItems;
    }

    var movies = await fetchMovieList(path, params);
    if (!movies.length) throw new Error("未解析到影片列表");
    return movies;
  } catch (error) {
    console.error("[javdb] 分类加载失败:", error.message || error);
    throw error;
  }
}

function parseTagBrowseItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var items = [];
  var seen = {};

  $("a[href*='/tags/']").each(function () {
    var node = $(this);
    var href = attrOf($, node, "href");
    var path = normalizePath(href, base).replace(/^\//, "");
    if (!path || path.indexOf("tags/") !== 0 || seen[path]) return;
    seen[path] = true;
    var title = stripCountSuffix(textOf($, node));
    if (!title) return;
    items.push(buildGenreBrowseItem(path, title, ""));
  });

  return items;
}

async function parseDetailPage(html, link, params) {
  var base = javdbBase(params);
  var path = extractPath(link, base);
  var pageUrl = detailPageUrl(path, params);
  var $ = Widget.html.load(html);

  var title = textOf($, $("h2 strong.current-title").first());
  if (!title) title = textOf($, $("h2.title strong").first());

  var code = attrOf($, $("a[title='Copy ID'], a[title='复制番号']").first(), "data-clipboard-text");
  if (!code) {
    code = textOf($, $("strong:contains('番号')").parent().find("span").first());
  }

  var videoId = path.split("/").pop() || path;

  var description = textOf($, $("#introduction dd p").first());
  if (!description) {
    description = textOf($, $("h2.title.is-4 strong").first());
    if (code && description.indexOf(code) === 0) {
      description = description.slice(code.length).trim();
    }
  }

  var releaseDate = "";
  var durationText = "";
  var rating = 0;

  $("nav.panel.movie-panel-info div, .movie-panel-info > div").each(function () {
    var row = $(this);
    var label = textOf($, row.find("strong").first());
    var value = textOf($, row.find("span").first());
    if (!label) return;
    if (label.indexOf("日期") >= 0 || label.indexOf("Released Date") >= 0) releaseDate = value;
    if (label.indexOf("时长") >= 0 || label.indexOf("Duration") >= 0) durationText = value;
  });

  var scoreNode = $(".score-stars").first();
  if (scoreNode.length) {
    rating = parseRatingText(textOf($, scoreNode.parent()));
  }

  var backdropPaths = [];
  $("a.tile-item[data-fancybox='gallery']").each(function () {
    var href = absUrl(attrOf($, $(this), "href"), base);
    if (href && backdropPaths.indexOf(href) < 0) backdropPaths.push(href);
  });
  if (!backdropPaths.length) {
    $("a.tile-item").each(function () {
      var href = absUrl(attrOf($, $(this), "href"), base);
      if (href && backdropPaths.indexOf(href) < 0) backdropPaths.push(href);
    });
  }

  var cover = extractBestImageUrl($, $("img.video-cover").first(), base);
  if (!cover && backdropPaths.length) cover = backdropPaths[0];

  var genreItems = [];
  $("strong:contains('类别'), strong:contains('Tags'), strong:contains('類別')").each(function () {
    $(this)
      .parent()
      .find("a")
      .each(function () {
        var tag = $(this);
        var href = attrOf($, tag, "href");
        var path = normalizePath(href, base).replace(/^\//, "");
        if (!path) return;
        genreItems.push({ id: path, title: textOf($, tag) });
      });
  });

  $("strong:contains('系列'), strong:contains('Series')").each(function () {
    $(this)
      .parent()
      .find("a")
      .each(function () {
        var node = $(this);
        var href = attrOf($, node, "href");
        var path = normalizePath(href, base);
        var slug = path.split("/").pop();
        if (!slug) return;
        genreItems.push({ id: "series:" + slug, title: textOf($, node) });
      });
  });

  $("strong:contains('片商'), strong:contains('Maker'), strong:contains('Publisher')").each(function () {
    $(this)
      .parent()
      .find("a")
      .each(function () {
        var node = $(this);
        var href = attrOf($, node, "href");
        var path = normalizePath(href, base);
        var slug = path.split("/").pop();
        if (!slug) return;
        genreItems.push({ id: "maker:" + slug, title: textOf($, node) });
      });
  });

  var peoples = [];
  $("strong:contains('演员'), strong:contains('演員'), strong:contains('Actor')").each(function () {
    $(this)
      .parent()
      .find("a")
      .each(function () {
        var actor = $(this);
        var href = attrOf($, actor, "href");
        var path = normalizePath(href, base);
        var id = path.split("/").pop() || textOf($, actor);
        peoples.push({
          id: String(id),
          title: textOf($, actor),
          avatar: "",
          role: "演员",
        });
      });
  });

  var rawRelated = [];
  $(".recommendations .item a.box, .video-recommend .item a.box").each(function () {
    var box = $(this);
    var href = attrOf($, box, "href");
    var relPath = href.indexOf("http") === 0 ? href.replace(base, "") : href;
    if (!relPath || relPath.indexOf("/v/") !== 0) return;
    var relTitle = box.attr("title") || textOf($, box.find(".video-title").first());
    var relCode = textOf($, box.find(".video-title strong").first()) || extractMatchCode(relTitle);
    rawRelated.push({
      id: relPath.split("/").pop(),
      type: "url",
      mediaType: "movie",
      title: formatDisplayTitle(relCode, relTitle),
      fallbackCover: absUrl(attrOf($, box.find("img").first(), "src"), base),
      matchCode: relCode,
      originalTitle: relTitle,
      code: relCode,
      link: encodeLink(relPath),
    });
  });

  var displayCode = code || extractMatchCode(title);
  var displayTitle = formatDisplayTitle(displayCode, title);
  var matchFields = buildGuangyaMatchFields(displayCode, title, description);
  var fallbackCover = cover || resolveJavdbCoverUrl("", videoId);
  var hdCovers = await applyHdCovers(displayCode, fallbackCover, { videoId: videoId });
  var jtMeta = displayCode
    ? await fetchJavTrailersMeta(displayCode).catch(function () {
        return { backdropPath: "", backdropPaths: [] };
      })
    : { backdropPath: "", backdropPaths: [] };

  var backdropPath = jtMeta.backdropPath || hdCovers.backdropPath || fallbackCover;
  var detailPoster = hdCovers.detailPoster || fallbackCover;
  var posterPath = hdCovers.posterPath || fallbackCover;
  var allBackdropPaths = backdropPaths.slice();
  if (jtMeta.backdropPaths && jtMeta.backdropPaths.length) {
    for (var bi = 0; bi < jtMeta.backdropPaths.length; bi++) {
      var bp = jtMeta.backdropPaths[bi];
      if (bp && allBackdropPaths.indexOf(bp) < 0) allBackdropPaths.push(bp);
    }
  }

  var relatedItems = await enrichMovieItems(rawRelated);

  return attachExternalLinks(
    Object.assign(
      {
        id: path.split("/").pop() || encodeLink(path),
        type: "url",
        mediaType: "movie",
        title: displayTitle || displayCode || path.split("/").pop(),
        backdropPath: backdropPath,
        posterPath: posterPath,
        coverUrl: backdropPath,
        detailPoster: detailPoster,
        backdropPaths: allBackdropPaths,
        releaseDate: releaseDate,
        durationText: durationText,
        rating: rating,
        genreItems: genreItems,
        peoples: peoples,
        relatedItems: relatedItems,
        link: encodeLink(path),
      },
      matchFields
    ),
    pageUrl
  );
}

async function fetchMovieList(path, params) {
  var url = buildPageUrl(javdbBase(params), path, params);
  var html = await fetchHtml(url, params);
  return enrichMovieItems(parseListItems(html, params));
}

async function loadListByPath(path, params) {
  try {
    params = params || {};
    var targetPath = resolveFilteredPath(params, path);
    var items = await fetchMovieList(targetPath, params);
    if (!items.length) throw new Error("未解析到影片列表");
    return items;
  } catch (error) {
    console.error("[javdb] 列表加载失败:", error.message || error);
    throw error;
  }
}

async function loadLatest(params) {
  return loadListByPath("/", params || {});
}

async function loadRankings(params) {
  var period = String((params && params.period) || "daily");
  return loadListByPath("/rankings/movies?period=" + encodeURIComponent(period), params || {});
}

async function loadMovies(params) {
  params = params || {};
  var path = String(params.path || "/censored");
  return loadListByPath(path, params);
}

async function searchJavdb(params) {
  try {
    var keyword = normalizeSearchKeyword(params && params.keyword);
    if (!keyword) throw new Error("请输入搜索关键词");
    var base = javdbBase(params);
    var url =
      base +
      "/search?q=" +
      encodeURIComponent(keyword) +
      "&f=all&locale=" +
      encodeURIComponent(javdbLocale(params));
    var page = Number(params.page || 1);
    if (page > 1) url += "&page=" + page;
    var html = await fetchHtml(url, params);
    var items = await enrichMovieItems(parseListItems(html, params));
    if (!items.length) throw new Error("未找到相关影片");
    return items;
  } catch (error) {
    console.error("[javdb] 搜索失败:", error.message || error);
    throw error;
  }
}

async function loadResource(params) {
  try {
    params = params || {};
    var path = decodeLink(params.link || params.id || "");
    if (!path && params.videoUrl) {
      path = extractPath(params.videoUrl, javdbBase(params));
    }
    if (!path || path.indexOf("/v/") !== 0) {
      throw new Error("缺少影片链接，无法打开 JavDB 详情页");
    }
    var pageUrl = detailPageUrl(path, params);
    return [
      {
        name: "JavDB 详情页",
        description: "在半屏浏览器中打开当前影片的 JavDB 详情页",
        url: pageUrl,
        playerType: "app",
        requiresWebView: true,
        customHeaders: javdbHeaders(params),
      },
    ];
  } catch (error) {
    console.error("[javdb] 打开详情页失败:", error.message || error);
    throw error;
  }
}

async function loadDetail(link) {
  try {
    var path = decodeLink(link);
    if (!path || path.indexOf("/v/") !== 0) return null;
    var params = { baseUrl: JAVDB_DEFAULT_BASE, locale: "zh" };
    var pageUrl = detailPageUrl(path, params);
    var html = await fetchHtml(pageUrl, params);
    var detail = await parseDetailPage(html, path, params);
    if (!detail || !detail.title) return null;
    return detail;
  } catch (error) {
    console.error("[javdb] 详情加载失败:", error.message || error);
    return null;
  }
}

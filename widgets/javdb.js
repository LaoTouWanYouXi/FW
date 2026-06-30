/**
 * JavDB ForwardWidget 模块
 * 抓取影片列表与详情（名称、横向封面、详情海报、剧照、简介）。
 */

var JAVDB_SORT_FILTER = ["published", "score", "fav"];
var GLOBAL_PARAM_KEYS = ["baseUrl", "locale", "coverMode"];

function syncGlobalParams(params) {
  params = params || {};
  for (var i = 0; i < GLOBAL_PARAM_KEYS.length; i++) {
    var key = GLOBAL_PARAM_KEYS[i];
    if (params[key] !== undefined && params[key] !== null && String(params[key]) !== "") {
      Widget.storage.set("javdb.global." + key, params[key]);
    }
  }
  return Object.assign({}, params, getEffectiveParams(params));
}

function getEffectiveParams(params) {
  params = params || {};
  var out = {};
  for (var i = 0; i < GLOBAL_PARAM_KEYS.length; i++) {
    var key = GLOBAL_PARAM_KEYS[i];
    if (params[key] !== undefined && params[key] !== null && String(params[key]) !== "") {
      out[key] = params[key];
    } else {
      var stored = Widget.storage.get("javdb.global." + key);
      if (stored !== undefined && stored !== null && String(stored) !== "") {
        out[key] = stored;
      }
    }
  }
  if (!out.baseUrl) out.baseUrl = JAVDB_DEFAULT_BASE;
  if (!out.locale) out.locale = "zh";
  if (!out.coverMode) out.coverMode = "fast";
  return out;
}

var CATEGORY_SOURCE_MAP = {
  actors: {
    sources: [
      { label: "有码", path: "/actors/censored" },
      { label: "无码", path: "/actors/uncensored" },
    ],
  },
  series: {
    sources: [
      { label: "有码", path: "/series" },
      { label: "无码", path: "/series/uncensored" },
    ],
  },
  tags: {
    sources: [{ label: "", path: "/tags" }],
  },
  makers: {
    sources: [
      { label: "有码", path: "/makers" },
      { label: "无码", path: "/makers/uncensored" },
    ],
  },
};

function categoryModuleParams(options) {
  return [
    {
      name: "categoryKey",
      title: "categoryKey",
      type: "constant",
      value: options.categoryKey,
    },
    {
      name: "item",
      title: options.itemTitle || "选择分类",
      type: "enumeration",
      description:
        options.itemDescription ||
        "进入模块时自动从网站拉取全部条目；切换「分类列表页」可加载更多",
      optionsFunctionName: options.optionsFunctionName || "loadCategoryItemOptions",
      enumOptions: [{ title: "加载中…", value: "" }],
      value: "",
    },
    {
      name: "options_page",
      title: "分类列表页",
      type: "page",
      description: "每个来源目录都会拉取该页（如第2页=有码第2页+无码第2页）",
      value: "1",
    },
    {
      name: "sort_by",
      title: "作品排序",
      type: "enumeration",
      enumOptions: [
        { title: "最近上市", value: "published" },
        { title: "最高评分", value: "score" },
        { title: "最多收藏", value: "fav" },
      ],
      value: "published",
    },
    { name: "page", title: "作品页码", type: "page", value: "1" },
  ];
}

WidgetMetadata = {
  id: "forward.javdb",
  title: "JavDB",
  version: "1.6.2",
  requiredVersion: "0.0.1",
  description: "获取 JavDB 影片列表、演员/系列/标签/片商（选择项从网站拉取）与高清详情、剧照与相似推荐",
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
    {
      name: "coverMode",
      title: "封面模式",
      type: "enumeration",
      enumOptions: [
        { title: "快速（推荐）", value: "fast" },
        { title: "详情高清", value: "hd" },
      ],
      value: "fast",
    },
  ],
  modules: [
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
        categoryKey: "actors",
        itemTitle: "选择演员",
        optionsFunctionName: "loadActorItemOptions",
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
        categoryKey: "series",
        itemTitle: "选择系列",
        optionsFunctionName: "loadSeriesItemOptions",
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
        categoryKey: "tags",
        itemTitle: "选择标签",
        optionsFunctionName: "loadTagItemOptions",
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
        categoryKey: "makers",
        itemTitle: "选择片商",
        optionsFunctionName: "loadMakerItemOptions",
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

function resolveDetailPath(link, params) {
  var raw = String(link || "").trim();
  if (!raw) return "";
  var decoded = decodeLink(raw);
  if (!decoded) return "";
  if (decoded.indexOf("http://") === 0 || decoded.indexOf("https://") === 0) {
    return extractPath(decoded, javdbBase(params));
  }
  if (decoded.charAt(0) === "/") return decoded.split("#")[0];
  return decoded;
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

function appendPageUrlToDescription(description, pageUrl) {
  var base = String(description || "").replace(/\s+/g, " ").trim();
  var footer = "JavDB 链接：" + pageUrl;
  if (!pageUrl) return base;
  if (base.indexOf(pageUrl) >= 0) return base;
  return base ? base + "\n\n" + footer : footer;
}

function buildOpenJavdbItem(pageUrl, title, cover) {
  return {
    id: pageUrl,
    type: "url",
    mediaType: "movie",
    title: title || "打开 JavDB 官网",
    description: pageUrl,
    link: pageUrl,
    posterPath: cover || undefined,
    backdropPath: cover || undefined,
    coverUrl: cover || undefined,
  };
}

function normalizePath(href, base) {
  if (!href) return "";
  var path = href.indexOf("http") === 0 ? href.replace(base, "") : href;
  if (path.charAt(0) !== "/") path = "/" + path;
  return path.split("#")[0];
}

function normalizeCategoryPath(path) {
  var value = String(path || "").split("#")[0].trim();
  if (!value) return "";
  if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) {
    value = value.replace(/^https?:\/\/[^/]+/, "");
  }
  if (value.charAt(0) !== "/") value = "/" + value;
  return value;
}

function browseItemToOption(item) {
  var path = "";
  if (item && item.link) {
    path = decodeLink(item.link);
  }
  path = normalizeCategoryPath(path);
  if (!path) return null;
  return {
    title: String((item && item.title) || path).trim(),
    value: path,
  };
}

function buildCategoryOptionsCacheKey(categoryKey, optionsPage, params) {
  return (
    "javdb.catopts." +
    String(categoryKey || "") +
    ".p" +
    String(optionsPage || 1) +
    ".loc" +
    javdbLocale(params)
  );
}

async function fetchCategoryBrowseOptions(library, params, optionsPage) {
  var parser = getBrowseParser(library);
  if (!parser) return [];
  var browseUrl = buildPageUrl(
    javdbBase(params),
    library,
    Object.assign({}, params, { page: optionsPage || 1 })
  );
  var html = await fetchHtml(browseUrl, params);
  var items = parser(html, params);
  var options = [];
  var seen = {};
  for (var i = 0; i < items.length; i++) {
    var opt = browseItemToOption(items[i]);
    if (!opt || !opt.value || seen[opt.value]) continue;
    seen[opt.value] = true;
    options.push(opt);
  }
  return options;
}

function mergeCategoryOptionsFromSources(sourceResults, multiSource) {
  var options = [];
  var seen = {};
  for (var i = 0; i < sourceResults.length; i++) {
    var batch = sourceResults[i].options || [];
    var label = sourceResults[i].label || "";
    for (var j = 0; j < batch.length; j++) {
      var opt = batch[j];
      if (!opt || !opt.value || seen[opt.value]) continue;
      seen[opt.value] = true;
      options.push({
        title: multiSource && label ? "[" + label + "] " + opt.title : opt.title,
        value: opt.value,
      });
    }
  }
  options.sort(function (a, b) {
    return String(a.title || "").localeCompare(String(b.title || ""), "zh-CN");
  });
  return options;
}

async function fetchAllCategoryBrowseOptions(categoryKey, params, optionsPage) {
  var config = CATEGORY_SOURCE_MAP[categoryKey];
  if (!config || !config.sources || !config.sources.length) return [];

  var sourceResults = [];
  for (var i = 0; i < config.sources.length; i++) {
    var source = config.sources[i];
    var options = await fetchCategoryBrowseOptions(source.path, params, optionsPage);
    sourceResults.push({ label: source.label, options: options });
  }

  return mergeCategoryOptionsFromSources(sourceResults, config.sources.length > 1);
}

async function loadCategoryItemOptionsForKey(categoryKey, params) {
  try {
    params = syncGlobalParams(params);
    categoryKey = String(categoryKey || params.categoryKey || "").trim();
    var config = CATEGORY_SOURCE_MAP[categoryKey];
    if (!config) {
      return [{ title: "未知分类模块", value: "" }];
    }

    var optionsPage = Number(params.options_page || 1);
    var cacheKey = buildCategoryOptionsCacheKey(categoryKey, optionsPage, params);
    var cached = Widget.storage.get(cacheKey);
    if (cached) {
      try {
        var parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      } catch (e) {}
    }

    var options = await fetchAllCategoryBrowseOptions(categoryKey, params, optionsPage);
    if (!options.length) {
      return [{ title: "未获取到选项", value: "" }];
    }
    try {
      Widget.storage.set(cacheKey, JSON.stringify(options));
    } catch (e2) {}
    return options;
  } catch (error) {
    console.error("[javdb] 分类选项加载失败:", error.message || error);
    return [{ title: "加载失败，请重试", value: "" }];
  }
}

async function loadCategoryItemOptions(params) {
  return loadCategoryItemOptionsForKey(params && params.categoryKey, params);
}

async function loadActorItemOptions(params) {
  return loadCategoryItemOptionsForKey("actors", params);
}

async function loadSeriesItemOptions(params) {
  return loadCategoryItemOptionsForKey("series", params);
}

async function loadTagItemOptions(params) {
  return loadCategoryItemOptionsForKey("tags", params);
}

async function loadMakerItemOptions(params) {
  return loadCategoryItemOptionsForKey("makers", params);
}

async function loadParamOptions(params) {
  params = params || {};
  var paramName = String(params.paramName || params.name || "item");
  if (paramName !== "item") return [];

  var fnName = String(params.optionsFunctionName || params.functionName || "").trim();
  if (fnName === "loadActorItemOptions") return loadActorItemOptions(params);
  if (fnName === "loadSeriesItemOptions") return loadSeriesItemOptions(params);
  if (fnName === "loadTagItemOptions") return loadTagItemOptions(params);
  if (fnName === "loadMakerItemOptions") return loadMakerItemOptions(params);

  return loadCategoryItemOptions(params);
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
  if (rawCode) {
    fields.name = rawCode;
    fields.seriesName = rawCode;
    fields.episodeName = rawCode;
  }
  if (rawTitle) fields.originalTitle = rawTitle;
  if (rawCode && description && description.toUpperCase().indexOf(rawCode.toUpperCase()) < 0) {
    fields.description = rawCode + " " + description;
  } else if (description) {
    fields.description = description;
  } else if (rawCode) {
    fields.description = rawCode;
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

function fetchJavTrailersMeta(dvdId) {
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
  return { backdropPath: backdropPath, backdropPaths: backdropPaths };
}

function upgradeJavdbImageUrl(url) {
  var value = String(url || "").trim();
  if (!value) return "";
  value = value.replace(/\/thumbs\//gi, "/covers/");
  value = value.replace(/\/samples\//gi, "/covers/");
  value = value.replace(/jdbimgs\.com\/thumbs/gi, "jdbimgs.com/covers");
  if (/_s\.(jpe?g|webp|png)(\?|$)/i.test(value)) {
    value = value.replace(/_s(\.(?:jpe?g|webp|png))(\?.*)?$/i, "_b$1$2");
  }
  return value;
}

function isLowResGalleryUrl(url) {
  var u = String(url || "").toLowerCase();
  if (u.indexOf("/samples/") >= 0 || u.indexOf("/thumbs/") >= 0) return true;
  if (/_s\.(jpe?g|webp|png)(\?|$)/i.test(u)) return true;
  return false;
}

function collectPageGalleryUrls($, base) {
  var urls = [];
  var seen = {};

  function push(raw) {
    var href = absUrl(String(raw || "").trim(), base);
    if (!href || seen[href]) return;
    seen[href] = true;
    urls.push(href);
  }

  $("a.tile-item[data-fancybox='gallery'], a[data-fancybox='gallery']").each(function () {
    push(attrOf($, $(this), "href"));
    push(attrOf($, $(this), "data-src"));
  });

  $("a.tile-item, .tile-images a, .preview-images a").each(function () {
    push(attrOf($, $(this), "href"));
  });

  $(".tile-images img, .preview-images img, a.tile-item img").each(function () {
    push(attrOf($, $(this), "data-src"));
    push(attrOf($, $(this), "data-original"));
    push(attrOf($, $(this), "src"));
  });

  return urls;
}

function buildDetailBackdropPaths(pageUrls, displayCode, params, options) {
  options = options || {};
  var pageBackdrops = normalizeBackdropPaths(pageUrls, options);
  var jtMeta = displayCode ? fetchJavTrailersMeta(displayCode) : { backdropPath: "", backdropPaths: [] };
  var hdMode = !isFastCoverMode(params);
  var merged = [];
  var seen = {};

  function push(url) {
    var value = String(url || "").trim();
    if (!value || seen[value]) return;
    seen[value] = true;
    merged.push(value);
  }

  for (var i = 0; i < pageBackdrops.length; i++) push(pageBackdrops[i]);

  if (hdMode || !merged.length) {
    var hdList = jtMeta.backdropPaths || [];
    for (var j = 0; j < hdList.length; j++) push(hdList[j]);
  }

  if (!merged.length && options.coverUrl) {
    push(options.coverUrl);
  }

  return merged;
}

function buildDmmPreviewUrls(contentId) {
  var id = String(contentId || "").toLowerCase();
  if (!id) return [];
  var base = "https://cc3001.dmm.co.jp/digital/video/" + id + "/" + id;
  return compactUniqueUrls([base + "mhb.mp4", base + "hhb.mp4", base + "sm.mp4"]);
}

function parseTrailersFromHtml($, base, displayCode, coverUrl) {
  var trailers = [];
  var seen = {};

  function push(url, cover) {
    var value = absUrl(String(url || "").trim(), base);
    if (!value || seen[value]) return;
    if (!/\.mp4(\?|$)/i.test(value) && value.indexOf("dmm.co.jp") < 0) return;
    seen[value] = true;
    trailers.push({
      coverUrl: cover || coverUrl || "",
      url: value,
    });
  }

  $("video source[src], video[src]").each(function () {
    push(attrOf($, $(this), "src"), coverUrl);
  });

  $("a[href*='.mp4'], [data-url*='.mp4'], [data-video*='.mp4']").each(function () {
    var node = $(this);
    push(attrOf($, node, "href") || attrOf($, node, "data-url") || attrOf($, node, "data-video"), coverUrl);
  });

  if (!trailers.length && displayCode) {
    var contentId = buildDmmContentIdFromDvdId(displayCode);
    var previewUrls = buildDmmPreviewUrls(contentId);
    for (var i = 0; i < previewUrls.length; i++) {
      push(previewUrls[i], coverUrl);
    }
  }

  return trailers.slice(0, 3);
}

var RELATED_SECTION_RULES = [
  {
    bucket: "sameActor",
    keywords: ["他们还出演", "同演员", "同演員", "same actor", "also appeared", "同参演", "同參演"],
  },
  {
    bucket: "recommend",
    keywords: ["你可能也喜欢", "你可能也喜歡", "猜你喜欢", "猜你喜歡", "you may also", "recommended for you", "may also like"],
  },
];

function matchRelatedSectionBucket(title) {
  var text = String(title || "").replace(/\s+/g, " ").trim().toLowerCase();
  if (!text) return "";
  for (var i = 0; i < RELATED_SECTION_RULES.length; i++) {
    var rule = RELATED_SECTION_RULES[i];
    for (var j = 0; j < rule.keywords.length; j++) {
      if (text.indexOf(rule.keywords[j].toLowerCase()) >= 0) return rule.bucket;
    }
  }
  return "";
}

function parseRelatedMovieBox($, box, base) {
  var href = attrOf($, box, "href");
  if (!href) return null;
  var relPath = href.indexOf("http") === 0 ? href.replace(base, "") : href;
  relPath = String(relPath || "").split("#")[0];
  if (!relPath || relPath.indexOf("/v/") !== 0) return null;

  var relTitle = attrOf($, box, "title") || textOf($, box.find(".video-title").first()) || textOf($, box);
  var relCode = textOf($, box.find(".video-title strong").first()) || extractMatchCode(relTitle);
  return {
    id: relCode || relPath.split("/").pop(),
    type: "url",
    mediaType: "movie",
    title: formatDisplayTitle(relCode, relTitle),
    fallbackCover: absUrl(attrOf($, box.find("img").first(), "src"), base),
    matchCode: relCode,
    originalTitle: relTitle,
    code: relCode,
    link: encodeLink(relPath),
    videoId: relPath.split("/").pop(),
  };
}

function parseRelatedBoxesInContainer($, container, base) {
  var items = [];
  var seen = {};
  container.find("a.box[href*='/v/'], .item a.box[href*='/v/'], .video-item a[href*='/v/']").each(function () {
    var parsed = parseRelatedMovieBox($, $(this), base);
    if (!parsed || seen[parsed.link]) return;
    seen[parsed.link] = true;
    items.push(parsed);
  });
  return items;
}

function mergeRelatedRawLists() {
  var merged = [];
  var seen = {};
  for (var i = 0; i < arguments.length; i++) {
    var list = arguments[i] || [];
    for (var j = 0; j < list.length; j++) {
      var item = list[j];
      var key = item && (item.link || item.id);
      if (!key || seen[key]) continue;
      seen[key] = true;
      merged.push(item);
    }
  }
  return merged;
}

function parseRelatedSectionsFromHtml(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var buckets = { sameActor: [], recommend: [], other: [] };

  $(".panel, section, article, .message, .video-panel").each(function () {
    var section = $(this);
    var heading = textOf($, section.find("h2, h3, h4, .title").first());
    var bucket = matchRelatedSectionBucket(heading);
    if (!bucket) return;
    var items = parseRelatedBoxesInContainer($, section, base);
    if (items.length) buckets[bucket] = mergeRelatedRawLists(buckets[bucket], items);
  });

  if (!buckets.sameActor.length && !buckets.recommend.length) {
    buckets.other = parseRelatedFromHtml(html, params);
  } else {
    var generic = parseRelatedFromHtml(html, params);
    buckets.other = generic.filter(function (item) {
      var key = item.link || item.id;
      return !buckets.sameActor.some(function (x) {
        return (x.link || x.id) === key;
      }) && !buckets.recommend.some(function (y) {
        return (y.link || y.id) === key;
      });
    });
  }

  return mergeRelatedRawLists(buckets.sameActor, buckets.recommend, buckets.other).slice(0, 24);
}

function normalizeBackdropPaths(urls, options) {
  options = options || {};
  var coverUrl = String(options.coverUrl || "").trim();
  var result = [];
  var seen = {};
  for (var i = 0; i < (urls || []).length; i++) {
    var raw = String(urls[i] || "").trim();
    if (!raw) continue;
    if (isLowResGalleryUrl(raw)) continue;
    var upgraded = upgradeJavdbImageUrl(raw);
    if (!upgraded || seen[upgraded]) continue;
    if (coverUrl && upgraded === coverUrl) continue;
    if (isLowResGalleryUrl(upgraded)) continue;
    seen[upgraded] = true;
    result.push(upgraded);
  }
  return result;
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

function isFastCoverMode(params) {
  params = getEffectiveParams(params);
  return String(params.coverMode || "fast") !== "hd";
}

function applyFastCovers(fallbackCover, videoId) {
  var cover = resolveJavdbCoverUrl(fallbackCover, videoId);
  return {
    backdropPath: cover,
    posterPath: cover,
    detailPoster: cover,
    coverUrl: cover,
  };
}

function applyHdCoversNoVerify(code, fallbackCover, options) {
  options = options || {};
  var javdbCover = resolveJavdbCoverUrl(fallbackCover, options.videoId);
  var candidates = buildCoverCandidatesFromVideoId(code);
  var backdropPath = javdbCover || candidates.backdropCandidates[0] || fallbackCover || "";
  var posterPath = javdbCover || candidates.posterCandidates[0] || backdropPath;
  return {
    backdropPath: backdropPath,
    posterPath: posterPath,
    detailPoster: posterPath,
    coverUrl: backdropPath,
  };
}

function buildCoverBundle(code, fallbackCover, options, params) {
  if (isFastCoverMode(params)) {
    return applyFastCovers(fallbackCover, options && options.videoId);
  }
  return applyHdCoversNoVerify(code, fallbackCover, options);
}

function enrichDetailLinks(item, pageUrl, displayCode, cover) {
  var openItem = buildOpenJavdbItem(pageUrl, "打开 JavDB 官网 · " + (displayCode || "详情"), cover);
  item.webUrl = pageUrl;
  item.childItems = [openItem];
  item.description = appendPageUrlToDescription(item.description, pageUrl);
  if (Array.isArray(item.relatedItems) && item.relatedItems.length) {
    item.relatedItems = item.relatedItems.filter(function (rel) {
      return rel && rel.link !== pageUrl && rel.id !== pageUrl;
    });
  } else {
    item.relatedItems = [];
  }
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
      id: matchCode || path.split("/").pop() || path,
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

function enrichMovieItems(rawItems, params) {
  params = params || {};
  var items = [];
  for (var i = 0; i < rawItems.length; i++) {
    var raw = rawItems[i];
    var covers = buildCoverBundle(raw.code, raw.fallbackCover, { videoId: raw.videoId || raw.id }, params);
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

function buildPeopleBrowseItem(id, title, avatar, path) {
  var fullPath = path || "/actors/" + id;
  return {
    id: String(id),
    type: "url",
    title: title,
    posterPath: avatar || "",
    description: "点击查看作品",
    link: encodeLink(fullPath),
  };
}

function buildGenreBrowseItem(genreId, title, poster, path) {
  var fullPath = path || "";
  if (!fullPath && String(genreId).indexOf("series:") === 0) {
    fullPath = "/series/" + String(genreId).slice(7);
  } else if (!fullPath && String(genreId).indexOf("maker:") === 0) {
    fullPath = "/makers/" + String(genreId).slice(6);
  } else if (!fullPath && String(genreId).indexOf("tags/") === 0) {
    fullPath = "/" + String(genreId);
  }
  return {
    id: String(genreId),
    type: "url",
    title: title,
    posterPath: poster || "",
    description: "点击查看作品",
    link: fullPath ? encodeLink(fullPath) : "",
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
    items.push(buildPeopleBrowseItem(id, title, avatar, path));
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
    items.push(buildGenreBrowseItem("series:" + id, title, "", path));
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
    items.push(buildGenreBrowseItem("maker:" + id, title, "", path));
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
  return normalizeCategoryPath(params.item || params.path || params.url || "");
}

function applyCategorySort(path, sortBy) {
  if (!path) return path;
  var sortMap = { published: "0", score: "1", fav: "2" };
  var sortType = sortMap[String(sortBy || "published")];
  if (sortType === undefined) return path;
  return path + (path.indexOf("?") >= 0 ? "&" : "?") + "sort_type=" + sortType;
}

async function loadPage(params) {
  try {
    params = syncGlobalParams(params);
    var sortBy = String(params.sort_by || "published");
    if (hasJumpFilter(params)) {
      var jumpPath = applyCategorySort(resolveFilteredPath(params, ""), sortBy);
      var jumpMovies = await fetchMovieList(jumpPath, params);
      if (!jumpMovies.length) throw new Error("未解析到影片列表");
      return jumpMovies;
    }

    var path = applyCategorySort(resolveCategoryPath(params), sortBy);
    if (!path) {
      throw new Error("请先在参数中选择分类项（演员/系列/标签/片商）");
    }
    if (isBrowseLibraryPath(path)) {
      throw new Error("请选择具体分类项，而不是库目录");
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
    items.push(buildGenreBrowseItem(path.replace(/^\//, ""), title, "", path));
  });

  return items;
}

function parseRelatedFromHtml(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var rawRelated = [];
  $(".recommendations .item a.box, .video-recommend .item a.box, #recommend .item a.box, section.recommend .item a.box").each(function () {
    var box = $(this);
    var href = attrOf($, box, "href");
    var relPath = href.indexOf("http") === 0 ? href.replace(base, "") : href;
    if (!relPath || relPath.indexOf("/v/") !== 0) return;
    var relTitle = box.attr("title") || textOf($, box.find(".video-title").first());
    var relCode = textOf($, box.find(".video-title strong").first()) || extractMatchCode(relTitle);
    rawRelated.push({
      id: relCode || relPath.split("/").pop(),
      type: "url",
      mediaType: "movie",
      title: formatDisplayTitle(relCode, relTitle),
      fallbackCover: absUrl(attrOf($, box.find("img").first(), "src"), base),
      matchCode: relCode,
      originalTitle: relTitle,
      code: relCode,
      link: encodeLink(relPath),
      videoId: relPath.split("/").pop(),
    });
  });
  return rawRelated;
}

async function parseCategoryDetailPage(html, path, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var title = textOf($, $("h2.title strong").first()) || textOf($, $("h2 strong").first()) || path.split("/").pop();
  title = stripCountSuffix(title);
  var avatar = absUrl(attrOf($, $("img.avatar").first(), "src"), base);
  var movies = await fetchMovieList(path, params);
  return {
    id: path.split("/").pop() || encodeLink(path),
    type: "url",
    title: title,
    posterPath: avatar || "",
    detailPoster: avatar || "",
    description: "共收录 " + movies.length + " 部影片（当前页）",
    link: encodeLink(path),
    relatedItems: movies,
  };
}

async function parseDetailPage(html, link, params) {
  var base = javdbBase(params);
  var path = extractPath(link, base);
  var pageUrl = detailPageUrl(path, params);
  var $ = Widget.html.load(html);

  var title = textOf($, $("h2 strong.current-title").first());
  if (!title) title = textOf($, $("h2.title strong").first());

  var code = attrOf($, $("a[title='Copy ID'], a[title='复制番号'], a.copy-to-clipboard[title='复制番号']").first(), "data-clipboard-text");
  if (!code) {
    code = textOf($, $("strong:contains('番号'), strong:contains('Code')").parent().find("span.value, span").first());
  }
  if (!code) {
    code = textOf($, $("span.value").first());
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

  var backdropPaths = collectPageGalleryUrls($, base);

  var cover = extractBestImageUrl($, $("img.video-cover").first(), base);
  if (!cover && backdropPaths.length) cover = absUrl(backdropPaths[0], base);

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

  var rawRelated = parseRelatedSectionsFromHtml(html, params);

  var displayCode = code || extractMatchCode(title);
  if (!displayCode && description) {
    displayCode = extractMatchCode(description);
  }
  var displayTitle = formatDisplayTitle(displayCode, title);
  var matchFields = buildGuangyaMatchFields(displayCode, title || displayTitle, description);
  var fallbackCover = cover || resolveJavdbCoverUrl("", videoId);
  params = getEffectiveParams(params);
  var coverBundle = buildCoverBundle(displayCode, fallbackCover, { videoId: videoId }, params);
  var hdMode = !isFastCoverMode(params);
  var jtMeta = hdMode && displayCode ? fetchJavTrailersMeta(displayCode) : { backdropPath: "", backdropPaths: [] };

  var backdropPath = hdMode
    ? jtMeta.backdropPath || coverBundle.backdropPath || fallbackCover
    : coverBundle.backdropPath || fallbackCover;
  var detailPoster = coverBundle.detailPoster || fallbackCover;
  var posterPath = coverBundle.posterPath || fallbackCover;

  var allBackdropPaths = buildDetailBackdropPaths(backdropPaths, displayCode, params, {
    coverUrl: fallbackCover,
  });
  var trailers = parseTrailersFromHtml($, base, displayCode, backdropPath || fallbackCover);

  var relatedParams = Object.assign({}, params, { coverMode: "fast" });
  var relatedItems = enrichMovieItems(rawRelated, relatedParams);

  return enrichDetailLinks(
    Object.assign(
      {
        id: displayCode || path.split("/").pop() || encodeLink(path),
        type: "url",
        mediaType: "movie",
        title: displayTitle || displayCode || path.split("/").pop(),
        backdropPath: backdropPath,
        posterPath: posterPath,
        coverUrl: backdropPath,
        detailPoster: detailPoster,
        backdropPaths: allBackdropPaths,
        trailers: trailers,
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
    pageUrl,
    displayCode,
    backdropPath
  );
}

async function fetchMovieList(path, params) {
  params = syncGlobalParams(params);
  var url = buildPageUrl(javdbBase(params), path, params);
  var html = await fetchHtml(url, params);
  return enrichMovieItems(parseListItems(html, params), params);
}

async function loadListByPath(path, params) {
  try {
    params = syncGlobalParams(params);
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
    params = syncGlobalParams(params);
    var keyword = normalizeSearchKeyword(params.keyword);
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
    var items = enrichMovieItems(parseListItems(html, params), params);
    if (!items.length) throw new Error("未找到相关影片");
    return items;
  } catch (error) {
    console.error("[javdb] 搜索失败:", error.message || error);
    throw error;
  }
}

async function loadDetail(link) {
  try {
    var params = getEffectiveParams({});
    var path = resolveDetailPath(link, params);
    if (!path) return null;

    if (path.indexOf("/v/") === 0) {
      var pageUrl = detailPageUrl(path, params);
      var html = await fetchHtml(pageUrl, params);
      var detail = await parseDetailPage(html, path, params);
      if (!detail || !detail.title) return null;
      return detail;
    }

    if (
      path.indexOf("/actors/") === 0 ||
      path.indexOf("/series/") === 0 ||
      path.indexOf("/makers/") === 0 ||
      path.indexOf("/tags/") === 0
    ) {
      var categoryUrl = detailPageUrl(path, params);
      var categoryHtml = await fetchHtml(categoryUrl, params);
      return await parseCategoryDetailPage(categoryHtml, path, params);
    }

    return null;
  } catch (error) {
    console.error("[javdb] 详情加载失败:", error.message || error);
    return null;
  }
}

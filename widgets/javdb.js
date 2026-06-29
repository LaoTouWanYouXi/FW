/**
 * JavDB ForwardWidget 模块
 * 抓取影片列表与详情（名称、封面、详情海报、剧照、简介），
 * 播放资源返回 JavDB 详情页地址，由 App 半屏浏览器打开。
 */

WidgetMetadata = {
  id: "forward.javdb",
  title: "JavDB",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  description: "获取 JavDB 影片列表、演员、系列、标签分类与详情，播放时在半屏浏览器打开详情页",
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
      params: [
        { name: "page", title: "页码", type: "page" },
      ],
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
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "censored",
      title: "有码",
      functionName: "loadCensored",
      cacheDuration: 1800,
      params: [
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "uncensored",
      title: "无码",
      functionName: "loadUncensored",
      cacheDuration: 1800,
      params: [
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "actors",
      title: "演员列表",
      functionName: "loadActors",
      cacheDuration: 3600,
      params: [
        {
          name: "actorType",
          title: "类型",
          type: "enumeration",
          enumOptions: [
            { title: "有码", value: "censored" },
            { title: "无码", value: "uncensored" },
            { title: "欧美", value: "western" },
          ],
          value: "censored",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "series",
      title: "系列分类",
      functionName: "loadSeries",
      cacheDuration: 3600,
      params: [
        {
          name: "seriesType",
          title: "类型",
          type: "enumeration",
          enumOptions: [
            { title: "有码系列", value: "censored" },
            { title: "无码系列", value: "uncensored" },
          ],
          value: "censored",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "categories",
      title: "标签分类",
      functionName: "loadCategories",
      cacheDuration: 3600,
      params: [
        {
          name: "tag",
          title: "标签",
          type: "enumeration",
          enumOptions: [
            { title: "中文字幕", value: "tags/chinese_subtitle?id=1" },
            { title: "VR", value: "tags/vr?id=1" },
            { title: "巨乳", value: "tags/big_tits?id=1" },
            { title: "连裤袜", value: "tags/pantyhose?id=1" },
            { title: "角色扮演", value: "tags/cosplay?id=1" },
            { title: "NTR", value: "tags/ntr?id=1" },
            { title: "熟女", value: "tags/mature?id=1" },
            { title: "无码流出", value: "tags/uncensored_leak?id=1" },
          ],
          value: "tags/chinese_subtitle?id=1",
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "makers",
      title: "片商列表",
      functionName: "loadMakers",
      cacheDuration: 3600,
      params: [
        {
          name: "makerType",
          title: "类型",
          type: "enumeration",
          enumOptions: [
            { title: "有码", value: "censored" },
            { title: "无码", value: "uncensored" },
          ],
          value: "censored",
        },
        { name: "page", title: "页码", type: "page" },
      ],
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
  var items = [];
  var seen = {};

  function pushItem(href, title, poster, ratingText, releaseDate, code) {
    if (!href) return;
    var path = href.indexOf("http") === 0 ? href.replace(base, "") : href;
    if (!path || path.indexOf("/v/") !== 0 || seen[path]) return;
    seen[path] = true;

    var id = path.split("/").pop() || path;
    var cleanTitle = String(title || code || id).replace(/\s+/g, " ").trim();
    if (!cleanTitle) cleanTitle = id;

    items.push({
      id: id,
      type: "url",
      mediaType: "movie",
      title: cleanTitle,
      posterPath: absUrl(poster, base),
      rating: parseRatingText(ratingText),
      releaseDate: releaseDate || "",
      link: encodeLink(path),
    });
  }

  $(".movie-list .item a.box, #videos .grid-item a.box, .grid-item.column a.box").each(function () {
    var box = $(this);
    var href = attrOf($, box, "href");
    var titleNode = box.find(".video-title strong").first();
    var titleText = textOf($, titleNode);
    var subTitle = textOf($, box.find(".video-title").first());
    var title = box.attr("title") || subTitle || titleText;
    var poster = attrOf($, box.find("img").first(), "src");
    var ratingText = textOf($, box.find(".score").first());
    var releaseDate = textOf($, box.find(".meta").first());
    pushItem(href, title, poster, ratingText, releaseDate, titleText);
  });

  return items;
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
    items.push({
      id: "actor-" + id,
      type: "url",
      mediaType: "movie",
      title: textOf($, node.find("strong").first()) || textOf($, node),
      posterPath: absUrl(attrOf($, node.find("img").first(), "src"), base),
      description: "点击查看演员作品",
      link: encodeLink(path),
    });
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
    items.push({
      id: "series-" + id,
      type: "url",
      mediaType: "movie",
      title: title,
      description: "点击查看系列作品",
      link: encodeLink(path),
    });
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
    items.push({
      id: "maker-" + id,
      type: "url",
      mediaType: "movie",
      title: title,
      description: "点击查看片商作品",
      link: encodeLink(path),
    });
  });

  return items;
}

function parseCollectionDetailPage(html, path, params, kind) {
  var base = javdbBase(params);
  var pageUrl = detailPageUrl(path, params);
  var $ = Widget.html.load(html);
  var title = textOf($, $("h2.title strong, h2 strong, .title strong").first());
  if (!title) title = textOf($, $("h2.title, h2").first());
  title = stripCountSuffix(title);

  var avatar = absUrl(attrOf($, $("img.avatar, .actor-avatar img, .video-cover, img").first(), "src"), base);
  var description = textOf($, $(".actor-section-name, .section-meta, #introduction dd p").first());
  var relatedItems = parseListItems(html, params);

  return {
    id: path.split("/").pop() || path,
    type: "url",
    mediaType: "movie",
    title: title || path.split("/").pop(),
    description: description || (kind === "actor" ? "演员作品列表" : kind === "series" ? "系列作品列表" : "片商作品列表"),
    posterPath: avatar,
    detailPoster: avatar,
    backdropPath: avatar,
    relatedItems: relatedItems,
    videoUrl: pageUrl,
    link: encodeLink(path),
  };
}

function parseDetailPage(html, link, params) {
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

  var cover = attrOf($, $("img.video-cover").first(), "src");
  var detailPoster = cover;

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

  var relatedItems = [];
  $(".recommendations .item a.box, .video-recommend .item a.box").each(function () {
    var box = $(this);
    var href = attrOf($, box, "href");
    var relPath = href.indexOf("http") === 0 ? href.replace(base, "") : href;
    if (!relPath || relPath.indexOf("/v/") !== 0) return;
    relatedItems.push({
      id: relPath.split("/").pop(),
      type: "url",
      mediaType: "movie",
      title: box.attr("title") || textOf($, box.find(".video-title").first()),
      posterPath: absUrl(attrOf($, box.find("img").first(), "src"), base),
      link: encodeLink(relPath),
    });
  });

  return {
    id: path.split("/").pop() || encodeLink(path),
    type: "url",
    mediaType: "movie",
    title: title || code || path.split("/").pop(),
    description: description,
    posterPath: absUrl(cover, base),
    detailPoster: absUrl(detailPoster, base),
    backdropPath: absUrl(cover, base),
    backdropPaths: backdropPaths,
    releaseDate: releaseDate,
    durationText: durationText,
    rating: rating,
    genreItems: genreItems,
    peoples: peoples,
    relatedItems: relatedItems,
    videoUrl: pageUrl,
    link: encodeLink(path),
  };
}

async function fetchMovieList(path, params) {
  var url = buildPageUrl(javdbBase(params), path, params);
  var html = await fetchHtml(url, params);
  return parseListItems(html, params);
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

async function loadBrowseList(path, parser, params, emptyMessage) {
  try {
    params = params || {};
    var targetPath = resolveFilteredPath(params, path);
    var url = buildPageUrl(javdbBase(params), targetPath, params);
    var html = await fetchHtml(url, params);

    if (params.peopleId || params.genreId || params.seriesId || params.makerId) {
      var movies = parseListItems(html, params);
      if (!movies.length) throw new Error(emptyMessage || "未解析到影片列表");
      return movies;
    }

    var items = parser(html, params);
    if (!items.length) throw new Error(emptyMessage || "未解析到列表");
    return items;
  } catch (error) {
    console.error("[javdb] 浏览列表失败:", error.message || error);
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

async function loadCensored(params) {
  return loadListByPath("/tags/censored", params || {});
}

async function loadUncensored(params) {
  return loadListByPath("/tags/uncensored", params || {});
}

async function loadActors(params) {
  params = params || {};
  var actorType = String(params.actorType || "censored");
  return loadBrowseList("/actors/" + actorType, parseActorBrowseItems, params, "未解析到演员列表");
}

async function loadSeries(params) {
  params = params || {};
  var seriesType = String(params.seriesType || "censored");
  var path = seriesType === "uncensored" ? "/series/uncensored" : "/series";
  return loadBrowseList(path, parseSeriesBrowseItems, params, "未解析到系列列表");
}

async function loadCategories(params) {
  params = params || {};
  var merged = {};
  for (var key in params) merged[key] = params[key];
  if (!merged.genreId && merged.tag) merged.genreId = merged.tag;
  return loadListByPath("/", merged);
}

async function loadMakers(params) {
  params = params || {};
  var makerType = String(params.makerType || "censored");
  var path = makerType === "uncensored" ? "/makers/uncensored" : "/makers";
  return loadBrowseList(path, parseMakerBrowseItems, params, "未解析到片商列表");
}

async function search(params) {
  try {
    var keyword = String((params && params.keyword) || "").trim();
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
    var items = parseListItems(html, params);
    if (!items.length) throw new Error("未找到相关影片");
    return items;
  } catch (error) {
    console.error("[javdb] 搜索失败:", error.message || error);
    throw error;
  }
}

async function loadDetail(link) {
  try {
    var path = decodeLink(link);
    if (!path) return null;
    var params = { baseUrl: JAVDB_DEFAULT_BASE, locale: "zh" };
    var pageUrl = detailPageUrl(path, params);
    var html = await fetchHtml(pageUrl, params);

    if (path.indexOf("/actors/") === 0) {
      return parseCollectionDetailPage(html, path, params, "actor");
    }
    if (path.indexOf("/series/") === 0) {
      return parseCollectionDetailPage(html, path, params, "series");
    }
    if (path.indexOf("/makers/") === 0) {
      return parseCollectionDetailPage(html, path, params, "maker");
    }

    var detail = parseDetailPage(html, path, params);
    if (!detail || !detail.title) return null;
    return detail;
  } catch (error) {
    console.error("[javdb] 详情加载失败:", error.message || error);
    return null;
  }
}

async function loadResource(params) {
  var path = decodeLink(params.link || params.id || "");
  if (!path && params.videoUrl) {
    path = extractPath(params.videoUrl, javdbBase(params));
  }
  if (!path) {
    throw new Error("缺少影片链接，无法打开 JavDB 详情页");
  }

  var pageUrl = detailPageUrl(path, params || {});
  return [
    {
      name: "JavDB 详情页",
      description: "在半屏浏览器中打开当前影片的 JavDB 详情页",
      url: pageUrl,
      playerType: "app",
      customHeaders: javdbHeaders(params),
    },
  ];
}

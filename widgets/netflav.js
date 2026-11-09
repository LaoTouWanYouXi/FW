WidgetMetadata = {
  id: "forward.netflav",
  title: "Netflav",
  version: "1.4.0",
  requiredVersion: "0.0.1",
  description: "Netflav 手机直连浏览：分类独立模块与分类选择器、搜索与增强详情；18mag 番号磁力、光鸭转存及公开播放线路",
  author: "Forward",
  site: "https://netflav.com",
  detailCacheDuration: 300,
  globalParams: [
    { name: "locale", title: "语言", type: "enumeration", value: "zh", enumOptions: [{ title: "中文", value: "zh" }, { title: "English", value: "en" }] },
    { name: "image_style", title: "图片样式", type: "enumeration", value: "backdrop", enumOptions: [{ title: "横图", value: "backdrop" }, { title: "竖图", value: "poster" }] },
    { name: "magnet_enabled", title: "18mag 磁力", type: "enumeration", value: "1", enumOptions: [{ title: "显示", value: "1" }, { title: "关闭", value: "0" }] },
    { name: "guangya_token", title: "光鸭 refresh_token", type: "input", value: "", description: "只在点击转存时使用；不发送给 Netflav 或 18mag" },
    { name: "guangya_parent_id", title: "光鸭保存目录 ID", type: "input", value: "", description: "留空保存到根目录" },
    { name: "magnet_min_video_mb", title: "最小保留视频 MB", type: "input", value: "0" },
    { name: "magnet_block_patterns", title: "拦截正则", type: "input", value: "", description: "分号分隔；留空使用广告/预告过滤规则" }
  ],
  modules: [
    { id: "recommended", title: "推荐", functionName: "loadRecommended", cacheDuration: 600, params: [{ name: "page", title: "页码", type: "page", value: "1" }] },
    { id: "censored", title: "有码影片", functionName: "loadCensored", cacheDuration: 600, params: [{ name: "page", title: "页码", type: "page", value: "1" }] },
    { id: "uncensored", title: "无码影片", functionName: "loadUncensored", cacheDuration: 600, params: [{ name: "page", title: "页码", type: "page", value: "1" }] },
    { id: "chinese", title: "中文字幕", functionName: "loadChinese", cacheDuration: 600, params: [{ name: "page", title: "页码", type: "page", value: "1" }] },
    { id: "genres", title: "影片分类", functionName: "loadGenre", cacheDuration: 0, params: [
      { name: "genreId", title: "选择分类", type: "enumeration", enumOptions: nfGenreOptions(), value: firstEnumValue(nfGenreOptions()) },
      { name: "page", title: "页码", type: "page", value: "1" },
      { name: "category_kind", title: "分类类型", type: "constant", value: "genres" }
    ] },
    { id: "search", title: "搜索", functionName: "searchMovies", cacheDuration: 300, params: [{ name: "keyword", title: "关键词 / 番号", type: "input", value: "" }, { name: "page", title: "页码", type: "page", value: "1" }] },
    { id: "loadResource", title: "公开播放线路", functionName: "loadResource", type: "stream", cacheDuration: 0, params: [] }
  ],
  search: { title: "Netflav 搜索", functionName: "searchMovies", params: [{ name: "keyword", title: "关键词 / 番号", type: "input" }, { name: "page", title: "页码", type: "page", value: "1" }] }
};

/* ========================= Storage / Params ========================= */
var NF_SITE = "https://netflav.com";
var NF_PARAM_PREFIX = "netflav.global.";
var NF_MAGNET_PREFIX = "netflav:magnet:";
var NF_MEMORY = {};
var NF_TRANSFERS = {};
var NF_PARAMS = {};
var NF_PARAM_KEYS = WidgetMetadata.globalParams.map(function (item) { return item.name; });

function safeText(value) {
  return String(value == null ? "" : value).replace(/\s+/g, " ").trim();
}

function firstEnumValue(options) {
  if (!Array.isArray(options)) return "";
  for (var i = 0; i < options.length; i++) {
    if (options[i] && options[i].value) return options[i].value;
  }
  return "";
}

function isPromiseLike(value) {
  return !!(value && typeof value.then === "function");
}

function normalizeStoreValue(value) {
  if (value == null || isPromiseLike(value)) return "";
  if (typeof value === "object") return value.value != null ? normalizeStoreValue(value.value) : "";
  return String(value).trim();
}

function readStorageRaw(key) {
  try {
    var value = Widget.storage.get(key);
    if (!isPromiseLike(value) && value != null) return value;
  } catch (e) {}
  return NF_MEMORY[key];
}

async function readStorageRawAsync(key) {
  try {
    var value = await Widget.storage.get(key);
    if (value != null) return value;
  } catch (e) {}
  return NF_MEMORY[key];
}

function readStore(key) { return normalizeStoreValue(readStorageRaw(key)); }
async function readStoreAsync(key) { return normalizeStoreValue(await readStorageRawAsync(key)); }

function writeStore(key, value) {
  NF_MEMORY[key] = value;
  try {
    var pending = Widget.storage.set(key, value);
    if (isPromiseLike(pending)) pending.catch(function () {});
  } catch (e) {}
}

async function writeStoreAsync(key, value) {
  NF_MEMORY[key] = value;
  try { await Widget.storage.set(key, value); } catch (e) {}
}

function paramFromBlob(blob, name) {
  if (typeof blob === "string") {
    try { blob = JSON.parse(blob); } catch (e) { return undefined; }
  }
  if (Array.isArray(blob)) {
    for (var i = 0; i < blob.length; i++) {
      if (blob[i] && (blob[i].name === name || blob[i].key === name)) return blob[i].value;
    }
    return undefined;
  }
  if (blob && typeof blob === "object" && Object.prototype.hasOwnProperty.call(blob, name)) return blob[name];
  return undefined;
}

async function ensureGlobalParams(params) {
  params = params || {};
  var widgetGlobals;
  try { widgetGlobals = await Widget.globalParams; } catch (e) {}
  var result = Object.assign({}, params);
  for (var i = 0; i < NF_PARAM_KEYS.length; i++) {
    var name = NF_PARAM_KEYS[i];
    var value = Object.prototype.hasOwnProperty.call(params, name) ? params[name] : paramFromBlob(params.globalParams, name);
    if (value === undefined) value = paramFromBlob(widgetGlobals, name);
    if (value === undefined) {
      var blobs = ["forward.netflav.globalParams", "forward.netflav.global"];
      for (var b = 0; b < blobs.length && value === undefined; b++) value = paramFromBlob(await readStorageRawAsync(blobs[b]), name);
    }
    if (value === undefined) value = await readStorageRawAsync(NF_PARAM_PREFIX + name);
    if (value === undefined) {
      var candidates = ["forward.netflav.globalParams." + name, "forward.netflav." + name];
      for (var k = 0; k < candidates.length && value === undefined; k++) value = await readStorageRawAsync(candidates[k]);
    }
    if (value === undefined) value = NF_PARAMS[name];
    if (value === undefined) value = WidgetMetadata.globalParams[i].value;
    result[name] = normalizeStoreValue(value);
    NF_PARAMS[name] = result[name];
    await writeStoreAsync(NF_PARAM_PREFIX + name, result[name]);
  }
  return result;
}

function persistGlobalParam(name, value) {
  NF_PARAMS[name] = normalizeStoreValue(value);
  writeStore(NF_PARAM_PREFIX + name, NF_PARAMS[name]);
}
async function persistGlobalParamAsync(name, value) {
  persistGlobalParam(name, value);
  await writeStoreAsync(NF_PARAM_PREFIX + name, NF_PARAMS[name]);
}
function normalizeGuangyaToken(value) { return normalizeStoreValue(value); }

function parseApiPayload(response) {
  var value = response && (response.data !== undefined ? response.data : response.body);
  if (typeof value === "string") {
    try { value = JSON.parse(value); } catch (e) { throw new Error("API 返回的不是 JSON"); }
  }
  return value;
}

/* ========================= Identity / Items ========================= */
function parseOwnedLink(raw) {
  if (typeof raw !== "string") return null;
  var text = raw.trim();
  var match = text.match(/^netflav:video:([A-Za-z0-9_-]{6,32})$/);
  if (match) return { kind: "video", videoId: match[1], link: "netflav:video:" + match[1] };
  match = text.match(/^netflav:magnet:([0-9a-fA-F]{40})$/);
  if (match) return { kind: "magnet", hash: match[1].toLowerCase(), link: NF_MAGNET_PREFIX + match[1].toLowerCase() };
  match = text.match(/^https:\/\/netflav\.com\/video\?id=([A-Za-z0-9_-]{6,32})$/);
  if (match) return { kind: "video", videoId: match[1], link: "netflav:video:" + match[1] };
  return null;
}

function safeImageUrl(value) {
  return nfImage(value);
}

function imageUrls(value) {
  var values = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
  var seen = {};
  return values.map(safeImageUrl).filter(function (url) {
    if (!url || seen[url]) return false;
    seen[url] = true;
    return true;
  });
}

function mapListMovie(movie, params) {
  movie = movie || {};
  var owned = parseOwnedLink("netflav:video:" + safeText(movie.videoId));
  if (!owned) return null;
  var code = safeText(movie.code);
  var title = safeText(params.locale === "en" ? movie.title_en || movie.title : movie.title_zh || movie.title);
  title = title || code || owned.videoId;
  if (code && title.toUpperCase().indexOf(code.toUpperCase()) !== 0) title = code + " " + title;
  var cover = safeImageUrl(movie.coverUrl || movie.backdropPath || movie.preview);
  var poster = safeImageUrl(movie.posterPath) || cover;
  var backdrop = safeImageUrl(movie.backdropPath) || cover;
  return {
    id: owned.link, type: "url", mediaType: "movie", link: owned.link,
    title: title, coverUrl: cover || undefined, posterPath: poster || undefined,
    backdropPath: backdrop || undefined, detailPoster: (params.image_style === "poster" ? poster : backdrop) || undefined,
    releaseDate: safeText(movie.releaseDate || movie.sourceDate),
    duration: Number(movie.duration) > 0 ? Number(movie.duration) : undefined,
    durationText: safeText(movie.durationText) || undefined,
    description: [code ? "番号: " + code : "", Array.isArray(movie.actors) ? movie.actors.join(" / ") : ""].filter(Boolean).join(" | "),
    headers: { Referer: NF_SITE + "/" }
  };
}

function mapMovies(items, params) {
  var seen = {};
  return (Array.isArray(items) ? items : []).map(function (item) { return mapListMovie(item, params); }).filter(function (item) {
    if (!item || seen[item.id]) return false;
    seen[item.id] = true;
    return true;
  });
}

function pageNumber(params) {
  var value = params.page == null || params.page === "" ? 1 : Number(params.page);
  if (!Number.isInteger(value) || value < 1 || value > 1000) throw new Error("页码必须为 1 到 1000 的整数");
  return value;
}

async function nfAllVideos(kind, value, params) {
  var page = pageNumber(params);
  var videos = await nfGetAllPage(kind, value, page, Date.now() + 30000);
  return mapMovies(videos, params);
}

async function loadSectionList(params, section) {
  params = await ensureGlobalParams(params);
  var genreChip = nfCategoryName(params.genreId);
  var peopleChip = nfCategoryName(params.peopleId);
  if (genreChip) return nfAllVideos("genre", genreChip, params);
  if (peopleChip) return nfAllVideos("actress", peopleChip, params);
  if (!Object.prototype.hasOwnProperty.call(NF_SECTIONS, section)) throw new Error("不支持的分类");
  var config = NF_SECTIONS[section];
  var page = pageNumber(params);
  var state = nfReadNext(await nfGetHtml(NF_SITE + config.path, { page: page }), config.path);
  return mapMovies(nfListItems(state[config.state], page), params);
}

async function loadList(params) {
  params = params || {};
  return loadSectionList(params, params.section || "censored");
}
async function loadRecommended(params) { return loadSectionList(params || {}, "trending"); }
async function loadCensored(params) { return loadSectionList(params || {}, "censored"); }
async function loadUncensored(params) { return loadSectionList(params || {}, "uncensored"); }
async function loadChinese(params) { return loadSectionList(params || {}, "chinese"); }
async function loadGenre(params) {
  params = await ensureGlobalParams(params || {});
  var value = nfCategoryName(params.genreId) || firstEnumValue(nfGenreOptions());
  if (!value) throw new Error("请选择分类");
  return nfAllVideos("genre", value, params);
}

async function searchMovies(params) {
  params = await ensureGlobalParams(params);
  var keyword = safeText(params.keyword);
  if (!keyword) return [];
  if (keyword.length > 120) throw new Error("搜索关键词过长");
  var page = pageNumber(params);
  var state = nfReadNext(await nfGetHtml(NF_SITE + "/search", { type: "title", keyword: keyword, page: page }), "/search");
  return mapMovies(nfListItems(state.search, page), params);
}

function validMagnetHash(magnet) {
  var text = String(magnet || "");
  if (!/^magnet:\?/i.test(text) || /[\s\x00-\x1f\x7f]/.test(text) || text.length > 8192) return "";
  var match = text.match(/[?&]xt=urn:btih:([0-9a-fA-F]{40})(?:&|$)/i);
  return match ? match[1].toLowerCase() : "";
}

function normalizeMovieCode(value) {
  var text = safeText(value).toUpperCase();
  var match = text.match(/^FC2[\s_-]*(?:PPV[\s_-]*)?(\d{5,9})$/);
  if (match) return "FC2-PPV-" + match[1];
  match = text.match(/^([A-Z]{2,12})[\s_-]*(\d{2,8})$/);
  return match ? match[1] + "-" + match[2] : "";
}

async function buildMagnetItems(items, movie) {
  var movieCode = normalizeMovieCode(movie.code);
  var collected = [];
  var seen = {};
  for (var i = 0; i < (items || []).length; i++) {
    var entry = items[i] || {};
    var hash = validMagnetHash(entry.magnet);
    if (!hash || hash !== safeText(entry.hash).toLowerCase() || seen[hash]) continue;
    if (!movieCode || normalizeMovieCode(entry.code) !== movieCode) continue;
    seen[hash] = true;
    collected.push({ entry: entry, hash: hash });
  }
  // 只保留当前番号磁力，按影片大小从大到小排序（未知大小排后）
  collected.sort(function (a, b) { return (Number(b.entry.size_bytes) || 0) - (Number(a.entry.size_bytes) || 0); });
  var output = [];
  for (var j = 0; j < collected.length; j++) {
    var item = collected[j].entry;
    var link = NF_MAGNET_PREFIX + collected[j].hash;
    var tags = Array.isArray(item.tags) ? item.tags.map(safeText).filter(Boolean) : [];
    var size = safeText(item.size);
    await writeStoreAsync("netflav.magnet.v1." + collected[j].hash, JSON.stringify(Object.assign({}, item, { videoId: movie.videoId, savedAt: Date.now() })));
    output.push({
      id: link, type: "url", mediaType: "movie", link: link,
      title: [movie.code, size, tags.join(" · "), "转存光鸭"].filter(Boolean).join(" | "),
      description: ["来源: 18mag（当前番号精确匹配，按大小排序）", safeText(item.name), "点击此条目提交光鸭离线任务；不会自动转存"].filter(Boolean).join("\n"),
      coverUrl: safeImageUrl(movie.coverUrl) || undefined, backdropPath: safeImageUrl(movie.backdropPath || movie.coverUrl) || undefined
    });
  }
  return output;
}

async function loadDetail(link, params) {
  var owned = parseOwnedLink(link);
  if (!owned) return null;
  params = await ensureGlobalParams(params);
  if (owned.kind === "magnet") return handleMagnetSave(owned, params);
  var deadline = Date.now() + 40000;
  var movie = nfNormalizeMovie(await nfGetRawDetail(owned.videoId, deadline));
  if (!movie || movie.videoId !== owned.videoId) throw new Error("详情身份与请求不一致");
  var result = mapListMovie(movie, params);
  var code = normalizeMovieCode(movie.code);
  if (code) result.id = code;
  var stills = imageUrls([].concat(Array.isArray(movie.backdropPaths) ? movie.backdropPaths : [], movie.previewImagesUrl ? [movie.previewImagesUrl] : []));
  if (stills.length) result.backdropPaths = stills;
  var trailer = movie.previewVideo && /\.(?:mp4|m3u8)(?:[?#]|$)/i.test(movie.previewVideo) && nfPublicUrl(movie.previewVideo) ? movie.previewVideo : "";
  if (trailer) result.trailers = [{ coverUrl: result.coverUrl || undefined, url: trailer }];
  result.genreItems = (Array.isArray(movie.tags) ? movie.tags : []).slice(0, 12).map(function (tag) {
    var name = nfCategoryName(tag);
    return name ? { id: name, title: name } : null;
  }).filter(Boolean);
  result.peoples = (Array.isArray(movie.actors) ? movie.actors : []).slice(0, 12).map(function (name) {
    name = safeText(name).slice(0, 80);
    return name ? { id: name, title: name } : null;
  }).filter(Boolean);
  var meta = [];
  if (safeText(movie.producer)) meta.push("出品: " + safeText(movie.producer));
  if (safeText(movie.studio)) meta.push("片商: " + safeText(movie.studio));
  if (safeText(movie.director)) meta.push("导演: " + safeText(movie.director));
  if (safeText(movie.series)) meta.push("系列: " + safeText(movie.series));
  if (safeText(movie.label)) meta.push("厂牌: " + safeText(movie.label));
  if (safeText(movie.releaseDate)) meta.push("发行: " + safeText(movie.releaseDate));
  if (Number(movie.views) > 0) meta.push("浏览: " + movie.views);
  result.description = [result.description, meta.filter(Boolean).join(" | "), safeText(movie.description), "播放线路在起播时解析；依赖线路提供方与播放器网络"].filter(Boolean).join("\n\n");
  var related = mapMovies(movie.relatedItems, params);
  if (params.magnet_enabled !== "0") {
    try {
      var magnets = await nfFindMagnets(movie, deadline);
      related = (await buildMagnetItems(magnets && magnets.items, movie)).concat(related);
      if (magnets && magnets.warning) result.description += "\n\n磁力: " + safeText(magnets.warning);
    } catch (error) {
      result.description += "\n\n18mag 磁力暂不可用，不影响影片详情";
    }
  }
  result.relatedItems = related;
  return result;
}

async function loadResource(params) {
  params = params || {};
  var raw = params.link != null ? params.link : params.id;
  var owned = parseOwnedLink(raw);
  if (!owned || owned.kind !== "video") return [];
  try {
    var detail = await nfGetRawDetail(owned.videoId, Date.now() + 15000, true);
    return nfPlaybackResources(detail, owned.videoId);
  } catch (error) {
    console.log("[netflav/loadResource] 暂无可用公开线路");
    return [];
  }
}

/* ========================= 光鸭转存入口 ========================= */
async function getGuangyaConfig(params) {
  params = await ensureGlobalParams(params);
  return { guangya_token: params.guangya_token, guangya_parent_id: params.guangya_parent_id, magnet_filter: "1", magnet_video_only: "1", magnet_min_video_mb: params.magnet_min_video_mb, magnet_block_patterns: params.magnet_block_patterns };
}
function decodeMagnetSegment(value) {
  try { return decodeURIComponent(String(value || "").replace(/\+/g, " ")); } catch (e) { return String(value || ""); }
}

async function handleMagnetSave(owned, params) {
  var entry;
  try {
    var raw = await readStorageRawAsync("netflav.magnet.v1." + owned.hash);
    entry = typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (e) {}
  var result = { id: owned.link, type: "url", mediaType: "movie", link: owned.link, title: "光鸭转存", description: "" };
  if (!entry || validMagnetHash(entry.magnet) !== owned.hash || Date.now() - Number(entry.savedAt || 0) > 86400000) {
    result.title = "磁力缓存失效";
    result.description = "请返回影片详情重新加载磁力后再试";
    return result;
  }
  var submittedKey = "netflav.transfer.v1." + owned.hash;
  var prior = await readStorageRawAsync(submittedKey);
  if (prior) {
    result.title = "光鸭任务已提交";
    result.description = "该磁力已提交；请在光鸭检查实际下载状态。清理本模块缓存后可重新提交。";
    return result;
  }
  var cfg = await getGuangyaConfig(params);
  if (!cfg.guangya_token) {
    result.title = "未配置光鸭";
    result.description = "请在全局参数填写光鸭 refresh_token；它仅用于光鸭账户请求";
    return result;
  }
  if (!NF_TRANSFERS[owned.hash]) {
    NF_TRANSFERS[owned.hash] = (async function () {
      var saved = await saveMagnetToGuangya(entry.magnet, cfg);
      await writeStoreAsync(submittedKey, JSON.stringify({ submittedAt: Date.now(), keptCount: saved.keptCount, blockedCount: saved.blockedCount }));
      return saved;
    })();
  }
  try {
    var saved = await NF_TRANSFERS[owned.hash];
    result.title = "光鸭转存已提交";
    result.description = "任务已提交，不代表下载完成。请在光鸭查看状态。\n保留: " + saved.keptCount + " 个文件；过滤: " + saved.blockedCount + " 个文件";
  } catch (error) {
    result.title = "光鸭转存失败";
    result.description = safeText(error && error.message) || "请检查光鸭账户与网络";
  } finally {
    delete NF_TRANSFERS[owned.hash];
  }
  return result;
}

function nfGenreOptions() {
  return [
    {"title":"觸手","value":"觸手"},
    {"title":"巨尻","value":"巨尻"},
    {"title":"性奴","value":"性奴"},
    {"title":"性騷擾","value":"性騷擾"},
    {"title":"處女","value":"處女"},
    {"title":"戀乳癖","value":"戀乳癖"},
    {"title":"野外・露出","value":"野外・露出"},
    {"title":"爛醉如泥的","value":"爛醉如泥的"},
    {"title":"折磨","value":"折磨"},
    {"title":"嘔吐","value":"嘔吐"},
    {"title":"蠻橫嬌羞","value":"蠻橫嬌羞"},
    {"title":"處男","value":"處男"},
    {"title":"正太控","value":"正太控"},
    {"title":"出軌","value":"出軌"},
    {"title":"瘙癢","value":"瘙癢"},
    {"title":"運動","value":"運動"},
    {"title":"女同接吻","value":"女同接吻"},
    {"title":"性感的","value":"性感的"},
    {"title":"美容院","value":"美容院"},
    {"title":"殘忍畫面","value":"殘忍畫面"},
    {"title":"妄想","value":"妄想"},
    {"title":"惡作劇","value":"惡作劇"},
    {"title":"學校作品","value":"學校作品"},
    {"title":"粗暴","value":"粗暴"},
    {"title":"通姦","value":"通姦"},
    {"title":"姐妹","value":"姐妹"},
    {"title":"雙性人","value":"雙性人"},
    {"title":"跳舞","value":"跳舞"},
    {"title":"倒追","value":"倒追"},
    {"title":"其他","value":"其他"},
    {"title":"戀腿癖","value":"戀腿癖"},
    {"title":"偷窥","value":"偷窥"},
    {"title":"花癡","value":"花癡"},
    {"title":"男同性恋","value":"男同性恋"},
    {"title":"情侶","value":"情侶"},
    {"title":"亂倫","value":"亂倫"},
    {"title":"其他戀物癖","value":"其他戀物癖"},
    {"title":"偶像藝人","value":"偶像藝人"},
    {"title":"獵豔","value":"獵豔"},
    {"title":"女同性戀","value":"女同性戀"},
    {"title":"企畫","value":"企畫"},
    {"title":"10枚組","value":"10枚組"},
    {"title":"科幻","value":"科幻"},
    {"title":"女優ベスト・総集編","value":"女優ベスト・総集編"},
    {"title":"温泉","value":"温泉"},
    {"title":"M男","value":"M男"},
    {"title":"原作コラボ","value":"原作コラボ"},
    {"title":"16時間以上作品","value":"16時間以上作品"},
    {"title":"デカチン・巨根","value":"デカチン・巨根"},
    {"title":"ファン感謝・訪問","value":"ファン感謝・訪問"},
    {"title":"動画","value":"動画"},
    {"title":"ハーレム","value":"ハーレム"},
    {"title":"日焼け","value":"日焼け"},
    {"title":"早漏","value":"早漏"},
    {"title":"キス・接吻","value":"キス・接吻"},
    {"title":"汗だく","value":"汗だく"},
    {"title":"スマホ専用縦動画","value":"スマホ専用縦動画"},
    {"title":"Vシネマ","value":"Vシネマ"},
    {"title":"Don Cipote's choice","value":"Don Cipote's choice"},
    {"title":"アニメ","value":"アニメ"},
    {"title":"アクション","value":"アクション"},
    {"title":"イメージビデオ（男性）","value":"イメージビデオ（男性）"},
    {"title":"孕ませ","value":"孕ませ"},
    {"title":"ボーイズラブ","value":"ボーイズラブ"},
    {"title":"ビッチ","value":"ビッチ"},
    {"title":"特典あり（AVベースボール）","value":"特典あり（AVベースボール）"},
    {"title":"コミック雑誌","value":"コミック雑誌"},
    {"title":"時間停止","value":"時間停止"},
    {"title":"黑幫成員","value":"黑幫成員"},
    {"title":"童年朋友","value":"童年朋友"},
    {"title":"公主","value":"公主"},
    {"title":"亞洲女演員","value":"亞洲女演員"},
    {"title":"伴侶","value":"伴侶"},
    {"title":"講師","value":"講師"},
    {"title":"婆婆","value":"婆婆"},
    {"title":"女檢察官","value":"女檢察官"},
    {"title":"明星臉","value":"明星臉"},
    {"title":"女主人、女老板","value":"女主人、女老板"},
    {"title":"模特兒","value":"模特兒"},
    {"title":"秘書","value":"秘書"},
    {"title":"美少女","value":"美少女"},
    {"title":"新娘、年輕妻子","value":"新娘、年輕妻子"},
    {"title":"姐姐","value":"姐姐"},
    {"title":"格鬥家","value":"格鬥家"},
    {"title":"車掌小姐","value":"車掌小姐"},
    {"title":"寡婦","value":"寡婦"},
    {"title":"千金小姐","value":"千金小姐"},
    {"title":"白人","value":"白人"},
    {"title":"已婚婦女","value":"已婚婦女"},
    {"title":"女醫生","value":"女醫生"},
    {"title":"各種職業","value":"各種職業"},
    {"title":"妓女","value":"妓女"},
    {"title":"賽車女郎","value":"賽車女郎"},
    {"title":"女大學生","value":"女大學生"},
    {"title":"展場女孩","value":"展場女孩"},
    {"title":"女教師","value":"女教師"},
    {"title":"母親","value":"母親"},
    {"title":"家教","value":"家教"},
    {"title":"护士","value":"护士"},
    {"title":"蕩婦","value":"蕩婦"},
    {"title":"黑人演員","value":"黑人演員"},
    {"title":"女生","value":"女生"},
    {"title":"女主播","value":"女主播"},
    {"title":"高中女生","value":"高中女生"},
    {"title":"服務生","value":"服務生"},
    {"title":"魔法少女","value":"魔法少女"},
    {"title":"學生（其他）","value":"學生（其他）"},
    {"title":"動畫人物","value":"動畫人物"},
    {"title":"遊戲的真人版","value":"遊戲的真人版"},
    {"title":"超級女英雄","value":"超級女英雄"},
    {"title":"女戰士","value":"女戰士"},
    {"title":"及膝襪","value":"及膝襪"},
    {"title":"娃娃","value":"娃娃"},
    {"title":"女忍者","value":"女忍者"},
    {"title":"女裝人妖","value":"女裝人妖"},
    {"title":"猥褻穿著","value":"猥褻穿著"},
    {"title":"兔女郎","value":"兔女郎"},
    {"title":"貓耳女","value":"貓耳女"},
    {"title":"女祭司","value":"女祭司"},
    {"title":"泡泡襪","value":"泡泡襪"},
    {"title":"制服","value":"制服"},
    {"title":"緊身衣","value":"緊身衣"},
    {"title":"裸體圍裙","value":"裸體圍裙"},
    {"title":"迷你裙警察","value":"迷你裙警察"},
    {"title":"空中小姐","value":"空中小姐"},
    {"title":"連褲襪","value":"連褲襪"},
    {"title":"身體意識","value":"身體意識"},
    {"title":"OL","value":"OL"},
    {"title":"和服・喪服","value":"和服・喪服"},
    {"title":"體育服","value":"體育服"},
    {"title":"內衣","value":"內衣"},
    {"title":"水手服","value":"水手服"},
    {"title":"學校泳裝","value":"學校泳裝"},
    {"title":"旗袍","value":"旗袍"},
    {"title":"女傭","value":"女傭"},
    {"title":"迷你裙","value":"迷你裙"},
    {"title":"校服","value":"校服"},
    {"title":"泳裝","value":"泳裝"},
    {"title":"眼鏡","value":"眼鏡"},
    {"title":"角色扮演","value":"角色扮演"},
    {"title":"哥德蘿莉","value":"哥德蘿莉"},
    {"title":"和服・浴衣","value":"和服・浴衣"},
    {"title":"超乳","value":"超乳"},
    {"title":"肌肉","value":"肌肉"},
    {"title":"乳房","value":"乳房"},
    {"title":"嬌小的","value":"嬌小的"},
    {"title":"屁股","value":"屁股"},
    {"title":"高","value":"高"},
    {"title":"變性者","value":"變性者"},
    {"title":"無毛","value":"無毛"},
    {"title":"胖女人","value":"胖女人"},
    {"title":"苗條","value":"苗條"},
    {"title":"孕婦","value":"孕婦"},
    {"title":"成熟的女人","value":"成熟的女人"},
    {"title":"蘿莉塔","value":"蘿莉塔"},
    {"title":"貧乳・微乳","value":"貧乳・微乳"},
    {"title":"巨乳","value":"巨乳"},
    {"title":"顏面騎乘","value":"顏面騎乘"},
    {"title":"食糞","value":"食糞"},
    {"title":"足交","value":"足交"},
    {"title":"母乳","value":"母乳"},
    {"title":"手指插入","value":"手指插入"},
    {"title":"按摩","value":"按摩"},
    {"title":"女上位","value":"女上位"},
    {"title":"舔陰","value":"舔陰"},
    {"title":"拳交","value":"拳交"},
    {"title":"深喉","value":"深喉"},
    {"title":"69","value":"69"},
    {"title":"淫語","value":"淫語"},
    {"title":"潮吹","value":"潮吹"},
    {"title":"乳交","value":"乳交"},
    {"title":"排便","value":"排便"},
    {"title":"飲尿","value":"飲尿"},
    {"title":"口交","value":"口交"},
    {"title":"濫交","value":"濫交"},
    {"title":"放尿","value":"放尿"},
    {"title":"打手槍","value":"打手槍"},
    {"title":"吞精","value":"吞精"},
    {"title":"肛交","value":"肛交"},
    {"title":"顏射","value":"顏射"},
    {"title":"自慰","value":"自慰"},
    {"title":"中出","value":"中出"},
    {"title":"肛内中出","value":"肛内中出"},
    {"title":"立即口交","value":"立即口交"},
    {"title":"女優按摩棒","value":"女優按摩棒"},
    {"title":"子宮頸","value":"子宮頸"},
    {"title":"催眠","value":"催眠"},
    {"title":"乳液","value":"乳液"},
    {"title":"羞恥","value":"羞恥"},
    {"title":"凌辱","value":"凌辱"},
    {"title":"拘束","value":"拘束"},
    {"title":"輪姦","value":"輪姦"},
    {"title":"插入異物","value":"插入異物"},
    {"title":"鴨嘴","value":"鴨嘴"},
    {"title":"灌腸","value":"灌腸"},
    {"title":"監禁","value":"監禁"},
    {"title":"紧缚","value":"紧缚"},
    {"title":"強姦","value":"強姦"},
    {"title":"藥物","value":"藥物"},
    {"title":"汽車性愛","value":"汽車性愛"},
    {"title":"SM","value":"SM"},
    {"title":"糞便","value":"糞便"},
    {"title":"玩具","value":"玩具"},
    {"title":"跳蛋","value":"跳蛋"},
    {"title":"緊縛","value":"緊縛"},
    {"title":"按摩棒","value":"按摩棒"},
    {"title":"多P","value":"多P"},
    {"title":"性愛","value":"性愛"},
    {"title":"假陽具","value":"假陽具"},
    {"title":"逆強姦","value":"逆強姦"},
    {"title":"合作作品","value":"合作作品"},
    {"title":"恐怖","value":"恐怖"},
    {"title":"給女性觀眾","value":"給女性觀眾"},
    {"title":"教學","value":"教學"},
    {"title":"DMM專屬","value":"DMM專屬"},
    {"title":"R-15","value":"R-15"},
    {"title":"R-18","value":"R-18"},
    {"title":"戲劇","value":"戲劇"},
    {"title":"3D","value":"3D"},
    {"title":"特效","value":"特效"},
    {"title":"故事集","value":"故事集"},
    {"title":"限時降價","value":"限時降價"},
    {"title":"複刻版","value":"複刻版"},
    {"title":"戀愛","value":"戀愛"},
    {"title":"高畫質","value":"高畫質"},
    {"title":"主觀視角","value":"主觀視角"},
    {"title":"介紹影片","value":"介紹影片"},
    {"title":"4小時以上作品","value":"4小時以上作品"},
    {"title":"薄馬賽克","value":"薄馬賽克"},
    {"title":"經典","value":"經典"},
    {"title":"首次亮相","value":"首次亮相"},
    {"title":"數位馬賽克","value":"數位馬賽克"},
    {"title":"投稿","value":"投稿"},
    {"title":"纪录片","value":"纪录片"},
    {"title":"國外進口","value":"國外進口"},
    {"title":"第一人稱攝影","value":"第一人稱攝影"},
    {"title":"業餘","value":"業餘"},
    {"title":"局部特寫","value":"局部特寫"},
    {"title":"獨立製作","value":"獨立製作"},
    {"title":"DMM獨家","value":"DMM獨家"},
    {"title":"單體作品","value":"單體作品"},
    {"title":"合集","value":"合集"},
    {"title":"高清","value":"高清"},
    {"title":"字幕","value":"字幕"},
    {"title":"天堂TV","value":"天堂TV"},
    {"title":"DVD多士爐","value":"DVD多士爐"},
    {"title":"AV OPEN 2014 スーパーヘビー","value":"AV OPEN 2014 スーパーヘビー"},
    {"title":"AV OPEN 2014 ヘビー級","value":"AV OPEN 2014 ヘビー級"},
    {"title":"AV OPEN 2014 ミドル級","value":"AV OPEN 2014 ミドル級"},
    {"title":"AV OPEN 2015 熟女部門","value":"AV OPEN 2015 熟女部門"},
    {"title":"AV OPEN 2015 企画部門","value":"AV OPEN 2015 企画部門"},
    {"title":"AV OPEN 2015 乙女部門","value":"AV OPEN 2015 乙女部門"},
    {"title":"AV OPEN 2015 素人部門","value":"AV OPEN 2015 素人部門"},
    {"title":"AV OPEN 2015 女優部門","value":"AV OPEN 2015 女優部門"},
    {"title":"AVOPEN2016人妻・熟女部門","value":"AVOPEN2016人妻・熟女部門"},
    {"title":"AVOPEN2016企画部門","value":"AVOPEN2016企画部門"},
    {"title":"AVOPEN2016ハード部門","value":"AVOPEN2016ハード部門"},
    {"title":"AVOPEN2016マニア・フェチ部門","value":"AVOPEN2016マニア・フェチ部門"},
    {"title":"AVOPEN2016乙女部門","value":"AVOPEN2016乙女部門"},
    {"title":"AVOPEN2016女優部門","value":"AVOPEN2016女優部門"},
    {"title":"AVOPEN2016ドラマ・ドキュメンタリー部門","value":"AVOPEN2016ドラマ・ドキュメンタリー部門"},
    {"title":"AVOPEN2016素人部門","value":"AVOPEN2016素人部門"},
    {"title":"AVOPEN2016バラエティ部門","value":"AVOPEN2016バラエティ部門"},
    {"title":"VR専用","value":"VR専用"}
  ];
}
/* ========================= 站点直连 / 结构化数据 ========================= */
var NF_MAG_SITE = "https://18mag.net";
var NF_MAX_HTML_BYTES = 2000000;
var NF_SITE_CACHE = {};
var NF_SECTIONS = {
  censored: { path: "/censored", state: "censored" },
  uncensored: { path: "/uncensored", state: "uncensored" },
  chinese: { path: "/chinese-sub", state: "chinese" },
  trending: { path: "/trending", state: "trending" }
};

function nfPlainObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function nfText(value, limit) {
  return typeof value === "string" ? safeText(value).slice(0, limit || 2000) : "";
}

function nfStringList(value) {
  return Array.isArray(value) ? value.slice(0, 40).map(function (item) { return nfText(item, 120); }).filter(Boolean) : [];
}

function nfPublicUrl(value) {
  if (typeof value !== "string" || value.length > 4096 || /[\s\\\x00-\x1f\x7f]/.test(value)) return "";
  var match = value.match(/^https?:\/\/([A-Za-z0-9.-]+)(?::(80|443))?(?:[/?#]|$)/);
  if (!match) return "";
  var host = match[1].toLowerCase();
  if (host.indexOf(".") < 0 || /(?:^|\.)(?:localhost|local)$/.test(host) || /\.\.|^\.|\.$/.test(host)) return "";
  if (/^[0-9.]+$/.test(host)) {
    var parts = host.split(".").map(Number);
    if (parts.length !== 4 || parts.some(function (n) { return n > 255; })) return "";
    if (parts[0] === 0 || parts[0] === 10 || parts[0] === 127 || parts[0] >= 224 ||
        (parts[0] === 169 && parts[1] === 254) || (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
        (parts[0] === 192 && parts[1] === 168) || (parts[0] === 100 && parts[1] >= 64 && parts[1] <= 127) ||
        (parts[0] === 198 && (parts[1] === 18 || parts[1] === 19))) return "";
  }
  return value;
}

function nfImage(value) {
  if (typeof value !== "string") return "";
  if (value.charAt(0) === "/" && value.charAt(1) !== "/") value = NF_SITE + value;
  return nfPublicUrl(value);
}

function nfCheckHtmlSize(html) {
  if (html.length > NF_MAX_HTML_BYTES) throw new Error("页面超过大小限制");
  var bytes = 0;
  for (var i = 0; i < html.length; i++) {
    var code = html.charCodeAt(i);
    if (code < 0x80) bytes++;
    else if (code < 0x800) bytes += 2;
    else if (code >= 0xd800 && code <= 0xdbff && i + 1 < html.length && html.charCodeAt(i + 1) >= 0xdc00 && html.charCodeAt(i + 1) <= 0xdfff) { bytes += 4; i++; }
    else bytes += 3;
    if (bytes > NF_MAX_HTML_BYTES) throw new Error("页面超过大小限制");
  }
}

async function nfGetHtml(url, query, deadline) {
  if (!/^https:\/\/netflav\.com\/(?:censored|uncensored|chinese-sub|trending|all|search|video)$/.test(url) &&
      !/^https:\/\/18mag\.net\/(?:search|![A-Za-z0-9_-]{1,64})$/.test(url)) throw new Error("拒绝访问不支持的站点地址");
  var remaining = (deadline || Date.now() + 15000) - Date.now();
  if (remaining < 1000) throw new Error("取数超时，请稍后重试");
  var label = url.indexOf(NF_MAG_SITE + "/") === 0 ? "18mag" : "Netflav";
  var origin = label === "18mag" ? NF_MAG_SITE : NF_SITE;
  var response;
  try {
    response = await Widget.http.get(url, {
      params: query || {},
      headers: { Accept: "text/html,application/xhtml+xml", Referer: origin + "/" },
      timeout: Math.min(15000, remaining),
      allow_redirects: false,
      validate_status: false
    });
  } catch (error) {
    throw new Error(label + " 请求失败，请确认手机代理覆盖 Rex 的网络请求");
  }
  var status = Number(response && (response.status || response.statusCode || response.status_code)) || 0;
  if (status && status !== 200) throw new Error(label + " 返回 HTTP " + status + (status === 403 ? "，站点要求验证或拒绝访问" : ""));
  var html = response && (response.data !== undefined ? response.data : response.body);
  if (typeof html !== "string" || !html.trim()) throw new Error(label + " 返回空页面或非文本内容");
  nfCheckHtmlSize(html);
  if (/cf-chl-|challenge-platform|<title[^>]*>\s*Just a moment/i.test(html.slice(0, 200000))) throw new Error(label + " 要求浏览器验证，当前未取得数据");
  return html;
}

function nfDocument(html) {
  if (typeof Widget === "undefined" || !Widget.html || typeof Widget.html.load !== "function") throw new Error("当前 Rex 缺少 HTML 解析能力，请更新客户端");
  return Widget.html.load(html);
}

function nfReadNext(html, expectedPage) {
  var payloads = [];
  if (typeof Widget !== "undefined" && Widget.html && typeof Widget.html.load === "function") {
    var $ = nfDocument(html);
    $("script#__NEXT_DATA__").each(function (_, element) { payloads.push($(element).html()); });
  } else {
    // JSON 脚本的只读兜底；不执行页面脚本，也不对 JSON 内容做 HTML 实体解码。
    var script = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
    var match;
    while ((match = script.exec(html)) !== null) {
      if (/(?:^|\s)id\s*=\s*(?:"__NEXT_DATA__"|'__NEXT_DATA__'|__NEXT_DATA__(?=\s|$))/i.test(match[1])) payloads.push(match[2]);
    }
  }
  if (payloads.length !== 1) throw new Error("页面缺少唯一的 Next 结构化数据");
  var data;
  try { data = JSON.parse(payloads[0]); } catch (e) { throw new Error("页面结构化 JSON 无法解析"); }
  if (!nfPlainObject(data) || data.page !== expectedPage) throw new Error("上游返回了不匹配的页面");
  var state = data.props && data.props.initialState;
  if (!nfPlainObject(state)) throw new Error("上游数据结构发生变化");
  return state;
}

function nfRawValue(raw, key) {
  if (Object.prototype.hasOwnProperty.call(raw, key)) return raw[key];
  return nfPlainObject(raw.video) ? raw.video[key] : undefined;
}

function nfNormalizeMovie(raw, withRelated) {
  if (!nfPlainObject(raw)) return null;
  var get = function (key) { return nfRawValue(raw, key); };
  var identity = get("videoId");
  if (typeof identity !== "string" || !/^[A-Za-z0-9_-]{6,32}$/.test(identity)) return null;
  var cover = nfImage(get("preview")) || nfImage(get("preview_hp"));
  var sourceDuration = get("duration");
  var durationText = typeof sourceDuration === "number" ? String(sourceDuration) : nfText(sourceDuration, 40);
  var duration = 0;
  if (/^\d+(?:\.\d+)?$/.test(durationText)) duration = Math.floor(Number(durationText));
  else if (/^\d{1,2}:\d{2}(?::\d{2})?$/.test(durationText)) durationText.split(":").forEach(function (part) { duration = duration * 60 + Number(part); });
  var pictures = Array.isArray(get("previewImages")) ? get("previewImages").slice(0, 30).map(nfImage).filter(Boolean) : [];
  var result = {
    videoId: identity, code: nfText(get("code") || get("uCode"), 80),
    title_zh: nfText(get("title_zh")), title_en: nfText(get("title_en")), title: nfText(get("title")),
    description: nfText(get("description"), 6000), coverUrl: cover, posterPath: cover, backdropPath: cover,
    backdropPaths: imageUrls(pictures), actors: nfStringList(get("actors")), tags: nfStringList(get("tags")),
    releaseDate: nfText(get("sourceDate") || get("videoDate"), 40), duration: duration, durationText: durationText,
    producer: nfText(get("producer"), 120), studio: nfText(get("studio"), 120), director: nfText(get("director"), 120),
    series: nfText(get("series"), 120), label: nfText(get("label"), 120),
    views: Number(get("views")) > 0 ? Number(get("views")) : 0,
    previewVideo: typeof get("previewVideo") === "string" ? get("previewVideo") : "",
    previewImagesUrl: typeof get("previewImagesUrl") === "string" ? get("previewImagesUrl") : "",
    relatedItems: []
  };
  if (withRelated !== false) {
    var seen = {};
    seen[identity] = true;
    ["related1", "related2"].forEach(function (key) {
      var related = Array.isArray(get(key)) ? get(key).slice(0, 30) : [];
      related.forEach(function (entry) {
        var item = nfNormalizeMovie(entry, false);
        if (item && !seen[item.videoId] && result.relatedItems.length < 30) { seen[item.videoId] = true; result.relatedItems.push(item); }
      });
    });
  }
  return result;
}

function nfListItems(data, page) {
  if (!nfPlainObject(data) || data.isLoading || data.isError || !Array.isArray(data.docs)) throw new Error("上游没有返回完成加载的列表");
  var returned = data.page == null ? 1 : Number(data.page);
  if (returned !== page) throw new Error("上游没有返回请求的页码，已停止重复加载");
  return data.docs.slice(0, 100).map(function (entry) { return nfNormalizeMovie(entry, false); }).filter(Boolean);
}

function nfCacheRead(key) {
  var entry = NF_SITE_CACHE[key];
  if (!entry || entry.expires <= Date.now()) { delete NF_SITE_CACHE[key]; return null; }
  return entry.value;
}

function nfCacheWrite(key, value, ttl) {
  var keys = Object.keys(NF_SITE_CACHE);
  if (keys.length >= 16 && !NF_SITE_CACHE[key]) delete NF_SITE_CACHE[keys[0]];
  NF_SITE_CACHE[key] = { expires: Date.now() + ttl, value: value };
}

async function nfGetRawDetail(identity, deadline, fresh) {
  if (!/^[A-Za-z0-9_-]{6,32}$/.test(identity)) throw new Error("无效的 Netflav ID");
  var key = "detail:" + identity;
  var cached = !fresh && nfCacheRead(key);
  if (cached) return cached;
  var state = nfReadNext(await nfGetHtml(NF_SITE + "/video", { id: identity }, deadline), "/video");
  var video = state.video;
  if (!nfPlainObject(video) || video.isLoading || video.isError || !nfPlainObject(video.data)) throw new Error("该条目暂无可用详情");
  if (video.data.videoId !== identity) throw new Error("详情身份与请求不一致");
  nfCacheWrite(key, video.data, 60000);
  return video.data;
}

function nfCodeMatches(value, code) {
  code = normalizeMovieCode(code);
  if (!code) return false;
  var pattern = /(?:^|[^A-Za-z0-9])((?:FC2[\s_-]*(?:PPV[\s_-]*)?\d{5,9}|[A-Za-z]{2,12}[\s_-]*\d{2,8}))(?=$|[^A-Za-z0-9])/gi;
  var match;
  while ((match = pattern.exec(String(value || ""))) !== null) if (normalizeMovieCode(match[1]) === code) return true;
  return false;
}

function nfContainsOtherCode(value, code) {
  code = normalizeMovieCode(code);
  if (!code) return false;
  var pattern = /(?:^|[^A-Za-z0-9])((?:FC2[\s_-]*(?:PPV[\s_-]*)?\d{5,9}|[A-Za-z]{2,12}[\s_-]*\d{2,8}))(?=$|[^A-Za-z0-9])/gi;
  var match;
  while ((match = pattern.exec(String(value || ""))) !== null) {
    var normalized = normalizeMovieCode(match[1]);
    if (normalized && normalized !== code) return true;
  }
  return false;
}

function nfMagDetailUrl(href) {
  if (typeof href !== "string") return "";
  var match = href.match(/^(?:https:\/\/18mag\.net)?(\/![A-Za-z0-9_-]{1,64})$/);
  return match ? NF_MAG_SITE + match[1] : "";
}

function nfQueryValue(uri, name) {
  var query = String(uri || "").split("?").slice(1).join("?").split("&");
  for (var i = 0; i < query.length; i++) {
    var equals = query[i].indexOf("=");
    if (equals >= 0 && query[i].slice(0, equals) === name) return decodeMagnetSegment(query[i].slice(equals + 1));
  }
  return "";
}

function nfExtractMagnets(html, code) {
  var $ = nfDocument(html);
  var title = "";
  $("h1, h2.magnet-title").each(function (_, node) {
    if (title) return;
    var text = safeText($(node).text());
    // 只接受确实属于当前番号的页面：标题需含当前番号，且不含其他番号（拦截合集/相似作品页）
    if (nfCodeMatches(text, code) && !nfContainsOtherCode(text, code)) title = text.slice(0, 200);
  });
  if (!title) return [];
  var sizeText = "";
  $("dt").each(function (_, node) {
    if (!sizeText && /大小|size/i.test($(node).text())) sizeText = safeText($(node).next("dd").text()).slice(0, 40);
  });
  var candidates = [];
  $("a[href], [data-clipboard-text], input#input-magnet").each(function (_, node) {
    var element = $(node);
    [element.attr("href"), element.attr("data-clipboard-text"), element.attr("value")].forEach(function (value) { if (typeof value === "string" && /^magnet:\?/i.test(value)) candidates.push(value); });
  });
  var seen = {};
  var output = [];
  candidates.forEach(function (magnet) {
    var hash = validMagnetHash(magnet);
    if (!hash || seen[hash] || output.length >= 30) return;
    var dn = nfQueryValue(magnet, "dn").slice(0, 200);
    // 每条磁力都要能确认属于当前番号：dn 对不上或含其他番号（合集包）时丢弃
    if (dn && (!nfCodeMatches(dn, code) || nfContainsOtherCode(dn, code))) return;
    seen[hash] = true;
    var byteText = nfQueryValue(magnet, "xl");
    var bytes = /^\d{1,15}$/.test(byteText) ? Number(byteText) : 0;
    if (!bytes) {
      var size = sizeText.match(/(\d+(?:\.\d+)?)\s*(GiB|GB|MiB|MB|KiB|KB)\b/i);
      if (size) bytes = Math.floor(Number(size[1]) * Math.pow(1024, { g: 3, m: 2, k: 1 }[size[2].charAt(0).toLowerCase()]));
    }
    var tags = [];
    var label = title + " " + dn;
    [[/\b(?:4K|2160P|UHD)\b/i, "4K"], [/\b1080P\b/i, "1080P"], [/\b720P\b/i, "720P"], [/无码|無碼|无修正|無修正|破解|uncensored|uncen|leak/i, "无码"], [/中字|中文|字幕/, "中字"]].forEach(function (rule) { if (rule[0].test(label)) tags.push(rule[1]); });
    output.push({ hash: hash, magnet: magnet, name: dn || title || code, code: code,
      size: sizeText || (bytes ? (bytes / 1073741824).toFixed(2) + " GB" : ""), size_bytes: bytes, tags: tags, source: "18mag" });
  });
  return output;
}

async function nfFindMagnets(movie, deadline) {
  var code = normalizeMovieCode(movie.code);
  if (!code) return { items: [], warning: "无可确认的番号，未查询 18mag" };
  var cached = nfCacheRead("magnets:" + code);
  if (cached) return cached;
  var $ = nfDocument(await nfGetHtml(NF_MAG_SITE + "/search", { q: code }, deadline));
  var candidates = [];
  $("a[href]").each(function (_, node) {
    var element = $(node);
    var url = nfMagDetailUrl(element.attr("href"));
    var text = safeText(element.text());
    // 候选页同样先按当前番号过滤，标题含其他番号的合集页不请求
    if (url && nfCodeMatches(text, code) && !nfContainsOtherCode(text, code) && candidates.indexOf(url) < 0 && candidates.length < 3) candidates.push(url);
  });
  var items = [];
  var seen = {};
  var failed = false;
  for (var i = 0; i < candidates.length; i++) {
    try {
      var html = await nfGetHtml(candidates[i], {}, deadline);
      nfExtractMagnets(html, code).forEach(function (entry) { if (!seen[entry.hash]) { seen[entry.hash] = true; items.push(entry); } });
    } catch (error) { failed = true; }
  }
  var result = { items: items.slice(0, 30), warning: failed ? "部分 18mag 详情无法读取，可稍后重试" : items.length ? "" : "18mag 未找到精确匹配的磁力" };
  if (!failed) nfCacheWrite("magnets:" + code, result, 300000);
  return result;
}

function nfPlaybackResources(raw, identity) {
  var previewPaths = [raw.previewVideo, raw.preview_hp].filter(function (value) { return typeof value === "string"; }).map(function (value) { return value.split(/[?#]/)[0]; });
  var candidates = [];
  ["src", "srcs", "otherSrcs", "uSrc"].forEach(function (key) {
    var list = Array.isArray(raw[key]) ? raw[key] : [raw[key]];
    list.slice(0, 8).forEach(function (entry) {
      if (typeof entry === "string") candidates.push(entry);
      else if (nfPlainObject(entry) && !entry.isPreview && !/preview|trailer/i.test(String(entry.type || ""))) {
        ["url", "src", "file"].forEach(function (field) { if (typeof entry[field] === "string") candidates.push(entry[field]); });
      }
    });
  });
  var seen = {};
  return candidates.slice(0, 16).filter(function (value) {
    if (!nfPublicUrl(value) || !/\.(?:m3u8|mp4)(?:[?#]|$)/i.test(value) || previewPaths.indexOf(value.split(/[?#]/)[0]) >= 0 || seen[value]) return false;
    seen[value] = true;
    return true;
  }).map(function (url) {
    return { name: "Netflav " + (/\.m3u8(?:[?#]|$)/i.test(url) ? "HLS" : "MP4"), url: url,
      description: "公开完整线路；播放器也需能访问线路网络", customHeaders: { Referer: NF_SITE + "/video?id=" + encodeURIComponent(identity) }, playerType: "app" };
  });
}

/* ========================= 分类 / 全部列表 ========================= */
/* 影片分类采用 catemby.js 式静态枚举选择器：列表由 gen-genres.js 生成到 genre-options.js */
var NF_ALL_KINDS = { genre: "genre", actress: "actress" };

function nfCategoryName(value) {
  value = safeText(value).slice(0, 80);
  return value && !/[<>:"/\?#\r\n]/.test(value) ? value : "";
}

async function nfGetAllPage(kind, value, page, deadline) {
  if (!NF_ALL_KINDS[kind]) throw new Error("不支持的分类类型");
  value = nfCategoryName(value);
  if (!value) throw new Error("缺少分类或女优名称");
  var query = {};
  query[kind] = value;
  query.page = pageNumber({ page: page });
  var state = nfReadNext(await nfGetHtml(NF_SITE + "/all", query, deadline), "/all");
  return nfListItems(state.all, query.page);
}

/* 精简复用 javdb/modules/09-guangya-magnet.js；不放宽过滤或保存目录 */
var GUANGYA_ACCOUNT_URL = "https://account.guangyapan.com";
var GUANGYA_API_BASE = "https://api.guangyapan.com";
var GUANGYA_SITE = "https://www.guangyapan.com";
var GUANGYA_CLIENT_ID = "aMe-8VSlkrbQXpUR";
var GUANGYA_UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1";
var GUANGYA_ACCESS_STORE = "netflav.guangya.access.v1";
var GUANGYA_DID_STORE = "netflav.guangya.did.v1";
var _gyTokenRefreshInflight = null;
var GY_AUTO_INDEX = 10000;
var GY_VIDEO_EXTS = {mp4:1,mkv:1,avi:1,wmv:1,mov:1,m4v:1,ts:1,flv:1,rmvb:1,webm:1,"3gp":1};
var GY_DEFAULT_BLOCK_PATTERNS = ["广告|推广|宣传|加群|更多资源|最新地址", "(?:^|[/\\_.\\-\\s])(?:sample|preview|trailer|预告|预览|样片)(?:[/\\_.\\-\\s]|\\.|$)"];
function gyRandomHex(len) { var out=""; for(var i=0;i<len;i++) out+=((Math.random()*16)|0).toString(16); return out; }
async function ensureGuangyaDeviceId() { var id=await readStoreAsync(GUANGYA_DID_STORE); if(!id) {id=gyRandomHex(16);await writeStoreAsync(GUANGYA_DID_STORE,id);} return id; }
function gyAccountHeaders(did) {
  return {
    accept: "*/*",
    "content-type": "application/json",
    origin: GUANGYA_SITE,
    referer: GUANGYA_SITE + "/",
    "user-agent": GUANGYA_UA,
    "x-client-id": GUANGYA_CLIENT_ID,
    "x-client-version": "0.0.1",
    "x-device-id": did,
    "x-device-model": "iphone%2F18.0",
    "x-device-name": "iPhone",
    "x-device-sign": "wdi10." + did + gyRandomHex(32),
    "x-net-work-type": "NONE",
    "x-os-version": "iPhone OS 18.0",
    "x-platform-version": "1",
    "x-protocol-version": "301",
    "x-provider-name": "NONE",
    "x-sdk-version": "9.0.2",
    "x-action": "401",
  };
}

function gyApiHeaders(token, did) {
  return {
    accept: "application/json, text/plain, */*",
    authorization: "Bearer " + token,
    "content-type": "application/json",
    Did: did,
    did: did,
    Dt: "4",
    dt: "4",
    origin: GUANGYA_SITE,
    referer: GUANGYA_SITE + "/",
    "user-agent": GUANGYA_UA,
  };
}

function gyIsHttpStatus400(err) {
  return /(?:\b400\b|status code was unacceptable)/i.test(String((err && err.message) || err || ""));
}

function gyExtractHttpStatus(item) {
  if (!item || typeof item !== "object") return 0;
  return Number(item.status || item.statusCode || item.status_code || 0) || 0;
}

function gyRecoverHttpResponse(error) {
  var err = error || {};
  var queue = [err];
  var seen = {};
  if (err.error && typeof err.error === "object") queue.push(err.error);
  if (err.cause && typeof err.cause === "object") queue.push(err.cause);
  while (queue.length) {
    var node = queue.shift();
    if (!node || typeof node !== "object") continue;
    if (seen[node]) continue;
    seen[node] = true;
    var candidates = [node.response, node.res, node.result, node.httpResponse, node];
    for (var i = 0; i < candidates.length; i++) {
      var item = candidates[i];
      if (!item || typeof item !== "object") continue;
      var status = gyExtractHttpStatus(item);
      if (status < 400) continue;
      if (item.data !== undefined || item.body !== undefined || item.responseText !== undefined) return item;
      if (node !== item && node.data !== undefined) {
        return { status: status, statusCode: status, data: node.data, body: node.data };
      }
    }
    if (node.error && typeof node.error === "object") queue.push(node.error);
    if (node.cause && typeof node.cause === "object") queue.push(node.cause);
  }
  var msg = String(err.message || err || "");
  var match = msg.match(/unacceptable:\s*(\d{3})/i);
  if (match) {
    var code = Number(match[1]);
    var body =
      err.data !== undefined
        ? err.data
        : err.body !== undefined
          ? err.body
          : err.response && (err.response.data !== undefined ? err.response.data : err.response.body);
    if (body !== undefined) return { status: code, statusCode: code, data: body, body: body };
    return { status: code, statusCode: code };
  }
  return null;
}

function gyParseHttpPayload(resp) {
  var data = parseApiPayload(resp);
  if (data !== null && data !== undefined) return data;
  if (!resp || resp.body === undefined || resp.body === null) return data;
  return parseApiPayload({ data: resp.body });
}

function gyApiErrorText(data, status) {
  if (!data) return "HTTP " + status;
  if (typeof data === "string" && data.trim()) return data.trim().slice(0, 240);
  return (
    safeText(data.msg || data.message || data.error_description || data.error || data.detail) ||
    "HTTP " + status
  );
}

function gyIsRotatedTokenError(err, data) {
  var text = String((err && err.message) || err || "");
  if (data && typeof data === "object") {
    text += " " + String(data.error || "") + " " + String(data.error_description || data.msg || "");
  }
  return /invalid_grant|refreshed by other|invalid_token|expired/i.test(text);
}

function gyAuthErrorText(err, data, status) {
  var msg = String((err && err.message) || "");
  if (gyIsRotatedTokenError(err, data) || Number(status) === 400 || /\bHTTP\s*400\b/i.test(msg)) {
    return "光鸭 refresh_token 已失效（每次换票都会作废旧 token）。请到 www.guangyapan.com 登录后重新复制最新 refresh_token";
  }
  return msg || gyApiErrorText(data, status) || "刷新光鸭 token 失败";
}

function pickLiveGuangyaRefreshToken(uiToken, session) {
  uiToken = normalizeGuangyaToken(uiToken);
  session = session || {};
  var live = normalizeGuangyaToken(session.refreshToken);
  var source = normalizeGuangyaToken(session.sourceRefreshToken);
  if (uiToken && live && uiToken !== live && uiToken !== source) return uiToken;
  return live || uiToken || "";
}

async function readGuangyaSessionAsync() {
  try {
    var raw = await readStorageRawAsync(GUANGYA_ACCESS_STORE);
    if (raw == null || raw === "") raw = await readStoreAsync(GUANGYA_ACCESS_STORE);
    if (!raw) {
      raw = readStorageRaw(GUANGYA_ACCESS_STORE) || readStore(GUANGYA_ACCESS_STORE);
    }
    if (!raw) return null;
    var entry = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!entry || typeof entry !== "object" || isPromiseLike(entry)) return null;
    return {
      refreshToken: normalizeGuangyaToken(entry.refreshToken),
      sourceRefreshToken: normalizeGuangyaToken(entry.sourceRefreshToken),
      accessToken: String(entry.accessToken || "").trim(),
      expiresAt: Number(entry.expiresAt || 0),
    };
  } catch (e) {
    return null;
  }
}

async function writeGuangyaSessionAsync(session) {
  session = session || {};
  var payload = JSON.stringify({
    refreshToken: normalizeGuangyaToken(session.refreshToken),
    sourceRefreshToken: normalizeGuangyaToken(session.sourceRefreshToken || session.refreshToken),
    accessToken: String(session.accessToken || "").trim(),
    expiresAt: Number(session.expiresAt || 0),
  });
  writeStore(GUANGYA_ACCESS_STORE, payload);
  await writeStoreAsync(GUANGYA_ACCESS_STORE, payload);
}

async function gyHttpPost(url, headers, bodyObj, timeoutMs) {
  var body = bodyObj || {};
  var rawBody = typeof body === "string" ? body : JSON.stringify(body);
  var httpOpts = {
    headers: headers,
    allow_redirects: false,
    timeout: timeoutMs || 30000,
    validate_status: false,
    validateStatus: function () {
      return true;
    },
    status: "all",
  };
  var resp;
  try {
    if (typeof Widget.http.post === "function") {
      resp = await Widget.http.post(url, body, httpOpts);
    } else if (typeof Widget.http.request === "function") {
      resp = await Widget.http.request(url, Object.assign({ method: "POST", body: body }, httpOpts));
    } else {
      resp = await Widget.http.get(url, Object.assign({}, httpOpts, { method: "POST", body: rawBody }));
    }
  } catch (error) {
    resp = gyRecoverHttpResponse(error);
    if (!resp) throw error;
  }
  var status = gyExtractHttpStatus(resp);
  var data = gyParseHttpPayload(resp);
  if (status >= 400) {
    throw new Error(gyApiErrorText(data, status));
  }
  return data;
}

async function ensureGuangyaAccessToken(refreshToken, did) {
  refreshToken = normalizeGuangyaToken(refreshToken);
  if (!refreshToken) throw new Error("未配置光鸭 refresh_token");
  if (_gyTokenRefreshInflight) return _gyTokenRefreshInflight;

  _gyTokenRefreshInflight = (async function () {
    try {
      var session = await readGuangyaSessionAsync();
      var live = pickLiveGuangyaRefreshToken(refreshToken, session);
      var accessValid =
        session &&
        session.accessToken &&
        Number(session.expiresAt || 0) > Date.now() + 60000 &&
        (session.refreshToken === live || session.sourceRefreshToken === refreshToken);
      if (accessValid) return session.accessToken;

      if (session && session.refreshToken && refreshToken === session.sourceRefreshToken) {
        live = session.refreshToken;
      }

      var data = await gyHttpPost(
        GUANGYA_ACCOUNT_URL + "/v1/auth/token",
        gyAccountHeaders(did),
        { client_id: GUANGYA_CLIENT_ID, grant_type: "refresh_token", refresh_token: live },
        25000
      );
      if (!data || !data.access_token) {
        throw new Error(gyAuthErrorText(null, data, 0));
      }
      var newRefresh = normalizeGuangyaToken(data.refresh_token) || live;
      var source =
        session && session.sourceRefreshToken && live === session.refreshToken
          ? session.sourceRefreshToken
          : refreshToken;
      await writeGuangyaSessionAsync({
        refreshToken: newRefresh,
        sourceRefreshToken: source,
        accessToken: data.access_token,
        expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000,
      });
      await persistGlobalParamAsync("guangya_token", newRefresh);
      return data.access_token;
    } catch (err) {
      throw new Error(gyAuthErrorText(err, null, 0));
    } finally {
      _gyTokenRefreshInflight = null;
    }
  })();

  return _gyTokenRefreshInflight;
}

function gyToNumber(v) {
  var n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function gyPickName(values) {
  for (var i = 0; i < values.length; i++) {
    var s = String(values[i] || "").trim();
    if (s) return s;
  }
  return "";
}

function gyNormalizeResolvedEntry(obj, fallbackIndex) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return null;
  var indexRaw =
    obj.fileIndex != null
      ? obj.fileIndex
      : obj.file_index != null
        ? obj.file_index
        : obj.index != null
          ? obj.index
          : obj.idx != null
            ? obj.idx
            : obj.fileNo != null
              ? obj.fileNo
              : obj.file_no != null
                ? obj.file_no
                : obj.seq != null
                  ? obj.seq
                  : null;
  var index = gyToNumber(indexRaw);
  var finalIndex = index != null && index >= 0 ? index : fallbackIndex != null ? fallbackIndex : GY_AUTO_INDEX++;
  var name = gyPickName([
    obj.name,
    obj.fileName,
    obj.file_name,
    obj.filename,
    obj.path,
    obj.filePath,
    obj.file_path,
    obj.fullPath,
    obj.full_path,
    obj.relativePath,
    obj.relative_path,
    obj.resName,
    obj.resourceName,
    obj.title,
    obj.label,
    obj.displayName,
  ]);
  var size = gyToNumber(
    obj.fileSize != null
      ? obj.fileSize
      : obj.file_size != null
        ? obj.file_size
        : obj.filesize != null
          ? obj.filesize
          : obj.size != null
            ? obj.size
            : obj.length != null
              ? obj.length
              : obj.bytes
  );
  return { index: finalIndex, name: name, size: size == null ? 0 : size, raw: obj };
}

function gyCollectObjectArrays(node, out, seen) {
  out = out || [];
  seen = seen || null;
  if (!node || typeof node !== "object") return out;
  if (seen && seen.has && seen.has(node)) return out;
  if (seen && seen.add) seen.add(node);
  if (Array.isArray(node)) {
    if (node.length && node.every(function (item) { return item && typeof item === "object" && !Array.isArray(item); })) {
      out.push(node);
    }
    for (var i = 0; i < node.length; i++) gyCollectObjectArrays(node[i], out, seen);
    return out;
  }
  var keys = Object.keys(node);
  for (var j = 0; j < keys.length; j++) gyCollectObjectArrays(node[keys[j]], out, seen);
  return out;
}

function gyDedupeResolvedEntries(entries) {
  var seen = {};
  return (entries || [])
    .filter(function (item) {
      if (!item) return false;
      if (item.index >= GY_AUTO_INDEX) return true;
      if (seen[item.index]) return false;
      seen[item.index] = true;
      return true;
    })
    .sort(function (a, b) {
      return Number(a.index || 0) - Number(b.index || 0);
    });
}

function gyExtractBtSubfiles(payload) {
  var data = payload && payload.data;
  var bt = data && data.btResInfo;
  var subs = bt && bt.subfiles;
  if (!Array.isArray(subs) || !subs.length) return null;
  var entries = [];
  for (var i = 0; i < subs.length; i++) {
    var s = subs[i] || {};
    var idx = gyToNumber(
      s.fileIndex != null
        ? s.fileIndex
        : s.file_index != null
          ? s.file_index
          : s.index != null
            ? s.index
            : i
    );
    if (idx == null || idx < 0) idx = i;
    var name = gyPickName([s.fileName, s.file_name, s.name, s.path, s.title]);
    var size = gyToNumber(
      s.fileSize != null ? s.fileSize : s.file_size != null ? s.file_size : s.size
    );
    entries.push({ index: idx, name: name, size: size == null ? 0 : size, raw: s });
  }
  entries = gyDedupeResolvedEntries(entries);
  return entries.length ? entries : null;
}

function gyIsValidFileIndex(idx) {
  var n = Number(idx);
  return Number.isFinite(n) && n >= 0 && n < GY_AUTO_INDEX;
}

function gySanitizeFileIndexes(indexes) {
  if (!indexes || !indexes.length) return null;
  var out = [];
  var seen = {};
  for (var i = 0; i < indexes.length; i++) {
    var n = Number(indexes[i]);
    if (!gyIsValidFileIndex(n) || seen[n]) continue;
    seen[n] = true;
    out.push(n);
  }
  return out.length ? out : null;
}

function gyResolvedTaskUrl(resolved, magnet) {
  var data = resolved && resolved.data;
  var url = safeText(data && data.url);
  return url || magnet;
}

function gyResolvedTaskName(resolved, magnet) {
  var data = resolved && resolved.data;
  var btName = safeText(data && data.btResInfo && data.btResInfo.fileName);
  if (btName) return btName;
  var dnMatch = String(magnet || "").match(/(?:^|[?&])dn=([^&]+)/i);
  if (dnMatch) {
    try {
      return safeText(decodeMagnetSegment(dnMatch[1]));
    } catch (e) {}
  }
  return "offline";
}

function gyExtractResolvedEntries(payload) {
  GY_AUTO_INDEX = 10000;
  var btEntries = gyExtractBtSubfiles(payload);
  if (btEntries && btEntries.length) return btEntries;

  var data = payload && payload.data;
  var directList =
    (data &&
      (data.list ||
        data.files ||
        data.fileList ||
        data.resList ||
        data.items ||
        data.fileInfos ||
        data.file_list ||
        data.file_list_info ||
        data.result ||
        data.details)) ||
    null;
  if (Array.isArray(directList) && directList.length) {
    var entries = [];
    for (var i = 0; i < directList.length; i++) {
      var entry = gyNormalizeResolvedEntry(directList[i], i);
      if (entry) entries.push(entry);
    }
    entries = gyDedupeResolvedEntries(entries);
    if (entries.length) return entries;
  }
  return [];
}

function gyParseRegexSource(raw) {
  var s = String(raw || "").trim();
  if (!s) return null;
  if (s.charAt(0) === "/") {
    var last = s.lastIndexOf("/");
    if (last > 0) {
      try {
        return new RegExp(s.slice(1, last), s.slice(last + 1) || "i");
      } catch (e) {}
    }
  }
  try {
    return new RegExp(s, "i");
  } catch (e2) {
    return null;
  }
}

function gyParseBlockPatterns(cfg) {
  var raw = String((cfg && cfg.magnet_block_patterns) || "").trim();
  var sources = raw
    ? raw.split(/;/).map(function (s) { return String(s || "").trim(); }).filter(Boolean)
    : GY_DEFAULT_BLOCK_PATTERNS.slice();
  var patterns = [];
  for (var i = 0; i < sources.length; i++) {
    var re = gyParseRegexSource(sources[i]);
    if (re) patterns.push(re);
  }
  return patterns;
}

function gyBasename(name) {
  var s = String(name || "").replace(/\\/g, "/");
  var idx = s.lastIndexOf("/");
  return idx >= 0 ? s.slice(idx + 1) : s;
}

function gyIsVideoFileName(name) {
  var base = gyBasename(name);
  var parts = base.split(".");
  if (parts.length < 2) return false;
  return !!GY_VIDEO_EXTS[parts.pop().toLowerCase()];
}

function gyIsObviousJunk(name) {
  return /\.(txt|url|nfo|htm|html|jpg|jpeg|png|gif|exe|apk|torrent|srt|ass)$/i.test(gyBasename(name));
}

function gyIsLikelyVideo(entry) {
  if (gyIsVideoFileName(entry.name)) return true;
  if (Number(entry.size || 0) >= 50 * 1024 * 1024) return true;
  var raw = entry.raw;
  if (raw) {
    var t = raw.resType != null ? raw.resType : raw.fileType;
    if (t === 1 || t === "1" || String(raw.type || "").toLowerCase() === "video") return true;
  }
  return false;
}

function gyMaxVideoSize(entries) {
  var max = 0;
  for (var i = 0; i < entries.length; i++) {
    if (!gyIsLikelyVideo(entries[i])) continue;
    max = Math.max(max, Number(entries[i].size || 0));
  }
  return max;
}

function gyIsMultiPartName(name) {
  var n = String(name || "").toLowerCase();
  return (
    /(?:^|[\._\-])p(?:art)?[\._\-]?\d+(?:[\._\-]|$)/.test(n) ||
    /(?:^|[\._\-])cd[\._\-]?\d+(?:[\._\-]|$)/.test(n) ||
    /(?:^|[\._\-])disc[\._\-]?\d+(?:[\._\-]|$)/.test(n) ||
    /(?:^|[\._\-])vol[\._\-]?\d+(?:[\._\-]|$)/.test(n) ||
    /分段|第[\d一二三四五六七八九十]+[部分集段]/.test(n)
  );
}

function gyShouldBlock(entry, patterns, minVideoMb, videoOnly, maxVideoSize) {
  var name = String(entry.name || "");
  if (gyIsObviousJunk(name)) return { blocked: true, reason: "junk" };
  for (var i = 0; i < patterns.length; i++) {
    if (patterns[i].test(name)) return { blocked: true, reason: "pattern" };
  }
  if (videoOnly && name && !gyIsLikelyVideo(entry)) return { blocked: true, reason: "non-video" };
  var size = Number(entry.size || 0);
  var isVideo = gyIsLikelyVideo(entry);
  if (isVideo && size > 0 && maxVideoSize > 0 && size < maxVideoSize * 0.12 && !gyIsMultiPartName(name)) {
    return { blocked: true, reason: "small-video" };
  }
  if (
    minVideoMb > 0 &&
    isVideo &&
    size > 0 &&
    maxVideoSize > 0 &&
    size < minVideoMb * 1024 * 1024 &&
    size < maxVideoSize * 0.35
  ) {
    return { blocked: true, reason: "size" };
  }
  return { blocked: false, reason: "" };
}

function gyPruneDominantVideo(kept, blocked) {
  if (kept.length <= 1) return { kept: kept, blocked: blocked };
  var videos = kept.filter(gyIsLikelyVideo);
  if (videos.length <= 1) return { kept: kept, blocked: blocked };
  var hasMultipart = videos.some(function (e) { return gyIsMultiPartName(e.name); });
  var maxSize = Math.max.apply(
    null,
    videos.map(function (e) { return Number(e.size || 0); })
  );
  var floor = hasMultipart ? maxSize * 0.45 : maxSize * 0.3;
  var survivors = kept.filter(function (e) {
    if (!gyIsLikelyVideo(e)) return true;
    return gyIsMultiPartName(e.name) || Number(e.size || 0) >= floor;
  });
  if (survivors.length >= kept.length) return { kept: kept, blocked: blocked };
  var survivorMap = {};
  survivors.forEach(function (e) { survivorMap[e.index] = 1; });
  var newBlocked = blocked.slice();
  kept.forEach(function (e) {
    if (!survivorMap[e.index]) newBlocked.push({ entry: e, reason: "pruned" });
  });
  return { kept: survivors, blocked: newBlocked };
}

function gyPickVideoFallback(entries, patterns) {
  var candidates = [];
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var name = String(entry.name || "");
    if (gyIsObviousJunk(name)) continue;
    var hit = false;
    for (var p = 0; p < patterns.length; p++) {
      if (patterns[p].test(name)) {
        hit = true;
        break;
      }
    }
    if (hit) continue;
    candidates.push(entry);
  }
  if (!candidates.length) candidates = entries.filter(gyIsLikelyVideo);
  if (!candidates.length) candidates = entries.slice();
  candidates.sort(function (a, b) { return Number(b.size || 0) - Number(a.size || 0); });
  return candidates[0] || null;
}

function gyFilterResolvedFiles(entries, cfg) {
  var patterns = gyParseBlockPatterns(cfg);
  var minVideoMb = Number(cfg.magnet_min_video_mb || 0);
  if (!Number.isFinite(minVideoMb) || minVideoMb < 0) minVideoMb = 0;
  var videoOnly = String(cfg.magnet_video_only || "1") !== "0";
  var maxVideoSize = gyMaxVideoSize(entries);
  var kept = [];
  var blocked = [];
  for (var i = 0; i < entries.length; i++) {
    var verdict = gyShouldBlock(entries[i], patterns, minVideoMb, videoOnly, maxVideoSize);
    if (verdict.blocked) blocked.push({ entry: entries[i], reason: verdict.reason });
    else kept.push(entries[i]);
  }
  return gyPruneDominantVideo(kept, blocked);
}

function gyFormatEntryPreview(entries, limit) {
  var max = limit || 8;
  var lines = [];
  for (var i = 0; i < entries.length && i < max; i++) {
    lines.push(entries[i].name || "#" + entries[i].index);
  }
  if (entries.length > max) lines.push("… 另有 " + (entries.length - max) + " 个");
  return lines.join("\n");
}

function gyFormatBlockedPreview(blocked, limit) {
  var max = limit || 8;
  var lines = [];
  for (var i = 0; i < blocked.length && i < max; i++) {
    var item = blocked[i];
    var label = item.entry.name || "#" + item.entry.index;
    var tag =
      item.reason === "size"
        ? " (过小)"
        : item.reason === "small-video"
          ? " (小广告)"
          : item.reason === "pruned"
            ? " (冗余)"
            : item.reason === "non-video"
              ? " (非视频)"
              : item.reason === "pattern"
                ? " (规则)"
                : item.reason === "junk"
                  ? " (junk)"
                  : "";
    lines.push(label + tag);
  }
  if (blocked.length > max) lines.push("… 另有 " + (blocked.length - max) + " 个");
  return lines.join("\n");
}

async function guangyaResolveResource(accessToken, did, magnet) {
  var data = await gyHttpPost(
    GUANGYA_API_BASE + "/nd.bizcloudcollection.s/v1/resolve_res",
    gyApiHeaders(accessToken, did),
    { url: magnet },
    45000
  );
  if (!data) throw new Error("光鸭解析返回空响应");
  return data;
}

function gyIsGuangyaTaskOk(task) {
  if (!task || typeof task !== "object") return false;
  if (task.code != null && Number(task.code) !== 0 && Number(task.code) !== 200) return false;
  return task.code != null || task.taskId != null || !!(task.data && (task.data.taskId || task.data.id)) || /^success$/i.test(String(task.msg || ""));
}

function gySanitizeTaskName(name) {
  name = safeText(name)
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, " ")
    .trim();
  if (!name || name === "." || name === "..") return "";
  if (name.length > 180) name = name.slice(0, 180);
  return name;
}

function gySanitizeParentId(parentId) {
  parentId = safeText(parentId);
  if (!parentId) return "";
  if (!/^[0-9a-zA-Z_-]{4,64}$/.test(parentId)) return "";
  return parentId;
}

async function guangyaCreateTask(accessToken, did, taskInput) {
  taskInput = taskInput || {};
  var body = {
    url: String(taskInput.url || "").trim(),
    parentId: gySanitizeParentId(taskInput.parentId),
  };
  var newName = gySanitizeTaskName(taskInput.newName);
  if (newName) body.newName = newName;
  var indexes = gySanitizeFileIndexes(taskInput.fileIndexes);
  if (indexes && indexes.length) body.fileIndexes = indexes;
  return gyHttpPost(
    GUANGYA_API_BASE + "/nd.bizcloudcollection.s/v1/create_task",
    gyApiHeaders(accessToken, did),
    body,
    30000
  );
}

async function submitGuangyaMagnetTask(accessToken, did, magnet, cfg, filtered, resolved) {
  var magnetUrl = String(magnet || "").trim();
  var resolvedUrl = gyResolvedTaskUrl(resolved, magnetUrl);
  var taskName = gyResolvedTaskName(resolved, magnetUrl);
  var parentId = gySanitizeParentId(cfg.guangya_parent_id);
  var indexes = gySanitizeFileIndexes(
    filtered.kept.map(function (e) {
      return e.index;
    })
  );
  if (!indexes || indexes.length !== filtered.kept.length) throw new Error("无法确认保留文件索引，停止转存以避免提交广告文件");
  var attempts = [{ url: resolvedUrl, parentId: parentId, newName: taskName, fileIndexes: indexes, label: "filtered" }];
  var lastErr = null;
  for (var i = 0; i < attempts.length; i++) {
    var attempt = attempts[i];
    try {
      var task = await guangyaCreateTask(accessToken, did, attempt);
      if (gyIsGuangyaTaskOk(task)) return { task: task, attempt: attempt.label };
      lastErr = new Error(gyApiErrorText(task, 0) || "光鸭 create_task 失败");
    } catch (err) {
      lastErr = err;
      if (!gyIsHttpStatus400(err)) throw err;
    }
  }
  throw lastErr || new Error("光鸭 create_task 失败");
}

async function saveMagnetToGuangya(magnet, cfg) {
  var did = await ensureGuangyaDeviceId();
  var accessToken;
  try {
    accessToken = await ensureGuangyaAccessToken(cfg.guangya_token, did);
  } catch (err) {
    throw new Error("换票失败: " + String((err && err.message) || err || "未知错误"));
  }
  var resolved = null;
  var entries = [];
  try {
    resolved = await guangyaResolveResource(accessToken, did, magnet);
    entries = gyExtractResolvedEntries(resolved);
  } catch (err) {
    if (!gyIsHttpStatus400(err)) throw new Error("解析磁力失败: " + String((err && err.message) || err));
  }
  if (!entries.length) throw new Error("未取得可确认的文件列表，停止转存");
  var filtered = { kept: [], blocked: [] };
  if (entries.length) {
    filtered =
      String(cfg.magnet_filter || "1") !== "0"
        ? gyFilterResolvedFiles(entries, cfg)
        : { kept: entries, blocked: [] };
    if (!filtered.kept.length) throw new Error("过滤后没有可转存文件");
  }
  var submitted;
  try {
    submitted = await submitGuangyaMagnetTask(accessToken, did, magnet, cfg, filtered, resolved);
  } catch (err) {
    throw new Error("提交任务失败: " + String((err && err.message) || err));
  }
  var task = submitted.task;
  return {
    ok: true,
    keptCount: filtered.kept.length,
    blockedCount: filtered.blocked.length,
    keptPreview: gyFormatEntryPreview(filtered.kept),
    blockedPreview: filtered.blocked.length ? gyFormatBlockedPreview(filtered.blocked) : "",
    task: task,
  };
}


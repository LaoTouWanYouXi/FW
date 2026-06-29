// ==================== 光鸭云盘 电影电视剧模块 ====================
// 功能：
//   1. 按影视名搜索光鸭网盘（支持分页搜索）
//   2. 在电影/剧集详情页自动匹配网盘文件并直链播放
//   3. 文件名季集解析 + TMDB 辅助 + 文件夹回溯
//
// 授权：globalParams 填入 refresh_token

WidgetMetadata = {
  id: "guangya.movie_tv",
  title: "光鸭-影视",
  description: "搜索光鸭云盘影视资源，详情页自动匹配播放源",
  author: "forward-user",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  site: "https://www.guangyapan.com",
  detailCacheDuration: 60,

  globalParams: [
    {
      name: "refresh_token",
      title: "光鸭 Refresh Token",
      type: "input",
      value: "",
      placeholder: "填入光鸭 refresh_token（gy.- 开头）"
    }
  ],

  search: {
    title: "影视搜索",
    functionName: "searchGuangyaMovieTV",
    params: [
      { name: "keyword", title: "片名/剧名", type: "input", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  },

  modules: [
    {
      id: "loadResource",
      title: "电影电视剧",
      description: "匹配光鸭网盘影视文件",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 30,
      params: []
    }
  ]
};

console.log("[guangya-movie-tv] version: " + WidgetMetadata.version);

// ==================== 常量 ====================
var CLIENT_ID = "aMe-8VSlkrbQXpUR";
var ACCOUNT_URL = "https://account.guangyapan.com";
var API_BASE = "https://api.guangyapan.com";
var SITE_ORIGIN = "https://www.guangyapan.com";
var TIMEOUT = 15000;
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

var VIDEO_EXTS = new Set([
  "mp4", "mkv", "avi", "wmv", "mov", "m4v",
  "ts", "flv", "rmvb", "webm", "3gp"
]);

var NOISE_WORDS = [
  "2160p", "1080p", "720p", "480p", "360p", "4k", "2k", "8k",
  "x264", "x265", "h264", "h265", "hevc", "avc", "av1", "vp9",
  "bluray", "blu-ray", "web-dl", "webdl", "webrip", "hdtv", "dvdrip",
  "bdrip", "brrip", "dvdscr", "hdrip", "tvrip",
  "proper", "repack", "internal", "readnfo", "remux",
  "complete", "subbed", "multi", "dual", "hardcoded",
  "hdr", "sdr", "dolby", "vision", "dv", "hlg", "10bit", "8bit",
  "aac", "ac3", "dts", "flac", "mp3", "truehd", "atmos", "5.1", "7.1",
  "www", "com", "hd", "fhd", "uhd"
];
var NOISE_REGEX = new RegExp("\\b(?:" + NOISE_WORDS.join("|") + ")\\b", "gi");

var FILE_ID_MAP = {};

// ==================== 工具 ====================
function getText(v) {
  return String(v || "").trim();
}

function randomHex(len) {
  var s = "";
  for (var i = 0; i < len; i++) {
    s += Math.floor(Math.random() * 16).toString(16);
  }
  return s;
}

function getDeviceId() {
  var did = Widget.storage.get("guangya_did");
  if (!did) {
    did = randomHex(32);
    Widget.storage.set("guangya_did", did);
  }
  return did;
}

function formatSize(bytes) {
  var n = Number(bytes || 0);
  if (!n) return "";
  var units = ["B", "KB", "MB", "GB", "TB"];
  var i = Math.min(Math.floor(Math.log(n) / Math.log(1024)), units.length - 1);
  return (n / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0) + " " + units[i];
}

function isVideoFile(name) {
  var ext = String(name || "").split(".").pop().toLowerCase();
  return VIDEO_EXTS.has(ext);
}

function resolveRefreshToken(params) {
  return getText(params && params.refresh_token) || getText(Widget.storage.get("guangya_refresh_token"));
}

function accountHeaders() {
  var did = getDeviceId();
  return {
    "accept": "*/*",
    "content-type": "application/json",
    "origin": SITE_ORIGIN,
    "referer": SITE_ORIGIN + "/",
    "user-agent": UA,
    "x-client-id": CLIENT_ID,
    "x-client-version": "0.0.1",
    "x-device-id": did,
    "x-device-model": "chrome%2F131.0.0.0",
    "x-device-name": "PC-Chrome",
    "x-device-sign": "wdi10." + did + randomHex(32),
    "x-net-work-type": "NONE",
    "x-os-version": "Win32",
    "x-platform-version": "1",
    "x-protocol-version": "301",
    "x-provider-name": "NONE",
    "x-sdk-version": "9.0.2",
    "x-action": "401"
  };
}

function apiHeaders(token) {
  return {
    "accept": "application/json, text/plain, */*",
    "authorization": "Bearer " + token,
    "content-type": "application/json",
    "did": getDeviceId(),
    "dt": "4",
    "origin": SITE_ORIGIN,
    "referer": SITE_ORIGIN + "/",
    "user-agent": UA
  };
}

async function httpPost(url, body, headers) {
  var resp = await Widget.http.post(url, body, { headers: headers || {}, timeout: TIMEOUT });
  return resp && resp.data;
}

function normalizeFile(item) {
  return {
    fileId: String(item.fileId || item.id || ""),
    filename: item.fileName || item.name || "",
    size: Number(item.fileSize || item.size || 0),
    isDir: item.resType === 2,
    parentId: String(item.parentId || "")
  };
}

function cacheFile(file) {
  if (file && file.fileId) {
    FILE_ID_MAP[file.fileId] = file;
  }
}

// ==================== 认证 & API ====================
async function refreshAccessToken(refreshToken) {
  var data = await httpPost(
    ACCOUNT_URL + "/v1/auth/token",
    { client_id: CLIENT_ID, grant_type: "refresh_token", refresh_token: refreshToken },
    accountHeaders()
  );
  if (!data || !data.access_token) {
    throw new Error((data && data.error_description) || (data && data.msg) || "刷新 token 失败");
  }
  Widget.storage.set("guangya_access_token", data.access_token);
  Widget.storage.set(
    "guangya_token_expires",
    String(Date.now() + (Number(data.expires_in || 7200) - 60) * 1000)
  );
  if (data.refresh_token) Widget.storage.set("guangya_refresh_token", data.refresh_token);
  return data.access_token;
}

async function ensureToken(params) {
  var refresh = resolveRefreshToken(params);
  if (!refresh) throw new Error("未配置 refresh_token");
  var cached = Widget.storage.get("guangya_access_token");
  var expires = Number(Widget.storage.get("guangya_token_expires") || 0);
  if (cached && Date.now() < expires) return cached;
  return await refreshAccessToken(refresh);
}

async function apiPost(token, path, body) {
  var url = path.indexOf("http") === 0 ? path : API_BASE + path;
  var data = await httpPost(url, body, apiHeaders(token));
  if (!data) throw new Error("空响应");
  if (data.error || (data.msg && data.msg !== "success")) {
    throw new Error(data.msg || data.error_description || "API 错误");
  }
  return data;
}

async function searchFiles(token, keyword, page, pageSize) {
  var data = await apiPost(token, "/userres/v1/file/search_files", {
    name: keyword,
    page: Math.max(0, (page || 1) - 1),
    pageSize: pageSize || 50
  });
  return ((data.data && data.data.list) || []).map(normalizeFile).filter(function (f) { return f.fileId; });
}

async function listFolder(token, parentId, page, pageSize) {
  var data = await apiPost(token, "/userres/v1/file/get_file_list", {
    parentId: parentId || "",
    page: Math.max(0, (page || 1) - 1),
    pageSize: pageSize || 100
  });
  return ((data.data && data.data.list) || []).map(normalizeFile).filter(function (f) { return f.fileId; });
}

async function getFileDetail(token, fileId) {
  var data = await apiPost(token, "/nd.bizuserres.s/v1/file/get_file_detail", { fileId: fileId });
  return normalizeFile(data.data || {});
}

async function getDownloadUrl(token, fileId) {
  var data = await apiPost(token, "/nd.bizuserres.s/v1/get_res_download_url", { fileId: fileId });
  return (data.data && data.data.signedURL) || "";
}

async function listFolderVideos(token, parentId, depth, limit) {
  if (depth <= 0 || limit <= 0) return [];
  var items = await listFolder(token, parentId, 1, 100);
  var videos = [];
  var dirs = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].isDir) dirs.push(items[i]);
    else if (isVideoFile(items[i].filename)) videos.push(items[i]);
  }
  if (videos.length >= limit) return videos.slice(0, limit);
  for (var d = 0; d < dirs.length && videos.length < limit; d++) {
    var sub = await listFolderVideos(token, dirs[d].fileId, depth - 1, limit - videos.length);
    videos = videos.concat(sub);
  }
  return videos;
}

async function collectVideosFromSearch(token, keyword, maxTotal) {
  maxTotal = maxTotal || 80;
  var raw = await searchFiles(token, keyword, 1, 50);
  var videos = [];
  var dirs = [];
  for (var i = 0; i < raw.length; i++) {
    if (raw[i].isDir) dirs.push(raw[i]);
    else if (isVideoFile(raw[i].filename)) videos.push(raw[i]);
  }
  for (var di = 0; di < dirs.length && videos.length < maxTotal; di++) {
    var expanded = await listFolderVideos(token, dirs[di].fileId, 3, maxTotal - videos.length);
    videos = videos.concat(expanded);
  }
  return videos;
}

function guessQualityLabel(filename) {
  var fn = String(filename || "").toLowerCase();
  if (fn.indexOf("2160") !== -1 || fn.indexOf("4k") !== -1) return "4K";
  if (fn.indexOf("1080") !== -1) return "1080P";
  if (fn.indexOf("720") !== -1) return "720P";
  return "";
}

async function buildStreamSources(token, file) {
  if (!file || !file.fileId || !isVideoFile(file.filename)) return [];
  var url = await getDownloadUrl(token, file.fileId);
  if (!url) return [];
  var label = guessQualityLabel(file.filename);
  return [{
    name: "光鸭云盘" + (label ? " (" + label + ")" : ""),
    description: file.filename + (file.size ? "\n大小: " + formatSize(file.size) : ""),
    url: url,
    customHeaders: { Referer: SITE_ORIGIN + "/", "User-Agent": UA }
  }];
}

// ==================== 影视解析（借鉴 115-Auto） ====================
function chineseNumToInt(str) {
  var s = String(str || "").trim();
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  var map = { 零: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };
  if (s === "十") return 10;
  if (s.indexOf("十") !== -1) {
    var parts = s.split("十");
    var left = parts[0] ? (map[parts[0]] || 0) : 1;
    var right = parts[1] ? (map[parts[1]] || parseInt(parts[1], 10) || 0) : 0;
    return left * 10 + right;
  }
  return map[s] || parseInt(s, 10) || 0;
}

function removeNoise(text) {
  var s = getText(text);
  if (!s) return "";
  s = s.replace(/^[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)+@/, "");
  s = s.replace(NOISE_REGEX, "");
  return s.replace(/[-–—]\s*$/, "").replace(/^[-–—]\s*/, "").replace(/\s+/g, " ").trim();
}

function stripMeta(title) {
  var t = String(title || "");
  t = t.replace(/[\(（\[][^)）\]\]]*[\)）\]\]]/g, "");
  t = t.replace(/第[\d一二三四五六七八九十百]+[季集话期]/g, "");
  t = t.replace(/\b[Ss]eason\s*\d+/g, "");
  t = t.replace(/\b[Ss]\d{1,2}\b/g, "");
  return t.replace(/\s+[-–—]\s*$/, "").trim();
}

function normalizeForMatch(title) {
  return String(title || "").toLowerCase()
    .replace(/[àáâãäåāăąèéêëēĕėęìíîïĩīĭįòóôõöōŏőùúûüũūŭůñńņňçĉčćğřšśşžźżýÿæœ]/g, "a")
    .replace(/[\s・\-\.!?\/_,:;~@#$%^&*+=<>'"]/g, "");
}

function matchScore(normSearch, normItem) {
  if (!normSearch || !normItem) return 0;
  if (normItem === normSearch) return 100;
  if (normItem.indexOf(normSearch) !== -1 || normSearch.indexOf(normItem) !== -1) return 75;
  var count = 0;
  for (var i = 0; i < normSearch.length; i++) {
    if (normItem.indexOf(normSearch[i]) !== -1) count++;
  }
  return Math.round((count / normSearch.length) * 40);
}

function normalizeMovieTitle(raw) {
  var s = getText(raw);
  if (!s) return "";
  s = s.replace(/\.[a-zA-Z0-9]{2,4}$/, "");
  s = s.replace(/^[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)+@/, "");
  s = s.replace(/[_.]/g, " ").replace(/\s+/g, " ").trim();
  s = removeNoise(s);
  s = stripMeta(s);
  return s;
}

function extractMovieTVKey(text) {
  var normalized = getText(text);
  if (!normalized) return null;

  var seasonEpMatch = normalized.match(/\b[Ss](\d{1,2})\s*[Ee](\d{1,3})\b/);
  if (seasonEpMatch) {
    var titleFromEp = normalized.replace(/\b[Ss]\d{1,2}\s*[Ee]\d{1,3}\b/i, " ").trim();
    titleFromEp = removeNoise(titleFromEp).replace(/[-–—]\s*$/, "").trim();
    var res = { type: "tv", season: parseInt(seasonEpMatch[1], 10), episode: parseInt(seasonEpMatch[2], 10) };
    if (titleFromEp.length >= 2) res.title = titleFromEp;
    return res;
  }

  var xMatch = normalized.match(/\b(\d{1,2})\s*x\s*(\d{1,3})\b/i);
  if (xMatch) {
    var titleFromX = normalized.replace(/\b\d{1,2}\s*x\s*\d{1,3}\b/i, " ").trim();
    titleFromX = removeNoise(titleFromX).replace(/[-–—]\s*$/, "").trim();
    var resX = { type: "tv", season: parseInt(xMatch[1], 10), episode: parseInt(xMatch[2], 10) };
    if (titleFromX.length >= 2) resX.title = titleFromX;
    return resX;
  }

  var cnNum = "[\\d一二三四五六七八九十百]+";
  var cnMatch = normalized.match(new RegExp("第(" + cnNum + ")[季](?:第?)\\s*(" + cnNum + ")[集话]?"));
  if (cnMatch) {
    var cnSeason = chineseNumToInt(cnMatch[1]);
    var cnEpisode = chineseNumToInt(cnMatch[2]);
    if (cnSeason > 0 && cnEpisode > 0) {
      var titleCn = normalized.replace(/第[\d一二三四五六七八九十百]*季第[\d一二三四五六七八九十百]*[集话]?/, "").trim();
      titleCn = removeNoise(titleCn).replace(/[-–—]\s*$/, "").trim();
      var resCn = { type: "tv", season: cnSeason, episode: cnEpisode };
      if (titleCn.length >= 2) resCn.title = titleCn;
      return resCn;
    }
  }

  var cleaned = removeNoise(normalized).replace(/\s+/g, " ").trim();
  var movieYear = cleaned.match(/^(.+?)\s+(\d{4})\s*$/);
  if (movieYear) {
    var year = parseInt(movieYear[2], 10);
    if (year >= 1900 && year <= 2100 && movieYear[1].trim().length >= 2) {
      return { type: "movie", title: movieYear[1].trim(), year: year };
    }
  }
  if (cleaned.length >= 3) return { type: "movie", title: cleaned };
  return null;
}

async function lookupTMDB(keyword, mediaType) {
  var q = getText(keyword);
  if (!q || q.length < 2) return null;
  try {
    var apiPath = mediaType === "tv" ? "search/tv" : "search/movie";
    var res = await Widget.tmdb.get(apiPath, { params: { query: q, language: "zh-CN" } });
    var results = res && res.results;
    if (!results || !results.length) return null;
    var first = results[0];
    var result = {
      title: first.title || first.name || first.original_title || first.original_name || "",
      originalTitle: first.original_title || first.original_name || "",
      year: ""
    };
    if (mediaType === "tv") {
      result.title = first.name || first.original_name || "";
      result.originalTitle = first.original_name || "";
      if (first.first_air_date) result.year = String(first.first_air_date).slice(0, 4);
    } else {
      if (first.release_date) result.year = String(first.release_date).slice(0, 4);
    }
    return result;
  } catch (e) {
    return null;
  }
}

async function getFolderHierarchy(token, folderId) {
  var parts = [];
  var currentId = folderId;
  var depth = 8;
  while (currentId && depth > 0) {
    depth--;
    try {
      var detail = await getFileDetail(token, currentId);
      if (!detail || !detail.fileId) break;
      if (detail.filename) parts.unshift(detail.filename);
      if (!detail.parentId || detail.parentId === currentId) break;
      currentId = detail.parentId;
    } catch (e) {
      break;
    }
  }
  return parts;
}

async function resolveShowTitle(token, file, context) {
  context = context || {};
  var filename = file.filename || "";
  var fromFile = extractMovieTVKey(filename);

  if (fromFile && fromFile.title) return fromFile;

  if (fromFile && fromFile.type === "tv" && !fromFile.title && file.parentId) {
    var hierarchy = await getFolderHierarchy(token, file.parentId);
    var folderTitle = "";
    for (var hi = 0; hi < hierarchy.length; hi++) {
      var part = hierarchy[hi];
      if (/^(?:Season|Saison)?\s*\d{1,2}$/i.test(part) || /^S\d{1,2}$/i.test(part)) continue;
      folderTitle = part;
      break;
    }
    if (!folderTitle && hierarchy.length) folderTitle = hierarchy[hierarchy.length - 1];
    if (folderTitle) {
      var folderClean = normalizeMovieTitle(folderTitle);
      if (folderClean.length >= 2) {
        return {
          type: "tv",
          title: folderClean,
          season: fromFile.season,
          episode: fromFile.episode,
          source: "folder"
        };
      }
    }
  }

  var contextTitle = context.title || context.seriesName || "";
  if (contextTitle && filename) {
    var fileKey = extractMovieTVKey(filename);
    if (fileKey && fileKey.type === "tv") {
      return {
        type: "tv",
        title: normalizeMovieTitle(contextTitle),
        season: fileKey.season,
        episode: fileKey.episode,
        source: "params"
      };
    }
    if (fileKey && fileKey.type === "movie") {
      return { type: "movie", title: normalizeMovieTitle(contextTitle), source: "params" };
    }
  }

  var cleaned = normalizeMovieTitle(filename);
  if (cleaned.length >= 3) return { type: "movie", title: cleaned };
  return null;
}

var BAD_FILENAME_WORDS = ["sample", "trailer", "preview", "behind", "bts", "extra", "featurette"];
var COLLECTION_WORDS = ["collection", "complete", "box.set", "boxset", "全集", "合集", "合辑", "套装", "pack"];

function scoreFile(file, showInfo, targetSeason, targetEpisode) {
  var fn = String(file.filename || "").toLowerCase();
  var score = 0;
  var titleMatchQuality = 0;

  for (var wi = 0; wi < BAD_FILENAME_WORDS.length; wi++) {
    if (fn.indexOf(BAD_FILENAME_WORDS[wi]) !== -1) score -= 80;
  }
  for (var ci = 0; ci < COLLECTION_WORDS.length; ci++) {
    if (fn.indexOf(COLLECTION_WORDS[ci]) !== -1) score -= 40;
  }

  if (targetSeason != null && targetEpisode != null && showInfo) {
    if (showInfo.season === targetSeason && showInfo.episode === targetEpisode) score += 50;
    else if (showInfo.season !== undefined && showInfo.episode !== undefined) score -= 30;
  }

  if (showInfo && showInfo.title) {
    var fnClean = stripMeta(String(file.filename || ""));
    fnClean = normalizeForMatch(fnClean);
    var titleNorm = normalizeForMatch(showInfo.title);
    var simScore = matchScore(titleNorm, fnClean);
    titleMatchQuality = simScore;
    if (simScore >= 75) score += Math.round(simScore * 0.4) + 10;
    else if (simScore >= 30) score += Math.round(simScore * 0.3);
    else score -= 25;
  }

  if (showInfo && showInfo.year && titleMatchQuality >= 30) {
    if (fn.indexOf(String(showInfo.year)) !== -1) score += 10;
  }

  if (showInfo && showInfo.season !== undefined && showInfo.episode !== undefined && titleMatchQuality >= 30) {
    var epPat = "s" + String(showInfo.season).padStart(2, "0") + "e" + String(showInfo.episode).padStart(2, "0");
    if (fn.indexOf(epPat) !== -1) score += 20;
  }

  var sizeMultiplier = titleMatchQuality >= 50 ? 1.0 : titleMatchQuality >= 25 ? 0.5 : 0.25;
  var size = Number(file.size || 0);
  if (size >= 4 * 1024 * 1024 * 1024) score += Math.round(40 * sizeMultiplier);
  else if (size >= 2 * 1024 * 1024 * 1024) score += Math.round(30 * sizeMultiplier);
  else if (size >= 1024 * 1024 * 1024) score += Math.round(20 * sizeMultiplier);
  else if (size > 0 && size < 50 * 1024 * 1024) score -= 20;

  if (fn.indexOf("2160") !== -1 || fn.indexOf("4k") !== -1) score += 15;
  else if (fn.indexOf("1080") !== -1) score += 10;
  else if (fn.indexOf("720") !== -1) score += 5;

  return score;
}

function buildBrowseItem(file) {
  cacheFile(file);
  if (file.isDir) {
    return {
      id: file.fileId,
      type: "url",
      title: file.filename,
      link: "guangyafolder://" + file.fileId,
      description: "文件夹",
      mediaType: "tv"
    };
  }
  return {
    id: file.fileId,
    type: "url",
    title: normalizeMovieTitle(file.filename) || file.filename,
    link: "guangyadetail://" + file.fileId,
    description: formatSize(file.size),
    mediaType: "movie"
  };
}

function needTokenItem() {
  return [{
    id: "no-token",
    type: "url",
    title: "需要光鸭 Refresh Token",
    description: "请在全局参数中填入 refresh_token",
    mediaType: "movie",
    link: ""
  }];
}

// ==================== 搜索入口 ====================
async function searchGuangyaMovieTV(params) {
  try {
    var token = await ensureToken(params);
    var keyword = getText(params.keyword);
    if (!keyword) return [];

    var raw = await searchFiles(token, keyword, params.page, 50);
    var items = [];
    for (var i = 0; i < raw.length; i++) {
      if (raw[i].isDir || isVideoFile(raw[i].filename)) {
        items.push(buildBrowseItem(raw[i]));
      }
    }
    return items;
  } catch (err) {
    console.error("[guangya-movie-tv/search]", err && err.message || err);
    if (String(err && err.message || "").indexOf("refresh_token") !== -1) return needTokenItem();
    return [];
  }
}

// ==================== Stream Source ====================
async function loadResource(params) {
  var link = String(params && params.link || "");

  if (link.indexOf("guangyadetail://") === 0) {
    try {
      var token = await ensureToken(params);
      var fileId = link.slice("guangyadetail://".length).split("?")[0];
      var cached = FILE_ID_MAP[fileId] || {};
      return await buildStreamSources(token, {
        fileId: fileId,
        filename: cached.filename || params.title || "video.mp4",
        size: cached.size || 0
      });
    } catch (err) {
      console.error("[guangya-movie-tv/direct]", err && err.message || err);
      return [];
    }
  }

  try {
    var token = await ensureToken(params);

    var searchKeyword = "";
    var contextForMatch = {};
    if (params.tmdbInfo) {
      searchKeyword = params.tmdbInfo.title || params.tmdbInfo.name ||
        params.tmdbInfo.originalTitle || params.tmdbInfo.originalName || "";
      contextForMatch.title = searchKeyword;
      contextForMatch.tmdbInfo = params.tmdbInfo;
    }
    if (!searchKeyword) {
      searchKeyword = params.seriesName || params.title || params.name || params.keyword || "";
      contextForMatch.title = searchKeyword;
      if (params.seriesName) contextForMatch.seriesName = params.seriesName;
    }

    var targetSeason = params.season != null && params.season !== "" ? parseInt(params.season, 10) : null;
    var targetEpisode = params.episode != null && params.episode !== "" ? parseInt(params.episode, 10) : null;

    var effectiveMediaType = params.tmdbInfo
      ? (params.tmdbInfo.mediaType || "movie")
      : (contextForMatch.type || "movie");

    var tmdbResult = null;
    if (!params.tmdbInfo && searchKeyword.length >= 2) {
      tmdbResult = await lookupTMDB(searchKeyword, effectiveMediaType);
      if (!tmdbResult) {
        var alt = effectiveMediaType === "tv" ? "movie" : "tv";
        tmdbResult = await lookupTMDB(searchKeyword, alt);
        if (tmdbResult) effectiveMediaType = alt;
      }
    }

    var searchKeywords = [];
    var tmdbTitle = "";
    var tmdbOriginal = "";
    if (params.tmdbInfo) {
      tmdbTitle = params.tmdbInfo.title || params.tmdbInfo.name || "";
      tmdbOriginal = params.tmdbInfo.originalTitle || params.tmdbInfo.originalName || "";
    } else if (tmdbResult) {
      tmdbTitle = tmdbResult.title || "";
      tmdbOriginal = tmdbResult.originalTitle || "";
    }
    if (tmdbTitle) searchKeywords.push(tmdbTitle);
    if (tmdbOriginal && tmdbOriginal !== tmdbTitle) searchKeywords.push(tmdbOriginal);
    if (searchKeyword && searchKeywords.indexOf(searchKeyword) === -1) searchKeywords.push(searchKeyword);

    if (!searchKeywords.length) return [];

    var files = [];
    for (var ski = 0; ski < searchKeywords.length; ski++) {
      var kw = searchKeywords[ski];
      if (!kw || kw.length < 1) continue;
      var result = await collectVideosFromSearch(token, kw, 80);
      if (result.length) {
        files = result;
        break;
      }
    }
    if (!files.length) return [];

    var scored = [];
    for (var fi = 0; fi < files.length; fi++) {
      var file = files[fi];
      if (!isVideoFile(file.filename)) continue;
      var showInfo = await resolveShowTitle(token, file, contextForMatch);
      if (!showInfo || !showInfo.title) {
        var cleaned = normalizeMovieTitle(file.filename);
        if (cleaned.length >= 2) showInfo = { type: "movie", title: cleaned };
        else continue;
      }
      scored.push({
        file: file,
        showInfo: showInfo,
        score: scoreFile(file, showInfo, targetSeason, targetEpisode)
      });
    }

    scored.sort(function (a, b) { return b.score - a.score; });

    var best = null;
    for (var bi = 0; bi < scored.length; bi++) {
      if (scored[bi].score >= 0) {
        best = scored[bi];
        break;
      }
    }
    if (!best && scored.length) best = scored[0];
    if (!best) return [];

    return await buildStreamSources(token, best.file);
  } catch (err) {
    console.error("[guangya-movie-tv/stream]", err && err.message || err);
    return [];
  }
}

// ==================== 光鸭云盘 番号模块 ====================
// 功能：
//   1. 按番号 / 欧美 Scene 关键词搜索光鸭网盘文件
//   2. 作为 Stream Source，在番号详情页自动匹配网盘文件并直链播放
//   3. guangyadetail:// 按 fileId 直接播放，guangyafolder:// 浏览文件夹
//
// 授权：globalParams 填入 refresh_token（光鸭登录后获取）

WidgetMetadata = {
  id: "guangya.jav",
  title: "光鸭-番号",
  description: "按番号搜索光鸭云盘，详情页自动匹配播放源",
  author: "老头",
  version: "1.0.2",
  requiredVersion: "0.0.1",
  site: "https://www.guangyapan.com",
  detailCacheDuration: 300,
  iconUrl:'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI5NDBfODA4NikiPgo8cGF0aCBkPSJNMCA2LjY3OTY5QzAgMi45OTA2IDIuOTkwNiAwIDYuNjc5NjkgMEgyMy4zMjAzQzI3LjAwOTQgMCAzMCAyLjk5MDYgMzAgNi42Nzk2OVYyMy4zMjAzQzMwIDI3LjAwOTQgMjcuMDA5NCAzMCAyMy4zMjAzIDMwSDYuNjc5NjlDMi45OTA2IDMwIDAgMjcuMDA5NCAwIDIzLjMyMDNWNi42Nzk2OVoiIGZpbGw9IiNGRjY4MDAiLz4KPHBhdGggZD0iTTAgNi42Nzk2OUMwIDIuOTkwNiAyLjk5MDYgMCA2LjY3OTY5IDBIMjMuMzIwM0MyNy4wMDk0IDAgMzAgMi45OTA2IDMwIDYuNjc5NjlWMjMuMzIwM0MzMCAyNy4wMDk0IDI3LjAwOTQgMzAgMjMuMzIwMyAzMEg2LjY3OTY5QzIuOTkwNiAzMCAwIDI3LjAwOTQgMCAyMy4zMjAzVjYuNjc5NjlaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfMjk0MF84MDg2KSIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPHBhdGggZD0iTTE2LjEwNzcgMTEuNjc2N0MxNi45NTg4IDExLjY3NjcgMTcuNjQ4NyAxMi4zNjQ2IDE3LjY0ODcgMTMuMjEzMkMxNy42NDg3IDE0LjA2MTggMTYuOTU4OCAxNC43NDk3IDE2LjEwNzcgMTQuNzQ5N0MxNS4yNTY3IDE0Ljc0OTcgMTQuNTY2NyAxNC4wNjE4IDE0LjU2NjcgMTMuMjEzMkMxNC41NjY3IDEyLjM2NDYgMTUuMjU2NyAxMS42NzY3IDE2LjEwNzcgMTEuNjc2N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNzA5OCA2LjIwOTk2QzE5LjQ1MDYgNi4yMDk5NiAyMi42NDggOC41Mjk0MiAyMy45MzQ0IDExLjgwNDZDMjMuOTgwNyAxMS45MjIzIDI0LjA5MzUgMTIuMDAxOCAyNC4yMjAzIDEyLjAwMThIMjYuODMzNkMyNi45NDkyIDEyLjAwMTggMjcuMDQyOSAxMi4wOTUyIDI3LjA0MjkgMTIuMjEwNEMyNy4wNDI5IDEyLjQyNSAyNy4wMTk3IDEyLjUyNTggMjYuOTc1NyAxMi43MjcyQzI2Ljk3MzEgMTIuNzM5IDI2Ljk3MDUgMTIuNzUwOSAyNi45Njc3IDEyLjc2MjdDMjYuOTY1IDEyLjc3NDUgMjYuOTYyMiAxMi43ODYyIDI2Ljk1OTMgMTIuNzk4QzI2Ljk1MzYgMTIuODIxNCAyNi45NDc2IDEyLjg0NDggMjYuOTQxMiAxMi44NjgxQzI2LjkzNDkgMTIuODkxMyAyNi45Mjg0IDEyLjkxNDUgMjYuOTIxNSAxMi45Mzc1QzI2LjkwNDMgMTIuOTk1IDI2Ljg4NTQgMTMuMDUxOCAyNi44NjQ4IDEzLjEwNzhDMjYuODYwNyAxMy4xMTkgMjYuODU2NiAxMy4xMzAyIDI2Ljg1MjMgMTMuMTQxM0MyNi43OTcxIDEzLjI4NjEgMjYuNzMwNyAxMy40MjU0IDI2LjY1NDEgMTMuNTU4MUMyNi42NDgzIDEzLjU2ODMgMjYuNjQyMyAxMy41Nzg1IDI2LjYzNjMgMTMuNTg4NkMyNi42MTgzIDEzLjYxOSAyNi41OTk4IDEzLjY0OSAyNi41ODA3IDEzLjY3ODdDMjYuNTYxNiAxMy43MDg0IDI2LjU0MiAxMy43Mzc3IDI2LjUyMTkgMTMuNzY2NkMyNi41MDAzIDEzLjc5NzYgMjYuNDc4MSAxMy44MjgxIDI2LjQ1NTQgMTMuODU4MkMyNi40MzE5IDEzLjg4OTUgMjYuNDA3NyAxMy45MjAyIDI2LjM4MjkgMTMuOTUwNUMyNi4zNzQxIDEzLjk2MTIgMjYuMzY1MyAxMy45NzE4IDI2LjM1NjQgMTMuOTgyNEMyNi4zMjQyIDE0LjAyMDcgMjYuMjkxIDE0LjA1ODIgMjYuMjU2OSAxNC4wOTQ3QzI2LjIyNDkgMTQuMTI5IDI2LjE5MjEgMTQuMTYyNSAyNi4xNTg1IDE0LjE5NTFDMjYuMTI5NCAxNC4yMjM1IDI2LjA5OTYgMTQuMjUxMyAyNi4wNjkzIDE0LjI3ODRDMjYuMDMzNyAxNC4zMTAzIDI1Ljk5NzMgMTQuMzQxMyAyNS45NjAyIDE0LjM3MTVDMjUuOTE1OSAxNC40MDc1IDI1Ljg3MDUgMTQuNDQyMiAyNS44MjQgMTQuNDc1NkMyNS42ODUgMTQuNTc1NiAyNS41MzY4IDE0LjY2MzkgMjUuMzgxIDE0LjczODhDMjUuMzcwMyAxNC43NDM5IDI1LjM1OTYgMTQuNzQ5IDI1LjM0ODggMTQuNzU0QzI1LjI3NjQgMTQuNzg3NyAyNS4yMDI0IDE0LjgxODUgMjUuMTI2OSAxNC44NDYzQzI1LjA2NTIgMTQuODY5MSAyNS4wMDI2IDE0Ljg4OTggMjQuOTM5MSAxNC45MDg1QzI0Ljg5NTUgMTQuOTIxMyAyNC44NTE1IDE0LjkzMzIgMjQuODA3IDE0Ljk0NEMyNC43NTk5IDE0Ljk1NTQgMjQuNzEyNCAxNC45NjU4IDI0LjY2NDQgMTQuOTc0OUMyNC42MjMxIDE0Ljk4MjggMjQuNTgxMyAxNC45ODk4IDI0LjUzOTQgMTQuOTk2QzI0LjQ4MTggMTUuMDA0NCAyNC4xOTU4IDE1LjAxMzcgMjQuMTA3OCAxNS4wMTM3SDIxLjE3ODNMMjEuMTc4NCAxNS4wMTQ1SDIxLjYzMTlDMjEuMjI5NiAxNS4wMzMgMjEuMTc0NyAxNS4zNzc2IDIxLjE1NTYgMTUuNTUzNEwyMS4xNTU1IDE1LjU1MjJDMjAuODc2NCAyMC4xNjM1IDE3LjAzNzMgMjMuODE3NCAxMi4zNDIyIDIzLjgxNzRDNy41NjY5NCAyMy44MTc0IDMuNjc3MDEgMjAuMDM3NyAzLjUxNzY1IDE1LjMxNTFDMy41MTIwNSAxNS4xNDkgMy42NDc2NCAxNS4wMTM3IDMuODE0MjQgMTUuMDEzN0g2LjQwNzI0QzYuNjk4OTggMTQuOTkxOSA2Ljg1MzM4IDE0Ljg3NDIgNi44OTc2IDE0LjQzMjZWMTQuNDU3MkM3LjE4NTU3IDkuODU0MyAxMS4wMjA4IDYuMjA5OTggMTUuNzA5OCA2LjIwOTk2Wk0xNS43MDk4IDkuNTc5MzJDMTIuODAwOSA5LjU3OTM0IDEwLjQyNDMgMTEuODUxNCAxMC4yNjc3IDE0LjcxMjhDMTAuMjU4NiAxNC44Nzg3IDEwLjEyNDQgMTUuMDEzNyA5Ljk1Nzg2IDE1LjAxMzdINy4yMDkyM0M2Ljk2ODc2IDE1LjAzMTEgNi45MTE2NyAxNS4yMTYxIDYuOTAxOTEgMTUuMzQ2NkM3LjA3NDQ1IDE4LjE5MjkgOS40NDQxOSAyMC40NDggMTIuMzQyMiAyMC40NDhDMTUuMjUxMSAyMC40NDggMTcuNjI3NyAxOC4xNzU5IDE3Ljc4NDMgMTUuMzE0NUMxNy43OTM0IDE1LjE0ODYgMTcuOTI3NiAxNS4wMTM3IDE4LjA5NDIgMTUuMDEzN0gyMC43Njg4QzIxLjA2NjggMTQuOTU4NSAyMS4xNDEyIDE0LjcwMjYgMjEuMTM5NCAxNC41MzU4QzIwLjg5NjcgMTEuNzU4MyAxOC41NTg1IDkuNTc5MzMgMTUuNzA5OCA5LjU3OTMyWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzI5NDBfODA4NiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNS4xNjYgMC41NTY2NCkgcm90YXRlKDEyNy4zMTIpIHNjYWxlKDIyLjc2NDMpIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQzMwRSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkE3MEUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI5NDBfODA4NiI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K',
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
    title: "番号搜索",
    functionName: "searchGuangyaJav",
    params: [
      { name: "keyword", title: "番号/关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  },

  modules: [
    {
      title: "浏览文件夹",
      description: "浏览光鸭网盘文件夹",
      functionName: "loadFolder",
      cacheDuration: 300,
      params: [
        { name: "parentId", title: "目录 ID", type: "input", value: "", placeholder: "留空=根目录" },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "loadResource",
      title: "光鸭番号",
      description: "匹配光鸭网盘番号文件",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 30,
      params: []
    }
  ]
};

console.log("[guangya-jav] version: " + WidgetMetadata.version);

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

// ==================== 认证 ====================
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
  if (data.refresh_token) {
    Widget.storage.set("guangya_refresh_token", data.refresh_token);
  }
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

// ==================== 文件 API ====================
async function searchFiles(token, keyword, page, pageSize) {
  var data = await apiPost(token, "/userres/v1/file/search_files", {
    name: keyword,
    page: Math.max(0, (page || 1) - 1),
    pageSize: pageSize || 50
  });
  var list = (data.data && data.data.list) || [];
  return list.map(normalizeFile).filter(function (f) { return f.fileId; });
}

async function listFolder(token, parentId, page, pageSize) {
  var data = await apiPost(token, "/userres/v1/file/get_file_list", {
    parentId: parentId || "",
    page: Math.max(0, (page || 1) - 1),
    pageSize: pageSize || 100
  });
  var list = (data.data && data.data.list) || [];
  return list.map(normalizeFile).filter(function (f) { return f.fileId; });
}

async function getDownloadUrl(token, fileId) {
  var data = await apiPost(
    token,
    "/nd.bizuserres.s/v1/get_res_download_url",
    { fileId: fileId }
  );
  return (data.data && data.data.signedURL) || "";
}

/** Rex 按 VideoResource.name 做线路排序/画质筛选；官方示例直接用 "4K"/"1080P" 作 name */
function guessQualityLabel(filename) {
  var fn = String(filename || "").toLowerCase();
  if (fn.indexOf("2160") !== -1 || fn.indexOf("4k") !== -1 || fn.indexOf("uhd") !== -1) return "4K";
  if (fn.indexOf("1080") !== -1 || fn.indexOf("fhd") !== -1) return "1080P";
  if (fn.indexOf("720") !== -1) return "720P";
  // 文件名无分辨率时默认 4K：靠前排序，且可在 Rex 独立筛「4K」
  return "4K";
}

function qualityRank(label) {
  var s = String(label || "").toUpperCase();
  if (s === "4K" || s === "2160P" || s === "UHD") return 400;
  if (s === "1080P" || s === "FHD") return 300;
  if (s === "720P" || s === "HD") return 200;
  return 100;
}

function sortFilesByQuality(files) {
  return (files || []).slice().sort(function (a, b) {
    var ra = qualityRank(guessQualityLabel(a && a.filename));
    var rb = qualityRank(guessQualityLabel(b && b.filename));
    if (rb !== ra) return rb - ra;
    return Number((b && b.size) || 0) - Number((a && a.size) || 0);
  });
}

async function buildStreamSources(token, file) {
  if (!file || !file.fileId || !isVideoFile(file.filename)) return [];
  var url = await getDownloadUrl(token, file.fileId);
  if (!url) return [];

  var label = guessQualityLabel(file.filename);
  var number = extractNumber(file.filename);
  return [{
    name: label,
    description: "光鸭云盘" + (number ? " · " + number : "") + "\n" +
      "文件: " + file.filename +
      (file.size ? "\n大小: " + formatSize(file.size) : ""),
    url: url,
    customHeaders: { Referer: SITE_ORIGIN + "/", "User-Agent": UA }
  }];
}

// ==================== 番号提取（与 115 番号模块一致） ====================
function extractNumber(text) {
  var s = getText(text).toUpperCase();
  if (!s) return "";
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
    /\b(\d{6}[-_]\d{2,3})\b/
  ];
  for (var i = 0; i < patterns.length; i++) {
    var match = normalized.match(patterns[i]);
    if (match) {
      if (match[1] && match[2]) return match[1] + "-" + match[2];
      if (match[1]) return match[1].replace(/\s+/g, "");
    }
  }
  return "";
}

var WESTERN_NOISE = /\b(?:xxx|1080p|2160p|4k|mp4|mkv|x264|x265|hevc|web-dl|webdl|ktr|n1c)\b/gi;

function extractWesternSceneKey(text) {
  var s = getText(text).toLowerCase();
  if (!s) return null;
  s = s.replace(WESTERN_NOISE, "");
  var clean = s.replace(/[_\s:]+/g, ".").replace(/\.+/g, ".").replace(/^\.|\.$/g, "").trim();
  if (!clean) return null;
  var dateMatch = clean.match(/(\d{2})[-.](\d{2})[-.](\d{2})/);
  if (!dateMatch) return null;
  var dateStr = dateMatch[0];
  var dateIndex = dateMatch.index || 0;
  var beforeRaw = clean.slice(0, dateIndex).replace(/\.+$/, "").replace(/^\.+/, "");
  var beforeParts = beforeRaw.split(".").filter(Boolean);
  var studio = beforeParts.length ? beforeParts[beforeParts.length - 1] : "";
  var afterRaw = clean.slice(dateIndex + dateStr.length).replace(/^\.+/, "").replace(/\.+$/, "");
  var performerParts = afterRaw.split(".").filter(Boolean);
  if (!studio || !performerParts.length) return null;
  return {
    type: "western",
    key: studio + "." + dateStr + "." + performerParts.join("."),
    searchText: studio,
    strictTarget: (studio + dateStr.replace(/\./g, "") + performerParts.join(".")).replace(/[^a-z0-9]/g, "")
  };
}

function extractWesternDateKey(text) {
  var s = getText(text).toLowerCase();
  if (!s) return null;
  s = s.replace(WESTERN_NOISE, "");
  var clean = s.replace(/[_\s:]+/g, ".").replace(/\.+/g, ".").replace(/^\.|\.$/g, "").trim();
  var dateMatch = clean.match(/(\d{2})[-.](\d{2})[-.](\d{2})/);
  if (!dateMatch) return null;
  var dateStr = dateMatch[0];
  var studio = clean.slice(0, dateMatch.index || 0).replace(/\.+$/, "").split(".").filter(Boolean).pop() || "";
  if (!studio) return null;
  return {
    type: "western_date",
    key: studio + "." + dateStr,
    searchText: studio,
    strictTarget: (studio + dateStr.replace(/\./g, "")).replace(/[^a-z0-9]/g, ""),
    displayTitle: studio + " " + dateStr
  };
}

function normalizeJavMatchToken(text) {
  return String(text || "").replace(/[^a-z0-9]/gi, "").toLowerCase();
}

function buildJavSearchTexts(number) {
  var raw = getText(number);
  var lower = raw.toLowerCase();
  var compact = normalizeJavMatchToken(raw);
  var texts = [];
  function add(value) {
    value = getText(value);
    if (!value || texts.indexOf(value) >= 0) return;
    texts.push(value);
  }
  add(lower);
  add(compact);
  add(raw.toUpperCase());
  return texts;
}

function filenameMatchesJavTarget(filename, target) {
  var fn = normalizeJavMatchToken(filename);
  return !!target && fn.indexOf(target) !== -1;
}

async function searchGuangyaFiles(token, matchKey) {
  if (matchKey.type !== "jav") {
    return await searchFiles(token, matchKey.searchText, 1, 50);
  }

  var searchTexts = buildJavSearchTexts(matchKey.key);
  for (var i = 0; i < searchTexts.length; i++) {
    var files = await searchFiles(token, searchTexts[i], 1, 50);
    if (files.length) return files;
  }
  return [];
}

async function expandMatchedFiles(token, files, matchKey, target) {
  var expanded = [];
  var seen = {};

  function push(file) {
    if (!file || !file.fileId || seen[file.fileId]) return;
    seen[file.fileId] = true;
    expanded.push(file);
  }

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (file.isDir) {
      var folderKey = normalizeJavMatchToken(file.filename);
      if (matchKey.type === "jav" && folderKey.indexOf(target) === -1 && target.indexOf(folderKey) === -1) {
        continue;
      }
      var children = await listFolder(token, file.fileId, 1, 100);
      for (var j = 0; j < children.length; j++) {
        if (children[j].isDir) continue;
        if (matchKey.type === "jav") {
          if (folderKey.indexOf(target) !== -1 || filenameMatchesJavTarget(children[j].filename, target)) {
            push(children[j]);
          }
        } else {
          push(children[j]);
        }
      }
      continue;
    }
    push(file);
  }

  return expanded;
}

function extractMatchKey(text) {
  var number = extractNumber(text);
  if (number) {
    return {
      type: "jav",
      key: number,
      searchText: number.toLowerCase()
    };
  }
  var western = extractWesternSceneKey(text);
  if (western) return western;
  var dateKey = extractWesternDateKey(text);
  if (dateKey) return dateKey;
  return null;
}

function scoreWesternFile(file) {
  var fn = String(file.filename || "").toLowerCase();
  var score = 0;
  if (fn.indexOf("trailer") !== -1 || fn.indexOf("sample") !== -1 || fn.indexOf("preview") !== -1) score -= 100;
  var size = Number(file.size || 0);
  if (size >= 2 * 1024 * 1024 * 1024) score += 30;
  else if (size >= 1024 * 1024 * 1024) score += 20;
  else if (size < 50 * 1024 * 1024) score -= 20;
  return score;
}

function displayTitleFromFile(filename) {
  var number = extractNumber(filename);
  if (number) return number;
  var name = String(filename || "").replace(/\.[^.]+$/, "");
  return name.length > 50 ? name.slice(0, 50) + "..." : name;
}

// ==================== 浏览项构建 ====================
function cacheFile(file) {
  if (file && file.fileId) {
    FILE_ID_MAP[file.fileId] = {
      fileId: file.fileId,
      filename: file.filename,
      size: file.size
    };
  }
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
      mediaType: "movie"
    };
  }
  var title = displayTitleFromFile(file.filename);
  return {
    id: file.fileId,
    type: "url",
    title: title,
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

// ==================== 入口 ====================
async function searchGuangyaJav(params) {
  try {
    var token = await ensureToken(params);
    var keyword = getText(params.keyword);
    if (!keyword) return [];

    var files = await searchFiles(token, keyword, params.page, 50);
    var items = [];
    for (var i = 0; i < files.length; i++) {
      if (files[i].isDir || isVideoFile(files[i].filename)) {
        items.push(buildBrowseItem(files[i]));
      }
    }
    return items;
  } catch (err) {
    console.error("[guangya-jav/search]", err && err.message || err);
    if (String(err && err.message || "").indexOf("refresh_token") !== -1) return needTokenItem();
    return [];
  }
}

async function loadFolder(params) {
  try {
    var token = await ensureToken(params);
    var parentId = getText(params.parentId);
    var files = await listFolder(token, parentId, params.page, 100);
    var items = [];
    for (var i = 0; i < files.length; i++) {
      if (files[i].isDir || isVideoFile(files[i].filename)) {
        items.push(buildBrowseItem(files[i]));
      }
    }
    return items;
  } catch (err) {
    console.error("[guangya-jav/folder]", err && err.message || err);
    if (String(err && err.message || "").indexOf("refresh_token") !== -1) return needTokenItem();
    return [];
  }
}

async function loadDetail(link) {
  var clean = String(link || "");
  if (clean.indexOf("guangyafolder://") === 0) {
    var parentId = clean.slice("guangyafolder://".length).split("?")[0];
    return await loadFolder({ parentId: parentId, page: 1, refresh_token: Widget.storage.get("guangya_refresh_token") });
  }
  if (clean.indexOf("guangyadetail://") === 0) {
    var fileId = clean.slice("guangyadetail://".length).split("?")[0];
    var cached = FILE_ID_MAP[fileId] || { fileId: fileId, filename: "光鸭视频" };
    return {
      id: fileId,
      type: "url",
      title: displayTitleFromFile(cached.filename),
      link: clean,
      description: cached.filename,
      mediaType: "movie"
    };
  }
  return null;
}

async function handleDirectFileResource(params, link) {
  var token = await ensureToken(params);
  var fileId = link.slice("guangyadetail://".length).split("?")[0];
  var cached = FILE_ID_MAP[fileId] || {};
  var file = {
    fileId: fileId,
    filename: cached.filename || params.title || params.name || "video.mp4",
    size: cached.size || 0
  };
  return await buildStreamSources(token, file);
}

async function loadResource(params) {
  var link = String(params && params.link || "");

  if (link.indexOf("guangyadetail://") === 0) {
    try {
      return await handleDirectFileResource(params, link);
    } catch (err) {
      console.error("[guangya-jav/direct]", err && err.message || err);
      return [];
    }
  }

  try {
    var token = await ensureToken(params);
    var texts = [];
    if (params.title) texts.push(params.title);
    if (params.name) texts.push(params.name);
    if (params.originalTitle) texts.push(params.originalTitle);
    if (params.id) texts.push(params.id);
    if (params.description) texts.push(params.description);
    if (params.episodeName) texts.push(params.episodeName);
    if (params.seriesName) texts.push(params.seriesName);
    if (params.link) texts.push(params.link);

    var matchKey = extractMatchKey(texts.join(" "));
    if (!matchKey) return [];

    var files = await searchGuangyaFiles(token, matchKey);
    if (!files.length) return [];

    var matched = [];
    if (matchKey.type === "jav") {
      var target = normalizeJavMatchToken(matchKey.key);
      for (var mi = 0; mi < files.length; mi++) {
        var file = files[mi];
        if (file.isDir) {
          if (
            normalizeJavMatchToken(file.filename).indexOf(target) !== -1 ||
            target.indexOf(normalizeJavMatchToken(file.filename)) !== -1
          ) {
            matched.push(file);
          }
          continue;
        }
        if (filenameMatchesJavTarget(file.filename, target)) matched.push(file);
      }
      matched = await expandMatchedFiles(token, matched, matchKey, target);
    } else {
      var strict = matchKey.strictTarget;
      for (var wi = 0; wi < files.length; wi++) {
        var wfn = String(files[wi].filename).replace(/[^a-z0-9]/gi, "").toLowerCase();
        if (wfn.indexOf(strict) !== -1) matched.push(files[wi]);
      }
      if (matchKey.type === "western_date" && matched.length > 1) {
        matched.sort(function (a, b) { return scoreWesternFile(b) - scoreWesternFile(a); });
        matched = matched.filter(function (f) { return scoreWesternFile(f) >= 0; });
        if (!matched.length) matched = [files[0]];
      }
    }

    if (!matched.length) return [];

    matched = sortFilesByQuality(matched);

    var streams = [];
    for (var si = 0; si < matched.length; si++) {
      if (!isVideoFile(matched[si].filename)) continue;
      var part = await buildStreamSources(token, matched[si]);
      if (part.length) streams = streams.concat(part);
      if (streams.length >= 3) break;
    }
    streams.sort(function (a, b) {
      return qualityRank(b && b.name) - qualityRank(a && a.name);
    });
    return streams;
  } catch (err) {
    console.error("[guangya-jav/stream]", err && err.message || err);
    return [];
  }
}

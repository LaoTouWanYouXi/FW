// ==================== 123云盘 番号模块 ====================
// 功能：
//   1. 按番号 / 欧美 Scene 关键词搜索 123 云盘文件
//   2. 作为 Stream Source，在番号详情页自动匹配网盘文件并直链播放
//   3. pan123detail:// 按 fileId 直接播放，pan123folder:// 浏览文件夹
//
// 授权（推荐账号密码）：
//   1. passport + password — 猫源 Web 协议登录（App-Version 43，优先）
//   2. author_token — 备用，浏览器 Local Storage 复制

WidgetMetadata = {
  id: "pan123.jav",
  title: "123云盘-番号",
  description: "按番号搜索 123 云盘，详情页自动匹配播放源",
  author: "老头",
  version: "1.4.0",
  requiredVersion: "0.0.1",
  site: "https://yun.123pan.com",
  detailCacheDuration: 300,

  globalParams: [
    {
      name: "passport",
      title: "123 云盘账号",
      type: "input",
      value: "",
      placeholder: "手机号或邮箱（推荐）"
    },
    {
      name: "password",
      title: "123 云盘密码",
      type: "input",
      value: "",
      placeholder: "登录密码"
    },
    {
      name: "author_token",
      title: "123 云盘 Author Token（备用）",
      type: "input",
      value: "",
      placeholder: "可选，账号密码失败时手动填入"
    }
  ],

  search: {
    title: "番号搜索",
    functionName: "searchPan123Jav",
    params: [
      { name: "keyword", title: "番号/关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  },

  modules: [
    {
      title: "浏览文件夹",
      description: "浏览 123 云盘文件夹",
      functionName: "loadFolder",
      cacheDuration: 300,
      params: [
        { name: "parentId", title: "目录 ID", type: "input", value: "0", placeholder: "0=根目录" },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "loadResource",
      title: "123云盘番号",
      description: "匹配 123 云盘番号文件",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 30,
      params: []
    }
  ]
};

console.log("[pan123-jav] version: " + WidgetMetadata.version);

// ==================== 常量 ====================
// 登录/刷新：优先猫源 Web 协议（App-Version 43，www 免签名）
// 文件操作：yun + Web 签名；失败时回退 www + Bearer
var PAN123_API = "https://yun.123pan.com";
var PAN123_WEB_API = "https://www.123pan.com";
var PAN123_ANDROID_API = "https://www.123pan.com";
var PAN123_SIGN_TABLE = "adeghlmyijnopkqrstubcvwssz";
var TIMEOUT = 15000;
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

var LOGIN_PATH = "/b/api/user/sign_in";
var REFRESH_PATH = "/b/api/user/refresh_token";
var CAT_APP_VERSION = "43";
var WEB43_LOGIN_REFERER = PAN123_WEB_API + "/login?redirect=" + encodeURIComponent(PAN123_WEB_API + "/");
var ANDROID_APP_VERSION = "61";
var ANDROID_X_APP_VERSION = "2.4.0";
var ANDROID_OS_VERSION = "Android_13";
var ANDROID_DEVICE_TYPE = "Mi 10";
var ANDROID_DEVICE_BRAND = "Xiaomi";
var ANDROID_CHANNEL = "1004";
var FILE_LIST = "/b/api/file/list/new";
var DOWNLOAD_INFO = "/b/api/file/download_info";

var VIDEO_EXTS = new Set([
  "mp4", "mkv", "avi", "wmv", "mov", "m4v",
  "ts", "flv", "rmvb", "webm", "3gp"
]);

var FILE_ID_MAP = {};

// ==================== 工具 ====================
function getText(v) {
  return String(v || "").trim();
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

function resolveAuthorToken(params) {
  return getText(params && params.author_token) || getText(Widget.storage.get("pan123_author_token"));
}

function resolvePassport(params) {
  return getText(params && params.passport) || getText(Widget.storage.get("pan123_passport"));
}

function resolvePassword(params) {
  return getText(params && params.password) || getText(Widget.storage.get("pan123_password"));
}

function isEmailFormat(text) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getText(text));
}

function randomHex(len) {
  var s = "";
  for (var i = 0; i < len; i++) {
    s += Math.floor(Math.random() * 16).toString(16);
  }
  return s;
}

function getLoginUuid() {
  var uuid = Widget.storage.get("pan123_login_uuid");
  if (!uuid) {
    uuid = randomHex(32);
    Widget.storage.set("pan123_login_uuid", uuid);
  }
  return uuid;
}

function b64urlDecode(str) {
  var s = String(str || "").replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return b64decode(s);
}

function decodeJwtExp(token) {
  try {
    var parts = String(token || "").split(".");
    if (parts.length < 2) return 0;
    var payload = JSON.parse(b64urlDecode(parts[1]));
    return Number(payload.exp || 0) * 1000;
  } catch (e) {
    return 0;
  }
}

function isAuthError(err) {
  var msg = String(err && err.message || err || "").toLowerCase();
  return msg.indexOf("401") !== -1 ||
    msg.indexOf("未登录") !== -1 ||
    msg.indexOf("未授权") !== -1 ||
    msg.indexOf("token") !== -1 ||
    msg.indexOf("登录") !== -1 ||
    msg.indexOf("授权") !== -1 ||
    msg.indexOf("author") !== -1;
}

function buildQuery(params) {
  var parts = [];
  for (var k in params) {
    if (params[k] !== undefined && params[k] !== null && params[k] !== "") {
      parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(String(params[k])));
    }
  }
  return parts.join("&");
}

function crc32IEEEBytes(bytes) {
  var crc = 0xffffffff;
  for (var i = 0; i < bytes.length; i++) {
    crc ^= bytes[i];
    for (var j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function crc32IEEEStr(str) {
  var bytes = [];
  for (var i = 0; i < str.length; i++) bytes.push(str.charCodeAt(i) & 0xff);
  return crc32IEEEBytes(bytes);
}

function pan123CstDigits() {
  var d = new Date(Date.now() + 8 * 3600 * 1000);
  var pad = function (n) { return n < 10 ? "0" + n : String(n); };
  return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) +
    pad(d.getUTCHours()) + pad(d.getUTCMinutes());
}

function signPan123Path(path, os, version) {
  var random = String(Math.round(Math.random() * 1e7));
  var timestamp = String(Math.floor(Date.now() / 1000));
  var digits = pan123CstDigits();
  var nowBytes = [];
  for (var i = 0; i < digits.length; i++) {
    nowBytes.push(PAN123_SIGN_TABLE.charCodeAt(parseInt(digits.charAt(i), 10)));
  }
  var timeSign = String(crc32IEEEBytes(nowBytes));
  var data = [timestamp, random, path, os, version, timeSign].join("|");
  var dataSign = String(crc32IEEEStr(data));
  return { key: timeSign, value: timestamp + "-" + random + "-" + dataSign };
}

function buildSignedUrl(base, apiPath, os, version) {
  var sign = signPan123Path(apiPath, os || "web", version || "3");
  return base + apiPath + "?" + sign.key + "=" + encodeURIComponent(sign.value);
}

function buildPan123ApiUrl(apiPath) {
  return buildSignedUrl(PAN123_API, apiPath, "web", "3");
}

function pan123Headers(token) {
  return {
    accept: "application/json, text/plain, */*",
    authorization: "Bearer " + token,
    "App-Version": "3",
    platform: "web",
    "content-type": "application/json;charset=UTF-8",
    origin: PAN123_API,
    referer: PAN123_API + "/",
    "user-agent": UA
  };
}

function parsePan123Data(resp) {
  var data = resp && resp.data;
  if (typeof data === "string") {
    try { data = JSON.parse(data); } catch (e) { throw new Error("JSON 解析失败"); }
  }
  if (!data) throw new Error("空响应");
  if (data.code === 401 || data.code === 401000) {
    throw new Error("401 登录已失效");
  }
  if (data.code !== 0) {
    throw new Error(data.message || data.msg || "API 错误 (" + data.code + ")");
  }
  return data;
}

function saveToken(token, passport, password) {
  Widget.storage.set("pan123_access_token", token);
  Widget.storage.set("pan123_author_token", token);
  if (passport) Widget.storage.set("pan123_passport", passport);
  if (password) Widget.storage.set("pan123_password", password);
  var expMs = decodeJwtExp(token);
  Widget.storage.set(
    "pan123_token_expires",
    String(expMs ? expMs - 300000 : Date.now() + 29 * 24 * 3600 * 1000)
  );
}

function web43Headers(token) {
  var headers = {
    accept: "application/json, text/plain, */*",
    "content-type": "application/json;charset=UTF-8",
    "App-Version": CAT_APP_VERSION,
    platform: "web",
    origin: PAN123_WEB_API,
    referer: PAN123_WEB_API + "/",
    "user-agent": UA
  };
  if (token) headers.authorization = "Bearer " + token;
  return headers;
}

function web43LoginHeaders() {
  return {
    accept: "application/json, text/plain, */*",
    "content-type": "application/json",
    "App-Version": CAT_APP_VERSION,
    Referer: WEB43_LOGIN_REFERER,
    "user-agent": UA
  };
}

function androidLoginHeaders(loginUuid, token) {
  var headers = {
    accept: "application/json, text/plain, */*",
    "content-type": "application/json",
    platform: "android",
    "app-version": ANDROID_APP_VERSION,
    "x-app-version": ANDROID_X_APP_VERSION,
    osversion: ANDROID_OS_VERSION,
    devicetype: ANDROID_DEVICE_TYPE,
    devicename: ANDROID_DEVICE_BRAND,
    "x-channel": ANDROID_CHANNEL,
    loginuuid: loginUuid,
    LoginUuid: loginUuid,
    "user-agent": "123pan/v" + ANDROID_X_APP_VERSION + "(" + ANDROID_OS_VERSION + ";" + ANDROID_DEVICE_BRAND + ")"
  };
  if (token) headers.authorization = "Bearer " + token;
  return headers;
}

function loginErrorFromCode(code, message) {
  if (code === 11000) {
    return "登录需验证码(11000)，请检查账号密码或改用 authorToken";
  }
  return message || "登录失败 (" + code + ")";
}

function extractLoginToken(data) {
  var token = "";
  if (data.data && data.data.token) token = data.data.token;
  else if (data.data && data.data.data && data.data.data.token) token = data.data.data.token;
  else if (data.token) token = data.token;
  token = getText(token);
  if (token.indexOf("Bearer ") === 0) token = token.slice(7);
  if (!token) throw new Error("登录响应缺少 token");
  return token;
}

function parseLoginData(resp) {
  var raw = resp && resp.data;
  if (typeof raw === "string") {
    if (raw.charAt(0) === "<" || /<!doctype/i.test(raw)) {
      throw new Error("登录返回 HTML 而非 JSON，接口可能已变更");
    }
    try { raw = JSON.parse(raw); } catch (e) { throw new Error("JSON 解析失败"); }
  }
  if (!raw) throw new Error("空响应");
  var code = Number(raw.code);
  if (code !== 0 && code !== 200) {
    throw new Error(loginErrorFromCode(code, raw.message || raw.msg));
  }
  return raw;
}

async function postWeb43Login(passport, password) {
  var body = { passport: passport, password: password, remember: true };
  var resp = await Widget.http.post(PAN123_WEB_API + LOGIN_PATH, body, {
    headers: web43LoginHeaders(),
    timeout: TIMEOUT
  });
  return parseLoginData(resp);
}

async function loginWithWeb43(passport, password) {
  var data = await postWeb43Login(passport, password);
  var token = extractLoginToken(data);
  saveToken(token, passport, password);
  console.log("[pan123-jav] login ok via web43");
  return token;
}

async function postAndroidLogin(url, body, loginUuid) {
  var resp = await Widget.http.post(url, body, {
    headers: androidLoginHeaders(loginUuid, ""),
    timeout: TIMEOUT
  });
  return parseLoginData(resp);
}

function buildLoginBody(passport, password) {
  return isEmailFormat(passport)
    ? { mail: passport, password: password, type: 2 }
    : { passport: passport, password: password, type: 1 };
}

async function loginWithAndroid(passport, password) {
  var loginUuid = getLoginUuid();
  var body = buildLoginBody(passport, password);
  var attempts = [
    { label: "android-www", url: PAN123_ANDROID_API + LOGIN_PATH },
    { label: "android-yun", url: PAN123_API + LOGIN_PATH },
    { label: "android-yun-signed", url: buildSignedUrl(PAN123_API, LOGIN_PATH, "android", ANDROID_APP_VERSION) },
    { label: "android-yun-web-sign", url: buildSignedUrl(PAN123_API, LOGIN_PATH, "web", "3") }
  ];
  var errors = [];
  for (var i = 0; i < attempts.length; i++) {
    try {
      var data = await postAndroidLogin(attempts[i].url, body, loginUuid);
      var token = extractLoginToken(data);
      saveToken(token, passport, password);
      console.log("[pan123-jav] login ok via " + attempts[i].label);
      return token;
    } catch (err) {
      var msg = "[" + attempts[i].label + "] " + String(err && err.message || err || "");
      errors.push(msg);
      console.error("[pan123-jav/login]", msg);
    }
  }
  throw new Error(errors.join(" | "));
}

async function refreshAccessToken(oldToken) {
  if (!oldToken) throw new Error("无可用 token 刷新");
  var loginUuid = getLoginUuid();
  var attempts = [
    PAN123_ANDROID_API + REFRESH_PATH,
    PAN123_API + REFRESH_PATH,
    buildSignedUrl(PAN123_API, REFRESH_PATH, "android", ANDROID_APP_VERSION)
  ];
  var errors = [];
  for (var i = 0; i < attempts.length; i++) {
    try {
      var resp = await Widget.http.post(attempts[i], {}, {
        headers: androidLoginHeaders(loginUuid, oldToken),
        timeout: TIMEOUT
      });
      var data = parseLoginData(resp);
      var token = extractLoginToken(data);
      saveToken(token);
      return token;
    } catch (err) {
      errors.push(String(err && err.message || err || ""));
    }
  }
  throw new Error(errors[errors.length - 1] || "token 刷新失败");
}

async function loginWithPassword(passport, password) {
  var errors = [];
  try {
    return await loginWithWeb43(passport, password);
  } catch (err) {
    errors.push("[web43] " + String(err && err.message || err || ""));
    console.error("[pan123-jav/login]", errors[errors.length - 1]);
  }
  try {
    return await loginWithAndroid(passport, password);
  } catch (err2) {
    errors.push("[android] " + String(err2 && err2.message || err2 || ""));
    throw new Error(errors.join(" | "));
  }
}

async function ensureToken(params, forceRefresh) {
  var passport = resolvePassport(params);
  var password = resolvePassword(params);
  var authorToken = resolveAuthorToken(params);
  var cached = Widget.storage.get("pan123_access_token");
  var expires = Number(Widget.storage.get("pan123_token_expires") || 0);
  var hasPassword = !!(passport && password);
  var storedPassport = Widget.storage.get("pan123_passport");
  var storedPassword = Widget.storage.get("pan123_password");
  if (!hasPassword && storedPassport && storedPassword) {
    passport = storedPassport;
    password = storedPassword;
    hasPassword = true;
  }

  if (passport && password) {
    Widget.storage.set("pan123_passport", passport);
    Widget.storage.set("pan123_password", password);
  }
  if (authorToken) Widget.storage.set("pan123_author_token", authorToken);

  // 有账号密码时优先直接 Android 登录，不走旧 token 刷新（避免先碰 Web/旧 token）
  if (hasPassword && (forceRefresh || !cached || !expires || Date.now() >= expires)) {
    return await loginWithPassword(passport, password);
  }

  if (!forceRefresh && cached && expires && Date.now() < expires) {
    return cached;
  }

  if (hasPassword) {
    return await loginWithPassword(passport, password);
  }

  if (cached) {
    try {
      return await refreshAccessToken(cached);
    } catch (e) {}
  }

  if (authorToken) {
    Widget.storage.set("pan123_access_token", authorToken);
    return authorToken;
  }
  if (cached) return cached;
  throw new Error("请填写账号密码或 authorToken");
}

async function pan123GetAndroid(apiPath, token, query) {
  var url = PAN123_ANDROID_API + apiPath;
  var qs = buildQuery(query || {});
  if (qs) url += "?" + qs;
  var loginUuid = getLoginUuid();
  var resp = await Widget.http.get(url, {
    headers: androidLoginHeaders(loginUuid, token),
    timeout: TIMEOUT
  });
  return parsePan123Data(resp);
}

async function pan123PostAndroid(apiPath, token, body) {
  var url = PAN123_ANDROID_API + apiPath;
  var loginUuid = getLoginUuid();
  var resp = await Widget.http.post(url, body || {}, {
    headers: androidLoginHeaders(loginUuid, token),
    timeout: TIMEOUT
  });
  return parsePan123Data(resp);
}

async function pan123GetWww(apiPath, token, query) {
  var url = PAN123_WEB_API + apiPath;
  var qs = buildQuery(query || {});
  if (qs) url += "?" + qs;
  var resp = await Widget.http.get(url, {
    headers: web43Headers(token),
    timeout: TIMEOUT
  });
  return parsePan123Data(resp);
}

async function pan123PostWww(apiPath, token, body) {
  var url = PAN123_WEB_API + apiPath;
  var resp = await Widget.http.post(url, body || {}, {
    headers: web43Headers(token),
    timeout: TIMEOUT
  });
  return parsePan123Data(resp);
}

async function pan123Get(apiPath, params, query, forceRefresh) {
  var token = await ensureToken(params, forceRefresh);
  var errors = [];
  try {
    var url = buildPan123ApiUrl(apiPath);
    var qs = buildQuery(query || {});
    if (qs) url += "&" + qs;
    var resp = await Widget.http.get(url, { headers: pan123Headers(token), timeout: TIMEOUT });
    return parsePan123Data(resp);
  } catch (err) {
    var msg = String(err && err.message || err || "");
    if (msg.indexOf("HTML") !== -1) errors.push(msg);
    else errors.push(msg);
  }
  try {
    return await pan123GetWww(apiPath, token, query);
  } catch (err2) {
    errors.push(String(err2 && err2.message || err2 || ""));
  }
  try {
    return await pan123GetAndroid(apiPath, token, query);
  } catch (err3) {
    errors.push(String(err3 && err3.message || err3 || ""));
    throw new Error(errors.join(" | "));
  }
}

async function pan123Post(apiPath, params, body, forceRefresh) {
  var token = await ensureToken(params, forceRefresh);
  var errors = [];
  try {
    var url = buildPan123ApiUrl(apiPath);
    var resp = await Widget.http.post(url, body || {}, { headers: pan123Headers(token), timeout: TIMEOUT });
    return parsePan123Data(resp);
  } catch (err) {
    var msg = String(err && err.message || err || "");
    if (msg.indexOf("HTML") !== -1) errors.push(msg);
    else errors.push(msg);
  }
  try {
    return await pan123PostWww(apiPath, token, body);
  } catch (err2) {
    errors.push(String(err2 && err2.message || err2 || ""));
  }
  try {
    return await pan123PostAndroid(apiPath, token, body);
  } catch (err3) {
    errors.push(String(err3 && err3.message || err3 || ""));
    throw new Error(errors.join(" | "));
  }
}

async function pan123Request(method, apiPath, params, payload, query) {
  try {
    if (method === "GET") {
      return await pan123Get(apiPath, params, query, false);
    }
    return await pan123Post(apiPath, params, payload, false);
  } catch (err) {
    if (!isAuthError(err)) throw err;
    if (method === "GET") {
      return await pan123Get(apiPath, params, query, true);
    }
    return await pan123Post(apiPath, params, payload, true);
  }
}

function normalizeFile(item) {
  return {
    fileId: String(item.FileId != null ? item.FileId : (item.fileId || item.id || "")),
    filename: item.FileName || item.fileName || item.name || "",
    size: Number(item.Size != null ? item.Size : (item.size || 0)),
    isDir: Number(item.Type != null ? item.Type : item.type) === 1,
    parentId: String(item.ParentFileId != null ? item.ParentFileId : (item.parentId || "")),
    etag: item.Etag || item.etag || "",
    s3KeyFlag: item.S3KeyFlag || item.s3KeyFlag || "",
    type: Number(item.Type != null ? item.Type : (item.type || 0))
  };
}

function b64decode(str) {
  if (typeof atob === "function") return atob(str);
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  str = String(str || "").replace(/[^A-Za-z0-9+/=]/g, "");
  for (var i = 0; i < str.length; i += 4) {
    var enc1 = chars.indexOf(str.charAt(i));
    var enc2 = chars.indexOf(str.charAt(i + 1));
    var enc3 = chars.indexOf(str.charAt(i + 2));
    var enc4 = chars.indexOf(str.charAt(i + 3));
    var chr1 = (enc1 << 2) | (enc2 >> 4);
    var chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    var chr3 = ((enc3 & 3) << 6) | enc4;
    output += String.fromCharCode(chr1);
    if (enc3 !== 64) output += String.fromCharCode(chr2);
    if (enc4 !== 64) output += String.fromCharCode(chr3);
  }
  return output;
}

function extractRedirectUrl(resp) {
  if (!resp) return "";
  var status = Number(resp.status || resp.statusCode || 0);
  var headers = resp.headers || {};
  if (status === 302 || status === 301) {
    return headers.location || headers.Location || "";
  }
  var body = resp.data;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = null; }
  }
  if (body && body.data && body.data.redirect_url) return body.data.redirect_url;
  return "";
}

async function resolveDownloadUrl(rawUrl) {
  var url = String(rawUrl || "");
  if (!url) return "";

  var qIndex = url.indexOf("?");
  if (qIndex !== -1) {
    var query = url.slice(qIndex + 1);
    var parts = query.split("&");
    for (var i = 0; i < parts.length; i++) {
      var kv = parts[i].split("=");
      if (decodeURIComponent(kv[0] || "") === "params" && kv[1]) {
        try {
          var decoded = b64decode(decodeURIComponent(kv.slice(1).join("=")));
          if (decoded.indexOf("http") === 0) url = decoded;
        } catch (e) {}
        break;
      }
    }
  }

  try {
    var resp = await Widget.http.get(url, {
      headers: { Referer: PAN123_API + "/", "User-Agent": UA },
      timeout: TIMEOUT,
      allow_redirects: false
    });
    var redirect = extractRedirectUrl(resp);
    if (redirect) return redirect;
  } catch (e) {}

  return url;
}

// ==================== 文件 API ====================
async function searchFiles(params, keyword, page, pageSize) {
  var data = await pan123Request("GET", FILE_LIST, params, null, {
    driveId: "0",
    limit: String(pageSize || 100),
    next: "0",
    orderBy: "file_id",
    orderDirection: "desc",
    parentFileId: "0",
    trashed: "false",
    SearchData: keyword,
    Page: String(Math.max(1, page || 1)),
    OnlyLookAbnormalFile: "0",
    event: "homeListFile",
    operateType: "2",
    inDirectSpace: "false"
  });
  var list = (data.data && data.data.InfoList) || [];
  return list.map(normalizeFile).filter(function (f) { return f.fileId; });
}

async function listFolder(params, parentId, page, pageSize) {
  var data = await pan123Request("GET", FILE_LIST, params, null, {
    driveId: "0",
    limit: String(pageSize || 100),
    next: "0",
    orderBy: "file_id",
    orderDirection: "desc",
    parentFileId: parentId || "0",
    trashed: "false",
    SearchData: "",
    Page: String(Math.max(1, page || 1)),
    OnlyLookAbnormalFile: "0",
    event: "homeListFile",
    operateType: "4",
    inDirectSpace: "false"
  });
  var list = (data.data && data.data.InfoList) || [];
  return list.map(normalizeFile).filter(function (f) { return f.fileId; });
}

async function getDownloadUrl(params, file) {
  var data = await pan123Request("POST", DOWNLOAD_INFO, params, {
    driveId: 0,
    etag: file.etag,
    fileId: Number(file.fileId),
    fileName: file.filename,
    s3keyFlag: file.s3KeyFlag,
    size: file.size,
    type: file.type
  });
  var raw = (data.data && (data.data.DownloadUrl || data.data.downloadUrl)) || "";
  return await resolveDownloadUrl(raw);
}

function guessQualityLabel(filename) {
  var fn = String(filename || "").toLowerCase();
  if (fn.indexOf("2160") !== -1 || fn.indexOf("4k") !== -1) return "4K";
  if (fn.indexOf("1080") !== -1) return "1080P";
  if (fn.indexOf("720") !== -1) return "720P";
  return "";
}

async function buildStreamSources(params, file) {
  if (!file || !file.fileId || !isVideoFile(file.filename)) return [];
  var url = await getDownloadUrl(params, file);
  if (!url) return [];

  var label = guessQualityLabel(file.filename);
  var number = extractNumber(file.filename);
  return [{
    name: "123云盘" + (label ? " (" + label + ")" : ""),
    description: (number ? "番号: " + number + "\n" : "") +
      "文件: " + file.filename +
      (file.size ? "\n大小: " + formatSize(file.size) : ""),
    url: url,
    customHeaders: { Referer: PAN123_API + "/", "User-Agent": UA }
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

async function searchPan123Files(params, matchKey) {
  if (matchKey.type !== "jav") {
    return await searchFiles(params, matchKey.searchText, 1, 100);
  }

  var searchTexts = buildJavSearchTexts(matchKey.key);
  for (var i = 0; i < searchTexts.length; i++) {
    var files = await searchFiles(params, searchTexts[i], 1, 100);
    if (files.length) return files;
  }
  return [];
}

async function expandMatchedFiles(params, files, matchKey, target) {
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
      var children = await listFolder(params, file.fileId, 1, 100);
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
      size: file.size,
      etag: file.etag,
      s3KeyFlag: file.s3KeyFlag,
      type: file.type
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
      link: "pan123folder://" + file.fileId,
      description: "文件夹",
      mediaType: "movie"
    };
  }
  var title = displayTitleFromFile(file.filename);
  return {
    id: file.fileId,
    type: "url",
    title: title,
    link: "pan123detail://" + file.fileId,
    description: formatSize(file.size),
    mediaType: "movie"
  };
}

function needTokenItem() {
  return [{
    id: "no-token",
    type: "url",
    title: "需要 123 云盘登录信息",
    description: "请填写账号密码，或填入 authorToken",
    mediaType: "movie",
    link: ""
  }];
}

function isMissingAuthError(err) {
  var msg = String(err && err.message || err || "");
  return msg.indexOf("authorToken") !== -1 ||
    msg.indexOf("Author Token") !== -1 ||
    msg.indexOf("11000") !== -1 ||
    msg.indexOf("验证码") !== -1 ||
    msg.indexOf("账号密码") !== -1 ||
    msg.indexOf("401") !== -1;
}

// ==================== 入口 ====================
async function searchPan123Jav(params) {
  try {
    await ensureToken(params);
    var keyword = getText(params.keyword);
    if (!keyword) return [];

    var files = await searchFiles(params, keyword, params.page, 100);
    var items = [];
    for (var i = 0; i < files.length; i++) {
      if (files[i].isDir || isVideoFile(files[i].filename)) {
        items.push(buildBrowseItem(files[i]));
      }
    }
    return items;
  } catch (err) {
    console.error("[pan123-jav/search]", err && err.message || err);
    if (isMissingAuthError(err)) return needTokenItem();
    return [];
  }
}

async function loadFolder(params) {
  try {
    await ensureToken(params);
    var parentId = getText(params.parentId) || "0";
    var files = await listFolder(params, parentId, params.page, 100);
    var items = [];
    for (var i = 0; i < files.length; i++) {
      if (files[i].isDir || isVideoFile(files[i].filename)) {
        items.push(buildBrowseItem(files[i]));
      }
    }
    return items;
  } catch (err) {
    console.error("[pan123-jav/folder]", err && err.message || err);
    if (isMissingAuthError(err)) return needTokenItem();
    return [];
  }
}

async function loadDetail(link) {
  var clean = String(link || "");
  if (clean.indexOf("pan123folder://") === 0) {
    var parentId = clean.slice("pan123folder://".length).split("?")[0];
    return await loadFolder({
      parentId: parentId,
      page: 1,
      passport: Widget.storage.get("pan123_passport"),
      password: Widget.storage.get("pan123_password"),
      author_token: Widget.storage.get("pan123_author_token")
    });
  }
  if (clean.indexOf("pan123detail://") === 0) {
    var fileId = clean.slice("pan123detail://".length).split("?")[0];
    var cached = FILE_ID_MAP[fileId] || { fileId: fileId, filename: "123云盘视频" };
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
  await ensureToken(params);
  var fileId = link.slice("pan123detail://".length).split("?")[0];
  var cached = FILE_ID_MAP[fileId] || {};
  var file = {
    fileId: fileId,
    filename: cached.filename || params.title || params.name || "video.mp4",
    size: cached.size || 0,
    etag: cached.etag || "",
    s3KeyFlag: cached.s3KeyFlag || "",
    type: cached.type || 0
  };
  return await buildStreamSources(params, file);
}

async function loadResource(params) {
  var link = String(params && params.link || "");

  if (link.indexOf("pan123detail://") === 0) {
    try {
      return await handleDirectFileResource(params, link);
    } catch (err) {
      console.error("[pan123-jav/direct]", err && err.message || err);
      return [];
    }
  }

  try {
    await ensureToken(params);
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

    var files = await searchPan123Files(params, matchKey);
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
      matched = await expandMatchedFiles(params, matched, matchKey, target);
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

    var streams = [];
    for (var si = 0; si < matched.length; si++) {
      if (!isVideoFile(matched[si].filename)) continue;
      var part = await buildStreamSources(params, matched[si]);
      if (part.length) streams = streams.concat(part);
      if (streams.length >= 3) break;
    }
    return streams;
  } catch (err) {
    console.error("[pan123-jav/stream]", err && err.message || err);
    return [];
  }
}

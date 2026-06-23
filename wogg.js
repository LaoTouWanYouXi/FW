WidgetMetadata = {
  id: "forward.wogg",
  title: "玩偶哥哥",
  version: "3.4.0",
  requiredVersion: "0.0.1",
  description: "玩偶哥哥视频模块，支持分类浏览、搜索、夸克网盘转存与播放",
  author: "wogg",
  site: "https://www.wogg.net",
  detailCacheDuration: 60,
  globalParams: [
    {
      name: "cookies",
      title: "夸克网盘Cookies",
      type: "input",
      description: "登录 pan.quark.cn → F12 → Network → 任意请求 → Headers → Cookie 字段值，完整复制粘贴到此处",
      value: "",
      placeholders: [
        { title: "获取方式", value: "" },
        { title: "1. 浏览器登录 pan.quark.cn", value: "" },
        { title: "2. F12打开开发者工具 → Network", value: "" },
        { title: "3. 点击任意请求 → Headers → Cookie", value: "" },
        { title: "4. 复制完整Cookie值粘贴到此处", value: "" }
      ]
    },
    {
      name: "autoClean",
      title: "自动清理(小时)",
      type: "enumeration",
      description: "转存到网盘的视频文件会在设定时间后自动删除",
      value: "24",
      enumOptions: [
        { title: "12小时", value: "12" },
        { title: "24小时", value: "24" },
        { title: "48小时", value: "48" },
        { title: "不清理", value: "0" }
      ]
    }
  ],
  modules: [
    {
      id: "loadResource",
      title: "加载资源",
      functionName: "loadResource",
      type: "stream",
      params: []
    },
    {
      id: "loadMovie",
      title: "电影",
      functionName: "loadList",
      cacheDuration: 3600,
      params: [
        { name: "categoryId", title: "分类ID", type: "constant", value: "1" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "loadTv",
      title: "剧集",
      functionName: "loadList",
      cacheDuration: 3600,
      params: [
        { name: "categoryId", title: "分类ID", type: "constant", value: "2" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "loadZhencai",
      title: "臻彩视界",
      functionName: "loadList",
      cacheDuration: 3600,
      params: [
        { name: "categoryId", title: "分类ID", type: "constant", value: "44" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "loadAnime",
      title: "动漫",
      functionName: "loadList",
      cacheDuration: 3600,
      params: [
        { name: "categoryId", title: "分类ID", type: "constant", value: "3" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "loadVariety",
      title: "综艺",
      functionName: "loadList",
      cacheDuration: 3600,
      params: [
        { name: "categoryId", title: "分类ID", type: "constant", value: "4" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "loadShort",
      title: "短剧",
      functionName: "loadList",
      cacheDuration: 3600,
      params: [
        { name: "categoryId", title: "分类ID", type: "constant", value: "6" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "loadMusic",
      title: "音乐",
      functionName: "loadList",
      cacheDuration: 3600,
      params: [
        { name: "categoryId", title: "分类ID", type: "constant", value: "5" },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ],
  search: {
    title: "搜索",
    functionName: "search",
    params: [
      { name: "keyword", title: "关键词", type: "input" },
      { name: "page", title: "页码", type: "page" }
    ]
  }
};

// ==================== 常量 ====================

const BASE_URL = "https://www.wogg.net";
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_2 like Mac OS X) AppleWebKit/604.1.14 (KHTML, like Gecko)";
// 分享/文件 API 使用 drive-pc.quark.cn（2025+ 标准接口）
const QUARK_SHARE_BASE = "https://drive-pc.quark.cn/1/clouddrive";
const QUARK_DRIVE_BASE = "https://drive-pc.quark.cn/1/clouddrive";
const QUARK_SAVE_BASE = "https://drive.quark.cn/1/clouddrive";
const QUARK_PAN_ORIGIN = "https://pan.quark.cn";

// ==================== 工具函数 ====================

function safeText(str) {
  return (str || "").replace(/\s+/g, " ").trim();
}

function resolveUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function normalizeDetailLink(link) {
  return resolveUrl(String(link || "").trim());
}

function isDetailPageId(value) {
  const raw = String(value || "").trim();
  if (!raw) return false;
  return /\.html(\?.*)?$/i.test(raw) || /^https?:\/\//i.test(raw) || raw.indexOf("/vod") >= 0;
}

function resolveActiveDetailLink(params) {
  const candidates = [
    params && params.link,
    params && isDetailPageId(params.id) ? params.id : "",
    Widget.storage.get("wogg_current_link")
  ];
  for (const candidate of candidates) {
    const normalized = normalizeDetailLink(candidate);
    if (normalized) return normalized;
  }
  return "";
}

function isQuarkFileSelectionId(selectedId, files) {
  const raw = String(selectedId || "").trim();
  if (!raw || isDetailPageId(raw)) return false;
  if (raw.includes(":")) return true;
  if (/^[a-f0-9]{32}$/i.test(raw)) return true;
  if (files && files.some((file) => file.shareId === raw || file.fid === raw)) return true;
  return false;
}

function persistDetailContext(params) {
  const detailLink = resolveActiveDetailLink(params || {});
  if (detailLink) {
    Widget.storage.set("wogg_current_link", detailLink);
  }
}

function addQuarkTrack(tracks, seenShareIds, info) {
  const parsed = parseQuarkShareUrl(info.panUrl);
  if (!parsed || seenShareIds.has(parsed.shareId)) return;
  seenShareIds.add(parsed.shareId);
  tracks.push({
    name: info.name || `分享${tracks.length + 1}`,
    panUrl: info.panUrl.trim(),
    shareId: parsed.shareId,
    sharePwd: parsed.sharePwd,
    type: "quark"
  });
}

function extractQuarkCandidatesFromRow($, $row) {
  const candidates = [];
  const name = safeText($row.find(".module-row-title h4").first().text()).replace(" - 玩偶哥哥", "").trim() ||
    safeText($row.find("h4").first().text()).replace(" - 玩偶哥哥", "").trim() ||
    "默认";

  const rawValues = [
    $row.find(".module-row-title p").first().text(),
    $row.find("p").first().text(),
    $row.attr("data-clipboard-text") || "",
    $row.find("[data-clipboard-text]").first().attr("data-clipboard-text") || "",
    $row.find("a.btn-down, a.fzlj").first().attr("href") || "",
    $row.find("a.report").first().attr("onclick") || ""
  ];

  for (const raw of rawValues) {
    const text = safeText(raw);
    if (!text) continue;
    const match = text.match(/https?:\/\/pan\.quark\.cn\/s\/[^\s'"<>]+/);
    if (match) candidates.push({ name, panUrl: match[0] });
  }
  return candidates;
}

function getHeaders() {
  return {
    "User-Agent": UA,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Referer": BASE_URL + "/"
  };
}

// ==================== 夸克网盘 API ====================

/**
 * 获取用户设置的夸克 cookies
 */
function getQuarkCookies(params) {
  return (params && params.cookies) || Widget.storage.get("wogg_quark_cookies") || "";
}

/**
 * 保存夸克 cookies 到本地存储
 */
function saveQuarkCookies(cookies) {
  if (cookies) Widget.storage.set("wogg_quark_cookies", cookies);
}

/**
 * 构建夸克 API 请求头
 */
function buildQuarkHeaders(cookies) {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Origin": QUARK_PAN_ORIGIN,
    "Referer": QUARK_PAN_ORIGIN + "/",
    "Cookie": cookies
  };
}

function buildQuarkGetHeaders(cookies) {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Origin": QUARK_PAN_ORIGIN,
    "Referer": QUARK_PAN_ORIGIN + "/",
    "Cookie": cookies
  };
}

function quarkQuery(extra) {
  const base = {
    pr: "ucpro",
    fr: "pc",
    uc_param_str: "",
    __dt: String(Math.floor(Math.random() * 9000 + 100)),
    __t: String(Date.now())
  };
  if (!extra) return base;
  return Object.assign(base, extra);
}

function appendQuery(url, params) {
  const query = Object.keys(params || {})
    .filter((k) => params[k] !== undefined && params[k] !== null && params[k] !== "")
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");
  if (!query) return url;
  return url.includes("?") ? `${url}&${query}` : `${url}?${query}`;
}

/**
 * 安全的夸克 API POST 请求
 * Widget.http 在非2xx时会抛异常，此函数尝试从异常中提取响应数据
 * 若能提取到有效 JSON 响应，则返回该数据（让调用方检查 data.status）
 * 否则抛出包含接口名的错误
 */
async function quarkPost(url, body, headers, queryParams) {
  const fullUrl = appendQuery(url, quarkQuery(queryParams));
  try {
    const res = await Widget.http.post(fullUrl, JSON.stringify(body), { headers });
    return res.data;
  } catch (e) {
    // 尝试从异常中提取响应数据（Widget.http 非2xx时可能将响应挂在 error 上）
    const errData = (e && e.response && e.response.data) || (e && e.data);
    if (errData && typeof errData === "object" && errData.status !== undefined) {
      return errData;
    }
    // 尝试从错误消息中解析 JSON 响应体
    const msg = e.message || String(e);
    try {
      const jsonMatch = msg.match(/\{[\s\S]*"status"[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        if (parsed && parsed.status !== undefined) return parsed;
      }
    } catch (parseErr) {}
    const apiName = url.replace(/.*\/clouddrive\//, "").replace(/\?.*/, "");
    throw new Error(`[${apiName}] ${msg}`);
  }
}

/**
 * 安全的夸克 API GET 请求（手动拼 URL 查询参数）
 * Widget.http 的 params 选项可能不可靠，手动拼接更稳妥
 * 非2xx时尝试从异常中提取响应数据
 */
async function quarkGet(url, params, headers) {
  const merged = quarkQuery(params || {});
  const query = Object.keys(merged)
    .filter(k => merged[k] !== undefined && merged[k] !== null)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(merged[k])}`)
    .join("&");
  const fullUrl = query ? `${url}?${query}` : url;

  try {
    const res = await Widget.http.get(fullUrl, { headers });
    return res.data;
  } catch (e) {
    // 尝试从异常中提取响应数据
    const errData = (e && e.response && e.response.data) || (e && e.data);
    if (errData && typeof errData === "object" && errData.status !== undefined) {
      return errData;
    }
    const msg = e.message || String(e);
    try {
      const jsonMatch = msg.match(/\{[\s\S]*"status"[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        if (parsed && parsed.status !== undefined) return parsed;
      }
    } catch (parseErr) {}
    const apiName = url.replace(/.*\/clouddrive\//, "").replace(/\?.*/, "");
    throw new Error(`[${apiName}] ${msg}`);
  }
}

/**
 * 解析夸克分享链接
 * 支持格式：
 *   https://pan.quark.cn/s/xxxxx            (无密码)
 *   https://pan.quark.cn/s/xxxxx?pwd=yyyy   (密码在参数中)
 *   提取码: yyyy                             (密码在文本中)
 */
function parseQuarkShareUrl(shareUrl) {
  if (!shareUrl) return null;

  let url = shareUrl.trim();

  // 提取分享 ID
  const idMatch = url.match(/pan\.quark\.cn\/s\/([a-zA-Z0-9]+)/);
  if (!idMatch) return null;
  const shareId = idMatch[1];

  // 提取密码
  let sharePwd = "";
  const pwdMatch = url.match(/[?&]pwd=([a-zA-Z0-9]+)/);
  if (pwdMatch) sharePwd = pwdMatch[1];
  // 也尝试从文本 "提取码: xxx" 格式获取
  const codeMatch = url.match(/(?:提取码|密码|口令)[：:\s]*([a-zA-Z0-9]{4})/);
  if (codeMatch) sharePwd = codeMatch[1];

  return { shareId, sharePwd };
}

/**
 * 获取夸克分享的 stoken（访问令牌）
 * @param {string} cookies - 夸克网盘 cookies
 * @param {string} shareId - 分享 ID
 * @param {string} sharePwd - 分享密码（可为空）
 * @returns {object} { stoken, shareInfo }
 */
async function getQuarkShareToken(cookies, pwdId, passcode) {
  const headers = buildQuarkHeaders(cookies);
  const body = {
    pwd_id: pwdId,
    passcode: passcode || ""
  };

  const data = await quarkPost(`${QUARK_SHARE_BASE}/share/sharepage/token`, body, headers);

  if (!data || data.status !== 200 || !data.data || !data.data.stoken) {
    const errMsg = (data && data.message) || "获取分享令牌失败";
    const errCode = data && data.code;
    if (errCode === 41006 || (data && data.status === 404)) {
      throw new Error(`分享链接已失效或不存在: ${errMsg}`);
    }
    throw new Error(errMsg);
  }

  return {
    stoken: data.data.stoken,
    shareInfo: data.data
  };
}

async function getQuarkShareFileList(cookies, pwdId, stoken, pdirFid, page, size, passcode) {
  const headers = buildQuarkGetHeaders(cookies);

  const data = await quarkGet(`${QUARK_SHARE_BASE}/share/sharepage/detail`, {
    pwd_id: pwdId,
    stoken: stoken,
    pdir_fid: pdirFid || "0",
    force: "0",
    _page: String(page || 1),
    _size: String(size || 200),
    _fetch_total: "1",
    _sort: "file_type:asc,updated_at:desc"
  }, headers);

  if (!data || data.status !== 200) {
    throw new Error((data && data.message) || "获取分享文件列表失败");
  }

  return {
    list: (data.data && data.data.list) || [],
    metadata: data.metadata || {}
  };
}

function extractSavedFidFromTask(taskData) {
  const saveAs = taskData && taskData.data && taskData.data.save_as;
  if (!saveAs) return null;
  if (saveAs.save_as_top_fids && saveAs.save_as_top_fids.length > 0) {
    return saveAs.save_as_top_fids[0];
  }
  if (saveAs.fid_list && saveAs.fid_list.length > 0) {
    return saveAs.fid_list[0];
  }
  if (saveAs.fid) return saveAs.fid;
  return null;
}

async function pollQuarkTask(cookies, taskId, maxRetry) {
  const headers = buildQuarkGetHeaders(cookies);
  const retries = maxRetry || 30;

  for (let i = 0; i < retries; i++) {
    const data = await quarkGet(`${QUARK_DRIVE_BASE}/task`, {
      task_id: taskId,
      retry_index: String(i)
    }, headers);

    if (data && data.status === 200 && data.data) {
      if (data.data.status === 2) return data;
      if (data.data.status === 3) {
        throw new Error((data.data && data.data.task_title) || "转存任务失败");
      }
    }

    if (data && data.code && data.code !== 0 && data.message && data.message !== "ok") {
      throw new Error(data.message);
    }
  }

  throw new Error("转存任务超时，请稍后重试");
}

/**
 * 确保夸克网盘中存在 wogg_temp 临时文件夹，返回其 fid
 * @param {string} cookies - 夸克网盘 cookies
 * @returns {string} 临时文件夹 fid
 */
async function ensureQuarkTempFolder(cookies) {
  const getHeaders = buildQuarkGetHeaders(cookies);

  // 尝试从缓存获取
  const cachedFid = Widget.storage.get("wogg_quark_folder_fid");
  if (cachedFid) {
    try {
      const infoData = await quarkGet(`${QUARK_DRIVE_BASE}/file/info`, { fr: "pc", fid: cachedFid }, getHeaders);
      if (infoData && infoData.status === 200 && infoData.data && infoData.data.name === "wogg_temp") {
        return cachedFid;
      }
    } catch (e) {
      // 验证失败，重新查找
    }
  }

  // 查找根目录下是否已有 wogg_temp
  try {
    const listData = await quarkGet(`${QUARK_DRIVE_BASE}/file/sort`, {
      pdir_fid: "0",
      _page: "1",
      _size: "200",
      _fetch_total: "0",
      _sort: "file_type:asc,updated_at:desc"
    }, getHeaders);

    if (listData && listData.status === 200 && listData.data && listData.data.list) {
      for (const item of listData.data.list) {
        if (item.file_name === "wogg_temp" && item.dir === true) {
          Widget.storage.set("wogg_quark_folder_fid", item.fid);
          return item.fid;
        }
      }
    }
  } catch (e) {
    // 查找失败
  }

  // 直接转存到根目录
  Widget.storage.set("wogg_quark_folder_fid", "0");
  return "0";
}

/**
 * 转存夸克分享文件到自己的网盘
 * @param {string} cookies - 夸克网盘 cookies
 * @param {string} shareId - 分享 ID
 * @param {string} stoken - 分享令牌
 * @param {string} fileId - 要转存的文件 fid
 * @param {string} toDirId - 目标文件夹 fid
 * @returns {object} 转存结果
 */
async function transferQuarkFile(cookies, pwdId, stoken, fileId, shareFidToken, toDirId) {
  const headers = buildQuarkHeaders(cookies);
  const targetDir = toDirId || await ensureQuarkTempFolder(cookies);

  if (!shareFidToken) {
    throw new Error("缺少 share_fid_token，无法转存");
  }

  const body = {
    fid_list: [fileId],
    fid_token_list: [shareFidToken],
    to_pdir_fid: targetDir,
    pwd_id: pwdId,
    stoken: stoken,
    pdir_fid: "0",
    scene: "link"
  };

  const data = await quarkPost(`${QUARK_SAVE_BASE}/share/sharepage/save`, body, headers);

  if (!data || data.status !== 200 || !data.data || !data.data.task_id) {
    throw new Error((data && data.message) || (data && data.error && data.error.reason) || "转存失败");
  }

  const taskResult = await pollQuarkTask(cookies, data.data.task_id);
  const savedFid = extractSavedFidFromTask(taskResult) || fileId;

  const transferKey = `wogg_transfer_${fileId}`;
  Widget.storage.set(transferKey, JSON.stringify({
    fileId: savedFid,
    toDirId: targetDir,
    timestamp: Date.now(),
    shareId: pwdId
  }));

  return { toDirId: targetDir, fileId: savedFid };
}

async function getQuarkPlayUrl(cookies, fid) {
  const headers = buildQuarkHeaders(cookies);

  const dlData = await quarkPost(
    `${QUARK_DRIVE_BASE}/file/download`,
    { fids: [fid] },
    headers,
    { sys: "win32", ve: "2.5.56" }
  );

  if (!dlData || dlData.status !== 200 || !dlData.data) {
    throw new Error((dlData && dlData.message) || "获取播放链接失败");
  }

  const list = Array.isArray(dlData.data) ? dlData.data : [dlData.data];
  if (list.length === 0) {
    throw new Error("获取播放链接失败：空响应");
  }

  return list[0];
}

/**
 * 删除夸克网盘文件
 * @param {string} cookies - 夸克网盘 cookies
 * @param {string} fid - 文件/文件夹 fid
 * @returns {boolean} 是否删除成功
 */
async function deleteQuarkFile(cookies, fid) {
  const headers = buildQuarkHeaders(cookies);

  try {
    const data = await quarkPost(`${QUARK_DRIVE_BASE}/file/delete?fr=pc`, { fid_list: [fid], exclude_fids: [] }, headers);
    return data && data.status === 200;
  } catch (e) {
    return false;
  }
}

/**
 * 自动清理过期的转存文件
 * @param {object} params - 全局参数（含 cookies 和 autoClean）
 */
async function cleanExpiredTransfers(params) {
  const cookies = getQuarkCookies(params);
  if (!cookies) return;

  const autoCleanHours = parseInt(params.autoClean || "24", 10);
  if (autoCleanHours === 0) return; // 不清理

  const now = Date.now();
  const expireMs = autoCleanHours * 60 * 60 * 1000;

  // 获取已记录的转存列表
  const transferIndex = Widget.storage.get("wogg_transfer_index");
  if (!transferIndex) return;

  let index;
  try {
    index = JSON.parse(transferIndex);
  } catch (e) {
    return;
  }

  if (!Array.isArray(index)) return;

  const remainingKeys = [];

  for (const key of index) {
    const raw = Widget.storage.get(key);
    if (!raw) continue;

    let info;
    try {
      info = JSON.parse(raw);
    } catch (e) {
      continue;
    }

    const elapsed = now - info.timestamp;
    if (elapsed >= expireMs) {
      // 已过期，删除文件
      try {
        await deleteQuarkFile(cookies, info.fileId);
      } catch (e) {
        // 删除失败不影响流程
      }
      // 清除存储记录
      Widget.storage.set(key, "");
    } else {
      remainingKeys.push(key);
    }
  }

  // 更新索引
  Widget.storage.set("wogg_transfer_index", JSON.stringify(remainingKeys));
}

/**
 * 记录转存索引
 * @param {string} storageKey - 存储key
 */
function addTransferIndex(storageKey) {
  let index = [];
  const raw = Widget.storage.get("wogg_transfer_index");
  if (raw) {
    try { index = JSON.parse(raw); } catch (e) { index = []; }
  }
  if (!index.includes(storageKey)) {
    index.push(storageKey);
    Widget.storage.set("wogg_transfer_index", JSON.stringify(index));
  }
}

/**
 * 判断文件是否为视频
 * @param {object} file - 文件对象
 * @returns {boolean}
 */
function isQuarkVideoFile(file) {
  if (!file || isQuarkFolder(file)) return false;
  if (file.file_type === "video" || file.objCategory === "video") return true;
  const videoExts = [".mp4", ".mkv", ".avi", ".ts", ".flv", ".mov", ".rmvb", ".wmv", ".m4v", ".3gp", ".webm"];
  const name = (file.file_name || file.name || "").toLowerCase();
  if (videoExts.some((ext) => name.endsWith(ext))) return true;
  // 夸克 file_type: 1 通常为视频
  if (file.file_type === 1 && name) return true;
  return false;
}

/**
 * 判断文件是否为文件夹
 * @param {object} file - 文件对象
 * @returns {boolean}
 */
function isQuarkFolder(file) {
  if (!file) return false;
  if (file.dir === true || file.dir === 1 || file.dir === "1") return true;
  if (file.file_type === "folder" || file.file_type === 0 || file.file_type === "0") return true;
  const includeItems = Number(file.include_items || 0);
  if (includeItems > 0) return true;
  return false;
}

/**
 * 列表分类对应的媒体类型
 */
function categoryMediaType(categoryId) {
  const id = String(categoryId || "1");
  if (id === "1" || id === "44" || id === "5") return "movie";
  return "tv";
}

function parseEpisodeNumber(name) {
  const text = String(name || "");
  const patterns = [
    /[Ee][Pp]?(\d{1,4})/,
    /第(\d{1,4})[集话]/,
    /\[(\d{1,4})\]/,
    /(?:^|[^\d])(\d{1,3})(?:\.(?:mp4|mkv|ts|avi|rmvb))/i
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return parseInt(match[1], 10);
  }
  return 0;
}

function sortFilesByEpisode(files) {
  return files.slice().sort((a, b) => {
    const nameA = a.displayName || a.fileName || "";
    const nameB = b.displayName || b.fileName || "";
    const epA = parseEpisodeNumber(nameA);
    const epB = parseEpisodeNumber(nameB);
    if (epA && epB && epA !== epB) return epA - epB;
    return nameA.localeCompare(nameB, "zh-CN", { numeric: true, sensitivity: "base" });
  });
}

function buildResourceVideoItems(files, detailLink, mediaType) {
  return sortFilesByEpisode(files).map((file, index) => {
    const displayName = file.displayName || file.fileName || file.fid;
    const episodeNum = parseEpisodeNumber(displayName) || (mediaType === "tv" ? index + 1 : 0);
    const sizeText = file.fileSize > 0 ? formatSize(file.fileSize) : "";
    const title = mediaType === "tv"
      ? (episodeNum ? `第${String(episodeNum).padStart(2, "0")}集 ${displayName}` : displayName)
      : displayName;

    return {
      id: `${file.shareId}:${file.fid}`,
      type: "url",
      title: title,
      link: detailLink,
      description: sizeText || "夸克网盘资源",
      mediaType: mediaType,
      episode: mediaType === "tv" ? episodeNum : undefined,
      playerType: "system"
    };
  });
}

function buildFallbackResourceItems(tracks, detailLink, mediaType, cookies, fetchError) {
  return tracks.map((track) => ({
    id: track.shareId,
    type: "url",
    title: `${track.name}${cookies ? "（点击加载资源）" : "（需配置夸克Cookies）"}`,
    link: detailLink,
    description: cookies
      ? (fetchError || "文件列表获取失败，请检查 Cookies 或稍后重试")
      : "请先在模块设置中填写夸克网盘 Cookies",
    mediaType: mediaType,
    playerType: "system"
  }));
}

function buildTrackChildItems(tracks, detailLink, mediaType, extraDesc) {
  return tracks.map((track) => {
    const pwdHint = track.sharePwd ? ` | 提取码 ${track.sharePwd}` : "";
    return {
      id: track.shareId,
      type: "url",
      title: track.name || "夸克网盘",
      link: detailLink,
      description: `${extraDesc || "夸克网盘资源"}${pwdHint}`,
      mediaType: mediaType,
      playerType: "system"
    };
  });
}

function detectDetailMediaType(parsed, detailLink) {
  if (parsed && parsed.mediaType) return parsed.mediaType;
  const link = String(detailLink || "");
  if (/\/vodtype\/(2|3|4|6)\.html|vodshow\/(2|3|4|6)-/.test(link)) return "tv";
  return "movie";
}

function formatSize(size) {
  if (!size || size <= 0) return "";
  if (size < 1024) return `${size}B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)}KB`;
  if (size < 1024 * 1024 * 1024) return `${(size / 1024 / 1024).toFixed(1)}MB`;
  return `${(size / 1024 / 1024 / 1024).toFixed(1)}GB`;
}

// ==================== 页面解析 ====================

/**
 * 解析视频列表页
 */
function parseVideoList(html, categoryId) {
  if (!html) return [];

  const $ = Widget.html.load(html);

  // Cloudflare 检测
  const title = $("title").text();
  if (title === "Just a moment...") {
    return [];
  }

  const items = [];
  const videos = $(".module-item");

  videos.each((_, el) => {
    const href = $(el).find(".module-item-pic a").attr("href");
    const name = $(el).find(".module-item-pic img").attr("alt");
    const $img = $(el).find(".module-item-pic img");
    const cover = resolveUrl(
      $img.attr("data-src") || $img.attr("data-original") || $img.attr("data-lazy-src") || $img.attr("src") || ""
    );
    const text = $(el).find(".module-item-text").eq(0).text();
    const dq = $(el).find(".module-item-caption span").eq(2).text()
      .replace(/中国大陆|中国中国大陆/, "国产")
      .replace("中国香港", "港剧")
      .replace("中国台湾", "台剧");

    const remarks = (`${dq} ${text}`).trim();

    if (!href || !name) return;

    items.push({
      id: href,
      type: "url",
      title: safeText(name),
      posterPath: cover,
      backdropPath: cover,
      link: resolveUrl(href),
      description: remarks,
      mediaType: categoryMediaType(categoryId)
    });
  });

  return items.length > 0 ? items : [];
}

/**
 * 解析视频详情页，提取夸克网盘分享链接
 */
function parseDetailPage(html) {
  if (!html) return null;

  const $ = Widget.html.load(html);

  const title = safeText($(".page-title").text()) ||
    safeText($(".module-info-heading h1").text()) ||
    safeText($("h1").first().text());

  // 海报提取 — 适配 DYXS2 模板
  const $posterImg = $(".video-cover .module-item-pic img, .view-heading .module-item-pic img").first();
  let cover = resolveUrl(
    $posterImg.attr("data-src") || $posterImg.attr("data-original") ||
    $posterImg.attr("data-lazy-src") || $posterImg.attr("src") || ""
  );
  if (!cover) {
    cover = resolveUrl($(".module-info-poster img, .module-item-cover img").first().attr("data-src") ||
      $(".module-info-poster img, .module-item-cover img").first().attr("src") || "");
  }
  if (!cover) {
    cover = resolveUrl($("meta[property='og:image']").attr("content") || "");
  }

  const description = safeText(
    $(".video-info-content .sqjj_a").first().text() ||
    $(".video-info-content .zkjj_a").first().text() ||
    $(".video-info-content").first().text() ||
    $(".module-info-introduction-content, .video_info_content, .module-info-introduction").first().text()
  );

  let mediaType = "movie";
  const typeHref = $(".video-info-aux a[href*='/vodtype/']").first().attr("href") || "";
  if (/\/vodtype\/(2|3|4|6)\.html/.test(typeHref)) mediaType = "tv";
  const updateRemark = safeText($(".video-info-items").find(".video-info-item").first().text());
  if (/更新至|全\d+集|连载|第\d+集/.test(updateRemark + description)) mediaType = "tv";

  // 提取播放源/网盘链接
  const tracks = [];
  const seenShareIds = new Set();

  $(".module-row-one").each((_, el) => {
    const $row = $(el);
    for (const candidate of extractQuarkCandidatesFromRow($, $row)) {
      addQuarkTrack(tracks, seenShareIds, candidate);
    }
  });

  // 兼容旧版 DOM：直接遍历 module-row-title
  if (tracks.length === 0) {
    $(".module-row-title").each((_, el) => {
      const $el = $(el);
      const $row = $el.closest(".module-row-one");
      const scope = $row.length ? $row : $el.parent();
      for (const candidate of extractQuarkCandidatesFromRow($, scope)) {
        addQuarkTrack(tracks, seenShareIds, candidate);
      }
    });
  }

  // 如果模块行没找到，尝试从整个页面正文中提取夸克链接
  if (tracks.length === 0) {
    const bodyText = $("body").html() || "";
    // 匹配夸克分享链接，支持紧随其后的提取码
    const shareLinkRegex = /https?:\/\/pan\.quark\.cn\/s\/([a-zA-Z0-9]+)(?:[^<]*?(?:提取码|密码|口令)[：:\s]*([a-zA-Z0-9]{4}))?/g;
    let match;
    while ((match = shareLinkRegex.exec(bodyText)) !== null) {
      const shareId = match[1];
      const sharePwd = match[2] || "";
      addQuarkTrack(tracks, seenShareIds, {
        name: `分享${tracks.length + 1}`,
        panUrl: `https://pan.quark.cn/s/${shareId}${sharePwd ? `?pwd=${sharePwd}` : ""}`
      });
    }
  }

  // 提取分类
  const genreItems = [];
  const seenGenres = new Set();
  $(".video-info-aux .tag-link a, .module-info-tag-link a, .tag-link a, .video-info-a a").each((_, el) => {
    const text = safeText($(el).text());
    const href = $(el).attr("href") || "";
    if (text && !seenGenres.has(text)) {
      seenGenres.add(text);
      genreItems.push({ id: resolveUrl(href), title: text });
    }
  });

  // 提取推荐
  const relatedItems = [];
  const seenRelated = new Set();
  $(".module-list .module-item, .module-related .module-item").each((_, el) => {
    if (relatedItems.length >= 12) return false;
    const href = $(el).find(".module-item-pic a").attr("href");
    const relTitle = $(el).find(".module-item-pic img").attr("alt");
    const $relImg = $(el).find(".module-item-pic img");
    const relCover = resolveUrl(
      $relImg.attr("data-src") || $relImg.attr("data-original") || $relImg.attr("src") || ""
    );
    if (!href || !relTitle) return;
    const fullUrl = resolveUrl(href);
    if (seenRelated.has(fullUrl)) return;
    seenRelated.add(fullUrl);
    relatedItems.push({
      id: href,
      type: "url",
      title: safeText(relTitle),
      posterPath: relCover,
      backdropPath: relCover,
      link: fullUrl,
      mediaType: "movie"
    });
  });

  return { title, cover, description, tracks, genreItems, relatedItems, mediaType };
}

function cacheDetailTracks(detailLink, tracks) {
  if (!detailLink || !tracks || tracks.length === 0) return;
  Widget.storage.set("wogg_current_tracks", JSON.stringify(tracks));
  Widget.storage.set("wogg_current_link", detailLink);
  Widget.storage.set(`wogg_tracks_${detailLink}`, JSON.stringify(tracks));
  for (const track of tracks) {
    Widget.storage.set(`wogg_track_${track.shareId}`, JSON.stringify(track));
  }
}

async function resolveDetailTracks(detailLink) {
  const normalizedLink = normalizeDetailLink(detailLink);
  if (!normalizedLink) return [];

  const cached = Widget.storage.get(`wogg_tracks_${normalizedLink}`);
  if (cached) {
    try {
      const tracks = JSON.parse(cached);
      if (Array.isArray(tracks) && tracks.length > 0) return tracks;
    } catch (e) {}
  }

  const res = await Widget.http.get(normalizedLink, { headers: getHeaders() });
  const parsed = parseDetailPage(res.data);
  if (!parsed || !parsed.tracks || parsed.tracks.length === 0) return [];

  cacheDetailTracks(normalizedLink, parsed.tracks);
  return parsed.tracks;
}

async function collectShareVideosRecursive(cookies, track, pdirFid, depth) {
  const results = [];
  if (depth > 6) return results;

  const passcode = track.sharePwd || "";
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await getQuarkShareFileList(
      cookies, track.shareId, track.stoken, pdirFid || "0", page, 200, passcode
    );
    const list = response.list || [];
    const metadata = response.metadata || {};

    for (const file of list) {
      if (isQuarkVideoFile(file)) {
        results.push({
          fid: file.fid,
          fileName: file.file_name || "",
          fileSize: file.size || file.file_size || 0,
          shareId: track.shareId,
          sharePwd: passcode,
          shareFidToken: file.share_fid_token || "",
          stoken: track.stoken,
          parentFolder: pdirFid || "0"
        });
      } else if (isQuarkFolder(file)) {
        const nested = await collectShareVideosRecursive(cookies, track, file.fid, depth + 1);
        for (const item of nested) {
          if (!item.displayName) {
            item.displayName = `${file.file_name}/${item.fileName || item.fid}`;
          }
          results.push(item);
        }
      }
    }

    const total = Number(metadata._total || 0);
    const count = Number(metadata._count || list.length);
    const size = Number(metadata._size || 200);
    if (total < 1 || total <= size || count < size) {
      hasMore = false;
    } else {
      page += 1;
    }
  }

  return results;
}

async function collectQuarkFilesFromTracks(cookies, tracks) {
  const allFiles = [];
  let lastError = "";

  for (const track of tracks) {
    if (track.type !== "quark" || !track.shareId) continue;

    try {
      const passcode = track.sharePwd || "";
      const { stoken } = await getQuarkShareToken(cookies, track.shareId, passcode);
      track.stoken = stoken;
      const files = await collectShareVideosRecursive(cookies, track, "0", 0);
      allFiles.push(...files);
    } catch (e) {
      lastError = e.message || String(e);
      console.error("[wogg] collectQuarkFilesFromTracks:", lastError);
    }
  }

  if (allFiles.length === 0 && lastError) {
    throw new Error(lastError);
  }

  return allFiles;
}

function filterFilesBySelection(files, selectedId) {
  if (!selectedId || !isQuarkFileSelectionId(selectedId, files)) return files;

  const raw = String(selectedId);
  const fidOnly = raw.includes(":") ? raw.split(":").pop() : raw;

  const matched = files.filter((file) =>
    file.fid === raw ||
    file.fid === fidOnly ||
    file.shareId === raw ||
    `${file.shareId}:${file.fid}` === raw
  );

  if (matched.length > 0) return matched;

  const stored = Widget.storage.get(`wogg_file_${raw}`) ||
    Widget.storage.get(`wogg_file_${fidOnly}`) ||
    Widget.storage.get(`wogg_track_${raw}`);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && parsed.fid) return [parsed];
      if (parsed && parsed.shareId) {
        const trackFiles = files.filter((file) => file.shareId === parsed.shareId);
        if (trackFiles.length > 0) return trackFiles;
      }
    } catch (e) {}
  }

  return files;
}

function pickTransferTargets(files, params) {
  let targets = sortFilesByEpisode(files.slice());
  targets = filterFilesBySelection(targets, params.id);
  targets = filterFilesByEpisodeNumber(targets, params.episode);

  const detailLink = resolveActiveDetailLink(params);
  let mediaType = String(params.type || params.mediaType || "").toLowerCase();
  if (!mediaType && detailLink) {
    mediaType = String(Widget.storage.get(`wogg_media_type_${detailLink}`) || "").toLowerCase();
  }

  const hasEpisode = params.episode !== undefined && params.episode !== null && String(params.episode) !== "";
  const hasFileId = isQuarkFileSelectionId(params.id, files);

  if (mediaType === "tv" && !hasEpisode && !hasFileId && targets.length > 1) {
    return [targets[0]];
  }

  return targets;
}

function filterFilesByEpisodeNumber(files, episodeNum) {
  if (episodeNum === undefined || episodeNum === null || episodeNum === "") return files;
  const ep = Number(episodeNum);
  if (!ep || ep <= 0) return files;

  const matched = files.filter((file) => {
    const name = file.displayName || file.fileName || "";
    return parseEpisodeNumber(name) === ep;
  });
  if (matched.length > 0) return matched;

  const sorted = sortFilesByEpisode(files);
  if (ep > 0 && ep <= sorted.length) return [sorted[ep - 1]];
  return files;
}

async function transferFilesToResources(cookies, files) {
  const resources = [];
  const tempFolderFid = await ensureQuarkTempFolder(cookies);

  for (const file of files) {
    try {
      let stoken = file.stoken || "";
      if (!stoken) {
        const tokenResult = await getQuarkShareToken(cookies, file.shareId, file.sharePwd || "");
        stoken = tokenResult.stoken;
      }

      const { playUrl } = await transferAndGetPlayUrl(
        cookies,
        file.shareId,
        stoken,
        file.fid,
        file.shareFidToken || "",
        tempFolderFid
      );

      const displayName = file.displayName || file.fileName || file.fid;
      const sizeText = file.fileSize > 0 ? ` | ${formatSize(file.fileSize)}` : "";
      resources.push({
        id: `${file.shareId}:${file.fid}`,
        name: displayName,
        description: playUrl ? `夸克网盘${sizeText}` : `转存成功，但未获取到播放直链${sizeText}`,
        url: playUrl || "",
        customHeaders: playUrl ? buildQuarkHeaders(cookies) : undefined
      });
    } catch (transferErr) {
      const displayName = file.displayName || file.fileName || file.fid;
      const sizeText = file.fileSize > 0 ? ` | ${formatSize(file.fileSize)}` : "";
      resources.push({
        id: `${file.shareId}:${file.fid}`,
        name: displayName,
        description: `转存失败: ${transferErr.message}${sizeText}`,
        url: ""
      });
    }
  }

  return resources;
}

function cacheQuarkFiles(detailLink, allFiles) {
  if (!allFiles || allFiles.length === 0) return;
  const normalizedLink = normalizeDetailLink(detailLink);
  Widget.storage.set("wogg_current_files", JSON.stringify(allFiles));
  Widget.storage.set("wogg_current_link", normalizedLink);
  if (normalizedLink) {
    Widget.storage.set(`wogg_files_${normalizedLink}`, JSON.stringify(allFiles));
  }
  for (const file of allFiles) {
    Widget.storage.set(`wogg_file_${file.fid}`, JSON.stringify(file));
    Widget.storage.set(`wogg_file_${file.shareId}:${file.fid}`, JSON.stringify(file));
  }
}

function readCachedFiles(detailLink) {
  const normalizedLink = normalizeDetailLink(detailLink);
  if (!normalizedLink) return [];

  const scoped = Widget.storage.get(`wogg_files_${normalizedLink}`);
  if (scoped) {
    try {
      const files = JSON.parse(scoped);
      if (Array.isArray(files) && files.length > 0) return files;
    } catch (e) {}
  }

  const currentLink = Widget.storage.get("wogg_current_link") || "";
  if (currentLink === normalizedLink) {
    const cached = Widget.storage.get("wogg_current_files");
    if (cached) {
      try {
        const files = JSON.parse(cached);
        if (Array.isArray(files) && files.length > 0) return files;
      } catch (e) {}
    }
  }

  return [];
}

// ==================== 模块函数 ====================

/**
 * 加载视频列表
 */
async function loadList(params = {}) {
  // 提前保存 cookies 到 storage，供 loadDetail（无 params）读取
  if (params.cookies) saveQuarkCookies(params.cookies);

  const categoryId = params.categoryId || "1";
  const page = Number(params.page || 1);
  const url = `${BASE_URL}/vodshow/${categoryId}--------${page}---.html`;

  try {
    const res = await Widget.http.get(url, { headers: getHeaders() });
    return parseVideoList(res.data, categoryId);
  } catch (e) {
    console.error("[wogg] loadList 失败:", e.message || e);
    return [];
  }
}

/**
 * 加载详情页
 * 1. 从 wogg.net HTML 提取夸克分享链接
 * 2. 调用夸克 API 获取文件列表（不转存），展示每个视频文件名/大小
 * 3. 将文件信息存入 storage，供 loadStream 转存+播放
 * @param {string} link - 详情页链接
 */
async function loadDetail(link) {
  try {
    const detailLink = normalizeDetailLink(link);
    const res = await Widget.http.get(detailLink, { headers: getHeaders() });
    const parsed = parseDetailPage(res.data);

    if (!parsed) return null;

    const mediaType = detectDetailMediaType(parsed, detailLink);
    Widget.storage.set(`wogg_media_type_${detailLink}`, mediaType);
    let childItems = [];
    let episodeItems = [];
    let allFiles = [];
    let fetchError = "";
    let resourceItems = [];

    if (parsed.tracks && parsed.tracks.length > 0) {
      cacheDetailTracks(detailLink, parsed.tracks);
      const cookies = getQuarkCookies(null);

      if (cookies) {
        try {
          allFiles = await collectQuarkFilesFromTracks(cookies, parsed.tracks);
          cacheQuarkFiles(detailLink, allFiles);
          resourceItems = buildResourceVideoItems(allFiles, detailLink, mediaType);
        } catch (e) {
          fetchError = e.message || String(e);
          console.error("[wogg] loadDetail 获取文件列表失败:", fetchError);
        }
      }

      if (resourceItems.length > 0) {
        if (mediaType === "tv") {
          childItems = buildTrackChildItems(parsed.tracks, detailLink, mediaType, `${resourceItems.length} 集`);
          episodeItems = resourceItems;
        } else {
          childItems = resourceItems;
        }
      } else {
        childItems = buildFallbackResourceItems(parsed.tracks, detailLink, mediaType, cookies, fetchError);
        if (mediaType === "tv") {
          episodeItems = childItems.slice();
        }
      }
    }

    const result = {
      id: detailLink,
      type: "url",
      title: parsed.title,
      posterPath: parsed.cover || "",
      backdropPath: parsed.cover || "",
      backdropPaths: parsed.cover ? [parsed.cover] : [],
      description: parsed.description,
      link: detailLink,
      mediaType: mediaType,
      genreItems: parsed.genreItems.length > 0 ? parsed.genreItems : undefined,
      relatedItems: parsed.relatedItems.length > 0 ? parsed.relatedItems : undefined,
      childItems: childItems.length > 0 ? childItems : undefined,
      episodeItems: episodeItems.length > 0 ? episodeItems : undefined
    };

    return result;
  } catch (e) {
    console.error("[wogg] loadDetail 失败:", e.message || e);
    return null;
  }
}

/**
 * 转存单个文件并获取播放链接
 */
async function transferAndGetPlayUrl(cookies, pwdId, stoken, fid, shareFidToken, tempFolderFid) {
  if (!tempFolderFid) tempFolderFid = await ensureQuarkTempFolder(cookies);

  const transferResult = await transferQuarkFile(cookies, pwdId, stoken, fid, shareFidToken, tempFolderFid);

  const storageKey = `wogg_transfer_${fid}`;
  addTransferIndex(storageKey);

  let playUrl = "";
  try {
    const playInfo = await getQuarkPlayUrl(cookies, transferResult.fileId);
    playUrl = playInfo.download_url || playInfo.video_preview_url || "";
  } catch (e) {
    console.error("[wogg] 获取播放链接失败:", e.message || e);
  }

  return { playUrl, transferResult };
}

/**
 * 播放源模块
 * 从 storage 读取 loadDetail 已缓存的文件列表，逐个转存+获取播放地址
 * @param {object} params - 包含全局参数(cookies, autoClean)和上下文信息
 */
async function loadStream(params = {}) {
  if (params.cookies) saveQuarkCookies(params.cookies);
  persistDetailContext(params);

  const cookies = getQuarkCookies(params);
  if (!cookies) {
    return [{
      name: "未配置Cookies",
      description: "请在模块设置中填写夸克网盘Cookies后再试（登录 pan.quark.cn 后从浏览器获取）",
      url: ""
    }];
  }

  try {
    await cleanExpiredTransfers(params);
  } catch (e) {}

  const detailLink = resolveActiveDetailLink(params);
  let fetchError = "";

  let files = [];
  if (detailLink) {
    try {
      const tracks = await resolveDetailTracks(detailLink);
      if (tracks.length > 0) {
        files = await collectQuarkFilesFromTracks(cookies, tracks);
        cacheQuarkFiles(detailLink, files);
      }
    } catch (e) {
      fetchError = e.message || String(e);
      console.error("[wogg] loadResource 获取详情资源失败:", fetchError);
      files = readCachedFiles(detailLink);
    }
  }

  if (files.length === 0 && detailLink) {
    files = readCachedFiles(detailLink);
  }

  if (files.length === 0) {
    if (!detailLink) {
      return [{ name: "未找到详情链接", description: "请先进入视频详情页后再加载资源", url: "" }];
    }
    return [{
      name: "未找到视频文件",
      description: fetchError || "分享链接中未找到可播放的视频，请检查夸克 Cookies 是否有效",
      url: ""
    }];
  }

  const transferTargets = pickTransferTargets(files, params);
  const resources = await transferFilesToResources(cookies, transferTargets);
  const playable = resources.filter((item) => item.url);

  if (playable.length > 0) {
    return playable;
  }

  if (resources.length > 0) {
    return resources;
  }

  return [{
    name: "转存失败",
    description: fetchError || "未能获取可播放资源，请检查夸克 Cookies 或稍后重试",
    url: ""
  }];
}

async function loadResource(params = {}) {
  return loadStream(params);
}

/**
 * 搜索
 */
async function search(params = {}) {
  // 提前保存 cookies 到 storage，供 loadDetail（无 params）读取
  if (params.cookies) saveQuarkCookies(params.cookies);

  const keyword = params.keyword || "";
  const page = Number(params.page || 1);

  if (!keyword) {
    return [];
  }

  const url = `${BASE_URL}/vodsearch/${encodeURIComponent(keyword)}----------${page}---.html`;

  try {
    const res = await Widget.http.get(url, { headers: getHeaders() });
    const html = res.data;

    if (!html) return [];

    const $ = Widget.html.load(html);

    // Cloudflare 检测
    const pageTitle = $("title").text();
    if (pageTitle === "Just a moment...") {
      return [];
    }

    const items = [];
    const videos = $(".module-search-item");

    videos.each((_, el) => {
      const href = $(el).find(".video-serial").attr("href");
      const name = $(el).find(".lazyload").attr("alt");
      const $lazyImg = $(el).find(".lazyload");
      const cover = resolveUrl(
        $lazyImg.attr("data-src") || $lazyImg.attr("data-original") || $lazyImg.attr("src") || ""
      );
      const remarks = $(el).find(".video-serial").text();

      if (!href || !name) return;

      items.push({
        id: href,
        type: "url",
        title: safeText(name),
        posterPath: cover || "",
        backdropPath: cover || "",
        link: resolveUrl(href),
        description: safeText(remarks),
        mediaType: "movie"
      });
    });

    return items.length > 0 ? items : [];
  } catch (e) {
    console.error("[wogg] search 失败:", e.message || e);
    return [];
  }
}

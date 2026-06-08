WidgetMetadata = {
  id: "forward.wogg",
  title: "玩偶哥哥",
  version: "3.0.0",
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
    },
    {
      id: "loadStream",
      title: "播放源",
      functionName: "loadStream",
      type: "stream",
      params: []
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
const QUARK_DRIVE_BASE = "https://drive-h.quark.cn/1/clouddrive";
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
    "Content-Type": "application/json",
    "Origin": QUARK_PAN_ORIGIN,
    "Referer": QUARK_PAN_ORIGIN + "/",
    "Cookie": cookies
  };
}

/**
 * 构建夸克 GET 请求头（无 Content-Type）
 */
function buildQuarkGetHeaders(cookies) {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Origin": QUARK_PAN_ORIGIN,
    "Referer": QUARK_PAN_ORIGIN + "/",
    "Cookie": cookies
  };
}

/**
 * 安全的夸克 API POST 请求
 * Widget.http 在非2xx时会抛异常，此函数捕获后提取业务错误信息
 */
async function quarkPost(url, body, headers) {
  try {
    const res = await Widget.http.post(url, JSON.stringify(body), { headers });
    return res.data;
  } catch (e) {
    // Widget.http 抛异常时，尝试从错误信息中提取业务错误
    const msg = e.message || String(e);
    throw new Error(msg);
  }
}

/**
 * 安全的夸克 API GET 请求（手动拼 URL 查询参数）
 * Widget.http 的 params 选项可能不可靠，手动拼接更稳妥
 */
async function quarkGet(url, params, headers) {
  // 手动拼接查询参数
  const query = Object.keys(params || {})
    .filter(k => params[k] !== undefined && params[k] !== null)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");
  const fullUrl = query ? `${url}?${query}` : url;

  try {
    const res = await Widget.http.get(fullUrl, { headers });
    return res.data;
  } catch (e) {
    const msg = e.message || String(e);
    throw new Error(msg);
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
async function getQuarkShareToken(cookies, shareId, sharePwd) {
  const headers = buildQuarkHeaders(cookies);

  const body = {
    share_id: shareId,
    share_pwd: sharePwd || ""
  };

  const data = await quarkPost(`${QUARK_DRIVE_BASE}/share/sharepage/token`, body, headers);

  if (!data || data.status !== 200) {
    throw new Error((data && data.message) || "获取分享令牌失败");
  }

  return {
    stoken: data.data.stoken,
    shareInfo: data.data
  };
}

/**
 * 获取夸克分享文件列表
 * @param {string} cookies - 夸克网盘 cookies
 * @param {string} shareId - 分享 ID
 * @param {string} stoken - 分享令牌
 * @param {string} fid - 目录 fid，根目录传空
 * @param {number} offset - 偏移量
 * @param {number} limit - 每页条数
 * @returns {object} 文件列表
 */
async function getQuarkShareFileList(cookies, shareId, stoken, fid, offset, limit) {
  const headers = buildQuarkGetHeaders(cookies);

  const data = await quarkGet(`${QUARK_DRIVE_BASE}/share/sharepage/detail`, {
    share_id: shareId,
    stoken: stoken,
    pwd: "",
    fid: fid || "",
    offset: offset || 0,
    limit: limit || 200,
    sort: "file_name:asc"
  }, headers);

  if (!data || data.status !== 200) {
    throw new Error((data && data.message) || "获取分享文件列表失败");
  }

  return data.data;
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
      const infoData = await quarkGet(`${QUARK_DRIVE_BASE}/file/info`, { fid: cachedFid }, getHeaders);
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
      fid: "0", offset: 0, limit: 200, sort: "file_name:asc"
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
async function transferQuarkFile(cookies, shareId, stoken, fileId, toDirId) {
  const headers = buildQuarkHeaders(cookies);

  const targetDir = toDirId || await ensureQuarkTempFolder(cookies);

  const body = {
    share_id: shareId,
    stoken: stoken,
    file_list: [fileId],
    to_dir_id: targetDir
  };

  const data = await quarkPost(`${QUARK_DRIVE_BASE}/share/sharepage/save`, body, headers);

  if (!data || data.status !== 200) {
    throw new Error((data && data.message) || (data && data.error && data.error.reason) || "转存失败");
  }

  // 记录转存时间用于自动清理
  const transferKey = `wogg_transfer_${fileId}`;
  Widget.storage.set(transferKey, JSON.stringify({
    fileId: fileId,
    toDirId: targetDir,
    timestamp: Date.now(),
    shareId: shareId
  }));

  const savedList = (data.data && data.data.save_as_list) || [];
  const savedFid = savedList.length > 0 ? savedList[0].fid : fileId;

  return { toDirId: targetDir, fileId: savedFid };
}

/**
 * 获取夸克网盘文件的播放链接
 */
async function getQuarkPlayUrl(cookies, fid) {
  const headers = buildQuarkHeaders(cookies);

  // 优先使用 play 接口
  try {
    const playData = await quarkPost(`${QUARK_DRIVE_BASE}/file/v2/play`, { fid: fid }, headers);
    if (playData && playData.status === 200 && playData.data) {
      return playData.data;
    }
  } catch (e) {
    // play 接口失败，尝试 download 接口
  }

  // 回退到 download 接口
  const dlData = await quarkPost(`${QUARK_DRIVE_BASE}/file/download`, { fid_list: [fid] }, headers);

  if (!dlData || dlData.status !== 200) {
    throw new Error((dlData && dlData.message) || "获取播放链接失败");
  }

  return dlData.data;
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
    const data = await quarkPost(`${QUARK_DRIVE_BASE}/file/delete`, { fid_list: [fid], exclude_fids: [] }, headers);
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
  // 方式1: 通过 file_type 判断
  if (file.file_type === "video" || file.objCategory === "video") return true;
  // 方式2: 通过扩展名判断
  const videoExts = [".mp4", ".mkv", ".avi", ".ts", ".flv", ".mov", ".rmvb", ".wmv", ".m4v", ".3gp", ".webm"];
  const name = (file.file_name || file.name || "").toLowerCase();
  return videoExts.some(ext => name.endsWith(ext));
}

/**
 * 判断文件是否为文件夹
 * @param {object} file - 文件对象
 * @returns {boolean}
 */
function isQuarkFolder(file) {
  return file.dir === true || file.file_type === "folder";
}

/**
 * 格式化文件大小
 */
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
function parseVideoList(html) {
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
      mediaType: "movie"
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

  // 海报提取 — 多选择器 + 多属性兜底，确保拿到最高清图片
  const $posterImg = $(".module-info-poster .module-item-pic img");
  let cover = resolveUrl(
    $posterImg.attr("data-src") || $posterImg.attr("data-original") ||
    $posterImg.attr("data-lazy-src") || $posterImg.attr("src") || ""
  );
  if (!cover) {
    cover = resolveUrl($(".module-info-poster img").attr("data-src") ||
      $(".module-info-poster img").attr("data-original") ||
      $(".module-info-poster img").attr("src") || "");
  }
  if (!cover) {
    cover = resolveUrl($("meta[property='og:image']").attr("content") || "");
  }
  if (!cover) {
    // 兜底：从页面任意大图尝试
    const $fallbackImg = $(".module-info img").first();
    cover = resolveUrl(
      $fallbackImg.attr("data-src") || $fallbackImg.attr("data-original") || $fallbackImg.attr("src") || ""
    );
  }

  const description = safeText($(".module-info-introduction-content, .video_info_content, .module-info-introduction").text());

  // 提取播放源/网盘链接
  const tracks = [];
  const seenShareIds = new Set();

  const playlist = $(".module-row-title, .module-play-list");
  playlist.each((_, el) => {
    const $el = $(el);

    // 从标题获取源名称
    const name = $el.find("h4").text().replace(" - 玩偶哥哥", "").trim() ||
      $el.find(".module-heading-title").text().trim() ||
      "默认";

    // 提取分享链接文本
    const panShareUrl = $el.find("p").text().trim();

    // 也从链接中提取
    const links = [];
    $el.find("a").each((_, a) => {
      const href = $(a).attr("href") || "";
      const text = $(a).text().trim();
      if (href && (href.includes("pan.quark.cn/s/") || href.includes("quark.cn"))) {
        links.push({ url: href, name: text });
      }
    });

    // 文本中的分享链接
    if (panShareUrl && panShareUrl.includes("pan.quark.cn/s/")) {
      const parsed = parseQuarkShareUrl(panShareUrl);
      if (parsed && !seenShareIds.has(parsed.shareId)) {
        seenShareIds.add(parsed.shareId);
        tracks.push({
          name: name,
          panUrl: panShareUrl,
          shareId: parsed.shareId,
          sharePwd: parsed.sharePwd,
          type: "quark"
        });
      }
    }

    // 链接中的分享链接
    for (const link of links) {
      const parsed = parseQuarkShareUrl(link.url);
      if (parsed && !seenShareIds.has(parsed.shareId)) {
        seenShareIds.add(parsed.shareId);
        tracks.push({
          name: link.name || name,
          panUrl: link.url,
          shareId: parsed.shareId,
          sharePwd: parsed.sharePwd,
          type: "quark"
        });
      }
    }
  });

  // 如果模块行没找到，尝试从整个页面正文中提取夸克链接
  if (tracks.length === 0) {
    const bodyText = $("body").html() || "";
    // 匹配夸克分享链接，支持紧随其后的提取码
    const shareLinkRegex = /https?:\/\/pan\.quark\.cn\/s\/([a-zA-Z0-9]+)(?:[^<]*?(?:提取码|密码|口令)[：:\s]*([a-zA-Z0-9]{4}))?/g;
    let match;
    while ((match = shareLinkRegex.exec(bodyText)) !== null) {
      const shareId = match[1];
      const sharePwd = match[2] || "";
      if (!seenShareIds.has(shareId)) {
        seenShareIds.add(shareId);
        tracks.push({
          name: `分享${tracks.length + 1}`,
          panUrl: `https://pan.quark.cn/s/${shareId}`,
          shareId: shareId,
          sharePwd: sharePwd,
          type: "quark"
        });
      }
    }
  }

  // 提取分类
  const genreItems = [];
  const seenGenres = new Set();
  $(".module-info-tag-link a, .tag-link a, .video-info-a a").each((_, el) => {
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

  return { title, cover, description, tracks, genreItems, relatedItems };
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
    return parseVideoList(res.data);
  } catch (e) {
    console.error("[wogg] loadList 失败:", e.message || e);
    return [];
  }
}

/**
 * 加载详情页
 * 只从 wogg.net HTML 提取信息，不调用夸克 API
 * 夸克资源展示为 episodeItems，点击播放源时才调用夸克 API 获取文件列表和播放链接
 * @param {string} link - 详情页链接
 */
async function loadDetail(link) {
  try {
    const res = await Widget.http.get(String(link), { headers: getHeaders() });
    const html = res.data;
    const parsed = parseDetailPage(html);

    if (!parsed) return null;

    // 将解析到的夸克分享链接直接展示为 episodeItems
    const episodeItems = [];

    if (parsed.tracks && parsed.tracks.length > 0) {
      // 存储 tracks 供 loadStream 使用（固定 key + link key 双重存储）
      Widget.storage.set("wogg_current_tracks", JSON.stringify(parsed.tracks));
      Widget.storage.set("wogg_current_link", String(link));
      Widget.storage.set(`wogg_tracks_${link}`, JSON.stringify(parsed.tracks));

      for (const track of parsed.tracks) {
        Widget.storage.set(`wogg_track_${track.shareId}`, JSON.stringify(track));

        episodeItems.push({
          id: track.shareId,
          type: "url",
          title: track.name || `分享链接`,
          link: `wogg:${track.shareId}:${track.sharePwd || ""}`,
          description: `夸克网盘 - 点击「播放源」加载视频`,
          mediaType: "movie"
        });
      }
    }

    const item = {
      id: link,
      type: "url",
      title: parsed.title,
      posterPath: parsed.cover || "",
      backdropPath: parsed.cover || "",
      backdropPaths: parsed.cover ? [parsed.cover] : [],
      description: parsed.description,
      link: link,
      mediaType: "movie",
      genreItems: parsed.genreItems.length > 0 ? parsed.genreItems : undefined,
      relatedItems: parsed.relatedItems.length > 0 ? parsed.relatedItems : undefined,
      episodeItems: episodeItems.length > 0 ? episodeItems : undefined
    };

    return item;
  } catch (e) {
    console.error("[wogg] loadDetail 失败:", e.message || e);
    return null;
  }
}

/**
 * 转存单个文件并获取播放链接
 * @param {string} cookies - 夸克 cookies
 * @param {string} shareId - 分享 ID
 * @param {string} stoken - 分享令牌
 * @param {string} fid - 文件 fid
 * @returns {object} { playUrl, transferResult } 或抛出异常
 */
async function transferAndGetPlayUrl(cookies, shareId, stoken, fid, tempFolderFid) {
  if (!tempFolderFid) tempFolderFid = await ensureQuarkTempFolder(cookies);

  // 转存到自己的网盘
  const transferResult = await transferQuarkFile(cookies, shareId, stoken, fid, tempFolderFid);

  // 记录转存索引用于自动清理
  const storageKey = `wogg_transfer_${fid}`;
  addTransferIndex(storageKey);

  // 获取播放链接
  let playUrl = "";
  try {
    const playInfo = await getQuarkPlayUrl(cookies, transferResult.fileId);
    if (playInfo.video_preview_url) {
      playUrl = playInfo.video_preview_url;
    } else if (playInfo.download_url) {
      playUrl = playInfo.download_url;
    } else if (playInfo.list && playInfo.list.length > 0) {
      playUrl = playInfo.list[0].download_url || "";
    }
  } catch (e) {
    // 播放链接获取失败
  }

  return { playUrl, transferResult };
}

/**
 * 播放源模块 — 夸克网盘获取文件列表、转存并获取播放链接
 * 详情页不调用夸克 API，只在用户点击播放源时才调用
 * @param {object} params - 包含全局参数(cookies, autoClean)和上下文信息
 */
async function loadStream(params = {}) {
  // 保存 cookies 到 storage（确保后续读取一致）
  if (params.cookies) saveQuarkCookies(params.cookies);

  const cookies = getQuarkCookies(params);

  if (!cookies) {
    return [{
      name: "未配置Cookies",
      description: "请在模块设置中填写夸克网盘Cookies后再试（登录 pan.quark.cn 后从浏览器获取）",
      url: ""
    }];
  }

  // 自动清理过期转存
  try {
    await cleanExpiredTransfers(params);
  } catch (e) {
    // 清理失败不影响播放
  }

  // ===== 获取 tracks =====
  let tracks = [];
  const fixedTracks = Widget.storage.get("wogg_current_tracks");
  if (fixedTracks) {
    try { tracks = JSON.parse(fixedTracks); } catch (e) { tracks = []; }
  }

  if (tracks.length === 0) {
    const contextLink = params.link || params.id || Widget.storage.get("wogg_current_link") || "";
    if (contextLink) {
      const tracksRaw = Widget.storage.get(`wogg_tracks_${contextLink}`);
      if (tracksRaw) {
        try { tracks = JSON.parse(tracksRaw); } catch (e) { tracks = []; }
      }
    }
  }

  if (tracks.length === 0) {
    return [{
      name: "未找到网盘链接",
      description: "请先进入视频详情页后再打开播放源",
      url: ""
    }];
  }

  const resources = [];

  for (const track of tracks) {
    try {
      if (track.type !== "quark" || !track.shareId) continue;

      // 1. 获取分享令牌
      const { stoken } = await getQuarkShareToken(cookies, track.shareId, track.sharePwd || "");

      // 2. 获取分享根目录文件列表
      const fileList = await getQuarkShareFileList(cookies, track.shareId, stoken, "", 0, 200);

      if (!fileList || !fileList.list) continue;

      // 3. 确保目标临时文件夹存在
      const tempFolderFid = await ensureQuarkTempFolder(cookies);

      // 4. 遍历文件，处理视频和文件夹
      for (const file of fileList.list) {
        if (isQuarkVideoFile(file)) {
          const fileName = file.file_name || "";
          const fileSize = file.size || file.file_size || 0;

          try {
            const { playUrl, transferResult } = await transferAndGetPlayUrl(
              cookies, track.shareId, stoken, file.fid, tempFolderFid
            );

            const sizeText = fileSize > 0 ? ` | ${formatSize(fileSize)}` : "";
            resources.push({
              name: `${track.name} - ${fileName}`,
              description: `来源: ${track.name}${sizeText} | 已转存`,
              url: playUrl || `quark://${transferResult.fileId}`,
              customHeaders: buildQuarkHeaders(cookies)
            });
          } catch (transferErr) {
            resources.push({
              name: `${track.name} - ${fileName}`,
              description: `转存失败: ${transferErr.message}`,
              url: ""
            });
          }
        } else if (isQuarkFolder(file)) {
          try {
            const subFileList = await getQuarkShareFileList(
              cookies, track.shareId, stoken, file.fid, 0, 200
            );
            if (!subFileList || !subFileList.list) continue;

            for (const subFile of subFileList.list) {
              if (!isQuarkVideoFile(subFile)) continue;

              const subName = subFile.file_name || "";
              const subSize = subFile.size || subFile.file_size || 0;

              try {
                const { playUrl, transferResult } = await transferAndGetPlayUrl(
                  cookies, track.shareId, stoken, subFile.fid, tempFolderFid
                );

                const sizeText = subSize > 0 ? ` | ${formatSize(subSize)}` : "";
                resources.push({
                  name: `${track.name} - ${file.file_name}/${subName}`,
                  description: `来源: ${track.name}${sizeText} | 已转存`,
                  url: playUrl || `quark://${transferResult.fileId}`,
                  customHeaders: buildQuarkHeaders(cookies)
                });
              } catch (transferErr) {
                resources.push({
                  name: `${track.name} - ${subName}`,
                  description: `转存失败: ${transferErr.message}`,
                  url: ""
                });
              }
            }
          } catch (e) {
            // 子文件夹获取失败
          }
        }
      }
    } catch (e) {
      resources.push({
        name: track.name || "未知源",
        description: `获取失败: ${e.message}`,
        url: ""
      });
    }
  }

  if (resources.length === 0) {
    return [{
      name: "未找到视频文件",
      description: "分享链接中未找到可播放的视频文件",
      url: ""
    }];
  }

  return resources;
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

// ==================== Jable Stream Source v1.0 ====================
// 用途：作为 Forward 的 stream source，把 Jable 播放源聚合到其他视频详情页下方。
//
// 策略：
// - 从当前详情页 params 中提取番号。
// - 用番号搜索 Jable。
// - 找到精确匹配的 Jable 详情页。
// - 从搜索结果卡片提取 previewUrl，也就是 data-preview。
// - 进入详情页提取 hlsUrl。
// - 根据详情页 meta 判断是否为中文字幕版本。
// - 返回：
//   1. Jable 正片 / Jable 中文字幕
//   2. Jable Preview
//
// 注意：
// - Preview 来自列表卡片的 data-preview，不一定代表完整正片字幕状态。
// - 中文字幕判断优先使用 meta keywords 的第一个关键词是否为「中文字幕」。

var WidgetMetadata = {
  id: "jable_stream",
  title: "Jable Stream",
  description: "通过番号匹配 Jable 播放源，并聚合到当前视频详情页",
  author: "Eric",
  site: "https://jable.tv",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  modules: [
    {
      id: "loadResource",
      title: "Jable 播放源",
      description: "根据当前视频信息匹配 Jable 播放链接",
      functionName: "loadResource",
      type: "stream",
      params: []
    }
  ]
};

// ==================== 常量定义 ====================

const DEFAULT_BASE_URL = "https://jable.tv";
const REQUEST_TIMEOUT = 15000;

const DEFAULT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://jable.tv/",
  "Connection": "keep-alive"
};

const JABLE_PLAY_HEADERS = {
  "User-Agent": DEFAULT_HEADERS["User-Agent"],
  "Referer": "https://jable.tv/",
  "Origin": "https://jable.tv"
};

// ==================== HTTP 封装 ====================

async function httpGet(url, options = {}) {
  const finalOptions = {
    headers: { ...DEFAULT_HEADERS, ...(options.headers || {}) },
    timeout: options.timeout || REQUEST_TIMEOUT
  };

  const resp = await Widget.http.get(url, finalOptions);

  if (!resp || resp.statusCode !== 200) {
    throw new Error(`HTTP ${resp?.statusCode || "unknown"}: ${url}`);
  }

  return resp.data;
}

// ==================== 基础工具 ====================

function getText(value) {
  return String(value || "").trim();
}

function normalizeCode(value) {
  return getText(value)
    .toUpperCase()
    .replace(/[\s_\-]+/g, "");
}

function toAbsoluteUrl(href) {
  if (!href) return "";

  const value = String(href).trim();

  if (!value) return "";
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  if (value.startsWith("//")) return "https:" + value;
  if (value.startsWith("/")) return DEFAULT_BASE_URL + value;

  return DEFAULT_BASE_URL + "/" + value;
}

function normalizeM3U8Url(url) {
  const value = getText(url);
  if (!value) return "";

  return value
    .replace(/\\\//g, "/")
    .replace(/&amp;/g, "&")
    .trim();
}

// ==================== 番号提取 ====================
// allowPureNumeric:
// - true: 允许纯数字番号，例如某些特殊源。
// - false: 递归扫描深层 params 时不允许纯数字，避免误把日期、ID、时间戳当成番号。

function extractSearchCode(text, options = {}) {
  const allowPureNumeric = options.allowPureNumeric !== false;

  const s = getText(text).toUpperCase();
  if (!s) return "";

  const normalized = s
    .replace(/\./g, " ")
    .replace(/_/g, "-")
    .replace(/\s+/g, " ")
    .trim();

  const patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?\d{5,8}\b/,
    /\bCARIB[- ]?\d{6,8}\b/,
    /\b1PONDO[- ]?\d{6,8}\b/,
    /\bHEYZO[- ]?\d{3,6}\b/,
    /\bT28[- ]?\d{6,8}\b/,
    /\b(?:S2M|MIAA|SSNI|SNIS|IPX|IPZZ|SSIS|JUQ|MIDE|MIDV|STARS|ABW|RKI|DVAJ|WANZ|LULU|DLDSS|VRTM|SDMU|SDDE|MKMP|HMN|MUDR|ADN|CAWD|PPPE|PRED|MGR|SHKD|MXGS|FSDSS|JUL|KTB|MIAB|GVH|MIMK|JUY|JUTA|IDBD|HND|DASD|CLO|BF|HONB|ROE|CEMD|MIUM|NITR|RCTD|RCT|IPVR|MIBD|JUR|JURD|SOE|ORE|PYO|START|NSFS)\s*[-_ ]?\d{2,6}[A-Z]?(?:[-_ ]?[A-Z]{0,4})?\b/,
    /\b[A-Z]{2,10}\s*[-_ ]?\d{2,8}[A-Z]?\b/
  ];

  if (allowPureNumeric) {
    patterns.push(/\b\d{6,8}\b/);
  }

  for (const reg of patterns) {
    const match = normalized.match(reg);
    if (match?.[0]) {
      return match[0]
        .replace(/\s+/g, "")
        .replace(/_/g, "-")
        .replace(/-+/g, "-")
        .toUpperCase();
    }
  }

  return "";
}

// 递归收集 params 内部所有字符串。
// 用于不知道 Forward / Emby 实际把文件名放在哪个字段时的兜底扫描。

function collectStringValues(value, depth = 0, out = [], visited = new Set()) {
  if (value === null || value === undefined) return out;
  if (depth > 5) return out;

  const valueType = typeof value;

  if (valueType === "string" || valueType === "number") {
    const text = String(value).trim();
    if (text) out.push(text);
    return out;
  }

  if (valueType !== "object") return out;

  if (visited.has(value)) return out;
  visited.add(value);

  if (Array.isArray(value)) {
    for (const item of value) {
      collectStringValues(item, depth + 1, out, visited);
    }
    return out;
  }

  for (const key of Object.keys(value)) {
    collectStringValues(value[key], depth + 1, out, visited);
  }

  return out;
}

function extractCodeFromParams(params = {}) {
  const priorityCandidates = [
    params.code,
    params.videoId,
    params.number,

    // Emby / 本地媒体可能字段
    params.fileName,
    params.filename,
    params.file_name,
    params.name,
    params.path,
    params.filePath,
    params.file_path,
    params.mediaPath,
    params.media_path,
    params.itemPath,
    params.item_path,
    params.localPath,
    params.local_path,
    params.originalFilename,
    params.originalFileName,

    // 常规媒体字段
    params.id,
    params.title,
    params.seriesName,
    params.originalTitle,
    params.originalName,
    params.episodeName,
    params.description,
    params.genreTitle,
    params.overview,
    params.link,
    params.url,
    params.videoUrl,
    params.playUrl,
    params.streamUrl
  ];

  if (params.tmdbInfo) {
    priorityCandidates.push(
      params.tmdbInfo.title,
      params.tmdbInfo.name,
      params.tmdbInfo.originalTitle,
      params.tmdbInfo.originalName,
      params.tmdbInfo.overview
    );
  }

  if (params.info) {
    priorityCandidates.push(
      params.info.title,
      params.info.name,
      params.info.originalTitle,
      params.info.originalName,
      params.info.overview
    );
  }

  if (params.mediaSource) {
    priorityCandidates.push(
      params.mediaSource.name,
      params.mediaSource.fileName,
      params.mediaSource.filename,
      params.mediaSource.path,
      params.mediaSource.url,
      params.mediaSource.streamUrl
    );
  }

  if (Array.isArray(params.mediaSources)) {
    for (const source of params.mediaSources) {
      priorityCandidates.push(
        source?.name,
        source?.fileName,
        source?.filename,
        source?.path,
        source?.url,
        source?.streamUrl
      );
    }
  }

  // 第一轮：优先字段允许纯数字番号。
  for (const value of priorityCandidates) {
    const code = extractSearchCode(value, { allowPureNumeric: true });
    if (code) return code;
  }

  // 第二轮：递归扫描所有字符串。
  // 这里不允许纯数字，避免误把日期 / ID / 时间戳识别为番号。
  const allStrings = collectStringValues(params);

  for (const value of allStrings) {
    const code = extractSearchCode(value, { allowPureNumeric: false });
    if (code) return code;
  }

  return "";
}

// ==================== Jable 搜索结果解析 ====================

function extractCodeFromJableLink(link) {
  const href = getText(link);
  if (!href) return "";

  const lastPart = href
    .split("?")[0]
    .split("#")[0]
    .split("/")
    .filter(Boolean)
    .pop() || "";

  const cleaned = decodeURIComponent(lastPart)
    .replace(/-/g, " ");

  return extractSearchCode(cleaned, { allowPureNumeric: true });
}

function parseJableSearchResults(html, targetCode) {
  if (!html || typeof html !== "string") return [];

  const $ = Widget.html.load(html);
  const results = [];
  const seen = new Set();

  $(".video-img-box").each((i, el) => {
    const $el = $(el);

    const $titleLink = $el.find(".title a").first();
    const href = $titleLink.attr("href") || "";
    const link = toAbsoluteUrl(href);

    if (!link || !link.includes("jable.tv")) return;
    if (seen.has(link)) return;

    const title = $titleLink.text().trim();

    const $img = $el.find("img").first();
    const cover = toAbsoluteUrl($img.attr("data-src") || $img.attr("src") || "");
    const previewUrl = toAbsoluteUrl($img.attr("data-preview") || "");

    const codeFromLink = extractCodeFromJableLink(link);
    const codeFromTitle = extractSearchCode(title, { allowPureNumeric: true });
    const code = codeFromLink || codeFromTitle;

    if (!code) return;

    seen.add(link);

    results.push({
      title,
      link,
      code,
      cover,
      previewUrl
    });
  });

  // fallback：如果 .video-img-box 结构失效，遍历所有 jable 视频链接。
  if (results.length === 0) {
    $("a[href]").each((i, el) => {
      const $el = $(el);
      const href = $el.attr("href") || "";
      const link = toAbsoluteUrl(href);

      if (!link || !link.includes("jable.tv")) return;
      if (seen.has(link)) return;

      const codeFromLink = extractCodeFromJableLink(link);
      if (!codeFromLink) return;

      seen.add(link);

      results.push({
        title: $el.text().trim(),
        link,
        code: codeFromLink,
        cover: "",
        previewUrl: ""
      });
    });
  }

  const targetLoose = normalizeCode(targetCode);

  // 精确番号优先。
  const exact = results.filter(item => normalizeCode(item.code) === targetLoose);
  if (exact.length > 0) return exact;

  return results;
}

async function findJableDetailByCode(code) {
  const searchKeys = [
    code,
    code.replace(/-/g, "")
  ].filter(Boolean);

  const targetLoose = normalizeCode(code);

  for (const key of [...new Set(searchKeys)]) {
    const keyword = encodeURIComponent(key);
    const url = `${DEFAULT_BASE_URL}/search/${keyword}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${keyword}`;

    try {
      const html = await httpGet(url);
      const results = parseJableSearchResults(html, code);

      if (!results.length) continue;

      const exact = results.find(item => normalizeCode(item.code) === targetLoose);
      if (exact) return exact;

      // 保守策略：搜索到结果但没有精确番号，不返回。
      console.warn(`[jable_stream] 搜索到结果，但没有精确匹配番号：${code}`);
    } catch (e) {
      console.warn(`[jable_stream] 搜索失败：${key}`, e?.message || e);
    }
  }

  return null;
}

// ==================== Jable 详情页解析 ====================

function detectJableChineseSubtitle(html = "") {
  if (!html) return false;

  const $ = Widget.html.load(html);

  // 1. 最可靠：meta keywords 的第一个关键词是「中文字幕」。
  const keywords = $('meta[name="keywords"]').attr("content") || "";
  const firstKeyword = keywords
    .split(/[,，]/)
    .map(s => s.trim())
    .filter(Boolean)[0];

  if (firstKeyword === "中文字幕") {
    return true;
  }

  // 2. 次可靠：description 明确提到中文字幕。
  const description = $('meta[name="description"]').attr("content") || "";

  if (
    description.includes("中文字幕版") ||
    description.includes("更新至中文字幕") ||
    description.includes("中文字幕")
  ) {
    return true;
  }

  // 3. 兜底：整页中出现 chinese-subtitle 分类链接。
  const lowerHtml = String(html).toLowerCase();

  if (
    lowerHtml.includes("chinese-subtitle") ||
    lowerHtml.includes("chinese subtitle")
  ) {
    return true;
  }

  return false;
}

function extractJableHlsUrlFromHtml(html = "") {
  if (!html) return "";

  // Jable 原插件使用的核心逻辑：var hlsUrl = "..."
  const match = html.match(/var\s+hlsUrl\s*=\s*['"](.*?)['"]/i);

  if (match && match[1]) {
    return normalizeM3U8Url(match[1]);
  }

  // fallback：直接从 HTML 中找 m3u8。
  const fallback = html.match(/https?:\/\/[^"'\s<>]+\.m3u8[^"'\s<>]*/i);

  if (fallback && fallback[0]) {
    return normalizeM3U8Url(fallback[0]);
  }

  return "";
}

async function extractJableDetailInfo(detailLink) {
  try {
    const html = await httpGet(detailLink, {
      headers: {
        "Referer": "https://jable.tv/"
      }
    });

    const hlsUrl = extractJableHlsUrlFromHtml(html);
    const isChineseSubtitle = detectJableChineseSubtitle(html);

    return {
      hlsUrl,
      isChineseSubtitle
    };
  } catch (e) {
    console.warn("[jable_stream] 详情页加载失败：", e?.message || e);
    return {
      hlsUrl: "",
      isChineseSubtitle: false
    };
  }
}

// ==================== Stream 返回 ====================

function buildJableHeaders(detailLink) {
  return {
    "User-Agent": DEFAULT_HEADERS["User-Agent"],
    "Referer": detailLink || "https://jable.tv/",
    "Origin": "https://jable.tv"
  };
}

function buildStreamItem(name, description, url, detailLink) {
  return {
    name,
    description,
    url,
    customHeaders: buildJableHeaders(detailLink)
  };
}

async function buildStreamItems(matched, detailInfo, code) {
  const items = [];

  const detailLink = matched?.link || "";
  const hlsUrl = detailInfo?.hlsUrl || "";
  const previewUrl = matched?.previewUrl || "";
  const isChineseSubtitle = !!detailInfo?.isChineseSubtitle;

  if (hlsUrl) {
    const sourceName = isChineseSubtitle ? "Jable 中文字幕" : "Jable 正片";

    items.push(
      buildStreamItem(
        sourceName,
        `番号：${code}\n来源：Jable\n字幕：${isChineseSubtitle ? "中文字幕" : "无中文字幕标记"}\n详情页：${detailLink}`,
        hlsUrl,
        detailLink
      )
    );
  }

  if (previewUrl) {
    items.push(
      buildStreamItem(
        "Jable Preview",
        `番号：${code}\n来源：Jable\n类型：Preview\n详情页：${detailLink}`,
        previewUrl,
        detailLink
      )
    );
  }

  return items;
}

// ==================== Stream Source 入口 ====================

async function loadResource(params = {}) {
  try {
    const code = extractCodeFromParams(params);

    if (!code) {
      console.log("[jable_stream] 当前视频信息中未找到番号，跳过 Jable 匹配");
      return [];
    }

    console.log(`[jable_stream] 提取到番号：${code}`);

    const matched = await findJableDetailByCode(code);

    if (!matched || !matched.link) {
      console.log(`[jable_stream] 未找到 Jable 精确匹配：${code}`);
      return [];
    }

    console.log(`[jable_stream] 匹配到详情页：${matched.link}`);

    const detailInfo = await extractJableDetailInfo(matched.link);

    if (!detailInfo.hlsUrl && !matched.previewUrl) {
      console.log(`[jable_stream] 未能提取 Jable 正片或 Preview：${matched.link}`);
      return [];
    }

    console.log(`[jable_stream] 提取正片：${detailInfo.hlsUrl ? "成功" : "失败"}`);
    console.log(`[jable_stream] 提取 Preview：${matched.previewUrl ? "成功" : "失败"}`);
    console.log(`[jable_stream] 中文字幕：${detailInfo.isChineseSubtitle ? "是" : "否"}`);

    return await buildStreamItems(matched, detailInfo, code);
  } catch (e) {
    console.error("[jable_stream] loadResource 失败：", e?.message || e);
    return [];
  }
}
WidgetMetadata = {
  id: "a91porn.rex",
  title: "91视频(a91porn)",
  version: "1.7.0",
  requiredVersion: "0.0.1",
  description: "a91porn.com 91系国产视频站：频道即模块（最新/最热/加精等 13 个），每个模块内带标签分类 + 搜索 + 详情页播放",
  author: "rex module",
  site: "https://a91porn.com",
  // 站标：官方 manifest 只认 iconUrl / iconurl / iconURL（icon 是死字段会被忽略）
  iconUrl: "https://a91porn.com/brand/icon-aa712067-180.png",
  // 详情数据基本静态（标题/照片/相关），300s 缓存降低重复进详情的请求频次（防风控）
  detailCacheDuration: 300,
  // 每个频道一个模块，共用 loadList，用 constant 参数区分（one-rex.js 同款惯例）
  // category 的 enumOptions 用占位空数组，文件底部统一回填 TAG_CATEGORY_OPTIONS
  modules: [
    { id: "list-latest", title: "最新", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "latest" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-remen", title: "当前最热", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "remen" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-benyue", title: "本月最热", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "benyue" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-meiyue", title: "每月最热", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "meiyue" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-yuanchuang", title: "91原创", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "yuanchuang" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-jiajing", title: "最近加精", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "jiajing" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-benyue-shoucang", title: "本月收藏", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "benyue-shoucang" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-jingdian", title: "收藏最多", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "jingdian" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-gaoqing", title: "高清", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "gaoqing" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-changpian", title: "10分钟以上", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "changpian" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-chaochang", title: "20分钟以上", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "chaochang" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-taolun", title: "本月讨论", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "taolun" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    { id: "list-chigua", title: "吃瓜", functionName: "loadList", cacheDuration: 1800,
      params: [ { name: "channel", title: "频道", type: "constant", value: "chigua" }, { name: "category", title: "标签分类", type: "enumeration", enumOptions: [] }, { name: "page", title: "页码", type: "page" } ] },
    {
      id: "loadResource",
      title: "加载播放资源",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: [],
    },
  ],
  search: {
    id: "search",
    title: "搜索",
    functionName: "search",
    params: [
      { name: "keyword", title: "关键词", type: "input" },
      { name: "page", title: "页码", type: "page" },
    ],
  },
};

/* 13 个频道模块共用的标签分类枚举（与站点 /tag 热门标签核对），统一回填到上面的占位 */
const TAG_CATEGORY_OPTIONS = [
  { title: "不限", value: "" },
  { title: "自拍", value: "zipai" },
  { title: "约炮", value: "yuepao" },
  { title: "人妻", value: "renqi" },
  { title: "少妇", value: "shaofu" },
  { title: "巨乳", value: "juru" },
  { title: "大奶子", value: "danaizi" },
  { title: "黑丝", value: "heisi" },
  { title: "白丝", value: "baisi" },
  { title: "红丝", value: "hongsi" },
  { title: "丝袜", value: "siwa" },
  { title: "反差", value: "fancha" },
  { title: "极品美女", value: "jipinmeinv" },
  { title: "高颜值", value: "gaoyanzhi" },
  { title: "纯欲", value: "chunyu" },
  { title: "粉嫩", value: "fennen" },
  { title: "处女", value: "chunv" },
  { title: "女大学生", value: "xuesheng" },
  { title: "零零后", value: "linglinghou" },
  { title: "老婆", value: "laopo" },
  { title: "女友", value: "nvyou" },
  { title: "娇妻", value: "jiaoqi" },
  { title: "调教", value: "tiaojiao" },
  { title: "后入", value: "houru" },
  { title: "口交", value: "koujiao" },
  { title: "内射", value: "neishe" },
  { title: "无套", value: "wutao" },
  { title: "肛交", value: "gangjiao" },
  { title: "潮吹", value: "chaochui" },
  { title: "潮喷", value: "chaopen" },
  { title: "自慰", value: "ziwei" },
  { title: "出轨", value: "chugui" },
  { title: "换妻", value: "huanqi" },
  { title: "单男", value: "dannan" },
  { title: "3P", value: "3p" },
  { title: "4P", value: "4p" },
  { title: "闺蜜", value: "guimi" },
  { title: "姐妹", value: "jiemei" },
  { title: "护士", value: "hushi" },
  { title: "服务员", value: "fuwuyuan" },
  { title: "乘务员", value: "chengwuyuan" },
  { title: "公务员", value: "gongwuyuan" },
  { title: "白领", value: "bailing" },
  { title: "宝妈", value: "baoma" },
  { title: "阿姨", value: "ayi" },
  { title: "姐姐", value: "jiejie" },
  { title: "cosplay", value: "cosplay" },
  { title: "健身", value: "jianshen" },
  { title: "户外", value: "huwai" },
  { title: "车震", value: "chezhen" },
  { title: "办公室", value: "bangongshi" },
  { title: "酒店", value: "jiudian" },
  { title: "厨房", value: "chufang" },
  { title: "厕所", value: "cesuo" },
  { title: "公厕", value: "gongce" },
  { title: "露脸", value: "loulian" },
  { title: "母狗", value: "mugou" },
  { title: "骚货", value: "saohuo" },
  { title: "吃瓜", value: "chigua" },
  { title: "多机位", value: "duojiwei" },
  { title: "第一视角", value: "diyishijiao" },
  { title: "合集", value: "heji" },
  { title: "BBW", value: "bbw" },
  { title: "黑人", value: "heiren" },
  { title: "韩国", value: "hanguo" },
  { title: "日系", value: "rixi" },
  { title: "AV", value: "av" },
  { title: "白虎", value: "baihu" },
  { title: "嫩鲍", value: "nenbao" },
  { title: "腿交", value: "tuijiao" },
  { title: "毒龙", value: "dulong" },
  { title: "按摩", value: "anmo" },
  { title: "爆操", value: "baocao" },
];
for (const _m of WidgetMetadata.modules) {
  const _cat = _m.params && _m.params.find((p) => p.name === "category");
  if (_cat) _cat.enumOptions = TAG_CATEGORY_OPTIONS;
}

/* ===================== 常量与工具 ===================== */

const BASE = "https://a91porn.com";
// 站点详情 URL 严格校验：https + 完整主机 + 纯数字路径（外站/子域/查询串内嵌一律拒绝）
const OWN_LINK_RE = /^a91:(\d+)$/;
const OWN_URL_RE = /^https:\/\/a91porn\.com\/(\d+)$/;

function decodeEntities(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function durationToSeconds(text) {
  const m = /(\d+):(\d{2})(?::(\d{2}))?/.exec(text || "");
  if (!m) return 0;
  if (m[3] !== undefined) return Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]);
  return Number(m[1]) * 60 + Number(m[2]);
}

// 站点没有图片头像（详情页/作者页都是首字母文字头像 p91-avatar），
// 这里按站点同款风格生成首字母 SVG data URI；背景色由 slug 哈希固定，同一作者永远同色。
function authorAvatar(name, slug) {
  const display = String(name || "?").trim();
  const ch = (display.charAt(0) || "?").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const PALETTE = ["#c14b5a", "#4b74c1", "#4bc18f", "#a14bc1", "#c17c4b", "#3aa0a8", "#c14b9e"];
  let h = 0;
  const key = String(slug || display);
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  const bg = PALETTE[h % PALETTE.length];
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">'
    + '<rect width="120" height="120" fill="' + bg + '"/>'
    + '<text x="60" y="63" font-family="system-ui,-apple-system,sans-serif" font-size="54" font-weight="600" fill="#ffffff" text-anchor="middle" dominant-baseline="central">' + ch + '</text>'
    + '</svg>';
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

async function httpGetText(url, headers) {
  const res = await Widget.http.get(url, { headers: headers || { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1", "Referer": BASE + "/" } });
  const body = res && res.data !== undefined ? res.data : res;
  return typeof body === "string" ? body : String(body);
}

async function httpGetJson(url) {
  const res = await Widget.http.get(url, { headers: { "Accept": "application/json", "Referer": BASE + "/" } });
  let body = res && res.data !== undefined ? res.data : res;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { return null; }
  }
  return body;
}

/* ===================== 列表解析 ===================== */

// 卡片结构（服务端渲染，标记固定）：
// <div class="p91-tile" data-id="19809">
//   <a class="p91-tilelink" href="https://a91porn.com/19809">
//     <div class="p91-thumb ..." data-preview="...preview.webp" ...>
//       <picture>...<img class="p91-u-fill" src="https://m3u8.91porngua.com/covers/<hash>/og.jpg" ...>
//       <span class="p91-tlen">04:48</span>
//     <h3>标题</h3>
//   </a>
//   <div class="p91-tmeta"><span class="p91-tby"><a href=".../u/<slug>">作者</a></span>...
function parseTiles(html) {
  const items = [];
  const starts = [];
  const re = /<div class="p91-tile" data-id="(\d+)">/g;
  let m;
  while ((m = re.exec(html))) starts.push({ id: m[1], idx: m.index, end: m.index + m[0].length });
  for (let i = 0; i < starts.length; i++) {
    const chunk = html.slice(starts[i].end, i + 1 < starts.length ? starts[i + 1].idx : starts[i].end + 8000);
    const item = parseTileChunk(starts[i].id, chunk);
    if (item) items.push(item);
  }
  return items;
}

function parseTileChunk(id, chunk) {
  const linkM = /class="p91-tilelink" href="https:\/\/a91porn\.com\/(\d+)"/.exec(chunk);
  const titleM = /<h3>([\s\S]*?)<\/h3>/.exec(chunk);
  if (!titleM) return null;
  const title = decodeEntities(titleM[1].replace(/<[^>]+>/g, ""));
  if (!title) return null;
  // 竖屏卡片 class 是 "p91-u-fill p91-contain"，不能用精确匹配（漏掉约四成竖屏封面）
  const coverM = /<img class="p91-u-fill[^"]*" src="([^"]+)"/.exec(chunk);
  const durM = /class="p91-tlen">([^<]+)</.exec(chunk);
  const previewM = /data-preview="([^"]+)"/.exec(chunk);
  const byM = /class="p91-tby"><a href="https:\/\/a91porn\.com\/u\/([^"]+)">([^<]+)<\/a>/.exec(chunk);
  // 封面变体只信站点自己声明的 srcset（实测竖屏封面只有 w480 一档，盲改 og.jpg → w1280 会 404 裂图）：
  // 第一个 srcset（移动端 source）取最小图当列表封面；最后一个 srcset（桌面 source）取最大图当详情头图。
  // 拿不到 srcset 时保持 og.jpg 原图（原图必定存在），绝不产出站点没声明的 URL。
  let coverUrl = coverM ? decodeEntities(coverM[1]) : "";
  let backdropPath = coverUrl;
  const setMatches = [];
  let sm;
  const setRe = /srcset="([^"]+)"/g;
  while ((sm = setRe.exec(chunk))) setMatches.push(sm[1]);
  const parseSet = (s) => s.split(",").map((x) => x.trim().split(/\s+/)[0]).filter((u) => /^https?:\/\//.test(u));
  if (coverUrl && setMatches.length) {
    const first = parseSet(setMatches[0]);
    const last = parseSet(setMatches[setMatches.length - 1]);
    if (first.length) coverUrl = first[0];
    if (last.length) backdropPath = last[last.length - 1];
  }
  if (!coverUrl && previewM) coverUrl = decodeEntities(previewM[1]); // 极端兜底：动图预览当封面
  const secs = durationToSeconds(durM && durM[1]);
  // 媒体身份必须与 loadDetail 完全一致（官方示例：自有条目 id 用稳定命名空间）：
  // 列表裸数字、详情 "a91:xxx" 会让播放器 seek/重建会话时认不出同一个媒体
  const item = {
    id: "a91:" + id,
    type: "url",
    mediaType: "movie",
    title: title,
    coverUrl: coverUrl,
    backdropPath: backdropPath,
    link: "a91:" + id,
  };
  if (backdropPath === "") delete item.backdropPath;
  if (secs > 0) item.duration = secs;
  if (durM) item.durationText = durM[1].trim();
  // 注意：站点的 data-preview 是 webp 动图（网页悬停预览用），不能填进 previewUrl——
  // rex 的 previewUrl 是"媒体预览"，快进时播放器会拉它当视频放，图片 URL 会导致播放器跌进音频/音乐模式
  if (byM) item.description = "作者：" + decodeEntities(byM[2]);
  return item;
}

// 频道/分类 slug → 列表 URL。站点翻页格式：/<slug>/page/N（首页为 /page/N）
function listUrl(slug, page) {
  if (!slug) return BASE + "/" + (page > 1 ? "page/" + page : "");
  return BASE + "/" + slug + (page > 1 ? "/page/" + page : "");
}

/* ===================== 播放源解析 ===================== */

// 播放源两条路径（p91.js 实测）：
// 1) 详情页内联：data-src="https://m3u8.../index.m3u8" + data-hls（未签名直链）
// 2) 接口：GET /api/play/{id}/{index} → {"src","signed","hls","poster","ttl"}（会员/签名地址走这条）
// m3u8 域名 m3u8.91porngua.com 为 AES-128 VOD，实测分片/密钥均无需 Referer。
function parseOwnLink(raw) {
  if (raw == null) return null;
  const s = String(raw).trim();
  if (!s) return null;
  const m = OWN_LINK_RE.exec(s);
  if (m) return m[1];
  const u = OWN_URL_RE.exec(s);
  if (u) return u[1];
  return null;
}

/* ===================== 播放源缓存（防风控降频） ===================== */

// 起播解析不重拉详情页整页 HTML（约百 KB）：优先复用缓存、其次直调轻量 /api/play JSON（约百字节），
// 只有接口异常才回退整页抓内联直链。同一影片"详情→起播→重播"从最多 3~4 次请求降到常驻 0~1 次。
const PLAY_MEMO = {}; // 会话内缓存 id -> { url, at, ttlMs }
function playCacheKey(id) { return "play:" + id; }

function cacheGetPlay(id) {
  const now = Date.now();
  const mem = PLAY_MEMO[id];
  if (mem && mem.url && now - mem.at < mem.ttlMs) return mem.url;
  try {
    if (Widget.storage && typeof Widget.storage.get === "function") {
      const raw = Widget.storage.get(playCacheKey(id));
      if (raw) {
        const obj = JSON.parse(raw);
        if (obj && obj.url && now - obj.at < obj.ttlMs) { PLAY_MEMO[id] = obj; return obj.url; }
      }
    }
  } catch (e) { /* 存储损坏按未命中处理 */ }
  return null;
}

function cacheSetPlay(id, url, ttlMs) {
  const obj = { url: url, at: Date.now(), ttlMs: ttlMs };
  PLAY_MEMO[id] = obj;
  try {
    if (Widget.storage && typeof Widget.storage.set === "function") {
      Widget.storage.set(playCacheKey(id), JSON.stringify(obj));
    }
  } catch (e) { /* 存储失败只丢缓存，不影响播放 */ }
}

// 未签名直链相对稳定 → 缓存 30 分钟；签名地址按接口 ttl 收敛（≤300s，留出播放余量）
function playTtlMs(data) {
  if (data && data.signed) return Math.max(60, Math.min(Number(data.ttl) || 600, 300)) * 1000;
  return 30 * 60 * 1000;
}

async function resolvePlayUrl(id) {
  const cached = cacheGetPlay(id);
  if (cached) return cached; // 缓存命中：0 请求
  const data = await httpGetJson(BASE + "/api/play/" + id + "/0");
  if (data && data.src) {
    const url = String(data.src);
    cacheSetPlay(id, url, playTtlMs(data));
    return url;
  }
  // 兜底（仅失败路径才整页请求）：详情页内联直链
  const page = await httpGetText(BASE + "/" + id);
  const boxM = /<div class="p91-player[^"]*" data-play="\d+" data-index="\d+" data-src="([^"]+)"/.exec(page);
  if (boxM) {
    const url = decodeEntities(boxM[1]);
    cacheSetPlay(id, url, 30 * 60 * 1000);
    return url;
  }
  return null;
}

/* ===================== 列表模块 ===================== */

async function loadList(params = {}) {
  try {
    const page = Math.max(1, Number(params.page || 1));
    // 优先级：详情页点标签带入的 genreId > 分类枚举 > 频道枚举 > 作者页
    let slug = "";
    if (params.genreId) slug = String(params.genreId);
    else if (params.category) slug = String(params.category);
    else if (params.peopleId) slug = String(params.peopleId);
    else slug = String(params.channel || "latest");

    // genreId 支持详情页标签/作者页两种：作者 slug 在 peopleId 里带 u: 前缀
    let url;
    if (params.peopleId && !params.genreId && !params.category) {
      url = BASE + "/u/" + encodeURIComponent(String(params.peopleId)) + (page > 1 ? "/page/" + page : "");
    } else {
      url = listUrl(slug === "latest" ? "" : slug, page);
    }

    const html = await httpGetText(url);
    const items = parseTiles(html);
    if (!items.length) throw new Error("列表解析为空: " + url);
    return items;
  } catch (error) {
    console.error("[a91porn] loadList 失败:", error.message || error);
    throw error;
  }
}

/* ===================== 详情页 ===================== */

async function loadDetail(link) {
  try {
    const id = parseOwnLink(link);
    if (!id) return null; // 非本站链接（裸数字/其他前缀/伪造主机）直接返回 null，不发请求
    const html = await httpGetText(BASE + "/" + id);

    const titleM = /<h1 class="p91-vtitle">([\s\S]*?)<\/h1>/.exec(html);
    const descM = /<meta property="og:description" content="([^"]*)"/.exec(html);
    const dateM = /<time datetime="(\d{4}-\d{2}-\d{2})"/.exec(html);
    const byM = /class="p91-vauthor" href="https:\/\/a91porn\.com\/u\/([^"]+)"[\s\S]*?<b>([^<]+)<\/b>/.exec(html);
    const durM = /class="p91-tlen">([^<]+)</.exec(html);

    // 标签 → genreItems（带 slug id，详情页点击后 App 会以 params.genreId 重开列表）
    const genreItems = [];
    const tagBlockM = /<div class="p91-vtags">([\s\S]*?)<\/div>/.exec(html);
    if (tagBlockM) {
      const tagRe = /<a href="https:\/\/a91porn\.com\/([a-z0-9-]+)">([^<]+)<\/a>/g;
      let t;
      while ((t = tagRe.exec(tagBlockM[1]))) genreItems.push({ id: t[1], title: decodeEntities(t[2]) });
    }

    // 现场照片 → backdropPaths（独立字段，详情页顶部轮播）
    const backdropPaths = [];
    const seen = {};
    const galRe = /src="(https:\/\/m3u8\.91porngua\.com\/gallery\/[^"]+)"/g;
    let g;
    while ((g = galRe.exec(html)) && backdropPaths.length < 12) {
      const u = decodeEntities(g[1]);
      if (!seen[u]) { seen[u] = true; backdropPaths.push(u); }
    }

    // 播放地址只预热缓存，不写进 detail.videoUrl：
    // 单一播放入口（loadResource）避免 seek 时在 videoUrl 与资源模块之间来回切换造成媒体重识别
    const srcM = /<div class="p91-player[^"]*" data-play="\d+" data-index="\d+" data-src="([^"]+)"/.exec(html);
    if (srcM) {
      cacheSetPlay(id, decodeEntities(srcM[1]), 30 * 60 * 1000);
    }

    // 相关推荐：页面里其余卡片（接下来看/同分类/更多视频），排除自身
    const related = parseTiles(html).filter((it) => it.id !== String(id)).slice(0, 24);

    const detail = {
      id: "a91:" + id,
      type: "url",
      mediaType: "movie",
      title: titleM ? decodeEntities(titleM[1].replace(/<[^>]+>/g, "")) : "",
      link: "a91:" + id,
    };
    const listCover = /<meta property="og:image" content="([^"]+)"/.exec(html);
    if (listCover) {
      // og:image 原图必定存在；不盲派生 w1280/w768 变体（竖屏封面没有这些尺寸，派生 URL 会 404）
      detail.coverUrl = decodeEntities(listCover[1]);
      detail.backdropPath = detail.coverUrl;
    }
    if (descM) detail.description = decodeEntities(descM[1]);
    if (dateM) detail.releaseDate = dateM[1];
    if (durM) {
      detail.durationText = durM[1].trim();
      const secs = durationToSeconds(durM[1]);
      if (secs > 0) detail.duration = secs;
    }
    if (genreItems.length) detail.genreItems = genreItems;
    if (byM) {
      // id = 作者 slug：详情页点头像/作者时 App 以 params.peopleId 重开列表模块，
      // loadList 里 peopleId 优先于频道 constant → /u/<slug>/page/N 作者影片列表
      detail.peoples = [{ id: byM[1], title: decodeEntities(byM[2]), avatar: authorAvatar(byM[2], byM[1]) }];
    }
    if (backdropPaths.length) detail.backdropPaths = backdropPaths;
    if (related.length) detail.relatedItems = related;
    return detail;
  } catch (error) {
    console.error("[a91porn] loadDetail 失败:", error.message || error);
    return null;
  }
}

/* ===================== 播放资源 ===================== */

// 本站专用解析模块：只认 a91:<id> 前缀与严格的本站详情 URL。
// 裸数字、TMDB/IMDb/其他模块前缀、外站 URL、查询串内嵌本站链接、伪造主机一律返回 [] 且不发请求。
async function loadResource(params = {}) {
  try {
    const raw = params.link != null ? params.link : params.id;
    if (raw == null) return [];
    const id = parseOwnLink(raw);
    if (!id) return [];
    const url = await resolvePlayUrl(id);
    if (!url) return [];
    // 本站是 AES-128 加密 HLS。整个界面被切成音乐卡片 = 客户端按音频会话播放了这条流，
    // 必须用 app（软件解码/内置内核）播放，不能留空让系统播放器自动选择。
    return [
      {
        name: "默认线路",
        description: "HLS | AES-128 | 91porn",
        url: url,
        playerType: "app",
      },
    ];
  } catch (error) {
    console.error("[a91porn] loadResource 失败:", error.message || error);
    return [];
  }
}

/* ===================== 搜索 ===================== */

async function search(params = {}) {
  try {
    const kw = String(params.keyword || "").trim();
    if (!kw) return [];
    const page = Math.max(1, Number(params.page || 1));
    const url = BASE + "/search?q=" + encodeURIComponent(kw) + (page > 1 ? "&page=" + page : "");
    const html = await httpGetText(url);
    return parseTiles(html);
  } catch (error) {
    console.error("[a91porn] search 失败:", error.message || error);
    throw error;
  }
}

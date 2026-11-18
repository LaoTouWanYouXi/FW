WidgetMetadata = {
  id: "a91porn.rex",
  title: "91视频(a91porn)",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "a91porn.com 91系国产视频站：最新/最热/加精等频道 + 标签分类 + 搜索 + 详情页播放",
  author: "rex module",
  site: "https://a91porn.com",
  detailCacheDuration: 60,
  modules: [
    {
      id: "loadList",
      title: "视频列表",
      functionName: "loadList",
      cacheDuration: 1800,
      requiresWebView: false,
      sectionMode: false,
      params: [
        {
          name: "channel",
          title: "频道",
          type: "enumeration",
          enumOptions: [
            { title: "最新", value: "latest" },
            { title: "当前最热", value: "remen" },
            { title: "本月最热", value: "benyue" },
            { title: "每月最热", value: "meiyue" },
            { title: "91原创", value: "yuanchuang" },
            { title: "最近加精", value: "jiajing" },
            { title: "本月收藏", value: "benyue-shoucang" },
            { title: "收藏最多", value: "jingdian" },
            { title: "高清", value: "gaoqing" },
            { title: "10分钟以上", value: "changpian" },
            { title: "20分钟以上", value: "chaochang" },
            { title: "本月讨论", value: "taolun" },
            { title: "吃瓜", value: "chigua" },
          ],
        },
        {
          name: "category",
          title: "标签分类",
          type: "enumeration",
          enumOptions: [
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
          ],
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
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
    title: "搜索",
    functionName: "search",
    params: [
      { name: "keyword", title: "关键词", type: "input" },
      { name: "page", title: "页码", type: "page" },
    ],
  },
};

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
  const coverM = /<img class="p91-u-fill" src="([^"]+)"/.exec(chunk);
  const durM = /class="p91-tlen">([^<]+)</.exec(chunk);
  const previewM = /data-preview="([^"]+)"/.exec(chunk);
  const byM = /class="p91-tby"><a href="https:\/\/a91porn\.com\/u\/([^"]+)">([^<]+)<\/a>/.exec(chunk);
  let coverUrl = coverM ? decodeEntities(coverM[1]) : "";
  let backdropPath = "";
  if (coverUrl && /\/og\.jpg$/.test(coverUrl)) {
    backdropPath = coverUrl.replace(/\/og\.jpg$/, "/w1280.webp"); // 详情页头图用更高清的横图
    coverUrl = coverUrl.replace(/\/og\.jpg$/, "/w480.webp");      // 列表缩略图用轻量 webp
  }
  const secs = durationToSeconds(durM && durM[1]);
  const item = {
    id: String(id),
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
  if (previewM) item.previewUrl = decodeEntities(previewM[1]);
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

async function resolvePlayUrl(id) {
  const page = await httpGetText(BASE + "/" + id);
  const boxM = /<div class="p91-player[^"]*" data-play="\d+" data-index="\d+" data-src="([^"]+)"/.exec(page);
  if (boxM) return decodeEntities(boxM[1]);
  const data = await httpGetJson(BASE + "/api/play/" + id + "/0");
  if (data && data.src) return String(data.src);
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

    // 内联播放地址，缺失时走 /api/play（会员/签名视频）
    let videoUrl = null;
    const srcM = /<div class="p91-player[^"]*" data-play="\d+" data-index="\d+" data-src="([^"]+)"/.exec(html);
    if (srcM) {
      videoUrl = decodeEntities(srcM[1]);
    } else {
      const data = await httpGetJson(BASE + "/api/play/" + id + "/0");
      if (data && data.src) videoUrl = String(data.src);
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
      detail.coverUrl = decodeEntities(listCover[1]);
      if (/\/og\.jpg$/.test(detail.coverUrl)) {
        detail.backdropPath = detail.coverUrl.replace(/\/og\.jpg$/, "/w1280.webp");
        detail.detailPoster = detail.coverUrl.replace(/\/og\.jpg$/, "/w768.webp");
      }
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
      detail.peoples = [{ id: byM[1], title: decodeEntities(byM[2]) }];
    }
    if (backdropPaths.length) detail.backdropPaths = backdropPaths;
    if (related.length) detail.relatedItems = related;
    if (videoUrl) detail.videoUrl = videoUrl;
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
    return [
      {
        name: "默认线路",
        description: "HLS | 91porn",
        url: url,
        playerType: "system",
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

var WidgetMetadata = {
  id: "javhd.rex",
  title: "JAVHD",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  description: "javhd.com 日本 AV 站：最新/热门/顶级/原生日语字幕四路片单 + 分类筛选 + 搜索 + 详情播放",
  author: "rex module",
  site: "https://javhd.com",
  iconUrl: "https://javhd.com/assets/images/favicons/pwa-192x192.png",
  // 详情页约 120KB HTML，站方风控不严但没必要反复拉；播放地址每次实时取（签名 ~20 分钟过期，不能缓存）
  detailCacheDuration: 300,
  globalParams: [
    {
      name: "category",
      title: "分类",
      type: "enumeration",
      value: "",
      enumOptions: [
        { title: "不限", value: "" },
        { title: "亚洲", value: "asian" },
        { title: "无码", value: "uncensored" },
        { title: "口交", value: "blowjob" },
        { title: "重口味", value: "hardcore" },
        { title: "传教士式", value: "missionary" },
        { title: "手交", value: "handjob" },
        { title: "后入式", value: "doggystyle" },
        { title: "指交", value: "fingering" },
        { title: "骑乘", value: "riding" },
        { title: "黑发", value: "brunette" },
        { title: "日本", value: "japanese" },
        { title: "自慰", value: "masturbation" },
        { title: "内衣", value: "lingerie" },
        { title: "小胸", value: "small-tits" },
        { title: "巨乳", value: "big-tits" },
        { title: "毛茸茸的阴部", value: "hairy-pussy" },
        { title: "内射", value: "creampie" },
        { title: "反向女牛仔", value: "reverse-cowgirl" },
        { title: "玩具", value: "toys" },
        { title: "剃毛小穴", value: "shaved-pussy" },
        { title: "天然巨乳", value: "natural-tits" },
        { title: "射精", value: "cumshot" },
        { title: "亲吻", value: "kissing" },
        { title: "年轻女孩", value: "teen" },
        { title: "跪姿", value: "on-her-knees" },
        { title: "震动棒", value: "vibrator" },
        { title: "内裤", value: "panties" },
        { title: "有码", value: "censored" },
        { title: "乳头挑逗", value: "nipple-play" },
        { title: "舔阴", value: "pussy-licking" },
        { title: "熟女", value: "milf" },
        { title: "公开私处", value: "open-pussy" },
        { title: "湿穴", value: "wet-pussy" },
        { title: "业余", value: "amateur" },
        { title: "张开", value: "spreading" },
        { title: "修剪阴部", value: "trimmed-pussy" },
        { title: "口内射精", value: "cum-in-mouth" },
        { title: "第一人称视角", value: "pov" },
        { title: "脱衣", value: "undressing" },
        { title: "站立性爱", value: "standing-sex" },
        { title: "苗条", value: "slim" },
        { title: "丝袜", value: "stockings" },
        { title: "裙底风光", value: "upskirt" },
        { title: "日本特写", value: "japanese-close-up" },
        { title: "乳交", value: "tit-fuck" },
        { title: "小弟弟", value: "small-cock" },
        { title: "完美翘臀", value: "perfect-ass" },
        { title: "短裙", value: "mini-skirt" },
        { title: "床上性爱", value: "bed-sex" },
        { title: "第一人称口交", value: "pov-blowjob" },
        { title: "粉嫩小穴", value: "pink-pussy" },
        { title: "饥渴", value: "horny" },
        { title: "三人行", value: "threesome" },
        { title: "69式", value: "69" },
        { title: "短发", value: "short-hair" },
        { title: "可爱", value: "cute" },
        { title: "亚洲口交", value: "asian-blowjob" },
        { title: "丁字裤", value: "thong" },
        { title: "插入", value: "insertions" },
        { title: "高跟鞋", value: "high-heels" },
        { title: "自慰独奏", value: "masturbation-solo" },
        { title: "颜射", value: "facial-cumshot" },
        { title: "口交互传", value: "pussy-to-mouth" },
        { title: "绝色", value: "gorgeous" },
        { title: "亚洲美女", value: "asian-babe" },
        { title: "美女", value: "beauty" },
        { title: "群交", value: "group-sex" },
        { title: "裸体", value: "nude" },
        { title: "瘦小", value: "skinny" },
        { title: "亚洲少女", value: "asian-teen-18" },
        { title: "双人口交", value: "double-blowjob" },
        { title: "纹身", value: "tattoo" },
        { title: "毛发浓密", value: "hairy" },
        { title: "骑脸", value: "face-sitting" },
        { title: "浴室", value: "bathroom" },
        { title: "肛交", value: "anal" },
        { title: "阴唇", value: "pussylips" },
        { title: "双男一女", value: "mmf" },
        { title: "情侣", value: "couple" },
        { title: "舔肛", value: "ass-licking" },
        { title: "金发", value: "blonde" },
        { title: "大屁股", value: "big-butt" },
        { title: "独身女孩", value: "sologirl" },
        { title: "完美身材", value: "perfect-body" },
        { title: "女性高潮", value: "female-orgasm" },
        { title: "卧室", value: "bedroom" },
        { title: "大鸡巴", value: "big-cock" },
        { title: "亚洲高潮", value: "asian-orgasm" },
        { title: "亚洲巨臀", value: "asian-big-ass" },
        { title: "色情明星", value: "pornstar" },
        { title: "乳头", value: "nipples" },
        { title: "红发", value: "redhead" },
        { title: "渔网", value: "fishnet" },
        { title: "丰满熟女", value: "busty-milf" },
        { title: "火辣熟女", value: "hot-milf" },
        { title: "性感", value: "sensual" },
        { title: "校园", value: "school" },
        { title: "日本丝袜", value: "japanese-pantyhose" },
        { title: "恋足", value: "foot-fetish" },
        { title: "比基尼", value: "bikini" },
        { title: "女同", value: "lesbian" },
        { title: "丰满", value: "curvy" },
        { title: "恋物癖", value: "fetish" },
        { title: "户外", value: "outdoor" },
        { title: "捆绑调教", value: "bdsm" }
      ]
    },
    // 站点直连在大陆不可达，是否可用完全取决于设备是否已挂代理；这里不保存代理配置，只提示
    { name: "hint", title: "提示", type: "constant", value: "站点需代理访问，播放为 MP4 直链" }
  ],
  modules: [
    {
      id: "list-justadded",
      title: "最新",
      functionName: "loadList",
      cacheDuration: 900,
      params: [
        { name: "sort", title: "排序", type: "constant", value: "justadded" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "list-popular",
      title: "热门",
      functionName: "loadList",
      cacheDuration: 1800,
      params: [
        { name: "sort", title: "排序", type: "constant", value: "popular" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "list-top",
      title: "顶级",
      functionName: "loadList",
      cacheDuration: 1800,
      params: [
        { name: "sort", title: "排序", type: "constant", value: "top" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "list-subtitles",
      title: "带字幕",
      functionName: "loadList",
      cacheDuration: 3600,
      params: [
        { name: "sort", title: "排序", type: "constant", value: "subtitles" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "loadResource",
      title: "加载播放资源",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: []
    }
  ],
  search: {
    id: "search",
    title: "搜索",
    functionName: "search",
    params: [
      { name: "keyword", title: "关键词", type: "input" },
      { name: "page", title: "页码", type: "page" }
    ]
  }
};

/* ===================== 常量与工具 ===================== */

var BASE = "https://javhd.com";
// 站点对普通 UA 的静态请求不加校验，但缺少浏览器 UA 时偶发返回空模板，固定一个桌面 UA
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

function decodeEntities(s) {
  return String(s == null ? "" : s)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
}

function htmlToText(s) {
  return decodeEntities(String(s == null ? "" : s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
}

// "1.9k" / "34" / "    90\n" → 数字
function parseCount(text) {
  var m = /([\d.]+)\s*([kKmM]?)/.exec(String(text == null ? "" : text));
  if (!m) return 0;
  var n = parseFloat(m[1]);
  if (!isFinite(n)) return 0;
  var unit = m[2].toLowerCase();
  if (unit === "k") n *= 1000;
  else if (unit === "m") n *= 1000000;
  return Math.round(n);
}

// "08:33" / "1:02:03" → 秒
function parseClock(text) {
  var m = /(\d+):(\d{2})(?::(\d{2}))?/.exec(String(text || ""));
  if (!m) return 0;
  if (m[3] !== undefined) return Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]);
  return Number(m[1]) * 60 + Number(m[2]);
}

function formatClock(seconds) {
  var s = Math.max(0, Math.round(Number(seconds) || 0));
  var h = Math.floor(s / 3600);
  var m = Math.floor((s % 3600) / 60);
  var sec = s % 60;
  var pad = function (n) { return n < 10 ? "0" + n : String(n); };
  return h > 0 ? h + ":" + pad(m) + ":" + pad(sec) : pad(m) + ":" + pad(sec);
}

// 缩略图统一升到 1130x706（站点同一路径换尺寸即可，无需额外接口）
function bigThumb(url) {
  var u = String(url || "");
  if (!u) return "";
  return u.replace(/\/\d{3,4}x\d{3,4}\//, "/1130x706/");
}

function detailLink(id) {
  return "javhd:" + String(id);
}

// 站点有三套编号，必须分清：
//   1) 列表卡片上的短 id（/zh/id/88404/...）——只有它能喂 /zh/id/{id} 路由；
//   2) 详情页 content-id（也叫 cms id，131328）——只有它能让 player_api 返回播放源；
//   3) slug 里的时间戳（.../video/1794988401-xxx）——什么路由都不认，只能作为条目标识。
// 因此条目 link 一律存完整站点 URL，详情/播放都按 URL 直接访问，避免编号猜错。
function parseTarget(raw) {
  if (raw == null) return null;
  var s = String(raw).trim();
  if (!s) return null;
  var m = /^javhd:(\d+)$/.exec(s);
  if (m) return { key: m[1], url: BASE + "/zh/id/" + m[1] };
  if (/^\d+$/.test(s)) return { key: s, url: BASE + "/zh/id/" + s };
  // 只有 /zh/id/{短id} 这种 URL 才有可用作标识的短 id；
  // slug URL 里的数字是时间戳，任何路由都不认，key 留空（详情靠 URL 本身、播放靠 content-id）
  if (/^https?:\/\//i.test(s)) {
    return { key: (/\/id\/(\d+)/.exec(s) || [])[1] || "", url: s };
  }
  if (s.charAt(0) === "/") {
    return { key: (/\/id\/(\d+)/.exec(s) || [])[1] || "", url: BASE + s };
  }
  return null;
}

/* ===================== HTTP ===================== */

// 列表/搜索/详情接口：同一个 URL 带上 X-Requested-With 头就返回 JSON 模板，
// 不带则返回整页 HTML（约 750KB），所以这些请求必须带 XHR 头
async function getJsonXhr(url) {
  var r = await Widget.http.get(url, {
    headers: {
      "User-Agent": UA,
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": BASE + "/zh/"
    }
  });
  var body = r && r.data !== undefined ? r.data : r;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) {
      throw new Error("javhd: 接口返回非 JSON（可能需要代理访问）");
    }
  }
  return body;
}

async function getHtml(url) {
  var r = await Widget.http.get(url, {
    headers: { "User-Agent": UA, "Referer": BASE + "/zh/" }
  });
  var body = r && r.data !== undefined ? r.data : r;
  return typeof body === "string" ? body : String(body);
}

/* ===================== 列表解析 ===================== */

// 列表 JSON 里的 template 是一串 <thumb-component ...>，属性值用 &quot; 实体编码。
// 只取 type-thumb="video" 的卡片（同一个模板里可能混入 category/studio/model）。
function parseThumbComponents(template) {
  var text = String(template || "");
  if (!text) return [];
  var items = [];
  var chunks = text.split(/<thumb-component\b/i);
  for (var i = 1; i < chunks.length; i++) {
    var chunk = chunks[i];
    var attr = function (name) {
      var re = new RegExp("\\b" + name + "\\s*=\\s*\"([^\"]*)\"", "i");
      var m = re.exec(chunk);
      return m ? decodeEntities(m[1]) : "";
    };
    var type = attr("type-thumb");
    if (type && type !== "video") continue;
    var id = attr("video-id");
    var link = attr("link-content");
    var title = attr("title");
    if (!id && link) {
      var lm = /-(\d+)(?:\?|$)/.exec(link);
      if (lm) id = lm[1];
      if (!id) {
        var im = /\/id\/(\d+)/.exec(link);
        if (im) id = im[1];
      }
    }
    // 列表卡片也可能是短 id 链接（/zh/id/88404/...），统一保留链接上的 id 用于详情
    if (!id || !title) continue;
    var item = {
      id: detailLink(id),
      type: "url",
      mediaType: "movie",
      title: title,
      link: link || (BASE + "/zh/id/" + id),
      coverUrl: bigThumb(attr("url-thumb")),
      coverRatio: 16 / 9
    };
    var views = parseCount(attr("views"));
    if (views > 0) item.subtitle = "观看 " + (views >= 1000 ? (views / 1000).toFixed(1) + "k" : String(views));
    var secs = parseClock(attr("time") || attr("video-length"));
    if (secs > 0) {
      item.duration = secs;
      item.durationText = formatClock(secs);
    }
    var label = attr("has-label");
    if (label === "premiumFree") item.genreTitle = "免费";
    else if (label === "premium") item.genreTitle = "会员";
    // 悬停预览：站点给的是 5 秒无声 mp4（不是封面图），是真正的视频预览，可直接当 previewUrl
    var preview = attr("video-preview");
    if (preview) item.previewUrl = preview;
    items.push(item);
  }
  return items;
}

// 排序 slug → 列表路径。站点只接受 <sort>/all[/page]，缺 all 段会 404/302
function listPath(sort, category, page) {
  var s = ["justadded", "popular", "top", "subtitles"].indexOf(String(sort)) >= 0 ? String(sort) : "justadded";
  var p = Math.max(1, Number(page) || 1);
  var seg = category ? "/category/" + encodeURIComponent(category) + "/" + s + "/all" : "/" + s + "/all";
  return "/zh/japanese-porn-videos" + seg + (p > 1 ? "/" + p : "");
}

/* ===================== 列表 / 搜索 ===================== */

async function loadList(params) {
  params = params || {};
  var page = Math.max(1, Number(params.page) || 1);
  var sort = params.sort || "justadded";
  var category = params.category || "";
  var url = BASE + listPath(sort, category, page);
  var payload = await getJsonXhr(url);
  var items = parseThumbComponents(payload && payload.template);
  if (!items.length) {
    console.log("[javhd] 列表为空", url, payload && payload.results_count);
  }
  return items;
}

async function search(params) {
  params = params || {};
  var kw = String(params.keyword || "").trim();
  if (!kw) return [];
  var page = Math.max(1, Number(params.page) || 1);
  var url = BASE + "/zh/search?q=" + encodeURIComponent(kw) + (page > 1 ? "&page=" + page : "");
  var payload = await getJsonXhr(url);
  return parseThumbComponents(payload && payload.template);
}

/* ===================== 详情 ===================== */

// 详情页内嵌的 JSON-LD 提供标题/简介/演员/封面。
// 站点这个 script 块尾部多一个大括号（源码 bug），不能用 JSON.parse 直接吃，这里按括号深度截取第一段完整对象。
// 注意：块里的 duration / aggregateRating / datePublished 每次请求都会随机变（站方干扰），不要采用。
function parseJsonLd(html) {
  var text = String(html || "");
  var i = text.indexOf('type="application/ld+json"');
  if (i < 0) return null;
  var startTag = text.indexOf(">", i);
  if (startTag < 0) return null;
  var endTag = text.indexOf("</script>", startTag);
  if (endTag < 0) endTag = Math.min(text.length, startTag + 200000);
  var raw = text.slice(startTag + 1, endTag);
  var start = raw.indexOf("{");
  if (start < 0) return null;
  var depth = 0, inStr = false, esc = false;
  for (var k = start; k < raw.length; k++) {
    var c = raw.charAt(k);
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) {
        try { return JSON.parse(raw.slice(start, k + 1)); } catch (e) { return null; }
      }
    }
  }
  return null;
}

function metaContent(html, name) {
  var re = new RegExp("<meta[^>]+(?:property|name)=\"" + name + "\"[^>]*content=\"([^\"]*)\"", "i");
  var m = re.exec(html);
  return m ? decodeEntities(m[1]) : "";
}

// 详情页 content-id 才是 player_api 认的 cms id（列表/短链上的 id 是另一套编号，直接喂 player_api 会返回 []）
function parseContentId(html) {
  var m = /content-id="(\d+)"/.exec(html);
  if (m) return m[1];
  m = /player_api\?videoId=(\d+)/.exec(html);
  return m ? m[1] : "";
}

async function fetchDetailPage(link) {
  var target = parseTarget(link);
  if (!target) throw new Error("javhd: 无法识别的详情链接");
  var html = await getHtml(target.url);
  if (!/<player-component|<h1/i.test(html)) {
    throw new Error("javhd: 详情页内容异常（可能需要代理访问）");
  }
  // 详情页里的 content-id 才是 player_api 认的编号
  var cmsId = parseContentId(html);
  return { key: target.key, cmsId: cmsId, url: target.url, html: html };
}

async function loadDetail(link) {
  var page = await fetchDetailPage(link);
  // 顺手把 cms id 映射写缓存：详情→播放是主路径，这样起播就只剩 player_api 一次请求
  if (page.cmsId) writeCmsCache("cms:" + (page.key || page.url), page.cmsId);
  var html = page.html;
  var ld = parseJsonLd(html);
  var video = (ld && ld.video) || {};

  var titleM = /<h1[^>]*class="title"[^>]*>([\s\S]*?)<\/h1>/i.exec(html) || /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html);
  var title = htmlToText(titleM && titleM[1]) || htmlToText(video.name) || "";

  // 简介优先 JSON-LD（都是完整英文描述），退化到 meta description
  var desc = htmlToText(video.description || "");
  if (!desc) desc = htmlToText(metaContent(html, "description"));

  // 演员/片商：JSON-LD 的 actor 名称，配合 content-info 里的模特链接给出可导航 ID；
  // 站点绝大多数影片模特是占位 N-A，这时用 author 区块的片商（studio）作为主条目。
  var peoples = [];
  var modelRe = /class="content-info__link"\s+href="(https:\/\/javhd\.com\/zh\/model\/([^"]+))"[^>]*>\s*([\s\S]*?)<\/a>/g;
  var mm;
  while ((mm = modelRe.exec(html))) {
    var mname = htmlToText(mm[3]);
    if (!mname || mname === "N/A") continue;
    peoples.push({ id: "model:" + mm[2], title: mname });
  }
  if (!peoples.length && Array.isArray(video.actor)) {
    var authorM = /class="author__name"\s+href="(https:\/\/javhd\.com\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/.exec(html);
    for (var ai = 0; ai < video.actor.length; ai++) {
      var pname = htmlToText(video.actor[ai] && video.actor[ai].name);
      if (!pname || pname === "N/A") continue;
      var pItem = { title: pname };
      if (authorM) pItem.id = "studio:" + htmlToText(authorM[2]).replace(/\s+/g, "-");
      peoples.push(pItem);
    }
  }

  var genres = [];
  var catRe = /href="https:\/\/javhd\.com\/zh\/japanese-porn-videos\/category\/([^"]+)"[^>]*title="([^"]*)"/g;
  var cm;
  while ((cm = catRe.exec(html))) {
    var gTitle = decodeEntities(cm[2]) || cm[1];
    if (genres.some(function (g) { return g.id === cm[1]; })) continue;
    genres.push({ id: cm[1], title: gTitle });
  }

  // 注意：详情页 JSON-LD 里的 duration / aggregateRating / datePublished 每次请求都会随机变化
  // （实测同一部片子三次拿到 1 分 40 秒 / 18 分 27 秒 / 18 分 49 秒，评分和日期同样乱跳），
  // 属于站方干扰数据，一律不采信；时长改用列表/搜索卡片上的 video-length（真实时长）。
  // 详情页正文里没有本片时长（页面上的 video-length 全属于推荐卡片），宁可不填也不给错值
  var secs = 0;

  var detail = {
    id: detailLink(page.key || page.cmsId),
    type: "url",
    mediaType: "movie",
    title: title,
    // link 永远存可直接访问的站点 URL：slug 页的编号与短 id 是两套，存 id 会让二次进入详情失败
    link: page.url
  };
  if (desc) detail.description = desc;
  if (genres.length) {
    detail.genreItems = genres;
    detail.genreTitle = genres.slice(0, 3).map(function (g) { return g.title; }).join(" · ");
  }
  if (peoples.length) detail.peoples = peoples;
  if (secs > 0) {
    detail.duration = secs;
    detail.durationText = formatClock(secs);
  }

  var poster = bigThumb(video.thumbnailUrl || metaContent(html, "og:image") || "");
  if (poster) {
    detail.coverUrl = poster;
    detail.posterPath = poster;
  }

  // 剧照：详情页没有画廊，但同一张封面在站点同时存在 728x413 与 1130x706 两种尺寸，
  // 播放器横屏展示时用大图打底即可；关联推荐里的同片商作品封面也已单独放进 relatedItems。
  var backs = [];
  if (poster) {
    backs.push(poster);
    var small = String(video.thumbnailUrl || "").replace(/\/1130x706\//, "/728x413/");
    if (small && small !== poster) backs.push(small);
  }
  if (backs.length) detail.backdropPaths = backs;

  // 相关推荐：watch-next 区块里的视频卡片
  var nextStart = html.indexOf("player-watch-next");
  var nextHtml = nextStart >= 0 ? html.slice(nextStart, nextStart + 40000) : "";
  if (nextHtml) {
    var related = [];
    var cardRe = /<thumb-component\b([\s\S]*?)><\/thumb-component>/g;
    var cardM;
    while ((cardM = cardRe.exec(nextHtml))) {
      var chunk = cardM[1];
      var linkM = /link-content="([^"]+)"/.exec(chunk);
      var titleM2 = /title="([^"]*)"/.exec(chunk);
      var thumbM = /url-thumb="([^"]+)"/.exec(chunk);
      if (!linkM) continue;
      // 相关卡片给的是 slug URL（尾部不是数字），真实 cms id 藏在 :globica-params 的 pd2 里；
      // 拿不到 pd2 时才退回 URL 里的数字。cms id 也正是 /zh/id/{id} 可直接解析的编号。
      var rid = (/:globica-params="[^"]*pd2:\s*(\d+)/.exec(chunk) || [])[1] || "";
      if (!rid) {
        var vid = /-(\d+)(?:\?|$)/.exec(linkM[1]);
        rid = vid ? vid[1] : ((/\/id\/(\d+)/.exec(linkM[1]) || [])[1] || "");
      }
      if (!rid || rid === page.id) continue;
      related.push({
        id: detailLink(rid),
        type: "url",
        mediaType: "movie",
        title: htmlToText(titleM2 ? titleM2[1] : ""),
        // link 存完整 URL（slug 页只有 URL 能访问，cms id 走 /zh/id 会 404）
        link: decodeEntities(linkM[1]),
        coverUrl: bigThumb(decodeEntities(thumbM ? thumbM[1] : "")),
        coverRatio: 16 / 9
      });
    }
    if (related.length) detail.relatedItems = related.slice(0, 12);
  }

  return detail;
}

/* ===================== 播放资源 ===================== */

// player_api 返回带签名的 CDN 直链（形如 /<token>,<unix过期时间>/...mp4），有效期约 20 分钟。
// 整条链路原本每次起播都要打两次请求（120KB 详情页 + player_api），这里做两级缓存把常见路径压到 0 次请求：
//   1) 短 id → cms id 的映射（30 天有效，站点不会改映射）
//   2) cms id → 已签名直链（15 分钟，早于签名过期）
// 只输出最高清档（1080p）：站点是 progressive MP4 且 moov 在文件头（实测 offset 36），起播只需头部分片，
// 降档并不能缩短起播时间，反而损失画质。
async function loadResource(params) {
  params = params || {};
  try {
    var rawLink = params.link != null && String(params.link) !== "" ? params.link : null;
    var rawId = params.id != null ? String(params.id) : "";
    // params.id 已经是 "javhd:xxx" 这种模块自己的 id，不能再套一层 detailLink
    var target = parseTarget(rawLink || rawId);
    if (!target) return [];

    var cacheKey = "cms:" + (target.key || target.url);
    var cmsId = readCmsCache(cacheKey);

    // 关键路径优化：cms id 一旦确定就写缓存，后续播放直接跳过详情页（省掉一次 ~120KB / 2~4 秒的请求）
    if (!cmsId) {
      try {
        var page = await fetchDetailPage(rawLink || rawId);
        cmsId = page.cmsId || "";
      } catch (e) {
        console.log("[javhd] 详情页解析失败:", e && e.message);
      }
    }
    // 短 id 与 cms id 是两套编号，但存在 id 直接就是 cms id 的情况（如相关推荐传入的 pd2）
    if (!cmsId && target.key) {
      try {
        var probe = await getJsonXhr(BASE + "/zh/player_api?videoId=" + encodeURIComponent(target.key));
        if (probe && probe.sources && probe.sources.length) cmsId = target.key;
      } catch (e3) {
        console.log("[javhd] cms id 探测失败:", e3 && e3.message);
      }
    }
    if (!cmsId) {
      console.log("[javhd] 无法确定 cms id", rawLink || rawId);
      return [];
    }
    writeCmsCache(cacheKey, cmsId);

    // 第二层缓存：签名直链在有效期内复用，避免每次起播都重打一次 player_api（~1~2.5 秒）
    var cached = readSourceCache(cmsId);
    if (cached) {
      console.log("[javhd] 命中播放地址缓存", cmsId);
      return buildLines(cached, "缓存");
    }

    var sources = await fetchSources(cmsId);
    if (!sources.length) {
      console.log("[javhd] 未取到播放源", cmsId);
      return [];
    }
    writeSourceCache(cmsId, sources);
    return buildLines(sources, "");
  } catch (error) {
    console.error("[javhd] loadResource 失败:", error && (error.message || error));
    return [];
  }
}

// 播放地址签名有效期约 20 分钟（URL 里的 unix 时间戳），这里按 15 分钟保守缓存
var SOURCE_TTL = 15 * 60 * 1000;
var CMS_TTL = 30 * 24 * 3600 * 1000;

function readCmsCache(key) {
  try {
    var rec = Widget.storage.get(key);
    if (rec && rec.id && rec.t && Date.now() - rec.t < CMS_TTL) return String(rec.id);
  } catch (e) { /* 存储不可用时静默降级 */ }
  return "";
}

function writeCmsCache(key, id) {
  try { Widget.storage.set(key, { id: String(id), t: Date.now() }); } catch (e) { }
}

function readSourceCache(cmsId) {
  try {
    var rec = Widget.storage.get("src:" + cmsId);
    if (rec && rec.list && rec.list.length && rec.t && Date.now() - rec.t < SOURCE_TTL) return rec.list;
  } catch (e) { }
  return null;
}

function writeSourceCache(cmsId, sources) {
  try {
    Widget.storage.set("src:" + cmsId, {
      t: Date.now(),
      list: sources.map(function (s) { return { label: s.label, res: s.res, src: s.src, type: s.type }; })
    });
  } catch (e) { }
}

// 只保留 1080p：低清晰度档位（720p/480p/240p）起播更快但画质损失明显，
// 且站点的 1080p 是 progressive MP4（moov 前置），seek 与起播都不依赖整段下载
function fetchSources(cmsId) {
  var apiUrl = BASE + "/zh/player_api?videoId=" + encodeURIComponent(cmsId);
  return getJsonXhr(apiUrl).then(function (data) {
    var sources = (data && data.sources) || [];
    if (sources.length) return sources;
    // 拿不到正片时退回预告片（is_trailer=1 始终可用）
    return getJsonXhr(apiUrl + "&is_trailer=1").then(function (trailer) {
      var ts = (trailer && trailer.sources) || [];
      if (ts.length) console.log("[javhd] 仅取到预告片:", cmsId);
      return ts;
    }, function (e) {
      console.log("[javhd] 预告片请求失败:", e && e.message);
      return [];
    });
  });
}

function buildLines(sources, cachedTag) {
  // 去掉 720p 以下档位：站点的 progressive MP4 moov 在文件头（实测 offset 36），
  // 起播只依赖头部数据，低清晰度并不能让起播更快，只会多几条干扰线路
  var kept = [];
  for (var i = 0; i < sources.length; i++) {
    var s = sources[i];
    if (!s || !s.src) continue;
    if ((Number(s.res) || 0) < 720) continue;
    kept.push(s);
  }
  // 极端情况：整部影片只有低档源时兜底返回最高档，避免完全无线路可选
  if (!kept.length) {
    var best = null;
    for (var j = 0; j < sources.length; j++) {
      var c = sources[j];
      if (c && c.src && (!best || (Number(c.res) || 0) > (Number(best.res) || 0))) best = c;
    }
    if (best) kept.push(best);
  }
  kept.sort(function (a, b) { return (Number(b.res) || 0) - (Number(a.res) || 0); });
  // CDN 不校验 UA（实测带桌面 UA 反而更慢），只带 Referer 即可
  var headers = { "Referer": BASE + "/" };
  return kept.map(function (s) {
    return {
      name: s.label || (s.res ? s.res + "p" : "1080p"),
      url: s.src,
      description: "MP4 直链 | " + (s.type || "video/mp4") + (cachedTag ? " | " + cachedTag : " | 签名 20 分钟有效"),
      customHeaders: headers,
      playerType: "system"
    };
  });
}


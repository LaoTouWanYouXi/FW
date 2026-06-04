WidgetMetadata = {
  id: "forward.kanav",
  title: "KanAV",
  version: "1.0.1",
  requiredVersion: "0.0.1",
  description: "KanAV 视频源",
  author: "老头",
  site: "https://kanav.info",
  detailCacheDuration: 300,
  modules: [
    { id: "cnSub",     title: "中文字幕", functionName: "loadCnSub",    cacheDuration: 3600, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "jpKrCen",   title: "日韩有码", functionName: "loadJpKrCen",  cacheDuration: 3600, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "jpKrUncen", title: "日韩无码", functionName: "loadJpKrUncen",cacheDuration: 3600, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "cnAv",      title: "国产AV",   functionName: "loadCnAv",     cacheDuration: 3600, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "selfie",    title: "自拍泄密", functionName: "loadSelfie",   cacheDuration: 3600, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "hookup",    title: "探花约炮", functionName: "loadHookup",   cacheDuration: 3600, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "streamer",  title: "主播录制", functionName: "loadStreamer", cacheDuration: 3600, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "anime",     title: "动漫番剧", functionName: "loadAnime",    cacheDuration: 3600, params: [{ name: "page", title: "页码", type: "page" }] },
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

const BASE = "https://kanav.info";
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Mobile/15E148 Safari/604.1";

function b64Decode(str) {
  const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const bytes = [];
  let i = 0;
  str = str.replace(/=+$/, "");
  while (i < str.length) {
    const a = map.indexOf(str[i++]);
    const b = map.indexOf(str[i++]);
    const c = map.indexOf(str[i++]);
    const d = map.indexOf(str[i++]);
    bytes.push((a << 2) | (b >> 4));
    if (c >= 0) bytes.push(((b & 15) << 4) | (c >> 2));
    if (d >= 0) bytes.push(((c & 3) << 6) | d);
  }
  let result = "";
  let j = 0;
  while (j < bytes.length) {
    const v = bytes[j++];
    if (v < 128) {
      result += String.fromCharCode(v);
    } else if (v < 224) {
      result += String.fromCharCode(((v & 31) << 6) | (bytes[j++] & 63));
    } else {
      result += String.fromCharCode(((v & 15) << 12) | ((bytes[j++] & 63) << 6) | (bytes[j++] & 63));
    }
  }
  return result;
}

function parseVideoList(html) {
  const $ = Widget.html.load(html);
  const items = [];
  $(".post-list .col-md-3").each((_, el) => {
    const videoItem = $(el).find(".video-item");
    const entryTitle = $(el).find(".entry-title");
    const href = entryTitle.find("a").attr("href") || "";
    const title = entryTitle.find("a").text().trim();
    const posterPath = videoItem.find(".featured-content-image a img").attr("data-original");
    const remark = videoItem.find("span.model-view-left").text().trim();
    const durationText = videoItem.find("span.model-view").text().trim();
    const pubDate = entryTitle.text().trim().replace(title, "").trim();
    const detailUrl = href.startsWith("http") ? href : BASE + href;
    items.push({
      id: href,
      type: "url",
      title,
      posterPath,
      link: detailUrl,
      durationText,
      releaseDate: pubDate,
      description: remark,
    });
  });
  return items;
}

async function loadCategory(categoryId, params) {
  const page = Number(params.page || 1);
  const res = await Widget.http.get(
    `${BASE}/index.php/vod/type/id/${categoryId}/page/${page}.html`,
    { headers: { "User-Agent": UA } }
  );
  return parseVideoList(res.data);
}

async function loadCnSub(params)     { return loadCategory("1",  params); }
async function loadJpKrCen(params)   { return loadCategory("2",  params); }
async function loadJpKrUncen(params) { return loadCategory("3",  params); }
async function loadCnAv(params)      { return loadCategory("4",  params); }
async function loadSelfie(params)    { return loadCategory("30", params); }
async function loadHookup(params)    { return loadCategory("31", params); }
async function loadStreamer(params)  { return loadCategory("32", params); }
async function loadAnime(params)     { return loadCategory("20", params); }

async function loadDetail(link) {
  const res = await Widget.http.get(String(link), { headers: { "User-Agent": UA } });
  const $ = Widget.html.load(res.data);
  const script = $("script:contains(player_aaaa)").text().replace("var player_aaaa=", "");
  const encodedUrl = JSON.parse(script).url;
  const videoUrl = decodeURIComponent(b64Decode(encodedUrl));
  return {
    id: link,
    type: "url",
    link,
    videoUrl,
    playerType: "system",
  };
}

async function search(params = {}) {
  const keyword = params.keyword || "";
  const page = Number(params.page || 1);
  const res = await Widget.http.get(
    `${BASE}/index.php/vod/search/by/time_add/page/${page}/wd/${encodeURIComponent(keyword)}.html`,
    { headers: { "User-Agent": UA } }
  );
  return parseVideoList(res.data);
}

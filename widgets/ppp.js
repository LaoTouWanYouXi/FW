WidgetMetadata = {
  id: "forward.pppporn",
  title: "PppPorn",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "PppPorn 视频聚合模块，支持分类浏览、搜索",
  author: "Forward",
  site: "https://ppp.porn",
  detailCacheDuration: 300,
  modules: [
    {
      id: "categories",
      title: "分类浏览",
      functionName: "loadCategory",
      cacheDuration: 3600,
      params: [
        {
          name: "category",
          title: "选择分类",
          type: "enumeration",
          value: "https://ppp.porn/categories/amateur/",
          enumOptions: [
            { title: "素人", value: "https://ppp.porn/categories/amateur/" },
            { title: "肛交", value: "https://ppp.porn/categories/anal/" },
            { title: "亚洲", value: "https://ppp.porn/categories/asian/" },
            { title: "尤物", value: "https://ppp.porn/categories/babe/" },
            { title: "丰满", value: "https://ppp.porn/categories/bbw/" },
            { title: "调教", value: "https://ppp.porn/categories/bdsm/" },
            { title: "美臀", value: "https://ppp.porn/categories/big-ass/" },
            { title: "巨乳", value: "https://ppp.porn/categories/big-tits/" },
            { title: "金发", value: "https://ppp.porn/categories/blonde/" },
            { title: "口交", value: "https://ppp.porn/categories/blowjob/" },
            { title: "褐发", value: "https://ppp.porn/categories/brunette/" },
            { title: "中出", value: "https://ppp.porn/categories/creampie/" },
            { title: "射精", value: "https://ppp.porn/categories/cumshot/" },
            { title: "癖好", value: "https://ppp.porn/categories/fetish/" },
            { title: "群交", value: "https://ppp.porn/categories/group/" },
            { title: "手交", value: "https://ppp.porn/categories/handjob/" },
            { title: "硬核", value: "https://ppp.porn/categories/hardcore/" },
            { title: "跨种族", value: "https://ppp.porn/categories/interracial/" },
            { title: "拉丁", value: "https://ppp.porn/categories/latina/" },
            { title: "女同", value: "https://ppp.porn/categories/lesbian/" },
            { title: "熟女", value: "https://ppp.porn/categories/mature/" },
            { title: "人妻", value: "https://ppp.porn/categories/milf/" },
            { title: "露出", value: "https://ppp.porn/categories/outdoor/" },
            { title: "第一视角", value: "https://ppp.porn/categories/pov/" },
            { title: "公共场所", value: "https://ppp.porn/categories/public/" },
            { title: "红发", value: "https://ppp.porn/categories/redhead/" },
            { title: "潮吹", value: "https://ppp.porn/categories/squirting/" },
            { title: "纹身", value: "https://ppp.porn/categories/tattoo/" },
            { title: "少女", value: "https://ppp.porn/categories/teen/" },
            { title: "三人行", value: "https://ppp.porn/categories/threesome/" },
            { title: "玩具", value: "https://ppp.porn/categories/toys/" }
          ]
        },
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

const BASE_URL = "https://ppp.porn";
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1.1 Mobile/15E148 Safari/604.1",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://ppp.porn/"
};

function resolveUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return BASE_URL + "/" + href;
}

function parseVideoList(html) {
  if (!html) return [];
  const $ = Widget.html.load(html);
  const items = [];

  const selector = $("#list_videos_common_videos_list_items .item").length > 0
    ? "#list_videos_common_videos_list_items .item"
    : "#list_videos_videos_list_search_result_items .item";

  $(selector).each((_, el) => {
    const $el = $(el);
    const title = $el.find("h4 a").text().trim();
    const cover = $el.find("img").attr("data-src") || $el.find("img").attr("src") || "";
    const href = $el.find("h4 a").attr("href") || "";
    const duration = $el.find(".card-video__duration").text().trim();

    if (!title || !href) return;

    items.push({
      id: href,
      type: "url",
      title,
      posterPath: cover,
      backdropPath: cover,
      durationText: duration,
      link: resolveUrl(href)
    });
  });

  return items;
}

async function loadCategory(params = {}) {
  const categoryUrl = params.category || "https://ppp.porn/categories/amateur/";
  const page = Number(params.page || 1);

  try {
    let url = `${categoryUrl}?mode=async&function=get_block&block_id=list_videos_common_videos_list&sort_by=post_date&from=${page}`;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadDetail(link) {
  try {
    const detailUrl = String(link).startsWith("http") ? String(link) : resolveUrl(String(link));
    const res = await Widget.http.get(detailUrl, { headers: HEADERS });
    const html = res.data || "";
    const $ = Widget.html.load(html);

    const title = $('meta[property="og:title"]').attr("content") || $("h1").first().text().trim() || "";
    const cover = $('meta[property="og:image"]').attr("content") || $(".video-cover img").attr("src") || "";

    let videoUrl = "";
    $("script").each((_, el) => {
      const content = $(el).html() || "";
      if (content.includes(".m3u8")) {
        const match = content.match(/https?:\/\/[\w./-]+\.m3u8/);
        if (match) {
          videoUrl = match[0];
          return false;
        }
      }
    });

    const genreItems = [];
    $("a[href*='/categories/'], a[href*='/tags/']").each((_, el) => {
      const $a = $(el);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href) genreItems.push({ id: href, title: text });
    });

    const relatedItems = [];
    const seenRelated = new Set([detailUrl]);
    $(".related-videos .item, #list_videos_common_videos_list_items .item").each((_, el) => {
      if (relatedItems.length >= 8) return false;
      const $el = $(el);
      const $rLink = $el.find("h4 a");
      const rHref = $rLink.attr("href") || "";
      const rDetailLink = resolveUrl(rHref);
      if (!rDetailLink || seenRelated.has(rDetailLink)) return;
      seenRelated.add(rDetailLink);

      const rTitle = $rLink.text().trim() || "相关影片";
      const rCover = $el.find("img").attr("data-src") || $el.find("img").attr("src") || "";

      relatedItems.push({
        id: rHref,
        type: "url",
        title: rTitle,
        posterPath: rCover,
        backdropPath: rCover,
        link: rDetailLink
      });
    });

    return {
      id: link,
      type: "url",
      title,
      posterPath: cover,
      backdropPath: cover,
      videoUrl: videoUrl || "",
      playerType: "system",
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      link: detailUrl,
      mediaType: "movie",
      customHeaders: HEADERS
    };
  } catch (e) {
    return null;
  }
}

async function search(params = {}) {
  const keyword = params.keyword || "";
  const page = Number(params.page || 1);
  if (!keyword) return [];

  try {
    const text = encodeURIComponent(keyword);
    const url = `${BASE_URL}/search/${text}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${text}&category_ids=&sort_by=&from_videos=${page}&from_albums=${page}`;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

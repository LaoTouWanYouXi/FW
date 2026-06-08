WidgetMetadata = {
  id: "forward.pppporn",
  title: "PppPorn",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "PppPorn \\u89c6\\u9891\\u805a\\u5408\\u6a21\\u5757\\uff0c\\u652f\\u6301\\u5206\\u7c7b\\u6d4f\\u89c8\\u3001\\u641c\\u7d22",
  author: "Forward",
  site: "https://ppp.porn",
  detailCacheDuration: 300,
  modules: [
    {
      id: "categories",
      title: "\\u5206\\u7c7b\\u6d4f\\u89c8",
      functionName: "loadCategory",
      cacheDuration: 3600,
      params: [
        {
          name: "category",
          title: "\\u9009\\u62e9\\u5206\\u7c7b",
          type: "enumeration",
          value: "https://ppp.porn/categories/amateur/",
          enumOptions: [
            { title: "\\u7d20\\u4eba", value: "https://ppp.porn/categories/amateur/" },
            { title: "\\u809b\\u4ea4", value: "https://ppp.porn/categories/anal/" },
            { title: "\\u4e9a\\u6d32", value: "https://ppp.porn/categories/asian/" },
            { title: "\\u5c24\\u7269", value: "https://ppp.porn/categories/babe/" },
            { title: "\\u4e30\\u6ee1", value: "https://ppp.porn/categories/bbw/" },
            { title: "\\u8c03\\u6559", value: "https://ppp.porn/categories/bdsm/" },
            { title: "\\u7f8e\\u81c0", value: "https://ppp.porn/categories/big-ass/" },
            { title: "\\u5de8\\u4e73", value: "https://ppp.porn/categories/big-tits/" },
            { title: "\\u91d1\\u53d1", value: "https://ppp.porn/categories/blonde/" },
            { title: "\\u53e3\\u4ea4", value: "https://ppp.porn/categories/blowjob/" },
            { title: "\\u8910\\u53d1", value: "https://ppp.porn/categories/brunette/" },
            { title: "\\u4e2d\\u51fa", value: "https://ppp.porn/categories/creampie/" },
            { title: "\\u5c04\\u7cbe", value: "https://ppp.porn/categories/cumshot/" },
            { title: "\\u7656\\u597d", value: "https://ppp.porn/categories/fetish/" },
            { title: "\\u7fa4\\u4ea4", value: "https://ppp.porn/categories/group/" },
            { title: "\\u624b\\u4ea4", value: "https://ppp.porn/categories/handjob/" },
            { title: "\\u786c\\u6838", value: "https://ppp.porn/categories/hardcore/" },
            { title: "\\u8de8\\u79cd\\u65cf", value: "https://ppp.porn/categories/interracial/" },
            { title: "\\u62c9\\u4e01", value: "https://ppp.porn/categories/latina/" },
            { title: "\\u5973\\u540c", value: "https://ppp.porn/categories/lesbian/" },
            { title: "\\u719f\\u5973", value: "https://ppp.porn/categories/mature/" },
            { title: "\\u4eba\\u59bb", value: "https://ppp.porn/categories/milf/" },
            { title: "\\u9732\\u51fa", value: "https://ppp.porn/categories/outdoor/" },
            { title: "\\u7b2c\\u4e00\\u89c6\\u89d2", value: "https://ppp.porn/categories/pov/" },
            { title: "\\u516c\\u5171\\u573a\\u6240", value: "https://ppp.porn/categories/public/" },
            { title: "\\u7ea2\\u53d1", value: "https://ppp.porn/categories/redhead/" },
            { title: "\\u6f6e\\u5439", value: "https://ppp.porn/categories/squirting/" },
            { title: "\\u7eb9\\u8eab", value: "https://ppp.porn/categories/tattoo/" },
            { title: "\\u5c11\\u5973", value: "https://ppp.porn/categories/teen/" },
            { title: "\\u4e09\\u4eba\\u884c", value: "https://ppp.porn/categories/threesome/" },
            { title: "\\u73a9\\u5177", value: "https://ppp.porn/categories/toys/" }
          ]
        },
        { name: "page", title: "\\u9875\\u7801", type: "page" }
      ]
    }
  ],
  search: {
    title: "\\u641c\\u7d22",
    functionName: "search",
    params: [
      { name: "keyword", title: "\\u5173\\u952e\\u8bcd", type: "input" },
      { name: "page", title: "\\u9875\\u7801", type: "page" }
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

      const rTitle = $rLink.text().trim() || "\\u76f8\\u5173\\u5f71\\u7247";
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

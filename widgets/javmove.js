WidgetMetadata = {
  id: "forward.javmove",
  title: "JavMove",
  version: "1.0.1",
  requiredVersion: "0.0.1",
  description: "JavMove \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u6700\u65b0\u5f71\u7247\u3001\u5373\u5c06\u4e0a\u6620\u3001\u641c\u7d22",
  author: "Forward",
  site: "https://javmove.com",
  detailCacheDuration: 300,
  modules: [
    {
      id: "latest",
      title: "\u6700\u65b0\u5f71\u7247",
      functionName: "loadLatest",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
    },
    {
      id: "upcoming",
      title: "\u5373\u5c06\u4e0a\u6620",
      functionName: "loadUpcoming",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
    }
  ],
  search: {
    title: "\u641c\u7d22",
    functionName: "search",
    params: [
      { name: "keyword", title: "\u5173\u952e\u8bcd", type: "input" },
      { name: "page", title: "\u9875\u7801", type: "page" }
    ]
  }
};

const BASE_URL = "https://javmove.com";
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0.1 Mobile/15E148 Safari/604.1",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://javmove.com/"
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

  $("#movie-list article").each((_, el) => {
    const $el = $(el);
    const $link = $el.find('a[rel="bookmark"]');
    const href = $link.attr("href") || "";
    const titleRaw = $el.find("h2").attr("title") || "";
    const title = titleRaw.split(" ")[0];
    if (!title || !href) return;

    const cover = $el.find(".movie-image").attr("data-srcset") || $el.find(".movie-image").attr("src") || "";
    const pubdate = $el.find("time").first().attr("datetime") || "";
    const detailLink = resolveUrl(href);

    items.push({
      id: href,
      type: "url",
      title,
      backdropPath: cover || undefined,
      releaseDate: pubdate ? pubdate.split("T")[0] : "",
      link: detailLink,
      mediaType: "movie",
    });
  });

  return items.length > 0 ? items : [];
}

async function loadGenreList(params = {}) {
  const genreId = String(params.genreId || "").trim();
  if (!genreId) return [];

  const page = Number(params.page || 1);
  let url = genreId.startsWith("http") ? genreId : resolveUrl(genreId);
  if (page > 1) url += (url.includes("?") ? "&" : "?") + `page=${page}`;

  try {
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadLatest(params = {}) {
  if (params.genreId) return loadGenreList(params);
  const page = Number(params.page || 1);
  try {
    const url = `${BASE_URL}/release?page=${page}`;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadUpcoming(params = {}) {
  if (params.genreId) return loadGenreList(params);
  const page = Number(params.page || 1);
  try {
    const url = `${BASE_URL}/upcoming?page=${page}`;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

async function loadDetail(link) {
  try {
    const res = await Widget.http.get(String(link), { headers: HEADERS });
    const html = res.data || "";
    const $ = Widget.html.load(html);

    const title = $("h1").first().text().trim() || $('meta[property="og:title"]').attr("content") || "";
    const cover = $('meta[property="og:image"]').attr("content") || $("video").attr("poster") || "";

    const videoPlayerId = $("#video-player").attr("data-id") || "";

    let videoUrl = "";
    const formatGroups = [];

    const $formats = $(".video-format");
    $formats.each((_, formatEl) => {
      const $format = $(formatEl);
      const formatTitle = $format.find(".video-format-header").text().trim();
      formatGroups.push({ title: formatTitle, elements: $format.find(".video-source-btn").toArray() });
    });

    const formatPriority = { FullHD: 1, HD: 2, SD: 3 };
    formatGroups.sort((a, b) => {
      const pA = /^FullHD/i.test(a.title) ? 1 : /^HD/i.test(a.title) ? 2 : /^SD/i.test(a.title) ? 3 : 999;
      const pB = /^FullHD/i.test(b.title) ? 1 : /^HD/i.test(b.title) ? 2 : /^SD/i.test(b.title) ? 3 : 999;
      return pA - pB;
    });

    if (formatGroups.length > 0 && formatGroups[0].elements.length > 0) {
      const firstGroup = formatGroups[0];
      const $firstBtn = $(firstGroup.elements[0]);
      const partHref = $firstBtn.attr("href") || "";

      let dataId = videoPlayerId;

      if (partHref && !partHref.includes("#")) {
        const curl = resolveUrl(partHref);
        try {
          const cRes = await Widget.http.get(curl, { headers: HEADERS });
          const c$ = Widget.html.load(cRes.data || "");
          dataId = c$("#video-player").attr("data-id") || dataId;
        } catch (e) {}
      }

      if (dataId) {
        const watchUrl = `${BASE_URL}/watch?token=${dataId}`;
        try {
          const watchRes = await Widget.http.get(watchUrl, {
            headers: { ...HEADERS, "Referer": "https://javmove.com/" }
          });
          let rawUrl = watchRes.data || "";

          // 兼容：Widget.http.get 可能将 JSON 响应自动解析为对象
          if (typeof rawUrl === "object") {
            rawUrl = JSON.stringify(rawUrl);
          }

          // 安全校验：只有以 http 开头才是有效的视频地址
          // /watch 无 Referer 时返回 "re"，无效 token 返回空串，都需要过滤
          if (typeof rawUrl === "string" && rawUrl.startsWith("http")) {
            videoUrl = rawUrl;
          }
        } catch (e) {}
      }
    }

    const genreItems = [];
    $("a[href*='/genre/'], a[href*='/tag/']").each((_, el) => {
      const $a = $(el);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href) genreItems.push({ id: href, title: text });
    });

    const relatedItems = [];
    const seenRelated = new Set([String(link)]);
    $("div.thumbnail, #related article, .related-videos article").each((_, el) => {
      if (relatedItems.length >= 8) return false;
      const $el = $(el);
      const $rLink = $el.find('a[rel="bookmark"]');
      const rHref = $rLink.attr("href") || "";
      const rDetailLink = resolveUrl(rHref);
      if (!rDetailLink || seenRelated.has(rDetailLink)) return;
      seenRelated.add(rDetailLink);

      const rTitle = ($el.find("h2").attr("title") || "").split(" ")[0] || "\u76f8\u5173\u5f71\u7247";
      const rCover = $el.find(".movie-image").attr("data-srcset") || $el.find(".movie-image").attr("src") || $el.find("img").attr("src") || "";

      relatedItems.push({
        id: rHref,
        type: "url",
        title: rTitle,
        backdropPath: rCover || undefined,
        link: rDetailLink,
        mediaType: "movie",
      });
    });

    return {
      id: link,
      type: "url",
      title,
      backdropPath: cover || undefined,
      posterPath: cover || undefined,
      videoUrl: videoUrl || "",
      playerType: "system",
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      link,
      mediaType: "movie",
      customHeaders: HEADERS
    };
  } catch (e) {
    return null;
  }
}

async function search(params = {}) {
  if (params.genreId) return loadGenreList(params);

  const keyword = params.keyword || "";
  const page = Number(params.page || 1);
  if (!keyword) return [];

  try {
    const url = `${BASE_URL}/search?q=${encodeURIComponent(keyword)}&page=${page}`;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

WidgetMetadata = {
  id: "forward.rouvideo",
  title: "肉视频",
  version: "1.0.2",
  requiredVersion: "0.0.1",
  description: "肉视频聚合模块，支持国产AV、探花、自拍流出、OnlyFans、日本、搜索",
  author: "Forward",
  site: "https://rou.video",
  detailCacheDuration: 300,
  columns: 2,
  modules: [
    {
      id: "cnAv",
      title: "国产AV",
      functionName: "loadCategory",
      cacheDuration: 3600,
      params: [
        {
          name: "category",
          title: "选择片商",
          type: "enumeration",
          value: "/t/麻豆傳媒",
          enumOptions: [
            { title: "麻豆传媒", value: "/t/麻豆傳媒" },
            { title: "糖心Vlog", value: "/t/糖心Vlog" },
            { title: "蜜桃影像传媒", value: "/t/蜜桃影像傳媒" },
            { title: "香蕉视频传媒", value: "/t/香蕉視頻傳媒" },
            { title: "星空无限传媒", value: "/t/星空無限傳媒" },
            { title: "天美传媒", value: "/t/天美傳媒" },
            { title: "精东影业", value: "/t/精東影業" },
            { title: "杏吧传媒", value: "/t/杏吧傳媒" },
            { title: "91制片厂", value: "/t/91製片廠" },
            { title: "皇家华人", value: "/t/皇家華人" },
            { title: "起点传媒", value: "/t/起點傳媒" },
            { title: "大象传媒", value: "/t/大象傳媒" },
            { title: "果冻传媒", value: "/t/果凍傳媒" },
            { title: "萝莉社", value: "/t/蘿莉社" },
            { title: "ED Mosaic", value: "/t/ED Mosaic" },
            { title: "兔子先生", value: "/t/兔子先生" },
            { title: "扣扣传媒", value: "/t/扣扣傳媒" },
            { title: "SA国际传媒", value: "/t/SA國際傳媒" },
            { title: "爱神传媒", value: "/t/愛神傳媒" },
            { title: "性视界传媒", value: "/t/性視界傳媒" },
            { title: "PsychopornTW", value: "/t/PsychopornTW" },
            { title: "拍摄花絮", value: "/t/拍攝花絮" },
            { title: "抖阴", value: "/t/抖陰" },
            { title: "91茄子", value: "/t/91茄子" },
            { title: "绝对领域传媒", value: "/t/絕對領域傳媒" },
            { title: "乌托邦传媒", value: "/t/烏托邦傳媒" },
            { title: "红斯灯影像", value: "/t/紅斯燈影像" },
            { title: "草莓视频", value: "/t/草莓視頻" },
            { title: "渡边传媒", value: "/t/渡邊傳媒" },
            { title: "乐播传媒", value: "/t/樂播傳媒" },
            { title: "葫芦影业", value: "/t/葫蘆影業" },
            { title: "Pussy Hunter", value: "/t/Pussy Hunter" },
            { title: "麻麻传媒", value: "/t/麻麻傳媒" },
            { title: "三只狼传媒", value: "/t/三只狼傳媒" },
            { title: "辣椒原创", value: "/t/辣椒原創" },
            { title: "萝莉原创", value: "/t/萝莉原创" },
            { title: "MisAV", value: "/t/MisAV" },
            { title: "SWAG@daisybaby", value: "/t/SWAG@daisybaby" },
            { title: "冠希传媒", value: "/t/冠希傳媒" }
          ]
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "hookup",
      title: "探花",
      functionName: "loadCategory",
      cacheDuration: 3600,
      params: [
        { name: "category", title: "分类", type: "constant", value: "/t/探花" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "leaked",
      title: "自拍流出",
      functionName: "loadCategory",
      cacheDuration: 3600,
      params: [
        { name: "category", title: "分类", type: "constant", value: "/t/自拍流出" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "onlyfans",
      title: "OnlyFans",
      functionName: "loadCategory",
      cacheDuration: 3600,
      params: [
        { name: "category", title: "分类", type: "constant", value: "/t/OnlyFans" },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "japanese",
      title: "日本",
      functionName: "loadCategory",
      cacheDuration: 3600,
      params: [
        { name: "category", title: "分类", type: "constant", value: "/t/日本" },
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

const BASE_URL = "https://rou.video";
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://rou.video/"
};

function resolveUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return BASE_URL + "/" + href;
}

function _atob(b64) {
  const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const indices = {};
  for (let i = 0; i < map.length; i++) indices[map[i]] = i;

  const pos = b64.indexOf("=");
  const padded = pos > -1;
  const len = padded ? pos : b64.length;
  let i = -1;
  let data = "";

  while (i < len) {
    const code = (indices[b64[++i]] << 18) | (indices[b64[++i]] << 12) | (indices[b64[++i]] << 6) | indices[b64[++i]];
    if (code !== 0) {
      data += String.fromCharCode((code >>> 16) & 255, (code >>> 8) & 255, code & 255);
    }
  }

  if (padded) {
    data = data.slice(0, pos - b64.length);
  }

  return data;
}

function decodeEv(ev) {
  const decoded = _atob(ev.d)
    .split("")
    .map((c) => String.fromCharCode(c.charCodeAt(0) - ev.k))
    .join("");
  return JSON.parse(decoded);
}

function parseVideoList(html) {
  if (!html) return [];
  const $ = Widget.html.load(html);
  const items = [];

  $(".grid.grid-cols-2.mb-6 > div").each((_, el) => {
    const $el = $(el);
    if ($el.find(".relative").length === 0) return;

    const href = $el.find(".relative a").attr("href") || "";
    const title = $el.find("img:last").attr("alt") || "";
    const cover = $el.find("img").attr("src") || "";
    const subTitle = $el.find(".relative a > div:eq(1)").text().trim() || "";
    const hdInfo = $el.find(".relative a > div:first").text().trim() || "";

    if (!title || !href) return;

    items.push({
      id: href,
      type: "url",
      title,
      posterPath: cover,
      backdropPath: cover,
      description: subTitle || hdInfo,
      link: resolveUrl(href),
      mediaType: "tvshow",
    });
  });

  return items;
}

async function loadCategory(params = {}) {
  const category = params.category || "/t/麻豆傳媒";
  const page = Number(params.page || 1);
  let url = `${BASE_URL}${category}`;
  if (page > 1) {
    url += `?order=createdAt&page=${page}`;
  }

  try {
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
    const cover = $('meta[property="og:image"]').attr("content") || $("img").first().attr("src") || "";

    let videoUrl = "";
    const scriptContent = $("#__NEXT_DATA__").html() || "";
    if (scriptContent) {
      try {
        const jsonData = JSON.parse(scriptContent);
        const ev = jsonData.props && jsonData.props.pageProps && jsonData.props.pageProps.ev;
        if (ev) {
          const decodedEv = decodeEv(ev);
          videoUrl = decodedEv.videoUrl || "";
          if (videoUrl && videoUrl.endsWith(".jpg")) {
            videoUrl = videoUrl.replace(".jpg", ".m3u8");
          }
        }
      } catch (e) {}
    }

    const genreItems = [];
    $("a[href*='/t/'], a[href*='/tags/']").each((_, el) => {
      const $a = $(el);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href) genreItems.push({ id: href, title: text });
    });

    const relatedItems = [];
    const seenRelated = new Set([detailUrl]);
    $(".grid.grid-cols-2.mb-6 > div").each((_, el) => {
      if (relatedItems.length >= 8) return false;
      const $el = $(el);
      if ($el.find(".relative").length === 0) return;

      const rHref = $el.find(".relative a").attr("href") || "";
      const rDetailLink = resolveUrl(rHref);
      if (!rDetailLink || seenRelated.has(rDetailLink)) return;
      seenRelated.add(rDetailLink);

      const rTitle = $el.find("img:last").attr("alt") || "相关影片";
      const rCover = $el.find("img").attr("src") || "";

      relatedItems.push({
        id: rHref,
        type: "url",
        title: rTitle,
        posterPath: rCover,
        backdropPath: rCover,
        link: rDetailLink,
        mediaType: "tvshow",
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
      mediaType: "tvshow",
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
    const url = `${BASE_URL}/search?q=${text}&t=&page=${page}`;
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data);
  } catch (e) {
    return [];
  }
}

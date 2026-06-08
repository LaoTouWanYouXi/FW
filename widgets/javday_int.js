var WidgetMetadata = {
  id: "javday_int",
  title: "JAVDay",
  description: "網路收集到的模塊",
  author: "Ti",
  site: "https://javday.app",
  version: "1.3.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // 搜索模块
    {
      title: "搜索视频",
      description: "搜索JAVDay视频库",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "女優/番號/關鍵字搜索…",
          type: "input",
          value: "",
          description: "女優/番號/關鍵字搜索…",
        },
        { 
          name: "page", 
          title: "页码", 
          type: "page", 
          description: "搜索结果页码" 
        }
      ]
    },
    // 最新模块
    {
      title: "最新更新",
      description: "浏览最新更新视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/label/new/"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 人气模块
    {
      title: "人气系列",
      description: "浏览人气系列视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/label/hot/"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 新作模块
    {
      title: "新作上市",
      description: "浏览新作上市视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/new-release/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "new"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 有码模块
    {
      title: "有码视频",
      description: "浏览有码分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/censored/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "popular"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 无码模块
    {
      title: "无码视频",
      description: "浏览无码分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/uncensored/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "new"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 流出模块
    {
      title: "无码流出",
      description: "浏览无码流出视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/uncensored-leaked/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "new"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 杏吧模块
    {
      title: "杏吧视频",
      description: "浏览杏吧分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/sex8/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "popular"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 玩偶模块
    {
      title: "玩偶姐姐",
      description: "浏览玩偶姐姐视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/hongkongdoll/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "popular"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 国产模块
    {
      title: "国产 AV",
      description: "浏览国产 AV视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/chinese-av/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "popular"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 厂商模块
    {
      title: "国产厂商",
      description: "按厂商标签浏览国产厂商视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "厂商选择",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: ["new","popular"],
            },
          enumOptions: [ 
            { title: "麻豆传媒", value: "https://javday.app/index.php/category/madou/" }, 
            { title: "果冻传媒", value: "https://javday.app/index.php/category/91zhipianchang/" }, 
            { title: "天美传媒", value: "https://javday.app/index.php/category/timi/" }, 
            { title: "星空无限", value: "https://javday.app/index.php/category/xingkong/" }, 
            { title: "皇家华人", value: "https://javday.app/index.php/category/royalasianstudio/" }, 
            { title: "蜜桃影像", value: "https://javday.app/index.php/category/mtgw/" }, 
            { title: "精东影业", value: "https://javday.app/index.php/category/jdav/" }, 
            { title: "台湾 AV", value: "https://javday.app/index.php/category/twav/" }, 
            { title: "JVID", value: "https://javday.app/index.php/category/jvid/" }, 
            { title: "萝莉社", value: "https://javday.app/index.php/category/luolisheus/" }, 
            { title: "糖心VLOG", value: "https://javday.app/index.php/category/txvlog/" }, 
            { title: "Psychoporn TW", value: "https://javday.app/index.php/category/psychoporn-tw/" } 
          ],
          value: "https://javday.app/index.php/category/madou/",
          description: "选择要浏览的厂商"
        },
        {
          name: "sort_by",
          title: "🔢 排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new",
          description: "选择视频排序方式"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    }
  ]
};

const JAVDAY_LOG_PREFIX = "ForwardWidget: JAVDay -";
const JAVDAY_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";

function extractCategoryId(url) {
  const match = url.match(/\/([^/]+)\/?$/);
  if (match && match[1]) {
    return match[1].replace(/\/+$/, '');
  }
  
  const parts = url.split('/').filter(part => part.length > 0);
  return parts[parts.length - 1] || url.split('/').slice(-2, -1)[0] || 'unknown';
}

function buildPageUrl(baseUrl, sortBy, page) {
  const categoryId = extractCategoryId(baseUrl);
  
  const cleanBaseUrl = baseUrl.replace(/index\.php\//g, '');
  
  let path;
  if (sortBy === "popular") {
    path = `/fiter/by/hits/id/${categoryId}`;
  } else {
    path = cleanBaseUrl.includes('label/') 
      ? cleanBaseUrl.replace(/\/page\/\d+\/?$/, '')
      : `/category/${categoryId}`;
  }
  
  if (page > 1) {
    return `${path}/page/${page}/`;
  }
  
  return `${path}/`;
}

function getFullUrl(path) {
  if (path.startsWith("http")) return path;
  
  return `https://javday.app${path}`;
}

function getCoverImgSrc($item) {
  const coverElement = $item.find(".videoBox-cover");
  const styleAttr = coverElement.attr("style");
  
  if (styleAttr) {
    const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
    if (match && match[1]) {
      const extractedUrl = match[1];
      
      if (extractedUrl.startsWith("//")) {
        return `https:${extractedUrl}`;
      } 
      
      if (extractedUrl.startsWith("http")) {
        return extractedUrl;
      }
      
      return `https://javday.app${extractedUrl.startsWith("/") ? "" : "/"}${extractedUrl}`;
    }
  }
  return "";
}

function extractVideoUrlFromDPlayerScript(scriptContent) {
  if (!scriptContent) return null;

  const regexes = [
    /video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/,
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/
  ];

  for (const regex of regexes) {
    const match = scriptContent.match(regex);
    if (match && match[1]) return match[1];
  }

  return null;
}

// ==================== 演员头像缓存 & 异步补全 ====================

const PEOPLE_AVATAR_CACHE = {};

async function resolvePeopleAvatar(peopleHref) {
  if (!peopleHref) return "";
  if (Object.prototype.hasOwnProperty.call(PEOPLE_AVATAR_CACHE, peopleHref)) {
    return PEOPLE_AVATAR_CACHE[peopleHref];
  }
  try {
    const response = await Widget.http.get(peopleHref, {
      headers: { "User-Agent": JAVDAY_USER_AGENT, Referer: "https://javday.app/" },
    });
    if (!response?.data) { PEOPLE_AVATAR_CACHE[peopleHref] = ""; return ""; }
    const $ = Widget.html.load(response.data);
    const $img = $(".model-avatar img, .avatar img, .model-img, .model-img-container img, [class*='avatar'] img").first();
    const src = $img.attr("data-src") || $img.attr("src") || "";
    const avatar = src.startsWith("//") ? "https:" + src
      : src.startsWith("http") ? src
      : "";
    PEOPLE_AVATAR_CACHE[peopleHref] = avatar;
    return avatar;
  } catch (e) {
    PEOPLE_AVATAR_CACHE[peopleHref] = "";
    return "";
  }
}

// ==================== 剧照截图 ====================

const CDN_SCREENSHOT_BASE_JD = "https://javday.app";

function extractPageScreenshots($, html) {
  const screenshots = [];
  const seen = new Set();

  const pushUrl = (raw) => {
    if (!raw) return;
    const clean = raw.startsWith("//") ? "https:" + raw
      : raw.startsWith("http") ? raw
      : "";
    if (!clean || seen.has(clean)) return;
    seen.add(clean);
    screenshots.push(clean);
  };

  // 1) 页面截图容器中的 <img>
  const selectors = [
    "a[data-fancybox='gallery'] img",
    "a[data-fancybox] img",
    ".screenshots img",
    ".video-screenshots img",
    "[class*='screenshot'] img",
    ".detail-screenshots img",
    ".gallery-item img",
    "a[data-lightbox] img",
  ];
  for (const sel of selectors) {
    $(sel).each((_, el) => {
      const $img = $(el);
      const src = $img.attr("data-src") || $img.attr("src") || "";
      if (src) pushUrl(src);
    });
    if (screenshots.length > 0) break;
  }

  // 2) 从页面 JS / HTML 中正则提取截图 URL
  if (screenshots.length === 0) {
    const raw = String(html || "").replace(/\\\//g, "/");
    const patterns = [
      /https?:\/\/[^"'\s<>]+?(?:screenshot|preview|gallery)[^"'\s<>]+?\.(?:jpg|jpeg|webp|png)/gi,
      /https?:\/\/[^"'\s<>]+?\/contents\/[^"'\s<>]+?\.jpg/gi,
    ];
    for (const pattern of patterns) {
      const matches = raw.match(pattern);
      if (matches) {
        for (const url of matches) pushUrl(url);
      }
    }
  }

  return screenshots;
}

// ==================== 工具函数 ====================

function safeText(str) {
  return (str || "").replace(/\s+/g, " ").trim();
}

function normalizeUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href.replace(/([^:]\/)\/+/g, '$1');
  if (href.startsWith("//")) return "https:" + href;
  return `https://javday.app${href.startsWith("/") ? "" : "/"}${href}`;
}

async function loadPage(params = {}) {
  const baseUrl = params.url;
  const sortBy = params.sort_by || "new";
  const page = parseInt(params.page, 10) || 1;
  
  const pagePath = buildPageUrl(baseUrl, sortBy, page);
  const targetUrl = getFullUrl(pagePath);

  try {
    const response = await Widget.http.get(targetUrl, {
      headers: {
        "User-Agent": JAVDAY_USER_AGENT,
        Referer: "https://javday.app/",
      },
    });

    if (!response?.data) {
      throw new Error("无法获取页面内容");
    }

    const $ = Widget.html.load(response.data);
    const videoItems = [];

    $(".video-wrapper .videoBox").each((index, element) => {
      const $item = $(element);
      let link = $item.attr("href");
      const title = $item.find(".videoBox-info .title").text().trim();
      const imgSrc = getCoverImgSrc($item);

      if (!link || !title) return;
      
      if (!link.startsWith("http")) {
        link = link.startsWith("//") 
          ? `https:${link}`
          : `https://javday.app${link.startsWith("/") ? "" : "/"}${link}`;
      }

      link = link.replace(/([^:]\/)\/+/g, '$1');

      videoItems.push({
        id: `${index}|${link}`,
        type: "url",
        title: title,
        imgSrc: imgSrc,
        backdropPath: imgSrc,
        link: link,
        description: `来自JAVDay | 排序:${sortBy === "new" ? "最新上架" : "人气最高"}`,
        mediaType: "movie",
      });
    });
    
    return videoItems;
  } catch (error) {
    console.error(`${JAVDAY_LOG_PREFIX} 获取视频失败: ${error.message}`);
    throw error;
  }
}

async function search(params = {}) {
  const keyword = params.keyword || "";
  const page = parseInt(params.page, 10) || 1;
  
  if (!keyword) {
    throw new Error("请输入搜索关键词");
  }

  let searchUrl;
  if (page === 1) {
    searchUrl = `https://javday.app/search/?wd=${keyword}`;
  } else {
    searchUrl = `https://javday.app/search/page/${page}/wd/${keyword}/`;
  }

  try {
    const response = await Widget.http.get(searchUrl, {
      headers: {
        "User-Agent": JAVDAY_USER_AGENT,
        Referer: "https://javday.app/",
      },
    });

    if (!response?.data) {
      throw new Error("无法获取搜索结果");
    }

    const $ = Widget.html.load(response.data);
    const videoItems = [];

    $(".video-wrapper .videoBox").each((index, element) => {
      const $item = $(element);
      let link = $item.attr("href");
      const title = $item.find(".videoBox-info .title").text().trim();
      const imgSrc = getCoverImgSrc($item);

      if (!link || !title) return;
      
      if (!link.startsWith("http")) {
        link = link.startsWith("//") 
          ? `https:${link}`
          : `https://javday.app${link.startsWith("/") ? "" : "/"}${link}`;
      }

      link = link.replace(/([^:]\/)\/+/g, '$1');

      videoItems.push({
        id: `${index}|${link}`,
        type: "url",
        title: title,
        imgSrc: imgSrc,
        backdropPath: imgSrc,
        link: link,
        description: `搜索: ${params.keyword}`,
        mediaType: "movie",
      });
    });
    
    return videoItems;
  } catch (error) {
    console.error(`${JAVDAY_LOG_PREFIX} 搜索失败: ${error.message}`);
    throw error;
  }
}

async function loadDetail(link) {
  try {
    const response = await Widget.http.get(link, {
      headers: { "User-Agent": JAVDAY_USER_AGENT, Referer: link },
    });

    if (!response?.data) {
      throw new Error("无法获取详情页内容");
    }

    const html = response.data;
    const $ = Widget.html.load(html);

    // === 1. 视频地址提取 ===
    let videoUrl = "";

    // 1a) DPlayer 脚本
    const dplayerScript = Array.from($("script"))
      .find(el => {
        const sc = $(el).html();
        return sc && sc.includes("new DPlayer");
      });
    if (dplayerScript) {
      videoUrl = extractVideoUrlFromDPlayerScript($(dplayerScript).html()) || "";
    }

    // 1b) video/source 标签
    if (!videoUrl) {
      videoUrl = $("video#J_prismPlayer").attr("src")
        || $("source[src*='.m3u8']").attr("src")
        || $("video source").attr("src")
        || "";
    }

    // 1c) script 中的 m3u8
    if (!videoUrl) {
      const scriptSources = Array.from($("script"))
        .map(el => $(el).html())
        .find(content => content && content.includes(".m3u8"));
      if (scriptSources) {
        const m3u8Match = scriptSources.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
        if (m3u8Match?.[1]) videoUrl = m3u8Match[1];
      }
    }

    // 1d) video[src] / iframe player
    if (!videoUrl) {
      videoUrl = $("video[src]").attr("src")
        || $("iframe[src*='player']").attr("src")
        || "";
    }

    if (!videoUrl) throw new Error("无法找到视频源");
    if (videoUrl.startsWith("//")) videoUrl = "https:" + videoUrl;

    // === 2. 基础信息（纯 DOM，无网络） ===
    const title = safeText($(".video-info h1, .video-info .title, h1.title").first().text())
      || safeText($('meta[property="og:title"]').attr("content"))
      || "未知标题";

    const cover = $("video").attr("poster")
      || $('meta[property="og:image"]').attr("content")
      || "";

    const description = safeText($(".video-info .desc, .video-info p, .description").first().text()) || undefined;

    // === 3. 分类 & 标签（纯 DOM） ===
    const genreItems = [];
    const seenGenres = new Set();
    $(".video-info a[href*='/category/'], .video-info a[href*='/label/'], .tags a, .tag-list a").each((_, el) => {
      const $a = $(el);
      const href = normalizeUrl($a.attr("href") || "");
      const text = safeText($a.text());
      if (!text || !href || seenGenres.has(href)) return;
      seenGenres.add(href);
      genreItems.push({ id: href, title: text });
    });

    // === 4. 演员信息（纯 DOM + 记录缺失头像） ===
    const peoples = [];
    const seenPeoples = new Set();
    const missingAvatarItems = [];
    $(".video-info a[href*='/actors/'], .video-info a[href*='/actresses/'], .actors a, .model-list a").each((_, el) => {
      const $a = $(el);
      const modelHref = normalizeUrl($a.attr("href") || "");
      const name = safeText($a.text());
      if (!name || seenPeoples.has(name)) return;
      seenPeoples.add(name);
      const $img = $a.find("img").first();
      const avatarSrc = $img.attr("data-src") || $img.attr("src") || "";
      const avatar = avatarSrc.startsWith("//") ? "https:" + avatarSrc
        : avatarSrc.startsWith("http") ? avatarSrc
        : "";
      if (!avatar && modelHref) {
        missingAvatarItems.push({ index: peoples.length, href: modelHref });
      }
      peoples.push({
        id: modelHref || name,
        title: name,
        avatar: avatar || "https://iili.io/KtHNnQS.png",
      });
    });

    // === 5. 推荐视频（纯 DOM） ===
    const relatedItems = [];
    const seenRelated = new Set([link]);
    $(".video-wrapper .videoBox, .related-videos .videoBox, .recommend .videoBox").each((_, el) => {
      if (relatedItems.length >= 12) return false;
      const $item = $(el);
      let recHref = $item.attr("href") || "";
      const recLink = normalizeUrl(recHref);
      if (!recLink || seenRelated.has(recLink)) return;
      seenRelated.add(recLink);

      const recTitle = safeText($item.find(".videoBox-info .title, .title").first().text()) || "相关视频";
      const recCover = getCoverImgSrc($item);

      relatedItems.push({
        id: recLink,
        type: "url",
        title: recTitle,
        backdropPath: recCover || undefined,
        posterPath: recCover || undefined,
        mediaType: "movie",
        link: recLink,
      });
    });

    // === 6. 剧照截图（DOM 提取 + 正则回退） ===
    const backdropPaths = extractPageScreenshots($, html);

    // === 7. 并行网络请求：缺失头像补全 ===
    if (missingAvatarItems.length > 0) {
      const avatarResults = await Promise.all(
        missingAvatarItems.map(item => resolvePeopleAvatar(item.href))
      );
      for (let i = 0; i < missingAvatarItems.length; i++) {
        const { index } = missingAvatarItems[i];
        if (avatarResults[i]) {
          peoples[index].avatar = avatarResults[i];
        }
      }
    }

    // === 8. 组装结果 ===
    return {
      id: link,
      type: "url",
      videoUrl,
      playerType: "ijk",
      title,
      description,
      backdropPath: cover || undefined,
      posterPath: cover || undefined,
      backdropPaths: backdropPaths.length > 0 ? backdropPaths : undefined,
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      peoples: peoples.length > 0 ? peoples : undefined,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      mediaType: "movie",
      link,
      customHeaders: {
        Referer: link,
        "User-Agent": JAVDAY_USER_AGENT,
      },
    };
  } catch (error) {
    console.error(`${JAVDAY_LOG_PREFIX} 加载详情失败: ${error.message}`);
    return {
      id: link,
      type: "url",
      videoUrl: link,
      title: "加载失败",
      description: error.message || "详情请求失败",
      mediaType: "movie",
      link,
    };
  }
}

//Original Author: 夢
//Adapted & Optimized for Jable Widget by Grok
WidgetMetadata = {
  id: "kanav_int",
  title: "KanAV",
  description: "中文字幕 | 日韩有码 | 无码 | 国产AV | 探花等 | 支持Forward播放器",
  author: "夢｜Grok适配",
  site: "https://kanav.info",
  version: "1.1.4",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索",
      description: "全站搜索",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 1800,
      params: [
        { name: "keyword", title: "关键词", type: "input" },
        { name: "from", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      title: "中文字幕",
      description: "中文字幕AV",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://kanav.info/index.php/vod/type/id/1.html" },
        { name: "from", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      title: "日韩有码",
      description: "日韩有码",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://kanav.info/index.php/vod/type/id/2.html" },
        { name: "from", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      title: "日韩无码",
      description: "日韩无码",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://kanav.info/index.php/vod/type/id/3.html" },
        { name: "from", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      title: "国产AV",
      description: "国产AV",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://kanav.info/index.php/vod/type/id/4.html" },
        { name: "from", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      title: "自拍泄密",
      description: "自拍泄密",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://kanav.info/index.php/vod/type/id/30.html" },
        { name: "from", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      title: "探花约炮",
      description: "探花约炮",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://kanav.info/index.php/vod/type/id/31.html" },
        { name: "from", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      title: "主播录制",
      description: "主播录制",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://kanav.info/index.php/vod/type/id/32.html" },
        { name: "from", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      title: "动漫番剧",
      description: "动漫番剧",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://kanav.info/index.php/vod/type/id/20.html" },
        { name: "from", title: "页码", type: "page", value: "1" },
      ],
    },
  ],
};

// ==================== 常量 ====================
const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Mobile/15E148 Safari/604.1';
const BASE_URL = 'https://kanav.info';

async function fetchPage(url) {
  const response = await Widget.http.get(url, {
    headers: { 'User-Agent': UA, 'Referer': BASE_URL }
  });
  return response.data;
}

// ==================== 列表加载 ====================
async function loadPage(params = {}) {
  let url = params.url;
  const page = params.from || 1;
  
  if (page > 1) {
    url = url.replace('.html', `/page/${page}.html`);
  }

  const html = await fetchPage(url);
  const $ = Widget.html.load(html);
  const items = [];

  $('.post-list .col-md-3').each((_, element) => {
    const $el = $(element);
    const entryTitle = $el.find('.entry-title a');
    const videoItem = $el.find('.video-item');

    const vodUrl = entryTitle.attr('href');
    const vodName = entryTitle.text().trim();
    const vodPic = videoItem.find('.featured-content-image a img').attr('data-original') || 
                   videoItem.find('img').attr('src');
    const remark = videoItem.find('span.model-view-left').text().trim();
    const duration = videoItem.find('span.model-view').text().trim();

    if (vodUrl && vodName) {
      items.push({
        id: vodUrl,
        type: "url",
        title: vodName,
        backdropPath: vodPic,        // 海报图
        link: `${BASE_URL}${vodUrl}`,
        mediaType: "movie",
        description: remark,
        releaseDate: duration,
        playerType: "system"
      });
    }
  });

  return items;
}

// ==================== 搜索 ====================
async function search(params = {}) {
  const keyword = encodeURIComponent(params.keyword || '');
  const page = params.from || 1;
  const url = `${BASE_URL}/index.php/vod/search/by/time_add/page/${page}/wd/${keyword}.html`;
  
  const html = await fetchPage(url);
  const $ = Widget.html.load(html);
  const items = [];

  $('.post-list .col-md-3').each((_, element) => {
    const $el = $(element);
    const entryTitle = $el.find('.entry-title a');
    const videoItem = $el.find('.video-item');

    const vodUrl = entryTitle.attr('href');
    const vodName = entryTitle.text().trim();
    const vodPic = videoItem.find('.featured-content-image a img').attr('data-original');
    const remark = videoItem.find('span.model-view-left').text().trim();
    const duration = videoItem.find('span.model-view').text().trim();

    if (vodUrl && vodName) {
      items.push({
        id: vodUrl,
        type: "url",
        title: vodName,
        backdropPath: vodPic,
        link: `${BASE_URL}${vodUrl}`,
        mediaType: "movie",
        description: remark,
        releaseDate: duration,
        playerType: "system"
      });
    }
  });

  return items;
}

async function loadDetail(link) {
  try {
    console.log("详情页:", link);
    const html = await fetchPage(link);
    const $ = Widget.html.load(html);

    let playUrl = "";

    // ====================
    // ✅ Step1：优先找 iframe
    // ====================
    let iframeSrc = $('iframe').attr('src');

    if (iframeSrc) {
      if (!iframeSrc.startsWith('http')) {
        iframeSrc = BASE_URL + iframeSrc;
      }

      console.log("发现 iframe:", iframeSrc);

      const iframeHtml = await fetchPage(iframeSrc);

      // ====================
      // ✅ Step2：在 iframe 页面找 m3u8
      // ====================
      const m3u8Regex = /(https?:\/\/[^\s'"<>]+\.m3u8[^\s'"<>]*)/i;
      const m3u8Match = iframeHtml.match(m3u8Regex);

      if (m3u8Match) {
        playUrl = m3u8Match[1];
        console.log("✅ iframe解析成功");
      }

      // ====================
      // ✅ Step3：解析 js 变量
      // ====================
      if (!playUrl) {
        const jsMatch = iframeHtml.match(/var\s+urls?\s*=\s*["']([^"']+)["']/i);
        if (jsMatch) {
          playUrl = jsMatch[1];
        }
      }
    }

    // ====================
    // ✅ Step4：备用（全局扫描）
    // ====================
    if (!playUrl) {
      const all = html.match(/https?:\/\/[^\s'"<>]+\.(m3u8|mp4)[^\s'"<>]*/gi);
      if (all) {
        playUrl = all.find(u => u.includes('m3u8')) || all[0];
        console.log("✅ 全局匹配成功");
      }
    }

    // ====================
    // ✅ Step5：poster
    // ====================
    const poster = $('meta[property="og:image"]').attr('content') ||
                   $('img').first().attr('src');

    return {
      id: link,
      type: "detail",
      videoUrl: playUrl,
      playerType: "forward",
      customHeaders: {
        'User-Agent': UA,
        'Referer': BASE_URL,
        'Origin': BASE_URL
      },
      backdropPath: poster,
      description: playUrl ? "✅ 成功" : "❌ 未获取"
    };

  } catch (e) {
    console.error("错误:", e.message);
    return {
      id: link,
      type: "detail",
      videoUrl: "",
      playerType: "forward",
      description: "错误: " + e.message
    };
  }
}

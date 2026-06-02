//Original Author: 夢
//Adapted & Optimized for Jable Widget by Grok
WidgetMetadata = {
  id: "kanav_int",
  title: "KanAV",
  description: "中文字幕 | 日韩有码 | 无码 | 国产AV | 探花等 | 支持Forward播放器",
  author: "夢｜Grok适配",
  site: "https://kanav.info",
  version: "1.1.2",
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

// ==================== 详情页 - 强化版视频地址获取 ====================
async function loadDetail(link) {
  try {
    const html = await fetchPage(link);
    const $ = Widget.html.load(html);

    let playUrl = "";

    console.log("正在分析播放页面...");

    // 方案1：精确匹配 player_aaaa（支持多行）
    let playerMatch = html.match(/var\s+player_aaaa\s*=\s*(\{[\s\S]*?\}\s*);?/i);
    if (playerMatch && playerMatch[1]) {
      try {
        const playerStr = playerMatch[1].trim();
        const playerData = JSON.parse(playerStr);
        
        if (playerData.url) {
          let encoded = playerData.url;
          
          // Base64 解码
          let decoded = atob(encoded);
          playUrl = decodeURIComponent(decoded);
          
          if (playUrl.includes('%')) {
            playUrl = decodeURIComponent(playUrl);
          }
          
          console.log("✅ player_aaaa 解码成功");
        }
      } catch (e) {
        console.error("player_aaaa JSON解析失败:", e);
      }
    }

    // 方案2：使用 CryptoJS（如果 Widget 支持 createCryptoJS）
    if (!playUrl && typeof CryptoJS !== "undefined") {
      try {
        const scriptText = $('script:contains(player_aaaa)').text();
        if (scriptText) {
          const match = scriptText.match(/"url"\s*:\s*"([^"]+)"/);
          if (match && match[1]) {
            const decoded = CryptoJS.enc.Base64.parse(match[1]).toString(CryptoJS.enc.Utf8);
            playUrl = decodeURIComponent(decoded);
          }
        }
      } catch (e) {}
    }

    // 方案3：全局搜索真实视频链接（m3u8 / mp4）
    if (!playUrl) {
      const videoRegex = /(https?:\/\/[^\s'"]+\.(m3u8|mp4)([^\s'"]*))/gi;
      const matches = html.match(videoRegex);
      if (matches && matches.length > 0) {
        playUrl = matches[0];  // 取第一个最可能的
        console.log("✅ 备用正则匹配成功");
      }
    }

    // 方案4：查找 video 标签
    if (!playUrl) {
      const videoSrc = $('video source').attr('src') || $('video').attr('src');
      if (videoSrc) playUrl = videoSrc;
    }

    // 海报 & 预告片
    const poster = $('meta[property="og:image"]').attr('content') ||
                   $('.entry-content img').first().attr('src') ||
                   $('img[data-original]').first().attr('src');

    const previewUrl = $('video').attr('src') || "";

    const result = {
      id: link,
      type: "detail",
      videoUrl: playUrl,
      playerType: "forward",
      customHeaders: {
        'User-Agent': UA,
        'Referer': BASE_URL + '/',
        'Origin': BASE_URL
      },
      backdropPath: poster,
      previewUrl: previewUrl,
      description: playUrl ? "✅ 播放地址获取成功" : "❌ 仍未能获取播放地址"
    };

    console.log("最终播放地址:", playUrl ? playUrl.substring(0, 80) + "..." : "空");
    return result;

  } catch (e) {
    console.error("loadDetail 异常:", e.message);
    return {
      id: link,
      type: "detail",
      videoUrl: "",
      playerType: "forward",
      description: "加载失败: " + e.message
    };
  }
}

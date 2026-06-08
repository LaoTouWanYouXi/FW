WidgetMetadata = {
  id: "forward.kanav",
  title: "KanAV",
  version: "1.0.3",
  requiredVersion: "0.0.1",
  description: "KanAV \u89c6\u9891\u6e90",
  author: "\u8001\u5934",
  site: "https://kanav.info",
  detailCacheDuration: 300,
  modules: [
    { id: "cnSub",     title: "\u4e2d\u6587\u5b57\u5e55", functionName: "loadCnSub",    cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "jpKrCen",   title: "\u65e5\u97e9\u6709\u7801", functionName: "loadJpKrCen",  cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "jpKrUncen", title: "\u65e5\u97e9\u65e0\u7801", functionName: "loadJpKrUncen",cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "cnAv",      title: "\u56fd\u4ea7AV",           functionName: "loadCnAv",     cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "selfie",    title: "\u81ea\u62cd\u6cc4\u5bc6", functionName: "loadSelfie",   cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "hookup",    title: "\u63a2\u82b1\u7ea6\u70ae", functionName: "loadHookup",   cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "streamer",  title: "\u4e3b\u64ad\u5f55\u5236", functionName: "loadStreamer", cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "anime",     title: "\u52a8\u6f2b\u756a\u5267", functionName: "loadAnime",    cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
  ],
  search: {
    title: "\u641c\u7d22",
    functionName: "search",
    params: [
      { name: "keyword", title: "\u5173\u952e\u8bcd", type: "input" },
      { name: "page", title: "\u9875\u7801", type: "page" },
    ],
  },
};

const BASE = "https://kanav.info";
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Mobile/15E148 Safari/604.1";

function b64Decode(str) {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
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

function safeUriDecode(str) {
  // If already a plain URL, return as-is
  if (str.startsWith("http")) return str;
  try {
    const decoded = decodeURIComponent(str);
    if (decoded.startsWith("http")) return decoded;
  } catch (e) {}
  // Try partial decode: replace %XX sequences manually for common chars
  try {
    return str.replace(/%([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  } catch (e) {}
  return str;
}

function isDirectStreamUrl(url) {
  return /\.(m3u8|mp4|flv|mkv|avi|ts|mov|n3u8)(\?|$)/i.test(url);
}

function extractVideoUrlFromHtml(html) {
  // Strategy 1: Direct m3u8/mp4 URL in HTML (broadest match)
  let m = html.match(/https?:\/\/[^\s"'<>\\,;)}\]]+?\.(m3u8|mp4)[^\s"'<>\\,;){\[]*/);
  if (m) return m[0];

  // Strategy 2: DPlayer / XGPlayer / CKPlayer / ArtPlayer config
  // Matches: url:"...", url:'...', url: "...", video:{url:"..."}
  m = html.match(/["']?url["']?\s*[:=]\s*["']([^"']*(?:\.m3u8|\.mp4)[^"']*)["']/i);
  if (m) return m[1];

  // Strategy 3: JavaScript variable assignment
  // Matches: var playurl = "...", const videoUrl = '...', let src = "..."
  m = html.match(/(?:var|let|const)\s+\w*(?:url|src|video|play|file|path)\w*\s*=\s*["']([^"']*(?:\.m3u8|\.mp4)[^"']*)["']/i);
  if (m) return m[1];

  // Strategy 4: JSON key with video URL
  // Matches: "url":"https://...m3u8"
  m = html.match(/"url"\s*:\s*"([^"]*(?:\.m3u8|\.mp4)[^"]*)"/i);
  if (m) return m[1];

  // Strategy 5: HTML5 video/source tags
  const $ = Widget.html.load(html);
  const src = $("video source").attr("src") || $("video").attr("src");
  if (src) return src;

  // Strategy 6: iframe src (nested embed player)
  const iframeSrc = $("iframe").attr("src");
  if (iframeSrc && iframeSrc.startsWith("http")) return iframeSrc;

  return null;
}

function extractVideoUrlFromQuery(url) {
  // Parse query parameters manually (no URLSearchParams in Forward runtime)
  const qIndex = url.indexOf("?");
  if (qIndex < 0) return null;
  const query = url.substring(qIndex + 1);
  const pairs = query.split("&");
  for (const pair of pairs) {
    const eqIndex = pair.indexOf("=");
    if (eqIndex < 0) continue;
    const key = pair.substring(0, eqIndex);
    const val = pair.substring(eqIndex + 1);
    if (key === "url" || key === "video" || key === "vid" || key === "playurl" || key === "v") {
      let decoded = safeUriDecode(val);
      if (isDirectStreamUrl(decoded)) return decoded;
      // Try base64 decode
      try {
        const b64 = b64Decode(val);
        const b64Uri = safeUriDecode(b64);
        if (isDirectStreamUrl(b64Uri)) return b64Uri;
      } catch (e) {}
    }
  }
  return null;
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
  const html = typeof res.data === "string" ? res.data : String(res.data);

  // --- Extract player_aaaa JSON from HTML ---
  // Strategy: find the <script> block containing "var player_aaaa=", then locate
  // the JSON boundaries (first '{' to last '}') within that block. This avoids
  // the non-greedy regex pitfall where nested objects (vod_data: {...}) cause
  // the match to stop at the inner '}' instead of the outer one.
  let playerData = null;

  // Primary: extract content between "var player_aaaa=" and "</script>", find JSON boundaries
  const scriptMatch = html.match(/var\s+player_aaaa\s*=\s*([\s\S]*?)<\/script>/);
  if (scriptMatch) {
    const content = scriptMatch[1];
    const startIdx = content.indexOf("{");
    const endIdx = content.lastIndexOf("}");
    if (startIdx >= 0 && endIdx > startIdx) {
      const jsonStr = content.substring(startIdx, endIdx + 1);
      try {
        playerData = JSON.parse(jsonStr);
      } catch (e) {
        // JSON parse failed, try fallback
      }
    }
  }

  // Fallback 1: original regex (works when no nested braces)
  if (!playerData) {
    const playerMatch = html.match(/var\s+player_aaaa\s*=\s*(\{[\s\S]*?\})\s*;?\s*(?:<\/script>|$)/);
    if (playerMatch) {
      try {
        playerData = JSON.parse(playerMatch[1]);
      } catch (e) {
        const jsonMatch = playerMatch[1].match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          try { playerData = JSON.parse(jsonMatch[0]); } catch (e2) {}
        }
      }
    }
  }

  // Fallback 2: cheerio :contains approach
  if (!playerData) {
    try {
      const $ = Widget.html.load(html);
      const scriptText = $("script:contains(player_aaaa)").text() || "";
      const startIdx2 = scriptText.indexOf("{");
      const endIdx2 = scriptText.lastIndexOf("}");
      if (startIdx2 >= 0 && endIdx2 > startIdx2) {
        try { playerData = JSON.parse(scriptText.substring(startIdx2, endIdx2 + 1)); } catch (e) {}
      }
      if (!playerData) {
        const jsonMatch = scriptText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          try { playerData = JSON.parse(jsonMatch[0]); } catch (e) {}
        }
      }
    } catch (e) {}
  }

  if (!playerData || !playerData.url) return null;

  // --- Decode URL based on encrypt value ---
  // MacCMS encrypt values:
  //   0 = plain text URL (no encoding)
  //   1 = base64 encoded
  //   2 = URL-encoded then base64 encoded
  const encrypt = playerData.encrypt || 0;
  const encodedUrl = playerData.url;
  let videoUrl;

  if (encrypt === 0) {
    // Plain URL, use as-is
    videoUrl = encodedUrl;
  } else if (encrypt === 1) {
    // Base64 only
    videoUrl = b64Decode(encodedUrl);
  } else {
    // encrypt === 2 (or default): URL-encoded then base64
    videoUrl = safeUriDecode(b64Decode(encodedUrl));
  }

  // If direct stream URL, return immediately
  if (isDirectStreamUrl(videoUrl)) {
    return {
      id: link,
      type: "url",
      link,
      videoUrl,
      playerType: "system",
      customHeaders: {
        "User-Agent": UA,
        "Referer": String(link),
        "Origin": BASE,
      },
    };
  }

  // --- Try to extract video URL from query parameters (parse API pattern) ---
  const queryVideo = extractVideoUrlFromQuery(videoUrl);
  if (queryVideo) {
    return {
      id: link,
      type: "url",
      link,
      videoUrl: queryVideo,
      playerType: "system",
      customHeaders: {
        "User-Agent": UA,
        "Referer": String(link),
        "Origin": BASE,
      },
    };
  }

  // --- Fetch embed page and try multi-strategy extraction ---
  if (videoUrl && videoUrl.startsWith("http")) {
    try {
      const embedRes = await Widget.http.get(videoUrl, {
        headers: { "User-Agent": UA, "Referer": BASE + "/" },
      });
      const embedHtml = typeof embedRes.data === "string" ? embedRes.data : JSON.stringify(embedRes.data);
      const extracted = extractVideoUrlFromHtml(embedHtml);
      if (extracted) videoUrl = extracted;
    } catch (e) {}

    // If the extracted URL is still an iframe embed, try one more level
    if (videoUrl && !isDirectStreamUrl(videoUrl) && videoUrl.startsWith("http")) {
      try {
        const embedRes2 = await Widget.http.get(videoUrl, {
          headers: { "User-Agent": UA, "Referer": BASE + "/" },
        });
        const embedHtml2 = typeof embedRes2.data === "string" ? embedRes2.data : JSON.stringify(embedRes2.data);
        const extracted2 = extractVideoUrlFromHtml(embedHtml2);
        if (extracted2 && isDirectStreamUrl(extracted2)) videoUrl = extracted2;
      } catch (e) {}
    }
  }

  return {
    id: link,
    type: "url",
    link,
    videoUrl,
    playerType: "system",
    customHeaders: {
      "User-Agent": UA,
      "Referer": String(link),
      "Origin": BASE,
    },
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

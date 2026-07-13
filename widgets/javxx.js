WidgetMetadata = {
  id: "forward.javxx",
  title: "JavXX",
  version: "1.8.7",
  requiredVersion: "0.0.1",
  description: "JavXX \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u70ed\u95e8\u3001\u65b0\u53d1\u5e03\u3001\u89c2\u770b\u699c\u3001\u6709/\u65e0\u7801\u3001FC2/SIRO\u3001\u7c7b\u522b/\u5973\u6f14\u5458/\u5236\u4f5c\u5546/\u7cfb\u5217\u5206\u7ea7\u4e0e\u641c\u7d22",
  author: "老头",
  site: "https://123av.com",
  detailCacheDuration: 300,
  modules: [
    {
      id: "loadResource",
      title: "\u52a0\u8f7d\u8d44\u6e90",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: []
    },
    {
      id: "hot",
      title: "\u70ed\u95e8\u5f71\u7247",
      functionName: "loadHot",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "new",
      title: "\u65b0\u53d1\u5e03",
      functionName: "loadNew",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "recent",
      title: "\u6700\u8fd1\u6dfb\u52a0",
      functionName: "loadRecent",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "today",
      title: "\u4eca\u65e5\u89c2\u770b",
      functionName: "loadToday",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "week",
      title: "\u672c\u5468\u89c2\u770b",
      functionName: "loadWeek",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "month",
      title: "\u672c\u6708\u89c2\u770b",
      functionName: "loadMonth",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "censored",
      title: "\u6709\u7801\u5f71\u7247",
      functionName: "loadCensored",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "uncensored",
      title: "\u65e0\u7801\u5f71\u7247",
      functionName: "loadUncensored",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "leaked",
      title: "\u65e0\u7801\u6cc4\u9732",
      functionName: "loadLeaked",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "fc2",
      title: "FC2",
      functionName: "loadFc2",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "siro",
      title: "SIRO \u7d20\u4eba",
      functionName: "loadSiro",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }]
    },
    {
      id: "genres",
      title: "\u7c7b\u522b",
      description: "\u6309\u7c7b\u522b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadGenres",
      cacheDuration: 3600,
      params: [
        {
          name: "genreId",
          title: "\u9009\u62e9\u7c7b\u522b",
          type: "enumeration",
          enumOptions: [
            { title: "\u5927\u80f8\u90e8", value: "https://123av.com/cn/genres/big-tits" },
            { title: "\u4e2d\u51fa", value: "https://123av.com/cn/genres/creampie" },
            { title: "\u5355\u4f53", value: "https://123av.com/cn/genres/solowork" },
            { title: "\u4eba\u59bb", value: "https://123av.com/cn/genres/married-woman" },
            { title: "\u719f\u5973", value: "https://123av.com/cn/genres/mature-woman" },
            { title: "\u7d20\u4eba", value: "https://123av.com/cn/genres/amateur" },
            { title: "\u7f8e\u5c11\u5973", value: "https://123av.com/cn/genres/beautiful-girl" },
            { title: "\u6821\u56ed", value: "https://123av.com/cn/genres/school-girls" },
            { title: "3P/4P", value: "https://123av.com/cn/genres/3p-4p" },
            { title: "\u5267\u60c5", value: "https://123av.com/cn/genres/drama" },
            { title: "NTR", value: "https://123av.com/cn/genres/cuckold" },
            { title: "\u53e3\u4ea4", value: "https://123av.com/cn/genres/blowjob" },
            { title: "\u75f4\u5973", value: "https://123av.com/cn/genres/slut" },
            { title: "\u786c\u6838", value: "https://123av.com/cn/genres/nasty-hardcore" },
            { title: "\u4e73\u4ea4", value: "https://123av.com/cn/genres/titty-fuck" },
            { title: "\u4e3b\u89c2\u89c6\u89d2", value: "https://123av.com/cn/genres/pov" },
            { title: "Cosplay", value: "https://123av.com/cn/genres/cosplay" },
            { title: "\u5973\u540c", value: "https://123av.com/cn/genres/lesbian" },
            { title: "\u4e1d\u8896", value: "https://123av.com/cn/genres/pantyhose" },
            { title: "\u5973\u4ec6", value: "https://123av.com/cn/genres/maid" },
            { title: "\u62a4\u58eb", value: "https://123av.com/cn/genres/nurse" },
            { title: "\u989c\u5c04", value: "https://123av.com/cn/genres/facials" },
            { title: "\u5de8\u81c0", value: "https://123av.com/cn/genres/huge-butt" },
            { title: "\u4e0d\u4f26", value: "https://123av.com/cn/genres/affair" },
            { title: "\u59d0\u59d0", value: "https://123av.com/cn/genres/older-sister" },
            { title: "\u5077\u7aa5", value: "https://123av.com/cn/genres/voyeur" },
            { title: "\u4fae\u8fb1", value: "https://123av.com/cn/genres/humiliation" },
            { title: "\u642d\u8bbc", value: "https://123av.com/cn/genres/nampa" },
            { title: "OL", value: "https://123av.com/cn/genres/ol" },
            { title: "\u6df1\u5589", value: "https://123av.com/cn/genres/deep-throat" },
            { title: "\u81ea\u6170", value: "https://123av.com/cn/genres/masturbation" },
            { title: "\u624b\u4ea4", value: "https://123av.com/cn/genres/handjob" },
            { title: "\u5236\u670d", value: "https://123av.com/cn/genres/uniform" },
            { title: "\u8fa3\u59b9", value: "https://123av.com/cn/genres/gal" },
            { title: "\u675f\u7f1a", value: "https://123av.com/cn/genres/restraint" },
            { title: "\u809b\u4ea4", value: "https://123av.com/cn/genres/anal" },
            { title: "\u6deb\u8bed", value: "https://123av.com/cn/genres/dirty-talk" },
            { title: "\u5973\u5927\u5b66\u751f", value: "https://123av.com/cn/genres/female-college-student" },
            { title: "\u65e0\u6bdb", value: "https://123av.com/cn/genres/shaved" },
            { title: "\u4e71\u4ea4", value: "https://123av.com/cn/genres/promiscuity" },
            { title: "\u98ce\u4fd7\u5a18", value: "https://123av.com/cn/genres/prostitutes" },
            { title: "\u6821\u670d", value: "https://123av.com/cn/genres/school-uniform" },
            { title: "\u5c11\u5973", value: "https://123av.com/cn/genres/girl" },
            { title: "\u59b9\u59b9", value: "https://123av.com/cn/genres/sister" },
            { title: "\u6309\u6469", value: "https://123av.com/cn/genres/massage" },
            { title: "\u8c03\u6559", value: "https://123av.com/cn/genres/training" },
            { title: "\u7edd\u9876\u9ad8\u6f6e", value: "https://123av.com/cn/genres/acme-orgasm" },
            { title: "\u73a9\u5177", value: "https://123av.com/cn/genres/toy" },
            { title: "\u6bcd\u4eb2", value: "https://123av.com/cn/genres/mother" },
            { title: "M\u7537", value: "https://123av.com/cn/genres/submissive-men" },
            { title: "SM", value: "https://123av.com/cn/genres/sm" },
            { title: "\u653e\u5c3f", value: "https://123av.com/cn/genres/urination" },
            { title: "\u5973\u6559\u5e08", value: "https://123av.com/cn/genres/female-teacher" },
            { title: "\u6e29\u6cc9", value: "https://123av.com/cn/genres/hot-spring" },
            { title: "\u6237\u5916", value: "https://123av.com/cn/genres/outdoors" },
            { title: "\u65b0\u5a18", value: "https://123av.com/cn/genres/bride-young-wife" },
            { title: "\u7ed1\u67b6", value: "https://123av.com/cn/genres/bondage" },
            { title: "\u8f6e\u5978", value: "https://123av.com/cn/genres/gangbang" },
            { title: "\u989c\u5c04\u7fa4\u4ea4", value: "https://123av.com/cn/genres/bukkake" },
            { title: "BBW", value: "https://123av.com/cn/genres/bbw" },
            { title: "\u5de8\u6839", value: "https://123av.com/cn/genres/huge-cock" },
            { title: "\u8ff7\u4f60\u88d9", value: "https://123av.com/cn/genres/mini-skirt" },
            { title: "\u732b\u5973\u90ce", value: "https://123av.com/cn/genres/catgirl" },
            { title: "\u65e0\u7801", value: "https://123av.com/cn/genres/uncensored" }
          ]
        },
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
    },
    {
      id: "actresses",
      title: "\u5973\u6f14\u5458",
      description: "\u6309\u5973\u6f14\u5458\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadActresses",
      cacheDuration: 3600,
      params: [
        {
          name: "peopleId",
          title: "\u9009\u62e9\u5973\u6f14\u5458",
          type: "enumeration",
          enumOptions: [
            { title: "\u6ce2\u591a\u91ce\u7ed3\u8863", value: "https://123av.com/cn/actresses/yui-hatano" },
            { title: "\u7be0\u7530\u4f18", value: "https://123av.com/cn/actresses/shinoda-yu" },
            { title: "\u5927\u69fb\u97ff", value: "https://123av.com/cn/actresses/hibiki-ohtsuki" },
            { title: "\u6ee8\u5d0e\u771f\u7eea", value: "https://123av.com/cn/actresses/hamazaki-mao" },
            { title: "\u68ee\u6cfd\u4f73\u5948", value: "https://123av.com/cn/actresses/kana-morisawa-kanako-iioka" },
            { title: "\u83b2\u5b9e\u514b\u83b1\u513f", value: "https://123av.com/cn/actresses/hasumi-claire" },
            { title: "\u677e\u672c\u4e00\u9999", value: "https://123av.com/cn/actresses/ichika-matsumoto" },
            { title: "AIKA", value: "https://123av.com/cn/actresses/aika" },
            { title: "\u65b0\u6751\u660e\u91cc", value: "https://123av.com/cn/actresses/niimura-akari" },
            { title: "\u7f8e\u6708\u4f18\u82bd", value: "https://123av.com/cn/actresses/mizuki-yayoi-1" },
            { title: "\u5c0f\u65e9\u5ddd\u601c\u5b50", value: "https://123av.com/cn/actresses/kobayakawa-reiko" },
            { title: "\u6c34\u91ce\u671d\u9633", value: "https://123av.com/cn/actresses/asahi-mizuno" },
            { title: "\u7f8e\u56ed\u548c\u82b1", value: "https://123av.com/cn/actresses/waka-misono" },
            { title: "\u4f50\u4f50\u6728\u660e", value: "https://123av.com/cn/actresses/aki-sasaki" },
            { title: "JULIA", value: "https://123av.com/cn/actresses/julia" },
            { title: "\u98ce\u95f4\u7531\u7f8e", value: "https://123av.com/cn/actresses/yumi-kazama" },
            { title: "\u6e1a\u5149\u5e0c", value: "https://123av.com/cn/actresses/mitsuki-nagisa" },
            { title: "\u5317\u91ce\u672a\u5948", value: "https://123av.com/cn/actresses/kitano-mina" },
            { title: "\u672c\u5e84\u9234", value: "https://123av.com/cn/actresses/honjo-suzu" },
            { title: "\u661f\u5bab\u4e00\u82b1", value: "https://123av.com/cn/actresses/hoshino-ichika" },
            { title: "\u6a31\u7a7a\u6843", value: "https://123av.com/cn/actresses/sakura-momo" },
            { title: "\u9752\u7a7a\u5149", value: "https://123av.com/cn/actresses/aozora-hikari" },
            { title: "\u590f\u76ee\u97ff", value: "https://123av.com/cn/actresses/natsume-iri" },
            { title: "\u6a4b\u672c\u6709\u83dc", value: "https://123av.com/cn/actresses/arina-hashimoto" },
            { title: "\u4e09\u4e0a\u60a0\u4e9a", value: "https://123av.com/cn/actresses/mikami-yua" },
            { title: "\u6df1\u7530\u548c\u5f71", value: "https://123av.com/cn/actresses/fukada-eimi" },
            { title: "\u660e\u91cc\u7d22", value: "https://123av.com/cn/actresses/arimura-suzu" },
            { title: "\u5929\u4f7f\u840c", value: "https://123av.com/cn/actresses/angel-moe" },
            { title: "\u7f8e\u8c37\u6731\u91cc", value: "https://123av.com/cn/actresses/akari-mitani" },
            { title: "\u68a8\u5948\u5948", value: "https://123av.com/cn/actresses/rena-aoi" },
            { title: "\u7be0\u7530\u6b65", value: "https://123av.com/cn/actresses/ayumi-shinoda" },
            { title: "\u4e59\u963f\u4e3d\u65af", value: "https://123av.com/cn/actresses/alice-otsu" },
            { title: "\u67a2\u6728\u8475", value: "https://123av.com/cn/actresses/aoi-kururugi" }
          ]
        },
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
    },
    {
      id: "makers",
      title: "\u5236\u4f5c\u5546",
      description: "\u6309\u5236\u4f5c\u5546\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadMakers",
      cacheDuration: 3600,
      params: [
        {
          name: "genreId",
          title: "\u9009\u62e9\u5236\u4f5c\u5546",
          type: "enumeration",
          enumOptions: [
            { title: "FC2", value: "https://123av.com/cn/makers/fc2" },
            { title: "Moody's", value: "https://123av.com/cn/makers/moodys" },
            { title: "SOD Create", value: "https://123av.com/cn/makers/sod-create" },
            { title: "Madonna", value: "https://123av.com/cn/makers/madonna" },
            { title: "Prestige", value: "https://123av.com/cn/makers/prestige" },
            { title: "Attackers", value: "https://123av.com/cn/makers/attackers" },
            { title: "Idea Pocket", value: "https://123av.com/cn/makers/idea-pocket" },
            { title: "S1", value: "https://123av.com/cn/makers/s1-no-1-style" },
            { title: "HEYZO", value: "https://123av.com/cn/makers/heyzo" },
            { title: "10Musume", value: "https://123av.com/cn/makers/10musume" },
            { title: "\u4e1c\u4eac\u70ed", value: "https://123av.com/cn/makers/tokyo-hot" },
            { title: "Faleno", value: "https://123av.com/cn/makers/faleno" },
            { title: "E-BODY", value: "https://123av.com/cn/makers/e-body" },
            { title: "Kawaii", value: "https://123av.com/cn/makers/kawaii" },
            { title: "Hunter", value: "https://123av.com/cn/makers/hunter" },
            { title: "Venus", value: "https://123av.com/cn/makers/venus" },
            { title: "Premium", value: "https://123av.com/cn/makers/premium" },
            { title: "Natural High", value: "https://123av.com/cn/makers/natural-high" },
            { title: "1Pondo", value: "https://123av.com/cn/makers/1pondo" },
            { title: "Caribbeancom", value: "https://123av.com/cn/makers/caribbeancom" }
          ]
        },
        { name: "page", title: "\u9875\u7801", type: "page" }
      ]
    },
    {
      id: "series",
      title: "\u7cfb\u5217",
      description: "\u6309\u7cfb\u5217\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadSeries",
      cacheDuration: 3600,
      params: [
        {
          name: "genreId",
          title: "\u9009\u62e9\u7cfb\u5217",
          type: "enumeration",
          enumOptions: [
            { title: "\u6742\u6280\u6027\u7231", value: "https://123av.com/cn/series/acrobatic-sex" },
            { title: "\u4e1c\u4eac\u70ed", value: "https://123av.com/cn/series/tokyo-hot" },
            { title: "NTR", value: "https://123av.com/cn/series/ntr" },
            { title: "\u9b54\u955c", value: "https://123av.com/cn/series/magic-mirror" },
            { title: "\u7d20\u4eba\u642d\u8bbc", value: "https://123av.com/cn/series/amateur-nanpa" },
            { title: "S1\u5973\u513f\u7cfb\u5217", value: "https://123av.com/cn/series/s1-girl-series" },
            { title: "\u7b2c\u4e00\u5370\u8c61", value: "https://123av.com/cn/series/first-impression" },
            { title: "\u7981\u5fcc\u75c5\u623f", value: "https://123av.com/cn/series/forbidden-nursing" }
          ]
        },
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

const BASE_URL = "https://123av.com";
const LANG_PREFIX = "/cn";
const SURRIT_BASE = "https://surrit.store";
const XOR_KEY = "G9zhUyphqPWZGWzZ";
const AES_KEY = "ym1eS4t0jTLakZYQ";
const STREAM_SOURCES = ["123av", "javxx", "missav"];
const SURRIT_BASES = ["https://surrit.store", "https://surrit.com"];
const VIDEO_CACHE_TTL = 3600;
const COOKIE_STORE_KEY = "http:cookies:123av";
const HTTP_TIMEOUT_MS = 12000;
const STREAM_TIMEOUT_MS = 8000;
const DETAIL_HTML_MIN_SCORE = 1500000;
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  Referer: "https://123av.com/",
};
const CATEGORY_MAP = {
  hot: "/hot",
  new: "/new",
  recent: "/recent",
  today: "/all?sort=today",
  week: "/all?sort=week",
  month: "/all?sort=month",
  censored: "/censored",
  uncensored: "/uncensored",
  leaked: "/uncensored-leaked",
  fc2: "/makers/fc2",
  siro: "/tags/siro"
};

const DIRECTORY_INDEX_MAP = {
  genres: "/genres",
  actresses: "/actresses",
  makers: "/makers",
  series: "/series"
};

function decodeHtml(text) {
  return String(text || "")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function mergeHeaders(extra) {
  return Object.assign({}, HEADERS, extra || {});
}

function loadStoredCookies() {
  try {
    return String(Widget.storage.get(COOKIE_STORE_KEY) || "").trim();
  } catch (e) {
    return "";
  }
}

function saveStoredCookies(cookieStr) {
  const text = String(cookieStr || "").trim();
  if (!text) return;
  try {
    Widget.storage.set(COOKIE_STORE_KEY, text);
  } catch (e) {}
}

function mergeCookieStrings(oldCookie, setCookieLines) {
  const jar = {};
  String(oldCookie || "")
    .split(";")
    .forEach(function (part) {
      const piece = part.trim();
      if (!piece) return;
      const eq = piece.indexOf("=");
      if (eq <= 0) return;
      jar[piece.slice(0, eq).trim()] = piece.slice(eq + 1).trim();
    });
  (setCookieLines || []).forEach(function (line) {
    const piece = String(line || "").split(";")[0].trim();
    if (!piece) return;
    const eq = piece.indexOf("=");
    if (eq <= 0) return;
    jar[piece.slice(0, eq).trim()] = piece.slice(eq + 1).trim();
  });
  return Object.keys(jar)
    .map(function (k) {
      return k + "=" + jar[k];
    })
    .join("; ");
}

function absorbResponseCookies(res) {
  if (!res || !res.headers) return;
  const h = res.headers;
  let setCookies = h["set-cookie"] || h["Set-Cookie"];
  if (!setCookies) return;
  if (!Array.isArray(setCookies)) setCookies = [setCookies];
  const merged = mergeCookieStrings(loadStoredCookies(), setCookies);
  if (merged) saveStoredCookies(merged);
}

function buildMobileHeaders(referer, extra) {
  const cookies = loadStoredCookies();
  const headers = mergeHeaders(Object.assign({
    Referer: referer || BASE_URL + LANG_PREFIX + "/",
    Origin: BASE_URL,
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Dest": "document",
    "Cache-Control": "no-cache",
  }, extra || {}));
  if (cookies) headers.Cookie = cookies;
  return headers;
}

function scoreFetchedHtml(html, url) {
  if (!html || isMigrationPage(html) || isErrorPage(html)) return -1;
  let score = Math.min(html.length, 300000);
  if (isChallengePage(html)) score -= 900000;
  if (hasPlaybackMarkers(html)) score += 3000000;
  if (extractSurritEmbedIds(html).length > 0) score += 1500000;
  if (isVideoDetailUrl(url) && extractDetailTitle(html)) score += 50000;
  return score;
}

function isErrorPage(body) {
  const text = String(body || "").trim();
  if (!text || text.length < 200) {
    return text.startsWith("{") && /"error"|"status"\s*:\s*400/.test(text);
  }
  return false;
}

function isVideoDetailUrl(url) {
  return /\/v\/[^/?#]+/i.test(String(url || ""));
}

function isDirectoryListingUrl(url) {
  return /\/(genres|actresses|makers|series)\/[^/?#]+/i.test(String(url || "")) && !isVideoDetailUrl(url);
}

function isDirectoryIndexUrl(url) {
  const u = String(url || "").replace(/\/+$/, "");
  return new RegExp(`${LANG_PREFIX.replace("/", "\\/")}\\/(genres|actresses|makers|series)$`, "i").test(u);
}

function cleanDirectoryTitle(text, slug) {
  let t = normalizeListText(text);
  t = t.replace(/\s+\+\s*\u5173\u6ce8.*$/i, "").replace(/\s*\u5df2\u5173\u6ce8.*$/i, "");
  t = t.replace(/\s+\d[\d,.\sKk\u4e07\u4e2a\u89c6\u9891\u4f4d\u6b21\u89c2\u770b\u5173\u6ce8]*$/i, "").trim();
  if (!t || t.length > 80 || looksLikeDuration(t) || /^\d/.test(t)) {
    t = String(slug || "").replace(/-/g, " ");
  }
  return t || String(slug || "").replace(/-/g, " ");
}

function parseDirectoryListRegex(html, indexPath) {
  const items = [];
  const seen = new Set();
  const prefix = LANG_PREFIX + indexPath;
  const esc = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`href="((?:https?:\\/\\/[^"']+)?${esc}\\/([^"#?/]+))"`, "gi");
  let m;
  while ((m = re.exec(String(html || ""))) && items.length < 120) {
    const href = m[1];
    const slug = m[2];
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) continue;
    seen.add(detailLink);
    const window = String(html).slice(m.index, m.index + 400);
    const titleM = window.match(/>([^<]{2,100})</);
    const title = cleanDirectoryTitle(titleM ? titleM[1] : "", slug);
    items.push({
      id: detailLink,
      type: "url",
      title,
      link: detailLink,
      mediaType: "movie",
    });
  }
  return items;
}

function parseDirectoryList(html, indexPath) {
  if (!html || isMigrationPage(html)) return [];
  const $ = Widget.html.load(html);
  const items = [];
  const seen = new Set();
  const prefix = LANG_PREFIX + indexPath;

  $("a[href]").each((_, el) => {
    if (items.length >= 120) return false;
    const $a = $(el);
    let href = $a.attr("href") || "";
    if (!href) return;
    let path = href;
    if (path.startsWith("http")) path = path.replace(BASE_URL, "");
    if (!path.startsWith(prefix + "/")) return;
    const slug = path.slice(prefix.length + 1).split(/[?#]/)[0];
    if (!slug || slug.includes("/")) return;
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) return;
    seen.add(detailLink);
    const title = cleanDirectoryTitle($a.text(), slug);
    const $scope = $a.closest("article, .group, div").length ? $a.closest("article, .group, div") : $a;
    const imgCover = pickImageUrl($scope.find("img").first()) || pickImageUrl($a.find("img").first());
    const cover = resolveListCover(href, imgCover, $scope.html() || $a.html()) || undefined;
    items.push({
      id: detailLink,
      type: "url",
      title,
      backdropPath: cover,
      link: detailLink,
      mediaType: "movie",
    });
  });

  if (items.length > 0) return items;
  return parseDirectoryListRegex(html, indexPath);
}

function normalizeBrowseId(raw) {
  const text = decodeHtml(String(raw || "").trim());
  if (!text) return "";
  if (/^https?:\/\//i.test(text)) {
    return text
      .replace(/^http:\/\//i, "https://")
      .replace(/^https?:\/\/javxx\.com/i, BASE_URL);
  }
  const pathMatch = text.match(/(\/(?:cn\/)?(?:genres|actresses|makers|series)\/[^\s?#]+)/i);
  if (pathMatch) return resolveUrl(pathMatch[1]);
  if (text.indexOf("/cn/") === 0) return BASE_URL + text;
  return "";
}

function buildBrowsePageUrl(browseRef, page) {
  const baseUrl = normalizeBrowseId(browseRef);
  if (!baseUrl) return "";
  let url = baseUrl;
  const p = Number(page || 1);
  if (p > 1) url += (url.indexOf("?") >= 0 ? "&" : "?") + "page=" + p;
  return url;
}

function buildBrowseDetailMeta(detailUrl, title, moduleKey) {
  if (moduleKey === "actresses" || /\/actresses\//.test(detailUrl)) {
    return { peoples: [{ id: detailUrl, title, role: "actress" }] };
  }
  return { genreItems: [{ id: detailUrl, title }] };
}

function detectBrowseModuleKey(url) {
  const u = String(url || "");
  if (/\/actresses(?:\/|$)/.test(u)) return "actresses";
  if (/\/makers(?:\/|$)/.test(u)) return "makers";
  if (/\/series(?:\/|$)/.test(u)) return "series";
  if (/\/genres(?:\/|$)/.test(u)) return "genres";
  return "";
}

function isMigrationPage(html) {
  return /We have moved to 123av\.com|我们已迁移至 123av\.com|Please remember our new domain and update/i.test(String(html || ""));
}

function resolveUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return BASE_URL + "/" + href;
}

function normalizeDetailLink(link) {
  let detailUrl = String(link || "").trim();
  if (!detailUrl) return "";
  if (/javxx\.com/i.test(detailUrl)) {
    detailUrl = detailUrl.replace(/^https?:\/\/javxx\.com/i, BASE_URL);
  }
  if (!detailUrl.startsWith("http")) detailUrl = resolveUrl(detailUrl);
  return detailUrl;
}

function derivePreviewUrl(coverUrl) {
  const text = String(coverUrl || "");
  const m = text.match(/icdn[^/]*\/img2\/s\d+\/([a-f0-9]{2})\/([^/?#]+)\/cover\./i);
  if (!m) return "";
  const q = text.match(/\?([^"'\\s<>]+)/);
  const query = q ? "?" + q[1] : "";
  return "https://icdn.123av.me/preview/" + m[1] + "/" + m[2] + "/preview.png" + query;
}

function isIcdnCoverUrl(url) {
  return /icdn[^/]*\/(?:img2\/|preview\/)/i.test(String(url || ""));
}

const DMM_PROBE_WORKER_BASE = "https://dmm.laotou.ccwu.cc";
const DMM_PROBE_WORKER_CACHE = {};
const DMM_PROBE_WORKER_TIMEOUT_MS = 8000;
const DMM_PROBE_STORAGE_PREFIX = "javdb.dmmProbe.v1.";
const DMM_PROBE_STORAGE_TTL_OK_MS = 60 * 24 * 3600 * 1000;
const DMM_PROBE_STORAGE_TTL_FAIL_MS = 14 * 24 * 3600 * 1000;
const DMM_CONTENT_ID_OVERRIDES = {};

const MGSTAGE_COVER_RULES = {
  ABF: { maker: "prestige" },
  ABW: { maker: "prestige" },
  ABP: { maker: "prestige" },
  CHN: { maker: "prestige" },
  JUFE: { maker: "prestige" },
  MAAN: { maker: "prestige" },
  PPT: { maker: "prestige" },
  "390JAC": { maker: "jackson" },
};

const DMM_CONTENT_PREFIX_MAP = {
  WSA: "2",
  FSDSS: "1", FCDSS: "1", FNS: "1", FTHTD: "1",
  FALENO: "1", FGAN: "1", FSNF: "1", FLAV: "1",
  NAAC: "h_706",
  NHDTC: "1",
  KUSE: "1",
  MBDD: "301",
  SDNM: "1",
  STARS: "1", STAR: "1", START: "1",
  SODS: "1",
  REBD: "h_346", REBDB: "h_346", GSHRB: "h_346",
  MOGI: "1",
  FTAV: "1",
  ABP: "118",
  CHN: "118",
  IESP: "1",
  DLDSS: "1",
};

function getMgstageCoverRule(parts) {
  if (!parts) return null;
  return MGSTAGE_COVER_RULES[parts.prefix] || null;
}

function dmmCompactUniqueUrls(urls) {
  const seen = {};
  const result = [];
  for (let i = 0; i < (urls || []).length; i++) {
    const value = String(urls[i] || "").trim();
    if (!value || seen[value]) continue;
    seen[value] = true;
    result.push(value);
  }
  return result;
}

function dmmProbeStorageKey(code) {
  return DMM_PROBE_STORAGE_PREFIX + String(code || "").trim().toUpperCase();
}

function loadDmmProbeFromStorage(code) {
  code = String(code || "").trim().toUpperCase();
  if (!code) return undefined;
  try {
    const raw = Widget.storage.get(dmmProbeStorageKey(code));
    if (!raw) return undefined;
    const entry = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!entry || !entry.savedAt) return undefined;
    const ttl = entry.ok ? DMM_PROBE_STORAGE_TTL_OK_MS : DMM_PROBE_STORAGE_TTL_FAIL_MS;
    if (Date.now() - Number(entry.savedAt) > ttl) return undefined;
    if (!entry.ok) return null;
    return {
      contentId: String(entry.contentId || ""),
      posterUrl: String(entry.posterUrl || ""),
      backdropUrl: String(entry.backdropUrl || ""),
    };
  } catch (err) {
    return undefined;
  }
}

function saveDmmProbeToStorage(code, probe) {
  code = String(code || "").trim().toUpperCase();
  if (!code) return;
  const entry = { ok: !!probe, savedAt: Date.now() };
  if (probe) {
    entry.contentId = probe.contentId || "";
    entry.posterUrl = probe.posterUrl || "";
    entry.backdropUrl = probe.backdropUrl || "";
  }
  Widget.storage.set(dmmProbeStorageKey(code), JSON.stringify(entry));
}

function getDmmProbeWorkerBase(params) {
  params = params || {};
  let base = params.dmmProbeWorker;
  if (!base) {
    const stored = Widget.storage.get("javdb.global.dmmProbeWorker");
    if (stored) base = stored;
  }
  if (!base) base = DMM_PROBE_WORKER_BASE;
  return String(base || "").replace(/\/+$/, "");
}

function getDmmProbeWorkerHeaders(params) {
  const headers = { Accept: "application/json" };
  let key = params && params.dmmProbeApiKey;
  if (!key) key = Widget.storage.get("javdb.global.dmmProbeApiKey");
  if (key) headers["X-Probe-Key"] = String(key);
  return headers;
}

function parseDmmProbeWorkerResponse(res) {
  if (!res || res.data === undefined || res.data === null) {
    return { probe: undefined, knownMiss: false };
  }
  const status = Number(res.status || res.statusCode || 0);
  if (status >= 400) return { probe: undefined, knownMiss: false };
  try {
    const data = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
    if (!data) return { probe: undefined, knownMiss: false };
    if (data.ok && data.best) {
      return {
        probe: {
          contentId: String(data.best.contentId || ""),
          posterUrl: String(data.best.posterUrl || ""),
          backdropUrl: String(data.best.backdropUrl || ""),
        },
        knownMiss: false,
      };
    }
    if (data.ok === false) return { probe: null, knownMiss: true };
    return { probe: undefined, knownMiss: false };
  } catch (err) {
    return { probe: undefined, knownMiss: false };
  }
}

async function fetchDmmProbeCover(code, params) {
  code = String(code || "").trim().toUpperCase();
  if (!code) return null;
  if (Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) {
    return DMM_PROBE_WORKER_CACHE[code];
  }

  const stored = loadDmmProbeFromStorage(code);
  if (stored !== undefined) {
    DMM_PROBE_WORKER_CACHE[code] = stored;
    return stored;
  }

  const parts = parseJavCodeParts(code);
  if (!parts || getMgstageCoverRule(parts)) {
    DMM_PROBE_WORKER_CACHE[code] = null;
    return null;
  }

  const base = getDmmProbeWorkerBase(params);
  if (!base) {
    DMM_PROBE_WORKER_CACHE[code] = null;
    return null;
  }

  try {
    const url = base + "/cover?code=" + encodeURIComponent(code);
    const res = await Widget.http.get(url, {
      headers: getDmmProbeWorkerHeaders(params),
      timeout: DMM_PROBE_WORKER_TIMEOUT_MS,
      allow_redirects: true,
    });
    const parsed = parseDmmProbeWorkerResponse(res);
    if (parsed.probe !== undefined || parsed.knownMiss) {
      DMM_PROBE_WORKER_CACHE[code] = parsed.probe;
      saveDmmProbeToStorage(code, parsed.probe);
      return parsed.probe;
    }
    return null;
  } catch (err) {
    return null;
  }
}

async function prefetchDmmProbeCovers(codes, params) {
  const pending = [];
  const seen = {};
  for (let i = 0; i < (codes || []).length; i++) {
    const code = String(codes[i] || "").trim().toUpperCase();
    if (!code || seen[code]) continue;
    seen[code] = true;
    if (Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) continue;
    const storedProbe = loadDmmProbeFromStorage(code);
    if (storedProbe !== undefined) {
      DMM_PROBE_WORKER_CACHE[code] = storedProbe;
      continue;
    }
    pending.push(code);
  }
  if (!pending.length) return;

  const base = getDmmProbeWorkerBase(params);
  if (!base) return;

  const concurrency = 6;
  for (let start = 0; start < pending.length; start += concurrency) {
    const chunk = pending.slice(start, start + concurrency);
    const tasks = [];
    for (let i = 0; i < chunk.length; i++) {
      tasks.push(fetchDmmProbeCover(chunk[i], params));
    }
    await Promise.all(tasks);
  }
}

function lookupDmmProbeCover(code) {
  code = String(code || "").trim().toUpperCase();
  if (!code || !Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) return null;
  return DMM_PROBE_WORKER_CACHE[code];
}

function normalizeDmmPrefix(prefix) {
  let p = String(prefix || "").toUpperCase();
  if (p === "REBDB") return "REBD";
  return p;
}

function buildDmmContentIdFromParts(parts) {
  if (!parts) return "";
  const contentCode = parts.code ? String(parts.code).toUpperCase() : "";
  if (contentCode && DMM_CONTENT_ID_OVERRIDES[contentCode]) return DMM_CONTENT_ID_OVERRIDES[contentCode];
  const prefix = normalizeDmmPrefix(parts.prefix);
  const numericPrefix = DMM_CONTENT_PREFIX_MAP[prefix] || "";
  if (!numericPrefix && /^SD[A-Z]{2,3}$/.test(prefix)) {
    return "1" + parts.prefixLower + parts.number5 + String(parts.suffix || "").toLowerCase();
  }
  return numericPrefix + parts.prefixLower + parts.number5 + String(parts.suffix || "").toLowerCase();
}

function parseJavCodeParts(title) {
  const raw = String(title || "").toUpperCase();
  const match = raw.match(/\b([A-Z0-9]+)-?(\d{2,5})([A-Z]?)\b/);
  if (!match) return null;
  const prefix = match[1];
  const prefixLower = prefix.toLowerCase();
  const suffix = match[3] || "";
  let number5 = match[2];
  while (number5.length < 5) number5 = "0" + number5;
  const normalizedPrefix = normalizeDmmPrefix(prefix);
  let makerPrefix = String(DMM_CONTENT_PREFIX_MAP[normalizedPrefix] || "");
  if (!makerPrefix && /^SD[A-Z]{2,3}$/.test(normalizedPrefix)) makerPrefix = "1";
  const parts = {
    prefix,
    prefixLower,
    number: match[2],
    number5,
    suffix,
    makerPrefix,
    plainCode: prefixLower + number5,
  };
  parts.code = buildDmmContentIdFromParts(parts) || (makerPrefix + prefixLower + number5);
  return parts;
}

function isDmmMonoContentId(contentId) {
  const id = String(contentId || "").toLowerCase();
  const hMatch = id.match(/^h_\d+[a-z0-9]+?(\d+)$/);
  if (hMatch) return hMatch[1].length < 5;
  const oneMatch = id.match(/^1([a-z]+)(\d+)$/);
  if (oneMatch) return oneMatch[2].length < 5;
  return false;
}

function buildMgstageCoverCandidatesFromParts(parts, rule) {
  if (!parts || !rule || !rule.maker) return { posterCandidates: [], backdropCandidates: [] };
  const number = String(parseInt(parts.number, 10));
  if (!parts.prefixLower || !number || number === "NaN") {
    return { posterCandidates: [], backdropCandidates: [] };
  }
  const dvdDash = parts.prefixLower + "-" + number;
  const base = "https://image.mgstage.com/images/" + rule.maker + "/" + parts.prefixLower + "/" + number;
  return {
    posterCandidates: dmmCompactUniqueUrls([base + "/pf_e_" + dvdDash + ".jpg", base + "/pf_o1_" + dvdDash + ".jpg"]),
    backdropCandidates: dmmCompactUniqueUrls([base + "/pb_e_" + dvdDash + ".jpg"]),
  };
}

function buildDmmMonoCoverCandidatesForId(contentId) {
  const id = String(contentId || "").toLowerCase();
  if (!id) return { posterCandidates: [], backdropCandidates: [] };
  const awsBase = "https://awsimgsrc.dmm.co.jp/pics/mono/movie/adult/" + id;
  return {
    posterCandidates: dmmCompactUniqueUrls([awsBase + "/" + id + "ps.jpg"]),
    backdropCandidates: dmmCompactUniqueUrls([awsBase + "/" + id + "pl.jpg"]),
  };
}

function buildDmmDigitalCoverCandidatesForId(contentId) {
  const id = String(contentId || "").toLowerCase();
  if (!id) return { posterCandidates: [], backdropCandidates: [] };
  const awsBase = "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + id;
  return {
    posterCandidates: dmmCompactUniqueUrls([awsBase + "/" + id + "ps.jpg", awsBase + "/" + id + "jp-1.jpg"]),
    backdropCandidates: dmmCompactUniqueUrls([awsBase + "/" + id + "pl.jpg"]),
  };
}

function appendDmmCoverCandidates(target, contentId) {
  const id = String(contentId || "").toLowerCase();
  if (!id || !target) return;
  const digital = buildDmmDigitalCoverCandidatesForId(id);
  const mono = isDmmMonoContentId(id) ? buildDmmMonoCoverCandidatesForId(id) : { posterCandidates: [], backdropCandidates: [] };
  if (isDmmMonoContentId(id)) {
    target.posterCandidates = target.posterCandidates.concat(mono.posterCandidates, digital.posterCandidates);
    target.backdropCandidates = target.backdropCandidates.concat(mono.backdropCandidates, digital.backdropCandidates);
  } else {
    target.posterCandidates = target.posterCandidates.concat(digital.posterCandidates, mono.posterCandidates);
    target.backdropCandidates = target.backdropCandidates.concat(digital.backdropCandidates, mono.backdropCandidates);
  }
}

function buildMgstageCoverCandidatesFromVideoId(videoIdOrTitle) {
  const parts = parseJavCodeParts(videoIdOrTitle);
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };
  const mgRule = getMgstageCoverRule(parts);
  if (!mgRule) return { posterCandidates: [], backdropCandidates: [] };
  return buildMgstageCoverCandidatesFromParts(parts, mgRule);
}

function appendDmmProbeCoverCandidates(candidates, dmmProbe) {
  if (!candidates || !dmmProbe) return candidates;
  if (dmmProbe.posterUrl) candidates.posterCandidates.push(dmmProbe.posterUrl);
  if (dmmProbe.backdropUrl) candidates.backdropCandidates.push(dmmProbe.backdropUrl);
  candidates.posterCandidates = dmmCompactUniqueUrls(candidates.posterCandidates);
  candidates.backdropCandidates = dmmCompactUniqueUrls(candidates.backdropCandidates);
  return candidates;
}

function buildCoverCandidatesFromVideoId(videoIdOrTitle, dmmProbe) {
  let candidates = buildMgstageCoverCandidatesFromVideoId(videoIdOrTitle);
  if (candidates.posterCandidates.length || candidates.backdropCandidates.length) return candidates;
  candidates = { posterCandidates: [], backdropCandidates: [] };
  const parts = parseJavCodeParts(videoIdOrTitle);
  if (parts && parts.code) appendDmmCoverCandidates(candidates, parts.code);
  return appendDmmProbeCoverCandidates(candidates, dmmProbe);
}

function isInvalidCoverTarget(url) {
  const u = String(url || "").toLowerCase();
  if (!u) return true;
  if (u.indexOf("now_printing") >= 0) return true;
  if (u.indexOf("noimage") >= 0) return true;
  if (/adult_pl\.jpg(\?|$)/i.test(u)) return true;
  return false;
}

function isLowResDmmPosterUrl(url) {
  const u = String(url || "").toLowerCase();
  if (!u) return false;
  if (/[?&]w=147(?:&|$|[?#])/.test(u) && /[?&]h=200(?:&|$|[?#])/.test(u)) return true;
  if (/pics\.dmm\.co\.jp\/.*ps\.jpe?g(\?|$)/i.test(u)) return true;
  if (/pics\.dmm\.com\/.*ps\.jpe?g(\?|$)/i.test(u)) return true;
  return false;
}

function pickFirstUsableCoverUrl(urls) {
  const list = dmmCompactUniqueUrls(urls || []);
  for (let i = 0; i < list.length; i++) {
    if (!isInvalidCoverTarget(list[i])) return list[i];
  }
  return "";
}

function filterTrustedCdnUrls(urls) {
  return (urls || []).filter(function (url) {
    const value = String(url || "");
    if (/image\.mgstage\.com/i.test(value)) return true;
    if (/awsimgsrc\.dmm\.co\.jp/i.test(value)) return true;
    return false;
  });
}

function resolvePosterUrlWithSiteFallback(posterUrl, siteFallback) {
  const poster = String(posterUrl || "").trim();
  if (!poster) return siteFallback || "";
  if (isLowResDmmPosterUrl(poster)) return siteFallback || poster;
  return poster;
}

function buildCoverBundleFromUrls(hdPoster, hdBackdrop) {
  return {
    backdropPath: hdBackdrop,
    posterPath: hdPoster,
    detailPoster: hdPoster,
    coverUrl: hdBackdrop,
    image: hdBackdrop,
  };
}

function buildListCoverBundle(code, siteFallback, dmmProbe) {
  const fallback = String(siteFallback || "").trim();
  if (!code) return buildCoverBundleFromUrls(fallback, fallback);
  const probe = dmmProbe !== undefined ? dmmProbe : lookupDmmProbeCover(code);
  const candidates = buildCoverCandidatesFromVideoId(code, probe);
  const hdBackdrop =
    pickFirstUsableCoverUrl(filterTrustedCdnUrls(candidates.backdropCandidates)) ||
    fallback ||
    "";
  const hdPoster =
    resolvePosterUrlWithSiteFallback(
      pickFirstUsableCoverUrl(filterTrustedCdnUrls(candidates.posterCandidates)),
      fallback
    ) ||
    fallback ||
    "";
  return buildCoverBundleFromUrls(hdPoster, hdBackdrop);
}

function buildDetailCoverBundleFromDmm(code, siteFallback, dmmProbe) {
  const fallback = String(siteFallback || "").trim();
  const probe = dmmProbe !== undefined ? dmmProbe : lookupDmmProbeCover(code);
  const candidates = buildCoverCandidatesFromVideoId(code, probe);
  const hdPoster =
    resolvePosterUrlWithSiteFallback(candidates.posterCandidates[0] || "", fallback) ||
    fallback ||
    "";
  const hdBackdrop = candidates.backdropCandidates[0] || fallback || hdPoster || "";
  return buildCoverBundleFromUrls(hdPoster, hdBackdrop);
}

function buildDmmGallery(contentId, count) {
  count = count || 10;
  const id = String(contentId || "").toLowerCase();
  if (!id) return [];
  const urls = [];
  const base = "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + id + "/";
  for (let i = 1; i <= count; i++) {
    urls.push(base + id + "jp-" + i + ".jpg");
  }
  return urls;
}

function buildDetailBackdropPaths(displayCode, dmmProbe) {
  let backdropPaths = [];
  if (dmmProbe && dmmProbe.contentId) {
    backdropPaths = buildDmmGallery(dmmProbe.contentId, 10);
  }
  const parts = parseJavCodeParts(displayCode);
  const mgRule = getMgstageCoverRule(parts);
  if (parts && mgRule) {
    const mg = buildMgstageCoverCandidatesFromParts(parts, mgRule);
    return dmmCompactUniqueUrls([mg.backdropCandidates[0]].concat(backdropPaths)).filter(Boolean);
  }
  return dmmCompactUniqueUrls(backdropPaths).filter(Boolean);
}

function extractMovieCodeFromHref(href) {
  const slug = extractVideoSlug(resolveUrl(href));
  const code = extractVideoCode(slug) || slug || "";
  const parts = parseJavCodeParts(code);
  if (parts) {
    const prefix = parts.prefix;
    const num = String(parseInt(parts.number, 10));
    return prefix + "-" + num + (parts.suffix || "");
  }
  return String(code || "").toUpperCase();
}

function buildDmmContentId(raw) {
  const parts = parseJavCodeParts(raw);
  return parts && parts.code ? parts.code : "";
}

function buildDmmBackdropCandidates(href) {
  const code = extractMovieCodeFromHref(href);
  const candidates = buildCoverCandidatesFromVideoId(code, lookupDmmProbeCover(code));
  return dmmCompactUniqueUrls(candidates.backdropCandidates || []);
}

function buildDmmBackdropUrl(href) {
  const code = extractMovieCodeFromHref(href);
  const bundle = buildListCoverBundle(code, "", lookupDmmProbeCover(code));
  return bundle.backdropPath || "";
}

function buildDmmPosterCandidates(href) {
  const code = extractMovieCodeFromHref(href);
  const candidates = buildCoverCandidatesFromVideoId(code, lookupDmmProbeCover(code));
  return dmmCompactUniqueUrls(candidates.posterCandidates || []);
}

function buildDmmPosterUrl(href) {
  const code = extractMovieCodeFromHref(href);
  const bundle = buildListCoverBundle(code, "", lookupDmmProbeCover(code));
  return bundle.posterPath || bundle.detailPoster || "";
}

function buildDetailCovers(detailUrl, dmmProbe, siteFallback) {
  const code = extractMovieCodeFromHref(detailUrl);
  const bundle = buildDetailCoverBundleFromDmm(code, siteFallback || "", dmmProbe);
  return {
    backdropPath: bundle.backdropPath || undefined,
    posterPath: bundle.posterPath || undefined,
    detailPoster: bundle.detailPoster || undefined,
  };
}

function isSiteBlurCoverUrl(url) {
  const u = String(url || "").toLowerCase();
  if (!u) return false;
  if (/dmm\.co\.jp/i.test(u)) return false;
  return /icdn[^/]*\//i.test(u) || /fourhoi\.com/i.test(u);
}

function buildCoverFallbackCandidates(href, variant) {
  const slug = extractVideoSlug(resolveUrl(href));
  if (!slug) return [];
  const code = extractVideoCode(slug) || slug;
  const suffix = variant === "t" ? "cover-t.jpg" : variant === "jpg" ? "cover.jpg" : "cover-n.jpg";
  const names = [];
  const seen = {};
  [code, slug, code.toLowerCase(), slug.toLowerCase()].forEach(function (name) {
    if (!name || seen[name]) return;
    seen[name] = 1;
    names.push(name);
  });
  return names.map(function (name) {
    return "https://fourhoi.com/" + name + "/" + suffix + "?class=normal";
  });
}

function buildCoverFallbackUrl(href, variant) {
  const list = buildCoverFallbackCandidates(href, variant);
  return list.length ? list[0] : "";
}

function isPortraitCoverUrl(url) {
  return /\/cover-t[\.\?]/i.test(String(url || ""));
}

function isLandscapeListCoverUrl(url) {
  const u = String(url || "");
  if (!u || isPortraitCoverUrl(u)) return false;
  if (/\/preview\//i.test(u)) return true;
  if (/\/cover-n[\.\?]/i.test(u)) return true;
  if (/\/img2\/[^"'\s<>]+\/cover\.(?:webp|jpg|jpeg)/i.test(u)) return true;
  if (/fourhoi\.com\/[^"'\s<>]+\/cover\.jpg/i.test(u)) return true;
  if (/dmm\.co\.jp\/[^"'\s<>]+pl\.jpg/i.test(u)) return true;
  return false;
}

function buildSlugLandscapeBackdrop(href) {
  const slug = extractVideoSlug(resolveUrl(href));
  const code = extractVideoCode(slug) || slug;
  if (!code) return "";
  return `https://fourhoi.com/${code}/cover-n.jpg?class=normal`;
}

function extractPreviewFromScope(scopeHtml) {
  const text = String(scopeHtml || "");
  const patterns = [
    /data-preview=["'](https?:\/\/icdn[^"']+\/preview\/[^"']+\/preview\.(?:png|webp|jpg)(?:\?[^"']*)?)["']/i,
    /data-preview=["'](\/\/icdn[^"']+\/preview\/[^"']+\/preview\.(?:png|webp|jpg)(?:\?[^"']*)?)["']/i,
    /background-image:\s*url\(["']?(https?:\/\/icdn[^"')]+\/preview\/[^"')]+\/preview\.(?:png|webp|jpg)(?:\?[^"')]*)?)["']?\)/i,
    /background-image:\s*url\(["']?(\/\/icdn[^"')]+\/preview\/[^"')]+\/preview\.(?:png|webp|jpg)(?:\?[^"')]*)?)["']?\)/i,
    /https?:\/\/icdn[^"'\s<>]*\/preview\/[^"'\s<>]+\/preview\.(?:png|webp|jpg)(?:\?[^"'\s<>]*)?/i,
    /\/\/icdn[^"'\s<>]*\/preview\/[^"'\s<>]+\/preview\.(?:png|webp|jpg)(?:\?[^"'\s<>]*)?/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const m = text.match(patterns[i]);
    if (m && isValidImageUrl(normalizeImageUrl(m[1] || m[0]))) {
      return normalizeImageUrl(m[1] || m[0]);
    }
  }
  return "";
}

function extractBackgroundCoverFromScope(scopeHtml) {
  const text = String(scopeHtml || "");
  const patterns = [
    /background-image:\s*url\(["']?(https?:\/\/icdn[^"')]+\/img2\/s\d+\/[^"')]+\/cover(?:\.webp|-n\.(?:webp|jpg|jpeg)|\.jpg|\.jpeg)(?:\?[^"')]*)?)["']?\)/gi,
    /https?:\/\/icdn[^"'\s<>]*\/img2\/s\d+\/[^"'\s<>]+\/cover(?:\.webp|-n\.(?:webp|jpg|jpeg)|\.jpg|\.jpeg)(?:\?[^"'\s<>]*)?/gi,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const re = new RegExp(patterns[i].source, patterns[i].flags);
    let m;
    while ((m = re.exec(text))) {
      const url = normalizeImageUrl(m[1] || m[0]);
      if (isValidImageUrl(url) && !isPortraitCoverUrl(url)) return url;
    }
  }
  return "";
}

function extractAnyIcdnUrls(scopeHtml) {
  const text = String(scopeHtml || "");
  const out = [];
  const seen = {};
  const re = /(?:https?:)?\/\/icdn[^"'\s<>]+(?:\/preview\/[^"'\s<>]+|\/img2\/[^"'\s<>]+)/gi;
  let m;
  while ((m = re.exec(text))) {
    const u = normalizeListCoverSize(normalizeImageUrl(m[0]));
    if (!u || seen[u] || !isValidImageUrl(u) || isLogoImage(u) || isPortraitCoverUrl(u)) continue;
    seen[u] = 1;
    out.push(u);
  }
  return out;
}

function extractLandscapeCoverFromScope(scopeHtml, href) {
  const icdnUrls = extractAnyIcdnUrls(scopeHtml);
  for (let i = 0; i < icdnUrls.length; i++) {
    if (/\/preview\//i.test(icdnUrls[i])) return icdnUrls[i];
  }
  for (let i = 0; i < icdnUrls.length; i++) {
    if (/\/cover(?:-n)?[\.\?]/i.test(icdnUrls[i])) return icdnUrls[i];
  }
  if (icdnUrls.length) return icdnUrls[0];

  const preview = extractPreviewFromScope(scopeHtml);
  if (preview) return normalizeListCoverSize(preview);
  const bgCover = extractBackgroundCoverFromScope(scopeHtml);
  if (bgCover) return normalizeListCoverSize(bgCover);
  const fromScope = toListCoverUrl(undefined, scopeHtml, href);
  if (fromScope && !isPortraitCoverUrl(fromScope)) return fromScope;
  return "";
}

function buildListCoverCandidates(href, coverUrl, scopeHtml) {
  const out = [];
  const seen = new Set();
  function add(url) {
    const u = normalizeListCoverSize(normalizeImageUrl(url));
    if (!u || seen.has(u) || !isValidImageUrl(u) || isLogoImage(u) || isPortraitCoverUrl(u)) return;
    seen.add(u);
    out.push(u);
  }

  buildDmmBackdropCandidates(href).forEach(add);
  add(buildCoverFallbackUrl(href, "n"));
  add(buildSlugLandscapeBackdrop(href));

  add(extractPreviewFromScope(scopeHtml));
  add(extractBackgroundCoverFromScope(scopeHtml));

  if (coverUrl && !isPortraitCoverUrl(coverUrl)) add(coverUrl);

  const fromScope = toListCoverUrl(undefined, scopeHtml, href);
  if (fromScope) add(fromScope);

  const derivedPreview = derivePreviewUrl(coverUrl || fromScope || extractBackgroundCoverFromScope(scopeHtml) || "");
  if (derivedPreview) add(derivedPreview);

  add(buildCoverFallbackUrl(href, "jpg"));
  buildCoverFallbackCandidates(href, "n").forEach(add);
  buildCoverFallbackCandidates(href, "jpg").forEach(add);
  return out;
}

function resolveListCover(href, coverUrl, scopeHtml) {
  const code = extractMovieCodeFromHref(href);
  const siteCandidates = buildListCoverCandidates(href, coverUrl, scopeHtml);
  const siteFallback = siteCandidates.length ? siteCandidates[0] : "";
  if (code) {
    const bundle = buildListCoverBundle(code, siteFallback, lookupDmmProbeCover(code));
    if (bundle.backdropPath) return bundle.backdropPath;
  }
  const dmmFirst = buildDmmBackdropUrl(href);
  if (dmmFirst) return dmmFirst;

  if (!siteCandidates.length) return buildSlugLandscapeBackdrop(href);

  function pick(re) {
    return siteCandidates.find(function (u) {
      return re.test(u);
    });
  }

  const picked =
    pick(/dmm\.co\.jp\/[^"']+pl\.jpg/i) ||
    pick(/icdn[^"']*\/preview\//i) ||
    pick(/fourhoi\.com\/[^"']+\/cover-n\.jpg/i) ||
    pick(/icdn[^"']*\/img2\/[^"']+\/cover\.(?:webp|jpg|jpeg)/i) ||
    pick(/icdn[^"']*\/img2\/[^"']+\/cover-n\.(?:webp|jpg|jpeg)/i) ||
    pick(/fourhoi\.com\/[^"']+\/cover\.jpg/i) ||
    siteCandidates.find(function (u) {
      return isLandscapeListCoverUrl(u);
    }) ||
    siteCandidates[0];

  if (picked && !isPortraitCoverUrl(picked)) return picked;
  return buildSlugLandscapeBackdrop(href) || buildCoverFallbackUrl(href, "n") || siteCandidates[0] || "";
}

function normalizeListCoverSize(url) {
  if (!url) return "";
  return normalizeImageUrl(url).replace(/\/s1080\//i, "/s720/");
}

function toListCoverUrl(coverUrl, scopeHtml, href) {
  const slug = extractVideoSlug(resolveUrl(href));
  const text = String(scopeHtml || "");

  function accept(url, scoped) {
    if (!url) return "";
    const u = normalizeListCoverSize(url);
    if (!isValidImageUrl(u) || isLogoImage(u) || isPortraitCoverUrl(u)) return "";
    if (!scoped && slug && !belongsToVideo(u, slug) && !isIcdnCoverUrl(u) && !/dmm\.co\.jp/i.test(u)) return "";
    return u;
  }

  const direct = accept(coverUrl, true);
  if (direct) return direct;

  const coverPatterns = [
    /https?:\/\/icdn[^"'\s<>]+\/img2\/s\d+\/[^"'\s<>]+\/cover(?:\.webp|-n\.(?:webp|jpg|jpeg)|\.jpg|\.jpeg)(?:\?[^"'\s<>]*)?/gi,
    /https?:\/\/icdn[^"'\s<>]+cover(?:\.webp|-n\.(?:webp|jpg|jpeg)|\.jpg|\.jpeg)(?:\?[^"'\s<>]*)?/gi,
  ];
  for (let pi = 0; pi < coverPatterns.length; pi++) {
    let coverM;
    const re = new RegExp(coverPatterns[pi].source, coverPatterns[pi].flags);
    while ((coverM = re.exec(text))) {
      const u = accept(coverM[0], true);
      if (u) return u;
    }
  }

  const fb = buildCoverFallbackUrl(href);
  return isValidImageUrl(fb) ? fb : "";
}

function cleanDetailTitle(raw) {
  let title = normalizeListText(decodeHtml(raw));
  if (!title) return "";
  title = title.replace(/\s*[—–\-|｜]\s*123\s*AV\s*$/i, "").trim();
  title = title.replace(/\s*[—–\-|｜]\s*123av\s*$/i, "").trim();
  return title;
}

function extractDetailTitle(html, $) {
  const text = String(html || "");
  const titleMatch = text.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    const fromTitle = cleanDetailTitle(titleMatch[1]);
    if (fromTitle) return fromTitle;
  }
  if ($ && $.fn) {
    const h1 = $("h1").first().text().trim();
    if (h1) return cleanDetailTitle(h1);
    const og = $('meta[property="og:title"]').attr("content") || "";
    if (og) return cleanDetailTitle(og);
    const docTitle = $("title").first().text().trim();
    if (docTitle) return cleanDetailTitle(docTitle);
  }
  return "";
}

function extractDetailDescription(html, $) {
  if ($ && $.fn) {
    const $textRef = $('p[x-ref="text"]').first();
    if ($textRef.length) {
      const t = normalizeListText($textRef.text());
      if (t) return t;
    }
    const $refs = $("p[x-ref]");
    for (let i = 0; i < $refs.length; i++) {
      const t = normalizeListText($refs.eq(i).text());
      if (t && t.length > 20) return t;
    }
  }
  const text = String(html || "");
  const refMatch = text.match(/<p[^>]+x-ref=["']text["'][^>]*>([\s\S]*?)<\/p>/i);
  if (refMatch) {
    const t = normalizeListText(refMatch[1].replace(/<[^>]+>/g, ""));
    if (t) return t;
  }
  if ($ && $.fn) {
    const fallback = normalizeListText(
      $(".detail .text-secondary, .detail .prose, .video-description, .description").first().text()
    );
    if (fallback) return fallback;
  }
  return "";
}

function hasPlaybackMarkers(html) {
  const text = normalizePlayerHtml(html);
  return /surrit\.(?:com|store)|player__frame|"episodes"|\\\/e\\\/[A-Za-z0-9_-]+/i.test(text);
}

function isChallengePage(html) {
  const text = String(html || "");
  if (hasPlaybackMarkers(text)) return false;
  if (/cf-challenge|challenge-platform|just a moment|checking your browser|attention required/i.test(text)) return true;
  if (/人机验证|安全验证|请.*验证|complete the security check/i.test(text)) return true;
  return false;
}

function normalizeImageUrl(url) {
  if (!url) return "";
  url = String(url).trim();
  if (url.startsWith("//")) return "https:" + url;
  if (url.startsWith("/")) return BASE_URL + url;
  return url;
}

function isLogoImage(url) {
  if (!url) return true;
  const u = String(url).toLowerCase();
  return /\/assets\/|logo\.|favicon|avatar\.|\/logo[/_-]|123av\.png|brand|spinner|loading\.gif|1x1/i.test(u);
}

function extractVideoSlug(detailUrl) {
  const m = String(detailUrl || "").match(/\/v\/([^/?#]+)/i);
  return m ? decodeURIComponent(m[1]).toLowerCase() : "";
}

function extractVideoCode(slug) {
  if (!slug) return "";
  return slug.replace(/-(?:uncensored-leaked|chinese-subtitle|english-subtitle|censored|leaked|subtitle)$/gi, "");
}

function belongsToVideo(url, slug) {
  if (!url || !slug) return false;
  const u = String(url).toLowerCase();
  const s = slug.toLowerCase();
  if (u.includes("/" + s + "/") || u.includes("/" + s + ".") || u.includes("/" + s + "?")) return true;
  const code = extractVideoCode(s);
  if (code && code !== s) {
    if (u.includes("/" + code + "/") || u.includes("/" + code + ".") || u.includes("/" + code + "?")) return true;
  }
  return false;
}

function isCoverImage(url) {
  return /\/cover(?:-n|-t)?\.(?:webp|jpg|jpeg)/i.test(String(url || ""));
}

function isValidImageUrl(url) {
  if (!url || !url.startsWith("http")) return false;
  if (isLogoImage(url)) return false;
  if (/placeholder|loading|blank|data:image|spacer/i.test(url)) return false;
  return /\.(webp|jpg|jpeg|png|gif)(\?|$)/i.test(url) ||
    /icdn[^/]*\//i.test(url) ||
    /fourhoi\.com\//i.test(url) ||
    /dmm\.co\.jp\//i.test(url);
}

function pickBestFromSrcset(srcset) {
  const text = String(srcset || "").trim();
  if (!text) return "";
  if (text.indexOf(",") < 0) return text.split(/\s+/)[0];
  const parts = text.split(",");
  let best = "";
  let bestW = -1;
  for (let i = 0; i < parts.length; i++) {
    const piece = String(parts[i] || "").trim();
    if (!piece) continue;
    const chunks = piece.split(/\s+/);
    const url = chunks[0];
    let w = 0;
    if (chunks[1]) {
      const wm = chunks[1].match(/(\d+)w/i);
      if (wm) w = parseInt(wm[1], 10);
    }
    if (!best || w > bestW) {
      best = url;
      bestW = w;
    }
  }
  return best;
}

function pickListFromSrcset(srcset) {
  const text = String(srcset || "").trim();
  if (!text) return "";
  if (text.indexOf(",") < 0) return text.split(/\s+/)[0];
  const entries = [];
  const parts = text.split(",");
  for (let i = 0; i < parts.length; i++) {
    const piece = String(parts[i] || "").trim();
    if (!piece) continue;
    const chunks = piece.split(/\s+/);
    const url = chunks[0];
    if (!url || url.indexOf("data:image") === 0) continue;
    let w = 0;
    if (chunks[1]) {
      const wm = chunks[1].match(/(\d+)w/i);
      if (wm) w = parseInt(wm[1], 10);
    }
    entries.push({ url: url, w: w });
  }
  if (!entries.length) return "";
  let best = entries[0];
  let bestScore = Infinity;
  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    const score = e.w ? Math.abs(e.w - 720) : 9999;
    if (score < bestScore) {
      best = e;
      bestScore = score;
    }
  }
  return best.url;
}

function pickImageAttrs($img, forList) {
  if (!$img || !$img.length) return "";
  const attrs = forList
    ? ["data-srcset", "data-src", "data-original", "data-lazy-src", "data-splash", "srcset", "src"]
    : ["data-src", "data-original", "data-lazy-src", "data-srcset", "srcset", "src"];
  for (let i = 0; i < attrs.length; i++) {
    let val = $img.attr(attrs[i]) || "";
    if (!val) continue;
    if (val.indexOf(",") >= 0 && /https?:\/\//.test(val)) {
      val = forList ? pickListFromSrcset(val) : pickBestFromSrcset(val);
    } else if (val.includes(",")) val = val.split(",")[0].trim().split(/\s+/)[0];
    val = normalizeImageUrl(val);
    if (!val || val.indexOf("data:image") === 0) continue;
    if (!isValidImageUrl(val)) continue;
    return forList ? normalizeListCoverSize(val) : upgradeCoverUrl(val);
  }
  return "";
}

function pickListImageUrl($img) {
  return pickImageAttrs($img, true);
}

function upgradeCoverUrl(url) {
  if (!url) return "";
  return normalizeImageUrl(url)
    .replace(/\/s360\//i, "/s1080/")
    .replace(/\/s480\//i, "/s1080/")
    .replace(/\/s720\//i, "/s1080/");
}

function pickImageUrl($img) {
  return pickImageAttrs($img, false);
}

function extractPosterFromHtml(html, detailUrl, $) {
  const slug = extractVideoSlug(detailUrl);
  const text = String(html || "");

  if ($ && $.fn) {
    const selectors = [
      ".video-cover img",
      ".movie-cover img",
      ".detail img[src*='icdn'], .detail img[data-src*='icdn']",
      "img[data-src*='icdn'][data-src*='cover']",
      "img[src*='icdn'][src*='cover']",
      "img[data-src*='cover.webp'], img[src*='cover.webp']",
    ];
    for (let i = 0; i < selectors.length; i++) {
      const url = pickImageUrl($(selectors[i]).first());
      if (url && !isLogoImage(url) && (!slug || belongsToVideo(url, slug))) return url;
    }
    const poster = normalizeImageUrl($("video[poster]").attr("poster") || "");
    if (poster && isValidImageUrl(poster) && (!slug || belongsToVideo(poster, slug))) return upgradeCoverUrl(poster);
  }

  if (slug) {
    const icdnRe = /https?:\/\/icdn[^"'\s<>]+\/img2\/s\d+\/[^"'\s<>]+\/cover(?:-n|-t)?\.(?:webp|jpg|jpeg)(?:\?[^"'\s<>]*)?/gi;
    let m;
    while ((m = icdnRe.exec(text))) {
      if (belongsToVideo(m[0], slug) || isIcdnCoverUrl(m[0])) return upgradeCoverUrl(m[0]);
    }
    const code = extractVideoCode(slug);
    if (code) return upgradeCoverUrl(`https://fourhoi.com/${code}/cover-t.jpg?class=normal`);
    return upgradeCoverUrl(`https://fourhoi.com/${slug}/cover-t.jpg?class=normal`);
  }

  const og1 = text.match(/property=["']og:image["']\s+content=["']([^"']+)["']/i);
  const og2 = text.match(/content=["']([^"']+)["']\s+property=["']og:image["']/i);
  const og = normalizeImageUrl((og1 && og1[1]) || (og2 && og2[1]) || "");
  if (og && isValidImageUrl(og) && !isLogoImage(og) && (!slug || belongsToVideo(og, slug))) return upgradeCoverUrl(og);

  return "";
}

function collectBackdropPaths(html, detailUrl, posterUrl, $) {
  const slug = extractVideoSlug(detailUrl);
  if (!slug) return undefined;
  const paths = [];
  const seen = new Set();
  const posterNorm = posterUrl ? upgradeCoverUrl(normalizeImageUrl(posterUrl)) : "";

  function add(url) {
    const u = upgradeCoverUrl(normalizeImageUrl(url));
    if (!isValidImageUrl(u) || isLogoImage(u) || seen.has(u)) return;
    if (posterNorm && u === posterNorm) return;
    if (isCoverImage(u)) return;
    if (!belongsToVideo(u, slug)) return;
    seen.add(u);
    paths.push(u);
  }

  const text = String(html || "");
  const slugEsc = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const icdnStillsRe = new RegExp(`https?:\\/\\/icdn[^"'\\s<>]*\\/${slugEsc}\\/[^"'\\s<>]+\\.(?:webp|jpg|jpeg)`, "gi");
  let m;
  while ((m = icdnStillsRe.exec(text)) && paths.length < 20) add(m[0]);

  const previewRes = [
    /https?:\/\/icdn[^"'\s<>]*\/(?:preview|sample|screen)[^"'\s<>]*\.(?:webp|jpg|jpeg)/gi,
    /https?:\/\/fourhoi\.com\/[^"'\s<>]*\/(?:preview|sample|screen)[^"'\s<>]*\.(?:webp|jpg|jpeg|png)/gi,
  ];
  for (let i = 0; i < previewRes.length; i++) {
    while ((m = previewRes[i].exec(text)) && paths.length < 20) add(m[0]);
  }

  if ($ && $.fn) {
    const $previewImgs = $("#preview-show img, [id*='preview'] img, .preview img, .screenshots img");
    for (let i = 0; i < $previewImgs.length; i++) {
      if (paths.length >= 20) break;
      add(pickImageUrl($previewImgs.eq(i)));
    }
  }

  return paths.length > 0 ? paths : undefined;
}

function sanitizeDurationText(text) {
  if (!text) return undefined;
  const t = String(text).trim();
  return /^\d{1,2}:\d{2}(:\d{2})?$/.test(t) ? t : undefined;
}

function looksLikeDuration(text) {
  return /^\d{1,2}:\d{2}(:\d{2})?$/.test(String(text || "").trim());
}

function normalizeListText(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function slugToDisplayTitle(href) {
  const slug = extractVideoSlug(resolveUrl(href));
  if (!slug) return "";
  return slug.toUpperCase();
}

function extractListTitle($scope, href) {
  function pick(text) {
    const t = normalizeListText(text);
    if (!t || looksLikeDuration(t)) return "";
    return t;
  }

  const tries = [
    () => pick($scope.find("h3 a[href*='/v/']").first().text()),
    () => pick($scope.find("h3").first().text()),
    () => pick($scope.find(".truncate a[href*='/v/']").first().text()),
    () => pick($scope.find(".truncate").first().text()),
    () => pick($scope.find(".text-secondary a[href*='/v/']").first().text()),
    () => pick($scope.find(".text-secondary").first().text()),
    () => pick($scope.find(".title a[href*='/v/']").first().text()),
    () => pick($scope.find(".title").first().text()),
    () => {
      let found = "";
      const $links = $scope.find("a[href*='/v/']");
      for (let i = 0; i < $links.length; i++) {
        const t = pick($links.eq(i).text());
        if (t && t.length > (found.length || 0)) found = t;
      }
      return found;
    },
    () => pick($scope.find("img").first().attr("alt")),
    () => pick($scope.find('a[href*="/v/"]').first().attr("title")),
  ];

  for (let i = 0; i < tries.length; i++) {
    const title = tries[i]();
    if (title) return title;
  }
  return slugToDisplayTitle(href);
}

function extractListDuration($scope) {
  function pick(text) {
    const t = String(text || "").trim();
    return looksLikeDuration(t) ? t : "";
  }

  const tries = [
    () => pick($scope.find(".duration").first().text()),
    () => pick($scope.find(".absolute.bottom-1").first().text()),
    () => pick($scope.find(".text-nord9").first().text()),
  ];
  for (let i = 0; i < tries.length; i++) {
    const d = tries[i]();
    if (d) return d;
  }
  const m = normalizeListText($scope.text()).match(/\b(\d{1,2}:\d{2}:\d{2})\b/);
  return m ? m[1] : "";
}

function resolveListScope($, el) {
  const $el = $(el);
  if ($el.is("div.thumbnail, .thumbnail")) {
    const $parent = $el.parent();
    if ($parent.length && ($parent.find("h3, .truncate, .text-secondary").length > 0)) return $parent;
    const $group = $el.closest(".grid .group, article, .vid-items > div.item");
    if ($group.length) return $group;
    return $parent.length ? $parent : $el;
  }
  if ($el.hasClass("group") && $el.parent().hasClass("grid")) return $el;
  if ($el.hasClass("group") || $el.is("article")) {
    const $gridGroup = $el.closest(".grid .group");
    return $gridGroup.length ? $gridGroup : $el;
  }
  const $group = $el.closest(".grid .group, article, .vid-items > div.item");
  return $group.length ? $group : $el;
}

function makeListVideoItem(href, title, coverUrl, durationText, scopeHtml) {
  const finalTitle = normalizeListText(title) || slugToDisplayTitle(href);
  if (!finalTitle || looksLikeDuration(finalTitle)) return null;
  const detailLink = resolveUrl(href);
  const backdrop = resolveListCover(href, coverUrl, scopeHtml) || undefined;
  const item = {
    id: detailLink,
    type: "url",
    title: finalTitle,
    backdropPath: backdrop,
    link: detailLink,
    mediaType: "movie",
  };
  const dt = sanitizeDurationText(durationText);
  if (dt) item.durationText = dt;
  return item;
}

function parseVideoListRegex(html) {
  const items = [];
  const seen = new Set();
  const text = String(html || "");
  const linkRe = /href="((?:https?:\/\/[^"']+)?(?:\/cn)?\/v\/[^"#?]+)"/gi;
  let m;
  while ((m = linkRe.exec(text)) && items.length < 60) {
    const href = m[1];
    if (!/\/v\//.test(href)) continue;
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) continue;
    const window = text.slice(Math.max(0, m.index - 1200), m.index + 600);
    const titleM =
      window.match(/<h3[^>]*>[\s\S]*?<a[^>]+href="[^"]*\/v\/[^"]+"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/h3>/i) ||
      window.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i) ||
      window.match(/class="[^"]*truncate[^"]*"[^>]*>([\s\S]*?)<\//i);
    let title = titleM ? normalizeListText(titleM[1].replace(/<[^>]+>/g, "")) : "";
    if (!title || looksLikeDuration(title)) title = slugToDisplayTitle(href);
    if (!title) continue;
    seen.add(detailLink);
    const coverM =
      window.match(/data-srcset="([^"]+)"/i) ||
      window.match(/data-preview=["']([^"']+)["']/i) ||
      window.match(/https?:\/\/icdn[^"'\s<>]+\/preview\/[^"'\s<>]+\/preview\.(?:png|webp|jpg)/i) ||
      window.match(/https?:\/\/icdn[^"'\s<>]+\/img2\/s\d+\/[^"'\s<>]+\/cover(?:\.webp|-n\.(?:webp|jpg|jpeg)|\.jpg|\.jpeg)/i);
    let coverRaw = coverM ? (coverM[1] || coverM[0]) : "";
    if (coverRaw && coverRaw.indexOf("http") !== 0 && coverRaw.indexOf("//") === 0) {
      coverRaw = "https:" + coverRaw;
    }
    if (coverRaw && coverRaw.indexOf("http") !== 0 && coverRaw.indexOf(",") >= 0) {
      coverRaw = pickListFromSrcset(coverRaw);
    }
    const durationM = window.match(/\b(\d{1,2}:\d{2}:\d{2})\b/);
    const item = makeListVideoItem(
      href,
      title,
      coverM ? coverRaw : undefined,
      durationM ? durationM[1] : undefined,
      window
    );
    if (item) items.push(item);
  }
  return items;
}

function readVideoCache(link) {
  try {
    const key = "vurl:v5:" + String(link);
    const raw = Widget.storage.get(key);
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (data && data.videoUrl && data.ts && Date.now() - data.ts < VIDEO_CACHE_TTL * 1000) return data;
  } catch (e) {}
  return null;
}

function writeVideoCache(link, videoUrl, customHeaders) {
  if (!videoUrl) return;
  try {
    Widget.storage.set("vurl:v5:" + String(link), JSON.stringify({ videoUrl: videoUrl, customHeaders: customHeaders, ts: Date.now() }));
  } catch (e) {}
}

function buildPlayHeaders(videoUrl, pageReferer) {
  const ref = pageReferer || BASE_URL + LANG_PREFIX + "/";
  const surritHost = videoUrl && /surrit\.com/i.test(videoUrl) ? "https://surrit.com/" : "https://surrit.store/";
  const needsSurritRef =
    videoUrl &&
    (/surrit\.(?:com|store)/i.test(videoUrl) ||
      /wowstream/i.test(videoUrl) ||
      /\.m3u8(\?|$)/i.test(videoUrl));
  const base = needsSurritRef
    ? {
        "User-Agent": HEADERS["User-Agent"],
        Origin: surritHost.replace(/\/$/, ""),
        Referer: /surrit\.(?:com|store)/i.test(ref) ? ref : surritHost,
      }
    : { "User-Agent": HEADERS["User-Agent"], Referer: BASE_URL + "/", Origin: BASE_URL };
  return Object.assign({ Accept: "*/*", "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8" }, base);
}

function resolveAbsoluteUrl(base, ref) {
  if (!ref) return "";
  if (ref.startsWith("http")) return ref;
  if (ref.startsWith("//")) return "https:" + ref;
  if (ref.startsWith("/")) {
    const origin = String(base).match(/^(https?:\/\/[^/]+)/);
    return origin ? origin[1] + ref : ref;
  }
  const root = String(base).substring(0, String(base).lastIndexOf("/") + 1);
  return root + ref;
}

function parseStreamBandwidth(line) {
  const m = String(line).match(/BANDWIDTH=(\d+)/i);
  return m ? Number(m[1]) : 0;
}

async function optimizeM3u8Url(url, headers, depth) {
  if (!url || !/\.m3u8(\?|$)/i.test(url) || depth > 2) return url;
  try {
    const res = await Widget.http.get(url, { headers });
    const text = typeof res.data === "string" ? res.data : String(res.data || "");
    if (!text.includes("#EXTM3U")) return url;
    const lines = text.split(/\r?\n/);
    const variants = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line.startsWith("#EXT-X-STREAM-INF")) continue;
      const next = (lines[i + 1] || "").trim();
      if (next && !next.startsWith("#")) variants.push({ bw: parseStreamBandwidth(line), url: resolveAbsoluteUrl(url, next) });
    }
    if (variants.length === 0) return url;
    variants.sort((a, b) => a.bw - b.bw);
    const picked = variants.length > 1 ? variants[1] : variants[0];
    return await optimizeM3u8Url(picked.url, headers, depth + 1);
  } catch (e) {
    return url;
  }
}

async function finalizeVideoUrl(url, headers, fastMode) {
  if (!url) return "";
  if (/\.mp4(\?|$)/i.test(url)) return url;
  if (/\.m3u8(\?|$)/i.test(url)) {
    if (fastMode) return url;
    return await optimizeM3u8Url(url, headers, 0);
  }
  return url;
}

function b64Decode(str) {
  const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const indices = {};
  for (let i = 0; i < map.length; i++) indices[map[i]] = i;
  const pos = str.indexOf("=");
  const padded = pos > -1;
  const len = padded ? pos : str.length;
  let i = -1;
  let data = "";
  while (i < len) {
    const code = (indices[str[++i]] << 18) | (indices[str[++i]] << 12) | (indices[str[++i]] << 6) | indices[str[++i]];
    if (code !== 0) data += String.fromCharCode((code >>> 16) & 255, (code >>> 8) & 255, code & 255);
  }
  if (padded) data = data.slice(0, pos - str.length);
  return data;
}

function xorDecode(encoded, key) {
  const decoded = b64Decode(encoded);
  let result = "";
  for (let i = 0; i < decoded.length; i++) {
    result += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return decodeURIComponent(result);
}

function xorEncrypt(input, key) {
  const bytes = [];
  for (let i = 0; i < input.length; i++) {
    bytes.push(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let b64 = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const b0 = bytes[i];
    const b1 = i + 1 < bytes.length ? bytes[i + 1] : 0;
    const b2 = i + 2 < bytes.length ? bytes[i + 2] : 0;
    b64 += map[(b0 >> 2) & 0x3f];
    b64 += map[((b0 << 4) | (b1 >> 4)) & 0x3f];
    b64 += i + 1 < bytes.length ? map[((b1 << 2) | (b2 >> 6)) & 0x3f] : "=";
    b64 += i + 2 < bytes.length ? map[b2 & 0x3f] : "=";
  }
  return b64;
}

function parseHttpJson(data) {
  if (data && typeof data === "object") return data;
  if (typeof data === "string") {
    try {
      return JSON.parse(data);
    } catch (e) {}
  }
  return null;
}

function extractM3u8FromHtml(html) {
  const text = String(html || "");

  const seekIdx = text.indexOf("seek");
  if (seekIdx > 38) {
    const chunk = text.substring(seekIdx - 38, seekIdx - 2);
    if (/^[a-f0-9-]{36}$/i.test(chunk)) {
      return "https://surrit.com/" + chunk + "/playlist.m3u8";
    }
  }

  const pipeMatch = text.match(/m3u8\|([a-f0-9|]+)\|com\|surrit\|https\|video/i);
  if (pipeMatch) {
    const uuid = pipeMatch[1].split("|").reverse().join("-");
    if (/^[a-f0-9-]{36}$/i.test(uuid)) return `https://surrit.com/${uuid}/playlist.m3u8`;
  }

  const packed = text.match(/'m3u8([\s\S]*?)video/);
  if (packed) {
    try {
      const parts = packed[1].split("|").reverse();
      if (parts.length >= 9) {
        return `${parts[1]}://${parts[2]}.${parts[3]}/${parts[4]}-${parts[5]}-${parts[6]}-${parts[7]}-${parts[8]}/playlist.m3u8`;
      }
    } catch (e) {}
  }

  const direct = text.match(/https?:\/\/surrit\.(?:com|store)\/[a-f0-9-]{36}\/playlist\.m3u8/i);
  if (direct) return direct[0];

  const generic = text.match(/https?:\/\/[^\s"'<>]+\.m3u8(?:\?[^\s"'<>]*)?/i);
  if (generic && !/\.css|\.js/i.test(generic[0])) return generic[0];

  return "";
}

function normalizePlayerHtml(html) {
  let text = String(html || "");
  for (let pass = 0; pass < 4; pass++) {
    text = text
      .replace(/\\u002f/gi, "/")
      .replace(/\\u0026/gi, "&")
      .replace(/\\u003a/gi, ":")
      .replace(/\\u0022/gi, '"')
      .replace(/\\u0027/gi, "'")
      .replace(/\\\//g, "/")
      .replace(/&amp;/g, "&");
  }
  return text;
}

function extractSurritEmbedUrls(html) {
  const raw = String(html || "");
  const text = normalizePlayerHtml(html);
  const urls = [];
  const seen = new Set();
  function add(url) {
    const u = String(url || "").trim();
    if (!u || seen.has(u)) return;
    if (!/surrit\.(?:com|store)\/e\//i.test(u)) return;
    seen.add(u);
    urls.push(u.startsWith("http") ? u : "https:" + u.replace(/^\/\//, ""));
  }

  const patterns = [
    /iframe[^>]*class=["'][^"']*player__frame[^"']*["'][^>]*\ssrc=["'](https?:\/\/surrit\.(?:com|store)\/e\/[^"']+)["']/gi,
    /iframe[^>]*\ssrc=["'](https?:\/\/surrit\.(?:com|store)\/e\/[^"']+)["'][^>]*class=["'][^"']*player__frame/gi,
    /https?:\/\/surrit\.(?:com|store)\/e\/[A-Za-z0-9_-]+(?:\?[^"'\\<\s]+)?/gi,
  ];
  for (let pi = 0; pi < patterns.length; pi++) {
    let m;
    const re = new RegExp(patterns[pi].source, patterns[pi].flags);
    while ((m = re.exec(text))) add(m[1] || m[0]);
  }

  const parseRe = /episodes\s*:\s*JSON\.parse\(\s*'((?:\\'|[^'])*)'\s*\)/gi;
  let pm;
  while ((pm = parseRe.exec(raw))) {
    try {
      let jsonText = pm[1].replace(/\\'/g, "'").replace(/\\\\/g, "\\");
      jsonText = normalizePlayerHtml(jsonText);
      const episodes = JSON.parse(jsonText);
      if (Array.isArray(episodes)) {
        for (let i = 0; i < episodes.length; i++) {
          const ep = episodes[i];
          if (ep && ep.url) add(normalizePlayerHtml(ep.url));
        }
      }
    } catch (e) {}
  }

  return urls;
}

function extractSurritEmbedIds(html) {
  const text = normalizePlayerHtml(html);
  const ids = [];
  const seen = new Set();

  function add(id) {
    const val = String(id || "").trim();
    if (!val || seen.has(val)) return;
    seen.add(val);
    ids.push(val);
  }

  const embedUrls = extractSurritEmbedUrls(html);
  for (let i = 0; i < embedUrls.length; i++) {
    const m = embedUrls[i].match(/\/e\/([A-Za-z0-9_-]+)/i);
    if (m) add(m[1]);
  }

  const embedPatterns = [
    /surrit\.(?:com|store)\/e\/([A-Za-z0-9_-]+)/gi,
    /https?:\/\/surrit\.(?:com|store)\/e\/([A-Za-z0-9_-]+)/gi,
    /player__frame[^>]+src=["']https?:\/\/surrit\.(?:com|store)\/e\/([A-Za-z0-9_-]+)/gi,
    /["']url["']\s*:\s*["']https?:\\\/\\\/surrit\.(?:com|store)\\\/e\\\/([A-Za-z0-9_-]+)/gi,
    /episodes\s*:\s*\[[\s\S]{0,8000}?surrit\.(?:com|store)\/e\/([A-Za-z0-9_-]+)/gi,
  ];
  for (let p = 0; p < embedPatterns.length; p++) {
    let m;
    const re = new RegExp(embedPatterns[p].source, embedPatterns[p].flags);
    while ((m = re.exec(text))) add(m[1]);
  }

  const dataMatch = text.match(/data-url=["']([^"']+)["']/i);
  if (dataMatch) {
    try {
      const decoded = xorDecode(dataMatch[1], XOR_KEY);
      const id = decoded.replace(/https?:\/\/[^/]+/, "").split("/").filter(Boolean).pop();
      if (id) add(id);
    } catch (e) {}
  }

  return ids;
}

function extractSurritEmbedUrl(html) {
  const raw = String(html || "");
  const text = normalizePlayerHtml(html);
  const embedUrls = extractSurritEmbedUrls(html);
  if (embedUrls.length) return embedUrls[0];

  const iframe = text.match(/player__frame[^>]+src=["'](https?:\/\/surrit\.(?:com|store)\/e\/[^"']+)["']/i);
  if (iframe) return iframe[1];

  const ids = extractSurritEmbedIds(text);
  if (!ids.length) return "";

  const encodedPoster = raw.match(/poster=(https%3A[^"'\\]+)/i);
  if (encodedPoster) {
    return SURRIT_BASE + "/e/" + ids[0] + "?poster=" + encodedPoster[1];
  }
  const poster = extractPosterParam("", raw);
  return SURRIT_BASE + "/e/" + ids[0] + (poster ? "?poster=" + encodeURIComponent(poster) : "");
}

function extractDataUrlFromHtml(html) {
  const text = String(html || "");
  const m = text.match(/data-url=["']([^"']+)["']/i);
  if (m && m[1] && m[1].length > 20) return m[1];
  const videoFiles = text.match(/id=["']video-files["'][\s\S]{0,2000}?data-url=["']([^"']+)["']/i);
  if (videoFiles && videoFiles[1]) return videoFiles[1];
  return "";
}

function decodeSurritVideoIdFromDataUrl(dataUrl) {
  if (!dataUrl) return "";
  try {
    const decodedUrl = xorDecode(dataUrl, XOR_KEY);
    const tail = decodedUrl.replace(/https?:\/\/[^/]+/, "").split("/").filter(Boolean).pop() || "";
    if (tail) return tail;
  } catch (e) {}
  return "";
}

function resolveStreamPosterUrl(detailUrl, embedUrl, html) {
  return buildDmmPosterUrl(detailUrl) || extractPosterParam(embedUrl, html) || buildDmmBackdropUrl(detailUrl) || "";
}

function extractPosterParam(embedUrl, html) {
  const url = String(embedUrl || "");
  if (url) {
    const qi = url.indexOf("?");
    if (qi >= 0) {
      const parts = url.slice(qi + 1).split("&");
      for (let i = 0; i < parts.length; i++) {
        const kv = parts[i].split("=");
        if (kv[0] === "poster" && kv[1]) {
          try {
            return decodeURIComponent(kv.slice(1).join("="));
          } catch (e) {
            return kv.slice(1).join("=");
          }
        }
      }
    }
  }
  const raw = String(html || "");
  const encodedPoster = raw.match(/poster=(https%3A[^"'\\]+)/i);
  if (encodedPoster) {
    try {
      return decodeURIComponent(encodedPoster[1]);
    } catch (e) {
      return encodedPoster[1];
    }
  }
  const text = normalizePlayerHtml(html || "");
  const m = text.match(/[?&]poster=([^&"'\\]+)/i);
  if (m) {
    try {
      return decodeURIComponent(m[1]);
    } catch (e) {
      return m[1];
    }
  }
  return "";
}

function extractSurritVideoId(html) {
  const ids = extractSurritEmbedIds(html);
  return ids.length ? ids[0] : "";
}

function detectSurritBases(html) {
  const bases = [];
  const text = String(html || "");
  const embedMatch = text.match(/https?:\/\/surrit\.\w+/i);
  if (embedMatch) bases.push(embedMatch[0].replace(/\/e\/.*$/, "").replace(/\/stream.*$/, ""));
  for (let i = 0; i < SURRIT_BASES.length; i++) bases.push(SURRIT_BASES[i]);
  const unique = [];
  const seen = new Set();
  for (let i = 0; i < bases.length; i++) {
    const b = bases[i];
    if (!b || seen.has(b)) continue;
    seen.add(b);
    unique.push(b);
  }
  return unique;
}

function parseSurritStreamResponse(streamJson) {
  if (!streamJson || typeof streamJson !== "object") return "";
  if (typeof streamJson.stream === "string" && streamJson.stream.indexOf("http") === 0) return streamJson.stream;
  if (typeof streamJson.url === "string" && streamJson.url.indexOf("http") === 0) return streamJson.url;
  if (streamJson.media) {
    if (typeof streamJson.media === "string") return "";
    if (streamJson.media.stream) return streamJson.media.stream;
    if (streamJson.media.mp4) return streamJson.media.mp4;
  }
  if (streamJson.result) {
    if (typeof streamJson.result.stream === "string") return streamJson.result.stream;
    if (streamJson.result.media) {
      if (typeof streamJson.result.media === "object") {
        return streamJson.result.media.stream || streamJson.result.media.mp4 || "";
      }
    }
  }
  if (streamJson.data && streamJson.data.stream) return streamJson.data.stream;
  return "";
}

function buildSurritReferers(surritBase, videoId, pageReferer, poster) {
  const embedRef = surritBase + "/e/" + videoId + (poster ? "?poster=" + encodeURIComponent(poster) : "");
  const refs = [embedRef, pageReferer, BASE_URL + LANG_PREFIX + "/", BASE_URL + "/", "https://123av.com/"];
  const out = [];
  const seen = new Set();
  for (let i = 0; i < refs.length; i++) {
    const r = String(refs[i] || "").trim();
    if (!r || seen.has(r)) continue;
    seen.add(r);
    out.push(r);
  }
  return out;
}

async function resolveSurritStreamNew(videoId, surritBase, pageReferer, poster) {
  let apiUrl = surritBase + "/stream?id=" + encodeURIComponent(videoId);
  if (poster) apiUrl += "&poster=" + encodeURIComponent(poster);
  const referers = buildSurritReferers(surritBase, videoId, pageReferer, poster);
  for (let ri = 0; ri < referers.length; ri++) {
    try {
      const streamRes = await Widget.http.get(apiUrl, {
        timeout: STREAM_TIMEOUT_MS,
        headers: {
          "User-Agent": HEADERS["User-Agent"],
          Accept: "application/json, text/plain, */*",
          Referer: referers[ri],
          Origin: surritBase,
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      const streamJson = parseHttpJson(streamRes.data);
      const url = parseSurritStreamResponse(streamJson);
      if (url) return url;
    } catch (e) {}
  }
  return "";
}

async function resolveSurritStreamLegacy(videoId, surritBase, srcName, pageReferer) {
  const token = encodeURIComponent(xorEncrypt(videoId, AES_KEY));
  const referers = buildSurritReferers(surritBase, videoId, pageReferer, "");
  for (let ri = 0; ri < referers.length; ri++) {
    try {
      const streamRes = await Widget.http.get(surritBase + "/stream?src=" + srcName + "&token=" + token, {
        timeout: STREAM_TIMEOUT_MS,
        headers: {
          "User-Agent": HEADERS["User-Agent"],
          Accept: "application/json, text/plain, */*",
          Referer: referers[ri],
          Origin: surritBase,
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      const streamJson = parseHttpJson(streamRes.data);
      const media = streamJson && streamJson.result && streamJson.result.media;
      if (!media) continue;
      if (typeof media === "object") {
        const direct = media.stream || media.mp4 || "";
        if (direct) return direct;
        continue;
      }
      const parsed = JSON.parse(xorDecode(media, AES_KEY));
      const url = parsed.stream || parsed.mp4 || "";
      if (url) return url;
    } catch (e) {}
  }
  return "";
}

async function raceFirstNonEmpty(tasks) {
  if (!tasks || !tasks.length) return "";
  return new Promise(function (resolve) {
    let settled = false;
    let remaining = tasks.length;
    function finish(value) {
      if (settled) return;
      if (value) {
        settled = true;
        resolve(value);
        return;
      }
      remaining--;
      if (remaining <= 0) resolve("");
    }
    for (let i = 0; i < tasks.length; i++) {
      tasks[i]().then(finish).catch(function () { finish(""); });
    }
  });
}

async function resolveSurritStreamFast(videoId, html, pageReferer, embedUrl, poster) {
  const bases = detectSurritBases(html).slice(0, 2);
  for (let b = 0; b < bases.length; b++) {
    const url = await resolveSurritStreamNew(videoId, bases[b], pageReferer, poster);
    if (url) return url;
    const legacy = await resolveSurritStreamLegacy(videoId, bases[b], "123av", pageReferer);
    if (legacy) return legacy;
    const legacy2 = await resolveSurritStreamLegacy(videoId, bases[b], "missav", pageReferer);
    if (legacy2) return legacy2;
  }
  return "";
}

async function resolveSurritStreamAny(videoId, html, pageReferer, embedUrl) {
  const poster = resolveStreamPosterUrl(pageReferer, embedUrl, html);
  const fast = await resolveSurritStreamFast(videoId, html, pageReferer, embedUrl, poster);
  if (fast) return fast;

  const bases = detectSurritBases(html).slice(0, 2);
  const tasks = [];
  for (let b = 0; b < bases.length; b++) {
    (function (base) {
      tasks.push(function () { return resolveSurritStreamNew(videoId, base, pageReferer, poster); });
      for (let si = 0; si < STREAM_SOURCES.length; si++) {
        (function (srcName) {
          tasks.push(function () { return resolveSurritStreamLegacy(videoId, base, srcName, pageReferer); });
        })(STREAM_SOURCES[si]);
      }
    })(bases[b]);
  }
  return await raceFirstNonEmpty(tasks);
}

async function resolveVideoUrlFast(html, detailUrl) {
  const text = String(html || "");
  let videoUrl = extractM3u8FromHtml(text);
  if (videoUrl) {
    if (videoUrl.startsWith("//")) videoUrl = "https:" + videoUrl;
    return videoUrl;
  }

  const embedUrl = extractSurritEmbedUrl(text);
  const poster = resolveStreamPosterUrl(detailUrl, embedUrl, text);
  const dataUrl = extractDataUrlFromHtml(text);
  const dataId = decodeSurritVideoIdFromDataUrl(dataUrl);
  if (dataId) {
    videoUrl = await resolveSurritStreamFast(dataId, text, detailUrl, embedUrl, poster);
    if (videoUrl) return videoUrl;
  }

  const surritIds = extractSurritEmbedIds(text);
  for (let i = 0; i < surritIds.length && i < 2; i++) {
    videoUrl = await resolveSurritStreamFast(surritIds[i], text, detailUrl, embedUrl, poster);
    if (videoUrl) break;
  }
  return videoUrl || "";
}

function pickItemCover(scopeHtml, href, $img) {
  const dmm = buildDmmBackdropUrl(href);
  if (dmm) return dmm;
  const fromScope = extractLandscapeCoverFromScope(scopeHtml, href);
  if (fromScope) return fromScope;
  const fromImg = pickListImageUrl($img);
  if (fromImg && !isLogoImage(fromImg) && !isPortraitCoverUrl(fromImg)) return fromImg;
  const fallbacks = buildCoverFallbackCandidates(href, "n");
  for (let i = 0; i < fallbacks.length; i++) {
    if (isValidImageUrl(fallbacks[i])) return fallbacks[i];
  }
  return buildSlugLandscapeBackdrop(href) || undefined;
}

function countVideoCards($, selector) {
  let count = 0;
  const $cards = $(selector);
  for (let i = 0; i < $cards.length; i++) {
    const $scope = resolveListScope($, $cards.get(i));
    const href = $scope.find('a[href*="/v/"]').first().attr("href") || "";
    if (/\/v\//.test(href)) count++;
  }
  return count;
}

function extractVideoListHtml(html) {
  const text = String(html || "");
  if (!text) return text;
  const mainMatch = text.match(/<main\b[\s\S]*?<\/main>/i);
  if (mainMatch && (mainMatch[0].match(/\/v\//g) || []).length >= 3) return mainMatch[0];
  return text;
}

function parseVideoList(html) {
  if (!html || isMigrationPage(html)) return [];
  const scoped = extractVideoListHtml(html);
  const $ = Widget.html.load(scoped);
  const items = [];
  const seen = new Set();

  function pushItem(href, title, cover, duration, scopeHtml, $img) {
    if (!href) return;
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) return;
    seen.add(detailLink);
    const item = makeListVideoItem(
      href,
      title,
      cover || pickItemCover(scopeHtml || "", href, $img),
      duration,
      scopeHtml || ""
    );
    if (item) items.push(item);
  }

  function parseCard(el) {
    const $scope = resolveListScope($, el);
    const href =
      $scope.find('a[href*="/v/"]').first().attr("href") ||
      $scope.find("a[href*='/v/']").first().attr("href") ||
      "";
    if (!/\/v\//.test(href)) return;
    const title = extractListTitle($scope, href);
    const duration = extractListDuration($scope);
    const $img = $scope.find("img").first();
    let scopeHtml = $scope.html() || "";
    const previewAttr =
      $scope.find("[data-preview]").first().attr("data-preview") ||
      $scope.attr("data-preview") ||
      "";
    if (previewAttr) scopeHtml += ' data-preview="' + previewAttr + '"';
    pushItem(href, title, pickItemCover(scopeHtml, href, $img), duration, scopeHtml, $img);
  }

  const cardSelectors = [".vid-items > div.item", ".grid .group", "div.thumbnail", "article"];
  let bestSelector = "";
  let bestCount = 0;
  for (let si = 0; si < cardSelectors.length; si++) {
    const n = countVideoCards($, cardSelectors[si]);
    if (n > bestCount) {
      bestCount = n;
      bestSelector = cardSelectors[si];
    }
  }
  if (bestSelector) {
    $(bestSelector).each((_, el) => parseCard(el));
  }

  if (items.length === 0) {
    $('a[href*="/v/"], a[href*="/cn/v/"]').each((_, el) => {
      const $a = $(el);
      const href = $a.attr("href") || "";
      if (!/\/v\//.test(href)) return;
      const $scope = $a.closest(".grid .group, div.thumbnail, div.item, article");
      const $root = $scope.length ? $scope : $a.parent();
      const title = extractListTitle($root, href);
      const duration = extractListDuration($root);
      const $img = $root.find("img").first();
      pushItem(href, title, pickItemCover($root.html() || $a.html(), href, $img), duration, $root.html() || $a.html(), $img);
    });
  }

  if (items.length === 0) return parseVideoListRegex(scoped);

  return items;
}

async function enrichJavxxListWithDmmCovers(items, params) {
  params = params || {};
  if (!items || !items.length) return items || [];
  const codes = [];
  for (let i = 0; i < items.length; i++) {
    const code = extractMovieCodeFromHref(items[i].link || items[i].id || "");
    if (code) codes.push(code);
  }
  await prefetchDmmProbeCovers(codes, params);
  const out = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const code = extractMovieCodeFromHref(item.link || item.id || "");
    if (!code) {
      out.push(item);
      continue;
    }
    const siteFallback = item.backdropPath || "";
    const bundle = buildListCoverBundle(code, siteFallback, lookupDmmProbeCover(code));
    out.push(
      Object.assign({}, item, {
        backdropPath: bundle.backdropPath || item.backdropPath,
        posterPath: bundle.posterPath || item.posterPath,
        detailPoster: bundle.detailPoster || item.detailPoster,
      })
    );
  }
  return out;
}

async function parseVideoListWithCovers(html, params) {
  if (!html || isMigrationPage(html)) return [];
  let items = parseVideoList(html);
  if (!items.length) items = parseVideoListRegex(extractVideoListHtml(html));
  return enrichJavxxListWithDmmCovers(items, params);
}

async function fetchHtmlText(url, referer, options) {
  options = options || {};
  const ref = referer || BASE_URL + LANG_PREFIX + "/";
  const isDetail = isVideoDetailUrl(url);
  const maxAttempts = options.maxAttempts != null ? options.maxAttempts : (isDetail ? 2 : 1);
  const attempts = [
    buildMobileHeaders(ref),
    buildMobileHeaders(ref, { "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7" }),
  ];
  let best = { html: "", score: -1 };
  let fallback = "";
  for (let i = 0; i < attempts.length && i < maxAttempts; i++) {
    try {
      const res = await Widget.http.get(url, { headers: attempts[i], timeout: HTTP_TIMEOUT_MS });
      absorbResponseCookies(res);
      const html = typeof res.data === "string" ? res.data : String(res.data || "");
      if (!html || html.length < 200 || isMigrationPage(html) || isErrorPage(html)) continue;
      if (isDetail && hasPlaybackMarkers(html) && extractSurritEmbedIds(html).length > 0 && !isChallengePage(html)) {
        return html;
      }
      const score = scoreFetchedHtml(html, url);
      if (score > best.score) best = { html: html, score: score };
      if (!fallback) fallback = html;
      if (isDetail && score >= DETAIL_HTML_MIN_SCORE) return html;
      if (!isDetail && score > 0) return html;
    } catch (e) {}
  }
  if (best.html) return best.html;
  return fallback && !isMigrationPage(fallback) ? fallback : "";
}

let siteSessionReady = false;

async function ensureSiteSession() {
  if (siteSessionReady) return;
  siteSessionReady = true;
  if (loadStoredCookies()) return;
  try {
    await fetchHtmlText(BASE_URL + LANG_PREFIX + "/hot", BASE_URL + "/", { maxAttempts: 1 });
  } catch (e) {}
}

async function fetchDetailHtml(url) {
  await ensureSiteSession();
  return fetchHtmlText(url, BASE_URL + LANG_PREFIX + "/", { maxAttempts: 1 });
}

async function fetchBrowseVideoList(browseRef, page) {
  const baseUrl = normalizeBrowseId(browseRef);
  const fetchUrl = buildBrowsePageUrl(browseRef, page);
  if (!baseUrl || !fetchUrl) return [];
  const html = await fetchHtmlText(fetchUrl, baseUrl);
  if (!html) return [];
  return parseVideoListWithCovers(html, { page: page });
}

async function loadGenreList(params) {
  const browseId = normalizeBrowseId(
    (params && (params.genreId || params.peopleId || params.url || params.link || params.id)) || ""
  );
  if (!browseId) return [];
  return fetchBrowseVideoList(browseId, params && params.page);
}

async function fetchHtml(pathOrUrl) {
  const url = pathOrUrl.startsWith("http") ? pathOrUrl : `${BASE_URL}${LANG_PREFIX}${pathOrUrl}`;
  const html = await fetchHtmlText(url, BASE_URL + LANG_PREFIX + "/");
  return { url, html: html };
}

async function loadCategory(categoryId, params) {
  const page = Number((params && params.page) || 1);
  const path = CATEGORY_MAP[categoryId] || "/new";
  let url = `${BASE_URL}${LANG_PREFIX}${path}`;
  if (page > 1) url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  const html = await fetchHtmlText(url, BASE_URL + LANG_PREFIX + path);
  if (!html || isMigrationPage(html)) return [];
  return parseVideoListWithCovers(html, params);
}

async function loadFilterList(params) {
  return loadGenreList(params);
}

async function loadHot(params) { return loadCategory("hot", params); }
async function loadNew(params) { return loadCategory("new", params); }
async function loadRecent(params) { return loadCategory("recent", params); }
async function loadToday(params) { return loadCategory("today", params); }
async function loadWeek(params) { return loadCategory("week", params); }
async function loadMonth(params) { return loadCategory("month", params); }
async function loadCensored(params) { return loadCategory("censored", params); }
async function loadUncensored(params) { return loadCategory("uncensored", params); }
async function loadLeaked(params) { return loadCategory("leaked", params); }
async function loadFc2(params) { return loadCategory("fc2", params); }
async function loadSiro(params) { return loadCategory("siro", params); }
async function loadGenres(params) {
  return loadGenreList(params);
}

async function loadActresses(params) {
  return loadGenreList(params);
}

async function loadMakers(params) {
  return loadGenreList(params);
}

async function loadSeries(params) {
  return loadGenreList(params);
}

async function resolveVideoUrl(html, detailUrl) {
  const fast = await resolveVideoUrlFast(html, detailUrl);
  if (fast) return fast;

  const text = String(html || "");
  const embedUrls = extractSurritEmbedUrls(text);
  const embedUrl = embedUrls[0] || extractSurritEmbedUrl(text);
  const surritIds = extractSurritEmbedIds(text);
  let videoUrl = "";

  for (let i = 0; i < surritIds.length; i++) {
    videoUrl = await resolveSurritStreamAny(surritIds[i], text, detailUrl, embedUrl);
    if (videoUrl) break;
  }

  for (let ei = 0; !videoUrl && ei < embedUrls.length && ei < 1; ei++) {
    const embedHtml = await fetchHtmlText(embedUrls[ei], detailUrl, { maxAttempts: 1 });
    if (!embedHtml) continue;
    const embedIds = extractSurritEmbedIds(embedHtml);
    for (let i = 0; i < embedIds.length; i++) {
      videoUrl = await resolveSurritStreamAny(embedIds[i], embedHtml, detailUrl, embedUrls[ei]);
      if (videoUrl) break;
    }
    if (!videoUrl) {
      videoUrl = extractM3u8FromHtml(embedHtml);
      if (!videoUrl) {
        const fallbackId = extractSurritVideoId(embedHtml) || surritIds[0];
        if (fallbackId) videoUrl = await resolveSurritStreamAny(fallbackId, embedHtml, detailUrl, embedUrls[ei]);
      }
    }
  }

  if (!videoUrl && embedUrl && embedUrls.indexOf(embedUrl) < 0 && !embedUrls.length) {
    const embedHtml = await fetchHtmlText(embedUrl, detailUrl, { maxAttempts: 1 });
    if (embedHtml) {
      const embedIds = extractSurritEmbedIds(embedHtml);
      for (let i = 0; i < embedIds.length; i++) {
        videoUrl = await resolveSurritStreamAny(embedIds[i], embedHtml, detailUrl, embedUrl);
        if (videoUrl) break;
      }
      if (!videoUrl) {
        videoUrl = extractM3u8FromHtml(embedHtml);
        if (!videoUrl) {
          const fallbackId = extractSurritVideoId(embedHtml) || surritIds[0];
          if (fallbackId) videoUrl = await resolveSurritStreamAny(fallbackId, embedHtml, detailUrl, embedUrl);
        }
      }
    }
  }

  if (!videoUrl) {
    const dataUrl = extractDataUrlFromHtml(text);
    const dataId = decodeSurritVideoIdFromDataUrl(dataUrl);
    if (dataId) {
      videoUrl = await resolveSurritStreamAny(dataId, text, detailUrl, embedUrl);
    }
  }

  if (!videoUrl) {
    const $ = Widget.html.load(text);
    let dataUrl = $("#video-files div").attr("data-url") || "";
    if (!dataUrl) {
      const $nodes = $("[data-url]");
      for (let i = 0; i < $nodes.length; i++) {
        const val = $nodes.eq(i).attr("data-url") || "";
        if (val.length > 20) {
          dataUrl = val;
          break;
        }
      }
    }
    if (dataUrl) {
      try {
        const videoId = decodeSurritVideoIdFromDataUrl(dataUrl);
        if (videoId) videoUrl = await resolveSurritStreamAny(videoId, text, detailUrl, embedUrl);
      } catch (e) {}
    }
  }

  if (!videoUrl) {
    const scriptRe = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    let sm;
    while ((sm = scriptRe.exec(text)) && !videoUrl) {
      const content = sm[1] || "";
      if (content.includes(".mp4")) {
        const match = content.match(/https?:\/\/[\w./-]+\.mp4[\w./?=-]*/);
        if (match) videoUrl = match[0];
      }
      if (!videoUrl && content.includes(".m3u8")) {
        const match = content.match(/https?:\/\/[\w./-]+\.m3u8[\w./?=-]*/);
        if (match) videoUrl = match[0];
      }
    }
  }

  if (!videoUrl) {
    const $ = Widget.html.load(text);
    videoUrl =
      $('video source[type="video/mp4"]').attr("src") ||
      $("video source").attr("src") ||
      $("video").attr("src") ||
      "";
  }

  if (videoUrl && videoUrl.startsWith("//")) videoUrl = "https:" + videoUrl;
  if (videoUrl && !videoUrl.startsWith("http")) videoUrl = "";
  return videoUrl;
}

async function loadDetail(link) {
  try {
    const detailUrl = normalizeDetailLink(link);
    if (!detailUrl) return null;

    const cached = readVideoCache(detailUrl);
    const html = await fetchDetailHtml(detailUrl);
    if (!html || isMigrationPage(html)) return null;

    let $;
    try {
      $ = Widget.html.load(html);
    } catch (e) {
      $ = null;
    }
    const title = extractDetailTitle(html, $);
    let description = extractDetailDescription(html, $) || undefined;

    if (isChallengePage(html)) {
      return {
        id: detailUrl,
        type: "url",
        title: title || detailUrl,
        link: detailUrl,
        description: "【提示】123AV 返回了人机验证页，Forward 请求被拦截。请清除模块缓存后重试，或稍后再试。",
        mediaType: "movie",
      };
    }

    if (isDirectoryListingUrl(detailUrl)) {
      const videos = await parseVideoListWithCovers(html, {});
      const firstCover = videos[0] && videos[0].backdropPath;
      const moduleKey = detectBrowseModuleKey(detailUrl);
      const meta = buildBrowseDetailMeta(detailUrl, title || detailUrl, moduleKey);
      return {
        id: detailUrl,
        type: "url",
        title,
        backdropPath: firstCover || undefined,
        posterPath: firstCover || undefined,
        link: detailUrl,
        childItems: videos.length > 0 ? videos : undefined,
        genreItems: meta.genreItems,
        peoples: meta.peoples,
        mediaType: "movie",
      };
    }

    if (isDirectoryIndexUrl(detailUrl)) {
      return {
        id: detailUrl,
        type: "url",
        title: title || detailUrl,
        link: detailUrl,
        description: "\u8bf7\u5728\u6a21\u5757\u4e2d\u9009\u62e9\u5206\u7c7b\u540e\u67e5\u770b\u5f71\u7247",
        mediaType: "movie",
      };
    }

    const displayCode = extractMovieCodeFromHref(detailUrl);
    const dmmProbe = displayCode ? await fetchDmmProbeCover(displayCode, {}) : null;
    const sitePosterFallback = buildCoverFallbackUrl(detailUrl, "t");
    const dmmCovers = buildDetailCovers(detailUrl, dmmProbe, sitePosterFallback);
    const landscapeBackdrop =
      dmmCovers.backdropPath ||
      buildCoverFallbackUrl(detailUrl, "n") ||
      buildSlugLandscapeBackdrop(detailUrl);
    const detailPoster =
      dmmCovers.posterPath ||
      dmmCovers.detailPoster ||
      sitePosterFallback;
    const dmmBackdropPaths = displayCode ? buildDetailBackdropPaths(displayCode, dmmProbe) : [];

    const embedUrl = extractSurritEmbedUrl(html);
    let videoUrl = "";
    let playHeaders = null;

    if (cached && cached.videoUrl) {
      videoUrl = cached.videoUrl;
      playHeaders = cached.customHeaders || buildPlayHeaders(videoUrl, embedUrl || detailUrl);
    } else if (!isChallengePage(html) && (hasPlaybackMarkers(html) || extractSurritEmbedIds(html).length > 0 || extractDataUrlFromHtml(html))) {
      videoUrl = await resolveVideoUrl(html, detailUrl);
      if (videoUrl) {
        playHeaders = buildPlayHeaders(videoUrl, embedUrl || detailUrl);
        videoUrl = await finalizeVideoUrl(videoUrl, playHeaders, true);
        if (videoUrl) writeVideoCache(detailUrl, videoUrl, playHeaders);
      }
    }

    const genreItems = [];
    if ($ && $.fn) {
      const $genreLinks = $("a[href*='/genres/'], a[href*='/tags/'], a[href*='/tag/'], a[href*='/makers/'], a[href*='/series/']");
      for (let gi = 0; gi < $genreLinks.length; gi++) {
        const $a = $genreLinks.eq(gi);
        const href = resolveUrl($a.attr("href") || "");
        const text = $a.text().trim();
        if (text && href && /\/(genres|tags|tag|makers|series)\//.test(href)) {
          genreItems.push({ id: normalizeBrowseId(href) || href, title: text });
        }
      }
    }

    const peoples = [];
    if ($ && $.fn) {
      const $peopleLinks = $("a[href*='/actresses/']");
      for (let pi = 0; pi < $peopleLinks.length; pi++) {
        const $a = $peopleLinks.eq(pi);
        const href = resolveUrl($a.attr("href") || "");
        const text = $a.text().trim();
        if (text && href && /\/actresses\//.test(href)) {
          peoples.push({ id: normalizeBrowseId(href) || href, title: text, role: "actress" });
        }
      }
    }

    const relatedItems = [];
    const seenRelated = new Set([detailUrl]);
    if ($ && $.fn) {
      const $relatedCards = $(".grid .group, .vid-items > div.item, div.thumbnail, .related-videos article");
      for (let ri = 0; ri < $relatedCards.length && relatedItems.length < 8; ri++) {
        const $el = $relatedCards.eq(ri);
        const $rLink = $el.find(".title, a[href*='/v/']").first();
        const rHref = $rLink.attr("href") || "";
        const rDetailLink = resolveUrl(rHref);
        if (!rDetailLink || seenRelated.has(rDetailLink)) continue;
        seenRelated.add(rDetailLink);
        const rTitle = $rLink.text().trim() || $el.find("img").attr("alt") || "\u76f8\u5173\u5f71\u7247";
        const rCover = pickItemCover($el.html(), rHref, $el.find("img").first());
        const relatedItem = makeListVideoItem(rHref, rTitle, rCover, extractListDuration($el), $el.html());
        if (relatedItem) relatedItems.push(relatedItem);
      }
    }

    const backdropPaths =
      dmmBackdropPaths.length > 0
        ? dmmBackdropPaths
        : dmmCovers.backdropPath
          ? undefined
          : collectBackdropPaths(html, detailUrl, detailPoster, $);

    const result = {
      id: detailUrl,
      type: "url",
      title,
      description,
      backdropPath: landscapeBackdrop || undefined,
      posterPath: detailPoster || undefined,
      detailPoster: detailPoster || undefined,
      backdropPaths,
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      peoples: peoples.length > 0 ? peoples : undefined,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      link: detailUrl,
      mediaType: "movie",
    };
    if (videoUrl) {
      result.videoUrl = videoUrl;
      result.playerType = "system";
      result.customHeaders = playHeaders || buildPlayHeaders(videoUrl, embedUrl || detailUrl);
    }
    return result;
  } catch (e) {
    return {
      id: normalizeDetailLink(link) || String(link || ""),
      type: "url",
      title: String(link || ""),
      link: normalizeDetailLink(link) || String(link || ""),
      description: "【提示】详情解析异常：" + (e && e.message ? e.message : "unknown"),
      mediaType: "movie",
    };
  }
}

function extractResourceLink(params) {
  if (!params) return "";
  if (typeof params === "string") return normalizeDetailLink(params);
  const keys = ["link", "url", "id", "href", "tmdbId", "videoId", "detailUrl"];
  for (let i = 0; i < keys.length; i++) {
    const raw = params[keys[i]];
    if (!raw) continue;
    const normalized = normalizeDetailLink(String(raw));
    if (normalized && isVideoDetailUrl(normalized)) return normalized;
  }
  return normalizeDetailLink(params.link || params.url || params.id || params.href || "");
}

async function loadResource(params) {
  const detailUrl = extractResourceLink(params || {});
  if (!detailUrl || !isVideoDetailUrl(detailUrl)) return [];

  const cached = readVideoCache(detailUrl);
  if (cached && cached.videoUrl) {
    const headers = cached.customHeaders || buildPlayHeaders(cached.videoUrl, detailUrl);
    return [{
      name: "播放",
      description: "123AV",
      url: cached.videoUrl,
      headers: headers,
      customHeaders: headers,
      playerType: "system",
    }];
  }

  try {
    const html = await fetchDetailHtml(detailUrl);
    if (!html || isMigrationPage(html) || isChallengePage(html)) return [];
    const embedUrl = extractSurritEmbedUrl(html);
    let videoUrl = await resolveVideoUrlFast(html, detailUrl);
    if (!videoUrl) videoUrl = await resolveVideoUrl(html, detailUrl);
    if (!videoUrl) return [];
    const playHeaders = buildPlayHeaders(videoUrl, embedUrl || detailUrl);
    videoUrl = await finalizeVideoUrl(videoUrl, playHeaders, true);
    if (!videoUrl) return [];
    writeVideoCache(detailUrl, videoUrl, playHeaders);
    return [{
      name: "播放",
      description: "123AV",
      url: videoUrl,
      headers: playHeaders,
      customHeaders: playHeaders,
      playerType: "system",
    }];
  } catch (e) {
    return [];
  }
}

async function search(params) {
  if (params && normalizeBrowseId(params.genreId || params.peopleId || params.url)) {
    return loadGenreList(params);
  }
  const keyword = (params && params.keyword) || "";
  const page = Number((params && params.page) || 1);
  if (!keyword) return [];
  let url = `${BASE_URL}${LANG_PREFIX}/search/?keyword=${encodeURIComponent(keyword)}`;
  if (page > 1) url += `&page=${page}`;
  const html = await fetchHtmlText(url, BASE_URL + LANG_PREFIX + "/search/");
  if (!html || isMigrationPage(html)) return [];
  return parseVideoListWithCovers(html, params);
}

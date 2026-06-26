WidgetMetadata = {
  id: "forward.javxx",
  title: "JavXX",
  version: "1.6.0",
  requiredVersion: "0.0.1",
  description: "JavXX \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u70ed\u95e8\u3001\u65b0\u53d1\u5e03\u3001\u89c2\u770b\u699c\u3001\u6709/\u65e0\u7801\u3001FC2/SIRO\u3001\u7c7b\u522b/\u5973\u6f14\u5458/\u5236\u4f5c\u5546/\u7cfb\u5217\u5206\u7ea7\u4e0e\u641c\u7d22",
  author: "Forward",
  site: "https://123av.com",
  detailCacheDuration: 300,
  modules: [
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
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://123av.com/"
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
    const cover = pickImageUrl($scope.find("img").first()) || pickImageUrl($a.find("img").first());
    items.push({
      id: detailLink,
      type: "url",
      title,
      backdropPath: cover || undefined,
      posterPath: cover || undefined,
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
  return /\.(webp|jpg|jpeg|png|gif)(\?|$)/i.test(url) || url.includes("icdn.") || url.includes("fourhoi.com");
}

function upgradeCoverUrl(url) {
  if (!url) return "";
  return normalizeImageUrl(url)
    .replace(/\/s360\//i, "/s1080/")
    .replace(/\/s480\//i, "/s1080/")
    .replace(/\/s720\//i, "/s1080/");
}

function pickImageUrl($img) {
  if (!$img || !$img.length) return "";
  const attrs = ["data-src", "data-original", "data-lazy-src", "srcset", "src"];
  for (let i = 0; i < attrs.length; i++) {
    let val = $img.attr(attrs[i]) || "";
    if (val.includes(",")) val = val.split(",")[0].trim().split(/\s+/)[0];
    val = normalizeImageUrl(val);
    if (isValidImageUrl(val)) return upgradeCoverUrl(val);
  }
  return "";
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
    const icdnRe = /https?:\/\/icdn[^"'\s<>]+cover(?:-n|-t)?\.(?:webp|jpg|jpeg)(?:\?[^"'\s<>]*)?/gi;
    let m;
    while ((m = icdnRe.exec(text))) {
      if (belongsToVideo(m[0], slug) && !isLogoImage(m[0])) return upgradeCoverUrl(m[0]);
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

function makeListVideoItem(href, title, coverUrl, durationText) {
  const finalTitle = normalizeListText(title) || slugToDisplayTitle(href);
  if (!finalTitle || looksLikeDuration(finalTitle)) return null;
  const item = {
    id: href,
    type: "url",
    title: finalTitle,
    backdropPath: coverUrl || undefined,
    link: resolveUrl(href),
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
    const coverM = window.match(/https?:\/\/icdn[^"'\s<>]+cover(?:-n|-t)?\.(?:webp|jpg|jpeg)/i);
    const durationM = window.match(/\b(\d{1,2}:\d{2}:\d{2})\b/);
    const item = makeListVideoItem(
      href,
      title,
      coverM ? upgradeCoverUrl(coverM[0]) : undefined,
      durationM ? durationM[1] : undefined
    );
    if (item) items.push(item);
  }
  return items;
}

function readVideoCache(link) {
  try {
    const raw = Widget.storage.get("vurl:v3:" + String(link));
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (data && data.videoUrl && data.ts && Date.now() - data.ts < VIDEO_CACHE_TTL * 1000) return data;
  } catch (e) {}
  return null;
}

function writeVideoCache(link, videoUrl, customHeaders) {
  if (!videoUrl) return;
  try {
    Widget.storage.set("vurl:v3:" + String(link), JSON.stringify({ videoUrl, customHeaders, ts: Date.now() }));
  } catch (e) {}
}

function buildPlayHeaders(videoUrl, pageReferer) {
  const ref = pageReferer || "https://surrit.store/";
  const needsSurritRef =
    videoUrl &&
    (/surrit\.(?:com|store)/i.test(videoUrl) ||
      /wowstream/i.test(videoUrl) ||
      /\.m3u8(\?|$)/i.test(videoUrl));
  const base = needsSurritRef
    ? {
        "User-Agent": HEADERS["User-Agent"],
        Origin: "https://surrit.store",
        Referer: /surrit\.(?:com|store)/i.test(ref) ? ref : "https://surrit.store/",
      }
    : { "User-Agent": HEADERS["User-Agent"], Referer: "https://123av.com/", Origin: "https://123av.com" };
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

async function finalizeVideoUrl(url, headers) {
  if (!url) return "";
  if (/\.mp4(\?|$)/i.test(url)) return url;
  if (/\.m3u8(\?|$)/i.test(url)) return await optimizeM3u8Url(url, headers, 0);
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
  const result = [];
  for (let i = 0; i < input.length; i++) {
    result.push(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  const bytes = new Uint8Array(result);
  const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let b64 = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const b0 = bytes[i];
    const b1 = i + 1 < bytes.length ? bytes[i + 1] : 0;
    const b2 = i + 2 < bytes.length ? bytes[i + 2] : 0;
    b64 += map[(b0 >> 2) & 0x3F];
    b64 += map[((b0 << 4) | (b1 >> 4)) & 0x3F];
    b64 += i + 1 < bytes.length ? map[((b1 << 2) | (b2 >> 6)) & 0x3F] : "=";
    b64 += i + 2 < bytes.length ? map[b2 & 0x3F] : "=";
  }
  return b64;
}

function extractM3u8FromHtml(html) {
  const text = String(html || "");

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
  return String(html || "")
    .replace(/\\u002f/gi, "/")
    .replace(/\\u0026/gi, "&")
    .replace(/\\\//g, "/")
    .replace(/&amp;/g, "&");
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

  const embedPatterns = [
    /surrit\.(?:com|store)\/e\/([A-Za-z0-9_-]+)/gi,
    /https?:\/\/surrit\.(?:com|store)\/e\/([A-Za-z0-9_-]+)/gi,
    /player__frame[^>]+src=["']https?:\/\/surrit\.(?:com|store)\/e\/([A-Za-z0-9_-]+)/gi,
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
  const text = normalizePlayerHtml(html);
  const iframe = text.match(/player__frame[^>]+src=["'](https?:\/\/surrit\.(?:com|store)\/e\/[^"']+)["']/i);
  if (iframe) return iframe[1];
  const episode = text.match(/https?:\\\/\\\/surrit\.(?:com|store)\\\/e\\\/([A-Za-z0-9_-]+)(?:\?[^"\\]*)?/i);
  if (episode) {
    const id = episode[1];
    const posterM = text.match(new RegExp("surrit\\.(?:com|store)[^\"']*poster=([^&\"'\\\\]+)", "i"));
    return posterM
      ? `https://surrit.store/e/${id}?poster=${posterM[1]}`
      : `https://surrit.store/e/${id}`;
  }
  const m = text.match(/https?:\/\/surrit\.(?:com|store)\/e\/[A-Za-z0-9_-]+(?:\?[^"'\\s<>]*)?/i);
  return m ? m[0] : "";
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
            return decodeURIComponent(kv[1]);
          } catch (e) {
            return kv[1];
          }
        }
      }
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

async function resolveSurritStreamNew(videoId, surritBase, pageReferer, poster) {
  let apiUrl = `${surritBase}/stream?id=${encodeURIComponent(videoId)}`;
  if (poster) apiUrl += `&poster=${encodeURIComponent(poster)}`;
  const embedRef =
    `${surritBase}/e/${videoId}` + (poster ? `?poster=${encodeURIComponent(poster)}` : "");
  const ref = pageReferer || BASE_URL + LANG_PREFIX + "/";
  const headerSets = [
    {
      "User-Agent": HEADERS["User-Agent"],
      Accept: "application/json, text/plain, */*",
      Referer: embedRef,
      Origin: surritBase,
    },
    {
      "User-Agent": HEADERS["User-Agent"],
      Accept: "application/json, text/plain, */*",
      Referer: ref,
      Origin: BASE_URL,
    },
  ];
  for (let h = 0; h < headerSets.length; h++) {
    try {
      const streamRes = await Widget.http.get(apiUrl, { headers: headerSets[h] });
      let streamJson = streamRes.data;
      if (typeof streamJson === "string") streamJson = JSON.parse(streamJson);
      if (streamJson && streamJson.media) {
        const url = streamJson.media.stream || streamJson.media.mp4 || "";
        if (url) return url;
      }
    } catch (e) {}
  }
  return "";
}

async function resolveSurritStreamLegacy(videoId, surritBase, srcName, pageReferer) {
  const token = encodeURIComponent(xorEncrypt(videoId, AES_KEY));
  const embedRef = `${surritBase}/e/${videoId}`;
  const ref = pageReferer || BASE_URL + LANG_PREFIX + "/";
  const headerSets = [
    {
      "User-Agent": HEADERS["User-Agent"],
      Accept: "application/json, text/plain, */*",
      Referer: embedRef,
      Origin: surritBase,
      "X-Requested-With": "XMLHttpRequest",
    },
    {
      "User-Agent": HEADERS["User-Agent"],
      Accept: "application/json, text/plain, */*",
      Referer: ref,
      Origin: BASE_URL,
      "X-Requested-With": "XMLHttpRequest",
    },
  ];
  for (let h = 0; h < headerSets.length; h++) {
    try {
      const streamRes = await Widget.http.get(`${surritBase}/stream?src=${srcName}&token=${token}`, {
        headers: headerSets[h],
      });
      let streamJson = streamRes.data;
      if (typeof streamJson === "string") streamJson = JSON.parse(streamJson);
      const media = streamJson && streamJson.result && streamJson.result.media;
      if (!media) continue;
      const parsed = JSON.parse(xorDecode(media, AES_KEY));
      const url = parsed.stream || parsed.mp4 || "";
      if (url) return url;
    } catch (e) {}
  }
  return "";
}

async function resolveSurritStreamAny(videoId, html, pageReferer, embedUrl) {
  const poster = extractPosterParam(embedUrl, html);
  const bases = detectSurritBases(html);
  for (let b = 0; b < bases.length; b++) {
    try {
      const url = await resolveSurritStreamNew(videoId, bases[b], pageReferer, poster);
      if (url) return url;
    } catch (e) {}
    for (let i = 0; i < STREAM_SOURCES.length; i++) {
      try {
        const url = await resolveSurritStreamLegacy(videoId, bases[b], STREAM_SOURCES[i], pageReferer);
        if (url) return url;
      } catch (e) {}
    }
  }
  return "";
}

function pickItemCover(scopeHtml, href, $img) {
  const slug = extractVideoSlug(resolveUrl(href));
  const fromImg = pickImageUrl($img);
  if (fromImg && !isLogoImage(fromImg) && (!slug || belongsToVideo(fromImg, slug))) return fromImg;
  const fromPoster = extractPosterFromHtml(scopeHtml, resolveUrl(href));
  if (fromPoster) return fromPoster;
  return fromImg && !isLogoImage(fromImg) ? fromImg : "";
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
    const coverUrl = upgradeCoverUrl(cover || pickItemCover(scopeHtml || "", href, $img)) || undefined;
    const item = makeListVideoItem(href, title, coverUrl, duration);
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
    pushItem(href, title, pickItemCover($scope.html(), href, $img), duration, $scope.html(), $img);
  }

  const cardSelectors = [".grid .group", ".vid-items > div.item", "div.thumbnail", "article"];
  for (let i = 0; i < cardSelectors.length; i++) {
    const $cards = $(cardSelectors[i]);
    if ($cards.length === 0) continue;
    $cards.each((_, el) => parseCard(el));
    if (items.length > 0) break;
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

async function fetchHtmlText(url, referer) {
  const ref = referer || BASE_URL + LANG_PREFIX + "/";
  const attempts = [
    mergeHeaders({ Referer: ref }),
    {
      "User-Agent": HEADERS["User-Agent"],
      Accept: "text/html",
      Referer: ref,
    },
    {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
      Referer: ref,
    },
  ];
  let html = "";
  for (let i = 0; i < attempts.length; i++) {
    try {
      const res = await Widget.http.get(url, { headers: attempts[i] });
      html = typeof res.data === "string" ? res.data : String(res.data || "");
      if (html && html.length > 200 && !isMigrationPage(html) && !isErrorPage(html)) return html;
    } catch (e) {}
  }
  return html && !isMigrationPage(html) ? html : "";
}

async function fetchBrowseVideoList(browseRef, page) {
  const baseUrl = normalizeBrowseId(browseRef);
  const fetchUrl = buildBrowsePageUrl(browseRef, page);
  if (!baseUrl || !fetchUrl) return [];
  const html = await fetchHtmlText(fetchUrl, baseUrl);
  if (!html) return [];
  let items = parseVideoList(html);
  if (!items.length) items = parseVideoListRegex(html);
  return items;
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
  let items = parseVideoList(html);
  if (!items.length) items = parseVideoListRegex(html);
  return items;
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
  const text = String(html || "");
  let videoUrl = extractM3u8FromHtml(text);
  if (videoUrl) {
    if (videoUrl.startsWith("//")) videoUrl = "https:" + videoUrl;
    return videoUrl;
  }

  const embedUrl = extractSurritEmbedUrl(text);
  const surritIds = extractSurritEmbedIds(text);
  for (let i = 0; i < surritIds.length; i++) {
    videoUrl = await resolveSurritStreamAny(surritIds[i], text, detailUrl, embedUrl);
    if (videoUrl) break;
  }

  if (!videoUrl && embedUrl) {
    const embedHtml = await fetchHtmlText(embedUrl, detailUrl);
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
        const decodedUrl = xorDecode(dataUrl, XOR_KEY);
        const videoId = decodedUrl.replace(/https?:\/\/[^/]+/, "").split("/").filter(Boolean).pop() || "";
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
    let detailUrl = String(link).startsWith("http") ? String(link) : resolveUrl(String(link));
    if (detailUrl.includes("javxx.com")) detailUrl = detailUrl.replace("https://javxx.com", BASE_URL).replace("http://javxx.com", BASE_URL);

    const cached = readVideoCache(detailUrl);
    const html = await fetchHtmlText(detailUrl, BASE_URL + LANG_PREFIX + "/");
    if (!html || isMigrationPage(html)) return null;

    const $ = Widget.html.load(html);
    const title = $("h1").first().text().trim()
      || $('meta[property="og:title"]').attr("content")
      || $("title").text().trim()
      || "";

    if (isDirectoryListingUrl(detailUrl)) {
      const videos = parseVideoList(html);
      const firstCover = videos[0] && (videos[0].backdropPath || videos[0].posterPath);
      const moduleKey = detectBrowseModuleKey(detailUrl);
      const meta = buildBrowseDetailMeta(detailUrl, title || detailUrl, moduleKey);
      return {
        id: link,
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
        id: link,
        type: "url",
        title: title || detailUrl,
        link: detailUrl,
        description: "\u8bf7\u5728\u6a21\u5757\u4e2d\u9009\u62e9\u5206\u7c7b\u540e\u67e5\u770b\u5f71\u7247",
        mediaType: "movie",
      };
    }

    let cover = extractPosterFromHtml(html, detailUrl, $)
      || pickImageUrl($(".video-cover img, .movie-cover img, .image img, img[data-src*='icdn'], img[src*='icdn']").first())
      || pickImageUrl($("video").first());

    const embedUrl = extractSurritEmbedUrl(html);
    let videoUrl = cached ? cached.videoUrl : "";
    let playHeaders = cached ? cached.customHeaders : null;

    if (!videoUrl) {
      videoUrl = await resolveVideoUrl(html, detailUrl);
      if (videoUrl) {
        playHeaders = buildPlayHeaders(videoUrl, embedUrl || detailUrl);
        videoUrl = await finalizeVideoUrl(videoUrl, playHeaders);
        writeVideoCache(detailUrl, videoUrl, playHeaders);
      }
    }
    if (!playHeaders && videoUrl) playHeaders = buildPlayHeaders(videoUrl, embedUrl || detailUrl);

    const genreItems = [];
    const $genreLinks = $("a[href*='/genres/'], a[href*='/tags/'], a[href*='/tag/'], a[href*='/makers/'], a[href*='/series/']");
    for (let gi = 0; gi < $genreLinks.length; gi++) {
      const $a = $genreLinks.eq(gi);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href && /\/(genres|tags|tag|makers|series)\//.test(href)) {
        genreItems.push({ id: normalizeBrowseId(href) || href, title: text });
      }
    }

    const peoples = [];
    const $peopleLinks = $("a[href*='/actresses/']");
    for (let pi = 0; pi < $peopleLinks.length; pi++) {
      const $a = $peopleLinks.eq(pi);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href && /\/actresses\//.test(href)) {
        peoples.push({ id: normalizeBrowseId(href) || href, title: text, role: "actress" });
      }
    }

    const relatedItems = [];
    const seenRelated = new Set([detailUrl]);
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
      const relatedItem = makeListVideoItem(rHref, rTitle, rCover, extractListDuration($el));
      if (relatedItem) relatedItems.push(relatedItem);
    }

    const backdropPaths = collectBackdropPaths(html, detailUrl, cover, $);

    return {
      id: link,
      type: "url",
      title,
      backdropPath: cover || undefined,
      posterPath: cover || undefined,
      backdropPaths,
      videoUrl: videoUrl || undefined,
      playerType: videoUrl ? "system" : undefined,
      customHeaders: playHeaders || undefined,
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      peoples: peoples.length > 0 ? peoples : undefined,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      link: detailUrl,
      mediaType: "movie",
    };
  } catch (e) {
    return null;
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
  let items = parseVideoList(html);
  if (!items.length) items = parseVideoListRegex(html);
  return items;
}

/**
 * JAV Verse ForwardWidget / rex 模块
 * 站点: https://javverse.com/
 *
 * 列表/搜索/播放优先 JSON API；类别页无公开列表 API，按需抓取 /genre/{id}。
 * - GET  /api/works/random-pool（首页「抽一部 / 今晚看什么」同源）
 * - GET  /api/cards?w=
 * - GET  /api/works/{id}/magnets（可选）
 * - POST /api/video/sessions → 代理 m3u8（direct=1）
 * - GET  /genre/{id}（RSC text/x-component 优先，HTML/作品池回退）
 * - GET  /work/{id}（详情补充：女优/类别/剧照）
 */
WidgetMetadata = {
  id: "javverse.catalog",
  title: "JAV Verse",
  version: "1.4.1",
  requiredVersion: "0.0.1",
  description:
    "JAV Verse：作品池 / 抽一部 / 千级类别（RSC+HTML 实页，禁止作品池弱回退）/ 详情 id=标准番号 / 光鸭按目录转存。站点在线流含私有 HLS Token，外置播放器不可播故不返回播放源。",
  author: "老头",
  site: "https://javverse.com/",
  icon: "https://javverse.com/apple-icon.png",
  detailCacheDuration: 60,
  globalParams: [
    {
      name: "site_cookie",
      title: "站点 Cookie（可选）",
      type: "input",
      value: "",
      placeholder: "jv-gate=1; __suvt=...; __nuvt=...",
      description: "API/类别页 403 时再填；一般可留空",
    },
    {
      name: "page_size",
      title: "每页数量",
      type: "count",
      value: "24",
    },
    {
      name: "guangya_token",
      title: "光鸭 refresh_token",
      type: "input",
      value: "",
      description: "www.guangyapan.com 登录后复制最新 refresh_token（gy. 开头）；仅用于磁力一键转存",
    },
    {
      name: "guangya_parent_id",
      title: "光鸭父目录 ID",
      type: "input",
      value: "",
      description: "可选，离线任务保存到指定目录；留空用根目录",
    },
  ],
  search: {
    title: "搜索",
    functionName: "searchJavverse",
    params: [
      {
        name: "keyword",
        title: "关键词",
        type: "input",
        value: "",
        description: "按番号/标题在作品池中过滤",
      },
      { name: "page", title: "页码", type: "page", value: "1" },
    ],
  },
  modules: [
    {
      id: "loadDiscover",
      title: "作品池",
      functionName: "loadDiscover",
      cacheDuration: 300,
      params: [{ name: "page", title: "页码", type: "page", value: "1" }],
    },
    {
      id: "loadRankings",
      title: "热门池",
      functionName: "loadRankings",
      cacheDuration: 300,
      params: [{ name: "page", title: "页码", type: "page", value: "1" }],
    },
    {
      id: "loadRandom",
      title: "今晚看什么·抽一部",
      functionName: "loadRandom",
      cacheDuration: 0,
      params: [
        {
          name: "count",
          title: "抽取数量",
          type: "enumeration",
          value: "1",
          enumOptions: [
            { title: "抽 1 部", value: "1" },
            { title: "抽 6 部", value: "6" },
            { title: "抽 12 部", value: "12" },
            { title: "抽 24 部", value: "24" },
          ],
          description: "对齐官网「抽一部」：每次刷新从 random-pool 重新抽取",
        },
      ],
    },
    {
      id: "loadGenre",
      title: "类别",
      functionName: "loadGenreWorks",
      cacheDuration: 300,
      params: [
        {
          name: "genreId",
          title: "类别（≥1000 部）",
          type: "enumeration",
          belongTo: { section: "filter", index: 0 },
          enumOptions: [
          { value: "4025", title: "单体作品" },
          { value: "6533", title: "高清" },
          { value: "5001", title: "中出" },
          { value: "2001", title: "巨乳" },
          { value: "6548", title: "独家配信" },
          { value: "1039", title: "人妻・主妇" },
          { value: "1014", title: "熟女" },
          { value: "4024", title: "素人" },
          { value: "5002", title: "口交" },
          { value: "1027", title: "美少女" },
          { value: "6012", title: "4小时以上" },
          { value: "4106", title: "骑乘位" },
          { value: "1031", title: "痴女" },
          { value: "5022", title: "3P・4P" },
          { value: "6003", title: "精选・总集篇" },
          { value: "6004", title: "数码马赛克" },
          { value: "2006", title: "苗条" },
          { value: "102", title: "美乳" },
          { value: "79015", title: "4K" },
          { value: "5016", title: "潮吹" },
          { value: "5019", title: "乳交" },
          { value: "4010", title: "其他恋物" },
          { value: "4006", title: "搭讪" },
          { value: "6002", title: "POV自拍" },
          { value: "4030", title: "淫乱・激烈" },
          { value: "4111", title: "NTR" },
          { value: "4021", title: "偷拍・偷窥" },
          { value: "4007", title: "企划" },
          { value: "6793", title: "VR专用" },
          { value: "1018", title: "女子校生" },
          { value: "6995", title: "妄想族" },
          { value: "5008", title: "自慰" },
          { value: "5023", title: "颜射" },
          { value: "1033", title: "姐姐系" },
          { value: "4114", title: "剧情" },
          { value: "4023", title: "纪实" },
          { value: "4002", title: "近親相姦" },
          { value: "5004", title: "手交" },
          { value: "6925", title: "高画质VR" },
          { value: "1034", title: "辣妹" },
          { value: "1069", title: "出轨" },
          { value: "38", title: "舔阴" },
          { value: "1001", title: "OL" },
          { value: "28", title: "羞耻" },
          { value: "4013", title: "女同" },
          { value: "2024", title: "巨尻" },
          { value: "4019", title: "无毛" },
          { value: "6968", title: "高潮" },
          { value: "27", title: "辱め" },
          { value: "4031", title: "角色扮演" },
          { value: "5063", title: "POV" },
          { value: "4011", title: "臀控" },
          { value: "5066", title: "按摩棒" },
          { value: "1019", title: "女大学生" },
          { value: "5053", title: "手指插入" },
          { value: "5005", title: "肛交" },
          { value: "4059", title: "接吻" },
          { value: "1036", title: "风俗娘" },
          { value: "48", title: "制服" },
          { value: "4124", title: "按摩" },
          { value: "6006", title: "出道" },
          { value: "5025", title: "淫语" },
          { value: "1026", title: "职业" },
          { value: "4005", title: "乱交" },
          { value: "5068", title: "深喉" },
          { value: "3006", title: "连裤袜" },
          { value: "4118", title: "偶像・艺人" },
          { value: "25", title: "拘束" },
          { value: "6014", title: "写真偶像" },
          { value: "4020", title: "户外・露出" },
          { value: "5011", title: "放尿・失禁" },
          { value: "5057", title: "润滑・精油" },
          { value: "4009", title: "乳控" },
          { value: "5017", title: "玩具" },
          { value: "6608", title: "女优精选" },
          { value: "2005", title: "贫乳" },
          { value: "2008", title: "ミニ系" },
          { value: "4119", title: "美容按摩" },
          { value: "2007", title: "丰满" },
          { value: "1020", title: "少妻" },
          { value: "5006", title: "振动棒" },
          { value: "3011", title: "学生服" },
          { value: "3014", title: "内衣" },
          { value: "1032", title: "お母さん" },
          { value: "5009", title: "吞精" },
          { value: "5003", title: "大量颜射" },
          { value: "4001", title: "SM" },
          { value: "5021", title: "縛り・緊縛" },
          { value: "4057", title: "姉・妹" },
          { value: "3008", title: "泳装" },
          { value: "3002", title: "和服・浴衣" },
          { value: "1016", title: "女教师" },
          { value: "1013", title: "护士" },
          { value: "5020", title: "69" },
          { value: "307935", title: "8K VR" },
          { value: "4016", title: "内裤走光" },
          { value: "6958", title: "后入" },
          { value: "6996", title: "エマニエル" },
          { value: "4017", title: "特写" },
          { value: "4008", title: "腿控" },
          { value: "5074", title: "男性M" },
          { value: "5073", title: "巨根" },
          { value: "6017", title: "薄马赛克" },
          { value: "4014", title: "处男" },
          { value: "5062", title: "女同接吻" },
          { value: "4140", title: "温泉" },
          { value: "6967", title: "M女" },
          { value: "3009", title: "競泳・スクール水着" },
          { value: "4015", title: "ニューハーフ" },
          { value: "2004", title: "めがね" },
          { value: "4123", title: "情侣" },
          { value: "2012", title: "白人女优" },
          { value: "2002", title: "長身" },
          { value: "5067", title: "顔面騎乗" },
          { value: "6149", title: "超巨乳" },
          { value: "4022", title: "西洋・进口" },
          { value: "524", title: "義母" },
          { value: "6063", title: "独立制作" },
          { value: "5015", title: "ドラッグ" },
          { value: "3003", title: "セーラー服" },
          { value: "567", title: "鬼畜" },
          { value: "5075", title: "汗だく" },
          { value: "5048", title: "足コキ" },
          { value: "6005", title: "投稿" },
          { value: "3001", title: "体操着・ブルマ" },
          { value: "1008", title: "メイド" },
          { value: "5076", title: "アナルセックス" },
          { value: "3007", title: "ミニスカ" },
          { value: "4116", title: "着エロ" },
          { value: "2003", title: "小柄" },
          { value: "4122", title: "イタズラ" },
          { value: "4098", title: "セクシー" },
          { value: "3029", title: "即ハメ" },
          { value: "5071", title: "ハーレム" },
          { value: "81", title: "複数話" },
          { value: "5014", title: "浣腸" },
          { value: "3036", title: "女装・男の娘" },
          { value: "5018", title: "ローター" },
          { value: "5013", title: "脱糞" },
          { value: "1028", title: "黒人男優" },
          { value: "555", title: "恋愛" },
          { value: "4034", title: "特撮" },
          { value: "35", title: "女性向け" },
          { value: "4018", title: "スカトロ" },
          { value: "5059", title: "拷問" },
          { value: "1022", title: "家庭教師" },
          { value: "6609", title: "16時間以上作品" },
          { value: "6164", title: "ビッチ" },
          { value: "5010", title: "監禁" },
          { value: "7267", title: "セット商品" },
          { value: "309021", title: "アナルセックス（男の娘）" },
          { value: "6937", title: "ヘルス・ソープ" },
          { value: "1082", title: "女戦士" },
          { value: "5069", title: "くすぐり" },
          { value: "3035", title: "レオタード" },
          { value: "1025", title: "未亡人" },
          { value: "5060", title: "母乳" },
          { value: "514", title: "アクション・格闘" },
          { value: "4028", title: "妄想" },
          { value: "4026", title: "カーセックス" },
          { value: "6945", title: "女上司" },
          { value: "6941", title: "ディルド" },
          { value: "4096", title: "スポーツ" },
          { value: "5012", title: "飲尿" },
          { value: "4120", title: "逆ナン" },
          { value: "1015", title: "女医" },
          { value: "553", title: "学園もの" },
          { value: "6566", title: "FANZA配信限定" },
          { value: "1007", title: "スチュワーデス" }
          ],
        },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      id: "loadResource",
      title: "播放资源",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: [],
    },
  ],
};

console.log("[javverse] version: " + WidgetMetadata.version);

var SITE = "https://javverse.com";
var LINK_PREFIX = "jv:";
var MAGNET_LINK_PREFIX = "gy:";
var MAGNET_STORE_PREFIX = "jv.magnet.v1.";
var UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var POOL_CACHE_KEY = "jv_pool_cache_v1";
var POOL_CACHE_TTL_MS = 5 * 60 * 1000;
var GENRE_TITLE_MAP = {"25":"拘束","27":"辱め","28":"羞耻","35":"女性向け","38":"舔阴","48":"制服","81":"複数話","102":"美乳","514":"アクション・格闘","524":"義母","553":"学園もの","555":"恋愛","567":"鬼畜","1001":"OL","1007":"スチュワーデス","1008":"メイド","1013":"护士","1014":"熟女","1015":"女医","1016":"女教师","1018":"女子校生","1019":"女大学生","1020":"少妻","1022":"家庭教師","1025":"未亡人","1026":"职业","1027":"美少女","1028":"黒人男優","1031":"痴女","1032":"お母さん","1033":"姐姐系","1034":"辣妹","1036":"风俗娘","1039":"人妻・主妇","1069":"出轨","1082":"女戦士","2001":"巨乳","2002":"長身","2003":"小柄","2004":"めがね","2005":"贫乳","2006":"苗条","2007":"丰满","2008":"ミニ系","2012":"白人女优","2024":"巨尻","3001":"体操着・ブルマ","3002":"和服・浴衣","3003":"セーラー服","3006":"连裤袜","3007":"ミニスカ","3008":"泳装","3009":"競泳・スクール水着","3011":"学生服","3014":"内衣","3029":"即ハメ","3035":"レオタード","3036":"女装・男の娘","4001":"SM","4002":"近親相姦","4005":"乱交","4006":"搭讪","4007":"企划","4008":"腿控","4009":"乳控","4010":"其他恋物","4011":"臀控","4013":"女同","4014":"处男","4015":"ニューハーフ","4016":"内裤走光","4017":"特写","4018":"スカトロ","4019":"无毛","4020":"户外・露出","4021":"偷拍・偷窥","4022":"西洋・进口","4023":"纪实","4024":"素人","4025":"单体作品","4026":"カーセックス","4028":"妄想","4030":"淫乱・激烈","4031":"角色扮演","4034":"特撮","4057":"姉・妹","4059":"接吻","4096":"スポーツ","4098":"セクシー","4106":"骑乘位","4111":"NTR","4114":"剧情","4116":"着エロ","4118":"偶像・艺人","4119":"美容按摩","4120":"逆ナン","4122":"イタズラ","4123":"情侣","4124":"按摩","4140":"温泉","5001":"中出","5002":"口交","5003":"大量颜射","5004":"手交","5005":"肛交","5006":"振动棒","5008":"自慰","5009":"吞精","5010":"監禁","5011":"放尿・失禁","5012":"飲尿","5013":"脱糞","5014":"浣腸","5015":"ドラッグ","5016":"潮吹","5017":"玩具","5018":"ローター","5019":"乳交","5020":"69","5021":"縛り・緊縛","5022":"3P・4P","5023":"颜射","5025":"淫语","5048":"足コキ","5053":"手指插入","5057":"润滑・精油","5059":"拷問","5060":"母乳","5062":"女同接吻","5063":"POV","5066":"按摩棒","5067":"顔面騎乗","5068":"深喉","5069":"くすぐり","5071":"ハーレム","5073":"巨根","5074":"男性M","5075":"汗だく","5076":"アナルセックス","6002":"POV自拍","6003":"精选・总集篇","6004":"数码马赛克","6005":"投稿","6006":"出道","6012":"4小时以上","6014":"写真偶像","6017":"薄马赛克","6063":"独立制作","6149":"超巨乳","6164":"ビッチ","6533":"高清","6548":"独家配信","6566":"FANZA配信限定","6608":"女优精选","6609":"16時間以上作品","6793":"VR专用","6925":"高画质VR","6937":"ヘルス・ソープ","6941":"ディルド","6945":"女上司","6958":"后入","6967":"M女","6968":"高潮","6995":"妄想族","6996":"エマニエル","7267":"セット商品","79015":"4K","307935":"8K VR","309021":"アナルセックス（男の娘）"};
var lastRequestParams = null;
var memoryPool = { at: 0, works: [] };

function getText(v) {
  return String(v == null ? "" : v).trim();
}

function absUrl(u) {
  u = getText(u);
  if (!u) return "";
  if (/^https?:\/\//i.test(u)) return u;
  if (u.indexOf("//") === 0) return "https:" + u;
  if (u.charAt(0) === "/") return SITE + u;
  return SITE + "/" + u;
}

function cleanImage(u) {
  u = absUrl(u);
  if (!u) return "";
  return u.replace(/&amp;/g, "&").replace(/\?w=\d+&f=webp/i, "").replace(/\?w=\d+/i, "");
}

function pageNum(params) {
  var n = Number((params && params.page) || 1);
  return n > 0 ? Math.floor(n) : 1;
}

function pageSize(params) {
  var n = Number((params && params.page_size) || 24);
  if (!(n > 0)) n = 24;
  return Math.min(48, Math.max(1, Math.floor(n)));
}

function buildOwnedLink(workId, code) {
  var id = String(workId || "").replace(/[^\d]/g, "");
  if (!id) return "";
  var c = normalizeCode(code) || getText(code).toUpperCase();
  // 必须用 jv:work:数字:番号（对齐 javranking 的 jvr:video:）
  // 若写成 jv:数字:番号，聚合工具会把 jv:数字 误识别成番号 JV-数字
  return LINK_PREFIX + "work:" + id + (c ? ":" + encodeURIComponent(c) : "");
}

function buildCodeLink(code) {
  var c = normalizeCode(code) || getText(code).toUpperCase();
  return c ? LINK_PREFIX + "code:" + encodeURIComponent(c) : "";
}

function parseOwnedLink(raw) {
  var s = getText(raw);
  if (!s) return null;
  var mag =
    s.match(/^gy:([0-9a-fA-F]{32,40})$/i) ||
    s.match(/^jv:magnet:([0-9a-fA-F]{32,40})$/i);
  if (mag) {
    return {
      kind: "magnet",
      hash: mag[1].toLowerCase(),
      link: MAGNET_LINK_PREFIX + mag[1].toLowerCase(),
    };
  }

  // jv:work:123:CODE 或兼容旧版 jv:123:CODE
  var work =
    s.match(/^jv:work:(\d+)(?::(.+))?$/i) ||
    s.match(/^jv:(\d+)(?::(.+))?$/i);
  if (work) {
    var workId = work[1];
    var codeHint = "";
    if (work[2]) {
      try {
        codeHint = decodeURIComponent(work[2]);
      } catch (e) {
        codeHint = work[2];
      }
    }
    return {
      kind: "work",
      workId: workId,
      code: normalizeCode(codeHint) || getText(codeHint).toUpperCase(),
      link: buildOwnedLink(workId, codeHint),
    };
  }

  var codeOnly = s.match(/^jv:code:(.+)$/i);
  if (codeOnly) {
    var decoded = codeOnly[1];
    try {
      decoded = decodeURIComponent(codeOnly[1]);
    } catch (e2) {}
    var asOwnedCode = normalizeCode(decoded) || getText(decoded).toUpperCase();
    return { kind: "code", code: asOwnedCode, workId: "", link: buildCodeLink(asOwnedCode) };
  }

  var m = s.match(
    /^https?:\/\/(?:www\.)?javverse\.com(?:\/(?:zh-CN|zh-Hant|en|ja))?\/work\/(\d+)/i
  );
  if (m) return { kind: "work", workId: m[1], code: "", link: buildOwnedLink(m[1]) };
  // 兼容聚合/宿主只传番号
  var asCode = normalizeCode(s);
  if (asCode && /^[A-Z0-9]+-\d+[A-Z]?$/.test(asCode)) {
    return { kind: "code", code: asCode, workId: "", link: buildCodeLink(asCode) };
  }
  return null;
}

function codeFromCoverUrl(url) {
  var u = getText(url);
  if (!u) return "";
  // .../h_068mxgs01451/h_068mxgs01451pl.jpg 或 .../1piyo00241/1piyo00241pl.jpg
  var m =
    u.match(/\/(h_\d+[a-z0-9]+)(?:[a-z]*)?(?:pl|ps|jm)?\.(?:jpg|webp)/i) ||
    u.match(/\/([0-9]*[a-z]+[0-9]+[a-z0-9]*)(?:pl|ps|jm)?\.(?:jpg|webp)/i) ||
    u.match(/\/(?:digital\/video\/)?(h_\d+[a-z0-9]+|[0-9]*[a-z]+[0-9]+)(?:\/|$)/i);
  if (!m) return "";
  return normalizeCode(m[1]);
}

function isStandardHinban(code) {
  code = getText(code).toUpperCase();
  return /^([A-Z]{2,15}|T28|R18|3DSVR)-[1-9]\d{0,7}[A-Z]?$/.test(code);
}

function resolveItemCode(row) {
  row = row || {};
  var candidates = [
    row.code_display,
    row.code,
    row.number,
    row.cid,
    row.content_id,
    row.contentId,
  ];
  var best = "";
  for (var i = 0; i < candidates.length; i++) {
    var raw = getText(candidates[i]);
    if (!raw) continue;
    var n = normalizeCode(raw);
    if (!n || /^JV[:\-]?\d+/i.test(n)) continue;
    if (isStandardHinban(n)) return n;
    if (!best) best = n;
  }
  if (best && isStandardHinban(best)) return best;
  if (!best) best = codeFromCoverUrl(row.coverUrl || row.cover || row.cover_url || "");
  if (!best || !isStandardHinban(best)) {
    var title = getText(row.title || row.title_zh || row.originalTitle);
    var tm = title.match(/\b([A-Z0-9]{2,15})[-_ ](\d{1,5}[A-Z]?)\b/i);
    if (tm) best = normalizeCode(tm[1] + "-" + tm[2]) || best;
  }
  if (best && /^JV[:\-]?\d+/i.test(best)) return "";
  return best || "";
}

function extractMagnetHash(magnet) {
  var text = String(magnet || "");
  var m = text.match(/btih:([0-9a-fA-F]{40}|[0-9a-zA-Z]{32,40})/i);
  return m ? m[1].toLowerCase() : "";
}

function cacheMagnet(hash, data) {
  try {
    Widget.storage.set(
      MAGNET_STORE_PREFIX + hash,
      JSON.stringify(Object.assign({ savedAt: Date.now() }, data || {}))
    );
  } catch (e) {}
}

function readMagnetCache(hash) {
  try {
    var raw = Widget.storage.get(MAGNET_STORE_PREFIX + hash);
    if (!raw) return null;
    return typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (e) {
    return null;
  }
}

function rememberParams(params) {
  if (params && typeof params === "object") lastRequestParams = params;
  if (params && getText(params.site_cookie)) persistSiteCookie(params.site_cookie);
  // 列表请求时把全局光鸭参数落到 storage，供 loadDetail(仅 link) 转存使用
  try {
    var token =
      getText(params && params.guangya_token) ||
      getText(params && params.refresh_token) ||
      "";
    if (!token && params && params.global) {
      token = getText(params.global.guangya_token) || getText(params.global.refresh_token) || "";
    }
    if (!token && params && params.globalParams) {
      if (Array.isArray(params.globalParams)) {
        for (var i = 0; i < params.globalParams.length; i++) {
          var it = params.globalParams[i];
          if (!it) continue;
          var n = getText(it.name || it.key);
          if (n === "guangya_token" || n === "refresh_token") {
            token = getText(it.value != null ? it.value : it.val);
            if (token) break;
          }
        }
      } else {
        token =
          getText(params.globalParams.guangya_token) ||
          getText(params.globalParams.refresh_token) ||
          "";
      }
    }
    if (token && Widget.storage && typeof Widget.storage.set === "function") {
      Widget.storage.set("jv.guangya_token", token);
    }
    var parentId =
      getText(params && params.guangya_parent_id) ||
      getText(params && params.parentId) ||
      "";
    if (!parentId && params && params.global) {
      parentId =
        getText(params.global.guangya_parent_id) ||
        getText(params.global.parentId) ||
        "";
    }
    if (!parentId && params && params.globalParams) {
      if (Array.isArray(params.globalParams)) {
        for (var j = 0; j < params.globalParams.length; j++) {
          var it2 = params.globalParams[j];
          if (!it2) continue;
          var n2 = getText(it2.name || it2.key);
          if (n2 === "guangya_parent_id" || n2 === "parentId" || n2 === "parent_id") {
            parentId = getText(it2.value != null ? it2.value : it2.val);
            if (parentId) break;
          }
        }
      } else {
        parentId =
          getText(params.globalParams.guangya_parent_id) ||
          getText(params.globalParams.parentId) ||
          "";
      }
    }
    if (parentId && Widget.storage && typeof Widget.storage.set === "function") {
      Widget.storage.set("jv.guangya_parent_id", parentId);
    }
  } catch (e) {}
}

function getSiteCookie() {
  var fromParams = (lastRequestParams && getText(lastRequestParams.site_cookie)) || "";
  if (fromParams) return fromParams;
  try {
    return getText(Widget.storage && Widget.storage.get("jv_site_cookie"));
  } catch (e) {
    return "";
  }
}

function persistSiteCookie(cookie) {
  cookie = getText(cookie);
  if (!cookie || !Widget.storage || typeof Widget.storage.set !== "function") return;
  Widget.storage.set("jv_site_cookie", cookie);
}

function apiHeaders(extra) {
  var h = {
    "User-Agent": UA,
    Accept: "application/json,text/plain,*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    Referer: SITE + "/",
    Origin: SITE,
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
  };
  var cookie = getSiteCookie();
  if (cookie) h.Cookie = cookie;
  if (extra) {
    for (var k in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, k)) h[k] = extra[k];
    }
  }
  return h;
}

function htmlHeaders(referer) {
  return apiHeaders({
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    Referer: referer || SITE + "/",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
  });
}

function responseStatus(res) {
  if (!res || typeof res !== "object") return 0;
  return Number(res.status || res.statusCode || res.code || 0) || 0;
}

function responseBody(res) {
  if (res == null) return "";
  if (typeof res.data === "string") return res.data;
  if (res.data != null) return res.data;
  if (typeof res.body === "string") return res.body;
  if (typeof res === "string") return res;
  return "";
}

function responseJson(res) {
  var body = responseBody(res);
  if (body && typeof body === "object") return body;
  if (typeof body !== "string") return null;
  var t = getText(body);
  if (!t || (t.charAt(0) !== "{" && t.charAt(0) !== "[")) return null;
  try {
    return JSON.parse(t);
  } catch (e) {
    return null;
  }
}

function errorStatus(err) {
  if (!err) return 0;
  if (Number(err.status || err.statusCode)) return Number(err.status || err.statusCode);
  var msg = String(err.message || err || "");
  var m = msg.match(/\b(403|429|401|503|502|500)\b/);
  return m ? Number(m[1]) : 0;
}

function isForbiddenError(err) {
  var st = errorStatus(err);
  if (st === 403 || st === 429) return true;
  var msg = String((err && err.message) || err || "").toLowerCase();
  return msg.indexOf("403") !== -1 || msg.indexOf("forbidden") !== -1;
}

function isCloudflareChallenge(html) {
  var s = String(html || "");
  return (
    s.indexOf("Just a moment...") !== -1 ||
    s.indexOf("/cdn-cgi/challenge-platform/") !== -1 ||
    s.indexOf("Attention Required! | Cloudflare") !== -1 ||
    s.indexOf("浏览验证") !== -1
  );
}

function forbidHint(url) {
  return "请求被拦截(HTTP 403)。可在全局参数填写站点 Cookie 后重试。url=" + url;
}

async function safeGet(url, headers) {
  try {
    var res = await Widget.http.get(url, {
      headers: headers || apiHeaders(),
      timeout: 25000,
      allow_redirects: true,
    });
    return {
      ok: true,
      res: res,
      status: responseStatus(res),
      body: responseBody(res),
      error: null,
    };
  } catch (err) {
    return {
      ok: false,
      res: null,
      status: errorStatus(err) || 0,
      body: "",
      error: err,
    };
  }
}

async function safePost(url, body, headers) {
  try {
    var res = await Widget.http.post(url, body == null ? {} : body, {
      headers: headers || apiHeaders(),
      timeout: 25000,
      allow_redirects: true,
    });
    return {
      ok: true,
      res: res,
      status: responseStatus(res),
      body: responseBody(res),
      error: null,
    };
  } catch (err) {
    return {
      ok: false,
      res: null,
      status: errorStatus(err) || 0,
      body: "",
      error: err,
    };
  }
}

async function softBrowseGate() {
  try {
    await safePost(
      SITE + "/_browse/gate",
      {},
      apiHeaders({
        "x-jv-gate": "1",
        "Content-Type": "text/plain;charset=UTF-8",
        Referer: SITE + "/",
      })
    );
  } catch (e) {}
}

async function fetchJson(pathOrUrl, opt) {
  opt = opt || {};
  var url = /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : SITE + pathOrUrl;
  var headers = apiHeaders(
    Object.assign(
      {
        Referer: opt.referer || SITE + "/",
      },
      opt.headers || {}
    )
  );

  await softBrowseGate();

  var got =
    opt.method === "POST"
      ? await safePost(url, opt.body == null ? {} : opt.body, headers)
      : await safeGet(url, headers);

  if (got.status === 403 || isCloudflareChallenge(got.body) || (got.error && isForbiddenError(got.error))) {
    await softBrowseGate();
    got =
      opt.method === "POST"
        ? await safePost(url, opt.body == null ? {} : opt.body, headers)
        : await safeGet(url, headers);
  }

  if (got.status === 403 || isCloudflareChallenge(got.body) || (got.error && isForbiddenError(got.error))) {
    throw new Error(forbidHint(url));
  }

  var json = responseJson(got.res || { data: got.body });
  if (!json && got.body && typeof got.body === "object") json = got.body;
  if (!json) throw got.error || new Error("空 JSON: " + url);
  return json;
}

async function fetchHtml(pathOrUrl, referer) {
  var url = /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : SITE + pathOrUrl;
  await softBrowseGate();
  var got = await safeGet(url, htmlHeaders(referer || SITE + "/"));
  if (got.status === 403 || isCloudflareChallenge(got.body) || (got.error && isForbiddenError(got.error))) {
    await softBrowseGate();
    got = await safeGet(url, htmlHeaders(referer || SITE + "/"));
  }
  var html = typeof got.body === "string" ? got.body : String(got.body || "");
  if (got.status === 403 || isCloudflareChallenge(html) || (got.error && isForbiddenError(got.error))) {
    throw new Error(forbidHint(url));
  }
  if (!html || html.length < 200) throw got.error || new Error("空 HTML: " + url);
  return html;
}

function rscHeaders(referer) {
  return apiHeaders({
    Accept: "text/x-component",
    RSC: "1",
    Referer: referer || SITE + "/",
    "Next-Url": "/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
  });
}

function decodeRscText(text) {
  return String(text || "")
    .replace(/\\u002f/gi, "/")
    .replace(/\\\//g, "/");
}

function parseGenreRscPayload(text) {
  text = decodeRscText(text);
  var items = [];
  var seen = {};
  var meta = {};

  // 先建立 workId → cover/code 索引（字段顺序/嵌套不固定）
  var m;
  var reCover = /"workId":(\d+)[\s\S]{0,240}?"cover":"([^"]+)"/g;
  while ((m = reCover.exec(text))) {
    var id1 = m[1];
    if (!meta[id1]) meta[id1] = {};
    if (!meta[id1].cover) meta[id1].cover = cleanImage(m[2]);
  }
  var reCode = /"workId":(\d+)[\s\S]{0,2200}?"code":"([^"]+)"/g;
  while ((m = reCode.exec(text))) {
    var id2 = m[1];
    if (!meta[id2]) meta[id2] = {};
    if (!meta[id2].code) meta[id2].code = m[2];
  }
  // 列表主路径：出现 scope=list 的 work-card
  var reList = /"className":"work-card"[^\{]{0,80}"workId":(\d+)/g;
  while ((m = reList.exec(text))) {
    var wid = m[1];
    if (seen[wid]) continue;
    seen[wid] = true;
    var info = meta[wid] || {};
    items.push({
      workId: wid,
      coverUrl: info.cover || "",
      code: info.code || "",
      title: "",
      playable: false,
    });
  }
  if (items.length) return items;

  // 兜底：所有 workId+cover
  for (var id in meta) {
    if (!meta[id] || !meta[id].cover || seen[id]) continue;
    seen[id] = true;
    items.push({
      workId: id,
      coverUrl: meta[id].cover || "",
      code: meta[id].code || "",
      title: "",
      playable: false,
    });
  }
  return items;
}

function genrePathCandidates(genreId, page) {
  var q = page > 1 ? "?page=" + page : "";
  var id = encodeURIComponent(genreId);
  return [
    "/genre/" + id + q,
    "/zh-CN/genre/" + id + q,
    "/zh-Hant/genre/" + id + q,
  ];
}

async function fetchGenreRsc(genreId, page) {
  var paths = genrePathCandidates(genreId, page);
  var headerSets = [
    rscHeaders(SITE + "/genres"),
    rscHeaders(SITE + "/genre/" + genreId),
    apiHeaders({
      Accept: "text/x-component,*/*",
      RSC: "1",
      Referer: SITE + "/genre/" + genreId,
      "Next-Url": "/genre/" + genreId,
    }),
  ];
  var best = [];
  await softBrowseGate();
  for (var p = 0; p < paths.length; p++) {
    for (var h = 0; h < headerSets.length; h++) {
      var got = await safeGet(SITE + paths[p], headerSets[h]);
      var body = typeof got.body === "string" ? got.body : "";
      if (!body && got.body != null && typeof got.body === "object") {
        try {
          body = JSON.stringify(got.body);
        } catch (e0) {
          body = "";
        }
      }
      if (
        got.status === 403 ||
        isCloudflareChallenge(body) ||
        (got.error && isForbiddenError(got.error)) ||
        !body ||
        body.length < 80
      ) {
        continue;
      }
      if (body.indexOf("workId") === -1) continue;
      var items = parseGenreRscPayload(body);
      if (items.length > best.length) best = items;
      if (best.length >= 24) return best;
    }
  }
  return best.length ? best : null;
}

/**
 * FANZA/DMM cid → 标准品番
 * 1piyo00241 → PIYO-241
 * h_068mxgs01451 → MXGS-1451
 * ssis00999 → SSIS-999
 * 42vrpn00022 → VRPN-22
 * 已是 PIYO-241 则原样规范化
 */
function normalizeCode(code) {
  code = getText(code).toUpperCase();
  if (!code) return "";

  // 已是标准品番（含数字片商前缀如 T28 / 3DSVR）
  var hy = code.match(/^([A-Z]{2,15}|T28|R18|3DSVR)-0*([0-9]+)([A-Z]?)$/);
  if (hy) return hy[1] + "-" + String(parseInt(hy[2], 10)) + (hy[3] || "");

  // 去掉包装：cid=、AI 重制后缀、非字母数字分隔
  code = code.replace(/^CID[=:]?/i, "");
  code = code.replace(/[-_]?AI$/i, "");
  // h_068mxgs01451 / h_1240milk00308
  code = code.replace(/^H_\d+/i, "");
  code = code.replace(/[^A-Z0-9]+/g, "");
  if (!code) return "";

  // 特殊：片商代号本身含数字
  var special = code.match(/^(T28|R18|3DSVR)0*([0-9]+)([A-Z]?)$/);
  if (special) {
    return special[1] + "-" + String(parseInt(special[2], 10)) + (special[3] || "");
  }

  // 典型 cid：可选开头数字(配信/片商区分) + 英字 + 零填充流水号 + 可选末尾字母
  // 1PIYO00241 / 42VRPN00022 / SSIS00999 / MXGS01451
  var m = code.match(/^(\d{0,4})([A-Z]{2,15})0*([0-9]{1,8})([A-Z]?)$/);
  if (m && m[2] && m[3] && String(parseInt(m[3], 10)) !== "0") {
    return m[2] + "-" + String(parseInt(m[3], 10)) + (m[4] || "");
  }

  // 兜底：已是 LETTERS-DIGITS
  if (/^[A-Z0-9]+-\d+[A-Z]?$/.test(code)) return code;
  return code;
}

function toLandscapeCover(u) {
  u = cleanImage(u);
  if (!u) return "";
  return u.replace(/ps\.jpg(\?|$)/i, "pl.jpg$1");
}

function toPortraitCover(u) {
  u = cleanImage(u);
  if (!u) return "";
  return u.replace(/pl\.jpg(\?|$)/i, "ps.jpg$1");
}

function stillsFromCover(cover, maxN) {
  cover = cleanImage(cover);
  var m = cover.match(/^(https?:\/\/[^?]+\/)([^\/]+)(pl|ps)\.jpg/i);
  if (!m) return [];
  var base = m[1];
  var id = m[2];
  var out = [];
  var n = Math.max(1, Math.min(Number(maxN) || 12, 16));
  for (var i = 1; i <= n; i++) out.push(base + id + "jp-" + i + ".jpg");
  return out;
}

function buildCoverBundle(cover, mode) {
  var landscape = toLandscapeCover(cover) || cleanImage(cover);
  var portrait = toPortraitCover(cover) || landscape;
  // 列表横图位：只填 backdropPath/coverUrl，不填 posterPath，避免走竖图位海报墙
  if (mode === "list") {
    return {
      coverUrl: landscape || undefined,
      backdropPath: landscape || undefined,
      posterPath: undefined,
      detailPoster: undefined,
    };
  }
  // 详情：顶部横图位 + 可选竖海报
  return {
    coverUrl: landscape || undefined,
    backdropPath: landscape || undefined,
    posterPath: portrait || landscape || undefined,
    detailPoster: portrait || landscape || undefined,
  };
}

function toVideoItem(row) {
  var workId = String(row.workId || "").replace(/[^\d]/g, "");
  var code = resolveItemCode(row);
  var link = buildOwnedLink(workId, code);
  var title = getText(row.title) || code || "作品 " + workId;
  if (code && title.toUpperCase().indexOf(code) !== 0) title = code + " " + title;
  var covers = buildCoverBundle(row.coverUrl || row.cover || "", "list");
  // 聚合工具依赖 id=纯番号（不能是 jv:…）；站点内部 workId 放 videoId / link
  // 列表一律横图位：backdropPath → coverUrl（不设 posterPath）
  var itemId = code || "";
  if (!itemId || /^(jv:|JV[:\-])/i.test(itemId)) itemId = workId;
  return {
    id: itemId,
    type: "url",
    mediaType: "movie",
    title: title,
    originalTitle: code || title,
    videoId: workId || undefined,
    coverUrl: covers.coverUrl,
    backdropPath: covers.backdropPath,
    releaseDate: getText(row.releaseDate) || undefined,
    description: row.description || (code ? "番号: " + code : undefined),
    link: link,
  };
}

function dedupeItems(list) {
  var out = [];
  var seen = {};
  for (var i = 0; i < list.length; i++) {
    var it = list[i];
    if (!it || !it.link || seen[it.link]) continue;
    seen[it.link] = true;
    out.push(it);
  }
  return out;
}

function itemsFromPool(works, offset, limit) {
  var items = [];
  works = works || [];
  for (var i = offset; i < works.length && items.length < limit; i++) {
    var w = works[i] || {};
    items.push(
      toVideoItem({
        workId: w.id,
        code: w.code_display || w.code,
        title: w.title_zh || w.title,
        coverUrl: w.cover_url || w.cover,
        releaseDate: w.delivery_date,
      })
    );
  }
  return dedupeItems(items);
}

function readPoolCache() {
  if (memoryPool.works.length && Date.now() - memoryPool.at < POOL_CACHE_TTL_MS) {
    return memoryPool.works;
  }
  try {
    var raw = Widget.storage && Widget.storage.get(POOL_CACHE_KEY);
    if (!raw) return null;
    var obj = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!obj || !Array.isArray(obj.works)) return null;
    if (Date.now() - Number(obj.at || 0) > POOL_CACHE_TTL_MS) return null;
    memoryPool = { at: Number(obj.at || Date.now()), works: obj.works };
    return obj.works;
  } catch (e) {
    return null;
  }
}

function writePoolCache(works) {
  memoryPool = { at: Date.now(), works: works || [] };
  try {
    if (Widget.storage && typeof Widget.storage.set === "function") {
      Widget.storage.set(
        POOL_CACHE_KEY,
        JSON.stringify({ at: memoryPool.at, works: memoryPool.works })
      );
    }
  } catch (e) {}
}

async function fetchRandomPoolWorks(force) {
  if (!force) {
    var cached = readPoolCache();
    if (cached && cached.length) return cached;
  }
  // 官网「抽一部」即打此接口；加时间戳降低网关短时复用同一份池
  var json = await fetchJson("/api/works/random-pool?t=" + Date.now());
  var works = (json && json.works) || [];
  writePoolCache(works);
  return works;
}

function shuffleInPlace(list) {
  var arr = list || [];
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function readRecentDrawIds() {
  try {
    var raw = Widget.storage && Widget.storage.get("jv.random.recent.v1");
    var arr = typeof raw === "string" ? JSON.parse(raw) : raw;
    return Array.isArray(arr) ? arr.map(String) : [];
  } catch (e) {
    return [];
  }
}

function writeRecentDrawIds(ids) {
  try {
    if (Widget.storage && typeof Widget.storage.set === "function") {
      Widget.storage.set("jv.random.recent.v1", JSON.stringify((ids || []).slice(0, 60)));
    }
  } catch (e) {}
}

/** 对齐官网抽一部：从 random-pool 客户端随机抽 N 部，尽量避开刚抽过的 */
function pickRandomWorks(works, count) {
  works = (works || []).slice();
  if (!works.length) return [];
  count = Math.max(1, Math.min(48, Number(count) || 1));
  var recent = readRecentDrawIds();
  var recentSet = {};
  for (var r = 0; r < recent.length; r++) recentSet[recent[r]] = 1;

  shuffleInPlace(works);
  var preferred = [];
  var fallback = [];
  for (var i = 0; i < works.length; i++) {
    var w = works[i] || {};
    var id = String(w.id || "");
    if (!id) continue;
    if (recentSet[id]) fallback.push(w);
    else preferred.push(w);
  }
  var picked = preferred.concat(fallback).slice(0, count);
  var pickedIds = picked.map(function (w) {
    return String(w.id);
  });
  writeRecentDrawIds(pickedIds.concat(recent));
  return picked;
}

async function fetchCardsDetail(workId) {
  var json = await fetchJson("/api/cards?w=" + encodeURIComponent(workId), {
    referer: SITE + "/work/" + workId,
  });
  var works = (json && json.works) || {};
  return works[String(workId)] || works[workId] || null;
}

async function fetchCardsBatch(workIds) {
  workIds = (workIds || []).filter(Boolean);
  if (!workIds.length) return {};
  var json = await fetchJson("/api/cards?w=" + encodeURIComponent(workIds.join(",")), {
    referer: SITE + "/",
  });
  return (json && json.works) || {};
}

async function fetchMagnets(workId) {
  try {
    var json = await fetchJson("/api/works/" + encodeURIComponent(workId) + "/magnets", {
      referer: SITE + "/work/" + workId,
    });
    if (!json || !Array.isArray(json.items)) return [];
    return json.items;
  } catch (e) {
    console.log("[javverse] magnets skip:", (e && e.message) || e);
    return [];
  }
}

function parseSizeToMb(sizeText) {
  var s = getText(sizeText).toUpperCase().replace(/,/g, "");
  if (!s) return 0;
  var m = s.match(/([\d.]+)\s*(TB|GB|MB|KB|B)?/);
  if (!m) return 0;
  var n = Number(m[1]);
  if (!isFinite(n)) return 0;
  var unit = m[2] || "MB";
  if (unit === "TB") return n * 1024 * 1024;
  if (unit === "GB") return n * 1024;
  if (unit === "MB") return n;
  if (unit === "KB") return n / 1024;
  return n / (1024 * 1024);
}

function sortMagnetsBySizeDesc(items) {
  return (items || []).slice().sort(function (a, b) {
    return parseSizeToMb(b && b.size) - parseSizeToMb(a && a.size);
  });
}

function buildMagnetRelatedItems(items, ctx) {
  ctx = ctx || {};
  var cover = ctx.cover || "";
  var list = sortMagnetsBySizeDesc(items).slice(0, 20);
  var out = [];
  for (var i = 0; i < list.length; i++) {
    var it = list[i] || {};
    var magnet = getText(it.magnet || it.url || it.link);
    if (!magnet) continue;
    var hash = extractMagnetHash(magnet);
    if (!hash) continue;
    var bits = [];
    if (it.quality) bits.push(it.quality);
    if (it.subtitle) bits.push("字幕");
    if (it.uncensored) bits.push("无码");
    var name = bits.join(" / ") || getText(it.title) || "磁力 " + (i + 1);
    var sizeText = getText(it.size);
    cacheMagnet(hash, {
      magnet: magnet,
      hash: hash,
      name: name,
      size: sizeText,
      quality: it.quality || "",
      code: ctx.code || "",
      title: ctx.title || "",
      cover: cover || "",
      workId: ctx.workId || "",
    });
    var magCover = toLandscapeCover(cover) || cleanImage(cover) || undefined;
    out.push({
      id: hash,
      type: "url",
      mediaType: "movie",
      title: name,
      description: sizeText || undefined,
      link: MAGNET_LINK_PREFIX + hash,
      coverUrl: magCover,
      backdropPath: magCover,
    });
  }
  return out;
}

function extractLinks(html, kind) {
  var re =
    kind === "genre"
      ? /href="(\/(?:(?:zh-CN|zh-Hant|en|ja)\/)?genre\/(\d+)[^"]*)"[^>]*>([^<]{1,40})</gi
      : kind === "actress"
        ? /href="(\/(?:(?:zh-CN|zh-Hant|en|ja)\/)?actress\/(\d+)[^"]*)"[^>]*>([^<]{1,40})</gi
        : /href="(\/(?:(?:zh-CN|zh-Hant|en|ja)\/)?maker\/(\d+)[^"]*)"[^>]*>([^<]{1,40})</gi;
  var out = [];
  var seen = {};
  var m;
  while ((m = re.exec(html))) {
    var id = m[2];
    var title = getText(m[3]);
    if (!id || !title || seen[id]) continue;
    if (/浏览验证|请稍等|加载中/.test(title)) continue;
    seen[id] = true;
    out.push({ id: id, title: title });
  }
  return out;
}

function extractStillsFromHtml(html) {
  var out = [];
  var seen = {};
  var re = /https?:\/\/awsimgsrc\.dmm\.co\.jp[^"'\s>]+jp-\d+\.jpg/gi;
  var m;
  while ((m = re.exec(html))) {
    var u = cleanImage(m[0]);
    if (!u || seen[u]) continue;
    seen[u] = true;
    out.push(u);
  }
  return out;
}

function parseGenreWorkCards(html) {
  html = String(html || "");
  var items = [];
  var seen = {};
  var m;

  // 标准卡片：属性顺序以官网为准，但放宽匹配
  var re =
    /<a\b([^>]*\bwork-card\b[^>]*)>([\s\S]*?)<\/a>/gi;
  while ((m = re.exec(html))) {
    var attrs = m[1] || "";
    var inner = m[2] || "";
    var hm = attrs.match(/href="\/(?:(?:zh-CN|zh-Hant|en|ja)\/)?work\/(\d+)"/i);
    if (!hm) continue;
    var workId = hm[1];
    if (seen[workId]) continue;
    seen[workId] = true;
    var playable = /data-work-playable="true"/i.test(attrs);
    var alt = "";
    var am = inner.match(/alt="([^"]*?)"/i);
    if (am) alt = getText(am[1]).replace(/\s*封面$/, "");
    var code = "";
    var title = alt;
    var cm = alt.match(/^([A-Z0-9]+-\d+[A-Z]?)\s*(.*)$/i);
    if (cm) {
      code = normalizeCode(cm[1]) || cm[1];
      title = getText(cm[2]) || alt;
    }
    var src = "";
    var sm = inner.match(/src="(https?:\/\/[^"]+)"/i);
    if (sm) src = cleanImage(sm[1]);
    items.push({
      workId: workId,
      code: code,
      title: title || code || "作品 " + workId,
      coverUrl: src,
      playable: playable,
    });
  }
  if (items.length) return items;

  // fallback: href + cover nearby
  var re2 =
    /href="\/(?:(?:zh-CN|zh-Hant|en|ja)\/)?work\/(\d+)"[\s\S]{0,800}?src="(https?:\/\/[^"]+?(?:pl|ps)\.jpg[^"]*)"/gi;
  while ((m = re2.exec(html))) {
    if (seen[m[1]]) continue;
    seen[m[1]] = true;
    items.push({
      workId: m[1],
      code: "",
      title: "作品 " + m[1],
      coverUrl: cleanImage(m[2]),
      playable: false,
    });
  }
  return items;
}

async function fetchGenreHtmlCards(genreId, page) {
  var paths = genrePathCandidates(genreId, page);
  var best = [];
  for (var i = 0; i < paths.length; i++) {
    try {
      var html = await fetchHtml(paths[i], SITE + "/genres");
      var cards = parseGenreWorkCards(html);
      if (cards.length > best.length) best = cards;
      if (best.length >= 24) return best;
    } catch (e) {
      console.log("[javverse] genre HTML skip:", paths[i], (e && e.message) || e);
    }
  }
  return best.length ? best : null;
}

function genreTitleById(id) {
  id = String(id || "");
  return GENRE_TITLE_MAP[id] || id;
}

function resolveGenreId(params) {
  params = params || {};
  var raw = params.genreId != null ? params.genreId : params.genre_id;
  if (raw && typeof raw === "object") {
    raw = raw.value != null ? raw.value : raw.id != null ? raw.id : raw.title;
  }
  raw = getText(raw);
  if (!raw) return "";
  // "id|title" or plain id
  if (raw.indexOf("|") >= 0) raw = raw.split("|")[0];
  if (/^\d+$/.test(raw)) return raw;
  // title match
  for (var id in GENRE_TITLE_MAP) {
    if (GENRE_TITLE_MAP[id] === raw) return id;
  }
  return "";
}

function filterWorksByKeyword(works, keyword) {
  keyword = getText(keyword).toLowerCase();
  if (!keyword) return works || [];
  var out = [];
  for (var i = 0; i < (works || []).length; i++) {
    var w = works[i] || {};
    var hay = [w.code_display, w.code, w.title, w.title_zh, w.actress && w.actress.name]
      .map(function (x) {
        return getText(x).toLowerCase();
      })
      .join(" ");
    if (hay.indexOf(keyword) !== -1) out.push(w);
  }
  return out;
}

async function loadApiPage(params) {
  params = params || {};
  var works = await fetchRandomPoolWorks(false);
  var size = pageSize(params);
  var page = pageNum(params);
  return itemsFromPool(works, (page - 1) * size, size);
}

async function loadDiscover(params) {
  try {
    params = params || {};
    rememberParams(params);
    return await loadApiPage(params);
  } catch (error) {
    console.error("[javverse/loadDiscover] 失败:", error.message || error);
    throw error;
  }
}

async function loadRankings(params) {
  try {
    params = params || {};
    rememberParams(params);
    var works = await fetchRandomPoolWorks(false);
    var size = pageSize(params);
    var page = pageNum(params);
    var offset = ((page - 1) * size + 40) % Math.max(works.length, 1);
    return itemsFromPool(works, offset, size);
  } catch (error) {
    console.error("[javverse/loadRankings] 失败:", error.message || error);
    throw error;
  }
}

async function loadRandom(params) {
  try {
    params = params || {};
    rememberParams(params);
    var count = Math.max(1, Math.min(48, Number(params.count || 1) || 1));
    // 与官网「抽一部」同源：每次强制拉 random-pool，再客户端随机抽取
    var works = await fetchRandomPoolWorks(true);
    var picked = pickRandomWorks(works, count);
    return dedupeItems(
      picked.map(function (w) {
        return toVideoItem({
          workId: w.id,
          code: w.code_display || w.code,
          title: w.title_zh || w.title,
          coverUrl: w.cover_url || w.cover,
          releaseDate: w.delivery_date,
          description: "今晚看什么 · 抽一部",
        });
      })
    );
  } catch (error) {
    console.error("[javverse/loadRandom] 失败:", error.message || error);
    throw error;
  }
}

async function loadGenreWorks(params) {
  try {
    params = params || {};
    rememberParams(params);
    var genreId = resolveGenreId(params);
    if (!genreId) {
      console.warn("[javverse/loadGenreWorks] 未选择类别");
      return [];
    }
    var page = pageNum(params);
    var cards = null;

    // 1) RSC（官网类别页同源）
    try {
      cards = await fetchGenreRsc(genreId, page);
      console.log(
        "[javverse] genre RSC id=",
        genreId,
        "page=",
        page,
        "n=",
        cards ? cards.length : 0
      );
    } catch (e) {
      console.log("[javverse] genre RSC skip:", (e && e.message) || e);
    }

    // 2) HTML 回退（多语言路径）
    if (!cards || cards.length < 8) {
      try {
        var htmlCards = await fetchGenreHtmlCards(genreId, page);
        if (htmlCards && htmlCards.length > (cards ? cards.length : 0)) {
          cards = htmlCards;
          console.log("[javverse] genre HTML id=", genreId, "n=", cards.length);
        }
      } catch (e2) {
        console.log("[javverse] genre HTML skip:", (e2 && e2.message) || e2);
      }
    }

    // 不再用 random-pool 按类别名关键词弱过滤（只会得到四五部，误导用户）
    if (!cards || !cards.length) {
      throw new Error(
        "类别 " +
          genreId +
          "(" +
          genreTitleById(genreId) +
          ") 第 " +
          page +
          " 页加载失败。可在全局参数填写站点 Cookie 后重试。"
      );
    }

    try {
      var batch = await fetchCardsBatch(
        cards.slice(0, 48).map(function (c) {
          return c.workId;
        })
      );
      for (var i = 0; i < cards.length; i++) {
        var c = cards[i];
        var rich = batch[String(c.workId)] || batch[c.workId];
        if (!rich) continue;
        if (rich.cover) c.coverUrl = rich.cover;
        if (rich.title_zh || rich.title) c.title = rich.title_zh || rich.title;
        if (rich.code) c.code = normalizeCode(rich.code) || rich.code;
      }
    } catch (e3) {
      console.log("[javverse] genre cards enrich skip:", (e3 && e3.message) || e3);
    }

    var size = pageSize(params);
    var items = [];
    for (var j = 0; j < cards.length && items.length < size; j++) {
      var row = cards[j];
      items.push(
        toVideoItem({
          workId: row.workId,
          code: row.code,
          title: row.title || row.code || "作品 " + row.workId,
          coverUrl: row.coverUrl,
          description: "类别: " + genreTitleById(genreId),
        })
      );
    }
    return dedupeItems(items);
  } catch (error) {
    console.error("[javverse/loadGenreWorks] 失败:", error.message || error);
    throw error;
  }
}

async function searchJavverse(params) {
  try {
    params = params || {};
    rememberParams(params);
    var keyword = getText(params.keyword);
    if (!keyword) return [];
    var works = await fetchRandomPoolWorks(false);
    var filtered = filterWorksByKeyword(works, keyword);
    if (!filtered.length) {
      works = await fetchRandomPoolWorks(true);
      filtered = filterWorksByKeyword(works, keyword);
    }
    var size = pageSize(params);
    var page = pageNum(params);
    return itemsFromPool(filtered, (page - 1) * size, size);
  } catch (error) {
    console.error("[javverse/search] 失败:", error.message || error);
    throw error;
  }
}

async function loadMagnetDetail(owned, params) {
  if (typeof handleGuangyaMagnetSave === "function") {
    return await handleGuangyaMagnetSave(owned.hash, params || lastRequestParams || {});
  }
  var cached = readMagnetCache(owned.hash);
  if (!cached || !cached.magnet) return null;
  var magCover = toLandscapeCover(cached.cover) || cleanImage(cached.cover) || undefined;
  return {
    id: owned.hash,
    type: "url",
    title: cached.name || cached.code || "磁力",
    link: MAGNET_LINK_PREFIX + owned.hash,
    description: getText(cached.size) || undefined,
    coverUrl: magCover,
    backdropPath: magCover,
  };
}

async function loadDetail(link, params) {
  try {
    params = params || lastRequestParams || {};
    rememberParams(params);
    var owned = parseOwnedLink(link != null ? link : params.link || params.id);
    if (!owned) return null;
    if (owned.kind === "magnet") {
      return await loadMagnetDetail(owned, params);
    }

    var workId = owned.workId || "";
    var card = null;
    if (workId) {
      card = await fetchCardsDetail(workId);
    }
    if (!card && owned.code) {
      // 宿主/聚合只传了番号：从作品池反查 workId
      try {
        var pool = await fetchRandomPoolWorks(false);
        var hit = null;
        var want = owned.code;
        for (var pi = 0; pi < pool.length; pi++) {
          var pw = pool[pi] || {};
          var pc = resolveItemCode(pw);
          if (pc && pc === want) {
            hit = pw;
            break;
          }
        }
        if (hit && hit.id) {
          workId = String(hit.id);
          card = await fetchCardsDetail(workId);
          if (!card) {
            card = {
              code: hit.code_display || hit.code || want,
              title: hit.title_zh || hit.title || want,
              cover: hit.cover_url || hit.cover || "",
            };
          }
        }
      } catch (e0) {
        console.log("[javverse] code→workId skip:", (e0 && e0.message) || e0);
      }
    }
    if (!card || !workId) return null;

    var code =
      resolveItemCode({
        code: card.code || card.code_display || owned.code || params.id || params.code,
        title: card.title_zh || card.title,
        coverUrl: card.cover,
      }) || owned.code || "";
    var title = card.title_zh || card.title || code;
    var covers = buildCoverBundle(card.cover || "", "detail");
    var ownedLink = buildOwnedLink(workId, code);

    var html = "";
    try {
      html = await fetchHtml("/work/" + workId, SITE + "/");
    } catch (e) {
      console.log("[javverse] detail html skip:", (e && e.message) || e);
    }

    var genres = extractLinks(html, "genre");
    var actresses = extractLinks(html, "actress");
    var makers = extractLinks(html, "maker");
    var stills = extractStillsFromHtml(html);
    if (!stills.length) stills = stillsFromCover(card.cover, 12);

    var magnets = await fetchMagnets(workId);
    var relatedItems = buildMagnetRelatedItems(magnets, {
      workId: workId,
      code: code,
      title: title,
      cover: covers.backdropPath || covers.coverUrl,
    });

    var peoples = actresses.map(function (a) {
      return { id: String(a.id), title: a.title, role: "actress" };
    });

    var genreItems = genres.map(function (g) {
      return {
        id: String(g.id),
        title: genreTitleById(g.id) || g.title,
      };
    });

    var makerName = makers.length ? makers[0].title : "";
    if (makerName && !genreItems.some(function (g) { return g.title === makerName; })) {
      genreItems.unshift({ id: "maker:" + makers[0].id, title: makerName });
    }

    var descParts = [];
    if (code) descParts.push("番号: " + code);
    if (makerName) descParts.push("片商: " + makerName);
    if (magnets.length) descParts.push("磁力×" + magnets.length + "（相似作品区点击转存光鸭）");
    if (actresses.length) {
      descParts.push(
        "女优: " +
          actresses
            .slice(0, 4)
            .map(function (a) {
              return a.title;
            })
            .join(" / ")
      );
    }

    var detailId = code || "";
    if (!detailId || /^(jv:|JV[:\-])/i.test(detailId)) detailId = workId;
    return {
      id: detailId,
      type: "url",
      mediaType: "movie",
      title: code && String(title).toUpperCase().indexOf(code) !== 0 ? code + " " + title : title,
      originalTitle: code || title,
      videoId: workId,
      link: ownedLink,
      coverUrl: covers.coverUrl,
      posterPath: covers.posterPath,
      detailPoster: covers.detailPoster,
      backdropPath: covers.backdropPath,
      backdropPaths: stills.length ? stills : undefined,
      description: descParts.join(" · ") || undefined,
      genreItems: genreItems.length ? genreItems : undefined,
      genreTitle: makerName || undefined,
      peoples: peoples.length ? peoples : undefined,
      relatedItems: relatedItems.length ? relatedItems : undefined,
    };
  } catch (error) {
    console.error("[javverse/loadDetail] 失败:", error.message || error);
    throw error;
  }
}

function ensureDirectPlayUrl(playlistUrl) {
  var u = getText(playlistUrl);
  if (!u) return "";
  if (u.indexOf("direct=") === -1) u += (u.indexOf("?") >= 0 ? "&" : "?") + "direct=1";
  return u;
}

function decodeTicketPayload(ticket) {
  try {
    var part = String(ticket || "").split(".")[0] || "";
    if (!part) return null;
    var b64 = part.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    // atob may be unavailable in some runtimes
    var json;
    if (typeof atob === "function") {
      json = atob(b64);
    } else if (typeof Buffer !== "undefined") {
      json = Buffer.from(b64, "base64").toString("utf8");
    } else {
      return null;
    }
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

async function probePlayableStream(playlistUrl, workId) {
  var playUrl = absUrl(ensureDirectPlayUrl(playlistUrl));
  try {
    var got = await safeGet(
      playUrl,
      apiHeaders({
        Accept: "application/vnd.apple.mpegurl,*/*",
        Referer: SITE + "/work/" + workId,
      })
    );
    var body = typeof got.body === "string" ? got.body : "";
    if (!body || body.indexOf("#EXTM3U") === -1) {
      return { ok: false, reason: "empty-or-non-m3u8", url: playUrl };
    }
    // 站点私有 #EXT-X-TOKEN，外置播放器无法解密分片，视为不可播
    if (/#EXT-X-TOKEN/i.test(body)) {
      return { ok: false, reason: "private-ext-x-token", url: playUrl };
    }
    var lines = body.split(/\r?\n/);
    for (var i = 0; i < lines.length; i++) {
      var line = getText(lines[i]);
      if (!line || line.charAt(0) === "#") continue;
      if (/\/api\/video\/media\/stream\?ticket=/i.test(line) || /\.m3u8/i.test(line)) {
        var mediaUrl = absUrl(ensureDirectPlayUrl(line));
        try {
          var mediaGot = await safeGet(
            mediaUrl,
            apiHeaders({
              Accept: "application/vnd.apple.mpegurl,*/*",
              Referer: SITE + "/work/" + workId,
            })
          );
          var mediaBody = typeof mediaGot.body === "string" ? mediaGot.body : "";
          if (/#EXT-X-TOKEN/i.test(mediaBody)) {
            return { ok: false, reason: "private-ext-x-token-media", url: mediaUrl };
          }
          if (mediaBody && mediaBody.indexOf("#EXTM3U") !== -1) {
            return { ok: true, url: mediaUrl };
          }
        } catch (e2) {}
        return { ok: true, url: mediaUrl };
      }
      // 直接分片 URL
      if (/^https?:\/\//i.test(line)) {
        return { ok: true, url: playUrl };
      }
    }
    return { ok: false, reason: "no-media-line", url: playUrl };
  } catch (e) {
    return { ok: false, reason: String((e && e.message) || e || "probe-failed"), url: playUrl };
  }
}

async function createPlaySession(workId) {
  var json = await fetchJson("/api/video/sessions", {
    method: "POST",
    body: { workId: Number(workId) },
    referer: SITE + "/work/" + workId,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (!json || !json.success || !json.playlistUrl) {
    throw new Error((json && json.error) || "创建播放会话失败");
  }
  return json;
}

function playHeaders(workId) {
  var headers = {
    "User-Agent": UA,
    Referer: SITE + "/work/" + workId,
    Origin: SITE,
    Accept: "*/*",
    "X-Forward-Skip-Redirect-Probe": "1",
  };
  var ck = getSiteCookie();
  if (ck) headers.Cookie = ck;
  return headers;
}

async function loadResource(params) {
  try {
    params = params || {};
    rememberParams(params);
    var raw = params.link != null ? params.link : params.id;
    var owned = parseOwnedLink(raw);
    // 仅本站 jv: 作品；不按番号去光鸭网盘搜索
    if (!owned || owned.kind === "magnet") return [];
    if (!owned.workId && owned.kind === "code") {
      // 详情 id 为番号时，宿主可能把 id 当作 link 传入
      try {
        var detail = await loadDetail(owned.code, params);
        if (detail && detail.link) owned = parseOwnedLink(detail.link);
      } catch (e) {}
    }
    if (!owned || !owned.workId) return [];

    var sess;
    try {
      sess = await createPlaySession(owned.workId);
    } catch (e) {
      console.log("[javverse] 无在线播放会话，跳过播放源:", (e && e.message) || e);
      return [];
    }
    if (!sess || !sess.playlistUrl) return [];

    var probed = await probePlayableStream(sess.playlistUrl, owned.workId);
    if (!probed || !probed.ok) {
      console.log(
        "[javverse] 在线流不可被外置播放器播放，不返回播放源:",
        (probed && probed.reason) || "unknown"
      );
      return [];
    }

    var name = "JAV Verse";
    if (sess.variant) name += " · " + sess.variant;
    if (sess.code) name += " · " + normalizeCode(sess.code);

    return [
      {
        name: name,
        description: "HLS | workId=" + owned.workId,
        url: probed.url,
        customHeaders: playHeaders(owned.workId),
        headers: playHeaders(owned.workId),
        playerType: "app",
      },
    ];
  } catch (error) {
    console.error("[javverse/loadResource] 失败:", error.message || error);
    // 播放失败不抛错，避免详情页整页失败
    return [];
  }
}

/* ========================= 光鸭磁力转存（精简自 javdb） ========================= */
var GUANGYA_ACCOUNT_URL = "https://account.guangyapan.com";
var GUANGYA_API_BASE = "https://api.guangyapan.com";
var GUANGYA_SITE = "https://www.guangyapan.com";
var GUANGYA_CLIENT_ID = "aMe-8VSlkrbQXpUR";
var GUANGYA_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1";
var GY_LINK_PREFIX = "gy:";
var GY_ACCESS_STORE = "jv.guangya.access.v1";
var GY_DID_STORE = "jv.guangya.did.v1";
var _gyTokenRefreshInflight = null;
var GY_VIDEO_EXTS = { mp4: 1, mkv: 1, avi: 1, wmv: 1, mov: 1, m4v: 1, ts: 1, flv: 1, rmvb: 1, webm: 1, "3gp": 1 };
var GY_AUTO_INDEX = 10000;

function gyRandomHex(len) {
  var out = "";
  for (var i = 0; i < len; i++) out += ((Math.random() * 16) | 0).toString(16);
  return out;
}

function gySafeText(v) {
  return String(v == null ? "" : v).replace(/\s+/g, " ").trim();
}

function gyNormalizeToken(token) {
  token = gySafeText(token);
  if (!token) return "";
  if (token.indexOf("gy.") === 0 || token.indexOf("gy-") === 0) return token;
  return token;
}

function gyReadStore(key) {
  try {
    return Widget.storage.get(key);
  } catch (e) {
    return "";
  }
}

function gyWriteStore(key, value) {
  try {
    Widget.storage.set(key, value);
  } catch (e) {}
}

async function gyEnsureDid() {
  var id = gySafeText(gyReadStore(GY_DID_STORE)).toLowerCase();
  if (id) return id;
  id = gyRandomHex(16);
  gyWriteStore(GY_DID_STORE, id);
  return id;
}

function gyAccountHeaders(did) {
  return {
    accept: "*/*",
    "content-type": "application/json",
    origin: GUANGYA_SITE,
    referer: GUANGYA_SITE + "/",
    "user-agent": GUANGYA_UA,
    "x-client-id": GUANGYA_CLIENT_ID,
    "x-client-version": "0.0.1",
    "x-device-id": did,
    "x-device-model": "iphone%2F18.0",
    "x-device-name": "iPhone",
    "x-device-sign": "wdi10." + did + gyRandomHex(32),
    "x-net-work-type": "NONE",
    "x-os-version": "iPhone OS 18.0",
    "x-platform-version": "1",
    "x-protocol-version": "301",
    "x-provider-name": "NONE",
    "x-sdk-version": "9.0.2",
    "x-action": "401",
  };
}

function gyApiHeaders(token, did) {
  return {
    accept: "application/json, text/plain, */*",
    authorization: "Bearer " + token,
    "content-type": "application/json",
    Did: did,
    did: did,
    Dt: "4",
    dt: "4",
    origin: GUANGYA_SITE,
    referer: GUANGYA_SITE + "/",
    "user-agent": GUANGYA_UA,
  };
}

function gyExtractStatus(resp) {
  if (!resp || typeof resp !== "object") return 0;
  return Number(resp.status || resp.statusCode || resp.status_code || 0) || 0;
}

function gyParsePayload(resp) {
  if (!resp) return null;
  if (resp.data !== undefined) return resp.data;
  if (resp.body !== undefined) {
    if (typeof resp.body === "string") {
      try {
        return JSON.parse(resp.body);
      } catch (e) {
        return resp.body;
      }
    }
    return resp.body;
  }
  return resp;
}

async function gyHttpPost(url, headers, bodyObj, timeoutMs) {
  var body = bodyObj || {};
  var opts = {
    headers: headers,
    allow_redirects: true,
    timeout: timeoutMs || 30000,
    validate_status: false,
  };
  var resp = await Widget.http.post(url, body, opts);
  var status = gyExtractStatus(resp);
  var data = gyParsePayload(resp);
  if (status >= 400) {
    var msg =
      (data && (data.message || data.msg || data.error_description || data.error)) ||
      "HTTP " + status;
    throw new Error(String(msg));
  }
  return data;
}

function gyReadSession() {
  try {
    var raw = gyReadStore(GY_ACCESS_STORE);
    if (!raw) return null;
    return typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (e) {
    return null;
  }
}

function gyWriteSession(session) {
  gyWriteStore(GY_ACCESS_STORE, JSON.stringify(session || {}));
}

async function gyEnsureAccessToken(refreshToken, did) {
  refreshToken = gyNormalizeToken(refreshToken);
  if (!refreshToken) throw new Error("未配置光鸭 refresh_token");
  if (_gyTokenRefreshInflight) return _gyTokenRefreshInflight;
  _gyTokenRefreshInflight = (async function () {
    try {
      var session = gyReadSession();
      if (
        session &&
        session.accessToken &&
        Number(session.expiresAt || 0) > Date.now() + 60000 &&
        (session.refreshToken === refreshToken || session.sourceRefreshToken === refreshToken)
      ) {
        return session.accessToken;
      }
      var live =
        session && session.refreshToken && session.sourceRefreshToken === refreshToken
          ? session.refreshToken
          : refreshToken;
      var data = await gyHttpPost(
        GUANGYA_ACCOUNT_URL + "/v1/auth/token",
        gyAccountHeaders(did),
        { client_id: GUANGYA_CLIENT_ID, grant_type: "refresh_token", refresh_token: live },
        25000
      );
      if (!data || !data.access_token) throw new Error("刷新光鸭 token 失败");
      var newRefresh = gyNormalizeToken(data.refresh_token) || live;
      gyWriteSession({
        refreshToken: newRefresh,
        sourceRefreshToken: refreshToken,
        accessToken: data.access_token,
        expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000,
      });
      try {
        Widget.storage.set("jv.guangya_token", newRefresh);
      } catch (e) {}
      return data.access_token;
    } finally {
      _gyTokenRefreshInflight = null;
    }
  })();
  return _gyTokenRefreshInflight;
}

function gyToNumber(v) {
  var n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function gyPickName(values) {
  for (var i = 0; i < values.length; i++) {
    var s = gySafeText(values[i]);
    if (s) return s;
  }
  return "";
}

function gyExtractBtSubfiles(payload) {
  var data = payload && payload.data;
  var bt = data && data.btResInfo;
  var subs = bt && bt.subfiles;
  if (!Array.isArray(subs) || !subs.length) return [];
  var entries = [];
  for (var i = 0; i < subs.length; i++) {
    var s = subs[i] || {};
    var idx = gyToNumber(s.fileIndex != null ? s.fileIndex : s.index != null ? s.index : i);
    if (idx == null || idx < 0) idx = i;
    entries.push({
      index: idx,
      name: gyPickName([s.fileName, s.file_name, s.name, s.path]),
      size: gyToNumber(s.fileSize != null ? s.fileSize : s.size) || 0,
    });
  }
  return entries;
}

function gyIsVideoName(name) {
  var ext = String(name || "")
    .split(".")
    .pop()
    .toLowerCase();
  return !!GY_VIDEO_EXTS[ext];
}

function gyFilterVideoFiles(entries) {
  var kept = [];
  var blocked = [];
  (entries || []).forEach(function (e) {
    if (!e) return;
    if (gyIsVideoName(e.name) || !e.name) kept.push(e);
    else blocked.push(e);
  });
  if (!kept.length && entries && entries.length) kept = entries.slice();
  return { kept: kept, blocked: blocked };
}

async function gyResolveResource(accessToken, did, magnet) {
  return gyHttpPost(
    GUANGYA_API_BASE + "/nd.bizcloudcollection.s/v1/resolve_res",
    gyApiHeaders(accessToken, did),
    { url: magnet },
    45000
  );
}

async function gyCreateTask(accessToken, did, taskInput) {
  var body = {
    url: String(taskInput.url || "").trim(),
    parentId: gySafeText(taskInput.parentId),
  };
  if (taskInput.newName) body.newName = String(taskInput.newName).slice(0, 180);
  if (taskInput.fileIndexes && taskInput.fileIndexes.length) body.fileIndexes = taskInput.fileIndexes;
  return gyHttpPost(
    GUANGYA_API_BASE + "/nd.bizcloudcollection.s/v1/create_task",
    gyApiHeaders(accessToken, did),
    body,
    30000
  );
}

function gyTaskOk(task) {
  if (!task) return false;
  var msg = String(task.msg || "").toLowerCase();
  if (msg === "success" || msg === "") return true;
  if (task.code === 0) return true;
  return !!task.data;
}

async function saveMagnetToGuangya(magnet, cfg) {
  cfg = cfg || {};
  var did = await gyEnsureDid();
  var accessToken = await gyEnsureAccessToken(cfg.guangya_token || cfg.refresh_token, did);
  var resolved = null;
  var entries = [];
  try {
    resolved = await gyResolveResource(accessToken, did, magnet);
    entries = gyExtractBtSubfiles(resolved);
  } catch (e) {
    console.warn("[javverse][guangya] resolve 失败，尝试直接提交:", e && e.message);
  }
  var filtered = entries.length ? gyFilterVideoFiles(entries) : { kept: [], blocked: [] };
  var resolvedUrl = gySafeText(resolved && resolved.data && resolved.data.url) || magnet;
  var taskName =
    gySafeText(resolved && resolved.data && resolved.data.btResInfo && resolved.data.btResInfo.fileName) ||
    "javverse-magnet";
  var parentId = gySafeText(cfg.guangya_parent_id || cfg.parentId);
  var indexes = filtered.kept
    .map(function (e) {
      return e.index;
    })
    .filter(function (n) {
      return Number.isFinite(Number(n)) && Number(n) >= 0;
    });
  var attempts = [
    { url: resolvedUrl, parentId: parentId, newName: taskName, fileIndexes: indexes.length ? indexes : null },
    { url: resolvedUrl, parentId: parentId, newName: taskName, fileIndexes: null },
    { url: magnet, parentId: parentId, newName: taskName, fileIndexes: null },
  ];
  // 仅当未配置目录时才允许落到根目录；避免“填了目录 ID 却存到根”
  if (!parentId) {
    attempts.push({ url: magnet, parentId: "", newName: "", fileIndexes: null });
  }
  var lastErr = null;
  for (var i = 0; i < attempts.length; i++) {
    try {
      var task = await gyCreateTask(accessToken, did, attempts[i]);
      if (gyTaskOk(task)) {
        return {
          ok: true,
          keptCount: filtered.kept.length || 1,
          blockedCount: filtered.blocked.length,
          parentId: parentId || "",
          task: task,
        };
      }
      lastErr = new Error("create_task 失败");
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error("光鸭转存失败");
}

var GY_TOKEN_ALIASES = [
  "guangya_token",
  "GUANGYA_REFRESH_TOKEN",
  "guangya_refresh_token",
  "guangyaRefreshToken",
  "refresh_token",
];
var GY_PARENT_ALIASES = [
  "guangya_parent_id",
  "GUANGYA_PARENT_ID",
  "guangyaParentId",
  "parentId",
  "parent_id",
];

function gyIsPromiseLike(val) {
  return !!(val && typeof val === "object" && typeof val.then === "function");
}

function gyScanRefreshToken(text) {
  var m = String(text || "").match(/gy\.[A-Za-z0-9_\-\.~+/=]{8,}/);
  return m ? m[0] : "";
}

function gyNormalizeParamValue(val) {
  if (val === undefined || val === null) return "";
  if (typeof val === "string") return val.trim();
  if (typeof val === "number" || typeof val === "boolean") return String(val).trim();
  if (typeof val === "object") {
    if (gyIsPromiseLike(val)) return "";
    if (typeof val.value === "string" && val.value.trim()) return val.value.trim();
    if (typeof val.token === "string" && val.token.trim()) return val.token.trim();
    if (typeof val.refresh_token === "string" && val.refresh_token.trim()) return val.refresh_token.trim();
  }
  return "";
}

function gyPickFromObject(obj, aliases) {
  if (!obj || typeof obj !== "object" || gyIsPromiseLike(obj)) return "";
  if (Array.isArray(obj)) {
    for (var a = 0; a < aliases.length; a++) {
      var want = String(aliases[a] || "");
      if (!want) continue;
      for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (!item || typeof item !== "object") continue;
        var itemName = String(item.name || item.key || item.id || "").trim();
        if (itemName !== want) continue;
        var fromItem = gyNormalizeParamValue(
          item.value !== undefined ? item.value : item.val !== undefined ? item.val : item.data
        );
        if (fromItem) return fromItem;
      }
    }
    return "";
  }
  for (var j = 0; j < aliases.length; j++) {
    if (obj[aliases[j]] === undefined || obj[aliases[j]] === null) continue;
    var val = gyNormalizeParamValue(obj[aliases[j]]);
    if (val) return val;
  }
  return "";
}

function gyPickFromParamsTree(params, aliases) {
  params = params || {};
  return (
    gyPickFromObject(params, aliases) ||
    gyPickFromObject(params.global, aliases) ||
    gyPickFromObject(params.globalParams, aliases) ||
    gyPickFromObject(params.settings, aliases) ||
    ""
  );
}

function gyWidgetId() {
  try {
    return (WidgetMetadata && WidgetMetadata.id) || "javverse.catalog";
  } catch (e) {
    return "javverse.catalog";
  }
}

function gyStorageKeysFor(name) {
  var id = gyWidgetId();
  var keys = [
    id + ".globalParams." + name,
    id + ".global." + name,
    "forward." + id + ".globalParams." + name,
    "jv." + name,
    name,
  ];
  // 仅 token 别名额外查兼容旧 key；勿把 token key 混进 parent 查询
  if (/token|refresh/i.test(name)) {
    keys.push("jv.guangya_token", "guangya_refresh_token");
  }
  if (/parent/i.test(name)) {
    keys.push("jv.guangya_parent_id");
  }
  return keys;
}

function gyReadStorageBlob(key) {
  try {
    var raw = Widget.storage.get(key);
    if (raw == null || raw === "") return null;
    if (typeof raw === "string") {
      try {
        return JSON.parse(raw);
      } catch (e) {
        return null;
      }
    }
    if (typeof raw === "object" && !gyIsPromiseLike(raw)) return raw;
  } catch (e2) {}
  return null;
}

function gyPickFromStorage(aliases) {
  var id = gyWidgetId();
  var blobKeys = [id + ".globalParams", id + ".global", "globalParams", "forward." + id + ".globalParams"];
  var b;
  for (var i = 0; i < blobKeys.length; i++) {
    b = gyReadStorageBlob(blobKeys[i]);
    var hit = gyPickFromObject(b, aliases);
    if (hit) return hit;
  }
  for (var a = 0; a < aliases.length; a++) {
    var keys = gyStorageKeysFor(aliases[a]);
    for (var k = 0; k < keys.length; k++) {
      var v = gyNormalizeParamValue(gyReadStore(keys[k]));
      if (v) return v;
    }
  }
  return "";
}

async function gyAwaitMaybe(val) {
  if (gyIsPromiseLike(val)) {
    try {
      return await val;
    } catch (e) {
      return null;
    }
  }
  return val;
}

async function resolveGuangyaTokenAsync(params) {
  params = params || {};
  var raw = gyPickFromParamsTree(params, GY_TOKEN_ALIASES) || "";
  if (!raw) {
    try {
      if (typeof Widget !== "undefined" && typeof Widget.getGlobalParams === "function") {
        var all = await gyAwaitMaybe(Widget.getGlobalParams());
        raw = gyPickFromObject(all, GY_TOKEN_ALIASES);
      }
    } catch (e) {}
  }
  if (!raw) {
    try {
      if (typeof Widget !== "undefined" && Widget.globalParams) {
        var gp = await gyAwaitMaybe(Widget.globalParams);
        raw = gyPickFromObject(gp, GY_TOKEN_ALIASES);
      }
    } catch (e2) {}
  }
  if (!raw) raw = gyPickFromStorage(GY_TOKEN_ALIASES);
  var token = gyNormalizeToken(raw) || gyNormalizeToken(gyScanRefreshToken(raw));
  if (token) {
    try {
      Widget.storage.set("jv.guangya_token", token);
    } catch (e3) {}
  }
  return token;
}

async function resolveGuangyaParentIdAsync(params) {
  params = params || {};
  var raw = gyPickFromParamsTree(params, GY_PARENT_ALIASES) || "";
  if (!raw) {
    try {
      if (typeof Widget !== "undefined" && typeof Widget.getGlobalParams === "function") {
        var all = await gyAwaitMaybe(Widget.getGlobalParams());
        raw = gyPickFromObject(all, GY_PARENT_ALIASES);
      }
    } catch (e) {}
  }
  if (!raw) {
    try {
      if (typeof Widget !== "undefined" && Widget.globalParams) {
        var gp = await gyAwaitMaybe(Widget.globalParams);
        raw = gyPickFromObject(gp, GY_PARENT_ALIASES);
      }
    } catch (e2) {}
  }
  if (!raw) raw = gyPickFromStorage(GY_PARENT_ALIASES);
  raw = gySafeText(raw);
  if (raw) {
    try {
      Widget.storage.set("jv.guangya_parent_id", raw);
    } catch (e3) {}
  }
  return raw;
}

function resolveGuangyaTokenFromParams(params) {
  return (
    gyNormalizeToken(gyPickFromParamsTree(params || {}, GY_TOKEN_ALIASES)) ||
    gyNormalizeToken(gyPickFromStorage(GY_TOKEN_ALIASES)) ||
    ""
  );
}

function resolveGuangyaParentId(params) {
  return (
    gySafeText(gyPickFromParamsTree(params || {}, GY_PARENT_ALIASES)) ||
    gySafeText(gyPickFromStorage(GY_PARENT_ALIASES)) ||
    ""
  );
}

async function handleGuangyaMagnetSave(hash, params) {
  hash = String(hash || "")
    .trim()
    .toLowerCase();
  var entry = null;
  try {
    if (typeof readMagnetCache === "function") entry = readMagnetCache(hash);
  } catch (e) {}
  if (!entry) {
    try {
      var raw = Widget.storage.get((typeof MAGNET_STORE_PREFIX !== "undefined" ? MAGNET_STORE_PREFIX : "jv.magnet.v1.") + hash);
      entry = typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch (e2) {}
  }
  var link = GY_LINK_PREFIX + hash;
  if (!entry || !entry.magnet) {
    return {
      id: hash,
      type: "url",
      title: "转存失败",
      description: "找不到磁力缓存，请返回影片详情页重新加载后再试",
      link: link,
    };
  }
  // loadDetail 通常不带 params，必须从 Widget.globalParams / storage 异步取参
  var token = await resolveGuangyaTokenAsync(params);
  var parentId = await resolveGuangyaParentIdAsync(params);
  console.log(
    "[javverse][guangya] token?",
    token ? "yes(" + token.slice(0, 6) + "...)" : "no",
    "parentId?",
    parentId || "(root)"
  );
  if (!token) {
    return {
      id: hash,
      type: "url",
      title: "未配置光鸭",
      description:
        "未读到光鸭 refresh_token。请在模块「全局参数」填写 guangya_token（gy. 开头），保存后重新打开详情再点磁力转存。",
      link: link,
      coverUrl: entry.cover || undefined,
      backdropPath: entry.cover || undefined,
    };
  }
  try {
    var result = await saveMagnetToGuangya(entry.magnet, {
      guangya_token: token,
      guangya_parent_id: parentId,
    });
    return {
      id: hash,
      type: "url",
      title: "光鸭转存已提交",
      description:
        "名称: " +
        (entry.name || entry.code || hash) +
        "\n体积: " +
        (entry.size || "-") +
        "\n目录: " +
        (parentId || "根目录") +
        "\n保留文件: " +
        result.keptCount +
        "\n过滤: " +
        result.blockedCount +
        "\n\n已提交到光鸭云盘离线任务",
      link: link,
      coverUrl: entry.cover || undefined,
      backdropPath: entry.cover || undefined,
    };
  } catch (err) {
    return {
      id: hash,
      type: "url",
      title: "光鸭转存失败",
      description: String((err && err.message) || err || "未知错误"),
      link: link,
      coverUrl: entry.cover || undefined,
      backdropPath: entry.cover || undefined,
    };
  }
}


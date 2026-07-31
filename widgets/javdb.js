/**
 * JavDB ForwardWidget 模块
 * 抓取影片列表与详情（名称、横向封面、详情海报、剧照、简介）。
 */

var JAVDB_SORT_FILTER = [
  "published",
  "score",
  "fav",
  "published_download",
  "score_download",
  "fav_download",
];
var GLOBAL_PARAM_KEYS = ["baseUrl", "locale", "email", "password", "cookie"];

function syncGlobalParams(params) {
  params = params || {};
  for (var i = 0; i < GLOBAL_PARAM_KEYS.length; i++) {
    var key = GLOBAL_PARAM_KEYS[i];
    if (params[key] !== undefined && params[key] !== null && String(params[key]) !== "") {
      Widget.storage.set("javdb.global." + key, params[key]);
    }
  }
  return Object.assign({}, params, getEffectiveParams(params));
}

function getEffectiveParams(params) {
  params = params || {};
  var out = {};
  for (var i = 0; i < GLOBAL_PARAM_KEYS.length; i++) {
    var key = GLOBAL_PARAM_KEYS[i];
    if (params[key] !== undefined && params[key] !== null && String(params[key]) !== "") {
      out[key] = params[key];
    } else {
      var stored = Widget.storage.get("javdb.global." + key);
      if (stored !== undefined && stored !== null && String(stored) !== "") {
        out[key] = stored;
      }
    }
  }
  if (!out.baseUrl) out.baseUrl = JAVDB_DEFAULT_BASE;
  if (!out.locale) out.locale = "zh";
  return out;
}

/* @category-options-begin — tags/makers 精简保留；演员/系列枚举已移除 */
var JAVDB_TAG_OPTIONS = [
  { title: "中文字幕", value: "search:中文字幕" },
  { title: "VR", value: "search:VR" },
  { title: "巨乳", value: "search:巨乳" },
  { title: "美乳", value: "search:美乳" },
  { title: "中出", value: "search:中出" },
  { title: "颜射", value: "search:颜射" },
  { title: "口交", value: "search:口交" },
  { title: "人妻", value: "search:人妻" },
  { title: "熟女", value: "search:熟女" },
  { title: "学生", value: "search:學生" },
  { title: "OL", value: "search:OL" },
  { title: "护士", value: "search:护士" },
  { title: "教师", value: "search:教师" },
  { title: "NTR", value: "search:NTR" },
  { title: "SM", value: "search:SM" },
  { title: "调教", value: "search:调教" },
  { title: "屈辱", value: "search:屈辱" },
  { title: "无码流出", value: "search:无码流出" },
  { title: "连裤袜", value: "search:连裤袜" },
  { title: "素人", value: "search:素人" },
  { title: "FC2", value: "search:FC2" },
];

var JAVDB_MAKER_OPTIONS = [
  { title: "S1", value: "/makers/7R" },
  { title: "MOODYZ", value: "/makers/zKW" },
  { title: "创意口袋", value: "search:Ideapocket" },
  { title: "尊爵", value: "search:Prestige" },
  { title: "FALENO", value: "search:FALENO" },
  { title: "圣母", value: "search:Madonna" },
  { title: "SOD", value: "search:SOD" },
  { title: "攻击者", value: "search:Attackers" },
  { title: "E-BODY", value: "search:E-BODY" },
  { title: "可爱", value: "search:kawaii" },
  { title: "自然嗨", value: "search:Natural High" },
  { title: "HEYZO", value: "search:HEYZO" },
  { title: "万象工厂", value: "search:WANZ" },
  { title: "优质", value: "search:PREMIUM" },
  { title: "OPPAI", value: "search:OPPAI" },
  { title: "本中", value: "search:Honnaka" },
  { title: "Das!", value: "search:DASDAS" },
  { title: "本中", value: "search:本中" },
  { title: "维他命", value: "search:Vitamin" },
  { title: "爱丽丝日本", value: "search:Alice Japan" },
];

/* @category-options-end */
var JAVDB_TRAD_TO_SIMP = {
  體: "体",
  單: "单",
  婦: "妇",
  藝: "艺",
  職: "职",
  業: "业",
  類: "类",
  時: "时",
  長: "长",
  無: "无",
  碼: "码",
  標: "标",
  籤: "签",
  綠: "绿",
  綺: "绮",
  羅: "罗",
  亞: "亚",
  結: "结",
  檸: "柠",
  學: "学",
  師: "师",
  護: "护",
  臉: "脸",
  紗: "纱",
  愛: "爱",
  韻: "韵",
  齋: "斋",
  與: "与",
  國: "国",
  東: "东",
  專: "专",
  門: "门",
  開: "开",
  關: "关",
  來: "来",
  對: "对",
  這: "这",
  個: "个",
  們: "们",
  說: "说",
  話: "话",
  視: "视",
  頻: "频",
  發: "发",
  現: "现",
  網: "网",
  電: "电",
  動: "动",
  畫: "画",
  裡: "里",
  後: "后",
  為: "为",
  會: "会",
  過: "过",
  還: "还",
  進: "进",
  達: "达",
  運: "运",
  連: "连",
  遠: "远",
  選: "选",
  頭: "头",
  歲: "岁",
  從: "从",
  帶: "带",
  廣: "广",
  應: "应",
  變: "变",
  讓: "让",
  機: "机",
  樣: "样",
  雙: "双",
  雞: "鸡",
  馬: "马",
  魚: "鱼",
  鳥: "鸟",
  龍: "龙",
  車: "车",
  風: "风",
  雲: "云",
  點: "点",
  書: "书",
  買: "买",
  賣: "卖",
  貨: "货",
  質: "质",
  問: "问",
  題: "题",
  聽: "听",
  聲: "声",
  響: "响",
  顏: "颜",
  顯: "显",
  顧: "顾",
  飲: "饮",
  飯: "饭",
  養: "养",
  餘: "余",
  驚: "惊",
  驗: "验",
  髮: "发",
  鬥: "斗",
  魯: "鲁",
  鮮: "鲜",
  鳳: "凤",
  鹽: "盐",
  麗: "丽",
  麵: "面",
  黃: "黄",
  齊: "齐",
  齒: "齿",
  龜: "龟",
  歡: "欢",
  當: "当",
  將: "将",
  戲: "戏",
  戰: "战",
  極: "极",
  樂: "乐",
  歷: "历",
  歸: "归",
  難: "难",
  雜: "杂",
  離: "离",
  雖: "虽",
  靈: "灵",
  靜: "静",
  韓: "韩",
  頁: "页",
  預: "预",
  領: "领",
  顆: "颗",
  飛: "飞",
  餅: "饼",
  館: "馆",
  駕: "驾",
  驅: "驱",
  鬱: "郁",
  魷: "鱿",
  鳴: "鸣",
  鷹: "鹰",
  鹹: "咸",
  麼: "么",
  齡: "龄",
  黨: "党",
  戀: "恋",
  間: "间",
  浜: "滨",
  涼: "凉",
  歩: "步",
  彌: "弥",
  亜: "亚",
  沖: "冲",
  岡: "冈",
  蒼: "苍",
  絵: "绘",
  鈴: "铃",
  実: "实",
  楓: "枫",
  內: "内",
  兩: "两",
  兒: "儿",
  賽: "赛",
  鉤: "钩",
  異: "异",
  經: "经",
  總: "总",
  縣: "县",
  繼: "继",
  續: "续",
  纖: "纤",
  聯: "联",
  聰: "聪",
  腦: "脑",
  臨: "临",
  舊: "旧",
  華: "华",
  萬: "万",
  葉: "叶",
  著: "着",
  蔵: "藏",
  藍: "蓝",
  處: "处",
  號: "号",
  裝: "装",
  製: "制",
  複: "复",
  褲: "裤",
  見: "见",
  規: "规",
  覽: "览",
  觀: "观",
  訂: "订",
  計: "计",
  記: "记",
  設: "设",
  許: "许",
  試: "试",
  語: "语",
  誠: "诚",
  誤: "误",
  請: "请",
  談: "谈",
  論: "论",
  講: "讲",
  謝: "谢",
  證: "证",
  識: "识",
  譯: "译",
  議: "议",
  讀: "读",
  豐: "丰",
  貝: "贝",
  負: "负",
  財: "财",
  貧: "贫",
  販: "贩",
  責: "责",
  貴: "贵",
  費: "费",
  資: "资",
  賓: "宾",
  賞: "赏",
  賠: "赔",
  賢: "贤",
  賤: "贱",
  賬: "账",
  購: "购",
  贈: "赠",
  贊: "赞",
  贏: "赢",
  軟: "软",
  較: "较",
  載: "载",
  輕: "轻",
  輪: "轮",
  輸: "输",
  轉: "转",
  辦: "办",
  農: "农",
  迴: "回",
  違: "违",
  遺: "遗",
  邊: "边",
  鄉: "乡",
  醫: "医",
  釋: "释",
  針: "针",
  鋼: "钢",
  錄: "录",
  錢: "钱",
  錯: "错",
  鍵: "键",
  鎖: "锁",
  鏡: "镜",
  鐵: "铁",
  閃: "闪",
  閉: "闭",
  閒: "闲",
  閣: "阁",
  閱: "阅",
  闊: "阔",
  闡: "阐",
  陽: "阳",
  陰: "阴",
  陳: "陈",
  陸: "陆",
  隊: "队",
  階: "阶",
  隨: "随",
  險: "险",
  隱: "隐",
  霧: "雾",
  韋: "韦",
  頂: "顶",
  項: "项",
  順: "顺",
  須: "须",
  頒: "颁",
  頓: "顿",
  頗: "颇",
  額: "额",
  願: "愿",
  飄: "飘",
  飾: "饰",
  餃: "饺",
  駐: "驻",
  駛: "驶",
  騎: "骑",
  騙: "骗",
  騰: "腾",
  鬆: "松",
  鯨: "鲸",
  鴻: "鸿",
  鵝: "鹅",
  鶴: "鹤",
  麥: "麦",
  幹: "干",
  醜: "丑",
  獨: "独",
  獲: "获",
  產: "产",
  畢: "毕",
  疊: "叠",
  盡: "尽",
  監: "监",
  盤: "盘",
  確: "确",
  礎: "础",
  禮: "礼",
  種: "种",
  積: "积",
  穩: "稳",
  競: "竞",
  節: "节",
  範: "范",
  簡: "简",
  簽: "签",
  紀: "纪",
  紅: "红",
  純: "纯",
  紙: "纸",
  級: "级",
  細: "细",
  終: "终",
  組: "组",
  絕: "绝",
  絡: "络",
  給: "给",
  統: "统",
  絲: "丝",
  綜: "综",
  維: "维",
  緊: "紧",
  緣: "缘",
  編: "编",
  練: "练",
  縮: "缩",
  績: "绩",
  織: "织",
  繪: "绘",
  罰: "罚",
  義: "义",
  習: "习",
  聖: "圣",
  聞: "闻",
  聾: "聋",
  肅: "肃",
  脈: "脉",
  腸: "肠",
  膠: "胶",
  興: "兴",
  舉: "举",
  艷: "艳",
  莊: "庄",
  虧: "亏",
  衛: "卫",
  覺: "觉",
  觸: "触",
  訊: "讯",
  訪: "访",
  詞: "词",
  詩: "诗",
  該: "该",
  詳: "详",
  認: "认",
  誘: "诱",
  誌: "志",
  調: "调",
  諸: "诸",
  諾: "诺",
  謀: "谋",
  謂: "谓",
  謹: "谨",
  譜: "谱",
  警: "警",
  貓: "猫",
  貫: "贯",
  賀: "贺",
  賜: "赐",
  賦: "赋",
  賭: "赌",
  趙: "赵",
  跡: "迹",
  踐: "践",
  軸: "轴",
  輔: "辅",
  輩: "辈",
  轟: "轰",
  遊: "游",
  遙: "遥",
  遜: "逊",
  適: "适",
  邏: "逻",
  郵: "邮",
  鄭: "郑",
  鍾: "钟",
  鑑: "鉴",
  闆: "板",
  鬧: "闹",
  鴨: "鸭",
  圖: "图",
  圍: "围",
  園: "园",
  壓: "压",
  壞: "坏",
  壽: "寿",
  夢: "梦",
  奧: "奥",
  孫: "孙",
  寧: "宁",
  實: "实",
  寬: "宽",
  寫: "写",
  尋: "寻",
  導: "导",
  層: "层",
  屬: "属",
  島: "岛",
  巖: "岩",
  帰: "归",
  幾: "几",
  廢: "废",
  廳: "厅",
  彈: "弹",
  彥: "彦",
  徴: "征",
  復: "复",
  徹: "彻",
  徑: "径",
  惡: "恶",
  惱: "恼",
  懷: "怀",
  懸: "悬",
  戶: "户",
  擊: "击",
  擔: "担",
  據: "据",
  擴: "扩",
  擺: "摆",
  擾: "扰",
  攝: "摄",
  攤: "摊",
  攪: "搅",
  敗: "败",
  數: "数",
  斷: "断",
  於: "于",
  晉: "晋",
  條: "条",
  棄: "弃",
  棟: "栋",
  榮: "荣",
  樓: "楼",
  樹: "树",
  橋: "桥",
  檢: "检",
  權: "权",
  歐: "欧",
  殘: "残",
  殺: "杀",
  殼: "壳",
  氣: "气",
  決: "决",
  沒: "没",
  況: "况",
  測: "测",
  溫: "温",
  滿: "满",
  漢: "汉",
  潔: "洁",
  潤: "润",
  濃: "浓",
  濕: "湿",
  濟: "济",
  濱: "滨",
  濾: "滤",
  灣: "湾",
  熱: "热",
  燈: "灯",
  燒: "烧",
  營: "营",
  爭: "争",
  爺: "爷",
  獎: "奖",
  盧: "卢",
  眾: "众",
  睏: "困",
  祿: "禄",
  禍: "祸",
  禦: "御",
  穀: "谷",
  窮: "穷",
  簾: "帘",
  紛: "纷",
  緩: "缓",
  縱: "纵",
  繞: "绕",
  罷: "罢",
  艦: "舰",
  艱: "艰",
  薦: "荐",
  藏: "藏",
  螢: "萤",
  診: "诊",
  詢: "询",
  軌: "轨",
  爛: "烂",
  獵: "猎",
  蠻: "蛮",
  橫: "横",
  嬌: "娇",
  羞: "羞",
  僕: "仆",
  隸: "隶"
};

var JAVDB_MAKER_ALIAS = {
  "ケイ・エム・プロデュース": "KM Produce",
  "PRESTIGE,プレステージ": "Prestige",
  "マドンナ(Madonna)": "Madonna",
  "S1 NO.1 STYLE": "S1 NO.1 STYLE",
  "センタービレッジ": "Center Village",
  "クリスタル映像": "Crystal 映像",
  "ワンズファクトリー": "WANZ FACTORY",
  "プレミアム": "Premium",
  "ぎがdeれいん": "Giga",
  "溜池ゴロー": "溜池五郎",
  "本中": "本中",
  "ルビー": "Ruby",
  "パラダイステレビ": "Paradise TV",
  "アリスJAPAN": "Alice Japan",
  "ビッグモーカル": "Big Morkal",
  "シロウトTV": "素人TV",
  "ナチュラルハイ": "Natural High",
  "ディープス": "DEEP'S",
  "なでしこ": "Nadeshiko",
  Ideapocket: "IDEA POCKET",
  "IDEA POCKET": "IDEA POCKET",
  Honnaka: "本中",
  HONNAKA: "本中",
  DASDAS: "Das!",
  "Das!": "Das!",
  PREMIUM: "Premium",
  WANZ: "WANZ FACTORY",
  OPPAI: "OPPAI",
  Vitamin: "Vitamine",
  "Alice Japan": "Alice Japan",
  "Natural High": "Natural High",
  Attackers: "Attackers",
  kawaii: "kawaii",
  FALENO: "FALENO",
  MOODYZ: "MOODYZ",
  SOD: "SOD",
  "E-BODY": "E-BODY",
  HEYZO: "HEYZO"
};

var JAVDB_TAG_ALIAS = {
  單體作品: "单体作品",
  單體影片: "单体作品",
  有碼: "有码",
  無碼: "无码",
  含磁鏈: "含磁链",
  可播放: "可播放"
};

var JAVDB_LATIN_NAME = /^[A-Za-z0-9\s.\-&'!]+$/;

function javdbToSimplifiedChinese(text) {
  var out = "";
  var source = String(text || "");
  for (var i = 0; i < source.length; i++) {
    var ch = source.charAt(i);
    out += JAVDB_TRAD_TO_SIMP[ch] || ch;
  }
  return out;
}

function javdbTranslateMakerLabel(name) {
  name = String(name || "").replace(/\s+/g, " ").trim();
  if (!name) return "";
  if (JAVDB_MAKER_ALIAS[name]) return JAVDB_MAKER_ALIAS[name];
  var paren = name.match(/\(([^)]+)\)/);
  if (paren) return String(paren[1]).trim();
  var parts = name.split(/[,，、]/).map(function (s) { return s.trim(); }).filter(Boolean);
  if (parts.length > 1) {
    var latin = null;
    for (var i = 0; i < parts.length; i++) {
      if (JAVDB_LATIN_NAME.test(parts[i])) { latin = parts[i]; break; }
    }
    if (latin) return latin;
    for (var j = 0; j < parts.length; j++) {
      if (/[\u4e00-\u9fff]/.test(parts[j])) return javdbToSimplifiedChinese(parts[j]);
    }
  }
  if (JAVDB_LATIN_NAME.test(name)) return name;
  if (/[\u4e00-\u9fff]/.test(name)) return javdbToSimplifiedChinese(name);
  return name;
}

function javdbTranslateTagLabel(name) {
  name = String(name || "").replace(/\s+/g, " ").trim();
  if (!name) return "";
  if (JAVDB_TAG_ALIAS[name]) return JAVDB_TAG_ALIAS[name];
  var simp = javdbToSimplifiedChinese(name);
  if (JAVDB_TAG_ALIAS[simp]) return JAVDB_TAG_ALIAS[simp];
  return simp;
}

function javdbDetectLabelKind(pathOrId) {
  var path = String(pathOrId || "");
  if (path.indexOf("/makers/") >= 0 || /^maker:/i.test(path)) return "maker";
  if (path.indexOf("/tags") >= 0 || /^tags\//i.test(path)) return "tag";
  if (path.indexOf("search:") === 0) {
    var keyword = path.slice(7);
    if (/^(Ideapocket|Prestige|Madonna|FALENO|SOD|Attackers|E-?BODY|kawaii|Natural High|HEYZO|WANZ|PREMIUM|OPPAI|Honnaka|DASDAS|Vitamin|Alice Japan)$/i.test(keyword)) {
      return "maker";
    }
    return "tag";
  }
  return "";
}

function javdbTranslateLabelByPath(name, pathOrId) {
  var kind = javdbDetectLabelKind(pathOrId);
  if (kind === "maker") return javdbTranslateMakerLabel(name);
  if (kind === "tag") return javdbTranslateTagLabel(name);
  return javdbToSimplifiedChinese(name);
}


function firstEnumValue(options) {
  if (!options || !options.length) return "";
  for (var i = 0; i < options.length; i++) {
    if (options[i] && options[i].value) return options[i].value;
  }
  return "";
}

function categoryModuleParams(options) {
  var enumOptions = options.enumOptions || [];
  return [
    {
      name: options.paramName || "item",
      title: options.itemTitle || "选择分类",
      type: "enumeration",
      enumOptions: enumOptions,
      value: firstEnumValue(enumOptions),
    },
    {
      name: "sort_by",
      title: "\u4f5c\u54c1\u6392\u5e8f",
      type: "enumeration",
      enumOptions: [
        { title: "\u6700\u8fd1\u4e0a\u5e02", value: "published" },
        { title: "\u6700\u9ad8\u8bc4\u5206", value: "score" },
        { title: "\u6700\u591a\u6536\u85cf", value: "fav" },
        { title: "\u6700\u8fd1\u4e0a\u5e02(\u6709\u78c1\u529b)", value: "published_download" },
        { title: "\u6700\u9ad8\u8bc4\u5206(\u6709\u78c1\u529b)", value: "score_download" },
        { title: "\u6700\u591a\u6536\u85cf(\u6709\u78c1\u529b)", value: "fav_download" },
      ],
      value: "published",
    },
    { name: "page", title: "\u4f5c\u54c1\u9875\u7801", type: "page" },
  ];
}

WidgetMetadata = {
  id: "forward.javdb",
  title: "JavDB",
  version: "2.7.0",
  requiredVersion: "0.0.1",
  description: "JavDB 列表/排行榜（含 TOP250·热播，需登录）、标签/片商；支持账号密码或 Cookie",
  author: "老头",
  site: "https://github.com/InchStudio/ForwardWidgets",
  detailCacheDuration: 3600,
  globalParams: [
    {
      name: "baseUrl",
      title: "站点地址",
      type: "input",
      value: "https://javdb.com",
    },
    {
      name: "locale",
      title: "语言",
      type: "enumeration",
      enumOptions: [
        { title: "简体中文", value: "zh" },
        { title: "繁体中文", value: "tw" },
        { title: "English", value: "en" },
      ],
      value: "zh",
    },
    {
      name: "email",
      title: "账号/邮箱",
      type: "input",
      description: "登录 JavDB 账号（TOP250/热播等需登录）",
      value: "",
    },
    {
      name: "password",
      title: "密码",
      type: "input",
      description: "登录密码；若站点弹出验证码，请改用 Cookie",
      value: "",
    },
    {
      name: "cookie",
      title: "Cookie（可选）",
      type: "input",
      description: "浏览器登录后复制 Cookie（含 _jdb_session）；验证码时优先使用",
      value: "",
    },
  ],
  modules: [
    {
      id: "latest",
      title: "最新上架",
      functionName: "loadLatest",
      cacheDuration: 1800,
      params: [{ name: "page", title: "页码", type: "page", value: "1" }],
    },
    {
      id: "rankings",
      title: "排行榜",
      description: "日/周/月榜、热播、TOP250（后两项通常需登录）",
      functionName: "loadRankings",
      cacheDuration: 3600,
      params: [
        {
          name: "board",
          title: "榜单",
          type: "enumeration",
          enumOptions: [
            { title: "有码·日榜", value: "movies:censored:daily" },
            { title: "有码·周榜", value: "movies:censored:weekly" },
            { title: "有码·月榜", value: "movies:censored:monthly" },
            { title: "无码·日榜", value: "movies:uncensored:daily" },
            { title: "无码·周榜", value: "movies:uncensored:weekly" },
            { title: "无码·月榜", value: "movies:uncensored:monthly" },
            { title: "欧美·日榜", value: "movies:western:daily" },
            { title: "欧美·周榜", value: "movies:western:weekly" },
            { title: "欧美·月榜", value: "movies:western:monthly" },
            { title: "FC2·日榜", value: "movies:fc2:daily" },
            { title: "FC2·周榜", value: "movies:fc2:weekly" },
            { title: "FC2·月榜", value: "movies:fc2:monthly" },
            { title: "热播·日榜（需登录）", value: "playback::daily" },
            { title: "热播·周榜（需登录）", value: "playback::weekly" },
            { title: "热播·月榜（需登录）", value: "playback::monthly" },
            { title: "TOP250·全部（需登录）", value: "top::all" },
            { title: "TOP250·有码（需登录）", value: "top::0" },
            { title: "TOP250·无码（需登录）", value: "top::1" },
            { title: "TOP250·欧美（需登录）", value: "top::2" },
            { title: "TOP250·FC2（需登录）", value: "top::3" },
          ],
          value: "movies:censored:daily",
        },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      id: "movies",
      title: "影片分类",
      functionName: "loadMovies",
      cacheDuration: 1800,
      params: [
        {
          name: "path",
          title: "分类",
          type: "enumeration",
          enumOptions: [
            { title: "有码", value: "/censored" },
            { title: "无码", value: "/uncensored" },
          ],
          value: "/censored",
        },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      id: "tags",
      title: "标签",
      description: "按标签浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择标签",
        enumOptions: JAVDB_TAG_OPTIONS,
      }),
    },
    {
      id: "makers",
      title: "片商",
      description: "按片商浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择片商",
        enumOptions: JAVDB_MAKER_OPTIONS,
      }),
    },
  ],
  search: {
    title: "番号搜索",
    functionName: "searchJavdb",
    params: [
      { name: "keyword", title: "番号/关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" },
    ],
  },
};

var JAVDB_DEFAULT_BASE = "https://javdb.com";
var JAVDB_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
var HTML_FETCH_CACHE = {};
var HTML_FETCH_CACHE_TTL_MS = 3 * 60 * 1000;

function javdbBase(params) {
  var base = String((params && params.baseUrl) || JAVDB_DEFAULT_BASE).replace(/\/+$/, "");
  return base || JAVDB_DEFAULT_BASE;
}

function javdbLocale(params) {
  return String((params && params.locale) || "zh");
}

function javdbHeaders(params, cookieOverride) {
  var headers = {
    "User-Agent": JAVDB_UA,
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  };
  var cookie = cookieOverride !== undefined ? cookieOverride : readStoredJavdbCookie(params || {});
  if (cookie) headers.Cookie = cookie;
  var locale = javdbLocale(params);
  if (locale) headers.Cookie = mergeCookieHeader(headers.Cookie || "", ["locale=" + locale, "over18=1"]);
  return headers;
}

var JAVDB_COOKIE_STORAGE_KEY = "javdb.global.sessionCookie";
var JAVDB_LOGIN_INFLIGHT = null;

function getHeaderValue(res, name) {
  if (!res) return "";
  var headers = res.headers || res.header || res.responseHeaders || {};
  if (!headers) return "";
  var lower = String(name).toLowerCase();
  for (var k in headers) {
    if (String(k).toLowerCase() === lower) {
      var v = headers[k];
      return Array.isArray(v) ? String(v.join ? v.join("\n") : v[0] || "") : String(v || "");
    }
  }
  return "";
}

function collectSetCookiePairs(res) {
  var raw = getHeaderValue(res, "set-cookie") || getHeaderValue(res, "Set-Cookie");
  if (!raw && res && res.cookies) {
    if (typeof res.cookies === "string") raw = res.cookies;
    else if (Array.isArray(res.cookies)) raw = res.cookies.join("\n");
  }
  if (!raw) return [];
  return String(raw)
    .split(/\r?\n|,\s*(?=[A-Za-z0-9_\-]+=)/)
    .map(function (line) {
      return String(line || "").split(";")[0].trim();
    })
    .filter(function (pair) {
      return pair && pair.indexOf("=") > 0;
    });
}

function mergeCookieHeader(existing, pairs) {
  var map = {};
  function put(chunk) {
    chunk = String(chunk || "").trim();
    if (!chunk || chunk.indexOf("=") < 0) return;
    var name = chunk.split("=")[0].trim();
    if (!name) return;
    map[name] = chunk;
  }
  String(existing || "")
    .split(";")
    .forEach(function (part) {
      put(part);
    });
  (pairs || []).forEach(put);
  return Object.keys(map)
    .map(function (k) {
      return map[k];
    })
    .join("; ");
}

function readStoredJavdbCookie(params) {
  params = params || {};
  var fromParam = String(params.cookie || "").trim();
  if (fromParam) return fromParam;
  try {
    var stored = Widget.storage.get(JAVDB_COOKIE_STORAGE_KEY);
    if (stored) return String(stored).trim();
  } catch (err) {}
  return "";
}

function saveJavdbCookie(cookie) {
  cookie = String(cookie || "").trim();
  if (!cookie) return;
  try {
    Widget.storage.set(JAVDB_COOKIE_STORAGE_KEY, cookie);
  } catch (err) {}
}

function clearJavdbCookie() {
  try {
    Widget.storage.set(JAVDB_COOKIE_STORAGE_KEY, "");
  } catch (err) {}
}

function isLoginRequiredHtml(html) {
  var text = String(html || "");
  if (!text) return false;
  if (/此內容需要登入|此内容需要登录|需要登录|需要登入才能查看|請先登入|请先登录/i.test(text) && !/movie-list|href="\/v\//i.test(text)) {
    return true;
  }
  if (/action=["']\/user_sessions["']/i.test(text) && !/movie-list|href="\/v\//i.test(text)) return true;
  return false;
}

function pathRequiresLogin(path) {
  var clean = String(path || "").split("?")[0];
  return clean.indexOf("/rankings/top") === 0 || clean.indexOf("/rankings/playback") === 0;
}

function extractAuthenticityToken(html) {
  var m =
    String(html || "").match(/name=["']authenticity_token["'][^>]*value=["']([^"']+)["']/i) ||
    String(html || "").match(/value=["']([^"']+)["'][^>]*name=["']authenticity_token["']/i);
  return m ? m[1] : "";
}

function loginFormHasCaptcha(html) {
  return /name=["']_rucaptcha["']/i.test(String(html || ""));
}

async function httpPostForm(url, body, params, cookie) {
  var headers = javdbHeaders(params, cookie);
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  headers.Origin = javdbBase(params);
  headers.Referer = javdbBase(params) + "/login";
  var payload = typeof body === "string" ? body : "";
  var res;
  if (Widget.http.post) {
    res = await Widget.http.post(url, { headers: headers, body: payload, allow_redirects: true });
  } else if (Widget.http.request) {
    res = await Widget.http.request({ url: url, method: "POST", headers: headers, body: payload, allow_redirects: true });
  } else {
    throw new Error("当前环境不支持 POST，请改用 Cookie 登录");
  }
  return res;
}

function encodeForm(data) {
  var parts = [];
  Object.keys(data || {}).forEach(function (key) {
    parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(data[key] == null ? "" : data[key])));
  });
  return parts.join("&");
}

async function loginJavdbWithPassword(params, options) {
  options = options || {};
  params = params || {};
  var email = String(params.email || "").trim();
  var password = String(params.password || "").trim();
  if (!email || !password) {
    throw new Error("请在全局参数填写账号和密码，或直接粘贴 Cookie");
  }

  var base = javdbBase(params);
  var loginUrl = base + "/login";
  var seedCookie = options.ignoreCookie ? "" : readStoredJavdbCookie(params);
  var loginPage = await Widget.http.get(loginUrl, {
    headers: javdbHeaders(params, seedCookie),
    allow_redirects: true,
  });
  var html = loginPage && loginPage.data ? String(loginPage.data) : "";
  if (!html) throw new Error("无法打开登录页");
  if (/just a moment|cf-browser-verification|challenge-platform/i.test(html)) {
    throw new Error("登录页被 Cloudflare 拦截，请稍后重试或粘贴浏览器 Cookie");
  }

  var cookie = mergeCookieHeader(seedCookie, collectSetCookiePairs(loginPage));
  var token = extractAuthenticityToken(html);
  if (!token) throw new Error("未取得登录 CSRF，站点结构可能已变更");

  if (loginFormHasCaptcha(html)) {
    if (!options.forceLogin && seedCookie && /_jdb_session=/i.test(seedCookie)) {
      return seedCookie;
    }
    throw new Error("站点登录需要验证码。请在浏览器登录后，把 Cookie（含 _jdb_session）粘贴到全局参数「Cookie」");
  }

  var res = await httpPostForm(
    base + "/user_sessions",
    encodeForm({
      authenticity_token: token,
      email: email,
      password: password,
      _rucaptcha: "",
      remember: "1",
      commit: "Sign in",
    }),
    params,
    cookie
  );
  cookie = mergeCookieHeader(cookie, collectSetCookiePairs(res));
  var body = res && res.data ? String(res.data) : "";
  var finalUrl = String((res && (res.url || res.finalUrl || res.requestUrl)) || "");
  var stillLogin =
    /action=["']\/user_sessions["']/i.test(body) ||
    /\/login/i.test(finalUrl) ||
    isLoginRequiredHtml(body);

  if (stillLogin || !/_jdb_session=/i.test(cookie)) {
    throw new Error("账号登录失败，请检查账号密码，或粘贴浏览器 Cookie");
  }
  saveJavdbCookie(cookie);
  return cookie;
}

async function ensureJavdbSession(params, options) {
  options = options || {};
  params = params || {};
  var cookie = readStoredJavdbCookie(params);
  if (cookie && !options.forceLogin) {
    return cookie;
  }
  if (options.allowAnonymous && !params.email && !params.password && !cookie) {
    return "";
  }
  if (!String(params.email || "").trim() && !String(params.password || "").trim()) {
    if (cookie) return cookie;
    throw new Error("该内容需要登录：请填写账号密码，或粘贴含 _jdb_session 的 Cookie");
  }
  if (JAVDB_LOGIN_INFLIGHT) return JAVDB_LOGIN_INFLIGHT;
  JAVDB_LOGIN_INFLIGHT = loginJavdbWithPassword(params, {
    forceLogin: !!options.forceLogin,
    ignoreCookie: !!options.forceLogin,
  })
    .catch(function (err) {
      if (cookie && !options.forceLogin) return cookie;
      throw err;
    })
    .finally(function () {
      JAVDB_LOGIN_INFLIGHT = null;
    });
  return JAVDB_LOGIN_INFLIGHT;
}



function readHtmlFetchCache(url) {
  var entry = HTML_FETCH_CACHE[url];
  if (!entry || !entry.html) return null;
  if (Date.now() - Number(entry.at || 0) > HTML_FETCH_CACHE_TTL_MS) {
    delete HTML_FETCH_CACHE[url];
    return null;
  }
  return entry.html;
}

function writeHtmlFetchCache(url, html) {
  if (!url || !html) return;
  HTML_FETCH_CACHE[url] = { html: html, at: Date.now() };
}

function absUrl(url, base) {
  if (!url) return "";
  var value = String(url).trim();
  if (!value) return "";
  if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
  if (value.indexOf("//") === 0) return "https:" + value;
  if (value.indexOf("/") === 0) return base + value;
  return base + "/" + value;
}

function buildPageUrl(base, path, params) {
  var locale = javdbLocale(params);
  var page = Number(params.page || 1);
  var url = base + path;
  var query = [];
  if (locale) query.push("locale=" + encodeURIComponent(locale));
  if (page > 1) query.push("page=" + page);
  if (query.length) {
    url += (url.indexOf("?") >= 0 ? "&" : "?") + query.join("&");
  }
  return url;
}

function encodeLink(pathOrUrl) {
  return "javdb:" + String(pathOrUrl || "");
}

function decodeLink(link) {
  var raw = String(link || "");
  if (raw.indexOf("javdb:") === 0) return raw.slice(6);
  return raw;
}

function normalizeVideoDetailPath(link) {
  var raw = String(link || "").trim();
  if (!raw) return "";
  var decoded = decodeLink(raw);
  if (!decoded) return "";
  if (decoded.indexOf("http://") === 0 || decoded.indexOf("https://") === 0) {
    decoded = extractPath(decoded, JAVDB_DEFAULT_BASE);
  }
  if (decoded.indexOf("/v/") === 0) return decoded.split("#")[0];
  var embedded = decoded.match(/\/v\/[A-Za-z0-9]+/);
  if (embedded) return embedded[0].split("#")[0];
  if (/^[a-z0-9]{3,20}$/i.test(decoded)) return "/v/" + decoded;
  return "";
}

function resolveDetailPath(link, params) {
  var raw = String(link || "").trim();
  if (!raw) return "";
  var videoPath = normalizeVideoDetailPath(raw);
  if (videoPath) return videoPath;

  var decoded = decodeLink(raw);
  if (!decoded) return "";
  if (decoded.indexOf("http://") === 0 || decoded.indexOf("https://") === 0) {
    return extractPath(decoded, javdbBase(params));
  }
  if (decoded.charAt(0) === "/") return decoded.split("#")[0];
  return decoded;
}

function extractPath(url, base) {
  var value = decodeLink(url);
  if (!value) return "";
  if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) {
    return value.replace(base, "");
  }
  if (value.charAt(0) !== "/") return "/" + value;
  return value;
}

function detailPageUrl(pathOrLink, params) {
  var base = javdbBase(params);
  var path = extractPath(pathOrLink, base);
  var url = absUrl(path, base);
  var locale = javdbLocale(params);
  if (locale && url.indexOf("locale=") < 0) {
    url += (url.indexOf("?") >= 0 ? "&" : "?") + "locale=" + encodeURIComponent(locale);
  }
  return url;
}

function appendPageUrlToDescription(description, pageUrl) {
  var base = String(description || "").replace(/\s+/g, " ").trim();
  var footer = "JavDB 链接：" + pageUrl;
  if (!pageUrl) return base;
  if (base.indexOf(pageUrl) >= 0) return base;
  return base ? base + "\n\n" + footer : footer;
}

function sanitizeDetailOutput(item) {
  if (!item || typeof item !== "object") return item;
  if ("relatedItems" in item) delete item.relatedItems;
  if ("recommendations" in item) delete item.recommendations;
  if ("childItems" in item) delete item.childItems;
  return item;
}

function normalizePath(href, base) {
  if (!href) return "";
  var path = href.indexOf("http") === 0 ? href.replace(base, "") : href;
  if (path.charAt(0) !== "/") path = "/" + path;
  return path.split("#")[0];
}

function normalizeCategoryPath(path) {
  var value = String(path || "").split("#")[0].trim();
  if (!value) return "";
  if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) {
    value = value.replace(/^https?:\/\/[^/]+/, "");
  }
  if (value.charAt(0) !== "/") value = "/" + value;
  return value;
}

function stripCountSuffix(title) {
  return String(title || "")
    .replace(/\(\d+\)\s*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveGenreReferencePath(raw) {
  var genreId = String(raw || "").trim();
  if (!genreId) return "";
  genreId = parseCategoryParamRef(genreId).id;
  if (genreId.indexOf(DETAIL_SEARCH_PREFIX) === 0) return "";
  if (genreId.indexOf("series:") === 0) {
    return normalizeCategoryPath("/series/" + genreId.slice(7));
  }
  if (genreId.indexOf("maker:") === 0) {
    return normalizeCategoryPath("/makers/" + genreId.slice(6));
  }
  if (genreId.indexOf("/series/") === 0 || genreId.indexOf("series/") === 0) {
    return normalizeCategoryPath(genreId.charAt(0) === "/" ? genreId : "/" + genreId);
  }
  if (genreId.indexOf("/makers/") === 0 || genreId.indexOf("makers/") === 0) {
    return normalizeCategoryPath(genreId.charAt(0) === "/" ? genreId : "/" + genreId);
  }
  if (genreId.indexOf("/tags") === 0 || genreId.indexOf("tags") === 0) {
    return normalizeCategoryPath(genreId.charAt(0) === "/" ? genreId : "/" + genreId);
  }
  if (genreId.indexOf("/actors/") === 0) return "";
  if (genreId.indexOf("http://") === 0 || genreId.indexOf("https://") === 0) {
    return normalizeCategoryPath(genreId);
  }
  if (genreId.charAt(0) === "/") return normalizeCategoryPath(genreId);
  return normalizeCategoryPath("/" + genreId);
}

function resolveFilteredPath(params, fallbackPath) {
  params = params || {};
  var genrePath = resolveGenreReferencePath(params.genreId);
  if (genrePath) return genrePath;

  if (params.peopleId) {
    var actorId = String(params.peopleId).replace(/^\/actors\//, "").split(/[/?#]/)[0];
    if (actorId) return "/actors/" + actorId;
  }
  if (params.seriesId) {
    var seriesId = String(params.seriesId).replace(/^\/series\//, "").split(/[/?#]/)[0];
    if (seriesId) return "/series/" + seriesId;
  }
  if (params.makerId) {
    var makerId = String(params.makerId).replace(/^\/makers\//, "").split(/[/?#]/)[0];
    if (makerId) return "/makers/" + makerId;
  }
  return fallbackPath;
}

function syncCategoryParams(params) {
  params = syncGlobalParams(params || {});
  var item = String(params.item || "").trim();
  if (item && !params.genreId && !params.peopleId) {
    var itemRef = parseCategoryParamRef(item);
    if (item.indexOf("/actors/") === 0 || itemRef.id.indexOf("/actors/") === 0) {
      params.peopleId = itemRef.id.split("/").pop();
    } else {
      params.genreId = itemRef.id;
    }
    if (itemRef.title) params.categoryTitle = itemRef.title;
  }
  if (params.genreId) {
    var genreRef = parseCategoryParamRef(params.genreId);
    params.genreId = genreRef.id;
    if (genreRef.title) params.categoryTitle = genreRef.title;
  }
  if (params.peopleId) {
    var peopleRef = parseCategoryParamRef(params.peopleId);
    params.peopleId = peopleRef.id;
    if (peopleRef.title) params.categoryTitle = peopleRef.title;
  }
  if (params.peopleId && String(params.peopleId).indexOf("/actors/") === 0) {
    params.peopleId = String(params.peopleId).split("/").pop();
  }
  if (params.genreId && String(params.genreId).indexOf("/actors/") === 0) {
    params.peopleId = String(params.genreId).split("/").pop();
    params.genreId = "";
  }
  if (
    params.peopleId &&
    String(params.peopleId).indexOf(DETAIL_SEARCH_PREFIX) !== 0 &&
    String(params.genreId || "").indexOf(DETAIL_SEARCH_PREFIX) === 0
  ) {
    params.genreId = "";
  }
  return params;
}

var DETAIL_SEARCH_PREFIX = "search:";
var CATEGORY_ID_TITLE_SEP = "~";

function buildDetailSearchId(title) {
  var text = String(title || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  return DETAIL_SEARCH_PREFIX + text;
}

function parseCategoryParamRef(raw) {
  raw = String(raw || "");
  var sep = raw.indexOf(CATEGORY_ID_TITLE_SEP);
  if (sep < 0) return { id: raw, title: "" };
  var title = raw.slice(sep + 1);
  try {
    title = decodeURIComponent(title);
  } catch (err) {
    title = raw.slice(sep + 1);
  }
  return { id: raw.slice(0, sep), title: title };
}

function isValidCategoryBrowsePath(path) {
  path = normalizeCategoryPath(String(path || "").split("#")[0]);
  if (!path) return false;
  var match;
  if ((match = path.match(/^\/actors\/([^/?#]+)/))) {
    return !/^(censored|uncensored|western)$/i.test(match[1]);
  }
  if ((match = path.match(/^\/tags\/([^/?#]+)/))) return !!match[1];
  if (path.indexOf("/tags?") === 0 || path === "/tags") return false;
  if ((match = path.match(/^\/series\/([^/?#]+)/))) return !!match[1];
  if (/^\/series\/?(\?|$)/.test(path)) return false;
  if ((match = path.match(/^\/makers\/([^/?#]+)/))) return !!match[1];
  return false;
}

function resolveCategorySearchFallback(params, categoryPath) {
  params = params || {};
  if (params.categoryTitle) {
    var labeled = normalizeSearchKeyword(params.categoryTitle) || String(params.categoryTitle).trim();
    if (labeled) return labeled;
  }

  var fields = [params.genreTitle, params.peopleTitle, params.filterTitle, params.item, params.title, params.name];
  for (var i = 0; i < fields.length; i++) {
    var text = String(fields[i] == null ? "" : fields[i]).replace(/\s+/g, " ").trim();
    if (!text) continue;
    if (text.indexOf("/") === 0 || text.indexOf(DETAIL_SEARCH_PREFIX) === 0) continue;
    if (text.indexOf(CATEGORY_ID_TITLE_SEP) >= 0) continue;
    if (/^(actors|tags|makers|series):/i.test(text)) continue;
    var normalized = normalizeSearchKeyword(text);
    if (normalized) return normalized;
    if (text.length >= 2) return text;
  }

  var lookup = lookupCategoryOptionTitle(categoryPath);
  if (lookup) return lookup;

  if (params.peopleId) {
    lookup = lookupCategoryOptionTitle("/actors/" + String(params.peopleId).replace(/^\/actors\//, ""));
    if (lookup) return lookup;
  }
  if (params.genreId) {
    lookup = lookupCategoryOptionTitle(String(params.genreId));
    if (lookup) return lookup;
  }

  var cleanPath = normalizeCategoryPath(categoryPath).split("?")[0];
  var slug = cleanPath.split("/").pop() || "";
  if (slug && !/^(censored|uncensored|western|tags|series|makers|actors)$/i.test(slug)) {
    var makerGuess = legacyMakerSlugToSearchKeyword(slug);
    if (makerGuess) return javdbTranslateMakerLabel(makerGuess);
    if (/^[a-z0-9-]+$/i.test(slug)) return javdbTranslateMakerLabel(slug.replace(/-/g, " "));
  }
  if (cleanPath.indexOf("/tags/") === 0) {
    var tagSlug = cleanPath.split("/").pop() || "";
    try { tagSlug = decodeURIComponent(tagSlug); } catch (err2) {}
    if (tagSlug) return javdbTranslateTagLabel(tagSlug);
  }
  return "";
}

function resolveDetailJumpKeyword(params) {
  params = params || {};
  var genreId = String(params.genreId || "").trim();
  var peopleId = String(params.peopleId || "").trim();
  if (peopleId.indexOf(DETAIL_SEARCH_PREFIX) === 0) {
    return peopleId.slice(DETAIL_SEARCH_PREFIX.length);
  }
  if (genreId.indexOf(DETAIL_SEARCH_PREFIX) === 0) {
    return genreId.slice(DETAIL_SEARCH_PREFIX.length);
  }
  return "";
}

async function fetchSearchMovieList(params, keyword) {
  keyword = normalizeSearchKeyword(keyword);
  if (!keyword) throw new Error("请输入搜索关键词");
  var base = javdbBase(params);
  var url =
    base +
    "/search?q=" +
    encodeURIComponent(keyword) +
    "&f=all&locale=" +
    encodeURIComponent(javdbLocale(params));
  var page = Number(params.page || 1);
  if (page > 1) url += "&page=" + page;
  var html = await fetchHtml(url, params);
  var items = await enrichMovieItems(parseListItems(html, params), params);
  if (!items.length) throw new Error("未找到相关影片");
  return items;
}

function extractMatchCode(text) {
  var s = String(text || "").trim();
  if (!s) return "";
  s = s.toUpperCase();
  s = s.replace(/^[A-Z0-9]+(?:\.[A-Z0-9]+)+@/, "");
  s = s.replace(/^(?:HHD800|HHB800)[_\-@.\s]?/, "");
  var normalized = s.replace(/_/g, "-").replace(/\s+/g, " ").trim();
  var patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?(\d{5,8})\b/,
    /\bCARIB[- ]?(\d{6,8})\b/,
    /\b1PONDO[- ]?(\d{6,8})\b/,
    /\bHEYZO[- ]?(\d{3,6})\b/,
    /\bT28[- ]?(\d{6,8})\b/,
    /\b([A-Z]{2,15})[- ]?(\d{1,10})\b/,
    /\b(\d{6}[-_]\d{2,3})\b/,
  ];
  for (var i = 0; i < patterns.length; i++) {
    var match = normalized.match(patterns[i]);
    if (!match) continue;
    if (match[1] && match[2]) return match[1] + "-" + match[2];
    if (match[1]) return match[1].replace(/\s+/g, "");
  }
  return "";
}

function normalizeMatchCode(text) {
  var code = extractMatchCode(text);
  if (!code) {
    var raw = String(text || "").trim();
    if (!raw) return "";
    var direct = raw.toUpperCase().match(/^([A-Z0-9]+)-(\d+)$/);
    if (direct) code = direct[1] + "-" + direct[2];
    else return raw;
  }
  var parts = code.match(/^([A-Z0-9]+)-(\d+)$/i);
  if (!parts) return code;
  var num = parts[2];
  while (num.length < 3) num = "0" + num;
  return parts[1] + "-" + num;
}

function resolveMatchCode() {
  var best = "";
  for (var i = 0; i < arguments.length; i++) {
    var normalized = normalizeMatchCode(arguments[i]);
    if (!normalized) continue;
    if (!best) {
      best = normalized;
      continue;
    }
    var numBest = (best.match(/-(\d+)$/i) || [])[1] || "";
    var numNew = (normalized.match(/-(\d+)$/i) || [])[1] || "";
    if (numNew.length > numBest.length) best = normalized;
  }
  return best;
}

function extractJavCode(text) {
  return normalizeMatchCode(text);
}

function normalizeSearchKeyword(keyword) {
  var text = String(keyword || "").trim();
  if (!text) return "";
  return extractJavCode(text) || text;
}

function buildGuangyaMatchFields(rawCode, rawTitle, description) {
  var matchCode = resolveMatchCode(rawCode, rawTitle, description);
  rawTitle = String(rawTitle || "").replace(/\s+/g, " ").trim();
  description = String(description || "").replace(/\s+/g, " ").trim();
  var fields = {};
  if (matchCode) {
    fields.name = matchCode;
    fields.seriesName = matchCode;
    fields.episodeName = matchCode;
  }
  if (rawTitle) fields.originalTitle = rawTitle;
  if (matchCode && description && description.toUpperCase().indexOf(matchCode.toUpperCase()) < 0) {
    fields.description = matchCode + " " + description;
  } else if (description) {
    fields.description = description;
  } else if (matchCode) {
    fields.description = matchCode;
  }
  return fields;
}

function formatDisplayTitle(code, title) {
  code = String(code || "").trim();
  title = String(title || "").replace(/\s+/g, " ").trim();
  if (!code) return title;
  if (!title) return code;
  var upperTitle = title.toUpperCase();
  var upperCode = code.toUpperCase();
  var looseCode = upperCode.replace(/[^A-Z0-9]/g, "");
  var looseTitlePrefix = upperTitle.replace(/[^A-Z0-9]/g, "");
  if (upperTitle.indexOf(upperCode) === 0) {
    title = title.slice(code.length).replace(/^[\s\-–—:]+/, "").trim();
  } else if (looseTitlePrefix.indexOf(looseCode) === 0) {
    title = title.replace(/^[\s\-–—:]*/, "").replace(new RegExp("^" + code.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "i"), "").trim();
  }
  return title ? code + " " + title : code;
}

var MGSTAGE_COVER_RULES = {
  ABF: { maker: "prestige" },
  ABW: { maker: "prestige" },
  ABP: { maker: "prestige" },
  CHN: { maker: "prestige" },
  MAAN: { maker: "prestige" },
  PPT: { maker: "prestige" },
  "390JAC": { maker: "jackson" },
};

function getMgstageCoverRule(parts) {
  if (!parts) return null;
  return MGSTAGE_COVER_RULES[parts.prefix] || null;
}

function compactUniqueUrls(urls) {
  var seen = {};
  var result = [];
  for (var i = 0; i < (urls || []).length; i++) {
    var value = String(urls[i] || "").trim();
    if (!value || seen[value]) continue;
    seen[value] = true;
    result.push(value);
  }
  return result;
}

var DMM_MONO_PLAIN_PREFIXES = {
  IESP: 1,
};

var DMM_PROBE_WORKER_BASE = "https://dmm.laotou.ccwu.cc";
var DMM_PROBE_WORKER_CACHE = {};
var DMM_PROBE_WORKER_TIMEOUT_MS = 8000;
var DMM_PROBE_BATCH_SIZE = 20;
var DMM_PROBE_BATCH_TIMEOUT_MS = 10000;
var DMM_PROBE_STORAGE_PREFIX = "javdb.dmmProbe.v1.";
var DMM_PROBE_STORAGE_TTL_OK_MS = 60 * 24 * 3600 * 1000;
var DMM_PROBE_STORAGE_TTL_FAIL_MS = 14 * 24 * 3600 * 1000;

var DMM_CONTENT_ID_OVERRIDES = {};

function dmmProbeStorageKey(code) {
  return DMM_PROBE_STORAGE_PREFIX + String(code || "").trim().toUpperCase();
}

function loadDmmProbeFromStorage(code) {
  code = String(code || "").trim().toUpperCase();
  if (!code) return undefined;
  try {
    var raw = Widget.storage.get(dmmProbeStorageKey(code));
    if (!raw) return undefined;
    var entry = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!entry || !entry.savedAt) return undefined;
    var ttl = entry.ok ? DMM_PROBE_STORAGE_TTL_OK_MS : DMM_PROBE_STORAGE_TTL_FAIL_MS;
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
  var entry = {
    ok: !!probe,
    savedAt: Date.now(),
  };
  if (probe) {
    entry.contentId = probe.contentId || "";
    entry.posterUrl = probe.posterUrl || "";
    entry.backdropUrl = probe.backdropUrl || "";
  }
  Widget.storage.set(dmmProbeStorageKey(code), JSON.stringify(entry));
}

function getDmmProbeWorkerBase(params) {
  params = params || {};
  var base = params.dmmProbeWorker;
  if (!base) {
    var stored = Widget.storage.get("javdb.global.dmmProbeWorker");
    if (stored) base = stored;
  }
  if (!base) base = DMM_PROBE_WORKER_BASE;
  return String(base || "").replace(/\/+$/, "");
}

function getDmmProbeWorkerHeaders(params) {
  var headers = { Accept: "application/json" };
  var key = params && params.dmmProbeApiKey;
  if (!key) key = Widget.storage.get("javdb.global.dmmProbeApiKey");
  if (key) headers["X-Probe-Key"] = String(key);
  return headers;
}

function parseDmmProbeWorkerResponse(res) {
  if (!res || res.data === undefined || res.data === null) {
    return { probe: undefined, knownMiss: false };
  }
  var status = Number(res.status || res.statusCode || 0);
  if (status >= 400) return { probe: undefined, knownMiss: false };
  try {
    var data = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
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
  if (!isValidJavCatalogCode(code)) {
    DMM_PROBE_WORKER_CACHE[code] = null;
    return null;
  }
  if (Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) {
    return DMM_PROBE_WORKER_CACHE[code];
  }

  var stored = loadDmmProbeFromStorage(code);
  if (stored !== undefined) {
    DMM_PROBE_WORKER_CACHE[code] = stored;
    return stored;
  }

  var parts = parseJavCodeParts(code);
  if (!parts || getMgstageCoverRule(parts)) {
    DMM_PROBE_WORKER_CACHE[code] = null;
    return null;
  }

  var base = getDmmProbeWorkerBase(params);
  if (!base) {
    DMM_PROBE_WORKER_CACHE[code] = null;
    return null;
  }

  try {
    var url = base + "/cover?code=" + encodeURIComponent(code);
    var res = await Widget.http.get(url, {
      headers: getDmmProbeWorkerHeaders(params),
      timeout: DMM_PROBE_WORKER_TIMEOUT_MS,
      allow_redirects: true,
    });
    var parsed = parseDmmProbeWorkerResponse(res);
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
  var pending = [];
  var seen = {};
  for (var i = 0; i < (codes || []).length; i++) {
    var code = String(codes[i] || "").trim().toUpperCase();
    if (!code || seen[code]) continue;
    seen[code] = true;
    if (!isValidJavCatalogCode(code)) {
      DMM_PROBE_WORKER_CACHE[code] = null;
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) continue;
    var storedProbe = loadDmmProbeFromStorage(code);
    if (storedProbe !== undefined) {
      DMM_PROBE_WORKER_CACHE[code] = storedProbe;
      continue;
    }
    var parts = parseJavCodeParts(code);
    if (!parts || getMgstageCoverRule(parts)) {
      DMM_PROBE_WORKER_CACHE[code] = null;
      continue;
    }
    pending.push(code);
  }
  if (!pending.length) return;

  var base = getDmmProbeWorkerBase(params);
  if (!base) return;

  var batchSize = DMM_PROBE_BATCH_SIZE || 20;
  for (var start = 0; start < pending.length; start += batchSize) {
    var chunk = pending.slice(start, start + batchSize);
    var ok = await fetchDmmProbeCoverBatch(chunk, params);
    if (!ok) {
      // 批量失败不再串行单号回退（最坏可达数分钟）；列表用本地/CDN 封面兜底
      for (var j = 0; j < chunk.length; j++) {
        if (!Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, chunk[j])) {
          DMM_PROBE_WORKER_CACHE[chunk[j]] = null;
        }
      }
    }
  }
}

function applyDmmProbeBatchResults(data, requestedCodes) {
  var byCode = {};
  var results = data && data.results;
  if (!Array.isArray(results)) return false;
  for (var i = 0; i < results.length; i++) {
    var row = results[i];
    var code = String((row && row.code) || "")
      .trim()
      .toUpperCase();
    if (!code) continue;
    if (row && row.ok && row.best) {
      byCode[code] = {
        contentId: String(row.best.contentId || ""),
        posterUrl: String(row.best.posterUrl || ""),
        backdropUrl: String(row.best.backdropUrl || ""),
      };
    } else {
      byCode[code] = null;
    }
  }
  for (var j = 0; j < (requestedCodes || []).length; j++) {
    var c = requestedCodes[j];
    if (!Object.prototype.hasOwnProperty.call(byCode, c)) continue;
    DMM_PROBE_WORKER_CACHE[c] = byCode[c];
    saveDmmProbeToStorage(c, byCode[c]);
  }
  return true;
}

async function fetchDmmProbeCoverBatch(codes, params) {
  var list = codes || [];
  if (!list.length) return true;
  var base = getDmmProbeWorkerBase(params);
  if (!base) return false;
  try {
    var headers = getDmmProbeWorkerHeaders(params);
    headers["Content-Type"] = "application/json";
    headers.Accept = "application/json";
    var res = await Widget.http.post(
      base + "/probe",
      { codes: list, force: false, variants: false },
      {
        headers: headers,
        timeout: DMM_PROBE_BATCH_TIMEOUT_MS,
        allow_redirects: true,
      }
    );
    if (!res || res.data === undefined || res.data === null) return false;
    var status = Number(res.status || res.statusCode || 0);
    if (status >= 400) return false;
    var data = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
    return applyDmmProbeBatchResults(data, list);
  } catch (err) {
    console.error(
      "[javdb] DMM batch probe failed:",
      err && err.message ? err.message : err
    );
    return false;
  }
}

function lookupDmmProbeCover(code) {
  code = String(code || "").trim().toUpperCase();
  if (!code || !Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) return null;
  return DMM_PROBE_WORKER_CACHE[code];
}

// DMM contentId 数字前缀映射（对齐 MissAV.js / 各 Widget 脚本，修改时请同步）
var DMM_CONTENT_PREFIX_MAP = {
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
  NACT: "h_237",
  "3DSVR": "1",
};

function normalizeDmmPrefix(prefix) {
  var p = String(prefix || "").toUpperCase();
  if (p === "REBDB") return "REBD";
  return p;
}

function buildDmmContentIdFromParts(parts) {
  if (!parts) return "";
  var contentCode = parts.code ? String(parts.code).toUpperCase() : "";
  if (contentCode && DMM_CONTENT_ID_OVERRIDES[contentCode]) return DMM_CONTENT_ID_OVERRIDES[contentCode];
  var prefix = normalizeDmmPrefix(parts.prefix);
  var numericPrefix = DMM_CONTENT_PREFIX_MAP[prefix] || "";
  if (!numericPrefix && /^SD[A-Z]{2,3}$/.test(prefix)) {
    return "1" + parts.prefixLower + parts.number5 + String(parts.suffix || "").toLowerCase();
  }
  return numericPrefix + parts.prefixLower + parts.number5 + String(parts.suffix || "").toLowerCase();
}

function parseJavCodeParts(title) {
  var raw = String(title || "").toUpperCase();
  var match = raw.match(/\b([A-Z0-9]+)-?(\d{2,5})([A-Z]?)\b/);
  if (!match) return null;
  var prefix = match[1];
  var prefixLower = prefix.toLowerCase();
  var suffix = match[3] || "";
  var number5 = match[2];
  while (number5.length < 5) number5 = "0" + number5;
  var number3 = match[2];
  while (number3.length < 3) number3 = "0" + number3;
  var normalizedPrefix = normalizeDmmPrefix(prefix);
  var makerPrefix = String(DMM_CONTENT_PREFIX_MAP[normalizedPrefix] || "");
  if (!makerPrefix && /^SD[A-Z]{2,3}$/.test(normalizedPrefix)) makerPrefix = "1";
  var numberPlain = String(parseInt(match[2], 10));
  var parts = {
    prefix: prefix,
    prefixLower: prefixLower,
    number: match[2],
    number3: number3,
    number5: number5,
    numberPlain: numberPlain,
    suffix: suffix,
    makerPrefix: makerPrefix,
    plainCode: prefixLower + number5,
  };
  parts.code = buildDmmContentIdFromParts(parts) || (makerPrefix + prefixLower + number5);
  return parts;
}

function isValidJavCatalogCode(code) {
  var raw = String(code || "").trim();
  if (!raw) return false;
  var upper = raw.toUpperCase().replace(/\s+/g, " ");
  if (/^\d{4,}$/.test(upper.replace(/[\s\-_]+/g, ""))) return false;
  if (/^FC2(?:[- ]?PPV)?[- ]?\d{5,8}$/i.test(upper)) return true;
  if (/^(?:CARIB|1PONDO|HEYZO|T28)[- ]?\d+/i.test(upper)) return true;
  var parts = parseJavCodeParts(upper);
  if (!parts) return false;
  if (!/[A-Z]/.test(parts.prefix)) return false;
  var num = parseInt(parts.number, 10);
  if (!Number.isFinite(num) || num <= 0) return false;
  return true;
}

function isDmmMonoContentId(contentId) {
  var id = String(contentId || "").toLowerCase();
  if (/^h_\d+/.test(id)) return true;
  var hMatch = id.match(/^h_\d+[a-z0-9]+?(\d+)$/);
  if (hMatch) return hMatch[1].length < 5;
  var oneMatch = id.match(/^1([a-z]+)(\d+)$/);
  if (oneMatch) return oneMatch[2].length < 5;
  return false;
}

function buildMgstageCoverCandidatesFromParts(parts, rule) {
  if (!parts || !rule || !rule.maker) return { posterCandidates: [], backdropCandidates: [] };
  var number = String(parseInt(parts.number, 10));
  if (!parts.prefixLower || !number || number === "NaN") return { posterCandidates: [], backdropCandidates: [] };
  var dvdDash = parts.prefixLower + "-" + number;
  var base = "https://image.mgstage.com/images/" + rule.maker + "/" + parts.prefixLower + "/" + number;
  return {
    posterCandidates: compactUniqueUrls([base + "/pf_e_" + dvdDash + ".jpg", base + "/pf_o1_" + dvdDash + ".jpg"]),
    backdropCandidates: compactUniqueUrls([base + "/pb_e_" + dvdDash + ".jpg"]),
  };
}

function buildDmmMonoCoverCandidatesForId(contentId) {
  var id = String(contentId || "").toLowerCase();
  if (!id) return { posterCandidates: [], backdropCandidates: [] };
  var awsBase = "https://awsimgsrc.dmm.co.jp/pics/mono/movie/adult/" + id;
  return {
    posterCandidates: compactUniqueUrls([awsBase + "/" + id + "ps.jpg"]),
    backdropCandidates: compactUniqueUrls([awsBase + "/" + id + "pl.jpg"]),
  };
}

function buildDmmDigitalCoverCandidatesForId(contentId) {
  var id = String(contentId || "").toLowerCase();
  if (!id) return { posterCandidates: [], backdropCandidates: [] };
  var awsBase = "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + id;
  return {
    posterCandidates: compactUniqueUrls([awsBase + "/" + id + "ps.jpg", awsBase + "/" + id + "jp-1.jpg"]),
    backdropCandidates: compactUniqueUrls([awsBase + "/" + id + "pl.jpg"]),
  };
}

function appendDmmCoverCandidates(target, contentId) {
  var id = String(contentId || "").toLowerCase();
  if (!id || !target) return;
  var digital = buildDmmDigitalCoverCandidatesForId(id);
  var mono = isDmmMonoContentId(id) ? buildDmmMonoCoverCandidatesForId(id) : { posterCandidates: [], backdropCandidates: [] };
  if (isDmmMonoContentId(id)) {
    target.posterCandidates = target.posterCandidates.concat(mono.posterCandidates, digital.posterCandidates);
    target.backdropCandidates = target.backdropCandidates.concat(mono.backdropCandidates, digital.backdropCandidates);
  } else {
    target.posterCandidates = target.posterCandidates.concat(digital.posterCandidates, mono.posterCandidates);
    target.backdropCandidates = target.backdropCandidates.concat(digital.backdropCandidates, mono.backdropCandidates);
  }
}

function buildMgstageCoverCandidatesFromVideoId(videoIdOrTitle) {
  var parts = parseJavCodeParts(videoIdOrTitle);
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };
  var mgRule = getMgstageCoverRule(parts);
  if (!mgRule) return { posterCandidates: [], backdropCandidates: [] };
  return buildMgstageCoverCandidatesFromParts(parts, mgRule);
}

function appendDmmProbeCoverCandidates(candidates, dmmProbe) {
  if (!candidates || !dmmProbe) return candidates;
  if (dmmProbe.posterUrl) candidates.posterCandidates.push(dmmProbe.posterUrl);
  if (dmmProbe.backdropUrl) candidates.backdropCandidates.push(dmmProbe.backdropUrl);
  candidates.posterCandidates = compactUniqueUrls(candidates.posterCandidates);
  candidates.backdropCandidates = compactUniqueUrls(candidates.backdropCandidates);
  return candidates;
}

function buildCoverCandidatesFromVideoId(videoIdOrTitle, dmmProbe) {
  if (!isValidJavCatalogCode(videoIdOrTitle)) {
    return { posterCandidates: [], backdropCandidates: [] };
  }
  var candidates = buildMgstageCoverCandidatesFromVideoId(videoIdOrTitle);
  if (candidates.posterCandidates.length || candidates.backdropCandidates.length) return candidates;
  candidates = { posterCandidates: [], backdropCandidates: [] };
  return appendDmmProbeCoverCandidates(candidates, dmmProbe);
}

function cleanDvdId(raw) {
  return String(raw || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/-UNCENSORED-LEAK$/i, "")
    .replace(/-CHINESE-SUBTITLE$/i, "")
    .replace(/\s+/g, "")
    .trim();
}

function buildDmmGallery(contentId, count) {
  count = count || 10;
  var id = String(contentId || "").toLowerCase();
  if (!id) return [];
  var urls = [];
  var base = "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + id + "/";
  for (var i = 1; i <= count; i++) {
    urls.push(base + id + "jp-" + i + ".jpg");
  }
  return urls;
}

function buildMgstageGalleryFromDvdId(dvdId, count) {
  count = count || 10;
  var clean = cleanDvdId(dvdId).toLowerCase();
  var match = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
  if (!match) return [];
  var prefix = match[1].toLowerCase();
  var number = String(parseInt(match[2], 10));
  var dvdDash = prefix + "-" + number;
  var urls = [];
  for (var j = 1; j <= count; j++) {
    urls.push("https://image.mgstage.com/images/prestige/" + prefix + "/" + number + "/cap_e_" + j + "_" + dvdDash + ".jpg");
  }
  return urls;
}

function fetchJavTrailersMeta(dvdId, dmmProbe) {
  var empty = { backdropPath: "", backdropPaths: [] };
  if (!dvdId || !isValidJavCatalogCode(dvdId)) return empty;
  var parts = parseJavCodeParts(dvdId);
  var backdropPath = "";
  var backdropPaths = [];
  var mgRule = getMgstageCoverRule(parts);
  if (parts && mgRule) {
    var mg = buildMgstageCoverCandidatesFromParts(parts, mgRule);
    backdropPath = mg.backdropCandidates[0] || "";
    backdropPaths = buildMgstageGalleryFromDvdId(dvdId, 10);
  } else if (dmmProbe && dmmProbe.contentId) {
    backdropPath = dmmProbe.backdropUrl || "";
    backdropPaths = buildDmmGallery(dmmProbe.contentId, 10);
  }
  return { backdropPath: backdropPath, backdropPaths: backdropPaths };
}

function upgradeJavdbCoverUrl(url) {
  var value = String(url || "").trim();
  if (!value) return "";
  value = value.replace(/\/thumbs\//gi, "/covers/");
  value = value.replace(/jdbimgs\.com\/thumbs/gi, "jdbimgs.com/covers");
  return value;
}

function upgradeJavdbSampleUrl(url) {
  var value = String(url || "").trim();
  if (!value) return "";
  if (/_s\.(jpe?g|webp|png)(\?|$)/i.test(value)) {
    value = value.replace(/_s(\.(?:jpe?g|webp|png))(\?.*)?$/i, "_b$1$2");
  }
  return value;
}

function upgradeJavdbImageUrl(url) {
  var value = String(url || "").trim();
  if (!value) return "";
  if (value.indexOf("/samples/") >= 0 || value.indexOf("/samples") >= 0) {
    return upgradeJavdbSampleUrl(value);
  }
  return upgradeJavdbCoverUrl(value);
}

function normalizeJavdbCoverUrl(url) {
  var cover = String(url || "").trim();
  if (!cover) return "";
  var at = cover.indexOf("@");
  if (at >= 0) cover = cover.slice(0, at);
  return cover;
}

function isInvalidCoverTarget(url) {
  var u = String(url || "").toLowerCase();
  if (!u) return true;
  if (u.indexOf("now_printing") >= 0) return true;
  if (u.indexOf("noimage") >= 0) return true;
  if (/adult_pl\.jpg(\?|$)/i.test(u)) return true;
  return false;
}

function isLowResDmmPosterUrl(url) {
  var u = String(url || "").toLowerCase();
  if (!u) return false;
  if (/[?&]w=147(?:&|$|[?#])/.test(u) && /[?&]h=200(?:&|$|[?#])/.test(u)) return true;
  if (/pics\.dmm\.co\.jp\/.*ps\.jpe?g(\?|$)/i.test(u)) return true;
  if (/pics\.dmm\.com\/.*ps\.jpe?g(\?|$)/i.test(u)) return true;
  return false;
}

function resolvePosterUrlWithCatembyFallback(posterUrl, videoId) {
  var poster = String(posterUrl || "").trim();
  if (!poster) return "";
  if (isLowResDmmPosterUrl(poster)) {
    return resolveCatembyCoverUrl(videoId) || poster;
  }
  return poster;
}

function pickFirstUsableCoverUrl(urls) {
  urls = compactUniqueUrls(urls || []);
  for (var i = 0; i < urls.length; i++) {
    if (!isInvalidCoverTarget(urls[i])) return urls[i];
  }
  return "";
}

function filterTrustedCdnUrls(urls) {
  return (urls || []).filter(function (url) {
    var value = String(url || "");
    if (/image\.mgstage\.com/i.test(value)) return true;
    if (/awsimgsrc\.dmm\.co\.jp/i.test(value)) return true;
    return false;
  });
}

function buildListCoverBundle(code, videoId, dmmProbe) {
  var catembyCover = resolveCatembyCoverUrl(videoId);
  if (!code || !isValidJavCatalogCode(code)) {
    return buildCoverBundleFromUrls(catembyCover, catembyCover);
  }
  var probe = dmmProbe !== undefined ? dmmProbe : lookupDmmProbeCover(code);
  var candidates = buildCoverCandidatesFromVideoId(code, probe);
  var hdBackdrop =
    pickFirstUsableCoverUrl(filterTrustedCdnUrls(candidates.backdropCandidates)) ||
    catembyCover ||
    "";
  var hdPoster =
    resolvePosterUrlWithCatembyFallback(
      pickFirstUsableCoverUrl(filterTrustedCdnUrls(candidates.posterCandidates)),
      videoId
    ) ||
    catembyCover ||
    "";
  return buildCoverBundleFromUrls(hdPoster, hdBackdrop);
}

function buildDmmPreviewUrl(contentId) {
  var id = String(contentId || "").toLowerCase();
  if (!id) return "";
  return "https://cc3001.dmm.co.jp/digital/video/" + id + "/" + id + "sm.mp4";
}

function parseTrailersFromHtml($, base, displayCode, coverUrl, dmmProbe) {
  var selectors = [
    ".video-detail video",
    ".column-video-preview video",
    ".preview-video video",
    "video.preview",
    "video",
  ];
  var src = "";

  for (var i = 0; i < selectors.length; i++) {
    var node = $(selectors[i]).first();
    if (!node.length) continue;
    src =
      attrOf($, node, "src") ||
      attrOf($, node.find("source").first(), "src") ||
      attrOf($, node, "data-src");
    if (src) break;
  }

  if (!src) {
    var previewLink = $(".video-detail a[href*='.mp4'], .preview-video a[href*='.mp4']").first();
    src = attrOf($, previewLink, "href") || attrOf($, previewLink, "data-url");
  }

  var url = absUrl(String(src || "").trim(), base);
  if (url && (/\.mp4(\?|$)/i.test(url) || url.indexOf("dmm.co.jp") >= 0)) {
    return [{ coverUrl: coverUrl || "", url: url }];
  }

  if (displayCode && dmmProbe && dmmProbe.contentId) {
    var fallback = buildDmmPreviewUrl(dmmProbe.contentId);
    if (fallback) {
      return [{ coverUrl: coverUrl || "", url: fallback }];
    }
  }

  return [];
}

var CATEMBY_CDN_BASE = "https://tp.spfcas.com/rhe951l4q";

function buildCatembySiteCoverUrl(videoId) {
  var id = String(videoId || "").trim();
  if (!id || id.length < 2) return "";
  return CATEMBY_CDN_BASE + "/covers/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function resolveCatembyCoverUrl(videoId) {
  var id = String(videoId || "").trim();
  if (!id) return "";
  var siteCover = buildCatembySiteCoverUrl(id);
  if (siteCover) return siteCover;
  return normalizeJavdbCoverUrl(buildJavdbCoverFromVideoId(id)) || "";
}

function buildJavdbCoverFromVideoId(videoId) {
  var id = String(videoId || "").trim();
  if (!id || id.length < 2) return "";
  var prefix = id.slice(0, 2).toLowerCase();
  return "https://c0.jdbstatic.com/covers/" + prefix + "/" + id + ".jpg";
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

function buildDetailCoverBundle(code, videoId, dmmProbe) {
  var probe = dmmProbe !== undefined ? dmmProbe : lookupDmmProbeCover(code);
  var candidates = buildCoverCandidatesFromVideoId(code, probe);
  var catembyCover = videoId ? resolveCatembyCoverUrl(videoId) : "";
  var hdPoster =
    resolvePosterUrlWithCatembyFallback(candidates.posterCandidates[0] || "", videoId) ||
    catembyCover ||
    "";
  var hdBackdrop = candidates.backdropCandidates[0] || catembyCover || hdPoster || "";
  return buildCoverBundleFromUrls(hdPoster, hdBackdrop);
}

function buildDetailBackdropPaths(displayCode, dmmProbe) {
  var jtMeta = fetchJavTrailersMeta(displayCode, dmmProbe);
  return compactUniqueUrls([jtMeta.backdropPath].concat(jtMeta.backdropPaths || [])).filter(Boolean);
}

function finalizeDetailItem(item, pageUrl) {
  item.webUrl = pageUrl;
  item.description = appendPageUrlToDescription(item.description, pageUrl);
  return sanitizeDetailOutput(item);
}

function parseRatingText(text) {
  if (!text) return 0;
  var match = String(text).match(/([\d.]+)/);
  if (!match) return 0;
  var score = parseFloat(match[1]);
  if (isNaN(score)) return 0;
  return score <= 5 ? Math.round(score * 2 * 10) / 10 : score;
}

function textOf($, el) {
  if (!el || !el.length) return "";
  return $(el).text().replace(/\s+/g, " ").trim();
}

function attrOf($, el, name) {
  if (!el || !el.length) return "";
  return String($(el).attr(name) || "").trim();
}

function lookupCategoryOptionTitle(path) {
  var raw = String(path || "").trim();
  if (!raw) return "";
  var clean = raw.split("?")[0];
  var ref = parseCategoryParamRef(raw);
  var tables = [JAVDB_TAG_OPTIONS, JAVDB_MAKER_OPTIONS];
  for (var t = 0; t < tables.length; t++) {
    var opts = tables[t] || [];
    for (var i = 0; i < opts.length; i++) {
      var opt = opts[i];
      if (!opt || !opt.value) continue;
      var optValue = String(opt.value);
      var optClean = optValue.split("?")[0];
      if (optValue === raw || optClean === clean || optValue === ref.id || optClean === String(ref.id).split("?")[0]) {
        return String(opt.title || "").trim();
      }
    }
  }
  if (ref.title) return javdbTranslateLabelByPath(ref.title, ref.id || clean);
  if (clean.indexOf("/makers/") === 0 || clean.indexOf("/tags/") === 0 || clean.indexOf("tags/") === 0) {
    var slug = clean.split("/").pop() || "";
    try { slug = decodeURIComponent(slug); } catch (err) {}
    if (slug) return javdbTranslateLabelByPath(slug, clean);
  }
  if (raw.indexOf("search:") === 0) {
    return javdbTranslateLabelByPath(raw.slice(7), raw);
  }
  return "";
}

function isLikelyLegacyMakerSlug(path) {
  var clean = String(path || "").split("?")[0];
  var match = clean.match(/^\/makers\/(.+)$/);
  if (!match) return false;
  var slug = match[1];
  if (/[A-Z]/.test(slug)) return false;
  return /^[a-z0-9-]+$/.test(slug);
}

function legacyMakerSlugToSearchKeyword(slug) {
  slug = String(slug || "").trim();
  if (!slug) return "";
  if (slug.indexOf("-") >= 0) {
    return slug
      .split("-")
      .map(function (part) {
        if (!part) return part;
        return part.length <= 4 ? part.toUpperCase() : part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join("-");
  }
  return slug.length <= 4 ? slug.toUpperCase() : slug.charAt(0).toUpperCase() + slug.slice(1);
}

function normalizeCategoryFetchPath(path) {
  path = normalizeCategoryPath(path);
  if (!path) return path;
  if (path.indexOf(DETAIL_SEARCH_PREFIX) === 0) return path;
  var tagMatch = path.match(/^(\/tags\/[^/?#]+)(\?([^#]*))?$/);
  if (tagMatch) {
    var base = tagMatch[1];
    var query = tagMatch[3] || "";
    if (!query) return base;
    var parts = query.split("&").filter(function (p) {
      return p && !/^c10=/.test(p);
    });
    return parts.length ? base + "?" + parts.join("&") : base;
  }
  return path;
}

function buildCategoryFetchCandidates(path) {
  path = normalizeCategoryFetchPath(path);
  var candidates = [];
  function add(value) {
    if (!value || candidates.indexOf(value) >= 0) return;
    candidates.push(value);
  }
  add(path);
  // tags 仅在明确带查询时保留去参兜底；裸路径不再默认追加 ?c10=1，避免每次多打一枪
  if (path.indexOf("/tags/") === 0 && path.indexOf("?") >= 0) {
    add(path.split("?")[0]);
  }
  return candidates;
}

function isBrowseMovieListPath(path) {
  var clean = String(path || "").split("?")[0];
  if (clean === "/" || clean === "/censored" || clean === "/uncensored") return true;
  return clean.indexOf("/rankings/") === 0;
}

function buildRankingPath(board) {
  board = String(board || "movies:censored:daily");
  var parts = board.split(":");
  var kind = parts[0] || "movies";
  var type = parts[1] || "";
  var period = parts[2] || "daily";
  if (kind === "top") {
    var topType = parts[2] || parts[1] || "all";
    if (!topType || topType === "all") return "/rankings/top";
    return "/rankings/top?t=" + encodeURIComponent(topType);
  }
  if (kind === "playback") {
    return "/rankings/playback?p=" + encodeURIComponent(period || "daily");
  }
  var t = type || "censored";
  var p = period || "daily";
  return "/rankings/movies?t=" + encodeURIComponent(t) + "&p=" + encodeURIComponent(p);
}

function isCategoryErrorHtml(html) {
  var text = String(html || "");
  if (!text) return true;
  // 勿裸匹配 Cloudflare：正常页面脚本里也常见，误判会多打搜索回退拖慢加载
  if (/just a moment\.\.\./i.test(text)) return true;
  if (/cf-browser-verification|challenge-platform|cdn-cgi\/challenge/i.test(text)) return true;
  if (/attention required/i.test(text) && /cloudflare/i.test(text) && !/movie-list|video-title/i.test(text)) return true;
  if (/sorry,\s*you have been blocked/i.test(text)) return true;
  if (/此內容需要登入|需要登录|需要登入才能查看/i.test(text) && !/movie-list|href="\/v\//i.test(text)) return true;
  if (/404|Not Found|页面不存在|Page Not Found/i.test(text) && text.indexOf("movie-list") < 0 && text.indexOf('class="item"') < 0 && text.indexOf('href="/v/') < 0) {
    return true;
  }
  return false;
}

async function fetchHtml(url, params) {
  var cached = readHtmlFetchCache(url);
  if (cached && !isLoginRequiredHtml(cached)) return cached;

  params = params || {};
  var pathOnly = "";
  try {
    pathOnly = String(url || "").replace(/^https?:\/\/[^/]+/i, "");
  } catch (err) {
    pathOnly = String(url || "");
  }
  if (pathRequiresLogin(pathOnly) || params.forceLogin) {
    await ensureJavdbSession(params, { allowAnonymous: false });
  }

  async function once() {
    var res = await Widget.http.get(url, {
      headers: javdbHeaders(params),
      allow_redirects: true,
    });
    if (!res || !res.data) throw new Error("空响应: " + url);
    if (res.status && Number(res.status) >= 400) {
      throw new Error("HTTP " + res.status + " " + url);
    }
    var nextCookie = mergeCookieHeader(readStoredJavdbCookie(params), collectSetCookiePairs(res));
    if (nextCookie && /_jdb_session=/i.test(nextCookie)) saveJavdbCookie(nextCookie);
    return String(res.data);
  }

  var html = await once();
  if (isLoginRequiredHtml(html)) {
    clearJavdbCookie();
    await ensureJavdbSession(params, { forceLogin: true });
    html = await once();
    if (isLoginRequiredHtml(html)) {
      throw new Error("该页面需要登录。请填写账号密码，或粘贴含 _jdb_session 的 Cookie");
    }
  }
  writeHtmlFetchCache(url, html);
  return html;
}

function parseListItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var rawItems = [];
  var seen = {};

  $(".movie-list .item a.box, #videos .grid-item a.box, #videos a.box, .grid-item.column a.box, .grid.columns .grid-item a.box, .items .item a.box").each(function () {
    var box = $(this);
    var href = attrOf($, box, "href");
    var path = href.indexOf("http") === 0 ? href.replace(base, "") : href;
    path = String(path || "").split("#")[0];
    if (!path || path.indexOf("/v/") !== 0 || seen[path]) return;
    seen[path] = true;
    var videoId = path.split("/").pop() || path;
    var titleNode = box.find(".video-title strong").first();
    var titleText = textOf($, titleNode);
    var subTitle = textOf($, box.find(".video-title").first());
    var rawTitle = box.attr("title") || subTitle || titleText;
    var matchCode = resolveMatchCode(titleText, rawTitle);
    rawItems.push({
      id: matchCode || videoId,
      type: "url",
      mediaType: "movie",
      title: formatDisplayTitle(matchCode, rawTitle) || String(rawTitle || videoId).replace(/\s+/g, " ").trim(),
      rating: parseRatingText(textOf($, box.find(".score").first())),
      releaseDate: textOf($, box.find(".meta").first()) || "",
      link: encodeLink(path),
      matchCode: matchCode,
      originalTitle: rawTitle,
      code: matchCode,
      videoId: videoId,
      description: matchCode ? "番号: " + matchCode : "",
    });
  });

  return rawItems;
}

async function enrichMovieItems(rawItems, params) {
  params = params || {};
  var codes = [];
  for (var i = 0; i < rawItems.length; i++) {
    if (rawItems[i].code && isValidJavCatalogCode(rawItems[i].code)) codes.push(rawItems[i].code);
  }
  // 不使用 setTimeout（部分 Widget 运行时不支持）；依赖批量探测自身 timeout
  await prefetchDmmProbeCovers(codes, params);

  var items = [];
  for (var i = 0; i < rawItems.length; i++) {
    var raw = rawItems[i];
    var covers = buildListCoverBundle(raw.code, raw.videoId, lookupDmmProbeCover(raw.code));
    items.push(Object.assign(
      {
        id: raw.id,
        type: raw.type,
        mediaType: raw.mediaType,
        title: raw.title,
        backdropPath: covers.backdropPath,
        posterPath: covers.posterPath,
        detailPoster: covers.detailPoster,
        coverUrl: covers.coverUrl,
        image: covers.image,
        rating: raw.rating,
        releaseDate: raw.releaseDate,
        link: raw.link,
        description: raw.description,
      },
      buildGuangyaMatchFields(raw.matchCode || raw.code, raw.originalTitle || raw.title, raw.description)
    ));
  }
  return items;
}

function isBrowseLibraryPath(path) {
  if (!path) return false;
  var match = String(path).match(/^([^?#]+)(\?([^#]*))?/);
  var clean = match ? match[1] : String(path).split("?")[0];
  var query = match && match[3] ? match[3] : "";
  if (clean === "/series" || clean === "/series/uncensored") return true;
  if (clean === "/makers" || clean === "/makers/uncensored") return true;
  if (clean === "/tags") {
    if (!query) return true;
    var params = query.split("&").filter(Boolean);
    return params.every(function (p) {
      return /^sort_type=/.test(p);
    });
  }
  return /^\/actors\/(censored|uncensored|western)$/.test(clean);
}

function applyCategorySort(path, sortBy) {
  if (!path) return path;
  var raw = String(sortBy || "published");
  var withDownload = /_download$/.test(raw);
  var sortKey = withDownload ? raw.replace(/_download$/, "") : raw;
  var sortMap = { published: "0", score: "1", fav: "2" };
  var sortType = sortMap[sortKey];
  if (sortType === undefined) return path;
  path = path + (path.indexOf("?") >= 0 ? "&" : "?") + "sort_type=" + sortType;
  if (withDownload) {
    path = path + (path.indexOf("?") >= 0 ? "&" : "?") + "f=download";
  }
  return path;
}

async function loadPage(params) {
  try {
    params = syncCategoryParams(params);
    var jumpKeyword = resolveDetailJumpKeyword(params);
    if (jumpKeyword) {
      return fetchSearchMovieList(params, jumpKeyword);
    }
    var sortBy = String(params.sort_by || "published");
    var path = applyCategorySort(resolveCategoryListPath(params), sortBy);
    if (!path) {
      throw new Error("请先在参数中选择分类项（标签/片商）");
    }
    if (isBrowseLibraryPath(path)) {
      throw new Error("请选择具体分类项，而不是库目录");
    }

    var movies = await fetchMovieList(path, params);
    return movies;
  } catch (error) {
    console.error("[javdb] 分类加载失败:", error.message || error);
    throw error;
  }
}

async function parseCategoryDetailPage(html, path, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var title = textOf($, $("h2.title strong").first()) || textOf($, $("h2 strong").first()) || path.split("/").pop();
  title = javdbTranslateLabelByPath(stripCountSuffix(title), path);
  var avatar = absUrl(attrOf($, $("img.avatar").first(), "src"), base);
  // 复用已拉取的 HTML 统计当前页条目，避免再打一遍同 URL
  var movieCount = parseListItems(html, params).length;
  return sanitizeDetailOutput({
    id: path.split("/").pop() || encodeLink(path),
    type: "url",
    title: title,
    posterPath: avatar || "",
    detailPoster: avatar || "",
    description: "共收录 " + movieCount + " 部影片（当前页）",
    link: encodeLink(path),
  });
}

function normalizePanelLabel(text) {
  return String(text || "")
    .replace(/[:：]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

var DETAIL_PANEL_FIELD_RULES = [
  { kind: "tag", labels: ["类别", "tags", "類別", "tag", "genre", "标籤", "標籤"] },
  { kind: "series", labels: ["系列", "series"] },
  { kind: "maker", labels: ["片商", "maker", "publisher", "发行", "發行", "label", "studio", "制作", "製作"] },
  { kind: "actor", labels: ["演员", "演員", "actor", "cast", "stars", "演出"] },
  { kind: "director", labels: ["导演", "導演", "director"] },
];

function matchPanelFieldKind(label) {
  var text = normalizePanelLabel(label);
  if (!text) return "";
  for (var i = 0; i < DETAIL_PANEL_FIELD_RULES.length; i++) {
    var rule = DETAIL_PANEL_FIELD_RULES[i];
    for (var j = 0; j < rule.labels.length; j++) {
      if (text.indexOf(rule.labels[j].toLowerCase()) >= 0) return rule.kind;
    }
  }
  return "";
}

function extractPanelRowLabel($, row) {
  var label = textOf($, row.find(".label, strong").first());
  if (label) return label;
  var firstCol = row.find(".column").first();
  if (firstCol.length) return textOf($, firstCol);
  return "";
}

function resolveCategoryListPath(params) {
  return resolveFilteredPath(syncCategoryParams(params), "");
}

function categoryItemIdFromPath(path, fallbackTitle) {
  path = normalizeCategoryPath(path);
  if (!isValidCategoryBrowsePath(path)) return buildDetailSearchId(fallbackTitle);
  var categoryId = "";
  if (path.indexOf("/actors/") === 0) {
    categoryId = path.split("/").filter(Boolean).pop() || buildDetailSearchId(fallbackTitle);
  } else if (path.indexOf("/series/") === 0) {
    var seriesSlug = path.split("/").filter(Boolean).pop();
    categoryId = seriesSlug ? "series:" + seriesSlug : buildDetailSearchId(fallbackTitle);
  } else if (path.indexOf("/makers/") === 0) {
    var makerSlug = path.split("/").filter(Boolean).pop();
    categoryId = makerSlug ? "maker:" + makerSlug : buildDetailSearchId(fallbackTitle);
  } else if (path.indexOf("/tags") === 0) {
    categoryId = path.replace(/^\//, "");
  } else {
    categoryId = path.replace(/^\//, "") || buildDetailSearchId(fallbackTitle);
  }
  if (!categoryId || categoryId.indexOf(DETAIL_SEARCH_PREFIX) === 0) return categoryId;
  var title = String(fallbackTitle || "").replace(/\s+/g, " ").trim();
  if (!title) return categoryId;
  return categoryId + CATEGORY_ID_TITLE_SEP + encodeURIComponent(title);
}

function buildDetailGenreItem(title, path) {
  var name = String(title || "").replace(/\s+/g, " ").trim();
  if (!name) return null;
  var display = javdbTranslateLabelByPath(name, path);
  return { id: categoryItemIdFromPath(path, name), title: display };
}

function buildDetailPeopleItem(title, role, avatar, path) {
  var name = String(title || "").replace(/\s+/g, " ").trim();
  if (!name) return null;
  return {
    id: categoryItemIdFromPath(path, name),
    title: name,
    avatar: avatar || "",
    role: role || "演员",
  };
}

function pushUniqueGenreItem(items, seen, item) {
  if (!item || !item.id || !item.title) return;
  var key = String(item.id);
  if (seen[key]) return;
  seen[key] = true;
  items.push({ id: key, title: String(item.title) });
}

function pushUniquePeopleItem(items, seen, item) {
  if (!item || !item.id || !item.title) return;
  var key = String(item.id);
  if (seen[key]) return;
  seen[key] = true;
  items.push({
    id: key,
    title: String(item.title),
    avatar: item.avatar || "",
    role: item.role || "演员",
  });
}

function parseGenreItemFromPanelLink(kind, href, title, base) {
  var path = normalizePath(href, base);
  var name = String(title || "").trim();
  if (!path || !name) return null;

  if (kind === "tag") {
    if (path.indexOf("/tags") !== 0 && path.indexOf("tags") < 0) return null;
    return buildDetailGenreItem(name, path);
  }
  if (kind === "series") {
    if (path.indexOf("/series/") !== 0) return null;
    return buildDetailGenreItem(name, path);
  }
  if (kind === "maker") {
    if (path.indexOf("/makers/") !== 0) return null;
    return buildDetailGenreItem(name, path);
  }
  return null;
}

function parsePeopleItemFromPanelLink(kind, href, title, base) {
  var path = normalizePath(href, base);
  var name = String(title || "").trim();
  if (!path || !name) return null;

  if (path.indexOf("/actors/") === 0) {
    return buildDetailPeopleItem(name, kind === "director" ? "导演" : "演员", "", path);
  }
  if (path.indexOf("/directors/") === 0) {
    return buildDetailPeopleItem(name, "导演", "", "");
  }
  return null;
}

function parseDetailMetaFromPanels($, base) {
  var genreItems = [];
  var peoples = [];
  var genreSeen = {};
  var peopleSeen = {};

  $(
    "nav.panel.movie-panel-info .panel-block, nav.panel.movie-panel-info > div, .movie-panel-info .panel-block, .movie-panel-info > div"
  ).each(function () {
    var row = $(this);
    var kind = matchPanelFieldKind(extractPanelRowLabel($, row));
    if (!kind) return;

    var linkNodes = row.find(".value a[href], span.value a[href]");
    if (!linkNodes.length) linkNodes = row.find("a[href]");

    linkNodes.each(function () {
      var node = $(this);
      var href = attrOf($, node, "href");
      var linkTitle = textOf($, node);
      if (!href || !linkTitle) return;

      if (kind === "actor" || kind === "director") {
        var person = parsePeopleItemFromPanelLink(kind, href, linkTitle, base);
        if (person) {
          person.avatar =
            absUrl(attrOf($, node.find("img").first(), "src"), base) || person.avatar || "";
          pushUniquePeopleItem(peoples, peopleSeen, person);
        }
        return;
      }

      var genre = parseGenreItemFromPanelLink(kind, href, linkTitle, base);
      if (genre) pushUniqueGenreItem(genreItems, genreSeen, genre);
    });
  });

  return { genreItems: genreItems, peoples: peoples };
}

function parseDetailMetaLegacy($, base) {
  var genreItems = [];
  var peoples = [];
  var genreSeen = {};
  var peopleSeen = {};

  $("strong:contains('类别'), strong:contains('Tags'), strong:contains('類別')").each(function () {
    $(this)
      .closest(".panel-block, div")
      .find("a[href]")
      .each(function () {
        var tag = $(this);
        var href = attrOf($, tag, "href");
        var path = normalizePath(href, base);
        var tagId = path.charAt(0) === "/" ? path.slice(1) : path;
        if (!tagId || (path.indexOf("/tags") !== 0 && tagId.indexOf("tags") !== 0)) return;
        var tagItem = buildDetailGenreItem(textOf($, tag), path);
        if (tagItem) pushUniqueGenreItem(genreItems, genreSeen, tagItem);
      });
  });

  $("strong:contains('系列'), strong:contains('Series')").each(function () {
    $(this)
      .closest(".panel-block, div")
      .find("a[href*='/series/']")
      .each(function () {
        var node = $(this);
        var path = normalizePath(attrOf($, node, "href"), base);
        var slug = path.split("/").pop();
        if (!slug) return;
        var seriesItem = buildDetailGenreItem(textOf($, node), path);
        if (seriesItem) pushUniqueGenreItem(genreItems, genreSeen, seriesItem);
      });
  });

  $("strong:contains('片商'), strong:contains('Maker'), strong:contains('Publisher')").each(function () {
    $(this)
      .closest(".panel-block, div")
      .find("a[href*='/makers/']")
      .each(function () {
        var node = $(this);
        var path = normalizePath(attrOf($, node, "href"), base);
        var slug = path.split("/").pop();
        if (!slug) return;
        var makerItem = buildDetailGenreItem(textOf($, node), path);
        if (makerItem) pushUniqueGenreItem(genreItems, genreSeen, makerItem);
      });
  });

  $("strong:contains('演员'), strong:contains('演員'), strong:contains('Actor')").each(function () {
    $(this)
      .closest(".panel-block, div")
      .find("a[href*='/actors/']")
      .each(function () {
        var actor = $(this);
        var path = normalizePath(attrOf($, actor, "href"), base);
        var id = path.split("/").pop() || textOf($, actor);
        if (!id) return;
        var actorItem = buildDetailPeopleItem(textOf($, actor), "演员", "", path);
        if (actorItem) pushUniquePeopleItem(peoples, peopleSeen, actorItem);
      });
  });

  return { genreItems: genreItems, peoples: peoples };
}

function mergeDetailMeta(primary, fallback) {
  primary = primary || { genreItems: [], peoples: [] };
  fallback = fallback || { genreItems: [], peoples: [] };
  var genreItems = (primary.genreItems || []).slice();
  var peoples = (primary.peoples || []).slice();
  var genreSeen = {};
  var peopleSeen = {};

  for (var i = 0; i < genreItems.length; i++) genreSeen[genreItems[i].id] = true;
  for (var j = 0; j < peoples.length; j++) peopleSeen[peoples[j].id] = true;

  for (var g = 0; g < (fallback.genreItems || []).length; g++) {
    pushUniqueGenreItem(genreItems, genreSeen, fallback.genreItems[g]);
  }
  for (var p = 0; p < (fallback.peoples || []).length; p++) {
    pushUniquePeopleItem(peoples, peopleSeen, fallback.peoples[p]);
  }

  return { genreItems: genreItems, peoples: peoples };
}

function parseDetailMeta($, base) {
  return mergeDetailMeta(parseDetailMetaFromPanels($, base), parseDetailMetaLegacy($, base));
}

async function parseDetailPage(html, link, params) {
  var base = javdbBase(params);
  var path = extractPath(link, base);
  var pageUrl = detailPageUrl(path, params);
  var $ = Widget.html.load(html);

  var title = textOf($, $("h2 strong.current-title").first());
  if (!title) title = textOf($, $("h2.title strong").first());

  var code = attrOf($, $("a[title='Copy ID'], a[title='复制番号'], a.copy-to-clipboard[title='复制番号']").first(), "data-clipboard-text");
  if (!code) {
    code = textOf($, $("strong:contains('番号'), strong:contains('Code')").parent().find("span.value, span").first());
  }
  if (!code) {
    code = textOf($, $("span.value").first());
  }

  var description = textOf($, $("#introduction dd p").first());
  if (!description) {
    description = textOf($, $("h2.title.is-4 strong").first());
    if (code && description.indexOf(code) === 0) {
      description = description.slice(code.length).trim();
    }
  }

  var releaseDate = "";
  var durationText = "";
  var rating = 0;

  $("nav.panel.movie-panel-info div, .movie-panel-info > div").each(function () {
    var row = $(this);
    var label = textOf($, row.find("strong").first());
    var value = textOf($, row.find("span").first());
    if (!label) return;
    if (label.indexOf("日期") >= 0 || label.indexOf("Released Date") >= 0) releaseDate = value;
    if (label.indexOf("时长") >= 0 || label.indexOf("Duration") >= 0) durationText = value;
  });

  var scoreNode = $(".score-stars").first();
  if (scoreNode.length) {
    rating = parseRatingText(textOf($, scoreNode.parent()));
  }

  var displayCode = resolveMatchCode(code, title, description);
  var displayTitle = formatDisplayTitle(displayCode, title);
  var matchFields = buildGuangyaMatchFields(displayCode, title || displayTitle, description);
  params = getEffectiveParams(params);

  var detailMeta = parseDetailMeta($, base);
  var genreItems = detailMeta.genreItems;
  var peoples = detailMeta.peoples;

  var dmmProbe = displayCode ? await fetchDmmProbeCover(displayCode, params) : null;
  var coverBundle = buildDetailCoverBundle(displayCode, path.split("/").pop() || "", dmmProbe);
  var allBackdropPaths = buildDetailBackdropPaths(displayCode, dmmProbe);
  var trailers = parseTrailersFromHtml($, base, displayCode, coverBundle.backdropPath || coverBundle.posterPath, dmmProbe);

  return finalizeDetailItem(
    Object.assign(
      {
        id: displayCode || path.split("/").pop() || encodeLink(path),
        type: "url",
        mediaType: "movie",
        title: displayTitle || displayCode || path.split("/").pop(),
        backdropPath: coverBundle.backdropPath,
        posterPath: coverBundle.posterPath,
        coverUrl: coverBundle.coverUrl,
        image: coverBundle.image,
        detailPoster: coverBundle.detailPoster,
        backdropPaths: allBackdropPaths,
        trailers: trailers,
        releaseDate: releaseDate,
        durationText: durationText,
        rating: rating,
        genreItems: genreItems,
        peoples: peoples,
        link: encodeLink(path),
      },
      matchFields
    ),
    pageUrl
  );
}

async function fetchMovieList(path, params) {
  params = syncGlobalParams(params);
  var basePath = String(path || "");

  if (isBrowseMovieListPath(basePath)) {
    var browseUrl = buildPageUrl(javdbBase(params), basePath, params);
    var browseHtml = await fetchHtml(browseUrl, params);
    var browseItems = await enrichMovieItems(parseListItems(browseHtml, params), params);
    if (!browseItems.length) throw new Error("未解析到影片列表");
    return browseItems;
  }

  if (isLikelyLegacyMakerSlug(basePath)) {
    var legacyTitle = lookupCategoryOptionTitle(basePath);
    if (!legacyTitle) {
      var slugMatch = basePath.match(/^\/makers\/([^/?#]+)/);
      if (slugMatch) legacyTitle = legacyMakerSlugToSearchKeyword(slugMatch[1]);
    }
    if (legacyTitle) return fetchSearchMovieList(params, legacyTitle);
  }
  var candidates = buildCategoryFetchCandidates(basePath);
  var lastError = null;
  var sawValidEmpty = false;
  for (var i = 0; i < candidates.length; i++) {
    try {
      var url = buildPageUrl(javdbBase(params), candidates[i], params);
      var html = await fetchHtml(url, params);
      var items = await enrichMovieItems(parseListItems(html, params), params);
      if (items.length) return items;
      if (isCategoryErrorHtml(html)) {
        lastError = new Error("分类页面不可用: " + candidates[i]);
        continue;
      }
      // 页面可解析但无片：不再继续盲打候选/搜索回退
      sawValidEmpty = true;
      lastError = new Error("分类页面无影片: " + candidates[i]);
      break;
    } catch (err) {
      lastError = err;
    }
  }
  if (!sawValidEmpty) {
    var fallbackTitle = resolveCategorySearchFallback(params, basePath);
    if (fallbackTitle) {
      try {
        return await fetchSearchMovieList(params, fallbackTitle);
      } catch (searchErr) {
        console.error("[javdb] 分类搜索回退失败:", searchErr.message || searchErr);
      }
    }
  }
  throw lastError || new Error("未解析到影片列表");
}

async function loadBrowseList(path, params) {
  try {
    params = syncGlobalParams(params || {});
    var items = await fetchMovieList(path, params);
    if (!items.length) throw new Error("未解析到影片列表");
    return items;
  } catch (error) {
    console.error("[javdb] 列表加载失败:", error.message || error);
    throw error;
  }
}

async function loadListByPath(path, params) {
  try {
    params = syncCategoryParams(params);
    var jumpKeyword = resolveDetailJumpKeyword(params);
    if (jumpKeyword) {
      return fetchSearchMovieList(params, jumpKeyword);
    }
    var targetPath = resolveFilteredPath(params, path);
    return await fetchMovieList(targetPath, params);
  } catch (error) {
    console.error("[javdb] 列表加载失败:", error.message || error);
    throw error;
  }
}

async function loadLatest(params) {
  return loadBrowseList("/", params || {});
}

async function loadRankings(params) {
  params = params || {};
  var board = String(params.board || "");
  if (!board && params.period) board = "movies:censored:" + params.period;
  if (!board) board = "movies:censored:daily";
  return loadBrowseList(buildRankingPath(board), params);
}

async function loadMovies(params) {
  params = params || {};
  var path = String(params.path || "/censored");
  return loadBrowseList(path, params);
}

async function searchJavdb(params) {
  try {
    params = syncCategoryParams(params);
    var jumpKeyword = resolveDetailJumpKeyword(params);
    if (jumpKeyword) {
      return fetchSearchMovieList(params, jumpKeyword);
    }
    var keyword = normalizeSearchKeyword(params.keyword);
    if (!keyword) throw new Error("请输入搜索关键词");
    return fetchSearchMovieList(params, keyword);
  } catch (error) {
    console.error("[javdb] 搜索失败:", error.message || error);
    throw error;
  }
}

async function loadDetail(link) {
  try {
    var params = getEffectiveParams({});
    var videoPath = normalizeVideoDetailPath(link);
    if (videoPath && videoPath.indexOf("/v/") === 0) {
      var pageUrl = detailPageUrl(videoPath, params);
      var html = await fetchHtml(pageUrl, params);
      var detail = await parseDetailPage(html, videoPath, params);
      if (!detail || !detail.title) return null;
      return sanitizeDetailOutput(detail);
    }

    var path = resolveDetailPath(link, params);
    if (!path) return null;

    if (
      path.indexOf("/actors/") === 0 ||
      path.indexOf("/series/") === 0 ||
      path.indexOf("/makers/") === 0 ||
      path.indexOf("/tags/") === 0
    ) {
      var categoryUrl = detailPageUrl(path, params);
      var categoryHtml = await fetchHtml(categoryUrl, params);
      return sanitizeDetailOutput(await parseCategoryDetailPage(categoryHtml, path, params));
    }

    return null;
  } catch (error) {
    console.error("[javdb] 详情加载失败:", error.message || error);
    return null;
  }
}

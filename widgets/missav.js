// =================================================================
// 1. 顶级元数据声明 (WidgetMetadata) —— 严格遵循白皮书第一行赋值铁律
// =================================================================

WidgetMetadata = {
    id: "missav_makka_play",
    title: "MissAV_ovo",
    author: "𝙈𝙖𝙠𝙠𝙖𝙋𝙖𝙠𝙠𝙖|CC|EL",
    description: "MissAV 终极至尊完美版，锁定 1080P 兼容视频流，自适应分类推荐填补，完美修复历史记录演员/大分类跳转空白",
    version: "3.7.4",
    requiredVersion: "0.0.1",
    site: "https://missav.ai",
    modules: [
        {
            title: "最近更新",
            functionName: "loadRecentUpdates",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "sort_by", title: "排序", type: "enumeration", value: "published_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "中文字幕",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm278/cn/chinese-subtitle", enumOptions: [{ title: "中文字幕", value: "dm278/cn/chinese-subtitle" }] },
                { name: "filters", title: "中文字幕筛选", type: "enumeration", value: "", enumOptions: [
                    { title: "所有", value: "" },
                    { title: "单人作品", value: "individual" },
                    { title: "多人作品", value: "multiple" },
                    { title: "中文字幕", value: "chinese-subtitle" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "日本AV",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm632/cn/release", enumOptions: [
                    { title: "最新发布", value: "cn/release" },
                    { title: "本周热门", value: "cn/weekly-hot" },
                    { title: "月度热门", value: "cn/monthly-hot" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "素人",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm36/cn/siro", enumOptions: [
                    { title: "SIRO", value: "cn/siro" },
                    { title: "LUXU", value: "cn/luxu" },
                    { title: "GANA", value: "cn/gana" },
                    { title: "PRESTIGE PREMIUM", value: "cn/maan" },
                    { title: "S-CUTE", value: "cn/scute" },
                    { title: "ARA", value: "cn/ara" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "无码影片",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm814/cn/uncensored-leak", enumOptions: [
                    { title: "无码流出", value: "cn/uncensored-leak" },
                    { title: "东京热", value: "cn/tokyohot" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "亚洲AV",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm63/cn/madou", enumOptions: [
                    { title: "麻豆传媒", value: "cn/madou" },
                    { title: "TWAV", value: "cn/twav" },
                    { title: "Furuke", value: "cn/furuke" },
                    { title: "韩国直播", value: "cn/klive" },
                    { title: "中国直播", value: "cn/clive" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "女优",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm179/cn/actresses/%E7%80%AC%E6%88%B8%E7%92%B0%E5%A5%88", enumOptions: getActressOptions() },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "类型",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm96/cn/genres/%E9%AB%98%E6%B8%85", enumOptions: getGenreOptions() },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "发行商",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm825/cn/makers/Moody%27s", enumOptions: getMakerOptions() },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "🔍 搜索视频",
            functionName: "searchList",
            params: [
                { name: "keyword", title: "关键词", type: "input", value: "" },
                { name: "page", title: "页码", type: "page" },
                { name: "sort_by", title: "排序", type: "enumeration", value: "", enumOptions: getSortOptions() }
            ]
        },
        {
            id: "loadResource",
            title: "MissAV 播放源",
            description: "智能提取关联上下文番号并多路自动抓取 MissAV 正片链接供给播放",
            functionName: "loadResource",
            type: "stream",
            params: []
        }
    ],
    search: {
        title: "🌐 全局搜索",
        functionName: "searchGlobal",
        params: [
            { name: "keyword", title: "关键词", type: "input", description: "全网资源多维度快速功能整合联动检索", value: "" },
            { name: "page", title: "页码", type: "page", value: "1" },
            { name: "sort_by", title: "排序", type: "enumeration", value: "", enumOptions: getSortOptions() }
        ]
    }
};


// =================================================================
// 2. 全局环境核心配置与内存高速缓存定义段
// =================================================================

const BASE_URL = "https://missav.ai";
const AVATAR_BASE_URL = "https://missav.live";
const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, Decline/605.1.15) Version/17.1 Safari/605.1.15",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Referer": "https://missav.ai/",
    "Connection": "keep-alive"
};

const PEOPLE_AVATAR_CACHE = {};
const VIDEO_URL_CACHE = {}; 
const CACHE_TTL = 2 * 60 * 60 * 1000; 
const RECENT_UPDATES_CATEGORY = "recent_updates";
const RECENT_UPDATES_ENDPOINT = "cn/new";


// =================================================================
// 3. 全数据封闭式提升工厂函数 (Hoisted Factories)
// =================================================================

function getSortOptions() {
    return [
        { title: "默认排序", value: "" },
        { title: "发行日期", value: "released_at" },
        { title: "最近更新", value: "published_at" },
        { title: "收藏数", value: "saved" },
        { title: "今日浏览数", value: "today_views" },
        { title: "本周浏览数", value: "weekly_views" },
        { title: "本月浏览数", value: "monthly_views" },
        { title: "总浏览数", value: "views" }
    ];
}

function getActressOptions() {
    return [
        { title: "🌸 热门女优看板（支持多维排序筛选）", value: "cn/actresses/%E7%80%AC%E6%88%B8%E7%92%B0%E5%A5%88" },
        { title: "小宵こ伴", value: "cn/actresses/%E5%B0%F0%E5%AE%B5%E3%81%93%E3%81%AA%E3%82%93" },
        { title: "河北彩花", value: "cn/actresses/%E6%B2%B2%E5%8C%97%E5%BD%A9%E8%8A%B1" }, 
        { title: "新有菜", value: "actresses/%E6%A9%8B%E6%9C%AC%E6%9C%89%E8%8F%9C%20%28%E6%96%B0%E6%9C%89%E8%8F%9C%29" },
        { title: "石川澪", value: "cn/actresses/%E7%9F%B3%E5%B7%9D%E6%BE%AA" },
        { title: "逢泽みゆ", value: "cn/actresses/%E9%80%A2%E6%B2%A2%E3%81%BF%E3%82%86" },
        { title: "樱空もも", value: "cn/actresses/%E6%A1%9C%E7%A9%BA%E3%82%82%E3%82%82" },
        { title: "神木麗", value: "cn/actresses/%E7%A5%9E%E6%9C%A8%E9%BA%97" },
        { title: "古川伊织", value: "cn/actresses/%E5%8F%A4%E5%B7%9D%E4%BC%8A%E7%BB%AA" },
        { title: "松本一香", value: "cn/actresses/%E6%9D%BE%E6%9C%AC%E4%B8%80%E9%A6%99" },
        { title: "美园和花", value: "cn/actresses/%E7%BE%8E%E5%9B%AD%E5%92%8C%E8%8A%B1" },
        { title: "北冈果林", value: "cn/actresses/%E5%8C%97%E5%B2%A1%E6%9E%9C%E6%9E%97" },
        { title: "柏木こなつ", value: "cn/actresses/%E6%9F%8F%E6%9C%A8%E3%81%93%E3%81%AA%E3%81%A4" },
        { title: "浅野こころ", value: "cn/actresses/%E6%9F%8F%E6%9C%A8%E3%81%93%E3%81%AA%E3%81%A4" },
        { title: "北野未奈", value: "cn/actresses/%E5%8C%97%E9%87%8E%E6%9C%AA%E5%A5%88" },
        { title: "清原みゆう", value: "cn/actresses/%E6%B8%85%E5%8E%9F%E3%81%BF%E3%82%86%E3%81%86" },
        { title: "沙月惠奈", value: "cn/actresses/%E6%B2%99%E6%83%A0%E5%A5%88" },
        { title: "miru", value: "cn/actresses/miru" },
        { title: "七森莉莉", value: "cn/actresses/%E4%B8%83%E6%A3%AE%E8%8E%89%E8%8E%89" },
        { title: "七濑爱丽丝", value: "cn/actresses/%E4%B8%83%E6%BF%91%E7%88%B1%E4%B8%BD%E4%B8%9D" },
        { title: "外尾芽衣", value: "cn/actresses/%E9%B9%AB%E5%B0%BE%E8%8A%BD%E8%A1%A3" },
        { title: "博多彩叶", value: "cn/actresses/%E5%8D%9A%E5%A4%9A%E5%BD%A9%E5%8F%B6" },
        { title: "白上咲花", value: "cn/actresses/%E7%99%BD%E4%B8%8A%E5%92%B2%E8%8A%B1" },
        { title: "田野忧", value: "cn/actresses/%E7%94%B0%E9%87%8E%E5%BF%A7" },
        { title: "未步なな", value: "cn/actresses/%E6%9C%AA%E6%AD%A5%E3%81%AA%E3%81%AA" },
        { title: "村上悠华", value: "cn/actresses/%E6%9D%11%E4%B8%A8%E6%82%A0%E5%8D%8E" },
        { title: "三田真铃", value: "cn/actresses/%E4%B8%83%E7%94%B0%E7%9C%9F%E9%13%83" },
        { title: "八挂うみ", value: "cn/actresses/%E5%85%AB%E6%8E%9B%E3%81%86%E3%81%BF" },
        { title: "初美なのか", value: "cn/actresses/%E5%88%9D%E7%BE%8E%E3%81%AA%E3%81%AE%E3%81%8B" },
        { title: "宫下玲奈", value: "cn/actresses/%E5%AE%AE%E4%B8%8B%E7%8E%B2%E5%A5%88" },
        { title: "新木希空", value: "cn/actresses/%E6%96%B0%E6%9C%A8%E5%B8%8C%E7%A9%BA" },
        { title: "明里つむぎ", value: "cn/actresses/%E6%98%8E%E9%87%8C%E3%81%A4%E3%82%80%E3%81%8E" },
        { title: "小野六花", value: "cn/actresses/%E5%B0%8F%E9%87%8E%E5%85%AD%E8%8A%B1" },
        { title: "宇都宫紫苑", value: "cn/actresses/%E5%AE%87%E9%83%BD%E5%AE%AE%E7%B4%AB%E8%8B%91" },
        { title: "本庄鈴", value: "cn/actresses/%E6%9C%AC%E5%BA%84%E9%88%B4" },
        { title: "桃乃木かな", value: "cn/actresses/%E6%A1%83%E4%B9%83%E6%9C%A8%E3%81%8B%E3%81%AA" },
        { title: "枫ふうa", value: "cn/actresses/%E6%A1%AB%E3%B5%B5%E3%81%A6%E3%81%92" },
        { title: "枫カレン", value: "cn/actresses/%E6%A5%93%E3%2%AB%E3%83%AC%E3%83%B3" },
        { title: "凉森れむ", value: "cn/actresses/%E6%B6%BC%E6%A3%AE%E3%82%8C%E3%82%80" },
        { title: "泷本雫叶", value: "cn/actresses/%E7%80%A7%E6%9C%AC%E9%9B%AB%E8%91%89" },
        { title: "田中レモン", value: "cn/actresses/%E7%94%B0%E4%B8%AD%E3%83%AC%E3%83%A2%E3%83%B3" },
        { title: "相沢みなみ", value: "cn/actresses/%E7%9B%B8%E6%B2%A2%E3%81%BF%E3%81%AA%E3%81%BF" },
        { title: "美ノ嶋めぐり", value: "cn/actresses/%E7%BE%8E%E3%83%8E%E5%B6%8B%E3%82%81%E3%81%90%E3%82%8A" },
        { title: "野々浦暖", value: "cn/actresses/%E9%87%8E%E3%0%85%E6%B5%A6%E6%9A%96" },
        { title: "青空ひかり", value: "cn/actresses/%E9%9D%92%E7%A9%BA%E3%81%B2%E3%81%8B%E3%82%8A" },
        { title: "三上悠亚", value: "cn/actresses/%E4%B8%83%E4%B8%8A%E6%82%A0%E4%BA%9A" },
        { title: "榊原萌", value: "cn/actresses/%E6%A6%8A%E5%8E%9F%E8%90%8C" },
        { title: "彩月七绪", value: "cn/actresses/%E5%BD%A9%E6%9B%AB%E4%B8%83%E7%BB%AA" },
        { title: "神宫寺奈绪", value: "cn/actresses/%E7%A5%9E%E5%AE%AB%E5%AF%BA%E5%A5%88%E7%BB%AA" },
        { title: "有村のぞみ", value: "cn/actresses/%E6%9C%99%E6%9D%11%E3%81%AE%E3%81%9E%E3%81%BF" }
    ];
}

function getGenreOptions() {
    return [
        { title: "高清", value: "cn/genres/%E9%AB%98%E6%B8%85" },
        { title: "独家", value: "cn/genres/%E7%8B%AC%E5%AE%B6" },
        { title: "中出", value: "cn/genres/%E4%B8%AD%E5%87%BA" },
        { title: "单体作品", value: "cn/genres/%E5%8D%95%E4%BD%93%E4%BD%9C%E5%93%81" },
        { title: "巨乳", value: "cn/genres/%E5%B7%A8%E4%B9%B3" },
        { title: "人妻", value: "cn/genres/%E4%BA%BA%E5%A6%BB" },
        { title: "熟女", value: "cn/genres/%E7%86%9F%E5%A5%B3" },
        { title: "素人", value: "cn/genres/%E7%B4%A0%E4%BA%BA" },
        { title: "美少女", value: "cn/genres/%E7%BE%8E%E5%B0%91%E5%A5%B3" },
        { title: "口交", value: "cn/genres/%E5%8F%A3%E4%BA%A4" },
        { title: "多人运动", value: "cn/genres/%E5%A4%9A%E4%BA%BA%E8%BF%90%E5%8A%A8" },
        { title: "薄格", value: "cn/genres/%E8%96%84%E6%A0%BC" },
        { title: "骑乘", value: "cn/genres/%E9%AA%91%E4%B9%98" },
        { title: "痴女", value: "cn/genres/%E7%97%B4%E5%A5%B3" },
        { title: "4小时以上", value: "cn/genres/4%E5%B0%8F%E6%97%B6%E4%BB%A5%E4%B8%8A" },
        { title: "女高中生", value: "cn/genres/%E5%A5%B3%E9%AB%98%E4%B8%AD%E7%94%9F" },
        { title: "潮吹", value: "cn/genres/%E6%BD%AE%E5%90%B9" },
        { title: "苗条", value: "cn/genres/%E8%8B%97%E6%9D%A1" },
        { title: "自拍", value: "cn/genres/%E8%87%AA%E6%8B%8D" },
        { title: "合集", value: "cn/genres/%E5%90%88%E9%9B%86" },
        { title: "乳交", value: "cn/genres/%E4%B9%B1%E4%BC%A6" },
        { title: "恋物癖", value: "cn/genres/%E6%81%8B%E7%89%A9%E7%99%96" },
        { title: "美乳", value: "cn/genres/%E7%BE%8E%E4%B9%B3" },
        { title: "NTR", value: "cn/genres/NTR" },
        { title: "企划", value: "cn/genres/%E4%BC%81%E5%88%92" },
        { title: "乱伦", value: "cn/genres/%E4%B9%B1%E4%BC%A6" },
        { title: "搭讪", value: "cn/genres/%E6%90%AD%E8%AE%AA" },
        { title: "颜射", value: "cn/genres/%E9%A2%9C%E5%B0%84" },
        { title: "淫乱", value: "cn/genres/%E6%B7%AB%E4%B9%B1" },
        { title: "偷拍", value: "cn/genres/%E5%81%B7%E6%8B%8D" },
        { title: "剧情", value: "cn/genres/%E5%89%A7%E6%83%85" },
        { title: "自慰", value: "cn/genres/%E8%87%AA%E6%85%B0" },
        { title: "4K", value: "cn/genres/4K" },
        { title: "手淫", value: "cn/genres/%E6%89%8B%E6%B7%AB" },
        { title: "姐姐", value: "cn/genres/%E5%A7%90%E5%A7%90" },
        { title: "羞辱", value: "cn/genres/%E7%BE%9E%E8%BE%B1" }
    ];
}

function getMakerOptions() {
    return [
        { title: "Moody's", value: "cn/makers/Moody%27s" },
        { title: "Prestige", value: "cn/makers/Prestige" },
        { title: "Madonna", value: "cn/makers/Madonna" },
        { title: "S1", value: "cn/makers/S1" },
        { title: "SOD", value: "cn/makers/SOD" },
        { title: "IdeaPocket", value: "cn/makers/IdeaPocket" },
        { title: "Attackers", value: "cn/makers/Attackers" },
        { title: "Glory Quest", value: "cn/makers/Glory%20Quest" },
        { title: "ビッグモーカル", value: "cn/makers/%E3%83%93%E3%83%83%E3%82%B0%E3%83%A2%E3%83%BC%E3%82%AB%E3%83%AB" },
        { title: "NATURAL HIGH", value: "cn/makers/NATURAL%20HIGH" },
        { title: "Wanz Factory", value: "cn/makers/Wanz%20Factory" },
        { title: "Takara Visual", value: "cn/makers/Takara%20Visual" },
        { title: "Fc2", value: "cn/makers/Fc2" },
        { title: "Premium", value: "cn/makers/Premium" },
        { title: "Fitch", value: "cn/makers/Fitch" },
        { title: "VENUS", value: "cn/makers/VENUS" },
        { title: "DEEP'S", value: "cn/makers/DEEP%27S" },
        { title: "本中", value: "cn/makers/%E6%9C%AC%E4%B8%AD" },
        { title: "Hunter", value: "cn/makers/Hunter" },
        { title: "溜池ゴロー", value: "cn/makers/%E6%BA%9C%E6%B1%A0%E3%82%B4%E3%83%AD%E3%83%BC" },
        { title: "TMA", value: "cn/makers/TMA" },
        { title: "センタービレッジ", value: "cn/makers/%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%93%E3%83%AC%E3%83%83%E3%82%B8" },
        { title: "Das", value: "cn/makers/Das" },
        { title: "Waap Entertainment", value: "cn/makers/Waap%20Entertainment" },
        { title: "Crystal-Eizou", value: "cn/makers/Crystal-Eizou" },
        { title: "kawaii", value: "cn/makers/kawaii" },
        { title: "ゴーゴーズ", value: "cn/makers/%E3%82%B4%E3%83%BC%E3%82%B4%E3%83%BC%E3%82%BA" },
        { title: "プラネットプラス", value: "cn/makers/%E3%83%97%E3%83%A9%E3%83%8D%E3%83%83%E3%83%88%E3%83%97%E3%83%A9%E3%82%B9" },
        { title: "OPPAI", value: "cn/makers/OPPAI" },
        { title: "STAR PARADISE", value: "cn/makers/STAR%20PARADISE" },
        { title: "E-BODY", value: "cn/makers/E-BODY" },
        { title: "セレブの友", value: "cn/makers/%E3%82%BB%E3%83%AC%E3%83%96%E3%81%AE%E5%8F%8B" },
        { title: "ドグマ", value: "cn/makers/%E3%83%89%E3%82%B0%E3%83%9E" },
        { title: "Alice Japan", value: "cn/makers/Alice%20Japan" },
        { title: "KM Produce", value: "cn/makers/KM%20Produce" },
        { title: "桃太郎映像出版", value: "cn/makers/%E6%A1%83%E5%A4%AA%E9%83%8E%E6%98%A0%E5%83%8F%E5%87%BA%E7%89%88" }
    ];
}


// =================================================================
// 4. 基础依赖底层通用辅助工具函数
// =================================================================

function resolveUrl(path) {
    if (!path) return "";
    let cleaned = String(path).replace(/(https?:\/\/[^\/]+)?\/dm\d+\//, "$1/").replace(/^dm\d+\//, "");
    if (cleaned.startsWith("http")) return cleaned;
    return `${BASE_URL}${cleaned.startsWith("/") ? cleaned : `/${cleaned}`}`;
}

function resolveAvatarImageUrl(path) {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${AVATAR_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function appendUrlParams(url, page = 1, sort_by = "", filters = "") {
    const params = [];
    if (filters) params.push(`filters=${encodeURIComponent(filters)}`);
    if (sort_by) params.push(`sort=${encodeURIComponent(sort_by)}`);
    if (page > 1) params.push(`page=${page}`);
    if (!params.length) return url;
    return url + (url.includes("?") ? "&" : "?") + params.join("&");
}

function buildListUrl(endpoint, page = 1, filters = "", sort_by = "") {
    return appendUrlParams(resolveUrl(endpoint), page, sort_by, filters);
}

function resolveEndpointByPrimaryCategory(primaryCategory, endpoint) {
    if (primaryCategory === "recent_updates" || primaryCategory === "dm539/cn/new") {
        return "cn/new";
    }
    return endpoint || "cn/release";
}

function isRecentUpdatesCategory(primaryCategory) {
    return primaryCategory === RECENT_UPDATES_CATEGORY || primaryCategory === RECENT_UPDATES_ENDPOINT;
}

function extractVideoId(href) {
    if (!href) return "";
    const cleanHref = href.split('#')[0].split('?')[0];
    const slug = cleanHref.split('/').pop() || "";
    return slug.replace(/-(uncensored-leak|chinese-subtitle)$/, "").toUpperCase();
}

function buildJavTrailersId(text) {
    const raw = String(text || "").toUpperCase();
    const match = raw.match(/\b([A-Z0-9]+)-?(\d{2,5})\b/);
    if (!match) return "";
    return `${match[1].toLowerCase()}${match[2].padStart(5, "0")}`;
}

function unpackPacker(html) {
    if (!html) return "";
    let unpackedResults = [];
    const packerRegex = /eval\s*\(\s*function\s*\(\s*p\s*,\s*a\s*,\s*c\s*,\s*k\s*,\s*e\s*,\s*d\s*\)[\s\S]+?\}\s*\(\s*'([\s\S]+?)'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*'([\s\S]+?)'[\s\S]+?\)/g;
    
    let match;
    while ((match = packerRegex.exec(html)) !== null) {
        try {
            let p = match[1].replace(/\\'/g, "'");
            let a = parseInt(match[2], 10);
            let c = parseInt(match[3], 10);
            let k = match[4].split('|');
            
            let cIdx = c;
            while (cIdx > 0) {
                cIdx--;
                if (k[cIdx]) {
                    let w = cIdx.toString(36);
                    let reg = new RegExp('\\b' + w + '\\b', 'g');
                    p = p.replace(reg, k[cIdx]);
                }
            }
            unpackedResults.push(p);
        } catch (err) {}
    }
    return unpackedResults.join('\n');
}


// =================================================================
// 5. 跨模块流媒体提供者流接口
// =================================================================

function getText(value) { return String(value || "").trim(); }

function extractSearchCode(text, options = {}) {
    const allowPureNumeric = options.allowPureNumeric !== false;
    const s = getText(text).toUpperCase();
    if (!s) return "";
    const normalized = s.replace(/\./g, " ").replace(/_/g, "-").replace(/\s+/g, " ").trim();
    const patterns = [
        /\bFC2(?:[- ]?PPV)?[- ]?\d{5,8}\b/,
        /\bCARIB[- ]?\d{6,8}\b/,
        /\b1PONDO[- ]?\d{6,8}\b/,
        /\bHEYZO[- ]?\d{3,6}\b/,
        /\bT28[- ]?\d{6,8}\b/,
        /\b(?:S2M|MIAA|SSNI|SNIS|IPX|IPZZ|SSIS|JUQ|MIDE|MIDV|STARS|ABW|RKI|DVAJ|WANZ|LULU|DLDSS|VRTM|SDMU|SDDE|MKMP|HMN|MUDR|ADN|CAWD|PPPE|PRED|MGR|SHKD|MXGS|FSDSS|JUL|KTB|MIAB|GVH|MIMK|JUY|JUTA|IDBD|HND|DASD|CLO|BF|HONB|ROE|CEMD|MIUM|NITR|RCTD|RCT|IPVR|MIBD|JUR|JURD|SOE|ORE|PYO|START|NSFS)\s*[-_ ]?\d{2,6}[A-Z]?(?:[-_ ]?[A-Z]{0,4})?\b/,
        /\b[A-Z]{2,10}\s*[-_ ]?\d{2,8}[A-Z]?\b/
    ];
    if (allowPureNumeric) patterns.push(/\b\d{6,8}\b/);
    for (const reg of patterns) {
        const match = normalized.match(reg);
        if (match?.[0]) return match[0].replace(/\s+/g, "").replace(/_/g, "-").replace(/-+/g, "-").toUpperCase();
    }
    return "";
}

function collectStringValues(value, depth = 0, out = [], visited = new Set()) {
    if (value === null || value === undefined || depth > 5) return out;
    const valueType = typeof value;
    if (valueType === "string" || valueType === "number") {
        const text = String(value).trim();
        if (text) out.push(text);
        return out;
    }
    if (valueType !== "object" || visited.has(value)) return out;
    visited.add(value);
    if (Array.isArray(value)) {
        for (const item of value) collectStringValues(item, depth + 1, out, visited);
        return out;
    }
    for (const key of Object.keys(value)) collectStringValues(value[key], depth + 1, out, visited);
    return out;
}

function extractCodeFromParams(params = {}) {
    const priorityCandidates = [
        params.code, params.videoId, params.number, params.fileName, params.filename, params.file_name,
        params.name, params.path, params.filePath, params.file_path, params.id, params.title, params.seriesName
    ];
    if (params.tmdbInfo) priorityCandidates.push(params.tmdbInfo.title, params.tmdbInfo.name, params.tmdbInfo.originalTitle);
    if (params.mediaSource) priorityCandidates.push(params.mediaSource.name, params.mediaSource.fileName, params.mediaSource.path);
    for (const value of priorityCandidates) {
        const code = extractSearchCode(value, { allowPureNumeric: true });
        if (code) return code;
    }
    const allStrings = collectStringValues(params);
    for (const value of allStrings) {
        const code = extractSearchCode(value, { allowPureNumeric: false });
        if (code) return code;
    }
    return "";
}

function detectChineseSubtitle(html = "") {
    if (!html) return false;
    const kwMatch = html.match(/<meta\s+name=["']keywords["']\s+content=["']([^"']+)["']/i);
    if (kwMatch && kwMatch[1]) {
        const firstKeyword = kwMatch[1].split(/[,，]/)[0]?.trim();
        if (firstKeyword === "中文字幕") return true;
    }
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    if (descMatch && descMatch[1]) {
        const desc = descMatch[1];
        if (desc.includes("中文字幕版") || desc.includes("更新至中文字幕") || desc.includes("中文字幕")) return true;
    }
    const lower = html.toLowerCase();
    return lower.includes("chinese-subtitle") || lower.includes("chinese subtitle");
}

// 🌟【流媒体分轨控制中心】：严格依仗服务器真实物理流数据，不作任何无端的画质猜测伪造！采用“番号+画质后缀”标准格式供应
async function loadResource(params = {}) {
    try {
        const code = extractCodeFromParams(params);
        if (!code) return [];

        let cached = VIDEO_URL_CACHE[code.toUpperCase()];
        let videoUrl = (cached && (Date.now() - cached.timestamp < CACHE_TTL)) ? cached.url : null;
        let currentReferer = cached?.referer || `${BASE_URL}/cn/search/${encodeURIComponent(code.trim())}`;
        let detailHtml = "";

        if (!videoUrl) {
            let searchUrl = `${BASE_URL}/cn/search/${encodeURIComponent(code.trim())}`;
            const res = await Widget.http.get(searchUrl, { headers: HEADERS });
            let html = res.data;
            detailHtml = html;
            let detailLink = searchUrl;

            const $ = Widget.html.load(html);

            if ($('#videodetails').length > 0 || $('meta[property="og:type"]').attr('content') === 'video.movie') {
                detailLink = $('meta[property="og:url"]').attr('content') || searchUrl;
            } else {
                let firstHref = "";
                const targetLoose = code.toUpperCase().replace(/[\s_\-]+/g, "");
                
                $("div.group").each((i, el) => {
                    const $el = $(el);
                    const $link = $el.find("a.text-secondary");
                    const href = $link.attr("href");
                    if (href) {
                        const videoId = extractVideoId(href);
                        if (videoId.replace(/[\s_\-]+/g, "") === targetLoose) {
                            firstHref = href;
                            return false;
                        }
                    }
                });

                if (!firstHref) {
                    firstHref = $("div.group a.text-secondary").first().attr("href");
                }

                if (firstHref) {
                    detailLink = resolveUrl(firstHref);
                    const detailRes = await Widget.http.get(detailLink, { headers: HEADERS });
                    detailHtml = detailRes.data;
                } else {
                    return [];
                }
            }

            currentReferer = detailLink;
            const $detail = Widget.html.load(detailHtml);

            $detail('script').each((i, el) => {
                const scriptContent = $detail(el).html() || "";
                if (scriptContent.includes('surrit.com') && scriptContent.includes('.m3u8')) {
                    const matches = scriptContent.match(/https:\/\/surrit\.com\/[a-f0-9\-]+\/[^"'\s]*\.m3u8/g);
                    if (matches && matches.length > 0) { videoUrl = matches[0]; return false; }
                }
                if (!videoUrl && scriptContent.includes('eval(function')) {
                    const unpacked = unpackPacker(scriptContent);
                    if (unpacked) {
                        const matches = unpacked.match(/https:\/\/surrit\.com\/[a-f0-9\-]+\/[^"'\s]*\.m3u8/g);
                        if (matches && matches.length > 0) { videoUrl = matches[0]; return false; }
                    }
                    const uuidMatches = scriptContent.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g);
                    if (uuidMatches && uuidMatches.length > 0) { videoUrl = `https://surrit.com/${uuidMatches[0]}/playlist.m3u8`; return false; }
                }
            });

            if (!videoUrl) {
                const matchSimple = detailHtml.match(/source\s*=\s*['"]([^'"]+)['"]/);
                if (matchSimple) videoUrl = matchSimple[1];
            }
            
            if (videoUrl) {
                VIDEO_URL_CACHE[code.toUpperCase()] = { url: videoUrl, timestamp: Date.now(), referer: detailLink };
            }
        }

        if (videoUrl) {
            const resources = [];
            const trackName = code.toUpperCase();
            
            // 默认主自适应多码率流选项
            resources.push({
                name: trackName, 
                description: `自适应流`,
                url: videoUrl,
                customHeaders: { "Referer": currentReferer, "User-Agent": HEADERS["User-Agent"], "Origin": "https://missav.ai" }
            });

            // 链路 1：基于解密后的 Packer 源码寻找被硬编码登记的独立物理分轨
            if (detailHtml) {
                try {
                    const unpacked = unpackPacker(detailHtml);
                    if (unpacked) {
                        const hqMatches = unpacked.match(/https?:\/\/[^"'\s<>]+?\.(?:m3u8|mp4)/g) || [];
                        for (const trackUrl of hqMatches) {
                            let suffix = "";
                            if (trackUrl.toLowerCase().includes("/1080p/") || trackUrl.toLowerCase().includes("1080")) suffix = " - 1080P";
                            else if (trackUrl.toLowerCase().includes("/720p/") || trackUrl.toLowerCase().includes("720")) suffix = " - 720P";
                            else if (trackUrl.toLowerCase().includes("/480p/") || trackUrl.toLowerCase().includes("480")) suffix = " - 480P";

                            if (suffix && !resources.some(r => r.url === trackUrl)) {
                                resources.push({
                                    name: trackName + suffix,
                                    description: `物理分轨`,
                                    url: trackUrl,
                                    customHeaders: { "Referer": currentReferer, "User-Agent": HEADERS["User-Agent"], "Origin": "https://missav.ai" }
                                });
                            }
                        }
                    }
                } catch (packerErr) {}
            }

            // 链路 2：针对缓存被热启动唤醒场景下，异步拉取顶级 Master 播放索引文件扫描真实具备的子流特征
            if (videoUrl.includes(".m3u8") && resources.length <= 1) {
                try {
                    const masterRes = await Widget.http.get(videoUrl, { headers: { "Referer": currentReferer, "User-Agent": HEADERS["User-Agent"] } });
                    const m3u8Content = masterRes.data || "";
                    const lines = m3u8Content.split(/\r?\n/);
                    
                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i].trim();
                        if (!line || line.startsWith("#")) continue;

                        let suffix = "";
                        if (line.toLowerCase().includes("1080p") || line.toLowerCase().includes("1080")) suffix = " - 1080P";
                        else if (line.toLowerCase().includes("720p") || line.toLowerCase().includes("720")) suffix = " - 720P";
                        else if (line.toLowerCase().includes("480p") || line.toLowerCase().includes("480")) suffix = " - 480P";

                        if (suffix) {
                            let forcedHqUrl = line;
                            if (!forcedHqUrl.startsWith("http")) {
                                const urlParts = videoUrl.split("?");
                                const pathPart = urlParts[0];
                                const queryPart = urlParts[1] ? urlParts[1] : "";
                                const baseUrl = pathPart.substring(0, pathPart.lastIndexOf("/") + 1);
                                
                                if (forcedHqUrl.includes("?")) {
                                    forcedHqUrl = baseUrl + forcedHqUrl + (queryPart ? "&" + queryPart : "");
                                } else {
                                    forcedHqUrl = baseUrl + forcedHqUrl + (queryPart ? "?" + queryPart : "");
                                }
                            }

                            if (!resources.some(r => r.url === forcedHqUrl)) {
                                resources.push({
                                    name: trackName + suffix,
                                    description: `多流解析分轨`,
                                    url: forcedHqUrl,
                                    customHeaders: { "Referer": currentReferer, "User-Agent": HEADERS["User-Agent"], "Origin": "https://missav.ai" }
                                });
                            }
                        }
                    }
                } catch (m3u8Err) {}
            }

            return resources;
        }
        return [];
    } catch (e) {
        return [];
    }
}


// =================================================================
// 6. 网页大分类列表爬虫提取过滤核心层
// =================================================================

function parseVideoList(html, options = {}) {
    const { currentPeople = null, currentGenre = null } = options;
    if (!html || html.includes("Just a moment")) {
        throw new Error("被 Cloudflare 拦截，请在 App 内尝试通过 WebView 验证过盾。");
    }

    const $ = Widget.html.load(html);

    if ($('#videodetails').length > 0 || $('meta[property="og:type"]').attr('content') === 'video.movie') {
        const title = $('meta[property="og:title"]').attr('content') || $('h1').text().trim();
        let href = $('meta[property="og:url"]').attr('content') || "";
        if (href) href = resolveUrl(href);
        
        const poster = $('meta[property="og:image"]').attr('content') || $('video').attr('poster') || "";
        const videoId = extractVideoId(href) || buildJavTrailersId(title);
        const finalCover = poster ? resolveUrl(poster) : (videoId ? `https://fourhoi.com/${videoId.toLowerCase()}/cover-t.jpg` : "");
        
        if (title) {
            return [{
                id: href || "redirected_video",
                type: "url", 
                mediaType: "movie",
                title: title,
                posterPath: finalCover,
                backdropPath: finalCover,
                link: href,
                description: `番号精准命中: ${videoId || "点击直接观影"}`,
                customHeaders: HEADERS
            }]; 
        }
    }

    const results = [];
    $("div.group").each((i, el) => {
        const $el = $(el);
        const $link = $el.find("a.text-secondary");
        let href = $link.attr("href") || "";

        if (href) {
            href = resolveUrl(href);
            const title = $link.text().trim();
            const $img = $el.find("img");
            const imgSrc = $img.attr("data-src") || $img.attr("src") || "";
            const duration = $el.find(".absolute.bottom-1.right-1").text().trim();
            const videoId = extractVideoId(href);
            const finalCover = videoId ? `https://fourhoi.com/${videoId.toLowerCase()}/cover-t.jpg` : imgSrc;

            const item = {
                id: href,
                type: "url", 
                mediaType: "movie",
                title,
                posterPath: finalCover,
                backdropPath: finalCover,
                link: href,
                description: `时长: ${duration}${videoId ? ` | 番号: ${videoId}` : ""}`,
                customHeaders: HEADERS
            };

            const peopleItems = [];
            if (currentPeople) peopleItems.push(currentPeople);

            $el.find('a[href*="/actresses/"], a[href*="actresses"]').each((_, peopleEl) => {
                const $people = $(peopleEl);
                const people = buildPeopleItem($people.text(), getImageFromElement($, $people), $people.attr("href") || "");
                if (!people) return;
                const existingIndex = peopleItems.findIndex((item) => item.id === people.id || normalizePeopleKey(item.title) === normalizePeopleKey(people.title));
                if (existingIndex >= 0) {
                    if (!peopleItems[existingIndex].avatar && people.avatar) peopleItems[existingIndex].avatar = people.avatar;
                    return;
                }
                peopleItems.push(people);
            });

            if (peopleItems.length) item.peoples = peopleItems;
            if (currentGenre) item.genreItems = [currentGenre];

            results.push(item);
        }
    });

    return results;
}


// =================================================================
// 7. 三方预告片调度数据清洗中心
// =================================================================

function parseJavCodeParts(title) {
    const raw = String(title || "").toUpperCase();
    const match = raw.match(/\b([A-Z0-9]+)-?(\d{2,5})\b/);
    if (!match) return null;
    const prefix = match[1];
    const prefixLower = prefix.toLowerCase();
    const number5 = match[2].padStart(5, "0");
    const numericContentPrefixMap = { WSA: "2" };
    const numericContentPrefix = numericContentPrefixMap[prefix] || "";
    return {
        prefix, prefixLower, number: match[2], number3: match[2].padStart(3, "0"), number5,
        code: `${numericContentPrefix}${prefixLower}${number5}`, plainCode: `${prefixLower}${number5}`
    };
}

const JAVTRAILERS_URL_CACHE = {};
const JAVTRAILERS_URL_PROMISE_CACHE = {};
const JAVTRAILERS_FETCH_TIMEOUT_MS = 1200;
const JAVTRAILERS_MGSTAGE_PREFIXES = new Set(["ABF", "ABW", "JUFE", "MAAN", "PPT", "SIRO", "LUXU", "GANA"]);

function buildJavTrailersFallbackUrl(title) {
    const parts = parseJavCodeParts(title);
    if (!parts) return "";
    const first = parts.code[0];
    const folder = parts.code.slice(0, 3);
    return `https://media.javtrailers.com/hlsvideo/freepv/${first}/${folder}/${parts.code}/playlist.m3u8`;
}

function isJavTrailersMgstageTitle(title) {
    const parts = parseJavCodeParts(title);
    return !!parts && JAVTRAILERS_MGSTAGE_PREFIXES.has(parts.prefix);
}

function shouldFetchJavTrailersPage(title) {
    const parts = parseJavCodeParts(title);
    if (!parts) return false;
    return isJavTrailersMgstageTitle(title) || parts.prefix.includes("VR");
}

function buildJavTrailersPageIds(title) {
    const parts = parseJavCodeParts(title);
    if (!parts) return [];
    const ids = [];
    if (JAVTRAILERS_MGSTAGE_PREFIXES.has(parts.prefix)) ids.push(`118${parts.prefixLower}${parts.number5}`);
    ids.push(parts.code);
    return ids.filter((id, index, arr) => id && arr.indexOf(id) === index);
}

function extractJavTrailersMediaUrl(html) {
    if (!html || html.includes("Just a moment")) return "";
    const source = String(html);
    const mediaMatches = source.match(/https:\/\/media\.javtrailers\.com\/[^"'\\\s<]+?(?:\.m3u8|\.mp4)/g);
    if (mediaMatches && mediaMatches.length > 0) return mediaMatches[0];
    const mgstageMatches = source.match(/https:\/\/sample\.mgstage\.com\/[^"'\\\s<]+?\.mp4/g);
    if (mgstageMatches && mgstageMatches.length > 0) return mgstageMatches[0];
    const dmmMatches = source.match(/https:\/\/cc3001\.dmm\.co\.jp\/[^"'\\\s<]+?(?:\.m3u8|\.mp4)/g);
    return dmmMatches && dmmMatches.length > 0 ? dmmMatches[0] : "";
}

function fetchJavTrailersPageUrl(pageId) {
    return Widget.http.get(`https://javtrailers.com/video/${pageId}`, { headers: HEADERS })
        .then((res) => extractJavTrailersMediaUrl(res.data))
        .catch(() => "");
}

async function buildJavTrailersUrl(title) {
    const parts = parseJavCodeParts(title);
    if (!parts) return "";
    if (Object.prototype.hasOwnProperty.call(JAVTRAILERS_URL_CACHE, parts.code)) return JAVTRAILERS_URL_CACHE[parts.code];

    const fallbackUrl = buildJavTrailersFallbackUrl(title);
    const isMgstage = isJavTrailersMgstageTitle(title);
    if (!shouldFetchJavTrailersPage(title)) {
        JAVTRAILERS_URL_CACHE[parts.code] = fallbackUrl;
        return fallbackUrl;
    }

    if (!JAVTRAILERS_URL_PROMISE_CACHE[parts.code]) {
        const pageIds = buildJavTrailersPageIds(title);
        JAVTRAILERS_URL_PROMISE_CACHE[parts.code] = Promise.all(pageIds.map((pageId) => fetchJavTrailersPageUrl(pageId)))
            .then((urls) => urls.find(Boolean) || (isMgstage ? "" : fallbackUrl))
            .then((url) => {
                if (url || !isMgstage) JAVTRAILERS_URL_CACHE[parts.code] = url;
                return url;
            });
    }

    try {
        if (isMgstage) return await JAVTRAILERS_URL_PROMISE_CACHE[parts.code];
        return await Promise.race([
            JAVTRAILERS_URL_PROMISE_CACHE[parts.code],
            new Promise((resolve) => setTimeout(() => resolve(fallbackUrl), JAVTRAILERS_FETCH_TIMEOUT_MS))
        ]);
    } catch (e) {
        return isMgstage ? "" : fallbackUrl;
    }
}

function buildTrailerCoverUrl(title) {
    const parts = parseJavCodeParts(title);
    if (!parts) return "";
    const mgstageCoverPrefixes = new Set(["ABF", "ABW", "IPX", "JUFE", "MEYD", "SSNI", "STARS", "PPPD", "WANZ", "EBOD", "JUL", "SHKD", "MIDE", "S1", "SQTE", "SNOS", "OFJE"]);
    if (mgstageCoverPrefixes.has(parts.prefix)) {
        return `https://image.mgstage.com/images/prestige/${parts.prefixLower}/${parts.number3}/pb_e_${parts.prefixLower}-${parts.number3}.jpg`;
    }
    return `https://pics.dmm.co.jp/digital/video/${parts.code}/${parts.code}pl.jpg`;
}

function buildMissavListCoverUrl(link) {
    const videoId = extractVideoId(link || "");
    return videoId ? `https://fourhoi.com/${videoId.toLowerCase()}/cover-t.jpg` : "";
}


// =================================================================
// 8. 列表级加载驱动主入口段
// =================================================================

async function loadRecentUpdates(params = {}) {
    const { page = 1, sort_by = "published_at" } = params;
    return loadList({ primary_category: RECENT_UPDATES_CATEGORY, page, sort_by });
}

async function loadList(params = {}) {
    const { endpoint = "cn/release", page = 1, sort_by = "", filters = "", primary_category = "", peopleId = "", genreId = "" } = params;
    let targetUrl = "";

    if (peopleId) {
        targetUrl = resolveUrl(String(peopleId));
    } else if (genreId) {
        targetUrl = resolveUrl(String(genreId));
    } else {
        targetUrl = resolveUrl(resolveEndpointByPrimaryCategory(primary_category, endpoint));
    }

    let targetSort = (isRecentUpdatesCategory(primary_category) && !peopleId && !genreId) ? (sort_by || "published_at") : sort_by;
    targetUrl = appendUrlParams(targetUrl, page, targetSort, filters);

    const executeFetch = async (url) => {
        const res = await Widget.http.get(url, { headers: HEADERS });
        const currentPeopleId = peopleId ? normalizePeopleId(peopleId) : (endpoint.includes("/actresses/") ? normalizePeopleId(endpoint) : "");
        const currentPeopleTitle = peopleId ? decodeURIComponent(String(peopleId).split('/').pop() || '主演') : (endpoint.includes("/actresses/") ? decodeURIComponent(String(endpoint).split('/').pop() || '主演') : "");
        let currentPeople = null;

        if (currentPeopleId) {
            const cachedAvatar = PEOPLE_AVATAR_CACHE[currentPeopleId] || "";
            const pageAvatar = cachedAvatar || resolveAvatarImageUrl(pickFirstAvatar(Widget.html.load(res.data)));
            if (pageAvatar) PEOPLE_AVATAR_CACHE[currentPeopleId] = pageAvatar;
            currentPeople = buildPeopleContext(currentPeopleId, currentPeopleTitle, pageAvatar);
        }

        return parseVideoList(res.data, {
            currentPeople,
            currentGenre: genreId ? buildGenreContext(normalizeGenreId(genreId), decodeURIComponent(String(genreId).split('/').pop() || '分类')) : null
        });
    };

    try {
        let list = await executeFetch(targetUrl);
        
        if ((!list || list.length === 0) && (peopleId || genreId)) {
            const keyword = decodeURIComponent(String(peopleId || genreId).split('/').pop() || "");
            if (keyword) {
                let fallbackUrl = appendUrlParams(`${BASE_URL}/cn/search/${encodeURIComponent(keyword.trim())}`, page, sort_by, "");
                return await executeFetch(fallbackUrl);
            }
        }
        if (!list || list.length === 0) throw new Error("没有找到任何关联影片。");
        return list;
    } catch (e) {
        if (peopleId || genreId) {
            try {
                const keyword = decodeURIComponent(String(peopleId || genreId).split('/').pop() || "");
                if (keyword) {
                    let fallbackUrl = appendUrlParams(`${BASE_URL}/cn/search/${encodeURIComponent(keyword.trim())}`, page, sort_by, "");
                    let fallbackList = await executeFetch(fallbackUrl);
                    if (fallbackList && fallbackList.length > 0) return fallbackList;
                }
            } catch (innerE) {}
        }
        throw e;
    }
}

async function _executeSearchCore(keyword, page = 1, sort_by = "") {
    if (!keyword) return [];
    let url = appendUrlParams(`${BASE_URL}/cn/search/${encodeURIComponent(keyword.trim())}`, page, sort_by, "");
    try {
        const res = await Widget.http.get(url, { headers: HEADERS });
        return parseVideoList(res.data);
    } catch (e) {
        throw e;
    }
}

async function searchList(params = {}) {
    return _executeSearchCore(params.keyword, params.page, params.sort_by);
}

async function searchGlobal(params = {}) {
    return _executeSearchCore(params.keyword, params.page, params.sort_by);
}


// =================================================================
// 9. 独立详情页流媒体提取解码引擎
// =================================================================

function normalizePeopleId(value) {
    if (!value) return "";
    let id = String(value).trim();
    id = id.replace(BASE_URL, "").replace(/^https?:\/\/[^\/]+\//, "");
    id = id.replace(/^\/+/, "").split("?")[0].replace(/\/$/, "");
    return id;
}

function normalizeGenreId(value) {
    if (!value) return "";
    let id = String(value).trim();
    id = id.replace(BASE_URL, "").replace(/^https?:\/\/[^\/]+\//, "");
    id = id.replace(/^\/+/, "").split("?")[0].replace(/\/$/, "");
    return id;
}

function normalizePeopleKey(value) { return (value || "").replace(/\s+/g, "").replace(/[·•模块]/g, "").toLowerCase(); }
function normalizeDisplayTitle(value) { return (value || "").replace(/\s+/g, " ").trim(); }

function buildPeopleItem(name, avatar, href) {
    const title = normalizeDisplayTitle(name);
    if (!title) return null;
    const peopleId = normalizePeopleId(href) || `cn/actresses/${encodeURIComponent(title)}`;
    return { id: peopleId, title, avatar: avatar ? resolveUrl(avatar) : "", role: "主演" };
}

function buildPeopleContext(id, title, avatar = "") {
    if (!id) return null;
    return { id, title, avatar: avatar ? resolveUrl(avatar) : "", role: "主演" };
}

function buildGenreContext(id, title) {
    if (!id) return null;
    return { id, title };
}

function buildGenreItem(name, href) {
    const title = normalizeDisplayTitle(name);
    const genreId = normalizeGenreId(href);
    if (!title || !genreId || !genreId.includes("/genres/")) return null;
    return { id: genreId, title };
}

function normalizeDetailLabel(label) { return (label || "").replace(/\s+/g, "").replace(/：/g, ":").toLowerCase(); }
function getImageFromElement($, $el) { return $el.find("img").attr("data-src") || $el.find("img").attr("src") || ""; }
function isActressLabel(label) { return ["女优:", "女優:", "actress:", "actresses:"].includes(label); }
function isGenreLabel(label) { return ["类型:", "類型:", "分类:", "分類:", "genre:", "genres:", "category:", "categories:"].includes(label); }

function parseRelatedItems($, html, currentLink) {
    const related = [];
    const seenHrefs = new Set();
    const currentLinkClean = resolveUrl(currentLink).split('#')[0].split('?')[0].toLowerCase();

    $("div.thumbnail, div.group").each((i, el) => {
        const $el = $(el);
        if ($el.closest('#videodetails').length > 0) return;

        const $link = $el.find("a.text-secondary, a[href*='/cn/'], a[href*='/en/'], a[href*='/ja/']").first();
        let href = $link.attr("href");

        if (href) {
            href = resolveUrl(href.split('#')[0].split('?')[0]);
            const hrefLower = href.toLowerCase();
            if (hrefLower === currentLinkClean || seenHrefs.has(hrefLower)) return;

            let title = "";
            const $targetFont = $link.find("font.transmart-tgt-font-container");
            if ($targetFont.length > 0) {
                title = $targetFont.text().trim();
            } else if ($link.find("font").length > 0) {
                title = $link.find("font").last().text().trim();
            } else {
                title = $link.text().trim();
            }

            const videoId = extractVideoId(href);
            if (!title) title = videoId || "推荐影片";

            const $img = $el.find("img").first();
            const imgSrc = $img.attr("data-src") || $img.attr("src") || "";
            const finalCover = videoId ? `https://fourhoi.com/${videoId.toLowerCase()}/cover-t.jpg` : resolveUrl(imgSrc);

            let duration = $el.find(".absolute.bottom-1.right-1").text().trim().replace(/\s+/g, " ");

            seenHrefs.add(hrefLower);
            related.push({
                id: href,
                type: "url", 
                mediaType: "movie",
                title: title,
                posterPath: finalCover,
                backdropPath: finalCover,
                link: href,
                description: `${duration ? `时长: ${duration} | ` : ""}番号: ${videoId}`,
                customHeaders: HEADERS
            });
        }
    });

    if (related.length === 0 && html) {
        try {
            const targetToken = "recommendItems:";
            const idx = html.indexOf(targetToken);
            if (idx !== -1) {
                let start = html.indexOf('[', idx);
                if (start !== -1 && start < idx + 100) {
                    let bracketCount = 0;
                    let end = -1;
                    for (let i = start; i < html.length; i++) {
                        if (html[i] === '[') bracketCount++;
                        else if (html[i] === ']') {
                            bracketCount--;
                            if (bracketCount === 0) { end = i; break; }
                        }
                    }
                    if (end !== -1) {
                        const jsonStr = html.substring(start, end + 1);
                        const items = new Function(`return ${jsonStr}`)();
                        if (Array.isArray(items)) {
                            for (const item of items) {
                                if (!item.dvd_id) continue;
                                const dvdId = String(item.dvd_id).toLowerCase();
                                const href = `${BASE_URL}/cn/${dvdId}`;
                                const hrefLower = href.toLowerCase();
                                if (hrefLower === currentLinkClean || seenHrefs.has(hrefLower)) continue;

                                const title = item.full_title || item.title || dvdId.toUpperCase();
                                const finalCover = `https://fourhoi.com/${dvdId}/cover-t.jpg`;
                                
                                let durationStr = "";
                                if (item.duration) {
                                    let h = Math.floor(item.duration / 3600);
                                    let m = Math.floor((item.duration / 60) % 60).toString().padStart(2, '0');
                                    let s = (item.duration % 60).toString().padStart(2, '0');
                                    durationStr = h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
                                }

                                seenHrefs.add(hrefLower);
                                related.push({
                                    id: href,
                                    type: "url", 
                                    mediaType: "movie",
                                    title: title,
                                    posterPath: finalCover,
                                    backdropPath: finalCover,
                                    link: href,
                                    description: `${durationStr ? `时长: ${durationStr} | ` : ""}番号: ${dvdId.toUpperCase()}`,
                                    customHeaders: HEADERS
                                });
                            }
                        }
                    }
                }
            }
        } catch (e) {}
    }
    return related;
}

async function resolvePeopleAvatar(peopleId) {
    if (!peopleId || !peopleId.includes("/actresses/")) return "";
    if (Object.prototype.hasOwnProperty.call(PEOPLE_AVATAR_CACHE, peopleId)) return PEOPLE_AVATAR_CACHE[peopleId] || "";
    try {
        const avatarPageUrl = resolveUrl(normalizePeopleId(peopleId));
        if (!avatarPageUrl) return "";
        const res = await Widget.http.get(avatarPageUrl, { headers: HEADERS });
        if (!res.data) return "";
        const $ = Widget.html.load(res.data);
        let avatar = pickFirstAvatar($);
        
        if (!avatar || isInvalidAvatarUrl(avatar)) {
            avatar = "";
        }
        if (!avatar) {
            PEOPLE_AVATAR_CACHE[peopleId] = "";
            return "";
        }
        PEOPLE_AVATAR_CACHE[peopleId] = resolveAvatarImageUrl(avatar);
        return PEOPLE_AVATAR_CACHE[peopleId];
    } catch (e) { return ""; }
}

function pickFirstAvatar($) {
    const selector = ".avatar img, [class*='avatar'] img, .rounded-full img, img[alt*='女优'], img[alt*='女優'], img[alt*='Actress']";
    const $img = $(selector).first();
    return $img.attr("data-src") || $img.attr("src") || "";
}

function isInvalidAvatarUrl(url) {
    if (!url) return true;
    return /fourhoi\.com\/[^/]+\/(cover|preview|thumbnail)[^/]*\.(jpg|jpeg|png|webp)(?:\?.*)?$/i.test(url);
}

// 🌟【简介全维反漏提纯层】：全面重写清洗顺序，多标题协同拦截，完美斩断类似“SSIS-698 三上悠亚...”的网页原生标题垃圾
async function parseAndBuildDetail(html, finalLink) {
    const $ = Widget.html.load(html);
    const title = $('meta[property="og:title"]').attr('content') || $('h1').text().trim();
    const code = extractSearchCode(title) || extractVideoId(finalLink);
    
    let officialDescription = $("div.mb-1.text-secondary.break-all").first().text().trim();
    if (!officialDescription) {
        officialDescription = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || "";
    }

    let jpTitle = "";
    $(".text-secondary").each((_, el) => {
        const label = $(el).find("span").first().text().trim();
        if (label === "标题:" || label === "標題:") {
            jpTitle = $(el).find(".font-medium").text().trim();
            if (jpTitle) return false;
        }
    });

    if (officialDescription) {
        const h1Text = $("h1").text().trim();
        const normalizeStr = (s) => String(s || "").replace(/[\s_\-\|，,.:：、。！!?机制？()（）「」『』……+~～\x22']/g, "").toUpperCase();
        
        const dNorm = normalizeStr(officialDescription);
        const tNorm = normalizeStr(title);
        const jNorm = normalizeStr(jpTitle);
        const hNorm = normalizeStr(h1Text);

        // A. 虚假兜底判定：简介直接等价于任何主副标题时，判定网站无内文，直接一键清空
        if ((tNorm && dNorm === tNorm) || (jNorm && dNorm === jNorm) || (hNorm && dNorm === hNorm)) {
            officialDescription = "";
        } else {
            // B. 真实故事剧情：开始以绝对的精度层层剥离标题。必须在番号被剔除前，先进行整串替换
            if (title) officialDescription = officialDescription.split(title).join("");
            if (jpTitle) officialDescription = officialDescription.split(jpTitle).join("");
            if (h1Text) officialDescription = officialDescription.split(h1Text).join("");

            // C. 核心突破：将标题中去除番号后的“纯标题文字主体”（如 “ 三上悠亚，新有菜及相泽南”）提取出来做孤立清除
            if (title && code) {
                const pureTitleText = title.replace(code, "").replace(code.toUpperCase(), "").replace(code.toLowerCase(), "").trim();
                if (pureTitleText && pureTitleText.length > 2) {
                    officialDescription = officialDescription.split(pureTitleText).join("");
                }
            }
            if (jpTitle && code) {
                const pureJpTitleText = jpTitle.replace(code, "").replace(code.toUpperCase(), "").replace(code.toLowerCase(), "").trim();
                if (pureJpTitleText && pureJpTitleText.length > 2) {
                    officialDescription = officialDescription.split(pureJpTitleText).join("");
                }
            }

            // D. 清除最后的番号代码和网站线上小尾巴广告
            if (code) {
                officialDescription = officialDescription.split(code).join("").split(code.toUpperCase()).join("").split(code.toLowerCase()).join("");
                const codeNoHyphen = code.replace(/-/g, "");
                if (codeNoHyphen) {
                    officialDescription = officialDescription.split(codeNoHyphen).join("").split(codeNoHyphen.toUpperCase()).join("").split(codeNoHyphen.toLowerCase()).join("");
                }
            }
            officialDescription = officialDescription
                .replace(/在\s*MissAV\.ai\s*上免费高清在线观看/gi, "")
                .replace(/在\s*MissAV\s*上免费观看/gi, "")
                .replace(/免费高清在线观看/gi, "")
                .replace(/在线观看/gi, "")
                .replace(/免费观看/gi, "")
                .replace(/高清/gi, "")
                .replace(/视频/gi, "")
                .replace(/观看/gi, "")
                .replace(/^[\s,.:，。：、\-–—_]+/g, "")
                .trim();
        }
    }

    let videoUrl = "";
    const actors = [];
    const peoples = [];
    const genreItems = [];
    const seenActors = new Set();
    const seenGenres = new Set();

    const pushActor = (name, avatar, href) => {
        const cleanName = normalizeDisplayTitle(name);
        const cleanKey = normalizePeopleKey(cleanName);
        if (!cleanName) return;
        const people = buildPeopleItem(cleanName, avatar, href);
        const actor = { name: cleanName, avatar: avatar || "", link: href || "" };
        const existingIndex = actors.findIndex((item) => normalizePeopleKey(item.name) === cleanKey);
        if (existingIndex >= 0) {
            if (!actors[existingIndex].link && actor.link) {
                actors[existingIndex] = actor;
                if (people) peoples[existingIndex] = people;
            }
            return;
        }
        seenActors.add(cleanKey);
        actors.push(actor);
        if (people) peoples.push(people);
    };

    const metaActressNames = [];
    $('meta[property="og:video:actor"], meta[property="video:actor"]').each((_, el) => {
        const content = $(el).attr("content") || "";
        content.split(",").map((name) => name.trim()).filter(Boolean).forEach((name) => metaActressNames.push(name));
    });

    $(".text-secondary").each((_, el) => {
        const $row = $(el);
        const label = normalizeDetailLabel($row.find("span").first().text());
        if (isActressLabel(label)) {
            $row.find('a[href*="/actresses/"], a[href*="actresses"]').each((_, actressEl) => {
                const $actress = $(actressEl);
                const href = resolveUrl($actress.attr("href") || "");
                const rawName = $actress.text().replace(/\s+/g, " ").trim();
                const matchedMetaName = metaActressNames.find((name) => normalizePeopleKey(rawName).includes(normalizePeopleKey(name)) || normalizePeopleKey(name).includes(normalizePeopleKey(rawName)));
                pushActor(matchedMetaName || rawName, getImageFromElement($, $actress), href);
            });
        }
        if (isGenreLabel(label)) {
            $row.find('a[href*="/genres/"]').each((_, genreEl) => {
                const $genre = $(genreEl);
                const genre = buildGenreItem($genre.text(), $genre.attr("href") || "");
                if (genre && !seenGenres.has(genre.id)) {
                    seenGenres.add(genre.id);
                    genreItems.push(genre);
                }
            });
        }
    });

    $('script').each((i, el) => {
        const scriptContent = $(el).html() || "";
        if (scriptContent.includes('surrit.com') && scriptContent.includes('.m3u8')) {
            const matches = scriptContent.match(/https:\/\/surrit\.com\/[a-f0-9\-]+\/[^"'\s]*\.m3u8/g);
            if (matches && matches.length > 0) { videoUrl = matches[0]; return false; }
        }
        if (!videoUrl && scriptContent.includes('eval(function')) {
            const unpacked = unpackPacker(scriptContent);
            if (unpacked) {
                const matches = unpacked.match(/https:\/\/surrit\.com\/[a-f0-9\-]+\/[^"'\s]*\.m3u8/g);
                if (matches && matches.length > 0) { videoUrl = matches[0]; return false; }
            }
            const uuidMatches = scriptContent.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g);
            if (uuidMatches && uuidMatches.length > 0) { videoUrl = `https://surrit.com/${uuidMatches[0]}/playlist.m3u8`; return false; }
        }
    });

    if (!videoUrl) {
        const matchSimple = html.match(/source\s*=\s*['"]([^'"]+)['"]/);
        if (matchSimple) videoUrl = matchSimple[1];
    }

    if (videoUrl) {
        const extractedCode = extractSearchCode(title) || extractVideoId(finalLink);
        if (extractedCode) {
            VIDEO_URL_CACHE[extractedCode.toUpperCase()] = { url: videoUrl, timestamp: Date.now(), referer: finalLink };
        }
    }

    const sitePoster = $('meta[property="og:image"]').attr('content') || $('video').attr('poster') || "";
    const missavListCoverUrl = buildMissavListCoverUrl(finalLink);
    const officialTrailerCoverUrl = buildTrailerCoverUrl(title || "");
    const mainCover = sitePoster ? resolveUrl(sitePoster) : (missavListCoverUrl || officialTrailerCoverUrl);

    const trailerUrl = await buildJavTrailersUrl(title || "");
    const trailers = [];
    if (trailerUrl) {
        trailers.push({
            coverUrl: mainCover, posterPath: mainCover, backdropPath: mainCover,
            image: mainCover, thumbnail: mainCover, url: trailerUrl
        });
    }

    const backdropPaths = [];
    if (mainCover) {
        backdropPaths.push(mainCover);
    }

    $('img, a').each((_, el) => {
        const src = $(el).attr('data-src') || $(el).attr('src') || $(el).attr('href') || '';
        if (src && (src.includes('/preview/') || src.includes('/thumbnails/')) && !src.includes('.m3u8')) {
            const fullSrc = resolveUrl(src);
            if (!backdropPaths.includes(fullSrc)) backdropPaths.push(fullSrc);
        }
    });

    let relatedItems = parseRelatedItems($, html, finalLink);

    if (videoUrl) {
        const item = {
            id: finalLink,
            type: "url", 
            mediaType: "movie",
            title: title,
            posterPath: mainCover,       
            backdropPath: mainCover,     
            description: officialDescription, 
            actors: actors,
            trailers: trailers,
            backdropPaths: backdropPaths, 
            relatedItems: relatedItems,   
            playerType: "system"
        };
        if (peoples.length) item.peoples = peoples;
        if (genreItems.length) item.genreItems = genreItems;
        
        if (item.peoples) {
            const avatars = await Promise.all(item.peoples.map((p) => p.avatar || resolvePeopleAvatar(p.id)));
            for (let i = 0; i < avatars.length; i++) {
                if (avatars[i]) {
                    item.peoples[i].avatar = avatars[i];
                    if (actors[i]) actors[i].avatar = avatars[i];
                } else {
                    item.peoples[i].avatar = ""; 
                    if (actors[i]) actors[i].avatar = "";
                }
            }
        }
        return item; 
    }
    return null;
}

async function loadDetail(link) {
    if (!link) return null;
    
    let cleanLink = resolveUrl(link);
    let html = "";
    let finalValidLink = cleanLink;

    try {
        const res = await Widget.http.get(cleanLink, { headers: HEADERS });
        let $check = Widget.html.load(res.data);
        if ($check('#videodetails').length > 0 || $check('meta[property="og:type"]').attr('content') === 'video.movie') {
            html = res.data;
        } else {
            throw new Error("检测到重定向畸变页");
        }
    } catch (e) {
        const code = extractSearchCode(cleanLink, { allowPureNumeric: true }) || extractVideoId(cleanLink);
        if (code) {
            try {
                let searchUrl = `${BASE_URL}/cn/search/${encodeURIComponent(code.trim())}`;
                const searchRes = await Widget.http.get(searchUrl, { headers: HEADERS });
                const $search = Widget.html.load(searchRes.data);
                
                if ($search('#videodetails').length > 0 || $search('meta[property="og:type"]').attr('content') === 'video.movie') {
                    html = searchRes.data;
                    finalValidLink = searchUrl;
                } else {
                    let firstHref = $search("div.group a.text-secondary").first().attr("href");
                    if (firstHref) {
                        finalValidLink = resolveUrl(firstHref);
                        const detailRes = await Widget.http.get(finalValidLink, { headers: HEADERS });
                        html = detailRes.data;
                    }
                }
            } catch (innerErr) {
                return null;
            }
        }
    }

    if (html) {
        let item = await parseAndBuildDetail(html, finalValidLink);
        
        if (item && (!item.relatedItems || item.relatedItems.length === 0)) {
            try {
                const currentIdClean = extractVideoId(finalValidLink).toUpperCase();
                
                if (item.peoples && item.peoples.length > 0) {
                    const fallbackVideos = await loadList({ peopleId: item.peoples[0].id, page: 1 });
                    if (fallbackVideos && fallbackVideos.length > 0) {
                        item.relatedItems = fallbackVideos.filter(v => extractVideoId(v.id).toUpperCase() !== currentIdClean).slice(0, 8);
                    }
                } 
                if ((!item.relatedItems || item.relatedItems.length === 0) && item.genreItems && item.genreItems.length > 0) {
                    const fallbackVideos = await loadList({ genreId: item.genreItems[0].id, page: 1 });
                    if (fallbackVideos && fallbackVideos.length > 0) {
                        item.relatedItems = fallbackVideos.filter(v => extractVideoId(v.id).toUpperCase() !== currentIdClean).slice(0, 8);
                    }
                }
            } catch (fallbackErr) {}
        }
        return item;
    }
    return null;
}
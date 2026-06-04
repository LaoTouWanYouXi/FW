WidgetMetadata = {
    id: "missav_makka_play_fused",
    title: "MissAV_ovo_Fused",
    author: "𝙈𝙖𝙠𝙠𝙖𝙋𝙖𝙠𝙠𝙖 / EL / Eric",
    description: "MissAV 视频模块融合版：保留完整分类入口，增强封面/演员信息，并加入 1080p 检测 + 720p fallback 播放逻辑",
    version: "2.4.12-fused",
    requiredVersion: "0.0.1",
    site: "https://missav.ai",
    modules: [
        {
            title: "中文字幕",
            functionName: "loadList",
            type: "video",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm278/cn/chinese-subtitle", enumOptions: [{ title: "中文字幕", value: "dm278/cn/chinese-subtitle" }] },
                { name: "filters", title: "filters", type: "enumeration", value: "chinese-subtitle", enumOptions: [
                    { title: "所有", value: "" },
                    { title: "单人作品", value: "individual" },
                    { title: "多人作品", value: "multiple" },
                    { title: "中文字幕", value: "chinese-subtitle" }
                ] },
                { name: "sort", title: "排序", type: "enumeration", value: "released_at", enumOptions: [
                    { title: "发行日期", value: "released_at" },
                    { title: "最近更新", value: "published_at" },
                    { title: "收藏数", value: "saved" },
                    { title: "今日浏览数", value: "today_views" },
                    { title: "本周浏览数", value: "weekly_views" },
                    { title: "本月浏览数", value: "monthly_views" },
                    { title: "总浏览数", value: "views" }
                ] }
            ]
        },
        {
            title: "日本AV",
            functionName: "loadList",
            type: "video",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm632/cn/release", enumOptions: [
                    { title: "最新发布", value: "dm632/cn/release" },
                    { title: "本周热门", value: "dm170/cn/weekly-hot" },
                    { title: "月度热门", value: "dm266/cn/monthly-hot" }
                ] }
            ]
        },
        {
            title: "素人",
            functionName: "loadList",
            type: "video",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm36/cn/siro", enumOptions: [
                    { title: "SIRO", value: "dm36/cn/siro" },
                    { title: "LUXU", value: "dm34/cn/luxu" },
                    { title: "GANA", value: "dm32/cn/gana" },
                    { title: "PRESTIGE PREMIUM", value: "dm999/cn/maan" },
                    { title: "S-CUTE", value: "dm38/cn/scute" },
                    { title: "ARA", value: "dm34/cn/ara" }
                ] }
            ]
        },
        {
            title: "无码影片",
            functionName: "loadList",
            type: "video",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm814/cn/uncensored-leak", enumOptions: [
                    { title: "无码流出", value: "dm814/cn/uncensored-leak" },
                    { title: "东京热", value: "dm42/cn/tokyohot" }
                ] }
            ]
        },
        {
            title: "亚洲AV",
            functionName: "loadList",
            type: "video",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm63/cn/madou", enumOptions: [
                    { title: "麻豆传媒", value: "dm63/cn/madou" },
                    { title: "TWAV", value: "dm31/cn/twav" },
                    { title: "Furuke", value: "dm15/cn/furuke" },
                    { title: "韩国直播", value: "cn/klive" },
                    { title: "中国直播", value: "cn/clive" }
                ] }
            ]
        },
        {
            title: "女优",
            functionName: "loadList",
            type: "video",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm179/cn/actresses/%E7%80%AC%E6%88%B8%E7%92%B0%E5%A5%88", enumOptions: [
                    { title: "瀬戸環奈", value: "dm179/cn/actresses/%E7%80%AC%E6%88%B8%E7%92%B0%E5%A5%88" },
                    { title: "逢泽みゆ", value: "dm179/cn/actresses/%E9%80%A2%E6%B2%A2%E3%81%BF%E3%82%86" },
                    { title: "河北彩花", value: "dm179/cn/actresses/%E6%B2%B3%E5%8C%97%E5%BD%A9%E8%8A%B1" },
                    { title: "松本一香", value: "dm179/cn/actresses/%E6%9D%BE%E6%9C%AC%E4%B8%80%E9%A6%99" },
                    { title: "美园和花", value: "dm179/cn/actresses/%E7%BE%8E%E5%9B%AD%E5%92%8C%E8%8A%B1" },
                    { title: "北冈果林", value: "dm179/cn/actresses/%E5%8C%97%E5%B2%A1%E6%9E%9C%E6%9E%97" },
                    { title: "柏木こなつ", value: "dm179/cn/actresses/%E6%9F%8F%E6%9C%A8%E3%81%93%E3%81%AA%E3%81%A4" },
                    { title: "浅野こころ", value: "dm179/cn/actresses/%E6%B5%85%E9%87%8E%E3%81%93%E3%81%93%E3%82%8D" },
                    { title: "北野未奈", value: "dm179/cn/actresses/%E5%8C%97%E9%87%8E%E6%9C%AA%E5%A5%88" },
                    { title: "清原みゆう", value: "dm179/cn/actresses/%E6%B8%85%E5%8E%9F%E3%81%BF%E3%82%86%E3%81%86" },
                    { title: "沙月惠奈", value: "dm179/cn/actresses/%E6%B2%99%E6%9C%88%E6%83%A0%E5%A5%88" },
                    { title: "miru", value: "dm179/cn/actresses/miru" },
                    { title: "七森莉莉", value: "dm179/cn/actresses/%E4%B8%83%E6%A3%AE%E8%8E%89%E8%8E%89" },
                    { title: "七濑爱丽丝", value: "dm179/cn/actresses/%E4%B8%83%E6%BF%91%E7%88%B1%E4%B8%BD%E4%B8%9D" },
                    { title: "鹫尾芽衣", value: "dm179/cn/actresses/%E9%B9%AB%E5%B0%BE%E8%8A%BD%E8%A1%A3" },
                    { title: "博多彩叶", value: "dm179/cn/actresses/%E5%8D%9A%E5%A4%9A%E5%BD%A9%E5%8F%B6" },
                    { title: "石川澪", value: "dm179/cn/actresses/%E7%9F%B3%E5%B7%9D%E6%BE%AA" },
                    { title: "白上咲花", value: "dm179/cn/actresses/%E7%99%BD%E4%B8%8A%E5%92%B2%E8%8A%B1" },
                    { title: "田野忧", value: "dm179/cn/actresses/%E7%94%B0%E9%87%8E%E5%BF%A7" },
                    { title: "未步なな", value: "dm179/cn/actresses/%E6%9C%AA%E6%AD%A5%E3%81%AA%E3%81%AA" },
                    { title: "村上悠华", value: "dm179/cn/actresses/%E6%9D%91%E4%B8%8A%E6%82%A0%E5%8D%8E" },
                    { title: "三田真铃", value: "dm179/cn/actresses/%E4%B8%89%E7%94%B0%E7%9C%9F%E9%93%83" },
                    { title: "八掛うみ", value: "dm179/cn/actresses/%E5%85%AB%E6%8E%9B%E3%81%86%E3%81%BF" },
                    { title: "初美なのか", value: "dm179/cn/actresses/%E5%88%9D%E7%BE%8E%E3%81%AA%E3%81%AE%E3%81%8B" },
                    { title: "宮下玲奈", value: "dm179/cn/actresses/%E5%AE%AE%E4%B8%8B%E7%8E%B2%E5%A5%88" },
                    { title: "新有菜", value: "dm58/actresses/%E6%A9%8B%E6%9C%AC%E6%9C%89%E8%8F%9C%20%28%E6%96%B0%E6%9C%89%E8%8F%9C%29" },
                    { title: "新木希空", value: "dm179/cn/actresses/%E6%96%B0%E6%9C%A8%E5%B8%8C%E7%A9%BA" },
                    { title: "明里つむぎ", value: "dm179/cn/actresses/%E6%98%8E%E9%87%8C%E3%81%A4%E3%82%80%E3%81%8E" },
                    { title: "本庄鈴", value: "dm179/cn/actresses/%E6%9C%AC%E5%BA%84%E9%88%B4" },
                    { title: "桃乃木かな", value: "dm179/cn/actresses/%E6%A1%83%E4%B9%83%E6%9C%A8%E3%81%8B%E3%81%AA" },
                    { title: "桜空もも", value: "dm179/cn/actresses/%E6%A1%9C%E7%A9%BA%E3%82%82%E3%82%82" },
                    { title: "楓ふうあ", value: "dm63/actresses/%E6%A5%93%E3%81%B5%E3%81%86%E3%81%82" },
                    { title: "楓可憐", value: "dm38/actresses/%E6%A5%93%E5%8F%AF%E6%86%90%20%28%E7%94%B0%E4%B8%AD%E6%AA%B8%E6%AA%AC%29" },
                    { title: "涼森れむ", value: "dm179/cn/actresses/%E6%B6%BC%E6%A3%AE%E3%82%8C%E3%82%80" },
                    { title: "瀧本雫葉", value: "dm179/cn/actresses/%E7%80%A7%E6%9C%AC%E9%9B%AB%E8%91%89" },
                    { title: "田中レモン", value: "dm179/cn/actresses/%E7%94%B0%E4%B8%AD%E3%83%AC%E3%83%A2%E3%83%B3" },
                    { title: "相沢みなみ", value: "dm179/cn/actresses/%E7%9B%B8%E6%B2%A2%E3%81%BF%E3%81%AA%E3%81%BF" },
                    { title: "神木麗", value: "dm179/cn/actresses/%E7%A5%9E%E6%9C%A8%E9%BA%97" },
                    { title: "美ノ嶋めぐり", value: "dm179/cn/actresses/%E7%BE%8E%E3%83%8E%E5%B6%8B%E3%82%81%E3%81%90%E3%82%8A" },
                    { title: "野々浦暖", value: "dm179/cn/actresses/%E9%87%8E%E3%80%85%E6%B5%A6%E6%9A%96" },
                    { title: "青空ひかり", value: "dm179/cn/actresses/%E9%9D%92%E7%A9%BA%E3%81%B2%E3%81%8B%E3%82%8A" },
                    { title: "三上悠亚", value: "dm179/cn/actresses/%E4%B8%89%E4%B8%8A%E6%82%A0%E4%BA%9A" },
                    { title: "榊原萌", value: "dm179/cn/actresses/%E6%A6%8A%E5%8E%9F%E8%90%8C" },
                    { title: "彩月七绪", value: "dm179/cn/actresses/%E5%BD%A9%E6%9C%88%E4%B8%83%E7%BB%AA" },
                    { title: "神宫寺奈绪", value: "dm179/cn/actresses/%E7%A5%9E%E5%AE%AB%E5%AF%BA%E5%A5%88%E7%BB%AA" },
                    { title: "有村のぞみ", value: "dm179/cn/actresses/%E6%9C%89%E6%9D%91%E3%81%AE%E3%81%9E%E3%81%BF" }
                ] }
            ]
        },
        {
            title: "类型",
            functionName: "loadList",
            type: "video",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm96/cn/genres/%E9%AB%98%E6%B8%85", enumOptions: [
                    { title: "高清", value: "dm96/cn/genres/%E9%AB%98%E6%B8%85" },
                    { title: "独家", value: "dm139/cn/genres/%E7%8B%AC%E5%AE%B6" },
                    { title: "中出", value: "dm130/cn/genres/%E4%B8%AD%E5%87%BA" },
                    { title: "单体作品", value: "dm122/cn/genres/%E5%8D%95%E4%BD%93%E4%BD%9C%E5%93%81" },
                    { title: "巨乳", value: "dm120/cn/genres/%E5%B7%A8%E4%B9%B3" },
                    { title: "人妻", value: "dm77/cn/genres/%E4%BA%BA%E5%A6%BB" },
                    { title: "熟女", value: "dm118/cn/genres/%E7%86%9F%E5%A5%B3" },
                    { title: "素人", value: "dm123/cn/genres/%E7%B4%A0%E4%BA%BA" },
                    { title: "美少女", value: "dm437/cn/genres/%E7%BE%8E%E5%B0%91%E5%A5%B3" },
                    { title: "口交", value: "dm1301/cn/genres/%E5%8F%A3%E4%BA%A4" },
                    { title: "多人运动", value: "dm321/cn/genres/%E5%A4%9A%E4%BA%BA%E8%BF%90%E5%8A%A8" },
                    { title: "薄格", value: "dm76/cn/genres/%E8%96%84%E6%A0%BC" },
                    { title: "骑乘", value: "dm486/cn/genres/%E9%AA%91%E4%B9%98" },
                    { title: "痴女", value: "dm313/cn/genres/%E7%97%B4%E5%A5%B3" },
                    { title: "4小时以上", value: "dm738/cn/genres/4%E5%B0%8F%E6%97%B6%E4%BB%A5%E4%B8%8A" },
                    { title: "女高中生", value: "dm4448/cn/genres/%E5%A5%B3%E9%AB%98%E4%B8%AD%E7%94%9F" },
                    { title: "潮吹", value: "dm161/cn/genres/%E6%BD%AE%E5%90%B9" },
                    { title: "苗条", value: "dm757/cn/genres/%E8%8B%97%E6%9D%A1" },
                    { title: "自拍", value: "dm978/cn/genres/%E8%87%AA%E6%8B%8D" },
                    { title: "合集", value: "dm784/cn/genres/%E5%90%88%E9%9B%86" },
                    { title: "乳交", value: "dm594/cn/genres/%E4%B9%B3%E4%BA%A4" },
                    { title: "恋物癖", value: "dm117/cn/genres/%E6%81%8B%E7%89%A9%E7%99%96" },
                    { title: "美乳", value: "dm215/cn/genres/%E7%BE%8E%E4%B9%B3" },
                    { title: "NTR", value: "dm736/cn/genres/NTR" },
                    { title: "企划", value: "dm341/cn/genres/%E4%BC%81%E5%88%92" },
                    { title: "乱伦", value: "dm56/cn/genres/%E4%B9%B1%E4%BC%A6" },
                    { title: "搭讪", value: "dm292/cn/genres/%E6%90%AD%E8%AE%AA" },
                    { title: "颜射", value: "dm319/cn/genres/%E9%A2%9C%E5%B0%84" },
                    { title: "淫乱", value: "dm903/cn/genres/%E6%B7%AB%E4%B9%B1" },
                    { title: "偷拍", value: "dm516/cn/genres/%E5%81%B7%E6%8B%8D" },
                    { title: "剧情", value: "dm98/cn/genres/%E5%89%A7%E6%83%85" },
                    { title: "自慰", value: "dm7606/cn/genres/%E8%87%AA%E6%85%B0" },
                    { title: "4K", value: "dm55/cn/genres/4K" },
                    { title: "手淫", value: "dm94/cn/genres/%E6%89%8B%E6%B7%AB" },
                    { title: "姐姐", value: "dm793/cn/genres/%E5%A7%90%E5%A7%90" },
                    { title: "羞辱", value: "dm161/cn/genres/%E7%BE%9E%E8%BE%B1" }
                ] }
            ]
        },
        {
            title: "发行商",
            functionName: "loadList",
            type: "video",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm825/cn/makers/Moody%27s", enumOptions: [
                    { title: "Moody's", value: "dm825/cn/makers/Moody%27s" },
                    { title: "Prestige", value: "dm825/cn/makers/Prestige" },
                    { title: "Madonna", value: "dm825/cn/makers/Madonna" },
                    { title: "S1", value: "dm825/cn/makers/S1" },
                    { title: "SOD", value: "dm825/cn/makers/SOD" },
                    { title: "IdeaPocket", value: "dm825/cn/makers/IdeaPocket" },
                    { title: "Attackers", value: "dm825/cn/makers/Attackers" },
                    { title: "Glory Quest", value: "dm825/cn/makers/Glory%20Quest" },
                    { title: "ビッグモーカル", value: "dm825/cn/makers/%E3%83%93%E3%83%83%E3%82%B0%E3%83%A2%E3%83%BC%E3%82%AB%E3%83%AB" },
                    { title: "NATURAL HIGH", value: "dm825/cn/makers/NATURAL%20HIGH" },
                    { title: "Wanz Factory", value: "dm825/cn/makers/Wanz%20Factory" },
                    { title: "Takara Visual", value: "dm825/cn/makers/Takara%20Visual" },
                    { title: "Fc2", value: "dm825/cn/makers/Fc2" },
                    { title: "Premium", value: "dm825/cn/makers/Premium" },
                    { title: "Fitch", value: "dm825/cn/makers/Fitch" },
                    { title: "VENUS", value: "dm825/cn/makers/VENUS" },
                    { title: "DEEP'S", value: "dm825/cn/makers/DEEP%27S" },
                    { title: "本中", value: "dm825/cn/makers/%E6%9C%AC%E4%B8%AD" },
                    { title: "Hunter", value: "dm825/cn/makers/Hunter" },
                    { title: "溜池ゴロー", value: "dm825/cn/makers/%E6%BA%9C%E6%B1%A0%E3%82%B4%E3%83%AD%E3%83%BC" },
                    { title: "TMA", value: "dm825/cn/makers/TMA" },
                    { title: "センタービレッジ", value: "dm825/cn/makers/%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%93%E3%83%AC%E3%83%83%E3%82%B8" },
                    { title: "Das", value: "dm825/cn/makers/Das" },
                    { title: "Waap Entertainment", value: "dm825/cn/makers/Waap%20Entertainment" },
                    { title: "Crystal-Eizou", value: "dm825/cn/makers/Crystal-Eizou" },
                    { title: "kawaii", value: "dm825/cn/makers/kawaii" },
                    { title: "ゴーゴーズ", value: "dm825/cn/makers/%E3%82%B4%E3%83%BC%E3%82%B4%E3%83%BC%E3%82%BA" },
                    { title: "プラネットプラス", value: "dm825/cn/makers/%E3%83%97%E3%83%A9%E3%83%8D%E3%83%83%E3%83%88%E3%83%97%E3%83%A9%E3%82%B9" },
                    { title: "OPPAI", value: "dm825/cn/makers/OPPAI" },
                    { title: "STAR PARADISE", value: "dm825/cn/makers/STAR%20PARADISE" },
                    { title: "E-BODY", value: "dm825/cn/makers/E-BODY" },
                    { title: "セレブの友", value: "dm825/cn/makers/%E3%82%BB%E3%83%AC%E3%83%96%E3%81%AE%E5%8F%8B" },
                    { title: "ドグマ", value: "dm825/cn/makers/%E3%83%89%E3%82%B0%E3%83%9E" },
                    { title: "Alice Japan", value: "dm825/cn/makers/Alice%20Japan" },
                    { title: "KM Produce", value: "dm825/cn/makers/KM%20Produce" },
                    { title: "桃太郎映像出版", value: "dm825/cn/makers/%E6%A1%83%E5%A4%AA%E9%83%8E%E6%98%A0%E5%83%8F%E5%87%BA%E7%89%88" }
                ] }
            ]
        },
        {
            title: "🔍 搜索视频",
            functionName: "searchList",
            type: "video",
            params: [
                { name: "keyword", title: "关键词", type: "input", value: "" },
                { name: "page", title: "页码", type: "page" }
            ]
        }
    ],
    search: {
        title: "🌐 全局搜索",
        functionName: "searchGlobal",
        params: [
            { name: "keyword", title: "关键词", type: "input", description: "搜索的关键词", value: "" },
            { name: "page", title: "页码", type: "page", value: "1" }
        ]
    }
};

const BASE_URL = "https://missav.ai";
const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Referer": "https://missav.ai/",
    "Connection": "keep-alive"
};

const ACTRESS_ENDPOINTS = [
    { title: "瀬户环奈", value: "dm179/cn/actresses/%E7%80%AC%E6%88%B8%E7%92%B0%E5%A5%88" },
    { title: "逢泽みゆ", value: "dm179/cn/actresses/%E9%80%A2%E6%B2%A2%E3%81%BF%E3%82%86" },
    { title: "河北彩花", value: "dm179/cn/actresses/%E6%B2%B3%E5%8C%97%E5%BD%A9%E8%8A%B1" },
    { title: "松本一香", value: "dm179/cn/actresses/%E6%9D%BE%E6%9C%AC%E4%B8%80%E9%A6%99" },
    { title: "美园和花", value: "dm179/cn/actresses/%E7%BE%8E%E5%9B%AD%E5%92%8C%E8%8A%B1" },
    { title: "北冈果林", value: "dm179/cn/actresses/%E5%8C%97%E5%B2%A1%E6%9E%9C%E6%9E%97" },
    { title: "柏木こなつ", value: "dm179/cn/actresses/%E6%9F%8F%E6%9C%A8%E3%81%93%E3%81%AA%E3%81%A4" },
    { title: "浅野こころ", value: "dm179/cn/actresses/%E6%B5%85%E9%87%8E%E3%81%93%E3%81%93%E3%82%8D" },
    { title: "北野未奈", value: "dm179/cn/actresses/%E5%8C%97%E9%87%8E%E6%9C%AA%E5%A5%88" },
    { title: "清原みゆう", value: "dm179/cn/actresses/%E6%B8%85%E5%8E%9F%E3%81%BF%E3%82%86%E3%81%86" },
    { title: "沙月惠奈", value: "dm179/cn/actresses/%E6%B2%99%E6%9C%88%E6%83%A0%E5%A5%88" },
    { title: "miru", value: "dm179/cn/actresses/miru" },
    { title: "七森莉莉", value: "dm179/cn/actresses/%E4%B8%83%E6%A3%AE%E8%8E%89%E8%8E%89" },
    { title: "七濑爱丽丝", value: "dm179/cn/actresses/%E4%B8%83%E6%BF%91%E7%88%B1%E4%B8%BD%E4%B8%9D" },
    { title: "鹫尾芽衣", value: "dm179/cn/actresses/%E9%B9%AB%E5%B0%BE%E8%8A%BD%E8%A1%A3" },
    { title: "博多彩叶", value: "dm179/cn/actresses/%E5%8D%9A%E5%A4%9A%E5%BD%A9%E5%8F%B6" },
    { title: "石川澪", value: "dm179/cn/actresses/%E7%9F%B3%E5%B7%9D%E6%BE%AA" },
    { title: "白上咲花", value: "dm179/cn/actresses/%E7%99%BD%E4%B8%8A%E5%92%B2%E8%8A%B1" },
    { title: "田野忧", value: "dm179/cn/actresses/%E7%94%B0%E9%87%8E%E5%BF%A7" },
    { title: "未步なな", value: "dm179/cn/actresses/%E6%9C%AA%E6%AD%A5%E3%81%AA%E3%81%AA" },
    { title: "村上悠华", value: "dm179/cn/actresses/%E6%9D%91%E4%B8%8A%E6%82%A0%E5%8D%8E" },
    { title: "三田真铃", value: "dm179/cn/actresses/%E4%B8%89%E7%94%B0%E7%9C%9F%E9%93%83" },
    { title: "八挂うみ", value: "dm179/cn/actresses/%E5%85%AB%E6%8E%9B%E3%81%86%E3%81%BF" },
    { title: "初美なのか", value: "dm179/cn/actresses/%E5%88%9D%E7%BE%8E%E3%81%AA%E3%81%AE%E3%81%8B" },
    { title: "宫下玲奈", value: "dm179/cn/actresses/%E5%AE%AE%E4%B8%8B%E7%8E%B2%E5%A5%88" },
    { title: "新有菜", value: "dm58/actresses/%E6%A9%8B%E6%9C%AC%E6%9C%89%E8%8F%9C%20%28%E6%96%B0%E6%9C%89%E8%8F%9C%29" },
    { title: "新木希空", value: "dm179/cn/actresses/%E6%96%B0%E6%9C%A8%E5%B8%8C%E7%A9%BA" },
    { title: "明里つむぎ", value: "dm179/cn/actresses/%E6%98%8E%E9%87%8C%E3%81%A4%E3%82%80%E3%81%8E" },
    { title: "小野六花", value: "dm179/cn/actresses/%E5%B0%8F%E9%87%8E%E5%85%AD%E8%8A%B1" },
    { title: "宇都宫紫苑", value: "dm179/cn/actresses/%E5%AE%87%E9%83%BD%E5%AE%AE%E7%B4%AB%E8%8B%91" },
    { title: "小宵こなん", value: "dm179/cn/actresses/%E5%B0%8F%E5%AE%B5%E3%81%93%E3%81%AA%E3%82%93" },
    { title: "本庄鈴", value: "dm179/cn/actresses/%E6%9C%AC%E5%BA%84%E9%88%B4" },
    { title: "桃乃木かな", value: "dm179/cn/actresses/%E6%A1%83%E4%B9%83%E6%9C%A8%E3%81%8B%E3%81%AA" },
    { title: "桜空もも", value: "dm179/cn/actresses/%E6%A1%9C%E7%A9%BA%E3%82%82%E3%82%82" },
    { title: "楓ふうあ", value: "dm179/cn/actresses/%E6%A1%AB%E3%81%B5%E3%81%86%E3%81%82" },
    { title: "楓カレン", value: "dm179/cn/actresses/%E6%A5%93%E3%82%AB%E3%83%AC%E3%83%B3" },
    { title: "涼森れむ", value: "dm179/cn/actresses/%E6%B6%BC%E6%A3%AE%E3%82%8C%E3%82%80" },
    { title: "瀧本雫葉", value: "dm179/cn/actresses/%E7%80%A7%E6%9C%AC%E9%9B%AB%E8%91%89" },
    { title: "田中レモン", value: "dm179/cn/actresses/%E7%94%B0%E4%B8%AD%E3%83%AC%E3%83%A2%E3%83%B3" },
    { title: "相沢みなみ", value: "dm179/cn/actresses/%E7%9B%B8%E6%B2%A2%E3%81%BF%E3%81%AA%E3%81%BF" },
    { title: "神木麗", value: "dm179/cn/actresses/%E7%A5%9E%E6%9C%A8%E9%BA%97" },
    { title: "美ノ嶋めぐり", value: "dm179/cn/actresses/%E7%BE%8E%E3%83%8E%E5%B6%8B%E3%82%81%E3%81%90%E3%82%8A" },
    { title: "野々浦暖", value: "dm179/cn/actresses/%E9%87%8E%E3%80%85%E6%B5%A6%E6%9A%96" },
    { title: "青空ひかり", value: "dm179/cn/actresses/%E9%9D%92%E7%A9%BA%E3%81%B2%E3%81%8B%E3%82%8A" },
    { title: "三上悠亚", value: "dm179/cn/actresses/%E4%B8%89%E4%B8%8A%E6%82%A0%E4%BA%9A" },
    { title: "榊原萌", value: "dm179/cn/actresses/%E6%A6%8A%E5%8E%9F%E8%90%8C" },
    { title: "彩月七绪", value: "dm179/cn/actresses/%E5%BD%A9%E6%9C%88%E4%B8%83%E7%BB%AA" },
    { title: "神宫寺奈绪", value: "dm179/cn/actresses/%E7%A5%9E%E5%AE%AB%E5%AF%BA%E5%A5%88%E7%BB%AA" },
    { title: "有村のぞみ", value: "dm179/cn/actresses/%E6%9C%89%E6%9D%91%E3%81%AE%E3%81%9E%E3%81%BF" }
];

const GENRES_ENDPOINTS = [
    { title: "高清", value: "dm96/cn/genres/%E9%AB%98%E6%B8%85" },
    { title: "独家", value: "dm139/cn/genres/%E7%8B%AC%E5%AE%B6" },
    { title: "中出", value: "dm130/cn/genres/%E4%B8%AD%E5%87%BA" },
    { title: "单体作品", value: "dm122/cn/genres/%E5%8D%95%E4%BD%93%E4%BD%9C%E5%93%81" },
    { title: "巨乳", value: "dm120/cn/genres/%E5%B7%A8%E4%B9%B3" },
    { title: "人妻", value: "dm77/cn/genres/%E4%BA%BA%E5%A6%BB" },
    { title: "熟女", value: "dm118/cn/genres/%E7%86%9F%E5%A5%B3" },
    { title: "素人", value: "dm123/cn/genres/%E7%B4%A0%E4%BA%BA" },
    { title: "美少女", value: "dm437/cn/genres/%E7%BE%8E%E5%B0%91%E5%A5%B3" },
    { title: "口交", value: "dm1301/cn/genres/%E5%8F%A3%E4%BA%A4" },
    { title: "多人运动", value: "dm321/cn/genres/%E5%A4%9A%E4%BA%BA%E8%BF%90%E5%8A%A8" },
    { title: "薄格", value: "dm76/cn/genres/%E8%96%84%E6%A0%BC" },
    { title: "骑乘", value: "dm486/cn/genres/%E9%AA%91%E4%B9%98" },
    { title: "痴女", value: "dm313/cn/genres/%E7%97%B4%E5%A5%B3" },
    { title: "4小时以上", value: "dm738/cn/genres/4%E5%B0%8F%E6%97%B6%E4%BB%A5%E4%B8%8A" },
    { title: "女高中生", value: "dm4448/cn/genres/%E5%A5%B3%E9%AB%98%E4%B8%AD%E7%94%9F" },
    { title: "潮吹", value: "dm161/cn/genres/%E6%BD%AE%E5%90%B9" },
    { title: "苗条", value: "dm757/cn/genres/%E8%8B%97%E6%9D%A1" },
    { title: "自拍", value: "dm978/cn/genres/%E8%87%AA%E6%8B%8D" },
    { title: "合集", value: "dm784/cn/genres/%E5%90%88%E9%9B%86" },
    { title: "乳交", value: "dm594/cn/genres/%E4%B9%B3%E4%BA%A4" },
    { title: "恋物癖", value: "dm117/cn/genres/%E6%81%8B%E7%89%A9%E7%99%96" },
    { title: "美乳", value: "dm215/cn/genres/%E7%BE%8E%E4%B9%B3" },
    { title: "NTR", value: "dm736/cn/genres/NTR" },
    { title: "企划", value: "dm341/cn/genres/%E4%BC%81%E5%88%92" },
    { title: "乱伦", value: "dm56/cn/genres/%E4%B9%B1%E4%BC%A6" },
    { title: "搭讪", value: "dm292/cn/genres/%E6%90%AD%E8%AE%AA" },
    { title: "颜射", value: "dm319/cn/genres/%E9%A2%9C%E5%B0%84" },
    { title: "淫乱", value: "dm903/cn/genres/%E6%B7%AB%E4%B9%B1" },
    { title: "偷拍", value: "dm516/cn/genres/%E5%81%B7%E6%8B%8D" },
    { title: "剧情", value: "dm98/cn/genres/%E5%89%A7%E6%83%85" },
    { title: "自慰", value: "dm7606/cn/genres/%E8%87%AA%E6%85%B0" },
    { title: "4K", value: "dm55/cn/genres/4K" },
    { title: "手淫", value: "dm94/cn/genres/%E6%89%8B%E6%B7%AB" },
    { title: "姐姐", value: "dm793/cn/genres/%E5%A7%90%E5%A7%90" },
    { title: "羞辱", value: "dm161/cn/genres/%E7%BE%9E%E8%BE%B1" }
];

const MAKERS_ENDPOINTS = [
    { title: "Moody's", value: "dm825/cn/makers/Moody%27s" },
    { title: "Prestige", value: "dm825/cn/makers/Prestige" },
    { title: "Madonna", value: "dm825/cn/makers/Madonna" },
    { title: "S1", value: "dm825/cn/makers/S1" },
    { title: "SOD", value: "dm825/cn/makers/SOD" },
    { title: "IdeaPocket", value: "dm825/cn/makers/IdeaPocket" },
    { title: "Attackers", value: "dm825/cn/makers/Attackers" },
    { title: "Glory Quest", value: "dm825/cn/makers/Glory%20Quest" },
    { title: "ビッグモーカル", value: "dm825/cn/makers/%E3%83%93%E3%83%83%E3%82%B0%E3%83%A2%E3%83%BC%E3%82%AB%E3%83%AB" },
    { title: "NATURAL HIGH", value: "dm825/cn/makers/NATURAL%20HIGH" },
    { title: "Wanz Factory", value: "dm825/cn/makers/Wanz%20Factory" },
    { title: "Takara Visual", value: "dm825/cn/makers/Takara%20Visual" },
    { title: "Fc2", value: "dm825/cn/makers/Fc2" },
    { title: "Premium", value: "dm825/cn/makers/Premium" },
    { title: "Fitch", value: "dm825/cn/makers/Fitch" },
    { title: "VENUS", value: "dm825/cn/makers/VENUS" },
    { title: "DEEP'S", value: "dm825/cn/makers/DEEP%27S" },
    { title: "本中", value: "dm825/cn/makers/%E6%9C%AC%E4%B8%AD" },
    { title: "Hunter", value: "dm825/cn/makers/Hunter" },
    { title: "溜池ゴロー", value: "dm825/cn/makers/%E6%BA%9C%E6%B1%A0%E3%82%B4%E3%83%AD%E3%83%BC" },
    { title: "TMA", value: "dm825/cn/makers/TMA" },
    { title: "センタービレッジ", value: "dm825/cn/makers/%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%93%E3%83%AC%E3%83%83%E3%82%B8" },
    { title: "Das", value: "dm825/cn/makers/Das" },
    { title: "Waap Entertainment", value: "dm825/cn/makers/Waap%20Entertainment" },
    { title: "Crystal-Eizou", value: "dm825/cn/makers/Crystal-Eizou" },
    { title: "kawaii", value: "dm825/cn/makers/kawaii" },
    { title: "ゴーゴーズ", value: "dm825/cn/makers/%E3%82%B4%E3%83%BC%E3%82%B4%E3%83%BC%E3%82%BA" },
    { title: "プラネットプラス", value: "dm825/cn/makers/%E3%83%97%E3%83%A9%E3%83%8D%E3%83%83%E3%83%88%E3%83%97%E3%83%A9%E3%82%B9" },
    { title: "OPPAI", value: "dm825/cn/makers/OPPAI" },
    { title: "STAR PARADISE", value: "dm825/cn/makers/STAR%20PARADISE" },
    { title: "E-BODY", value: "dm825/cn/makers/E-BODY" },
    { title: "セレブの友", value: "dm825/cn/makers/%E3%82%BB%E3%83%AC%E3%83%96%E3%81%AE%E5%8F%8B" },
    { title: "ドグマ", value: "dm825/cn/makers/%E3%83%89%E3%82%B0%E3%83%9E" },
    { title: "Alice Japan", value: "dm825/cn/makers/Alice%20Japan" },
    { title: "KM Produce", value: "dm825/cn/makers/KM%20Produce" },
    { title: "桃太郎映像出版", value: "dm825/cn/makers/%E6%A1%83%E5%A4%AA%E9%83%8E%E6%98%A0%E5%83%8F%E5%87%BA%E7%89%88" }
];

const GENRES_STATIC = GENRES_ENDPOINTS;
const MAKERS_STATIC = MAKERS_ENDPOINTS;

function buildListUrl(endpoint, page = 1, filters = "", sort = "") {
    const params = [];
    if (filters) params.push(`filters=${encodeURIComponent(filters)}`);
    if (sort) params.push(`sort=${encodeURIComponent(sort)}`);
    if (page > 1) params.push(`page=${page}`);
    return `${BASE_URL}/${endpoint}${params.length ? `?${params.join("&")}` : ""}`;
}

function extractVideoId(href) {
    const slug = href.split('/').pop() || "";
    return slug.replace(/-(uncensored-leak|chinese-subtitle)$/, "").toUpperCase();
}

function resolveUrl(path) {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function buildForwardListUrl(idOrUrl, page = 1, filters = "", sort = "") {
    let url = resolveUrl(idOrUrl || "");
    if (!url) return "";

    const params = [];

    if (filters) params.push(`filters=${encodeURIComponent(filters)}`);
    if (sort) params.push(`sort=${encodeURIComponent(sort)}`);
    if (page > 1) params.push(`page=${page}`);

    if (params.length) {
        url += url.includes("?") ? `&${params.join("&")}` : `?${params.join("&")}`;
    }

    return url;
}

function parseVideoList(html, options = {}) {
    const { includeImageFields = false } = options;

    if (!html || html.includes("Just a moment")) {
        return [{ id: "err_cf", type: "text", title: "被 Cloudflare 拦截", subTitle: "请稍后重试" }];
    }

    const $ = Widget.html.load(html);
    const results = [];

    $("div.group").each((i, el) => {
        const $el = $(el);
        const $link = $el.find("a.text-secondary");
        const href = $link.attr("href");

        if (href) {
            const title = $link.text().trim();
            const $img = $el.find("img");
            const imgSrc = $img.attr("data-src") || $img.attr("src") || "";
            const duration = $el.find(".absolute.bottom-1.right-1").text().trim();
            const videoId = extractVideoId(href);
            const coverUrl = videoId ? `https://fourhoi.com/${videoId.toLowerCase()}/cover-t.jpg` : imgSrc;
            const finalCover = coverUrl || imgSrc;

            const item = {
                id: href,
                type: "link",
                title,
                coverUrl: finalCover,
                link: href,
                description: `时长: ${duration}${videoId ? ` | 番号: ${videoId}` : ""}`,
                customHeaders: HEADERS
            };

            if (includeImageFields) {
                item.backdropPath = finalCover;
                item.posterPath = finalCover;
                item.image = finalCover;
            }

            results.push(item);
        }
    });

    return results.length > 0 ? results : [{ id: "empty", type: "text", title: "没有找到相关视频" }];
}

function buildStaticEntries(list, description) {
    return list.map((item) => ({
        id: item.value,
        type: "link",
        title: item.title,
        link: resolveUrl(item.value),
        coverUrl: "",
        description,
        customHeaders: HEADERS
    }));
}

function buildStaticActressEntries() {
    return ACTRESS_ENDPOINTS.map((item) => ({
        id: item.value,
        type: "link",
        title: item.title,
        link: resolveUrl(item.value),
        coverUrl: "",
        description: "女优排行",
        customHeaders: HEADERS
    }));
}

async function loadList(params = {}) {
    const {
        endpoint = "dm632/cn/release",
        page = 1,
        sort = "",
        filters = "",
        category = "",
        genreId = "",
        peopleId = ""
    } = params;

    let url = "";

    // Forward 详情页点击团队成员时，理论上会把 peoples[].id 作为 peopleId 传回来。
    // 我们在 loadDetail 里已经把 peoples[].id 设置成 MissAV 原始 URL，
    // 所以这里直接把它当成列表页 URL 请求即可。
    if (peopleId) {
        url = buildForwardListUrl(peopleId, page, filters, sort);
    }

    // Forward 详情页点击分类时，理论上会把 genreItems[].id 作为 genreId 传回来。
    // 你已经测试分类可打开列表页；这里显式支持它，让逻辑更标准。
    if (!url && genreId) {
        url = buildForwardListUrl(genreId, page, filters, sort);
    }

    // 常规模块入口：中文字幕、日本AV、女优、类型、发行商等。
    if (!url) {
        const targetEndpoint = endpoint || category || "dm632/cn/release";
        url = buildListUrl(targetEndpoint, page, filters, sort);
    }

    try {
        const res = await Widget.http.get(url, { headers: HEADERS });
        return parseVideoList(res.data);
    } catch (e) {
        return [{ id: "err", type: "text", title: "加载失败", subTitle: e.message }];
    }
}

async function loadActresses() {
    return buildStaticActressEntries();
}

async function loadGenresStatic() {
    return buildStaticEntries(GENRES_STATIC, "类型分类");
}

async function loadMakersStatic() {
    return buildStaticEntries(MAKERS_STATIC, "发行商分类");
}

async function searchList(params = {}) {
    const { page = 1, keyword } = params;

    if (!keyword) {
        return [{ id: "tip", type: "text", title: "请输入关键词开始搜索" }];
    }

    let url = `${BASE_URL}/cn/search/${encodeURIComponent(keyword)}`;
    if (page > 1) url += `?page=${page}`;

    try {
        const res = await Widget.http.get(url, { headers: HEADERS });
        return parseVideoList(res.data);
    } catch (e) {
        return [{ id: "err", type: "text", title: "搜索失败", subTitle: e.message }];
    }
}

async function searchGlobal(params = {}) {
    const { page = 1, keyword } = params;

    if (!keyword) {
        return [{ id: "tip", type: "text", title: "请输入关键词开始全局搜索" }];
    }

    const query = encodeURIComponent(keyword);
    let url = `${BASE_URL}/cn/search/${query}`;
    if (page > 1) url += `?page=${page}`;

    try {
        const res = await Widget.http.get(url, { headers: HEADERS });
        return parseVideoList(res.data, { includeImageFields: true });
    } catch (e) {
        return [{ id: "err", type: "text", title: "全局搜索失败", subTitle: e.message }];
    }
}

// ==================== 播放地址增强：1080p 检测 + 720p fallback ====================
function extractSurritUuidFromHtml(html) {
    if (!html) return "";
    const $ = Widget.html.load(html);
    let uuid = "";

    $('script').each((i, el) => {
        const scriptContent = $(el).html() || "";

        if (scriptContent.includes('surrit.com') && scriptContent.includes('.m3u8')) {
            const uuidFromUrl = scriptContent.match(/https:\/\/surrit\.com\/([a-f0-9\-]{36})\/[^"'\s]*\.m3u8/i);
            if (uuidFromUrl && uuidFromUrl[1]) {
                uuid = uuidFromUrl[1];
                return false;
            }
        }

        if (!uuid && scriptContent.includes('eval(function')) {
            const uuidMatches = scriptContent.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/gi);
            if (uuidMatches && uuidMatches.length > 0) {
                uuid = uuidMatches[0];
                return false;
            }
        }
    });

    if (!uuid) {
        const match = html.match(/surrit\.com\/([a-f0-9\-]{36})\//i);
        if (match && match[1]) uuid = match[1];
    }

    return uuid;
}

async function isM3U8Available(url) {
    try {
        const resp = await Widget.http.get(url, {
            headers: {
                "Referer": "https://missav.ai/",
                "User-Agent": HEADERS["User-Agent"],
                "Origin": "https://missav.ai"
            },
            timeout: 1500
        });

        return resp && resp.statusCode === 200 && String(resp.data || "").includes("#EXTM3U");
    } catch (e) {
        return false;
    }
}

async function getFastBestVideoUrl(uuid) {
    const url1080 = `https://surrit.com/${uuid}/1080p/video.m3u8`;
    const url720 = `https://surrit.com/${uuid}/720p/video.m3u8`;

    const has1080 = await isM3U8Available(url1080);
    return has1080 ? url1080 : url720;
}

function normalizeText(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
}

function normalizeLabel(text) {
    return normalizeText(text).replace(/[：:]/g, "").trim();
}

function getImageFromElement($, $el) {
    return (
        $el.find('img').attr('data-src') ||
        $el.find('img').attr('src') ||
        $el.closest('div,li,figure').find('img').attr('data-src') ||
        $el.closest('div,li,figure').find('img').attr('src') ||
        ""
    );
}

function getDetailRowsByLabels($, labels = []) {
    const normalizedLabels = labels.map(normalizeLabel);
    const rows = [];

    $('.text-secondary').each((_, el) => {
        const $row = $(el);
        const label = normalizeLabel($row.find('span').first().text());
        if (normalizedLabels.includes(label)) {
            rows.push($row);
        }
    });

    return rows;
}

function extractPeopleByLabel($, label, role) {
    const peoples = [];
    const seen = new Set();
    const rows = getDetailRowsByLabels($, [label]);

    rows.forEach(($row) => {
        $row.find('a').each((_, el) => {
            const $a = $(el);
            const title = normalizeText($a.text());
            const href = resolveUrl($a.attr('href') || "");
            const avatar = getImageFromElement($, $a);
            const id = href || `${role}:${title}`;
            const key = `${role}:${id || title}`;

            if (!title || seen.has(key)) return;
            seen.add(key);

            peoples.push({
                // 上一版已验证可显示的官方字段
                id,
                title,
                avatar,
                role,

                // 只追加兼容字段，不改变 id 格式
                name: title,
                link: href,
                url: href
            });
        });
    });

    return peoples;
}

function extractPeoples($) {
    const peoples = [];
    const seen = new Set();

    const pushPeople = (person) => {
        const title = normalizeText(person.title || person.name);
        const role = normalizeText(person.role);
        const link = resolveUrl(person.link || person.url || person.id || "");
        const id = person.id || link || `${role}:${title}`;
        const key = `${role}:${id || title}`;

        if (!title || seen.has(key)) return;

        seen.add(key);
        peoples.push({
            // 上一版已验证可显示的官方字段
            id,
            title,
            avatar: person.avatar || "",
            role,

            // 只追加兼容字段
            name: title,
            link,
            url: link
        });
    };

    // 优先按 MissAV 详情页的字段名精准解析。
    extractPeopleByLabel($, "女优", "女优").forEach(pushPeople);
    extractPeopleByLabel($, "女優", "女优").forEach(pushPeople);

    extractPeopleByLabel($, "男优", "男优").forEach(pushPeople);
    extractPeopleByLabel($, "男優", "男优").forEach(pushPeople);

    extractPeopleByLabel($, "导演", "导演").forEach(pushPeople);
    extractPeopleByLabel($, "監督", "导演").forEach(pushPeople);
    extractPeopleByLabel($, "Director", "导演").forEach(pushPeople);

    // 兜底：如果详情页字段结构变化，仍然尝试从链接路径里抓团队成员。
    if (!peoples.length) {
        const fallbackSelectors = [
            'a[href*="/actresses/"]',
            'a[href*="/actors/"]',
            'a[href*="/directors/"]',
            'a[href*="actresses"]',
            'a[href*="actors"]',
            'a[href*="directors"]'
        ];

        fallbackSelectors.forEach((selector) => {
            $(selector).each((_, el) => {
                const $a = $(el);
                const href = resolveUrl($a.attr('href') || "");
                const title = normalizeText($a.text());
                if (!title) return;

                let role = "团队";
                if (href.includes('/actresses/')) role = "女优";
                else if (href.includes('/actors/')) role = "男优";
                else if (href.includes('/directors/')) role = "导演";

                pushPeople({
                    id: href || `${role}:${title}`,
                    title,
                    avatar: getImageFromElement($, $a),
                    role,
                    link: href,
                    url: href
                });
            });
        });
    }

    return peoples;
}



function extractGenreItems($) {
    const genreItems = [];
    const seen = new Set();
    const rows = getDetailRowsByLabels($, ["类型", "類型", "ジャンル", "Genres", "Genre"]);

    const pushGenre = (title, href) => {
        const cleanTitle = normalizeText(title);
        const id = resolveUrl(href || "") || cleanTitle;
        const key = id || cleanTitle;
        if (!cleanTitle || seen.has(key)) return;

        seen.add(key);
        genreItems.push({
            id,
            title: cleanTitle
        });
    };

    // 优先按 MissAV 详情页的「类型」字段精准解析。
    // 注意：「无码流出」这类链接不一定包含 /genres/，所以这里不筛 href。
    rows.forEach(($row) => {
        $row.find('a').each((_, el) => {
            const $a = $(el);
            pushGenre($a.text(), $a.attr('href') || "");
        });
    });

    // 兜底：如果 label 结构变化，再扫 genres/category 类链接。
    if (!genreItems.length) {
        $('a[href*="/genres/"], a[href*="/genre/"], a[href*="/categories/"], a[href*="/category/"]').each((_, el) => {
            const $a = $(el);
            pushGenre($a.text(), $a.attr('href') || "");
        });
    }

    return genreItems;
}

function extractRelatedItems($, currentLink) {
    const relatedItems = [];
    const seen = new Set();
    const normalizedCurrent = resolveUrl(currentLink || "").replace(/\/$/, "");

    const pushVideoCard = ($card) => {
        const $link = $card.find('a.text-secondary').first();
        const href = resolveUrl($link.attr('href') || "");
        const normalizedHref = href.replace(/\/$/, "");
        const title = normalizeText($link.text());

        if (!href || !title || normalizedHref === normalizedCurrent || seen.has(normalizedHref)) return;

        seen.add(normalizedHref);

        const $img = $card.find('img').first();
        const imgSrc = $img.attr('data-src') || $img.attr('src') || "";
        const duration = normalizeText($card.find('.absolute.bottom-1.right-1').text());
        const videoId = extractVideoId(href);
        const coverUrl = videoId ? `https://fourhoi.com/${videoId.toLowerCase()}/cover-t.jpg` : imgSrc;
        const finalCover = coverUrl || imgSrc;

        relatedItems.push({
            id: href,
            type: "link",
            title,
            coverUrl: finalCover,
            posterPath: finalCover,
            backdropPath: finalCover,
            image: finalCover,
            link: href,
            description: `${duration ? `时长: ${duration}` : ""}${videoId ? `${duration ? " | " : ""}番号: ${videoId}` : ""}`,
            customHeaders: HEADERS
        });
    };

    // 如果页面中已经有渲染后的推荐卡片，优先抓取。
    // MissAV 的 recommendItems 很多时候是前端模板变量；Widget 不执行 JS 时，这里可能返回空数组，这是预期行为。
    $('div.group').each((_, el) => pushVideoCard($(el)));

    return relatedItems;
}

// ==================== JavTrailers 元数据增强：剧照 + 预告片 ====================
const JAVTRAILERS_BASE_URL = "https://javtrailers.com";

const JAVTRAILERS_HEADERS = {
    "User-Agent": HEADERS["User-Agent"],
    "Accept": HEADERS["Accept"],
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Referer": "https://javtrailers.com/",
    "Connection": "keep-alive"
};

function resolveJavTrailersUrl(path) {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${JAVTRAILERS_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function cleanDvdId(raw) {
    return normalizeText(raw)
        .replace(/-UNCENSORED-LEAK$/i, "")
        .replace(/-CHINESE-SUBTITLE$/i, "")
        .replace(/_UNCENSORED_LEAK$/i, "")
        .replace(/_CHINESE_SUBTITLE$/i, "")
        .replace(/\s+/g, "")
        .trim();
}

function extractDvdIdFromMissAv($, link) {
    let dvdId = "";

    // 优先从 MissAV 详情页的「番号」字段取。
    const rows = getDetailRowsByLabels($, ["番号", "品番", "DVD ID"]);
    rows.forEach(($row) => {
        if (dvdId) return;
        const text = normalizeText($row.find("span.font-medium").first().text());
        if (text) dvdId = text;
    });

    // 兜底：从 URL slug 取。
    if (!dvdId) {
        const slug = String(link || "").split("?")[0].split("/").filter(Boolean).pop() || "";
        dvdId = slug;
    }

    return cleanDvdId(dvdId);
}

function normalizeDvdIdForSearch(dvdId) {
    const clean = cleanDvdId(dvdId).toUpperCase();

    // SNOS00233 / SNOS-00233 / SNOS_00233 -> snos-233
    const m = clean.match(/^([A-Z]+)[-_ ]*0*(\d+)$/);
    if (m) {
        return `${m[1].toLowerCase()}-${parseInt(m[2], 10)}`;
    }

    return clean
        .replace(/_/g, "-")
        .replace(/\s+/g, "-")
        .toLowerCase();
}

function normalizeDvdIdForCompare(dvdId) {
    const clean = cleanDvdId(dvdId).toUpperCase();

    // SNOS-233 / SNOS00233 -> SNOS233
    const m = clean.match(/([A-Z]+)[-_ ]*0*(\d+)/);
    if (m) {
        return `${m[1]}${parseInt(m[2], 10)}`;
    }

    return clean.replace(/[^A-Z0-9]/g, "");
}

function extractJavTrailersContentId($, html, detailUrl) {
    const text = normalizeText($("body").text());

    // JavTrailers 详情页 URL slug 就是高可信 Content ID：
    // FNS-139   -> /video/1fns00139
    // ABF-348   -> /video/118abf00348
    // DLDSS-492 -> /video/1dldss00492
    // 所以这里优先从 detailUrl 取，不再把 slug 当作“可疑 fallback”。
    const urlMatch = String(detailUrl || "").match(/\/video\/([a-z0-9_]+)/i);
    if (urlMatch && urlMatch[1]) {
        return urlMatch[1].toLowerCase();
    }

    // 形如：Content ID: 118abf00348
    const contentIdMatch = text.match(/Content\s*ID\s*:?\s*([a-z0-9_]+)/i);
    if (contentIdMatch && contentIdMatch[1]) {
        return contentIdMatch[1].toLowerCase();
    }

    // 低优先级补充：仅在页面 URL 与字段都缺失时从 DMM 图片地址反推。
    const imageMatch = String(html || "").match(/pics\.dmm\.co\.jp\/digital\/video\/([a-z0-9_]+)\//i);
    if (imageMatch && imageMatch[1]) {
        return imageMatch[1].toLowerCase();
    }

    return "";
}

// ==================== JavTrailers Gallery 剧照提取 ====================

function buildDmmContentIdFromDvdId(dvdId) {
    const clean = cleanDvdId(dvdId).toLowerCase();

    // SNOS-233 / SNOS00233 / snos-00233 -> snos00233
    const m = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
    if (!m) return clean.replace(/[^a-z0-9]/gi, "");

    const prefix = m[1].toLowerCase();
    const number = String(parseInt(m[2], 10)).padStart(5, "0");

    return `${prefix}${number}`;
}

function buildDmmGallery(contentId, count = 10) {
    const id = String(contentId || "").toLowerCase().trim();
    if (!id) return [];

    const results = [];
    for (let i = 1; i <= count; i++) {
        results.push(`https://pics.dmm.co.jp/digital/video/${id}/${id}jp-${i}.jpg`);
    }

    return results;
}

function buildMgstageGalleryFromDvdId(dvdId, count = 10) {
    const clean = cleanDvdId(dvdId).toLowerCase();
    const m = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
    if (!m) return [];

    const prefix = m[1].toLowerCase();
    const numberRaw = m[2];
    const number = String(parseInt(numberRaw, 10));
    const dvdDash = `${prefix}-${number}`;

    // Prestige / MGStage 常见剧照路径：
    // https://image.mgstage.com/images/prestige/abf/350/cap_e_1_abf-350.jpg
    const results = [];
    for (let i = 1; i <= count; i++) {
        results.push(`https://image.mgstage.com/images/prestige/${prefix}/${number}/cap_e_${i}_${dvdDash}.jpg`);
    }

    return results;
}

function buildMgstageGalleryFromHtmlOrDvdId(html, dvdId, count = 10) {
    const raw = String(html || "")
        .replace(/\\\//g, "/")
        .replace(/&amp;/g, "&")
        .replace(/\\u002F/g, "/");

    const urls = [];
    const seen = new Set();

    const pushUrl = (url) => {
        const clean = normalizeImageUrl(url);
        if (!clean || seen.has(clean)) return;
        seen.add(clean);
        urls.push(clean);
    };

    // 如果页面里已经有 MGStage 主图，例如：
    // image.mgstage.com/images/prestige/abf/350/pf_o1_abf-350.jpg
    // 就直接从它反推 cap_e_N。
    const coverMatch = raw.match(/https?:\/\/image\.mgstage\.com\/images\/([^"'\\\s<>]+?)\/([a-z]+)\/(\d+)\/pf_o\d+_([a-z]+-\d+)\.(?:jpg|jpeg|webp|png)/i);

    if (coverMatch) {
        const maker = coverMatch[1];
        const prefix = coverMatch[2].toLowerCase();
        const number = coverMatch[3];
        const dvdDash = coverMatch[4].toLowerCase();

        for (let i = 1; i <= count; i++) {
            pushUrl(`https://image.mgstage.com/images/${maker}/${prefix}/${number}/cap_e_${i}_${dvdDash}.jpg`);
        }

        return urls;
    }

    return buildMgstageGalleryFromDvdId(dvdId, count);
}

function extractCompareIdsFromText(text) {
    const raw = String(text || "");
    const ids = [];
    const seen = new Set();

    // 支持：
    // SNOS-233
    // SNOS00233
    // 118abf00348 -> 能抽到 abf00348
    // image.mgstage.com/images/prestige/abf/348/... -> 能抽到 abf/348
    const patterns = [
        /([a-z]{2,12})[-_\s\/]*0*(\d{2,6})/gi,
        /(\d+)([a-z]{2,12})0*(\d{2,6})/gi
    ];

    patterns.forEach((pattern) => {
        let match;
        while ((match = pattern.exec(raw)) !== null) {
            let prefix = "";
            let num = "";

            if (match.length === 3) {
                prefix = match[1];
                num = match[2];
            } else if (match.length === 4) {
                prefix = match[2];
                num = match[3];
            }

            if (!prefix || !num) continue;

            const id = `${prefix.toUpperCase()}${parseInt(num, 10)}`;
            if (!seen.has(id)) {
                seen.add(id);
                ids.push(id);
            }
        }
    });

    return ids;
}

function imageUrlMatchesDvd(url, dvdId, contentId) {
    const target = normalizeDvdIdForCompare(dvdId);
    const contentCompare = normalizeDvdIdForCompare(contentId);
    const candidates = extractCompareIdsFromText(url);

    if (!target && !contentCompare) return true;

    return candidates.some((candidate) => {
        return (
            candidate === target ||
            candidate === contentCompare ||
            target.includes(candidate) ||
            candidate.includes(target) ||
            contentCompare.includes(candidate) ||
            candidate.includes(contentCompare)
        );
    });
}

function normalizeImageUrl(url) {
    if (!url) return "";

    let clean = String(url)
        .replace(/\\\//g, "/")
        .replace(/&amp;/g, "&")
        .trim();

    if (!clean || clean.startsWith("data:")) return "";

    if (clean.startsWith("//")) clean = `https:${clean}`;
    return resolveJavTrailersUrl(clean);
}

function sortGalleryUrls(urls) {
    return urls.sort((a, b) => {
        const getIndex = (url) => {
            const patterns = [
                /jp-(\d+)\./i,
                /cap_e_(\d+)_/i,
                /cap_e_(\d+)\./i,
                /cap_(\d+)_/i,
                /-(\d+)\.(?:jpg|jpeg|webp|png)/i
            ];

            for (const pattern of patterns) {
                const m = url.match(pattern);
                if (m && m[1]) return parseInt(m[1], 10);
            }

            return 9999;
        };

        return getIndex(a) - getIndex(b);
    });
}

function extractGalleryImagesFromSwiper($, dvdId, contentId) {
    const urls = [];
    const seen = new Set();

    const pushUrl = (url) => {
        const clean = normalizeImageUrl(url);
        if (!clean || seen.has(clean)) return;

        // Gallery 里优先相信 swiper 的 img，但仍做轻量番号过滤，避免混入推荐图。
        if (!imageUrlMatchesDvd(clean, dvdId, contentId)) return;

        seen.add(clean);
        urls.push(clean);
    };

    // JavTrailers Gallery 的真实结构：
    // .swiper-wrapper .swiper-slide.image-container img
    // src 通常是高清图；data-loading 通常是缩略图。
    $(".swiper-wrapper .swiper-slide.image-container img, .swiper-wrapper .swiper-slide img").each((_, el) => {
        const $img = $(el);

        const src = $img.attr("src") || "";
        const dataSrc = $img.attr("data-src") || "";
        const dataOriginal = $img.attr("data-original") || "";
        const dataLazy = $img.attr("data-lazy") || "";

        // 注意：不要优先取 data-loading。
        // ABF 例子里 data-loading=cap_t1 缩略图，src=cap_e 高清图。
        pushUrl(src);
        pushUrl(dataSrc);
        pushUrl(dataOriginal);
        pushUrl(dataLazy);
    });

    return sortGalleryUrls(urls);
}

function extractGalleryImagesFromRawHtml(html, dvdId, contentId) {
    const normalized = String(html || "")
        .replace(/\\\//g, "/")
        .replace(/&amp;/g, "&")
        .replace(/\\u002F/g, "/");

    const urls = [];
    const seen = new Set();

    const pushUrl = (url) => {
        const clean = normalizeImageUrl(url);
        if (!clean || seen.has(clean)) return;

        if (!imageUrlMatchesDvd(clean, dvdId, contentId)) return;

        seen.add(clean);
        urls.push(clean);
    };

    // 只抓常见 Gallery 高清图，不再泛扫所有图片。
    // DMM: snos00233jp-1.jpg
    // MGStage: cap_e_6_abf-348.jpg
    
    const patterns = [
    /https?:\/\/pics\.dmm\.co\.jp\/digital\/video\/[^"'\\\s<>]+?\/[^"'\\\s<>]+?jp-\d+\.(?:jpg|jpeg|webp|png)/gi,

    // MGStage 高清剧照。
    /https?:\/\/image\.mgstage\.com\/images\/[^"'\\\s<>]+?\/cap_e_\d+_[^"'\\\s<>]+?\.(?:jpg|jpeg|webp|png)/gi,

    // MGStage 主图 / 封面图，用于后续 fallback 反推 cap_e_N。
    /https?:\/\/image\.mgstage\.com\/images\/[^"'\\\s<>]+?\/pf_o\d+_[^"'\\\s<>]+?\.(?:jpg|jpeg|webp|png)/gi,

    /src=["']([^"']*cap_e_\d+_[^"']+\.(?:jpg|jpeg|webp|png))["']/gi,
    /src=["']([^"']*pf_o\d+_[^"']+\.(?:jpg|jpeg|webp|png))["']/gi,
    /src=["']([^"']*jp-\d+\.(?:jpg|jpeg|webp|png))["']/gi
    ];

    patterns.forEach((pattern) => {
        let match;
        while ((match = pattern.exec(normalized)) !== null) {
            pushUrl(match[1] || match[0]);
        }
    });

    return sortGalleryUrls(urls);
}

function isMgstageCoverOnlyImage(url) {
    return /image\.mgstage\.com\/images\/.+?\/pf_o\d+_/i.test(String(url || ""));
}

function extractJavTrailersVideoUrls(html) {
    const normalized = String(html || "")
        .replace(/\\\//g, "/")
        .replace(/&amp;/g, "&")
        .replace(/\\u002F/g, "/");

    const urls = [];
    const seen = new Set();

    const pushUrl = (url) => {
        const clean = normalizeImageUrl(url);
        if (!clean || seen.has(clean)) return;

        // 这里只收预告视频，不收图片。
        if (!/\.(?:m3u8|mp4)(?:\?|$)/i.test(clean)) return;

        seen.add(clean);
        urls.push(clean);
    };

    const patterns = [
        // 原有 m3u8。
        /https?:\/\/[^"'\\\s<>]+?\.m3u8(?:\?[^"'\\\s<>]*)?/gi,
        /file\s*:\s*["']([^"']+?\.m3u8(?:\?[^"']*)?)["']/gi,
        /src\s*:\s*["']([^"']+?\.m3u8(?:\?[^"']*)?)["']/gi,
        /source\s*:\s*["']([^"']+?\.m3u8(?:\?[^"']*)?)["']/gi,

        // MGStage / 片商官网常见 mp4 sample。
        /https?:\/\/sample\.mgstage\.com\/sample\/[^"'\\\s<>]+?\.mp4(?:\?[^"'\\\s<>]*)?/gi,
        /<video[^>]+src=["']([^"']+?\.mp4(?:\?[^"']*)?)["']/gi,
        /src=["']([^"']+?\.mp4(?:\?[^"']*)?)["']/gi,
        /file\s*:\s*["']([^"']+?\.mp4(?:\?[^"']*)?)["']/gi,
        /source\s*:\s*["']([^"']+?\.mp4(?:\?[^"']*)?)["']/gi
    ];

    patterns.forEach((pattern) => {
        let match;
        while ((match = pattern.exec(normalized)) !== null) {
            pushUrl(match[1] || match[0]);
        }
    });

    return urls;
}

function isLikelyDmmContentId(contentId) {
    const id = String(contentId || "").toLowerCase().trim();

    // DMM/FANZA 的 digital/video ID 既可能是 snos00233，
    // 也可能是 1dldss00487、1start00521 这种带数字前缀的 Content ID。
    return /^(?:\d+)?[a-z]+0\d{4,5}$/i.test(id);
}

function isDmmSourceHtml(html) {
    const raw = String(html || "").toLowerCase();

    return (
        raw.includes("pics.dmm.co.jp") ||
        raw.includes("al.fanza.co.jp") ||
        raw.includes("fanza")
    );
}

function isMgstageSourceHtml(html) {
    const raw = String(html || "").toLowerCase();

    return (
        raw.includes("image.mgstage.com") ||
        raw.includes("mgstage.nihonjav.com") ||
        raw.includes("mgstage")
    );
}

function extractDmmGalleryFromHtml(html, contentId, dvdId) {
    const $ = Widget.html.load(html);

    // 1. 最优先：从 JavTrailers Gallery 的 swiper DOM 里提取真实 img.src。
    // 这能同时兼容 DMM、MGStage、片商官网等不同来源。
    const swiperImages = extractGalleryImagesFromSwiper($, dvdId, contentId);
    if (swiperImages.length) return swiperImages;

    // 2. 其次：从 raw HTML 里提取明确的 Gallery 高清图片 URL。
    const rawImages = extractGalleryImagesFromRawHtml(html, dvdId, contentId);

    // MGStage / Prestige 的 pf_o1_xxx 通常只是稳定封面，不是 gallery。
    // 如果 raw 只抓到 pf_o 封面图，不能直接 return，否则会挡住 cap_e_N fallback。
    const isMgstage = isMgstageSourceHtml(html);
    const rawHasRealGallery = rawImages.some((url) => {
        if (isMgstageCoverOnlyImage(url)) return false;
        return /cap_e_\d+_/i.test(url) || /jp-\d+\./i.test(url);
    });

    if (rawImages.length && (!isMgstage || rawHasRealGallery)) {
        return rawImages;
    }

    // 3. DMM/FANZA 来源 fallback。
    // DLDSS / START 这类 Content ID 是 1dldss00487、1start00521，
    // 虽然前面带数字，但仍然可以用于 pics.dmm.co.jp/digital/video/{contentId}/ 构造。
    const finalId = String(contentId || "").toLowerCase().trim();
    if (isDmmSourceHtml(html) && isLikelyDmmContentId(finalId)) {
        return buildDmmGallery(finalId, 10);
    }

    // 4. MGStage / Prestige 来源 fallback。
    // ABF 这类通常不是 DMM 图源，不能用 118abf00350 去构造 DMM。
    // 应该构造 image.mgstage.com/images/prestige/abf/350/cap_e_N_abf-350.jpg。
    if (isMgstage) {
        return buildMgstageGalleryFromHtmlOrDvdId(html, dvdId, 10);
    }

    return [];
}

function extractJavTrailersM3U8(html) {
    const normalized = String(html || "")
        .replace(/\\\//g, "/")
        .replace(/&amp;/g, "&")
        .replace(/\\u002F/g, "/");

    const urls = [];
    const seen = new Set();

    const patterns = [
        /https?:\/\/[^"'\\\s<>]+?\.m3u8(?:\?[^"'\\\s<>]*)?/gi,
        /file\s*:\s*["']([^"']+?\.m3u8(?:\?[^"']*)?)["']/gi,
        /src\s*:\s*["']([^"']+?\.m3u8(?:\?[^"']*)?)["']/gi,
        /source\s*:\s*["']([^"']+?\.m3u8(?:\?[^"']*)?)["']/gi
    ];

    patterns.forEach((pattern) => {
        let match;
        while ((match = pattern.exec(normalized)) !== null) {
            const url = match[1] || match[0];
            if (!url || seen.has(url)) return;
            seen.add(url);
            urls.push(url);
        }
    });

    return urls;
}

function extractJavTrailersCover($, contentId, backdropPaths) {
    const ogImage = $('meta[property="og:image"]').attr("content") || "";
    if (ogImage) return resolveJavTrailersUrl(ogImage);

    const firstImg =
        $("img").first().attr("data-src") ||
        $("img").first().attr("src") ||
        "";

    if (firstImg && !firstImg.startsWith("data:")) {
        return resolveJavTrailersUrl(firstImg);
    }

    if (backdropPaths && backdropPaths.length) {
        return backdropPaths[0];
    }

    const gallery = buildDmmGallery(contentId, 1);
    return gallery[0] || "";
}

function extractJavTrailersTrailers($, html, contentId, backdropPaths) {
    const videoUrls = extractJavTrailersVideoUrls(html);
    if (!videoUrls.length) return [];

    const coverUrl = extractJavTrailersCover($, contentId, backdropPaths);

    // 优先 m3u8；没有 m3u8 时使用 sample.mgstage.com / 片商官网 mp4。
    const m3u8Urls = videoUrls.filter((url) => /\.m3u8(?:\?|$)/i.test(url));
    const mp4Urls = videoUrls.filter((url) => /\.mp4(?:\?|$)/i.test(url));

    const bestUrl = m3u8Urls.length
        ? m3u8Urls[m3u8Urls.length - 1]
        : mp4Urls[mp4Urls.length - 1];

    if (!bestUrl) return [];

    return [{
        id: bestUrl,
        title: "预告片",
        coverUrl,
        url: bestUrl,
        customHeaders: JAVTRAILERS_HEADERS
    }];
}

function scoreJavTrailersSearchResult($, $a, targetCompareId) {
    const href = resolveJavTrailersUrl($a.attr("href") || "");
    const text = normalizeText($a.text());
    const nearbyText = normalizeText($a.closest("div,li,article,section").text());
    const slug = href.split("/").filter(Boolean).pop() || "";

    const candidates = [text, nearbyText, slug];
    let bestScore = 0;

    candidates.forEach((candidate) => {
        const compare = normalizeDvdIdForCompare(candidate);
        if (!compare) return;

        if (compare === targetCompareId) {
            bestScore = Math.max(bestScore, 100);
        } else if (compare.includes(targetCompareId) || targetCompareId.includes(compare)) {
            bestScore = Math.max(bestScore, 60);
        }
    });

    // /video/{slug} 是 JavTrailers Content ID。搜索结果里的 slug 可直接参与高可信匹配。
    if (href.includes("/video/")) {
        bestScore += 10;
    }

    return {
        href,
        slug,
        contentId: slug.toLowerCase(),
        score: bestScore
    };
}

async function findJavTrailersDetailUrl(dvdId) {
    const searchKeyword = normalizeDvdIdForSearch(dvdId);
    const targetCompareId = normalizeDvdIdForCompare(dvdId);
    if (!searchKeyword || !targetCompareId) return "";

    const searchUrl = `${JAVTRAILERS_BASE_URL}/search/${encodeURIComponent(searchKeyword)}`;

    try {
        const res = await Widget.http.get(searchUrl, {
            headers: JAVTRAILERS_HEADERS,
            timeout: 5000
        });

        const html = res.data || "";
        const $ = Widget.html.load(html);
        const candidates = [];

        $('a[href*="/video/"]').each((_, el) => {
            const $a = $(el);
            const result = scoreJavTrailersSearchResult($, $a, targetCompareId);
            if (result.href) candidates.push(result);
        });

        candidates.sort((a, b) => b.score - a.score);

        if (candidates.length && candidates[0].score >= 60) {
            return candidates[0].href;
        }

        // 兜底：从 HTML 里直接找 /video/slug，并用 slug 比较。
        const directPattern = /href=["']([^"']*\/video\/([a-z0-9_]+)[^"']*)["']/gi;
        let match;
        while ((match = directPattern.exec(html)) !== null) {
            const href = resolveJavTrailersUrl(match[1]);
            const slug = match[2] || "";
            if (normalizeDvdIdForCompare(slug) === targetCompareId) {
                return href;
            }
        }

        return "";
    } catch (e) {
        console.log(`[JavTrailers] search failed: ${e.message}`);
        return "";
    }
}

async function fetchJavTrailersMeta(dvdId) {
    const empty = {
        detailUrl: "",
        contentId: "",
        backdropPaths: [],
        trailers: []
    };

    if (!dvdId) return empty;

    try {
        const detailUrl = await findJavTrailersDetailUrl(dvdId);
        if (!detailUrl) return empty;

        const res = await Widget.http.get(detailUrl, {
            headers: {
                ...JAVTRAILERS_HEADERS,
                "Referer": `${JAVTRAILERS_BASE_URL}/`
            },
            timeout: 5000
        });

        const html = res.data || "";
        const $ = Widget.html.load(html);

        const contentId = extractJavTrailersContentId($, html, detailUrl);
        const backdropPaths = extractDmmGalleryFromHtml(html, contentId, dvdId);
        const trailers = extractJavTrailersTrailers($, html, contentId, backdropPaths);

        return {
            detailUrl,
            contentId,
            backdropPaths,
            trailers
        };
    } catch (e) {
        console.log(`[JavTrailers] detail failed: ${e.message}`);
        return empty;
    }
}

function extractFallbackVideoUrl(html) {
    if (!html) return "";
    const matchFull = html.match(/https:\/\/surrit\.com\/[a-f0-9\-]+\/[^"'\s]*\.m3u8/i);
    if (matchFull && matchFull[0]) return matchFull[0];

    const matchSimple = html.match(/source\s*=\s*['"]([^'"]+)['"]/);
    if (matchSimple && matchSimple[1]) return matchSimple[1];

    return "";
}

async function loadDetail(link) {
    try {
        const res = await Widget.http.get(link, { headers: HEADERS });
        const html = res.data;
        const $ = Widget.html.load(html);

        const title = $('meta[property="og:title"]').attr('content') || $('h1').text().trim();
        const peoples = extractPeoples($);
        const genreItems = extractGenreItems($);
        const relatedItems = extractRelatedItems($, link);

        // 从 MissAV 详情页番号字段提取 DVD ID，再用 JavTrailers 补剧照和预告片。
        // 任意一步失败都返回空数组，不影响 MissAV 原有播放、团队、分类和点击列表功能。
        const dvdId = extractDvdIdFromMissAv($, link);
        const jtMeta = await fetchJavTrailersMeta(dvdId);

        const uuid = extractSurritUuidFromHtml(html);

        let videoUrl = "";

        if (uuid) {
            // 我们验证过的策略：只检测 1080p；没有则直接返回 720p。
            videoUrl = await getFastBestVideoUrl(uuid);
        }

        if (!videoUrl) {
            videoUrl = extractFallbackVideoUrl(html);
        }

        if (videoUrl) {
            return [{
                id: link,
                type: "video",
                title: title,
                videoUrl: videoUrl.replace(/&amp;/g, '&'),

                // Forward 标准详情字段。
                peoples: peoples,
                genreItems: genreItems,
                backdropPaths: jtMeta.backdropPaths || [],
                trailers: jtMeta.trailers || [],
                relatedItems: relatedItems,

                // 调试用：如果 Forward 展示 description，可以看到 JavTrailers 是否命中。
                description: dvdId
                    ? `番号: ${dvdId}${jtMeta.contentId ? ` | JavTrailers: ${jtMeta.contentId}` : ""}`
                    : "",

                // 不强制 playerType，避免部分播放器内核影响快进/手势。
                customHeaders: {
                    "Referer": "https://missav.ai/",
                    "User-Agent": HEADERS["User-Agent"],
                    "Origin": "https://missav.ai"
                }
            }];
        }

        return [{ id: "err", type: "text", title: "解析失败", subTitle: "未找到播放地址" }];
    } catch (e) {
        return [{ id: "err", type: "text", title: "请求错误", subTitle: e.message }];
    }
}
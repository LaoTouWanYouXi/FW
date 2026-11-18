WidgetMetadata = {
  id: "rex.nextporn",
  title: "NextPorn",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "nextporn.com · AI 生成的成人短视频与完整场景（110 分类 / 71 标签 / 69 演员，SSR 直读，含搜索与详情推荐）",
  author: "YG",
  site: "https://nextporn.com/",
  icon: "https://nextporn.com/web-app-manifest-512x512.png",
  detailCacheDuration: 60,
  modules: [
    {
      id: "nextporn-all",
      title: "全部视频",
      description: "全站视频归档（约 1.2 万条，按页浏览）",
      requiresWebView: false,
      cacheDuration: 300,
      functionName: "loadList",
      params: [
        { name: "kind", title: "类型", type: "constant", value: "all" },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "nextporn-category",
      title: "分类浏览",
      description: "按分类浏览（分类名后为视频数量）",
      requiresWebView: false,
      cacheDuration: 300,
      functionName: "loadList",
      params: [
        { name: "kind", title: "类型", type: "constant", value: "category" },
        {
          name: "category",
          title: "分类",
          type: "enumeration",
          value: "amateur",
          enumOptions: [
          { title: "Amateur (7.9k)", value: "amateur" },
          { title: "POV (7.5k)", value: "pov" },
          { title: "18-25 (6.9k)", value: "18-25" },
          { title: "Babe (5.3k)", value: "babe" },
          { title: "HD Porn (5.0k)", value: "hd-porn" },
          { title: "Brunette (4.4k)", value: "brunette" },
          { title: "Transgender (126)", value: "transgender" },
          { title: "Hentai (313)", value: "hentai" },
          { title: "Gangbang (111)", value: "gangbang" },
          { title: "Threesome (194)", value: "threesome" },
          { title: "Hardcore (3.4k)", value: "hardcore" },
          { title: "Doggystyle (3.3k)", value: "doggystyle" },
          { title: "Big Tits (3.2k)", value: "big-tits" },
          { title: "Big Ass (3.1k)", value: "big-ass" },
          { title: "Blonde (3.0k)", value: "blonde" },
          { title: "Exclusive (2.6k)", value: "exclusive" },
          { title: "Blowjob (2.5k)", value: "blowjob" },
          { title: "College (18+) (2.5k)", value: "college-18" },
          { title: "Role Play (2.4k)", value: "role-play" },
          { title: "Verified Amateurs (2.2k)", value: "verified-amateurs" },
          { title: "Asian (1.9k)", value: "asian" },
          { title: "Straight (1.8k)", value: "straight" },
          { title: "MILF (1.8k)", value: "milf" },
          { title: "Public (1.4k)", value: "public" },
          { title: "Latina (1.4k)", value: "latina" },
          { title: "Curvy (1.3k)", value: "curvy" },
          { title: "Riding (1.2k)", value: "riding" },
          { title: "Rough Sex (1.2k)", value: "rough-sex" },
          { title: "Cumshot (1.1k)", value: "cumshot" },
          { title: "Masturbation (1.1k)", value: "masturbation" },
          { title: "Solo Female (1.0k)", value: "solo-female" },
          { title: "Athletic (1.0k)", value: "athletic" },
          { title: "Euro (846)", value: "euro" },
          { title: "Step Fantasy (822)", value: "step-fantasy" },
          { title: "Small Tits (801)", value: "small-tits" },
          { title: "Gay (716)", value: "gay" },
          { title: "Ebony (691)", value: "ebony" },
          { title: "Indian (690)", value: "indian" },
          { title: "Anal (656)", value: "anal" },
          { title: "Creampie (609)", value: "creampie" },
          { title: "Fingering (589)", value: "fingering" },
          { title: "Casting (564)", value: "casting" },
          { title: "Red Head (540)", value: "red-head" },
          { title: "Mature (501)", value: "mature" },
          { title: "Webcam (471)", value: "webcam" },
          { title: "Deepthroat (455)", value: "deepthroat" },
          { title: "Lingerie (415)", value: "lingerie" },
          { title: "Arab (394)", value: "arab" },
          { title: "Petite (358)", value: "petite" },
          { title: "Facial (355)", value: "facial" },
          { title: "British (350)", value: "british" },
          { title: "TikTok (338)", value: "tiktok" },
          { title: "Hijab (319)", value: "hijab" },
          { title: "Pornstar (309)", value: "pornstar" },
          { title: "3D (301)", value: "3d" },
          { title: "Massage (289)", value: "massage" },
          { title: "Tattooed Women (267)", value: "tattooed-women" },
          { title: "Southeast Asian (258)", value: "southeast-asian" },
          { title: "German (251)", value: "german" },
          { title: "Fetish (245)", value: "fetish" },
          { title: "Indonesian (222)", value: "indonesian" },
          { title: "Interracial (219)", value: "interracial" },
          { title: "Romantic (213)", value: "romantic" },
          { title: "BBC (189)", value: "bbc" },
          { title: "Czech (187)", value: "czech" },
          { title: "Old/Young (18+) (177)", value: "old-young-18" },
          { title: "Italian (176)", value: "italian" },
          { title: "Korean (171)", value: "korean" },
          { title: "Chinese (168)", value: "chinese" },
          { title: "Handjob (162)", value: "handjob" },
          { title: "Goth (162)", value: "goth" },
          { title: "Cheating (161)", value: "cheating" },
          { title: "Lesbian (157)", value: "lesbian" },
          { title: "Cuckold (150)", value: "cuckold" },
          { title: "Pussy Licking (147)", value: "pussy-licking" },
          { title: "BBW (146)", value: "bbw" },
          { title: "Brazilian (141)", value: "brazilian" },
          { title: "JOI (140)", value: "joi" },
          { title: "Squirt (118)", value: "squirt" },
          { title: "Cosplay (109)", value: "cosplay" },
          { title: "Double Penetration (108)", value: "double-penetration" },
          { title: "Pantyhose (106)", value: "pantyhose" },
          { title: "Japanese (103)", value: "japanese" },
          { title: "Russian (97)", value: "russian" },
          { title: "Feet (93)", value: "feet" },
          { title: "Femdom (93)", value: "femdom" },
          { title: "Bikini (92)", value: "bikini" },
          { title: "Footjob (91)", value: "footjob" },
          { title: "Party (90)", value: "party" },
          { title: "Femboy (80)", value: "femboy" },
          { title: "Cartoon (69)", value: "cartoon" },
          { title: "Pregnant (66)", value: "pregnant" },
          { title: "Toys (65)", value: "toys" },
          { title: "Middle Eastern (63)", value: "middle-eastern" },
          { title: "Hairy (61)", value: "hairy" },
          { title: "Futa (55)", value: "futa" },
          { title: "BDSM (51)", value: "bdsm" },
          { title: "Bondage (50)", value: "bondage" },
          { title: "Solo Male (47)", value: "solo-male" },
          { title: "Strap On (40)", value: "strap-on" },
          { title: "PAWG (29)", value: "pawg" },
          { title: "Huge Tits (26)", value: "huge-tits" },
          { title: "Piss (26)", value: "piss" },
          { title: "Freeuse (24)", value: "freeuse" },
          { title: "French (22)", value: "french" },
          { title: "Female Orgasm (20)", value: "female-orgasm" },
          { title: "Sissy (18)", value: "sissy" },
          { title: "Mating Press (13)", value: "mating-press" },
          { title: "Orgy (9)", value: "orgy" },
          { title: "Big Dick (2)", value: "big-dick" },
        ],
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "nextporn-tag",
      title: "标签浏览",
      description: "按标签浏览",
      requiresWebView: false,
      cacheDuration: 300,
      functionName: "loadList",
      params: [
        { name: "kind", title: "类型", type: "constant", value: "tag" },
        {
          name: "tag",
          title: "标签",
          type: "enumeration",
          value: "tiktok",
          enumOptions: [
          { title: "TikTok", value: "tiktok" },
          { title: "Snapchat", value: "snapchat" },
          { title: "Leaked", value: "leaked" },
          { title: "Face Fuck", value: "face-fuck" },
          { title: "Tits / Boobs", value: "tits" },
          { title: "Babes", value: "babe" },
          { title: "Pussy", value: "pussy" },
          { title: "Cumshot", value: "cumshot" },
          { title: "Sexy AI", value: "sexy" },
          { title: "Horny AI", value: "horny" },
          { title: "Boobs", value: "boobs" },
          { title: "Phone Selfie", value: "phone-selfie" },
          { title: "Amateur", value: "amateur" },
          { title: "Hot", value: "hot" },
          { title: "Sex", value: "sex" },
          { title: "Dick", value: "dick" },
          { title: "Pov", value: "pov" },
          { title: "Nude", value: "nude" },
          { title: "Brunette", value: "brunette" },
          { title: "Ass", value: "ass" },
          { title: "Bedroom", value: "bedroom" },
          { title: "Hardcore", value: "hardcore" },
          { title: "18 25", value: "18-25" },
          { title: "Rough Sex", value: "rough-sex" },
          { title: "Doggystyle", value: "doggystyle" },
          { title: "Blonde", value: "blonde" },
          { title: "Blowjob", value: "blowjob" },
          { title: "Rough", value: "rough" },
          { title: "Doggy", value: "doggy" },
          { title: "Fucking", value: "fucking" },
          { title: "From Behind", value: "from-behind" },
          { title: "Pounding", value: "pounding" },
          { title: "Black Hair", value: "black-hair" },
          { title: "Athletic", value: "athletic" },
          { title: "Missionary", value: "missionary" },
          { title: "College", value: "college" },
          { title: "Petite", value: "petite" },
          { title: "Role Play", value: "role-play" },
          { title: "Build Up", value: "build-up" },
          { title: "Creampie", value: "creampie" },
          { title: "Public", value: "public" },
          { title: "Asian", value: "asian" },
          { title: "Selfie", value: "selfie" },
          { title: "Living Room", value: "living-room" },
          { title: "Masturbation", value: "masturbation" },
          { title: "Fingering", value: "fingering" },
          { title: "Moaning", value: "moaning" },
          { title: "Cowgirl", value: "cowgirl" },
          { title: "Step Fantasy", value: "step-fantasy" },
          { title: "Taboo Roleplay", value: "taboo-roleplay" },
          { title: "Solo", value: "solo" },
          { title: "Ai", value: "ai" },
          { title: "Riding", value: "riding" },
          { title: "Casting", value: "casting" },
          { title: "Big Tits", value: "big-tits" },
          { title: "Oral", value: "oral" },
          { title: "Extended", value: "extended" },
          { title: "Curvy", value: "curvy" },
          { title: "Milf", value: "milf" },
          { title: "Homemade", value: "homemade" },
          { title: "Vertical", value: "vertical" },
          { title: "College 18", value: "college-18" },
          { title: "On Top", value: "on-top" },
          { title: "Bathroom", value: "bathroom" },
          { title: "Outdoor", value: "outdoor" },
          { title: "Stranger", value: "stranger" },
          { title: "Hd Porn", value: "hd-porn" },
          { title: "cum", value: "cum" },
          { title: "cock", value: "cock" },
          { title: "big cock", value: "big-cock" },
          { title: "redhead", value: "redhead" },
        ],
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "nextporn-star",
      title: "演员作品",
      description: "按 AI 演员浏览其全部作品",
      requiresWebView: false,
      cacheDuration: 300,
      functionName: "loadList",
      params: [
        { name: "kind", title: "类型", type: "constant", value: "star" },
        {
          name: "star",
          title: "演员",
          type: "enumeration",
          value: "kendall-pierce",
          enumOptions: [
          { title: "Kendall Pierce", value: "kendall-pierce" },
          { title: "Brooke Hayes", value: "brooke-hayes" },
          { title: "Natalia Vega", value: "natalia-vega" },
          { title: "Aria Chen", value: "aria-chen" },
          { title: "Valeria Santos", value: "valeria-santos" },
          { title: "Riley Cooper", value: "riley-cooper" },
          { title: "Jane Autumn", value: "janeautumn" },
          { title: "Lexi Rivera", value: "lexi-rivera" },
          { title: "Lily Kim", value: "lily-kim-1" },
          { title: "Ivy Rose", value: "ivy-rose" },
          { title: "Stella West", value: "stella-west" },
          { title: "Nyla Carter", value: "nyla-carter" },
          { title: "India Monroe", value: "india-monroe" },
          { title: "Tanya Becker", value: "tanya-becker" },
          { title: "Maya Hassan", value: "maya-hassan" },
          { title: "Mia Zhang", value: "mia-zhang" },
          { title: "Daniela Reyes", value: "daniela-reyes" },
          { title: "Nora Blake", value: "nora-blake" },
          { title: "Ivy Stride", value: "ivy-stride" },
          { title: "Mira Desai", value: "mira-desai" },
          { title: "Mina Hallow", value: "mina-hallow" },
          { title: "Zoe Hart", value: "zoe-hart" },
          { title: "Priya Frost", value: "priya-frost" },
          { title: "Maya Reyes", value: "maya-reyes" },
          { title: "Yuna Choi", value: "yuna-choi" },
          { title: "Emma Torres", value: "emma-torres" },
          { title: "Ash Quinn", value: "ash-quinn" },
          { title: "Leila Saadeh", value: "leila-saadeh" },
          { title: "Ananya Roy", value: "ananya-roy" },
          { title: "Nadia Karam", value: "nadia-karam" },
          { title: "Sylvie Cobalt", value: "sylvie-cobalt" },
          { title: "Millie Frost", value: "millie-frost" },
          { title: "Mei Lin Zhao", value: "mei-lin-zhao" },
          { title: "Zara Menon", value: "zara-menon" },
          { title: "Catalina Manansala", value: "catalina-manansala" },
          { title: "Layla Hijazi", value: "layla-hijazi" },
          { title: "Pinku Kitsune", value: "pinku-kitsune" },
          { title: "Sienna Cole", value: "sienna-cole" },
          { title: "Priya Nair", value: "priya-nair" },
          { title: "Luna Morales", value: "luna-morales" },
          { title: "Sadie Marlowe", value: "sadie-marlowe" },
          { title: "Lana Cross", value: "lana-cross" },
          { title: "Imani Brooks", value: "imani-brooks" },
          { title: "Lorraine Pike", value: "lorraine-pike" },
          { title: "Maddie Rhodes", value: "maddie-rhodes" },
          { title: "Rosie Calloway", value: "rosie-calloway" },
          { title: "Precious Tolentino", value: "precious-tolentino" },
          { title: "Katya Morozova", value: "katya-morozova" },
          { title: "Bianca Ferraro", value: "bianca-ferraro" },
          { title: "Dana Kessler", value: "dana-kessler" },
          { title: "Emi Takeda", value: "emi-takeda" },
          { title: "Chloe Sutton", value: "chloe-sutton" },
          { title: "Fariha Mirza", value: "fariha-mirza" },
          { title: "Paige Whitlock", value: "paige-whitlock" },
          { title: "Putri Anggraini", value: "putri-anggraini" },
          { title: "Ximena Zavala", value: "ximena-zavala" },
          { title: "Camila Delgado", value: "camila-delgado" },
          { title: "Lin Wanqing", value: "lin-wanqing" },
          { title: "Raven Holloway", value: "raven-holloway" },
          { title: "Divya Sharma", value: "divya-sharma" },
          { title: "Helen Durant", value: "helen-durant" },
          { title: "Layla Haddad", value: "layla-haddad" },
          { title: "Amateur Videos", value: "amateur-videos" },
          { title: "Hentai Videos", value: "hentai-videos" },
          { title: "Public Pickups", value: "public-pickups" },
          { title: "Casting Couch", value: "casting-couch" },
          { title: "Massage Paradise", value: "massage-paradise" },
          { title: "Interracial Encounters", value: "interracial-encounters" },
          { title: "Girls Only", value: "girls-only" },
        ],
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
    {
      id: "loadResource",
      title: "播放资源",
      description: "按需解析播放地址（仅本模块条目，需 npw: 前缀链接）",
      requiresWebView: false,
      cacheDuration: 0,
      functionName: "loadResource",
      type: "stream",
      params: [],
    },
  ],
  search: {
    title: "搜索 NextPorn",
    functionName: "searchVideos",
    params: [
      { name: "keyword", title: "关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page" },
    ],
  },
};

// ---------- 常量 ----------

const SITE = "https://nextporn.com";
// 站点列表/详情均为服务端渲染，普通浏览器 UA 即可；CDN（cdn.nextporn.com）公开直链、不校验 Referer
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
// 本站详情 link 的命名空间前缀：loadDetail / loadResource 只接受 "npw:<uuid>"，
// 其他模块的裸 id / 外站 URL 一律拒绝（来源隔离）
const LINK_PREFIX = "npw:";
const UUID_RE = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

const CATEGORIES = [{"slug":"amateur","title":"Amateur","count":"7.9k"},{"slug":"pov","title":"POV","count":"7.5k"},{"slug":"18-25","title":"18-25","count":"6.9k"},{"slug":"babe","title":"Babe","count":"5.3k"},{"slug":"hd-porn","title":"HD Porn","count":"5.0k"},{"slug":"brunette","title":"Brunette","count":"4.4k"},{"slug":"transgender","title":"Transgender","count":"126"},{"slug":"hentai","title":"Hentai","count":"313"},{"slug":"gangbang","title":"Gangbang","count":"111"},{"slug":"threesome","title":"Threesome","count":"194"},{"slug":"hardcore","title":"Hardcore","count":"3.4k"},{"slug":"doggystyle","title":"Doggystyle","count":"3.3k"},{"slug":"big-tits","title":"Big Tits","count":"3.2k"},{"slug":"big-ass","title":"Big Ass","count":"3.1k"},{"slug":"blonde","title":"Blonde","count":"3.0k"},{"slug":"exclusive","title":"Exclusive","count":"2.6k"},{"slug":"blowjob","title":"Blowjob","count":"2.5k"},{"slug":"college-18","title":"College (18+)","count":"2.5k"},{"slug":"role-play","title":"Role Play","count":"2.4k"},{"slug":"verified-amateurs","title":"Verified Amateurs","count":"2.2k"},{"slug":"asian","title":"Asian","count":"1.9k"},{"slug":"straight","title":"Straight","count":"1.8k"},{"slug":"milf","title":"MILF","count":"1.8k"},{"slug":"public","title":"Public","count":"1.4k"},{"slug":"latina","title":"Latina","count":"1.4k"},{"slug":"curvy","title":"Curvy","count":"1.3k"},{"slug":"riding","title":"Riding","count":"1.2k"},{"slug":"rough-sex","title":"Rough Sex","count":"1.2k"},{"slug":"cumshot","title":"Cumshot","count":"1.1k"},{"slug":"masturbation","title":"Masturbation","count":"1.1k"},{"slug":"solo-female","title":"Solo Female","count":"1.0k"},{"slug":"athletic","title":"Athletic","count":"1.0k"},{"slug":"euro","title":"Euro","count":"846"},{"slug":"step-fantasy","title":"Step Fantasy","count":"822"},{"slug":"small-tits","title":"Small Tits","count":"801"},{"slug":"gay","title":"Gay","count":"716"},{"slug":"ebony","title":"Ebony","count":"691"},{"slug":"indian","title":"Indian","count":"690"},{"slug":"anal","title":"Anal","count":"656"},{"slug":"creampie","title":"Creampie","count":"609"},{"slug":"fingering","title":"Fingering","count":"589"},{"slug":"casting","title":"Casting","count":"564"},{"slug":"red-head","title":"Red Head","count":"540"},{"slug":"mature","title":"Mature","count":"501"},{"slug":"webcam","title":"Webcam","count":"471"},{"slug":"deepthroat","title":"Deepthroat","count":"455"},{"slug":"lingerie","title":"Lingerie","count":"415"},{"slug":"arab","title":"Arab","count":"394"},{"slug":"petite","title":"Petite","count":"358"},{"slug":"facial","title":"Facial","count":"355"},{"slug":"british","title":"British","count":"350"},{"slug":"tiktok","title":"TikTok","count":"338"},{"slug":"hijab","title":"Hijab","count":"319"},{"slug":"pornstar","title":"Pornstar","count":"309"},{"slug":"3d","title":"3D","count":"301"},{"slug":"massage","title":"Massage","count":"289"},{"slug":"tattooed-women","title":"Tattooed Women","count":"267"},{"slug":"southeast-asian","title":"Southeast Asian","count":"258"},{"slug":"german","title":"German","count":"251"},{"slug":"fetish","title":"Fetish","count":"245"},{"slug":"indonesian","title":"Indonesian","count":"222"},{"slug":"interracial","title":"Interracial","count":"219"},{"slug":"romantic","title":"Romantic","count":"213"},{"slug":"bbc","title":"BBC","count":"189"},{"slug":"czech","title":"Czech","count":"187"},{"slug":"old-young-18","title":"Old/Young (18+)","count":"177"},{"slug":"italian","title":"Italian","count":"176"},{"slug":"korean","title":"Korean","count":"171"},{"slug":"chinese","title":"Chinese","count":"168"},{"slug":"handjob","title":"Handjob","count":"162"},{"slug":"goth","title":"Goth","count":"162"},{"slug":"cheating","title":"Cheating","count":"161"},{"slug":"lesbian","title":"Lesbian","count":"157"},{"slug":"cuckold","title":"Cuckold","count":"150"},{"slug":"pussy-licking","title":"Pussy Licking","count":"147"},{"slug":"bbw","title":"BBW","count":"146"},{"slug":"brazilian","title":"Brazilian","count":"141"},{"slug":"joi","title":"JOI","count":"140"},{"slug":"squirt","title":"Squirt","count":"118"},{"slug":"cosplay","title":"Cosplay","count":"109"},{"slug":"double-penetration","title":"Double Penetration","count":"108"},{"slug":"pantyhose","title":"Pantyhose","count":"106"},{"slug":"japanese","title":"Japanese","count":"103"},{"slug":"russian","title":"Russian","count":"97"},{"slug":"feet","title":"Feet","count":"93"},{"slug":"femdom","title":"Femdom","count":"93"},{"slug":"bikini","title":"Bikini","count":"92"},{"slug":"footjob","title":"Footjob","count":"91"},{"slug":"party","title":"Party","count":"90"},{"slug":"femboy","title":"Femboy","count":"80"},{"slug":"cartoon","title":"Cartoon","count":"69"},{"slug":"pregnant","title":"Pregnant","count":"66"},{"slug":"toys","title":"Toys","count":"65"},{"slug":"middle-eastern","title":"Middle Eastern","count":"63"},{"slug":"hairy","title":"Hairy","count":"61"},{"slug":"futa","title":"Futa","count":"55"},{"slug":"bdsm","title":"BDSM","count":"51"},{"slug":"bondage","title":"Bondage","count":"50"},{"slug":"solo-male","title":"Solo Male","count":"47"},{"slug":"strap-on","title":"Strap On","count":"40"},{"slug":"pawg","title":"PAWG","count":"29"},{"slug":"huge-tits","title":"Huge Tits","count":"26"},{"slug":"piss","title":"Piss","count":"26"},{"slug":"freeuse","title":"Freeuse","count":"24"},{"slug":"french","title":"French","count":"22"},{"slug":"female-orgasm","title":"Female Orgasm","count":"20"},{"slug":"sissy","title":"Sissy","count":"18"},{"slug":"mating-press","title":"Mating Press","count":"13"},{"slug":"orgy","title":"Orgy","count":"9"},{"slug":"big-dick","title":"Big Dick","count":"2"}];
const TAGS = [{"slug":"tiktok","title":"TikTok"},{"slug":"snapchat","title":"Snapchat"},{"slug":"leaked","title":"Leaked"},{"slug":"face-fuck","title":"Face Fuck"},{"slug":"tits","title":"Tits / Boobs"},{"slug":"babe","title":"Babes"},{"slug":"pussy","title":"Pussy"},{"slug":"cumshot","title":"Cumshot"},{"slug":"sexy","title":"Sexy AI"},{"slug":"horny","title":"Horny AI"},{"slug":"boobs","title":"Boobs"},{"slug":"phone-selfie","title":"Phone Selfie"},{"slug":"amateur","title":"Amateur"},{"slug":"hot","title":"Hot"},{"slug":"sex","title":"Sex"},{"slug":"dick","title":"Dick"},{"slug":"pov","title":"Pov"},{"slug":"nude","title":"Nude"},{"slug":"brunette","title":"Brunette"},{"slug":"ass","title":"Ass"},{"slug":"bedroom","title":"Bedroom"},{"slug":"hardcore","title":"Hardcore"},{"slug":"18-25","title":"18 25"},{"slug":"rough-sex","title":"Rough Sex"},{"slug":"doggystyle","title":"Doggystyle"},{"slug":"blonde","title":"Blonde"},{"slug":"blowjob","title":"Blowjob"},{"slug":"rough","title":"Rough"},{"slug":"doggy","title":"Doggy"},{"slug":"fucking","title":"Fucking"},{"slug":"from-behind","title":"From Behind"},{"slug":"pounding","title":"Pounding"},{"slug":"black-hair","title":"Black Hair"},{"slug":"athletic","title":"Athletic"},{"slug":"missionary","title":"Missionary"},{"slug":"college","title":"College"},{"slug":"petite","title":"Petite"},{"slug":"role-play","title":"Role Play"},{"slug":"build-up","title":"Build Up"},{"slug":"creampie","title":"Creampie"},{"slug":"public","title":"Public"},{"slug":"asian","title":"Asian"},{"slug":"selfie","title":"Selfie"},{"slug":"living-room","title":"Living Room"},{"slug":"masturbation","title":"Masturbation"},{"slug":"fingering","title":"Fingering"},{"slug":"moaning","title":"Moaning"},{"slug":"cowgirl","title":"Cowgirl"},{"slug":"step-fantasy","title":"Step Fantasy"},{"slug":"taboo-roleplay","title":"Taboo Roleplay"},{"slug":"solo","title":"Solo"},{"slug":"ai","title":"Ai"},{"slug":"riding","title":"Riding"},{"slug":"casting","title":"Casting"},{"slug":"big-tits","title":"Big Tits"},{"slug":"oral","title":"Oral"},{"slug":"extended","title":"Extended"},{"slug":"curvy","title":"Curvy"},{"slug":"milf","title":"Milf"},{"slug":"homemade","title":"Homemade"},{"slug":"vertical","title":"Vertical"},{"slug":"college-18","title":"College 18"},{"slug":"on-top","title":"On Top"},{"slug":"bathroom","title":"Bathroom"},{"slug":"outdoor","title":"Outdoor"},{"slug":"stranger","title":"Stranger"},{"slug":"hd-porn","title":"Hd Porn"},{"slug":"cum","title":"cum"},{"slug":"cock","title":"cock"},{"slug":"big-cock","title":"big cock"},{"slug":"redhead","title":"redhead"}];
const STARS = [{"slug":"kendall-pierce","title":"Kendall Pierce"},{"slug":"brooke-hayes","title":"Brooke Hayes"},{"slug":"natalia-vega","title":"Natalia Vega"},{"slug":"aria-chen","title":"Aria Chen"},{"slug":"valeria-santos","title":"Valeria Santos"},{"slug":"riley-cooper","title":"Riley Cooper"},{"slug":"janeautumn","title":"Jane Autumn"},{"slug":"lexi-rivera","title":"Lexi Rivera"},{"slug":"lily-kim-1","title":"Lily Kim"},{"slug":"ivy-rose","title":"Ivy Rose"},{"slug":"stella-west","title":"Stella West"},{"slug":"nyla-carter","title":"Nyla Carter"},{"slug":"india-monroe","title":"India Monroe"},{"slug":"tanya-becker","title":"Tanya Becker"},{"slug":"maya-hassan","title":"Maya Hassan"},{"slug":"mia-zhang","title":"Mia Zhang"},{"slug":"daniela-reyes","title":"Daniela Reyes"},{"slug":"nora-blake","title":"Nora Blake"},{"slug":"ivy-stride","title":"Ivy Stride"},{"slug":"mira-desai","title":"Mira Desai"},{"slug":"mina-hallow","title":"Mina Hallow"},{"slug":"zoe-hart","title":"Zoe Hart"},{"slug":"priya-frost","title":"Priya Frost"},{"slug":"maya-reyes","title":"Maya Reyes"},{"slug":"yuna-choi","title":"Yuna Choi"},{"slug":"emma-torres","title":"Emma Torres"},{"slug":"ash-quinn","title":"Ash Quinn"},{"slug":"leila-saadeh","title":"Leila Saadeh"},{"slug":"ananya-roy","title":"Ananya Roy"},{"slug":"nadia-karam","title":"Nadia Karam"},{"slug":"sylvie-cobalt","title":"Sylvie Cobalt"},{"slug":"millie-frost","title":"Millie Frost"},{"slug":"mei-lin-zhao","title":"Mei Lin Zhao"},{"slug":"zara-menon","title":"Zara Menon"},{"slug":"catalina-manansala","title":"Catalina Manansala"},{"slug":"layla-hijazi","title":"Layla Hijazi"},{"slug":"pinku-kitsune","title":"Pinku Kitsune"},{"slug":"sienna-cole","title":"Sienna Cole"},{"slug":"priya-nair","title":"Priya Nair"},{"slug":"luna-morales","title":"Luna Morales"},{"slug":"sadie-marlowe","title":"Sadie Marlowe"},{"slug":"lana-cross","title":"Lana Cross"},{"slug":"imani-brooks","title":"Imani Brooks"},{"slug":"lorraine-pike","title":"Lorraine Pike"},{"slug":"maddie-rhodes","title":"Maddie Rhodes"},{"slug":"rosie-calloway","title":"Rosie Calloway"},{"slug":"precious-tolentino","title":"Precious Tolentino"},{"slug":"katya-morozova","title":"Katya Morozova"},{"slug":"bianca-ferraro","title":"Bianca Ferraro"},{"slug":"dana-kessler","title":"Dana Kessler"},{"slug":"emi-takeda","title":"Emi Takeda"},{"slug":"chloe-sutton","title":"Chloe Sutton"},{"slug":"fariha-mirza","title":"Fariha Mirza"},{"slug":"paige-whitlock","title":"Paige Whitlock"},{"slug":"putri-anggraini","title":"Putri Anggraini"},{"slug":"ximena-zavala","title":"Ximena Zavala"},{"slug":"camila-delgado","title":"Camila Delgado"},{"slug":"lin-wanqing","title":"Lin Wanqing"},{"slug":"raven-holloway","title":"Raven Holloway"},{"slug":"divya-sharma","title":"Divya Sharma"},{"slug":"helen-durant","title":"Helen Durant"},{"slug":"layla-haddad","title":"Layla Haddad"},{"slug":"amateur-videos","title":"Amateur Videos"},{"slug":"hentai-videos","title":"Hentai Videos"},{"slug":"public-pickups","title":"Public Pickups"},{"slug":"casting-couch","title":"Casting Couch"},{"slug":"massage-paradise","title":"Massage Paradise"},{"slug":"interracial-encounters","title":"Interracial Encounters"},{"slug":"girls-only","title":"Girls Only"}];

// ---------- 工具函数 ----------

function slugLookup(entries) {
  const map = {};
  entries.forEach((e) => {
    map[e.slug] = true;
  });
  return map;
}
const CATEGORY_SLUGS = slugLookup(CATEGORIES);
const TAG_SLUGS = slugLookup(TAGS);
const STAR_SLUGS = slugLookup(STARS);

// 校验 slug 再拼 URL：枚举参数（用户从选择器选的）按内嵌表严格校验；
// genreId / peopleId 来自站点自身数据（JSON-LD / API 的 starHandle，可能不在内嵌表里），
// 只做格式校验（禁路径符号即可防注入）
function validSlug(slug, set) {
  const s = String(slug || "").toLowerCase();
  return set[s] ? s : null;
}
const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/;
function validHandle(slug) {
  const s = String(slug || "").toLowerCase();
  return SLUG_RE.test(s) ? s : null;
}

function parseOwnedLink(raw) {
  if (raw == null) return null;
  const s = String(raw);
  if (!s.startsWith(LINK_PREFIX)) return null; // 拒绝裸 id / 外站 URL / 其他模块前缀
  const uuid = s.slice(LINK_PREFIX.length);
  return UUID_RE.test(uuid) ? uuid : null;
}

async function fetchHtml(url, options) {
  const res = await Widget.http.get(url, Object.assign({ headers: { "User-Agent": UA } }, options || {}));
  if (!res || typeof res.data !== "string" || !res.data) {
    throw new Error("空响应: " + url);
  }
  return res.data;
}

// 解析 SSR 列表卡片：各页面（分类/标签/演员/搜索/首页）卡片结构略有差异，
// 统一按 a[href*="/watch/"] 提取 uuid / 标题 / 缩略图 / 时长
function cleanTitle(t) {
  return String(t || "")
    .replace(/^Thumbnail for\s+/i, "")
    .replace(/\s+thumbnail$/i, "")
    .replace(/\s*\(\d{1,2}:\d{2}\)\s*$/, "")
    .trim();
}

function parseCards(html, excludeUuid) {
  const $ = Widget.html.load(html);
  const seen = {};
  const cards = [];
  $("a[href*='/watch/']").each(function () {
    const el = $(this);
    const href = el.attr("href") || "";
    const m = href.match(/\/watch\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})\//);
    if (!m) return;
    const uuid = m[1];
    if (seen[uuid]) return;
    seen[uuid] = true;
    if (excludeUuid && uuid === excludeUuid) return;

    let title = "";
    const img = el.find("img").first();
    if (img && img.length) {
      title = cleanTitle(img.attr("alt"));
    }
    if (!title) title = cleanTitle(el.attr("aria-label"));
    if (!title) title = cleanTitle(el.text());
    if (!title) return;

    const thumb = (img && img.attr("src")) || (img && img.attr("data-src")) || "";
    let durationText = "";
    el.find("span").each(function () {
      if (durationText) return;
      const t = $(this).text().trim();
      if (/^(\d{1,2}:)?\d{1,2}:\d{2}$/.test(t)) durationText = t;
    });
    cards.push({ uuid: uuid, title: title, thumb: thumb, durationText: durationText });
  });
  return cards;
}

function toVideoItem(card) {
  const item = {
    id: card.uuid,
    type: "url",
    title: card.title,
    posterPath: card.thumb, // 竖图位（缩略图为竖版）
    coverUrl: card.thumb, // 通用兜底
    link: LINK_PREFIX + card.uuid,
  };
  if (card.durationText) item.durationText = card.durationText;
  return item;
}

// PT1M26S → "1:26"
function isoDurationToText(iso) {
  const m = String(iso || "").match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!m) return "";
  const h = Number(m[1] || 0);
  const min = Number(m[2] || 0);
  const s = Number(m[3] || 0);
  const pad = (n) => String(n).padStart(2, "0");
  return h > 0 ? h + ":" + pad(min) + ":" + pad(s) : min + ":" + pad(s);
}

// 从 watch 页提取 JSON-LD VideoObject
function extractVideoObject(html) {
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    try {
      const obj = JSON.parse(m[1]);
      if (obj && obj["@type"] === "VideoObject") return obj;
      if (obj && obj["@graph"]) {
        const hit = obj["@graph"].find((g) => g["@type"] === "VideoObject");
        if (hit) return hit;
      }
    } catch (e) {
      // 单个 JSON-LD 解析失败不影响其他
    }
  }
  return null;
}

function listingUrl(kind, slug, page) {
  const base = SITE + "/en/" + kind + "/" + slug + "/";
  return page > 1 ? base + "page/" + page + "/" : base;
}

// ---------- 全站归档 / 搜索 JSON API ----------
// 站点搜索页与归档的 SSR 均不可翻页（?page 参数无效），实际翻页走 XHR 接口
// /api/search/videos/?q=<kw>&offset=<n>（每页 24 条；空 q 即全站 1.2 万条归档）

const ARCHIVE_PAGE_SIZE = 24;

async function fetchJson(url) {
  const res = await Widget.http.get(url, { headers: { "User-Agent": UA } });
  const body = res && res.data;
  const json = typeof body === "string" ? JSON.parse(body) : body; // http 层可能已自动 parse
  if (!json || !json.success || !Array.isArray(json.data)) throw new Error("API 响应异常: " + url);
  return json;
}

function secondsToText(s) {
  s = Number(s) || 0;
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.round(s % 60);
  const pad = (n) => String(n).padStart(2, "0");
  return h > 0 ? h + ":" + pad(m) + ":" + pad(sec) : m + ":" + pad(sec);
}

function apiVideoToItem(v) {
  const item = {
    id: v.id,
    type: "url",
    title: v.title || "",
    posterPath: v.thumbnailUrl || "",
    coverUrl: v.thumbnailUrl || "",
    link: LINK_PREFIX + v.id,
  };
  if (v.duration) item.durationText = secondsToText(v.duration);
  if (v.description) item.description = v.description;
  const created = String(v.createdAt || "").slice(0, 10);
  if (created) item.releaseDate = created;
  if (v.starName && v.starHandle) {
    item.peoples = [{ id: String(v.starHandle), title: String(v.starName) }];
  }
  return item;
}

async function fetchArchive(keyword, page) {
  const offset = (page - 1) * ARCHIVE_PAGE_SIZE;
  const json = await fetchJson(
    SITE + "/api/search/videos/?q=" + encodeURIComponent(keyword || "") + "&offset=" + offset
  );
  const items = json.data.map(apiVideoToItem);
  if (!items.length) throw new Error("API 无结果" + (keyword ? ": " + keyword : ""));
  return items;
}

// ---------- 处理函数 ----------

async function loadList(params) {
  try {
    params = params || {};
    const page = Math.max(1, Number(params.page || 1));

    // 详情页点分类 / 演员时，App 会带 genreId / peopleId 重开本模块；
    // 这类值来自站点自身数据，只做格式校验；enum 参数来自内嵌表，严格校验
    let kind = params.kind || "all";
    let slug = null;
    let fromDetail = false;
    if (params.peopleId != null && String(params.peopleId) !== "") {
      kind = "star";
      slug = String(params.peopleId);
      fromDetail = true;
    } else if (params.genreId != null && String(params.genreId) !== "") {
      kind = "category";
      slug = String(params.genreId);
      fromDetail = true;
    }

    if (kind === "all") {
      // 全站归档：走搜索 API（空关键词），SSR 页面无法翻页
      return fetchArchive("", page);
    }

    let url;
    if (kind === "category") {
      slug = fromDetail ? validHandle(slug) : validSlug(slug || params.category || CATEGORIES[0].slug, CATEGORY_SLUGS);
      if (!slug) throw new Error("未知分类: " + (params.category || params.genreId));
      url = listingUrl("categories", slug, page);
    } else if (kind === "tag") {
      slug = validSlug(slug || params.tag || TAGS[0].slug, TAG_SLUGS);
      if (!slug) throw new Error("未知标签: " + params.tag);
      url = listingUrl("tags", slug, page);
    } else if (kind === "star") {
      slug = fromDetail ? validHandle(slug) : validSlug(slug || params.star || STARS[0].slug, STAR_SLUGS);
      if (!slug) throw new Error("未知演员: " + (params.star || params.peopleId));
      url = listingUrl("star", slug, page);
    } else {
      throw new Error("未知 kind: " + kind);
    }

    const html = await fetchHtml(url);
    const cards = parseCards(html);
    if (!cards.length) throw new Error("列表解析为空: " + url);
    return cards.map(toVideoItem);
  } catch (error) {
    console.error("[nextporn] loadList 失败:", error.message || error);
    throw error;
  }
}

async function searchVideos(params) {
  try {
    params = params || {};
    const kw = String(params.keyword || "").trim();
    const page = Math.max(1, Number(params.page || 1));
    // 空关键词即全站归档；有关键词走 /api/search/videos/（offset 翻页）
    return await fetchArchive(kw, page);
  } catch (error) {
    console.error("[nextporn] searchVideos 失败:", error.message || error);
    throw error;
  }
}

async function loadDetail(link) {
  // loadDetail 接收 link 字符串（不是 params 对象）；未知/非本站 link 返回 null，不发请求
  const uuid = parseOwnedLink(link);
  if (!uuid) return null;
  try {
    const html = await fetchHtml(SITE + "/en/watch/" + uuid + "/");
    const ld = extractVideoObject(html);
    if (!ld) throw new Error("详情 JSON-LD 缺失");

    const item = {
      id: link,
      type: "url",
      title: ld.name || "",
      description: ld.description || "",
      link: link,
      posterPath: ld.thumbnailUrl || "",
      coverUrl: ld.thumbnailUrl || "",
      videoUrl: ld.contentUrl || "",
    };
    const durationText = isoDurationToText(ld.duration);
    if (durationText) item.durationText = durationText;
    const uploadDate = String(ld.uploadDate || "").slice(0, 10);
    if (uploadDate) item.releaseDate = uploadDate;
    if (ld.thumbnailUrl) item.backdropPaths = [ld.thumbnailUrl];

    // genre 为分类 slug 数组（均为站点已知分类，可点开跳回分类列表）
    const genres = Array.isArray(ld.genre) ? ld.genre : ld.genre ? [ld.genre] : [];
    if (genres.length) {
      item.genreItems = genres.map((g) => ({ id: String(g), title: String(g) }));
      item.genreTitle = genres.map((g) => String(g)).join(", ");
    }

    // 创作者（AI 演员）
    if (ld.creator && ld.creator.name) {
      const cm = String(ld.creator.url || "").match(/\/star\/([a-z0-9-]+)\/?$/);
      const people = { id: cm ? cm[1] : String(ld.creator.name), title: String(ld.creator.name) };
      item.peoples = [people];
    }

    // 相关推荐（SSR 卡片，排除自身）
    const related = parseCards(html, uuid).slice(0, 12).map(toVideoItem);
    if (related.length) item.relatedItems = related;

    return item;
  } catch (error) {
    console.error("[nextporn] loadDetail 失败:", error.message || error);
    return null;
  }
}

// 播放资源：本站专用解析。只接受 npw: 前缀链接；其他模块上下文一律返回 [] 且不发起请求
async function loadResource(params) {
  try {
    params = params || {};
    // 明确取值优先级：link > id
    const raw = params.link != null ? params.link : params.id;
    const uuid = parseOwnedLink(raw);
    if (!uuid) return [];

    const html = await fetchHtml(SITE + "/en/watch/" + uuid + "/");
    // 页面内嵌 JSON（JSON-LD 与 RSC flight）里同时含 mp4 与 hls：
    // 兼容 \" 转义与普通引号两种形态
    const mp4 =
      (html.match(/mp4Url\\?":\\?"(https:[^"\\]+?\.mp4)/) || html.match(/contentUrl\\?":\\?"(https:[^"\\]+?\.mp4)/) || [])[1];
    const hls = (html.match(/hls_manifest_key\\?":\\?"(https:[^"\\]+?\.m3u8)/) || [])[1];
    if (!mp4 && !hls) throw new Error("未找到播放地址");

    const lines = [];
    if (hls) {
      lines.push({
        name: "HLS 自适应",
        description: "m3u8 · 自适应清晰度",
        url: hls,
        headers: { "User-Agent": UA },
      });
    }
    if (mp4) {
      lines.push({
        name: "MP4 720p",
        description: "mp4 · 720p",
        url: mp4,
        headers: { "User-Agent": UA },
      });
    }
    return lines;
  } catch (error) {
    console.error("[nextporn] loadResource 失败:", error.message || error);
    return [];
  }
}

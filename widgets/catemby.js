/**
 * Catemby Legacy ForwardWidget
 * 数据源：JavDB API + catemby 站点播放解析
 */

const SITE_BASE = "https://catembylegacy.fastcdn.dpdns.org";
const API_BASE = "https://jdforrepam.com/api";
const JD_SIG_SALT = "lpw6vgqzsp";
const JD_SIG_KEY =
  "71cf27bb3c0bcdf207b64abecddc970098c7421ee7203b9cdae54478478a199e7d5a6e1a57691123c1a931c057842fb73ba3b3c83bcd69c17ccf174081e3d8aa";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const LINK_PREFIX = "catemby:";
const CATEGORY_ID_TITLE_SEP = "~";
const CATEMBY_CDN_BASE = "https://tp.spfcas.com/rhe951l4q";

const MOVIE_TYPE_CODE = { censored: "0", uncensored: "1", western: "2", fc2: "3", all: "0" };
const MOVIE_TYPE_ENUM = [
  { title: "全部", value: "all" },
  { title: "有码", value: "censored" },
  { title: "无码", value: "uncensored" },
  { title: "欧美", value: "western" },
  { title: "FC2", value: "fc2" },
];
const CATEGORY_KIND_CODE = { actors: "a", makers: "m", series: "s", tags: "t", directors: "d", codes: "c" };
const LIST_FILTER_CODE = { all: "", playable: "p", magnet: "m", subtitle: "c" };
const SORT_API_MAP = {
  published: { sort_by: "release", order_by: "desc" },
  score: { sort_by: "score", order_by: "desc" },
  fav: { sort_by: "fav", order_by: "desc" },
};
const SEARCH_SORT_MAP = {
  published: "release",
  score: "score",
  fav: "fav",
};

// 演员/片商/标签：由站点 API 拉取后静态写入（标签 value 为 ID，2026-07-14）
const CATEMBY_ACTOR_OPTIONS = [
  { title: "酒井爱美", value: "R2Vg" },
  { title: "风间由美", value: "82m3" },
  { title: "滨田绘梨", value: "BKMM" },
  { title: "森野雫", value: "46BR" },
  { title: "滨崎真绪", value: "6v9D" },
  { title: "高木早希", value: "WE4e" },
  { title: "蕾", value: "M6mA" },
  { title: "翔田千里", value: "REr7" },
  { title: "福山凉子", value: "Ak6e" },
  { title: "安达亜美", value: "B0nG" },
  { title: "小林美沙", value: "qJ96" },
  { title: "沖田梨乃", value: "A0Qy" },
  { title: "北条麻妃", value: "9D1q" },
  { title: "小早川玲子", value: "z964" },
  { title: "平岡步", value: "RXbR" },
  { title: "蒼井丽奈", value: "K5EM" },
  { title: "名取千春", value: "NRp3" },
  { title: "池田亜香里", value: "YJeb" },
  { title: "朱音", value: "awzn" },
  { title: "松本一香", value: "AOqm" },
  { title: "水野朝美", value: "35re" },
  { title: "弥生美月", value: "Jekq" },
  { title: "高桥未来", value: "7WNR" },
  { title: "矢田结衣", value: "qA0N" },
  { title: "相澤真琴", value: "BkVd" },
  { title: "牧田希美", value: "MW44" },
  { title: "池田美和子", value: "5R56" },
  { title: "大谷真那", value: "bAAa" },
  { title: "吉澤明步", value: "0yVv" },
  { title: "黒木菜穂", value: "RYXD" },
  { title: "山内爱", value: "zAmz" },
  { title: "金子美纱", value: "WZGR" },
  { title: "堀口奈津美", value: "6x57" },
  { title: "保坂芽衣", value: "9wE" },
  { title: "下原舞", value: "2D6w" },
  { title: "吉田優", value: "79BR" },
  { title: "阿部乃美久", value: "Qkdq" },
  { title: "爱川恭子", value: "Y3MD" },
  { title: "友田真希", value: "Ab9n" },
  { title: "管野静香", value: "V9yX" },
  { title: "JULIA", value: "1KBW" },
  { title: "仁科璃々", value: "gyRE" },
  { title: "紺野光", value: "3J59" },
  { title: "持田由衣", value: "k794" },
  { title: "深田结梨", value: "pV3E" },
  { title: "戸田沙希", value: "J6Rx" },
  { title: "大泽佑香", value: "rD3r" },
  { title: "澤口美帆", value: "05OX" },
  { title: "黒岩蘭子", value: "g4by" },
  { title: "南優里", value: "vNKW" },
  { title: "早坂夏海", value: "G9P5" },
  { title: "成瀬心美", value: "J62d" },
  { title: "桥本枫", value: "ZOM6" },
  { title: "片瀬真由", value: "vdaY" },
  { title: "春菜华", value: "0J0q" },
  { title: "森戸梨沙", value: "X5AJ" },
  { title: "推川悠里", value: "ZqB6" },
  { title: "塚田诗织", value: "pN8k" },
  { title: "美咲佳奈", value: "8Nqa" },
  { title: "秋川美羽", value: "NOQr" },
  { title: "市井沙织", value: "96AR" },
  { title: "板野美惠", value: "dENv" },
  { title: "滨崎里緒", value: "X7O1" },
  { title: "加藤桃香", value: "e4ar" },
  { title: "本城由梨", value: "E4bx" },
  { title: "三井里美", value: "OMAz" },
  { title: "吉永由梨", value: "0Bw3" },
  { title: "南梨央奈", value: "QvZ4" },
  { title: "饭沼未来", value: "GWkD" },
  { title: "羽村绘里菜", value: "GMN7" },
  { title: "东条夏", value: "A6zy" },
  { title: "藤木真央", value: "Nmbw" },
  { title: "小泉亜美", value: "O1bD" },
  { title: "迹美珠裏", value: "3Jdb" },
  { title: "中村遥香", value: "WAPK" },
  { title: "北川瞳", value: "AMP" },
  { title: "藤田纪美子", value: "ynWg" },
  { title: "速水桃", value: "OgK" },
  { title: "市川悠子", value: "yzZW" },
  { title: "玉城莉空", value: "1ywZ" },
  { title: "麻美由真", value: "ex3z" },
  { title: "安部未华子", value: "RA0m" },
  { title: "北野香奈枝", value: "8w3x" },
  { title: "加瀬纪子", value: "gDAy" },
  { title: "深田詠美", value: "pRMq" },
  { title: "卯月亜矢", value: "NxGN" },
  { title: "水菜丽", value: "de9B" },
  { title: "なつめ爱梨", value: "JOr3" },
  { title: "両津勘吉", value: "PO5v" },
  { title: "酒井日奈子", value: "MxZP" },
  { title: "宮野杏奈", value: "eKgR" },
  { title: "渋谷果步", value: "R1GK" },
  { title: "牧瀬绘美", value: "g40m" },
  { title: "川奈美铃", value: "J4mB" },
  { title: "桜井惠麻", value: "9N9V" },
  { title: "神波多一花", value: "N74b" },
  { title: "磯山香帆", value: "pk1m" },
  { title: "蒼井遥", value: "6Pra" },
  { title: "晴翔华", value: "9ZAR" },
  { title: "边见麻衣", value: "ZdX7" },
  { title: "水川润", value: "pPQq" },
  { title: "栄川乃亜", value: "5rkM" },
  { title: "尾上若菜", value: "WyDQ" },
  { title: "初音实", value: "QWB8" },
  { title: "白石未央", value: "20PP" },
  { title: "香澄果穗", value: "MqQQ" },
  { title: "神谷千春", value: "ZzNm" },
  { title: "泉莉音", value: "KBZm" },
  { title: "佐々波綾", value: "M15A" },
  { title: "浅田真美", value: "a52W" },
  { title: "浅野奈都纪", value: "NO1N" },
  { title: "松川早苗", value: "bAra" },
  { title: "西野蘭", value: "MEYQ" },
  { title: "宮内香", value: "E2x2" },
  { title: "星川凛々花", value: "de29" },
  { title: "村上里沙", value: "0dMk" },
  { title: "东云秋菜", value: "Xzr5" },
  { title: "優月真里奈", value: "Zyyq" },
  { title: "松元菜奈实", value: "YZyp" },
  { title: "来生凉子", value: "eWG1" },
  { title: "山内美纱", value: "gPQQ" },
  { title: "川崎真緒", value: "AERm" },
  { title: "小西まりえ", value: "5Dn9" },
  { title: "星野明", value: "xvJO" },
  { title: "小野寺舞", value: "deAQ" },
  { title: "本田莉子", value: "WKMq" },
  { title: "ちなみん", value: "3mWD" },
  { title: "円城ひとみ", value: "1xQd" },
  { title: "瑞树果步", value: "8PrK" },
  { title: "妃月るい", value: "MbzQ" },
  { title: "北野未来", value: "eE3x" },
  { title: "山下優衣", value: "y060" },
  { title: "蘭々", value: "y3ma" },
  { title: "吉川爱美", value: "5Xx6" },
  { title: "中野由佳", value: "KJXv" },
  { title: "高杉麻里", value: "vOMb" },
  { title: "齐藤みゆ", value: "peAb" },
  { title: "白咲碧", value: "V1Gn" },
  { title: "片桐真里", value: "1ERn" },
  { title: "西野翔", value: "gB4E" },
  { title: "黒木佳蓮", value: "ewAz" },
  { title: "凉川絢香", value: "mmyZ" },
  { title: "湊莉久", value: "QnE8" },
  { title: "山村佳代子", value: "zM6E" },
  { title: "武藤彩香", value: "yAW" },
  { title: "枡田阳子", value: "XqGM" },
  { title: "高桥由香利", value: "yzda" },
  { title: "长谷川瑞穂", value: "g7WA" },
  { title: "花田舞子", value: "Oq2y" },
  { title: "有坂深雪", value: "kJYJ" },
  { title: "美咲结衣", value: "3nq3" },
  { title: "冴岛唯", value: "8VdK" },
  { title: "马場嗣美", value: "Akb0" },
  { title: "柚木蒂娜", value: "33nb" },
  { title: "木村つな", value: "rmQJ" },
  { title: "竹内美羽", value: "ZY7V" },
  { title: "川上奈奈美", value: "pPBw" },
  { title: "相澤ゆりな", value: "m94d" },
  { title: "桜木優希音", value: "J9O8" },
  { title: "小泉彩", value: "dxqQ" },
  { title: "星百合香", value: "n4d6" },
  { title: "希崎洁西卡", value: "dxne" },
  { title: "藤浦惠", value: "BWy1" },
  { title: "天海翼", value: "N4YG" },
  { title: "小林文乃", value: "YnO8" },
  { title: "希志爱野", value: "bAGB" },
  { title: "江上しほ", value: "5rPM" },
  { title: "新井惠美", value: "6D9Q" },
  { title: "玲丸", value: "JZB3" },
  { title: "神谷充希", value: "V933" },
  { title: "三浦惠理子", value: "pkOm" },
  { title: "上原花恋", value: "9Qx8" },
  { title: "槙嶋優", value: "zMyQ" },
  { title: "松山真琴", value: "exkz" },
  { title: "葵司", value: "A5yq" },
  { title: "西条琉璃", value: "gDWg" },
  { title: "柏木胡桃", value: "Bxw4" },
  { title: "希岛爱裏", value: "wK0z" },
  { title: "柴崎香织", value: "MwzA" },
  { title: "佐藤爱理", value: "6PyK" },
  { title: "春咲和津实", value: "bXyA" },
  { title: "七咲枫花", value: "dg1a" },
  { title: "一条绮美香", value: "VgzW" },
  { title: "中泽蘭", value: "94m6" },
  { title: "爱须心亜", value: "Jd4z" },
  { title: "坂野惠理", value: "a8Vg" },
  { title: "蒼井空", value: "8ORE" },
  { title: "有泽实纱", value: "xkMg" },
  { title: "井上綾子", value: "kPEN" },
  { title: "凉海みさ", value: "AyRe" },
  { title: "竹内梨惠", value: "kyWY" },
  { title: "小岛南", value: "A2Q0" },
  { title: "赤松空", value: "1q3n" },
  { title: "奥田咲", value: "wVVz" },
  { title: "蘆名尤莉婭", value: "4vyE" },
  { title: "林美纪", value: "N2ex" },
  { title: "河东实里", value: "zkJ7" },
  { title: "朝倉纱那", value: "NOMr" },
  { title: "若月まりあ", value: "zVJb" },
  { title: "百合果", value: "7x1" },
  { title: "田中瞳", value: "1yW9" },
  { title: "有本纱世", value: "8yx" },
  { title: "神坂ひなの", value: "04qk" },
  { title: "明日花绮罗", value: "wm9B" },
  { title: "山内美嘉", value: "VZG" },
  { title: "山本结衣", value: "JqQ8" },
  { title: "安野由美", value: "N4A3" },
  { title: "宮村音奈", value: "exMr" },
  { title: "梦乃爱华", value: "AbBK" },
  { title: "あやね遥菜", value: "xR2Q" },
  { title: "阿部栞菜", value: "AMgm" },
  { title: "长谷川千夏", value: "5rr9" },
  { title: "白井環", value: "kAzm" },
  { title: "千乃杏美", value: "kq86" },
  { title: "伊藤舞雪", value: "YgJx" },
  { title: "小嶋亜美", value: "kGQP" },
  { title: "天野美優", value: "RZBg" },
  { title: "佐藤綾子", value: "8GYx" },
  { title: "谷原希美", value: "GJvg" },
  { title: "水原さな", value: "76bb" },
  { title: "中江朝子", value: "vDN9" },
  { title: "河合美久", value: "8Nra" },
  { title: "持田葵", value: "Xa1G" },
  { title: "东美奈", value: "MqmJ" },
  { title: "三杉奈穂", value: "ymrd" },
  { title: "爱田美月", value: "GOX2" },
  { title: "千叶蓝", value: "06nE" },
  { title: "君色华奈", value: "3nkN" },
  { title: "明裏紬", value: "M4Q7" },
  { title: "沖田杏梨", value: "pDeZ" },
  { title: "冬月枫", value: "Arq0" },
  { title: "伊东真緒", value: "vRpp" },
  { title: "叶山麻理", value: "78EM" },
  { title: "铃村爱裏", value: "nRKm" },
  { title: "神咲诗织", value: "vynb" },
  { title: "野村美咲", value: "ppB" },
  { title: "桐嶋莉乃", value: "ne2M" },
  { title: "天使萌", value: "5Oyz" },
  { title: "宮澤亜里沙", value: "B4br" },
  { title: "岩谷志季", value: "RJM8" },
  { title: "泉玲香", value: "K617" },
  { title: "多田泉", value: "DNb3" },
  { title: "秋山祥子", value: "eVGM" },
  { title: "鬼头桃菜", value: "Av2e" },
  { title: "夕美紫苑", value: "wBND" },
  { title: "桜木凛", value: "D042" },
  { title: "小谷みのり", value: "2K6W" },
  { title: "内村りな", value: "YzVp" },
  { title: "高野春香", value: "p7Nw" },
  { title: "皆瀬杏树", value: "nVBM" },
  { title: "青井いちご", value: "QY44" },
  { title: "吉永塔子", value: "ZpqJ" },
  { title: "花塚栄子", value: "4dvR" },
  { title: "櫻空桃", value: "bvWB" },
  { title: "旭川莉奈", value: "Nqag" },
  { title: "松下玲央", value: "w49n" },
  { title: "松嶋真麻", value: "0dKX" },
  { title: "爱田由", value: "kDOz" },
  { title: "柚希翼", value: "qOA9" },
  { title: "山岸逢花", value: "8BDW" },
  { title: "吉永あかね", value: "kYde" },
  { title: "初川南", value: "E6MM" },
  { title: "白木優子", value: "OEdK" },
  { title: "一花琴音", value: "Q0YG" },
  { title: "伊藤綾", value: "aPGg" },
  { title: "白石茉莉奈", value: "0YZq" },
  { title: "秋山京子", value: "9dQE" },
  { title: "希美まゆ", value: "P9mN" },
  { title: "三国舞", value: "7bnR" },
  { title: "冴岛かおり", value: "Kpab" },
  { title: "菅野松雪", value: "rngN" },
  { title: "尾崎彩香", value: "Nq7B" },
  { title: "小西雪乃", value: "eOAp" },
  { title: "纱倉真菜", value: "J9dd" },
  { title: "佐倉宁宁", value: "pR49" },
  { title: "七澤美亚", value: "NPD3" },
  { title: "桐岛美奈子", value: "ZXB6" },
  { title: "武田风花", value: "QB6K" },
  { title: "西宮梦", value: "7BX1" },
  { title: "西田翔子", value: "b97d" },
  { title: "铃木小春", value: "b7A0" },
  { title: "松桥三叶", value: "6x39" },
  { title: "星野娜美", value: "1B29" },
  { title: "平井優", value: "YZm6" },
  { title: "园田真理爱", value: "nWJ9" },
  { title: "篠崎みお", value: "eVZx" },
  { title: "坂道美琉", value: "vd5z" },
  { title: "上村丽美", value: "zKJQ" },
  { title: "武藤由来", value: "JP4B" },
  { title: "ひなた澪", value: "ARDP" },
  { title: "綾波優子", value: "69zn" },
  { title: "彩美旬果", value: "5Dya" },
  { title: "青山华", value: "RZPR" },
  { title: "中村知惠", value: "GwQJ" },
  { title: "白川柚子", value: "0NWk" },
  { title: "架乃由罗", value: "p50Z" },
  { title: "堀川麻衣", value: "gDRQ" },
  { title: "飞鸟铃", value: "Rp08" },
  { title: "三好凪", value: "w53z" },
  { title: "小西悠", value: "pY3Z" },
  { title: "丸山れおな", value: "0pE3" },
  { title: "鹰宮ゆい", value: "reRN" },
  { title: "宇都宫紫苑", value: "DXE5" },
  { title: "宮脇南美", value: "RXpD" },
  { title: "西永嶺花", value: "p7nE" },
  { title: "土屋あさみ", value: "AbzK" },
  { title: "水卜櫻", value: "0edE" },
  { title: "中井加奈", value: "pNyZ" },
  { title: "水户香奈", value: "Rk9R" },
  { title: "枫花恋", value: "kzx6" },
  { title: "相澤南", value: "RAnD" },
  { title: "河北彩花", value: "EvkJ" },
  { title: "东凛", value: "y8Mv" },
  { title: "麻生希", value: "dx6M" },
  { title: "爱瀬美希", value: "n4PV" },
  { title: "桐谷茉莉", value: "0RVv" },
  { title: "酒井景子", value: "bx2E" },
  { title: "瞳リョウ", value: "pkvk" },
  { title: "河合明日菜", value: "69A0" },
  { title: "纱倉絆", value: "pRDB" },
  { title: "宮瀬リコ", value: "ZX6P" },
  { title: "吉高宁宁", value: "rPrR" },
  { title: "葵", value: "0x0v" },
  { title: "柊纱栄子", value: "y3pg" },
  { title: "神坂朋子", value: "0317" },
  { title: "倉木澪", value: "Z0Q7" },
  { title: "桜咲姫莉", value: "7dyB" },
  { title: "山下美织", value: "9qZ6" },
  { title: "石原莉奈", value: "Oqd0" },
  { title: "大岛優香", value: "ZdQv" },
  { title: "水无瀬優夏", value: "2VpB" },
  { title: "前田可奈子", value: "R6nn" },
  { title: "本庄優花", value: "pknw" },
  { title: "丘咲エミリ", value: "NgYx" },
  { title: "柚木美香", value: "Z5BA" },
  { title: "小倉由菜", value: "EnXJ" },
  { title: "雛菊つばさ", value: "YE1d" },
  { title: "傻梦", value: "KxPb" },
  { title: "本庄铃", value: "BzpA" },
  { title: "櫻萌子", value: "Vk3W" },
  { title: "苑田あゆり", value: "40RE" },
  { title: "三浦步美", value: "19yv" },
  { title: "月野ゆりあ", value: "WQ28" },
  { title: "蓝芽水月", value: "ZWy7" },
  { title: "今井真由美", value: "RPN8" },
  { title: "铃原爱蜜莉", value: "98Yp" },
  { title: "春日乃々香", value: "GOb" },
  { title: "户田真琴", value: "36Qa" },
  { title: "唯川千寻", value: "9kJV" },
  { title: "真白ここ", value: "y7gr" },
  { title: "早乙女ゆい", value: "7P3P" },
  { title: "前田梨花", value: "mOWd" },
  { title: "瀨名光莉", value: "2a7m" },
  { title: "大岛美緒", value: "wkXb" },
  { title: "桥本丽香", value: "YOMK" },
  { title: "羽田璃子", value: "E6Yd" },
  { title: "前园惠那", value: "z407" },
  { title: "白峰美羽", value: "W1wee" },
  { title: "高桥圣子", value: "x4MV" },
  { title: "唯井真寻", value: "nAnV" },
  { title: "巨乳丸杏", value: "W1xR" },
  { title: "泉ののか", value: "OqkK" },
  { title: "松本铃香", value: "Ewa2" },
  { title: "岡田萌", value: "KK8Q" },
  { title: "牧村彩香", value: "Qka8" },
  { title: "有希", value: "zKk4" },
  { title: "园田美櫻", value: "QE4G" },
  { title: "NAOMI", value: "X4me" },
  { title: "佐伯薫", value: "gKGy" },
  { title: "松下纱栄子", value: "6qA7" },
  { title: "香西咲", value: "JMZ2" },
  { title: "森苺莉", value: "Agw" },
  { title: "朱里舞", value: "YnK" },
  { title: "三田百合子", value: "44Z6" },
  { title: "岬奈奈美", value: "QNen" },
  { title: "河原優子", value: "qDOx" },
  { title: "あまね弥生", value: "O4Gz" },
  { title: "市来美保", value: "5mw8" },
  { title: "たかせ由奈", value: "54p7" },
  { title: "心花ゆら", value: "kaRJ" },
  { title: "宮下华奈", value: "xv1V" },
  { title: "彩乃奈奈", value: "aDJO" },
  { title: "原千岁", value: "RYN8" },
  { title: "上山奈々", value: "bRe6" },
  { title: "叶山夏菜", value: "BzP4" },
  { title: "立花瑠莉", value: "2wQW" },
  { title: "市桥惠理奈", value: "0wpk" },
  { title: "市川雅美", value: "7a4P" },
  { title: "爱海一夏", value: "NeOr" },
  { title: "菅野纱世", value: "9wKX" },
  { title: "有枝萌夏", value: "QYJn" },
  { title: "长谷川るい", value: "GW77" },
  { title: "緒川りお", value: "V7eD" },
  { title: "小野寺梨纱", value: "N2D4" },
  { title: "久保今日子", value: "ddWa" },
  { title: "爱音麻里亚", value: "Ng03" },
  { title: "星咲セイラ", value: "J2mz" },
  { title: "松嶋葵", value: "J6az" },
  { title: "美咲みなみ", value: "YnGz" },
  { title: "坂井亜美", value: "PJV2" },
  { title: "仲村奈緒", value: "M4G1" },
  { title: "美雪艾莉丝", value: "9Dw6" },
  { title: "林由奈", value: "qPer" },
  { title: "长友麻里奈", value: "qbDr" },
  { title: "雾岛里緒菜", value: "1z5J" },
  { title: "日向真凜", value: "4rw3" },
  { title: "辻本杏", value: "5J58" },
  { title: "佐々木遥", value: "y7xb" },
  { title: "竹内麻耶", value: "ymv" },
  { title: "藤咲希", value: "Y7d" },
  { title: "安位薫", value: "2amxZ" },
  { title: "古川蘭", value: "3d9" },
  { title: "小倉奈奈", value: "1xx4" },
  { title: "七海蒂娜", value: "gbbZ" },
  { title: "小泉日向", value: "bb0B" },
  { title: "櫻由罗", value: "YbZ8" },
  { title: "久慈舞子", value: "5BeM" },
  { title: "小向美奈子", value: "z9M6" },
  { title: "京花萌", value: "Qyy8" },
  { title: "柚月向日葵", value: "7BQJ" },
  { title: "遥彩音", value: "A9Gq" },
  { title: "国生麻里", value: "ZXxP" },
  { title: "榊祐奈", value: "KW5m" },
  { title: "衣吹花音", value: "MVOX" },
  { title: "眞白爱梨", value: "qn93" },
  { title: "赤城碧", value: "2GGP" },
  { title: "永瀨未萌", value: "Rr3K" },
  { title: "乾立夏", value: "g7ym" },
  { title: "上野爱佳", value: "pkK9" },
  { title: "北野望", value: "72Z" },
  { title: "河西亚美", value: "94V6" },
  { title: "輝月杏梨", value: "e8gp" },
  { title: "小田萌咲", value: "xrYn" },
  { title: "春宮凉", value: "N2Bw" },
  { title: "美月咲良", value: "2k0w" },
  { title: "八神沙织", value: "EOn4" },
  { title: "立松一乃", value: "B8Wd" },
  { title: "篠宮玲奈", value: "XO6b" },
  { title: "深田奈奈", value: "M8kX" },
  { title: "上原瑞穂", value: "m7Vn" },
  { title: "水咲卡蓮", value: "xvZ8" },
  { title: "蓳美香", value: "WPr7" },
  { title: "柳美憂", value: "N20b" },
  { title: "财前穂乃香", value: "eOBz" },
  { title: "西宮このみ", value: "ARE0" },
  { title: "祈里きすみ", value: "ZPaV" },
  { title: "乳咲杏", value: "VXrX" },
  { title: "凰香奈芽", value: "y43v" },
  { title: "榎本美咲", value: "dDy5" },
  { title: "伊东千奈美", value: "1014" },
  { title: "早川美緒", value: "kyGz" },
  { title: "穂高结花", value: "meWr" },
  { title: "逢咲ゆあ", value: "8GRx" },
  { title: "谷田部和沙", value: "my6r" },
  { title: "若叶加奈", value: "VzvD" },
  { title: "雫", value: "wyZn" },
  { title: "桃谷绘裏香", value: "gwE" },
  { title: "松田美子", value: "0Jva" },
  { title: "日菜々はのん", value: "58DY" },
  { title: "琴水圣罗", value: "0mDk" },
  { title: "夏川明", value: "pxBk" },
  { title: "泷泽萝拉", value: "OpzD" },
  { title: "七瀬萌", value: "WV88" },
  { title: "有原步美", value: "bv9A" },
  { title: "藤井梨亚奈", value: "OQJk" },
  { title: "小慄萌中", value: "XVba" },
  { title: "光井ひかり", value: "EbR9" },
  { title: "音梓", value: "XxvJ" },
  { title: "沙月永远", value: "yRaZ" },
  { title: "星乃月", value: "J2Kx" },
  { title: "皆川千遥", value: "bJJg" },
  { title: "永井すみれ", value: "W4Q7" },
  { title: "结月恭子", value: "B4Ga" },
  { title: "泉水らん", value: "kPa6" },
  { title: "椿织里美", value: "VXw3" },
  { title: "きみかわ结衣", value: "ZNKA" },
  { title: "桃园みらい", value: "936" },
  { title: "响雷米", value: "mknZ" },
  { title: "饭倉優里", value: "PGqE" },
  { title: "渚光莉", value: "EPJJ" },
  { title: "九重環奈", value: "EKz4" },
  { title: "早川真白", value: "7WPP" },
  { title: "吉池美步", value: "PwOE" },
  { title: "周思雨", value: "bdpe" },
  { title: "朝阳空", value: "VnnG" },
  { title: "长谷川秋子", value: "nAXw" },
  { title: "熊倉祥子", value: "x01E" },
  { title: "南果菜", value: "Kn5v" },
  { title: "瀬野みやび", value: "anKg" },
  { title: "緒方绘玲奈", value: "R6wm" },
  { title: "竹內乃爱", value: "pqp5" },
  { title: "壇えみ", value: "XxxJ" },
  { title: "滨松爱季", value: "nDX4" },
  { title: "吳文玲", value: "2aB" },
  { title: "西尾友梨子", value: "PwyN" },
  { title: "麻见桃香", value: "kM70" },
  { title: "滨崎瑪丽亚", value: "2rAm" },
  { title: "三鹰玲奈", value: "nKGe" },
  { title: "マカナ", value: "Av8m" },
  { title: "井手口麦", value: "8wX5" },
];

const CATEMBY_MAKER_OPTIONS = [
  { title: "KM Produce", value: "8V9" },
  { title: "SOD Create", value: "q6" },
  { title: "Prestige", value: "6M" },
  { title: "MOODYZ", value: "zKW" },
  { title: "Madonna", value: "35e" },
  { title: "S1 NO.1 STYLE", value: "7R" },
  { title: "Center Village", value: "nw" },
  { title: "Crystal 映像", value: "KQ" },
  { title: "Ruby", value: "my" },
  { title: "桃太郎映像出版", value: "pk" },
  { title: "IDEA POCKET", value: "ZXX" },
  { title: "Paradise TV", value: "Yp8" },
  { title: "Glory Quest", value: "W17" },
  { title: "Alice Japan", value: "J2x" },
  { title: "Big Morkal", value: "mey" },
  { title: "Attackers", value: "Ywz" },
  { title: "タカラ映像", value: "ZNX" },
  { title: "素人TV", value: "9Mw" },
  { title: "h.m.p", value: "xZg" },
  { title: "STAR PARADISE", value: "BO" },
  { title: "WANZ FACTORY", value: "333" },
  { title: "Hunter", value: "2Vm" },
  { title: "GIGA", value: "r3k" },
  { title: "Natural High", value: "gZ" },
  { title: "DEEP'S", value: "D8" },
  { title: "VENUS", value: "OXz" },
  { title: "Nadeshiko", value: "rZ" },
  { title: "セレブの友", value: "deB" },
  { title: "I-Energy", value: "W7" },
  { title: "Warp Entertainment", value: "e1" },
  { title: "Orstac Pictures", value: "89" },
  { title: "Prestige Premium", value: "Qap" },
  { title: "Maxing", value: "eBr" },
  { title: "Max-A", value: "96p" },
  { title: "TMA", value: "7yV" },
  { title: "kawaii", value: "rmZ" },
  { title: "映天", value: "bd" },
  { title: "S级素人", value: "pN5" },
  { title: "Fitch", value: "Aby" },
  { title: "搭讪TV", value: "WqZ" },
  { title: "Dogma", value: "zkz" },
  { title: "Planet Plus", value: "JVq" },
  { title: "AVS", value: "363" },
  { title: "溜池五郎", value: "Ww7" },
  { title: "NEXT GROUP", value: "Nb" },
  { title: "Premium", value: "8Xd" },
  { title: "Global Media", value: "65M" },
  { title: "Glory Quest", value: "d49" },
  { title: "本中", value: "89V" },
  { title: "Janet", value: "Rk4" },
  { title: "Glory Quest", value: "vDb" },
  { title: "Hot Entertainment", value: "A60" },
  { title: "Das!", value: "ZyP" },
  { title: "ラハイナ东海", value: "EZd" },
  { title: "Plum", value: "Jx" },
  { title: "First Star", value: "WQB" },
  { title: "Karma", value: "zx5" },
  { title: "Dream Ticket", value: "wm" },
  { title: "E-BODY", value: "bgA" },
  { title: "アテナ映像", value: "MmX" },
  { title: "Gogos", value: "3e" },
  { title: "Hibino", value: "bK6" },
  { title: "ABC/妄想族", value: "DYK" },
  { title: "KUKI", value: "Qz9" },
  { title: "OPPAI", value: "p3k" },
  { title: "FA Pro Platinum", value: "a4q" },
  { title: "Aurora Project Annex", value: "bwA" },
  { title: "ROCKET", value: "5E8" },
  { title: "アロマ企画", value: "AqK" },
  { title: "Mercury", value: "WkQ" },
  { title: "Nagae Style", value: "R2D" },
  { title: "ADOA", value: "Xn5" },
  { title: "Digital Ark", value: "RGD" },
  { title: "Luxury TV", value: "bDB" },
  { title: "K-Tribe", value: "by6" },
  { title: "俺の素人", value: "KaO" },
  { title: "MBM", value: "PX9" },
  { title: "Red", value: "N9G" },
  { title: "DOC", value: "kge" },
  { title: "CASANOVA", value: "k3m" },
  { title: "シネマジック", value: "aO" },
  { title: "U＆K", value: "QV8" },
  { title: "レイディックス", value: "YeB" },
  { title: "アキノリ", value: "pPZ" },
  { title: "マルクス兄弟", value: "AKw" },
  { title: "无垢", value: "R68" },
  { title: "KI Planning", value: "PN" },
  { title: "メスイキ", value: "BVmr" },
  { title: "サディスティックヴィレッジ", value: "R5g" },
  { title: "kira☆kira", value: "Rkg" },
  { title: "未来 フューチャー", value: "Rd4" },
  { title: "美", value: "aeX" },
  { title: "INTEC Inc", value: "VwG" },
  { title: "ドリームステージ", value: "QNK" },
  { title: "宇宙企画", value: "76R" },
  { title: "スパイスビジュアル", value: "nb6" },
  { title: "FALENO", value: "Y46" },
  { title: "ハメドリネットワークSecondEdition", value: "ngQe" },
  { title: "Baby Entertainment", value: "0y7" },
  { title: "アヴァ", value: "M6v" },
  { title: "メディアバンク", value: "PQN" },
  { title: "ズボズバ", value: "XyVP" },
  { title: "LEO", value: "zW" },
  { title: "ハヤブサ", value: "yrA" },
  { title: "小林兴业", value: "wK2" },
  { title: "バルタン", value: "4GJ" },
  { title: "いきなりエロざんまい", value: "rO9A" },
  { title: "KMPVR-彩-", value: "wyb" },
  { title: "アウダースジャパン", value: "pkk" },
  { title: "I.B.WORKS", value: "7Kb" },
  { title: "SEX Agent", value: "1Y" },
  { title: "DANDY", value: "1EW" },
  { title: "ROOKIE", value: "JAA" },
  { title: "レアルワークス", value: "8Nd" },
  { title: "こあらVR", value: "Xp4" },
  { title: "変態紳士倶楽部", value: "ARy" },
  { title: "ブイワンVR", value: "Yme" },
  { title: "GOS", value: "eGd" },
  { title: "unfinished", value: "3az" },
  { title: "舞ワイフ", value: "RO8" },
  { title: "JET映像", value: "zbJ" },
  { title: "エムズビデオグループ", value: "dZ0" },
  { title: "JUKUJO99", value: "462Z" },
  { title: "ピーターズ", value: "7qb" },
  { title: "SWITCH", value: "K4Q" },
  { title: "カムカムぴゅっ！", value: "XExa" },
  { title: "NON", value: "2aB" },
  { title: "山と空", value: "AEO" },
  { title: "プリモ", value: "73B" },
  { title: "MAX-Aレジェンド", value: "5pp" },
  { title: "ナンパJAPAN", value: "M6A" },
  { title: "S-CUTE", value: "m5D" },
  { title: "親父の个撮", value: "5G6" },
  { title: "マザー", value: "XWJ" },
  { title: "熟女JAPAN/エマニエル", value: "82d" },
  { title: "しろうとまんまん", value: "nE6" },
  { title: "ハメドリネットワーク2nd", value: "Paa" },
  { title: "グラフィティジャパン", value: "mQn" },
  { title: "S-Cute", value: "gBA" },
  { title: "ブイアンドアールプロデュース", value: "Nwb" },
  { title: "豊彦", value: "v4z" },
  { title: "赤面女子", value: "Zaq" },
  { title: "アロマ企画", value: "ZMq" },
  { title: "BeFree", value: "bEB" },
  { title: "サディヴィレナウ！", value: "g4eA" },
  { title: "光夜蝶", value: "6xD" },
  { title: "みるきぃぷりん♪", value: "nM4" },
  { title: "メディアブランド", value: "E2M" },
  { title: "はじめ企画", value: "mOy" },
  { title: "ビデオバンク", value: "O20" },
  { title: "HyakkinTV", value: "MVJ" },
  { title: "アパッチ（デマンド）", value: "geQ" },
  { title: "SILK LABO", value: "dQ5" },
  { title: "フォーディメンション/エマニエル", value: "VG" },
  { title: "キチックス/妄想族", value: "vWz" },
  { title: "素人TV", value: "Jnxd" },
  { title: "アルファーインターナショナル", value: "D4kp" },
  { title: "新东宝映画", value: "v49G" },
  { title: "ブリット", value: "ayn" },
  { title: "隷嬢写眞馆", value: "9p" },
  { title: "Hot Entertainment", value: "wqm" },
  { title: "かぐや姫Pt/妄想族", value: "39D" },
  { title: "Fetish Box/妄想族", value: "AzK" },
  { title: "ビビアン", value: "J0R" },
  { title: "CHoBitcH", value: "2ZN" },
  { title: "オルスタックソフト", value: "EM4" },
  { title: "カマタ映像", value: "bXP" },
  { title: "ゑびすさん/妄想族", value: "GWJ" },
  { title: "MAD", value: "dR0" },
  { title: "MARRION", value: "647" },
  { title: "スパークビジョン", value: "0Mb" },
  { title: "キングダム", value: "krz" },
  { title: "エチケット", value: "2qNZ" },
  { title: "オペラ", value: "WwB" },
  { title: "ダイナマイトエンタープライズ", value: "GZb" },
  { title: "搭讪TV", value: "Ene3" },
  { title: "素人CLOVER", value: "8ZNO" },
  { title: "AQUA＜アクア＞", value: "mbOr" },
  { title: "グーニーズ", value: "qxdD" },
  { title: "ONETIME", value: "3E1e" },
  { title: "TRIPLE H", value: "MOJ" },
  { title: "シネマユニット・ガス", value: "wDD" },
  { title: "TMクリエイト", value: "VB3" },
  { title: "GIGOLO（ジゴロ）", value: "1ad" },
  { title: "黒船", value: "zEJ" },
  { title: "人妻空蝉桥", value: "OaD" },
  { title: "ネクスト", value: "6W1E" },
  { title: "Mellow Moon", value: "741" },
  { title: "エロタイム", value: "0J3" },
  { title: "虎堂", value: "z4z" },
  { title: "エマニエル", value: "KkA" },
  { title: "シロウトタッチ", value: "ydag" },
  { title: "パコパコ団とゆかいな仲间たち", value: "kQm" },
  { title: "SODクリエイト", value: "3Nkw" },
  { title: "FALENO TUBE", value: "1MKd" },
  { title: "V＆Rプランニング", value: "ybW" },
  { title: "ARA", value: "X1M" },
  { title: "KANBi", value: "pJ9" },
  { title: "フリーダム", value: "3y9" },
  { title: "KMPVR-bibi-", value: "6N9" },
  { title: "サイドビー", value: "rON" },
  { title: "CRANE", value: "myM" },
  { title: "V＆Rプロダクツ", value: "MbX" },
  { title: "えむっ娘ラボ", value: "Yez" },
  { title: "北池袋盗撮倶楽部", value: "75Z" },
  { title: "E★ナンパDX", value: "8pW" },
  { title: "CROSS", value: "bAd" },
  { title: "俺の素人-Z- SECOND IMPACT", value: "dQN9" },
  { title: "DOC", value: "AnBP" },
  { title: "スタイルアート/妄想族", value: "1BY" },
  { title: "EROTICA", value: "9pw" },
  { title: "熟女はつらいよ", value: "rnq" },
  { title: "アリーナエンターテインメント", value: "9EE" },
  { title: "HMJM", value: "vzW" },
  { title: "コンマビジョン", value: "8X3" },
  { title: "ミル", value: "4dR" },
  { title: "熟女LABO", value: "Ape" },
  { title: "ロータス", value: "2Gy" },
  { title: "ティッシュシコレール", value: "M7PP" },
  { title: "Mr.michiru", value: "Adn" },
  { title: "P-BOX VR", value: "bqba" },
  { title: "ムラっch", value: "dgvM" },
  { title: "实録出版", value: "EM" },
  { title: "乱丸", value: "mOn" },
  { title: "TEPPAN", value: "P9v" },
  { title: "スパイスビジュアル", value: "pqw" },
  { title: "俺の素人-Z-", value: "xOpO" },
  { title: "シャイ企画", value: "Y66" },
  { title: "人妻花园劇場", value: "KrO" },
  { title: "AROUND", value: "K26" },
  { title: "MEGAMI", value: "AQn" },
  { title: "LUNATICS", value: "557" },
  { title: "TRANS CLUB", value: "AV0" },
  { title: "三和出版", value: "eOer" },
  { title: "オーロラ", value: "wpz" },
  { title: "ゴールデンタイム", value: "Bb6" },
  { title: "KSB企画/エマニエル", value: "X7P" },
  { title: "DAHLIA", value: "5458" },
  { title: "笠倉出版社", value: "ZX" },
  { title: "ヴィ", value: "MYv" },
  { title: "お夜食カンパニー/妄想族", value: "5bM" },
  { title: "ハイライト", value: "vBp" },
  { title: "SEX MACHINE", value: "66K" },
  { title: "G-AREA", value: "dNM" },
  { title: "Tコンテンツ", value: "pxXb" },
  { title: "ダーティーファクトリー", value: "149" },
  { title: "シャーク", value: "wMn" },
  { title: "Yellow Moon（イエロームーン）", value: "ZOv" },
  { title: "SOSORU×GARCON", value: "y7d" },
  { title: "VIP", value: "bng" },
  { title: "ディレクターズ", value: "mQZ5" },
  { title: "Mellow Moon（メロウムーン）", value: "R7R" },
  { title: "黒船", value: "0O0" },
  { title: "チキチキバーグ/妄想族", value: "Zvq" },
  { title: "CRYSTAL VR", value: "DJJ" },
  { title: "大洋図书", value: "W3q" },
  { title: "チェリーズ", value: "72Z" },
  { title: "レズれ！", value: "0pJ" },
  { title: "东京スペシャル", value: "wxn" },
  { title: "BAZOOKA", value: "mp0r" },
  { title: "投稿マーケット素人イッてQ", value: "qV9" },
  { title: "JUMP", value: "KmA" },
  { title: "ROYAL", value: "kBvm" },
  { title: "プレミアム熟女/エマニエル", value: "Ma4" },
  { title: "思春期.com", value: "qD6" },
  { title: "アトラス21", value: "V2A" },
  { title: "メディア总贩ソレイル", value: "58" },
  { title: "GARCON", value: "Jd8" },
  { title: "コスモス映像", value: "Q7G" },
  { title: "即ヌキ", value: "e71E" },
  { title: "ATOM", value: "DOK" },
  { title: "プールクラブ・エンタテインメント", value: "5Jz" },
  { title: "ミニマム", value: "AbO" },
  { title: "キャメロンG", value: "k4Y" },
  { title: "オリンポス", value: "kDOz" },
  { title: "ピーターズMAX", value: "48J" },
  { title: "モデスト", value: "Vkn" },
  { title: "M男パラダイス", value: "Ann" },
  { title: "アルファーインターナショナル", value: "VNX" },
  { title: "オブテインフューチャー", value: "WyQ" },
  { title: "切り売りのおかず屋さん", value: "JPMz" },
  { title: "ペロネ", value: "1WZd" },
  { title: "イエロー", value: "dGg" },
  { title: "熟女画報社", value: "wG2" },
  { title: "熟女塾/エマニエル", value: "P00" },
  { title: "アップス", value: "e4N" },
  { title: "シャイ企画", value: "new" },
  { title: "INITIUM", value: "BaXG" },
  { title: "五十路ん", value: "NOB" },
  { title: "インディ", value: "9ybp" },
  { title: "美人魔女", value: "y5X" },
  { title: "Air control", value: "32D" },
  { title: "ペロンゲリオン", value: "bOwa" },
  { title: "ブロッコリー/妄想族", value: "AJ0" },
  { title: "姦乱者", value: "YEz" },
  { title: "MILK", value: "7dd" },
  { title: "妇人社/エマニエル", value: "Bzd" },
  { title: "ティーチャー/妄想族", value: "08q" },
  { title: "サルトル映像出版", value: "ZM8" },
  { title: "ゲインコーポレーション", value: "n46" },
  { title: "现映社", value: "y0wW" },
  { title: "これぞ！素人", value: "20PP" },
  { title: "KANBi", value: "ead" },
  { title: "JAMS", value: "e2M" },
  { title: "SPYEYE", value: "r6z" },
  { title: "夫人百花/エマニエル", value: "pbb" },
  { title: "穢土-EDO-", value: "NgJN" },
  { title: "ミセスの素顔/エマニエル", value: "AyM" },
  { title: "WEEKENDER", value: "RJz" },
  { title: "木曜だヨ！全員集合っ！！", value: "KvO" },
  { title: "AFRO-FILM", value: "V8Jn" },
  { title: "MOON FORCE", value: "M8K1" },
  { title: "素人ホイホイ/妄想族", value: "8bW" },
  { title: "恋爱カノジョ", value: "qx9a" },
  { title: "SODマジックミラー号", value: "qE9" },
  { title: "ハイカラ/妄想族", value: "yM0" },
  { title: "ワイルドサイド", value: "Z4m" },
  { title: "AV", value: "063" },
  { title: "HERO", value: "9dg" },
  { title: "アートビデオ", value: "ANy" },
  { title: "Orstac Pictures", value: "2B" },
  { title: "GALLOP", value: "rPN" },
  { title: "Luxury TV", value: "mbW5" },
  { title: "白完素人", value: "4Azv" },
  { title: "青空ソフト", value: "4xb" },
  { title: "スクープ", value: "46G" },
  { title: "心交社", value: "vOn" },
  { title: "キャンドゥ", value: "5Ba" },
  { title: "モブスターズ", value: "E49" },
  { title: "ZOOO", value: "8EwW" },
  { title: "ロイヤルアート", value: "MYwJ" },
  { title: "バミューダ/妄想族", value: "BJM" },
  { title: "ルーナ旬香舎", value: "prb" },
  { title: "TEPPAN VR", value: "GmD" },
  { title: "はめちゃん。", value: "vOKb" },
  { title: "ドキュメントdeハメハメ", value: "PVvN" },
  { title: "アカデミック", value: "kY" },
  { title: "人妻援护会/エマニエル", value: "8PK" },
  { title: "花と蜜", value: "ZD7" },
  { title: "キャンディ", value: "0ea" },
  { title: "ひよこ", value: "9X6" },
  { title: "ワンダフル（ONE DA FULL）", value: "M4R" },
  { title: "れいわしろうと", value: "m9dy" },
  { title: "F＆A", value: "rxr" },
  { title: "アイエナRISING", value: "M70k" },
  { title: "ま○こ銀行", value: "BbNa" },
  { title: "未満", value: "A9w" },
  { title: "Jackson", value: "dOv" },
  { title: "メディアステーション", value: "Xe1" },
  { title: "BOTAN", value: "wgDY" },
  { title: "GIRL’S CH", value: "vqp" },
  { title: "まんまんランド", value: "VPgQ" },
  { title: "素人39", value: "MneQ" },
  { title: "FunCity/妄想族", value: "MKw1" },
  { title: "グラスホッパー", value: "e6M" },
  { title: "チェリーズれぼ", value: "qMP" },
  { title: "えろだるま/エマニエル", value: "JnPx" },
  { title: "まぐろ物産", value: "JZB" },
  { title: "F-FACTORY/妄想族", value: "EpQ" },
  { title: "ラマ", value: "eON" },
  { title: "カチコチTV", value: "4G7b" },
  { title: "スコッチ", value: "xegB" },
  { title: "SHEMALE a la carte", value: "WdB" },
  { title: "肉きゅんパラダイスVR", value: "N27r" },
  { title: "KAKUJITSU", value: "Ja8" },
  { title: "デジタルバンク", value: "kOJ" },
  { title: "ドキュメンTV", value: "VaW" },
  { title: "つちのこ映像", value: "KnEv" },
  { title: "大塚フロッピー", value: "9nw" },
  { title: "ヘンリー塚本", value: "O9A" },
  { title: "大久保ヤンキース", value: "K2dM" },
  { title: "Yellow Duck", value: "epr" },
  { title: "スターゲート", value: "aBn" },
  { title: "アートモード", value: "9N5" },
  { title: "东京音光", value: "0k" },
  { title: "MARIA", value: "K67" },
  { title: "コロナ社", value: "ZqA7" },
  { title: "アイエナオナニー", value: "GPPD" },
  { title: "ミスター・インパクト", value: "g0Z" },
  { title: "ソルト・ペッパー", value: "4KR" },
  { title: "忍", value: "MYdJ" },
  { title: "ファインピクチャーズ", value: "kMV" },
  { title: "あいすまん", value: "XArM" },
  { title: "黒羊", value: "ngVm" },
  { title: "おしゃぶりクッキング", value: "3rdw" },
  { title: "WAAPサロン", value: "bO4g" },
  { title: "Mr.michiru", value: "GOb" },
  { title: "サムシング", value: "eqd" },
  { title: "オルガ", value: "RX8" },
  { title: "有閑ミセス/エマニエル", value: "pPnm" },
  { title: "HRC", value: "829" },
  { title: "信州书店", value: "pGb" },
  { title: "1113工房/妄想族", value: "A5q" },
  { title: "C-Format", value: "YwK" },
  { title: "しろうと派遣.com", value: "RKnK" },
  { title: "CORE", value: "OW8" },
  { title: "ゲッツ!!", value: "ww1" },
  { title: "人妻のツボ", value: "m4Yy" },
  { title: "イズム", value: "J4R" },
  { title: "アクアモール/HERO", value: "PJa" },
  { title: "CREAM PIE", value: "DN3" },
  { title: "胸キュン喫茶", value: "20P" },
  { title: "ボニータ/妄想族", value: "205P" },
  { title: "P-PROJECT/妄想族", value: "K37" },
  { title: "VRパラダイス", value: "X7Ab" },
  { title: "デジタルドリーム", value: "YqB" },
  { title: "Jackson", value: "GP2q" },
  { title: "熟撮/妄想族", value: "Na4" },
  { title: "グラッソ", value: "yA" },
  { title: "きゃっち", value: "kbMe" },
  { title: "グローバルメディアアネックス", value: "g2g" },
  { title: "フェチ眼", value: "MJ7" },
  { title: "ときわ映像", value: "A9rq" },
  { title: "バビロン/妄想族", value: "Qvyq" },
  { title: "全日本カメコ協同组合/妄想族", value: "VKn" },
  { title: "下半身タイガース/妄想族", value: "7BV" },
  { title: "グラマラスキャンディ", value: "Oqv" },
  { title: "セブンエイト", value: "OPk" },
  { title: "ノースキンズ/maryGOLD", value: "gQeq" },
  { title: "素人ぱいぱい", value: "mDmy" },
  { title: "ビーエムドットスリー", value: "0k7" },
  { title: "Precious Beauty", value: "m9M" },
  { title: "ピエロ", value: "Dn2" },
  { title: "コンマビジョン", value: "YP6" },
  { title: "バミューダ", value: "kBJ" },
  { title: "おペニペニワールド/妄想族", value: "vxk" },
  { title: "Materiall", value: "5mAz" },
  { title: "BAGUS", value: "0Rk" },
  { title: "サムバディ", value: "aqr" },
  { title: "イー・マーケティング", value: "5K9" },
  { title: "HALENTINO/妄想族", value: "ZpeA" },
  { title: "中目黒人妻メンズエステ", value: "V0VX" },
  { title: "犬/妄想族", value: "mw5" },
  { title: "海外専门.com", value: "7YzV" },
  { title: "志摩プランニング", value: "mQY" },
  { title: "青春舎", value: "g3E" },
  { title: "h.m.p DORAMA", value: "Yg8" },
  { title: "クィーンロード", value: "DpJ" },
  { title: "かつお物産/妄想族", value: "2kq" },
  { title: "陈飞龙", value: "Wk37" },
  { title: "きらきらワイフ", value: "Anqq" },
  { title: "MAGNOLIA", value: "EPn2" },
  { title: "神回", value: "dG5a" },
  { title: ".WorKs/FALENO TUBE", value: "Eny3" },
  { title: "4K VR", value: "B3A" },
  { title: "ミスター・インパクト", value: "2G2P" },
  { title: "アンナと花子", value: "Gnq" },
  { title: "アヴァ（映天）", value: "2qw" },
  { title: "AMATEUR BOX/妄想族", value: "56DD" },
  { title: "AVVR", value: "pDq" },
  { title: "催眠研究所別馆", value: "Pm9" },
  { title: "バズーカ（BAZOOKA）", value: "18d" },
  { title: "ハピネット・ピクチャーズ", value: "GQ" },
  { title: "イーネット・フロンティア", value: "akO" },
  { title: "ズッコン/バッコン", value: "gzQ" },
  { title: "ハラスメント", value: "ZxeP" },
  { title: "新世纪文艺社", value: "6WZ" },
  { title: "AVマーケット", value: "8EyE" },
  { title: "素人Pro", value: "gWbN" },
  { title: "エンペラー/妄想族", value: "mJY" },
  { title: "KMPVR", value: "6E29" },
  { title: "アマTV", value: "gQBg" },
  { title: "ブラボー！", value: "zV5b" },
  { title: "レジェンド・ピクチャーズ", value: "ydX" },
  { title: "ギャラリー", value: "BaaG" },
  { title: "熟の藏/エマニエル", value: "XYG" },
  { title: "综实社/妄想族", value: "mR5" },
  { title: "スティルワークス", value: "YnK" },
  { title: "ジェネオン", value: "vrn" },
  { title: "アートビデオSM/妄想族ブラックレーベル", value: "0ek" },
  { title: "トライハート", value: "89W" },
  { title: "ジェントルマン/妄想族", value: "5mM" },
  { title: "impact", value: "W7Z" },
  { title: "濡壺/妄想族", value: "MN7" },
  { title: "虎堂", value: "Ab5q" },
  { title: "嗚呼", value: "ngw4" },
  { title: "ユープランニング", value: "R6R" },
  { title: "お持ち归り/妄想族", value: "e7d" },
  { title: "ゴーゴーズブラック/妄想族", value: "kA6" },
  { title: "ブラックドッグ/妄想族", value: "37a" },
  { title: "エッジ", value: "WVq" },
  { title: "Soft on Demand", value: "9Dp" },
  { title: "メガサイクロン/妄想族", value: "b6P" },
  { title: "しのだ", value: "ZNP" },
  { title: "Primo", value: "mpY" },
  { title: "GUTS", value: "M8R" },
  { title: "SUKEKIYO", value: "pP25" },
  { title: "E★人妻DX", value: "zr7" },
  { title: "A-BOX", value: "g47N" },
  { title: "KTファクトリー", value: "kKY" },
  { title: "Shuffle", value: "NZyg" },
  { title: "素人ペイペイ", value: "X751" },
  { title: "ONE MORE", value: "peaB" },
  { title: "レイフル", value: "YZp" },
  { title: "ラッシュ（サンクチュアリ）", value: "0d7" },
  { title: "イエロー/HERO", value: "VVW" },
  { title: "无言/妄想族", value: "aBNR" },
  { title: "GENEKI", value: "aGO" },
  { title: "竹书房", value: "N2Z" },
  { title: "赤ほたるいか/妄想族ブラックレーベル", value: "aVX" },
];

const CATEMBY_TAG_MAIN_OPTIONS = [
  { title: "可播放", value: "p" },
  { title: "可下载", value: "m" },
  { title: "含字幕", value: "c" },
  { title: "单体作品", value: "s" },
  { title: "含预览图", value: "i" },
  { title: "含预览视频", value: "v" },
];

const CATEMBY_TAG_SUBJECT_OPTIONS = [
  { title: "淫亂真實", value: "23" },
  { title: "出軌", value: "51" },
  { title: "強姦", value: "52" },
  { title: "亂倫", value: "54" },
  { title: "溫泉", value: "56" },
  { title: "女同性恋", value: "64" },
  { title: "企画", value: "86" },
  { title: "恋腿癖", value: "107" },
  { title: "獵豔", value: "112" },
  { title: "偷窺", value: "145" },
  { title: "洗澡", value: "165" },
  { title: "其他恋物癖", value: "2" },
  { title: "處女", value: "7" },
  { title: "性爱", value: "13" },
  { title: "学校作品", value: "33" },
  { title: "妄想", value: "34" },
  { title: "M男", value: "63" },
  { title: "跳舞", value: "75" },
  { title: "恋物癖", value: "103" },
  { title: "恋乳癖", value: "109" },
  { title: "惡作劇", value: "111" },
  { title: "运动", value: "128" },
  { title: "倒追", value: "130" },
  { title: "女同接吻", value: "132" },
  { title: "美容院", value: "135" },
  { title: "奴隸", value: "149" },
  { title: "白天出軌", value: "157" },
  { title: "流汗", value: "160" },
  { title: "性騷擾", value: "162" },
  { title: "情侶", value: "173" },
  { title: "爛醉如泥的", value: "184" },
  { title: "魔鬼系", value: "185" },
  { title: "處男", value: "187" },
  { title: "殘忍画面", value: "196" },
  { title: "性感的", value: "200" },
  { title: "曬黑", value: "206" },
  { title: "双性人", value: "211" },
  { title: "全裸", value: "218" },
  { title: "正太控", value: "221" },
  { title: "觸手", value: "234" },
  { title: "正常", value: "243" },
  { title: "奇異的", value: "244" },
  { title: "蠻橫嬌羞", value: "249" },
  { title: "性轉換·女体化", value: "258" },
  { title: "男同性恋", value: "277" },
  { title: "韩国", value: "291" },
  { title: "偷窺", value: "293" },
  { title: "形象俱乐部", value: "300" },
  { title: "友誼", value: "305" },
  { title: "亚洲", value: "316" },
  { title: "暗黑系", value: "318" },
  { title: "天賦", value: "323" },
  { title: "被外国人幹", value: "343" },
  { title: "刺青紋身", value: "344" },
  { title: "黑白配", value: "349" },
  { title: "絕頂高潮", value: "360" },
  { title: "运动", value: "361" },
  { title: "純欲", value: "362" },
  { title: "經历告白", value: "386" },
  { title: "濕身", value: "387" },
];

const CATEMBY_TAG_ROLE_OPTIONS = [
  { title: "高中女生", value: "1" },
  { title: "美少女", value: "5" },
  { title: "已婚妇女", value: "20" },
  { title: "艺人", value: "27" },
  { title: "姐姐", value: "44" },
  { title: "各種职业", value: "47" },
  { title: "蕩妇", value: "48" },
  { title: "母親", value: "55" },
  { title: "辣妹", value: "67" },
  { title: "妓女", value: "70" },
  { title: "新娘，年輕妻子", value: "101" },
  { title: "女教师", value: "158" },
  { title: "白人", value: "6" },
  { title: "婆婆", value: "16" },
  { title: "女大学生", value: "30" },
  { title: "偶像", value: "32" },
  { title: "明星脸", value: "82" },
  { title: "大小姐", value: "105" },
  { title: "秘书", value: "108" },
  { title: "护士", value: "115" },
  { title: "角色扮演者", value: "118" },
  { title: "賽车女郎", value: "133" },
  { title: "家教", value: "136" },
  { title: "黑人演員", value: "137" },
  { title: "妹妹", value: "139" },
  { title: "寡妇", value: "140" },
  { title: "女醫生", value: "142" },
  { title: "老闆娘，女主人", value: "144" },
  { title: "女主播", value: "153" },
  { title: "其他学生", value: "163" },
  { title: "模特兒", value: "169" },
  { title: "格斗家", value: "172" },
  { title: "展場女孩", value: "188" },
  { title: "禮儀小姐", value: "190" },
  { title: "女檢察官", value: "201" },
  { title: "講师", value: "204" },
  { title: "服務生", value: "224" },
  { title: "伴侶", value: "233" },
  { title: "车掌小姐", value: "237" },
  { title: "女兒", value: "245" },
  { title: "年輕女孩", value: "246" },
  { title: "公主", value: "264" },
  { title: "童年朋友", value: "265" },
  { title: "飞特族", value: "274" },
  { title: "亚洲女演員", value: "282" },
  { title: "痴漢", value: "341" },
  { title: "御宅族", value: "363" },
  { title: "老太婆", value: "365" },
  { title: "老年男性", value: "366" },
  { title: "拉拉隊", value: "371" },
  { title: "媽媽的朋友", value: "377" },
  { title: "养女", value: "383" },
  { title: "女王", value: "384" },
];

const CATEMBY_TAG_CLOTH_OPTIONS = [
  { title: "眼鏡", value: "3" },
  { title: "角色扮演", value: "43" },
  { title: "內衣", value: "49" },
  { title: "制服", value: "58" },
  { title: "水手服", value: "78" },
  { title: "泳裝", value: "84" },
  { title: "和服，喪服", value: "95" },
  { title: "连褲襪", value: "106" },
  { title: "女傭", value: "113" },
  { title: "运动短褲", value: "127" },
  { title: "女战士", value: "151" },
  { title: "校服", value: "154" },
  { title: "制服外套", value: "4" },
  { title: "裸体圍裙", value: "89" },
  { title: "女忍者", value: "96" },
  { title: "身体意識", value: "99" },
  { title: "OL", value: "114" },
  { title: "貓耳女", value: "116" },
  { title: "短裙", value: "125" },
  { title: "学校泳裝", value: "126" },
  { title: "迷你裙", value: "129" },
  { title: "浴衣", value: "143" },
  { title: "猥褻穿著", value: "156" },
  { title: "緊身衣", value: "177" },
  { title: "娃娃", value: "181" },
  { title: "蘿莉角色扮演", value: "182" },
  { title: "女裝人妖", value: "192" },
  { title: "絲襪、过膝襪", value: "198" },
  { title: "泡泡襪", value: "199" },
  { title: "空中小姐", value: "203" },
  { title: "旗袍", value: "207" },
  { title: "兔女郎", value: "216" },
  { title: "女祭司", value: "223" },
  { title: "动画人物", value: "230" },
  { title: "迷你裙警察", value: "248" },
  { title: "修女", value: "270" },
  { title: "COSPLAY服飾", value: "297" },
  { title: "高跟鞋", value: "352" },
  { title: "靴子", value: "358" },
];

const CATEMBY_TAG_BODY_OPTIONS = [
  { title: "熟女", value: "15" },
  { title: "巨乳", value: "17" },
  { title: "蘿莉塔", value: "19" },
  { title: "无毛", value: "22" },
  { title: "美臀", value: "57" },
  { title: "苗條", value: "65" },
  { title: "美乳", value: "91" },
  { title: "巨大陰莖", value: "98" },
  { title: "胖女人", value: "104" },
  { title: "平胸", value: "146" },
  { title: "素人", value: "338" },
  { title: "高挑", value: "62" },
  { title: "孕妇", value: "92" },
  { title: "大屁股", value: "131" },
  { title: "瘦小身型", value: "134" },
  { title: "变性者", value: "147" },
  { title: "肌肉", value: "166" },
  { title: "超乳", value: "217" },
  { title: "美腳", value: "339" },
  { title: "多毛", value: "388" },
];

const CATEMBY_TAG_BEHAVIOR_OPTIONS = [
  { title: "乳交", value: "14" },
  { title: "中出", value: "18" },
  { title: "多P", value: "24" },
  { title: "69", value: "25" },
  { title: "淫語", value: "36" },
  { title: "女上位", value: "37" },
  { title: "自慰", value: "38" },
  { title: "颜射", value: "46" },
  { title: "潮吹", value: "68" },
  { title: "口交", value: "72" },
  { title: "舔陰", value: "73" },
  { title: "肛门・肛交", value: "74" },
  { title: "手指插入", value: "77" },
  { title: "手淫", value: "102" },
  { title: "深喉", value: "123" },
  { title: "放尿", value: "42" },
  { title: "足交", value: "61" },
  { title: "按摩", value: "69" },
  { title: "吞精", value: "81" },
  { title: "母乳", value: "100" },
  { title: "濫交", value: "110" },
  { title: "接吻", value: "124" },
  { title: "拳交", value: "141" },
  { title: "饮尿", value: "195" },
  { title: "騎乗位", value: "197" },
  { title: "排便", value: "202" },
  { title: "食糞", value: "209" },
  { title: "剃毛", value: "340" },
  { title: "二穴同入", value: "342" },
  { title: "兩女一男", value: "354" },
  { title: "兩男兩女", value: "355" },
  { title: "兩男一女", value: "356" },
  { title: "打屁股", value: "368" },
  { title: "約会", value: "373" },
  { title: "不穿內褲", value: "374" },
  { title: "不穿胸罩", value: "375" },
  { title: "后入", value: "376" },
  { title: "瑜伽·健身", value: "378" },
  { title: "白眼失神", value: "379" },
  { title: "搔癢", value: "385" },
];

const CATEMBY_TAG_PLAY_OPTIONS = [
  { title: "凌辱", value: "21" },
  { title: "捆綁", value: "29" },
  { title: "緊縛", value: "31" },
  { title: "輪姦", value: "41" },
  { title: "玩具", value: "50" },
  { title: "SM", value: "60" },
  { title: "戶外", value: "66" },
  { title: "乳液", value: "71" },
  { title: "羞恥", value: "79" },
  { title: "女優按摩棒", value: "90" },
  { title: "拘束", value: "93" },
  { title: "調教", value: "94" },
  { title: "立即口交", value: "170" },
  { title: "跳蛋", value: "39" },
  { title: "監禁", value: "53" },
  { title: "按摩棒", value: "76" },
  { title: "插入異物", value: "120" },
  { title: "灌腸", value: "138" },
  { title: "藥物", value: "155" },
  { title: "露出", value: "159" },
  { title: "汽车性爱", value: "171" },
  { title: "催眠", value: "176" },
  { title: "鴨嘴", value: "179" },
  { title: "糞便", value: "180" },
  { title: "脫衣", value: "225" },
  { title: "子宮頸", value: "232" },
  { title: "導尿", value: "315" },
  { title: "蒙面・面罩", value: "346" },
  { title: "唾液敷面", value: "350" },
  { title: "乳釘、穿孔、乳環", value: "353" },
  { title: "口球", value: "357" },
  { title: "輔助自慰", value: "364" },
  { title: "夫妻交換", value: "369" },
  { title: "假陽具", value: "372" },
  { title: "鼻鉤", value: "380" },
  { title: "蠟燭", value: "382" },
  { title: "站立后入", value: "389" },
];

const CATEMBY_TAG_CATEGORY_OPTIONS = [
  { title: "单体作品", value: "28" },
  { title: "首次亮相", value: "80" },
  { title: "故事集", value: "164" },
  { title: "經典", value: "175" },
  { title: "恋爱", value: "178" },
  { title: "VR", value: "212" },
  { title: "感謝祭", value: "213" },
  { title: "給女性觀眾", value: "236" },
  { title: "无码流出", value: "345" },
  { title: "4K", value: "347" },
  { title: "无码破解", value: "348" },
  { title: "綜艺", value: "351" },
  { title: "精选綜合", value: "8" },
  { title: "国外进口", value: "9" },
  { title: "4小时以上作品", value: "10" },
  { title: "戏劇", value: "11" },
  { title: "成人电影", value: "12" },
  { title: "介紹影片", value: "26" },
  { title: "第一人稱攝影", value: "45" },
  { title: "薄马賽克", value: "83" },
  { title: "數位马賽克", value: "85" },
  { title: "投稿", value: "87" },
  { title: "业余", value: "88" },
  { title: "紀錄片", value: "97" },
  { title: "去背影片", value: "117" },
  { title: "獨立製作", value: "121" },
  { title: "主觀视角", value: "148" },
  { title: "战斗行动", value: "150" },
  { title: "特效", value: "152" },
  { title: "16小时以上作品", value: "161" },
  { title: "局部特寫", value: "168" },
  { title: "重印版", value: "189" },
  { title: "历史劇", value: "191" },
  { title: "寫真偶像", value: "194" },
  { title: "3D", value: "227" },
  { title: "原作改編", value: "238" },
  { title: "訪问", value: "242" },
  { title: "教学", value: "250" },
  { title: "恐怖", value: "253" },
  { title: "西洋片", value: "254" },
  { title: "科幻", value: "266" },
  { title: "行动", value: "267" },
  { title: "綜合短篇", value: "271" },
  { title: "滑稽模仿", value: "273" },
  { title: "男性", value: "280" },
  { title: "冒險", value: "284" },
  { title: "模擬", value: "285" },
  { title: "爱好，文化", value: "292" },
  { title: "懸疑", value: "296" },
  { title: "R-15", value: "311" },
  { title: "美少女电影", value: "312" },
  { title: "感官作品", value: "314" },
  { title: "觸摸打字", value: "325" },
  { title: "素人作品", value: "330" },
  { title: "HDTV", value: "335" },
  { title: "心理惊悚", value: "367" },
  { title: "养尊處優", value: "370" },
  { title: "共演", value: "381" },
];

const CATEMBY_ALL_CATEGORY_OPTIONS = [
  CATEMBY_ACTOR_OPTIONS,
  CATEMBY_MAKER_OPTIONS,
  CATEMBY_TAG_MAIN_OPTIONS,
  CATEMBY_TAG_SUBJECT_OPTIONS,
  CATEMBY_TAG_ROLE_OPTIONS,
  CATEMBY_TAG_CLOTH_OPTIONS,
  CATEMBY_TAG_BODY_OPTIONS,
  CATEMBY_TAG_BEHAVIOR_OPTIONS,
  CATEMBY_TAG_PLAY_OPTIONS,
  CATEMBY_TAG_CATEGORY_OPTIONS,
];

const CATEMBY_TRAD_TO_SIMP = {
  體: "体", 單: "单", 婦: "妇", 藝: "艺", 職: "职", 業: "业", 類: "类", 時: "时", 長: "长",
  無: "无", 碼: "码", 標: "标", 籤: "签", 綠: "绿", 綺: "绮", 羅: "罗", 亞: "亚", 結: "结",
  檸: "柠", 學: "学", 師: "师", 護: "护", 臉: "脸", 紗: "纱", 愛: "爱", 韻: "韵", 齋: "斋",
  與: "与", 國: "国", 東: "东", 專: "专", 門: "门", 開: "开", 關: "关", 來: "来", 對: "对",
  這: "这", 個: "个", 們: "们", 說: "说", 話: "话", 視: "视", 頻: "频", 發: "发", 現: "现",
  網: "网", 電: "电", 動: "动", 畫: "画", 裡: "里", 後: "后", 為: "为", 會: "会", 過: "过",
  還: "还", 進: "进", 達: "达", 運: "运", 連: "连", 遠: "远", 選: "选", 頭: "头", 歲: "岁",
  從: "从", 帶: "带", 廣: "广", 應: "应", 變: "变", 讓: "让", 機: "机", 樣: "样", 雙: "双",
  雞: "鸡", 馬: "马", 魚: "鱼", 鳥: "鸟", 龍: "龙", 車: "车", 風: "风", 雲: "云", 點: "点",
  書: "书", 買: "买", 賣: "卖", 貨: "货", 質: "质", 問: "问", 題: "题", 聽: "听", 聲: "声",
  響: "响", 顏: "颜", 顯: "显", 顧: "顾", 飲: "饮", 飯: "饭", 養: "养", 餘: "余", 驚: "惊",
  驗: "验", 髮: "发", 鬥: "斗", 魯: "鲁", 鮮: "鲜", 鳳: "凤", 鹽: "盐", 麗: "丽", 麵: "面",
  黃: "黄", 齊: "齐", 齒: "齿", 龜: "龟", 歡: "欢", 當: "当", 將: "将", 戲: "戏", 戰: "战",
  極: "极", 樂: "乐", 歷: "历", 歸: "归", 難: "难", 雜: "杂", 離: "离", 雖: "虽", 靈: "灵",
  靜: "静", 韓: "韩", 頁: "页", 預: "预", 領: "领", 頻: "频", 顆: "颗", 飛: "飞", 餅: "饼",
  館: "馆", 駕: "驾", 驅: "驱", 鬱: "郁", 魷: "鱿", 鳴: "鸣", 鷹: "鹰", 鹹: "咸", 麼: "么",
  齡: "龄", 黨: "党", 戀: "恋", 間: "间", 浜: "滨", 涼: "凉", 歩: "步", 彌: "弥",
  亜: "亚", 沖: "冲", 岡: "冈", 蒼: "苍", 絵: "绘", 鈴: "铃", 実: "实", 楓: "枫",
};

const CATEMBY_MAKER_ALIAS = {
  "ケイ・エム・プロデュース": "KM Produce",
  "PRESTIGE,プレステージ": "Prestige",
  "マドンナ(Madonna)": "Madonna",
  "S1 NO.1 STYLE": "S1 NO.1 STYLE",
  センタービレッジ: "Center Village",
  クリスタル映像: "Crystal 映像",
  ワンズファクトリー: "WANZ FACTORY",
  プレミアム: "Premium",
  "ぎがdeれいん": "Giga",
  溜池ゴロー: "溜池五郎",
  本中: "本中",
};

const CATEMBY_TAG_ALIAS = {
  單體作品: "单体作品",
  單體影片: "单体作品",
  有碼: "有码",
  無碼: "无码",
  含磁鏈: "含磁链",
};

const CATEMBY_LATIN_NAME = /^[A-Za-z0-9\s.\-&']+$/;

function toSimplifiedChinese(text) {
  let out = "";
  for (const ch of String(text || "")) out += CATEMBY_TRAD_TO_SIMP[ch] || ch;
  return out;
}

function pickChineseAlias(other) {
  if (!other) return "";
  const parts = String(other)
    .split(/[,，、]/)
    .map((s) => safeText(s))
    .filter(Boolean);
  for (const part of parts) {
    if (/[\u4e00-\u9fff]/.test(part) && !/[\u3040-\u30ff]/.test(part)) return toSimplifiedChinese(part);
  }
  return "";
}

function translateActorLabel(name, otherName) {
  const alias = pickChineseAlias(otherName);
  if (alias) return alias;
  const base = toSimplifiedChinese(name || "");
  if (/[\u4e00-\u9fff]/.test(base)) return base;
  return safeText(name || "");
}

function translateMakerLabel(name) {
  name = safeText(name);
  if (!name) return "";
  if (CATEMBY_MAKER_ALIAS[name]) return CATEMBY_MAKER_ALIAS[name];
  const paren = name.match(/\(([^)]+)\)/);
  if (paren) return safeText(paren[1]);
  const parts = name.split(/[,，、]/).map((s) => safeText(s)).filter(Boolean);
  if (parts.length > 1) {
    const latin = parts.find((p) => CATEMBY_LATIN_NAME.test(p));
    if (latin) return latin;
    const cn = parts.find((p) => /[\u4e00-\u9fff]/.test(p));
    if (cn) return toSimplifiedChinese(cn);
  }
  if (CATEMBY_LATIN_NAME.test(name)) return name;
  if (/[\u4e00-\u9fff]/.test(name)) return toSimplifiedChinese(name);
  return name;
}

function translateTagLabel(name) {
  name = safeText(name);
  if (!name) return "";
  if (CATEMBY_TAG_ALIAS[name]) return CATEMBY_TAG_ALIAS[name];
  const simp = toSimplifiedChinese(name);
  if (CATEMBY_TAG_ALIAS[simp]) return CATEMBY_TAG_ALIAS[simp];
  return simp;
}

function translateLabel(name, kind, extra) {
  if (kind === "actor") return translateActorLabel(name, extra && extra.otherName);
  if (kind === "maker") return translateMakerLabel(name);
  if (kind === "tag") return translateTagLabel(name);
  return toSimplifiedChinese(name || "");
}

function firstEnumValue(options) {
  if (!options || !options.length) return "";
  for (let i = 0; i < options.length; i++) {
    if (options[i] && options[i].value) return options[i].value;
  }
  return "";
}

function categoryModuleParams(options) {
  const enumOptions = options.enumOptions || [];
  return [
    {
      name: options.paramName || "item",
      title: options.itemTitle || "选择分类",
      type: "enumeration",
      enumOptions: enumOptions,
      value: firstEnumValue(enumOptions),
    },
    {
      name: "movie_type",
      title: "影片类型",
      type: "enumeration",
      enumOptions: [
        { title: "全部", value: "all" },
        { title: "有码", value: "censored" },
        { title: "无码", value: "uncensored" },
        { title: "欧美", value: "western" },
        { title: "FC2", value: "fc2" },
      ],
      value: "all",
    },
    {
      name: "sort_by",
      title: "排序",
      type: "enumeration",
      enumOptions: [
        { title: "最近上市", value: "published" },
        { title: "最高评分", value: "score" },
        { title: "最多收藏", value: "fav" },
      ],
      value: "published",
    },
    { name: "page", title: "页码", type: "page", value: "1" },
    { name: "category_kind", title: "分类类型", type: "constant", value: options.kind || "actors" },
  ];
}


WidgetMetadata = {
  id: "catemby_legacy",
  title: "Catemby遗产",
  description: "catemby遗产站点.搜索.分类.预告.完整片.外挂字幕.聚合；详情磁力(API/短评/Sukebei)一键转存光鸭",
  author: "老头",
  site: "https://catembylegacy.fastcdn.dpdns.org",
  version: "1.9.1",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  globalParams: [
    {
      name: "guangya_token",
      title: "光鸭 refresh_token",
      type: "input",
      description: "gy.- 开头；填写后详情页磁力栏点击可直转光鸭",
      value: "",
    },
    {
      name: "guangya_parent_id",
      title: "光鸭保存目录 ID",
      type: "input",
      description: "留空保存到根目录",
      value: "",
    },
    {
      name: "magnet_min_video_mb",
      title: "最小保留视频 MB",
      type: "input",
      description: "0=仅按相对体积判断小广告片",
      value: "0",
    },
    {
      name: "magnet_block_patterns",
      title: "拦截正则（可选）",
      type: "input",
      description: "分号分隔；留空用内置规则",
      value: "",
    },
  ],
  modules: [
    {
      id: "latest",
      title: "最新",
      functionName: "loadLatest",
      cacheDuration: 1800,
      params: [
        {
          name: "filter_by",
          title: "分类",
          type: "enumeration",
          enumOptions: [
            { title: "全部", value: "all" },
            { title: "有码", value: "censored" },
            { title: "无码", value: "uncensored" },
            { title: "欧美", value: "western" },
            { title: "FC2", value: "fc2" },
          ],
          value: "all",
        },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      id: "recommend",
      title: "推荐",
      functionName: "loadRecommend",
      cacheDuration: 3600,
      params: [{ name: "page", title: "页码", type: "page", value: "1" }],
    },
    {
      id: "rankings",
      title: "排行榜",
      functionName: "loadRankings",
      cacheDuration: 3600,
      params: [
        {
          name: "rank_mode",
          title: "榜单类型",
          type: "enumeration",
          enumOptions: [
            { title: "热播", value: "playback" },
            { title: "TOP榜", value: "top" },
          ],
          value: "playback",
        },
        {
          name: "filter_by",
          title: "分类",
          type: "enumeration",
          belongTo: { paramName: "rank_mode", value: ["playback"] },
          enumOptions: [
            { title: "全部", value: "all" },
            { title: "有码", value: "censored" },
            { title: "无码", value: "uncensored" },
            { title: "欧美", value: "western" },
            { title: "FC2", value: "fc2" },
          ],
          value: "all",
        },
        {
          name: "movie_type",
          title: "影片类型",
          type: "enumeration",
          belongTo: { paramName: "rank_mode", value: ["top"] },
          enumOptions: [
            { title: "有码", value: "censored" },
            { title: "无码", value: "uncensored" },
            { title: "欧美", value: "western" },
            { title: "FC2", value: "fc2" },
          ],
          value: "censored",
        },
        {
          name: "period",
          title: "周期",
          type: "enumeration",
          enumOptions: [
            { title: "日榜", value: "daily" },
            { title: "周榜", value: "weekly" },
            { title: "月榜", value: "monthly" },
          ],
          value: "daily",
        },
      ],
    },
    {
      id: "actors",
      title: "演员",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "peopleId",
        itemTitle: "选择演员",
        kind: "actors",
        enumOptions: CATEMBY_ACTOR_OPTIONS,
      }),
    },
    {
      id: "makers",
      title: "片商",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择片商",
        kind: "makers",
        enumOptions: CATEMBY_MAKER_OPTIONS,
      }),
    },
    {
      id: "tag_main",
      title: "基本",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择标签",
        kind: "tags",
        enumOptions: CATEMBY_TAG_MAIN_OPTIONS,
      }),
    },
    {
      id: "tag_subject",
      title: "主题",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择标签",
        kind: "tags",
        enumOptions: CATEMBY_TAG_SUBJECT_OPTIONS,
      }),
    },
    {
      id: "tag_role",
      title: "角色",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择标签",
        kind: "tags",
        enumOptions: CATEMBY_TAG_ROLE_OPTIONS,
      }),
    },
    {
      id: "tag_cloth",
      title: "服装",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择标签",
        kind: "tags",
        enumOptions: CATEMBY_TAG_CLOTH_OPTIONS,
      }),
    },
    {
      id: "tag_body",
      title: "体型",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择标签",
        kind: "tags",
        enumOptions: CATEMBY_TAG_BODY_OPTIONS,
      }),
    },
    {
      id: "tag_behavior",
      title: "行为",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择标签",
        kind: "tags",
        enumOptions: CATEMBY_TAG_BEHAVIOR_OPTIONS,
      }),
    },
    {
      id: "tag_play_method",
      title: "玩法",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择标签",
        kind: "tags",
        enumOptions: CATEMBY_TAG_PLAY_OPTIONS,
      }),
    },
    {
      id: "tag_category",
      title: "类别",
      functionName: "loadPage",
      cacheDuration: 0,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择标签",
        kind: "tags",
        enumOptions: CATEMBY_TAG_CATEGORY_OPTIONS,
      }),
    },
    {
      id: "search",
      title: "搜索",
      functionName: "searchMovies",
      cacheDuration: 1800,
      params: [
        { name: "keyword", title: "关键词", type: "input", value: "" },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      id: "loadResource",
      title: "Catemby 播放源",
      description: "通过番号匹配完整影片播放源",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 600,
      params: [],
    },
    {
      id: "loadSubtitle",
      title: "Catemby 字幕",
      description: "按番号匹配外挂字幕（srt/ass）",
      functionName: "loadSubtitle",
      type: "subtitle",
      cacheDuration: 3600,
      params: [],
    },
  ],
  search: {
    title: "全局搜索",
    functionName: "searchGlobal",
    params: [
      { name: "keyword", title: "关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" },
    ],
  },
};
function safeText(str) {
  return String(str || "").replace(/\s+/g, " ").trim();
}

function encodeLink(path) {
  return LINK_PREFIX + String(path || "");
}

function decodeLink(link) {
  const raw = String(link || "").trim();
  return raw.startsWith(LINK_PREFIX) ? raw.slice(LINK_PREFIX.length) : raw;
}

function parseLinkQuery(link) {
  const raw = decodeLink(link);
  const qIndex = raw.indexOf("?");
  if (qIndex < 0) return { path: raw, query: {} };
  const path = raw.slice(0, qIndex);
  const query = {};
  raw
    .slice(qIndex + 1)
    .split("&")
    .forEach((part) => {
      if (!part) return;
      const eq = part.indexOf("=");
      const key = decodeURIComponent(eq >= 0 ? part.slice(0, eq) : part);
      const val = decodeURIComponent(eq >= 0 ? part.slice(eq + 1) : "");
      query[key] = val;
    });
  return { path, query };
}

function parseCategoryPath(path) {
  const clean = String(path || "").replace(/^\//, "");
  if (!clean) return { kind: "", id: "" };
  if (clean.indexOf("actors/") === 0) return { kind: "actors", id: clean.split("/")[1].split("?")[0] };
  if (clean.indexOf("makers/") === 0) return { kind: "makers", id: clean.split("/")[1].split("?")[0] };
  if (clean.indexOf("series/") === 0) return { kind: "series", id: clean.split("/")[1].split("?")[0] };
  if (clean.indexOf("categories") === 0) {
    const qMatch = clean.match(/(?:[?&]q=)([^&]+)/);
    return { kind: "tags", id: qMatch ? decodeURIComponent(qMatch[1]) : "" };
  }
  return { kind: "", id: "" };
}

function enumOptionsForKind(kind) {
  if (kind === "actors") return [CATEMBY_ACTOR_OPTIONS];
  if (kind === "makers") return [CATEMBY_MAKER_OPTIONS];
  return [
    CATEMBY_TAG_MAIN_OPTIONS,
    CATEMBY_TAG_SUBJECT_OPTIONS,
    CATEMBY_TAG_ROLE_OPTIONS,
    CATEMBY_TAG_CLOTH_OPTIONS,
    CATEMBY_TAG_BODY_OPTIONS,
    CATEMBY_TAG_BEHAVIOR_OPTIONS,
    CATEMBY_TAG_PLAY_OPTIONS,
    CATEMBY_TAG_CATEGORY_OPTIONS,
  ];
}

function parseCategoryParamRef(raw) {
  raw = String(raw || "");
  const tilde = raw.indexOf(CATEGORY_ID_TITLE_SEP);
  if (tilde < 0) return { id: raw, title: "" };
  let title = raw.slice(tilde + 1);
  try {
    title = decodeURIComponent(title);
  } catch (e) {
    title = raw.slice(tilde + 1);
  }
  return { id: raw.slice(0, tilde), title: title };
}

function extractEnumValue(raw, preferLists) {
  if (raw && typeof raw === "object") {
    if (raw.value != null && raw.value !== "") return extractEnumValue(raw.value, preferLists);
    if (raw.id != null && raw.id !== "") return extractEnumValue(raw.id, preferLists);
    if (raw.title != null && raw.title !== "") return extractEnumValue(raw.title, preferLists);
    return "";
  }
  let text = String(raw || "").trim();
  if (!text || text === "[object Object]") return "";
  const ref = parseCategoryParamRef(text);
  text = String(ref.id || "").trim();
  if (!text) return "";
  const lists = preferLists || CATEMBY_ALL_CATEGORY_OPTIONS;
  for (let i = 0; i < lists.length; i++) {
    const options = lists[i] || [];
    for (let j = 0; j < options.length; j++) {
      const opt = options[j];
      if (!opt) continue;
      if (opt.value === text || opt.title === text) return String(opt.value || opt.title);
      if (ref.title && (opt.value === ref.title || opt.title === ref.title)) return String(opt.value || opt.title);
    }
  }
  return text;
}

function normalizeParamId(raw, preferLists) {
  let text = extractEnumValue(raw, preferLists);
  if (!text) return "";
  const pipe = text.indexOf("|");
  if (pipe >= 0) text = text.slice(0, pipe);
  if (text.indexOf(LINK_PREFIX) === 0) {
    const parsed = parseLinkQuery(text);
    const cat = parseCategoryPath(parsed.path);
    if (cat.kind === "tags") return parsed.query.q || cat.id || "";
    if (cat.id) return cat.id;
  }
  text = text.replace(/^\/actors\//, "").replace(/^\/makers\//, "").replace(/^\/series\//, "");
  return text.split(/[/?#&=]/)[0].trim();
}

function syncCategoryParams(params) {
  params = params || {};
  const moduleKind = String(params.category_kind || "").trim();

  const item = String(params.item || "").trim();
  if (item && !params.genreId && !params.peopleId) {
    const itemRef = parseCategoryParamRef(item);
    const itemId = String(itemRef.id || "").trim();
    if (itemId.indexOf("/actors/") === 0 || (moduleKind === "actors" && itemId.indexOf(LINK_PREFIX) !== 0)) {
      params.peopleId = normalizeParamId(itemId, enumOptionsForKind("actors"));
    } else {
      params.genreId = itemId;
    }
    if (itemRef.title) params.categoryTitle = itemRef.title;
  }

  if (params.genreId) {
    const genreRef = parseCategoryParamRef(params.genreId);
    params.genreId = normalizeParamId(genreRef.id, enumOptionsForKind(moduleKind === "makers" ? "makers" : "tags"));
    if (genreRef.title) params.categoryTitle = genreRef.title;
  }
  if (params.peopleId) {
    const peopleRef = parseCategoryParamRef(params.peopleId);
    params.peopleId = normalizeParamId(peopleRef.id, enumOptionsForKind("actors"));
    if (peopleRef.title) params.categoryTitle = peopleRef.title;
  }

  if (moduleKind === "actors") {
    if (params.peopleId) params.genreId = "";
  } else if (moduleKind === "makers" || moduleKind === "tags") {
    if (params.genreId) params.peopleId = "";
  }

  if (params.peopleId && String(params.genreId || "").indexOf(LINK_PREFIX) === 0 && moduleKind === "actors") {
    params.genreId = "";
  }
  if (params.genreId && String(params.peopleId || "").indexOf(LINK_PREFIX) === 0 && (moduleKind === "makers" || moduleKind === "tags")) {
    params.peopleId = "";
  }

  return params;
}

function resolveCategoryContext(params) {
  params = syncCategoryParams(params || {});
  const moduleKind = params.category_kind || "";
  const preferLists = enumOptionsForKind(moduleKind);

  function fromEncodedLink(ref) {
    ref = String(ref || "").trim();
    if (!ref || ref.indexOf(LINK_PREFIX) !== 0) return null;
    const parsed = parseLinkQuery(ref);
    const cat = parseCategoryPath(parsed.path);
    if (cat.kind === "tags") {
      const tagName = parsed.query.q || cat.id;
      if (tagName) return { kind: "tags", itemId: tagName };
    }
    if (cat.kind && cat.id) return { kind: cat.kind, itemId: cat.id };
    return null;
  }

  if (moduleKind === "actors") {
    const peopleRef = fromEncodedLink(params.peopleId);
    if (peopleRef) return peopleRef;
    if (params.peopleId) {
      return { kind: "actors", itemId: normalizeParamId(params.peopleId, preferLists) };
    }
  } else if (moduleKind === "makers" || moduleKind === "tags") {
    const genreRef = fromEncodedLink(params.genreId);
    if (genreRef) return genreRef;
    if (params.genreId) {
      return { kind: moduleKind, itemId: normalizeParamId(params.genreId, preferLists) };
    }
  }

  const peopleRef = fromEncodedLink(params.peopleId);
  if (peopleRef) return peopleRef;

  const genreRef = fromEncodedLink(params.genreId);
  if (genreRef) return genreRef;

  const urlRef = fromEncodedLink(params.url || params.link);
  if (urlRef) return urlRef;

  if (params.peopleId) {
    return { kind: moduleKind || "actors", itemId: normalizeParamId(params.peopleId, preferLists) };
  }
  if (params.genreId) {
    const kind = moduleKind || (String(params.genreId).indexOf("/makers/") >= 0 ? "makers" : "tags");
    return { kind: kind, itemId: normalizeParamId(params.genreId, preferLists) };
  }
  if (params.item) {
    const itemId = normalizeParamId(params.item, preferLists);
    if (itemId) return { kind: moduleKind || "actors", itemId: itemId };
  }
  return { kind: moduleKind || "actors", itemId: "" };
}

function sanitizeQuery(query) {
  if (!query) return {};
  const out = {};
  Object.keys(query).forEach((key) => {
    const val = query[key];
    if (val === undefined || val === null || val === "") return;
    if (typeof val === "object") return;
    out[key] = val;
  });
  return out;
}

function normalizeRankPeriod(period) {
  const p = String(period || "daily").toLowerCase();
  if (p === "day") return "daily";
  if (p === "week") return "weekly";
  if (p === "month") return "monthly";
  if (p === "daily" || p === "weekly" || p === "monthly") return p;
  return "daily";
}

const MOVIE_TYPE_BY_CODE = { "0": "censored", "1": "uncensored", "2": "western", "3": "fc2" };

function resolveMovieType(raw) {
  let text = extractEnumValue(raw, [MOVIE_TYPE_ENUM]);
  if (!text) text = String(raw || "").trim();
  if (text && Object.prototype.hasOwnProperty.call(MOVIE_TYPE_BY_CODE, text)) {
    return MOVIE_TYPE_BY_CODE[text];
  }
  text = text.toLowerCase();
  if (Object.prototype.hasOwnProperty.call(MOVIE_TYPE_CODE, text)) return text;
  return "all";
}

function shouldUseCategorySearch(movieType) {
  return movieType === "uncensored" || movieType === "western" || movieType === "fc2";
}

function resolveSearchSortBy(sortBy) {
  const key = String(sortBy || "published").toLowerCase();
  return SEARCH_SORT_MAP[key] || SEARCH_SORT_MAP.published;
}

function lookupEnumTitle(itemId, enumOptions) {
  const id = String(itemId || "").trim();
  if (!id || !enumOptions) return "";
  for (let i = 0; i < enumOptions.length; i++) {
    const opt = enumOptions[i];
    if (!opt) continue;
    if (opt.value === id || opt.title === id) return String(opt.title || opt.value || "");
  }
  return "";
}

function resolveCategorySearchKeyword(kind, itemId, params) {
  const title = safeText(params.categoryTitle);
  if (title) return title;
  const preferLists = enumOptionsForKind(kind);
  for (let i = 0; i < preferLists.length; i++) {
    const found = lookupEnumTitle(itemId, preferLists[i]);
    if (found) return found;
  }
  return String(itemId || "").trim();
}

function buildCategoryFilter(kind, itemId, movieType, listFilter) {
  const typePart = MOVIE_TYPE_CODE[movieType || "all"] || "0";
  const id = String(itemId || "").trim();
  // 标签筛选格式: movieType:t::tagId （第三段占位为空，标签 ID 在第四段）
  // 基本筛选项 p/m/c/s/i/v: movieType:0:x:code
  if (kind === "tags") {
    if (/^[pmcsiv]$/i.test(id)) {
      return typePart + ":0:x:" + id.toLowerCase();
    }
    return typePart + ":t::" + id;
  }
  const kindCode = CATEGORY_KIND_CODE[kind] || "0";
  let filterBy = typePart + ":" + kindCode + ":" + id;
  const extra = LIST_FILTER_CODE[listFilter || "all"];
  filterBy += extra ? ":" + extra : ":";
  return filterBy;
}

async function fetchSearchMovies(keyword, params) {
  const page = Number(params.page || params.from || 1);
  const movieType = resolveMovieType(params.movie_type);
  const query = {
    q: keyword,
    page,
    type: "movie",
    movie_filter_by: "all",
    movie_sort_by: resolveSearchSortBy(params.sort_by),
  };
  if (movieType !== "all") {
    query.movie_type = MOVIE_TYPE_CODE[movieType] || "0";
  }
  const data = await apiGet("/v2/search", query);
  return data.movies || [];
}

async function fetchTagMovies(tagName, params) {
  return fetchSearchMovies(tagName, params);
}

function resolveSortQuery(sortBy) {
  return SORT_API_MAP[sortBy] || SORT_API_MAP.published;
}

async function fetchCategoryMovies(filterBy, params) {
  const page = Number(params.page || params.from || 1);
  const sort = resolveSortQuery(params.sort_by || "published");
  const data = await apiGet("/v1/movies/tags", {
    filter_by: filterBy,
    page,
    sort_by: sort.sort_by,
    order_by: sort.order_by,
    limit: 24,
  });
  return data.movies || [];
}


const DMM_PROBE_WORKER_BASE = "https://dmm.laotou.ccwu.cc";
const DMM_PROBE_WORKER_CACHE = {};
const DMM_PROBE_WORKER_TIMEOUT_MS = 8000;
const DMM_PROBE_BATCH_SIZE = 20;
const DMM_PROBE_BATCH_TIMEOUT_MS = 60000;
const DMM_PROBE_STORAGE_PREFIX = "javdb.dmmProbe.v2.";
const DMM_PROBE_STORAGE_TTL_OK_MS = 60 * 24 * 3600 * 1000;
const DMM_PROBE_STORAGE_TTL_FAIL_MS = 14 * 24 * 3600 * 1000;
const DMM_CONTENT_ID_OVERRIDES = {};

const MGSTAGE_COVER_RULES = {
  ABF: { maker: "prestige" },
  ABW: { maker: "prestige" },
  ABP: { maker: "prestige" },
  CHN: { maker: "prestige" },
  MAAN: { maker: "prestige" },
  PPT: { maker: "prestige" },
  "390JAC": { maker: "jackson" },
};

// DMM contentId 数字前缀映射（与 javdb.js 保持一致，修改时请同步各脚本及 dmm-cover-probe）
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
  NACT: "h_237",
  "3DSVR": "1",
};

function getMgstageCoverRule(parts) {
  if (!parts) return null;
  return MGSTAGE_COVER_RULES[parts.prefix] || null;
}

function urlDedupeKey(url) {
  return String(url || "")
    .trim()
    .toLowerCase()
    .split("?")[0]
    .split("#")[0]
    .replace(/\/+$/, "");
}

function compactUniqueUrls(urls) {
  const seen = {};
  const result = [];
  for (let i = 0; i < (urls || []).length; i++) {
    const value = String(urls[i] || "").trim();
    if (!value) continue;
    const key = urlDedupeKey(value);
    if (!key || seen[key]) continue;
    seen[key] = true;
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
  if (!isValidJavCatalogCode(code)) {
    DMM_PROBE_WORKER_CACHE[code] = null;
    return null;
  }
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
    DMM_PROBE_WORKER_CACHE[code] = null;
    return null;
  } catch (err) {
    DMM_PROBE_WORKER_CACHE[code] = null;
    return null;
  }
}

function getCachedDmmProbeCover(code) {
  code = String(code || "").trim().toUpperCase();
  if (!code || !isValidJavCatalogCode(code)) return null;
  if (Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) {
    return DMM_PROBE_WORKER_CACHE[code];
  }
  const stored = loadDmmProbeFromStorage(code);
  if (stored !== undefined) {
    DMM_PROBE_WORKER_CACHE[code] = stored;
    return stored;
  }
  return null;
}

async function prefetchDmmProbeCovers(codes, params) {
  const pending = [];
  const seen = {};
  for (let i = 0; i < (codes || []).length; i++) {
    const code = String(codes[i] || "").trim().toUpperCase();
    if (!code || seen[code]) continue;
    seen[code] = true;
    if (!isValidJavCatalogCode(code)) {
      DMM_PROBE_WORKER_CACHE[code] = null;
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) continue;
    const storedProbe = loadDmmProbeFromStorage(code);
    if (storedProbe !== undefined) {
      DMM_PROBE_WORKER_CACHE[code] = storedProbe;
      continue;
    }
    const parts = parseJavCodeParts(code);
    if (!parts || getMgstageCoverRule(parts)) {
      DMM_PROBE_WORKER_CACHE[code] = null;
      continue;
    }
    pending.push(code);
  }
  if (!pending.length) return;

  const base = getDmmProbeWorkerBase(params);
  if (!base) return;

  const batchSize = DMM_PROBE_BATCH_SIZE || 20;
  for (let start = 0; start < pending.length; start += batchSize) {
    const chunk = pending.slice(start, start + batchSize);
    const ok = await fetchDmmProbeCoverBatch(chunk, params);
    if (!ok) {
      for (let j = 0; j < chunk.length; j++) {
        if (!Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, chunk[j])) {
          await fetchDmmProbeCover(chunk[j], params);
        }
      }
    }
  }
}

function applyDmmProbeBatchResults(data, requestedCodes) {
  const byCode = {};
  const results = data && data.results;
  if (!Array.isArray(results)) return false;
  for (let i = 0; i < results.length; i++) {
    const row = results[i];
    const code = String((row && row.code) || "")
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
  for (let j = 0; j < (requestedCodes || []).length; j++) {
    const c = requestedCodes[j];
    if (!Object.prototype.hasOwnProperty.call(byCode, c)) continue;
    DMM_PROBE_WORKER_CACHE[c] = byCode[c];
    saveDmmProbeToStorage(c, byCode[c]);
  }
  return true;
}

async function fetchDmmProbeCoverBatch(codes, params) {
  const list = codes || [];
  if (!list.length) return true;
  const base = getDmmProbeWorkerBase(params);
  if (!base) return false;
  try {
    const headers = getDmmProbeWorkerHeaders(params);
    headers["Content-Type"] = "application/json";
    headers.Accept = "application/json";
    const res = await Widget.http.post(
      base + "/probe",
      { codes: list, force: false, variants: false },
      {
        headers,
        timeout: DMM_PROBE_BATCH_TIMEOUT_MS,
        allow_redirects: true,
      }
    );
    if (!res || res.data === undefined || res.data === null) return false;
    const status = Number(res.status || res.statusCode || 0);
    if (status >= 400) return false;
    const data = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
    return applyDmmProbeBatchResults(data, list);
  } catch (err) {
    console.error(
      "[catemby] DMM batch probe failed:",
      err && err.message ? err.message : err
    );
    return false;
  }
}

function lookupDmmProbeCover(code) {
  return getCachedDmmProbeCover(code);
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
  if (!numericPrefix && /^[0-9]/.test(prefix)) {
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
  let number3 = match[2];
  while (number3.length < 3) number3 = "0" + number3;
  const normalizedPrefix = normalizeDmmPrefix(prefix);
  let makerPrefix = String(DMM_CONTENT_PREFIX_MAP[normalizedPrefix] || "");
  if (!makerPrefix && /^SD[A-Z]{2,3}$/.test(normalizedPrefix)) makerPrefix = "1";
  const numberPlain = String(parseInt(match[2], 10));
  const parts = {
    prefix,
    prefixLower,
    number: match[2],
    number3,
    number5,
    numberPlain,
    suffix,
    makerPrefix,
    plainCode: prefixLower + number5,
  };
  parts.code = buildDmmContentIdFromParts(parts) || (makerPrefix + prefixLower + number5);
  return parts;
}

function isValidJavCatalogCode(code) {
  const raw = String(code || "").trim();
  if (!raw) return false;
  const upper = raw.toUpperCase().replace(/\s+/g, " ");
  if (/^\d{4,}$/.test(upper.replace(/[\s\-_]+/g, ""))) return false;
  if (/^FC2(?:[- ]?PPV)?[- ]?\d{5,8}$/i.test(upper)) return true;
  if (/^(?:CARIB|1PONDO|HEYZO|T28)[- ]?\d+/i.test(upper)) return true;
  const parts = parseJavCodeParts(upper);
  if (!parts) return false;
  if (!/[A-Z]/.test(parts.prefix)) return false;
  const num = parseInt(parts.number, 10);
  if (!Number.isFinite(num) || num <= 0) return false;
  return true;
}

function isDmmMonoContentId(contentId) {
  const id = String(contentId || "").toLowerCase();
  if (/^h_\d+/.test(id)) return true;
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
    posterCandidates: compactUniqueUrls([base + "/pf_e_" + dvdDash + ".jpg", base + "/pf_o1_" + dvdDash + ".jpg"]),
    backdropCandidates: compactUniqueUrls([base + "/pb_e_" + dvdDash + ".jpg"]),
  };
}

function buildDmmMonoCoverCandidatesForId(contentId) {
  const id = String(contentId || "").toLowerCase();
  if (!id) return { posterCandidates: [], backdropCandidates: [] };
  const awsBase = "https://awsimgsrc.dmm.co.jp/pics/mono/movie/adult/" + id;
  return {
    posterCandidates: compactUniqueUrls([awsBase + "/" + id + "ps.jpg"]),
    backdropCandidates: compactUniqueUrls([awsBase + "/" + id + "pl.jpg"]),
  };
}

function buildDmmDigitalCoverCandidatesForId(contentId) {
  const id = String(contentId || "").toLowerCase();
  if (!id) return { posterCandidates: [], backdropCandidates: [] };
  const awsBase = "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + id;
  return {
    posterCandidates: compactUniqueUrls([awsBase + "/" + id + "ps.jpg", awsBase + "/" + id + "jp-1.jpg"]),
    backdropCandidates: compactUniqueUrls([awsBase + "/" + id + "pl.jpg"]),
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

function appendDmmCoverCandidatesFromParts(target, parts) {
  if (!parts || !target) return;
  const primary = buildDmmContentIdFromParts(parts);
  const prefix1 = "1" + parts.prefixLower + parts.number5 + String(parts.suffix || "").toLowerCase();
  const plain = parts.prefixLower + parts.number5 + String(parts.suffix || "").toLowerCase();
  const ids = compactUniqueUrls([primary, prefix1, plain]);
  for (let i = 0; i < ids.length; i++) appendDmmCoverCandidates(target, ids[i]);
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
  candidates.posterCandidates = compactUniqueUrls(candidates.posterCandidates);
  candidates.backdropCandidates = compactUniqueUrls(candidates.backdropCandidates);
  return candidates;
}

function buildCoverCandidatesFromVideoId(videoIdOrTitle, dmmProbe, options) {
  options = options || {};
  if (!isValidJavCatalogCode(videoIdOrTitle)) {
    return { posterCandidates: [], backdropCandidates: [] };
  }
  let candidates = buildMgstageCoverCandidatesFromVideoId(videoIdOrTitle);
  if (candidates.posterCandidates.length || candidates.backdropCandidates.length) return candidates;
  candidates = { posterCandidates: [], backdropCandidates: [] };
  if (options.allowGuessedDmm) {
    const parts = parseJavCodeParts(videoIdOrTitle);
    if (parts) appendDmmCoverCandidatesFromParts(candidates, parts);
  }
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
  const id = String(contentId || "").toLowerCase();
  if (!id) return [];
  const urls = [];
  const base = "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + id + "/";
  for (let i = 1; i <= count; i++) {
    urls.push(base + id + "jp-" + i + ".jpg");
  }
  return urls;
}

function buildMgstageGalleryFromDvdId(dvdId, count) {
  count = count || 10;
  const clean = cleanDvdId(dvdId).toLowerCase();
  const match = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
  if (!match) return [];
  const prefix = match[1].toLowerCase();
  const number = String(parseInt(match[2], 10));
  const dvdDash = prefix + "-" + number;
  const urls = [];
  for (let j = 1; j <= count; j++) {
    urls.push("https://image.mgstage.com/images/prestige/" + prefix + "/" + number + "/cap_e_" + j + "_" + dvdDash + ".jpg");
  }
  return urls;
}

function fetchJavTrailersMeta(dvdId, dmmProbe) {
  const empty = { backdropPath: "", backdropPaths: [] };
  if (!dvdId || !isValidJavCatalogCode(dvdId)) return empty;
  const parts = parseJavCodeParts(dvdId);
  let backdropPath = "";
  let backdropPaths = [];
  const mgRule = getMgstageCoverRule(parts);
  if (parts && mgRule) {
    const mg = buildMgstageCoverCandidatesFromParts(parts, mgRule);
    backdropPath = mg.backdropCandidates[0] || "";
    backdropPaths = buildMgstageGalleryFromDvdId(dvdId, 10);
  } else if (dmmProbe && dmmProbe.contentId) {
    backdropPath = dmmProbe.backdropUrl || "";
    backdropPaths = buildDmmGallery(dmmProbe.contentId, 10);
  }
  return { backdropPath, backdropPaths };
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
  const list = compactUniqueUrls(urls || []);
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
  if (!code || !isValidJavCatalogCode(code)) return buildCoverBundleFromUrls(fallback, fallback);
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

function buildDetailCoverBundle(code, siteFallback, dmmProbe, options) {
  options = options || {};
  const fallback = String(siteFallback || "").trim();
  if (!code || !isValidJavCatalogCode(code)) return buildCoverBundleFromUrls(fallback, fallback);
  const probe = dmmProbe !== undefined ? dmmProbe : lookupDmmProbeCover(code);
  const candidates = buildCoverCandidatesFromVideoId(code, probe, options);
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
  return buildCoverBundleFromUrls(hdPoster, hdBackdrop || hdPoster);
}

function applyDmmCoverBundleToItem(item, coverBundle) {
  if (!item || !coverBundle) return item;
  return Object.assign({}, item, {
    backdropPath: coverBundle.backdropPath || item.backdropPath,
    posterPath: coverBundle.posterPath || item.posterPath,
    detailPoster: coverBundle.detailPoster || item.detailPoster,
    coverUrl: coverBundle.coverUrl || coverBundle.backdropPath || coverBundle.detailPoster || item.coverUrl,
    image: coverBundle.image || coverBundle.backdropPath || item.image,
  });
}

async function enrichItemsWithDmmCovers(items, params, options) {
  options = options || {};
  params = params || {};
  if (options.shouldEnrich && !options.shouldEnrich(params)) return items;
  const getCode = options.getCode || function (item) { return item.matchCode || item.code || ""; };
  const getSiteCover = options.getSiteCover || function (item) { return item.backdropPath || item.posterPath || ""; };

  const codes = [];
  for (let i = 0; i < (items || []).length; i++) {
    const code = String(getCode(items[i]) || "").trim().toUpperCase();
    if (code && isValidJavCatalogCode(code)) codes.push(code);
  }
  await prefetchDmmProbeCovers(codes, params);

  const out = [];
  for (let i = 0; i < (items || []).length; i++) {
    const item = items[i];
    const code = String(getCode(item) || "").trim().toUpperCase();
    if (!code || !isValidJavCatalogCode(code)) {
      out.push(item);
      continue;
    }
    const bundle = buildListCoverBundle(code, getSiteCover(item), lookupDmmProbeCover(code));
    out.push(applyDmmCoverBundleToItem(item, bundle));
  }
  return out;
}

function isJdbstaticUrl(url) {
  return /jdbstatic\.com/i.test(String(url || ""));
}

function buildCatembyCdnCoverUrl(movieId) {
  const id = String(movieId || "").trim();
  if (!id || id.length < 2) return "";
  return CATEMBY_CDN_BASE + "/covers/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function buildCatembyCdnThumbUrl(movieId) {
  const id = String(movieId || "").trim();
  if (!id || id.length < 2) return "";
  return CATEMBY_CDN_BASE + "/thumbs/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function resolveCatembySiteCoverUrl(videoId, siteFallback) {
  const apiCover = String(siteFallback || "").trim();
  if (apiCover && !isJdbstaticUrl(apiCover)) return apiCover;
  return videoId ? buildCatembyCdnCoverUrl(videoId) : "";
}

function resolvePosterUrlWithCatembyFallback(posterUrl, videoId, siteFallback) {
  const poster = String(posterUrl || "").trim();
  const fallback = resolveCatembySiteCoverUrl(videoId, siteFallback);
  if (!poster) return fallback || "";
  if (isLowResDmmPosterUrl(poster) || isJdbstaticUrl(poster)) {
    return fallback || poster;
  }
  return poster;
}

function buildCatembyListCoverBundle(code, videoId, dmmProbe, siteFallback) {
  const catembyCover = resolveCatembySiteCoverUrl(videoId, siteFallback);
  if (!code || !isValidJavCatalogCode(code)) return buildCoverBundleFromUrls(catembyCover, catembyCover);
  const probe = dmmProbe !== undefined ? dmmProbe : lookupDmmProbeCover(code);
  const candidates = buildCoverCandidatesFromVideoId(code, probe);
  const hdBackdrop =
    pickFirstUsableCoverUrl(filterTrustedCdnUrls(candidates.backdropCandidates)) ||
    catembyCover ||
    "";
  const hdPoster =
    resolvePosterUrlWithCatembyFallback(
      pickFirstUsableCoverUrl(filterTrustedCdnUrls(candidates.posterCandidates)),
      videoId,
      siteFallback
    ) ||
    catembyCover ||
    "";
  return buildCoverBundleFromUrls(hdPoster, hdBackdrop);
}

function buildCatembyDetailCoverBundle(code, videoId, dmmProbe, options) {
  options = options || {};
  const catembyCover = resolveCatembySiteCoverUrl(videoId, options.siteFallback);
  const siteFallback = String(options.siteFallback || catembyCover || "").trim();
  if (!siteFallback || isJdbstaticUrl(siteFallback)) {
    options = Object.assign({}, options, { siteFallback: catembyCover });
  }
  if (!code || !isValidJavCatalogCode(code)) {
    return buildCoverBundleFromUrls(siteFallback || catembyCover, siteFallback || catembyCover);
  }
  const probe = dmmProbe !== undefined ? dmmProbe : lookupDmmProbeCover(code);
  const candidates = buildCoverCandidatesFromVideoId(code, probe, options);
  const hdBackdrop =
    pickFirstUsableCoverUrl(filterTrustedCdnUrls(candidates.backdropCandidates)) ||
    siteFallback ||
    catembyCover ||
    "";
  const hdPoster =
    resolvePosterUrlWithCatembyFallback(
      pickFirstUsableCoverUrl(filterTrustedCdnUrls(candidates.posterCandidates)),
      videoId,
      options.siteFallback || siteFallback
    ) ||
    siteFallback ||
    catembyCover ||
    "";
  return buildCoverBundleFromUrls(hdPoster, hdBackdrop || hdPoster);
}

async function enrichListMovies(movies, params) {
  params = params || {};
  const codes = [];
  for (let i = 0; i < (movies || []).length; i++) {
    const code = safeText(movies[i].number || "");
    if (code && isValidJavCatalogCode(code)) codes.push(code);
  }
  await prefetchDmmProbeCovers(codes, params);
  return (movies || []).map(function (movie) {
    return mapListMovie(movie, params);
  });
}

function resolveSiteCoverUrl(movie) {
  const apiCover = String(movie.cover_url || "").trim();
  if (apiCover && !/^data:/i.test(apiCover) && !isJdbstaticUrl(apiCover)) return apiCover;
  return "";
}

function resolveSiteThumbUrl(movie) {
  const apiThumb = String(movie.thumb_url || "").trim();
  if (apiThumb && !/^data:/i.test(apiThumb) && !isJdbstaticUrl(apiThumb)) return apiThumb;
  return "";
}

function resolveListThumbUrl(movie) {
  const site = resolveSiteThumbUrl(movie);
  if (site) return site;
  return buildCatembyCdnThumbUrl(movie.id) || "";
}

function resolveListCoverUrl(movie) {
  const site = resolveSiteCoverUrl(movie);
  if (site) return site;
  const thumb = resolveSiteThumbUrl(movie);
  if (thumb) return thumb;
  return buildCatembyCdnCoverUrl(movie.id) || "";
}

function resolveDetailBackdropUrl(movie) {
  return resolveListCoverUrl(movie);
}

function resolveDetailPosterUrl(movie) {
  return resolveListCoverUrl(movie);
}

function isPreviewVariant(item) {
  if (!item || !item.sourceUrl) return true;
  const variant = String(item.variant || "").toLowerCase().trim();
  const label = String(item.label || "").toLowerCase();
  // 站点标记 original/原版/完整 即为正片；data: m3u8 正文里常带 preview 字样，不能当过滤依据
  if (variant === "original" || variant === "full") return false;
  if (/原版|完整/.test(label) && !/预告|預覽|预览|样品|樣品|preview|trailer/.test(label)) return false;

  const urlRaw = String(item.sourceUrl || "");
  const urlHead =
    urlRaw.indexOf("data:") === 0
      ? urlRaw.slice(0, 96).toLowerCase()
      : urlRaw.toLowerCase().split("?")[0].split("#")[0];

  if (/^(preview|trailer|teaser|sample)$/.test(variant)) return true;
  if (/preview|trailer|teaser|预告|預覽|样品|樣品|预览/.test(variant + " " + label)) return true;
  if (/\/preview\.mp4$|preview_video|\/preview\/|\/trailer\/|\/teaser\//.test(urlHead)) return true;
  if (/\/sample(?:s)?\/|litevideo|_sm_|_s_sample|sample_s\./.test(urlHead)) return true;
  if (/dmm\.co\.jp\/.*sample|cvpsample|avsctld/.test(urlHead)) return true;
  return false;
}

function pickResolveVariant(data) {
  if (!data || data.error || !Array.isArray(data.variants) || !data.variants.length) return null;
  const usable = data.variants.filter((item) => item && item.sourceUrl && !isPreviewVariant(item));
  if (!usable.length) return null;
  const picked =
    usable.find((item) => String(item.variant || "").toLowerCase() === "original") ||
    usable.find((item) => /原版|完整|full|original/i.test(String(item.label || "") + " " + String(item.variant || ""))) ||
    usable[0];
  return picked && picked.sourceUrl ? picked : null;
}

function movieLink(id) {
  return encodeLink("/movie/" + id);
}

function siteUrl(path) {
  const p = String(path || "").startsWith("/") ? path : "/" + path;
  return SITE_BASE + p;
}

function buildQueryUrl(base, query) {
  if (!query) return base;
  const parts = [];
  Object.keys(query).forEach((key) => {
    const val = query[key];
    if (val !== undefined && val !== null && val !== "") {
      parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(val)));
    }
  });
  if (!parts.length) return base;
  return base + (base.indexOf("?") >= 0 ? "&" : "?") + parts.join("&");
}

function utf8ToBinary(text) {
  const raw = String(text || "");
  if (typeof encodeURIComponent === "function") {
    try {
      if (typeof unescape === "function") return unescape(encodeURIComponent(raw));
    } catch (e) {}
  }
  let out = "";
  for (let i = 0; i < raw.length; i++) {
    const c = raw.charCodeAt(i);
    if (c < 128) out += String.fromCharCode(c);
    else if (c < 2048) out += String.fromCharCode(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
    else if (c < 0xd800 || c >= 0xe000) out += String.fromCharCode(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
    else {
      i++;
      const c2 = raw.charCodeAt(i);
      const u = 0x10000 + (((c & 0x3ff) << 10) | (c2 & 0x3ff));
      out += String.fromCharCode(0xf0 | (u >> 18), 0x80 | ((u >> 12) & 0x3f), 0x80 | ((u >> 6) & 0x3f), 0x80 | (u & 0x3f));
    }
  }
  return out;
}

function md5BinaryHex(s) {
  const hc = "0123456789abcdef";
  function rh(n) {
    let ss = "";
    for (let j = 0; j <= 3; j++) {
      ss += hc.charAt((n >> (j * 8 + 4)) & 0x0f) + hc.charAt((n >> (j * 8)) & 0x0f);
    }
    return ss;
  }
  function ad(x, y) {
    const l = (x & 0xffff) + (y & 0xffff);
    const m = (x >> 16) + (y >> 16) + (l >> 16);
    return (m << 16) | (l & 0xffff);
  }
  function rl(n, c) {
    return (n << c) | (n >>> (32 - c));
  }
  function cm(q, a, b, x, t, s) {
    return ad(rl(ad(ad(a, q), ad(x, t)), s), b);
  }
  function ff(a, b, c, d, x, s, t) {
    return cm((b & c) | (~b & d), a, b, x, t, s);
  }
  function gg(a, b, c, d, x, s, t) {
    return cm((b & d) | (c & ~d), a, b, x, t, s);
  }
  function hh(a, b, c, d, x, s, t) {
    return cm(b ^ c ^ d, a, b, x, t, s);
  }
  function ii(a, b, c, d, x, s, t) {
    return cm(c ^ (b | ~d), a, b, x, t, s);
  }
  function sb(x, len) {
    const N = (((len + 8) >> 6) + 1) * 16;
    const bl = new Array(N);
    for (let i = 0; i < N; i++) bl[i] = 0;
    let i;
    for (i = 0; i < len; i++) bl[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
    bl[i >> 2] |= 0x80 << ((i % 4) * 8);
    bl[N - 2] = len * 8;
    bl[N - 1] = len >>> 29;
    return bl;
  }
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  const x = sb(s, s.length);
  for (let i = 0; i < x.length; i += 16) {
    const oa = a;
    const ob = b;
    const oc = c;
    const od = d;
    a = ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = ad(a, oa);
    b = ad(b, ob);
    c = ad(c, oc);
    d = ad(d, od);
  }
  return rh(a) + rh(b) + rh(c) + rh(d);
}

function md5Hex(input, asciiOnly) {
  const text = String(input || "");
  return md5BinaryHex(asciiOnly ? text : utf8ToBinary(text));
}

function buildJdSignature() {
  const ts = Math.floor(Date.now() / 1000).toString();
  return ts + "." + JD_SIG_SALT + "." + md5Hex(ts + JD_SIG_KEY, true);
}

function apiHeaders(extra) {
  return Object.assign(
    {
      accept: "application/json",
      "user-agent": "Mozilla/5.0",
      jdsignature: buildJdSignature(),
    },
    extra || {}
  );
}

function siteHeaders(extra) {
  return Object.assign(
    {
      Accept: "application/json, text/plain, */*",
      "User-Agent": UA,
      Referer: SITE_BASE + "/",
      Origin: SITE_BASE,
    },
    extra || {}
  );
}

async function widgetHttpGet(url, headerFactory, retry) {
  retry = retry || 0;
  try {
    const resp = await Widget.http.get(url, { headers: headerFactory() });
    const status = resp && (resp.status || resp.statusCode);
    if (status && Number(status) >= 400) {
      let action = "";
      try {
        const body = typeof resp.data === "string" ? JSON.parse(resp.data) : resp.data;
        action = (body && (body.action || body.message)) || "";
      } catch (e) {}
      if (retry < 2 && (Number(status) === 400 || /signature|expired|签名/i.test(action))) {
        return widgetHttpGet(url, headerFactory, retry + 1);
      }
      throw new Error("HTTP " + status + (action ? " (" + action + ")" : "") + ": " + url);
    }
    return resp;
  } catch (error) {
    const msg = String((error && error.message) || error || "");
    if (retry < 2 && /400|403|unacceptable|signature|expired|签名/i.test(msg)) {
      return widgetHttpGet(url, headerFactory, retry + 1);
    }
    throw error;
  }
}

async function apiGet(pathname, query) {
  const url = buildQueryUrl(API_BASE + pathname, sanitizeQuery(query));
  const resp = await widgetHttpGet(url, apiHeaders);
  const data = typeof resp.data === "string" ? JSON.parse(resp.data) : resp.data;
  if (!data || data.success !== 1) {
    throw new Error((data && data.message) || "API 请求失败: " + pathname);
  }
  return data.data;
}

function parseSiteResponseData(resp) {
  if (!resp || resp.data === undefined || resp.data === null) return null;
  if (typeof resp.data === "string") {
    const text = resp.data.trim();
    if (!text) return null;
    if (text.startsWith("{") || text.startsWith("[")) {
      try {
        return JSON.parse(text);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
  return resp.data;
}

async function siteGet(path, query, options) {
  options = options || {};
  const url = buildQueryUrl(siteUrl(path), sanitizeQuery(query));
  let resp = null;
  try {
    if (options.allowError) {
      resp = await Widget.http.get(url, { headers: siteHeaders() });
      const status = resp && (resp.status || resp.statusCode);
      if (status && Number(status) >= 400) return parseSiteResponseData(resp);
    } else {
      resp = await widgetHttpGet(url, siteHeaders);
    }
  } catch (error) {
    if (options.allowError) {
      const errResp = (error && (error.response || error)) || null;
      const parsed = parseSiteResponseData(errResp);
      if (parsed) return parsed;
      return null;
    }
    throw error;
  }
  return parseSiteResponseData(resp);
}

function detectImageMime(bytes) {
  if (!bytes || bytes.length < 2) return "";
  if (bytes[0] === 0xff && bytes[1] === 0xd8) return "image/jpeg";
  if (bytes[0] === 0x89 && bytes[1] === 0x50) return "image/png";
  if (bytes[0] === 0x47 && bytes[1] === 0x49) return "image/gif";
  if (bytes.length > 11 && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) return "image/webp";
  return "";
}

function xorDecodeBytes(input) {
  const src = input instanceof Uint8Array ? input : new Uint8Array(input || []);
  const direct = detectImageMime(src);
  if (direct) return { bytes: src, mime: direct };

  if (src.length > 1) {
    const key = src[0];
    const out = new Uint8Array(src.length - 1);
    for (let i = 1; i < src.length; i++) out[i - 1] = src[i] ^ key;
    const mime = detectImageMime(out);
    if (mime) return { bytes: out, mime };
  }

  for (const key of [127]) {
    for (let skip = 0; skip < 3; skip++) {
      const out = new Uint8Array(src.length - skip);
      for (let i = skip; i < src.length; i++) out[i - skip] = src[i] ^ key;
      const mime = detectImageMime(out);
      if (mime) return { bytes: out, mime };
    }
  }
  return { bytes: src, mime: direct || "image/jpeg" };
}

function bytesToBase64(bytes) {
  const chunk = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  if (typeof btoa === "function") return btoa(binary);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let output = "";
  for (let i = 0; i < binary.length; i += 3) {
    const a = binary.charCodeAt(i);
    const b = i + 1 < binary.length ? binary.charCodeAt(i + 1) : 0;
    const c = i + 2 < binary.length ? binary.charCodeAt(i + 2) : 0;
    const triplet = (a << 16) | (b << 8) | c;
    output += chars[(triplet >> 18) & 63] + chars[(triplet >> 12) & 63] + (i + 1 < binary.length ? chars[(triplet >> 6) & 63] : "=") + (i + 2 < binary.length ? chars[triplet & 63] : "=");
  }
  return output;
}

async function decodeImageToDataUri(url) {
  if (!url || url.startsWith("data:")) return url || "";
  try {
    const resp = await Widget.http.get(url, {
      headers: { "User-Agent": UA, Referer: SITE_BASE + "/" },
      responseType: "arraybuffer",
    });
    let raw = resp && resp.data;
    if (!raw) return url;
    if (typeof raw === "string") {
      const bin = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) bin[i] = raw.charCodeAt(i) & 0xff;
      raw = bin;
    } else if (Array.isArray(raw)) {
      raw = new Uint8Array(raw);
    }
    const decoded = xorDecodeBytes(raw);
    return "data:" + decoded.mime + ";base64," + bytesToBase64(decoded.bytes);
  } catch (e) {
    return url;
  }
}

function collectGalleryUrls(movie) {
  const urls = [];
  const seen = {};
  (movie.preview_images || []).forEach((item) => {
    const raw = String((item && (item.large_url || item.thumb_url)) || "").trim();
    if (!raw || /^data:/i.test(raw)) return;
    const key = urlDedupeKey(raw);
    if (!key || seen[key]) return;
    seen[key] = true;
    urls.push(raw);
  });
  // 不回退封面/缩略图：封面已单独作为 backdropPaths[0]，避免剧照区重复展示
  return urls;
}

function buildPreviewClipUrl(code) {
  return siteUrl("/preview.mp4?number=" + encodeURIComponent(code || ""));
}

function mapListMovie(movie, params) {
  const rawCode = safeText(movie.number || "");
  const code = isValidJavCatalogCode(rawCode) ? rawCode : "";
  const title = safeText(movie.title || rawCode || movie.id);
  const siteCover = resolveListCoverUrl(movie);
  const covers = code
    ? buildCatembyListCoverBundle(code, movie.id, lookupDmmProbeCover(code), siteCover)
    : buildCoverBundleFromUrls(siteCover, siteCover);
  return {
    id: rawCode || movie.id,
    type: "url",
    mediaType: "movie",
    title: code ? code + " " + title.replace(new RegExp("^" + code + "\\s*"), "") : title,
    backdropPath: covers.backdropPath || siteCover,
    posterPath: covers.posterPath || undefined,
    detailPoster: covers.detailPoster || undefined,
    coverUrl: covers.coverUrl || covers.backdropPath || siteCover,
    link: movieLink(movie.id),
    description: buildListDescription(movie),
    releaseDate: movie.release_date || "",
    durationText: movie.duration ? movie.duration + " 分钟" : "",
    rating: Number(movie.score || 0) || 0,
    playerType: "system",
    videoId: movie.id,
  };
}

function buildListDescription(movie) {
  const parts = [];
  if (movie.release_date) parts.push(String(movie.release_date).slice(0, 10));
  if (movie.score) parts.push(Number(movie.score).toFixed(1) + "分");
  if (movie.can_play) parts.push("可播");
  if (movie.has_cnsub) parts.push("中字");
  if ((movie.magnets_count || 0) > 0) parts.push("磁链×" + movie.magnets_count);
  else if (movie.has_preview_video) parts.push("预告");
  return parts.join(" · ");
}

function parseDetailMeta(movie) {
  const genreItems = [];
  const peoples = [];
  const genreSeen = {};
  const peopleSeen = {};

  (movie.tags || []).forEach((tag) => {
    const name = typeof tag === "string" ? tag : tag.name;
    const tagId = typeof tag === "object" && tag ? String(tag.id || "").trim() : "";
    if (!name || genreSeen[name]) return;
    genreSeen[name] = true;
    const linkPath = tagId
      ? "/categories?q=" + encodeURIComponent(tagId) + "&page=1"
      : "/categories?q=" + encodeURIComponent(name) + "&page=1";
    genreItems.push({
      id: encodeLink(linkPath),
      title: translateTagLabel(name),
    });
  });

  (movie.actors || []).forEach((actor) => {
    if (!actor || !actor.name || peopleSeen[actor.id || actor.name]) return;
    peopleSeen[actor.id || actor.name] = true;
    peoples.push({
      id: encodeLink("/actors/" + (actor.id || actor.name) + "?page=1"),
      title: translateActorLabel(actor.name, actor.other_name),
      avatar: actor.avatar_url || "",
      role: "演员",
    });
  });

  if (movie.maker_name) {
    genreItems.push({
      id: encodeLink("/makers/" + (movie.maker_id || movie.maker_name) + "?page=1"),
      title: translateMakerLabel(movie.maker_name),
    });
  }
  if (movie.series_name) {
    genreItems.push({
      id: encodeLink("/series/" + (movie.series_id || movie.series_name) + "?page=1"),
      title: toSimplifiedChinese(movie.series_name),
    });
  }

  return { genreItems, peoples };
}

const RESOLVE_CACHE = {};
const RESOLVE_CACHE_TTL_OK_MS = 30 * 60 * 1000;
const RESOLVE_CACHE_TTL_MISS_MS = 15 * 60 * 1000;
const RESOLVE_STORAGE_PREFIX = "catemby.resolve.v1.";

function resolveCacheKey(code) {
  return String(code || "")
    .trim()
    .toUpperCase()
    .replace(/[\s_]+/g, "")
    .replace(/-+/g, "-");
}

function pickPrimaryResolveCode(code) {
  const raw = safeText(code);
  if (!raw) return "";
  // 站点只要规范番号（如 SAN-449）；无横杠变体会直接 invalid_code
  return raw.toUpperCase().replace(/[\s_]+/g, "").replace(/-+/g, "-");
}

function getCachedResolve(code) {
  const key = resolveCacheKey(code);
  if (!key) return undefined;
  const mem = RESOLVE_CACHE[key];
  if (mem) {
    const ttl = mem.ok ? RESOLVE_CACHE_TTL_OK_MS : RESOLVE_CACHE_TTL_MISS_MS;
    if (Date.now() - Number(mem.savedAt) <= ttl) return mem.ok ? mem.value : null;
    delete RESOLVE_CACHE[key];
  }
  try {
    const raw = Widget.storage.get(RESOLVE_STORAGE_PREFIX + key);
    if (!raw) return undefined;
    const entry = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!entry || !entry.savedAt) return undefined;
    const ttl = entry.ok ? RESOLVE_CACHE_TTL_OK_MS : RESOLVE_CACHE_TTL_MISS_MS;
    if (Date.now() - Number(entry.savedAt) > ttl) return undefined;
    RESOLVE_CACHE[key] = entry;
    return entry.ok ? entry.value : null;
  } catch (e) {
    return undefined;
  }
}

function setCachedResolve(code, value) {
  const key = resolveCacheKey(code);
  if (!key) return;
  const entry = { ok: !!value, value: value || null, savedAt: Date.now() };
  RESOLVE_CACHE[key] = entry;
  try {
    const url = value && value.sourceUrl ? String(value.sourceUrl) : "";
    // 超大 data: m3u8 只留内存缓存，避免撑爆 Widget.storage
    if (value && url.indexOf("data:") === 0 && url.length > 4096) return;
    Widget.storage.set(RESOLVE_STORAGE_PREFIX + key, JSON.stringify(entry));
  } catch (e) {}
}

// 供 loadResource / stream 使用：详情页不走这里
async function resolveFullVideo(code, lang) {
  if (!code) return null;
  const cached = getCachedResolve(code);
  if (cached !== undefined) return cached;

  const primary = pickPrimaryResolveCode(code);
  if (!primary) return null;

  const data = await siteGet("/api/v/resolve", { code: primary, lang: lang || "zh" }, { allowError: true });
  const picked = pickResolveVariant(data);
  if (picked) {
    setCachedResolve(code, picked);
    return picked;
  }
  if (data && (data.error === "video_not_found" || data.error === "invalid_code")) {
    setCachedResolve(code, null);
    return null;
  }
  return null;
}

function extractMovieId(link) {
  const parsed = parseLinkQuery(link);
  let raw = String(parsed.path || "").trim();
  if (raw.indexOf(LINK_PREFIX) === 0) raw = decodeLink(raw);
  raw = raw.replace(/^\//, "");
  const match = raw.match(/(?:^|\/)movie\/([^/?#]+)/i);
  if (match) return match[1];
  if (raw && raw.indexOf("/") < 0 && raw.indexOf("?") < 0) return raw;
  throw new Error("无效的影片链接: " + link);
}

function buildTrailers(movie, cover) {
  const trailers = [];
  const previewHls = movie.preview_video_url || "";
  const previewClip = buildPreviewClipUrl(movie.number);
  if (previewHls) {
    trailers.push({ coverUrl: cover, posterPath: cover, backdropPath: cover, image: cover, url: previewHls });
  }
  if (previewClip) {
    trailers.push({ coverUrl: cover, posterPath: cover, backdropPath: cover, image: cover, url: previewClip });
  }
  return trailers;
}

async function loadLatest(params) {
  try {
    params = params || {};
    const page = Number(params.page || params.from || 1);
    const filterBy = String(params.filter_by || "all");
    const data = await apiGet("/v1/movies/latest", { page, filter_by: filterBy });
    return enrichListMovies(data.movies || []);
  } catch (error) {
    console.error("[catemby] loadLatest 失败:", error.message || error);
    throw error;
  }
}

async function loadRecommend(params) {
  try {
    params = params || {};
    const data = await apiGet("/v1/movies/recommend");
    return enrichListMovies(data.movies || []);
  } catch (error) {
    console.error("[catemby] loadRecommend 失败:", error.message || error);
    throw error;
  }
}

async function loadRankings(params) {
  try {
    params = params || {};
    const period = normalizeRankPeriod(params.period);
    const mode = String(params.rank_mode || "playback").toLowerCase();
    let data = null;
    let lastError = null;

    if (mode === "top") {
      const typeCode = MOVIE_TYPE_CODE[params.movie_type || "censored"] || "0";
      try {
        data = await apiGet("/v1/rankings", { type: typeCode, period: period });
      } catch (error) {
        lastError = error;
      }
    } else {
      const filterBy = String(params.filter_by || "all");
      try {
        data = await apiGet("/v1/rankings/playback", { filter_by: filterBy, period: period });
      } catch (error) {
        lastError = error;
      }
    }

    if (!data) {
      const typeCode = MOVIE_TYPE_CODE[params.movie_type || params.filter_by || "censored"] || "0";
      try {
        data = await apiGet("/v1/rankings", { type: typeCode, period: period });
      } catch (error) {
        throw lastError || error;
      }
    }

    return enrichListMovies(data.movies || []);
  } catch (error) {
    console.error("[catemby] loadRankings 失败:", error.message || error);
    throw error;
  }
}

async function loadPage(params) {
  try {
    params = params || {};
    const ctx = resolveCategoryContext(params);
    if (!ctx.itemId) throw new Error("请选择分类项");

    const movieType = resolveMovieType(params.movie_type);

    // 标签（含主题/角色等）走 /v1/movies/tags 的 t 类型筛选，避免关键词搜索错位
    if (ctx.kind === "tags") {
      const filterBy = buildCategoryFilter("tags", ctx.itemId, movieType, params.list_filter || "all");
      let movies = await fetchCategoryMovies(filterBy, params);
      if (!movies.length && !/^[pmcsiv]$/i.test(String(ctx.itemId))) {
        const keyword = resolveCategorySearchKeyword("tags", ctx.itemId, params);
        movies = await fetchSearchMovies(keyword, params);
      }
      return enrichListMovies(movies, params);
    }

    if (shouldUseCategorySearch(movieType)) {
      const keyword = resolveCategorySearchKeyword(ctx.kind, ctx.itemId, params);
      const movies = await fetchSearchMovies(keyword, params);
      return enrichListMovies(movies, params);
    }

    const filterBy = buildCategoryFilter(ctx.kind, ctx.itemId, movieType, params.list_filter || "all");
    const movies = await fetchCategoryMovies(filterBy, params);
    if (!movies.length && ctx.kind === "makers") {
      const keyword = resolveCategorySearchKeyword(ctx.kind, ctx.itemId, params);
      const fallbackMovies = await fetchSearchMovies(keyword, params);
      return enrichListMovies(fallbackMovies, params);
    }
    return enrichListMovies(movies, params);
  } catch (error) {
    console.error("[catemby] loadPage 失败:", error.message || error);
    throw error;
  }
}

async function searchMovies(params) {
  try {
    params = params || {};
    const keyword = safeText(params.keyword);
    if (!keyword) {
      return [{ id: "tip", type: "text", title: "请输入关键词开始搜索" }];
    }
    const page = Number(params.page || params.from || 1);
    const data = await apiGet("/v2/search", { q: keyword, page, type: "movie" });
    return enrichListMovies(data.movies || []);
  } catch (error) {
    console.error("[catemby] searchMovies 失败:", error.message || error);
    throw error;
  }
}

async function searchGlobal(params) {
  return searchMovies(params);
}


/* ========================= Guangya storage / params ========================= */

var GUANGYA_TOKEN_ALIASES = [
  "guangya_token",
  "GUANGYA_REFRESH_TOKEN",
  "guangya_refresh_token",
  "guangyaRefreshToken",
  "refresh_token",
];
var GUANGYA_PARENT_ALIASES = [
  "guangya_parent_id",
  "GUANGYA_PARENT_ID",
  "guangyaParentId",
];
var CATEMBY_GY_GLOBAL_KEYS = [
  "guangya_token",
  "guangya_parent_id",
  "magnet_min_video_mb",
  "magnet_block_patterns",
];

function normalizeStoreValue(val) {
  if (val === undefined || val === null) return "";
  if (typeof val === "string") return val.trim();
  if (typeof val === "number" || typeof val === "boolean") return String(val).trim();
  if (typeof val === "object") {
    if (typeof val.value === "string" && val.value.trim()) return val.value.trim();
    if (typeof val.token === "string" && val.token.trim()) return val.token.trim();
    if (typeof val.refresh_token === "string" && val.refresh_token.trim()) return val.refresh_token.trim();
    if (typeof val.access_token === "string" && val.access_token.trim()) return val.access_token.trim();
    if (typeof val.then === "function") return "";
  }
  return "";
}

function scanGyRefreshToken(text) {
  var m = String(text || "").match(/gy\.[A-Za-z0-9_\-\.~+/=]{8,}/);
  return m ? m[0] : "";
}

function isPromiseLike(val) {
  return !!(val && typeof val === "object" && typeof val.then === "function");
}

async function unwrapStoreValue(val) {
  if (isPromiseLike(val)) {
    try {
      val = await val;
    } catch (e) {
      return "";
    }
  }
  return normalizeStoreValue(val);
}

function readStore(key) {
  try {
    return normalizeStoreValue(Widget.storage.get(key));
  } catch (e) {
    return "";
  }
}

async function readStoreAsync(key) {
  try {
    return await unwrapStoreValue(Widget.storage.get(key));
  } catch (e) {
    return "";
  }
}

function readStorageRaw(key) {
  try {
    var val = Widget.storage.get(key);
    if (isPromiseLike(val)) return null;
    return val;
  } catch (e) {
    return null;
  }
}

async function readStorageRawAsync(key) {
  try {
    var val = Widget.storage.get(key);
    if (isPromiseLike(val)) val = await val;
    return val;
  } catch (e) {
    return null;
  }
}

function coerceGlobalParamsBlob(raw) {
  if (raw === undefined || raw === null || raw === "") return null;
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
  if (typeof raw === "object" && !isPromiseLike(raw)) return raw;
  return null;
}

function writeStore(key, value) {
  try {
    Widget.storage.set(key, value);
  } catch (e) {}
}

async function writeStoreAsync(key, value) {
  try {
    var ret = Widget.storage.set(key, value);
    if (isPromiseLike(ret)) await ret;
  } catch (e) {}
}

function globalParamStorageKeys(name) {
  var widgetId = WidgetMetadata && WidgetMetadata.id ? String(WidgetMetadata.id) : "catemby_legacy";
  return [
    "catemby.global." + name,
    "javdb.global." + name,
    widgetId + ".global." + name,
    widgetId + ".globalParams." + name,
    "forward.javdb.global." + name,
    "global." + name,
    name,
  ];
}

function pickParamFromObject(obj, aliases) {
  if (!obj || typeof obj !== "object" || isPromiseLike(obj)) return "";
  if (Array.isArray(obj)) {
    for (var a = 0; a < aliases.length; a++) {
      var want = String(aliases[a] || "");
      if (!want) continue;
      for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (!item || typeof item !== "object") continue;
        var itemName = String(item.name || item.key || item.id || "").trim();
        if (itemName !== want) continue;
        var fromItem = normalizeStoreValue(
          item.value !== undefined ? item.value : item.val !== undefined ? item.val : item.data
        );
        if (fromItem) return fromItem;
      }
    }
    return "";
  }
  for (var j = 0; j < aliases.length; j++) {
    var key = aliases[j];
    if (obj[key] === undefined || obj[key] === null) continue;
    var val = normalizeStoreValue(obj[key]);
    if (val) return val;
  }
  return "";
}

function forwardGlobalParamsBlobKeys() {
  var widgetId = WidgetMetadata && WidgetMetadata.id ? String(WidgetMetadata.id) : "catemby_legacy";
  return [
    widgetId + ".globalParams",
    "forward.javdb.globalParams",
    widgetId + ".global",
    "javdb.globalParams",
    "catemby.globalParams",
    "globalParams",
  ];
}

function readForwardGlobalParamsBlobValue(name, aliases) {
  aliases = aliases || [name];
  var blobKeys = forwardGlobalParamsBlobKeys();
  for (var i = 0; i < blobKeys.length; i++) {
    try {
      var blob = coerceGlobalParamsBlob(readStorageRaw(blobKeys[i]));
      if (!blob) blob = coerceGlobalParamsBlob(readStore(blobKeys[i]));
      if (!blob) continue;
      var val = pickParamFromObject(blob, aliases);
      if (val) return val;
    } catch (e2) {}
  }
  return "";
}

async function readForwardGlobalParamsBlobValueAsync(name, aliases) {
  aliases = aliases || [name];
  var blobKeys = forwardGlobalParamsBlobKeys();
  for (var i = 0; i < blobKeys.length; i++) {
    try {
      var blob = coerceGlobalParamsBlob(await readStorageRawAsync(blobKeys[i]));
      if (!blob) blob = coerceGlobalParamsBlob(await readStoreAsync(blobKeys[i]));
      if (!blob) continue;
      var val = pickParamFromObject(blob, aliases);
      if (val) return val;
    } catch (e2) {}
  }
  return "";
}

function pickParamAliases(params, aliases) {
  params = params || {};
  var direct = pickParamFromObject(params, aliases);
  if (direct) return direct;
  direct = pickParamFromObject(params.global, aliases);
  if (direct) return direct;
  direct = pickParamFromObject(params.globalParams, aliases);
  if (direct) return direct;
  return "";
}

function readWidgetGlobalParamsValue(name, aliases) {
  aliases = aliases || [name];
  try {
    if (typeof Widget.getGlobalParams === "function") {
      var all = Widget.getGlobalParams();
      if (!isPromiseLike(all)) {
        var val = pickParamFromObject(all, aliases);
        if (val) return val;
      }
    }
    if (Widget.globalParams && !isPromiseLike(Widget.globalParams)) {
      var gpVal = pickParamFromObject(Widget.globalParams, aliases);
      if (gpVal) return gpVal;
    }
  } catch (e) {}
  return "";
}

async function readWidgetGlobalParamsValueAsync(name, aliases) {
  aliases = aliases || [name];
  try {
    if (typeof Widget.getGlobalParams === "function") {
      var all = Widget.getGlobalParams();
      if (isPromiseLike(all)) all = await all;
      var val = pickParamFromObject(all, aliases);
      if (val) return val;
    }
    var gp = Widget.globalParams;
    if (isPromiseLike(gp)) gp = await gp;
    var gpVal = pickParamFromObject(gp, aliases);
    if (gpVal) return gpVal;
  } catch (e) {}
  return "";
}

function collectGlobalParamStorageKeys(name, aliases) {
  var keys = [];
  var seen = {};
  var names = [name];
  for (var i = 0; i < (aliases || []).length; i++) {
    if (aliases[i] && names.indexOf(aliases[i]) < 0) names.push(aliases[i]);
  }
  for (var j = 0; j < names.length; j++) {
    var part = globalParamStorageKeys(names[j]);
    for (var k = 0; k < part.length; k++) {
      if (!seen[part[k]]) {
        seen[part[k]] = true;
        keys.push(part[k]);
      }
    }
  }
  return keys;
}

function resolveGlobalParamSync(name, params, aliases) {
  aliases = aliases || [name];
  var fromParams = pickParamAliases(params, aliases);
  if (fromParams) return fromParams;
  var fromWidget = readWidgetGlobalParamsValue(name, aliases);
  if (fromWidget) return fromWidget;
  var fromBlob = readForwardGlobalParamsBlobValue(name, aliases);
  if (fromBlob) return fromBlob;
  var keys = collectGlobalParamStorageKeys(name, aliases);
  for (var i = 0; i < keys.length; i++) {
    var stored = readStore(keys[i]);
    if (stored) return stored;
  }
  return "";
}

async function resolveGlobalParamAsync(name, params, aliases) {
  aliases = aliases || [name];
  var fromParams = pickParamAliases(params, aliases);
  if (fromParams) return fromParams;
  var fromWidget = await readWidgetGlobalParamsValueAsync(name, aliases);
  if (fromWidget) return fromWidget;
  var fromBlob = await readForwardGlobalParamsBlobValueAsync(name, aliases);
  if (fromBlob) return fromBlob;
  var keys = collectGlobalParamStorageKeys(name, aliases);
  for (var i = 0; i < keys.length; i++) {
    var stored = await readStoreAsync(keys[i]);
    if (stored) return stored;
  }
  return "";
}

function normalizeGuangyaToken(raw) {
  var token = normalizeStoreValue(raw);
  if (!token) return "";
  var scanned = scanGyRefreshToken(token);
  return scanned || token;
}

function resolveGuangyaTokenSync(params) {
  params = params || {};
  return normalizeGuangyaToken(
    pickParamAliases(params, GUANGYA_TOKEN_ALIASES) ||
      params.guangya_token ||
      resolveGlobalParamSync("guangya_token", params, GUANGYA_TOKEN_ALIASES)
  );
}

function extractGuangyaTokenFromUnknown(val) {
  var direct = normalizeGuangyaToken(val);
  if (direct) return direct;
  if (typeof val === "string") return normalizeGuangyaToken(scanGyRefreshToken(val));
  if (!val || typeof val !== "object" || isPromiseLike(val)) return "";
  var picked = pickParamFromObject(val, GUANGYA_TOKEN_ALIASES);
  if (picked) return normalizeGuangyaToken(picked);
  try {
    return normalizeGuangyaToken(scanGyRefreshToken(JSON.stringify(val)));
  } catch (e) {
    return "";
  }
}

async function discoverGuangyaTokenAsync(params) {
  params = params || {};
  var found = normalizeGuangyaToken(
    pickParamAliases(params, GUANGYA_TOKEN_ALIASES) || (await unwrapStoreValue(params.guangya_token))
  );
  if (found) return found;
  found = extractGuangyaTokenFromUnknown(params);
  if (found) return found;
  found = normalizeGuangyaToken(await readWidgetGlobalParamsValueAsync("guangya_token", GUANGYA_TOKEN_ALIASES));
  if (found) return found;
  try {
    if (typeof Widget.getGlobalParams === "function") {
      var all = Widget.getGlobalParams();
      if (isPromiseLike(all)) all = await all;
      found = extractGuangyaTokenFromUnknown(all);
      if (found) return found;
    }
    var gp = Widget.globalParams;
    if (isPromiseLike(gp)) gp = await gp;
    found = extractGuangyaTokenFromUnknown(gp);
    if (found) return found;
  } catch (e) {}
  found = normalizeGuangyaToken(await readForwardGlobalParamsBlobValueAsync("guangya_token", GUANGYA_TOKEN_ALIASES));
  if (found) return found;
  var blobKeys = forwardGlobalParamsBlobKeys();
  for (var i = 0; i < blobKeys.length; i++) {
    found = extractGuangyaTokenFromUnknown(await readStorageRawAsync(blobKeys[i]));
    if (found) return found;
  }
  var keys = collectGlobalParamStorageKeys("guangya_token", GUANGYA_TOKEN_ALIASES);
  for (var j = 0; j < keys.length; j++) {
    found = normalizeGuangyaToken(await readStoreAsync(keys[j]));
    if (found) return found;
  }
  try {
    var session = await readGuangyaSessionAsync();
    if (session && session.refreshToken) return session.refreshToken;
  } catch (e2) {}
  return "";
}

async function resolveGuangyaTokenAsync(params) {
  params = params || {};
  if (isPromiseLike(params)) {
    try {
      params = await params;
    } catch (e) {
      params = {};
    }
  }
  var uiToken = await discoverGuangyaTokenAsync(params);
  if (!uiToken) {
    params = await ensureGlobalParams(params);
    uiToken = await discoverGuangyaTokenAsync(params);
  }
  var live = uiToken;
  try {
    live = pickLiveGuangyaRefreshToken(uiToken, await readGuangyaSessionAsync()) || uiToken;
  } catch (e3) {}
  if (live) {
    params.guangya_token = live;
    persistGlobalParam("guangya_token", live);
    await persistGlobalParamAsync("guangya_token", live);
  }
  return live;
}

function persistGlobalParam(name, value) {
  value = normalizeStoreValue(value);
  if (!value) return;
  writeStore("catemby.global." + name, value);
  writeStore("javdb.global." + name, value);
}

async function persistGlobalParamAsync(name, value) {
  value = normalizeStoreValue(value);
  if (!value) return;
  writeStore("catemby.global." + name, value);
  writeStore("javdb.global." + name, value);
  await writeStoreAsync("catemby.global." + name, value);
  await writeStoreAsync("javdb.global." + name, value);
}

function syncParams(params) {
  params = params || {};
  var out = {};
  for (var i = 0; i < CATEMBY_GY_GLOBAL_KEYS.length; i++) {
    var key = CATEMBY_GY_GLOBAL_KEYS[i];
    var aliases =
      key === "guangya_token"
        ? GUANGYA_TOKEN_ALIASES
        : key === "guangya_parent_id"
          ? GUANGYA_PARENT_ALIASES
          : [key];
    var val = params[key];
    if (val !== undefined && val !== null && String(val).trim() !== "") {
      var normalized = normalizeStoreValue(val);
      if (normalized) {
        out[key] = key === "guangya_token" ? normalizeGuangyaToken(normalized) : normalized;
        if (key !== "guangya_token") persistGlobalParam(key, out[key]);
      } else {
        var storedVal = resolveGlobalParamSync(key, params, aliases);
        if (storedVal) out[key] = storedVal;
      }
    } else {
      var stored = resolveGlobalParamSync(key, params, aliases);
      if (stored) out[key] = stored;
    }
  }
  var gyToken = normalizeGuangyaToken(
    pickParamAliases(params, GUANGYA_TOKEN_ALIASES) ||
      out.guangya_token ||
      resolveGlobalParamSync("guangya_token", params, GUANGYA_TOKEN_ALIASES)
  );
  if (gyToken) out.guangya_token = gyToken;
  var gyParent =
    pickParamAliases(params, GUANGYA_PARENT_ALIASES) ||
    out.guangya_parent_id ||
    resolveGlobalParamSync("guangya_parent_id", params, GUANGYA_PARENT_ALIASES);
  if (gyParent) {
    out.guangya_parent_id = gyParent;
    persistGlobalParam("guangya_parent_id", gyParent);
  }
  return Object.assign({}, params, out);
}

async function ensureGlobalParams(params) {
  if (isPromiseLike(params)) {
    try {
      params = await params;
    } catch (e) {
      params = {};
    }
  }
  params = syncParams(params || {});
  for (var i = 0; i < CATEMBY_GY_GLOBAL_KEYS.length; i++) {
    var key = CATEMBY_GY_GLOBAL_KEYS[i];
    var aliases =
      key === "guangya_token"
        ? GUANGYA_TOKEN_ALIASES
        : key === "guangya_parent_id"
          ? GUANGYA_PARENT_ALIASES
          : [key];
    var current = await unwrapStoreValue(params[key]);
    if (!current) current = await resolveGlobalParamAsync(key, params, aliases);
    if (key === "guangya_token") {
      current = normalizeGuangyaToken(current);
      if (!current) {
        try {
          current = await discoverGuangyaTokenAsync(params);
        } catch (e) {}
      }
      try {
        current = pickLiveGuangyaRefreshToken(current, await readGuangyaSessionAsync()) || current;
      } catch (e2) {}
    }
    if (current) {
      params[key] = current;
      persistGlobalParam(key, current);
    }
  }
  return params;
}

function parseApiPayload(resp) {
  if (!resp || resp.data === undefined || resp.data === null) return null;
  if (typeof resp.data === "string") {
    var text = resp.data.trim();
    if (!text) return null;
    return JSON.parse(text);
  }
  return resp.data;
}

function formatMagnetSize(mb) {
  var n = Number(mb || 0);
  if (!Number.isFinite(n) || n <= 0) return "";
  if (n >= 1024) {
    var gb = n / 1024;
    return gb.toFixed(gb >= 10 ? 1 : 2) + " GB";
  }
  if (n >= 10) return Math.round(n) + " MB";
  return (Math.round(n * 10) / 10) + " MB";
}

/* ========================= 光鸭磁力转存 ========================= */

var GUANGYA_ACCOUNT_URL = "https://account.guangyapan.com";
var GUANGYA_API_BASE = "https://api.guangyapan.com";
var GUANGYA_SITE = "https://www.guangyapan.com";
var GUANGYA_CLIENT_ID = "aMe-8VSlkrbQXpUR";
var GUANGYA_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1";
var MAGNET_LINK_PREFIX = "gy:";
var MAGNET_STORE_PREFIX = "catemby.magnet.v1.";
var GUANGYA_ACCESS_STORE = "javdb.guangya.access.v1";
var GUANGYA_DID_STORE = "javdb.guangya.did.v1";
var _gyTokenRefreshInflight = null;
var GY_VIDEO_EXTS = {
  mp4: 1,
  mkv: 1,
  avi: 1,
  wmv: 1,
  mov: 1,
  m4v: 1,
  ts: 1,
  flv: 1,
  rmvb: 1,
  webm: 1,
  "3gp": 1,
};
var GY_DEFAULT_BLOCK_PATTERNS = [
  "广告|推广|宣传|加群|更多资源|最新地址|影视大站|草榴|91porn|91\\.tv|1024\\.org|1024la|直播|社[區区]|情[報报]|信誉|uu美少女",
  "(?:^|[/\\\\_.\\-\\s])(?:sample|preview|trailer|预告|预览|样片|精彩花絮)(?:[/\\\\_.\\-\\s]|\\.|$)",
  "\\.(txt|url|nfo|htm|html|jpg|jpeg|png|gif|exe|apk|torrent)$",
];
var GY_AUTO_INDEX = 10000;

function gyRandomHex(len) {
  var out = "";
  for (var i = 0; i < len; i++) out += ((Math.random() * 16) | 0).toString(16);
  return out;
}

async function ensureGuangyaDeviceId() {
  var id = String((await readStoreAsync(GUANGYA_DID_STORE)) || readStore(GUANGYA_DID_STORE) || "")
    .trim()
    .toLowerCase();
  if (id) return id;
  id = gyRandomHex(16);
  writeStore(GUANGYA_DID_STORE, id);
  await writeStoreAsync(GUANGYA_DID_STORE, id);
  return id;
}

function getGuangyaConfigFromStore(params) {
  params = syncParams(params || {});
  var token = resolveGuangyaTokenSync(params);
  var parentId =
    params.guangya_parent_id ||
    resolveGlobalParamSync("guangya_parent_id", params, GUANGYA_PARENT_ALIASES) ||
    "";
  if (parentId) persistGlobalParam("guangya_parent_id", parentId);
  return {
    guangya_token: token,
    guangya_parent_id: parentId,
    magnet_filter: "1",
    magnet_video_only: "1",
    magnet_min_video_mb: readStore("catemby.global.magnet_min_video_mb") || readStore("javdb.global.magnet_min_video_mb") || "0",
    magnet_block_patterns: readStore("catemby.global.magnet_block_patterns") || readStore("javdb.global.magnet_block_patterns") || "",
  };
}

async function getGuangyaConfig(params) {
  params = await ensureGlobalParams(params || {});
  var token = await resolveGuangyaTokenAsync(params);
  var parentId =
    normalizeStoreValue(params.guangya_parent_id) ||
    (await resolveGlobalParamAsync("guangya_parent_id", params, GUANGYA_PARENT_ALIASES));
  if (parentId) persistGlobalParam("guangya_parent_id", parentId);
  return {
    guangya_token: token,
    guangya_parent_id: parentId,
    magnet_filter: "1",
    magnet_video_only: "1",
    magnet_min_video_mb:
      (await readStoreAsync("catemby.global.magnet_min_video_mb")) || readStore("catemby.global.magnet_min_video_mb") || readStore("javdb.global.magnet_min_video_mb") || "0",
    magnet_block_patterns:
      (await readStoreAsync("catemby.global.magnet_block_patterns")) ||
      readStore("catemby.global.magnet_block_patterns") || readStore("javdb.global.magnet_block_patterns") ||
      "",
  };
}

function buildMagnetUrl(hash) {
  hash = String(hash || "").trim();
  if (!hash) return "";
  return "magnet:?xt=urn:btih:" + hash;
}

function magnetStoreKey(hash) {
  return MAGNET_STORE_PREFIX + String(hash || "").trim().toLowerCase();
}

function cacheMagnetEntry(hash, data) {
  hash = String(hash || "").trim().toLowerCase();
  if (!hash) return;
  try {
    writeStore(magnetStoreKey(hash), JSON.stringify(Object.assign({ savedAt: Date.now() }, data || {})));
  } catch (e) {}
}

function loadMagnetEntry(hash) {
  hash = String(hash || "").trim().toLowerCase();
  if (!hash) return null;
  try {
    var raw = readStore(magnetStoreKey(hash));
    if (!raw) return null;
    return typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (e) {
    return null;
  }
}

function stripCodeFromMagnetName(name, code) {
  name = safeText(name);
  code = safeText(code).toUpperCase();
  if (!name || !code) return name;
  var escaped = code.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  var stripped = name.replace(new RegExp("^" + escaped + "[\\s._@\\-]*", "i"), "");
  stripped = safeText(stripped.replace(/^[@._\\-]+/, ""));
  return stripped || name;
}

/* ========================= 短评磁力解析 ========================= */

function decodeMagnetSegment(raw) {
  try {
    return decodeURIComponent(String(raw || "").replace(/\+/g, " "));
  } catch (e) {
    return String(raw || "");
  }
}

function extractMagnetHash(magnet) {
  var text = decodeMagnetSegment(String(magnet || ""));
  var m = text.match(/(?:^|[?&])xt=urn:btih:([0-9a-fA-F]{40}|[0-9a-zA-Z]{32,40})/i);
  if (m) return m[1].toLowerCase();
  m = text.match(/btih:([0-9a-fA-F]{40}|[0-9a-zA-Z]{32,40})/i);
  return m ? m[1].toLowerCase() : "";
}

function parseMagnetSizeMb(text) {
  text = String(text || "");
  var m = text.match(/(\d+(?:\.\d+)?)\s*(TB|GB|G|MB|M|KB|K)\b/i);
  if (!m) return 0;
  var n = Number(m[1]);
  if (!Number.isFinite(n) || n <= 0) return 0;
  var unit = m[2].toUpperCase();
  if (unit === "TB") return n * 1024 * 1024;
  if (unit === "GB" || unit === "G") return n * 1024;
  if (unit === "MB" || unit === "M") return n;
  if (unit === "KB" || unit === "K") return n / 1024;
  return 0;
}

function parseMagnetSizeFromUri(magnet) {
  var m = String(magnet || "").match(/(?:^|[?&])xl=(\d+)/i);
  if (!m) return 0;
  var bytes = Number(m[1]);
  if (!Number.isFinite(bytes) || bytes <= 0) return 0;
  return bytes / (1024 * 1024);
}

function parseMagnetFlags(text) {
  text = String(text || "");
  return {
    cnsub: /字幕|中字|中文|cnsub|chs|subbed/i.test(text),
    hd: /\bHD\b|1080|720p|2160|4K|4k|UHD/i.test(text),
    uhd: /\b4K\b|2160|UHD/i.test(text),
    uncensored: /破解|流出|无码|uncensored|uncen|-uc\b|leak/i.test(text),
  };
}

function trimMagnetUri(raw) {
  return String(raw || "")
    .replace(/[)\]}>,.;。，、！!？?]+$/g, "")
    .replace(/\\+$/, "")
    .trim();
}

function extractMagnetsFromText(text) {
  var results = [];
  var src = String(text || "");
  if (!src || src.toLowerCase().indexOf("magnet:") < 0) return results;
  var re = /magnet:\?[^\s<>"'\u0000-\u001f]+/gi;
  var match;
  while ((match = re.exec(src)) !== null) {
    var magnet = trimMagnetUri(match[0]);
    if (!/^magnet:\?/i.test(magnet)) continue;
    var hash = extractMagnetHash(magnet);
    if (!hash) continue;
    var start = Math.max(0, match.index - 160);
    var end = Math.min(src.length, match.index + magnet.length + 160);
    results.push({
      magnet: magnet,
      hash: hash,
      context: src.slice(start, end),
    });
  }
  return results;
}

function reviewTextFromItem(item) {
  if (!item || typeof item !== "object") return "";
  var keys = ["body", "content", "text", "review", "comment", "message", "description"];
  for (var i = 0; i < keys.length; i++) {
    var val = item[keys[i]];
    if (typeof val === "string" && val.trim()) return val;
  }
  return "";
}

function parseMagnetDisplayName(magnet, context, code) {
  var dnMatch = String(magnet || "").match(/(?:^|[?&])dn=([^&]+)/i);
  if (dnMatch) {
    var dn = safeText(decodeMagnetSegment(dnMatch[1]));
    var cleaned = stripCodeFromMagnetName(dn, code);
    if (cleaned && cleaned.toUpperCase() !== safeText(code).toUpperCase()) return cleaned;
    if (dn && (!code || dn.toUpperCase() !== safeText(code).toUpperCase())) return dn;
  }
  var ctx = safeText(
    String(context || "")
      .replace(magnet, "")
      .replace(/magnet:\?[^\s<>"']+/gi, " ")
      .replace(/\s+/g, " ")
  );
  ctx = stripCodeFromMagnetName(ctx, code);
  if (ctx && ctx.length <= 80 && ctx.toUpperCase() !== safeText(code).toUpperCase()) return ctx;
  return "短评分享";
}

function magnetsFromReviews(reviews, code) {
  var out = [];
  var seen = {};
  (reviews || []).forEach(function (review) {
    extractMagnetsFromText(reviewTextFromItem(review)).forEach(function (entry) {
      if (seen[entry.hash]) return;
      seen[entry.hash] = true;
      var flags = parseMagnetFlags(entry.context + " " + entry.magnet);
      var sizeMb = parseMagnetSizeMb(entry.context) || parseMagnetSizeFromUri(entry.magnet);
      out.push({
        hash: entry.hash,
        name: parseMagnetDisplayName(entry.magnet, entry.context, code),
        size: sizeMb,
        cnsub: flags.cnsub,
        hd: flags.hd,
        uncensored: flags.uncensored,
        source: "review",
        magnet: entry.magnet,
      });
    });
  });
  return out;
}

async function fetchMovieReviews(movieId, params, options) {
  options = options || {};
  var page = Number(options.page || 1) || 1;
  var limit = Number(options.limit || 20) || 20;
  var maxPages = Number(options.maxPages || 5) || 5;

  async function fetchReviewPage(pageNumber) {
    try {
      var data = await apiGet(
        "/v1/movies/" + movieId + "/reviews",
        { page: pageNumber, limit: limit },
        params
      );
      var list = (data && (data.reviews || data.comments || data.list || data.items)) || [];
      return Array.isArray(list) ? list : [];
    } catch (e) {
      return [];
    }
  }

  var firstPage = await fetchReviewPage(page);
  if (!firstPage.length || firstPage.length < limit || maxPages <= 1) return firstPage;

  // 后续短评页彼此独立，并发获取，避免详情页为 5 页短评逐页串行等待。
  var tasks = [];
  for (var p = page + 1; p < page + maxPages; p++) tasks.push(fetchReviewPage(p));
  var pages = await Promise.all(tasks);
  var all = firstPage.slice();
  for (var i = 0; i < pages.length; i++) {
    if (pages[i].length) all = all.concat(pages[i]);
  }
  return all;
}

/* ========================= Sukebei 磁力（对齐可视化版） ========================= */

var SUKEBEI_BASE = "https://sukebei.nyaa.si";
var SUKEBEI_CACHE_TTL = 3600 * 1000;
var SUKEBEI_CACHE_PREFIX = "catemby.sukebei.v1.";
var SUKEBEI_MAX_RESULTS = 12;

function extractSukebeiInfoHash(href) {
  var m = String(href || "").match(/btih:([a-fA-F0-9]{40}|[a-zA-Z0-9]{32})/i);
  return m ? m[1].toLowerCase() : "";
}

function simpleSukebeiHash(text) {
  var h = 0;
  var s = String(text || "");
  for (var i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return "h" + Math.abs(h).toString(36);
}

function extractSukebeiTags(title) {
  var text = String(title || "");
  var tags = [];
  if (/(?:[^A-Za-z]|^)FHDC|[-_]CH?(?:[^A-Za-z]|$)|中字|中文|字幕/i.test(text)) tags.push("cnsub");
  if (/\bHD\b|1080|720p|2160/i.test(text)) tags.push("hd");
  if (/\b4K\b/i.test(text)) tags.push("4k");
  if (/破解|流出|无码|uncensored|uncen|-uc\b|leak/i.test(text)) tags.push("uncensored");
  return tags;
}

function parseSukebeiSizeBytes(text) {
  var m = String(text || "")
    .replace(/,/g, "")
    .match(/([\d.]+)\s*(GiB|MiB|KiB|GB|MB|KB|B)?/i);
  if (!m) return 0;
  var n = parseFloat(m[1]);
  if (!Number.isFinite(n) || n <= 0) return 0;
  var unit = String(m[2] || "B").toUpperCase();
  var map = { GIB: 1 << 30, MIB: 1 << 20, KIB: 1 << 10, GB: 1 << 30, MB: 1 << 20, KB: 1 << 10, B: 1 };
  return n * (map[unit] || 1);
}

function scoreSukebeiCandidate(item) {
  var score = 0;
  var tags = (item && item.tags) || [];
  if (tags.indexOf("cnsub") >= 0) score += 100;
  if (tags.indexOf("hd") >= 0) score += 20;
  if (tags.indexOf("4k") >= 0) score += 10;
  if (tags.indexOf("uncensored") >= 0) score += 30;
  if (item && item.sizeBytes) {
    var gb = item.sizeBytes / (1 << 30);
    if (gb >= 0.3 && gb <= 15) score += 20;
    if (gb > 30) score -= 50;
  }
  return score;
}

function sukebeiCacheKey(keyword) {
  return SUKEBEI_CACHE_PREFIX + String(keyword || "").trim().toLowerCase();
}

function loadSukebeiCache(keyword) {
  try {
    var raw = readStore(sukebeiCacheKey(keyword));
    if (!raw) return null;
    var entry = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!entry || !entry.time || !Array.isArray(entry.items)) return null;
    if (Date.now() - Number(entry.time) > SUKEBEI_CACHE_TTL) return null;
    return entry.items;
  } catch (e) {
    return null;
  }
}

function saveSukebeiCache(keyword, items) {
  if (!items || !items.length) return;
  try {
    writeStore(
      sukebeiCacheKey(keyword),
      JSON.stringify({ time: Date.now(), items: items })
    );
  } catch (e) {}
}

function parseSukebeiHtmlWithWidget(html) {
  var out = [];
  if (!Widget.html || typeof Widget.html.load !== "function") return out;
  try {
    var $ = Widget.html.load(html);
    $("tr.default, tr.success").each(function () {
      var titleEl = $(this).find("td:nth-child(2) > a:nth-child(1)");
      var magnetEl = $(this).find("td:nth-child(3) > a:last-child");
      var sizeEl = $(this).find("td:nth-child(4)");
      var title = String(titleEl.attr("title") || titleEl.text() || "").trim();
      var maglink = String(magnetEl.attr("href") || "").trim();
      var sizeText = String(sizeEl.text() || "").trim();
      if (!title || !maglink) return;
      if (!/^magnet:/i.test(maglink)) return;
      var infoHash = extractSukebeiInfoHash(maglink) || simpleSukebeiHash(maglink);
      var tags = extractSukebeiTags(title);
      out.push({
        title: title,
        maglink: maglink,
        size: sizeText,
        sizeBytes: parseSukebeiSizeBytes(sizeText),
        infoHash: infoHash,
        source: "sukebei",
        tags: tags,
      });
    });
  } catch (e) {}
  return out;
}

function parseSukebeiHtmlFallback(html) {
  var out = [];
  var src = String(html || "");
  if (!src) return out;
  var rowRe = /<tr[^>]*class="[^"]*(?:default|success)[^"]*"[^>]*>([\s\S]*?)<\/tr>/gi;
  var row;
  while ((row = rowRe.exec(src)) !== null) {
    var block = row[1] || "";
    var titleMatch =
      block.match(/<a[^>]*title="([^"]+)"[^>]*>/i) ||
      block.match(/<td[^>]*>\s*<a[^>]*>([^<]+)<\/a>/i);
    var magnetMatch = block.match(/href="(magnet:\?[^"]+)"/i);
    var sizeMatch = block.match(/<td[^>]*>\s*([\d.,]+\s*(?:GiB|MiB|KiB|GB|MB|KB|B)?)\s*<\/td>/i);
    var title = safeText(titleMatch ? titleMatch[1] : "");
    var maglink = magnetMatch ? trimMagnetUri(magnetMatch[1]) : "";
    if (!title || !maglink) continue;
    var infoHash = extractSukebeiInfoHash(maglink) || simpleSukebeiHash(maglink);
    var sizeText = sizeMatch ? String(sizeMatch[1]).trim() : "";
    var tags = extractSukebeiTags(title);
    out.push({
      title: title,
      maglink: maglink,
      size: sizeText,
      sizeBytes: parseSukebeiSizeBytes(sizeText),
      infoHash: infoHash,
      source: "sukebei",
      tags: tags,
    });
  }
  return out;
}

async function searchMagnetSukebei(keyword) {
  var q = String(keyword || "").trim();
  if (!q) return [];
  var cached = loadSukebeiCache(q);
  if (cached) return cached;

  var url = SUKEBEI_BASE + "/?f=0&c=0_0&q=" + encodeURIComponent(q);
  var resp;
  try {
    resp = await Widget.http.get(url, {
      timeout: 8000,
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": UA,
      },
    });
  } catch (e) {
    console.log("[magnet:sukebei] request failed:", (e && e.message) || e);
    return [];
  }
  if (!resp || resp.data === undefined || resp.data === null) {
    console.log("[magnet:sukebei] no response");
    return [];
  }
  var html = typeof resp.data === "string" ? resp.data : String(resp.data);
  var list = parseSukebeiHtmlWithWidget(html);
  if (!list.length) list = parseSukebeiHtmlFallback(html);
  list.sort(function (a, b) {
    return scoreSukebeiCandidate(b) - scoreSukebeiCandidate(a);
  });
  if (list.length > SUKEBEI_MAX_RESULTS) list = list.slice(0, SUKEBEI_MAX_RESULTS);
  console.log("[magnet:sukebei] result count:", list.length);
  saveSukebeiCache(q, list);
  return list;
}

function magnetsFromSukebei(candidates, code) {
  var out = [];
  var seen = {};
  (candidates || []).forEach(function (item) {
    if (!item) return;
    var magnet = String(item.maglink || item.magnet || "").trim();
    if (!/^magnet:/i.test(magnet)) return;
    var hash = String(item.infoHash || extractSukebeiInfoHash(magnet) || "").trim().toLowerCase();
    if (!hash || seen[hash]) return;
    seen[hash] = true;
    var tags = item.tags || extractSukebeiTags(item.title || "");
    var sizeMb = 0;
    if (item.sizeBytes > 0) sizeMb = item.sizeBytes / (1024 * 1024);
    else sizeMb = parseMagnetSizeMb(item.size || "") || parseMagnetSizeFromUri(magnet);
    out.push({
      hash: hash,
      name: safeText(item.title || code || hash),
      size: sizeMb,
      sizeText: safeText(item.size || ""),
      cnsub: tags.indexOf("cnsub") >= 0,
      hd: tags.indexOf("hd") >= 0 || tags.indexOf("4k") >= 0,
      uhd: tags.indexOf("4k") >= 0,
      uncensored: tags.indexOf("uncensored") >= 0,
      source: "sukebei",
      sources: ["sukebei"],
      magnet: magnet,
    });
  });
  return out;
}

function formatMagnetSourceHint(source) {
  if (source === "review") return "磁力: 见下方磁力栏（短评），点击转存光鸭";
  if (source === "sukebei") return "磁力: 见下方磁力栏（Sukebei），点击转存光鸭";
  if (source === "mixed") return "磁力: 见下方磁力栏（多源已合并），点击转存光鸭";
  if (source === "api") return "磁力: 见下方磁力栏（JavDB），点击转存光鸭";
  return "磁力: 见下方磁力栏，点击转存光鸭";
}

async function fetchDetailMagnets(movieId, params, code) {
  // 三个来源互不依赖；并发请求，详情耗时取最慢单项而不是三项之和。
  var apiTask = apiGet("/v1/movies/" + movieId + "/magnets", null, params)
    .then(function (data) {
      return (data && data.magnets) || [];
    })
    .catch(function () {
      return [];
    });
  var reviewTask = fetchMovieReviews(movieId, params, { page: 1, limit: 20, maxPages: 5 })
    .catch(function () {
      return [];
    });
  var sukebeiTask = code
    ? searchMagnetSukebei(code).catch(function (eSuk) {
        console.log("[magnet:sukebei] merge failed:", (eSuk && eSuk.message) || eSuk);
        return [];
      })
    : Promise.resolve([]);

  var results = await Promise.all([apiTask, reviewTask, sukebeiTask]);
  var apiMagnets = results[0] || [];
  var reviews = results[1] || [];
  var reviewMagnets = magnetsFromReviews(reviews, code);
  var sukebeiMagnets = magnetsFromSukebei(results[2] || [], code);
  var merged = mergeAndDedupeMagnets(apiMagnets, reviewMagnets, code, sukebeiMagnets);
  var source = "";
  var parts = [];
  if (apiMagnets.length) parts.push("api");
  if (reviewMagnets.length) parts.push("review");
  if (sukebeiMagnets.length) parts.push("sukebei");
  if (parts.length > 1) source = "mixed";
  else if (parts[0] === "api") source = "api";
  else if (parts[0] === "review") source = "review";
  else if (parts[0] === "sukebei") source = "sukebei";
  return { magnets: merged, source: source, reviews: reviews };
}

/** 短评写入详情简介（对齐可视化：按点赞排序取前 15） */
function formatDetailReviewsForDescription(reviews) {
  var list = (reviews || [])
    .filter(function (item) {
      return item && (item.content || reviewTextFromItem(item));
    })
    .sort(function (a, b) {
      return (Number(b.likes_count) || 0) - (Number(a.likes_count) || 0);
    })
    .slice(0, 15);
  if (!list.length) return "";
  var parts = ["── 短评 ──"];
  for (var i = 0; i < list.length; i++) {
    var text = safeText(list[i].content || reviewTextFromItem(list[i]));
    if (text) parts.push(text);
  }
  return parts.length > 1 ? parts.join("\n\n") : "";
}

function normalizeMagnetSourceKey(source) {
  var key = String(source || "api").toLowerCase();
  if (key === "javdb") return "api";
  if (key === "api" || key === "review" || key === "sukebei" || key === "mixed") return key;
  return "api";
}

function normalizeMagnetEntry(raw, code, source) {
  raw = raw || {};
  var magnet = raw.magnet || raw.maglink || (raw.hash ? buildMagnetUrl(raw.hash) : "");
  var hash = String(raw.hash || extractMagnetHash(magnet) || "").trim().toLowerCase();
  if (!hash) return null;
  var name = safeText(raw.name || raw.title || hash);
  var text = name + " " + safeText(raw.description || "") + " " + safeText(raw.sizeText || "");
  var flags = parseMagnetFlags(text + " " + magnet);
  var sizeMb = Number(raw.size || 0);
  if (!Number.isFinite(sizeMb) || sizeMb <= 0) sizeMb = parseMagnetSizeFromUri(magnet);
  if (!sizeMb) sizeMb = parseMagnetSizeMb(text);
  var src = normalizeMagnetSourceKey(source || raw.source || "api");
  var sources =
    Array.isArray(raw.sources) && raw.sources.length
      ? raw.sources.map(normalizeMagnetSourceKey)
      : [src];
  if (sources.indexOf(src) === -1) sources.push(src);
  return {
    hash: hash,
    name: name,
    size: sizeMb,
    sizeText: safeText(raw.sizeText || ""),
    date: safeText(raw.date || raw.release_date || ""),
    seeders: Number(raw.seeders || 0) || 0,
    files_count: Number(raw.files_count || raw.files || 0) || 0,
    cnsub: !!(raw.cnsub || flags.cnsub),
    hd: !!(raw.hd || flags.hd || raw.uhd || flags.uhd),
    uhd: !!(raw.uhd || flags.uhd),
    uncensored: !!(raw.uncensored || flags.uncensored),
    source: src,
    sources: sources,
    magnet: magnet || buildMagnetUrl(hash),
  };
}

function magnetTagScore(m) {
  var score = 0;
  if (m && m.uncensored) score += 1000;
  if (m && m.cnsub) score += 100;
  if (m && m.uhd) score += 30;
  else if (m && m.hd) score += 10;
  score += Math.min(Number((m && m.seeders) || 0), 80) / 10;
  return score;
}

function compareMagnetPriority(a, b) {
  var tagDiff = magnetTagScore(a) - magnetTagScore(b);
  if (tagDiff !== 0) return tagDiff;
  return Number(a.size || 0) - Number(b.size || 0);
}

function magnetGbBucket(sizeMb) {
  var mb = Number(sizeMb || 0);
  if (!Number.isFinite(mb) || mb <= 0) return "unknown";
  var gb = mb / 1024;
  if (gb < 1) return "0";
  return String(Math.floor(gb));
}

function mergeMagnetCandidateMeta(preferred, other) {
  if (!preferred) return other;
  if (!other) return preferred;
  var sources = [];
  var seen = {};
  []
    .concat(preferred.sources || [preferred.source], other.sources || [other.source])
    .forEach(function (key) {
      key = normalizeMagnetSourceKey(key);
      if (!seen[key]) {
        seen[key] = true;
        sources.push(key);
      }
    });
  preferred.sources = sources;
  preferred.source = sources.length > 1 ? "mixed" : sources[0] || preferred.source;
  if (!preferred.name || preferred.name === preferred.hash) preferred.name = other.name || preferred.name;
  if (!(Number(preferred.size) > 0) && Number(other.size) > 0) preferred.size = other.size;
  if (!preferred.sizeText && other.sizeText) preferred.sizeText = other.sizeText;
  if (!preferred.date && other.date) preferred.date = other.date;
  if (!(Number(preferred.seeders) > 0) && Number(other.seeders) > 0) preferred.seeders = other.seeders;
  if (!(Number(preferred.files_count) > 0) && Number(other.files_count) > 0) {
    preferred.files_count = other.files_count;
  }
  preferred.cnsub = !!(preferred.cnsub || other.cnsub);
  preferred.hd = !!(preferred.hd || other.hd || preferred.uhd || other.uhd);
  preferred.uhd = !!(preferred.uhd || other.uhd);
  preferred.uncensored = !!(preferred.uncensored || other.uncensored);
  if ((!preferred.magnet || preferred.magnet.length < 20) && other.magnet) preferred.magnet = other.magnet;
  return preferred;
}

function pickBetterMagnet(current, candidate) {
  if (!current) return candidate;
  if (!candidate) return current;
  var better = compareMagnetPriority(candidate, current) > 0 ? candidate : current;
  var other = better === candidate ? current : candidate;
  return mergeMagnetCandidateMeta(better, other);
}

function mergeMagnetLists(apiMagnets, reviewMagnets, code, sukebeiMagnets) {
  var map = {};
  function ingest(list, source) {
    (list || []).forEach(function (raw) {
      var item = normalizeMagnetEntry(raw, code, source);
      if (!item) return;
      map[item.hash] = pickBetterMagnet(map[item.hash], item);
    });
  }
  ingest(apiMagnets, "api");
  ingest(reviewMagnets, "review");
  ingest(sukebeiMagnets, "sukebei");
  return Object.keys(map).map(function (hash) {
    return map[hash];
  });
}

function dedupeMagnetsByGbBucket(magnets) {
  var buckets = {};
  (magnets || []).forEach(function (m) {
    var key = magnetGbBucket(m.size);
    buckets[key] = pickBetterMagnet(buckets[key], m);
  });
  return Object.keys(buckets)
    .map(function (key) {
      return buckets[key];
    })
    .sort(function (a, b) {
      return Number(b.size || 0) - Number(a.size || 0);
    });
}

function mergeAndDedupeMagnets(apiMagnets, reviewMagnets, code, sukebeiMagnets) {
  var merged = mergeMagnetLists(apiMagnets, reviewMagnets, code, sukebeiMagnets);
  return dedupeMagnetsByGbBucket(merged);
}

function magnetSourceLabel(m) {
  var keys = [];
  var raw = Array.isArray(m && m.sources) && m.sources.length ? m.sources : [m && m.source];
  for (var i = 0; i < raw.length; i++) {
    var key = normalizeMagnetSourceKey(raw[i]);
    if (key === "mixed") continue;
    if (keys.indexOf(key) === -1) keys.push(key);
  }
  if (!keys.length) keys.push("api");
  return keys
    .map(function (key) {
      if (key === "review") return "短评";
      if (key === "sukebei") return "Sukebei";
      return "JavDB";
    })
    .join("＋");
}

function magnetSourceShort(m) {
  var label = magnetSourceLabel(m);
  if (label.indexOf("＋") >= 0) return "多源";
  return label;
}

function buildMagnetTraitFlags(m) {
  var flags = [];
  if (m && m.uncensored) flags.push("破解");
  if (m && m.cnsub) flags.push("中字");
  if (m && m.uhd) flags.push("4K");
  else if (m && m.hd) flags.push("HD");
  return flags;
}

function buildMagnetItemTitle(m, code) {
  var flags = buildMagnetTraitFlags(m);
  var size = formatMagnetSize(m.size) || safeText(m.sizeText || "");
  var parts = [];
  if (size) parts.push(size);
  if (flags.length) parts.push(flags.join("/"));
  var src = magnetSourceShort(m);
  if (src) parts.push(src);
  if (!parts.length) {
    var fallback = stripCodeFromMagnetName(safeText(m.name || m.hash || "磁力"), code);
    if (fallback) parts.push(fallback);
  }
  return parts.join(" · ") || "磁力";
}

function buildMagnetItemDescription(m, code) {
  var lines = [];
  var displayName = stripCodeFromMagnetName(safeText(m.name || ""), code);
  if (displayName && displayName.toUpperCase() !== safeText(code).toUpperCase()) {
    lines.push(displayName);
  } else if (safeText(m.name || "") && safeText(m.name) !== m.hash) {
    lines.push(safeText(m.name));
  }

  var meta = [];
  var size = formatMagnetSize(m.size) || safeText(m.sizeText || "");
  if (size) meta.push(size);
  if (Number(m.files_count) > 0) meta.push(Number(m.files_count) + " 文件");
  if (Number(m.seeders) > 0) meta.push("做种 " + Number(m.seeders));
  if (safeText(m.date || "")) meta.push(safeText(m.date));
  if (meta.length) lines.push(meta.join(" · "));

  var traits = buildMagnetTraitFlags(m);
  if (traits.length) lines.push(traits.join(" · "));

  lines.push("来源 " + magnetSourceLabel(m) + " · 点击转存光鸭");
  return lines.join("\n");
}

function buildMagnetRelatedItems(magnets, ctx) {
  ctx = ctx || {};
  var items = [];
  var list = magnets || [];
  for (var i = 0; i < list.length && i < 12; i++) {
    var m = list[i];
    var hash = String(m.hash || "").trim().toLowerCase();
    if (!hash) continue;
    cacheMagnetEntry(hash, {
      magnet: m.magnet || buildMagnetUrl(hash),
      hash: hash,
      name: safeText(m.name || hash),
      size: m.size || 0,
      sizeText: m.sizeText || "",
      date: m.date || "",
      seeders: m.seeders || 0,
      files_count: m.files_count || 0,
      cnsub: !!m.cnsub,
      hd: !!m.hd,
      uhd: !!m.uhd,
      uncensored: !!m.uncensored,
      movieId: ctx.movieId || "",
      code: ctx.code || "",
      title: ctx.title || "",
      backdropPath: ctx.backdropPath || "",
      source: m.source || "api",
      sources: Array.isArray(m.sources) ? m.sources.slice() : [m.source || "api"],
    });
    items.push({
      id: hash,
      type: "url",
      mediaType: "movie",
      title: buildMagnetItemTitle(m, ctx.code),
      link: MAGNET_LINK_PREFIX + hash,
      backdropPath: ctx.backdropPath || undefined,
      description: buildMagnetItemDescription(m, ctx.code),
    });
  }
  return items;
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

function gyIsHttpStatus400(err) {
  return /(?:\b400\b|status code was unacceptable)/i.test(String((err && err.message) || err || ""));
}

function gyExtractHttpStatus(item) {
  if (!item || typeof item !== "object") return 0;
  return Number(item.status || item.statusCode || item.status_code || 0) || 0;
}

function gyRecoverHttpResponse(error) {
  var err = error || {};
  var queue = [err];
  var seen = {};
  if (err.error && typeof err.error === "object") queue.push(err.error);
  if (err.cause && typeof err.cause === "object") queue.push(err.cause);
  while (queue.length) {
    var node = queue.shift();
    if (!node || typeof node !== "object") continue;
    if (seen[node]) continue;
    seen[node] = true;
    var candidates = [node.response, node.res, node.result, node.httpResponse, node];
    for (var i = 0; i < candidates.length; i++) {
      var item = candidates[i];
      if (!item || typeof item !== "object") continue;
      var status = gyExtractHttpStatus(item);
      if (status < 400) continue;
      if (item.data !== undefined || item.body !== undefined || item.responseText !== undefined) return item;
      if (node !== item && node.data !== undefined) {
        return { status: status, statusCode: status, data: node.data, body: node.data };
      }
    }
    if (node.error && typeof node.error === "object") queue.push(node.error);
    if (node.cause && typeof node.cause === "object") queue.push(node.cause);
  }
  var msg = String(err.message || err || "");
  var match = msg.match(/unacceptable:\s*(\d{3})/i);
  if (match) {
    var code = Number(match[1]);
    var body =
      err.data !== undefined
        ? err.data
        : err.body !== undefined
          ? err.body
          : err.response && (err.response.data !== undefined ? err.response.data : err.response.body);
    if (body !== undefined) return { status: code, statusCode: code, data: body, body: body };
    return { status: code, statusCode: code };
  }
  return null;
}

function gyParseHttpPayload(resp) {
  var data = parseApiPayload(resp);
  if (data !== null && data !== undefined) return data;
  if (!resp || resp.body === undefined || resp.body === null) return data;
  return parseApiPayload({ data: resp.body });
}

function gyApiErrorText(data, status) {
  if (!data) return "HTTP " + status;
  if (typeof data === "string" && data.trim()) return data.trim().slice(0, 240);
  return (
    safeText(data.msg || data.message || data.error_description || data.error || data.detail) ||
    "HTTP " + status
  );
}

function gyIsRotatedTokenError(err, data) {
  var text = String((err && err.message) || err || "");
  if (data && typeof data === "object") {
    text += " " + String(data.error || "") + " " + String(data.error_description || data.msg || "");
  }
  return /invalid_grant|refreshed by other|invalid_token|expired/i.test(text);
}

function gyAuthErrorText(err, data, status) {
  var msg = String((err && err.message) || "");
  if (gyIsRotatedTokenError(err, data) || Number(status) === 400 || /\bHTTP\s*400\b/i.test(msg)) {
    return "光鸭 refresh_token 已失效（每次换票都会作废旧 token）。请到 www.guangyapan.com 登录后重新复制最新 refresh_token";
  }
  return msg || gyApiErrorText(data, status) || "刷新光鸭 token 失败";
}

function pickLiveGuangyaRefreshToken(uiToken, session) {
  uiToken = normalizeGuangyaToken(uiToken);
  session = session || {};
  var live = normalizeGuangyaToken(session.refreshToken);
  var source = normalizeGuangyaToken(session.sourceRefreshToken);
  if (uiToken && live && uiToken !== live && uiToken !== source) return uiToken;
  return live || uiToken || "";
}

async function readGuangyaSessionAsync() {
  try {
    var raw = await readStorageRawAsync(GUANGYA_ACCESS_STORE);
    if (raw == null || raw === "") raw = await readStoreAsync(GUANGYA_ACCESS_STORE);
    if (!raw) {
      raw = readStorageRaw(GUANGYA_ACCESS_STORE) || readStore(GUANGYA_ACCESS_STORE);
    }
    if (!raw) return null;
    var entry = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!entry || typeof entry !== "object" || isPromiseLike(entry)) return null;
    return {
      refreshToken: normalizeGuangyaToken(entry.refreshToken),
      sourceRefreshToken: normalizeGuangyaToken(entry.sourceRefreshToken),
      accessToken: String(entry.accessToken || "").trim(),
      expiresAt: Number(entry.expiresAt || 0),
    };
  } catch (e) {
    return null;
  }
}

async function writeGuangyaSessionAsync(session) {
  session = session || {};
  var payload = JSON.stringify({
    refreshToken: normalizeGuangyaToken(session.refreshToken),
    sourceRefreshToken: normalizeGuangyaToken(session.sourceRefreshToken || session.refreshToken),
    accessToken: String(session.accessToken || "").trim(),
    expiresAt: Number(session.expiresAt || 0),
  });
  writeStore(GUANGYA_ACCESS_STORE, payload);
  await writeStoreAsync(GUANGYA_ACCESS_STORE, payload);
}

async function gyHttpPost(url, headers, bodyObj, timeoutMs) {
  var body = bodyObj || {};
  var rawBody = typeof body === "string" ? body : JSON.stringify(body);
  var httpOpts = {
    headers: headers,
    allow_redirects: true,
    timeout: timeoutMs || 30000,
    validate_status: false,
    validateStatus: function () {
      return true;
    },
    status: "all",
  };
  var resp;
  try {
    if (typeof Widget.http.post === "function") {
      resp = await Widget.http.post(url, body, httpOpts);
    } else if (typeof Widget.http.request === "function") {
      resp = await Widget.http.request(url, Object.assign({ method: "POST", body: body }, httpOpts));
    } else {
      resp = await Widget.http.get(url, Object.assign({}, httpOpts, { method: "POST", body: rawBody }));
    }
  } catch (error) {
    resp = gyRecoverHttpResponse(error);
    if (!resp) throw error;
  }
  var status = gyExtractHttpStatus(resp);
  var data = gyParseHttpPayload(resp);
  if (status >= 400) {
    throw new Error(gyApiErrorText(data, status));
  }
  return data;
}

async function ensureGuangyaAccessToken(refreshToken, did) {
  refreshToken = normalizeGuangyaToken(refreshToken);
  if (!refreshToken) throw new Error("未配置光鸭 refresh_token");
  if (_gyTokenRefreshInflight) return _gyTokenRefreshInflight;

  _gyTokenRefreshInflight = (async function () {
    try {
      var session = await readGuangyaSessionAsync();
      var live = pickLiveGuangyaRefreshToken(refreshToken, session);
      var accessValid =
        session &&
        session.accessToken &&
        Number(session.expiresAt || 0) > Date.now() + 60000 &&
        (session.refreshToken === live || session.sourceRefreshToken === refreshToken);
      if (accessValid) return session.accessToken;

      if (session && session.refreshToken && refreshToken === session.sourceRefreshToken) {
        live = session.refreshToken;
      }

      var data = await gyHttpPost(
        GUANGYA_ACCOUNT_URL + "/v1/auth/token",
        gyAccountHeaders(did),
        { client_id: GUANGYA_CLIENT_ID, grant_type: "refresh_token", refresh_token: live },
        25000
      );
      if (!data || !data.access_token) {
        throw new Error(gyAuthErrorText(null, data, 0));
      }
      var newRefresh = normalizeGuangyaToken(data.refresh_token) || live;
      var source =
        session && session.sourceRefreshToken && live === session.refreshToken
          ? session.sourceRefreshToken
          : refreshToken;
      await writeGuangyaSessionAsync({
        refreshToken: newRefresh,
        sourceRefreshToken: source,
        accessToken: data.access_token,
        expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000,
      });
      await persistGlobalParamAsync("guangya_token", newRefresh);
      return data.access_token;
    } catch (err) {
      throw new Error(gyAuthErrorText(err, null, 0));
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
    var s = String(values[i] || "").trim();
    if (s) return s;
  }
  return "";
}

function gyNormalizeResolvedEntry(obj, fallbackIndex) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return null;
  var indexRaw =
    obj.fileIndex != null
      ? obj.fileIndex
      : obj.file_index != null
        ? obj.file_index
        : obj.index != null
          ? obj.index
          : obj.idx != null
            ? obj.idx
            : obj.fileNo != null
              ? obj.fileNo
              : obj.file_no != null
                ? obj.file_no
                : obj.seq != null
                  ? obj.seq
                  : null;
  var index = gyToNumber(indexRaw);
  var finalIndex = index != null && index >= 0 ? index : fallbackIndex != null ? fallbackIndex : GY_AUTO_INDEX++;
  var name = gyPickName([
    obj.name,
    obj.fileName,
    obj.file_name,
    obj.filename,
    obj.path,
    obj.filePath,
    obj.file_path,
    obj.fullPath,
    obj.full_path,
    obj.relativePath,
    obj.relative_path,
    obj.resName,
    obj.resourceName,
    obj.title,
    obj.label,
    obj.displayName,
  ]);
  var size = gyToNumber(
    obj.fileSize != null
      ? obj.fileSize
      : obj.file_size != null
        ? obj.file_size
        : obj.filesize != null
          ? obj.filesize
          : obj.size != null
            ? obj.size
            : obj.length != null
              ? obj.length
              : obj.bytes
  );
  return { index: finalIndex, name: name, size: size == null ? 0 : size, raw: obj };
}

function gyCollectObjectArrays(node, out, seen) {
  out = out || [];
  seen = seen || null;
  if (!node || typeof node !== "object") return out;
  if (seen && seen.has && seen.has(node)) return out;
  if (seen && seen.add) seen.add(node);
  if (Array.isArray(node)) {
    if (node.length && node.every(function (item) { return item && typeof item === "object" && !Array.isArray(item); })) {
      out.push(node);
    }
    for (var i = 0; i < node.length; i++) gyCollectObjectArrays(node[i], out, seen);
    return out;
  }
  var keys = Object.keys(node);
  for (var j = 0; j < keys.length; j++) gyCollectObjectArrays(node[keys[j]], out, seen);
  return out;
}

function gyDedupeResolvedEntries(entries) {
  var seen = {};
  return (entries || [])
    .filter(function (item) {
      if (!item) return false;
      if (item.index >= GY_AUTO_INDEX) return true;
      if (seen[item.index]) return false;
      seen[item.index] = true;
      return true;
    })
    .sort(function (a, b) {
      return Number(a.index || 0) - Number(b.index || 0);
    });
}

function gyExtractBtSubfiles(payload) {
  var data = payload && payload.data;
  var bt = data && data.btResInfo;
  var subs = bt && bt.subfiles;
  if (!Array.isArray(subs) || !subs.length) return null;
  var entries = [];
  for (var i = 0; i < subs.length; i++) {
    var s = subs[i] || {};
    var idx = gyToNumber(
      s.fileIndex != null
        ? s.fileIndex
        : s.file_index != null
          ? s.file_index
          : s.index != null
            ? s.index
            : i
    );
    if (idx == null || idx < 0) idx = i;
    var name = gyPickName([s.fileName, s.file_name, s.name, s.path, s.title]);
    var size = gyToNumber(
      s.fileSize != null ? s.fileSize : s.file_size != null ? s.file_size : s.size
    );
    entries.push({ index: idx, name: name, size: size == null ? 0 : size, raw: s });
  }
  entries = gyDedupeResolvedEntries(entries);
  return entries.length ? entries : null;
}

function gyIsValidFileIndex(idx) {
  var n = Number(idx);
  return Number.isFinite(n) && n >= 0 && n < GY_AUTO_INDEX;
}

function gySanitizeFileIndexes(indexes) {
  if (!indexes || !indexes.length) return null;
  var out = [];
  var seen = {};
  for (var i = 0; i < indexes.length; i++) {
    var n = Number(indexes[i]);
    if (!gyIsValidFileIndex(n) || seen[n]) continue;
    seen[n] = true;
    out.push(n);
  }
  return out.length ? out : null;
}

function gyResolvedTaskUrl(resolved, magnet) {
  var data = resolved && resolved.data;
  var url = safeText(data && data.url);
  return url || magnet;
}

function gyResolvedTaskName(resolved, magnet) {
  var data = resolved && resolved.data;
  var btName = safeText(data && data.btResInfo && data.btResInfo.fileName);
  if (btName) return btName;
  var dnMatch = String(magnet || "").match(/(?:^|[?&])dn=([^&]+)/i);
  if (dnMatch) {
    try {
      return safeText(decodeMagnetSegment(dnMatch[1]));
    } catch (e) {}
  }
  return "offline";
}

function gyExtractResolvedEntries(payload) {
  GY_AUTO_INDEX = 10000;
  var btEntries = gyExtractBtSubfiles(payload);
  if (btEntries && btEntries.length) return btEntries;

  var data = payload && payload.data;
  var directList =
    (data &&
      (data.list ||
        data.files ||
        data.fileList ||
        data.resList ||
        data.items ||
        data.fileInfos ||
        data.file_list ||
        data.file_list_info ||
        data.result ||
        data.details)) ||
    null;
  if (Array.isArray(directList) && directList.length) {
    var entries = [];
    for (var i = 0; i < directList.length; i++) {
      var entry = gyNormalizeResolvedEntry(directList[i], i);
      if (entry) entries.push(entry);
    }
    entries = gyDedupeResolvedEntries(entries);
    if (entries.length) return entries;
  }
  var arrays = gyCollectObjectArrays(payload, [], null);
  var best = [];
  var bestScore = -1;
  for (var a = 0; a < arrays.length; a++) {
    var arr = arrays[a];
    var parsed = [];
    for (var b = 0; b < arr.length; b++) {
      var item = gyNormalizeResolvedEntry(arr[b], b);
      if (item) parsed.push(item);
    }
    parsed = gyDedupeResolvedEntries(parsed);
    if (!parsed.length) {
      var positional = [];
      for (var c = 0; c < arr.length; c++) {
        var raw = arr[c] || {};
        var posName = gyPickName([
          raw.name,
          raw.fileName,
          raw.file_name,
          raw.filename,
          raw.path,
          raw.filePath,
          raw.file_path,
          raw.resName,
          raw.resourceName,
          raw.title,
        ]);
        var posSize = gyToNumber(raw.fileSize || raw.file_size || raw.size) || 0;
        if (!posName) {
          if (posSize < 50 * 1024 * 1024) continue;
          positional.push({ index: c, name: "", size: posSize, raw: raw });
          continue;
        }
        positional.push({ index: c, name: posName, size: posSize, raw: raw });
      }
      if (positional.length) parsed = positional;
    }
    if (!parsed.length) continue;
    var nameCount = parsed.filter(function (x) { return x.name; }).length;
    var score = parsed.length * 10 + nameCount * 3 + (parsed.length > 1 ? 5 : 0);
    if (score > bestScore) {
      best = parsed;
      bestScore = score;
    }
  }
  if (best.length) return best;
  var explicitIndexes = null;
  var explicitKeys = ["fileIndexes", "file_indexes", "indexes"];
  for (var k = 0; k < explicitKeys.length; k++) {
    if (data && data[explicitKeys[k]] != null) {
      explicitIndexes = data[explicitKeys[k]];
      break;
    }
    if (payload && payload[explicitKeys[k]] != null) {
      explicitIndexes = payload[explicitKeys[k]];
      break;
    }
  }
  if (Array.isArray(explicitIndexes) && explicitIndexes.length) {
    var fromExplicit = [];
    for (var x = 0; x < explicitIndexes.length; x++) {
      var ei = gyToNumber(explicitIndexes[x]);
      if (ei == null || ei < 0) continue;
      fromExplicit.push({ index: ei, name: "", size: 0, raw: null });
    }
    fromExplicit = gyDedupeResolvedEntries(fromExplicit);
    if (fromExplicit.length) return fromExplicit;
  }
  var total = gyToNumber(
    (data && (data.fileCount || data.file_count || data.totalCount || data.total_count || data.count || data.total)) ||
      null
  );
  if (total != null && total > 0) {
    var out = [];
    for (var t = 0; t < total; t++) out.push({ index: t, name: "", size: 0, raw: null });
    return out;
  }
  return [];
}

function gyParseRegexSource(raw) {
  var s = String(raw || "").trim();
  if (!s) return null;
  if (s.charAt(0) === "/") {
    var last = s.lastIndexOf("/");
    if (last > 0) {
      try {
        return new RegExp(s.slice(1, last), s.slice(last + 1) || "i");
      } catch (e) {}
    }
  }
  try {
    return new RegExp(s, "i");
  } catch (e2) {
    return null;
  }
}

function gyParseBlockPatterns(cfg) {
  var raw = String((cfg && cfg.magnet_block_patterns) || "").trim();
  var sources = raw
    ? raw.split(/[;|]/).map(function (s) { return String(s || "").trim(); }).filter(Boolean)
    : GY_DEFAULT_BLOCK_PATTERNS.slice();
  var patterns = [];
  for (var i = 0; i < sources.length; i++) {
    var re = gyParseRegexSource(sources[i]);
    if (re) patterns.push(re);
  }
  return patterns;
}

function gyBasename(name) {
  var s = String(name || "").replace(/\\/g, "/");
  var idx = s.lastIndexOf("/");
  return idx >= 0 ? s.slice(idx + 1) : s;
}

function gyIsVideoFileName(name) {
  var base = gyBasename(name);
  var parts = base.split(".");
  if (parts.length < 2) return false;
  return !!GY_VIDEO_EXTS[parts.pop().toLowerCase()];
}

function gyIsObviousJunk(name) {
  return /\.(txt|url|nfo|htm|html|jpg|jpeg|png|gif|exe|apk|torrent|srt|ass)$/i.test(gyBasename(name));
}

function gyIsLikelyVideo(entry) {
  if (gyIsVideoFileName(entry.name)) return true;
  if (Number(entry.size || 0) >= 50 * 1024 * 1024) return true;
  var raw = entry.raw;
  if (raw) {
    var t = raw.resType != null ? raw.resType : raw.fileType;
    if (t === 1 || t === "1" || String(raw.type || "").toLowerCase() === "video") return true;
  }
  return false;
}

function gyMaxVideoSize(entries) {
  var max = 0;
  for (var i = 0; i < entries.length; i++) {
    if (!gyIsLikelyVideo(entries[i])) continue;
    max = Math.max(max, Number(entries[i].size || 0));
  }
  return max;
}

function gyIsMultiPartName(name) {
  var n = String(name || "").toLowerCase();
  return (
    /(?:^|[\._\-])p(?:art)?[\._\-]?\d+(?:[\._\-]|$)/.test(n) ||
    /(?:^|[\._\-])cd[\._\-]?\d+(?:[\._\-]|$)/.test(n) ||
    /(?:^|[\._\-])disc[\._\-]?\d+(?:[\._\-]|$)/.test(n) ||
    /(?:^|[\._\-])vol[\._\-]?\d+(?:[\._\-]|$)/.test(n) ||
    /分段|第[\d一二三四五六七八九十]+[部分集段]/.test(n)
  );
}

function gyShouldBlock(entry, patterns, minVideoMb, videoOnly, maxVideoSize) {
  var name = String(entry.name || "");
  if (gyIsObviousJunk(name)) return { blocked: true, reason: "junk" };
  for (var i = 0; i < patterns.length; i++) {
    if (patterns[i].test(name)) return { blocked: true, reason: "pattern" };
  }
  if (videoOnly && name && !gyIsLikelyVideo(entry)) return { blocked: true, reason: "non-video" };
  var size = Number(entry.size || 0);
  var isVideo = gyIsLikelyVideo(entry);
  if (isVideo && size > 0 && maxVideoSize > 0 && size < maxVideoSize * 0.12 && !gyIsMultiPartName(name)) {
    return { blocked: true, reason: "small-video" };
  }
  if (
    minVideoMb > 0 &&
    isVideo &&
    size > 0 &&
    maxVideoSize > 0 &&
    size < minVideoMb * 1024 * 1024 &&
    size < maxVideoSize * 0.35
  ) {
    return { blocked: true, reason: "size" };
  }
  return { blocked: false, reason: "" };
}

function gyPruneDominantVideo(kept, blocked) {
  if (kept.length <= 1) return { kept: kept, blocked: blocked };
  var videos = kept.filter(gyIsLikelyVideo);
  if (videos.length <= 1) return { kept: kept, blocked: blocked };
  var hasMultipart = videos.some(function (e) { return gyIsMultiPartName(e.name); });
  var maxSize = Math.max.apply(
    null,
    videos.map(function (e) { return Number(e.size || 0); })
  );
  var floor = hasMultipart ? maxSize * 0.45 : maxSize * 0.3;
  var survivors = kept.filter(function (e) {
    if (!gyIsLikelyVideo(e)) return true;
    return gyIsMultiPartName(e.name) || Number(e.size || 0) >= floor;
  });
  if (survivors.length >= kept.length) return { kept: kept, blocked: blocked };
  var survivorMap = {};
  survivors.forEach(function (e) { survivorMap[e.index] = 1; });
  var newBlocked = blocked.slice();
  kept.forEach(function (e) {
    if (!survivorMap[e.index]) newBlocked.push({ entry: e, reason: "pruned" });
  });
  return { kept: survivors, blocked: newBlocked };
}

function gyPickVideoFallback(entries, patterns) {
  var candidates = [];
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var name = String(entry.name || "");
    if (gyIsObviousJunk(name)) continue;
    var hit = false;
    for (var p = 0; p < patterns.length; p++) {
      if (patterns[p].test(name)) {
        hit = true;
        break;
      }
    }
    if (hit) continue;
    candidates.push(entry);
  }
  if (!candidates.length) candidates = entries.filter(gyIsLikelyVideo);
  if (!candidates.length) candidates = entries.slice();
  candidates.sort(function (a, b) { return Number(b.size || 0) - Number(a.size || 0); });
  return candidates[0] || null;
}

function gyFilterResolvedFiles(entries, cfg) {
  var patterns = gyParseBlockPatterns(cfg);
  var minVideoMb = Number(cfg.magnet_min_video_mb || 0);
  if (!Number.isFinite(minVideoMb) || minVideoMb < 0) minVideoMb = 0;
  var videoOnly = String(cfg.magnet_video_only || "1") !== "0";
  var maxVideoSize = gyMaxVideoSize(entries);
  var kept = [];
  var blocked = [];
  for (var i = 0; i < entries.length; i++) {
    var verdict = gyShouldBlock(entries[i], patterns, minVideoMb, videoOnly, maxVideoSize);
    if (verdict.blocked) blocked.push({ entry: entries[i], reason: verdict.reason });
    else kept.push(entries[i]);
  }
  if (!kept.length && entries.length) {
    var fallback = gyPickVideoFallback(entries, patterns);
    if (fallback) {
      kept = [fallback];
      blocked = entries
        .filter(function (e) { return e.index !== fallback.index; })
        .map(function (e) { return { entry: e, reason: "fallback" }; });
    }
  }
  return gyPruneDominantVideo(kept, blocked);
}

function gyFormatEntryPreview(entries, limit) {
  var max = limit || 8;
  var lines = [];
  for (var i = 0; i < entries.length && i < max; i++) {
    lines.push(entries[i].name || "#" + entries[i].index);
  }
  if (entries.length > max) lines.push("… 另有 " + (entries.length - max) + " 个");
  return lines.join("\n");
}

function gyFormatBlockedPreview(blocked, limit) {
  var max = limit || 8;
  var lines = [];
  for (var i = 0; i < blocked.length && i < max; i++) {
    var item = blocked[i];
    var label = item.entry.name || "#" + item.entry.index;
    var tag =
      item.reason === "size"
        ? " (过小)"
        : item.reason === "small-video"
          ? " (小广告)"
          : item.reason === "pruned"
            ? " (冗余)"
            : item.reason === "non-video"
              ? " (非视频)"
              : item.reason === "pattern"
                ? " (规则)"
                : item.reason === "junk"
                  ? " (junk)"
                  : "";
    lines.push(label + tag);
  }
  if (blocked.length > max) lines.push("… 另有 " + (blocked.length - max) + " 个");
  return lines.join("\n");
}

async function guangyaResolveResource(accessToken, did, magnet) {
  var data = await gyHttpPost(
    GUANGYA_API_BASE + "/nd.bizcloudcollection.s/v1/resolve_res",
    gyApiHeaders(accessToken, did),
    { url: magnet },
    45000
  );
  if (!data) throw new Error("光鸭解析返回空响应");
  return data;
}

function gyIsGuangyaTaskOk(task) {
  if (!task) return false;
  var msg = String(task.msg || "").toLowerCase();
  if (msg === "success" || msg === "") return true;
  if (task.code === 0) return true;
  return !!task.data;
}

function gySanitizeTaskName(name) {
  name = safeText(name)
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, " ")
    .trim();
  if (!name || name === "." || name === "..") return "";
  if (name.length > 180) name = name.slice(0, 180);
  return name;
}

function gySanitizeParentId(parentId) {
  parentId = safeText(parentId);
  if (!parentId) return "";
  if (!/^[0-9a-zA-Z_-]{4,64}$/.test(parentId)) return "";
  return parentId;
}

async function guangyaCreateTask(accessToken, did, taskInput) {
  taskInput = taskInput || {};
  var body = {
    url: String(taskInput.url || "").trim(),
    parentId: gySanitizeParentId(taskInput.parentId),
  };
  var newName = gySanitizeTaskName(taskInput.newName);
  if (newName) body.newName = newName;
  var indexes = gySanitizeFileIndexes(taskInput.fileIndexes);
  if (indexes && indexes.length) body.fileIndexes = indexes;
  return gyHttpPost(
    GUANGYA_API_BASE + "/nd.bizcloudcollection.s/v1/create_task",
    gyApiHeaders(accessToken, did),
    body,
    30000
  );
}

async function submitGuangyaMagnetTask(accessToken, did, magnet, cfg, filtered, resolved) {
  var magnetUrl = String(magnet || "").trim();
  var resolvedUrl = gyResolvedTaskUrl(resolved, magnetUrl);
  var taskName = gyResolvedTaskName(resolved, magnetUrl);
  var parentId = gySanitizeParentId(cfg.guangya_parent_id);
  var indexes = gySanitizeFileIndexes(
    filtered.kept.map(function (e) {
      return e.index;
    })
  );
  var attempts = [
    { url: resolvedUrl, parentId: parentId, newName: taskName, fileIndexes: indexes, label: "filtered" },
    { url: resolvedUrl, parentId: parentId, newName: taskName, fileIndexes: null, label: "no-indexes" },
    { url: magnetUrl, parentId: parentId, newName: taskName, fileIndexes: null, label: "raw-magnet" },
    { url: resolvedUrl, parentId: "", newName: taskName, fileIndexes: null, label: "root-dir" },
    { url: magnetUrl, parentId: "", newName: "", fileIndexes: null, label: "minimal" },
  ];
  var lastErr = null;
  for (var i = 0; i < attempts.length; i++) {
    var attempt = attempts[i];
    try {
      var task = await guangyaCreateTask(accessToken, did, attempt);
      if (gyIsGuangyaTaskOk(task)) return { task: task, attempt: attempt.label };
      lastErr = new Error(gyApiErrorText(task, 0) || "光鸭 create_task 失败");
    } catch (err) {
      lastErr = err;
      if (!gyIsHttpStatus400(err)) throw err;
    }
  }
  throw lastErr || new Error("光鸭 create_task 失败");
}

async function saveMagnetToGuangya(magnet, cfg) {
  var did = await ensureGuangyaDeviceId();
  var accessToken;
  try {
    accessToken = await ensureGuangyaAccessToken(cfg.guangya_token, did);
  } catch (err) {
    throw new Error("换票失败: " + String((err && err.message) || err || "未知错误"));
  }
  var resolved = null;
  var entries = [];
  try {
    resolved = await guangyaResolveResource(accessToken, did, magnet);
    entries = gyExtractResolvedEntries(resolved);
  } catch (err) {
    if (!gyIsHttpStatus400(err)) throw new Error("解析磁力失败: " + String((err && err.message) || err));
  }
  var filtered = { kept: [], blocked: [] };
  if (entries.length) {
    filtered =
      String(cfg.magnet_filter || "1") !== "0"
        ? gyFilterResolvedFiles(entries, cfg)
        : { kept: entries, blocked: [] };
    if (!filtered.kept.length) throw new Error("过滤后没有可转存文件");
  }
  var submitted;
  try {
    submitted = await submitGuangyaMagnetTask(accessToken, did, magnet, cfg, filtered, resolved);
  } catch (err) {
    throw new Error("提交任务失败: " + String((err && err.message) || err));
  }
  var task = submitted.task;
  return {
    ok: true,
    keptCount: filtered.kept.length,
    blockedCount: filtered.blocked.length,
    keptPreview: gyFormatEntryPreview(filtered.kept),
    blockedPreview: filtered.blocked.length ? gyFormatBlockedPreview(filtered.blocked) : "",
    task: task,
  };
}

async function handleGuangyaMagnetSave(hash, params) {
  hash = String(hash || "").trim().toLowerCase();
  var entry = loadMagnetEntry(hash);
  var link = MAGNET_LINK_PREFIX + hash;
  if (!entry || !entry.magnet) {
    return {
      id: hash,
      type: "url",
      title: "转存失败",
      description: "找不到磁力缓存，请返回影片详情页重新加载后再试",
      link: link,
    };
  }
  var cfg = await getGuangyaConfig(params);
  var token = normalizeGuangyaToken(
    cfg.guangya_token ||
      (await resolveGuangyaTokenAsync(params)) ||
      (await discoverGuangyaTokenAsync(params || {})) ||
      resolveGuangyaTokenSync(params)
  );
  if (token) {
    cfg.guangya_token = token;
    persistGlobalParam("guangya_token", token);
  }
  if (!token) {
    return {
      id: hash,
      type: "url",
      title: "未配置光鸭",
      description: "请在模块全局参数中填写光鸭 refresh_token（gy.- 开头）",
      link: link,
      backdropPath: entry.backdropPath || undefined,
    };
  }
  try {
    var result = await saveMagnetToGuangya(entry.magnet, cfg);
    var lines = [];
    var nameText = stripCodeFromMagnetName(entry.name || "", entry.code);
    if (nameText && nameText !== entry.hash) lines.push(nameText);
    var head = [];
    var sizeText = formatMagnetSize(entry.size) || safeText(entry.sizeText || "");
    if (sizeText) head.push(sizeText);
    head.push("保留 " + result.keptCount);
    if (result.blockedCount > 0) head.push("过滤 " + result.blockedCount);
    if (entry.source || (entry.sources && entry.sources.length)) {
      head.push(magnetSourceLabel(entry));
    }
    if (head.length) lines.push(head.join(" · "));
    if (result.keptPreview) lines.push("已提交\n" + result.keptPreview);
    if (result.blockedPreview) lines.push("已过滤\n" + result.blockedPreview);
    return {
      id: hash,
      type: "url",
      title: "光鸭转存已提交",
      description: lines.join("\n"),
      link: link,
      backdropPath: entry.backdropPath || undefined,
      posterPath: entry.backdropPath || undefined,
    };
  } catch (err) {
    return {
      id: hash,
      type: "url",
      title: "光鸭转存失败",
      description: String((err && err.message) || err || "未知错误"),
      link: link,
      backdropPath: entry.backdropPath || undefined,
    };
  }
}


/* ===== catemby detail + guangya magnet wiring ===== */

async function loadDetail(link, params) {
  params = params || {};
  const linkStr = String(link || "").trim();
  if (linkStr.indexOf(MAGNET_LINK_PREFIX) === 0) {
    return await handleGuangyaMagnetSave(linkStr.slice(MAGNET_LINK_PREFIX.length), params);
  }

  const movieId = extractMovieId(link);

  const detail = await apiGet("/v4/movies/" + movieId);
  const movie = detail.movie || {};
  const rawCode = safeText(movie.number || "");
  const code = isValidJavCatalogCode(rawCode) ? rawCode : "";

  // DMM 高清封面与磁力互不依赖，命中本地封面缓存时只启动磁力任务。
  let dmmProbe = code ? getCachedDmmProbeCover(code) : null;
  const dmmProbeTask = code && !dmmProbe
    ? fetchDmmProbeCover(code, params).catch(function () { return null; })
    : Promise.resolve(dmmProbe);
  const magnetTask = fetchDetailMagnets(movieId, params, code || rawCode).catch(function () {
    return { magnets: [], source: "", reviews: [] };
  });
  const detailExtras = await Promise.all([dmmProbeTask, magnetTask]);
  dmmProbe = detailExtras[0];
  const magnetBundle = detailExtras[1] || { magnets: [], source: "", reviews: [] };

  let posterUrl = "";
  let coverUrl = "";
  if (dmmProbe) {
    const probePoster = String(dmmProbe.posterUrl || "").trim();
    const probeBackdrop = String(dmmProbe.backdropUrl || "").trim();
    if (probePoster && !isInvalidCoverTarget(probePoster) && !isLowResDmmPosterUrl(probePoster)) {
      posterUrl = probePoster;
    }
    if (probeBackdrop && !isInvalidCoverTarget(probeBackdrop)) {
      coverUrl = probeBackdrop;
    }
  }

  const galleryUrls = collectGalleryUrls(movie);
  // 顶图有 DMM 高清才放首位；无高清不拿站点封面顶上
  const backdropPathsList = compactUniqueUrls(
    [].concat(coverUrl ? [coverUrl] : [], galleryUrls || [])
  ).filter(Boolean);

  const meta = parseDetailMeta(movie);

  // 相似作品区域仅用于展示磁力，不再解析 actor_movies / relative_movies。
  const magnetSource = magnetBundle.source || "";
  const detailReviews = magnetBundle.reviews || [];
  const magnetItems = buildMagnetRelatedItems(magnetBundle.magnets || [], {
    movieId: movieId,
    code: code || rawCode,
    title: safeText(movie.title || code || rawCode),
    backdropPath: coverUrl || posterUrl || (backdropPathsList[0] || ""),
  });
  const relatedItems = magnetItems;

  const previewUrl = movie.preview_video_url || "";
  const trailers = buildTrailers(movie, coverUrl || posterUrl);

  const titleText = safeText(movie.title || code);
  const displayTitle = code && titleText.indexOf(code) !== 0 ? code + " " + titleText : titleText;
  const descParts = [];
  if (code) descParts.push("番号: " + code);
  if (movie.release_date) descParts.push("日期: " + movie.release_date);
  if (movie.duration) descParts.push("时长: " + movie.duration + " 分钟");
  const summary = safeText(movie.summary || "");
  if (summary) descParts.push("── 剧情简介 ──\n\n" + summary);
  if (movie.maker_name) descParts.push("厂牌: " + movie.maker_name);
  const stats = [];
  if (movie.want_watch_count) stats.push("想看 " + movie.want_watch_count);
  if (movie.watched_count) stats.push("观看 " + movie.watched_count);
  if (movie.reviews_count) stats.push("评价 " + movie.reviews_count);
  if (magnetItems.length) stats.push("磁力 " + magnetItems.length);
  if (stats.length) descParts.push(stats.join("  "));
  const shortReviewBlock = formatDetailReviewsForDescription(detailReviews);
  if (shortReviewBlock) descParts.push(shortReviewBlock);
  if (magnetItems.length) {
    descParts.push(formatMagnetSourceHint(magnetSource));
  } else if ((movie.magnets_count || 0) > 0) {
    descParts.push("磁力: 标记有磁链，暂未解析到可用条目");
  } else if (resolveGuangyaTokenSync(params)) {
    descParts.push("磁力: 暂无可用磁链");
  }

  const item = {
    id: code || movie.id || movieId,
    type: "detail",
    mediaType: "movie",
    title: displayTitle,
    link: movieLink(movie.id || movieId),
    description: descParts.length ? descParts.join("\n\n") : undefined,
    // 预告只走底部 trailers，不写入 videoUrl，避免被当成播放源
    playerType: "system",
    customHeaders: {
      "User-Agent": UA,
      Referer: SITE_BASE + "/movie/" + movieId,
      Origin: SITE_BASE,
    },
    backdropPaths: backdropPathsList.length ? backdropPathsList : undefined,
    genreItems: meta.genreItems.length ? meta.genreItems : undefined,
    peoples: meta.peoples.length ? meta.peoples : undefined,
    relatedItems,
    trailers,
    previewUrl: previewUrl || "",
    releaseDate: movie.release_date || "",
    durationText: movie.duration ? movie.duration + " 分钟" : "",
    rating: Number(movie.score || 0) || 0,
    videoId: movie.id || movieId,
    extra: {
      videoMode: "none",
      previewVideoUrl: previewUrl || "",
      fullVideoAvailable: false,
      magnetCount: magnetItems.length,
      magnetSource: magnetSource || "",
    },
  };
  if (coverUrl) {
    item.backdropPath = coverUrl;
    item.coverUrl = coverUrl;
    item.image = coverUrl;
  }
  if (posterUrl) {
    item.posterPath = posterUrl;
    item.detailPoster = posterUrl;
  }
  return item;
}

function extractSearchCode(text) {
  const s = String(text || "").toUpperCase().replace(/\./g, " ").replace(/_/g, "-").replace(/\s+/g, " ").trim();
  if (!s) return "";
  const patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?\d{5,8}\b/,
    /\b(?:S2M|MIAA|SSNI|SNIS|IPX|IPZZ|SSIS|JUQ|MIDE|MIDV|STARS|ABW|RKI|DVAJ|WANZ|LULU|DLDSS|VRTM|SDMU|SDDE|MKMP|HMN|MUDR|ADN|CAWD|PPPE|PRED|MGR|SHKD|MXGS|FSDSS|JUL|KTB|MIAB|GVH|MIMK|JUY|JUTA|IDBD|HND|DASD|CLO|BF|HONB|ROE|CEMD|MIUM|NITR|RCTD|RCT|IPVR|MIBD|JUR|JURD|SOE|ORE|PYO|START|NSFS|JJGG|BANK|MILK|SIR|FSOK|KV|KIWVR|MREC|DVRT|VOD)\s*[-_ ]?\d{2,6}[A-Z]?(?:[-_][A-Z]{1,4})?\b/,
    /\b[A-Z]{2,10}\s*[-_ ]?\d{2,8}[A-Z]?\b/,
    /\b\d{6,8}\b/,
  ];
  for (const reg of patterns) {
    const match = s.match(reg);
    if (match && match[0]) return match[0].replace(/\s+/g, "").replace(/_/g, "-").replace(/-+/g, "-").toUpperCase();
  }
  return "";
}

function collectStringValues(value, depth, out, visited) {
  depth = depth || 0;
  out = out || [];
  visited = visited || new Set();
  if (value === null || value === undefined || depth > 5) return out;
  const type = typeof value;
  if (type === "string" || type === "number") {
    const text = String(value).trim();
    if (text) out.push(text);
    return out;
  }
  if (type !== "object") return out;
  if (visited.has(value)) return out;
  visited.add(value);
  if (Array.isArray(value)) {
    value.forEach((item) => collectStringValues(item, depth + 1, out, visited));
    return out;
  }
  Object.keys(value).forEach((key) => collectStringValues(value[key], depth + 1, out, visited));
  return out;
}

function extractCodeFromParams(params) {
  params = params || {};
  // videoId 常为站点哈希或媒体库数字 ID，放到文件名/标题之后，避免误当成番号
  const priority = [
    params.code, params.number, params.fileName, params.filename, params.file_name,
    params.name, params.path, params.filePath, params.file_path, params.mediaPath, params.media_path,
    params.title, params.seriesName, params.originalTitle, params.originalName,
    params.episodeName, params.id, params.description, params.link,
    params.videoId, params.url, params.videoUrl, params.playUrl, params.streamUrl,
  ];
  if (params.tmdbInfo) {
    priority.push(params.tmdbInfo.title, params.tmdbInfo.name, params.tmdbInfo.originalTitle, params.tmdbInfo.originalName);
  }
  if (params.info) {
    priority.push(params.info.title, params.info.name, params.info.originalTitle, params.info.originalName);
  }
  for (const value of priority) {
    const code = extractSearchCode(value);
    if (code && isValidJavCatalogCode(code)) return code;
  }
  for (const value of collectStringValues(params)) {
    const code = extractSearchCode(value);
    if (code && isValidJavCatalogCode(code)) return code;
  }
  return "";
}

async function loadResource(params) {
  try {
    const code = extractCodeFromParams(params || {});
    if (!code) return [];

    // 片源只依赖番号 resolve，不再串行搜片+详情（可省 1–3s）
    const fullVideo = await resolveFullVideo(code, "zh");
    if (!fullVideo || !fullVideo.sourceUrl || isPreviewVariant(fullVideo)) return [];

    const headers = {
      "User-Agent": UA,
      Referer: SITE_BASE + "/",
      Origin: SITE_BASE,
    };

    return [
      {
        name: "Catemby 完整(" + (fullVideo.label || "原版") + ")",
        description: "番号：" + code + "\n类型：完整视频",
        url: fullVideo.sourceUrl,
        customHeaders: headers,
      },
    ];
  } catch (e) {
    console.error("[catemby] loadResource 失败:", e && e.message ? e.message : e);
    return [];
  }
}

/* ========================= 外挂字幕（Forward type: subtitle） ========================= */

function subtitleLangCode(item) {
  const name = String((item && item.name) || "").toLowerCase();
  const langs = Array.isArray(item && item.languages) ? item.languages.join(",").toLowerCase() : "";
  if (name.includes("zh-cn") || langs.includes("zh-cn") || name.includes("简") || name.includes("chs")) return "zh-CN";
  if (name.includes("zh-tw") || langs.includes("zh-tw") || name.includes("繁") || name.includes("cht")) return "zh-TW";
  if (name.includes("-en") || langs.includes("en") || name.includes("eng")) return "en";
  if (name.includes("-ja") || langs.includes("ja") || name.includes("jpn")) return "ja";
  return "zh";
}

function subtitleLangLabel(lang) {
  if (lang === "zh-CN") return "简中";
  if (lang === "zh-TW") return "繁中";
  if (lang === "en") return "English";
  if (lang === "ja") return "日本語";
  return "中文";
}

function subtitleLangRank(lang) {
  if (lang === "zh-CN") return 0;
  if (lang === "zh") return 1;
  if (lang === "zh-TW") return 2;
  if (lang === "ja") return 3;
  if (lang === "en") return 4;
  return 5;
}

function buildSubtitleTitle(item, lang) {
  const label = subtitleLangLabel(lang);
  const rawName = String((item && item.name) || "").replace(/\.[^.]+$/, "").trim();
  const isHashName = /^[0-9a-f]{32,}$/i.test(rawName);
  const extra = item && item.extra_name ? " " + item.extra_name : "";
  if (isHashName || !rawName) return label + extra;
  const shortName = rawName.length > 40 ? rawName.slice(0, 37) + "…" : rawName;
  return label + " - " + shortName + extra;
}

function dedupeSubtitleItems(list, code) {
  const codeKey = String(code || "")
    .toLowerCase()
    .replace(/-/g, "");
  const map = new Map();
  for (let i = 0; i < (list || []).length; i++) {
    const item = list[i];
    if (!item || !item.cid || !item.url) continue;
    const prev = map.get(item.cid);
    if (!prev) {
      map.set(item.cid, item);
      continue;
    }
    const prevHit = String(prev.name || "")
      .toLowerCase()
      .replace(/-/g, "")
      .includes(codeKey);
    const curHit = String(item.name || "")
      .toLowerCase()
      .replace(/-/g, "")
      .includes(codeKey);
    if (curHit && !prevHit) map.set(item.cid, item);
  }
  return Array.from(map.values());
}

function sortSubtitleItems(list, code) {
  const codeKey = String(code || "")
    .toLowerCase()
    .replace(/-/g, "");
  return (list || []).slice().sort((a, b) => {
    const aHit = String(a.name || "")
      .toLowerCase()
      .replace(/-/g, "")
      .includes(codeKey)
      ? 0
      : 1;
    const bHit = String(b.name || "")
      .toLowerCase()
      .replace(/-/g, "")
      .includes(codeKey)
      ? 0
      : 1;
    if (aHit !== bHit) return aHit - bHit;
    const aLang = subtitleLangRank(subtitleLangCode(a));
    const bLang = subtitleLangRank(subtitleLangCode(b));
    if (aLang !== bLang) return aLang - bLang;
    return Number(b.duration || 0) - Number(a.duration || 0);
  });
}

function uniquifySubtitleTitles(items) {
  const counts = {};
  for (let i = 0; i < items.length; i++) {
    const title = items[i].title;
    counts[title] = (counts[title] || 0) + 1;
  }
  const seen = {};
  for (let i = 0; i < items.length; i++) {
    const title = items[i].title;
    if ((counts[title] || 1) <= 1) continue;
    seen[title] = (seen[title] || 0) + 1;
    items[i].title = title + " #" + seen[title];
  }
  return items;
}

function buildSubtitleFileUrl(originalUrl) {
  const raw = String(originalUrl || "").trim();
  if (!raw) return "";
  // 走站点代理，与网页端一致，避免部分 CDN 直链鉴权/防盗链问题
  return siteUrl("/api/subtitle/file?url=" + encodeURIComponent(raw));
}

async function fetchSubtitleCandidates(code) {
  const name = String(code || "").trim();
  if (!name) return [];
  const data = await siteGet("/api/subtitle", { name: name }, { allowError: true });
  if (!data || Number(data.code) !== 0 || !Array.isArray(data.data) || !data.data.length) return [];
  return sortSubtitleItems(dedupeSubtitleItems(data.data, name), name);
}

async function loadSubtitle(params) {
  try {
    const code = extractCodeFromParams(params || {});
    if (!code) return [];

    const candidates = await fetchSubtitleCandidates(code);
    if (!candidates.length) return [];

    const items = candidates.slice(0, 40).map((item) => {
      const lang = subtitleLangCode(item);
      const ext = String(item.ext || "srt").toLowerCase();
      const durationMs = Number(item.duration || 0);
      return {
        id: String(item.cid || item.gcid || item.url),
        title: buildSubtitleTitle(item, lang),
        lang: lang,
        url: buildSubtitleFileUrl(item.url),
        count: durationMs > 0 ? Math.round(durationMs / 1000) : undefined,
        format: ext,
        description: [code, ext.toUpperCase(), item.extra_name || ""].filter(Boolean).join(" · "),
      };
    });

    return uniquifySubtitleTitles(items);
  } catch (e) {
    console.error("[catemby] loadSubtitle 失败:", e && e.message ? e.message : e);
    return [];
  }
}

/** zip 字幕包时由客户端回调；站点当前多为 srt/ass 直链，保留兼容 */
async function resolveSubtitleArchive(params) {
  try {
    const subtitleFiles = JSON.parse((params && params.subtitleFiles) || "[]");
    if (!Array.isArray(subtitleFiles) || !subtitleFiles.length) return null;
    const prefer =
      subtitleFiles.find((file) => /简|chs|zh-?cn/i.test(String((file && file.name) || ""))) ||
      subtitleFiles.find((file) => /繁|cht|zh-?tw/i.test(String((file && file.name) || ""))) ||
      subtitleFiles.find((file) => /\.(srt|ass|ssa|vtt)$/i.test(String((file && file.name) || ""))) ||
      subtitleFiles[0];
    return prefer && prefer.path ? prefer.path : null;
  } catch (e) {
    return null;
  }
}

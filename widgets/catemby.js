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
const JDBSTATIC_BASE = "https://c0.jdbstatic.com";

const MOVIE_TYPE_CODE = { censored: "0", uncensored: "1", western: "2", fc2: "3", all: "0" };
const CATEGORY_KIND_CODE = { actors: "a", makers: "m", series: "s", tags: "0", directors: "d", codes: "c" };
const LIST_FILTER_CODE = { all: "", playable: "p", magnet: "m", subtitle: "c" };
const SORT_API_MAP = {
  published: { sort_by: "release", order_by: "desc" },
  score: { sort_by: "score", order_by: "desc" },
  fav: { sort_by: "fav", order_by: "desc" },
};

// 演员/片商/标签：由站点 API 拉取后静态写入（2026-07-10）
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
  { title: "单体作品", value: "單體影片" },
  { title: "含预览视频", value: "含預覽視頻" },
  { title: "含预览圖", value: "含預覽圖" },
  { title: "含字幕", value: "含字幕" },
  { title: "可播放", value: "可播放" },
  { title: "可下载", value: "可下載" },
];

const CATEMBY_TAG_SUBJECT_OPTIONS = [
  { title: "暗黑系", value: "暗黑系" },
  { title: "白天出轨", value: "白天出軌" },
  { title: "被外国人干", value: "被外國人幹" },
  { title: "残忍画面", value: "殘忍畫面" },
  { title: "出轨", value: "出軌" },
  { title: "处男", value: "處男" },
  { title: "处女", value: "處女" },
  { title: "触手", value: "觸手" },
  { title: "纯欲", value: "純欲" },
  { title: "刺青紋身", value: "刺青紋身" },
  { title: "倒追", value: "倒追" },
  { title: "惡作劇", value: "惡作劇" },
  { title: "韩国", value: "韓國" },
  { title: "黑白配", value: "黑白配" },
  { title: "经历告白", value: "經歷告白" },
  { title: "绝顶高潮", value: "絕頂高潮" },
  { title: "爛醉如泥的", value: "爛醉如泥的" },
  { title: "恋乳癖", value: "戀乳癖" },
  { title: "恋腿癖", value: "戀腿癖" },
  { title: "恋物癖", value: "戀物癖" },
  { title: "獵豔", value: "獵豔" },
  { title: "流汗", value: "流汗" },
  { title: "亂倫", value: "亂倫" },
  { title: "蠻橫嬌羞", value: "蠻橫嬌羞" },
  { title: "美容院", value: "美容院" },
  { title: "魔鬼系", value: "魔鬼系" },
  { title: "男同性恋", value: "男同性戀" },
  { title: "奴隸", value: "奴隸" },
  { title: "女同接吻", value: "女同接吻" },
  { title: "女同性恋", value: "女同性戀" },
  { title: "其他恋物癖", value: "其他戀物癖" },
  { title: "奇异的", value: "奇異的" },
  { title: "企画", value: "企畫" },
  { title: "強姦", value: "強姦" },
  { title: "情侶", value: "情侶" },
  { title: "全裸", value: "全裸" },
  { title: "曬黑", value: "曬黑" },
  { title: "湿身", value: "濕身" },
  { title: "双性人", value: "雙性人" },
  { title: "天賦", value: "天賦" },
  { title: "跳舞", value: "跳舞" },
  { title: "偷窺", value: "偷窺" },
  { title: "偷窺", value: "偷窺" },
  { title: "妄想", value: "妄想" },
  { title: "温泉", value: "溫泉" },
  { title: "洗澡", value: "洗澡" },
  { title: "形象俱乐部", value: "形象俱樂部" },
  { title: "性爱", value: "性愛" },
  { title: "性感的", value: "性感的" },
  { title: "性騷扰", value: "性騷擾" },
  { title: "性转換·女体化", value: "性轉換·女體化" },
  { title: "学校作品", value: "學校作品" },
  { title: "亚洲", value: "亞洲" },
  { title: "淫亂真實", value: "淫亂真實" },
  { title: "友誼", value: "友誼" },
  { title: "运动", value: "運動" },
  { title: "运动", value: "運動" },
  { title: "正常", value: "正常" },
  { title: "正太控", value: "正太控" },
  { title: "M男", value: "M男" },
];

const CATEMBY_TAG_ROLE_OPTIONS = [
  { title: "白人", value: "白人" },
  { title: "伴侶", value: "伴侶" },
  { title: "车掌小姐", value: "車掌小姐" },
  { title: "痴汉", value: "痴漢" },
  { title: "大小姐", value: "大小姐" },
  { title: "蕩妇", value: "蕩婦" },
  { title: "飞特族", value: "飛特族" },
  { title: "服務生", value: "服務生" },
  { title: "高中女生", value: "高中女生" },
  { title: "格斗家", value: "格鬥家" },
  { title: "各种职业", value: "各種職業" },
  { title: "公主", value: "公主" },
  { title: "寡妇", value: "寡婦" },
  { title: "黑人演員", value: "黑人演員" },
  { title: "护士", value: "護士" },
  { title: "妓女", value: "妓女" },
  { title: "家教", value: "家教" },
  { title: "讲师", value: "講師" },
  { title: "角色扮演者", value: "角色扮演者" },
  { title: "姐姐", value: "姐姐" },
  { title: "拉拉队", value: "拉拉隊" },
  { title: "辣妹", value: "辣妹" },
  { title: "老闆娘，女主人", value: "老闆娘，女主人" },
  { title: "老年男性", value: "老年男性" },
  { title: "老太婆", value: "老太婆" },
  { title: "礼儀小姐", value: "禮儀小姐" },
  { title: "媽媽的朋友", value: "媽媽的朋友" },
  { title: "美少女", value: "美少女" },
  { title: "妹妹", value: "妹妹" },
  { title: "秘书", value: "秘書" },
  { title: "明星脸", value: "明星臉" },
  { title: "模特儿", value: "模特兒" },
  { title: "母親", value: "母親" },
  { title: "年轻女孩", value: "年輕女孩" },
  { title: "女大学生", value: "女大學生" },
  { title: "女儿", value: "女兒" },
  { title: "女檢察官", value: "女檢察官" },
  { title: "女教师", value: "女教師" },
  { title: "女王", value: "女王" },
  { title: "女医生", value: "女醫生" },
  { title: "女主播", value: "女主播" },
  { title: "偶像", value: "偶像" },
  { title: "婆婆", value: "婆婆" },
  { title: "其他学生", value: "其他學生" },
  { title: "赛车女郎", value: "賽車女郎" },
  { title: "童年朋友", value: "童年朋友" },
  { title: "新娘，年轻妻子", value: "新娘，年輕妻子" },
  { title: "亚洲女演員", value: "亞洲女演員" },
  { title: "养女", value: "養女" },
  { title: "已婚妇女", value: "已婚婦女" },
  { title: "艺人", value: "藝人" },
  { title: "御宅族", value: "御宅族" },
  { title: "展場女孩", value: "展場女孩" },
];

const CATEMBY_TAG_CLOTH_OPTIONS = [
  { title: "动画人物", value: "動畫人物" },
  { title: "短裙", value: "短裙" },
  { title: "高跟鞋", value: "高跟鞋" },
  { title: "和服，喪服", value: "和服，喪服" },
  { title: "角色扮演", value: "角色扮演" },
  { title: "紧身衣", value: "緊身衣" },
  { title: "空中小姐", value: "空中小姐" },
  { title: "连裤襪", value: "連褲襪" },
  { title: "蘿莉角色扮演", value: "蘿莉角色扮演" },
  { title: "裸体圍裙", value: "裸體圍裙" },
  { title: "貓耳女", value: "貓耳女" },
  { title: "迷你裙", value: "迷你裙" },
  { title: "迷你裙警察", value: "迷你裙警察" },
  { title: "内衣", value: "內衣" },
  { title: "女祭司", value: "女祭司" },
  { title: "女忍者", value: "女忍者" },
  { title: "女傭", value: "女傭" },
  { title: "女战士", value: "女戰士" },
  { title: "女装人妖", value: "女裝人妖" },
  { title: "泡泡襪", value: "泡泡襪" },
  { title: "旗袍", value: "旗袍" },
  { title: "身体意识", value: "身體意識" },
  { title: "水手服", value: "水手服" },
  { title: "丝襪、过膝襪", value: "絲襪、過膝襪" },
  { title: "兔女郎", value: "兔女郎" },
  { title: "娃娃", value: "娃娃" },
  { title: "猥褻穿着", value: "猥褻穿著" },
  { title: "校服", value: "校服" },
  { title: "修女", value: "修女" },
  { title: "靴子", value: "靴子" },
  { title: "学校泳装", value: "學校泳裝" },
  { title: "眼镜", value: "眼鏡" },
  { title: "泳装", value: "泳裝" },
  { title: "浴衣", value: "浴衣" },
  { title: "运动短裤", value: "運動短褲" },
  { title: "制服", value: "制服" },
  { title: "制服外套", value: "制服外套" },
  { title: "COSPLAY服饰", value: "COSPLAY服飾" },
  { title: "OL", value: "OL" },
];

const CATEMBY_TAG_BODY_OPTIONS = [
  { title: "变性者", value: "變性者" },
  { title: "超乳", value: "超乳" },
  { title: "大屁股", value: "大屁股" },
  { title: "多毛", value: "多毛" },
  { title: "高挑", value: "高挑" },
  { title: "肌肉", value: "肌肉" },
  { title: "巨大阴莖", value: "巨大陰莖" },
  { title: "巨乳", value: "巨乳" },
  { title: "蘿莉塔", value: "蘿莉塔" },
  { title: "美腳", value: "美腳" },
  { title: "美乳", value: "美乳" },
  { title: "美臀", value: "美臀" },
  { title: "苗條", value: "苗條" },
  { title: "胖女人", value: "胖女人" },
  { title: "平胸", value: "平胸" },
  { title: "瘦小身型", value: "瘦小身型" },
  { title: "熟女", value: "熟女" },
  { title: "素人", value: "素人" },
  { title: "无毛", value: "無毛" },
  { title: "孕妇", value: "孕婦" },
];

const CATEMBY_TAG_BEHAVIOR_OPTIONS = [
  { title: "69", value: "69" },
  { title: "按摩", value: "按摩" },
  { title: "白眼失神", value: "白眼失神" },
  { title: "不穿内裤", value: "不穿內褲" },
  { title: "不穿胸罩", value: "不穿胸罩" },
  { title: "潮吹", value: "潮吹" },
  { title: "打屁股", value: "打屁股" },
  { title: "多P", value: "多P" },
  { title: "二穴同入", value: "二穴同入" },
  { title: "放尿", value: "放尿" },
  { title: "肛门・肛交", value: "肛門・肛交" },
  { title: "后入", value: "後入" },
  { title: "接吻", value: "接吻" },
  { title: "口交", value: "口交" },
  { title: "濫交", value: "濫交" },
  { title: "两男两女", value: "兩男兩女" },
  { title: "两男一女", value: "兩男一女" },
  { title: "两女一男", value: "兩女一男" },
  { title: "母乳", value: "母乳" },
  { title: "女上位", value: "女上位" },
  { title: "排便", value: "排便" },
  { title: "骑乗位", value: "騎乗位" },
  { title: "拳交", value: "拳交" },
  { title: "乳交", value: "乳交" },
  { title: "搔癢", value: "搔癢" },
  { title: "深喉", value: "深喉" },
  { title: "食糞", value: "食糞" },
  { title: "手淫", value: "手淫" },
  { title: "手指插入", value: "手指插入" },
  { title: "剃毛", value: "剃毛" },
  { title: "舔阴", value: "舔陰" },
  { title: "吞精", value: "吞精" },
  { title: "颜射", value: "顏射" },
  { title: "淫语", value: "淫語" },
  { title: "饮尿", value: "飲尿" },
  { title: "瑜伽·健身", value: "瑜伽·健身" },
  { title: "約会", value: "約會" },
  { title: "中出", value: "中出" },
  { title: "自慰", value: "自慰" },
  { title: "足交", value: "足交" },
];

const CATEMBY_TAG_PLAY_OPTIONS = [
  { title: "按摩棒", value: "按摩棒" },
  { title: "鼻钩", value: "鼻鉤" },
  { title: "插入异物", value: "插入異物" },
  { title: "催眠", value: "催眠" },
  { title: "導尿", value: "導尿" },
  { title: "調教", value: "調教" },
  { title: "糞便", value: "糞便" },
  { title: "夫妻交換", value: "夫妻交換" },
  { title: "輔助自慰", value: "輔助自慰" },
  { title: "灌腸", value: "灌腸" },
  { title: "戶外", value: "戶外" },
  { title: "假阳具", value: "假陽具" },
  { title: "监禁", value: "監禁" },
  { title: "紧縛", value: "緊縛" },
  { title: "拘束", value: "拘束" },
  { title: "口球", value: "口球" },
  { title: "捆綁", value: "捆綁" },
  { title: "蠟燭", value: "蠟燭" },
  { title: "立即口交", value: "立即口交" },
  { title: "凌辱", value: "凌辱" },
  { title: "露出", value: "露出" },
  { title: "轮姦", value: "輪姦" },
  { title: "蒙面・面罩", value: "蒙面・面罩" },
  { title: "女優按摩棒", value: "女優按摩棒" },
  { title: "汽车性爱", value: "汽車性愛" },
  { title: "乳釘、穿孔、乳環", value: "乳釘、穿孔、乳環" },
  { title: "乳液", value: "乳液" },
  { title: "跳蛋", value: "跳蛋" },
  { title: "脫衣", value: "脫衣" },
  { title: "唾液敷面", value: "唾液敷面" },
  { title: "玩具", value: "玩具" },
  { title: "羞恥", value: "羞恥" },
  { title: "鴨嘴", value: "鴨嘴" },
  { title: "藥物", value: "藥物" },
  { title: "站立后入", value: "站立後入" },
  { title: "子宮頸", value: "子宮頸" },
  { title: "SM", value: "SM" },
];

const CATEMBY_TAG_CATEGORY_OPTIONS = [
  { title: "16小时以上作品", value: "16小時以上作品" },
  { title: "3D", value: "3D" },
  { title: "4小时以上作品", value: "4小時以上作品" },
  { title: "4K", value: "4K" },
  { title: "爱好，文化", value: "愛好，文化" },
  { title: "薄马赛克", value: "薄馬賽克" },
  { title: "成人电影", value: "成人電影" },
  { title: "触摸打字", value: "觸摸打字" },
  { title: "单体作品", value: "單體作品" },
  { title: "第一人稱摄影", value: "第一人稱攝影" },
  { title: "独立制作", value: "獨立製作" },
  { title: "访问", value: "訪問" },
  { title: "感官作品", value: "感官作品" },
  { title: "感谢祭", value: "感謝祭" },
  { title: "给女性观众", value: "給女性觀眾" },
  { title: "共演", value: "共演" },
  { title: "故事集", value: "故事集" },
  { title: "国外进口", value: "國外進口" },
  { title: "滑稽模仿", value: "滑稽模仿" },
  { title: "纪录片", value: "紀錄片" },
  { title: "教学", value: "教學" },
  { title: "介紹影片", value: "介紹影片" },
  { title: "经典", value: "經典" },
  { title: "精选综合", value: "精選綜合" },
  { title: "局部特寫", value: "局部特寫" },
  { title: "科幻", value: "科幻" },
  { title: "恐怖", value: "恐怖" },
  { title: "历史劇", value: "歷史劇" },
  { title: "恋爱", value: "戀愛" },
  { title: "冒险", value: "冒險" },
  { title: "美少女电影", value: "美少女電影" },
  { title: "模擬", value: "模擬" },
  { title: "男性", value: "男性" },
  { title: "去背影片", value: "去背影片" },
  { title: "首次亮相", value: "首次亮相" },
  { title: "數位马赛克", value: "數位馬賽克" },
  { title: "素人作品", value: "素人作品" },
  { title: "特效", value: "特效" },
  { title: "投稿", value: "投稿" },
  { title: "无码流出", value: "無碼流出" },
  { title: "无码破解", value: "無碼破解" },
  { title: "西洋片", value: "西洋片" },
  { title: "戏劇", value: "戲劇" },
  { title: "寫真偶像", value: "寫真偶像" },
  { title: "心理惊悚", value: "心理驚悚" },
  { title: "行动", value: "行動" },
  { title: "懸疑", value: "懸疑" },
  { title: "养尊处優", value: "養尊處優" },
  { title: "业余", value: "業餘" },
  { title: "原作改编", value: "原作改編" },
  { title: "战斗行动", value: "戰鬥行動" },
  { title: "重印版", value: "重印版" },
  { title: "主观视角", value: "主觀視角" },
  { title: "综合短篇", value: "綜合短篇" },
  { title: "综艺", value: "綜藝" },
  { title: "HDTV", value: "HDTV" },
  { title: "R-15", value: "R-15" },
  { title: "VR", value: "VR" },
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
  description: "catemby遗产站点.搜索.分类.预告.完整片.聚合",
  author: "老头",
  site: "https://catembylegacy.fastcdn.dpdns.org",
  version: "1.4.5",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
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
      cacheDuration: 3600,
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
      cacheDuration: 3600,
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
      cacheDuration: 3600,
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
      cacheDuration: 3600,
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
      cacheDuration: 3600,
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
      cacheDuration: 3600,
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
      cacheDuration: 3600,
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
      cacheDuration: 3600,
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
      cacheDuration: 3600,
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
      cacheDuration: 3600,
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
      description: "通过番号匹配预告片与完整影片播放源",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 600,
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

function buildCategoryFilter(kind, itemId, movieType, listFilter) {
  const kindCode = CATEGORY_KIND_CODE[kind] || "0";
  const typePart = MOVIE_TYPE_CODE[movieType || "all"] || "0";
  let filterBy = kindCode + ":" + typePart + ":" + itemId;
  const extra = LIST_FILTER_CODE[listFilter || "all"];
  if (extra) filterBy += ":" + extra;
  return filterBy;
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

function buildJdbstaticThumbUrl(movieId) {
  const id = String(movieId || "").trim();
  if (!id || id.length < 2) return "";
  return JDBSTATIC_BASE + "/thumbs/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function buildJdbstaticCoverUrl(movieId) {
  const id = String(movieId || "").trim();
  if (!id || id.length < 2) return "";
  return JDBSTATIC_BASE + "/covers/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function resolveSiteCoverUrl(movie) {
  const apiCover = String(movie.cover_url || "").trim();
  if (apiCover && !/^data:/i.test(apiCover)) return apiCover;
  return "";
}

function resolveSiteThumbUrl(movie) {
  const apiThumb = String(movie.thumb_url || "").trim();
  if (apiThumb && !/^data:/i.test(apiThumb)) return apiThumb;
  return "";
}

function resolveListThumbUrl(movie) {
  const site = resolveSiteThumbUrl(movie);
  if (site) return site;
  return buildJdbstaticThumbUrl(movie.id) || "";
}

function resolveListCoverUrl(movie) {
  const site = resolveSiteCoverUrl(movie);
  if (site) return site;
  const cover = buildJdbstaticCoverUrl(movie.id);
  if (cover) return cover;
  return resolveListThumbUrl(movie);
}

function resolveDetailBackdropUrl(movie) {
  return resolveListCoverUrl(movie);
}

function resolveDetailPosterUrl(movie) {
  return resolveListCoverUrl(movie);
}

function buildResolveCodeVariants(code) {
  const raw = safeText(code);
  const variants = [];
  if (raw) variants.push(raw);
  if (raw) {
    const upper = raw.toUpperCase();
    const compact = upper.replace(/[\s_]+/g, "").replace(/-+/g, "-");
    const noDash = upper.replace(/-/g, "");
    variants.push(upper, compact, noDash);
  }
  const out = [];
  const seen = {};
  variants.forEach((item) => {
    const val = String(item || "").trim();
    if (!val || seen[val]) return;
    seen[val] = true;
    out.push(val);
  });
  return out;
}

function pickResolveVariant(data) {
  if (!data || data.error || !Array.isArray(data.variants) || !data.variants.length) return null;
  const picked = data.variants.find((item) => item.variant === "original") || data.variants[0];
  return picked && picked.sourceUrl ? picked : null;
}

async function enrichListMovies(movies) {
  return movies.map(mapListMovie);
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
    const raw = String((item && item.large_url) || "").trim();
    if (!raw || /^data:/i.test(raw) || seen[raw]) return;
    seen[raw] = true;
    urls.push(raw);
  });
  if (!urls.length) {
    const thumb = resolveListThumbUrl(movie);
    if (thumb) urls.push(thumb);
    else {
      const cover = resolveListCoverUrl(movie);
      if (cover) urls.push(cover);
    }
  }
  return urls;
}

function buildPreviewClipUrl(code) {
  return siteUrl("/preview.mp4?number=" + encodeURIComponent(code || ""));
}

function mapListMovie(movie) {
  const code = safeText(movie.number || movie.id);
  const title = safeText(movie.title || code);
  const cover = resolveListCoverUrl(movie);
  return {
    id: code || movie.id,
    type: "url",
    mediaType: "movie",
    title: code ? code + " " + title.replace(new RegExp("^" + code + "\\s*"), "") : title,
    backdropPath: cover,
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
  if (movie.number) parts.push("番号: " + movie.number);
  if (movie.can_play) parts.push("可播放");
  if (movie.has_preview_video) parts.push("预告");
  if (movie.has_cnsub) parts.push("中文字幕");
  if ((movie.magnets_count || 0) > 0) parts.push("磁链");
  return parts.join(" | ");
}

function mapRelatedMovie(item, fallbackCover) {
  const cover =
    item.cover_url ||
    buildJdbstaticCoverUrl(item.id) ||
    item.thumb_url ||
    fallbackCover ||
    "";
  const code = safeText(item.number || item.id);
  const title = safeText(item.title || code);
  return {
    id: code || item.id,
    type: "url",
    mediaType: "movie",
    title: code || title,
    backdropPath: cover || undefined,
    link: movieLink(item.id),
    description: code ? "番号: " + code : undefined,
    videoId: item.id,
  };
}

function parseDetailMeta(movie) {
  const genreItems = [];
  const peoples = [];
  const genreSeen = {};
  const peopleSeen = {};

  (movie.tags || []).forEach((tag) => {
    const name = typeof tag === "string" ? tag : tag.name;
    if (!name || genreSeen[name]) return;
    genreSeen[name] = true;
    genreItems.push({
      id: encodeLink("/categories?q=" + encodeURIComponent(name) + "&page=1"),
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

async function resolveFullVideo(code, lang) {
  if (!code) return null;
  const codes = buildResolveCodeVariants(code);
  for (let i = 0; i < codes.length; i++) {
    const data = await siteGet("/api/v/resolve", { code: codes[i], lang: lang || "zh" }, { allowError: true });
    const picked = pickResolveVariant(data);
    if (picked) return picked;
    if (data && data.error === "video_not_found") return null;
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

    const movieType = params.movie_type || "all";
    const filterBy = buildCategoryFilter(ctx.kind, ctx.itemId, movieType, params.list_filter || "all");
    const movies = await fetchCategoryMovies(filterBy, params);
    if (!movies.length && ctx.kind === "makers") {
      const searchData = await apiGet("/v2/search", { q: ctx.itemId, page: Number(params.page || 1), type: "movie" });
      return enrichListMovies(searchData.movies || []);
    }
    return enrichListMovies(movies);
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

async function loadDetail(link) {
  const movieId = extractMovieId(link);
  const parsed = parseLinkQuery(link);
  const videoMode = String(parsed.query.mode || parsed.query.video_mode || "full").toLowerCase();
  const preferPreview = videoMode === "preview" || videoMode === "trailer";

  const detail = await apiGet("/v4/movies/" + movieId);
  const movie = detail.movie || {};
  const fullVideoPromise = movie.number && !preferPreview ? resolveFullVideo(movie.number, "zh") : Promise.resolve(null);

  const coverUrl = resolveDetailBackdropUrl(movie);
  const posterUrl = resolveDetailPosterUrl(movie);
  const galleryUrls = collectGalleryUrls(movie);
  const meta = parseDetailMeta(movie);
  const actorMovies = (movie.actor_movies || []).filter((item) => item.id !== movie.id).slice(0, 12);
  const fallbackRelated = (movie.relative_movies || []).filter((item) => item.id !== movie.id).slice(0, 12);
  const relatedSource = actorMovies.length ? actorMovies : fallbackRelated;
  const relatedItems = relatedSource.map((item) => mapRelatedMovie(item, posterUrl || coverUrl));

  const previewUrl = movie.preview_video_url || "";
  const fullVideo = await fullVideoPromise;
  const fullUrl = fullVideo && fullVideo.sourceUrl ? fullVideo.sourceUrl : "";
  const playbackUrl = preferPreview ? previewUrl || fullUrl || "" : fullUrl || previewUrl || "";
  const trailers = buildTrailers(movie, posterUrl || coverUrl);

  const code = safeText(movie.number || movieId);
  const titleText = safeText(movie.title || code);
  const displayTitle = code && titleText.indexOf(code) !== 0 ? code + " " + titleText : titleText;
  const summary = safeText(movie.summary || "");

  return {
    id: code || movie.id || movieId,
    type: "detail",
    mediaType: "movie",
    title: displayTitle,
    link: movieLink(movie.id || movieId),
    description: summary || undefined,
    videoUrl: playbackUrl || undefined,
    playerType: playbackUrl && /\.m3u8/i.test(playbackUrl) ? "ijk" : "system",
    customHeaders: {
      "User-Agent": UA,
      Referer: SITE_BASE + "/movie/" + movieId,
      Origin: SITE_BASE,
    },
    backdropPath: coverUrl,
    posterPath: posterUrl,
    detailPoster: posterUrl,
    backdropPaths: galleryUrls.length ? galleryUrls : coverUrl ? [coverUrl] : [],
    genreItems: meta.genreItems.length ? meta.genreItems : undefined,
    peoples: meta.peoples.length ? meta.peoples : undefined,
    relatedItems,
    trailers,
    previewUrl: previewUrl || "",
    releaseDate: movie.release_date || "",
    durationText: movie.duration ? movie.duration + " 分钟" : "",
    rating: Number(movie.score || 0) || 0,
    videoId: movie.id || movieId,
    extra: Object.assign(
      {
        videoMode: fullUrl ? "full" : previewUrl ? "preview" : "none",
        previewVideoUrl: previewUrl || "",
        fullVideoAvailable: !!fullUrl,
      },
      !fullUrl && movie.number ? { resolveNote: "站点未收录完整片源(" + movie.number + ")" } : {},
      fullVideo
        ? {
            fullVideoUrl: fullVideo.sourceUrl,
            fullVideoLabel: fullVideo.label || fullVideo.variant || "完整视频",
            fullVideoType: fullVideo.sourceType || "video/mp4",
          }
        : {}
    ),
  };
}

function normalizeCode(value) {
  return String(value || "").toUpperCase().replace(/[\s_\-]+/g, "");
}

function extractSearchCode(text) {
  const s = String(text || "").toUpperCase().replace(/\./g, " ").replace(/_/g, "-").replace(/\s+/g, " ").trim();
  if (!s) return "";
  const patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?\d{5,8}\b/,
    /\b(?:S2M|MIAA|SSNI|SNIS|IPX|IPZZ|SSIS|JUQ|MIDE|MIDV|STARS|ABW|RKI|DVAJ|WANZ|LULU|DLDSS|VRTM|SDMU|SDDE|MKMP|HMN|MUDR|ADN|CAWD|PPPE|PRED|MGR|SHKD|MXGS|FSDSS|JUL|KTB|MIAB|GVH|MIMK|JUY|JUTA|IDBD|HND|DASD|CLO|BF|HONB|ROE|CEMD|MIUM|NITR|RCTD|RCT|IPVR|MIBD|JUR|JURD|SOE|ORE|PYO|START|NSFS|JJGG|BANK|MILK|SIR|FSOK|KV|KIWVR|MREC|DVRT|VOD)\s*[-_ ]?\d{2,6}[A-Z]?(?:[-_ ]?[A-Z]{0,4})?\b/,
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
  const priority = [
    params.code, params.videoId, params.number, params.fileName, params.filename, params.file_name,
    params.name, params.path, params.filePath, params.file_path, params.mediaPath, params.media_path,
    params.id, params.title, params.seriesName, params.originalTitle, params.originalName,
    params.episodeName, params.description, params.link, params.url, params.videoUrl, params.playUrl,
    params.streamUrl,
  ];
  if (params.tmdbInfo) {
    priority.push(params.tmdbInfo.title, params.tmdbInfo.name, params.tmdbInfo.originalTitle, params.tmdbInfo.originalName);
  }
  if (params.info) {
    priority.push(params.info.title, params.info.name, params.info.originalTitle, params.info.originalName);
  }
  for (const value of priority) {
    const code = extractSearchCode(value);
    if (code) return code;
  }
  for (const value of collectStringValues(params)) {
    const code = extractSearchCode(value);
    if (code) return code;
  }
  return "";
}

async function findMovieByCode(code) {
  const target = normalizeCode(code);
  const keys = [...new Set([code, code.replace(/-/g, "")])];
  for (const key of keys) {
    const data = await apiGet("/v2/search", { q: key, page: 1, type: "movie" });
    const movies = data.movies || [];
    const exact = movies.find((item) => normalizeCode(item.number) === target);
    if (exact) return exact;
    if (movies.length === 1) return movies[0];
  }
  return null;
}

async function loadResource(params) {
  try {
    const code = extractCodeFromParams(params || {});
    if (!code) return [];

    const matched = await findMovieByCode(code);
    if (!matched || !matched.id) return [];

    const detail = await apiGet("/v4/movies/" + matched.id);
    const movie = detail.movie || matched;
    const sources = [];
    const referer = SITE_BASE + "/movie/" + movie.id;
    const headers = { "User-Agent": UA, Referer: referer, Origin: SITE_BASE };

    const fullVideo = await resolveFullVideo(movie.number || code, "zh");
    if (fullVideo && fullVideo.sourceUrl) {
      sources.push({
        name: "Catemby 完整(" + (fullVideo.label || "原版") + ")",
        description: "番号：" + code + "\n类型：完整视频",
        url: fullVideo.sourceUrl,
        customHeaders: headers,
      });
    }

    if (movie.preview_video_url) {
      sources.push({
        name: "Catemby 预告(HLS)",
        description: "番号：" + code + "\n类型：预览视频（完整片不可用时的备选）",
        url: movie.preview_video_url,
        customHeaders: headers,
      });
    }

    return sources;
  } catch (e) {
    return [];
  }
}

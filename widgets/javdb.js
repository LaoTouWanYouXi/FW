/**
 * JavDB ForwardWidget 模块
 * 抓取影片列表与详情（名称、横向封面、详情海报、剧照、简介）。
 */

var JAVDB_SORT_FILTER = ["published", "score", "fav"];
var GLOBAL_PARAM_KEYS = ["baseUrl", "locale", "coverMode"];

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
  if (!out.coverMode) out.coverMode = "fast";
  return out;
}

/* @category-options-begin — 由 build-javdb-categories.js 生成，勿手改 */
// 重新生成: node build-javdb-categories.js
var JAVDB_ACTOR_OPTIONS = [
  { title: "[无码] 愛乃なみ", value: "/actors/YyOB" },
  { title: "[无码] 愛田奈々", value: "/actors/kd96" },
  { title: "[无码] 白石ひより", value: "/actors/yMAb" },
  { title: "[无码] 百多えみり", value: "/actors/kGqY" },
  { title: "[无码] 北條麻妃", value: "/actors/wZxm" },
  { title: "[无码] 本真友裡", value: "/actors/Yyye" },
  { title: "[无码] 碧しの", value: "/actors/71OJ" },
  { title: "[无码] 波多野結衣", value: "/actors/mdRn" },
  { title: "[无码] 朝比奈菜々子", value: "/actors/61zE" },
  { title: "[无码] 朝桐光", value: "/actors/XwzV" },
  { title: "[无码] 池田咲", value: "/actors/bMPd" },
  { title: "[无码] 大槻響", value: "/actors/61OD" },
  { title: "[无码] 大橋未久", value: "/actors/21Jp" },
  { title: "[无码] 二宮ナナ", value: "/actors/Omev" },
  { title: "[无码] 吉川蓮", value: "/actors/ravq" },
  { title: "[无码] 吉澤ひかり", value: "/actors/2zgN" },
  { title: "[无码] 加藤えま", value: "/actors/Mkx1" },
  { title: "[无码] 江波りゅう", value: "/actors/pypk" },
  { title: "[无码] 蓳美香", value: "/actors/31J3" },
  { title: "[无码] 葵千恵", value: "/actors/WBmB" },
  { title: "[无码] 玲奈", value: "/actors/41E3" },
  { title: "[无码] 鈴木里美", value: "/actors/YyNK" },
  { title: "[无码] 麻生希", value: "/actors/mdPy" },
  { title: "[无码] 美玲", value: "/actors/61Q0" },
  { title: "[无码] 美穗乃", value: "/actors/E1Kd" },
  { title: "[无码] 日高千晶", value: "/actors/qgwr" },
  { title: "[无码] 上原亞衣", value: "/actors/MkAX" },
  { title: "[无码] 神山なな", value: "/actors/YygK" },
  { title: "[无码] 神無月れな", value: "/actors/bMzE" },
  { title: "[无码] 双葉みお", value: "/actors/R9P4" },
  { title: "[无码] 松本メイ", value: "/actors/E1yA" },
  { title: "[无码] 舞咲美娜", value: "/actors/A1MK" },
  { title: "[无码] 西川ゆい", value: "/actors/xpRg" },
  { title: "[无码] 希咲あや", value: "/actors/WB47" },
  { title: "[无码] 夏目なな", value: "/actors/G1Az" },
  { title: "[无码] 小川桃果", value: "/actors/888O" },
  { title: "[无码] 小泉真希", value: "/actors/JpgA" },
  { title: "[无码] 小向美奈子", value: "/actors/qg7e" },
  { title: "[无码] 小早川怜子", value: "/actors/kGGe" },
  { title: "[无码] 小澤マリア", value: "/actors/JpMR" },
  { title: "[无码] 桜瀬奈", value: "/actors/qgg9" },
  { title: "[无码] 櫻木梨乃", value: "/actors/xpm6" },
  { title: "[无码] 羽月希", value: "/actors/Q88p" },
  { title: "[无码] 雨宮琴音", value: "/actors/R9Wg" },
  { title: "[无码] 中野ありさ", value: "/actors/apJX" },
  { title: "[无码] Misa", value: "/actors/W1d5K" },
  { title: "[无码] あんな", value: "/actors/KxYA" },
  { title: "[无码] さやか", value: "/actors/KZk7" },
  { title: "[无码] すみれ", value: "/actors/Xdv1" },
  { title: "[无码] ゆき", value: "/actors/qg0N" },
  { title: "[有码] 阿部乃美久", value: "/actors/Qkdq" },
  { title: "[有码] 愛瀬美希", value: "/actors/n4PV" },
  { title: "[有码] 愛世夢羅", value: "/actors/PGqE" },
  { title: "[有码] 愛田飛鳥", value: "/actors/b97d" },
  { title: "[有码] 愛田奈々", value: "/actors/JP4B" },
  { title: "[有码] 愛須心亜", value: "/actors/Jd4z" },
  { title: "[有码] 愛音麻里亞", value: "/actors/Ng03" },
  { title: "[有码] 安部未華子", value: "/actors/RA0m" },
  { title: "[有码] 安位薫", value: "/actors/2amxZ" },
  { title: "[有码] 安齋拉拉", value: "/actors/DXE5" },
  { title: "[有码] 奧田咲", value: "/actors/wVVz" },
  { title: "[有码] 八乃翼", value: "/actors/OMAz" },
  { title: "[有码] 白峰美羽", value: "/actors/W1wee" },
  { title: "[有码] 白木優子", value: "/actors/OEdK" },
  { title: "[有码] 白石茉莉奈", value: "/actors/0YZq" },
  { title: "[有码] 白石未央", value: "/actors/20PP" },
  { title: "[有码] 白石りん", value: "/actors/gKGy" },
  { title: "[有码] 白桃花", value: "/actors/Xa1G" },
  { title: "[有码] 白咲柚子", value: "/actors/Z5BA" },
  { title: "[有码] 百合川雅", value: "/actors/vRpp" },
  { title: "[有码] 坂道美琉", value: "/actors/vd5z" },
  { title: "[有码] 坂咲美穗", value: "/actors/DNb3" },
  { title: "[有码] 浜崎真緒", value: "/actors/6v9D" },
  { title: "[有码] 保坂えり", value: "/actors/a8Vg" },
  { title: "[有码] 寶生莉莉", value: "/actors/Q0YG" },
  { title: "[有码] 寶田萌奈美", value: "/actors/GWkD" },
  { title: "[有码] 北川柚子", value: "/actors/ppB" },
  { title: "[有码] 北條麻妃", value: "/actors/9D1q" },
  { title: "[有码] 北野望", value: "/actors/72Z" },
  { title: "[有码] 本田岬", value: "/actors/qOA9" },
  { title: "[有码] 本真友裡", value: "/actors/E4bx" },
  { title: "[有码] 本庄鈴", value: "/actors/BzpA" },
  { title: "[有码] 本莊優花", value: "/actors/pknw" },
  { title: "[有码] 碧しの", value: "/actors/WAPK" },
  { title: "[有码] 並木塔子", value: "/actors/ZpqJ" },
  { title: "[有码] 波多野結衣", value: "/actors/R2Vg" },
  { title: "[有码] 波木遙", value: "/actors/p7Nw" },
  { title: "[有码] 彩美旬果", value: "/actors/5Dya" },
  { title: "[有码] 倉多真央", value: "/actors/WZGR" },
  { title: "[有码] 倉木詩織", value: "/actors/8PrK" },
  { title: "[有码] 成宮いろは", value: "/actors/ZdX7" },
  { title: "[有码] 赤城碧", value: "/actors/2GGP" },
  { title: "[有码] 赤渕蓮", value: "/actors/6x39" },
  { title: "[有码] 沖田杏梨", value: "/actors/pDeZ" },
  { title: "[有码] 初川南", value: "/actors/E6MM" },
  { title: "[有码] 初美沙希", value: "/actors/J6Rx" },
  { title: "[有码] 初音實", value: "/actors/QWB8" },
  { title: "[有码] 雛菊つばさ", value: "/actors/YE1d" },
  { title: "[有码] 川菜美鈴", value: "/actors/J4mB" },
  { title: "[有码] 川村真矢", value: "/actors/zM6E" },
  { title: "[有码] 川上奈奈美", value: "/actors/pPBw" },
  { title: "[有码] 椎名空", value: "/actors/NO1N" },
  { title: "[有码] 春菜華", value: "/actors/0J0q" },
  { title: "[有码] 春咲涼", value: "/actors/y7xb" },
  { title: "[有码] 春原未来", value: "/actors/X5AJ" },
  { title: "[有码] 椿織里美", value: "/actors/VXw3" },
  { title: "[有码] 湊莉久", value: "/actors/QnE8" },
  { title: "[有码] 村上涼子", value: "/actors/RYXD" },
  { title: "[有码] 大場唯", value: "/actors/ZY7V" },
  { title: "[有码] 大島優香", value: "/actors/ZdQv" },
  { title: "[有码] 大槻響", value: "/actors/BKMM" },
  { title: "[有码] 大浦真奈美", value: "/actors/9N9V" },
  { title: "[有码] 稻場流花", value: "/actors/vNKW" },
  { title: "[有码] 蒂亞", value: "/actors/9dQE" },
  { title: "[有码] 冬月楓", value: "/actors/Arq0" },
  { title: "[有码] 東凛", value: "/actors/y8Mv" },
  { title: "[有码] 東條夏", value: "/actors/A6zy" },
  { title: "[有码] 二宮和香", value: "/actors/1ERn" },
  { title: "[有码] 妃月るい", value: "/actors/MbzQ" },
  { title: "[有码] 飛鳥鈴", value: "/actors/Rp08" },
  { title: "[有码] 風間由美", value: "/actors/82m3" },
  { title: "[有码] 楓真衣", value: "/actors/2k0w" },
  { title: "[有码] 逢澤真里亞", value: "/actors/nWJ9" },
  { title: "[有码] 高崎聖子", value: "/actors/x4MV" },
  { title: "[有码] 高杉麻里", value: "/actors/vOMb" },
  { title: "[有码] 根尾朱里", value: "/actors/kGQP" },
  { title: "[有码] 宮崎彩", value: "/actors/eKgR" },
  { title: "[有码] 宮下華奈", value: "/actors/xv1V" },
  { title: "[有码] 宮沢ゆかり", value: "/actors/YnO8" },
  { title: "[有码] 谷原希美", value: "/actors/GJvg" },
  { title: "[有码] 関根奈美", value: "/actors/YOMK" },
  { title: "[有码] 広瀬うみ", value: "/actors/ymrd" },
  { title: "[有码] 河北彩花", value: "/actors/EvkJ" },
  { title: "[有码] 河合明日菜", value: "/actors/69A0" },
  { title: "[有码] 河南實裡", value: "/actors/zkJ7" },
  { title: "[有码] 河西亞美", value: "/actors/94V6" },
  { title: "[有码] 黑川紗里奈", value: "/actors/Nmbw" },
  { title: "[有码] 横山みれい", value: "/actors/ynWg" },
  { title: "[有码] 後藤裏香", value: "/actors/5rr9" },
  { title: "[有码] 胡桃沢ももこ", value: "/actors/y3pg" },
  { title: "[有码] 戶田真琴", value: "/actors/36Qa" },
  { title: "[有码] 花咲一杏", value: "/actors/eWG1" },
  { title: "[有码] 凰香奈芽", value: "/actors/y43v" },
  { title: "[有码] 姬川優奈", value: "/actors/zMyQ" },
  { title: "[有码] 跡美珠裏", value: "/actors/3Jdb" },
  { title: "[有码] 吉川愛美", value: "/actors/5Xx6" },
  { title: "[有码] 吉川蓮", value: "/actors/kyGz" },
  { title: "[有码] 吉高寧寧", value: "/actors/rPrR" },
  { title: "[有码] 吉根柚莉愛", value: "/actors/0Bw3" },
  { title: "[有码] 吉沢明歩", value: "/actors/0yVv" },
  { title: "[有码] 佳苗琉華", value: "/actors/O1bD" },
  { title: "[有码] 岬奈奈美", value: "/actors/QNen" },
  { title: "[有码] 榎本美咲", value: "/actors/dDy5" },
  { title: "[有码] 架乃由羅", value: "/actors/p50Z" },
  { title: "[有码] 菅野松雪", value: "/actors/rngN" },
  { title: "[有码] 江上しほ", value: "/actors/5rPM" },
  { title: "[有码] 皆川千遙", value: "/actors/bJJg" },
  { title: "[有码] 結城乃乃", value: "/actors/8GYx" },
  { title: "[有码] 結月恭子", value: "/actors/B4Ga" },
  { title: "[有码] 結まきな", value: "/actors/KW5m" },
  { title: "[有码] 今井真由美", value: "/actors/RPN8" },
  { title: "[有码] 蓳美香", value: "/actors/WPr7" },
  { title: "[有码] 井上綾子", value: "/actors/kPEN" },
  { title: "[有码] 九重環奈", value: "/actors/EKz4" },
  { title: "[有码] 君島美緒", value: "/actors/96AR" },
  { title: "[有码] 葵千恵", value: "/actors/1q3n" },
  { title: "[有码] 葵司", value: "/actors/A5yq" },
  { title: "[有码] 瀨名光莉", value: "/actors/2a7m" },
  { title: "[有码] 蕾", value: "/actors/M6mA" },
  { title: "[有码] 里美尤利婭", value: "/actors/dxqQ" },
  { title: "[有码] 立花瑠莉", value: "/actors/2wQW" },
  { title: "[有码] 蓮實克蕾兒", value: "/actors/B0nG" },
  { title: "[有码] 涼川絢音", value: "/actors/mmyZ" },
  { title: "[有码] 涼宮琴音", value: "/actors/V1Gn" },
  { title: "[有码] 涼海みさ", value: "/actors/AyRe" },
  { title: "[有码] 涼森玲夢", value: "/actors/KxPb" },
  { title: "[有码] 林美玲", value: "/actors/bdpe" },
  { title: "[有码] 林由奈", value: "/actors/qPer" },
  { title: "[有码] 凜音桃花", value: "/actors/Xzr5" },
  { title: "[有码] 鈴村愛裏", value: "/actors/nRKm" },
  { title: "[有码] 鈴木心春", value: "/actors/b7A0" },
  { title: "[有码] 鈴木真夕", value: "/actors/MEYQ" },
  { title: "[有码] 鈴原愛蜜莉", value: "/actors/98Yp" },
  { title: "[有码] 柳美憂", value: "/actors/N20b" },
  { title: "[有码] 蘆名尤莉婭", value: "/actors/4vyE" },
  { title: "[有码] 麻倉憂", value: "/actors/exkz" },
  { title: "[有码] 麻里梨夏", value: "/actors/G9P5" },
  { title: "[有码] 麻美由真", value: "/actors/ex3z" },
  { title: "[有码] 麻生希", value: "/actors/dx6M" },
  { title: "[有码] 美波沙耶", value: "/actors/QB6K" },
  { title: "[有码] 美谷朱里", value: "/actors/gyRE" },
  { title: "[有码] 美咲佳奈", value: "/actors/8Nqa" },
  { title: "[有码] 美竹鈴", value: "/actors/z407" },
  { title: "[有码] 夢乃愛華", value: "/actors/AbBK" },
  { title: "[有码] 彌生美月", value: "/actors/Jekq" },
  { title: "[有码] 明里ともか", value: "/actors/06nE" },
  { title: "[有码] 明裏紬", value: "/actors/M4Q7" },
  { title: "[有码] 明日花綺羅", value: "/actors/wm9B" },
  { title: "[有码] 木南日菜", value: "/actors/W1xR" },
  { title: "[有码] 牧村彩香", value: "/actors/Qka8" },
  { title: "[有码] 南梨央奈", value: "/actors/QvZ4" },
  { title: "[有码] 七海蒂娜", value: "/actors/gbbZ" },
  { title: "[有码] 七海ゆあ", value: "/actors/Akb0" },
  { title: "[有码] 七瀬あいり", value: "/actors/5BeM" },
  { title: "[有码] 七森莉莉", value: "/actors/Ewa2" },
  { title: "[有码] 七實裏菜", value: "/actors/PwOE" },
  { title: "[有码] 七澤美亞", value: "/actors/NPD3" },
  { title: "[有码] 斉藤みゆ", value: "/actors/peAb" },
  { title: "[有码] 祈里きすみ", value: "/actors/ZPaV" },
  { title: "[有码] 千乃杏美", value: "/actors/kq86" },
  { title: "[有码] 乾立夏", value: "/actors/g7ym" },
  { title: "[有码] 浅田結梨", value: "/actors/pV3E" },
  { title: "[有码] 橋本麗華", value: "/actors/Nq7B" },
  { title: "[有码] 青山華", value: "/actors/RZPR" },
  { title: "[有码] 清城雪", value: "/actors/bx2E" },
  { title: "[有码] 丘咲エミリ", value: "/actors/NgYx" },
  { title: "[有码] 秋山祥子", value: "/actors/eVGM" },
  { title: "[有码] 泉水らん", value: "/actors/kPa6" },
  { title: "[有码] 仁美圓香", value: "/actors/de29" },
  { title: "[有码] 日菜々はのん", value: "/actors/58DY" },
  { title: "[有码] 日向真凜", value: "/actors/4rw3" },
  { title: "[有码] 栄川乃亜", value: "/actors/5rkM" },
  { title: "[有码] 若菜奈央", value: "/actors/w49n" },
  { title: "[有码] 若月美衣奈", value: "/actors/gDAy" },
  { title: "[有码] 若月まりあ", value: "/actors/zVJb" },
  { title: "[有码] 三島奈津子", value: "/actors/pk1m" },
  { title: "[有码] 三浦歩美", value: "/actors/19yv" },
  { title: "[有码] 三浦恵理子", value: "/actors/pkOm" },
  { title: "[有码] 三上悠亜", value: "/actors/Av2e" },
  { title: "[有码] 三原穗香", value: "/actors/g40m" },
  { title: "[有码] 澀谷果步", value: "/actors/R1GK" },
  { title: "[有码] 森川杏奈", value: "/actors/3d9" },
  { title: "[有码] 森澤佳奈", value: "/actors/A0Qy" },
  { title: "[有码] 纱纱原百合", value: "/actors/9ZAR" },
  { title: "[有码] 紗倉真菜", value: "/actors/J9dd" },
  { title: "[有码] 山岸逢花", value: "/actors/8BDW" },
  { title: "[有码] 上原瑞穂", value: "/actors/m7Vn" },
  { title: "[有码] 上原亜衣", value: "/actors/2D6w" },
  { title: "[有码] 深田奈奈", value: "/actors/M8kX" },
  { title: "[有码] 深田詠美", value: "/actors/pRMq" },
  { title: "[有码] 神坂朋子", value: "/actors/0317" },
  { title: "[有码] 神波多一花", value: "/actors/N74b" },
  { title: "[有码] 神宮寺奈緒", value: "/actors/ZzNm" },
  { title: "[有码] 神谷充希", value: "/actors/V933" },
  { title: "[有码] 神山なな", value: "/actors/bRe6" },
  { title: "[有码] 神咲詩織", value: "/actors/vynb" },
  { title: "[有码] 神咲舞", value: "/actors/9kJV" },
  { title: "[有码] 神雪", value: "/actors/gPQQ" },
  { title: "[有码] 石原莉奈", value: "/actors/Oqd0" },
  { title: "[有码] 辻本杏", value: "/actors/5J58" },
  { title: "[有码] 市川雅美", value: "/actors/7a4P" },
  { title: "[有码] 樞木葵", value: "/actors/zAmz" },
  { title: "[有码] 双葉良香", value: "/actors/M4G1" },
  { title: "[有码] 水卜櫻", value: "/actors/0edE" },
  { title: "[有码] 水菜麗", value: "/actors/de9B" },
  { title: "[有码] 水川蓳", value: "/actors/g7WA" },
  { title: "[有码] 水無瀬優夏", value: "/actors/2VpB" },
  { title: "[有码] 水咲卡蓮", value: "/actors/xvZ8" },
  { title: "[有码] 水咲蘿拉", value: "/actors/OpzD" },
  { title: "[有码] 水野朝陽", value: "/actors/35re" },
  { title: "[有码] 水沢のの", value: "/actors/qDOx" },
  { title: "[有码] 松本菜奈実", value: "/actors/YZyp" },
  { title: "[有码] 松本芽依", value: "/actors/94m6" },
  { title: "[有码] 松本一香", value: "/actors/AOqm" },
  { title: "[有码] 松下紗栄子", value: "/actors/6qA7" },
  { title: "[有码] 松雪佳苗", value: "/actors/eOBz" },
  { title: "[有码] 桃谷繪裏香", value: "/actors/gwE" },
  { title: "[有码] 桃乃木香奈", value: "/actors/0dKX" },
  { title: "[有码] 桃咲ゆり菜", value: "/actors/7x1" },
  { title: "[有码] 藤川れいな", value: "/actors/gDRQ" },
  { title: "[有码] 藤浦惠", value: "/actors/BWy1" },
  { title: "[有码] 笹倉杏", value: "/actors/6Pra" },
  { title: "[有码] 天海翼", value: "/actors/N4YG" },
  { title: "[有码] 天木悠", value: "/actors/e8gp" },
  { title: "[有码] 天使萌", value: "/actors/5Oyz" },
  { title: "[有码] 天野美優", value: "/actors/RZBg" },
  { title: "[有码] 田中檸檬", value: "/actors/kzx6" },
  { title: "[有码] 通野未帆", value: "/actors/05OX" },
  { title: "[有码] 桐嶋莉乃", value: "/actors/ne2M" },
  { title: "[有码] 桐谷なお", value: "/actors/vDN9" },
  { title: "[有码] 推川悠裡", value: "/actors/ZqB6" },
  { title: "[有码] 望月彩花", value: "/actors/NxGN" },
  { title: "[有码] 唯井真尋", value: "/actors/nAnV" },
  { title: "[有码] 尾上若葉", value: "/actors/WyDQ" },
  { title: "[有码] 五十嵐星蘭", value: "/actors/y3ma" },
  { title: "[有码] 武藤彩香", value: "/actors/yAW" },
  { title: "[有码] 舞島あかり", value: "/actors/YnK" },
  { title: "[有码] 舞咲美娜", value: "/actors/7bnR" },
  { title: "[有码] 霧島里緒菜", value: "/actors/1z5J" },
  { title: "[有码] 霧島櫻", value: "/actors/bAra" },
  { title: "[有码] 夕美紫苑", value: "/actors/wBND" },
  { title: "[有码] 西宮夢", value: "/actors/7BX1" },
  { title: "[有码] 西宮このみ", value: "/actors/ARE0" },
  { title: "[有码] 西田卡莉娜", value: "/actors/B4br" },
  { title: "[有码] 西条沙羅", value: "/actors/yzda" },
  { title: "[有码] 西條琉璃", value: "/actors/gDWg" },
  { title: "[有码] 西野翔", value: "/actors/gB4E" },
  { title: "[有码] 希島愛裏", value: "/actors/wK0z" },
  { title: "[有码] 希美まゆ", value: "/actors/P9mN" },
  { title: "[有码] 希崎潔西卡", value: "/actors/dxne" },
  { title: "[有码] 希咲彩", value: "/actors/8VdK" },
  { title: "[有码] 希志愛野", value: "/actors/bAGB" },
  { title: "[有码] 夏川明", value: "/actors/pxBk" },
  { title: "[有码] 夏希みなみ", value: "/actors/XqGM" },
  { title: "[有码] 相澤南", value: "/actors/RAnD" },
  { title: "[有码] 相澤ゆりな", value: "/actors/m94d" },
  { title: "[有码] 香澄果穗", value: "/actors/MqQQ" },
  { title: "[有码] 香椎梨亞", value: "/actors/YZm6" },
  { title: "[有码] 香苗玲音", value: "/actors/n4d6" },
  { title: "[有码] 香西咲", value: "/actors/JMZ2" },
  { title: "[有码] 翔田千里", value: "/actors/REr7" },
  { title: "[有码] 向井藍", value: "/actors/OgK" },
  { title: "[有码] 小倉奈奈", value: "/actors/1xx4" },
  { title: "[有码] 小島南", value: "/actors/A2Q0" },
  { title: "[有码] 小谷みのり", value: "/actors/2K6W" },
  { title: "[有码] 小慄萌中", value: "/actors/XVba" },
  { title: "[有码] 小泉日向", value: "/actors/bb0B" },
  { title: "[有码] 小西悠", value: "/actors/pY3Z" },
  { title: "[有码] 小西まりえ", value: "/actors/5Dn9" },
  { title: "[有码] 小野寺梨紗", value: "/actors/N2D4" },
  { title: "[有码] 小野夕子", value: "/actors/0x0v" },
  { title: "[有码] 小早川怜子", value: "/actors/z964" },
  { title: "[有码] 小澤瑪利亞", value: "/actors/78EM" },
  { title: "[有码] 篠崎みお", value: "/actors/eVZx" },
  { title: "[有码] 篠田步美", value: "/actors/5R56" },
  { title: "[有码] 篠田優", value: "/actors/WE4e" },
  { title: "[有码] 心花ゆら", value: "/actors/kaRJ" },
  { title: "[有码] 新井愛麗", value: "/actors/rD3r" },
  { title: "[有码] 新有菜", value: "/actors/RJM8" },
  { title: "[有码] 星空萌愛", value: "/actors/E2x2" },
  { title: "[有码] 星乃月", value: "/actors/J2Kx" },
  { title: "[有码] 星奈愛", value: "/actors/GMN7" },
  { title: "[有码] 星咲伶美", value: "/actors/zKJQ" },
  { title: "[有码] 星野娜美", value: "/actors/1B29" },
  { title: "[有码] 熊倉祥子", value: "/actors/x01E" },
  { title: "[有码] 緒奈もえ", value: "/actors/xrYn" },
  { title: "[有码] 野野宮美里", value: "/actors/deAQ" },
  { title: "[有码] 葉月七瀬", value: "/actors/y060" },
  { title: "[有码] 一条綺美香", value: "/actors/VgzW" },
  { title: "[有码] 伊東千奈美", value: "/actors/1014" },
  { title: "[有码] 伊藤舞雪", value: "/actors/YgJx" },
  { title: "[有码] 音梓", value: "/actors/XxvJ" },
  { title: "[有码] 桜木凛", value: "/actors/D042" },
  { title: "[有码] 桜木優希音", value: "/actors/J9O8" },
  { title: "[有码] 櫻空桃", value: "/actors/bvWB" },
  { title: "[有码] 櫻美雪", value: "/actors/JqQ8" },
  { title: "[有码] 櫻萌子", value: "/actors/Vk3W" },
  { title: "[有码] 櫻由羅", value: "/actors/YbZ8" },
  { title: "[有码] 鷹宮ゆい", value: "/actors/reRN" },
  { title: "[有码] 永井瑪麗亞", value: "/actors/Bxw4" },
  { title: "[有码] 永井美雛", value: "/actors/79BR" },
  { title: "[有码] 永井すみれ", value: "/actors/W4Q7" },
  { title: "[有码] 永瀨唯", value: "/actors/MxZP" },
  { title: "[有码] 永瀨未萌", value: "/actors/Rr3K" },
  { title: "[有码] 永野一夏", value: "/actors/NeOr" },
  { title: "[有码] 優月真裡奈", value: "/actors/Zyyq" },
  { title: "[有码] 由愛可奈", value: "/actors/pPQq" },
  { title: "[有码] 友田彩也香", value: "/actors/dENv" },
  { title: "[有码] 有坂深雪", value: "/actors/kJYJ" },
  { title: "[有码] 有花萌", value: "/actors/QYJn" },
  { title: "[有码] 有原步美", value: "/actors/bv9A" },
  { title: "[有码] 柚木蒂娜", value: "/actors/33nb" },
  { title: "[有码] 柚月向日葵", value: "/actors/7BQJ" },
  { title: "[有码] 宇野栞菜", value: "/actors/AMgm" },
  { title: "[有码] 羽田希", value: "/actors/qJ96" },
  { title: "[有码] 羽咲美晴", value: "/actors/p7nE" },
  { title: "[有码] 円城ひとみ", value: "/actors/1xQd" },
  { title: "[有码] 原千歲", value: "/actors/RYN8" },
  { title: "[有码] 園田美櫻", value: "/actors/QE4G" },
  { title: "[有码] 月本愛", value: "/actors/GOX2" },
  { title: "[有码] 早川瀬里奈", value: "/actors/eOAp" },
  { title: "[有码] 早乙女ゆい", value: "/actors/7P3P" },
  { title: "[有码] 澤村レイコ", value: "/actors/Ak6e" },
  { title: "[有码] 斎藤美織", value: "/actors/nVBM" },
  { title: "[有码] 長谷川るい", value: "/actors/GW77" },
  { title: "[有码] 真木今日子", value: "/actors/Y3MD" },
  { title: "[有码] 織田真子", value: "/actors/Oq2y" },
  { title: "[有码] 中村知恵", value: "/actors/GwQJ" },
  { title: "[有码] 塚田詩織", value: "/actors/pN8k" },
  { title: "[有码] 仲里紗羽", value: "/actors/WKMq" },
  { title: "[有码] 渚光莉", value: "/actors/EPJJ" },
  { title: "[有码] 渚光希", value: "/actors/YJeb" },
  { title: "[有码] 奏音花音", value: "/actors/ewAz" },
  { title: "[有码] 佐倉絆", value: "/actors/pRDB" },
  { title: "[有码] 佐倉寧寧", value: "/actors/pR49" },
  { title: "[有码] 佐山愛", value: "/actors/PO5v" },
  { title: "[有码] 佐藤愛理", value: "/actors/6PyK" },
  { title: "[有码] 佐藤遙希", value: "/actors/k794" },
  { title: "[有码] 佐佐波綾", value: "/actors/M15A" },
  { title: "[有码] 佐佐木明希", value: "/actors/ZOM6" },
  { title: "[有码] AIKA", value: "/actors/RXbR" },
  { title: "[有码] JULIA", value: "/actors/1KBW" },
  { title: "[有码] NAOMI", value: "/actors/X4me" },
  { title: "[有码] あおいれな", value: "/actors/K5EM" },
  { title: "[有码] あず希", value: "/actors/exMr" },
  { title: "[有码] ちなみん", value: "/actors/3mWD" },
  { title: "[有码] なつめ愛梨", value: "/actors/JOr3" },
  { title: "[有码] ななせ麻衣", value: "/actors/9wKX" },
  { title: "[有码] ひなた澪", value: "/actors/ARDP" },
  { title: "[有码] ゆうひ菜那", value: "/actors/kAzm" },
];

var JAVDB_SERIES_OPTIONS = [
  { title: "[有码] （素）シロウトTV PREMIUM", value: "/series/M4nJ" },
  { title: "[有码] 「常に性交」", value: "/series/3nEN" },
  { title: "[有码] 【初撮り】ネットでAV応募→AV体験撮影", value: "/series/rY2v" },
  { title: "[有码] 【流出映像】 女子○生 部活合宿セックス", value: "/series/0w2k" },
  { title: "[有码] ＆Fashion", value: "/series/Zx8V" },
  { title: "[有码] ○○・ベスト", value: "/series/8XG5" },
  { title: "[有码] ○○NTR", value: "/series/Yq0b" },
  { title: "[有码] ○○お貸しします。", value: "/series/x9O" },
  { title: "[有码] ○○ちゃった僕", value: "/series/Yez" },
  { title: "[有码] ○○はオレのカノジョ。", value: "/series/d2M" },
  { title: "[有码] ○○ベスト4時間", value: "/series/RKqK" },
  { title: "[有码] ○分間ノンストップ撮影", value: "/series/Gwmz" },
  { title: "[有码] ○十路の性", value: "/series/5Emz" },
  { title: "[有码] 100円ポッキリ", value: "/series/rnxZ" },
  { title: "[有码] 100円ポッキリ（百花映画/エマニエル）", value: "/series/DAAk" },
  { title: "[有码] 120％リアルガチ軟派", value: "/series/nzDw" },
  { title: "[有码] 17の御法度", value: "/series/YnVD" },
  { title: "[有码] 2枚組8時間（タカラ映像）", value: "/series/XYA5" },
  { title: "[有码] 2人っきりにしてみたら…", value: "/series/Xg2G" },
  { title: "[有码] 3.1次元AV", value: "/series/7Pw1" },
  { title: "[有码] 3Dハメ撮りVR改", value: "/series/DKwM" },
  { title: "[有码] 43歳ヘンタイブラックカメコ×素人レイヤー（全日本カメコ協同組合/妄想族）", value: "/series/gP2y" },
  { title: "[有码] 愛 バーチャオナ", value: "/series/ZxYm" },
  { title: "[有码] 俺たちの熟女", value: "/series/qb4D" },
  { title: "[有码] 抜かずの14発中出し", value: "/series/PPvX" },
  { title: "[有码] 抜かれっぱなしの1泊2日", value: "/series/1A1A" },
  { title: "[有码] 百戦錬磨のナンパ師のヤリ部屋で、連れ込みSEX隠し撮り", value: "/series/gq5y" },
  { title: "[有码] 爆乳は一見にしかず！", value: "/series/wAb" },
  { title: "[有码] 卑猥語女", value: "/series/wqXY" },
  { title: "[有码] 本当にあったエッチなお話", value: "/series/223Z" },
  { title: "[有码] 本番なしのマットヘルスに行って出てきたのは…", value: "/series/wqab" },
  { title: "[有码] 本物人妻（旦那に内緒でAV体験）", value: "/series/m9Rr" },
  { title: "[有码] 本中-VR", value: "/series/EJM9" },
  { title: "[有码] 本中BEST", value: "/series/0670" },
  { title: "[有码] 本中デビュー", value: "/series/06A7" },
  { title: "[有码] 彼女に内緒で彼女の母ともヤってます…", value: "/series/zBbE" },
  { title: "[有码] 彼女のお姉さんは巨乳と中出しOKで僕を誘惑", value: "/series/8Vza" },
  { title: "[有码] 勃起見せつけシチュエーション", value: "/series/vr99" },
  { title: "[有码] 部屋に連れ込んでめちゃくちゃセックスした件。", value: "/series/Bg74" },
  { title: "[有码] 超本格エロ絵巻（タカラ映像）", value: "/series/Yw3D" },
  { title: "[有码] 超高級中出し専門ソープ", value: "/series/Yn0b" },
  { title: "[有码] 超過激ファック", value: "/series/RXg8" },
  { title: "[有码] 朝から晩まで中出しセックス", value: "/series/AzRe" },
  { title: "[有码] 朝まではしご酒", value: "/series/AKB0" },
  { title: "[有码] 痴●電車（神回）", value: "/series/92yV" },
  { title: "[有码] 痴●記録日記", value: "/series/JMrR" },
  { title: "[有码] 痴漢盗撮＆中出し素人娘媚薬オイルマッサージ", value: "/series/8qvd" },
  { title: "[有码] 恥辱、陵●、とびっこ装着・繁華街デート！", value: "/series/NXBb" },
  { title: "[有码] 恥ずかしいカラダ", value: "/series/p3Ke" },
  { title: "[有码] 憧れの女上司と", value: "/series/eO6E" },
  { title: "[有码] 出会って○秒で合体", value: "/series/emr" },
  { title: "[有码] 初撮り人妻、ふたたび。", value: "/series/AkkP" },
  { title: "[有码] 初撮り人妻ドキュメント", value: "/series/GMwb" },
  { title: "[有码] 初撮り五十路妻ドキュメント", value: "/series/yrdv" },
  { title: "[有码] 初裸virginnude", value: "/series/gGN" },
  { title: "[有码] 初体験○本番スペシャル", value: "/series/5nR8" },
  { title: "[有码] 初脱ぎ熟女", value: "/series/AJ0" },
  { title: "[有码] 純系ラビリンス", value: "/series/xrdg" },
  { title: "[有码] 撮って出し！マジックミラー号", value: "/series/RPMn" },
  { title: "[有码] 大人になったらセンタービレッジ。", value: "/series/WkZ" },
  { title: "[有码] 大人のAV", value: "/series/Rdkm" },
  { title: "[有码] 代々木忠", value: "/series/wmXB" },
  { title: "[有码] 盗撮ドキュメントのすべて", value: "/series/qdp9" },
  { title: "[有码] 調教ドキュメント", value: "/series/pq9w" },
  { title: "[有码] 働くオンナ", value: "/series/29rq" },
  { title: "[有码] 働くオンナ獲り", value: "/series/AqNP" },
  { title: "[有码] 働くドMさん.", value: "/series/pqd9" },
  { title: "[有码] 独占！人の妻ワイドスペシャル", value: "/series/ZNXJ" },
  { title: "[有码] 独占ちゃん", value: "/series/GBzm" },
  { title: "[有码] 堕ちるまで…", value: "/series/2qw" },
  { title: "[有码] 悪徳エロ医師盗撮", value: "/series/e28d" },
  { title: "[有码] 放課後美少女回春リフレクソロジー", value: "/series/QV54" },
  { title: "[有码] 放課後はオトコノ娘", value: "/series/KNOm" },
  { title: "[有码] 非日常的悶絶遊戯", value: "/series/8Ax" },
  { title: "[有码] 風俗中出しSEX", value: "/series/e2vE" },
  { title: "[有码] 夫婦で挑戦", value: "/series/zMg4" },
  { title: "[有码] 夫と子作りSEXをした後はいつも義父に中出しされ続けています…。", value: "/series/YZkB" },
  { title: "[有码] 夫の目の前で犯されて", value: "/series/MbX" },
  { title: "[有码] 夫の上司に犯され続けて7日目、私は理性を失った…。", value: "/series/65vn" },
  { title: "[有码] 父が出かけて2秒でセックスする母と息子", value: "/series/96gw" },
  { title: "[有码] 復刻セレクション", value: "/series/vDAW" },
  { title: "[有码] 感じすぎていっぱいおもらしごめんなさい…", value: "/series/8RE" },
  { title: "[有码] 高級和風ソープ", value: "/series/RZdn" },
  { title: "[有码] 歌舞伎町整体治療院", value: "/series/8qpx" },
  { title: "[有码] 個撮ナンパ", value: "/series/aw6n" },
  { title: "[有码] 姑の卑猥過ぎる巨乳を狙う娘婿", value: "/series/8NNW" },
  { title: "[有码] 鬼イカセ", value: "/series/NQPB" },
  { title: "[有码] 鬼フェラ地獄", value: "/series/6JE" },
  { title: "[有码] 黒人巨大マラ VS", value: "/series/p49m" },
  { title: "[有码] 混浴気分", value: "/series/7y7M" },
  { title: "[有码] 極上！！○○奥さま初脱ぎAVドキュメント", value: "/series/8VZd" },
  { title: "[有码] 家畜コレクター", value: "/series/MBV1" },
  { title: "[有码] 家まで送ってイイですか？", value: "/series/xPkQ" },
  { title: "[有码] 嫁の母と禁断性交", value: "/series/xr6A" },
  { title: "[有码] 交わる体液、濃密セックス", value: "/series/5EQa" },
  { title: "[有码] 階段女子校生", value: "/series/MnA4" },
  { title: "[有码] 街角素人モニタリング", value: "/series/Jg7d" },
  { title: "[有码] 街角シロウト○○ちゃんねる", value: "/series/02X3" },
  { title: "[有码] 街角シロウトナンパ", value: "/series/MqM1" },
  { title: "[有码] 街角シロウトナンパ！", value: "/series/QWR8" },
  { title: "[有码] 街行くお姉さんに、ちょっとだけエロ友を紹介してもらったり、もらわなかったりするシリーズです。", value: "/series/x0pQ" },
  { title: "[有码] 街行くセレブ人妻をナンパしてAV自宅撮影！旦那のいない家でヤる背徳感まみれの中出し性交！！", value: "/series/R2gz" },
  { title: "[有码] 今日、会社サボりませんか？", value: "/series/e26z" },
  { title: "[有码] 金髪ポルノ", value: "/series/kyZ4" },
  { title: "[有码] 緊縛調教妻", value: "/series/zeP7" },
  { title: "[有码] 近親［無言］相姦", value: "/series/dev5" },
  { title: "[有码] 近親相姦", value: "/series/mebY" },
  { title: "[有码] 近親相姦 お母さんに膣中出し", value: "/series/aqkX" },
  { title: "[有码] 近親相姦（VENUS）", value: "/series/J0N8" },
  { title: "[有码] 近親相姦幻母INCEST", value: "/series/7ywZ" },
  { title: "[有码] 近親相姦お母さんに膣中出し", value: "/series/zW" },
  { title: "[有码] 禁断介護", value: "/series/8MK" },
  { title: "[有码] 就職活動FILE", value: "/series/WPgq" },
  { title: "[有码] 巨乳・爆乳", value: "/series/Q2p" },
  { title: "[有码] 巨乳デリヘル", value: "/series/O29B" },
  { title: "[有码] 絶対的美少女、お貸しします。", value: "/series/pk5" },
  { title: "[有码] 絶対に見て欲しい！！MBM山口社長が厳選した今月のお薦め3本セット", value: "/series/Bpaa" },
  { title: "[有码] 可愛い顔してデカ尻！！", value: "/series/akG4" },
  { title: "[有码] 口内Queen", value: "/series/8OZV" },
  { title: "[有码] 口内クイーン", value: "/series/PygE" },
  { title: "[有码] 涙のノンストップ激イカせSEX", value: "/series/AJOy" },
  { title: "[有码] 裏ブロンド生ハメ", value: "/series/ZN5V" },
  { title: "[有码] 恋夜【ren-ya】", value: "/series/MmrR" },
  { title: "[有码] 恋のスキャンダル", value: "/series/Kp3b" },
  { title: "[有码] 裸の主婦", value: "/series/vK9" },
  { title: "[有码] 媽媽的閨蜜", value: "/series/GZ9q" },
  { title: "[有码] 麻薬捜査官", value: "/series/MmXQ" },
  { title: "[有码] 美少女即ハメ白書", value: "/series/Mb4k" },
  { title: "[有码] 美少女コスプレイヤー人格矯正シリーズ", value: "/series/wDGz" },
  { title: "[有码] 美熟女ベスト", value: "/series/mpJy" },
  { title: "[有码] 妹の爆乳は一見にしかず（チェリーズれぼ）", value: "/series/J6Zx" },
  { title: "[有码] 萌えあがる募集若妻", value: "/series/aeEW" },
  { title: "[有码] 秘密捜査官の女", value: "/series/V47z" },
  { title: "[有码] 密着生撮り 人妻不倫旅行", value: "/series/WVqp" },
  { title: "[有码] 密着セックス", value: "/series/mQED" },
  { title: "[有码] 名作ポルノ", value: "/series/p4mE" },
  { title: "[有码] 魔法のオイルマッサージ", value: "/series/Ndvg" },
  { title: "[有码] 魔鏡號, 我就在車內工作但你看不到", value: "/series/Pm9" },
  { title: "[有码] 母姦中出し", value: "/series/ZNYX" },
  { title: "[有码] 母子姦", value: "/series/GJqz" },
  { title: "[有码] 母子交尾", value: "/series/89W" },
  { title: "[有码] 母の友人", value: "/series/neD4" },
  { title: "[有码] 木曜日のはふんはふん", value: "/series/mbQR" },
  { title: "[有码] 募集ちゃん ～求む。一般素人女性～", value: "/series/EmQ0" },
  { title: "[有码] 男の娘、完全メス化これくしょん", value: "/series/DKma" },
  { title: "[有码] 男はボク一人", value: "/series/P2mN" },
  { title: "[有码] 濃厚な接吻とSEX", value: "/series/XW4J" },
  { title: "[有码] 奴隷色のステージ", value: "/series/wDD" },
  { title: "[有码] 女監督ハルナの素人レズナンパ", value: "/series/K4aA" },
  { title: "[有码] 女教師が通う整体セラピー治療院", value: "/series/14xY" },
  { title: "[有码] 女尻", value: "/series/eQN" },
  { title: "[有码] 女体拷問研究所", value: "/series/9N5" },
  { title: "[有码] 女体図鑑", value: "/series/ebAr" },
  { title: "[有码] 女優BEST（ムーディーズ）", value: "/series/Q2XG" },
  { title: "[有码] 女子社員野球拳", value: "/series/0dx7" },
  { title: "[有码] 女子校生監禁凌辱 鬼畜輪姦", value: "/series/J14A" },
  { title: "[有码] 女子校生監禁凌辱鬼畜輪姦", value: "/series/1y9" },
  { title: "[有码] 歐美", value: "/series/western" },
  { title: "[有码] 派遣マッサージ師にきわどい秘部を触られすぎて、快楽に耐え切れず寝取られました。", value: "/series/YNpz" },
  { title: "[有码] 僕の知らない妻を見たくて…", value: "/series/Z4z8" },
  { title: "[有码] 僕のねとられ話しを聞いてほしい", value: "/series/me1y" },
  { title: "[有码] 妻には口が裂けても言えません、義母さんを孕ませてしまったなんて…。", value: "/series/746Z" },
  { title: "[有码] 期間限定熟女パック", value: "/series/enJM" },
  { title: "[有码] 綺麗でいやらしい叔母さん", value: "/series/29m" },
  { title: "[有码] 強制絶頂絶叫拷問調教", value: "/series/E6DJ" },
  { title: "[有码] 親族相姦", value: "/series/0e8J" },
  { title: "[有码] 寝取られ種付けプレス", value: "/series/nqv4" },
  { title: "[有码] 青山猥褻エステサロン", value: "/series/A9mP" },
  { title: "[有码] 清純クロニクル", value: "/series/J4Z3" },
  { title: "[有码] 全国人妻えろ図鑑", value: "/series/9qmE" },
  { title: "[有码] 全国熟女捜索隊", value: "/series/akyO" },
  { title: "[有码] 全国縦断「Maji」100％ナンパ 素人奥さんご馳走様でした。", value: "/series/qbpr" },
  { title: "[有码] 人妻恥悦旅行", value: "/series/Rn7" },
  { title: "[有码] 人妻湯恋旅行", value: "/series/QWDq" },
  { title: "[有码] 人妻の浮気心", value: "/series/6dQM" },
  { title: "[有码] 人妻の花びらめくり", value: "/series/4d1E" },
  { title: "[有码] 人妻ランジェリーナ", value: "/series/A840" },
  { title: "[有码] 人生初・トランス状態 激イキ絶頂セックス", value: "/series/P0vr" },
  { title: "[有码] 日本人がハメる！！", value: "/series/R5Zn" },
  { title: "[有码] 色白デカ尻の家事代行おばさんに即ハメ！", value: "/series/NpVb" },
  { title: "[有码] 刹那的背徳旅行 人妻失格", value: "/series/BP06" },
  { title: "[有码] 舌ベロフェチ", value: "/series/Kg4A" },
  { title: "[有码] 神競泳", value: "/series/Yr5z" },
  { title: "[有码] 神競泳水着", value: "/series/BEy9" },
  { title: "[有码] 神スク水", value: "/series/pzq" },
  { title: "[有码] 神パンスト", value: "/series/W1OZ" },
  { title: "[有码] 神ブルマ", value: "/series/O2bB" },
  { title: "[有码] 生パコPornGirl", value: "/series/rVmD" },
  { title: "[有码] 声が出せない絶頂授業", value: "/series/M4m4" },
  { title: "[有码] 実録 電車痴●映像", value: "/series/xP8E" },
  { title: "[有码] 実録・近親相姦", value: "/series/AKdK" },
  { title: "[有码] 時間よ止まれ！", value: "/series/m4D" },
  { title: "[有码] 世界の（激）ワイセツ娘", value: "/series/r4Gz" },
  { title: "[有码] 熟年AVデビュードキュメント", value: "/series/k484" },
  { title: "[有码] 熟女", value: "/series/8PVa" },
  { title: "[有码] 熟女妻面接ハメ撮り", value: "/series/G4DD" },
  { title: "[有码] 熟女色情旅", value: "/series/pqJk" },
  { title: "[有码] 熟女限定 熟女が部屋にやって来た（熟女バンク/エマニエル）", value: "/series/rY5R" },
  { title: "[有码] 熟女の浮気は本気のSEX", value: "/series/QJO7" },
  { title: "[有码] 熟妻", value: "/series/O1nA" },
  { title: "[有码] 私、実は夫の上司に犯され続けてます…", value: "/series/O2mk" },
  { title: "[有码] 私立パコパコ女子大学", value: "/series/N2E3" },
  { title: "[有码] 私は痴女", value: "/series/mezD" },
  { title: "[有码] 四六時中、娘婿のデカチ○ポが欲しくて堪らない義母の誘い", value: "/series/14mA" },
  { title: "[有码] 素人参加バラエティ", value: "/series/mzAD" },
  { title: "[有码] 素人参加バラエティー", value: "/series/MZGk" },
  { title: "[有码] 素人初撮り生中出し", value: "/series/PJ6v" },
  { title: "[有码] 素人娘、お貸しします。", value: "/series/pVb" },
  { title: "[有码] 素人女子大生", value: "/series/pYy5" },
  { title: "[有码] 素人熟女妻たちによる童貞筆下ろし", value: "/series/vDkp" },
  { title: "[有码] 素人誰コレ", value: "/series/9GrV" },
  { title: "[有码] 素人四畳半", value: "/series/ZynP" },
  { title: "[有码] 素人限定！（ATOM）", value: "/series/KK77" },
  { title: "[有码] 素人援交生中出し", value: "/series/gyzm" },
  { title: "[有码] 素人セーラー服生中出し", value: "/series/pk9Z" },
  { title: "[有码] 素人ナンパ中出し", value: "/series/GnEJ" },
  { title: "[有码] 素人パンチラin自宅で個人撮影会", value: "/series/pDvw" },
  { title: "[有码] 素人ホイホイ×MBM", value: "/series/1RZW" },
  { title: "[有码] 湯けむり近親相姦", value: "/series/QN5p" },
  { title: "[有码] 桃色かぞく", value: "/series/b7RA" },
  { title: "[有码] 特化VR", value: "/series/AM1P" },
  { title: "[有码] 天井特化アングル", value: "/series/YGxD" },
  { title: "[有码] 天然成分由来○○汁100％", value: "/series/89" },
  { title: "[有码] 田舎の近親相姦", value: "/series/d4vQ" },
  { title: "[有码] 町田レンズのBLACK KAMEKO FILE", value: "/series/wmYD" },
  { title: "[有码] 投稿個人撮影 キモ男ヲタ復讐動画", value: "/series/ky9P" },
  { title: "[有码] 投稿FANクラブ", value: "/series/Ybx8" },
  { title: "[有码] 突撃隊SP企画！", value: "/series/9yJ5" },
  { title: "[有码] 図書館で声も出せず糸引くほど愛液が溢れ出す敏感娘", value: "/series/wV8B" },
  { title: "[有码] 推しっ子じっくり！ミラー号", value: "/series/dgXa" },
  { title: "[有码] 推しっこじっくり！タオル一枚 男湯入ってみませんか？", value: "/series/mJZn" },
  { title: "[有码] 完全プライベート映像", value: "/series/ay9O" },
  { title: "[有码] 完熟 ミセスバーチャオナ", value: "/series/mbzM" },
  { title: "[有码] 完ナマSTYLE@○○", value: "/series/YZJB" },
  { title: "[有码] 妄想主観", value: "/series/n4kY" },
  { title: "[有码] 危険日直撃！！子作りできるソープランド", value: "/series/0RBX" },
  { title: "[有码] 未成年(成年演員)", value: "/series/zbGz" },
  { title: "[有码] 我慢できれば生中出しSEX！", value: "/series/DRaJ" },
  { title: "[有码] 我が家の美しい姑", value: "/series/G45Q" },
  { title: "[有码] 無碼", value: "/series/uncensored" },
  { title: "[有码] 無言○○", value: "/series/VMG" },
  { title: "[有码] 五ツ星ch", value: "/series/eOWr" },
  { title: "[有码] 午前10時 学校どうしたの…", value: "/series/myRZ" },
  { title: "[有码] 舞ワイフ ～セレブ倶楽部～", value: "/series/DV35" },
  { title: "[有码] 巷で噂の「おばさんレンタル」", value: "/series/6qVD" },
  { title: "[有码] 小悪魔挑発美少女", value: "/series/14q9" },
  { title: "[有码] 脅迫（CHoBitcH）", value: "/series/06nv" },
  { title: "[有码] 脅迫スイートルーム", value: "/series/QV6M" },
  { title: "[有码] 新・奥さんシリーズ", value: "/series/0p43" },
  { title: "[有码] 新・絶対的美少女、お貸しします。", value: "/series/kA6" },
  { title: "[有码] 新・麗しの熟女湯屋", value: "/series/EzE2" },
  { title: "[有码] 新人！kawaii*専属デビュ→", value: "/series/D262" },
  { title: "[有码] 新人（マキシング）", value: "/series/65y0" },
  { title: "[有码] 新人×ギリギリモザイク", value: "/series/5EYM" },
  { title: "[有码] 新人NO.1STYLE", value: "/series/5na8" },
  { title: "[有码] 羞恥！", value: "/series/QNkK" },
  { title: "[有码] 続・異常性交 五十路母と子", value: "/series/p4Rm" },
  { title: "[有码] 厳選美少女にコスプレさせて俺の子を孕ませる", value: "/series/POq0" },
  { title: "[有码] 一般男女モニタリングAV", value: "/series/X47J" },
  { title: "[有码] 一粒万倍", value: "/series/QYGG" },
  { title: "[有码] 一流のおば様ナンパ セレブ美熟女中出しJAPAN", value: "/series/94Zp" },
  { title: "[有码] 一泊二日、美少女完全予約制。", value: "/series/W7" },
  { title: "[有码] 一つ屋根の下の性交", value: "/series/x4yQ" },
  { title: "[有码] 義母奴隷", value: "/series/W7R" },
  { title: "[有码] 淫乱Madam", value: "/series/ZxPP" },
  { title: "[有码] 淫語痴女（ドグマ）", value: "/series/kp0" },
  { title: "[有码] 淫語女子アナ", value: "/series/3nnD" },
  { title: "[有码] 淫語中出しソープ", value: "/series/9pw" },
  { title: "[有码] 淫語かたりかけオナニー", value: "/series/5rb8" },
  { title: "[有码] 応募素人、初AV撮影", value: "/series/5X7D" },
  { title: "[有码] 永遠に終わらない、中出し輪姦の日々。", value: "/series/7qAb" },
  { title: "[有码] 友達の母親", value: "/series/76B4" },
  { title: "[有码] 友人の母", value: "/series/8V1E" },
  { title: "[有码] 友人の母親", value: "/series/bKJB" },
  { title: "[有码] 友人の妻はドスケベ家庭教師", value: "/series/KkdO" },
  { title: "[有码] 誘惑授業", value: "/series/QVW8" },
  { title: "[有码] 欲求不満の母と絶倫息子", value: "/series/BAm4" },
  { title: "[有码] 円女交際", value: "/series/G4q5" },
  { title: "[有码] 月刊熟女秘宝館", value: "/series/82dV" },
  { title: "[有码] 月刊エロカリ", value: "/series/V9WD" },
  { title: "[有码] 芸能人", value: "/series/3nkN" },
  { title: "[有码] 昭和猥褻官能ドラマ", value: "/series/xg78" },
  { title: "[有码] 真・異常性交", value: "/series/54nM" },
  { title: "[有码] 真性中出し", value: "/series/1Bz4" },
  { title: "[有码] 制服美少女と性交", value: "/series/9DRw" },
  { title: "[有码] 制服が似合う素敵な娘", value: "/series/Z4P" },
  { title: "[有码] 中出し20連発", value: "/series/0R5q" },
  { title: "[有码] 中出し露天温泉", value: "/series/JnV2" },
  { title: "[有码] 中出し人妻不倫旅行", value: "/series/p4w" },
  { title: "[有码] 中出しするだけの簡単なお仕事", value: "/series/1RDJ" },
  { title: "[有码] 中年オヤジと○○", value: "/series/Yxwz" },
  { title: "[有码] 最高の愛人と、最高の中出し性交。", value: "/series/ZdPX" },
  { title: "[有码] 最強属性", value: "/series/wVB" },
  { title: "[有码] 最新やみつきエステ", value: "/series/Nb" },
  { title: "[有码] AIリマスター（Tokyo247）", value: "/series/58Xp" },
  { title: "[有码] AIリマスター（アリスJAPAN）", value: "/series/JE1x" },
  { title: "[有码] AIリマスター（シャイ企画）", value: "/series/YOPz" },
  { title: "[有码] AIリマスター版", value: "/series/9xwV" },
  { title: "[有码] Aphrodite", value: "/series/9qX" },
  { title: "[有码] AV無理", value: "/series/MmpQ" },
  { title: "[有码] AVDebut", value: "/series/6d4a" },
  { title: "[有码] AVデビュー（ピーターズ）", value: "/series/MbvJ" },
  { title: "[有码] BEST（作品集）", value: "/series/PQRe" },
  { title: "[有码] Boin「○○」Box", value: "/series/8ZW" },
  { title: "[有码] COCOON（SILK LABO）", value: "/series/22Mp" },
  { title: "[有码] DIGITALCHANNEL", value: "/series/Bz0d" },
  { title: "[有码] E-BODY", value: "/series/1NW" },
  { title: "[有码] E-BODY BEST PROPORTIONS", value: "/series/4Paa" },
  { title: "[有码] E-BODY VR", value: "/series/ydkZ" },
  { title: "[有码] E-BODY専属デビュー", value: "/series/P5W9" },
  { title: "[有码] Extreme（過激な）オナニスト！", value: "/series/Z97A" },
  { title: "[有码] FALENO総集編", value: "/series/wmv7" },
  { title: "[有码] FirstImpression", value: "/series/qDJ6" },
  { title: "[有码] FU-ZOKUCHANNEL", value: "/series/Mm9Q" },
  { title: "[有码] GALハメリベンジャーズ", value: "/series/Jym8" },
  { title: "[有码] GETシリーズ", value: "/series/nKy9" },
  { title: "[有码] GOKUERO", value: "/series/QBG" },
  { title: "[有码] HYPERFETISH", value: "/series/dNM" },
  { title: "[有码] Hな裏取引", value: "/series/Gnbg" },
  { title: "[有码] J● FIRST TAKE", value: "/series/aD8n" },
  { title: "[有码] KARMAナンパ隊が行く！", value: "/series/JO5B" },
  { title: "[有码] kawaii*VR", value: "/series/VP0n" },
  { title: "[有码] kawaii*ベスト", value: "/series/8e23" },
  { title: "[有码] kira☆kira BEST", value: "/series/dzB5" },
  { title: "[有码] kira☆kiraBLACKGAL", value: "/series/RYz" },
  { title: "[有码] MADOOOON！！！！ ハメ撮り", value: "/series/7d7B" },
  { title: "[有码] MOODYZ 8KVR", value: "/series/EEZ2" },
  { title: "[有码] MOON FORCE CHEERS", value: "/series/Wzep" },
  { title: "[有码] mpo.jpプレゼンツ ザ☆ノンフィクション", value: "/series/BgrG" },
  { title: "[有码] NewComer", value: "/series/ZNkJ" },
  { title: "[有码] NTR.net", value: "/series/xgdE" },
  { title: "[有码] pg", value: "/series/2aeP" },
  { title: "[有码] PREMIUM VR", value: "/series/Eqa3" },
  { title: "[有码] PREMIUMSTYLISHSOAP", value: "/series/OXvv" },
  { title: "[有码] Red Dragon", value: "/series/0YRE" },
  { title: "[有码] RED総集編", value: "/series/BJZO" },
  { title: "[有码] ROOKIE VR", value: "/series/64n0" },
  { title: "[有码] ROOKIEベスト", value: "/series/pOZq" },
  { title: "[有码] S1 GIRLS COLLECTION", value: "/series/WVXe" },
  { title: "[有码] S1 VR", value: "/series/aqWg" },
  { title: "[有码] S1GIRLSCOLLECTION", value: "/series/K486" },
  { title: "[有码] S級熟女（VENUS）", value: "/series/gyr7" },
  { title: "[有码] SEXに持ち込む様子を盗撮したDVD", value: "/series/ky60" },
  { title: "[有码] SEXの逸材。", value: "/series/pqpk" },
  { title: "[有码] SOD女子社員", value: "/series/bKXa" },
  { title: "[有码] SUPER FISHEYE FETISHISM", value: "/series/xOZA" },
  { title: "[有码] THE ドキュメント 本能丸出しでする絶頂SEX", value: "/series/xOAE" },
  { title: "[有码] THEBEST", value: "/series/VGz" },
  { title: "[有码] unfinished VR", value: "/series/V0zA" },
  { title: "[有码] VR BEST", value: "/series/P2D2" },
  { title: "[有码] WAAPVR福袋", value: "/series/8ww3" },
  { title: "[有码] あぁ奥さん", value: "/series/2adq" },
  { title: "[有码] アイデアポケットBEST", value: "/series/1JN4" },
  { title: "[有码] アイポケ VR", value: "/series/Zpv7" },
  { title: "[有码] アイポケ8KVR", value: "/series/OE7z" },
  { title: "[有码] アイポケ逸材発掘プロジェクト", value: "/series/nzp9" },
  { title: "[有码] アウトビジョンVR KMPVR", value: "/series/zQ3z" },
  { title: "[有码] アジア古式マッサージ店盗撮", value: "/series/gemy" },
  { title: "[有码] アドア", value: "/series/dd7e" },
  { title: "[有码] あなた、許して…。", value: "/series/ZX" },
  { title: "[有码] あの日からずっと…。緊縛調教中出しされる制服美少女", value: "/series/76gP" },
  { title: "[有码] イ●スタやりたガール。", value: "/series/Qr0q" },
  { title: "[有码] いちゃラブ", value: "/series/5rOa" },
  { title: "[有码] いもうとアイドル", value: "/series/2aAp" },
  { title: "[有码] ヴィーナス・テルメ", value: "/series/G4y2" },
  { title: "[有码] うちの妻○○を寝取ってください", value: "/series/ZdMX" },
  { title: "[有码] エスカレートするドしろーと娘", value: "/series/5ea" },
  { title: "[有码] エッチ倶楽部", value: "/series/qD83" },
  { title: "[有码] エロフラグ、ギン立ちしました！", value: "/series/ArAK" },
  { title: "[有码] お宝福箱", value: "/series/04vb" },
  { title: "[有码] お母さんの玩具になった僕", value: "/series/mQY" },
  { title: "[有码] お色気P○A会長と悪ガキ生徒会", value: "/series/YnKx" },
  { title: "[有码] お義母さん、女房よりずっといいよ…", value: "/series/k42V" },
  { title: "[有码] お姉さんの巨尻が猥褻過ぎて秒殺で悩殺！！", value: "/series/K4xv" },
  { title: "[有码] おしゃぶり予備校", value: "/series/WkEK" },
  { title: "[有码] オトコノコのオナニー", value: "/series/qMEM" },
  { title: "[有码] おはズボッ！", value: "/series/kK46" },
  { title: "[有码] オヤジのハメ撮りドキュメント", value: "/series/mJ6Z" },
  { title: "[有码] カチクオトコノコ", value: "/series/2kEq" },
  { title: "[有码] カチコチTV", value: "/series/wxEm" },
  { title: "[有码] ガチナンパ！（ピーターズ）", value: "/series/WVPQ" },
  { title: "[有码] ガチンコ中出し！顔出し！人妻ナンパ", value: "/series/WVeQ" },
  { title: "[有码] キミ、10代、恋の予感", value: "/series/PVJX" },
  { title: "[有码] ギャルしべ長者", value: "/series/3Eab" },
  { title: "[有码] ギャルすたグラム", value: "/series/4nbZ" },
  { title: "[有码] きらきらワイフ", value: "/series/2gXp" },
  { title: "[有码] くすぐりフェチ", value: "/series/1WAn" },
  { title: "[有码] くすぐりプレイ", value: "/series/rDwz" },
  { title: "[有码] クセ凄アヘり素人〇〇", value: "/series/39w3" },
  { title: "[有码] くやしいのでそのままAV発売お願いします", value: "/series/z595" },
  { title: "[有码] ゲスの極み映像", value: "/series/de29" },
  { title: "[有码] こう見えてオチンチンついてます", value: "/series/48Q6" },
  { title: "[有码] ザ・筆おろし", value: "/series/Yg8" },
  { title: "[有码] ザ・処女喪失", value: "/series/EnXJ" },
  { title: "[有码] ザ・面接", value: "/series/MbmP" },
  { title: "[有码] ザ・カメラテスト", value: "/series/pk3B" },
  { title: "[有码] ザ・ナンパスペシャル", value: "/series/A9Dn" },
  { title: "[有码] ザ・マジックミラー", value: "/series/wkBB" },
  { title: "[有码] シースルーラブ", value: "/series/NPAN" },
  { title: "[有码] ショートストーリー", value: "/series/Ak2m" },
  { title: "[有码] しょう太くんのHなイタズラ", value: "/series/bee" },
  { title: "[有码] しろうと関西円光（中田氏）", value: "/series/RXAD" },
  { title: "[有码] シロウト観察 モニタリング", value: "/series/39BD" },
  { title: "[有码] シロウト娘ナンパ狩り！！", value: "/series/7G6V" },
  { title: "[有码] じんかくそうさ洗脳催眠", value: "/series/54b7" },
  { title: "[有码] スーパーヒロインドミネーション地獄", value: "/series/7EM" },
  { title: "[有码] スペンス乳腺開発クリニック", value: "/series/AzZ0" },
  { title: "[有码] セックスするなら断然、地方の人妻！", value: "/series/gz9q" },
  { title: "[有码] セレブDX", value: "/series/4d0J" },
  { title: "[有码] セレブブロンド", value: "/series/bze" },
  { title: "[有码] ダーツナンパinTokyo", value: "/series/WZ27" },
  { title: "[有码] タオル一枚 男湯入ってみませんか？", value: "/series/dgy8" },
  { title: "[有码] たびじ", value: "/series/ZN36" },
  { title: "[有码] だれとでも定額挿れ放題！", value: "/series/w8X2" },
  { title: "[有码] チャレンジ！タイマー電マ", value: "/series/ZK38" },
  { title: "[有码] ドキュメンTV×PRESTIGE PREMIUM 家まで送ってイイですか？", value: "/series/WyE8" },
  { title: "[有码] トコダケ", value: "/series/qrD" },
  { title: "[有码] どこまでヤレる！？", value: "/series/Ww7p" },
  { title: "[有码] ドスケベ義父の嫁いぢり", value: "/series/0eV0" },
  { title: "[有码] ドリームウーマン", value: "/series/Nwz3" },
  { title: "[有码] ドリームシャワー", value: "/series/39D" },
  { title: "[有码] なまなかだし", value: "/series/45a" },
  { title: "[有码] なまハメT☆kTok", value: "/series/GKAQ" },
  { title: "[有码] ナンパ連れ込みSEX隠し撮り・そのまま勝手にAV発売。", value: "/series/4dWG" },
  { title: "[有码] ナンパ師の連れ込み部屋盗撮", value: "/series/d9Yg" },
  { title: "[有码] ナンパTV×PRESTIGE PREMIUM", value: "/series/6Qe7" },
  { title: "[有码] ナンパコ", value: "/series/ArpO" },
  { title: "[有码] ナンパされたエッチな素人女性たち", value: "/series/9qZ6" },
  { title: "[有码] ニンゲン観察", value: "/series/qM5P" },
  { title: "[有码] ネトラレーゼ", value: "/series/9D3g" },
  { title: "[有码] ノーカットセレクション", value: "/series/awxp" },
  { title: "[有码] ハーレム子作り", value: "/series/bK0v" },
  { title: "[有码] ハイパーデジタルモザイク", value: "/series/rmRA" },
  { title: "[有码] ハイパーベスト", value: "/series/32g0" },
  { title: "[有码] ぱいぱいズリ子。", value: "/series/D6O3" },
  { title: "[有码] パコ撮り", value: "/series/Vg3A" },
  { title: "[有码] はじめての大・痙・攣スペシャル", value: "/series/nKV4" },
  { title: "[有码] はじめてのナマ中出し（本中）", value: "/series/qdnr" },
  { title: "[有码] はだかの奥様", value: "/series/XWpM" },
  { title: "[有码] はだかの家政婦", value: "/series/vDPO" },
  { title: "[有码] ハックツ美少女Revolution", value: "/series/Zvq" },
  { title: "[有码] ハンターブラック", value: "/series/5bb8" },
  { title: "[有码] ひとり女子旅ナンパ", value: "/series/XVz1" },
  { title: "[有码] ブーツの美魔女とナマ交尾", value: "/series/WAG7" },
  { title: "[有码] フェ地下2階", value: "/series/eOnM" },
  { title: "[有码] プレミアム☆セレクト", value: "/series/Mn51" },
  { title: "[有码] ヘンリー塚本", value: "/series/Yae" },
  { title: "[有码] マジ軟派、初撮。", value: "/series/wkan" },
  { title: "[有码] マジックミラー便", value: "/series/AgO" },
  { title: "[有码] マジックミラー号撮って出し！", value: "/series/dVKv" },
  { title: "[有码] マジックミラー号ハードボイルド", value: "/series/evaN" },
  { title: "[有码] マジックミラーの向こうには○○", value: "/series/MqBX" },
  { title: "[有码] マッサージ中出しSEX", value: "/series/54DB" },
  { title: "[有码] マニア倶楽部責任監修", value: "/series/bRmP" },
  { title: "[有码] マニア倶楽部プレミアム", value: "/series/1REw" },
  { title: "[有码] ママ友喰い", value: "/series/8wW3" },
  { title: "[有码] ママショタ実話", value: "/series/4V6b" },
  { title: "[有码] ママのリアル性教育", value: "/series/1Bb4" },
  { title: "[有码] マル秘隠し撮り映像流出！！", value: "/series/QW49" },
  { title: "[有码] マルチの女", value: "/series/pYDB" },
  { title: "[有码] まるっと！", value: "/series/vDnz" },
  { title: "[有码] まるまる！", value: "/series/P2A9" },
  { title: "[有码] みるスポ！", value: "/series/der8" },
  { title: "[有码] メール即ハメ便", value: "/series/YMJp" },
  { title: "[有码] メンズエステ盗撮", value: "/series/rvdZ" },
  { title: "[有码] ヤリサー女子", value: "/series/0wOa" },
  { title: "[有码] ラグジュTV", value: "/series/YrB8" },
  { title: "[有码] ラグジュTV×PRESTIGE", value: "/series/D2GJ" },
  { title: "[有码] ラブホドキュメンタリー休憩2時間", value: "/series/94Yq" },
  { title: "[有码] リアルガチ軟派", value: "/series/p5nq" },
  { title: "[有码] リアルモ二タリング実験", value: "/series/7akd" },
  { title: "[有码] ルーナ旬香舎", value: "/series/DWDa" },
  { title: "[有码] ルビー年鑑", value: "/series/1k4" },
  { title: "[有码] レッド突撃隊 増刊号", value: "/series/2GeZ" },
  { title: "[有码] レッド突撃隊シリーズ", value: "/series/ayr4" },
  { title: "[有码] レンタル彼女", value: "/series/R2RR" },
  { title: "[有码] レンタル彼女。×PRESTIGE PREMIUM", value: "/series/WyAe" },
  { title: "[有码] レンタル熟女のお仕事", value: "/series/yd2d" },
  { title: "[有码] ロスでナンパした○○を勝手にAVデビュー", value: "/series/7q9V" },
  { title: "[有码] ロリ専科", value: "/series/eK1" },
  { title: "[有码] わかしラボ", value: "/series/P8rr" },
  { title: "[有码] われめちゃん", value: "/series/aW7W" },
];

var JAVDB_TAG_OPTIONS = [
  { title: "動漫", value: "/tags/anime?c10=1" },
  { title: "歐美", value: "/tags/western?c10=1" },
  { title: "無碼", value: "/tags/uncensored?c10=1" },
  { title: "FC2", value: "/tags/fc2?c10=1" },
];

var JAVDB_MAKER_OPTIONS = [
  { title: "S1", value: "/makers/s1" },
  { title: "MOODYZ", value: "/makers/moodyz" },
  { title: "IDEAPOCKET", value: "/makers/ideapocket" },
  { title: "PRESTIGE", value: "/makers/prestige" },
  { title: "FALENO", value: "/makers/faleno" },
  { title: "Madonna", value: "/makers/madonna" },
  { title: "SOD", value: "/makers/sod" },
  { title: "Attackers", value: "/makers/attackers" },
  { title: "E-BODY", value: "/makers/e-body" },
  { title: "kawaii", value: "/makers/kawaii" },
  { title: "Natural High", value: "/makers/natural-high" },
  { title: "HEYZO", value: "/makers/heyzo" },
];

/* @category-options-end */

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
      title: "作品排序",
      type: "enumeration",
      enumOptions: [
        { title: "最近上市", value: "published" },
        { title: "最高评分", value: "score" },
        { title: "最多收藏", value: "fav" },
      ],
      value: "published",
    },
    { name: "page", title: "作品页码", type: "page" },
  ];
}

WidgetMetadata = {
  id: "forward.javdb",
  title: "JavDB",
  version: "1.7.2",
  requiredVersion: "0.0.1",
  description: "获取 JavDB 影片列表、演员/系列/标签/片商（静态选择项，兼容 Forward 1.3.x）与高清详情",
  author: "Forward",
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
      name: "coverMode",
      title: "封面模式",
      type: "enumeration",
      enumOptions: [
        { title: "快速（推荐）", value: "fast" },
        { title: "详情高清", value: "hd" },
      ],
      value: "fast",
    },
  ],
  modules: [
    {
      id: "latest",
      title: "最新上市",
      functionName: "loadLatest",
      cacheDuration: 1800,
      params: [{ name: "page", title: "页码", type: "page", value: "1" }],
    },
    {
      id: "rankings",
      title: "排行榜",
      functionName: "loadRankings",
      cacheDuration: 3600,
      params: [
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
      id: "actors",
      title: "演员",
      description: "按演员分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryModuleParams({
        paramName: "peopleId",
        itemTitle: "选择演员",
        enumOptions: JAVDB_ACTOR_OPTIONS,
      }),
    },
    {
      id: "series",
      title: "系列",
      description: "按系列分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryModuleParams({
        paramName: "genreId",
        itemTitle: "选择系列",
        enumOptions: JAVDB_SERIES_OPTIONS,
      }),
    },
    {
      id: "tags",
      title: "标签",
      description: "按标签分类浏览影片",
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
      description: "按片商分类浏览影片",
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

function javdbBase(params) {
  var base = String((params && params.baseUrl) || JAVDB_DEFAULT_BASE).replace(/\/+$/, "");
  return base || JAVDB_DEFAULT_BASE;
}

function javdbLocale(params) {
  return String((params && params.locale) || "zh");
}

function javdbHeaders(params) {
  return {
    "User-Agent": JAVDB_UA,
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  };
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

function resolveDetailPath(link, params) {
  var raw = String(link || "").trim();
  if (!raw) return "";
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

function buildOpenJavdbItem(pageUrl, title, cover) {
  return {
    id: pageUrl,
    type: "url",
    mediaType: "movie",
    title: title || "打开 JavDB 官网",
    description: pageUrl,
    link: pageUrl,
    posterPath: cover || undefined,
    backdropPath: cover || undefined,
    coverUrl: cover || undefined,
  };
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

function resolveFilteredPath(params, fallbackPath) {
  params = params || {};
  if (params.peopleId) {
    var actorId = String(params.peopleId).replace(/^\/actors\//, "").split(/[/?#]/)[0];
    return "/actors/" + actorId;
  }
  if (params.genreId) {
    var genreId = String(params.genreId);
    if (genreId.indexOf("series:") === 0) return "/series/" + genreId.slice(7);
    if (genreId.indexOf("maker:") === 0) return "/makers/" + genreId.slice(6);
    if (genreId.charAt(0) === "/") return genreId;
    return "/" + genreId;
  }
  if (params.seriesId) {
    var seriesId = String(params.seriesId).replace(/^\/series\//, "").split(/[/?#]/)[0];
    return "/series/" + seriesId;
  }
  if (params.makerId) {
    var makerId = String(params.makerId).replace(/^\/makers\//, "").split(/[/?#]/)[0];
    return "/makers/" + makerId;
  }
  return fallbackPath;
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
    /\b([A-Z]{2,15})[- ]?(\d{2,10})\b/,
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

function extractJavCode(text) {
  var code = extractMatchCode(text);
  if (!code) return "";
  var parts = code.match(/^([A-Z0-9]+)-(\d+)$/i);
  if (parts) return parts[1] + "-" + String(parseInt(parts[2], 10));
  return code;
}

function normalizeSearchKeyword(keyword) {
  var text = String(keyword || "").trim();
  if (!text) return "";
  return extractJavCode(text) || text;
}

function buildGuangyaMatchFields(rawCode, rawTitle, description) {
  rawCode = String(rawCode || "").trim();
  rawTitle = String(rawTitle || "").replace(/\s+/g, " ").trim();
  description = String(description || "").replace(/\s+/g, " ").trim();
  var fields = {};
  if (rawCode) {
    fields.name = rawCode;
    fields.seriesName = rawCode;
    fields.episodeName = rawCode;
  }
  if (rawTitle) fields.originalTitle = rawTitle;
  if (rawCode && description && description.toUpperCase().indexOf(rawCode.toUpperCase()) < 0) {
    fields.description = rawCode + " " + description;
  } else if (description) {
    fields.description = description;
  } else if (rawCode) {
    fields.description = rawCode;
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
  JUFE: { maker: "prestige" },
  MAAN: { maker: "prestige" },
  PPT: { maker: "prestige" },
  "390JAC": { maker: "jackson" },
};

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

function parseJavCodeParts(title) {
  var raw = String(title || "").toUpperCase();
  var match = raw.match(/\b([A-Z0-9]+)-?(\d{2,5})\b/);
  if (!match) return null;
  var prefix = match[1];
  var prefixLower = prefix.toLowerCase();
  var number5 = match[2];
  while (number5.length < 5) number5 = "0" + number5;
  var numMap = {
    WSA: "2",
    FSDSS: "1",
    FCDSS: "1",
    FNS: "1",
    FTHTD: "1",
    FALENO: "1",
    FGAN: "1",
    FSNF: "1",
    FLAV: "1",
    ABP: "118",
    CHN: "118",
    STARS: "1",
    STAR: "1",
    START: "1",
    SODS: "1",
    REBD: "h_346",
    REBDB: "h_346",
    GSHRB: "h_346",
  };
  var number3 = match[2];
  while (number3.length < 3) number3 = "0" + number3;
  return {
    prefix: prefix,
    prefixLower: prefixLower,
    number: match[2],
    number3: number3,
    number5: number5,
    code: String(numMap[prefix] || "") + prefixLower + number5,
    plainCode: prefixLower + number5,
  };
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

function buildDmmCoverCandidatesFromParts(parts) {
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };
  var contentId = String(parts.code || "").toLowerCase();
  if (!contentId) return { posterCandidates: [], backdropCandidates: [] };
  var awsBase = "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + contentId;
  var picsBase = "https://pics.dmm.co.jp/digital/video/" + contentId;
  return {
    posterCandidates: compactUniqueUrls([awsBase + "/" + contentId + "ps.jpg", picsBase + "/" + contentId + "ps.jpg"]),
    backdropCandidates: compactUniqueUrls([awsBase + "/" + contentId + "pl.jpg", picsBase + "/" + contentId + "pl.jpg"]),
  };
}

function buildCoverCandidatesFromVideoId(videoIdOrTitle) {
  var parts = parseJavCodeParts(videoIdOrTitle);
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };
  var rule = MGSTAGE_COVER_RULES[parts.prefix];
  if (rule) return buildMgstageCoverCandidatesFromParts(parts, rule);
  return buildDmmCoverCandidatesFromParts(parts);
}

function buildCoverUrlsFromVideoId(videoIdOrTitle) {
  var candidates = buildCoverCandidatesFromVideoId(videoIdOrTitle);
  return {
    posterUrl: candidates.posterCandidates[0] || "",
    backdropUrl: candidates.backdropCandidates[0] || "",
  };
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

function buildDmmContentIdFromDvdId(dvdId) {
  var clean = cleanDvdId(dvdId).toLowerCase();
  var match = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
  if (!match) return clean.replace(/[^a-z0-9]/gi, "");
  var number5 = String(parseInt(match[2], 10));
  while (number5.length < 5) number5 = "0" + number5;
  return match[1].toLowerCase() + number5;
}

function buildDmmGallery(contentId, count) {
  count = count || 10;
  var id = String(contentId || "").toLowerCase();
  if (!id) return [];
  var urls = [];
  for (var i = 1; i <= count; i++) {
    urls.push("https://pics.dmm.co.jp/digital/video/" + id + "/" + id + "jp-" + i + ".jpg");
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

function fetchJavTrailersMeta(dvdId) {
  var empty = { backdropPath: "", backdropPaths: [] };
  if (!dvdId) return empty;
  var contentId = buildDmmContentIdFromDvdId(dvdId);
  var parts = parseJavCodeParts(dvdId);
  var backdropPath = "";
  var backdropPaths = [];
  if (parts && MGSTAGE_COVER_RULES[parts.prefix]) {
    var mg = buildMgstageCoverCandidatesFromParts(parts, MGSTAGE_COVER_RULES[parts.prefix]);
    backdropPath = mg.backdropCandidates[0] || "";
    backdropPaths = buildMgstageGalleryFromDvdId(dvdId, 10);
  } else if (contentId) {
    var dmm = buildDmmCoverCandidatesFromParts(parts || { code: contentId });
    backdropPath = dmm.backdropCandidates[0] || "";
    backdropPaths = buildDmmGallery(contentId, 10);
  }
  return { backdropPath: backdropPath, backdropPaths: backdropPaths };
}

function upgradeJavdbImageUrl(url) {
  var value = String(url || "").trim();
  if (!value) return "";
  value = value.replace(/\/thumbs\//gi, "/covers/");
  value = value.replace(/\/samples\//gi, "/covers/");
  value = value.replace(/jdbimgs\.com\/thumbs/gi, "jdbimgs.com/covers");
  if (/_s\.(jpe?g|webp|png)(\?|$)/i.test(value)) {
    value = value.replace(/_s(\.(?:jpe?g|webp|png))(\?.*)?$/i, "_b$1$2");
  }
  return value;
}

function isLowResGalleryUrl(url) {
  var u = String(url || "").toLowerCase();
  if (u.indexOf("/samples/") >= 0 || u.indexOf("/thumbs/") >= 0) return true;
  if (/_s\.(jpe?g|webp|png)(\?|$)/i.test(u)) return true;
  return false;
}

function collectPageGalleryUrls($, base) {
  var urls = [];
  var seen = {};

  function push(raw) {
    var href = absUrl(String(raw || "").trim(), base);
    if (!href || seen[href]) return;
    seen[href] = true;
    urls.push(href);
  }

  $("a.tile-item[data-fancybox='gallery'], a[data-fancybox='gallery']").each(function () {
    push(attrOf($, $(this), "href"));
    push(attrOf($, $(this), "data-src"));
  });

  $("a.tile-item, .tile-images a, .preview-images a").each(function () {
    push(attrOf($, $(this), "href"));
  });

  $(".tile-images img, .preview-images img, a.tile-item img").each(function () {
    push(attrOf($, $(this), "data-src"));
    push(attrOf($, $(this), "data-original"));
    push(attrOf($, $(this), "src"));
  });

  return urls;
}

function buildDetailBackdropPaths(pageUrls, displayCode, params, options) {
  options = options || {};
  var pageBackdrops = normalizeBackdropPaths(pageUrls, options);
  var jtMeta = displayCode ? fetchJavTrailersMeta(displayCode) : { backdropPath: "", backdropPaths: [] };
  var hdMode = !isFastCoverMode(params);
  var merged = [];
  var seen = {};

  function push(url) {
    var value = String(url || "").trim();
    if (!value || seen[value]) return;
    seen[value] = true;
    merged.push(value);
  }

  for (var i = 0; i < pageBackdrops.length; i++) push(pageBackdrops[i]);

  if (hdMode || !merged.length) {
    var hdList = jtMeta.backdropPaths || [];
    for (var j = 0; j < hdList.length; j++) push(hdList[j]);
  }

  if (!merged.length && options.coverUrl) {
    push(options.coverUrl);
  }

  return merged;
}

function buildDmmPreviewUrls(contentId) {
  var id = String(contentId || "").toLowerCase();
  if (!id) return [];
  var base = "https://cc3001.dmm.co.jp/digital/video/" + id + "/" + id;
  return compactUniqueUrls([base + "mhb.mp4", base + "hhb.mp4", base + "sm.mp4"]);
}

function parseTrailersFromHtml($, base, displayCode, coverUrl) {
  var trailers = [];
  var seen = {};

  function push(url, cover) {
    var value = absUrl(String(url || "").trim(), base);
    if (!value || seen[value]) return;
    if (!/\.mp4(\?|$)/i.test(value) && value.indexOf("dmm.co.jp") < 0) return;
    seen[value] = true;
    trailers.push({
      coverUrl: cover || coverUrl || "",
      url: value,
    });
  }

  $("video source[src], video[src]").each(function () {
    push(attrOf($, $(this), "src"), coverUrl);
  });

  $("a[href*='.mp4'], [data-url*='.mp4'], [data-video*='.mp4']").each(function () {
    var node = $(this);
    push(attrOf($, node, "href") || attrOf($, node, "data-url") || attrOf($, node, "data-video"), coverUrl);
  });

  if (!trailers.length && displayCode) {
    var contentId = buildDmmContentIdFromDvdId(displayCode);
    var previewUrls = buildDmmPreviewUrls(contentId);
    for (var i = 0; i < previewUrls.length; i++) {
      push(previewUrls[i], coverUrl);
    }
  }

  return trailers.slice(0, 3);
}

var RELATED_SECTION_RULES = [
  {
    bucket: "sameActor",
    keywords: ["他们还出演", "同演员", "同演員", "same actor", "also appeared", "同参演", "同參演"],
  },
  {
    bucket: "recommend",
    keywords: ["你可能也喜欢", "你可能也喜歡", "猜你喜欢", "猜你喜歡", "you may also", "recommended for you", "may also like"],
  },
];

function matchRelatedSectionBucket(title) {
  var text = String(title || "").replace(/\s+/g, " ").trim().toLowerCase();
  if (!text) return "";
  for (var i = 0; i < RELATED_SECTION_RULES.length; i++) {
    var rule = RELATED_SECTION_RULES[i];
    for (var j = 0; j < rule.keywords.length; j++) {
      if (text.indexOf(rule.keywords[j].toLowerCase()) >= 0) return rule.bucket;
    }
  }
  return "";
}

function parseRelatedMovieBox($, box, base) {
  var href = attrOf($, box, "href");
  if (!href) return null;
  var relPath = href.indexOf("http") === 0 ? href.replace(base, "") : href;
  relPath = String(relPath || "").split("#")[0];
  if (!relPath || relPath.indexOf("/v/") !== 0) return null;

  var relTitle = attrOf($, box, "title") || textOf($, box.find(".video-title").first()) || textOf($, box);
  var relCode = textOf($, box.find(".video-title strong").first()) || extractMatchCode(relTitle);
  return {
    id: relCode || relPath.split("/").pop(),
    type: "url",
    mediaType: "movie",
    title: formatDisplayTitle(relCode, relTitle),
    fallbackCover: absUrl(attrOf($, box.find("img").first(), "src"), base),
    matchCode: relCode,
    originalTitle: relTitle,
    code: relCode,
    link: encodeLink(relPath),
    videoId: relPath.split("/").pop(),
  };
}

function parseRelatedBoxesInContainer($, container, base) {
  var items = [];
  var seen = {};
  container.find("a.box[href*='/v/'], .item a.box[href*='/v/'], .video-item a[href*='/v/']").each(function () {
    var parsed = parseRelatedMovieBox($, $(this), base);
    if (!parsed || seen[parsed.link]) return;
    seen[parsed.link] = true;
    items.push(parsed);
  });
  return items;
}

function mergeRelatedRawLists() {
  var merged = [];
  var seen = {};
  for (var i = 0; i < arguments.length; i++) {
    var list = arguments[i] || [];
    for (var j = 0; j < list.length; j++) {
      var item = list[j];
      var key = item && (item.link || item.id);
      if (!key || seen[key]) continue;
      seen[key] = true;
      merged.push(item);
    }
  }
  return merged;
}

function parseRelatedSectionsFromHtml(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var buckets = { sameActor: [], recommend: [], other: [] };

  $(".panel, section, article, .message, .video-panel").each(function () {
    var section = $(this);
    var heading = textOf($, section.find("h2, h3, h4, .title").first());
    var bucket = matchRelatedSectionBucket(heading);
    if (!bucket) return;
    var items = parseRelatedBoxesInContainer($, section, base);
    if (items.length) buckets[bucket] = mergeRelatedRawLists(buckets[bucket], items);
  });

  if (!buckets.sameActor.length && !buckets.recommend.length) {
    buckets.other = parseRelatedFromHtml(html, params);
  } else {
    var generic = parseRelatedFromHtml(html, params);
    buckets.other = generic.filter(function (item) {
      var key = item.link || item.id;
      return !buckets.sameActor.some(function (x) {
        return (x.link || x.id) === key;
      }) && !buckets.recommend.some(function (y) {
        return (y.link || y.id) === key;
      });
    });
  }

  return mergeRelatedRawLists(buckets.sameActor, buckets.recommend, buckets.other).slice(0, 24);
}

function normalizeBackdropPaths(urls, options) {
  options = options || {};
  var coverUrl = String(options.coverUrl || "").trim();
  var result = [];
  var seen = {};
  for (var i = 0; i < (urls || []).length; i++) {
    var raw = String(urls[i] || "").trim();
    if (!raw) continue;
    if (isLowResGalleryUrl(raw)) continue;
    var upgraded = upgradeJavdbImageUrl(raw);
    if (!upgraded || seen[upgraded]) continue;
    if (coverUrl && upgraded === coverUrl) continue;
    if (isLowResGalleryUrl(upgraded)) continue;
    seen[upgraded] = true;
    result.push(upgraded);
  }
  return result;
}

function buildJavdbCoverFromVideoId(videoId) {
  var id = String(videoId || "").trim();
  if (!id || id.length < 2) return "";
  var prefix = id.slice(0, 2).toLowerCase();
  return "https://c0.jdbstatic.com/covers/" + prefix + "/" + id + ".jpg";
}

function resolveJavdbCoverUrl(fallbackCover, videoId) {
  var fromId = buildJavdbCoverFromVideoId(videoId);
  var upgraded = upgradeJavdbImageUrl(fallbackCover);
  return fromId || upgraded || fallbackCover || "";
}

function extractBestImageUrl($, node, base) {
  if (!node || !node.length) return "";
  var dataSrc = attrOf($, node, "data-src") || attrOf($, node, "data-original");
  var src = attrOf($, node, "src");
  var srcset = attrOf($, node, "srcset");
  var best = dataSrc || src;
  if (srcset) {
    var parts = srcset.split(",");
    for (var i = parts.length - 1; i >= 0; i--) {
      var piece = String(parts[i] || "")
        .trim()
        .split(/\s+/)[0];
      if (piece) {
        best = piece;
        break;
      }
    }
  }
  return upgradeJavdbImageUrl(absUrl(best, base));
}

function isFastCoverMode(params) {
  params = getEffectiveParams(params);
  return String(params.coverMode || "fast") !== "hd";
}

function applyFastCovers(fallbackCover, videoId) {
  var cover = resolveJavdbCoverUrl(fallbackCover, videoId);
  return {
    backdropPath: cover,
    posterPath: cover,
    detailPoster: cover,
    coverUrl: cover,
  };
}

function applyHdCoversNoVerify(code, fallbackCover, options) {
  options = options || {};
  var javdbCover = resolveJavdbCoverUrl(fallbackCover, options.videoId);
  var candidates = buildCoverCandidatesFromVideoId(code);
  var backdropPath = javdbCover || candidates.backdropCandidates[0] || fallbackCover || "";
  var posterPath = javdbCover || candidates.posterCandidates[0] || backdropPath;
  return {
    backdropPath: backdropPath,
    posterPath: posterPath,
    detailPoster: posterPath,
    coverUrl: backdropPath,
  };
}

function buildCoverBundle(code, fallbackCover, options, params) {
  if (isFastCoverMode(params)) {
    return applyFastCovers(fallbackCover, options && options.videoId);
  }
  return applyHdCoversNoVerify(code, fallbackCover, options);
}

function enrichDetailLinks(item, pageUrl, displayCode, cover) {
  var openItem = buildOpenJavdbItem(pageUrl, "打开 JavDB 官网 · " + (displayCode || "详情"), cover);
  item.webUrl = pageUrl;
  item.childItems = [openItem];
  item.description = appendPageUrlToDescription(item.description, pageUrl);
  if (Array.isArray(item.relatedItems) && item.relatedItems.length) {
    item.relatedItems = item.relatedItems.filter(function (rel) {
      return rel && rel.link !== pageUrl && rel.id !== pageUrl;
    });
  } else {
    item.relatedItems = [];
  }
  return item;
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

async function fetchHtml(url, params) {
  var res = await Widget.http.get(url, {
    headers: javdbHeaders(params),
    allow_redirects: true,
  });
  if (!res || !res.data) throw new Error("空响应: " + url);
  return res.data;
}

function parseListItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var rawItems = [];
  var seen = {};

  $(".movie-list .item a.box, #videos .grid-item a.box, .grid-item.column a.box").each(function () {
    var box = $(this);
    var href = attrOf($, box, "href");
    var path = href.indexOf("http") === 0 ? href.replace(base, "") : href;
    if (!path || path.indexOf("/v/") !== 0 || seen[path]) return;
    seen[path] = true;
    var titleNode = box.find(".video-title strong").first();
    var titleText = textOf($, titleNode);
    var subTitle = textOf($, box.find(".video-title").first());
    var rawTitle = box.attr("title") || subTitle || titleText;
    var matchCode = titleText || extractMatchCode(rawTitle);
    rawItems.push({
      id: matchCode || path.split("/").pop() || path,
      type: "url",
      mediaType: "movie",
      title: formatDisplayTitle(matchCode, rawTitle) || String(rawTitle || path.split("/").pop()).replace(/\s+/g, " ").trim(),
      fallbackCover: extractBestImageUrl($, box.find("img").first(), base),
      rating: parseRatingText(textOf($, box.find(".score").first())),
      releaseDate: textOf($, box.find(".meta").first()) || "",
      link: encodeLink(path),
      matchCode: matchCode,
      originalTitle: rawTitle,
      code: matchCode,
      videoId: path.split("/").pop() || path,
      description: matchCode ? "番号: " + matchCode : "",
    });
  });

  return rawItems;
}

function enrichMovieItems(rawItems, params) {
  params = params || {};
  var items = [];
  for (var i = 0; i < rawItems.length; i++) {
    var raw = rawItems[i];
    var covers = buildCoverBundle(raw.code, raw.fallbackCover, { videoId: raw.videoId || raw.id }, params);
    items.push(Object.assign(
      {
        id: raw.id,
        type: raw.type,
        mediaType: raw.mediaType,
        title: raw.title,
        backdropPath: covers.backdropPath,
        posterPath: covers.posterPath,
        coverUrl: covers.coverUrl,
        detailPoster: covers.detailPoster,
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

function hasJumpFilter(params) {
  params = params || {};
  return !!(params.genreId || params.peopleId);
}

function buildPeopleBrowseItem(id, title, avatar, path) {
  var fullPath = path || "/actors/" + id;
  return {
    id: String(id),
    type: "url",
    title: title,
    posterPath: avatar || "",
    description: "点击查看作品",
    link: encodeLink(fullPath),
  };
}

function buildGenreBrowseItem(genreId, title, poster, path) {
  var fullPath = path || "";
  if (!fullPath && String(genreId).indexOf("series:") === 0) {
    fullPath = "/series/" + String(genreId).slice(7);
  } else if (!fullPath && String(genreId).indexOf("maker:") === 0) {
    fullPath = "/makers/" + String(genreId).slice(6);
  } else if (!fullPath && String(genreId).indexOf("tags/") === 0) {
    fullPath = "/" + String(genreId);
  }
  return {
    id: String(genreId),
    type: "url",
    title: title,
    posterPath: poster || "",
    description: "点击查看作品",
    link: fullPath ? encodeLink(fullPath) : "",
  };
}
function parseActorBrowseItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var items = [];
  var seen = {};

  $(".box.actor-box a, a.box.actor-box, .actor-box a").each(function () {
    var node = $(this);
    var href = attrOf($, node, "href");
    var path = normalizePath(href, base);
    if (path.indexOf("/actors/") !== 0 || seen[path]) return;
    seen[path] = true;
    var id = path.split("/").pop();
    var title = textOf($, node.find("strong").first()) || textOf($, node);
    var avatar = absUrl(attrOf($, node.find("img").first(), "src"), base);
    items.push(buildPeopleBrowseItem(id, title, avatar, path));
  });

  return items;
}

function parseSeriesBrowseItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var items = [];
  var seen = {};

  $("a[href*='/series/']").each(function () {
    var node = $(this);
    var href = attrOf($, node, "href");
    var path = normalizePath(href, base);
    if (path === "/series" || path.indexOf("/series/") !== 0 || seen[path]) return;
    seen[path] = true;
    var id = path.split("/").pop();
    var title = stripCountSuffix(textOf($, node));
    if (!title) return;
    items.push(buildGenreBrowseItem("series:" + id, title, "", path));
  });

  return items;
}

function parseMakerBrowseItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var items = [];
  var seen = {};

  $("a[href*='/makers/']").each(function () {
    var node = $(this);
    var href = attrOf($, node, "href");
    var path = normalizePath(href, base);
    if (path === "/makers" || path.indexOf("/makers/") !== 0 || seen[path]) return;
    seen[path] = true;
    var id = path.split("/").pop();
    var title = stripCountSuffix(textOf($, node));
    if (!title) return;
    items.push(buildGenreBrowseItem("maker:" + id, title, "", path));
  });

  return items;
}

function isBrowseLibraryPath(path) {
  if (!path) return false;
  var clean = String(path).split("?")[0];
  if (clean === "/series" || clean === "/series/uncensored") return true;
  if (clean === "/makers" || clean === "/makers/uncensored") return true;
  if (clean === "/tags") return true;
  return /^\/actors\/(censored|uncensored|western)$/.test(clean);
}

function getBrowseParser(path) {
  var clean = String(path || "").split("?")[0];
  if (/^\/actors\/(censored|uncensored|western)$/.test(clean)) return parseActorBrowseItems;
  if (clean === "/series" || clean === "/series/uncensored") return parseSeriesBrowseItems;
  if (clean === "/makers" || clean === "/makers/uncensored") return parseMakerBrowseItems;
  if (clean === "/tags") return parseTagBrowseItems;
  return null;
}

function resolveCategoryPath(params) {
  params = params || {};
  var fromJump = resolveFilteredPath(params, "");
  if (fromJump) return normalizeCategoryPath(fromJump);
  return normalizeCategoryPath(params.item || params.path || params.url || "");
}

function applyCategorySort(path, sortBy) {
  if (!path) return path;
  var sortMap = { published: "0", score: "1", fav: "2" };
  var sortType = sortMap[String(sortBy || "published")];
  if (sortType === undefined) return path;
  return path + (path.indexOf("?") >= 0 ? "&" : "?") + "sort_type=" + sortType;
}

async function loadPage(params) {
  try {
    params = syncGlobalParams(params);
    var sortBy = String(params.sort_by || "published");
    if (hasJumpFilter(params)) {
      var jumpPath = applyCategorySort(resolveFilteredPath(params, ""), sortBy);
      var jumpMovies = await fetchMovieList(jumpPath, params);
      if (!jumpMovies.length) throw new Error("未解析到影片列表");
      return jumpMovies;
    }

    var path = applyCategorySort(resolveCategoryPath(params), sortBy);
    if (!path) {
      throw new Error("请先在参数中选择分类项（演员/系列/标签/片商）");
    }
    if (isBrowseLibraryPath(path)) {
      throw new Error("请选择具体分类项，而不是库目录");
    }

    var movies = await fetchMovieList(path, params);
    if (!movies.length) throw new Error("未解析到影片列表");
    return movies;
  } catch (error) {
    console.error("[javdb] 分类加载失败:", error.message || error);
    throw error;
  }
}

function parseTagBrowseItems(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var items = [];
  var seen = {};

  $("a[href*='/tags/']").each(function () {
    var node = $(this);
    var href = attrOf($, node, "href");
    var path = normalizePath(href, base).replace(/^\//, "");
    if (!path || path.indexOf("tags/") !== 0 || seen[path]) return;
    seen[path] = true;
    var title = stripCountSuffix(textOf($, node));
    if (!title) return;
    items.push(buildGenreBrowseItem(path.replace(/^\//, ""), title, "", path));
  });

  return items;
}

function parseRelatedFromHtml(html, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var rawRelated = [];
  $(".recommendations .item a.box, .video-recommend .item a.box, #recommend .item a.box, section.recommend .item a.box").each(function () {
    var box = $(this);
    var href = attrOf($, box, "href");
    var relPath = href.indexOf("http") === 0 ? href.replace(base, "") : href;
    if (!relPath || relPath.indexOf("/v/") !== 0) return;
    var relTitle = box.attr("title") || textOf($, box.find(".video-title").first());
    var relCode = textOf($, box.find(".video-title strong").first()) || extractMatchCode(relTitle);
    rawRelated.push({
      id: relCode || relPath.split("/").pop(),
      type: "url",
      mediaType: "movie",
      title: formatDisplayTitle(relCode, relTitle),
      fallbackCover: absUrl(attrOf($, box.find("img").first(), "src"), base),
      matchCode: relCode,
      originalTitle: relTitle,
      code: relCode,
      link: encodeLink(relPath),
      videoId: relPath.split("/").pop(),
    });
  });
  return rawRelated;
}

async function parseCategoryDetailPage(html, path, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var title = textOf($, $("h2.title strong").first()) || textOf($, $("h2 strong").first()) || path.split("/").pop();
  title = stripCountSuffix(title);
  var avatar = absUrl(attrOf($, $("img.avatar").first(), "src"), base);
  var movies = await fetchMovieList(path, params);
  return {
    id: path.split("/").pop() || encodeLink(path),
    type: "url",
    title: title,
    posterPath: avatar || "",
    detailPoster: avatar || "",
    description: "共收录 " + movies.length + " 部影片（当前页）",
    link: encodeLink(path),
    relatedItems: movies,
  };
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

  var videoId = path.split("/").pop() || path;

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

  var backdropPaths = collectPageGalleryUrls($, base);

  var cover = extractBestImageUrl($, $("img.video-cover").first(), base);
  if (!cover && backdropPaths.length) cover = absUrl(backdropPaths[0], base);

  var genreItems = [];
  $("strong:contains('类别'), strong:contains('Tags'), strong:contains('類別')").each(function () {
    $(this)
      .parent()
      .find("a")
      .each(function () {
        var tag = $(this);
        var href = attrOf($, tag, "href");
        var path = normalizePath(href, base).replace(/^\//, "");
        if (!path) return;
        genreItems.push({ id: path, title: textOf($, tag) });
      });
  });

  $("strong:contains('系列'), strong:contains('Series')").each(function () {
    $(this)
      .parent()
      .find("a")
      .each(function () {
        var node = $(this);
        var href = attrOf($, node, "href");
        var path = normalizePath(href, base);
        var slug = path.split("/").pop();
        if (!slug) return;
        genreItems.push({ id: "series:" + slug, title: textOf($, node) });
      });
  });

  $("strong:contains('片商'), strong:contains('Maker'), strong:contains('Publisher')").each(function () {
    $(this)
      .parent()
      .find("a")
      .each(function () {
        var node = $(this);
        var href = attrOf($, node, "href");
        var path = normalizePath(href, base);
        var slug = path.split("/").pop();
        if (!slug) return;
        genreItems.push({ id: "maker:" + slug, title: textOf($, node) });
      });
  });

  var peoples = [];
  $("strong:contains('演员'), strong:contains('演員'), strong:contains('Actor')").each(function () {
    $(this)
      .parent()
      .find("a")
      .each(function () {
        var actor = $(this);
        var href = attrOf($, actor, "href");
        var path = normalizePath(href, base);
        var id = path.split("/").pop() || textOf($, actor);
        peoples.push({
          id: String(id),
          title: textOf($, actor),
          avatar: "",
          role: "演员",
        });
      });
  });

  var rawRelated = parseRelatedSectionsFromHtml(html, params);

  var displayCode = code || extractMatchCode(title);
  if (!displayCode && description) {
    displayCode = extractMatchCode(description);
  }
  var displayTitle = formatDisplayTitle(displayCode, title);
  var matchFields = buildGuangyaMatchFields(displayCode, title || displayTitle, description);
  var fallbackCover = cover || resolveJavdbCoverUrl("", videoId);
  params = getEffectiveParams(params);
  var coverBundle = buildCoverBundle(displayCode, fallbackCover, { videoId: videoId }, params);
  var hdMode = !isFastCoverMode(params);
  var jtMeta = hdMode && displayCode ? fetchJavTrailersMeta(displayCode) : { backdropPath: "", backdropPaths: [] };

  var backdropPath = hdMode
    ? jtMeta.backdropPath || coverBundle.backdropPath || fallbackCover
    : coverBundle.backdropPath || fallbackCover;
  var detailPoster = coverBundle.detailPoster || fallbackCover;
  var posterPath = coverBundle.posterPath || fallbackCover;

  var allBackdropPaths = buildDetailBackdropPaths(backdropPaths, displayCode, params, {
    coverUrl: fallbackCover,
  });
  var trailers = parseTrailersFromHtml($, base, displayCode, backdropPath || fallbackCover);

  var relatedParams = Object.assign({}, params, { coverMode: "fast" });
  var relatedItems = enrichMovieItems(rawRelated, relatedParams);

  return enrichDetailLinks(
    Object.assign(
      {
        id: displayCode || path.split("/").pop() || encodeLink(path),
        type: "url",
        mediaType: "movie",
        title: displayTitle || displayCode || path.split("/").pop(),
        backdropPath: backdropPath,
        posterPath: posterPath,
        coverUrl: backdropPath,
        detailPoster: detailPoster,
        backdropPaths: allBackdropPaths,
        trailers: trailers,
        releaseDate: releaseDate,
        durationText: durationText,
        rating: rating,
        genreItems: genreItems,
        peoples: peoples,
        relatedItems: relatedItems,
        link: encodeLink(path),
      },
      matchFields
    ),
    pageUrl,
    displayCode,
    backdropPath
  );
}

async function fetchMovieList(path, params) {
  params = syncGlobalParams(params);
  var url = buildPageUrl(javdbBase(params), path, params);
  var html = await fetchHtml(url, params);
  return enrichMovieItems(parseListItems(html, params), params);
}

async function loadListByPath(path, params) {
  try {
    params = syncGlobalParams(params);
    var targetPath = resolveFilteredPath(params, path);
    var items = await fetchMovieList(targetPath, params);
    if (!items.length) throw new Error("未解析到影片列表");
    return items;
  } catch (error) {
    console.error("[javdb] 列表加载失败:", error.message || error);
    throw error;
  }
}

async function loadLatest(params) {
  return loadListByPath("/", params || {});
}

async function loadRankings(params) {
  var period = String((params && params.period) || "daily");
  return loadListByPath("/rankings/movies?period=" + encodeURIComponent(period), params || {});
}

async function loadMovies(params) {
  params = params || {};
  var path = String(params.path || "/censored");
  return loadListByPath(path, params);
}

async function searchJavdb(params) {
  try {
    params = syncGlobalParams(params);
    var keyword = normalizeSearchKeyword(params.keyword);
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
    var items = enrichMovieItems(parseListItems(html, params), params);
    if (!items.length) throw new Error("未找到相关影片");
    return items;
  } catch (error) {
    console.error("[javdb] 搜索失败:", error.message || error);
    throw error;
  }
}

async function loadDetail(link) {
  try {
    var params = getEffectiveParams({});
    var path = resolveDetailPath(link, params);
    if (!path) return null;

    if (path.indexOf("/v/") === 0) {
      var pageUrl = detailPageUrl(path, params);
      var html = await fetchHtml(pageUrl, params);
      var detail = await parseDetailPage(html, path, params);
      if (!detail || !detail.title) return null;
      return detail;
    }

    if (
      path.indexOf("/actors/") === 0 ||
      path.indexOf("/series/") === 0 ||
      path.indexOf("/makers/") === 0 ||
      path.indexOf("/tags/") === 0
    ) {
      var categoryUrl = detailPageUrl(path, params);
      var categoryHtml = await fetchHtml(categoryUrl, params);
      return await parseCategoryDetailPage(categoryHtml, path, params);
    }

    return null;
  } catch (error) {
    console.error("[javdb] 详情加载失败:", error.message || error);
    return null;
  }
}

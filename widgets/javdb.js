/**
 * JavDB ForwardWidget 模块
 * 抓取影片列表与详情（名称、横向封面、详情海报、剧照、简介）。
 */

var JAVDB_SORT_FILTER = ["published", "score", "fav"];
var GLOBAL_PARAM_KEYS = ["baseUrl", "locale"];

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

/* @category-options-begin — 由 build-javdb-categories.js 生成，勿手改 */
// 重新生成: node build-javdb-categories.js
var JAVDB_ACTOR_OPTIONS = [
  { title: "\u963f\u90e8\u4e43\u7f8e\u4e45", value: "/actors/Qkdq" },
  { title: "\u611b\u702c\u7f8e\u5e0c", value: "/actors/n4PV" },
  { title: "\u611b\u4e16\u5922\u7f85", value: "/actors/PGqE" },
  { title: "\u611b\u7530\u98db\u9ce5", value: "/actors/b97d" },
  { title: "\u611b\u7530\u5948\u3005", value: "/actors/JP4B" },
  { title: "\u611b\u9808\u5fc3\u4e9c", value: "/actors/Jd4z" },
  { title: "\u611b\u97f3\u9ebb\u91cc\u4e9e", value: "/actors/Ng03" },
  { title: "\u5b89\u90e8\u672a\u83ef\u5b50", value: "/actors/RA0m" },
  { title: "\u5b89\u4f4d\u85ab", value: "/actors/2amxZ" },
  { title: "\u5b89\u9f4b\u62c9\u62c9", value: "/actors/DXE5" },
  { title: "\u5967\u7530\u54b2", value: "/actors/wVVz" },
  { title: "\u516b\u4e43\u7ffc", value: "/actors/OMAz" },
  { title: "\u767d\u5cf0\u7f8e\u7fbd", value: "/actors/W1wee" },
  { title: "\u767d\u6728\u512a\u5b50", value: "/actors/OEdK" },
  { title: "\u767d\u77f3\u8309\u8389\u5948", value: "/actors/0YZq" },
  { title: "\u767d\u77f3\u672a\u592e", value: "/actors/20PP" },
  { title: "\u767d\u77f3\u308a\u3093", value: "/actors/gKGy" },
  { title: "\u767d\u6843\u82b1", value: "/actors/Xa1G" },
  { title: "\u767d\u54b2\u67da\u5b50", value: "/actors/Z5BA" },
  { title: "\u767e\u5408\u5ddd\u96c5", value: "/actors/vRpp" },
  { title: "\u5742\u9053\u7f8e\u7409", value: "/actors/vd5z" },
  { title: "\u5742\u54b2\u7f8e\u7a57", value: "/actors/DNb3" },
  { title: "\u6d5c\u5d0e\u771f\u7dd2", value: "/actors/6v9D" },
  { title: "\u4fdd\u5742\u3048\u308a", value: "/actors/a8Vg" },
  { title: "\u5bf6\u751f\u8389\u8389", value: "/actors/Q0YG" },
  { title: "\u5bf6\u7530\u840c\u5948\u7f8e", value: "/actors/GWkD" },
  { title: "\u5317\u5ddd\u67da\u5b50", value: "/actors/ppB" },
  { title: "\u5317\u689d\u9ebb\u5983", value: "/actors/9D1q" },
  { title: "\u5317\u91ce\u671b", value: "/actors/72Z" },
  { title: "\u672c\u7530\u5cac", value: "/actors/qOA9" },
  { title: "\u672c\u771f\u53cb\u88e1", value: "/actors/E4bx" },
  { title: "\u672c\u5e84\u9234", value: "/actors/BzpA" },
  { title: "\u672c\u838a\u512a\u82b1", value: "/actors/pknw" },
  { title: "\u78a7\u3057\u306e", value: "/actors/WAPK" },
  { title: "\u4e26\u6728\u5854\u5b50", value: "/actors/ZpqJ" },
  { title: "\u6ce2\u591a\u91ce\u7d50\u8863", value: "/actors/R2Vg" },
  { title: "\u6ce2\u6728\u9059", value: "/actors/p7Nw" },
  { title: "\u5f69\u7f8e\u65ec\u679c", value: "/actors/5Dya" },
  { title: "\u5009\u591a\u771f\u592e", value: "/actors/WZGR" },
  { title: "\u5009\u6728\u8a69\u7e54", value: "/actors/8PrK" },
  { title: "\u6210\u5bae\u3044\u308d\u306f", value: "/actors/ZdX7" },
  { title: "\u8d64\u57ce\u78a7", value: "/actors/2GGP" },
  { title: "\u8d64\u6e15\u84ee", value: "/actors/6x39" },
  { title: "\u6c96\u7530\u674f\u68a8", value: "/actors/pDeZ" },
  { title: "\u521d\u5ddd\u5357", value: "/actors/E6MM" },
  { title: "\u521d\u7f8e\u6c99\u5e0c", value: "/actors/J6Rx" },
  { title: "\u521d\u97f3\u5be6", value: "/actors/QWB8" },
  { title: "\u96db\u83ca\u3064\u3070\u3055", value: "/actors/YE1d" },
  { title: "\u5ddd\u83dc\u7f8e\u9234", value: "/actors/J4mB" },
  { title: "\u5ddd\u6751\u771f\u77e2", value: "/actors/zM6E" },
  { title: "\u5ddd\u4e0a\u5948\u5948\u7f8e", value: "/actors/pPBw" },
  { title: "\u690e\u540d\u7a7a", value: "/actors/NO1N" },
  { title: "\u6625\u83dc\u83ef", value: "/actors/0J0q" },
  { title: "\u6625\u54b2\u6dbc", value: "/actors/y7xb" },
  { title: "\u6625\u539f\u672a\u6765", value: "/actors/X5AJ" },
  { title: "\u693f\u7e54\u91cc\u7f8e", value: "/actors/VXw3" },
  { title: "\u6e4a\u8389\u4e45", value: "/actors/QnE8" },
  { title: "\u6751\u4e0a\u6dbc\u5b50", value: "/actors/RYXD" },
  { title: "\u5927\u5834\u552f", value: "/actors/ZY7V" },
  { title: "\u5927\u5cf6\u512a\u9999", value: "/actors/ZdQv" },
  { title: "\u5927\u69fb\u97ff", value: "/actors/BKMM" },
  { title: "\u5927\u6d66\u771f\u5948\u7f8e", value: "/actors/9N9V" },
  { title: "\u7a3b\u5834\u6d41\u82b1", value: "/actors/vNKW" },
  { title: "\u8482\u4e9e", value: "/actors/9dQE" },
  { title: "\u51ac\u6708\u6953", value: "/actors/Arq0" },
  { title: "\u6771\u51db", value: "/actors/y8Mv" },
  { title: "\u6771\u689d\u590f", value: "/actors/A6zy" },
  { title: "\u4e8c\u5bae\u548c\u9999", value: "/actors/1ERn" },
  { title: "\u5983\u6708\u308b\u3044", value: "/actors/MbzQ" },
  { title: "\u98db\u9ce5\u9234", value: "/actors/Rp08" },
  { title: "\u98a8\u9593\u7531\u7f8e", value: "/actors/82m3" },
  { title: "\u6953\u771f\u8863", value: "/actors/2k0w" },
  { title: "\u9022\u6fa4\u771f\u91cc\u4e9e", value: "/actors/nWJ9" },
  { title: "\u9ad8\u5d0e\u8056\u5b50", value: "/actors/x4MV" },
  { title: "\u9ad8\u6749\u9ebb\u91cc", value: "/actors/vOMb" },
  { title: "\u6839\u5c3e\u6731\u91cc", value: "/actors/kGQP" },
  { title: "\u5bae\u5d0e\u5f69", value: "/actors/eKgR" },
  { title: "\u5bae\u4e0b\u83ef\u5948", value: "/actors/xv1V" },
  { title: "\u5bae\u6ca2\u3086\u304b\u308a", value: "/actors/YnO8" },
  { title: "\u8c37\u539f\u5e0c\u7f8e", value: "/actors/GJvg" },
  { title: "\u95a2\u6839\u5948\u7f8e", value: "/actors/YOMK" },
  { title: "\u5e83\u702c\u3046\u307f", value: "/actors/ymrd" },
  { title: "\u6cb3\u5317\u5f69\u82b1", value: "/actors/EvkJ" },
  { title: "\u6cb3\u5408\u660e\u65e5\u83dc", value: "/actors/69A0" },
  { title: "\u6cb3\u5357\u5be6\u88e1", value: "/actors/zkJ7" },
  { title: "\u6cb3\u897f\u4e9e\u7f8e", value: "/actors/94V6" },
  { title: "\u9ed1\u5ddd\u7d17\u91cc\u5948", value: "/actors/Nmbw" },
  { title: "\u6a2a\u5c71\u307f\u308c\u3044", value: "/actors/ynWg" },
  { title: "\u5f8c\u85e4\u88cf\u9999", value: "/actors/5rr9" },
  { title: "\u80e1\u6843\u6ca2\u3082\u3082\u3053", value: "/actors/y3pg" },
  { title: "\u6236\u7530\u771f\u7434", value: "/actors/36Qa" },
  { title: "\u82b1\u54b2\u4e00\u674f", value: "/actors/eWG1" },
  { title: "\u51f0\u9999\u5948\u82bd", value: "/actors/y43v" },
  { title: "\u59ec\u5ddd\u512a\u5948", value: "/actors/zMyQ" },
  { title: "\u8de1\u7f8e\u73e0\u88cf", value: "/actors/3Jdb" },
  { title: "\u5409\u5ddd\u611b\u7f8e", value: "/actors/5Xx6" },
  { title: "\u5409\u5ddd\u84ee", value: "/actors/kyGz" },
  { title: "\u5409\u9ad8\u5be7\u5be7", value: "/actors/rPrR" },
  { title: "\u5409\u6839\u67da\u8389\u611b", value: "/actors/0Bw3" },
  { title: "\u5409\u6ca2\u660e\u6b69", value: "/actors/0yVv" },
  { title: "\u4f73\u82d7\u7409\u83ef", value: "/actors/O1bD" },
  { title: "\u5cac\u5948\u5948\u7f8e", value: "/actors/QNen" },
  { title: "\u698e\u672c\u7f8e\u54b2", value: "/actors/dDy5" },
  { title: "\u67b6\u4e43\u7531\u7f85", value: "/actors/p50Z" },
  { title: "\u83c5\u91ce\u677e\u96ea", value: "/actors/rngN" },
  { title: "\u6c5f\u4e0a\u3057\u307b", value: "/actors/5rPM" },
  { title: "\u7686\u5ddd\u5343\u9059", value: "/actors/bJJg" },
  { title: "\u7d50\u57ce\u4e43\u4e43", value: "/actors/8GYx" },
  { title: "\u7d50\u6708\u606d\u5b50", value: "/actors/B4Ga" },
  { title: "\u7d50\u307e\u304d\u306a", value: "/actors/KW5m" },
  { title: "\u4eca\u4e95\u771f\u7531\u7f8e", value: "/actors/RPN8" },
  { title: "\u84f3\u7f8e\u9999", value: "/actors/WPr7" },
  { title: "\u4e95\u4e0a\u7dbe\u5b50", value: "/actors/kPEN" },
  { title: "\u4e5d\u91cd\u74b0\u5948", value: "/actors/EKz4" },
  { title: "\u541b\u5cf6\u7f8e\u7dd2", value: "/actors/96AR" },
  { title: "\u8475\u5343\u6075", value: "/actors/1q3n" },
  { title: "\u8475\u53f8", value: "/actors/A5yq" },
  { title: "\u7028\u540d\u5149\u8389", value: "/actors/2a7m" },
  { title: "\u857e", value: "/actors/M6mA" },
  { title: "\u91cc\u7f8e\u5c24\u5229\u5a6d", value: "/actors/dxqQ" },
  { title: "\u7acb\u82b1\u7460\u8389", value: "/actors/2wQW" },
  { title: "\u84ee\u5be6\u514b\u857e\u5152", value: "/actors/B0nG" },
  { title: "\u6dbc\u5ddd\u7d62\u97f3", value: "/actors/mmyZ" },
  { title: "\u6dbc\u5bae\u7434\u97f3", value: "/actors/V1Gn" },
  { title: "\u6dbc\u6d77\u307f\u3055", value: "/actors/AyRe" },
  { title: "\u6dbc\u68ee\u73b2\u5922", value: "/actors/KxPb" },
  { title: "\u6797\u7f8e\u73b2", value: "/actors/bdpe" },
  { title: "\u6797\u7531\u5948", value: "/actors/qPer" },
  { title: "\u51dc\u97f3\u6843\u82b1", value: "/actors/Xzr5" },
  { title: "\u9234\u6751\u611b\u88cf", value: "/actors/nRKm" },
  { title: "\u9234\u6728\u5fc3\u6625", value: "/actors/b7A0" },
  { title: "\u9234\u6728\u771f\u5915", value: "/actors/MEYQ" },
  { title: "\u9234\u539f\u611b\u871c\u8389", value: "/actors/98Yp" },
  { title: "\u67f3\u7f8e\u6182", value: "/actors/N20b" },
  { title: "\u8606\u540d\u5c24\u8389\u5a6d", value: "/actors/4vyE" },
  { title: "\u9ebb\u5009\u6182", value: "/actors/exkz" },
  { title: "\u9ebb\u91cc\u68a8\u590f", value: "/actors/G9P5" },
  { title: "\u9ebb\u7f8e\u7531\u771f", value: "/actors/ex3z" },
  { title: "\u9ebb\u751f\u5e0c", value: "/actors/dx6M" },
  { title: "\u7f8e\u6ce2\u6c99\u8036", value: "/actors/QB6K" },
  { title: "\u7f8e\u8c37\u6731\u91cc", value: "/actors/gyRE" },
  { title: "\u7f8e\u54b2\u4f73\u5948", value: "/actors/8Nqa" },
  { title: "\u7f8e\u7af9\u9234", value: "/actors/z407" },
  { title: "\u5922\u4e43\u611b\u83ef", value: "/actors/AbBK" },
  { title: "\u5f4c\u751f\u7f8e\u6708", value: "/actors/Jekq" },
  { title: "\u660e\u91cc\u3068\u3082\u304b", value: "/actors/06nE" },
  { title: "\u660e\u88cf\u7d2c", value: "/actors/M4Q7" },
  { title: "\u660e\u65e5\u82b1\u7dba\u7f85", value: "/actors/wm9B" },
  { title: "\u6728\u5357\u65e5\u83dc", value: "/actors/W1xR" },
  { title: "\u7267\u6751\u5f69\u9999", value: "/actors/Qka8" },
  { title: "\u5357\u68a8\u592e\u5948", value: "/actors/QvZ4" },
  { title: "\u4e03\u6d77\u8482\u5a1c", value: "/actors/gbbZ" },
  { title: "\u4e03\u6d77\u3086\u3042", value: "/actors/Akb0" },
  { title: "\u4e03\u702c\u3042\u3044\u308a", value: "/actors/5BeM" },
  { title: "\u4e03\u68ee\u8389\u8389", value: "/actors/Ewa2" },
  { title: "\u4e03\u5be6\u88cf\u83dc", value: "/actors/PwOE" },
  { title: "\u4e03\u6fa4\u7f8e\u4e9e", value: "/actors/NPD3" },
  { title: "\u6589\u85e4\u307f\u3086", value: "/actors/peAb" },
  { title: "\u7948\u91cc\u304d\u3059\u307f", value: "/actors/ZPaV" },
  { title: "\u5343\u4e43\u674f\u7f8e", value: "/actors/kq86" },
  { title: "\u4e7e\u7acb\u590f", value: "/actors/g7ym" },
  { title: "\u6d45\u7530\u7d50\u68a8", value: "/actors/pV3E" },
  { title: "\u6a4b\u672c\u9e97\u83ef", value: "/actors/Nq7B" },
  { title: "\u9752\u5c71\u83ef", value: "/actors/RZPR" },
  { title: "\u6e05\u57ce\u96ea", value: "/actors/bx2E" },
  { title: "\u4e18\u54b2\u30a8\u30df\u30ea", value: "/actors/NgYx" },
  { title: "\u79cb\u5c71\u7965\u5b50", value: "/actors/eVGM" },
  { title: "\u6cc9\u6c34\u3089\u3093", value: "/actors/kPa6" },
  { title: "\u4ec1\u7f8e\u5713\u9999", value: "/actors/de29" },
  { title: "\u65e5\u83dc\u3005\u306f\u306e\u3093", value: "/actors/58DY" },
  { title: "\u65e5\u5411\u771f\u51dc", value: "/actors/4rw3" },
  { title: "\u6804\u5ddd\u4e43\u4e9c", value: "/actors/5rkM" },
  { title: "\u82e5\u83dc\u5948\u592e", value: "/actors/w49n" },
  { title: "\u82e5\u6708\u7f8e\u8863\u5948", value: "/actors/gDAy" },
  { title: "\u82e5\u6708\u307e\u308a\u3042", value: "/actors/zVJb" },
  { title: "\u4e09\u5cf6\u5948\u6d25\u5b50", value: "/actors/pk1m" },
  { title: "\u4e09\u6d66\u6b69\u7f8e", value: "/actors/19yv" },
  { title: "\u4e09\u6d66\u6075\u7406\u5b50", value: "/actors/pkOm" },
  { title: "\u4e09\u4e0a\u60a0\u4e9c", value: "/actors/Av2e" },
  { title: "\u4e09\u539f\u7a57\u9999", value: "/actors/g40m" },
  { title: "\u6f80\u8c37\u679c\u6b65", value: "/actors/R1GK" },
  { title: "\u68ee\u5ddd\u674f\u5948", value: "/actors/3d9" },
  { title: "\u68ee\u6fa4\u4f73\u5948", value: "/actors/A0Qy" },
  { title: "\u7eb1\u7eb1\u539f\u767e\u5408", value: "/actors/9ZAR" },
  { title: "\u7d17\u5009\u771f\u83dc", value: "/actors/J9dd" },
  { title: "\u5c71\u5cb8\u9022\u82b1", value: "/actors/8BDW" },
  { title: "\u4e0a\u539f\u745e\u7a42", value: "/actors/m7Vn" },
  { title: "\u4e0a\u539f\u4e9c\u8863", value: "/actors/2D6w" },
  { title: "\u6df1\u7530\u5948\u5948", value: "/actors/M8kX" },
  { title: "\u6df1\u7530\u8a60\u7f8e", value: "/actors/pRMq" },
  { title: "\u795e\u5742\u670b\u5b50", value: "/actors/0317" },
  { title: "\u795e\u6ce2\u591a\u4e00\u82b1", value: "/actors/N74b" },
  { title: "\u795e\u5bae\u5bfa\u5948\u7dd2", value: "/actors/ZzNm" },
  { title: "\u795e\u8c37\u5145\u5e0c", value: "/actors/V933" },
  { title: "\u795e\u5c71\u306a\u306a", value: "/actors/bRe6" },
  { title: "\u795e\u54b2\u8a69\u7e54", value: "/actors/vynb" },
  { title: "\u795e\u54b2\u821e", value: "/actors/9kJV" },
  { title: "\u795e\u96ea", value: "/actors/gPQQ" },
  { title: "\u77f3\u539f\u8389\u5948", value: "/actors/Oqd0" },
  { title: "\u8fbb\u672c\u674f", value: "/actors/5J58" },
  { title: "\u5e02\u5ddd\u96c5\u7f8e", value: "/actors/7a4P" },
  { title: "\u6a1e\u6728\u8475", value: "/actors/zAmz" },
  { title: "\u53cc\u8449\u826f\u9999", value: "/actors/M4G1" },
  { title: "\u6c34\u535c\u6afb", value: "/actors/0edE" },
  { title: "\u6c34\u83dc\u9e97", value: "/actors/de9B" },
  { title: "\u6c34\u5ddd\u84f3", value: "/actors/g7WA" },
  { title: "\u6c34\u7121\u702c\u512a\u590f", value: "/actors/2VpB" },
  { title: "\u6c34\u54b2\u5361\u84ee", value: "/actors/xvZ8" },
  { title: "\u6c34\u54b2\u863f\u62c9", value: "/actors/OpzD" },
  { title: "\u6c34\u91ce\u671d\u967d", value: "/actors/35re" },
  { title: "\u6c34\u6ca2\u306e\u306e", value: "/actors/qDOx" },
  { title: "\u677e\u672c\u83dc\u5948\u5b9f", value: "/actors/YZyp" },
  { title: "\u677e\u672c\u82bd\u4f9d", value: "/actors/94m6" },
  { title: "\u677e\u672c\u4e00\u9999", value: "/actors/AOqm" },
  { title: "\u677e\u4e0b\u7d17\u6804\u5b50", value: "/actors/6qA7" },
  { title: "\u677e\u96ea\u4f73\u82d7", value: "/actors/eOBz" },
  { title: "\u6843\u8c37\u7e6a\u88cf\u9999", value: "/actors/gwE" },
  { title: "\u6843\u4e43\u6728\u9999\u5948", value: "/actors/0dKX" },
  { title: "\u6843\u54b2\u3086\u308a\u83dc", value: "/actors/7x1" },
  { title: "\u85e4\u5ddd\u308c\u3044\u306a", value: "/actors/gDRQ" },
  { title: "\u85e4\u6d66\u60e0", value: "/actors/BWy1" },
  { title: "\u7b39\u5009\u674f", value: "/actors/6Pra" },
  { title: "\u5929\u6d77\u7ffc", value: "/actors/N4YG" },
  { title: "\u5929\u6728\u60a0", value: "/actors/e8gp" },
  { title: "\u5929\u4f7f\u840c", value: "/actors/5Oyz" },
  { title: "\u5929\u91ce\u7f8e\u512a", value: "/actors/RZBg" },
  { title: "\u7530\u4e2d\u6ab8\u6aac", value: "/actors/kzx6" },
  { title: "\u901a\u91ce\u672a\u5e06", value: "/actors/05OX" },
  { title: "\u6850\u5d8b\u8389\u4e43", value: "/actors/ne2M" },
  { title: "\u6850\u8c37\u306a\u304a", value: "/actors/vDN9" },
  { title: "\u63a8\u5ddd\u60a0\u88e1", value: "/actors/ZqB6" },
  { title: "\u671b\u6708\u5f69\u82b1", value: "/actors/NxGN" },
  { title: "\u552f\u4e95\u771f\u5c0b", value: "/actors/nAnV" },
  { title: "\u5c3e\u4e0a\u82e5\u8449", value: "/actors/WyDQ" },
  { title: "\u4e94\u5341\u5d50\u661f\u862d", value: "/actors/y3ma" },
  { title: "\u6b66\u85e4\u5f69\u9999", value: "/actors/yAW" },
  { title: "\u821e\u5cf6\u3042\u304b\u308a", value: "/actors/YnK" },
  { title: "\u821e\u54b2\u7f8e\u5a1c", value: "/actors/7bnR" },
  { title: "\u9727\u5cf6\u91cc\u7dd2\u83dc", value: "/actors/1z5J" },
  { title: "\u9727\u5cf6\u6afb", value: "/actors/bAra" },
  { title: "\u5915\u7f8e\u7d2b\u82d1", value: "/actors/wBND" },
  { title: "\u897f\u5bae\u5922", value: "/actors/7BX1" },
  { title: "\u897f\u5bae\u3053\u306e\u307f", value: "/actors/ARE0" },
  { title: "\u897f\u7530\u5361\u8389\u5a1c", value: "/actors/B4br" },
  { title: "\u897f\u6761\u6c99\u7f85", value: "/actors/yzda" },
  { title: "\u897f\u689d\u7409\u7483", value: "/actors/gDWg" },
  { title: "\u897f\u91ce\u7fd4", value: "/actors/gB4E" },
  { title: "\u5e0c\u5cf6\u611b\u88cf", value: "/actors/wK0z" },
  { title: "\u5e0c\u7f8e\u307e\u3086", value: "/actors/P9mN" },
  { title: "\u5e0c\u5d0e\u6f54\u897f\u5361", value: "/actors/dxne" },
  { title: "\u5e0c\u54b2\u5f69", value: "/actors/8VdK" },
  { title: "\u5e0c\u5fd7\u611b\u91ce", value: "/actors/bAGB" },
  { title: "\u590f\u5ddd\u660e", value: "/actors/pxBk" },
  { title: "\u590f\u5e0c\u307f\u306a\u307f", value: "/actors/XqGM" },
  { title: "\u76f8\u6fa4\u5357", value: "/actors/RAnD" },
  { title: "\u76f8\u6fa4\u3086\u308a\u306a", value: "/actors/m94d" },
  { title: "\u9999\u6f84\u679c\u7a57", value: "/actors/MqQQ" },
  { title: "\u9999\u690e\u68a8\u4e9e", value: "/actors/YZm6" },
  { title: "\u9999\u82d7\u73b2\u97f3", value: "/actors/n4d6" },
  { title: "\u9999\u897f\u54b2", value: "/actors/JMZ2" },
  { title: "\u7fd4\u7530\u5343\u91cc", value: "/actors/REr7" },
  { title: "\u5411\u4e95\u85cd", value: "/actors/OgK" },
  { title: "\u5c0f\u5009\u5948\u5948", value: "/actors/1xx4" },
  { title: "\u5c0f\u5cf6\u5357", value: "/actors/A2Q0" },
  { title: "\u5c0f\u8c37\u307f\u306e\u308a", value: "/actors/2K6W" },
  { title: "\u5c0f\u6144\u840c\u4e2d", value: "/actors/XVba" },
  { title: "\u5c0f\u6cc9\u65e5\u5411", value: "/actors/bb0B" },
  { title: "\u5c0f\u897f\u60a0", value: "/actors/pY3Z" },
  { title: "\u5c0f\u897f\u307e\u308a\u3048", value: "/actors/5Dn9" },
  { title: "\u5c0f\u91ce\u5bfa\u68a8\u7d17", value: "/actors/N2D4" },
  { title: "\u5c0f\u91ce\u5915\u5b50", value: "/actors/0x0v" },
  { title: "\u5c0f\u65e9\u5ddd\u601c\u5b50", value: "/actors/z964" },
  { title: "\u5c0f\u6fa4\u746a\u5229\u4e9e", value: "/actors/78EM" },
  { title: "\u7be0\u5d0e\u307f\u304a", value: "/actors/eVZx" },
  { title: "\u7be0\u7530\u6b65\u7f8e", value: "/actors/5R56" },
  { title: "\u7be0\u7530\u512a", value: "/actors/WE4e" },
  { title: "\u5fc3\u82b1\u3086\u3089", value: "/actors/kaRJ" },
  { title: "\u65b0\u4e95\u611b\u9e97", value: "/actors/rD3r" },
  { title: "\u65b0\u6709\u83dc", value: "/actors/RJM8" },
  { title: "\u661f\u7a7a\u840c\u611b", value: "/actors/E2x2" },
  { title: "\u661f\u4e43\u6708", value: "/actors/J2Kx" },
  { title: "\u661f\u5948\u611b", value: "/actors/GMN7" },
  { title: "\u661f\u54b2\u4f36\u7f8e", value: "/actors/zKJQ" },
  { title: "\u661f\u91ce\u5a1c\u7f8e", value: "/actors/1B29" },
  { title: "\u718a\u5009\u7965\u5b50", value: "/actors/x01E" },
  { title: "\u7dd2\u5948\u3082\u3048", value: "/actors/xrYn" },
  { title: "\u91ce\u91ce\u5bae\u7f8e\u91cc", value: "/actors/deAQ" },
  { title: "\u8449\u6708\u4e03\u702c", value: "/actors/y060" },
  { title: "\u4e00\u6761\u7dba\u7f8e\u9999", value: "/actors/VgzW" },
  { title: "\u4f0a\u6771\u5343\u5948\u7f8e", value: "/actors/1014" },
  { title: "\u4f0a\u85e4\u821e\u96ea", value: "/actors/YgJx" },
  { title: "\u97f3\u6893", value: "/actors/XxvJ" },
  { title: "\u685c\u6728\u51db", value: "/actors/D042" },
  { title: "\u685c\u6728\u512a\u5e0c\u97f3", value: "/actors/J9O8" },
  { title: "\u6afb\u7a7a\u6843", value: "/actors/bvWB" },
  { title: "\u6afb\u7f8e\u96ea", value: "/actors/JqQ8" },
  { title: "\u6afb\u840c\u5b50", value: "/actors/Vk3W" },
  { title: "\u6afb\u7531\u7f85", value: "/actors/YbZ8" },
  { title: "\u9df9\u5bae\u3086\u3044", value: "/actors/reRN" },
  { title: "\u6c38\u4e95\u746a\u9e97\u4e9e", value: "/actors/Bxw4" },
  { title: "\u6c38\u4e95\u7f8e\u96db", value: "/actors/79BR" },
  { title: "\u6c38\u4e95\u3059\u307f\u308c", value: "/actors/W4Q7" },
  { title: "\u6c38\u7028\u552f", value: "/actors/MxZP" },
  { title: "\u6c38\u7028\u672a\u840c", value: "/actors/Rr3K" },
  { title: "\u6c38\u91ce\u4e00\u590f", value: "/actors/NeOr" },
  { title: "\u512a\u6708\u771f\u88e1\u5948", value: "/actors/Zyyq" },
  { title: "\u7531\u611b\u53ef\u5948", value: "/actors/pPQq" },
  { title: "\u53cb\u7530\u5f69\u4e5f\u9999", value: "/actors/dENv" },
  { title: "\u6709\u5742\u6df1\u96ea", value: "/actors/kJYJ" },
  { title: "\u6709\u82b1\u840c", value: "/actors/QYJn" },
  { title: "\u6709\u539f\u6b65\u7f8e", value: "/actors/bv9A" },
  { title: "\u67da\u6728\u8482\u5a1c", value: "/actors/33nb" },
  { title: "\u67da\u6708\u5411\u65e5\u8475", value: "/actors/7BQJ" },
  { title: "\u5b87\u91ce\u681e\u83dc", value: "/actors/AMgm" },
  { title: "\u7fbd\u7530\u5e0c", value: "/actors/qJ96" },
  { title: "\u7fbd\u54b2\u7f8e\u6674", value: "/actors/p7nE" },
  { title: "\u5186\u57ce\u3072\u3068\u307f", value: "/actors/1xQd" },
  { title: "\u539f\u5343\u6b72", value: "/actors/RYN8" },
  { title: "\u5712\u7530\u7f8e\u6afb", value: "/actors/QE4G" },
  { title: "\u6708\u672c\u611b", value: "/actors/GOX2" },
  { title: "\u65e9\u5ddd\u702c\u91cc\u5948", value: "/actors/eOAp" },
  { title: "\u65e9\u4e59\u5973\u3086\u3044", value: "/actors/7P3P" },
  { title: "\u6fa4\u6751\u30ec\u30a4\u30b3", value: "/actors/Ak6e" },
  { title: "\u658e\u85e4\u7f8e\u7e54", value: "/actors/nVBM" },
  { title: "\u9577\u8c37\u5ddd\u308b\u3044", value: "/actors/GW77" },
  { title: "\u771f\u6728\u4eca\u65e5\u5b50", value: "/actors/Y3MD" },
  { title: "\u7e54\u7530\u771f\u5b50", value: "/actors/Oq2y" },
  { title: "\u4e2d\u6751\u77e5\u6075", value: "/actors/GwQJ" },
  { title: "\u585a\u7530\u8a69\u7e54", value: "/actors/pN8k" },
  { title: "\u4ef2\u91cc\u7d17\u7fbd", value: "/actors/WKMq" },
  { title: "\u6e1a\u5149\u8389", value: "/actors/EPJJ" },
  { title: "\u6e1a\u5149\u5e0c", value: "/actors/YJeb" },
  { title: "\u594f\u97f3\u82b1\u97f3", value: "/actors/ewAz" },
  { title: "\u4f50\u5009\u7d46", value: "/actors/pRDB" },
  { title: "\u4f50\u5009\u5be7\u5be7", value: "/actors/pR49" },
  { title: "\u4f50\u5c71\u611b", value: "/actors/PO5v" },
  { title: "\u4f50\u85e4\u611b\u7406", value: "/actors/6PyK" },
  { title: "\u4f50\u85e4\u9059\u5e0c", value: "/actors/k794" },
  { title: "\u4f50\u4f50\u6ce2\u7dbe", value: "/actors/M15A" },
  { title: "\u4f50\u4f50\u6728\u660e\u5e0c", value: "/actors/ZOM6" },
  { title: "AIKA", value: "/actors/RXbR" },
  { title: "JULIA", value: "/actors/1KBW" },
  { title: "NAOMI", value: "/actors/X4me" },
  { title: "\u3042\u304a\u3044\u308c\u306a", value: "/actors/K5EM" },
  { title: "\u3042\u305a\u5e0c", value: "/actors/exMr" },
  { title: "\u3061\u306a\u307f\u3093", value: "/actors/3mWD" },
  { title: "\u306a\u3064\u3081\u611b\u68a8", value: "/actors/JOr3" },
  { title: "\u306a\u306a\u305b\u9ebb\u8863", value: "/actors/9wKX" },
  { title: "\u3072\u306a\u305f\u6faa", value: "/actors/ARDP" },
  { title: "\u3086\u3046\u3072\u83dc\u90a3", value: "/actors/kAzm" },
];

var JAVDB_SERIES_OPTIONS = [
  { title: "\uff08\u7d20\uff09\u30b7\u30ed\u30a6\u30c8TV PREMIUM", value: "/series/M4nJ" },
  { title: "\u300c\u5e38\u306b\u6027\u4ea4\u300d", value: "/series/3nEN" },
  { title: "\u3010\u521d\u64ae\u308a\u3011\u30cd\u30c3\u30c8\u3067AV\u5fdc\u52df\u2192AV\u4f53\u9a13\u64ae\u5f71", value: "/series/rY2v" },
  { title: "\u3010\u6d41\u51fa\u6620\u50cf\u3011 \u5973\u5b50\u25cb\u751f \u90e8\u6d3b\u5408\u5bbf\u30bb\u30c3\u30af\u30b9", value: "/series/0w2k" },
  { title: "\uff06Fashion", value: "/series/Zx8V" },
  { title: "\u25cb\u25cb\u30fb\u30d9\u30b9\u30c8", value: "/series/8XG5" },
  { title: "\u25cb\u25cbNTR", value: "/series/Yq0b" },
  { title: "\u25cb\u25cb\u304a\u8cb8\u3057\u3057\u307e\u3059\u3002", value: "/series/x9O" },
  { title: "\u25cb\u25cb\u3061\u3083\u3063\u305f\u50d5", value: "/series/Yez" },
  { title: "\u25cb\u25cb\u306f\u30aa\u30ec\u306e\u30ab\u30ce\u30b8\u30e7\u3002", value: "/series/d2M" },
  { title: "\u25cb\u25cb\u30d9\u30b9\u30c84\u6642\u9593", value: "/series/RKqK" },
  { title: "\u25cb\u5206\u9593\u30ce\u30f3\u30b9\u30c8\u30c3\u30d7\u64ae\u5f71", value: "/series/Gwmz" },
  { title: "\u25cb\u5341\u8def\u306e\u6027", value: "/series/5Emz" },
  { title: "100\u5186\u30dd\u30c3\u30ad\u30ea", value: "/series/rnxZ" },
  { title: "100\u5186\u30dd\u30c3\u30ad\u30ea\uff08\u767e\u82b1\u6620\u753b/\u30a8\u30de\u30cb\u30a8\u30eb\uff09", value: "/series/DAAk" },
  { title: "120\uff05\u30ea\u30a2\u30eb\u30ac\u30c1\u8edf\u6d3e", value: "/series/nzDw" },
  { title: "17\u306e\u5fa1\u6cd5\u5ea6", value: "/series/YnVD" },
  { title: "2\u679a\u7d448\u6642\u9593\uff08\u30bf\u30ab\u30e9\u6620\u50cf\uff09", value: "/series/XYA5" },
  { title: "2\u4eba\u3063\u304d\u308a\u306b\u3057\u3066\u307f\u305f\u3089\u2026", value: "/series/Xg2G" },
  { title: "3.1\u6b21\u5143AV", value: "/series/7Pw1" },
  { title: "3D\u30cf\u30e1\u64ae\u308aVR\u6539", value: "/series/DKwM" },
  { title: "43\u6b73\u30d8\u30f3\u30bf\u30a4\u30d6\u30e9\u30c3\u30af\u30ab\u30e1\u30b3\u00d7\u7d20\u4eba\u30ec\u30a4\u30e4\u30fc\uff08\u5168\u65e5\u672c\u30ab\u30e1\u30b3\u5354\u540c\u7d44\u5408/\u5984\u60f3\u65cf\uff09", value: "/series/gP2y" },
  { title: "\u611b \u30d0\u30fc\u30c1\u30e3\u30aa\u30ca", value: "/series/ZxYm" },
  { title: "\u4ffa\u305f\u3061\u306e\u719f\u5973", value: "/series/qb4D" },
  { title: "\u629c\u304b\u305a\u306e14\u767a\u4e2d\u51fa\u3057", value: "/series/PPvX" },
  { title: "\u629c\u304b\u308c\u3063\u3071\u306a\u3057\u306e1\u6cca2\u65e5", value: "/series/1A1A" },
  { title: "\u767e\u6226\u932c\u78e8\u306e\u30ca\u30f3\u30d1\u5e2b\u306e\u30e4\u30ea\u90e8\u5c4b\u3067\u3001\u9023\u308c\u8fbc\u307fSEX\u96a0\u3057\u64ae\u308a", value: "/series/gq5y" },
  { title: "\u7206\u4e73\u306f\u4e00\u898b\u306b\u3057\u304b\u305a\uff01", value: "/series/wAb" },
  { title: "\u5351\u7325\u8a9e\u5973", value: "/series/wqXY" },
  { title: "\u672c\u5f53\u306b\u3042\u3063\u305f\u30a8\u30c3\u30c1\u306a\u304a\u8a71", value: "/series/223Z" },
  { title: "\u672c\u756a\u306a\u3057\u306e\u30de\u30c3\u30c8\u30d8\u30eb\u30b9\u306b\u884c\u3063\u3066\u51fa\u3066\u304d\u305f\u306e\u306f\u2026", value: "/series/wqab" },
  { title: "\u672c\u7269\u4eba\u59bb\uff08\u65e6\u90a3\u306b\u5185\u7dd2\u3067AV\u4f53\u9a13\uff09", value: "/series/m9Rr" },
  { title: "\u672c\u4e2d-VR", value: "/series/EJM9" },
  { title: "\u672c\u4e2dBEST", value: "/series/0670" },
  { title: "\u672c\u4e2d\u30c7\u30d3\u30e5\u30fc", value: "/series/06A7" },
  { title: "\u5f7c\u5973\u306b\u5185\u7dd2\u3067\u5f7c\u5973\u306e\u6bcd\u3068\u3082\u30e4\u3063\u3066\u307e\u3059\u2026", value: "/series/zBbE" },
  { title: "\u5f7c\u5973\u306e\u304a\u59c9\u3055\u3093\u306f\u5de8\u4e73\u3068\u4e2d\u51fa\u3057OK\u3067\u50d5\u3092\u8a98\u60d1", value: "/series/8Vza" },
  { title: "\u52c3\u8d77\u898b\u305b\u3064\u3051\u30b7\u30c1\u30e5\u30a8\u30fc\u30b7\u30e7\u30f3", value: "/series/vr99" },
  { title: "\u90e8\u5c4b\u306b\u9023\u308c\u8fbc\u3093\u3067\u3081\u3061\u3083\u304f\u3061\u3083\u30bb\u30c3\u30af\u30b9\u3057\u305f\u4ef6\u3002", value: "/series/Bg74" },
  { title: "\u8d85\u672c\u683c\u30a8\u30ed\u7d75\u5dfb\uff08\u30bf\u30ab\u30e9\u6620\u50cf\uff09", value: "/series/Yw3D" },
  { title: "\u8d85\u9ad8\u7d1a\u4e2d\u51fa\u3057\u5c02\u9580\u30bd\u30fc\u30d7", value: "/series/Yn0b" },
  { title: "\u8d85\u904e\u6fc0\u30d5\u30a1\u30c3\u30af", value: "/series/RXg8" },
  { title: "\u671d\u304b\u3089\u6669\u307e\u3067\u4e2d\u51fa\u3057\u30bb\u30c3\u30af\u30b9", value: "/series/AzRe" },
  { title: "\u671d\u307e\u3067\u306f\u3057\u3054\u9152", value: "/series/AKB0" },
  { title: "\u75f4\u25cf\u96fb\u8eca\uff08\u795e\u56de\uff09", value: "/series/92yV" },
  { title: "\u75f4\u25cf\u8a18\u9332\u65e5\u8a18", value: "/series/JMrR" },
  { title: "\u75f4\u6f22\u76d7\u64ae\uff06\u4e2d\u51fa\u3057\u7d20\u4eba\u5a18\u5a9a\u85ac\u30aa\u30a4\u30eb\u30de\u30c3\u30b5\u30fc\u30b8", value: "/series/8qvd" },
  { title: "\u6065\u8fb1\u3001\u9675\u25cf\u3001\u3068\u3073\u3063\u3053\u88c5\u7740\u30fb\u7e41\u83ef\u8857\u30c7\u30fc\u30c8\uff01", value: "/series/NXBb" },
  { title: "\u6065\u305a\u304b\u3057\u3044\u30ab\u30e9\u30c0", value: "/series/p3Ke" },
  { title: "\u61a7\u308c\u306e\u5973\u4e0a\u53f8\u3068", value: "/series/eO6E" },
  { title: "\u51fa\u4f1a\u3063\u3066\u25cb\u79d2\u3067\u5408\u4f53", value: "/series/emr" },
  { title: "\u521d\u64ae\u308a\u4eba\u59bb\u3001\u3075\u305f\u305f\u3073\u3002", value: "/series/AkkP" },
  { title: "\u521d\u64ae\u308a\u4eba\u59bb\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8", value: "/series/GMwb" },
  { title: "\u521d\u64ae\u308a\u4e94\u5341\u8def\u59bb\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8", value: "/series/yrdv" },
  { title: "\u521d\u88f8virginnude", value: "/series/gGN" },
  { title: "\u521d\u4f53\u9a13\u25cb\u672c\u756a\u30b9\u30da\u30b7\u30e3\u30eb", value: "/series/5nR8" },
  { title: "\u521d\u8131\u304e\u719f\u5973", value: "/series/AJ0" },
  { title: "\u7d14\u7cfb\u30e9\u30d3\u30ea\u30f3\u30b9", value: "/series/xrdg" },
  { title: "\u64ae\u3063\u3066\u51fa\u3057\uff01\u30de\u30b8\u30c3\u30af\u30df\u30e9\u30fc\u53f7", value: "/series/RPMn" },
  { title: "\u5927\u4eba\u306b\u306a\u3063\u305f\u3089\u30bb\u30f3\u30bf\u30fc\u30d3\u30ec\u30c3\u30b8\u3002", value: "/series/WkZ" },
  { title: "\u5927\u4eba\u306eAV", value: "/series/Rdkm" },
  { title: "\u4ee3\u3005\u6728\u5fe0", value: "/series/wmXB" },
  { title: "\u76d7\u64ae\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u3059\u3079\u3066", value: "/series/qdp9" },
  { title: "\u8abf\u6559\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8", value: "/series/pq9w" },
  { title: "\u50cd\u304f\u30aa\u30f3\u30ca", value: "/series/29rq" },
  { title: "\u50cd\u304f\u30aa\u30f3\u30ca\u7372\u308a", value: "/series/AqNP" },
  { title: "\u50cd\u304f\u30c9M\u3055\u3093.", value: "/series/pqd9" },
  { title: "\u72ec\u5360\uff01\u4eba\u306e\u59bb\u30ef\u30a4\u30c9\u30b9\u30da\u30b7\u30e3\u30eb", value: "/series/ZNXJ" },
  { title: "\u72ec\u5360\u3061\u3083\u3093", value: "/series/GBzm" },
  { title: "\u5815\u3061\u308b\u307e\u3067\u2026", value: "/series/2qw" },
  { title: "\u60aa\u5fb3\u30a8\u30ed\u533b\u5e2b\u76d7\u64ae", value: "/series/e28d" },
  { title: "\u653e\u8ab2\u5f8c\u7f8e\u5c11\u5973\u56de\u6625\u30ea\u30d5\u30ec\u30af\u30bd\u30ed\u30b8\u30fc", value: "/series/QV54" },
  { title: "\u653e\u8ab2\u5f8c\u306f\u30aa\u30c8\u30b3\u30ce\u5a18", value: "/series/KNOm" },
  { title: "\u975e\u65e5\u5e38\u7684\u60b6\u7d76\u904a\u622f", value: "/series/8Ax" },
  { title: "\u98a8\u4fd7\u4e2d\u51fa\u3057SEX", value: "/series/e2vE" },
  { title: "\u592b\u5a66\u3067\u6311\u6226", value: "/series/zMg4" },
  { title: "\u592b\u3068\u5b50\u4f5c\u308aSEX\u3092\u3057\u305f\u5f8c\u306f\u3044\u3064\u3082\u7fa9\u7236\u306b\u4e2d\u51fa\u3057\u3055\u308c\u7d9a\u3051\u3066\u3044\u307e\u3059\u2026\u3002", value: "/series/YZkB" },
  { title: "\u592b\u306e\u76ee\u306e\u524d\u3067\u72af\u3055\u308c\u3066", value: "/series/MbX" },
  { title: "\u592b\u306e\u4e0a\u53f8\u306b\u72af\u3055\u308c\u7d9a\u3051\u30667\u65e5\u76ee\u3001\u79c1\u306f\u7406\u6027\u3092\u5931\u3063\u305f\u2026\u3002", value: "/series/65vn" },
  { title: "\u7236\u304c\u51fa\u304b\u3051\u30662\u79d2\u3067\u30bb\u30c3\u30af\u30b9\u3059\u308b\u6bcd\u3068\u606f\u5b50", value: "/series/96gw" },
  { title: "\u5fa9\u523b\u30bb\u30ec\u30af\u30b7\u30e7\u30f3", value: "/series/vDAW" },
  { title: "\u611f\u3058\u3059\u304e\u3066\u3044\u3063\u3071\u3044\u304a\u3082\u3089\u3057\u3054\u3081\u3093\u306a\u3055\u3044\u2026", value: "/series/8RE" },
  { title: "\u9ad8\u7d1a\u548c\u98a8\u30bd\u30fc\u30d7", value: "/series/RZdn" },
  { title: "\u6b4c\u821e\u4f0e\u753a\u6574\u4f53\u6cbb\u7642\u9662", value: "/series/8qpx" },
  { title: "\u500b\u64ae\u30ca\u30f3\u30d1", value: "/series/aw6n" },
  { title: "\u59d1\u306e\u5351\u7325\u904e\u304e\u308b\u5de8\u4e73\u3092\u72d9\u3046\u5a18\u5a7f", value: "/series/8NNW" },
  { title: "\u9b3c\u30a4\u30ab\u30bb", value: "/series/NQPB" },
  { title: "\u9b3c\u30d5\u30a7\u30e9\u5730\u7344", value: "/series/6JE" },
  { title: "\u9ed2\u4eba\u5de8\u5927\u30de\u30e9 VS", value: "/series/p49m" },
  { title: "\u6df7\u6d74\u6c17\u5206", value: "/series/7y7M" },
  { title: "\u6975\u4e0a\uff01\uff01\u25cb\u25cb\u5965\u3055\u307e\u521d\u8131\u304eAV\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8", value: "/series/8VZd" },
  { title: "\u5bb6\u755c\u30b3\u30ec\u30af\u30bf\u30fc", value: "/series/MBV1" },
  { title: "\u5bb6\u307e\u3067\u9001\u3063\u3066\u30a4\u30a4\u3067\u3059\u304b\uff1f", value: "/series/xPkQ" },
  { title: "\u5ac1\u306e\u6bcd\u3068\u7981\u65ad\u6027\u4ea4", value: "/series/xr6A" },
  { title: "\u4ea4\u308f\u308b\u4f53\u6db2\u3001\u6fc3\u5bc6\u30bb\u30c3\u30af\u30b9", value: "/series/5EQa" },
  { title: "\u968e\u6bb5\u5973\u5b50\u6821\u751f", value: "/series/MnA4" },
  { title: "\u8857\u89d2\u7d20\u4eba\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0", value: "/series/Jg7d" },
  { title: "\u8857\u89d2\u30b7\u30ed\u30a6\u30c8\u25cb\u25cb\u3061\u3083\u3093\u306d\u308b", value: "/series/02X3" },
  { title: "\u8857\u89d2\u30b7\u30ed\u30a6\u30c8\u30ca\u30f3\u30d1", value: "/series/MqM1" },
  { title: "\u8857\u89d2\u30b7\u30ed\u30a6\u30c8\u30ca\u30f3\u30d1\uff01", value: "/series/QWR8" },
  { title: "\u8857\u884c\u304f\u304a\u59c9\u3055\u3093\u306b\u3001\u3061\u3087\u3063\u3068\u3060\u3051\u30a8\u30ed\u53cb\u3092\u7d39\u4ecb\u3057\u3066\u3082\u3089\u3063\u305f\u308a\u3001\u3082\u3089\u308f\u306a\u304b\u3063\u305f\u308a\u3059\u308b\u30b7\u30ea\u30fc\u30ba\u3067\u3059\u3002", value: "/series/x0pQ" },
  { title: "\u8857\u884c\u304f\u30bb\u30ec\u30d6\u4eba\u59bb\u3092\u30ca\u30f3\u30d1\u3057\u3066AV\u81ea\u5b85\u64ae\u5f71\uff01\u65e6\u90a3\u306e\u3044\u306a\u3044\u5bb6\u3067\u30e4\u308b\u80cc\u5fb3\u611f\u307e\u307f\u308c\u306e\u4e2d\u51fa\u3057\u6027\u4ea4\uff01\uff01", value: "/series/R2gz" },
  { title: "\u4eca\u65e5\u3001\u4f1a\u793e\u30b5\u30dc\u308a\u307e\u305b\u3093\u304b\uff1f", value: "/series/e26z" },
  { title: "\u91d1\u9aea\u30dd\u30eb\u30ce", value: "/series/kyZ4" },
  { title: "\u7dca\u7e1b\u8abf\u6559\u59bb", value: "/series/zeP7" },
  { title: "\u8fd1\u89aa\uff3b\u7121\u8a00\uff3d\u76f8\u59e6", value: "/series/dev5" },
  { title: "\u8fd1\u89aa\u76f8\u59e6", value: "/series/mebY" },
  { title: "\u8fd1\u89aa\u76f8\u59e6 \u304a\u6bcd\u3055\u3093\u306b\u81a3\u4e2d\u51fa\u3057", value: "/series/aqkX" },
  { title: "\u8fd1\u89aa\u76f8\u59e6\uff08VENUS\uff09", value: "/series/J0N8" },
  { title: "\u8fd1\u89aa\u76f8\u59e6\u5e7b\u6bcdINCEST", value: "/series/7ywZ" },
  { title: "\u8fd1\u89aa\u76f8\u59e6\u304a\u6bcd\u3055\u3093\u306b\u81a3\u4e2d\u51fa\u3057", value: "/series/zW" },
  { title: "\u7981\u65ad\u4ecb\u8b77", value: "/series/8MK" },
  { title: "\u5c31\u8077\u6d3b\u52d5FILE", value: "/series/WPgq" },
  { title: "\u5de8\u4e73\u30fb\u7206\u4e73", value: "/series/Q2p" },
  { title: "\u5de8\u4e73\u30c7\u30ea\u30d8\u30eb", value: "/series/O29B" },
  { title: "\u7d76\u5bfe\u7684\u7f8e\u5c11\u5973\u3001\u304a\u8cb8\u3057\u3057\u307e\u3059\u3002", value: "/series/pk5" },
  { title: "\u7d76\u5bfe\u306b\u898b\u3066\u6b32\u3057\u3044\uff01\uff01MBM\u5c71\u53e3\u793e\u9577\u304c\u53b3\u9078\u3057\u305f\u4eca\u6708\u306e\u304a\u85a6\u30813\u672c\u30bb\u30c3\u30c8", value: "/series/Bpaa" },
  { title: "\u53ef\u611b\u3044\u9854\u3057\u3066\u30c7\u30ab\u5c3b\uff01\uff01", value: "/series/akG4" },
  { title: "\u53e3\u5185Queen", value: "/series/8OZV" },
  { title: "\u53e3\u5185\u30af\u30a4\u30fc\u30f3", value: "/series/PygE" },
  { title: "\u6d99\u306e\u30ce\u30f3\u30b9\u30c8\u30c3\u30d7\u6fc0\u30a4\u30ab\u305bSEX", value: "/series/AJOy" },
  { title: "\u88cf\u30d6\u30ed\u30f3\u30c9\u751f\u30cf\u30e1", value: "/series/ZN5V" },
  { title: "\u604b\u591c\u3010ren-ya\u3011", value: "/series/MmrR" },
  { title: "\u604b\u306e\u30b9\u30ad\u30e3\u30f3\u30c0\u30eb", value: "/series/Kp3b" },
  { title: "\u88f8\u306e\u4e3b\u5a66", value: "/series/vK9" },
  { title: "\u5abd\u5abd\u7684\u95a8\u871c", value: "/series/GZ9q" },
  { title: "\u9ebb\u85ac\u635c\u67fb\u5b98", value: "/series/MmXQ" },
  { title: "\u7f8e\u5c11\u5973\u5373\u30cf\u30e1\u767d\u66f8", value: "/series/Mb4k" },
  { title: "\u7f8e\u5c11\u5973\u30b3\u30b9\u30d7\u30ec\u30a4\u30e4\u30fc\u4eba\u683c\u77ef\u6b63\u30b7\u30ea\u30fc\u30ba", value: "/series/wDGz" },
  { title: "\u7f8e\u719f\u5973\u30d9\u30b9\u30c8", value: "/series/mpJy" },
  { title: "\u59b9\u306e\u7206\u4e73\u306f\u4e00\u898b\u306b\u3057\u304b\u305a\uff08\u30c1\u30a7\u30ea\u30fc\u30ba\u308c\u307c\uff09", value: "/series/J6Zx" },
  { title: "\u840c\u3048\u3042\u304c\u308b\u52df\u96c6\u82e5\u59bb", value: "/series/aeEW" },
  { title: "\u79d8\u5bc6\u635c\u67fb\u5b98\u306e\u5973", value: "/series/V47z" },
  { title: "\u5bc6\u7740\u751f\u64ae\u308a \u4eba\u59bb\u4e0d\u502b\u65c5\u884c", value: "/series/WVqp" },
  { title: "\u5bc6\u7740\u30bb\u30c3\u30af\u30b9", value: "/series/mQED" },
  { title: "\u540d\u4f5c\u30dd\u30eb\u30ce", value: "/series/p4mE" },
  { title: "\u9b54\u6cd5\u306e\u30aa\u30a4\u30eb\u30de\u30c3\u30b5\u30fc\u30b8", value: "/series/Ndvg" },
  { title: "\u9b54\u93e1\u865f, \u6211\u5c31\u5728\u8eca\u5167\u5de5\u4f5c\u4f46\u4f60\u770b\u4e0d\u5230", value: "/series/Pm9" },
  { title: "\u6bcd\u59e6\u4e2d\u51fa\u3057", value: "/series/ZNYX" },
  { title: "\u6bcd\u5b50\u59e6", value: "/series/GJqz" },
  { title: "\u6bcd\u5b50\u4ea4\u5c3e", value: "/series/89W" },
  { title: "\u6bcd\u306e\u53cb\u4eba", value: "/series/neD4" },
  { title: "\u6728\u66dc\u65e5\u306e\u306f\u3075\u3093\u306f\u3075\u3093", value: "/series/mbQR" },
  { title: "\u52df\u96c6\u3061\u3083\u3093 \uff5e\u6c42\u3080\u3002\u4e00\u822c\u7d20\u4eba\u5973\u6027\uff5e", value: "/series/EmQ0" },
  { title: "\u7537\u306e\u5a18\u3001\u5b8c\u5168\u30e1\u30b9\u5316\u3053\u308c\u304f\u3057\u3087\u3093", value: "/series/DKma" },
  { title: "\u7537\u306f\u30dc\u30af\u4e00\u4eba", value: "/series/P2mN" },
  { title: "\u6fc3\u539a\u306a\u63a5\u543b\u3068SEX", value: "/series/XW4J" },
  { title: "\u5974\u96b7\u8272\u306e\u30b9\u30c6\u30fc\u30b8", value: "/series/wDD" },
  { title: "\u5973\u76e3\u7763\u30cf\u30eb\u30ca\u306e\u7d20\u4eba\u30ec\u30ba\u30ca\u30f3\u30d1", value: "/series/K4aA" },
  { title: "\u5973\u6559\u5e2b\u304c\u901a\u3046\u6574\u4f53\u30bb\u30e9\u30d4\u30fc\u6cbb\u7642\u9662", value: "/series/14xY" },
  { title: "\u5973\u5c3b", value: "/series/eQN" },
  { title: "\u5973\u4f53\u62f7\u554f\u7814\u7a76\u6240", value: "/series/9N5" },
  { title: "\u5973\u4f53\u56f3\u9451", value: "/series/ebAr" },
  { title: "\u5973\u512aBEST\uff08\u30e0\u30fc\u30c7\u30a3\u30fc\u30ba\uff09", value: "/series/Q2XG" },
  { title: "\u5973\u5b50\u793e\u54e1\u91ce\u7403\u62f3", value: "/series/0dx7" },
  { title: "\u5973\u5b50\u6821\u751f\u76e3\u7981\u51cc\u8fb1 \u9b3c\u755c\u8f2a\u59e6", value: "/series/J14A" },
  { title: "\u5973\u5b50\u6821\u751f\u76e3\u7981\u51cc\u8fb1\u9b3c\u755c\u8f2a\u59e6", value: "/series/1y9" },
  { title: "\u6b50\u7f8e", value: "/series/western" },
  { title: "\u6d3e\u9063\u30de\u30c3\u30b5\u30fc\u30b8\u5e2b\u306b\u304d\u308f\u3069\u3044\u79d8\u90e8\u3092\u89e6\u3089\u308c\u3059\u304e\u3066\u3001\u5feb\u697d\u306b\u8010\u3048\u5207\u308c\u305a\u5bdd\u53d6\u3089\u308c\u307e\u3057\u305f\u3002", value: "/series/YNpz" },
  { title: "\u50d5\u306e\u77e5\u3089\u306a\u3044\u59bb\u3092\u898b\u305f\u304f\u3066\u2026", value: "/series/Z4z8" },
  { title: "\u50d5\u306e\u306d\u3068\u3089\u308c\u8a71\u3057\u3092\u805e\u3044\u3066\u307b\u3057\u3044", value: "/series/me1y" },
  { title: "\u59bb\u306b\u306f\u53e3\u304c\u88c2\u3051\u3066\u3082\u8a00\u3048\u307e\u305b\u3093\u3001\u7fa9\u6bcd\u3055\u3093\u3092\u5b55\u307e\u305b\u3066\u3057\u307e\u3063\u305f\u306a\u3093\u3066\u2026\u3002", value: "/series/746Z" },
  { title: "\u671f\u9593\u9650\u5b9a\u719f\u5973\u30d1\u30c3\u30af", value: "/series/enJM" },
  { title: "\u7dba\u9e97\u3067\u3044\u3084\u3089\u3057\u3044\u53d4\u6bcd\u3055\u3093", value: "/series/29m" },
  { title: "\u5f37\u5236\u7d76\u9802\u7d76\u53eb\u62f7\u554f\u8abf\u6559", value: "/series/E6DJ" },
  { title: "\u89aa\u65cf\u76f8\u59e6", value: "/series/0e8J" },
  { title: "\u5bdd\u53d6\u3089\u308c\u7a2e\u4ed8\u3051\u30d7\u30ec\u30b9", value: "/series/nqv4" },
  { title: "\u9752\u5c71\u7325\u893b\u30a8\u30b9\u30c6\u30b5\u30ed\u30f3", value: "/series/A9mP" },
  { title: "\u6e05\u7d14\u30af\u30ed\u30cb\u30af\u30eb", value: "/series/J4Z3" },
  { title: "\u5168\u56fd\u4eba\u59bb\u3048\u308d\u56f3\u9451", value: "/series/9qmE" },
  { title: "\u5168\u56fd\u719f\u5973\u635c\u7d22\u968a", value: "/series/akyO" },
  { title: "\u5168\u56fd\u7e26\u65ad\u300cMaji\u300d100\uff05\u30ca\u30f3\u30d1 \u7d20\u4eba\u5965\u3055\u3093\u3054\u99b3\u8d70\u69d8\u3067\u3057\u305f\u3002", value: "/series/qbpr" },
  { title: "\u4eba\u59bb\u6065\u60a6\u65c5\u884c", value: "/series/Rn7" },
  { title: "\u4eba\u59bb\u6e6f\u604b\u65c5\u884c", value: "/series/QWDq" },
  { title: "\u4eba\u59bb\u306e\u6d6e\u6c17\u5fc3", value: "/series/6dQM" },
  { title: "\u4eba\u59bb\u306e\u82b1\u3073\u3089\u3081\u304f\u308a", value: "/series/4d1E" },
  { title: "\u4eba\u59bb\u30e9\u30f3\u30b8\u30a7\u30ea\u30fc\u30ca", value: "/series/A840" },
  { title: "\u4eba\u751f\u521d\u30fb\u30c8\u30e9\u30f3\u30b9\u72b6\u614b \u6fc0\u30a4\u30ad\u7d76\u9802\u30bb\u30c3\u30af\u30b9", value: "/series/P0vr" },
  { title: "\u65e5\u672c\u4eba\u304c\u30cf\u30e1\u308b\uff01\uff01", value: "/series/R5Zn" },
  { title: "\u8272\u767d\u30c7\u30ab\u5c3b\u306e\u5bb6\u4e8b\u4ee3\u884c\u304a\u3070\u3055\u3093\u306b\u5373\u30cf\u30e1\uff01", value: "/series/NpVb" },
  { title: "\u5239\u90a3\u7684\u80cc\u5fb3\u65c5\u884c \u4eba\u59bb\u5931\u683c", value: "/series/BP06" },
  { title: "\u820c\u30d9\u30ed\u30d5\u30a7\u30c1", value: "/series/Kg4A" },
  { title: "\u795e\u7af6\u6cf3", value: "/series/Yr5z" },
  { title: "\u795e\u7af6\u6cf3\u6c34\u7740", value: "/series/BEy9" },
  { title: "\u795e\u30b9\u30af\u6c34", value: "/series/pzq" },
  { title: "\u795e\u30d1\u30f3\u30b9\u30c8", value: "/series/W1OZ" },
  { title: "\u795e\u30d6\u30eb\u30de", value: "/series/O2bB" },
  { title: "\u751f\u30d1\u30b3PornGirl", value: "/series/rVmD" },
  { title: "\u58f0\u304c\u51fa\u305b\u306a\u3044\u7d76\u9802\u6388\u696d", value: "/series/M4m4" },
  { title: "\u5b9f\u9332 \u96fb\u8eca\u75f4\u25cf\u6620\u50cf", value: "/series/xP8E" },
  { title: "\u5b9f\u9332\u30fb\u8fd1\u89aa\u76f8\u59e6", value: "/series/AKdK" },
  { title: "\u6642\u9593\u3088\u6b62\u307e\u308c\uff01", value: "/series/m4D" },
  { title: "\u4e16\u754c\u306e\uff08\u6fc0\uff09\u30ef\u30a4\u30bb\u30c4\u5a18", value: "/series/r4Gz" },
  { title: "\u719f\u5e74AV\u30c7\u30d3\u30e5\u30fc\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8", value: "/series/k484" },
  { title: "\u719f\u5973", value: "/series/8PVa" },
  { title: "\u719f\u5973\u59bb\u9762\u63a5\u30cf\u30e1\u64ae\u308a", value: "/series/G4DD" },
  { title: "\u719f\u5973\u8272\u60c5\u65c5", value: "/series/pqJk" },
  { title: "\u719f\u5973\u9650\u5b9a \u719f\u5973\u304c\u90e8\u5c4b\u306b\u3084\u3063\u3066\u6765\u305f\uff08\u719f\u5973\u30d0\u30f3\u30af/\u30a8\u30de\u30cb\u30a8\u30eb\uff09", value: "/series/rY5R" },
  { title: "\u719f\u5973\u306e\u6d6e\u6c17\u306f\u672c\u6c17\u306eSEX", value: "/series/QJO7" },
  { title: "\u719f\u59bb", value: "/series/O1nA" },
  { title: "\u79c1\u3001\u5b9f\u306f\u592b\u306e\u4e0a\u53f8\u306b\u72af\u3055\u308c\u7d9a\u3051\u3066\u307e\u3059\u2026", value: "/series/O2mk" },
  { title: "\u79c1\u7acb\u30d1\u30b3\u30d1\u30b3\u5973\u5b50\u5927\u5b66", value: "/series/N2E3" },
  { title: "\u79c1\u306f\u75f4\u5973", value: "/series/mezD" },
  { title: "\u56db\u516d\u6642\u4e2d\u3001\u5a18\u5a7f\u306e\u30c7\u30ab\u30c1\u25cb\u30dd\u304c\u6b32\u3057\u304f\u3066\u582a\u3089\u306a\u3044\u7fa9\u6bcd\u306e\u8a98\u3044", value: "/series/14mA" },
  { title: "\u7d20\u4eba\u53c2\u52a0\u30d0\u30e9\u30a8\u30c6\u30a3", value: "/series/mzAD" },
  { title: "\u7d20\u4eba\u53c2\u52a0\u30d0\u30e9\u30a8\u30c6\u30a3\u30fc", value: "/series/MZGk" },
  { title: "\u7d20\u4eba\u521d\u64ae\u308a\u751f\u4e2d\u51fa\u3057", value: "/series/PJ6v" },
  { title: "\u7d20\u4eba\u5a18\u3001\u304a\u8cb8\u3057\u3057\u307e\u3059\u3002", value: "/series/pVb" },
  { title: "\u7d20\u4eba\u5973\u5b50\u5927\u751f", value: "/series/pYy5" },
  { title: "\u7d20\u4eba\u719f\u5973\u59bb\u305f\u3061\u306b\u3088\u308b\u7ae5\u8c9e\u7b46\u4e0b\u308d\u3057", value: "/series/vDkp" },
  { title: "\u7d20\u4eba\u8ab0\u30b3\u30ec", value: "/series/9GrV" },
  { title: "\u7d20\u4eba\u56db\u7573\u534a", value: "/series/ZynP" },
  { title: "\u7d20\u4eba\u9650\u5b9a\uff01\uff08ATOM\uff09", value: "/series/KK77" },
  { title: "\u7d20\u4eba\u63f4\u4ea4\u751f\u4e2d\u51fa\u3057", value: "/series/gyzm" },
  { title: "\u7d20\u4eba\u30bb\u30fc\u30e9\u30fc\u670d\u751f\u4e2d\u51fa\u3057", value: "/series/pk9Z" },
  { title: "\u7d20\u4eba\u30ca\u30f3\u30d1\u4e2d\u51fa\u3057", value: "/series/GnEJ" },
  { title: "\u7d20\u4eba\u30d1\u30f3\u30c1\u30e9in\u81ea\u5b85\u3067\u500b\u4eba\u64ae\u5f71\u4f1a", value: "/series/pDvw" },
  { title: "\u7d20\u4eba\u30db\u30a4\u30db\u30a4\u00d7MBM", value: "/series/1RZW" },
  { title: "\u6e6f\u3051\u3080\u308a\u8fd1\u89aa\u76f8\u59e6", value: "/series/QN5p" },
  { title: "\u6843\u8272\u304b\u305e\u304f", value: "/series/b7RA" },
  { title: "\u7279\u5316VR", value: "/series/AM1P" },
  { title: "\u5929\u4e95\u7279\u5316\u30a2\u30f3\u30b0\u30eb", value: "/series/YGxD" },
  { title: "\u5929\u7136\u6210\u5206\u7531\u6765\u25cb\u25cb\u6c41100\uff05", value: "/series/89" },
  { title: "\u7530\u820e\u306e\u8fd1\u89aa\u76f8\u59e6", value: "/series/d4vQ" },
  { title: "\u753a\u7530\u30ec\u30f3\u30ba\u306eBLACK KAMEKO FILE", value: "/series/wmYD" },
  { title: "\u6295\u7a3f\u500b\u4eba\u64ae\u5f71 \u30ad\u30e2\u7537\u30f2\u30bf\u5fa9\u8b90\u52d5\u753b", value: "/series/ky9P" },
  { title: "\u6295\u7a3fFAN\u30af\u30e9\u30d6", value: "/series/Ybx8" },
  { title: "\u7a81\u6483\u968aSP\u4f01\u753b\uff01", value: "/series/9yJ5" },
  { title: "\u56f3\u66f8\u9928\u3067\u58f0\u3082\u51fa\u305b\u305a\u7cf8\u5f15\u304f\u307b\u3069\u611b\u6db2\u304c\u6ea2\u308c\u51fa\u3059\u654f\u611f\u5a18", value: "/series/wV8B" },
  { title: "\u63a8\u3057\u3063\u5b50\u3058\u3063\u304f\u308a\uff01\u30df\u30e9\u30fc\u53f7", value: "/series/dgXa" },
  { title: "\u63a8\u3057\u3063\u3053\u3058\u3063\u304f\u308a\uff01\u30bf\u30aa\u30eb\u4e00\u679a \u7537\u6e6f\u5165\u3063\u3066\u307f\u307e\u305b\u3093\u304b\uff1f", value: "/series/mJZn" },
  { title: "\u5b8c\u5168\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u6620\u50cf", value: "/series/ay9O" },
  { title: "\u5b8c\u719f \u30df\u30bb\u30b9\u30d0\u30fc\u30c1\u30e3\u30aa\u30ca", value: "/series/mbzM" },
  { title: "\u5b8c\u30ca\u30deSTYLE@\u25cb\u25cb", value: "/series/YZJB" },
  { title: "\u5984\u60f3\u4e3b\u89b3", value: "/series/n4kY" },
  { title: "\u5371\u967a\u65e5\u76f4\u6483\uff01\uff01\u5b50\u4f5c\u308a\u3067\u304d\u308b\u30bd\u30fc\u30d7\u30e9\u30f3\u30c9", value: "/series/0RBX" },
  { title: "\u672a\u6210\u5e74(\u6210\u5e74\u6f14\u54e1)", value: "/series/zbGz" },
  { title: "\u6211\u6162\u3067\u304d\u308c\u3070\u751f\u4e2d\u51fa\u3057SEX\uff01", value: "/series/DRaJ" },
  { title: "\u6211\u304c\u5bb6\u306e\u7f8e\u3057\u3044\u59d1", value: "/series/G45Q" },
  { title: "\u7121\u78bc", value: "/series/uncensored" },
  { title: "\u7121\u8a00\u25cb\u25cb", value: "/series/VMG" },
  { title: "\u4e94\u30c4\u661fch", value: "/series/eOWr" },
  { title: "\u5348\u524d10\u6642 \u5b66\u6821\u3069\u3046\u3057\u305f\u306e\u2026", value: "/series/myRZ" },
  { title: "\u821e\u30ef\u30a4\u30d5 \uff5e\u30bb\u30ec\u30d6\u5036\u697d\u90e8\uff5e", value: "/series/DV35" },
  { title: "\u5df7\u3067\u5642\u306e\u300c\u304a\u3070\u3055\u3093\u30ec\u30f3\u30bf\u30eb\u300d", value: "/series/6qVD" },
  { title: "\u5c0f\u60aa\u9b54\u6311\u767a\u7f8e\u5c11\u5973", value: "/series/14q9" },
  { title: "\u8105\u8feb\uff08CHoBitcH\uff09", value: "/series/06nv" },
  { title: "\u8105\u8feb\u30b9\u30a4\u30fc\u30c8\u30eb\u30fc\u30e0", value: "/series/QV6M" },
  { title: "\u65b0\u30fb\u5965\u3055\u3093\u30b7\u30ea\u30fc\u30ba", value: "/series/0p43" },
  { title: "\u65b0\u30fb\u7d76\u5bfe\u7684\u7f8e\u5c11\u5973\u3001\u304a\u8cb8\u3057\u3057\u307e\u3059\u3002", value: "/series/kA6" },
  { title: "\u65b0\u30fb\u9e97\u3057\u306e\u719f\u5973\u6e6f\u5c4b", value: "/series/EzE2" },
  { title: "\u65b0\u4eba\uff01可爱*\u5c02\u5c5e\u30c7\u30d3\u30e5\u2192", value: "/series/D262" },
  { title: "\u65b0\u4eba\uff08\u30de\u30ad\u30b7\u30f3\u30b0\uff09", value: "/series/65y0" },
  { title: "\u65b0\u4eba\u00d7\u30ae\u30ea\u30ae\u30ea\u30e2\u30b6\u30a4\u30af", value: "/series/5EYM" },
  { title: "\u65b0\u4ebaNO.1STYLE", value: "/series/5na8" },
  { title: "\u7f9e\u6065\uff01", value: "/series/QNkK" },
  { title: "\u7d9a\u30fb\u7570\u5e38\u6027\u4ea4 \u4e94\u5341\u8def\u6bcd\u3068\u5b50", value: "/series/p4Rm" },
  { title: "\u53b3\u9078\u7f8e\u5c11\u5973\u306b\u30b3\u30b9\u30d7\u30ec\u3055\u305b\u3066\u4ffa\u306e\u5b50\u3092\u5b55\u307e\u305b\u308b", value: "/series/POq0" },
  { title: "\u4e00\u822c\u7537\u5973\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0AV", value: "/series/X47J" },
  { title: "\u4e00\u7c92\u4e07\u500d", value: "/series/QYGG" },
  { title: "\u4e00\u6d41\u306e\u304a\u3070\u69d8\u30ca\u30f3\u30d1 \u30bb\u30ec\u30d6\u7f8e\u719f\u5973\u4e2d\u51fa\u3057JAPAN", value: "/series/94Zp" },
  { title: "\u4e00\u6cca\u4e8c\u65e5\u3001\u7f8e\u5c11\u5973\u5b8c\u5168\u4e88\u7d04\u5236\u3002", value: "/series/W7" },
  { title: "\u4e00\u3064\u5c4b\u6839\u306e\u4e0b\u306e\u6027\u4ea4", value: "/series/x4yQ" },
  { title: "\u7fa9\u6bcd\u5974\u96b7", value: "/series/W7R" },
  { title: "\u6deb\u4e71Madam", value: "/series/ZxPP" },
  { title: "\u6deb\u8a9e\u75f4\u5973\uff08\u30c9\u30b0\u30de\uff09", value: "/series/kp0" },
  { title: "\u6deb\u8a9e\u5973\u5b50\u30a2\u30ca", value: "/series/3nnD" },
  { title: "\u6deb\u8a9e\u4e2d\u51fa\u3057\u30bd\u30fc\u30d7", value: "/series/9pw" },
  { title: "\u6deb\u8a9e\u304b\u305f\u308a\u304b\u3051\u30aa\u30ca\u30cb\u30fc", value: "/series/5rb8" },
  { title: "\u5fdc\u52df\u7d20\u4eba\u3001\u521dAV\u64ae\u5f71", value: "/series/5X7D" },
  { title: "\u6c38\u9060\u306b\u7d42\u308f\u3089\u306a\u3044\u3001\u4e2d\u51fa\u3057\u8f2a\u59e6\u306e\u65e5\u3005\u3002", value: "/series/7qAb" },
  { title: "\u53cb\u9054\u306e\u6bcd\u89aa", value: "/series/76B4" },
  { title: "\u53cb\u4eba\u306e\u6bcd", value: "/series/8V1E" },
  { title: "\u53cb\u4eba\u306e\u6bcd\u89aa", value: "/series/bKJB" },
  { title: "\u53cb\u4eba\u306e\u59bb\u306f\u30c9\u30b9\u30b1\u30d9\u5bb6\u5ead\u6559\u5e2b", value: "/series/KkdO" },
  { title: "\u8a98\u60d1\u6388\u696d", value: "/series/QVW8" },
  { title: "\u6b32\u6c42\u4e0d\u6e80\u306e\u6bcd\u3068\u7d76\u502b\u606f\u5b50", value: "/series/BAm4" },
  { title: "\u5186\u5973\u4ea4\u969b", value: "/series/G4q5" },
  { title: "\u6708\u520a\u719f\u5973\u79d8\u5b9d\u9928", value: "/series/82dV" },
  { title: "\u6708\u520a\u30a8\u30ed\u30ab\u30ea", value: "/series/V9WD" },
  { title: "\u82b8\u80fd\u4eba", value: "/series/3nkN" },
  { title: "\u662d\u548c\u7325\u893b\u5b98\u80fd\u30c9\u30e9\u30de", value: "/series/xg78" },
  { title: "\u771f\u30fb\u7570\u5e38\u6027\u4ea4", value: "/series/54nM" },
  { title: "\u771f\u6027\u4e2d\u51fa\u3057", value: "/series/1Bz4" },
  { title: "\u5236\u670d\u7f8e\u5c11\u5973\u3068\u6027\u4ea4", value: "/series/9DRw" },
  { title: "\u5236\u670d\u304c\u4f3c\u5408\u3046\u7d20\u6575\u306a\u5a18", value: "/series/Z4P" },
  { title: "\u4e2d\u51fa\u305720\u9023\u767a", value: "/series/0R5q" },
  { title: "\u4e2d\u51fa\u3057\u9732\u5929\u6e29\u6cc9", value: "/series/JnV2" },
  { title: "\u4e2d\u51fa\u3057\u4eba\u59bb\u4e0d\u502b\u65c5\u884c", value: "/series/p4w" },
  { title: "\u4e2d\u51fa\u3057\u3059\u308b\u3060\u3051\u306e\u7c21\u5358\u306a\u304a\u4ed5\u4e8b", value: "/series/1RDJ" },
  { title: "\u4e2d\u5e74\u30aa\u30e4\u30b8\u3068\u25cb\u25cb", value: "/series/Yxwz" },
  { title: "\u6700\u9ad8\u306e\u611b\u4eba\u3068\u3001\u6700\u9ad8\u306e\u4e2d\u51fa\u3057\u6027\u4ea4\u3002", value: "/series/ZdPX" },
  { title: "\u6700\u5f37\u5c5e\u6027", value: "/series/wVB" },
  { title: "\u6700\u65b0\u3084\u307f\u3064\u304d\u30a8\u30b9\u30c6", value: "/series/Nb" },
  { title: "AI\u30ea\u30de\u30b9\u30bf\u30fc\uff08Tokyo247\uff09", value: "/series/58Xp" },
  { title: "AI\u30ea\u30de\u30b9\u30bf\u30fc\uff08\u30a2\u30ea\u30b9JAPAN\uff09", value: "/series/JE1x" },
  { title: "AI\u30ea\u30de\u30b9\u30bf\u30fc\uff08\u30b7\u30e3\u30a4\u4f01\u753b\uff09", value: "/series/YOPz" },
  { title: "AI\u30ea\u30de\u30b9\u30bf\u30fc\u7248", value: "/series/9xwV" },
  { title: "阿芙洛狄忒", value: "/series/9qX" },
  { title: "AV\u7121\u7406", value: "/series/MmpQ" },
  { title: "AV出道", value: "/series/6d4a" },
  { title: "AV\u30c7\u30d3\u30e5\u30fc\uff08\u30d4\u30fc\u30bf\u30fc\u30ba\uff09", value: "/series/MbvJ" },
  { title: "BEST\uff08\u4f5c\u54c1\u96c6\uff09", value: "/series/PQRe" },
  { title: "Boin\u300c\u25cb\u25cb\u300dBox", value: "/series/8ZW" },
  { title: "茧\uff08SILK LABO\uff09", value: "/series/22Mp" },
  { title: "数字频道", value: "/series/Bz0d" },
  { title: "E-BODY", value: "/series/1NW" },
  { title: "E-BODY BEST PROPORTIONS", value: "/series/4Paa" },
  { title: "E-BODY VR", value: "/series/ydkZ" },
  { title: "E-BODY\u5c02\u5c5e\u30c7\u30d3\u30e5\u30fc", value: "/series/P5W9" },
  { title: "Extreme\uff08\u904e\u6fc0\u306a\uff09\u30aa\u30ca\u30cb\u30b9\u30c8\uff01", value: "/series/Z97A" },
  { title: "FALENO\u7dcf\u96c6\u7de8", value: "/series/wmv7" },
  { title: "第一印象", value: "/series/qDJ6" },
  { title: "风俗频道", value: "/series/Mm9Q" },
  { title: "GAL\u30cf\u30e1\u30ea\u30d9\u30f3\u30b8\u30e3\u30fc\u30ba", value: "/series/Jym8" },
  { title: "GET\u30b7\u30ea\u30fc\u30ba", value: "/series/nKy9" },
  { title: "极致", value: "/series/QBG" },
  { title: "超级恋物", value: "/series/dNM" },
  { title: "H\u306a\u88cf\u53d6\u5f15", value: "/series/Gnbg" },
  { title: "J\u25cf FIRST TAKE", value: "/series/aD8n" },
  { title: "KARMA\u30ca\u30f3\u30d1\u968a\u304c\u884c\u304f\uff01", value: "/series/JO5B" },
  { title: "可爱*VR", value: "/series/VP0n" },
  { title: "可爱*\u30d9\u30b9\u30c8", value: "/series/8e23" },
  { title: "kira\u2606kira BEST", value: "/series/dzB5" },
  { title: "kira\u2606kiraBLACKGAL", value: "/series/RYz" },
  { title: "MADOOOON\uff01\uff01\uff01\uff01 \u30cf\u30e1\u64ae\u308a", value: "/series/7d7B" },
  { title: "MOODYZ 8KVR", value: "/series/EEZ2" },
  { title: "月力欢呼", value: "/series/Wzep" },
  { title: "mpo.jp\u30d7\u30ec\u30bc\u30f3\u30c4 \u30b6\u2606\u30ce\u30f3\u30d5\u30a3\u30af\u30b7\u30e7\u30f3", value: "/series/BgrG" },
  { title: "新人", value: "/series/ZNkJ" },
  { title: "NTR网", value: "/series/xgdE" },
  { title: "pg", value: "/series/2aeP" },
  { title: "高级VR", value: "/series/Eqa3" },
  { title: "高级时尚泡泡浴", value: "/series/OXvv" },
  { title: "红龙", value: "/series/0YRE" },
  { title: "RED\u7dcf\u96c6\u7de8", value: "/series/BJZO" },
  { title: "新人VR", value: "/series/64n0" },
  { title: "新人\u30d9\u30b9\u30c8", value: "/series/pOZq" },
  { title: "S1女孩合集", value: "/series/WVXe" },
  { title: "S1 VR", value: "/series/aqWg" },
  { title: "S1女孩合集", value: "/series/K486" },
  { title: "S\u7d1a\u719f\u5973\uff08VENUS\uff09", value: "/series/gyr7" },
  { title: "SEX\u306b\u6301\u3061\u8fbc\u3080\u69d8\u5b50\u3092\u76d7\u64ae\u3057\u305fDVD", value: "/series/ky60" },
  { title: "SEX\u306e\u9038\u6750\u3002", value: "/series/pqpk" },
  { title: "SOD\u5973\u5b50\u793e\u54e1", value: "/series/bKXa" },
  { title: "超级鱼眼恋物", value: "/series/xOZA" },
  { title: "THE \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8 \u672c\u80fd\u4e38\u51fa\u3057\u3067\u3059\u308b\u7d76\u9802SEX", value: "/series/xOAE" },
  { title: "最佳", value: "/series/VGz" },
  { title: "未完成VR", value: "/series/V0zA" },
  { title: "VR最佳", value: "/series/P2D2" },
  { title: "WAAPVR\u798f\u888b", value: "/series/8ww3" },
  { title: "\u3042\u3041\u5965\u3055\u3093", value: "/series/2adq" },
  { title: "\u30a2\u30a4\u30c7\u30a2\u30dd\u30b1\u30c3\u30c8BEST", value: "/series/1JN4" },
  { title: "\u30a2\u30a4\u30dd\u30b1 VR", value: "/series/Zpv7" },
  { title: "\u30a2\u30a4\u30dd\u30b18KVR", value: "/series/OE7z" },
  { title: "\u30a2\u30a4\u30dd\u30b1\u9038\u6750\u767a\u6398\u30d7\u30ed\u30b8\u30a7\u30af\u30c8", value: "/series/nzp9" },
  { title: "\u30a2\u30a6\u30c8\u30d3\u30b8\u30e7\u30f3VR KMPVR", value: "/series/zQ3z" },
  { title: "\u30a2\u30b8\u30a2\u53e4\u5f0f\u30de\u30c3\u30b5\u30fc\u30b8\u5e97\u76d7\u64ae", value: "/series/gemy" },
  { title: "\u30a2\u30c9\u30a2", value: "/series/dd7e" },
  { title: "\u3042\u306a\u305f\u3001\u8a31\u3057\u3066\u2026\u3002", value: "/series/ZX" },
  { title: "\u3042\u306e\u65e5\u304b\u3089\u305a\u3063\u3068\u2026\u3002\u7dca\u7e1b\u8abf\u6559\u4e2d\u51fa\u3057\u3055\u308c\u308b\u5236\u670d\u7f8e\u5c11\u5973", value: "/series/76gP" },
  { title: "\u30a4\u25cf\u30b9\u30bf\u3084\u308a\u305f\u30ac\u30fc\u30eb\u3002", value: "/series/Qr0q" },
  { title: "\u3044\u3061\u3083\u30e9\u30d6", value: "/series/5rOa" },
  { title: "\u3044\u3082\u3046\u3068\u30a2\u30a4\u30c9\u30eb", value: "/series/2aAp" },
  { title: "\u30f4\u30a3\u30fc\u30ca\u30b9\u30fb\u30c6\u30eb\u30e1", value: "/series/G4y2" },
  { title: "\u3046\u3061\u306e\u59bb\u25cb\u25cb\u3092\u5bdd\u53d6\u3063\u3066\u304f\u3060\u3055\u3044", value: "/series/ZdMX" },
  { title: "\u30a8\u30b9\u30ab\u30ec\u30fc\u30c8\u3059\u308b\u30c9\u3057\u308d\u30fc\u3068\u5a18", value: "/series/5ea" },
  { title: "\u30a8\u30c3\u30c1\u5036\u697d\u90e8", value: "/series/qD83" },
  { title: "\u30a8\u30ed\u30d5\u30e9\u30b0\u3001\u30ae\u30f3\u7acb\u3061\u3057\u307e\u3057\u305f\uff01", value: "/series/ArAK" },
  { title: "\u304a\u5b9d\u798f\u7bb1", value: "/series/04vb" },
  { title: "\u304a\u6bcd\u3055\u3093\u306e\u73a9\u5177\u306b\u306a\u3063\u305f\u50d5", value: "/series/mQY" },
  { title: "\u304a\u8272\u6c17P\u25cbA\u4f1a\u9577\u3068\u60aa\u30ac\u30ad\u751f\u5f92\u4f1a", value: "/series/YnKx" },
  { title: "\u304a\u7fa9\u6bcd\u3055\u3093\u3001\u5973\u623f\u3088\u308a\u305a\u3063\u3068\u3044\u3044\u3088\u2026", value: "/series/k42V" },
  { title: "\u304a\u59c9\u3055\u3093\u306e\u5de8\u5c3b\u304c\u7325\u893b\u904e\u304e\u3066\u79d2\u6bba\u3067\u60a9\u6bba\uff01\uff01", value: "/series/K4xv" },
  { title: "\u304a\u3057\u3083\u3076\u308a\u4e88\u5099\u6821", value: "/series/WkEK" },
  { title: "\u30aa\u30c8\u30b3\u30ce\u30b3\u306e\u30aa\u30ca\u30cb\u30fc", value: "/series/qMEM" },
  { title: "\u304a\u306f\u30ba\u30dc\u30c3\uff01", value: "/series/kK46" },
  { title: "\u30aa\u30e4\u30b8\u306e\u30cf\u30e1\u64ae\u308a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8", value: "/series/mJ6Z" },
  { title: "\u30ab\u30c1\u30af\u30aa\u30c8\u30b3\u30ce\u30b3", value: "/series/2kEq" },
  { title: "\u30ab\u30c1\u30b3\u30c1TV", value: "/series/wxEm" },
  { title: "\u30ac\u30c1\u30ca\u30f3\u30d1\uff01\uff08\u30d4\u30fc\u30bf\u30fc\u30ba\uff09", value: "/series/WVPQ" },
  { title: "\u30ac\u30c1\u30f3\u30b3\u4e2d\u51fa\u3057\uff01\u9854\u51fa\u3057\uff01\u4eba\u59bb\u30ca\u30f3\u30d1", value: "/series/WVeQ" },
  { title: "\u30ad\u30df\u300110\u4ee3\u3001\u604b\u306e\u4e88\u611f", value: "/series/PVJX" },
  { title: "\u30ae\u30e3\u30eb\u3057\u3079\u9577\u8005", value: "/series/3Eab" },
  { title: "\u30ae\u30e3\u30eb\u3059\u305f\u30b0\u30e9\u30e0", value: "/series/4nbZ" },
  { title: "\u304d\u3089\u304d\u3089\u30ef\u30a4\u30d5", value: "/series/2gXp" },
  { title: "\u304f\u3059\u3050\u308a\u30d5\u30a7\u30c1", value: "/series/1WAn" },
  { title: "\u304f\u3059\u3050\u308a\u30d7\u30ec\u30a4", value: "/series/rDwz" },
  { title: "\u30af\u30bb\u51c4\u30a2\u30d8\u308a\u7d20\u4eba\u3007\u3007", value: "/series/39w3" },
  { title: "\u304f\u3084\u3057\u3044\u306e\u3067\u305d\u306e\u307e\u307eAV\u767a\u58f2\u304a\u9858\u3044\u3057\u307e\u3059", value: "/series/z595" },
  { title: "\u30b2\u30b9\u306e\u6975\u307f\u6620\u50cf", value: "/series/de29" },
  { title: "\u3053\u3046\u898b\u3048\u3066\u30aa\u30c1\u30f3\u30c1\u30f3\u3064\u3044\u3066\u307e\u3059", value: "/series/48Q6" },
  { title: "\u30b6\u30fb\u7b46\u304a\u308d\u3057", value: "/series/Yg8" },
  { title: "\u30b6\u30fb\u51e6\u5973\u55aa\u5931", value: "/series/EnXJ" },
  { title: "\u30b6\u30fb\u9762\u63a5", value: "/series/MbmP" },
  { title: "\u30b6\u30fb\u30ab\u30e1\u30e9\u30c6\u30b9\u30c8", value: "/series/pk3B" },
  { title: "\u30b6\u30fb\u30ca\u30f3\u30d1\u30b9\u30da\u30b7\u30e3\u30eb", value: "/series/A9Dn" },
  { title: "\u30b6\u30fb\u30de\u30b8\u30c3\u30af\u30df\u30e9\u30fc", value: "/series/wkBB" },
  { title: "\u30b7\u30fc\u30b9\u30eb\u30fc\u30e9\u30d6", value: "/series/NPAN" },
  { title: "\u30b7\u30e7\u30fc\u30c8\u30b9\u30c8\u30fc\u30ea\u30fc", value: "/series/Ak2m" },
  { title: "\u3057\u3087\u3046\u592a\u304f\u3093\u306eH\u306a\u30a4\u30bf\u30ba\u30e9", value: "/series/bee" },
  { title: "\u3057\u308d\u3046\u3068\u95a2\u897f\u5186\u5149\uff08\u4e2d\u7530\u6c0f\uff09", value: "/series/RXAD" },
  { title: "\u30b7\u30ed\u30a6\u30c8\u89b3\u5bdf \u30e2\u30cb\u30bf\u30ea\u30f3\u30b0", value: "/series/39BD" },
  { title: "\u30b7\u30ed\u30a6\u30c8\u5a18\u30ca\u30f3\u30d1\u72e9\u308a\uff01\uff01", value: "/series/7G6V" },
  { title: "\u3058\u3093\u304b\u304f\u305d\u3046\u3055\u6d17\u8133\u50ac\u7720", value: "/series/54b7" },
  { title: "\u30b9\u30fc\u30d1\u30fc\u30d2\u30ed\u30a4\u30f3\u30c9\u30df\u30cd\u30fc\u30b7\u30e7\u30f3\u5730\u7344", value: "/series/7EM" },
  { title: "\u30b9\u30da\u30f3\u30b9\u4e73\u817a\u958b\u767a\u30af\u30ea\u30cb\u30c3\u30af", value: "/series/AzZ0" },
  { title: "\u30bb\u30c3\u30af\u30b9\u3059\u308b\u306a\u3089\u65ad\u7136\u3001\u5730\u65b9\u306e\u4eba\u59bb\uff01", value: "/series/gz9q" },
  { title: "\u30bb\u30ec\u30d6DX", value: "/series/4d0J" },
  { title: "\u30bb\u30ec\u30d6\u30d6\u30ed\u30f3\u30c9", value: "/series/bze" },
  { title: "\u30c0\u30fc\u30c4\u30ca\u30f3\u30d1inTokyo", value: "/series/WZ27" },
  { title: "\u30bf\u30aa\u30eb\u4e00\u679a \u7537\u6e6f\u5165\u3063\u3066\u307f\u307e\u305b\u3093\u304b\uff1f", value: "/series/dgy8" },
  { title: "\u305f\u3073\u3058", value: "/series/ZN36" },
  { title: "\u3060\u308c\u3068\u3067\u3082\u5b9a\u984d\u633f\u308c\u653e\u984c\uff01", value: "/series/w8X2" },
  { title: "\u30c1\u30e3\u30ec\u30f3\u30b8\uff01\u30bf\u30a4\u30de\u30fc\u96fb\u30de", value: "/series/ZK38" },
  { title: "\u30c9\u30ad\u30e5\u30e1\u30f3TV\u00d7PRESTIGE PREMIUM \u5bb6\u307e\u3067\u9001\u3063\u3066\u30a4\u30a4\u3067\u3059\u304b\uff1f", value: "/series/WyE8" },
  { title: "\u30c8\u30b3\u30c0\u30b1", value: "/series/qrD" },
  { title: "\u3069\u3053\u307e\u3067\u30e4\u30ec\u308b\uff01\uff1f", value: "/series/Ww7p" },
  { title: "\u30c9\u30b9\u30b1\u30d9\u7fa9\u7236\u306e\u5ac1\u3044\u3062\u308a", value: "/series/0eV0" },
  { title: "\u30c9\u30ea\u30fc\u30e0\u30a6\u30fc\u30de\u30f3", value: "/series/Nwz3" },
  { title: "\u30c9\u30ea\u30fc\u30e0\u30b7\u30e3\u30ef\u30fc", value: "/series/39D" },
  { title: "\u306a\u307e\u306a\u304b\u3060\u3057", value: "/series/45a" },
  { title: "\u306a\u307e\u30cf\u30e1T\u2606kTok", value: "/series/GKAQ" },
  { title: "\u30ca\u30f3\u30d1\u9023\u308c\u8fbc\u307fSEX\u96a0\u3057\u64ae\u308a\u30fb\u305d\u306e\u307e\u307e\u52dd\u624b\u306bAV\u767a\u58f2\u3002", value: "/series/4dWG" },
  { title: "\u30ca\u30f3\u30d1\u5e2b\u306e\u9023\u308c\u8fbc\u307f\u90e8\u5c4b\u76d7\u64ae", value: "/series/d9Yg" },
  { title: "\u30ca\u30f3\u30d1TV\u00d7PRESTIGE PREMIUM", value: "/series/6Qe7" },
  { title: "\u30ca\u30f3\u30d1\u30b3", value: "/series/ArpO" },
  { title: "\u30ca\u30f3\u30d1\u3055\u308c\u305f\u30a8\u30c3\u30c1\u306a\u7d20\u4eba\u5973\u6027\u305f\u3061", value: "/series/9qZ6" },
  { title: "\u30cb\u30f3\u30b2\u30f3\u89b3\u5bdf", value: "/series/qM5P" },
  { title: "\u30cd\u30c8\u30e9\u30ec\u30fc\u30bc", value: "/series/9D3g" },
  { title: "\u30ce\u30fc\u30ab\u30c3\u30c8\u30bb\u30ec\u30af\u30b7\u30e7\u30f3", value: "/series/awxp" },
  { title: "\u30cf\u30fc\u30ec\u30e0\u5b50\u4f5c\u308a", value: "/series/bK0v" },
  { title: "\u30cf\u30a4\u30d1\u30fc\u30c7\u30b8\u30bf\u30eb\u30e2\u30b6\u30a4\u30af", value: "/series/rmRA" },
  { title: "\u30cf\u30a4\u30d1\u30fc\u30d9\u30b9\u30c8", value: "/series/32g0" },
  { title: "\u3071\u3044\u3071\u3044\u30ba\u30ea\u5b50\u3002", value: "/series/D6O3" },
  { title: "\u30d1\u30b3\u64ae\u308a", value: "/series/Vg3A" },
  { title: "\u306f\u3058\u3081\u3066\u306e\u5927\u30fb\u75d9\u30fb\u6523\u30b9\u30da\u30b7\u30e3\u30eb", value: "/series/nKV4" },
  { title: "\u306f\u3058\u3081\u3066\u306e\u30ca\u30de\u4e2d\u51fa\u3057\uff08\u672c\u4e2d\uff09", value: "/series/qdnr" },
  { title: "\u306f\u3060\u304b\u306e\u5965\u69d8", value: "/series/XWpM" },
  { title: "\u306f\u3060\u304b\u306e\u5bb6\u653f\u5a66", value: "/series/vDPO" },
  { title: "\u30cf\u30c3\u30af\u30c4\u7f8e\u5c11\u5973Revolution", value: "/series/Zvq" },
  { title: "\u30cf\u30f3\u30bf\u30fc\u30d6\u30e9\u30c3\u30af", value: "/series/5bb8" },
  { title: "\u3072\u3068\u308a\u5973\u5b50\u65c5\u30ca\u30f3\u30d1", value: "/series/XVz1" },
  { title: "\u30d6\u30fc\u30c4\u306e\u7f8e\u9b54\u5973\u3068\u30ca\u30de\u4ea4\u5c3e", value: "/series/WAG7" },
  { title: "\u30d5\u30a7\u5730\u4e0b2\u968e", value: "/series/eOnM" },
  { title: "\u30d7\u30ec\u30df\u30a2\u30e0\u2606\u30bb\u30ec\u30af\u30c8", value: "/series/Mn51" },
  { title: "\u30d8\u30f3\u30ea\u30fc\u585a\u672c", value: "/series/Yae" },
  { title: "\u30de\u30b8\u8edf\u6d3e\u3001\u521d\u64ae\u3002", value: "/series/wkan" },
  { title: "\u30de\u30b8\u30c3\u30af\u30df\u30e9\u30fc\u4fbf", value: "/series/AgO" },
  { title: "\u30de\u30b8\u30c3\u30af\u30df\u30e9\u30fc\u53f7\u64ae\u3063\u3066\u51fa\u3057\uff01", value: "/series/dVKv" },
  { title: "\u30de\u30b8\u30c3\u30af\u30df\u30e9\u30fc\u53f7\u30cf\u30fc\u30c9\u30dc\u30a4\u30eb\u30c9", value: "/series/evaN" },
  { title: "\u30de\u30b8\u30c3\u30af\u30df\u30e9\u30fc\u306e\u5411\u3053\u3046\u306b\u306f\u25cb\u25cb", value: "/series/MqBX" },
  { title: "\u30de\u30c3\u30b5\u30fc\u30b8\u4e2d\u51fa\u3057SEX", value: "/series/54DB" },
  { title: "\u30de\u30cb\u30a2\u5036\u697d\u90e8\u8cac\u4efb\u76e3\u4fee", value: "/series/bRmP" },
  { title: "\u30de\u30cb\u30a2\u5036\u697d\u90e8\u30d7\u30ec\u30df\u30a2\u30e0", value: "/series/1REw" },
  { title: "\u30de\u30de\u53cb\u55b0\u3044", value: "/series/8wW3" },
  { title: "\u30de\u30de\u30b7\u30e7\u30bf\u5b9f\u8a71", value: "/series/4V6b" },
  { title: "\u30de\u30de\u306e\u30ea\u30a2\u30eb\u6027\u6559\u80b2", value: "/series/1Bb4" },
  { title: "\u30de\u30eb\u79d8\u96a0\u3057\u64ae\u308a\u6620\u50cf\u6d41\u51fa\uff01\uff01", value: "/series/QW49" },
  { title: "\u30de\u30eb\u30c1\u306e\u5973", value: "/series/pYDB" },
  { title: "\u307e\u308b\u3063\u3068\uff01", value: "/series/vDnz" },
  { title: "\u307e\u308b\u307e\u308b\uff01", value: "/series/P2A9" },
  { title: "\u307f\u308b\u30b9\u30dd\uff01", value: "/series/der8" },
  { title: "\u30e1\u30fc\u30eb\u5373\u30cf\u30e1\u4fbf", value: "/series/YMJp" },
  { title: "\u30e1\u30f3\u30ba\u30a8\u30b9\u30c6\u76d7\u64ae", value: "/series/rvdZ" },
  { title: "\u30e4\u30ea\u30b5\u30fc\u5973\u5b50", value: "/series/0wOa" },
  { title: "\u30e9\u30b0\u30b8\u30e5TV", value: "/series/YrB8" },
  { title: "\u30e9\u30b0\u30b8\u30e5TV\u00d7PRESTIGE", value: "/series/D2GJ" },
  { title: "\u30e9\u30d6\u30db\u30c9\u30ad\u30e5\u30e1\u30f3\u30bf\u30ea\u30fc\u4f11\u61a92\u6642\u9593", value: "/series/94Yq" },
  { title: "\u30ea\u30a2\u30eb\u30ac\u30c1\u8edf\u6d3e", value: "/series/p5nq" },
  { title: "\u30ea\u30a2\u30eb\u30e2\u4e8c\u30bf\u30ea\u30f3\u30b0\u5b9f\u9a13", value: "/series/7akd" },
  { title: "\u30eb\u30fc\u30ca\u65ec\u9999\u820e", value: "/series/DWDa" },
  { title: "\u30eb\u30d3\u30fc\u5e74\u9451", value: "/series/1k4" },
  { title: "\u30ec\u30c3\u30c9\u7a81\u6483\u968a \u5897\u520a\u53f7", value: "/series/2GeZ" },
  { title: "\u30ec\u30c3\u30c9\u7a81\u6483\u968a\u30b7\u30ea\u30fc\u30ba", value: "/series/ayr4" },
  { title: "\u30ec\u30f3\u30bf\u30eb\u5f7c\u5973", value: "/series/R2RR" },
  { title: "\u30ec\u30f3\u30bf\u30eb\u5f7c\u5973\u3002\u00d7PRESTIGE PREMIUM", value: "/series/WyAe" },
  { title: "\u30ec\u30f3\u30bf\u30eb\u719f\u5973\u306e\u304a\u4ed5\u4e8b", value: "/series/yd2d" },
  { title: "\u30ed\u30b9\u3067\u30ca\u30f3\u30d1\u3057\u305f\u25cb\u25cb\u3092\u52dd\u624b\u306bAV\u30c7\u30d3\u30e5\u30fc", value: "/series/7q9V" },
  { title: "\u30ed\u30ea\u5c02\u79d1", value: "/series/eK1" },
  { title: "\u308f\u304b\u3057\u30e9\u30dc", value: "/series/P8rr" },
  { title: "\u308f\u308c\u3081\u3061\u3083\u3093", value: "/series/aW7W" },
];

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
      ],
      value: "published",
    },
    { name: "page", title: "\u4f5c\u54c1\u9875\u7801", type: "page" },
  ];
}

WidgetMetadata = {
  id: "forward.javdb",
  title: "JavDB",
  version: "2.2.1",
  requiredVersion: "0.0.1",
  description: "获取 JavDB 影片列表、演员/系列/标签/片商",
  author: "老头",
  site: "https://github.com/InchStudio/ForwardWidgets",
  detailCacheDuration: 3600,
  globalParams: [
    {
      name: "baseUrl",
      title: "\u7ad9\u70b9\u5730\u5740",
      type: "input",
      value: "https://javdb.com",
    },
    {
      name: "locale",
      title: "\u8bed\u8a00",
      type: "enumeration",
      enumOptions: [
        { title: "\u7b80\u4f53\u4e2d\u6587", value: "zh" },
        { title: "\u7e41\u4f53\u4e2d\u6587", value: "tw" },
        { title: "English", value: "en" },
      ],
      value: "zh",
    },
  ],
  modules: [
    {
      id: "latest",
      title: "\u6700\u65b0\u4e0a\u5e02",
      functionName: "loadLatest",
      cacheDuration: 1800,
      params: [{ name: "page", title: "\u9875\u7801", type: "page", value: "1" }],
    },
    {
      id: "rankings",
      title: "\u6392\u884c\u699c",
      functionName: "loadRankings",
      cacheDuration: 3600,
      params: [
        {
          name: "period",
          title: "\u5468\u671f",
          type: "enumeration",
          enumOptions: [
            { title: "\u65e5\u699c", value: "daily" },
            { title: "\u5468\u699c", value: "weekly" },
            { title: "\u6708\u699c", value: "monthly" },
          ],
          value: "daily",
        },
        { name: "page", title: "\u9875\u7801", type: "page", value: "1" },
      ],
    },
    {
      id: "movies",
      title: "\u5f71\u7247\u5206\u7c7b",
      functionName: "loadMovies",
      cacheDuration: 1800,
      params: [
        {
          name: "path",
          title: "\u5206\u7c7b",
          type: "enumeration",
          enumOptions: [
            { title: "\u6709\u7801", value: "/censored" },
            { title: "\u65e0\u7801", value: "/uncensored" },
          ],
          value: "/censored",
        },
        { name: "page", title: "\u9875\u7801", type: "page", value: "1" },
      ],
    },
    {
      id: "actors",
      title: "\u6f14\u5458",
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
      title: "\u7cfb\u5217",
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
      title: "\u6807\u7b7e",
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
      title: "\u7247\u5546",
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
    title: "\u756a\u53f7\u641c\u7d22",
    functionName: "searchJavdb",
    params: [
      { name: "keyword", title: "\u756a\u53f7/\u5173\u952e\u8bcd", type: "input", value: "" },
      { name: "page", title: "\u9875\u7801", type: "page", value: "1" },
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

function isDetailSearchJump(params) {
  return !!resolveDetailJumpKeyword(params);
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
  var items = enrichMovieItems(parseListItems(html, params), params);
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

// DMM 系列白名单——只有这些前缀才拼 DMM 封面 URL（对齐 MissAV.js）
var DMM_DIRECT_PREFIXES = {
  SNIS: 1, SNOS: 1, SONE: 1, SSIS: 1, SSNI: 1, STARS: 1, START: 1, SODS: 1,
  FSDSS: 1, FCDSS: 1, FNS: 1, FTHTD: 1, FSNF: 1, FLAV: 1, NHDTC: 1, KUSE: 1,
  MOGI: 1, FTAV: 1, WSA: 1, MIDV: 1, MIDA: 1, MIDE: 1, MIDD: 1, DASS: 1, HIKA: 1,
  MKMP: 1, MADM: 1, IPZZ: 1, IPZ: 1, IPX: 1, NGOD: 1, SDNM: 1, AVSA: 1, MNGS: 1,
  WAAA: 1, OFES: 1, OFJE: 1, OAE: 1, SIVR: 1, HSODA: 1, JUFE: 1, MUKA: 1, MIMK: 1,
  HMN: 1, ROYD: 1, SDHS: 1, JUR: 1, CAWD: 1, REBD: 1, ADN: 1, ATID: 1, JUL: 1, JUMS: 1,
  JUQ: 1, LULU: 1, MEYD: 1, MIAA: 1, MIAB: 1, MIRD: 1, PRED: 1, URE: 1, YUJ: 1,
  CJOD: 1, EBWH: 1, JYMA: 1, MDHR: 1, DVAJ: 1, ACHJ: 1,
};

var DMM_DIRECT_BLOCKED_CODES = {
  "START-227": 1, "IPZZ-899": 1, "START-334": 1, "START-302": 1, "START-349": 1,
  "START-339": 1, "START-310": 1, "START-314": 1, "START-287": 1, "START-273": 1,
  "START-266": 1, "START-304": 1, "START-285": 1, "START-276": 1, "START-135": 1,
  "START-062": 1, "START-023": 1, "START-014": 1, "STARS-977": 1, "STARS-917": 1,
  "STARS-915": 1, "STARS-91501": 1, "SDNM-39101": 1,
};

var DMM_CONTENT_ID_OVERRIDES = {};

// DMM contentId 数字前缀映射（对齐 MissAV.js）
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
};

function normalizeDmmPrefix(prefix) {
  var p = String(prefix || "").toUpperCase();
  if (p === "REBDB") return "REBD";
  return p;
}

function isDirectDmmSeries(parts) {
  if (!parts) return false;
  if (DMM_DIRECT_BLOCKED_CODES[parts.prefix + "-" + parts.number]) return false;
  return !!DMM_DIRECT_PREFIXES[normalizeDmmPrefix(parts.prefix)];
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

function buildDmmCidContentIds(parts) {
  if (!parts || !isDirectDmmSeries(parts)) return [];
  var primaryId = buildDmmContentIdFromParts(parts);
  if (!primaryId) return [];
  var ordered = [primaryId];
  var prefix = normalizeDmmPrefix(parts.prefix);
  var numericPrefix = DMM_CONTENT_PREFIX_MAP[prefix] || "";
  if (numericPrefix && (numericPrefix.indexOf("h_") === 0 || DMM_MONO_PLAIN_PREFIXES[parts.prefix])) {
    ordered.push(numericPrefix + parts.prefixLower + parts.numberPlain);
  }
  return compactUniqueUrls(
    ordered.filter(function (item) {
      return !!item;
    })
  );
}

function buildDmmContentIdVariants(parts) {
  return buildDmmCidContentIds(parts);
}

function isDmmMonoContentId(contentId) {
  var id = String(contentId || "").toLowerCase();
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

function buildDmmCoverCandidatesFromParts(parts) {
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };
  var ids = buildDmmContentIdVariants(parts);
  var result = { posterCandidates: [], backdropCandidates: [] };
  for (var i = 0; i < ids.length; i++) {
    appendDmmCoverCandidates(result, ids[i]);
  }
  return {
    posterCandidates: compactUniqueUrls(result.posterCandidates),
    backdropCandidates: compactUniqueUrls(result.backdropCandidates),
  };
}

function buildCoverCandidatesFromVideoId(videoIdOrTitle) {
  var parts = parseJavCodeParts(videoIdOrTitle);
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };

  if (isDirectDmmSeries(parts)) {
    return buildDmmCoverCandidatesFromParts(parts);
  }

  var rule = MGSTAGE_COVER_RULES[parts.prefix];
  if (rule) return buildMgstageCoverCandidatesFromParts(parts, rule);

  return { posterCandidates: [], backdropCandidates: [] };
}

function buildCoverUrlsFromVideoId(videoIdOrTitle) {
  var candidates = buildCoverCandidatesFromVideoId(videoIdOrTitle);
  return {
    posterUrl: candidates.posterCandidates[0] || "",
    backdropUrl: candidates.backdropCandidates[0] || "",
    posterCandidates: candidates.posterCandidates || [],
    backdropCandidates: candidates.backdropCandidates || [],
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
  var parts = parseJavCodeParts(cleanDvdId(dvdId));
  if (parts && isDirectDmmSeries(parts)) {
    var contentId = buildDmmContentIdFromParts(parts);
    if (contentId) return contentId;
  }
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

function fetchJavTrailersMeta(dvdId) {
  var empty = { backdropPath: "", backdropPaths: [] };
  if (!dvdId) return empty;
  var parts = parseJavCodeParts(dvdId);
  var backdropPath = "";
  var backdropPaths = [];
  if (parts && isDirectDmmSeries(parts)) {
    var dmm = buildDmmCoverCandidatesFromParts(parts);
    backdropPath = dmm.backdropCandidates[0] || "";
    var galleryIds = buildDmmContentIdVariants(parts);
    backdropPaths = buildDmmGallery(galleryIds[0] || parts.code || "", 10);
  } else if (parts && MGSTAGE_COVER_RULES[parts.prefix]) {
    var mg = buildMgstageCoverCandidatesFromParts(parts, MGSTAGE_COVER_RULES[parts.prefix]);
    backdropPath = mg.backdropCandidates[0] || "";
    backdropPaths = buildMgstageGalleryFromDvdId(dvdId, 10);
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
    return resolveCatembySmallCoverUrl(videoId) || poster;
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

var DMM_LIST_UNRELIABLE_PREFIXES = {
  MXGS: 1,
  DLDSS: 1,
  SDNT: 1,
  SABA: 1,
  DTT: 1,
};

function isDmmListCoverUnreliable(code) {
  var parts = parseJavCodeParts(code);
  return !!(parts && DMM_LIST_UNRELIABLE_PREFIXES[parts.prefix]);
}

function filterTrustedCdnUrls(urls) {
  return (urls || []).filter(function (url) {
    var value = String(url || "");
    if (/image\.mgstage\.com/i.test(value)) return true;
    if (/awsimgsrc\.dmm\.co\.jp/i.test(value)) return true;
    return false;
  });
}

function buildListCoverBundle(code, videoId) {
  var catembyCover = resolveCatembyStyleCoverUrl(videoId);
  if (!code) {
    return buildCoverBundleFromUrls(catembyCover, catembyCover);
  }
  if (isDmmListCoverUnreliable(code)) {
    return buildCoverBundleFromUrls(catembyCover, catembyCover);
  }
  var candidates = buildCoverCandidatesFromVideoId(code);
  var hdBackdrop = pickFirstUsableCoverUrl(filterTrustedCdnUrls(candidates.backdropCandidates)) || catembyCover || "";
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

function parseTrailersFromHtml($, base, displayCode, coverUrl) {
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

  if (displayCode) {
    var previewParts = parseJavCodeParts(displayCode);
    if (previewParts && isDirectDmmSeries(previewParts)) {
      var fallback = buildDmmPreviewUrl(buildDmmContentIdFromParts(previewParts));
      if (fallback) {
        return [{ coverUrl: coverUrl || "", url: fallback }];
      }
    }
  }

  return [];
}


function isPortraitListCoverUrl(url) {
  var u = String(url || "").toLowerCase();
  if (!u) return false;
  if (u.indexOf("@") >= 0) return false;
  if (/\/covers\//i.test(u)) return true;
  if (/\/cover-t[\.\?]/i.test(u)) return true;
  if (/\/thumbs\//i.test(u)) return true;
  if (/_s\.(jpe?g|webp|png)(\?|$)/i.test(u)) return true;
  if (/ps\.jpe?g(\?|$)/i.test(u)) return true;
  if (/pf_e_/.test(u) || /pf_o1_/.test(u)) return true;
  return false;
}

function isLandscapeListCoverUrl(url) {
  var u = String(url || "").trim();
  if (!u || isPortraitListCoverUrl(u)) return false;
  if (/\/samples\//i.test(u) && /_b\.(jpe?g|webp|png)(\?|$)/i.test(u)) return true;
  if (/pl\.jpe?g(\?|$)/i.test(u)) return true;
  if (/pb_e_/.test(u)) return true;
  return !isPortraitListCoverUrl(u);
}

function extractBackgroundImageUrl(style) {
  var match = String(style || "").match(/url\(['"]?([^'")]+)/i);
  return match ? match[1] : "";
}

function isUselessListCoverUrl(url) {
  var u = String(url || "").trim().toLowerCase();
  if (!u || u.indexOf("data:") === 0) return true;
  if (/placeholder|default_cover|loading|blank|spacer|1x1/.test(u)) return true;
  return false;
}

function extractListCardCover($, box, base) {
  var candidates = [];
  var scopes = [box];
  var item = box.closest(".item");
  if (item.length) scopes.push(item.first());

  function collect(raw) {
    var url = upgradeJavdbImageUrl(absUrl(String(raw || "").trim(), base));
    if (!url || isUselessListCoverUrl(url)) return;
    for (var i = 0; i < candidates.length; i++) {
      if (candidates[i] === url) return;
    }
    candidates.push(url);
  }

  for (var si = 0; si < scopes.length; si++) {
    var scope = scopes[si];
    collect(attrOf($, scope, "data-preview"));
    collect(attrOf($, scope, "data-src"));
    collect(extractBackgroundImageUrl(attrOf($, scope, "style")));
    collect(extractBackgroundImageUrl(attrOf($, scope.find(".item-image, .video-cover, .cover").first(), "style")));
    scope.find(".item-image img, .video-cover img, img").each(function () {
      var img = $(this);
      collect(attrOf($, img, "data-src"));
      collect(attrOf($, img, "data-original"));
      collect(attrOf($, img, "src"));
      var srcset = attrOf($, img, "srcset");
      if (srcset) {
        var parts = srcset.split(",");
        for (var s = parts.length - 1; s >= 0; s--) {
          collect(String(parts[s] || "").trim().split(/\s+/)[0]);
        }
      }
    });
  }

  for (var i = 0; i < candidates.length; i++) {
    if (isLandscapeListCoverUrl(candidates[i])) return candidates[i];
  }
  return candidates[0] || "";
}

var CATEMBY_CDN_BASE = "https://tp.spfcas.com/rhe951l4q";

function buildCatembySiteCoverUrl(videoId) {
  var id = String(videoId || "").trim();
  if (!id || id.length < 2) return "";
  return CATEMBY_CDN_BASE + "/covers/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function buildCatembySiteThumbUrl(videoId) {
  var id = String(videoId || "").trim();
  if (!id || id.length < 2) return "";
  return CATEMBY_CDN_BASE + "/small_covers/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function resolveCatembySmallCoverUrl(videoId) {
  var id = String(videoId || "").trim();
  if (!id) return "";
  var siteThumb = buildCatembySiteThumbUrl(id);
  if (siteThumb) return siteThumb;
  return normalizeJavdbCoverUrl(buildJdbstaticThumbUrl(id)) || "";
}

function resolveCatembyListCoverUrl(videoId) {
  var siteCover = buildCatembySiteCoverUrl(videoId);
  if (siteCover) return siteCover;
  return buildCatembySiteThumbUrl(videoId) || "";
}

function isJdbstaticImageUrl(url) {
  return /jdbstatic\.com/i.test(String(url || ""));
}

function buildJavdbCoverFromVideoId(videoId) {
  var id = String(videoId || "").trim();
  if (!id || id.length < 2) return "";
  var prefix = id.slice(0, 2).toLowerCase();
  return "https://c0.jdbstatic.com/covers/" + prefix + "/" + id + ".jpg";
}

function buildJdbstaticThumbUrl(videoId) {
  var id = String(videoId || "").trim();
  if (!id || id.length < 2) return "";
  return "https://c0.jdbstatic.com/thumbs/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function resolveCatembyStyleCoverUrl(videoId) {
  var id = String(videoId || "").trim();
  if (!id) return "";
  var jdbCover = normalizeJavdbCoverUrl(buildJavdbCoverFromVideoId(id));
  if (jdbCover) return jdbCover;
  var jdbThumb = normalizeJavdbCoverUrl(buildJdbstaticThumbUrl(id));
  if (jdbThumb) return jdbThumb;
  return resolveCatembyListCoverUrl(id) || "";
}

function resolveJavdbCoverUrl(fallbackCover, videoId) {
  var fromId = normalizeJavdbCoverUrl(buildJavdbCoverFromVideoId(videoId));
  var upgraded = normalizeJavdbCoverUrl(upgradeJavdbImageUrl(fallbackCover));
  if (fromId) return fromId;
  return upgraded || normalizeJavdbCoverUrl(fallbackCover) || "";
}

function resolvePageCover(fallbackCover, videoId) {
  return resolveJavdbCoverUrl(fallbackCover, videoId) || normalizeJavdbCoverUrl(upgradeJavdbImageUrl(fallbackCover)) || "";
}

function buildCoverBundleFromUrls(hdPoster, hdBackdrop) {
  return {
    listBackdrop: hdBackdrop,
    backdropPath: hdBackdrop,
    posterPath: hdPoster,
    detailPoster: hdPoster,
    coverUrl: hdBackdrop,
    image: hdBackdrop,
  };
}

function buildDetailCoverBundle(code, videoId) {
  var hdCovers = buildCoverUrlsFromVideoId(code);
  var catembyCover = videoId ? resolveCatembyStyleCoverUrl(videoId) : "";
  var hdPoster =
    resolvePosterUrlWithCatembyFallback(hdCovers.posterUrl || "", videoId) || catembyCover || "";
  var hdBackdrop = hdCovers.backdropUrl || hdPoster || "";
  return buildCoverBundleFromUrls(hdPoster, hdBackdrop);
}

function buildDetailBackdropPaths(displayCode) {
  var jtMeta = fetchJavTrailersMeta(displayCode);
  return compactUniqueUrls([jtMeta.backdropPath].concat(jtMeta.backdropPaths || [])).filter(Boolean);
}

function enrichDetailLinks(item, pageUrl, displayCode, cover, currentPath, params) {
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
  var tables = [JAVDB_TAG_OPTIONS, JAVDB_MAKER_OPTIONS, JAVDB_SERIES_OPTIONS, JAVDB_ACTOR_OPTIONS];
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
  if (path.indexOf("/tags/") === 0 && path.indexOf("?") >= 0) {
    add(path.split("?")[0]);
  } else if (path.indexOf("/tags/") === 0) {
    add(path + "?c10=1");
  }
  return candidates;
}

function isBrowseMovieListPath(path) {
  var clean = String(path || "").split("?")[0];
  if (clean === "/" || clean === "/censored" || clean === "/uncensored") return true;
  return clean.indexOf("/rankings/") === 0;
}

function isCategoryErrorHtml(html) {
  var text = String(html || "");
  if (!text) return true;
  if (/Cloudflare|Attention Required|Sorry, you have been blocked/i.test(text)) return true;
  if (/此內容需要登入|需要登录|需要登入才能查看/i.test(text)) return true;
  if (/404|Not Found|页面不存在|Page Not Found/i.test(text) && text.indexOf("movie-list") < 0 && text.indexOf('class="item"') < 0 && text.indexOf('href="/v/') < 0) {
    return true;
  }
  return false;
}

async function fetchHtml(url, params) {
  var res = await Widget.http.get(url, {
    headers: javdbHeaders(params),
    allow_redirects: true,
  });
  if (!res || !res.data) throw new Error("空响应: " + url);
  if (res.status && Number(res.status) >= 400) {
    throw new Error("HTTP " + res.status + " " + url);
  }
  return res.data;
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

function enrichMovieItems(rawItems, params) {
  params = params || {};
  var items = [];
  for (var i = 0; i < rawItems.length; i++) {
    var raw = rawItems[i];
    var covers = buildListCoverBundle(raw.code, raw.videoId);
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

function hasJumpFilter(params) {
  params = params || {};
  if (String(params.peopleId || "").trim()) return true;
  if (String(params.genreId || "").trim()) return true;
  if (String(params.item || "").trim()) return true;
  if (String(params.seriesId || "").trim()) return true;
  if (String(params.makerId || "").trim()) return true;
  return false;
}

function buildPeopleBrowseItem(id, title, avatar, path) {
  return {
    id: String(id),
    type: "url",
    title: title,
    posterPath: avatar || "",
    description: "点击查看作品",
  };
}

function buildGenreBrowseItem(genreId, title, poster, path) {
  var displayTitle = javdbTranslateLabelByPath(title, path || genreId);
  return {
    id: String(genreId),
    type: "url",
    title: displayTitle,
    posterPath: poster || "",
    description: "点击查看作品",
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

function getBrowseParser(path) {
  var clean = String(path || "").split("?")[0];
  if (/^\/actors\/(censored|uncensored|western)$/.test(clean)) return parseActorBrowseItems;
  if (clean === "/series" || clean === "/series/uncensored") return parseSeriesBrowseItems;
  if (clean === "/makers" || clean === "/makers/uncensored") return parseMakerBrowseItems;
  if (clean === "/tags") return parseTagBrowseItems;
  return null;
}

function resolveCategoryPath(params) {
  return resolveCategoryListPath(params);
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
    params = syncCategoryParams(params);
    var jumpKeyword = resolveDetailJumpKeyword(params);
    if (jumpKeyword) {
      return fetchSearchMovieList(params, jumpKeyword);
    }
    var sortBy = String(params.sort_by || "published");
    var path = applyCategorySort(resolveCategoryListPath(params), sortBy);
    if (!path) {
      throw new Error("请先在参数中选择分类项（演员/系列/标签/片商）");
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


async function parseCategoryDetailPage(html, path, params) {
  var base = javdbBase(params);
  var $ = Widget.html.load(html);
  var title = textOf($, $("h2.title strong").first()) || textOf($, $("h2 strong").first()) || path.split("/").pop();
  title = javdbTranslateLabelByPath(stripCountSuffix(title), path);
  var avatar = absUrl(attrOf($, $("img.avatar").first(), "src"), base);
  var movies = await fetchMovieList(path, params);
  return sanitizeDetailOutput({
    id: path.split("/").pop() || encodeLink(path),
    type: "url",
    title: title,
    posterPath: avatar || "",
    detailPoster: avatar || "",
    description: "共收录 " + movies.length + " 部影片（当前页）",
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

  var coverBundle = buildDetailCoverBundle(displayCode, path.split("/").pop() || "");
  var allBackdropPaths = buildDetailBackdropPaths(displayCode);
  var trailers = parseTrailersFromHtml($, base, displayCode, coverBundle.backdropPath || coverBundle.posterPath);

  return enrichDetailLinks(
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
    pageUrl,
    displayCode,
    coverBundle.backdropPath,
    path,
    params
  );
}

async function fetchMovieList(path, params) {
  params = syncGlobalParams(params);
  var basePath = String(path || "");

  if (isBrowseMovieListPath(basePath)) {
    var browseUrl = buildPageUrl(javdbBase(params), basePath, params);
    var browseHtml = await fetchHtml(browseUrl, params);
    var browseItems = enrichMovieItems(parseListItems(browseHtml, params), params);
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
  for (var i = 0; i < candidates.length; i++) {
    try {
      var url = buildPageUrl(javdbBase(params), candidates[i], params);
      var html = await fetchHtml(url, params);
      var items = enrichMovieItems(parseListItems(html, params), params);
      if (items.length) return items;
      if (isCategoryErrorHtml(html)) {
        lastError = new Error("分类页面不可用: " + candidates[i]);
        continue;
      }
      lastError = new Error("分类页面无影片: " + candidates[i]);
    } catch (err) {
      lastError = err;
    }
  }
  var fallbackTitle = resolveCategorySearchFallback(params, basePath);
  if (fallbackTitle) {
    try {
      return await fetchSearchMovieList(params, fallbackTitle);
    } catch (searchErr) {
      console.error("[javdb] 分类搜索回退失败:", searchErr.message || searchErr);
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
  var period = String((params && params.period) || "daily");
  return loadBrowseList("/rankings/movies?period=" + encodeURIComponent(period), params || {});
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

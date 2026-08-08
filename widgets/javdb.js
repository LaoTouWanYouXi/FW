/**
 * JavDB ForwardWidget 模块 v4
 * 管道：CategoryPath → jdforrepam API（绕过 CF）→ VideoItem
 * 登录：POST /v1/sessions（账号密码 → JWT）
 * 列表：DMM 竖版海报（方格）；详情顶图复用列表缓存，不再探测
 * 详情：trailers 预告片模块（不进播放资源）
 */

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


/**
 * JavDB ForwardWidget v4 — API 数据源（绕过 CF HTML 验证）
 *
 * 管道：CategoryPath → jdforrepam API → VideoItem
 * 登录：POST /v1/sessions（账号密码 → JWT）
 */

/* ========================= Config ========================= */

var API_BASE = "https://jdforrepam.com/api";
var API_SITE = "https://javdb.com";
var JD_SIG_SALT = "lpw6vgqzsp";
var JD_SIG_KEY =
  "71cf27bb3c0bcdf207b64abecddc970098c7421ee7203b9cdae54478478a199e7d5a6e1a57691123c1a931c057842fb73ba3b3c83bcd69c17ccf174081e3d8aa";
var SEARCH_PREFIX = "search:";
var ID_TITLE_SEP = "~";
var CATEGORY_KIND_CODE = { actors: "a", makers: "m", series: "s", tags: "t", directors: "d" };
var MOVIE_TYPE_CODE = { all: "all", censored: "0", uncensored: "1", western: "2", fc2: "3" };
var LATEST_FILTER_ENUM = [
  { title: "全部", value: "all" },
  { title: "有码", value: "censored" },
  { title: "无码", value: "uncensored" },
  { title: "欧美", value: "western" },
  { title: "FC2", value: "fc2" },
];
var TOP250_TYPE_ENUM = [
  { title: "全部", value: "all" },
  { title: "有码", value: "0" },
  { title: "无码", value: "1" },
  { title: "欧美", value: "2" },
  { title: "FC2", value: "3" },
];
var SORT_API_MAP = {
  published: { sort_by: "release", order_by: "desc" },
  score: { sort_by: "score", order_by: "desc" },
  fav: { sort_by: "fav", order_by: "desc" },
};
var SEARCH_SORT_MAP = { published: "release", score: "score", fav: "fav" };
var GLOBAL_KEYS = ["locale", "email", "password", "apiToken", "dmmProbeWorker", "dmmProbeApiKey"];
var DEVICE_DEFAULTS = {
  device_name: "iPhone",
  device_model: "iPhone15,2",
  platform: "ios",
  system_version: "17.0",
  app_version: "1.9.8",
  app_version_number: "198",
  app_channel: "AppStore",
};

/* DMM 高清封面（对齐 dmm-cover.js） */
var DMM_PROBE_WORKER_BASE = "https://dmm.laotou.ccwu.cc";
var DMM_PROBE_WORKER_CACHE = {};
var DMM_PROBE_WORKER_TIMEOUT_MS = 8000;
var DMM_PROBE_STORAGE_PREFIX = "javdb.dmmProbe.v2.";
var DMM_PROBE_STORAGE_TTL_OK_MS = 60 * 24 * 3600 * 1000;
var DMM_PROBE_STORAGE_TTL_FAIL_MS = 14 * 24 * 3600 * 1000;
var DMM_PROBE_BATCH_TIMEOUT_MS = 20000;
var DMM_PROBE_BATCH_SIZE = 20;
var DMM_CONTENT_ID_OVERRIDES = {};
var MGSTAGE_COVER_RULES = {
  ABF: { maker: "prestige" },
  ABW: { maker: "prestige" },
  ABP: { maker: "prestige" },
  CHN: { maker: "prestige" },
  MAAN: { maker: "prestige" },
  PPT: { maker: "prestige" },
  "390JAC": { maker: "jackson" },
};
var DMM_CONTENT_PREFIX_MAP = {
  WSA: "2",
  FSDSS: "1",
  FCDSS: "1",
  FNS: "1",
  FTHTD: "1",
  FALENO: "1",
  FGAN: "1",
  FSNF: "1",
  FLAV: "1",
  NAAC: "h_706",
  NHDTC: "1",
  KUSE: "1",
  MBDD: "301",
  SDNM: "1",
  STARS: "1",
  STAR: "1",
  START: "1",
  SODS: "1",
  REBD: "h_346",
  REBDB: "h_346",
  GSHRB: "h_346",
  MOGI: "1",
  FTAV: "1",
  ABP: "118",
  CHN: "118",
  IESP: "1",
  DLDSS: "1",
};

/* ========================= WidgetMetadata ========================= */

function firstEnumValue(options) {
  if (!options || !options.length) return "";
  for (var i = 0; i < options.length; i++) {
    if (options[i] && options[i].value) return options[i].value;
  }
  return "";
}

function categoryParams(paramName, itemTitle, enumOptions) {
  return [
    {
      name: paramName,
      title: itemTitle,
      type: "enumeration",
      enumOptions: enumOptions,
      value: firstEnumValue(enumOptions),
    },
    {
      name: "sort_by",
      title: "作品排序",
      type: "enumeration",
      enumOptions: [
        { title: "最近上架", value: "published" },
        { title: "最高评分", value: "score" },
        { title: "最多收藏", value: "fav" },
        { title: "最近上架(有磁力)", value: "published_download" },
        { title: "最高评分(有磁力)", value: "score_download" },
        { title: "最多收藏(有磁力)", value: "fav_download" },
      ],
      value: "published",
    },
    { name: "page", title: "作品页码", type: "page" },
  ];
}

WidgetMetadata = {
  id: "forward.javdb",
  title: "JavDB",
  version: "4.3.1",
  requiredVersion: "0.0.1",
  description: "JavDB API：最近更新 / TOP250 / 分类；列表仅用验证过的 DMM 竖版，否则站点封面；详情复用 + 预告片",
  author: "老头",
  site: API_SITE,
  detailCacheDuration: 3600,
  globalParams: [
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
      title: "账号（邮箱）",
      type: "input",
      description: "JavDB App 账号；TOP250 需登录。浏览最近更新/分类可不登录",
      value: "",
    },
    {
      name: "password",
      title: "密码",
      type: "input",
      description: "与账号一并填写后自动登录；Token 会缓存到本地",
      value: "",
    },
    {
      name: "apiToken",
      title: "API Token（可选）",
      type: "input",
      description: "已有 JWT 可直接粘贴；留空则用账号密码登录",
      value: "",
    },
    {
      name: "dmmProbeWorker",
      title: "DMM Probe Worker（可选）",
      type: "input",
      description: "默认 https://dmm.laotou.ccwu.cc；列表页竖版海报探测",
      value: "",
    },
    {
      name: "dmmProbeApiKey",
      title: "DMM Probe Key（可选）",
      type: "input",
      description: "Worker 开启鉴权时填写 X-Probe-Key",
      value: "",
    },
  ],
  modules: [
    {
      id: "latest",
      title: "最近更新",
      description: "最新上架影片",
      functionName: "loadLatest",
      cacheDuration: 1800,
      params: [
        {
          name: "filter_by",
          title: "分类",
          type: "enumeration",
          enumOptions: LATEST_FILTER_ENUM,
          value: "all",
        },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      id: "top250",
      title: "TOP250",
      description: "JavDB TOP250（需登录）",
      functionName: "loadTop250",
      cacheDuration: 3600,
      params: [
        {
          name: "type",
          title: "分类",
          type: "enumeration",
          enumOptions: TOP250_TYPE_ENUM,
          value: "all",
        },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
    {
      id: "actors",
      title: "演员",
      description: "按演员分类浏览影片",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryParams("peopleId", "选择演员", JAVDB_ACTOR_OPTIONS),
    },
    {
      id: "series",
      title: "系列",
      description: "按系列分类浏览影片",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryParams("genreId", "选择系列", JAVDB_SERIES_OPTIONS),
    },
    {
      id: "tags",
      title: "标签",
      description: "按标签浏览影片",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryParams("genreId", "选择标签", JAVDB_TAG_OPTIONS),
    },
    {
      id: "makers",
      title: "片商",
      description: "按片商浏览影片",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: categoryParams("genreId", "选择片商", JAVDB_MAKER_OPTIONS),
    },
  ],
};

/* ========================= Storage / Params ========================= */

function readStore(key) {
  try {
    return Widget.storage.get(key);
  } catch (e) {
    return "";
  }
}

function writeStore(key, value) {
  try {
    Widget.storage.set(key, value);
  } catch (e) {}
}

function syncParams(params) {
  params = params || {};
  var out = {};
  for (var i = 0; i < GLOBAL_KEYS.length; i++) {
    var key = GLOBAL_KEYS[i];
    var val = params[key];
    if (val !== undefined && val !== null && String(val).trim() !== "") {
      out[key] = String(val).trim();
      writeStore("javdb.global." + key, out[key]);
    } else {
      var stored = readStore("javdb.global." + key);
      if (stored) out[key] = String(stored);
    }
  }
  if (!out.locale) out.locale = "zh";
  return Object.assign({}, params, out);
}

/* ========================= CategoryPath ========================= */

function splitIdTitle(raw) {
  raw = String(raw || "").trim();
  if (!raw) return { id: "", title: "" };
  var sep = raw.indexOf(ID_TITLE_SEP);
  if (sep < 0) return { id: raw, title: "" };
  var title = raw.slice(sep + 1);
  try {
    title = decodeURIComponent(title);
  } catch (e) {}
  return { id: raw.slice(0, sep), title: title };
}

function joinIdTitle(id, title) {
  id = String(id || "").trim();
  title = String(title || "").replace(/\s+/g, " ").trim();
  if (!id) return "";
  if (!title) return id;
  return id + ID_TITLE_SEP + encodeURIComponent(title);
}

function normalizePath(path) {
  var value = String(path || "").split("#")[0].trim();
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) value = value.replace(/^https?:\/\/[^/]+/i, "");
  if (value.charAt(0) !== "/" && value.indexOf(SEARCH_PREFIX) !== 0) value = "/" + value;
  return value;
}

function isLibraryIndex(path) {
  path = normalizePath(path).split("?")[0];
  return (
    path === "/series" ||
    path === "/makers" ||
    path === "/tags" ||
    /^\/actors\/(censored|uncensored|western)$/i.test(path)
  );
}

/**
 * 解析模块参数 → { kind, itemId, keyword, magnetOnly, params }
 */
function resolveCategoryTarget(params) {
  params = syncParams(params || {});
  var item = String(params.item || "").trim();
  var peopleRaw = String(params.peopleId || "").trim();
  var genreRaw = String(params.genreId || "").trim();

  if (item && !peopleRaw && !genreRaw) {
    var itemRef = splitIdTitle(item);
    if (item.indexOf("/actors/") === 0 || itemRef.id.indexOf("/actors/") === 0) {
      peopleRaw = itemRef.id;
    } else {
      genreRaw = itemRef.id;
    }
    if (itemRef.title) params.categoryTitle = itemRef.title;
  }

  var people = splitIdTitle(peopleRaw);
  var genre = splitIdTitle(genreRaw);
  if (people.title) params.categoryTitle = people.title;
  if (genre.title) params.categoryTitle = genre.title;

  var sortRaw = String(params.sort_by || "published");
  var magnetOnly = /_download$/.test(sortRaw);
  var sortKey = magnetOnly ? sortRaw.replace(/_download$/, "") : sortRaw;
  params.sort_by = SORT_API_MAP[sortKey] ? sortKey : "published";

  var ref = genre.id || people.id || "";
  if (!ref) return { kind: "", itemId: "", keyword: "", magnetOnly: magnetOnly, params: params };

  if (ref.indexOf(SEARCH_PREFIX) === 0) {
    return {
      kind: "search",
      itemId: "",
      keyword: ref.slice(SEARCH_PREFIX.length).trim(),
      magnetOnly: magnetOnly,
      params: params,
    };
  }

  if (ref.indexOf("series:") === 0) {
    return { kind: "series", itemId: ref.slice(7), keyword: "", magnetOnly: magnetOnly, params: params };
  }
  if (ref.indexOf("maker:") === 0) {
    return { kind: "makers", itemId: ref.slice(6), keyword: "", magnetOnly: magnetOnly, params: params };
  }
  if (ref.indexOf("/actors/") === 0 || (people.id && !genre.id)) {
    var actorId = String(people.id || ref).replace(/^\/actors\//, "").split(/[/?#]/)[0];
    return { kind: "actors", itemId: actorId, keyword: "", magnetOnly: magnetOnly, params: params };
  }
  if (ref.indexOf("/series/") === 0 || ref.indexOf("series/") === 0) {
    var sid = normalizePath(ref).replace(/^\/series\//, "").split(/[/?#]/)[0];
    return { kind: "series", itemId: sid, keyword: "", magnetOnly: magnetOnly, params: params };
  }
  if (ref.indexOf("/makers/") === 0 || ref.indexOf("makers/") === 0) {
    var mid = normalizePath(ref).replace(/^\/makers\//, "").split(/[/?#]/)[0];
    return { kind: "makers", itemId: mid, keyword: "", magnetOnly: magnetOnly, params: params };
  }
  if (ref.indexOf("/tags") === 0 || ref.indexOf("tags?") === 0 || ref.indexOf("tags/") === 0) {
    var tPath = normalizePath(ref.charAt(0) === "/" ? ref : "/" + ref);
    var qMatch = tPath.match(/[?&](?:c\d+|q)=([^&]+)/i);
    var tagId = qMatch ? decodeURIComponent(qMatch[1]) : tPath.replace(/^\/tags\/?/, "");
    if (!tagId || isLibraryIndex(tPath)) {
      return { kind: "tags", itemId: "", keyword: "", magnetOnly: magnetOnly, params: params };
    }
    return { kind: "tags", itemId: tagId, keyword: "", magnetOnly: magnetOnly, params: params };
  }
  if (people.id) {
    return {
      kind: "actors",
      itemId: people.id.split(/[/?#]/)[0],
      keyword: "",
      magnetOnly: magnetOnly,
      params: params,
    };
  }
  // 裸路径：按 genre 模块推断（series/makers/tags 共用 genreId）
  var bare = ref.replace(/^\//, "");
  if (params.moduleId === "series" || String(params.category_kind || "") === "series") {
    return { kind: "series", itemId: bare, keyword: "", magnetOnly: magnetOnly, params: params };
  }
  if (params.moduleId === "makers" || String(params.category_kind || "") === "makers") {
    return { kind: "makers", itemId: bare, keyword: "", magnetOnly: magnetOnly, params: params };
  }
  if (params.moduleId === "tags" || String(params.category_kind || "") === "tags") {
    return { kind: "tags", itemId: bare, keyword: "", magnetOnly: magnetOnly, params: params };
  }
  return { kind: "tags", itemId: bare, keyword: "", magnetOnly: magnetOnly, params: params };
}

function categoryIdFromPath(path, title) {
  path = normalizePath(path);
  var bare = path.split("?")[0];
  if (!path || isLibraryIndex(bare)) return joinIdTitle(SEARCH_PREFIX + (title || bare), "");
  var id = "";
  if (bare.indexOf("/actors/") === 0) id = bare;
  else if (bare.indexOf("/series/") === 0) id = bare;
  else if (bare.indexOf("/makers/") === 0) id = bare;
  else if (bare.indexOf("/tags") === 0) id = path.replace(/^\//, "");
  else if (bare.indexOf("/v/") === 0) id = bare;
  else id = path.replace(/^\//, "");
  return joinIdTitle(id, title);
}

/* ========================= JD Signature / HTTP ========================= */

function utf8ToBinary(text) {
  var raw = String(text || "");
  if (typeof encodeURIComponent === "function") {
    try {
      if (typeof unescape === "function") return unescape(encodeURIComponent(raw));
    } catch (e) {}
  }
  var out = "";
  for (var i = 0; i < raw.length; i++) {
    var c = raw.charCodeAt(i);
    if (c < 128) out += String.fromCharCode(c);
    else if (c < 2048) out += String.fromCharCode(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
    else if (c < 0xd800 || c >= 0xe000) {
      out += String.fromCharCode(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
    } else {
      i++;
      var c2 = raw.charCodeAt(i);
      var u = 0x10000 + (((c & 0x3ff) << 10) | (c2 & 0x3ff));
      out += String.fromCharCode(
        0xf0 | (u >> 18),
        0x80 | ((u >> 12) & 0x3f),
        0x80 | ((u >> 6) & 0x3f),
        0x80 | (u & 0x3f)
      );
    }
  }
  return out;
}

function md5BinaryHex(s) {
  var hc = "0123456789abcdef";
  function rh(n) {
    var ss = "";
    for (var j = 0; j <= 3; j++) {
      ss += hc.charAt((n >> (j * 8 + 4)) & 0x0f) + hc.charAt((n >> (j * 8)) & 0x0f);
    }
    return ss;
  }
  function ad(x, y) {
    var l = (x & 0xffff) + (y & 0xffff);
    var m = (x >> 16) + (y >> 16) + (l >> 16);
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
    var N = (((len + 8) >> 6) + 1) * 16;
    var bl = new Array(N);
    for (var i0 = 0; i0 < N; i0++) bl[i0] = 0;
    var i;
    for (i = 0; i < len; i++) bl[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
    bl[i >> 2] |= 0x80 << ((i % 4) * 8);
    bl[N - 2] = len * 8;
    bl[N - 1] = len >>> 29;
    return bl;
  }
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  var x = sb(s, s.length);
  for (var i = 0; i < x.length; i += 16) {
    var oa = a,
      ob = b,
      oc = c,
      od = d;
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
  var text = String(input || "");
  return md5BinaryHex(asciiOnly ? text : utf8ToBinary(text));
}

function buildJdSignature() {
  var ts = Math.floor(Date.now() / 1000).toString();
  return ts + "." + JD_SIG_SALT + "." + md5Hex(ts + JD_SIG_KEY, true);
}

function sanitizeQuery(query) {
  if (!query) return {};
  var out = {};
  Object.keys(query).forEach(function (key) {
    var val = query[key];
    if (val === undefined || val === null || val === "") return;
    if (typeof val === "object") return;
    out[key] = val;
  });
  return out;
}

function buildQueryUrl(base, query) {
  if (!query) return base;
  var parts = [];
  Object.keys(query).forEach(function (key) {
    var val = query[key];
    if (val !== undefined && val !== null && val !== "") {
      parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(val)));
    }
  });
  if (!parts.length) return base;
  return base + (base.indexOf("?") >= 0 ? "&" : "?") + parts.join("&");
}

function getHeaderCI(res, name) {
  if (!res || !res.headers) return "";
  var headers = res.headers;
  var want = String(name || "").toLowerCase();
  if (typeof headers.get === "function") {
    try {
      return String(headers.get(name) || headers.get(want) || "");
    } catch (e) {}
  }
  for (var key in headers) {
    if (!Object.prototype.hasOwnProperty.call(headers, key)) continue;
    if (String(key).toLowerCase() === want) {
      var val = headers[key];
      return Array.isArray(val) ? String(val[0] || "") : String(val || "");
    }
  }
  return "";
}

function apiHeaders(params, extra) {
  params = params || {};
  var headers = {
    accept: "application/json",
    "user-agent": "Mozilla/5.0",
    jdsignature: buildJdSignature(),
  };
  var token = String(params.apiToken || readStore("javdb.global.apiToken") || "").trim();
  if (token) {
    if (/^bearer\s+/i.test(token)) headers.Authorization = token;
    else headers.Authorization = "Bearer " + token;
  }
  return Object.assign(headers, extra || {});
}

async function widgetHttp(method, url, options) {
  options = options || {};
  var retry = options.retry || 0;
  var headerFactory = options.headerFactory;
  try {
    // ForwardWidgets: get(url, options) / post(url, body, options)
    var httpOpts = {
      headers: headerFactory(),
      allow_redirects: true,
      timeout: options.timeout || 30000,
    };
    var resp;
    if (method === "POST") {
      var postBody = options.body !== undefined ? options.body : {};
      if (typeof Widget.http.post === "function") {
        resp = await Widget.http.post(url, postBody, httpOpts);
      } else if (typeof Widget.http.request === "function") {
        resp = await Widget.http.request(
          url,
          Object.assign({ method: "POST", body: postBody }, httpOpts)
        );
      } else {
        resp = await Widget.http.get(
          url,
          Object.assign({}, httpOpts, {
            method: "POST",
            body: typeof postBody === "string" ? postBody : JSON.stringify(postBody),
          })
        );
      }
    } else {
      resp = await Widget.http.get(url, httpOpts);
    }
    var status = resp && (resp.status || resp.statusCode);
    if (status && Number(status) >= 400) {
      var action = "";
      try {
        var errBody = typeof resp.data === "string" ? JSON.parse(resp.data) : resp.data;
        action = (errBody && (errBody.action || errBody.message)) || "";
      } catch (e) {}
      // 仅签名相关错误刷新 jdsignature 重试，避免业务 400（未激活/密码错误等）空转
      if (retry < 2 && /signature|expired|签名|jdsignature|ParameterInvalid/i.test(String(action))) {
        return widgetHttp(method, url, Object.assign({}, options, { retry: retry + 1 }));
      }
      throw new Error("HTTP " + status + (action ? " (" + action + ")" : "") + ": " + url);
    }
    return resp;
  } catch (error) {
    var msg = String((error && error.message) || error || "");
    if (retry < 2 && /unacceptable|signature|expired|签名|jdsignature|ParameterInvalid/i.test(msg)) {
      return widgetHttp(method, url, Object.assign({}, options, { retry: retry + 1 }));
    }
    throw error;
  }
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

async function apiGet(pathname, query, params) {
  var url = buildQueryUrl(API_BASE + pathname, sanitizeQuery(query));
  var resp = await widgetHttp("GET", url, {
    headerFactory: function () {
      return apiHeaders(params);
    },
  });
  var data = parseApiPayload(resp);
  if (!data || data.success !== 1) {
    throw new Error((data && data.message) || "API 请求失败: " + pathname);
  }
  return data.data;
}

async function apiPost(pathname, body, params) {
  var url = API_BASE + pathname;
  var resp = await widgetHttp("POST", url, {
    headerFactory: function () {
      return apiHeaders(params, { "content-type": "application/json" });
    },
    body: body || {},
  });
  return { payload: parseApiPayload(resp), resp: resp };
}

/* ========================= Login (API) ========================= */

function ensureDeviceUuid() {
  var id = String(readStore("javdb.global.deviceUuid") || "").trim();
  if (id) return id;
  id =
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ch) {
      var r = (Math.random() * 16) | 0;
      var v = ch === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  writeStore("javdb.global.deviceUuid", id);
  return id;
}

function extractToken(data) {
  if (!data) return "";
  if (typeof data === "string") {
    var s = data.trim();
    if (s && s.length > 20 && s.indexOf(" ") < 0) return s;
    return "";
  }
  var keys = ["token", "auth_token", "access_token", "jwt", "authorization", "api_token"];
  for (var i = 0; i < keys.length; i++) {
    var v = data[keys[i]];
    if (typeof v === "string" && v.trim()) {
      return v.replace(/^Bearer\s+/i, "").trim();
    }
  }
  if (data.user) {
    var fromUser = extractToken(data.user);
    if (fromUser) return fromUser;
  }
  if (data.session) {
    var fromSession = extractToken(data.session);
    if (fromSession) return fromSession;
  }
  if (data.data) {
    var nested = extractToken(data.data);
    if (nested) return nested;
  }
  return "";
}

async function loginWithPassword(params) {
  params = syncParams(params || {});
  var username = String(params.email || "").trim();
  var password = String(params.password || "").trim();
  if (!username || !password) throw new Error("请填写账号和密码");

  var body = Object.assign({}, DEVICE_DEFAULTS, {
    device_uuid: ensureDeviceUuid(),
    username: username,
    password: password,
  });

  var result = await apiPost("/v1/sessions", body, params);
  var payload = result.payload;
  if (!payload || payload.success !== 1) {
    throw new Error((payload && payload.message) || "登录失败");
  }

  var token =
    extractToken(payload.data) ||
    extractToken(payload) ||
    String(getHeaderCI(result.resp, "Authorization") || "")
      .replace(/^Bearer\s+/i, "")
      .trim();

  if (!token) throw new Error("登录成功但未返回 Token，请检查账号状态");

  params.apiToken = token;
  writeStore("javdb.global.apiToken", token);
  writeStore("javdb.global.email", username);
  return { token: token, data: payload.data };
}

async function ensureApiSession(params, options) {
  options = options || {};
  params = syncParams(params || {});
  if (params.apiToken) return params;

  var email = String(params.email || "").trim();
  var password = String(params.password || "").trim();
  if (!email || !password) {
    if (options.requireAuth) throw new Error("需要登录：请填写账号密码或 API Token");
    return params;
  }

  try {
    await loginWithPassword(params);
  } catch (err) {
    if (options.requireAuth) throw err;
    console.error("[javdb] 登录失败（继续匿名）:", (err && err.message) || err);
  }
  return syncParams(params);
}

/* ========================= API → Items ========================= */

function safeText(value) {
  return String(value == null ? "" : value).replace(/\s+/g, " ").trim();
}

function movieLink(id) {
  return "/v/" + String(id || "").replace(/^\//, "");
}

function pickCover(movie) {
  var cover = safeText(movie && (movie.cover_url || movie.thumb_url));
  if (cover) return cover;
  var code = safeText(movie && movie.number);
  if (!code) return "";
  var m = code.toUpperCase().match(/^([A-Z0-9]+)-(\d+)$/);
  if (!m) return "";
  var id = m[1].toLowerCase() + ("00000" + m[2]).slice(-5);
  return "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + id + "/" + id + "pl.jpg";
}

function buildListDescription(movie) {
  var parts = [];
  if (movie.number) parts.push("番号: " + movie.number);
  if (movie.has_cnsub) parts.push("中字");
  if ((movie.magnets_count || 0) > 0) parts.push("磁链×" + movie.magnets_count);
  if (movie.has_preview_video) parts.push("预告");
  return parts.join(" | ");
}

function resolveListPosterUrl(code, siteFallback, dmmProbe) {
  var fallback = String(siteFallback || "").trim();
  if (!code) return fallback;
  var probe = dmmProbe !== undefined ? dmmProbe : getCachedDmmProbeCover(code);
  // 仅采用 Worker 验证过的竖版海报；不再猜 awsimgsrc 链接（猜错易出占位图）
  if (probe && probe.posterUrl) {
    var poster = String(probe.posterUrl).trim();
    if (poster && !isInvalidCoverTarget(poster) && !isLowResDmmPosterUrl(poster)) {
      return poster;
    }
  }
  return fallback;
}

function mapListMovie(movie) {
  var code = safeText(movie.number || "");
  var title = safeText(movie.title || code || movie.id);
  if (code && title.indexOf(code) !== 0) title = code + " " + title;
  var siteCover = pickCover(movie);
  // 方格列表：竖版海报走 posterPath（DMM ps / probe）
  var posterUrl = resolveListPosterUrl(code, siteCover, code ? lookupDmmProbeCover(code) : null);
  return {
    id: code || movie.id,
    type: "url",
    mediaType: "movie",
    title: title,
    link: movieLink(movie.id),
    releaseDate: movie.release_date || "",
    rating: Number(movie.score || 0) || 0,
    description: buildListDescription(movie),
    posterPath: posterUrl || undefined,
    detailPoster: posterUrl || undefined,
    videoId: movie.id,
  };
}

async function enrichListMovies(movies, params) {
  params = params || {};
  var list = movies || [];
  var codes = [];
  for (var i = 0; i < list.length; i++) {
    var code = safeText(list[i] && list[i].number);
    if (code) codes.push(code);
  }
  await prefetchDmmProbeCovers(codes, params);
  return list.map(mapListMovie);
}

function buildCategoryFilter(kind, itemId, magnetOnly) {
  var id = String(itemId || "").trim();
  var typePart = "0";
  var extra = magnetOnly ? "m" : "";
  if (kind === "tags") {
    if (/^[pmcsiv]$/i.test(id)) return typePart + ":0:x:" + id.toLowerCase();
    return typePart + ":t::" + id + (extra ? ":" + extra : "");
  }
  var kindCode = CATEGORY_KIND_CODE[kind] || "a";
  return typePart + ":" + kindCode + ":" + id + ":" + extra;
}

function resolveSortQuery(sortBy) {
  return SORT_API_MAP[sortBy] || SORT_API_MAP.published;
}

async function fetchCategoryMovies(filterBy, params) {
  var page = Number(params.page || params.from || 1);
  var sort = resolveSortQuery(params.sort_by || "published");
  var data = await apiGet(
    "/v1/movies/tags",
    {
      filter_by: filterBy,
      page: page,
      sort_by: sort.sort_by,
      order_by: sort.order_by,
      limit: 24,
    },
    params
  );
  return (data && data.movies) || [];
}

async function fetchSearchMovies(keyword, params, magnetOnly) {
  var page = Number(params.page || params.from || 1);
  var query = {
    q: keyword,
    page: page,
    type: "movie",
    movie_filter_by: magnetOnly ? "magnet" : "all",
    movie_sort_by: SEARCH_SORT_MAP[params.sort_by || "published"] || "release",
  };
  var data = await apiGet("/v2/search", query, params);
  return (data && data.movies) || [];
}

function parseDetailMeta(movie) {
  var genreItems = [];
  var peoples = [];
  var genreSeen = {};
  var peopleSeen = {};

  (movie.tags || []).forEach(function (tag) {
    var name = typeof tag === "string" ? tag : tag && tag.name;
    var tagId = typeof tag === "object" && tag ? String(tag.id || "").trim() : "";
    if (!name || genreSeen[name]) return;
    genreSeen[name] = true;
    var path = tagId ? "/tags?c2=" + encodeURIComponent(tagId) : SEARCH_PREFIX + name;
    genreItems.push({ id: categoryIdFromPath(path, name), title: name });
  });

  (movie.actors || []).forEach(function (actor) {
    if (!actor || !actor.name) return;
    var key = actor.id || actor.name;
    if (peopleSeen[key]) return;
    peopleSeen[key] = true;
    peoples.push({
      id: categoryIdFromPath("/actors/" + (actor.id || actor.name), actor.name),
      title: actor.name,
      avatar: actor.avatar_url || "",
      role: "演员",
    });
  });

  if (movie.director_name) {
    peoples.push({
      id: categoryIdFromPath("/actors/" + (movie.director_id || movie.director_name), movie.director_name),
      title: movie.director_name,
      avatar: "",
      role: "导演",
    });
  }
  if (movie.maker_name) {
    genreItems.push({
      id: categoryIdFromPath("/makers/" + (movie.maker_id || movie.maker_name), movie.maker_name),
      title: movie.maker_name,
    });
  }
  if (movie.series_name) {
    genreItems.push({
      id: categoryIdFromPath("/series/" + (movie.series_id || movie.series_name), movie.series_name),
      title: movie.series_name,
    });
  }

  return { genreItems: genreItems, peoples: peoples };
}

function formatMagnetSize(mb) {
  var n = Number(mb || 0);
  if (!n) return "";
  if (n >= 1024) return (n / 1024).toFixed(2) + " GB";
  return n + " MB";
}

function mapMagnets(magnets) {
  var lines = [];
  var list = magnets || [];
  for (var i = 0; i < list.length && i < 12; i++) {
    var m = list[i];
    var flags = [];
    if (m.cnsub) flags.push("中字");
    if (m.hd) flags.push("HD");
    var size = formatMagnetSize(m.size);
    lines.push(
      (m.name || m.hash || "magnet") +
        (size ? " · " + size : "") +
        (flags.length ? " · " + flags.join("/") : "") +
        (m.hash ? "\nmagnet:?xt=urn:btih:" + m.hash : "")
    );
  }
  return lines.join("\n\n");
}

/* ========================= DMM HD Cover（对齐 dmm-cover.js） ========================= */

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

function getMgstageCoverRule(parts) {
  if (!parts) return null;
  return MGSTAGE_COVER_RULES[parts.prefix] || null;
}

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
  var entry = { ok: !!probe, savedAt: Date.now() };
  if (probe) {
    entry.contentId = probe.contentId || "";
    entry.posterUrl = probe.posterUrl || "";
    entry.backdropUrl = probe.backdropUrl || "";
  }
  try {
    Widget.storage.set(dmmProbeStorageKey(code), JSON.stringify(entry));
  } catch (e) {}
}

function getDmmProbeWorkerBase(params) {
  params = params || {};
  var base = params.dmmProbeWorker;
  if (!base) base = readStore("javdb.global.dmmProbeWorker");
  if (!base) base = DMM_PROBE_WORKER_BASE;
  return String(base || "").replace(/\/+$/, "");
}

function getDmmProbeWorkerHeaders(params) {
  var headers = { Accept: "application/json" };
  var key = params && params.dmmProbeApiKey;
  if (!key) key = readStore("javdb.global.dmmProbeApiKey");
  if (key) headers["X-Probe-Key"] = String(key);
  return headers;
}

function normalizeProbeBest(best) {
  if (!best || typeof best !== "object") return null;
  var posterUrl = String(best.posterUrl || "").trim();
  var backdropUrl = String(best.backdropUrl || "").trim();
  if (posterUrl && (isInvalidCoverTarget(posterUrl) || isLowResDmmPosterUrl(posterUrl))) {
    posterUrl = "";
  }
  if (backdropUrl && isInvalidCoverTarget(backdropUrl)) backdropUrl = "";
  return {
    contentId: String(best.contentId || ""),
    posterUrl: posterUrl,
    backdropUrl: backdropUrl,
  };
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
      var probe = normalizeProbeBest(data.best);
      // 无可用竖版也缓存 contentId/backdrop，避免列表再猜 DMM 链接
      if (!probe) return { probe: null, knownMiss: true };
      return { probe: probe, knownMiss: false };
    }
    if (data.ok === false) return { probe: null, knownMiss: true };
    return { probe: undefined, knownMiss: false };
  } catch (err) {
    return { probe: undefined, knownMiss: false };
  }
}

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
  var parts = {
    prefix: prefix,
    prefixLower: prefixLower,
    number: match[2],
    number3: number3,
    number5: number5,
    numberPlain: String(parseInt(match[2], 10)),
    suffix: suffix,
    makerPrefix: makerPrefix,
    plainCode: prefixLower + number5,
  };
  parts.code = buildDmmContentIdFromParts(parts) || makerPrefix + prefixLower + number5;
  return parts;
}

async function fetchDmmProbeCover(code, params) {
  code = String(code || "").trim().toUpperCase();
  if (!code) return null;
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

function lookupDmmProbeCover(code) {
  code = String(code || "").trim().toUpperCase();
  if (!code || !Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) return null;
  return DMM_PROBE_WORKER_CACHE[code];
}

/** 只读内存/本地缓存，不发起网络探测（详情页用） */
function getCachedDmmProbeCover(code) {
  code = String(code || "").trim().toUpperCase();
  if (!code) return null;
  if (Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) {
    return DMM_PROBE_WORKER_CACHE[code];
  }
  var stored = loadDmmProbeFromStorage(code);
  if (stored !== undefined) {
    DMM_PROBE_WORKER_CACHE[code] = stored;
    return stored;
  }
  return null;
}

function applyDmmProbeBatchResults(data, requestedCodes) {
  var rows = (data && data.results) || (data && data.items) || [];
  if (!Array.isArray(rows)) rows = [];
  var byCode = {};
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (!row) continue;
    var code = String(row.code || "").trim().toUpperCase();
    if (!code) continue;
    if (row.ok && row.best) {
      byCode[code] = normalizeProbeBest(row.best);
    } else if (row.ok === false) {
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
    console.error("[javdb] DMM batch probe failed:", (err && err.message) || err);
    return false;
  }
}

async function prefetchDmmProbeCovers(codes, params) {
  var pending = [];
  var seen = {};
  for (var i = 0; i < (codes || []).length; i++) {
    var code = String(codes[i] || "").trim().toUpperCase();
    if (!code || seen[code]) continue;
    seen[code] = true;
    if (Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) continue;
    var storedProbe = loadDmmProbeFromStorage(code);
    if (storedProbe !== undefined) {
      DMM_PROBE_WORKER_CACHE[code] = storedProbe;
      continue;
    }
    pending.push(code);
  }
  if (!pending.length) return;

  // 优先批量 /probe，失败再逐条 /cover
  for (var start = 0; start < pending.length; start += DMM_PROBE_BATCH_SIZE) {
    var chunk = pending.slice(start, start + DMM_PROBE_BATCH_SIZE);
    var ok = await fetchDmmProbeCoverBatch(chunk, params);
    if (ok) continue;
    var tasks = [];
    for (var j = 0; j < chunk.length; j++) {
      tasks.push(fetchDmmProbeCover(chunk[j], params));
    }
    await Promise.all(tasks);
  }
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
  if (!parts.prefixLower || !number || number === "NaN") {
    return { posterCandidates: [], backdropCandidates: [] };
  }
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
  var mono = isDmmMonoContentId(id)
    ? buildDmmMonoCoverCandidatesForId(id)
    : { posterCandidates: [], backdropCandidates: [] };
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
  var candidates = buildMgstageCoverCandidatesFromVideoId(videoIdOrTitle);
  if (candidates.posterCandidates.length || candidates.backdropCandidates.length) return candidates;
  candidates = { posterCandidates: [], backdropCandidates: [] };
  var parts = parseJavCodeParts(videoIdOrTitle);
  if (parts && parts.code) appendDmmCoverCandidates(candidates, parts.code);
  return appendDmmProbeCoverCandidates(candidates, dmmProbe);
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

function pickFirstUsableCoverUrl(urls) {
  var list = compactUniqueUrls(urls || []);
  for (var i = 0; i < list.length; i++) {
    if (!isInvalidCoverTarget(list[i])) return list[i];
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

function resolvePosterUrlWithSiteFallback(posterUrl, siteFallback) {
  var poster = String(posterUrl || "").trim();
  if (!poster) return siteFallback || "";
  if (isLowResDmmPosterUrl(poster)) return siteFallback || poster;
  return poster;
}

function buildDetailTrailers(previewUrl, cover) {
  var url = String(previewUrl || "").trim();
  if (!url) return [];
  var tc = String(cover || "").trim();
  return [
    {
      coverUrl: tc || undefined,
      posterPath: tc || undefined,
      backdropPath: tc || undefined,
      image: tc || undefined,
      url: url,
    },
  ];
}

/* ========================= Handlers ========================= */

function normalizeLatestFilter(raw) {
  var text = String(raw || "all").trim().toLowerCase();
  if (Object.prototype.hasOwnProperty.call(MOVIE_TYPE_CODE, text)) {
    return MOVIE_TYPE_CODE[text] === "all" ? "all" : text;
  }
  if (text === "0") return "censored";
  if (text === "1") return "uncensored";
  if (text === "2") return "western";
  if (text === "3") return "fc2";
  return "all";
}

function normalizeTop250Type(raw) {
  var text = String(raw || "all").trim().toLowerCase();
  if (text === "all" || text === "") return "all";
  if (text === "censored") return "0";
  if (text === "uncensored") return "1";
  if (text === "western") return "2";
  if (text === "fc2") return "3";
  if (/^[0-3]$/.test(text)) return text;
  return "all";
}

async function loadLatest(params) {
  try {
    params = await ensureApiSession(params || {});
    var page = Number(params.page || params.from || 1);
    var filterBy = normalizeLatestFilter(params.filter_by);
    var data = await apiGet(
      "/v1/movies/latest",
      { page: page, filter_by: filterBy },
      params
    );
    var movies = (data && data.movies) || [];
    if (!movies.length) throw new Error("暂无最近更新");
    return enrichListMovies(movies, params);
  } catch (error) {
    console.error("[javdb] 最近更新失败:", error.message || error);
    throw error;
  }
}

async function loadTop250(params) {
  try {
    params = await ensureApiSession(params || {}, { requireAuth: true });
    var page = Number(params.page || params.from || 1);
    var type = normalizeTop250Type(params.type);
    var query = { page: page };
    if (type !== "all") {
      query.type = type;
      query.filter_by = type;
    } else {
      query.filter_by = "all";
    }
    var data = await apiGet("/v1/movies/top", query, params);
    var movies = (data && data.movies) || [];
    if (!movies.length) throw new Error("TOP250 无数据（请确认已登录）");
    return enrichListMovies(movies, params);
  } catch (error) {
    var msg = String((error && error.message) || error || "");
    if (/請登錄|请登录|JWT|登录|帳號|账号/i.test(msg)) {
      throw new Error("TOP250 需要登录：请在全局参数填写账号密码或 API Token");
    }
    console.error("[javdb] TOP250 失败:", msg);
    throw error;
  }
}

async function loadCategoryList(params) {
  var target = resolveCategoryTarget(params);
  params = await ensureApiSession(target.params);

  if (target.keyword || target.kind === "search") {
    var kw = target.keyword || params.categoryTitle;
    if (!kw) throw new Error("请选择标签或输入关键词");
    var searched = await fetchSearchMovies(kw, params, target.magnetOnly);
    if (!searched.length) throw new Error("未找到相关影片");
    return enrichListMovies(searched, params);
  }

  if (!target.itemId || !target.kind) {
    throw new Error("请先选择分类项（演员/系列/标签/片商）");
  }

  var filterBy = buildCategoryFilter(target.kind, target.itemId, target.magnetOnly);
  var movies = await fetchCategoryMovies(filterBy, params);

  // 片商/标签无结果时回退关键词搜索
  if (!movies.length && (target.kind === "makers" || target.kind === "tags")) {
    var fallbackKw = safeText(params.categoryTitle) || target.itemId;
    movies = await fetchSearchMovies(fallbackKw, params, target.magnetOnly);
  }

  if (!movies.length) throw new Error("未解析到影片列表");
  return enrichListMovies(movies, params);
}

async function loadPage(params) {
  try {
    return await loadCategoryList(params || {});
  } catch (error) {
    console.error("[javdb] 分类加载失败:", error.message || error);
    throw error;
  }
}

async function loadDetail(link) {
  try {
    var params = await ensureApiSession({});
    var path = normalizePath(String(link || ""));
    if (!path) return null;

    // 分类摘要（少见）
    if (path.indexOf("/v/") !== 0) {
      if (/^\/(actors|series|makers)\//.test(path.split("?")[0]) || path.indexOf("/tags") === 0) {
        var target = resolveCategoryTarget({
          genreId: path.indexOf("/actors/") === 0 ? "" : path,
          peopleId: path.indexOf("/actors/") === 0 ? path : "",
        });
        if (!target.itemId && !target.keyword) return null;
        var list = await loadCategoryList(
          Object.assign({}, target.params, {
            peopleId: target.kind === "actors" ? "/actors/" + target.itemId : "",
            genreId:
              target.kind === "actors"
                ? ""
                : target.kind === "search"
                  ? SEARCH_PREFIX + target.keyword
                  : "/" + (target.kind === "makers" ? "makers" : target.kind === "series" ? "series" : "tags") +
                    (target.kind === "tags" ? "?c2=" + target.itemId : "/" + target.itemId),
            page: 1,
          })
        );
        return {
          id: target.itemId || target.keyword || path,
          type: "url",
          title: params.categoryTitle || target.itemId || target.keyword || path,
          description: "共收录 " + list.length + " 部影片（当前页）",
          link: path,
          posterPath: (list[0] && list[0].posterPath) || "",
          detailPoster: (list[0] && (list[0].detailPoster || list[0].posterPath)) || "",
        };
      }
      return null;
    }

    var movieId = path.replace(/^\/v\//, "").split(/[/?#]/)[0];
    if (!movieId) return null;

    var detail = await apiGet("/v4/movies/" + movieId, null, params);
    var movie = (detail && detail.movie) || {};
    var code = safeText(movie.number || "");
    var title = safeText(movie.title || code || movieId);
    if (code && title.indexOf(code) !== 0) title = code + " " + title;

    // 顶图直接复用列表阶段竖版海报（仅读缓存，不再发起 DMM 探测）
    var siteCover = pickCover(movie);
    var posterUrl = resolveListPosterUrl(code, siteCover, code ? getCachedDmmProbeCover(code) : null);
    var coverUrl = posterUrl || siteCover || "";

    var galleryUrls = [];
    (movie.preview_images || []).forEach(function (img) {
      var u = safeText((img && (img.large_url || img.thumb_url)) || "");
      if (u) galleryUrls.push(u);
    });
    var backdropPaths = compactUniqueUrls(
      [].concat(coverUrl ? [coverUrl] : [], galleryUrls || [])
    ).filter(Boolean);

    var previewUrl = safeText(movie.preview_video_url || "");
    var trailers = buildDetailTrailers(previewUrl, coverUrl);

    var meta = parseDetailMeta(movie);
    var magnetText = "";
    try {
      var magnetData = await apiGet("/v1/movies/" + movieId + "/magnets", null, params);
      magnetText = mapMagnets(magnetData && magnetData.magnets);
    } catch (eMag) {}

    var descParts = [];
    if (code) descParts.push("番号: " + code);
    if (movie.release_date) descParts.push("日期: " + movie.release_date);
    if (movie.duration) descParts.push("时长: " + movie.duration + " 分钟");
    if (movie.summary) descParts.push(safeText(movie.summary));
    if (magnetText) descParts.push("磁力:\n" + magnetText);

    return {
      id: code || movie.id || movieId,
      type: "detail",
      mediaType: "movie",
      title: title,
      link: movieLink(movie.id || movieId),
      backdropPath: coverUrl,
      posterPath: posterUrl || coverUrl,
      detailPoster: posterUrl || coverUrl,
      coverUrl: coverUrl,
      image: coverUrl,
      backdropPaths: backdropPaths,
      releaseDate: movie.release_date || "",
      durationText: movie.duration ? movie.duration + " 分钟" : "",
      rating: Number(movie.score || 0) || 0,
      genreItems: meta.genreItems,
      peoples: meta.peoples,
      description: descParts.join("\n"),
      // 预告片只走底部 trailers 模块，不进入播放资源
      trailers: trailers,
      previewUrl: previewUrl || "",
      videoId: movie.id || movieId,
    };
  } catch (error) {
    console.error("[javdb] 详情加载失败:", error.message || error);
    throw error;
  }
}

/** 供设置页手动触发登录检测 */
async function loginAccount(params) {
  params = syncParams(params || {});
  var result = await loginWithPassword(params);
  return [
    {
      id: "login_ok",
      type: "text",
      title: "登录成功",
      subTitle: "Token 已缓存（" + String(result.token).slice(0, 12) + "…）",
    },
  ];
}

/* 导出给 Node 测试（Forward 运行时忽略） */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    resolveCategoryTarget: resolveCategoryTarget,
    buildCategoryFilter: buildCategoryFilter,
    mapListMovie: mapListMovie,
    categoryIdFromPath: categoryIdFromPath,
    buildJdSignature: buildJdSignature,
    extractToken: extractToken,
    loadPage: loadPage,
    loadLatest: loadLatest,
    loadTop250: loadTop250,
    loadDetail: loadDetail,
    loginAccount: loginAccount,
    WidgetMetadata: typeof WidgetMetadata !== "undefined" ? WidgetMetadata : null,
  };
}

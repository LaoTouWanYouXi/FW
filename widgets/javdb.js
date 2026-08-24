/**
 * JavDB ForwardWidget 模块 v4
 * 管道：CategoryPath → jdforrepam API（绕过 CF）→ VideoItem
 * 登录：POST /v1/sessions（账号密码 → JWT）
 * 列表：DMM 竖版海报（方格）；详情顶图复用列表缓存，不再探测
 * 详情：trailers 预告片模块（不进播放资源）
 * 磁力：relatedItems 展示 API 磁链；无磁链时从短评解析 magnet: 链接并提取大小/标签
 */

/* @category-options-begin — 由 build-javdb-categories.js 生成，勿手改 */
// 重新生成: node build-javdb-categories.js
var JAVDB_ACTOR_OPTIONS = [
  { title: "\u963f\u90e8\u4e43\u7f8e\u4e45", value: "/actors/Qkdq" },
  { title: "\u7231\u6fd1\u7f8e\u5e0c", value: "/actors/n4PV" },
  { title: "\u7231\u4e16\u68a6\u7f57", value: "/actors/PGqE" },
  { title: "\u7231\u7530\u98de\u9e1f", value: "/actors/b97d" },
  { title: "\u7231\u7530\u5948\u5948", value: "/actors/JP4B" },
  { title: "\u7231\u987b\u5fc3\u4e9a", value: "/actors/Jd4z" },
  { title: "\u7231\u97f3\u9ebb\u91cc\u4e9a", value: "/actors/Ng03" },
  { title: "\u5b89\u90e8\u672a\u534e\u5b50", value: "/actors/RA0m" },
  { title: "\u5b89\u4f4d\u85b0", value: "/actors/2amxZ" },
  { title: "\u5b89\u658b\u62c9\u62c9", value: "/actors/DXE5" },
  { title: "\u5965\u7530\u54b2", value: "/actors/wVVz" },
  { title: "\u516b\u4e43\u7ffc", value: "/actors/OMAz" },
  { title: "\u767d\u5cf0\u7f8e\u7fbd", value: "/actors/W1wee" },
  { title: "\u767d\u6728\u4f18\u5b50", value: "/actors/OEdK" },
  { title: "\u767d\u77f3\u8309\u8389\u5948", value: "/actors/0YZq" },
  { title: "\u767d\u77f3\u672a\u592e", value: "/actors/20PP" },
  { title: "\u767d\u77f3\u94c3", value: "/actors/gKGy" },
  { title: "\u767d\u6843\u82b1", value: "/actors/Xa1G" },
  { title: "\u767d\u54b2\u67da\u5b50", value: "/actors/Z5BA" },
  { title: "\u767e\u5408\u5ddd\u96c5", value: "/actors/vRpp" },
  { title: "\u5742\u9053\u7f8e\u7409", value: "/actors/vd5z" },
  { title: "\u5742\u54b2\u7f8e\u7a57", value: "/actors/DNb3" },
  { title: "\u6ee8\u5d0e\u771f\u7dd6", value: "/actors/6v9D" },
  { title: "\u4fdd\u5742\u60e0\u91cc", value: "/actors/a8Vg" },
  { title: "\u5b9d\u751f\u8389\u8389", value: "/actors/Q0YG" },
  { title: "\u5b9d\u7530\u8420\u5948\u7f8e", value: "/actors/GWkD" },
  { title: "\u5317\u5ddd\u67da\u5b50", value: "/actors/ppB" },
  { title: "\u5317\u6761\u9ebb\u5983", value: "/actors/9D1q" },
  { title: "\u5317\u91ce\u671b", value: "/actors/72Z" },
  { title: "\u672c\u7530\u5cac", value: "/actors/qOA9" },
  { title: "\u672c\u771f\u53cb\u91cc", value: "/actors/E4bx" },
  { title: "\u672c\u5e84\u94c3", value: "/actors/BzpA" },
  { title: "\u672c\u5e84\u4f18\u82b1", value: "/actors/pknw" },
  { title: "\u78a7\u5fd7\u4e43", value: "/actors/WAPK" },
  { title: "\u7add\u6728\u5854\u5b50", value: "/actors/ZpqJ" },
  { title: "\u6ce2\u591a\u91ce\u7ed3\u8863", value: "/actors/R2Vg" },
  { title: "\u6ce2\u6728\u9065", value: "/actors/p7Nw" },
  { title: "\u5f69\u7f8e\u65ec\u679c", value: "/actors/5Dya" },
  { title: "\u4ed3\u591a\u771f\u592e", value: "/actors/WZGR" },
  { title: "\u4ed3\u6728\u8bd7\u7ec7", value: "/actors/8PrK" },
  { title: "\u6210\u5bab\u8272\u53f6", value: "/actors/ZdX7" },
  { title: "\u8d64\u57ce\u78a7", value: "/actors/2GGP" },
  { title: "\u8d64\u6e15\u83b2", value: "/actors/6x39" },
  { title: "\u51b2\u7530\u674f\u68a8", value: "/actors/pDeZ" },
  { title: "\u521d\u5ddd\u5357", value: "/actors/E6MM" },
  { title: "\u521d\u7f8e\u6c99\u5e0c", value: "/actors/J6Rx" },
  { title: "\u521d\u97f3\u5b9e", value: "/actors/QWB8" },
  { title: "\u96cf\u83ca\u7ffc", value: "/actors/YE1d" },
  { title: "\u5ddd\u83dc\u7f8e\u94c3", value: "/actors/J4mB" },
  { title: "\u5ddd\u6751\u771f\u77e2", value: "/actors/zM6E" },
  { title: "\u5ddd\u4e0a\u5948\u5948\u7f8e", value: "/actors/pPBw" },
  { title: "\u690e\u540d\u7a7a", value: "/actors/NO1N" },
  { title: "\u6625\u83dc\u534e", value: "/actors/0J0q" },
  { title: "\u6625\u54b2\u51c9", value: "/actors/y7xb" },
  { title: "\u6625\u539f\u672a\u6765", value: "/actors/X5AJ" },
  { title: "\u693f\u7ec7\u91cc\u7f8e", value: "/actors/VXw3" },
  { title: "\u51d1\u8389\u4e45", value: "/actors/QnE8" },
  { title: "\u6751\u4e0a\u51c9\u5b50", value: "/actors/RYXD" },
  { title: "\u5927\u573a\u552f", value: "/actors/ZY7V" },
  { title: "\u5927\u5c9b\u4f18\u9999", value: "/actors/ZdQv" },
  { title: "\u5927\u69fb\u54cd", value: "/actors/BKMM" },
  { title: "\u5927\u6d66\u771f\u5948\u7f8e", value: "/actors/9N9V" },
  { title: "\u7a3b\u573a\u6d41\u82b1", value: "/actors/vNKW" },
  { title: "\u8482\u4e9a", value: "/actors/9dQE" },
  { title: "\u51ac\u6708\u67ab", value: "/actors/Arq0" },
  { title: "\u4e1c\u51db", value: "/actors/y8Mv" },
  { title: "\u4e1c\u6761\u590f", value: "/actors/A6zy" },
  { title: "\u4e8c\u5bab\u548c\u9999", value: "/actors/1ERn" },
  { title: "\u5983\u6708\u7559\u8863", value: "/actors/MbzQ" },
  { title: "\u98de\u9e1f\u94c3", value: "/actors/Rp08" },
  { title: "\u98ce\u95f4\u7531\u7f8e", value: "/actors/82m3" },
  { title: "\u67ab\u771f\u8863", value: "/actors/2k0w" },
  { title: "\u9022\u6cfd\u771f\u91cc\u4e9a", value: "/actors/nWJ9" },
  { title: "\u9ad8\u5d0e\u5723\u5b50", value: "/actors/x4MV" },
  { title: "\u9ad8\u6749\u9ebb\u91cc", value: "/actors/vOMb" },
  { title: "\u6839\u5c3e\u6731\u91cc", value: "/actors/kGQP" },
  { title: "\u5bab\u5d0e\u5f69", value: "/actors/eKgR" },
  { title: "\u5bab\u4e0b\u534e\u5948", value: "/actors/xv1V" },
  { title: "\u5bab\u6cfd\u7531\u9999\u91cc", value: "/actors/YnO8" },
  { title: "\u8c37\u539f\u5e0c\u7f8e", value: "/actors/GJvg" },
  { title: "\u5173\u6839\u5948\u7f8e", value: "/actors/YOMK" },
  { title: "\u5e7f\u6fd1\u6d77", value: "/actors/ymrd" },
  { title: "\u6cb3\u5317\u5f69\u82b1", value: "/actors/EvkJ" },
  { title: "\u6cb3\u5408\u660e\u65e5\u83dc", value: "/actors/69A0" },
  { title: "\u6cb3\u5357\u5b9e\u91cc", value: "/actors/zkJ7" },
  { title: "\u6cb3\u897f\u4e9a\u7f8e", value: "/actors/94V6" },
  { title: "\u9ed1\u5ddd\u7eb1\u91cc\u5948", value: "/actors/Nmbw" },
  { title: "\u6a2a\u5c71\u7f8e\u73b2", value: "/actors/ynWg" },
  { title: "\u540e\u85e4\u91cc\u9999", value: "/actors/5rr9" },
  { title: "\u80e1\u6843\u6cfd\u6843\u5b50", value: "/actors/y3pg" },
  { title: "\u6237\u7530\u771f\u7434", value: "/actors/36Qa" },
  { title: "\u82b1\u54b2\u4e00\u674f", value: "/actors/eWG1" },
  { title: "\u51f0\u9999\u5948\u82bd", value: "/actors/y43v" },
  { title: "\u59ec\u5ddd\u4f18\u5948", value: "/actors/zMyQ" },
  { title: "\u8ff9\u7f8e\u73e0\u91cc", value: "/actors/3Jdb" },
  { title: "\u5409\u5ddd\u7231\u7f8e", value: "/actors/5Xx6" },
  { title: "\u5409\u5ddd\u83b2", value: "/actors/kyGz" },
  { title: "\u5409\u9ad8\u5b81\u5b81", value: "/actors/rPrR" },
  { title: "\u5409\u6839\u67da\u8389\u7231", value: "/actors/0Bw3" },
  { title: "\u5409\u6cfd\u660e\u6b65", value: "/actors/0yVv" },
  { title: "\u4f73\u82d7\u7409\u534e", value: "/actors/O1bD" },
  { title: "\u5cac\u5948\u5948\u7f8e", value: "/actors/QNen" },
  { title: "\u698e\u672c\u7f8e\u54b2", value: "/actors/dDy5" },
  { title: "\u67b6\u4e43\u7531\u7f57", value: "/actors/p50Z" },
  { title: "\u83c5\u91ce\u677e\u96ea", value: "/actors/rngN" },
  { title: "\u6c5f\u4e0a\u5fd7\u4fdd", value: "/actors/5rPM" },
  { title: "\u7686\u5ddd\u5343\u9065", value: "/actors/bJJg" },
  { title: "\u7ed3\u57ce\u4e43\u4e43", value: "/actors/8GYx" },
  { title: "\u7ed3\u6708\u606d\u5b50", value: "/actors/B4Ga" },
  { title: "\u7ed3\u771f\u5e0c\u5948", value: "/actors/KW5m" },
  { title: "\u4eca\u4e95\u771f\u7531\u7f8e", value: "/actors/RPN8" },
  { title: "\u84f3\u7f8e\u9999", value: "/actors/WPr7" },
  { title: "\u4e95\u4e0a\u7eeb\u5b50", value: "/actors/kPEN" },
  { title: "\u4e5d\u91cd\u73af\u5948", value: "/actors/EKz4" },
  { title: "\u541b\u5c9b\u7f8e\u7dd6", value: "/actors/96AR" },
  { title: "\u8475\u5343\u60e0", value: "/actors/1q3n" },
  { title: "\u8475\u53f8", value: "/actors/A5yq" },
  { title: "\u6fd1\u540d\u5149\u8389", value: "/actors/2a7m" },
  { title: "\u857e", value: "/actors/M6mA" },
  { title: "\u91cc\u7f8e\u5c24\u5229\u5a05", value: "/actors/dxqQ" },
  { title: "\u7acb\u82b1\u7460\u8389", value: "/actors/2wQW" },
  { title: "\u83b2\u5b9e\u514b\u857e\u513f", value: "/actors/B0nG" },
  { title: "\u51c9\u5ddd\u7eda\u97f3", value: "/actors/mmyZ" },
  { title: "\u51c9\u5bab\u7434\u97f3", value: "/actors/V1Gn" },
  { title: "\u51c9\u6d77\u7f8e\u6c99", value: "/actors/AyRe" },
  { title: "\u51c9\u68ee\u73b2\u68a6", value: "/actors/KxPb" },
  { title: "\u6797\u7f8e\u73b2", value: "/actors/bdpe" },
  { title: "\u6797\u7531\u5948", value: "/actors/qPer" },
  { title: "\u51db\u97f3\u6843\u82b1", value: "/actors/Xzr5" },
  { title: "\u94c3\u6751\u7231\u91cc", value: "/actors/nRKm" },
  { title: "\u94c3\u6728\u5fc3\u6625", value: "/actors/b7A0" },
  { title: "\u94c3\u6728\u771f\u5915", value: "/actors/MEYQ" },
  { title: "\u94c3\u539f\u7231\u871c\u8389", value: "/actors/98Yp" },
  { title: "\u67f3\u7f8e\u5fe7", value: "/actors/N20b" },
  { title: "\u82a6\u540d\u5c24\u8389\u5a05", value: "/actors/4vyE" },
  { title: "\u9ebb\u4ed3\u5fe7", value: "/actors/exkz" },
  { title: "\u9ebb\u91cc\u68a8\u590f", value: "/actors/G9P5" },
  { title: "\u9ebb\u7f8e\u7531\u771f", value: "/actors/ex3z" },
  { title: "\u9ebb\u751f\u5e0c", value: "/actors/dx6M" },
  { title: "\u7f8e\u6ce2\u6c99\u8036", value: "/actors/QB6K" },
  { title: "\u7f8e\u8c37\u6731\u91cc", value: "/actors/gyRE" },
  { title: "\u7f8e\u54b2\u4f73\u5948", value: "/actors/8Nqa" },
  { title: "\u7f8e\u7af9\u94c3", value: "/actors/z407" },
  { title: "\u68a6\u4e43\u7231\u534e", value: "/actors/AbBK" },
  { title: "\u5f25\u751f\u7f8e\u6708", value: "/actors/Jekq" },
  { title: "\u660e\u91cc\u53cb\u9999", value: "/actors/06nE" },
  { title: "\u660e\u91cc\u4337", value: "/actors/M4Q7" },
  { title: "\u660e\u65e5\u82b1\u7eee\u7f57", value: "/actors/wm9B" },
  { title: "\u6728\u5357\u65e5\u83dc", value: "/actors/W1xR" },
  { title: "\u7267\u6751\u5f69\u9999", value: "/actors/Qka8" },
  { title: "\u5357\u68a8\u592e\u5948", value: "/actors/QvZ4" },
  { title: "\u4e03\u6d77\u8482\u5a1c", value: "/actors/gbbZ" },
  { title: "\u4e03\u6d77\u5c24\u4e9a", value: "/actors/Akb0" },
  { title: "\u4e03\u6fd1\u7231\u91cc", value: "/actors/5BeM" },
  { title: "\u4e03\u68ee\u8389\u8389", value: "/actors/Ewa2" },
  { title: "\u4e03\u5b9e\u91cc\u83dc", value: "/actors/PwOE" },
  { title: "\u4e03\u6cfd\u7f8e\u4e9a", value: "/actors/NPD3" },
  { title: "\u9f50\u85e4\u7f8e\u4f18", value: "/actors/peAb" },
  { title: "\u7948\u91cc\u5e0c\u6f84", value: "/actors/ZPaV" },
  { title: "\u5343\u4e43\u674f\u7f8e", value: "/actors/kq86" },
  { title: "\u5e72\u7acb\u590f", value: "/actors/g7ym" },
  { title: "\u6d45\u7530\u7ed3\u68a8", value: "/actors/pV3E" },
  { title: "\u6865\u672c\u4e3d\u534e", value: "/actors/Nq7B" },
  { title: "\u9752\u5c71\u534e", value: "/actors/RZPR" },
  { title: "\u6e05\u57ce\u96ea", value: "/actors/bx2E" },
  { title: "\u4e18\u54b2\u7231\u7c73\u8389", value: "/actors/NgYx" },
  { title: "\u79cb\u5c71\u7965\u5b50", value: "/actors/eVGM" },
  { title: "\u6cc9\u6c34\u5170", value: "/actors/kPa6" },
  { title: "\u4ec1\u7f8e\u5706\u9999", value: "/actors/de29" },
  { title: "\u65e5\u83dc\u83dc\u82b1\u97f3", value: "/actors/58DY" },
  { title: "\u65e5\u5411\u771f\u51db", value: "/actors/4rw3" },
  { title: "\u8363\u5ddd\u4e43\u4e9a", value: "/actors/5rkM" },
  { title: "\u82e5\u83dc\u5948\u592e", value: "/actors/w49n" },
  { title: "\u82e5\u6708\u7f8e\u8863\u5948", value: "/actors/gDAy" },
  { title: "\u82e5\u6708\u739b\u4e3d\u4e9a", value: "/actors/zVJb" },
  { title: "\u4e09\u5c9b\u5948\u6d25\u5b50", value: "/actors/pk1m" },
  { title: "\u4e09\u6d66\u6b65\u7f8e", value: "/actors/19yv" },
  { title: "\u4e09\u6d66\u60e0\u7406\u5b50", value: "/actors/pkOm" },
  { title: "\u4e09\u4e0a\u60a0\u4e9a", value: "/actors/Av2e" },
  { title: "\u4e09\u539f\u7a57\u9999", value: "/actors/g40m" },
  { title: "\u6da9\u8c37\u679c\u6b65", value: "/actors/R1GK" },
  { title: "\u68ee\u5ddd\u674f\u5948", value: "/actors/3d9" },
  { title: "\u68ee\u6cfd\u4f73\u5948", value: "/actors/A0Qy" },
  { title: "\u7eb1\u7eb1\u539f\u767e\u5408", value: "/actors/9ZAR" },
  { title: "\u7eb1\u4ed3\u771f\u83dc", value: "/actors/J9dd" },
  { title: "\u5c71\u5cb8\u9022\u82b1", value: "/actors/8BDW" },
  { title: "\u4e0a\u539f\u745e\u7a57", value: "/actors/m7Vn" },
  { title: "\u4e0a\u539f\u4e9a\u8863", value: "/actors/2D6w" },
  { title: "\u6df1\u7530\u5948\u5948", value: "/actors/M8kX" },
  { title: "\u6df1\u7530\u548f\u7f8e", value: "/actors/pRMq" },
  { title: "\u795e\u5742\u670b\u5b50", value: "/actors/0317" },
  { title: "\u795e\u6ce2\u591a\u4e00\u82b1", value: "/actors/N74b" },
  { title: "\u795e\u5bab\u5bfa\u5948\u7dd6", value: "/actors/ZzNm" },
  { title: "\u795e\u8c37\u5145\u5e0c", value: "/actors/V933" },
  { title: "\u795e\u5c71\u5948\u5948", value: "/actors/bRe6" },
  { title: "\u795e\u54b2\u8bd7\u7ec7", value: "/actors/vynb" },
  { title: "\u795e\u54b2\u821e", value: "/actors/9kJV" },
  { title: "\u795e\u96ea", value: "/actors/gPQQ" },
  { title: "\u77f3\u539f\u8389\u5948", value: "/actors/Oqd0" },
  { title: "\u8fbb\u672c\u674f", value: "/actors/5J58" },
  { title: "\u5e02\u5ddd\u96c5\u7f8e", value: "/actors/7a4P" },
  { title: "\u67a2\u6728\u8475", value: "/actors/zAmz" },
  { title: "\u53cc\u53f6\u826f\u9999", value: "/actors/M4G1" },
  { title: "\u6c34\u535c\u6a31", value: "/actors/0edE" },
  { title: "\u6c34\u83dc\u4e3d", value: "/actors/de9B" },
  { title: "\u6c34\u5ddd\u84f3", value: "/actors/g7WA" },
  { title: "\u6c34\u65e0\u6fd1\u4f18\u590f", value: "/actors/2VpB" },
  { title: "\u6c34\u54b2\u5361\u83b2", value: "/actors/xvZ8" },
  { title: "\u6c34\u54b2\u841d\u62c9", value: "/actors/OpzD" },
  { title: "\u6c34\u91ce\u671d\u9633", value: "/actors/35re" },
  { title: "\u6c34\u6cfd\u4e43\u4e43", value: "/actors/qDOx" },
  { title: "\u677e\u672c\u83dc\u5948\u5b9e", value: "/actors/YZyp" },
  { title: "\u677e\u672c\u82bd\u4f9d", value: "/actors/94m6" },
  { title: "\u677e\u672c\u4e00\u9999", value: "/actors/AOqm" },
  { title: "\u677e\u4e0b\u7eb1\u8363\u5b50", value: "/actors/6qA7" },
  { title: "\u677e\u96ea\u4f73\u82d7", value: "/actors/eOBz" },
  { title: "\u6843\u8c37\u7ed8\u91cc\u9999", value: "/actors/gwE" },
  { title: "\u6843\u4e43\u6728\u9999\u5948", value: "/actors/0dKX" },
  { title: "\u6843\u54b2\u4f18\u91cc\u83dc", value: "/actors/7x1" },
  { title: "\u85e4\u5ddd\u73b2\u5948", value: "/actors/gDRQ" },
  { title: "\u85e4\u6d66\u60e0", value: "/actors/BWy1" },
  { title: "\u7b39\u4ed3\u674f", value: "/actors/6Pra" },
  { title: "\u5929\u6d77\u7ffc", value: "/actors/N4YG" },
  { title: "\u5929\u6728\u60a0", value: "/actors/e8gp" },
  { title: "\u5929\u4f7f\u8420", value: "/actors/5Oyz" },
  { title: "\u5929\u91ce\u7f8e\u4f18", value: "/actors/RZBg" },
  { title: "\u7530\u4e2d\u67e0\u6aac", value: "/actors/kzx6" },
  { title: "\u901a\u91ce\u672a\u5e06", value: "/actors/05OX" },
  { title: "\u6850\u5d8b\u8389\u4e43", value: "/actors/ne2M" },
  { title: "\u6850\u8c37\u5948\u7eea", value: "/actors/vDN9" },
  { title: "\u63a8\u5ddd\u60a0\u91cc", value: "/actors/ZqB6" },
  { title: "\u671b\u6708\u5f69\u82b1", value: "/actors/NxGN" },
  { title: "\u552f\u4e95\u771f\u5bfb", value: "/actors/nAnV" },
  { title: "\u5c3e\u4e0a\u82e5\u53f6", value: "/actors/WyDQ" },
  { title: "\u4e94\u5341\u5c9a\u661f\u5170", value: "/actors/y3ma" },
  { title: "\u6b66\u85e4\u5f69\u9999", value: "/actors/yAW" },
  { title: "\u821e\u5c9b\u660e\u91cc", value: "/actors/YnK" },
  { title: "\u821e\u54b2\u7f8e\u5a1c", value: "/actors/7bnR" },
  { title: "\u96fe\u5c9b\u91cc\u7dd6\u83dc", value: "/actors/1z5J" },
  { title: "\u96fe\u5c9b\u6a31", value: "/actors/bAra" },
  { title: "\u5915\u7f8e\u7d2b\u82d1", value: "/actors/wBND" },
  { title: "\u897f\u5bab\u68a6", value: "/actors/7BX1" },
  { title: "\u897f\u5bab\u6728\u4e43\u5b9e", value: "/actors/ARE0" },
  { title: "\u897f\u7530\u5361\u8389\u5a1c", value: "/actors/B4br" },
  { title: "\u897f\u6761\u6c99\u7f57", value: "/actors/yzda" },
  { title: "\u897f\u6761\u7409\u7483", value: "/actors/gDWg" },
  { title: "\u897f\u91ce\u7fd4", value: "/actors/gB4E" },
  { title: "\u5e0c\u5c9b\u7231\u91cc", value: "/actors/wK0z" },
  { title: "\u5e0c\u7f8e\u771f\u7531", value: "/actors/P9mN" },
  { title: "\u5e0c\u5d0e\u6d01\u897f\u5361", value: "/actors/dxne" },
  { title: "\u5e0c\u54b2\u5f69", value: "/actors/8VdK" },
  { title: "\u5e0c\u5fd7\u7231\u91ce", value: "/actors/bAGB" },
  { title: "\u590f\u5ddd\u660e", value: "/actors/pxBk" },
  { title: "\u590f\u5e0c\u5357", value: "/actors/XqGM" },
  { title: "\u76f8\u6cfd\u5357", value: "/actors/RAnD" },
  { title: "\u76f8\u6cfd\u4f18\u91cc\u5948", value: "/actors/m94d" },
  { title: "\u9999\u6f84\u679c\u7a57", value: "/actors/MqQQ" },
  { title: "\u9999\u690e\u68a8\u4e9a", value: "/actors/YZm6" },
  { title: "\u9999\u82d7\u73b2\u97f3", value: "/actors/n4d6" },
  { title: "\u9999\u897f\u54b2", value: "/actors/JMZ2" },
  { title: "\u7fd4\u7530\u5343\u91cc", value: "/actors/REr7" },
  { title: "\u5411\u4e95\u84dd", value: "/actors/OgK" },
  { title: "\u5c0f\u4ed3\u5948\u5948", value: "/actors/1xx4" },
  { title: "\u5c0f\u5c9b\u5357", value: "/actors/A2Q0" },
  { title: "\u5c0f\u8c37\u5b9e", value: "/actors/2K6W" },
  { title: "\u5c0f\u6817\u8420\u4e2d", value: "/actors/XVba" },
  { title: "\u5c0f\u6cc9\u65e5\u5411", value: "/actors/bb0B" },
  { title: "\u5c0f\u897f\u60a0", value: "/actors/pY3Z" },
  { title: "\u5c0f\u897f\u771f\u7406\u60e0", value: "/actors/5Dn9" },
  { title: "\u5c0f\u91ce\u5bfa\u68a8\u7eb1", value: "/actors/N2D4" },
  { title: "\u5c0f\u91ce\u5915\u5b50", value: "/actors/0x0v" },
  { title: "\u5c0f\u65e9\u5ddd\u601c\u5b50", value: "/actors/z964" },
  { title: "\u5c0f\u6cfd\u739b\u5229\u4e9a", value: "/actors/78EM" },
  { title: "\u7be0\u5d0e\u6faa", value: "/actors/eVZx" },
  { title: "\u7b7f\u7530\u6b65\u7f8e", value: "/actors/5R56" },
  { title: "\u7b7f\u7530\u4f18", value: "/actors/WE4e" },
  { title: "\u5fc3\u82b1\u7531\u7f57", value: "/actors/kaRJ" },
  { title: "\u65b0\u4e95\u7231\u4e3d", value: "/actors/rD3r" },
  { title: "\u65b0\u6709\u83dc", value: "/actors/RJM8" },
  { title: "\u661f\u7a7a\u8420\u7231", value: "/actors/E2x2" },
  { title: "\u661f\u4e43\u6708", value: "/actors/J2Kx" },
  { title: "\u661f\u5948\u7231", value: "/actors/GMN7" },
  { title: "\u661f\u54b2\u4f36\u7f8e", value: "/actors/zKJQ" },
  { title: "\u661f\u91ce\u5a1c\u7f8e", value: "/actors/1B29" },
  { title: "\u718a\u4ed3\u7965\u5b50", value: "/actors/x01E" },
  { title: "\u7eea\u5948\u840c", value: "/actors/xrYn" },
  { title: "\u91ce\u91ce\u5bab\u7f8e\u91cc", value: "/actors/deAQ" },
  { title: "\u53f6\u6708\u4e03\u6fd1", value: "/actors/y060" },
  { title: "\u4e00\u6761\u7eee\u7f8e\u9999", value: "/actors/VgzW" },
  { title: "\u4f0a\u4e1c\u5343\u5948\u7f8e", value: "/actors/1014" },
  { title: "\u4f0a\u85e4\u821e\u96ea", value: "/actors/YgJx" },
  { title: "\u97f3\u6893", value: "/actors/XxvJ" },
  { title: "\u6a31\u6728\u51db", value: "/actors/D042" },
  { title: "\u6a31\u6728\u4f18\u5e0c\u97f3", value: "/actors/J9O8" },
  { title: "\u6a31\u7a7a\u6843", value: "/actors/bvWB" },
  { title: "\u6a31\u7f8e\u96ea", value: "/actors/JqQ8" },
  { title: "\u6a31\u8420\u5b50", value: "/actors/Vk3W" },
  { title: "\u6a31\u7531\u7f57", value: "/actors/YbZ8" },
  { title: "\u9e70\u5bab\u552f", value: "/actors/reRN" },
  { title: "\u6c38\u4e95\u739b\u4e3d\u4e9a", value: "/actors/Bxw4" },
  { title: "\u6c38\u4e95\u7f8e\u96cf", value: "/actors/79BR" },
  { title: "\u6c38\u4e95\u5807", value: "/actors/W4Q7" },
  { title: "\u6c38\u6fd1\u552f", value: "/actors/MxZP" },
  { title: "\u6c38\u6fd1\u672a\u8420", value: "/actors/Rr3K" },
  { title: "\u6c38\u91ce\u4e00\u590f", value: "/actors/NeOr" },
  { title: "\u4f18\u6708\u771f\u91cc\u5948", value: "/actors/Zyyq" },
  { title: "\u7531\u7231\u53ef\u5948", value: "/actors/pPQq" },
  { title: "\u53cb\u7530\u5f69\u4e5f\u9999", value: "/actors/dENv" },
  { title: "\u6709\u5742\u6df1\u96ea", value: "/actors/kJYJ" },
  { title: "\u6709\u82b1\u8420", value: "/actors/QYJn" },
  { title: "\u6709\u539f\u6b65\u7f8e", value: "/actors/bv9A" },
  { title: "\u67da\u6728\u8482\u5a1c", value: "/actors/33nb" },
  { title: "\u67da\u6708\u5411\u65e5\u8475", value: "/actors/7BQJ" },
  { title: "\u5b87\u91ce\u681e\u83dc", value: "/actors/AMgm" },
  { title: "\u7fbd\u7530\u5e0c", value: "/actors/qJ96" },
  { title: "\u7fbd\u54b2\u7f8e\u6674", value: "/actors/p7nE" },
  { title: "\u5706\u57ce\u77b3", value: "/actors/1xQd" },
  { title: "\u539f\u5343\u5c81", value: "/actors/RYN8" },
  { title: "\u56ed\u7530\u7f8e\u6a31", value: "/actors/QE4G" },
  { title: "\u6708\u672c\u7231", value: "/actors/GOX2" },
  { title: "\u65e9\u5ddd\u6fd1\u91cc\u5948", value: "/actors/eOAp" },
  { title: "\u65e9\u4e59\u5973\u552f", value: "/actors/7P3P" },
  { title: "\u6cfd\u6751\u4e3d\u5b50", value: "/actors/Ak6e" },
  { title: "\u658b\u85e4\u7f8e\u7ec7", value: "/actors/nVBM" },
  { title: "\u957f\u8c37\u5ddd\u7559\u8863", value: "/actors/GW77" },
  { title: "\u771f\u6728\u4eca\u65e5\u5b50", value: "/actors/Y3MD" },
  { title: "\u7ec7\u7530\u771f\u5b50", value: "/actors/Oq2y" },
  { title: "\u4e2d\u6751\u667a\u6167", value: "/actors/GwQJ" },
  { title: "\u51a2\u7530\u8bd7\u7ec7", value: "/actors/pN8k" },
  { title: "\u4ef2\u91cc\u7eb1\u7fbd", value: "/actors/WKMq" },
  { title: "\u6e1a\u5149\u8389", value: "/actors/EPJJ" },
  { title: "\u6e1a\u5149\u5e0c", value: "/actors/YJeb" },
  { title: "\u594f\u97f3\u82b1\u97f3", value: "/actors/ewAz" },
  { title: "\u4f50\u4ed3\u7eca", value: "/actors/pRDB" },
  { title: "\u4f50\u4ed3\u5b81\u5b81", value: "/actors/pR49" },
  { title: "\u4f50\u5c71\u7231", value: "/actors/PO5v" },
  { title: "\u4f50\u85e4\u7231\u7406", value: "/actors/6PyK" },
  { title: "\u4f50\u85e4\u9065\u5e0c", value: "/actors/k794" },
  { title: "\u4f50\u4f50\u6ce2\u7eeb", value: "/actors/M15A" },
  { title: "\u4f50\u4f50\u6728\u660e\u5e0c", value: "/actors/ZOM6" },
  { title: "AIKA", value: "/actors/RXbR" },
  { title: "JULIA", value: "/actors/1KBW" },
  { title: "NAOMI", value: "/actors/X4me" },
  { title: "\u8475\u73b2\u5948", value: "/actors/K5EM" },
  { title: "\u6893\u5e0c", value: "/actors/exMr" },
  { title: "\u5343\u5948\u7f8e", value: "/actors/3mWD" },
  { title: "\u590f\u76ee\u7231\u68a8", value: "/actors/JOr3" },
  { title: "\u4e03\u6fd1\u9ebb\u8863", value: "/actors/9wKX" },
  { title: "\u65e5\u5411\u6faa", value: "/actors/ARDP" },
  { title: "\u5915\u65e5\u83dc\u90a3", value: "/actors/kAzm" },
];

var JAVDB_SERIES_OPTIONS = [
  { title: "\u7d20\u4ebaTV\u8c6a\u534e\u7248", value: "/series/M4nJ" },
  { title: "\u6301\u7eed\u6027\u4ea4", value: "/series/3nEN" },
  { title: "\u3010\u521d\u6b21\u62cd\u6444\u3011\u7f51\u4e0a\u5e94\u52dfAV\u4f53\u9a8c\u62cd\u6444", value: "/series/rY2v" },
  { title: "\u3010\u6d41\u51fa\u5f71\u50cf\u3011\u5973\u5b66\u751f\u793e\u56e2\u5408\u5bbf\u6027\u7231", value: "/series/0w2k" },
  { title: "Fashion", value: "/series/Zx8V" },
  { title: "\u67d0\u67d0\u7cbe\u9009", value: "/series/8XG5" },
  { title: "\u67d0\u67d0NTR", value: "/series/Yq0b" },
  { title: "\u51fa\u501f\u67d0\u67d0", value: "/series/x9O" },
  { title: "\u6211\u53d8\u6210\u4e86\u67d0\u67d0", value: "/series/Yez" },
  { title: "\u67d0\u67d0\u662f\u6211\u7684\u5973\u53cb", value: "/series/d2M" },
  { title: "\u67d0\u67d0\u7cbe\u90094\u5c0f\u65f6", value: "/series/RKqK" },
  { title: "\u6570\u5206\u949f\u4e0d\u505c\u62cd\u6444", value: "/series/Gwmz" },
  { title: "\u6570\u5341\u5c81\u7684\u6027", value: "/series/5Emz" },
  { title: "100\u65e5\u5143\u7279\u4ef7", value: "/series/rnxZ" },
  { title: "100\u65e5\u5143\u7279\u4ef7\uff08\u767e\u82b1\u6620\u753b/\u827e\u66fc\u7ebd\uff09", value: "/series/DAAk" },
  { title: "120%\u771f\u5b9e\u642d\u8baa", value: "/series/nzDw" },
  { title: "17\u5c81\u7981\u4ee4", value: "/series/YnVD" },
  { title: "2\u789f\u88c58\u5c0f\u65f6\uff08\u5b9d\u6620\u50cf\uff09", value: "/series/XYA5" },
  { title: "\u53ea\u5269\u4e24\u4e2a\u4eba\u4e4b\u540e\u2026", value: "/series/Xg2G" },
  { title: "3.1\u6b21\u5143AV", value: "/series/7Pw1" },
  { title: "3D\u79c1\u62cdVR\u6539", value: "/series/DKwM" },
  { title: "43\u5c81\u53d8\u6001\u6444\u540c\u00d7\u7d20\u4eba\u89d2\u8272\u626e\u6f14\uff08\u5168\u65e5\u672c\u6444\u540c\u534f\u540c\u7ec4\u5408/\u5984\u60f3\u65cf\uff09", value: "/series/gP2y" },
  { title: "\u7231 \u865a\u62df\u81ea\u6170", value: "/series/ZxYm" },
  { title: "\u6211\u4eec\u7684\u719f\u5973", value: "/series/qb4D" },
  { title: "\u4e0d\u62d4\u51fa\u768414\u53d1\u4e2d\u51fa", value: "/series/PPvX" },
  { title: "\u4e00\u76f4\u88ab\u62bd\u63d2\u7684\u4e00\u6cca\u4e24\u65e5", value: "/series/1A1A" },
  { title: "\u5728\u767e\u6218\u642d\u8baa\u5e08\u7684\u623f\u95f4\u91cc\u5e26\u56de\u5bb6\u6027\u7231\u5077\u62cd", value: "/series/gq5y" },
  { title: "\u7206\u4e73\u767e\u95fb\u4e0d\u5982\u4e00\u89c1", value: "/series/wAb" },
  { title: "\u4e0b\u6d41\u8bed\u5973\u4eba", value: "/series/wqXY" },
  { title: "\u771f\u5b9e\u53d1\u751f\u8fc7\u7684\u8272\u60c5\u6545\u4e8b", value: "/series/223Z" },
  { title: "\u53bb\u4e86\u4e0d\u505a\u63d2\u5165\u7684\u57ab\u4e0a\u98ce\u4fd7\uff0c\u51fa\u6765\u7684\u5374\u662f\u2026", value: "/series/wqab" },
  { title: "\u771f\u4eba\u4eba\u59bb\uff08\u7792\u7740\u4e08\u592b\u4f53\u9a8cAV\uff09", value: "/series/m9Rr" },
  { title: "\u672c\u4e2d-VR", value: "/series/EJM9" },
  { title: "\u672c\u4e2d\u7cbe\u9009", value: "/series/0670" },
  { title: "\u672c\u4e2d\u51fa\u9053", value: "/series/06A7" },
  { title: "\u7792\u7740\u5973\u53cb\u4e5f\u548c\u5979\u5988\u5988\u505a\u4e86\u2026", value: "/series/zBbE" },
  { title: "\u5973\u53cb\u7684\u59d0\u59d0\u7528\u5de8\u4e73\u548c\u4e2d\u51faOK\u8bf1\u60d1\u6211", value: "/series/8Vza" },
  { title: "\u5c55\u793a\u52c3\u8d77\u7684\u60c5\u5883", value: "/series/vr99" },
  { title: "\u5e26\u56de\u623f\u95f4\u75af\u72c2\u505a\u7231\u7684\u90a3\u4ef6\u4e8b", value: "/series/Bg74" },
  { title: "\u8d85\u672c\u683c\u60c5\u8272\u7ed8\u5377\uff08\u5b9d\u6620\u50cf\uff09", value: "/series/Yw3D" },
  { title: "\u8d85\u9ad8\u7ea7\u4e2d\u51fa\u4e13\u95e8\u6ce1\u6ce1\u6d74", value: "/series/Yn0b" },
  { title: "\u8d85\u6fc0\u70c8\u6027\u4ea4", value: "/series/RXg8" },
  { title: "\u4ece\u65e9\u5230\u665a\u4e2d\u51fa\u6027\u7231", value: "/series/AzRe" },
  { title: "\u559d\u5230\u5929\u4eae\u7684\u8fde\u73af\u9152", value: "/series/AKB0" },
  { title: "\u75f4\u6c49\u7535\u8f66\uff08\u795e\u56de\uff09", value: "/series/92yV" },
  { title: "\u75f4\u6c49\u8bb0\u5f55\u65e5\u8bb0", value: "/series/JMrR" },
  { title: "\u75f4\u6c49\u5077\u62cd\uff06\u4e2d\u51fa\u7d20\u5973\u4eba\u5a9a\u836f\u7cbe\u6cb9\u6309\u6469", value: "/series/8qvd" },
  { title: "\u803b\u8fb1\u3001\u51cc\u8fb1\u3001\u8df3\u86cb\u4f69\u6234\u00b7\u95f9\u5e02\u7ea6\u4f1a", value: "/series/NXBb" },
  { title: "\u4ee4\u4eba\u5bb3\u7f9e\u7684\u8eab\u4f53", value: "/series/p3Ke" },
  { title: "\u548c\u61a7\u61ac\u7684\u5973\u4e0a\u53f8", value: "/series/eO6E" },
  { title: "\u89c1\u9762\u6570\u79d2\u5c31\u5408\u4f53", value: "/series/emr" },
  { title: "\u4eba\u59bb\u521d\u6b21\u62cd\u6444\uff0c\u518d\u4e00\u6b21", value: "/series/AkkP" },
  { title: "\u4eba\u59bb\u521d\u6b21\u62cd\u6444\u7eaa\u5f55\u7247", value: "/series/GMwb" },
  { title: "\u4e94\u5341\u5c81\u4eba\u59bb\u521d\u6b21\u62cd\u6444\u7eaa\u5f55\u7247", value: "/series/yrdv" },
  { title: "\u521d\u88f8 virgin nude", value: "/series/gGN" },
  { title: "\u521d\u4f53\u9a8c\u6570\u6b21\u63d2\u5165\u7279\u522b\u7bc7", value: "/series/5nR8" },
  { title: "\u521d\u6b21\u8131\u8863\u719f\u5973", value: "/series/AJ0" },
  { title: "\u7eaf\u7cfb\u8ff7\u5bab", value: "/series/xrdg" },
  { title: "\u62cd\u5b8c\u5373\u51fa\uff01\u9b54\u955c\u53f7", value: "/series/RPMn" },
  { title: "\u957f\u5927\u540e\u5c31\u53bbCenter Village", value: "/series/WkZ" },
  { title: "\u5927\u4eba\u7684AV", value: "/series/Rdkm" },
  { title: "\u4ee3\u4ee3\u6728\u5fe0", value: "/series/wmXB" },
  { title: "\u5077\u62cd\u7eaa\u5f55\u7247\u5927\u5168", value: "/series/qdp9" },
  { title: "\u8c03\u6559\u7eaa\u5f55\u7247", value: "/series/pq9w" },
  { title: "\u804c\u573a\u5973\u4eba", value: "/series/29rq" },
  { title: "\u6355\u83b7\u804c\u573a\u5973\u4eba", value: "/series/AqNP" },
  { title: "\u804c\u573a\u8d85M\u5c0f\u59d0", value: "/series/pqd9" },
  { title: "\u72ec\u5360\uff01\u4eba\u59bb\u7279\u522b\u7bc7", value: "/series/ZNXJ" },
  { title: "\u72ec\u5360\u9171", value: "/series/GBzm" },
  { title: "\u76f4\u5230\u5815\u843d\u2026", value: "/series/2qw" },
  { title: "\u65e0\u5fb7\u8272\u60c5\u533b\u751f\u5077\u62cd", value: "/series/e28d" },
  { title: "\u653e\u5b66\u540e\u7f8e\u5c11\u5973\u56de\u6625\u6309\u6469", value: "/series/QV54" },
  { title: "\u653e\u5b66\u540e\u662f\u4f2a\u5a18", value: "/series/KNOm" },
  { title: "\u975e\u65e5\u5e38\u7684\u95f7\u7edd\u6e38\u620f", value: "/series/8Ax" },
  { title: "\u98ce\u4fd7\u4e2d\u51fa\u6027\u7231", value: "/series/e2vE" },
  { title: "\u592b\u59bb\u4e00\u8d77\u6311\u6218", value: "/series/zMg4" },
  { title: "\u548c\u4e08\u592b\u505a\u5b8c\u9020\u4eba\u540e\uff0c\u603b\u662f\u7ee7\u7eed\u88ab\u516c\u516c\u4e2d\u51fa\u2026", value: "/series/YZkB" },
  { title: "\u5728\u4e08\u592b\u773c\u524d\u88ab\u4fb5\u72af", value: "/series/MbX" },
  { title: "\u88ab\u4e08\u592b\u4e0a\u53f8\u8fde\u7eed\u4fb5\u72af\u5230\u7b2c7\u5929\uff0c\u6211\u5931\u53bb\u4e86\u7406\u6027\u2026", value: "/series/65vn" },
  { title: "\u7236\u4eb2\u51fa\u95e82\u79d2\u5c31\u5f00\u59cb\u505a\u7231\u7684\u6bcd\u5b50", value: "/series/96gw" },
  { title: "\u590d\u523b\u7cbe\u9009", value: "/series/vDAW" },
  { title: "\u592a\u8fc7\u654f\u611f\u5c3f\u51fa\u6765\u4e86\u5bf9\u4e0d\u8d77\u2026", value: "/series/8RE" },
  { title: "\u9ad8\u7ea7\u548c\u98ce\u6ce1\u6ce1\u6d74", value: "/series/RZdn" },
  { title: "\u6b4c\u821e\u4f0e\u753a\u6574\u4f53\u6cbb\u7597\u9662", value: "/series/8qpx" },
  { title: "\u4e2a\u4eba\u62cd\u6444\u642d\u8baa", value: "/series/aw6n" },
  { title: "\u76ef\u4e0a\u5a46\u5a46\u8fc7\u4e8e\u4e0b\u6d41\u5de8\u4e73\u7684\u5973\u5a7f", value: "/series/8NNW" },
  { title: "\u9b3c\u9ad8\u6f6e", value: "/series/NQPB" },
  { title: "\u9b3c\u53e3\u4ea4\u5730\u72f1", value: "/series/6JE" },
  { title: "\u9ed1\u4eba\u5de8\u5927\u8089\u68d2 VS", value: "/series/p49m" },
  { title: "\u6df7\u6d74\u5fc3\u60c5", value: "/series/7y7M" },
  { title: "\u6781\u4e0a\uff01\uff01\u67d0\u67d0\u592a\u592a\u521d\u6b21\u8131\u8863AV\u7eaa\u5f55\u7247", value: "/series/8VZd" },
  { title: "\u5bb6\u755c\u6536\u85cf\u5bb6", value: "/series/MBV1" },
  { title: "\u53ef\u4ee5\u9001\u4f60\u56de\u5bb6\u5417\uff1f", value: "/series/xPkQ" },
  { title: "\u548c\u4e08\u6bcd\u5a18\u7684\u7981\u65ad\u6027\u4ea4", value: "/series/xr6A" },
  { title: "\u4ea4\u878d\u7684\u4f53\u6db2\uff0c\u6d53\u5bc6\u6027\u7231", value: "/series/5EQa" },
  { title: "\u697c\u68af\u95f4\u5973\u5b66\u751f", value: "/series/MnA4" },
  { title: "\u8857\u89d2\u7d20\u4eba\u89c2\u5bdf", value: "/series/Jg7d" },
  { title: "\u8857\u89d2\u7d20\u4eba\u67d0\u67d0\u9891\u9053", value: "/series/02X3" },
  { title: "\u8857\u89d2\u7d20\u4eba\u642d\u8baa", value: "/series/MqM1" },
  { title: "\u8857\u89d2\u7d20\u4eba\u642d\u8baa\uff01", value: "/series/QWR8" },
  { title: "\u8bf7\u8def\u4e0a\u7684\u59d0\u59d0\u4ecb\u7ecd\u4e00\u70b9\u8272\u60c5\u670b\u53cb\uff0c\u6709\u65f6\u6709\u6709\u65f6\u6ca1\u6709", value: "/series/x0pQ" },
  { title: "\u642d\u8baa\u8def\u4e0a\u540d\u5a9b\u4eba\u59bb\u56de\u5bb6\u62cdAV\uff01\u5728\u4e08\u592b\u4e0d\u5728\u7684\u5bb6\u91cc\u80cc\u5fb7\u4e2d\u51fa", value: "/series/R2gz" },
  { title: "\u4eca\u5929\u8981\u4e0d\u8981\u7fd8\u73ed\uff1f", value: "/series/e26z" },
  { title: "\u91d1\u53d1\u8272\u60c5", value: "/series/kyZ4" },
  { title: "\u7d27\u7f1a\u8c03\u6559\u59bb", value: "/series/zeP7" },
  { title: "\u8fd1\u4eb2\uff3b\u65e0\u8a00\uff3d\u76f8\u5978", value: "/series/dev5" },
  { title: "\u8fd1\u4eb2\u76f8\u5978", value: "/series/mebY" },
  { title: "\u8fd1\u4eb2\u76f8\u5978 \u7ed9\u5988\u5988\u9634\u9053\u4e2d\u51fa", value: "/series/aqkX" },
  { title: "\u8fd1\u4eb2\u76f8\u5978\uff08VENUS\uff09", value: "/series/J0N8" },
  { title: "\u8fd1\u4eb2\u76f8\u5978\u5e7b\u6bcd INCEST", value: "/series/7ywZ" },
  { title: "\u8fd1\u4eb2\u76f8\u5978\u7ed9\u5988\u5988\u9634\u9053\u4e2d\u51fa", value: "/series/zW" },
  { title: "\u7981\u65ad\u770b\u62a4", value: "/series/8MK" },
  { title: "\u6c42\u804c\u6d3b\u52a8\u6863\u6848", value: "/series/WPgq" },
  { title: "\u5de8\u4e73\u00b7\u7206\u4e73", value: "/series/Q2p" },
  { title: "\u5de8\u4e73\u5916\u9001\u98ce\u4fd7", value: "/series/O29B" },
  { title: "\u7edd\u5bf9\u7f8e\u5c11\u5973\uff0c\u51fa\u501f\u7ed9\u4f60", value: "/series/pk5" },
  { title: "\u7edd\u5bf9\u60f3\u8ba9\u4f60\u770b\uff01\uff01MBM\u5c71\u53e3\u793e\u957f\u4e25\u9009\u672c\u6708\u63a8\u83503\u90e8\u5957\u88c5", value: "/series/Bpaa" },
  { title: "\u957f\u7740\u53ef\u7231\u7684\u8138\u5374\u662f\u5927\u5c41\u80a1", value: "/series/akG4" },
  { title: "\u53e3\u5185 Queen", value: "/series/8OZV" },
  { title: "\u53e3\u5185\u5973\u738b", value: "/series/PygE" },
  { title: "\u542b\u6cea\u4e0d\u505c\u5f3a\u5236\u9ad8\u6f6e\u6027\u7231", value: "/series/AJOy" },
  { title: "\u5730\u4e0b\u91d1\u53d1\u65e0\u5957\u63d2\u5165", value: "/series/ZN5V" },
  { title: "\u604b\u591c", value: "/series/MmrR" },
  { title: "\u604b\u7231\u4e11\u95fb", value: "/series/Kp3b" },
  { title: "\u88f8\u4f53\u4e3b\u5987", value: "/series/vK9" },
  { title: "\u5988\u5988\u7684\u95fa\u871c", value: "/series/GZ9q" },
  { title: "\u9ebb\u836f\u641c\u67e5\u5b98", value: "/series/MmXQ" },
  { title: "\u7f8e\u5c11\u5973\u5373\u63d2\u767d\u76ae\u4e66", value: "/series/Mb4k" },
  { title: "\u7f8e\u5c11\u5973\u4eba\u683c\u77eb\u6b63\u7cfb\u5217", value: "/series/wDGz" },
  { title: "\u7f8e\u719f\u5973\u7cbe\u9009", value: "/series/mpJy" },
  { title: "\u59b9\u59b9\u7684\u7206\u4e73\u767e\u95fb\u4e0d\u5982\u4e00\u89c1\uff08Cherries Rebo\uff09", value: "/series/J6Zx" },
  { title: "\u5e94\u52df\u7684\u840c\u7cfb\u5c11\u5987", value: "/series/aeEW" },
  { title: "\u79d8\u5bc6\u641c\u67e5\u5b98\u4e4b\u5973", value: "/series/V47z" },
  { title: "\u8d34\u8eab\u5b9e\u62cd \u4eba\u59bb\u51fa\u8f68\u65c5\u884c", value: "/series/WVqp" },
  { title: "\u8d34\u8eab\u6027\u7231", value: "/series/mQED" },
  { title: "\u540d\u4f5c\u8272\u60c5", value: "/series/p4mE" },
  { title: "\u9b54\u6cd5\u7cbe\u6cb9\u6309\u6469", value: "/series/Ndvg" },
  { title: "\u9b54\u955c\u53f7\uff0c\u6211\u5c31\u5728\u8f66\u5185\u5de5\u4f5c\u4f46\u4f60\u770b\u4e0d\u5230", value: "/series/Pm9" },
  { title: "\u6bcd\u5978\u4e2d\u51fa", value: "/series/ZNYX" },
  { title: "\u6bcd\u5b50\u5978", value: "/series/GJqz" },
  { title: "\u6bcd\u5b50\u4ea4\u5c3e", value: "/series/89W" },
  { title: "\u6bcd\u4eb2\u7684\u53cb\u4eba", value: "/series/neD4" },
  { title: "\u661f\u671f\u56db\u7684\u54c8\u547c\u54c8\u547c", value: "/series/mbQR" },
  { title: "\u5e94\u52df\u9171 \uff5e\u62db\u52df\u4e00\u822c\u7d20\u4eba\u5973\u6027\uff5e", value: "/series/EmQ0" },
  { title: "\u4f2a\u5a18\uff0c\u5b8c\u5168\u96cc\u5316\u5408\u96c6", value: "/series/DKma" },
  { title: "\u7537\u4eba\u53ea\u6709\u6211\u4e00\u4e2a", value: "/series/P2mN" },
  { title: "\u6d53\u539a\u63a5\u543b\u4e0e\u6027\u7231", value: "/series/XW4J" },
  { title: "\u5974\u96b6\u8272\u821e\u53f0", value: "/series/wDD" },
  { title: "\u5973\u5bfc\u6f14\u6625\u5948\u7684\u7d20\u4eba\u5973\u540c\u642d\u8baa", value: "/series/K4aA" },
  { title: "\u5973\u6559\u5e08\u5e38\u53bb\u7684\u6574\u4f53\u7406\u7597\u9662", value: "/series/14xY" },
  { title: "\u5973\u5c3b", value: "/series/eQN" },
  { title: "\u5973\u4f53\u62f7\u95ee\u7814\u7a76\u6240", value: "/series/9N5" },
  { title: "\u5973\u4f53\u56fe\u9274", value: "/series/ebAr" },
  { title: "\u5973\u4f18\u7cbe\u9009\uff08MOODYZ\uff09", value: "/series/Q2XG" },
  { title: "\u5973\u804c\u5458\u91ce\u7403\u62f3", value: "/series/0dx7" },
  { title: "\u5973\u5b66\u751f\u76d1\u7981\u51cc\u8fb1 \u9b3c\u755c\u8f6e\u5978", value: "/series/J14A" },
  { title: "\u5973\u5b66\u751f\u76d1\u7981\u51cc\u8fb1\u9b3c\u755c\u8f6e\u5978", value: "/series/1y9" },
  { title: "\u88ab\u6d3e\u9063\u6309\u6469\u5e08\u8fc7\u5206\u89e6\u78b0\u79c1\u5904\uff0c\u53d7\u4e0d\u4e86\u5feb\u611f\u800c\u88ab\u7761\u8d70", value: "/series/YNpz" },
  { title: "\u60f3\u770b\u770b\u6211\u4e0d\u8ba4\u8bc6\u7684\u90a3\u4e2a\u59bb\u5b50\u2026", value: "/series/Z4z8" },
  { title: "\u8bf7\u542c\u6211\u88ab\u7eff\u7684\u6545\u4e8b", value: "/series/me1y" },
  { title: "\u5bf9\u59bb\u5b50\u6b7b\u4e5f\u4e0d\u6562\u8bf4\uff0c\u5c45\u7136\u628a\u5cb3\u6bcd\u5f04\u6000\u5b55\u4e86\u2026", value: "/series/746Z" },
  { title: "\u671f\u95f4\u9650\u5b9a\u719f\u5973\u5957\u88c5", value: "/series/enJM" },
  { title: "\u6f02\u4eae\u53c8\u4e0b\u6d41\u7684\u53d4\u6bcd", value: "/series/29m" },
  { title: "\u5f3a\u5236\u7edd\u9876\u60e8\u53eb\u62f7\u95ee\u8c03\u6559", value: "/series/E6DJ" },
  { title: "\u4eb2\u65cf\u76f8\u5978", value: "/series/0e8J" },
  { title: "\u88ab\u7761\u8d70\u64ad\u79cd\u538b\u5236", value: "/series/nqv4" },
  { title: "\u9752\u5c71\u7325\u4eb5\u7f8e\u5bb9\u6c99\u9f99", value: "/series/A9mP" },
  { title: "\u6e05\u7eaf\u7f16\u5e74\u53f2", value: "/series/J4Z3" },
  { title: "\u5168\u56fd\u4eba\u59bb\u60c5\u8272\u56fe\u9274", value: "/series/9qmE" },
  { title: "\u5168\u56fd\u719f\u5973\u641c\u7d22\u961f", value: "/series/akyO" },
  { title: "\u5168\u56fd\u7eb5\u65ad\u300c\u8ba4\u771f\u300d100%\u642d\u8baa \u7d20\u4eba\u592a\u592a\u591a\u8c22\u6b3e\u5f85", value: "/series/qbpr" },
  { title: "\u4eba\u59bb\u803b\u60a6\u65c5\u884c", value: "/series/Rn7" },
  { title: "\u4eba\u59bb\u6c64\u604b\u65c5\u884c", value: "/series/QWDq" },
  { title: "\u4eba\u59bb\u7684\u51fa\u8f68\u5fc3", value: "/series/6dQM" },
  { title: "\u4eba\u59bb\u82b1\u74e3\u7ffb\u5f00", value: "/series/4d1E" },
  { title: "\u4eba\u59bb\u5185\u8863\u5973", value: "/series/A840" },
  { title: "\u4eba\u751f\u521d\u6b21\u604d\u60da\u72b6\u6001 \u6fc0\u70c8\u9ad8\u6f6e\u6027\u7231", value: "/series/P0vr" },
  { title: "\u65e5\u672c\u4eba\u6765\u63d2\u5165", value: "/series/R5Zn" },
  { title: "\u5bf9\u767d\u7699\u5927\u5c41\u80a1\u5bb6\u653f\u963f\u59e8\u5373\u63d2", value: "/series/NpVb" },
  { title: "\u5239\u90a3\u80cc\u5fb7\u65c5\u884c \u4eba\u59bb\u5931\u683c", value: "/series/BP06" },
  { title: "\u820c\u5934\u604b\u7269", value: "/series/Kg4A" },
  { title: "\u795e\u7ade\u6cf3", value: "/series/Yr5z" },
  { title: "\u795e\u7ade\u6cf3\u6cf3\u88c5", value: "/series/BEy9" },
  { title: "\u795e\u5b66\u56ed\u6cf3\u88c5", value: "/series/pzq" },
  { title: "\u795e\u4e1d\u889c", value: "/series/W1OZ" },
  { title: "\u795e\u4f53\u64cd\u88e4", value: "/series/O2bB" },
  { title: "\u65e0\u5957\u62bd\u63d2 PornGirl", value: "/series/rVmD" },
  { title: "\u4e0d\u80fd\u51fa\u58f0\u7684\u7edd\u9876\u8bfe\u7a0b", value: "/series/M4m4" },
  { title: "\u5b9e\u5f55 \u7535\u8f66\u75f4\u6c49\u5f71\u50cf", value: "/series/xP8E" },
  { title: "\u5b9e\u5f55\u00b7\u8fd1\u4eb2\u76f8\u5978", value: "/series/AKdK" },
  { title: "\u65f6\u95f4\u505c\u6b62\u5427", value: "/series/m4D" },
  { title: "\u4e16\u754c\u7684\uff08\u6fc0\u70c8\uff09\u7325\u4eb5\u5a18", value: "/series/r4Gz" },
  { title: "\u719f\u5e74AV\u51fa\u9053\u7eaa\u5f55\u7247", value: "/series/k484" },
  { title: "\u719f\u5973", value: "/series/8PVa" },
  { title: "\u719f\u5973\u4eba\u59bb\u9762\u8bd5\u79c1\u62cd", value: "/series/G4DD" },
  { title: "\u719f\u5973\u8272\u60c5\u65c5", value: "/series/pqJk" },
  { title: "\u719f\u5973\u9650\u5b9a \u719f\u5973\u6765\u5230\u623f\u95f4\uff08\u719f\u5973\u5e93/\u827e\u66fc\u7ebd\uff09", value: "/series/rY5R" },
  { title: "\u719f\u5973\u7684\u51fa\u8f68\u662f\u8ba4\u771f\u7684\u6027\u7231", value: "/series/QJO7" },
  { title: "\u719f\u59bb", value: "/series/O1nA" },
  { title: "\u5176\u5b9e\u6211\u4e00\u76f4\u88ab\u4e08\u592b\u4e0a\u53f8\u4fb5\u72af\u2026", value: "/series/O2mk" },
  { title: "\u79c1\u7acb\u62bd\u63d2\u5973\u5b50\u5927\u5b66", value: "/series/N2E3" },
  { title: "\u6211\u662f\u75f4\u5973", value: "/series/mezD" },
  { title: "\u6574\u5929\u60f3\u8981\u5973\u5a7f\u5927\u8089\u68d2\u7684\u5cb3\u6bcd\u8bf1\u60d1", value: "/series/14mA" },
  { title: "\u7d20\u4eba\u53c2\u52a0\u7efc\u827a", value: "/series/mzAD" },
  { title: "\u7d20\u4eba\u53c2\u52a0\u7efc\u827a", value: "/series/MZGk" },
  { title: "\u7d20\u4eba\u521d\u6b21\u62cd\u6444\u65e0\u5957\u4e2d\u51fa", value: "/series/PJ6v" },
  { title: "\u7d20\u5973\u4eba\uff0c\u51fa\u501f\u7ed9\u4f60", value: "/series/pVb" },
  { title: "\u7d20\u4eba\u5973\u5927\u5b66\u751f", value: "/series/pYy5" },
  { title: "\u7d20\u4eba\u719f\u5973\u4eba\u59bb\u7ed9\u5904\u7537\u7834\u5904", value: "/series/vDkp" },
  { title: "\u7d20\u4eba\u8fd9\u662f\u8c01", value: "/series/9GrV" },
  { title: "\u7d20\u4eba\u56db\u53e0\u534a", value: "/series/ZynP" },
  { title: "\u7d20\u4eba\u9650\u5b9a\uff01\uff08ATOM\uff09", value: "/series/KK77" },
  { title: "\u7d20\u4eba\u63f4\u4ea4\u65e0\u5957\u4e2d\u51fa", value: "/series/gyzm" },
  { title: "\u7d20\u4eba\u6c34\u624b\u670d\u65e0\u5957\u4e2d\u51fa", value: "/series/pk9Z" },
  { title: "\u7d20\u4eba\u642d\u8baa\u4e2d\u51fa", value: "/series/GnEJ" },
  { title: "\u7d20\u4eba\u8d70\u5149 \u5728\u81ea\u5b85\u4e2a\u4eba\u62cd\u6444\u4f1a", value: "/series/pDvw" },
  { title: "\u7d20\u4eba\u547c\u547c \u00d7 MBM", value: "/series/1RZW" },
  { title: "\u6e29\u6cc9\u84b8\u6c14\u8fd1\u4eb2\u76f8\u5978", value: "/series/QN5p" },
  { title: "\u6843\u8272\u5bb6\u65cf", value: "/series/b7RA" },
  { title: "\u7279\u5316VR", value: "/series/AM1P" },
  { title: "\u5929\u82b1\u677f\u7279\u5316\u673a\u4f4d", value: "/series/YGxD" },
  { title: "\u5929\u7136\u6210\u5206\u67d0\u67d0\u6c41100%", value: "/series/89" },
  { title: "\u4e61\u4e0b\u7684\u8fd1\u4eb2\u76f8\u5978", value: "/series/d4vQ" },
  { title: "\u753a\u7530\u955c\u5934\u7684 BLACK KAMEKO \u6863\u6848", value: "/series/wmYD" },
  { title: "\u6295\u7a3f\u4e2a\u4eba\u62cd\u6444 \u6076\u5fc3\u5b85\u7537\u590d\u4ec7\u52a8\u753b", value: "/series/ky9P" },
  { title: "\u6295\u7a3f\u7c89\u4e1d\u4ff1\u4e50\u90e8", value: "/series/Ybx8" },
  { title: "\u7a81\u51fb\u961f\u7279\u522b\u4f01\u5212", value: "/series/9yJ5" },
  { title: "\u5728\u56fe\u4e66\u9986\u4e0d\u80fd\u51fa\u58f0\u3001\u7231\u6db2\u591a\u5230\u62c9\u4e1d\u7684\u654f\u611f\u5a18", value: "/series/wV8B" },
  { title: "\u63a8\u7684\u5973\u5b69\u4ed4\u7ec6\u6765\uff01\u9b54\u955c\u53f7", value: "/series/dgXa" },
  { title: "\u63a8\u7684\u5973\u5b69\u4ed4\u7ec6\u6765\uff01\u53ea\u56f4\u4e00\u6761\u6bdb\u5dfe\uff0c\u8981\u4e0d\u8981\u8fdb\u7537\u6c64\uff1f", value: "/series/mJZn" },
  { title: "\u5b8c\u5168\u79c1\u4eba\u5f71\u50cf", value: "/series/ay9O" },
  { title: "\u5b8c\u719f \u592a\u592a\u865a\u62df\u81ea\u6170", value: "/series/mbzM" },
  { title: "\u5b8c\u5168\u65e0\u5957 STYLE@\u67d0\u67d0", value: "/series/YZJB" },
  { title: "\u5984\u60f3\u4e3b\u89c2", value: "/series/n4kY" },
  { title: "\u5371\u9669\u65e5\u76f4\u51fb\uff01\uff01\u80fd\u9020\u4eba\u7684\u6ce1\u6ce1\u6d74", value: "/series/0RBX" },
  { title: "\u672a\u6210\u5e74(\u6210\u5e74\u6f14\u5458)", value: "/series/zbGz" },
  { title: "\u5fcd\u5f97\u4f4f\u5c31\u65e0\u5957\u4e2d\u51fa\u6027\u7231", value: "/series/DRaJ" },
  { title: "\u6211\u5bb6\u7f8e\u4e3d\u7684\u5a46\u5a46", value: "/series/G45Q" },
  { title: "\u65e0\u7801", value: "/series/uncensored" },
  { title: "\u65e0\u8a00\u67d0\u67d0", value: "/series/VMG" },
  { title: "\u4e94\u661f\u9891\u9053", value: "/series/eOWr" },
  { title: "\u4e0a\u534810\u70b9 \u5b66\u6821\u600e\u4e48\u4e86\u2026", value: "/series/myRZ" },
  { title: "\u821e\u59bb \uff5e\u540d\u5a9b\u4ff1\u4e50\u90e8\uff5e", value: "/series/DV35" },
  { title: "\u574a\u95f4\u4f20\u95fb\u7684\u300c\u79df\u8d41\u963f\u59e8\u300d", value: "/series/6qVD" },
  { title: "\u5c0f\u6076\u9b54\u6311\u9017\u7f8e\u5c11\u5973", value: "/series/14q9" },
  { title: "\u80c1\u8feb\uff08CHoBitcH\uff09", value: "/series/06nv" },
  { title: "\u80c1\u8feb\u5957\u623f", value: "/series/QV6M" },
  { title: "\u65b0\u00b7\u592a\u592a\u7cfb\u5217", value: "/series/0p43" },
  { title: "\u65b0\u00b7\u7edd\u5bf9\u7f8e\u5c11\u5973\uff0c\u51fa\u501f\u7ed9\u4f60", value: "/series/kA6" },
  { title: "\u65b0\u00b7\u7f8e\u4e3d\u719f\u5973\u6c64\u5c4b", value: "/series/EzE2" },
  { title: "\u65b0\u4eba\uff01kawaii*\u4e13\u5c5e\u51fa\u9053", value: "/series/D262" },
  { title: "\u65b0\u4eba\uff08MAXING\uff09", value: "/series/65y0" },
  { title: "\u65b0\u4eba\u00d7\u6781\u9650\u9a6c\u8d5b\u514b", value: "/series/5EYM" },
  { title: "\u65b0\u4eba NO.1 STYLE", value: "/series/5na8" },
  { title: "\u7f9e\u803b\uff01", value: "/series/QNkK" },
  { title: "\u7eed\u00b7\u5f02\u5e38\u6027\u4ea4 \u4e94\u5341\u5c81\u6bcd\u5b50", value: "/series/p4Rm" },
  { title: "\u8ba9\u4e25\u9009\u7f8e\u5c11\u5973\u7a7f\u89d2\u8272\u626e\u6f14\u3001\u6000\u4e0a\u6211\u7684\u5b69\u5b50", value: "/series/POq0" },
  { title: "\u4e00\u822c\u7537\u5973\u89c2\u5bdfAV", value: "/series/X47J" },
  { title: "\u4e00\u7c92\u4e07\u500d", value: "/series/QYGG" },
  { title: "\u4e00\u6d41\u592a\u592a\u642d\u8baa \u540d\u5a9b\u7f8e\u719f\u5973\u4e2d\u51faJAPAN", value: "/series/94Zp" },
  { title: "\u4e00\u6cca\u4e24\u65e5\uff0c\u7f8e\u5c11\u5973\u5b8c\u5168\u9884\u7ea6\u5236", value: "/series/W7" },
  { title: "\u540c\u4e00\u5c4b\u6a90\u4e0b\u7684\u6027\u4ea4", value: "/series/x4yQ" },
  { title: "\u7ee7\u6bcd\u5974\u96b6", value: "/series/W7R" },
  { title: "\u6deb\u4e71 Madam", value: "/series/ZxPP" },
  { title: "\u6deb\u8bed\u75f4\u5973\uff08Dogma\uff09", value: "/series/kp0" },
  { title: "\u6deb\u8bed\u5973\u4e3b\u64ad", value: "/series/3nnD" },
  { title: "\u6deb\u8bed\u4e2d\u51fa\u6ce1\u6ce1\u6d74", value: "/series/9pw" },
  { title: "\u6deb\u8bed\u89e3\u8bf4\u81ea\u6170", value: "/series/5rb8" },
  { title: "\u5e94\u52df\u7d20\u4eba\uff0c\u521d\u6b21AV\u62cd\u6444", value: "/series/5X7D" },
  { title: "\u6c38\u65e0\u6b62\u5883\u7684\u4e2d\u51fa\u8f6e\u5978\u65e5\u5b50", value: "/series/7qAb" },
  { title: "\u670b\u53cb\u7684\u6bcd\u4eb2", value: "/series/76B4" },
  { title: "\u53cb\u4eba\u7684\u6bcd\u4eb2", value: "/series/8V1E" },
  { title: "\u53cb\u4eba\u7684\u6bcd\u4eb2", value: "/series/bKJB" },
  { title: "\u53cb\u4eba\u7684\u59bb\u5b50\u662f\u8d85\u4e0b\u6d41\u5bb6\u5ead\u6559\u5e08", value: "/series/KkdO" },
  { title: "\u8bf1\u60d1\u8bfe\u7a0b", value: "/series/QVW8" },
  { title: "\u6b32\u6c42\u4e0d\u6ee1\u7684\u6bcd\u4eb2\u4e0e\u7edd\u4f26\u513f\u5b50", value: "/series/BAm4" },
  { title: "\u63f4\u5973\u4ea4\u9645", value: "/series/G4q5" },
  { title: "\u6708\u520a\u719f\u5973\u79d8\u5b9d\u9986", value: "/series/82dV" },
  { title: "\u6708\u520a\u60c5\u8272\u65e5\u5386", value: "/series/V9WD" },
  { title: "\u827a\u80fd\u4eba", value: "/series/3nkN" },
  { title: "\u662d\u548c\u7325\u4eb5\u5b98\u80fd\u5267", value: "/series/xg78" },
  { title: "\u771f\u00b7\u5f02\u5e38\u6027\u4ea4", value: "/series/54nM" },
  { title: "\u771f\u6027\u4e2d\u51fa", value: "/series/1Bz4" },
  { title: "\u4e0e\u5236\u670d\u7f8e\u5c11\u5973\u6027\u4ea4", value: "/series/9DRw" },
  { title: "\u5236\u670d\u5f88\u9002\u5408\u7684\u53ef\u7231\u5973\u5b69", value: "/series/Z4P" },
  { title: "\u4e2d\u51fa20\u8fde\u53d1", value: "/series/0R5q" },
  { title: "\u4e2d\u51fa\u9732\u5929\u6e29\u6cc9", value: "/series/JnV2" },
  { title: "\u4e2d\u51fa\u4eba\u59bb\u51fa\u8f68\u65c5\u884c", value: "/series/p4w" },
  { title: "\u53ea\u9700\u4e2d\u51fa\u7684\u7b80\u5355\u5de5\u4f5c", value: "/series/1RDJ" },
  { title: "\u4e2d\u5e74\u5927\u53d4\u4e0e\u67d0\u67d0", value: "/series/Yxwz" },
  { title: "\u548c\u6700\u68d2\u7684\u60c5\u4eba\uff0c\u6700\u68d2\u7684\u4e2d\u51fa\u6027\u4ea4", value: "/series/ZdPX" },
  { title: "\u6700\u5f3a\u5c5e\u6027", value: "/series/wVB" },
  { title: "\u6700\u65b0\u4e0a\u763e\u7f8e\u5bb9", value: "/series/Nb" },
  { title: "AI\u4fee\u590d\uff08Tokyo247\uff09", value: "/series/58Xp" },
  { title: "AI\u4fee\u590d\uff08Alice Japan\uff09", value: "/series/JE1x" },
  { title: "AI\u4fee\u590d\uff08SHY\u4f01\u5212\uff09", value: "/series/YOPz" },
  { title: "AI\u4fee\u590d\u7248", value: "/series/9xwV" },
  { title: "\u963f\u8299\u6d1b\u72c4\u5fd2", value: "/series/9qX" },
  { title: "AV\u65e0\u7406", value: "/series/MmpQ" },
  { title: "AV\u51fa\u9053", value: "/series/6d4a" },
  { title: "AV\u51fa\u9053\uff08Peters\uff09", value: "/series/MbvJ" },
  { title: "BEST\uff08\u4f5c\u54c1\u96c6\uff09", value: "/series/PQRe" },
  { title: "Boin\u300c\u67d0\u67d0\u300dBox", value: "/series/8ZW" },
  { title: "\u8327\uff08SILK LABO\uff09", value: "/series/22Mp" },
  { title: "\u6570\u5b57\u9891\u9053", value: "/series/Bz0d" },
  { title: "E-BODY", value: "/series/1NW" },
  { title: "E-BODY BEST PROPORTIONS", value: "/series/4Paa" },
  { title: "E-BODY VR", value: "/series/ydkZ" },
  { title: "E-BODY\u4e13\u5c5e\u51fa\u9053", value: "/series/P5W9" },
  { title: "Extreme\uff08\u8fc7\u6fc0\uff09\u81ea\u6170\u8005", value: "/series/Z97A" },
  { title: "FALENO\u603b\u96c6\u7bc7", value: "/series/wmv7" },
  { title: "\u7b2c\u4e00\u5370\u8c61", value: "/series/qDJ6" },
  { title: "\u98ce\u4fd7\u9891\u9053", value: "/series/Mm9Q" },
  { title: "GAL\u62bd\u63d2\u590d\u4ec7\u8005", value: "/series/Jym8" },
  { title: "GET\u7cfb\u5217", value: "/series/nKy9" },
  { title: "\u6781\u81f4", value: "/series/QBG" },
  { title: "\u8d85\u7ea7\u604b\u7269", value: "/series/dNM" },
  { title: "\u8272\u60c5\u5730\u4e0b\u4ea4\u6613", value: "/series/Gnbg" },
  { title: "J\u25cf FIRST TAKE", value: "/series/aD8n" },
  { title: "KARMA\u642d\u8baa\u961f\u51fa\u53d1", value: "/series/JO5B" },
  { title: "kawaii* VR", value: "/series/VP0n" },
  { title: "kawaii*\u7cbe\u9009", value: "/series/8e23" },
  { title: "kira\u2606kira BEST", value: "/series/dzB5" },
  { title: "kira\u2606kira BLACK GAL", value: "/series/RYz" },
  { title: "MADOOOON \u79c1\u62cd", value: "/series/7d7B" },
  { title: "MOODYZ 8KVR", value: "/series/EEZ2" },
  { title: "\u6708\u529b\u6b22\u547c", value: "/series/Wzep" },
  { title: "mpo.jp\u51fa\u54c1 \u7eaa\u5b9e", value: "/series/BgrG" },
  { title: "\u65b0\u4eba", value: "/series/ZNkJ" },
  { title: "NTR\u7f51", value: "/series/xgdE" },
  { title: "pg", value: "/series/2aeP" },
  { title: "\u9ad8\u7ea7VR", value: "/series/Eqa3" },
  { title: "\u9ad8\u7ea7\u65f6\u5c1a\u6ce1\u6ce1\u6d74", value: "/series/OXvv" },
  { title: "\u7ea2\u9f99", value: "/series/0YRE" },
  { title: "RED\u603b\u96c6\u7bc7", value: "/series/BJZO" },
  { title: "\u65b0\u4ebaVR", value: "/series/64n0" },
  { title: "\u65b0\u4eba\u7cbe\u9009", value: "/series/pOZq" },
  { title: "S1\u5973\u5b69\u5408\u96c6", value: "/series/WVXe" },
  { title: "S1 VR", value: "/series/aqWg" },
  { title: "S1\u5973\u5b69\u5408\u96c6", value: "/series/K486" },
  { title: "S\u7ea7\u719f\u5973\uff08VENUS\uff09", value: "/series/gyr7" },
  { title: "\u5077\u62cd\u628a\u8bdd\u9898\u5e26\u5230\u6027\u7231\u7684DVD", value: "/series/ky60" },
  { title: "\u6027\u7231\u9038\u6750", value: "/series/pqpk" },
  { title: "SOD\u5973\u804c\u5458", value: "/series/bKXa" },
  { title: "\u8d85\u7ea7\u9c7c\u773c\u604b\u7269", value: "/series/xOZA" },
  { title: "THE\u7eaa\u5f55\u7247 \u91ca\u653e\u672c\u80fd\u7684\u7edd\u9876\u6027\u7231", value: "/series/xOAE" },
  { title: "\u6700\u4f73", value: "/series/VGz" },
  { title: "\u672a\u5b8c\u6210VR", value: "/series/V0zA" },
  { title: "VR\u6700\u4f73", value: "/series/P2D2" },
  { title: "WAAPVR\u798f\u888b", value: "/series/8ww3" },
  { title: "\u554a\u554a\u592a\u592a", value: "/series/2adq" },
  { title: "IdeaPocket\u7cbe\u9009", value: "/series/1JN4" },
  { title: "IdeaPocket VR", value: "/series/Zpv7" },
  { title: "IdeaPocket 8KVR", value: "/series/OE7z" },
  { title: "IdeaPocket\u9038\u6750\u53d1\u6398\u4f01\u5212", value: "/series/nzp9" },
  { title: "Outvision VR KMPVR", value: "/series/zQ3z" },
  { title: "\u4e9a\u6d32\u53e4\u5f0f\u6309\u6469\u5e97\u5077\u62cd", value: "/series/gemy" },
  { title: "Adore", value: "/series/dd7e" },
  { title: "\u4eb2\u7231\u7684\uff0c\u539f\u8c05\u6211\u2026", value: "/series/ZX" },
  { title: "\u4ece\u90a3\u5929\u8d77\u4e00\u76f4\u2026\u88ab\u7d27\u7f1a\u8c03\u6559\u4e2d\u51fa\u7684\u5236\u670d\u7f8e\u5c11\u5973", value: "/series/76gP" },
  { title: "\u60f3\u73a9\u793e\u4ea4\u8f6f\u4ef6\u7684\u5973\u5b69", value: "/series/Qr0q" },
  { title: "\u4eb2\u5bc6\u604b\u7231", value: "/series/5rOa" },
  { title: "\u59b9\u59b9\u5076\u50cf", value: "/series/2aAp" },
  { title: "\u7ef4\u7eb3\u65af\u6e29\u6cc9", value: "/series/G4y2" },
  { title: "\u8bf7\u7761\u8d70\u6211\u7684\u59bb\u5b50\u67d0\u67d0", value: "/series/ZdMX" },
  { title: "\u4e0d\u65ad\u5347\u7ea7\u7684\u8d85\u7d20\u4eba\u5a18", value: "/series/5ea" },
  { title: "\u8272\u60c5\u4ff1\u4e50\u90e8", value: "/series/qD83" },
  { title: "\u8272\u60c5\u65d7\u6807\uff0c\u5df2\u7ecf\u786c\u4e86", value: "/series/ArAK" },
  { title: "\u5b9d\u7269\u798f\u888b", value: "/series/04vb" },
  { title: "\u6211\u6210\u4e86\u5988\u5988\u7684\u73a9\u5177", value: "/series/mQY" },
  { title: "\u8272\u60c5\u5bb6\u957f\u4f1a\u957f\u4e0e\u574f\u5c0f\u5b69\u5b66\u751f\u4f1a", value: "/series/YnKx" },
  { title: "\u7ee7\u6bcd\uff0c\u6bd4\u6211\u8001\u5a46\u597d\u592a\u591a\u4e86\u2026", value: "/series/k42V" },
  { title: "\u59d0\u59d0\u7684\u5de8\u5c3b\u592a\u4e0b\u6d41\uff0c\u79d2\u6740\u8bf1\u60d1", value: "/series/K4xv" },
  { title: "\u53e3\u4ea4\u9884\u5907\u6821", value: "/series/WkEK" },
  { title: "\u4f2a\u5a18\u7684\u81ea\u6170", value: "/series/qMEM" },
  { title: "\u65e9\u4e0a\u597d\u76f4\u63a5\u63d2\u5165", value: "/series/kK46" },
  { title: "\u5927\u53d4\u7684\u79c1\u62cd\u7eaa\u5f55\u7247", value: "/series/mJ6Z" },
  { title: "\u5bb6\u755c\u4f2a\u5a18", value: "/series/2kEq" },
  { title: "\u786c\u90a6\u90a6TV", value: "/series/wxEm" },
  { title: "\u8ba4\u771f\u642d\u8baa\uff08Peters\uff09", value: "/series/WVPQ" },
  { title: "\u771f\u5200\u771f\u67aa\u4e2d\u51fa\uff01\u9732\u8138\uff01\u4eba\u59bb\u642d\u8baa", value: "/series/WVeQ" },
  { title: "\u4f60\uff0c\u5341\u591a\u5c81\uff0c\u604b\u7231\u7684\u9884\u611f", value: "/series/PVJX" },
  { title: "\u8fa3\u59b9\u820c\u6280\u5bcc\u7fc1", value: "/series/3Eab" },
  { title: "\u8fa3\u59b9Instagram", value: "/series/4nbZ" },
  { title: "\u95ea\u4eae\u59bb\u5b50", value: "/series/2gXp" },
  { title: "\u6414\u75d2\u604b\u7269", value: "/series/1WAn" },
  { title: "\u6414\u75d2\u73a9\u6cd5", value: "/series/rDwz" },
  { title: "\u4e0a\u763e\u7ffb\u767d\u773c\u7d20\u4eba\u67d0\u67d0", value: "/series/39w3" },
  { title: "\u4e0d\u7518\u5fc3\u6240\u4ee5\u8bf7\u76f4\u63a5\u53d1\u884cAV", value: "/series/z595" },
  { title: "\u4e0b\u6d41\u81f3\u6781\u7684\u5f71\u50cf", value: "/series/de29" },
  { title: "\u522b\u770b\u8fd9\u6837\u5176\u5b9e\u5e26\u7740\u8089\u68d2", value: "/series/48Q6" },
  { title: "THE \u7834\u5904", value: "/series/Yg8" },
  { title: "THE \u5931\u53bb\u5904\u5973", value: "/series/EnXJ" },
  { title: "THE \u9762\u8bd5", value: "/series/MbmP" },
  { title: "THE \u955c\u5934\u8bd5\u955c", value: "/series/pk3B" },
  { title: "THE \u642d\u8baa\u7279\u522b\u7bc7", value: "/series/A9Dn" },
  { title: "THE \u9b54\u955c", value: "/series/wkBB" },
  { title: "\u900f\u89c6\u4e4b\u7231", value: "/series/NPAN" },
  { title: "\u77ed\u7bc7\u6545\u4e8b", value: "/series/Ak2m" },
  { title: "\u6b63\u592a\u541b\u7684\u8272\u60c5\u6076\u4f5c\u5267", value: "/series/bee" },
  { title: "\u7d20\u4eba\u5173\u897f\u63f4\u4ea4\uff08\u4e2d\u7530\u6c0f\uff09", value: "/series/RXAD" },
  { title: "\u7d20\u4eba\u89c2\u5bdf \u5b9e\u9a8c", value: "/series/39BD" },
  { title: "\u7d20\u4eba\u5a18\u642d\u8baa\u72e9\u730e", value: "/series/7G6V" },
  { title: "\u4eba\u683c\u64cd\u4f5c\u6d17\u8111\u50ac\u7720", value: "/series/54b7" },
  { title: "\u8d85\u7ea7\u5973\u82f1\u96c4\u652f\u914d\u5730\u72f1", value: "/series/7EM" },
  { title: "\u65af\u5bbe\u585e\u4e73\u817a\u5f00\u53d1\u8bca\u6240", value: "/series/AzZ0" },
  { title: "\u8981\u505a\u7231\u7684\u8bdd\u7edd\u5bf9\u9009\u5730\u65b9\u4eba\u59bb", value: "/series/gz9q" },
  { title: "\u540d\u5a9bDX", value: "/series/4d0J" },
  { title: "\u540d\u5a9b\u91d1\u53d1", value: "/series/bze" },
  { title: "\u98de\u9556\u642d\u8baa in Tokyo", value: "/series/WZ27" },
  { title: "\u53ea\u56f4\u4e00\u6761\u6bdb\u5dfe \u8981\u4e0d\u8981\u8fdb\u7537\u6c64\uff1f", value: "/series/dgy8" },
  { title: "\u65c5\u60c5", value: "/series/ZN36" },
  { title: "\u548c\u8c01\u90fd\u53ef\u4ee5\u5b9a\u989d\u968f\u4fbf\u63d2", value: "/series/w8X2" },
  { title: "\u6311\u6218\uff01\u5b9a\u65f6\u8df3\u86cb", value: "/series/ZK38" },
  { title: "\u7eaa\u5f55TV\u00d7PRESTIGE PREMIUM \u53ef\u4ee5\u9001\u4f60\u56de\u5bb6\u5417\uff1f", value: "/series/WyE8" },
  { title: "\u53ea\u9650\u8fd9\u91cc", value: "/series/qrD" },
  { title: "\u80fd\u505a\u5230\u54ea\u4e00\u6b65\uff01\uff1f", value: "/series/Ww7p" },
  { title: "\u8d85\u4e0b\u6d41\u516c\u516c\u73a9\u5f04\u513f\u5ab3", value: "/series/0eV0" },
  { title: "Dream Woman", value: "/series/Nwz3" },
  { title: "Dream Shower", value: "/series/39D" },
  { title: "\u65e0\u5957\u4e2d\u51fa", value: "/series/45a" },
  { title: "\u65e0\u5957\u62bd\u63d2\u77ed\u89c6\u9891", value: "/series/GKAQ" },
  { title: "\u642d\u8baa\u5e26\u56de\u5bb6\u6027\u7231\u5077\u62cd\u00b7\u64c5\u81ea\u53d1\u884cAV", value: "/series/4dWG" },
  { title: "\u642d\u8baa\u5e08\u5e26\u56de\u5bb6\u623f\u95f4\u5077\u62cd", value: "/series/d9Yg" },
  { title: "\u642d\u8baaTV\u00d7PRESTIGE PREMIUM", value: "/series/6Qe7" },
  { title: "\u642d\u8baa\u62bd\u63d2", value: "/series/ArpO" },
  { title: "\u88ab\u642d\u8baa\u7684\u8272\u60c5\u7d20\u4eba\u5973\u6027\u4eec", value: "/series/9qZ6" },
  { title: "\u4eba\u7c7b\u89c2\u5bdf", value: "/series/qM5P" },
  { title: "\u88ab\u7eff\u7269\u8bed", value: "/series/9D3g" },
  { title: "\u65e0\u526a\u8f91\u7cbe\u9009", value: "/series/awxp" },
  { title: "\u540e\u5bab\u9020\u4eba", value: "/series/bK0v" },
  { title: "\u8d85\u7ea7\u6570\u7801\u9a6c\u8d5b\u514b", value: "/series/rmRA" },
  { title: "\u8d85\u7ea7\u7cbe\u9009", value: "/series/32g0" },
  { title: "\u5976\u5b50\u6469\u64e6\u5b50", value: "/series/D6O3" },
  { title: "\u62bd\u63d2\u62cd\u6444", value: "/series/Vg3A" },
  { title: "\u7b2c\u4e00\u6b21\u5927\u00b7\u75c9\u00b7\u631b\u7279\u522b\u7bc7", value: "/series/nKV4" },
  { title: "\u7b2c\u4e00\u6b21\u65e0\u5957\u4e2d\u51fa\uff08\u672c\u4e2d\uff09", value: "/series/qdnr" },
  { title: "\u88f8\u4f53\u592a\u592a", value: "/series/XWpM" },
  { title: "\u88f8\u4f53\u5bb6\u653f\u5987", value: "/series/vDPO" },
  { title: "\u53d1\u73b0\u7f8e\u5c11\u5973 Revolution", value: "/series/Zvq" },
  { title: "Hunter Black", value: "/series/5bb8" },
  { title: "\u72ec\u81ea\u5973\u5b50\u65c5\u884c\u642d\u8baa", value: "/series/XVz1" },
  { title: "\u548c\u7a7f\u9774\u7f8e\u9b54\u5973\u65e0\u5957\u4ea4\u5c3e", value: "/series/WAG7" },
  { title: "\u5730\u4e0b\u60c5\u82722\u697c", value: "/series/eOnM" },
  { title: "Premium\u7cbe\u9009", value: "/series/Mn51" },
  { title: "\u4ea8\u5229\u51a2\u672c", value: "/series/Yae" },
  { title: "\u8ba4\u771f\u642d\u8baa\uff0c\u521d\u6b21\u62cd\u6444", value: "/series/wkan" },
  { title: "\u9b54\u955c\u8f66", value: "/series/AgO" },
  { title: "\u9b54\u955c\u53f7\u62cd\u5b8c\u5373\u51fa", value: "/series/dVKv" },
  { title: "\u9b54\u955c\u53f7\u786c\u6838", value: "/series/evaN" },
  { title: "\u9b54\u955c\u7684\u53e6\u4e00\u8fb9\u662f\u67d0\u67d0", value: "/series/MqBX" },
  { title: "\u6309\u6469\u4e2d\u51fa\u6027\u7231", value: "/series/54DB" },
  { title: "\u7231\u597d\u8005\u4ff1\u4e50\u90e8\u8d23\u4efb\u76d1\u4fee", value: "/series/bRmP" },
  { title: "\u7231\u597d\u8005\u4ff1\u4e50\u90e8\u8c6a\u534e\u7248", value: "/series/1REw" },
  { title: "\u5403\u6389\u5988\u5988\u7684\u670b\u53cb", value: "/series/8wW3" },
  { title: "\u6bcd\u5b50\u6b63\u592a\u5b9e\u8bdd", value: "/series/4V6b" },
  { title: "\u5988\u5988\u7684\u771f\u5b9e\u6027\u6559\u80b2", value: "/series/1Bb4" },
  { title: "\u673a\u5bc6\u5077\u62cd\u5f71\u50cf\u6d41\u51fa", value: "/series/QW49" },
  { title: "\u4f20\u9500\u4e4b\u5973", value: "/series/pYDB" },
  { title: "\u6574\u5305\u6253\u5305", value: "/series/vDnz" },
  { title: "\u5168\u90e8\u6253\u5305", value: "/series/P2A9" },
  { title: "\u770b\u4f53\u80b2", value: "/series/der8" },
  { title: "\u90ae\u4ef6\u5373\u63d2\u4fbf", value: "/series/YMJp" },
  { title: "\u7537\u58eb\u6309\u6469\u5077\u62cd", value: "/series/rvdZ" },
  { title: "\u70ae\u53cb\u793e\u56e2\u5973\u5b50", value: "/series/0wOa" },
  { title: "\u5962\u534eTV", value: "/series/YrB8" },
  { title: "\u5962\u534eTV\u00d7PRESTIGE", value: "/series/D2GJ" },
  { title: "\u60c5\u4eba\u65c5\u9986\u7eaa\u5f55\u7247\u4f11\u606f2\u5c0f\u65f6", value: "/series/94Yq" },
  { title: "\u771f\u5b9e\u642d\u8baa", value: "/series/p5nq" },
  { title: "\u771f\u5b9e\u89c2\u5bdf\u5b9e\u9a8c", value: "/series/7akd" },
  { title: "Luna\u65ec\u9999\u820d", value: "/series/DWDa" },
  { title: "Ruby\u5e74\u9274", value: "/series/1k4" },
  { title: "\u7ea2\u7a81\u51fb\u961f \u589e\u520a\u53f7", value: "/series/2GeZ" },
  { title: "\u7ea2\u7a81\u51fb\u961f\u7cfb\u5217", value: "/series/ayr4" },
  { title: "\u79df\u8d41\u5973\u53cb", value: "/series/R2RR" },
  { title: "\u79df\u8d41\u5973\u53cb\u00d7PRESTIGE PREMIUM", value: "/series/WyAe" },
  { title: "\u79df\u8d41\u719f\u5973\u7684\u5de5\u4f5c", value: "/series/yd2d" },
  { title: "\u5728\u6d1b\u6749\u77f6\u642d\u8baa\u7684\u67d0\u67d0\u88ab\u64c5\u81eaAV\u51fa\u9053", value: "/series/7q9V" },
  { title: "\u841d\u8389\u4e13\u79d1", value: "/series/eK1" },
  { title: "Waka\u5b9e\u9a8c\u5ba4", value: "/series/P8rr" },
  { title: "\u8089\u7f1d\u9171", value: "/series/aW7W" },
];

var JAVDB_TAG_OPTIONS = [
  { title: "\u4e2d\u6587\u5b57\u5e55", value: "search:中文字幕" },
  { title: "VR", value: "search:VR" },
  { title: "\u5de8\u4e73", value: "search:巨乳" },
  { title: "\u7f8e\u4e73", value: "search:美乳" },
  { title: "\u4e2d\u51fa", value: "search:中出" },
  { title: "\u989c\u5c04", value: "search:颜射" },
  { title: "\u53e3\u4ea4", value: "search:口交" },
  { title: "\u4eba\u59bb", value: "search:人妻" },
  { title: "\u719f\u5973", value: "search:熟女" },
  { title: "\u5b66\u751f", value: "search:學生" },
  { title: "OL", value: "search:OL" },
  { title: "\u62a4\u58eb", value: "search:护士" },
  { title: "\u6559\u5e08", value: "search:教师" },
  { title: "NTR", value: "search:NTR" },
  { title: "SM", value: "search:SM" },
  { title: "\u8c03\u6559", value: "search:调教" },
  { title: "\u5c48\u8fb1", value: "search:屈辱" },
  { title: "\u65e0\u7801\u6d41\u51fa", value: "search:无码流出" },
  { title: "\u8fde\u88e4\u889c", value: "search:连裤袜" },
  { title: "\u7d20\u4eba", value: "search:素人" },
  { title: "FC2", value: "search:FC2" },
];

var JAVDB_MAKER_OPTIONS = [
  { title: "S1", value: "/makers/7R" },
  { title: "MOODYZ", value: "/makers/zKW" },
  { title: "\u521b\u610f\u53e3\u888b", value: "search:Ideapocket" },
  { title: "\u5c0a\u7235", value: "search:Prestige" },
  { title: "FALENO", value: "search:FALENO" },
  { title: "\u5723\u6bcd", value: "search:Madonna" },
  { title: "SOD", value: "search:SOD" },
  { title: "\u653b\u51fb\u8005", value: "search:Attackers" },
  { title: "E-BODY", value: "search:E-BODY" },
  { title: "\u53ef\u7231", value: "search:kawaii" },
  { title: "\u81ea\u7136\u55e8", value: "search:Natural High" },
  { title: "HEYZO", value: "search:HEYZO" },
  { title: "\u4e07\u8c61\u5de5\u5382", value: "search:WANZ" },
  { title: "\u4f18\u8d28", value: "search:PREMIUM" },
  { title: "OPPAI", value: "search:OPPAI" },
  { title: "\u672c\u4e2d", value: "search:Honnaka" },
  { title: "Das!", value: "search:DASDAS" },
  { title: "\u672c\u4e2d", value: "search:本中" },
  { title: "\u7ef4\u4ed6\u547d", value: "search:Vitamin" },
  { title: "\u7231\u4e3d\u4e1d\u65e5\u672c", value: "search:Alice Japan" },
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
var GLOBAL_KEYS = [
  "locale",
  "email",
  "password",
  "apiToken",
  "dmmProbeWorker",
  "dmmProbeApiKey",
  "guangya_token",
  "guangya_parent_id",
  "magnet_min_video_mb",
  "magnet_block_patterns",
];
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
  version: "4.6.2",
  requiredVersion: "0.0.1",
  description: "JavDB API：最近更新 / TOP250 / 搜索 / 分类预填；详情磁力 relatedItems 一键转存光鸭",
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
    /*
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
      description: "默认 https://dmm.laotou.ccwu.cc；列表横/竖封面探测",
      value: "",
    },
    {
      name: "dmmProbeApiKey",
      title: "DMM Probe Key（可选）",
      type: "input",
      description: "Worker 开启鉴权时填写 X-Probe-Key",
      value: "",
    },
    */
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
    {
      id: "search",
      title: "搜索",
      description: "按番号、演员、标签等关键词搜索",
      functionName: "searchMovies",
      cacheDuration: 1800,
      params: [
        { name: "keyword", title: "关键词", type: "input", value: "" },
        {
          name: "sort_by",
          title: "排序",
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
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
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

/* ========================= Storage / Params ========================= */

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
  "guangya_parent_id",
  "guangyaParentId",
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
  var widgetId = WidgetMetadata && WidgetMetadata.id ? String(WidgetMetadata.id) : "forward.javdb";
  return [
    "javdb.global." + name,
    widgetId + ".global." + name,
    widgetId + ".globalParams." + name,
    "forward.javdb.global." + name,
    "forward.javdb.globalParams." + name,
    "global." + name,
    name,
  ];
}

function pickParamFromObject(obj, aliases) {
  if (!obj || typeof obj !== "object" || isPromiseLike(obj)) return "";
  for (var i = 0; i < aliases.length; i++) {
    var key = aliases[i];
    if (obj[key] === undefined || obj[key] === null) continue;
    var val = normalizeStoreValue(obj[key]);
    if (val) return val;
  }
  return "";
}

function forwardGlobalParamsBlobKeys() {
  var widgetId = WidgetMetadata && WidgetMetadata.id ? String(WidgetMetadata.id) : "forward.javdb";
  return [
    widgetId + ".globalParams",
    "forward.javdb.globalParams",
    widgetId + ".global",
    "javdb.globalParams",
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
  writeStore("javdb.global." + name, value);
}

async function persistGlobalParamAsync(name, value) {
  value = normalizeStoreValue(value);
  if (!value) return;
  writeStore("javdb.global." + name, value);
  await writeStoreAsync("javdb.global." + name, value);
}

function syncParams(params) {
  params = params || {};
  var out = {};
  for (var i = 0; i < GLOBAL_KEYS.length; i++) {
    var key = GLOBAL_KEYS[i];
    var val = params[key];
    if (val !== undefined && val !== null && String(val).trim() !== "") {
      var normalized = normalizeStoreValue(val);
      if (normalized) {
        out[key] = normalized;
        if (key !== "guangya_token") persistGlobalParam(key, out[key]);
      } else {
        var storedVal = resolveGlobalParamSync(key, params, [key]);
        if (storedVal) out[key] = storedVal;
      }
    } else {
      var stored = resolveGlobalParamSync(key, params, [key]);
      if (stored) out[key] = stored;
    }
  }
  var gyToken = normalizeGuangyaToken(
    pickParamAliases(params, GUANGYA_TOKEN_ALIASES) || out.guangya_token || resolveGlobalParamSync("guangya_token", params, GUANGYA_TOKEN_ALIASES)
  );
  if (gyToken) out.guangya_token = gyToken;
  var gyParent = pickParamAliases(params, GUANGYA_PARENT_ALIASES) || out.guangya_parent_id || resolveGlobalParamSync("guangya_parent_id", params, GUANGYA_PARENT_ALIASES);
  if (gyParent) {
    out.guangya_parent_id = gyParent;
    persistGlobalParam("guangya_parent_id", gyParent);
  }
  if (!out.locale) out.locale = "zh";
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
  for (var i = 0; i < GLOBAL_KEYS.length; i++) {
    var key = GLOBAL_KEYS[i];
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
  params = await ensureGlobalParams(params || {});
  var username = String((await unwrapStoreValue(params.email)) || params.email || "").trim();
  var password = String((await unwrapStoreValue(params.password)) || params.password || "").trim();
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
  params = await ensureGlobalParams(params || {});
  if (params.apiToken) return params;

  var email = String((await unwrapStoreValue(params.email)) || params.email || "").trim();
  var password = String((await unwrapStoreValue(params.password)) || params.password || "").trim();
  if (email) params.email = email;
  if (password) params.password = password;
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

function resolveListBackdropUrl(code, siteFallback, dmmProbe) {
  var fallback = String(siteFallback || "").trim();
  if (!code) return fallback;
  var probe = dmmProbe !== undefined ? dmmProbe : getCachedDmmProbeCover(code);
  // 仅采用 Worker 验证过的横版封面；不再猜 awsimgsrc 链接
  if (probe && probe.backdropUrl) {
    var backdrop = String(probe.backdropUrl).trim();
    if (backdrop && !isInvalidCoverTarget(backdrop)) {
      return backdrop;
    }
  }
  return fallback;
}

function buildListCoverBundle(code, siteFallback, dmmProbe) {
  var fallback = String(siteFallback || "").trim();
  var probe = dmmProbe !== undefined ? dmmProbe : code ? lookupDmmProbeCover(code) : null;
  var hdPoster = resolveListPosterUrl(code, fallback, probe) || fallback || "";
  var hdBackdrop = resolveListBackdropUrl(code, fallback, probe) || fallback || "";
  return {
    backdropPath: hdBackdrop,
    posterPath: hdPoster,
    detailPoster: hdPoster,
    coverUrl: hdBackdrop,
    image: hdBackdrop,
  };
}

function mapListMovie(movie) {
  var code = safeText(movie.number || "");
  var title = safeText(movie.title || code || movie.id);
  if (code && title.indexOf(code) !== 0) title = code + " " + title;
  var siteCover = pickCover(movie);
  // 对齐 catemby：横卡用 backdropPath/coverUrl，方格用 posterPath
  var covers = buildListCoverBundle(code, siteCover, code ? lookupDmmProbeCover(code) : null);
  return {
    id: code || movie.id,
    type: "url",
    mediaType: "movie",
    title: title,
    link: movieLink(movie.id),
    releaseDate: movie.release_date || "",
    rating: Number(movie.score || 0) || 0,
    description: buildListDescription(movie),
    backdropPath: covers.backdropPath || siteCover || undefined,
    posterPath: covers.posterPath || undefined,
    detailPoster: covers.detailPoster || undefined,
    coverUrl: covers.coverUrl || covers.backdropPath || siteCover || undefined,
    image: covers.image || covers.backdropPath || siteCover || undefined,
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

function categoryKindLabel(kind) {
  if (kind === "actors") return "演员";
  if (kind === "series") return "系列";
  if (kind === "makers") return "片商";
  if (kind === "tags") return "标签";
  return "分类";
}

function mapCategoryEntity(kind, item) {
  item = item || {};
  var id = String(item.id || "").trim();
  var name = safeText(item.name_zht || item.name || id);
  if (!id) return null;
  var path =
    kind === "actors"
      ? "/actors/" + id
      : kind === "series"
        ? "/series/" + id
        : kind === "makers"
          ? "/makers/" + id
          : "/tags?c2=" + encodeURIComponent(id);
  var count = Number(item.videos_count || 0);
  var extra = [];
  if (count) extra.push(count + " 部作品");
  if (item.category) extra.push(item.category);
  if (item.other_name) extra.push(safeText(item.other_name));
  var link = path.indexOf("?") >= 0 ? path : joinIdTitle(path, name);
  return {
    id: path,
    type: "url",
    mediaType: kind === "actors" ? "person" : "movie",
    title: name,
    link: link,
    posterPath: item.avatar_url || undefined,
    backdropPath: item.avatar_url || undefined,
    coverUrl: item.avatar_url || undefined,
    description: extra.join(" · ") || categoryKindLabel(kind),
  };
}

function flattenTagGroups(groups, keyword) {
  var out = [];
  keyword = String(keyword || "").trim().toLowerCase();
  (groups || []).forEach(function (group) {
    (group.tags || []).forEach(function (tag) {
      if (!tag || tag.id == null || tag.id === "") return;
      var name = safeText(tag.name || tag.id);
      if (keyword && name.toLowerCase().indexOf(keyword) < 0 && String(tag.id).toLowerCase().indexOf(keyword) < 0) {
        return;
      }
      out.push({
        id: tag.id,
        name: name,
        category: group.category || "",
      });
    });
  });
  return out;
}

async function fetchCategoryEntities(kind, params) {
  params = params || {};
  var page = Number(params.page || params.from || 1) || 1;
  var type = normalizeLatestFilter(params.filter_by || "all");
  var keyword = safeText(params.keyword);
  var limit = 24;

  if (kind === "tags") {
    var tagData = await apiGet("/v1/tags", { type: type }, params);
    var flat = flattenTagGroups((tagData && tagData.tags) || [], keyword);
    var start = (page - 1) * limit;
    return flat.slice(start, start + limit).map(function (item) {
      return mapCategoryEntity("tags", item);
    }).filter(Boolean);
  }

  if (keyword) {
    var searchType = kind === "actors" ? "actor" : kind === "makers" ? "maker" : "series";
    var searched = await apiGet("/v2/search", { q: keyword, type: searchType, page: page }, params);
    var found = (searched && (searched.actors || searched.makers || searched.series)) || [];
    return found
      .map(function (item) {
        return mapCategoryEntity(kind, item);
      })
      .filter(Boolean);
  }

  var pathname = kind === "actors" ? "/v1/actors" : kind === "makers" ? "/v1/makers" : "/v1/series";
  var data = await apiGet(pathname, { type: type, page: page, limit: limit }, params);
  var list = (data && (data.actors || data.makers || data.series)) || [];
  return list
    .map(function (item) {
      return mapCategoryEntity(kind, item);
    })
    .filter(Boolean);
}

async function fetchSearchMovies(keyword, params, magnetOnly) {
  var page = Number(params.page || params.from || 1);
  var sortRaw = String((params && params.sort_by) || "published");
  var magnet = !!magnetOnly || /_download$/.test(sortRaw);
  var sortKey = magnet ? sortRaw.replace(/_download$/, "") : sortRaw;
  var query = {
    q: keyword,
    page: page,
    type: "movie",
    movie_filter_by: magnet ? "magnet" : "all",
    movie_sort_by: SEARCH_SORT_MAP[sortKey] || "release",
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

/* ========================= 光鸭磁力转存 ========================= */

var GUANGYA_ACCOUNT_URL = "https://account.guangyapan.com";
var GUANGYA_API_BASE = "https://api.guangyapan.com";
var GUANGYA_SITE = "https://www.guangyapan.com";
var GUANGYA_CLIENT_ID = "aMe-8VSlkrbQXpUR";
var GUANGYA_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1";
var MAGNET_LINK_PREFIX = "gy:";
var MAGNET_STORE_PREFIX = "javdb.magnet.v1.";
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
    magnet_min_video_mb: readStore("javdb.global.magnet_min_video_mb") || "0",
    magnet_block_patterns: readStore("javdb.global.magnet_block_patterns") || "",
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
      (await readStoreAsync("javdb.global.magnet_min_video_mb")) || readStore("javdb.global.magnet_min_video_mb") || "0",
    magnet_block_patterns:
      (await readStoreAsync("javdb.global.magnet_block_patterns")) ||
      readStore("javdb.global.magnet_block_patterns") ||
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
    hd: /\bHD\b|1080|720p|2160|4K|4k/i.test(text),
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
  var all = [];
  for (var p = page; p < page + maxPages; p++) {
    var data;
    try {
      data = await apiGet("/v1/movies/" + movieId + "/reviews", { page: p, limit: limit }, params);
    } catch (e) {
      break;
    }
    var list = (data && (data.reviews || data.comments || data.list || data.items)) || [];
    if (!Array.isArray(list) || !list.length) break;
    all = all.concat(list);
    if (list.length < limit) break;
  }
  return all;
}

async function fetchDetailMagnets(movieId, params, code) {
  var apiMagnets = [];
  var reviewMagnets = [];
  try {
    var magnetData = await apiGet("/v1/movies/" + movieId + "/magnets", null, params);
    apiMagnets = (magnetData && magnetData.magnets) || [];
  } catch (eMag) {}
  try {
    var reviews = await fetchMovieReviews(movieId, params, { page: 1, limit: 20, maxPages: 5 });
    reviewMagnets = magnetsFromReviews(reviews, code);
  } catch (eRev) {}
  var merged = mergeAndDedupeMagnets(apiMagnets, reviewMagnets, code);
  var source = "";
  if (apiMagnets.length && reviewMagnets.length) source = "mixed";
  else if (apiMagnets.length) source = "api";
  else if (reviewMagnets.length) source = "review";
  return { magnets: merged, source: source };
}

function normalizeMagnetEntry(raw, code, source) {
  raw = raw || {};
  var magnet = raw.magnet || (raw.hash ? buildMagnetUrl(raw.hash) : "");
  var hash = String(raw.hash || extractMagnetHash(magnet) || "").trim().toLowerCase();
  if (!hash) return null;
  var name = safeText(raw.name || raw.title || hash);
  var text = name + " " + safeText(raw.description || "");
  var flags = parseMagnetFlags(text + " " + magnet);
  var sizeMb = Number(raw.size || 0);
  if (!Number.isFinite(sizeMb) || sizeMb <= 0) sizeMb = parseMagnetSizeFromUri(magnet);
  if (!sizeMb) sizeMb = parseMagnetSizeMb(text);
  return {
    hash: hash,
    name: name,
    size: sizeMb,
    cnsub: !!(raw.cnsub || flags.cnsub),
    hd: !!(raw.hd || flags.hd),
    uncensored: !!(raw.uncensored || flags.uncensored),
    source: source || raw.source || "api",
    magnet: magnet || buildMagnetUrl(hash),
  };
}

function magnetTagScore(m) {
  var score = 0;
  if (m && m.uncensored) score += 1000;
  if (m && m.cnsub) score += 100;
  if (m && m.hd) score += 10;
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

function pickBetterMagnet(current, candidate) {
  if (!current) return candidate;
  if (!candidate) return current;
  return compareMagnetPriority(candidate, current) > 0 ? candidate : current;
}

function mergeMagnetLists(apiMagnets, reviewMagnets, code) {
  var map = {};
  (apiMagnets || []).forEach(function (raw) {
    var item = normalizeMagnetEntry(raw, code, "api");
    if (!item) return;
    map[item.hash] = pickBetterMagnet(map[item.hash], item);
  });
  (reviewMagnets || []).forEach(function (raw) {
    var item = normalizeMagnetEntry(raw, code, "review");
    if (!item) return;
    map[item.hash] = pickBetterMagnet(map[item.hash], item);
  });
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

function mergeAndDedupeMagnets(apiMagnets, reviewMagnets, code) {
  var merged = mergeMagnetLists(apiMagnets, reviewMagnets, code);
  return dedupeMagnetsByGbBucket(merged);
}

function buildMagnetItemTitle(m, code) {
  var flags = [];
  if (m.uncensored) flags.push("破解");
  if (m.cnsub) flags.push("中字");
  if (m.hd) flags.push("HD");
  var size = formatMagnetSize(m.size);
  var parts = [];
  if (size) parts.push(size);
  if (flags.length) parts.push(flags.join("/"));
  if (!parts.length) {
    var fallback = stripCodeFromMagnetName(safeText(m.name || m.hash || "磁力"), code);
    if (fallback) parts.push(fallback);
  }
  return parts.join(" · ") || "磁力";
}

function buildMagnetRelatedItems(magnets, ctx) {
  ctx = ctx || {};
  var items = [];
  var list = magnets || [];
  for (var i = 0; i < list.length && i < 12; i++) {
    var m = list[i];
    var hash = String(m.hash || "").trim().toLowerCase();
    if (!hash) continue;
    var displayName = stripCodeFromMagnetName(safeText(m.name || hash), ctx.code);
    cacheMagnetEntry(hash, {
      magnet: m.magnet || buildMagnetUrl(hash),
      hash: hash,
      name: safeText(m.name || hash),
      size: m.size || 0,
      movieId: ctx.movieId || "",
      code: ctx.code || "",
      title: ctx.title || "",
      backdropPath: ctx.backdropPath || "",
      source: m.source || "api",
    });
    items.push({
      id: hash,
      type: "url",
      mediaType: "movie",
      title: buildMagnetItemTitle(m, ctx.code),
      link: MAGNET_LINK_PREFIX + hash,
      backdropPath: ctx.backdropPath || undefined,
      description: displayName ? displayName + "\n点击转存到光鸭云盘" : "点击转存到光鸭云盘",
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
    var sizeText = formatMagnetSize(entry.size);
    if (sizeText) lines.push("大小: " + sizeText);
    lines.push("保留: " + result.keptCount + " 个文件");
    lines.push("过滤: " + result.blockedCount + " 个文件");
    if (entry.name) lines.push("名称: " + stripCodeFromMagnetName(entry.name, entry.code));
    if (result.keptPreview) lines.push("已提交:\n" + result.keptPreview);
    if (result.blockedPreview) lines.push("已过滤:\n" + result.blockedPreview);
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

async function searchMovies(params) {
  try {
    params = await ensureApiSession(params || {});
    var keyword = safeText(params.keyword);
    if (!keyword) {
      return [{ id: "tip", type: "text", title: "请输入关键词开始搜索" }];
    }
    var movies = await fetchSearchMovies(keyword, params, false);
    if (!movies.length) throw new Error("未找到相关影片");
    return enrichListMovies(movies, params);
  } catch (error) {
    console.error("[javdb] searchMovies 失败:", error.message || error);
    throw error;
  }
}

async function searchGlobal(params) {
  return searchMovies(params);
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

async function loadActors(params) {
  return loadPage(Object.assign({}, params || {}, { category_kind: "actors", moduleId: "actors" }));
}

async function loadSeries(params) {
  return loadPage(Object.assign({}, params || {}, { category_kind: "series", moduleId: "series" }));
}

async function loadTags(params) {
  return loadPage(Object.assign({}, params || {}, { category_kind: "tags", moduleId: "tags" }));
}

async function loadMakers(params) {
  return loadPage(Object.assign({}, params || {}, { category_kind: "makers", moduleId: "makers" }));
}

async function loadDetail(link, params) {
  try {
    var linkStr = String(link || "");
    if (linkStr.indexOf(MAGNET_LINK_PREFIX) === 0) {
      return await handleGuangyaMagnetSave(linkStr.slice(MAGNET_LINK_PREFIX.length), params);
    }

    var params = await ensureApiSession(params || {});
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
        var catTitle = target.params.categoryTitle || params.categoryTitle || target.itemId || target.keyword || path;
        var cover = list[0] || {};
        return {
          id: target.itemId || target.keyword || path,
          type: "detail",
          mediaType: "movie",
          title: catTitle,
          description: "共收录 " + list.length + " 部影片（当前页），见下方列表",
          link: path,
          relatedItems: list,
          backdropPath: cover.backdropPath || cover.coverUrl || "",
          posterPath: cover.posterPath || "",
          detailPoster: cover.detailPoster || cover.posterPath || "",
          coverUrl: cover.coverUrl || cover.backdropPath || "",
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

    // 顶图仅用列表阶段 DMM 探测缓存；无高清则不赋值，不做站点图兜底
    var dmmProbe = code ? getCachedDmmProbeCover(code) : null;
    var posterUrl = "";
    var coverUrl = "";
    if (dmmProbe) {
      var probePoster = String(dmmProbe.posterUrl || "").trim();
      var probeBackdrop = String(dmmProbe.backdropUrl || "").trim();
      if (probePoster && !isInvalidCoverTarget(probePoster) && !isLowResDmmPosterUrl(probePoster)) {
        posterUrl = probePoster;
      }
      if (probeBackdrop && !isInvalidCoverTarget(probeBackdrop)) {
        coverUrl = probeBackdrop;
      }
    }

    var galleryUrls = [];
    (movie.preview_images || []).forEach(function (img) {
      var u = safeText((img && (img.large_url || img.thumb_url)) || "");
      if (u) galleryUrls.push(u);
    });
    // 顶图有 DMM 高清才放首位；无高清不拿站点封面顶上
    var backdropPaths = compactUniqueUrls(
      [].concat(coverUrl ? [coverUrl] : [], galleryUrls || [])
    ).filter(Boolean);

    var previewUrl = safeText(movie.preview_video_url || "");
    var trailers = buildDetailTrailers(previewUrl, coverUrl || posterUrl);

    var meta = parseDetailMeta(movie);
    var relatedItems = [];
    var magnetSource = "";
    try {
      var magnetBundle = await fetchDetailMagnets(movieId, params, code);
      magnetSource = magnetBundle.source || "";
      relatedItems = buildMagnetRelatedItems(magnetBundle.magnets, {
        movieId: movieId,
        code: code,
        title: title,
        backdropPath: coverUrl || posterUrl || (backdropPaths[0] || ""),
      });
    } catch (eMag) {}

    var descParts = [];
    if (code) descParts.push("番号: " + code);
    if (movie.release_date) descParts.push("日期: " + movie.release_date);
    if (movie.duration) descParts.push("时长: " + movie.duration + " 分钟");
    if (movie.summary) descParts.push(safeText(movie.summary));
    if (relatedItems.length) {
      descParts.push(
        magnetSource === "review"
          ? "磁力: 见下方相似作品栏（来自短评分享），点击即可转存光鸭云盘"
          : magnetSource === "mixed"
            ? "磁力: 见下方相似作品栏（官方+短评已合并去重），点击即可转存光鸭云盘"
            : "磁力: 见下方相似作品栏，点击即可转存光鸭云盘"
      );
    } else if (resolveGuangyaTokenSync()) {
      descParts.push("磁力: 暂无可用磁链");
    }

    var item = {
      id: code || movie.id || movieId,
      type: "detail",
      mediaType: "movie",
      title: title,
      link: movieLink(movie.id || movieId),
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
    if (relatedItems.length) item.relatedItems = relatedItems;
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
    loadActors: loadActors,
    loadSeries: loadSeries,
    loadTags: loadTags,
    loadMakers: loadMakers,
    loadLatest: loadLatest,
    loadTop250: loadTop250,
    searchMovies: searchMovies,
    searchGlobal: searchGlobal,
    loadDetail: loadDetail,
    loginAccount: loginAccount,
    buildMagnetRelatedItems: buildMagnetRelatedItems,
    handleGuangyaMagnetSave: handleGuangyaMagnetSave,
    extractMagnetsFromText: extractMagnetsFromText,
    magnetsFromReviews: magnetsFromReviews,
    fetchCategoryEntities: fetchCategoryEntities,
    mapCategoryEntity: mapCategoryEntity,
    fetchDetailMagnets: fetchDetailMagnets,
    mergeAndDedupeMagnets: mergeAndDedupeMagnets,
    dedupeMagnetsByGbBucket: dedupeMagnetsByGbBucket,
    compareMagnetPriority: compareMagnetPriority,
    gyFilterResolvedFiles: gyFilterResolvedFiles,
    gyExtractResolvedEntries: gyExtractResolvedEntries,
    gySanitizeFileIndexes: gySanitizeFileIndexes,
    gyIsGuangyaTaskOk: gyIsGuangyaTaskOk,
    getGuangyaConfigFromStore: getGuangyaConfigFromStore,
    getGuangyaConfig: getGuangyaConfig,
    normalizeGuangyaToken: normalizeGuangyaToken,
    WidgetMetadata: typeof WidgetMetadata !== "undefined" ? WidgetMetadata : null,
  };
}

const TAG_ENUM_OPTIONS = [
  { title: "1080p", value: "/index.php/vod/search/tag/1080p.html" },
  { title: "16\u6642\u9593\u4ee5\u4e0a\u4f5c\u54c1", value: "/index.php/vod/search/tag/16%E6%99%82%E9%96%93%E4%BB%A5%E4%B8%8A%E4%BD%9C%E5%93%81.html" },
  { title: "3P", value: "/index.php/vod/search/tag/3P.html" },
  { title: "4\u5c0f\u6642\u4ee5\u4e0a\u4f5c\u54c1", value: "/index.php/vod/search/tag/4%E5%B0%8F%E6%99%82%E4%BB%A5%E4%B8%8A%E4%BD%9C%E5%93%81.html" },
  { title: "4K", value: "/index.php/vod/search/tag/4K.html" },
  { title: "4P", value: "/index.php/vod/search/tag/4P.html" },
  { title: "60fps", value: "/index.php/vod/search/tag/60fps.html" },
  { title: "69", value: "/index.php/vod/search/tag/69.html" },
  { title: "8KVR", value: "/index.php/vod/search/tag/8KVR.html" },
  { title: "\u6309\u6469", value: "/index.php/vod/search/tag/%E6%8C%89%E6%91%A9.html" },
  { title: "\u6309\u6469\u68d2", value: "/index.php/vod/search/tag/%E6%8C%89%E6%91%A9%E6%A3%92.html" },
  { title: "\u767d\u9818", value: "/index.php/vod/search/tag/%E7%99%BD%E9%A0%98.html" },
  { title: "\u767d\u76ee\u30fb\u5931\u795e", value: "/index.php/vod/search/tag/%E7%99%BD%E7%9B%AE%E3%83%BB%E5%A4%B1%E7%A5%9E.html" },
  { title: "\u767d\u4eba", value: "/index.php/vod/search/tag/%E7%99%BD%E4%BA%BA.html" },
  { title: "\u8584\u99ac\u8cfd\u514b", value: "/index.php/vod/search/tag/%E8%96%84%E9%A6%AC%E8%B3%BD%E5%85%8B.html" },
  { title: "\u7206\u4e73", value: "/index.php/vod/search/tag/%E7%88%86%E4%B9%B3.html" },
  { title: "\u9f3b\u30d5\u30c3\u30af", value: "/index.php/vod/search/tag/%E9%BC%BB%E3%83%95%E3%83%83%E3%82%AF.html" },
  { title: "\u8b8a\u6027\u8005", value: "/index.php/vod/search/tag/%E8%AE%8A%E6%80%A7%E8%80%85.html" },
  { title: "\u75c5\u9662\u30fb\u30af\u30ea\u30cb\u30c3\u30af", value: "/index.php/vod/search/tag/%E7%97%85%E9%99%A2%E3%83%BB%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF.html" },
  { title: "\u90e8\u6d3b\u30fb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc", value: "/index.php/vod/search/tag/%E9%83%A8%E6%B4%BB%E3%83%BB%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%BC.html" },
  { title: "\u90e8\u4e0b\u30fb\u540c\u50da", value: "/index.php/vod/search/tag/%E9%83%A8%E4%B8%8B%E3%83%BB%E5%90%8C%E5%83%9A.html" },
  { title: "\u63d2\u5165\u7570\u7269", value: "/index.php/vod/search/tag/%E6%8F%92%E5%85%A5%E7%95%B0%E7%89%A9.html" },
  { title: "\u8d85\u4e73", value: "/index.php/vod/search/tag/%E8%B6%85%E4%B9%B3.html" },
  { title: "\u6f6e\u5439", value: "/index.php/vod/search/tag/%E6%BD%AE%E5%90%B9.html" },
  { title: "\u6210\u719f\u7684\u5973\u4eba", value: "/index.php/vod/search/tag/%E6%88%90%E7%86%9F%E7%9A%84%E5%A5%B3%E4%BA%BA.html" },
  { title: "\u75f4\u5973", value: "/index.php/vod/search/tag/%E7%97%B4%E5%A5%B3.html" },
  { title: "\u51fa\u8ecc", value: "/index.php/vod/search/tag/%E5%87%BA%E8%BB%8C.html" },
  { title: "\u8655\u7537", value: "/index.php/vod/search/tag/%E8%99%95%E7%94%B7.html" },
  { title: "\u8655\u5973", value: "/index.php/vod/search/tag/%E8%99%95%E5%A5%B3.html" },
  { title: "\u7c97\u66b4", value: "/index.php/vod/search/tag/%E7%B2%97%E6%9A%B4.html" },
  { title: "\u6253\u98db\u6a5f", value: "/index.php/vod/search/tag/%E6%89%93%E9%A3%9B%E6%A9%9F.html" },
  { title: "\u6253\u624b\u69cd", value: "/index.php/vod/search/tag/%E6%89%93%E6%89%8B%E6%A7%8D.html" },
  { title: "\u6253\u6a01\u6a5f", value: "/index.php/vod/search/tag/%E6%89%93%E6%A8%81%E6%A9%9F.html" },
  { title: "\u55ae\u9ad4\u4f5c\u54c1", value: "/index.php/vod/search/tag/%E5%96%AE%E9%AB%94%E4%BD%9C%E5%93%81.html" },
  { title: "\u8569\u5a66", value: "/index.php/vod/search/tag/%E8%95%A9%E5%A9%A6.html" },
  { title: "\u5012\u8ffd", value: "/index.php/vod/search/tag/%E5%80%92%E8%BF%BD.html" },
  { title: "\u7b2c\u4e00\u4eba\u7a31\u651d\u5f71", value: "/index.php/vod/search/tag/%E7%AC%AC%E4%B8%80%E4%BA%BA%E7%A8%B1%E6%94%9D%E5%BD%B1.html" },
  { title: "\u7b2c\u4e00\u8996\u89d2", value: "/index.php/vod/search/tag/%E7%AC%AC%E4%B8%80%E8%A6%96%E8%A7%92.html" },
  { title: "\u8abf\u6559", value: "/index.php/vod/search/tag/%E8%AA%BF%E6%95%99.html" },
  { title: "\u591aP", value: "/index.php/vod/search/tag/%E5%A4%9AP.html" },
  { title: "\u60e1\u4f5c\u5287", value: "/index.php/vod/search/tag/%E6%83%A1%E4%BD%9C%E5%8A%87.html" },
  { title: "\u653e\u5c3f", value: "/index.php/vod/search/tag/%E6%94%BE%E5%B0%BF.html" },
  { title: "\u653e\u5c3f\u30fb\u5931\u7981", value: "/index.php/vod/search/tag/%E6%94%BE%E5%B0%BF%E3%83%BB%E5%A4%B1%E7%A6%81.html" },
  { title: "\u809b\u4ea4", value: "/index.php/vod/search/tag/%E8%82%9B%E4%BA%A4.html" },
  { title: "\u809b\u9580", value: "/index.php/vod/search/tag/%E8%82%9B%E9%96%80.html" },
  { title: "\u809b\u5185\u4e2d\u51fa", value: "/index.php/vod/search/tag/%E8%82%9B%E5%86%85%E4%B8%AD%E5%87%BA.html" },
  { title: "\u9ad8", value: "/index.php/vod/search/tag/%E9%AB%98.html" },
  { title: "\u9ad8\u500b\u5b50", value: "/index.php/vod/search/tag/%E9%AB%98%E5%80%8B%E5%AD%90.html" },
  { title: "\u9ad8\u756b\u8cea", value: "/index.php/vod/search/tag/%E9%AB%98%E7%95%AB%E8%B3%AA.html" },
  { title: "\u9ad8\u4e2d\u5973\u751f", value: "/index.php/vod/search/tag/%E9%AB%98%E4%B8%AD%E5%A5%B3%E7%94%9F.html" },
  { title: "\u5404\u7a2e\u8077\u696d", value: "/index.php/vod/search/tag/%E5%90%84%E7%A8%AE%E8%81%B7%E6%A5%AD.html" },
  { title: "\u6545\u4e8b\u96c6", value: "/index.php/vod/search/tag/%E6%95%85%E4%BA%8B%E9%9B%86.html" },
  { title: "\u5be1\u5a66", value: "/index.php/vod/search/tag/%E5%AF%A1%E5%A9%A6.html" },
  { title: "\u704c\u8178", value: "/index.php/vod/search/tag/%E7%81%8C%E8%85%B8.html" },
  { title: "\u6c57\u3060\u304f", value: "/index.php/vod/search/tag/%E6%B1%97%E3%81%A0%E3%81%8F.html" },
  { title: "\u5408\u96c6", value: "/index.php/vod/search/tag/%E5%90%88%E9%9B%86.html" },
  { title: "\u548c\u670d\u30fb\u55aa\u670d", value: "/index.php/vod/search/tag/%E5%92%8C%E6%9C%8D%E3%83%BB%E5%96%AA%E6%9C%8D.html" },
  { title: "\u9ed1\u6697\u7cfb\u7d71", value: "/index.php/vod/search/tag/%E9%BB%91%E6%9A%97%E7%B3%BB%E7%B5%B1.html" },
  { title: "\u9ed1\u4eba\u6f14\u54e1", value: "/index.php/vod/search/tag/%E9%BB%91%E4%BA%BA%E6%BC%94%E5%93%A1.html" },
  { title: "\u5f8c\u5165", value: "/index.php/vod/search/tag/%E5%BE%8C%E5%85%A5.html" },
  { title: "\u62a4\u58eb", value: "/index.php/vod/search/tag/%E6%8A%A4%E5%A3%AB.html" },
  { title: "\u82b1\u7661", value: "/index.php/vod/search/tag/%E8%8A%B1%E7%99%A1.html" },
  { title: "\u808c\u8089", value: "/index.php/vod/search/tag/%E8%82%8C%E8%82%89.html" },
  { title: "\u7eaa\u5f55\u7247", value: "/index.php/vod/search/tag/%E7%BA%AA%E5%BD%95%E7%89%87.html" },
  { title: "\u5993\u5973", value: "/index.php/vod/search/tag/%E5%A6%93%E5%A5%B3.html" },
  { title: "\u76e3\u7981", value: "/index.php/vod/search/tag/%E7%9B%A3%E7%A6%81.html" },
  { title: "\u8b1b\u5e2b", value: "/index.php/vod/search/tag/%E8%AC%9B%E5%B8%AB.html" },
  { title: "\u5b0c\u5c0f", value: "/index.php/vod/search/tag/%E5%AC%8C%E5%B0%8F.html" },
  { title: "\u5b0c\u5c0f\u7684", value: "/index.php/vod/search/tag/%E5%AC%8C%E5%B0%8F%E7%9A%84.html" },
  { title: "\u89d2\u8272\u626e\u6f14", value: "/index.php/vod/search/tag/%E8%A7%92%E8%89%B2%E6%89%AE%E6%BC%94.html" },
  { title: "\u6559\u5b78", value: "/index.php/vod/search/tag/%E6%95%99%E5%AD%B8.html" },
  { title: "\u59d0\u59d0", value: "/index.php/vod/search/tag/%E5%A7%90%E5%A7%90.html" },
  { title: "\u59d0\u59b9", value: "/index.php/vod/search/tag/%E5%A7%90%E5%A6%B9.html" },
  { title: "\u4ecb\u7d39\u5f71\u7247", value: "/index.php/vod/search/tag/%E4%BB%8B%E7%B4%B9%E5%BD%B1%E7%89%87.html" },
  { title: "\u7d27\u7f1a", value: "/index.php/vod/search/tag/%E7%B4%A7%E7%BC%9A.html" },
  { title: "\u7dca\u8eab\u8863", value: "/index.php/vod/search/tag/%E7%B7%8A%E8%BA%AB%E8%A1%A3.html" },
  { title: "\u62d8\u675f", value: "/index.php/vod/search/tag/%E6%8B%98%E6%9D%9F.html" },
  { title: "\u5c40\u90e8\u7279\u5beb", value: "/index.php/vod/search/tag/%E5%B1%80%E9%83%A8%E7%89%B9%E5%AF%AB.html" },
  { title: "\u5de8\u5c3b", value: "/index.php/vod/search/tag/%E5%B7%A8%E5%B0%BB.html" },
  { title: "\u5de8\u4e73", value: "/index.php/vod/search/tag/%E5%B7%A8%E4%B9%B3.html" },
  { title: "\u7a7a\u4e2d\u5c0f\u59d0", value: "/index.php/vod/search/tag/%E7%A9%BA%E4%B8%AD%E5%B0%8F%E5%A7%90.html" },
  { title: "\u53e3\u4ea4", value: "/index.php/vod/search/tag/%E5%8F%A3%E4%BA%A4.html" },
  { title: "\u53e3\u5167\u5c04\u7cbe", value: "/index.php/vod/search/tag/%E5%8F%A3%E5%85%A7%E5%B0%84%E7%B2%BE.html" },
  { title: "\u53e3\u5185\u767a\u5c04", value: "/index.php/vod/search/tag/%E5%8F%A3%E5%86%85%E7%99%BA%E5%B0%84.html" },
  { title: "\u874b\u71ed", value: "/index.php/vod/search/tag/%E8%9D%8B%E7%87%AD.html" },
  { title: "\u8fa3\u59b9", value: "/index.php/vod/search/tag/%E8%BE%A3%E5%A6%B9.html" },
  { title: "\u6feb\u4ea4", value: "/index.php/vod/search/tag/%E6%BF%AB%E4%BA%A4.html" },
  { title: "\u7acb\u5373\u53e3\u4ea4", value: "/index.php/vod/search/tag/%E7%AB%8B%E5%8D%B3%E5%8F%A3%E4%BA%A4.html" },
  { title: "\u9023\u8932\u896a", value: "/index.php/vod/search/tag/%E9%80%A3%E8%A4%B2%E8%A5%AA.html" },
  { title: "\u6200\u611b", value: "/index.php/vod/search/tag/%E6%88%80%E6%84%9B.html" },
  { title: "\u6200\u4e73\u7656", value: "/index.php/vod/search/tag/%E6%88%80%E4%B9%B3%E7%99%96.html" },
  { title: "\u6200\u817f\u7656", value: "/index.php/vod/search/tag/%E6%88%80%E8%85%BF%E7%99%96.html" },
  { title: "\u7375\u8c54", value: "/index.php/vod/search/tag/%E7%8D%B5%E8%B1%94.html" },
  { title: "\u51cc\u8fb1", value: "/index.php/vod/search/tag/%E5%87%8C%E8%BE%B1.html" },
  { title: "\u65c5\u884c", value: "/index.php/vod/search/tag/%E6%97%85%E8%A1%8C.html" },
  { title: "\u4e82\u4ea4", value: "/index.php/vod/search/tag/%E4%BA%82%E4%BA%A4.html" },
  { title: "\u4e82\u502b", value: "/index.php/vod/search/tag/%E4%BA%82%E5%80%AB.html" },
  { title: "\u88f8\u9ad4\u570d\u88d9", value: "/index.php/vod/search/tag/%E8%A3%B8%E9%AB%94%E5%9C%8D%E8%A3%99.html" },
  { title: "\u883b\u6a6b\u5b0c\u7f9e", value: "/index.php/vod/search/tag/%E8%A0%BB%E6%A9%AB%E5%AC%8C%E7%BE%9E.html" },
  { title: "\u7f8e\u767d", value: "/index.php/vod/search/tag/%E7%BE%8E%E7%99%BD.html" },
  { title: "\u7f8e\u811a", value: "/index.php/vod/search/tag/%E7%BE%8E%E8%84%9A.html" },
  { title: "\u7f8e\u5c3b", value: "/index.php/vod/search/tag/%E7%BE%8E%E5%B0%BB.html" },
  { title: "\u7f8e\u5bb9\u9662", value: "/index.php/vod/search/tag/%E7%BE%8E%E5%AE%B9%E9%99%A2.html" },
  { title: "\u7f8e\u4e73", value: "/index.php/vod/search/tag/%E7%BE%8E%E4%B9%B3.html" },
  { title: "\u7f8e\u5c11\u5973", value: "/index.php/vod/search/tag/%E7%BE%8E%E5%B0%91%E5%A5%B3.html" },
  { title: "\u7f8e\u817f", value: "/index.php/vod/search/tag/%E7%BE%8E%E8%85%BF.html" },
  { title: "\u7f8e\u81c0", value: "/index.php/vod/search/tag/%E7%BE%8E%E8%87%80.html" },
  { title: "\u8ff7\u4f60\u88d9", value: "/index.php/vod/search/tag/%E8%BF%B7%E4%BD%A0%E8%A3%99.html" },
  { title: "\u8ff7\u4f60\u4fc2\u5217", value: "/index.php/vod/search/tag/%E8%BF%B7%E4%BD%A0%E4%BF%82%E5%88%97.html" },
  { title: "\u79d8\u66f8", value: "/index.php/vod/search/tag/%E7%A7%98%E6%9B%B8.html" },
  { title: "\u9762\u63a5", value: "/index.php/vod/search/tag/%E9%9D%A2%E6%8E%A5.html" },
  { title: "\u82d7\u689d", value: "/index.php/vod/search/tag/%E8%8B%97%E6%A2%9D.html" },
  { title: "\u6a21\u7279\u5152", value: "/index.php/vod/search/tag/%E6%A8%A1%E7%89%B9%E5%85%92.html" },
  { title: "\u6bcd\u89aa", value: "/index.php/vod/search/tag/%E6%AF%8D%E8%A6%AA.html" },
  { title: "\u6bcd\u4e73", value: "/index.php/vod/search/tag/%E6%AF%8D%E4%B9%B3.html" },
  { title: "\u5167\u5c04", value: "/index.php/vod/search/tag/%E5%85%A7%E5%B0%84.html" },
  { title: "\u5167\u8863", value: "/index.php/vod/search/tag/%E5%85%A7%E8%A1%A3.html" },
  { title: "\u5e74\u8f15\u59bb\u5b50", value: "/index.php/vod/search/tag/%E5%B9%B4%E8%BC%95%E5%A6%BB%E5%AD%90.html" },
  { title: "\u5a18\u30fb\u990a\u5973", value: "/index.php/vod/search/tag/%E5%A8%98%E3%83%BB%E9%A4%8A%E5%A5%B3.html" },
  { title: "\u5973\u5927\u5b78\u751f", value: "/index.php/vod/search/tag/%E5%A5%B3%E5%A4%A7%E5%AD%B8%E7%94%9F.html" },
  { title: "\u5973\u6aa2\u5bdf\u5b98", value: "/index.php/vod/search/tag/%E5%A5%B3%E6%AA%A2%E5%AF%9F%E5%AE%98.html" },
  { title: "\u5973\u6559\u5e2b", value: "/index.php/vod/search/tag/%E5%A5%B3%E6%95%99%E5%B8%AB.html" },
  { title: "\u5973\u8001\u677f", value: "/index.php/vod/search/tag/%E5%A5%B3%E8%80%81%E6%9D%BF.html" },
  { title: "\u5973\u4e0a\u53f8", value: "/index.php/vod/search/tag/%E5%A5%B3%E4%B8%8A%E5%8F%B8.html" },
  { title: "\u5973\u4e0a\u4f4d", value: "/index.php/vod/search/tag/%E5%A5%B3%E4%B8%8A%E4%BD%8D.html" },
  { title: "\u5973\u751f", value: "/index.php/vod/search/tag/%E5%A5%B3%E7%94%9F.html" },
  { title: "\u5973\u540c\u63a5\u543b", value: "/index.php/vod/search/tag/%E5%A5%B3%E5%90%8C%E6%8E%A5%E5%90%BB.html" },
  { title: "\u5973\u540c\u6027\u6200", value: "/index.php/vod/search/tag/%E5%A5%B3%E5%90%8C%E6%80%A7%E6%88%80.html" },
  { title: "\u5973\u738b\u69d8", value: "/index.php/vod/search/tag/%E5%A5%B3%E7%8E%8B%E6%A7%98.html" },
  { title: "\u5973\u91ab\u751f", value: "/index.php/vod/search/tag/%E5%A5%B3%E9%86%AB%E7%94%9F.html" },
  { title: "\u5973\u50ad", value: "/index.php/vod/search/tag/%E5%A5%B3%E5%82%AD.html" },
  { title: "\u5973\u512a", value: "/index.php/vod/search/tag/%E5%A5%B3%E5%84%AA.html" },
  { title: "\u5973\u512a\u6309\u6469\u68d2", value: "/index.php/vod/search/tag/%E5%A5%B3%E5%84%AA%E6%8C%89%E6%91%A9%E6%A3%92.html" },
  { title: "\u5973\u6230\u58eb", value: "/index.php/vod/search/tag/%E5%A5%B3%E6%88%B0%E5%A3%AB.html" },
  { title: "\u5973\u4e3b\u64ad", value: "/index.php/vod/search/tag/%E5%A5%B3%E4%B8%BB%E6%92%AD.html" },
  { title: "\u5973\u4e3b\u4eba", value: "/index.php/vod/search/tag/%E5%A5%B3%E4%B8%BB%E4%BA%BA.html" },
  { title: "\u5973\u88dd\u4eba\u5996", value: "/index.php/vod/search/tag/%E5%A5%B3%E8%A3%9D%E4%BA%BA%E5%A6%96.html" },
  { title: "\u5076\u50cf\u85dd\u4eba", value: "/index.php/vod/search/tag/%E5%81%B6%E5%83%8F%E8%97%9D%E4%BA%BA.html" },
  { title: "\u80d6\u5973\u4eba", value: "/index.php/vod/search/tag/%E8%83%96%E5%A5%B3%E4%BA%BA.html" },
  { title: "\u914d\u4fe1\u5c02\u7528", value: "/index.php/vod/search/tag/%E9%85%8D%E4%BF%A1%E5%B0%82%E7%94%A8.html" },
  { title: "\u5c41\u80a1", value: "/index.php/vod/search/tag/%E5%B1%81%E8%82%A1.html" },
  { title: "\u8ca7\u4e73\u30fb\u5fae\u4e73", value: "/index.php/vod/search/tag/%E8%B2%A7%E4%B9%B3%E3%83%BB%E5%BE%AE%E4%B9%B3.html" },
  { title: "\u5a46\u5a46", value: "/index.php/vod/search/tag/%E5%A9%86%E5%A9%86.html" },
  { title: "\u5176\u4ed6\u6200\u7269\u7656", value: "/index.php/vod/search/tag/%E5%85%B6%E4%BB%96%E6%88%80%E7%89%A9%E7%99%96.html" },
  { title: "\u9a0e\u4e58\u4f4d", value: "/index.php/vod/search/tag/%E9%A8%8E%E4%B9%98%E4%BD%8D.html" },
  { title: "\u4f01\u756b", value: "/index.php/vod/search/tag/%E4%BC%81%E7%95%AB.html" },
  { title: "\u6c7d\u8eca\u6027\u611b", value: "/index.php/vod/search/tag/%E6%B1%BD%E8%BB%8A%E6%80%A7%E6%84%9B.html" },
  { title: "\u5343\u91d1\u5c0f\u59d0", value: "/index.php/vod/search/tag/%E5%8D%83%E9%87%91%E5%B0%8F%E5%A7%90.html" },
  { title: "\u6e05\u695a", value: "/index.php/vod/search/tag/%E6%B8%85%E6%A5%9A.html" },
  { title: "\u60c5\u4fb6", value: "/index.php/vod/search/tag/%E6%83%85%E4%BE%B6.html" },
  { title: "\u62f3\u4ea4", value: "/index.php/vod/search/tag/%E6%8B%B3%E4%BA%A4.html" },
  { title: "\u65e5\u713c\u3051", value: "/index.php/vod/search/tag/%E6%97%A5%E7%84%BC%E3%81%91.html" },
  { title: "\u4e73\u623f", value: "/index.php/vod/search/tag/%E4%B9%B3%E6%88%BF.html" },
  { title: "\u4e73\u4ea4", value: "/index.php/vod/search/tag/%E4%B9%B3%E4%BA%A4.html" },
  { title: "\u4e73\u6db2", value: "/index.php/vod/search/tag/%E4%B9%B3%E6%B6%B2.html" },
  { title: "\u6f64\u6ed1\u5291", value: "/index.php/vod/search/tag/%E6%BD%A4%E6%BB%91%E5%8A%91.html" },
  { title: "\u8cfd\u8eca\u5973\u90ce", value: "/index.php/vod/search/tag/%E8%B3%BD%E8%BB%8A%E5%A5%B3%E9%83%8E.html" },
  { title: "\u7619\u7662", value: "/index.php/vod/search/tag/%E7%98%99%E7%99%A2.html" },
  { title: "\u8272\u767d", value: "/index.php/vod/search/tag/%E8%89%B2%E7%99%BD.html" },
  { title: "\u5c04\u5728\u5916\u9670", value: "/index.php/vod/search/tag/%E5%B0%84%E5%9C%A8%E5%A4%96%E9%99%B0.html" },
  { title: "\u8eab\u9ad4\u610f\u8b58", value: "/index.php/vod/search/tag/%E8%BA%AB%E9%AB%94%E6%84%8F%E8%AD%98.html" },
  { title: "\u6df1\u5589", value: "/index.php/vod/search/tag/%E6%B7%B1%E5%96%89.html" },
  { title: "\u6642\u9593\u505c\u6b62", value: "/index.php/vod/search/tag/%E6%99%82%E9%96%93%E5%81%9C%E6%AD%A2.html" },
  { title: "\u8996\u8a0a\u5c0f\u59d0", value: "/index.php/vod/search/tag/%E8%A6%96%E8%A8%8A%E5%B0%8F%E5%A7%90.html" },
  { title: "\u624b\u6deb", value: "/index.php/vod/search/tag/%E6%89%8B%E6%B7%AB.html" },
  { title: "\u624b\u6307\u63d2\u5165", value: "/index.php/vod/search/tag/%E6%89%8B%E6%8C%87%E6%8F%92%E5%85%A5.html" },
  { title: "\u9996\u6b21", value: "/index.php/vod/search/tag/%E9%A6%96%E6%AC%A1.html" },
  { title: "\u9996\u6b21\u4eae\u76f8", value: "/index.php/vod/search/tag/%E9%A6%96%E6%AC%A1%E4%BA%AE%E7%9B%B8.html" },
  { title: "\u53d4\u6bcd\u3055\u3093", value: "/index.php/vod/search/tag/%E5%8F%94%E6%AF%8D%E3%81%95%E3%82%93.html" },
  { title: "\u719f\u5973", value: "/index.php/vod/search/tag/%E7%86%9F%E5%A5%B3.html" },
  { title: "\u6578\u4f4d\u99ac\u8cfd\u514b", value: "/index.php/vod/search/tag/%E6%95%B8%E4%BD%8D%E9%A6%AC%E8%B3%BD%E5%85%8B.html" },
  { title: "\u96d9\u6027\u4eba", value: "/index.php/vod/search/tag/%E9%9B%99%E6%80%A7%E4%BA%BA.html" },
  { title: "\u6c34\u624b\u670d", value: "/index.php/vod/search/tag/%E6%B0%B4%E6%89%8B%E6%9C%8D.html" },
  { title: "\u7d20\u4eba", value: "/index.php/vod/search/tag/%E7%B4%A0%E4%BA%BA.html" },
  { title: "\u7279\u6548", value: "/index.php/vod/search/tag/%E7%89%B9%E6%95%88.html" },
  { title: "\u9ad4\u80b2\u670d", value: "/index.php/vod/search/tag/%E9%AB%94%E8%82%B2%E6%9C%8D.html" },
  { title: "\u8214\u9670", value: "/index.php/vod/search/tag/%E8%88%94%E9%99%B0.html" },
  { title: "\u8df3\u821e", value: "/index.php/vod/search/tag/%E8%B7%B3%E8%88%9E.html" },
  { title: "\u901a\u59e6", value: "/index.php/vod/search/tag/%E9%80%9A%E5%A7%A6.html" },
  { title: "\u7ae5\u5e74\u670b\u53cb", value: "/index.php/vod/search/tag/%E7%AB%A5%E5%B9%B4%E6%9C%8B%E5%8F%8B.html" },
  { title: "\u7ae5\u9854", value: "/index.php/vod/search/tag/%E7%AB%A5%E9%A1%94.html" },
  { title: "\u5077\u7aa5", value: "/index.php/vod/search/tag/%E5%81%B7%E7%AA%A5.html" },
  { title: "\u6295\u7a3f", value: "/index.php/vod/search/tag/%E6%8A%95%E7%A8%BF.html" },
  { title: "\u5154\u5973\u90ce", value: "/index.php/vod/search/tag/%E5%85%94%E5%A5%B3%E9%83%8E.html" },
  { title: "\u541e\u7cbe", value: "/index.php/vod/search/tag/%E5%90%9E%E7%B2%BE.html" },
  { title: "\u73a9\u5177", value: "/index.php/vod/search/tag/%E7%8E%A9%E5%85%B7.html" },
  { title: "\u5984\u60f3", value: "/index.php/vod/search/tag/%E5%A6%84%E6%83%B3.html" },
  { title: "\u5984\u60f3\u65cf", value: "/index.php/vod/search/tag/%E5%A6%84%E6%83%B3%E6%97%8F.html" },
  { title: "\u5fae\u4e73", value: "/index.php/vod/search/tag/%E5%BE%AE%E4%B9%B3.html" },
  { title: "\u7325\u893b\u7a7f\u8457", value: "/index.php/vod/search/tag/%E7%8C%A5%E8%A4%BB%E7%A9%BF%E8%91%97.html" },
  { title: "\u6e29\u6cc9", value: "/index.php/vod/search/tag/%E6%B8%A9%E6%B3%89.html" },
  { title: "\u7121\u6bdb", value: "/index.php/vod/search/tag/%E7%84%A1%E6%AF%9B.html" },
  { title: "\u7121\u5957", value: "/index.php/vod/search/tag/%E7%84%A1%E5%A5%97.html" },
  { title: "\u6232\u5287", value: "/index.php/vod/search/tag/%E6%88%B2%E5%8A%87.html" },
  { title: "\u6821\u670d", value: "/index.php/vod/search/tag/%E6%A0%A1%E6%9C%8D.html" },
  { title: "\u65b0\u5a18", value: "/index.php/vod/search/tag/%E6%96%B0%E5%A8%98.html" },
  { title: "\u6027\u5225\u8f49\u578b\u00b7\u5973\u6027\u5316", value: "/index.php/vod/search/tag/%E6%80%A7%E5%88%A5%E8%BD%89%E5%9E%8B%C2%B7%E5%A5%B3%E6%80%A7%E5%8C%96.html" },
  { title: "\u6027\u611f\u7684", value: "/index.php/vod/search/tag/%E6%80%A7%E6%84%9F%E7%9A%84.html" },
  { title: "\u6027\u9a37\u64fe", value: "/index.php/vod/search/tag/%E6%80%A7%E9%A8%B7%E6%93%BE.html" },
  { title: "\u80f8\u30c1\u30e9", value: "/index.php/vod/search/tag/%E8%83%B8%E3%83%81%E3%83%A9.html" },
  { title: "\u7f9e\u6065", value: "/index.php/vod/search/tag/%E7%BE%9E%E6%81%A5.html" },
  { title: "\u5b78\u6821\u6cf3\u88dd", value: "/index.php/vod/search/tag/%E5%AD%B8%E6%A0%A1%E6%B3%B3%E8%A3%9D.html" },
  { title: "\u5b78\u6821\u4f5c\u54c1", value: "/index.php/vod/search/tag/%E5%AD%B8%E6%A0%A1%E4%BD%9C%E5%93%81.html" },
  { title: "\u9d28\u5634", value: "/index.php/vod/search/tag/%E9%B4%A8%E5%98%B4.html" },
  { title: "\u984f\u9762\u9a0e\u4e58", value: "/index.php/vod/search/tag/%E9%A1%8F%E9%9D%A2%E9%A8%8E%E4%B9%98.html" },
  { title: "\u984f\u5c04", value: "/index.php/vod/search/tag/%E9%A1%8F%E5%B0%84.html" },
  { title: "\u773c\u93e1", value: "/index.php/vod/search/tag/%E7%9C%BC%E9%8F%A1.html" },
  { title: "\u85e5\u7269", value: "/index.php/vod/search/tag/%E8%97%A5%E7%89%A9.html" },
  { title: "\u91ce\u5916\u30fb\u9732\u51fa", value: "/index.php/vod/search/tag/%E9%87%8E%E5%A4%96%E3%83%BB%E9%9C%B2%E5%87%BA.html" },
  { title: "\u696d\u9918", value: "/index.php/vod/search/tag/%E6%A5%AD%E9%A4%98.html" },
  { title: "\u5df2\u5a5a\u5a66\u5973", value: "/index.php/vod/search/tag/%E5%B7%B2%E5%A9%9A%E5%A9%A6%E5%A5%B3.html" },
  { title: "\u6deb\u8a9e", value: "/index.php/vod/search/tag/%E6%B7%AB%E8%AA%9E.html" },
  { title: "\u6deb\u8a9e\u30e2\u30ce", value: "/index.php/vod/search/tag/%E6%B7%AB%E8%AA%9E%E3%83%A2%E3%83%8E.html" },
  { title: "\u98f2\u5c3f", value: "/index.php/vod/search/tag/%E9%A3%B2%E5%B0%BF.html" },
  { title: "\u98f2\u307f\u4f1a\u30fb\u5408\u30b3\u30f3", value: "/index.php/vod/search/tag/%E9%A3%B2%E3%81%BF%E4%BC%9A%E3%83%BB%E5%90%88%E3%82%B3%E3%83%B3.html" },
  { title: "\u6cf3\u8863", value: "/index.php/vod/search/tag/%E6%B3%B3%E8%A1%A3.html" },
  { title: "\u6cf3\u88dd", value: "/index.php/vod/search/tag/%E6%B3%B3%E8%A3%9D.html" },
  { title: "\u6d74\u8863\u548c\u670d", value: "/index.php/vod/search/tag/%E6%B5%B4%E8%A1%A3%E5%92%8C%E6%9C%8D.html" },
  { title: "\u539f\u4f5c\u30b3\u30e9\u30dc", value: "/index.php/vod/search/tag/%E5%8E%9F%E4%BD%9C%E3%82%B3%E3%83%A9%E3%83%9C.html" },
  { title: "\u5b55\u307e\u305b", value: "/index.php/vod/search/tag/%E5%AD%95%E3%81%BE%E3%81%9B.html" },
  { title: "\u904b\u52d5", value: "/index.php/vod/search/tag/%E9%81%8B%E5%8B%95.html" },
  { title: "\u65e9\u6f0f", value: "/index.php/vod/search/tag/%E6%97%A9%E6%BC%8F.html" },
  { title: "\u6298\u78e8", value: "/index.php/vod/search/tag/%E6%8A%98%E7%A3%A8.html" },
  { title: "\u632f\u52d5", value: "/index.php/vod/search/tag/%E6%8C%AF%E5%8B%95.html" },
  { title: "\u6307\u6cd5", value: "/index.php/vod/search/tag/%E6%8C%87%E6%B3%95.html" },
  { title: "\u5236\u670d", value: "/index.php/vod/search/tag/%E5%88%B6%E6%9C%8D.html" },
  { title: "\u4e2d\u51fa", value: "/index.php/vod/search/tag/%E4%B8%AD%E5%87%BA.html" },
  { title: "\u4e3b\u89c0\u8996\u89d2", value: "/index.php/vod/search/tag/%E4%B8%BB%E8%A7%80%E8%A6%96%E8%A7%92.html" },
  { title: "\u81ea\u6170", value: "/index.php/vod/search/tag/%E8%87%AA%E6%85%B0.html" },
  { title: "\u5b50\u5bae\u9838", value: "/index.php/vod/search/tag/%E5%AD%90%E5%AE%AE%E9%A0%B8.html" },
  { title: "\u8db3\u4ea4", value: "/index.php/vod/search/tag/%E8%B6%B3%E4%BA%A4.html" },
  { title: "AI\u751f\u6210\u4f5c\u54c1", value: "/index.php/vod/search/tag/AI%E7%94%9F%E6%88%90%E4%BD%9C%E5%93%81.html" },
  { title: "AV\u5973\u512a", value: "/index.php/vod/search/tag/AV%E5%A5%B3%E5%84%AA.html" },
  { title: "DMM\u7368\u5bb6", value: "/index.php/vod/search/tag/DMM%E7%8D%A8%E5%AE%B6.html" },
  { title: "DMM\u5c08\u5c6c", value: "/index.php/vod/search/tag/DMM%E5%B0%88%E5%B1%AC.html" },
  { title: "F\u30ab\u30c3\u30d7", value: "/index.php/vod/search/tag/F%E3%82%AB%E3%83%83%E3%83%97.html" },
  { title: "G\u30ab\u30c3\u30d7", value: "/index.php/vod/search/tag/G%E3%82%AB%E3%83%83%E3%83%97.html" },
  { title: "H\u30ab\u30c3\u30d7", value: "/index.php/vod/search/tag/H%E3%82%AB%E3%83%83%E3%83%97.html" },
  { title: "M\u7537", value: "/index.php/vod/search/tag/M%E7%94%B7.html" },
  { title: "M\u5973", value: "/index.php/vod/search/tag/M%E5%A5%B3.html" },
  { title: "MGS\u3060\u3051\u306e\u304a\u307e\u3051\u6620\u50cf\u4ed8\u304d", value: "/index.php/vod/search/tag/MGS%E3%81%A0%E3%81%91%E3%81%AE%E3%81%8A%E3%81%BE%E3%81%91%E6%98%A0%E5%83%8F%E4%BB%98%E3%81%8D.html" },
  { title: "OL", value: "/index.php/vod/search/tag/OL.html" },
  { title: "SM", value: "/index.php/vod/search/tag/SM.html" },
  { title: "VR\u5c02\u7528", value: "/index.php/vod/search/tag/VR%E5%B0%82%E7%94%A8.html" },
  { title: "\u30a2\u30af\u30e1\u30fb\u30aa\u30fc\u30ac\u30ba\u30e0", value: "/index.php/vod/search/tag/%E3%82%A2%E3%82%AF%E3%83%A1%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%AC%E3%82%BA%E3%83%A0.html" },
  { title: "\u30a2\u30b9\u30ea\u30fc\u30c8", value: "/index.php/vod/search/tag/%E3%82%A2%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%88.html" },
  { title: "\u30a2\u30ca\u30eb\u30bb\u30c3\u30af\u30b9\uff08\u7537\u306e\u5a18\uff09", value: "/index.php/vod/search/tag/%E3%82%A2%E3%83%8A%E3%83%AB%E3%82%BB%E3%83%83%E3%82%AF%E3%82%B9%EF%BC%88%E7%94%B7%E3%81%AE%E5%A8%98%EF%BC%89.html" },
  { title: "\u30a8\u30b9\u30c6\u30fb\u30de\u30c3\u30b5\u30fc\u30b8", value: "/index.php/vod/search/tag/%E3%82%A8%E3%82%B9%E3%83%86%E3%83%BB%E3%83%9E%E3%83%83%E3%82%B5%E3%83%BC%E3%82%B8.html" },
  { title: "\u30a8\u30de\u30cb\u30a8\u30eb", value: "/index.php/vod/search/tag/%E3%82%A8%E3%83%9E%E3%83%8B%E3%82%A8%E3%83%AB.html" },
  { title: "\u304a\u98a8\u5442", value: "/index.php/vod/search/tag/%E3%81%8A%E9%A2%A8%E5%91%82.html" },
  { title: "\u304a\u5a46\u3061\u3083\u3093", value: "/index.php/vod/search/tag/%E3%81%8A%E5%A9%86%E3%81%A1%E3%82%83%E3%82%93.html" },
  { title: "\u304a\u723a\u3061\u3083\u3093", value: "/index.php/vod/search/tag/%E3%81%8A%E7%88%BA%E3%81%A1%E3%82%83%E3%82%93.html" },
  { title: "\u30aa\u30bf\u30af", value: "/index.php/vod/search/tag/%E3%82%AA%E3%82%BF%E3%82%AF.html" },
  { title: "\u30aa\u30ca\u30b5\u30dd", value: "/index.php/vod/search/tag/%E3%82%AA%E3%83%8A%E3%82%B5%E3%83%9D.html" },
  { title: "\u30aa\u30e2\u30c1\u30e3", value: "/index.php/vod/search/tag/%E3%82%AA%E3%83%A2%E3%83%81%E3%83%A3.html" },
  { title: "\u30ad\u30b9\u30fb\u63a5\u543b", value: "/index.php/vod/search/tag/%E3%82%AD%E3%82%B9%E3%83%BB%E6%8E%A5%E5%90%BB.html" },
  { title: "\u30b9\u30d1\u30f3\u30ad\u30f3\u30b0", value: "/index.php/vod/search/tag/%E3%82%B9%E3%83%91%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0.html" },
  { title: "\u30b9\u30ef\u30c3\u30d4\u30f3\u30b0\u30fb\u592b\u5a66\u4ea4\u63db", value: "/index.php/vod/search/tag/%E3%82%B9%E3%83%AF%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%83%BB%E5%A4%AB%E5%A9%A6%E4%BA%A4%E6%8F%9B.html" },
  { title: "\u30c1\u30a2\u30ac\u30fc\u30eb", value: "/index.php/vod/search/tag/%E3%83%81%E3%82%A2%E3%82%AC%E3%83%BC%E3%83%AB.html" },
  { title: "\u30c7\u30fc\u30c8", value: "/index.php/vod/search/tag/%E3%83%87%E3%83%BC%E3%83%88.html" },
  { title: "\u30c7\u30a3\u30eb\u30c9", value: "/index.php/vod/search/tag/%E3%83%87%E3%82%A3%E3%83%AB%E3%83%89.html" },
  { title: "\u30c7\u30ab\u30c1\u30f3\u30fb\u5de8\u6839", value: "/index.php/vod/search/tag/%E3%83%87%E3%82%AB%E3%83%81%E3%83%B3%E3%83%BB%E5%B7%A8%E6%A0%B9.html" },
  { title: "\u30ce\u30fc\u30d6\u30e9", value: "/index.php/vod/search/tag/%E3%83%8E%E3%83%BC%E3%83%96%E3%83%A9.html" },
  { title: "\u30cf\u30fc\u30ec\u30e0", value: "/index.php/vod/search/tag/%E3%83%8F%E3%83%BC%E3%83%AC%E3%83%A0.html" },
  { title: "\u30cf\u30a4\u30af\u30aa\u30ea\u30c6\u30a3VR", value: "/index.php/vod/search/tag/%E3%83%8F%E3%82%A4%E3%82%AF%E3%82%AA%E3%83%AA%E3%83%86%E3%82%A3VR.html" },
  { title: "\u30d0\u30c3\u30af", value: "/index.php/vod/search/tag/%E3%83%90%E3%83%83%E3%82%AF.html" },
  { title: "\u30d1\u30f3\u30b9\u30c8\u30e2\u30ce", value: "/index.php/vod/search/tag/%E3%83%91%E3%83%B3%E3%82%B9%E3%83%88%E3%83%A2%E3%83%8E.html" },
  { title: "\u30d3\u30b8\u30cd\u30b9\u30b9\u30fc\u30c4", value: "/index.php/vod/search/tag/%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%82%B9%E3%83%BC%E3%83%84.html" },
  { title: "\u30d3\u30c3\u30c1", value: "/index.php/vod/search/tag/%E3%83%93%E3%83%83%E3%83%81.html" },
  { title: "\u30d5\u30a1\u30f3\u611f\u8b1d\u30fb\u8a2a\u554f", value: "/index.php/vod/search/tag/%E3%83%95%E3%82%A1%E3%83%B3%E6%84%9F%E8%AC%9D%E3%83%BB%E8%A8%AA%E5%95%8F.html" },
  { title: "\u30d5\u30a7\u30e9\u30e2\u30ce", value: "/index.php/vod/search/tag/%E3%83%95%E3%82%A7%E3%83%A9%E3%83%A2%E3%83%8E.html" },
  { title: "\u30d5\u30eb\u30cf\u30a4\u30d3\u30b8\u30e7\u30f3(FHD)", value: "/index.php/vod/search/tag/%E3%83%95%E3%83%AB%E3%83%8F%E3%82%A4%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3%28FHD%29.html" },
  { title: "\u30d8\u30eb\u30b9\u30fb\u30bd\u30fc\u30d7", value: "/index.php/vod/search/tag/%E3%83%98%E3%83%AB%E3%82%B9%E3%83%BB%E3%82%BD%E3%83%BC%E3%83%97.html" },
  { title: "\u30db\u30c6\u30eb", value: "/index.php/vod/search/tag/%E3%83%9B%E3%83%86%E3%83%AB.html" },
  { title: "\u30e1\u30ac\u30cd", value: "/index.php/vod/search/tag/%E3%83%A1%E3%82%AC%E3%83%8D.html" },
  { title: "\u30e8\u30ac", value: "/index.php/vod/search/tag/%E3%83%A8%E3%82%AC.html" },
  { title: "\u30ed\u30fc\u30b7\u30e7\u30f3\u30fb\u30aa\u30a4\u30eb", value: "/index.php/vod/search/tag/%E3%83%AD%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%BB%E3%82%AA%E3%82%A4%E3%83%AB.html" }
];

WidgetMetadata = {
  id: "forward.kanav",
  title: "KanAV",
  version: "1.0.7",
  requiredVersion: "0.0.1",
  description: "KanAV \u89c6\u9891\u6e90",
  author: "\u8001\u5934",
  site: "https://kanav.info",
  detailCacheDuration: 300,
  modules: [
    { id: "cnSub",     title: "\u4e2d\u6587\u5b57\u5e55", functionName: "loadCnSub",    cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "jpKrCen",   title: "\u65e5\u97e9\u6709\u7801", functionName: "loadJpKrCen",  cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "jpKrUncen", title: "\u65e5\u97e9\u65e0\u7801", functionName: "loadJpKrUncen",cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "cnAv",      title: "\u56fd\u4ea7AV",           functionName: "loadCnAv",     cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "selfie",    title: "\u81ea\u62cd\u6cc4\u5bc6", functionName: "loadSelfie",   cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "hookup",    title: "\u63a2\u82b1\u7ea6\u70ae", functionName: "loadHookup",   cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "streamer",  title: "\u4e3b\u64ad\u5f55\u5236", functionName: "loadStreamer", cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    { id: "anime",     title: "\u52a8\u6f2b\u756a\u5267", functionName: "loadAnime",    cacheDuration: 3600, params: [{ name: "page", title: "\u9875\u7801", type: "page" }] },
    {
      id: "tags",
      title: "\u6807\u7b7e",
      description: "\u6309\u6807\u7b7e\u6d4f\u89c8\u5f71\u7247",
      functionName: "loadTags",
      cacheDuration: 3600,
      params: [
        {
          name: "tagId",
          title: "\u9009\u62e9\u6807\u7b7e",
          type: "enumeration",
          enumOptions: TAG_ENUM_OPTIONS,
        },
        { name: "page", title: "\u9875\u7801", type: "page" },
      ],
    },
    {
      id: "hot",
      title: "\u70ed\u95e8\u5f71\u7247",
      functionName: "loadHot",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }],
    },
  ],
  search: {
    title: "\u641c\u7d22",
    functionName: "search",
    params: [
      { name: "keyword", title: "\u5173\u952e\u8bcd", type: "input" },
      { name: "page", title: "\u9875\u7801", type: "page" },
    ],
  },
};

const BASE = "https://kanav.info";
const CDN_REFERER = "https://kanav.ad/";  // CDN防盗链要求Referer为kanav.ad，而非kanav.info
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Mobile/15E148 Safari/604.1";
const VIDEO_CACHE_TTL = 3600;
const PLAY_HEADERS = {
  "User-Agent": UA,
  "Referer": CDN_REFERER,
  "Origin": "https://kanav.ad",
  "Accept": "*/*",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
};
const DETAIL_HEADERS = {
  "User-Agent": UA,
  "Referer": BASE + "/",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
};

function resolveAbsoluteUrl(base, ref) {
  if (!ref) return "";
  if (ref.startsWith("http")) return ref;
  if (ref.startsWith("//")) return "https:" + ref;
  if (ref.startsWith("/")) {
    const origin = String(base).match(/^(https?:\/\/[^/]+)/);
    return origin ? origin[1] + ref : ref;
  }
  const root = String(base).substring(0, String(base).lastIndexOf("/") + 1);
  return root + ref;
}

function parseStreamBandwidth(line) {
  const m = String(line).match(/BANDWIDTH=(\d+)/i);
  return m ? Number(m[1]) : 0;
}

async function optimizeM3u8Url(url, headers, depth) {
  if (!url || !/\.m3u8(\?|$)/i.test(url) || depth > 2) return url;
  try {
    const res = await Widget.http.get(url, { headers });
    const text = typeof res.data === "string" ? res.data : String(res.data || "");
    if (!text.includes("#EXTM3U")) return url;

    const lines = text.split(/\r?\n/);
    const variants = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line.startsWith("#EXT-X-STREAM-INF")) continue;
      const next = (lines[i + 1] || "").trim();
      if (next && !next.startsWith("#")) {
        variants.push({
          bw: parseStreamBandwidth(line),
          url: resolveAbsoluteUrl(url, next),
        });
      }
    }
    if (variants.length === 0) return url;

    variants.sort((a, b) => a.bw - b.bw);
    const picked = variants.length > 1 ? variants[1] : variants[0];
    return await optimizeM3u8Url(picked.url, headers, depth + 1);
  } catch (e) {
    return url;
  }
}

async function finalizeVideoUrl(url, headers) {
  if (!url) return "";
  if (/\.mp4(\?|$)/i.test(url)) return url;
  if (/\.m3u8(\?|$)/i.test(url)) return await optimizeM3u8Url(url, headers, 0);
  return url;
}

async function deliverDetail(link, videoUrl, extras) {
  const headers = Object.assign({}, PLAY_HEADERS);
  const finalUrl = await finalizeVideoUrl(videoUrl, headers);
  writeVideoCache(link, finalUrl, headers);
  return buildDetailItem(link, finalUrl, headers, extras);
}

function readVideoCache(link) {
  try {
    const raw = Widget.storage.get("vurl:v2:" + String(link));
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (data && data.videoUrl && data.ts && Date.now() - data.ts < VIDEO_CACHE_TTL * 1000) {
      return data;
    }
  } catch (e) {}
  return null;
}

function writeVideoCache(link, videoUrl, customHeaders) {
  if (!videoUrl) return;
  try {
    Widget.storage.set("vurl:v2:" + String(link), JSON.stringify({
      videoUrl,
      customHeaders,
      ts: Date.now(),
    }));
  } catch (e) {}
}

function resolveBaseUrl(link) {
  const m = String(link || "").match(/^(https?:\/\/[^/]+)/);
  return m ? m[1] : BASE;
}


const DMM_PROBE_WORKER_BASE = "https://dmm.laotou.ccwu.cc";
const DMM_PROBE_WORKER_CACHE = {};
const DMM_PROBE_WORKER_TIMEOUT_MS = 8000;
const DMM_PROBE_DETAIL_BUDGET_MS = 2500;
const DMM_PROBE_STORAGE_PREFIX = "javdb.dmmProbe.v1.";
const DMM_PROBE_STORAGE_TTL_OK_MS = 60 * 24 * 3600 * 1000;
const DMM_PROBE_STORAGE_TTL_FAIL_MS = 14 * 24 * 3600 * 1000;
const DMM_CONTENT_ID_OVERRIDES = {};

const MGSTAGE_COVER_RULES = {
  ABF: { maker: "prestige" },
  ABW: { maker: "prestige" },
  ABP: { maker: "prestige" },
  CHN: { maker: "prestige" },
  JUFE: { maker: "prestige" },
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
};

function getMgstageCoverRule(parts) {
  if (!parts) return null;
  return MGSTAGE_COVER_RULES[parts.prefix] || null;
}

function compactUniqueUrls(urls) {
  const seen = {};
  const result = [];
  for (let i = 0; i < (urls || []).length; i++) {
    const value = String(urls[i] || "").trim();
    if (!value || seen[value]) continue;
    seen[value] = true;
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

function hydrateDmmProbeCacheFromStorage(codes) {
  for (let i = 0; i < (codes || []).length; i++) {
    const code = String(codes[i] || "").trim().toUpperCase();
    if (!code || Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) continue;
    const stored = loadDmmProbeFromStorage(code);
    if (stored !== undefined) DMM_PROBE_WORKER_CACHE[code] = stored;
  }
}

async function fetchDmmProbeCoverWithBudget(code, params, budgetMs) {
  code = String(code || "").trim().toUpperCase();
  if (!code || !isValidJavCatalogCode(code)) return { probe: null, timedOut: false };
  if (Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) {
    return { probe: DMM_PROBE_WORKER_CACHE[code], timedOut: false };
  }
  const stored = loadDmmProbeFromStorage(code);
  if (stored !== undefined) {
    DMM_PROBE_WORKER_CACHE[code] = stored;
    return { probe: stored, timedOut: false };
  }
  if (!budgetMs || budgetMs <= 0) {
    return { probe: await fetchDmmProbeCover(code, params), timedOut: false };
  }
  return Promise.race([
    fetchDmmProbeCover(code, params).then(function (probe) {
      return { probe: probe, timedOut: false };
    }),
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve({ probe: undefined, timedOut: true });
      }, budgetMs);
    }),
  ]);
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
    pending.push(code);
  }
  if (!pending.length) return;

  const base = getDmmProbeWorkerBase(params);
  if (!base) return;

  const concurrency = 6;
  for (let start = 0; start < pending.length; start += concurrency) {
    const chunk = pending.slice(start, start + concurrency);
    const tasks = [];
    for (let i = 0; i < chunk.length; i++) {
      tasks.push(fetchDmmProbeCover(chunk[i], params));
    }
    await Promise.all(tasks);
  }
}

function lookupDmmProbeCover(code) {
  code = String(code || "").trim().toUpperCase();
  if (!code || !Object.prototype.hasOwnProperty.call(DMM_PROBE_WORKER_CACHE, code)) return null;
  return DMM_PROBE_WORKER_CACHE[code];
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
    if (parts && parts.code) appendDmmCoverCandidates(candidates, parts.code);
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

function hasMappedDmmPrefix(code) {
  const parts = parseJavCodeParts(code);
  if (!parts) return false;
  return !!DMM_CONTENT_PREFIX_MAP[normalizeDmmPrefix(parts.prefix)];
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
  const hasVerifiedProbe = !!(probe && (probe.posterUrl || probe.backdropUrl));
  const allowLocalMapped = hasMappedDmmPrefix(code);
  if (fallback && !hasVerifiedProbe && probe === null && !allowLocalMapped) {
    return buildCoverBundleFromUrls(fallback, fallback);
  }
  const candidates = buildCoverCandidatesFromVideoId(code, probe, Object.assign({}, options, {
    allowGuessedDmm: options.allowGuessedDmm || (!hasVerifiedProbe && allowLocalMapped),
  }));
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

function buildDetailBackdropPaths(displayCode, dmmProbe) {
  const jtMeta = fetchJavTrailersMeta(displayCode, dmmProbe);
  return compactUniqueUrls([jtMeta.backdropPath].concat(jtMeta.backdropPaths || [])).filter(Boolean);
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
  if (options.prefetchRemote !== false) {
    await prefetchDmmProbeCovers(codes, params);
  } else {
    hydrateDmmProbeCacheFromStorage(codes);
  }

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

function extractKanavMovieCode(title) {
  const parts = parseJavCodeParts(title);
  if (!parts) return "";
  const code = parts.prefix + "-" + String(parseInt(parts.number, 10)) + (parts.suffix || "");
  return isValidJavCatalogCode(code) ? code : "";
}

function buildDetailCoverBundleFromDmm(code, siteFallback, dmmProbe, options) {
  return buildDetailCoverBundle(code, siteFallback, dmmProbe, options);
}

async function enrichKanavListWithDmmCovers(items, params) {
  return enrichItemsWithDmmCovers(items, params || {}, {
    getCode: function (item) {
      return extractKanavMovieCode(item.title || "");
    },
    getSiteCover: function (item) {
      return item.backdropPath || "";
    },
  });
}

async function parseVideoListWithCovers(html, params) {
  const items = parseVideoList(html);
  return enrichKanavListWithDmmCovers(items, params);
}

async function applyDmmToDetailExtras(extras, title, params) {
  if (!extras) return extras;
  const code = extractKanavMovieCode(extras.title || title || "");
  if (!code || !isValidJavCatalogCode(code)) return extras;
  const siteFallback = extras.backdropPath || (extras.backdropPaths && extras.backdropPaths[0]) || "";
  const hasSiteCover = !!siteFallback;
  const probeResult = await fetchDmmProbeCoverWithBudget(
    code,
    params || {},
    hasSiteCover ? DMM_PROBE_DETAIL_BUDGET_MS : 0
  );
  const dmmProbe = probeResult.probe;
  const bundle = buildDetailCoverBundleFromDmm(code, siteFallback, dmmProbe, {});
  const dmmBackdropPaths = buildDetailBackdropPaths(code, dmmProbe);
  const useDmmBackdrop =
    bundle.backdropPath &&
    (!siteFallback || hasVerifiedDmmCover(bundle.backdropPath, siteFallback));
  return Object.assign({}, extras, {
    backdropPath: useDmmBackdrop ? bundle.backdropPath : extras.backdropPath || bundle.backdropPath,
    posterPath: bundle.posterPath || extras.posterPath,
    detailPoster: bundle.detailPoster || extras.detailPoster,
    backdropPaths: dmmBackdropPaths.length ? dmmBackdropPaths : extras.backdropPaths,
  });
}

function hasVerifiedDmmCover(candidate, siteFallback) {
  const url = String(candidate || "").trim();
  if (!url || isInvalidCoverTarget(url)) return false;
  if (/awsimgsrc\.dmm\.co\.jp/i.test(url) || /image\.mgstage\.com/i.test(url)) return true;
  return url !== siteFallback;
}

function mapVideoCard($, el, baseUrl) {
  const videoItem = $(el).find(".video-item");
  const entryTitle = $(el).find(".entry-title");
  const href =
    entryTitle.find("a").attr("href") ||
    videoItem.find("a").attr("href") ||
    "";
  const title =
    entryTitle.find("a").text().trim() ||
    videoItem.find("img").attr("alt") ||
    "";
  const posterPath =
    videoItem.find(".featured-content-image a img").attr("data-original") ||
    videoItem.find(".video-image img").attr("data-original") ||
    videoItem.find("img").attr("data-original") ||
    videoItem.find("img").attr("src") ||
    "";
  const remark = videoItem.find("span.model-view-left").text().trim();
  const detailUrl = href.startsWith("http") ? href : baseUrl + href;
  const item = {
    id: href,
    type: "url",
    title,
    backdropPath: posterPath || undefined,
    link: detailUrl,
    mediaType: "movie",
  };
  if (remark) item.description = remark;
  return item;
}

function parseDetailExtras(html, link) {
  const $ = Widget.html.load(html);
  const baseUrl = resolveBaseUrl(link);
  const title = $(".video-title h3").first().text().trim() || $("h3").first().text().trim() || "";
  const description =
    $(".video-title h1").first().text().trim() ||
    $("h1").first().text().trim() ||
    "";

  const backdropPaths = [];
  const seen = {};
  $(".countext-img, .col-md-5 img").each((_, el) => {
    const src = $(el).attr("src") || $(el).attr("data-original") || "";
    if (!src || !src.startsWith("http")) return;
    if (/kanav\.(info|ad)\/(template|upload\/site)/i.test(src)) return;
    if (seen[src]) return;
    seen[src] = true;
    backdropPaths.push(src);
  });

  const relatedItems = [];
  $(".post-list").each((_, section) => {
    const label = $(section).find(".category-count").first().text().trim();
    if (!label || label.indexOf("\u731c\u4f60\u559c\u6b22") < 0) return;
    $(section).find(".col-md-3").each((__, el) => {
      const item = mapVideoCard($, el, baseUrl);
      if (item.title || item.link) relatedItems.push(item);
    });
  });

  return { title, description, backdropPaths, relatedItems };
}

function buildDetailItem(link, videoUrl, customHeaders, extras) {
  const item = {
    id: link,
    type: "detail",
    link,
    mediaType: "movie",
    customHeaders: customHeaders || PLAY_HEADERS,
  };
  if (videoUrl) {
    item.videoUrl = videoUrl;
    item.playerType = /\.m3u8(\?|$)/i.test(videoUrl) ? "ijk" : "system";
  }
  if (!extras) return item;
  if (extras.title) item.title = extras.title;
  if (extras.description) item.description = extras.description;
  if (extras.backdropPath) item.backdropPath = extras.backdropPath;
  if (extras.posterPath) item.posterPath = extras.posterPath;
  if (extras.detailPoster) item.detailPoster = extras.detailPoster;
  if (extras.backdropPaths && extras.backdropPaths.length) {
    item.backdropPaths = extras.backdropPaths;
    if (!item.backdropPath) item.backdropPath = extras.backdropPaths[0];
  }
  if (extras.relatedItems && extras.relatedItems.length) {
    item.relatedItems = extras.relatedItems;
  }
  return item;
}

function b64Decode(str) {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const bytes = [];
  let i = 0;
  str = str.replace(/=+$/, "");
  while (i < str.length) {
    const a = map.indexOf(str[i++]);
    const b = map.indexOf(str[i++]);
    const c = map.indexOf(str[i++]);
    const d = map.indexOf(str[i++]);
    bytes.push((a << 2) | (b >> 4));
    if (c >= 0) bytes.push(((b & 15) << 4) | (c >> 2));
    if (d >= 0) bytes.push(((c & 3) << 6) | d);
  }
  let result = "";
  let j = 0;
  while (j < bytes.length) {
    const v = bytes[j++];
    if (v < 128) {
      result += String.fromCharCode(v);
    } else if (v < 224) {
      result += String.fromCharCode(((v & 31) << 6) | (bytes[j++] & 63));
    } else {
      result += String.fromCharCode(((v & 15) << 12) | ((bytes[j++] & 63) << 6) | (bytes[j++] & 63));
    }
  }
  return result;
}

function safeUriDecode(str) {
  // If already a plain URL, return as-is
  if (str.startsWith("http")) return str;
  try {
    const decoded = decodeURIComponent(str);
    if (decoded.startsWith("http")) return decoded;
  } catch (e) {}
  // Try partial decode: replace %XX sequences manually for common chars
  try {
    return str.replace(/%([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  } catch (e) {}
  return str;
}

function isDirectStreamUrl(url) {
  return /\.(m3u8|mp4|flv|mkv|avi|ts|mov|n3u8)(\?|$)/i.test(url);
}

function extractVideoUrlFromHtml(html) {
  let m = html.match(/https?:\/\/[^\s"'<>\\,;)}\]]+?\.mp4[^\s"'<>\\,;){\[]*/i);
  if (m) return m[0];

  m = html.match(/https?:\/\/[^\s"'<>\\,;)}\]]+?\.(m3u8|mp4)[^\s"'<>\\,;){\[]*/i);
  if (m) return m[0];

  // Strategy 2: DPlayer / XGPlayer / CKPlayer / ArtPlayer config
  // Matches: url:"...", url:'...', url: "...", video:{url:"..."}
  m = html.match(/["']?url["']?\s*[:=]\s*["']([^"']*(?:\.m3u8|\.mp4)[^"']*)["']/i);
  if (m) return m[1];

  // Strategy 3: JavaScript variable assignment
  // Matches: var playurl = "...", const videoUrl = '...', let src = "..."
  m = html.match(/(?:var|let|const)\s+\w*(?:url|src|video|play|file|path)\w*\s*=\s*["']([^"']*(?:\.m3u8|\.mp4)[^"']*)["']/i);
  if (m) return m[1];

  // Strategy 4: JSON key with video URL
  // Matches: "url":"https://...m3u8"
  m = html.match(/"url"\s*:\s*"([^"]*(?:\.m3u8|\.mp4)[^"]*)"/i);
  if (m) return m[1];

  // Strategy 5: HTML5 video/source tags
  const $ = Widget.html.load(html);
  const src = $("video source").attr("src") || $("video").attr("src");
  if (src) return src;

  // Strategy 6: iframe src (nested embed player)
  const iframeSrc = $("iframe").attr("src");
  if (iframeSrc && iframeSrc.startsWith("http")) return iframeSrc;

  return null;
}

function extractVideoUrlFromQuery(url) {
  // Parse query parameters manually (no URLSearchParams in Forward runtime)
  const qIndex = url.indexOf("?");
  if (qIndex < 0) return null;
  const query = url.substring(qIndex + 1);
  const pairs = query.split("&");
  for (const pair of pairs) {
    const eqIndex = pair.indexOf("=");
    if (eqIndex < 0) continue;
    const key = pair.substring(0, eqIndex);
    const val = pair.substring(eqIndex + 1);
    if (key === "url" || key === "video" || key === "vid" || key === "playurl" || key === "v") {
      let decoded = safeUriDecode(val);
      if (isDirectStreamUrl(decoded)) return decoded;
      // Try base64 decode
      try {
        const b64 = b64Decode(val);
        const b64Uri = safeUriDecode(b64);
        if (isDirectStreamUrl(b64Uri)) return b64Uri;
      } catch (e) {}
    }
  }
  return null;
}

function parseVideoList(html) {
  const $ = Widget.html.load(html);
  const items = [];
  $(".post-list .col-md-3").each((_, el) => {
    const item = mapVideoCard($, el, BASE);
    if (item.title || item.link) items.push(item);
  });
  return items;
}


async function fetchHtml(url) {
  const res = await Widget.http.get(url, { headers: { "User-Agent": UA } });
  return typeof res.data === "string" ? res.data : String(res.data);
}

function buildTagListUrl(tagPath, page) {
  const path = String(tagPath || "");
  const tagMatch = path.match(/\/tag\/(.+)$/);
  if (!tagMatch) return "";
  const tagPart = tagMatch[1];
  const p = Number(page || 1);
  if (p <= 1) {
    return path.startsWith("http") ? path : BASE + path;
  }
  return `${BASE}/index.php/vod/search/page/${p}/tag/${tagPart}`;
}

function buildHotListUrl(page) {
  const p = Number(page || 1);
  if (p <= 1) return `${BASE}/index.php/label/hot.html`;
  return `${BASE}/index.php/label/hot/page/${p}.html`;
}
async function loadCategory(categoryId, params) {
  const page = Number(params.page || 1);
  const res = await Widget.http.get(
    `${BASE}/index.php/vod/type/id/${categoryId}/page/${page}.html`,
    { headers: { "User-Agent": UA } }
  );
  return parseVideoListWithCovers(res.data, params);
}

async function loadCnSub(params)     { return loadCategory("1",  params); }
async function loadJpKrCen(params)   { return loadCategory("2",  params); }
async function loadJpKrUncen(params) { return loadCategory("3",  params); }
async function loadCnAv(params)      { return loadCategory("4",  params); }
async function loadSelfie(params)    { return loadCategory("30", params); }
async function loadHookup(params)    { return loadCategory("31", params); }
async function loadStreamer(params)  { return loadCategory("32", params); }
async function loadAnime(params)     { return loadCategory("20", params); }

function parseJsonObjectFromScriptBlock(block) {
  if (!block) return null;
  const startIdx = block.indexOf("{");
  const endIdx = block.lastIndexOf("}");
  if (startIdx < 0 || endIdx <= startIdx) return null;
  try {
    return JSON.parse(block.substring(startIdx, endIdx + 1));
  } catch (e) {
    return null;
  }
}

function parsePlayerDataFromHtml(html) {
  if (!html) return null;

  const patterns = [
    /var\s+player_aaaa\s*=\s*([\s\S]*?)<\/script>/i,
    /var\s+(player_\w+)\s*=\s*([\s\S]*?)<\/script>/gi,
    /var\s+MacPlayerConfig\s*=\s*([\s\S]*?)<\/script>/i,
  ];

  let data = parseJsonObjectFromScriptBlock(
    (html.match(patterns[0]) || [])[1]
  );
  if (data && (data.url || data.link || data.vurl)) return data;

  let match;
  const generic = patterns[1];
  while ((match = generic.exec(html)) !== null) {
    data = parseJsonObjectFromScriptBlock(match[2]);
    if (data && (data.url || data.link || data.vurl)) return data;
  }

  data = parseJsonObjectFromScriptBlock((html.match(patterns[2]) || [])[1]);
  if (data && (data.url || data.link || data.vurl)) return data;

  try {
    const $ = Widget.html.load(html);
    $("script").each((_, el) => {
      if (data) return;
      const scriptText = $(el).text() || "";
      if (!/player_/i.test(scriptText) && !/MacPlayerConfig/i.test(scriptText)) return;
      const parsed = parseJsonObjectFromScriptBlock(scriptText);
      if (parsed && (parsed.url || parsed.link || parsed.vurl)) data = parsed;
    });
  } catch (e) {}

  return data || null;
}

function decodeMacPlayerUrl(playerData) {
  if (!playerData) return "";
  const rawUrl = String(playerData.url || playerData.vurl || "").trim();
  if (!rawUrl) return "";
  const encrypt = Number(playerData.encrypt || 0);
  if (encrypt === 0) return rawUrl;
  if (encrypt === 1) return b64Decode(rawUrl);
  return safeUriDecode(b64Decode(rawUrl));
}

async function fetchDetailHtml(link) {
  const res = await Widget.http.get(String(link), { headers: DETAIL_HEADERS });
  return typeof res.data === "string" ? res.data : String(res.data);
}

async function resolvePlaybackFromHtml(html, pageUrl, depth) {
  depth = depth || 0;
  if (!html || depth > 2) return "";

  const playerData = parsePlayerDataFromHtml(html);
  let videoUrl = decodeMacPlayerUrl(playerData);

  if (!videoUrl && playerData && playerData.link) {
    videoUrl = resolveAbsoluteUrl(pageUrl, playerData.link);
  }

  if (videoUrl && !isDirectStreamUrl(videoUrl)) {
    const queryVideo = extractVideoUrlFromQuery(videoUrl);
    if (queryVideo) return queryVideo;

    if (/^https?:\/\//i.test(videoUrl)) {
      try {
        const embedRes = await Widget.http.get(videoUrl, {
          headers: Object.assign({}, DETAIL_HEADERS, { Referer: CDN_REFERER }),
        });
        const embedHtml = typeof embedRes.data === "string" ? embedRes.data : String(embedRes.data || "");
        const extracted = extractVideoUrlFromHtml(embedHtml);
        if (extracted) return extracted;
        const nested = await resolvePlaybackFromHtml(embedHtml, videoUrl, depth + 1);
        if (nested) return nested;
      } catch (e) {}
    } else if (/\/vod\/play\//i.test(videoUrl) || videoUrl.indexOf("/index.php") >= 0) {
      try {
        const playUrl = resolveAbsoluteUrl(pageUrl, videoUrl);
        const playHtml = await fetchDetailHtml(playUrl);
        const nested = await resolvePlaybackFromHtml(playHtml, playUrl, depth + 1);
        if (nested) return nested;
      } catch (e) {}
    }
  }

  if (videoUrl && isDirectStreamUrl(videoUrl)) return videoUrl;

  const inline = extractVideoUrlFromHtml(html);
  if (inline && isDirectStreamUrl(inline)) return inline;

  return "";
}

async function loadDetail(link) {
  const cached = readVideoCache(link);
  const html = await fetchDetailHtml(link);
  let extras = parseDetailExtras(html, link);

  const playbackPromise = cached
    ? Promise.resolve({ videoUrl: cached.videoUrl, customHeaders: cached.customHeaders })
    : resolvePlaybackFromHtml(html, link, 0).then(function (videoUrl) {
        return { videoUrl: videoUrl, customHeaders: null };
      });
  const extrasPromise = applyDmmToDetailExtras(extras, extras.title, {});

  const parallel = await Promise.all([playbackPromise, extrasPromise]);
  const playback = parallel[0];
  extras = parallel[1];

  if (playback.videoUrl) {
    if (cached) {
      return buildDetailItem(link, playback.videoUrl, playback.customHeaders, extras);
    }
    return deliverDetail(link, playback.videoUrl, extras);
  }

  return buildDetailItem(link, "", PLAY_HEADERS, extras);
}


async function loadTags(params) {
  const tagPath = params.tagId || "";
  if (!tagPath) return [];
  const page = Number(params.page || 1);
  const url = buildTagListUrl(tagPath, page);
  if (!url) return [];
  return parseVideoListWithCovers(await fetchHtml(url), params);
}

async function loadHot(params) {
  const page = Number(params.page || 1);
  return parseVideoListWithCovers(await fetchHtml(buildHotListUrl(page)), params);
}

async function search(params = {}) {
  const keyword = params.keyword || "";
  const page = Number(params.page || 1);
  const res = await Widget.http.get(
    `${BASE}/index.php/vod/search/by/time_add/page/${page}/wd/${encodeURIComponent(keyword)}.html`,
    { headers: { "User-Agent": UA } }
  );
  return parseVideoListWithCovers(res.data, params);
}

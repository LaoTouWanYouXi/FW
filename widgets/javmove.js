WidgetMetadata = {
  id: "forward.javmove",
  title: "JavMove",
  version: "1.4.2",
  requiredVersion: "0.0.1",
  description: "JavMove \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u6700\u65b0\u3001\u5373\u5c06\u4e0a\u6620\u3001\u5206\u7c7b\u5bfc\u822a\u3001\u641c\u7d22",
  author: "老头",
  site: "https://javmove.com",
  detailCacheDuration: 300,
  globalParams: [],
  modules: [
    {
      id: "loadResource",
      title: "\u52a0\u8f7d\u8d44\u6e90",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: [],
    },
    {
      id: "latest",
      title: "\u6700\u65b0\u5f71\u7247",
      functionName: "loadLatest",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }],
    },
    {
      id: "upcoming",
      title: "\u5373\u5c06\u4e0a\u6620",
      functionName: "loadUpcoming",
      cacheDuration: 3600,
      params: [{ name: "page", title: "\u9875\u7801", type: "page" }],
    },
    {
      id: "genres",
      title: "\u5206\u7c7b\u6d4f\u89c8",
      description: "\u6309\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadGenres",
      cacheDuration: 3600,
      params: [
        {
          name: "genreId",
          title: "\u9009\u62e9\u5206\u7c7b",
          type: "enumeration",
          enumOptions: [
            { title: "\u5355\u4f53", value: "https://javmove.com/genres/QxHGjE/solowork" },
            { title: "\u4e2d\u51fa", value: "https://javmove.com/genres/GVWkCw/creampie" },
            { title: "\u5de8\u4e73", value: "https://javmove.com/genres/BJiygps/big-tits" },
            { title: "\u4eba\u59bb", value: "https://javmove.com/genres/BcEqYww/married-woman" },
            { title: "\u719f\u5973", value: "https://javmove.com/genres/DFiQTPU/mature-woman" },
            { title: "\u7f8e\u5c11\u5973", value: "https://javmove.com/genres/Ljbfjc/beautiful-girl" },
            { title: "4\u5c0f\u65f6\u4ee5\u4e0a", value: "https://javmove.com/genres/ogWFog/4hr" },
            { title: "\u8361\u5987", value: "https://javmove.com/genres/BMPngcQ/slut" },
            { title: "\u7d20\u4eba", value: "https://javmove.com/genres/BHCJmMg/amateur" },
            { title: "\u53e3\u4ea4", value: "https://javmove.com/genres/CHihjPU/blow" },
            { title: "3P/4P", value: "https://javmove.com/genres/BxHaNJc/3p-4p" },
            { title: "NTR/\u7eff\u5e3d", value: "https://javmove.com/genres/DSqPmNM/cuckold" },
            { title: "\u6570\u5b57\u9a6c\u8d5b\u514b", value: "https://javmove.com/genres/IdoowAI/digital-mosaic" },
            { title: "\u82d7\u6761", value: "https://javmove.com/genres/CaENosY/slender" },
            { title: "\u6f6e\u5439", value: "https://javmove.com/genres/HShdVAg/squirting" },
            { title: "\u5973\u5b66\u751f", value: "https://javmove.com/genres/CMwMXEY/school-girls" },
            { title: "\u786c\u6838", value: "https://javmove.com/genres/HVOSKBU/nasty-hardcore" },
            { title: "\u5267\u60c5", value: "https://javmove.com/genres/GUieHFE/drama" },
            { title: "\u65e0\u7801", value: "https://javmove.com/genres/javuncensored/jav-uncensored" },
            { title: "\u8fd1\u4eb2", value: "https://javmove.com/genres/ttzyfU/incest" },
            { title: "\u4e73\u4ea4", value: "https://javmove.com/genres/EYjtJGI/titty-fuck" },
            { title: "\u7f8e\u80f8", value: "https://javmove.com/genres/FhKPzbk/breasts" },
            { title: "\u4f01\u5212", value: "https://javmove.com/genres/BelfNeY/planning" },
            { title: "\u9a91\u4e58", value: "https://javmove.com/genres/BrtnXsw/cowgirl" },
            { title: "\u4e3b\u89c2\u89c6\u89d2", value: "https://javmove.com/genres/BZXvyLU/pov" },
            { title: "\u7eaa\u5f55\u7247", value: "https://javmove.com/genres/waovUA/documentary" },
            { title: "\u989c\u5c04", value: "https://javmove.com/genres/HyKxxsQ/facials" },
            { title: "\u5de8\u81c0", value: "https://javmove.com/genres/BmfzJNE/huge-butt" },
            { title: "\u8650\u5f85", value: "https://javmove.com/genres/EGOOyiw/abuse" },
            { title: "\u7cbe\u9009\u5408\u96c6", value: "https://javmove.com/genres/glzpZM/best-omnibus" },
            { title: "\u51fa\u8f68", value: "https://javmove.com/genres/BWrHCvk/affair" },
            { title: "\u59d0\u59d0", value: "https://javmove.com/genres/BUKLrxc/older-sister" },
            { title: "\u5077\u7aa5", value: "https://javmove.com/genres/jSorDs/voyeur" },
            { title: "\u7f9e\u8fb1", value: "https://javmove.com/genres/DVXHZsY/humiliation" },
            { title: "\u5176\u4ed6\u7656\u597d", value: "https://javmove.com/genres/DlLttTU/other-fetish" },
            { title: "\u51fa\u9053\u4f5c", value: "https://javmove.com/genres/IgVddgQ/debut-production" },
            { title: "\u642d\u8baa", value: "https://javmove.com/genres/BEVUiDU/nampa" },
            { title: "OL\u804c\u573a", value: "https://javmove.com/genres/BBofqrM/ol" },
            { title: "\u6df1\u5589", value: "https://javmove.com/genres/BualDEg/deep-throating" },
            { title: "\u81ea\u6170", value: "https://javmove.com/genres/zHowlU/masturbation" },
            { title: "\u81c0\u90e8", value: "https://javmove.com/genres/EoYjyig/butt" },
            { title: "\u63a5\u543b", value: "https://javmove.com/genres/FMHuKmA/kiss" },
            { title: "\u624b\u4ea4", value: "https://javmove.com/genres/BRdWrFU/handjob" },
            { title: "\u5236\u670d", value: "https://javmove.com/genres/FpEyXZM/uniform" },
            { title: "\u8fa3\u59b9", value: "https://javmove.com/genres/FmXuNps/gal" },
            { title: "\u62d8\u675f", value: "https://javmove.com/genres/DvnGozU/restraint" },
            { title: "\u809b\u4ea4", value: "https://javmove.com/genres/CkfVSSw/anal" },
            { title: "\u810f\u8bdd", value: "https://javmove.com/genres/CCVDqYg/dirty-words" },
            { title: "\u89d2\u8272\u626e\u6f14", value: "https://javmove.com/genres/CUqgjUY/cosplay" },
            { title: "\u5973\u5927\u5b66\u751f", value: "https://javmove.com/genres/FENaXdk/female-college-student" },
            { title: "\u65e0\u6bdb", value: "https://javmove.com/genres/DmxWEI/shaved" },
            { title: "\u6deb\u4e71", value: "https://javmove.com/genres/CfRrmsY/promiscuity" },
            { title: "\u98ce\u4fd7\u5a18", value: "https://javmove.com/genres/GuybVKY/prostitutes" },
            { title: "\u4e1d\u889c", value: "https://javmove.com/genres/EOIleGo/pantyhose" },
            { title: "\u6821\u670d", value: "https://javmove.com/genres/HAMEvIY/school-uniform" },
            { title: "\u5973\u540c", value: "https://javmove.com/genres/DIPFiKQ/lesbian" },
            { title: "\u5c11\u5973", value: "https://javmove.com/genres/OQRgQA/girl" },
            { title: "\u59d0\u59b9", value: "https://javmove.com/genres/rNLDPk/sister" },
            { title: "\u4e3b\u89c2", value: "https://javmove.com/genres/BhSUBso/subjectivity" },
            { title: "\u6309\u6469", value: "https://javmove.com/genres/DQJaOYo/massage" },
            { title: "\u8c03\u6559", value: "https://javmove.com/genres/IbIAPGY/training" },
            { title: "\u7edd\u9876\u9ad8\u6f6e", value: "https://javmove.com/genres/IyrByPM/acme-orgasm" },
            { title: "\u73a9\u5177", value: "https://javmove.com/genres/GkXTOsA/toy" },
            { title: "\u80f8\u90e8", value: "https://javmove.com/genres/EgeNBXk/tits" },
            { title: "\u6da6\u6ed1\u6db2", value: "https://javmove.com/genres/HQAoeaw/lotion" },
            { title: "\u5f3a\u66b4", value: "https://javmove.com/genres/IoPveJE/rape" },
            { title: "\u7ef3\u7f1a", value: "https://javmove.com/genres/bYVfOg/shibari" },
            { title: "\u5404\u79cd\u804c\u4e1a", value: "https://javmove.com/genres/Frlnvgw/various-professions" },
            { title: "\u989c\u5c04\u7fa4\u4ea4", value: "https://javmove.com/genres/IwKNQPs/bukkake" },
            { title: "\u8584\u7801", value: "https://javmove.com/genres/KkNmlnU/risky-mosaic" },
            { title: "\u5c04\u7cbe", value: "https://javmove.com/genres/CFBsfGI/cum" },
            { title: "\u4e30\u6ee1", value: "https://javmove.com/genres/HiWNubU/bbw" },
            { title: "\u6bcd\u4eb2", value: "https://javmove.com/genres/JOftCgw/mother" },
            { title: "M\u7537", value: "https://javmove.com/genres/FWjGtoI/submissive-men" },
            { title: "\u7f8e\u5bb9\u5ba4", value: "https://javmove.com/genres/FzgKFhU/beauty-shop" },
            { title: "SM", value: "https://javmove.com/genres/YrgWPU/sm" },
            { title: "\u6392\u5c3f", value: "https://javmove.com/genres/BOwcaTE/urination" },
            { title: "\u5de8\u6839", value: "https://javmove.com/genres/EwTEkso/huge-cock" },
            { title: "\u827a\u4eba", value: "https://javmove.com/genres/CvHFWGQ/entertainer" },
            { title: "\u5973\u6559\u5e08", value: "https://javmove.com/genres/GnEHzWA/female-teacher" },
            { title: "\u6e29\u6cc9", value: "https://javmove.com/genres/TeATKQ/hot-spring" },
            { title: "\u6237\u5916", value: "https://javmove.com/genres/JjiGYbM/outdoors" },
            { title: "\u5de8\u4e73\u63a7", value: "https://javmove.com/genres/ItdYfSg/busty-fetish" },
            { title: "\u65b0\u5a18/\u5e74\u8f7b\u59bb\u5b50", value: "https://javmove.com/genres/EyztueY/bride-young-wife" },
            { title: "\u51fa\u6c57", value: "https://javmove.com/genres/BpMoaTU/sweat" },
            { title: "\u5904\u7537", value: "https://javmove.com/genres/HKnLRaA/virgin-man" },
            { title: "\u5185\u8863", value: "https://javmove.com/genres/EBAkmgI/underwear" },
            { title: "\u6309\u6469\u68d2", value: "https://javmove.com/genres/HXvGzog/electric-massager" },
            { title: "\u8214\u9634", value: "https://javmove.com/genres/GPVAHMw/cunnilingus" },
            { title: "\u7ee7\u6bcd", value: "https://javmove.com/genres/IYbLecY/stepmother" },
            { title: "\u6076\u5973", value: "https://javmove.com/genres/JCMREI/evil" },
            { title: "\u8ff7\u4f60\u7cfb", value: "https://javmove.com/genres/JWaLHzk/mini" },
            { title: "\u9ad8\u6311", value: "https://javmove.com/genres/IjCSRbU/tall" },
            { title: "\u836f\u7269", value: "https://javmove.com/genres/HNTzvpE/drug" },
            { title: "\u7f8e\u817f\u63a7", value: "https://javmove.com/genres/EQpaSoQ/leg-fetish" },
            { title: "\u8d85\u5de8\u4e73", value: "https://javmove.com/genres/JGlUJdk/ultra-huge-tits" },
            { title: "\u5199\u771f", value: "https://javmove.com/genres/CsaPwGY/image-video" },
            { title: "\u62a4\u58eb", value: "https://javmove.com/genres/FZPvxxU/nurse" },
            { title: "\u5973\u540c\u63a5\u543b", value: "https://javmove.com/genres/EIvEtmw/lesbian-kiss" },
            { title: "\u5b66\u6821\u6cf3\u88c5", value: "https://javmove.com/genres/DNclcVs/school-swimsuit" },
            { title: "\u773c\u955c", value: "https://javmove.com/genres/HdIkTqw/glasses" },
            { title: "\u60c5\u8da3\u5185\u8863", value: "https://javmove.com/genres/DDBbOTk/lingerie" },
            { title: "\u8f6e\u5978", value: "https://javmove.com/genres/IGFQRhE/gangbang" },
            { title: "\u548c\u670d", value: "https://javmove.com/genres/HnjrGDU/kimono-mourning" },
            { title: "\u6c34\u624b\u670d", value: "https://javmove.com/genres/ELbtkMg/sailor-suit" },
            { title: "\u8de8\u6027\u522b", value: "https://javmove.com/genres/JeUdHqA/transsexual" },
            { title: "\u7279\u5199", value: "https://javmove.com/genres/ElruUyY/close-up" },
            { title: "M\u5973", value: "https://javmove.com/genres/Habvfcg/submissive-woman" },
            { title: "\u5973\u88c5", value: "https://javmove.com/genres/ChygdlU/cross-dressing" },
            { title: "\u9707\u52a8", value: "https://javmove.com/genres/DqZZlTc/vibe" },
            { title: "\u6cf3\u88c5", value: "https://javmove.com/genres/DKvvIKI/swimsuit" },
            { title: "\u6076\u4f5c\u5267", value: "https://javmove.com/genres/GZwKBQg/prank" },
            { title: "\u706f\u7b3c\u88e4", value: "https://javmove.com/genres/ETWPRoQ/bloomers" },
            { title: "\u5373\u5174\u6027\u7231", value: "https://javmove.com/genres/IqwkEBU/impromptu-sex" },
            { title: "\u75f4\u6c49", value: "https://javmove.com/genres/KxVhWFs/molester" },
            { title: "\u5973\u4f18\u7cbe\u9009", value: "https://javmove.com/genres/FuSgBlk/actress-best" },
            { title: "\u5973\u4ec6", value: "https://javmove.com/genres/HIGWrhk/maid" },
            { title: "\u76d1\u7981", value: "https://javmove.com/genres/ILTQUPs/confinement" },
            { title: "\u591a\u6545\u4e8b", value: "https://javmove.com/genres/HCstWZk/multiple-story" },
            { title: "\u8db3\u4ea4", value: "https://javmove.com/genres/FOojBew/footjob" },
            { title: "\u6307\u4ea4", value: "https://javmove.com/genres/CKPXpYQ/finger-fuck" },
            { title: "\u5750\u8138", value: "https://javmove.com/genres/FUCRrqQ/facesitting" },
            { title: "\u7528\u6237\u6295\u7a3f", value: "https://javmove.com/genres/lzfKJs/user-submission" },
            { title: "\u8ff7\u4f60\u88d9", value: "https://javmove.com/genres/DtGOjhE/mini-skirt" },
            { title: "AV\u5973\u4f18", value: "https://javmove.com/genres/JLzEWsw/av-actress" },
            { title: "\u5a4a\u5b50", value: "https://javmove.com/genres/GhqegZU/bitch" },
            { title: "\u704c\u80a0", value: "https://javmove.com/genres/FGuPjHc/enema" },
            { title: "\u53d7\u5b55", value: "https://javmove.com/genres/KMelJzM/conceived" },
            { title: "\u540e\u5165", value: "https://javmove.com/genres/GfJptkA/back" },
            { title: "\u5973\u4e0a\u53f8", value: "https://javmove.com/genres/Jovjixc/female-boss" },
            { title: "\u6ce1\u6ce1\u6d74", value: "https://javmove.com/genres/HFZiRCw/soapland" },
            { title: "\u7537\u6f6e\u5439", value: "https://javmove.com/genres/LCjKdLE/male-squirting" },
            { title: "\u60c5\u4fa3", value: "https://javmove.com/genres/BjzJHuI/couple" },
            { title: "\u9ed1\u4eba\u7537\u4f18", value: "https://javmove.com/genres/IDYbTAQ/black-actor" },
            { title: "\u60c5\u8da3\u88c5", value: "https://javmove.com/genres/KEkTgSo/erotic-wear" },
            { title: "\u539f\u521b\u5408\u4f5c", value: "https://javmove.com/genres/CPdCboY/original-collaboration" },
            { title: "\u996e\u5c3f", value: "https://javmove.com/genres/KRsObWw/piss-drinking" },
            { title: "\u604b\u7231", value: "https://javmove.com/genres/CclCqqQ/love" },
            { title: "\u5973\u8c03\u67e5\u5458", value: "https://javmove.com/genres/IOAFMOY/female-investigator" },
            { title: "\u6b63\u592a", value: "https://javmove.com/genres/JuJNBuI/shotacon" },
            { title: "\u62f7\u95ee", value: "https://javmove.com/genres/JEEfckA/torture" },
            { title: "\u6821\u56ed", value: "https://javmove.com/genres/JJSPTWI/school-stuff" },
            { title: "\u70c2\u9189", value: "https://javmove.com/genres/MTDpxWI/dead-drunk" },
            { title: "\u767d\u4eba\u5973\u4f18", value: "https://javmove.com/genres/BzoPDjM/white-actress" },
            { title: "\u6652\u9ed1", value: "https://javmove.com/genres/HsxUizM/sun-tan" },
            { title: "\u5bb6\u6559", value: "https://javmove.com/genres/EdxXrSo/tutor" },
            { title: "\u8fd0\u52a8", value: "https://javmove.com/genres/FBgjuFM/sport" },
            { title: "\u50ac\u7720", value: "https://javmove.com/genres/LACVxqQ/hypnosis" },
            { title: "\u7c89\u4e1d\u611f\u8c22\u796d", value: "https://javmove.com/genres/IQgtsow/fan-appreciation" },
            { title: "\u8001\u5e74\u7537\u6027", value: "https://javmove.com/genres/JTtWVKQ/elder-male" },
            { title: "\u5be1\u5987", value: "https://javmove.com/genres/LaSXCts/widow" },
            { title: "\u7a7a\u59d0", value: "https://javmove.com/genres/Kuoswgo/stewardess" },
            { title: "\u7279\u6548", value: "https://javmove.com/genres/DaklgSo/special-effects" },
            { title: "\u5165\u6d74", value: "https://javmove.com/genres/MFvrNyY/bath" },
            { title: "\u5984\u60f3", value: "https://javmove.com/genres/GSBpVCI/delusion" },
            { title: "\u9752\u6885\u7af9\u9a6c", value: "https://javmove.com/genres/HqQgANU/childhood-friend" },
            { title: "\u7d27\u8eab\u8863", value: "https://javmove.com/genres/GEtsvGQ/leotard" },
            { title: "69", value: "https://javmove.com/genres/KHRIJvU/69" },
            { title: "\u957f\u9774", value: "https://javmove.com/genres/TojGSin/long-boots" },
            { title: "\u6027\u611f", value: "https://javmove.com/genres/GKHWeRE/sexy" },
            { title: "\u7ea6\u4f1a", value: "https://javmove.com/genres/GsRmnLE/date" },
            { title: "\u5154\u5973\u90ce", value: "https://javmove.com/genres/ORjKYMA/bunny-girl" },
            { title: "\u5c0f\u59d0", value: "https://javmove.com/genres/EWDETSw/miss" },
            { title: "\u6bcd\u4e73", value: "https://javmove.com/genres/IVuXANU/breast-milk" },
            { title: "\u5047\u9633\u5177", value: "https://javmove.com/genres/GxfQNcQ/dildo" },
            { title: "\u79d8\u4e66", value: "https://javmove.com/genres/KpbPtfE/secretary" },
            { title: "\u683c\u6597\u52a8\u4f5c", value: "https://javmove.com/genres/DAUmAxk/fighting-action" },
            { title: "\u5973\u4e3b\u64ad", value: "https://javmove.com/genres/KJxwjUY/anchorwoman" },
            { title: "\u5973\u533b\u751f", value: "https://javmove.com/genres/KmubUsY/female-doctor" },
            { title: "\u89d2\u8272\u53cd\u8f6c", value: "https://javmove.com/genres/JwqBhiI/reversed-role" },
            { title: "\u4e0b\u5c5e/\u540c\u4e8b", value: "https://javmove.com/genres/KhgxxZE/subordinates-colleagues" },
            { title: "\u5546\u52a1\u88c5", value: "https://javmove.com/genres/KsIEXaw/business-attire" },
            { title: "\u5904\u5973", value: "https://javmove.com/genres/JzWqaTM/virgin" },
            { title: "\u65c5\u884c", value: "https://javmove.com/genres/LXldzfU/travel" },
            { title: "\u5b50\u5bab\u53e3", value: "https://javmove.com/genres/IImbNcA/cervix" },
            { title: "\u9152\u4f1a", value: "https://javmove.com/genres/GpkwdlE/drinking-party" },
            { title: "\u65e0\u80f8\u7f69", value: "https://javmove.com/genres/KUZDGFM/no-bra" },
            { title: "\u6346\u7ed1", value: "https://javmove.com/genres/FedbCTs/bondage" },
            { title: "\u6559\u7ec3", value: "https://javmove.com/genres/LkteLQI/instructor" },
            { title: "\u5f02\u7269", value: "https://javmove.com/genres/IljGzHc/foreign-objects" },
            { title: "\u808c\u8089", value: "https://javmove.com/genres/KCDfDcg/muscle" },
            { title: "\u821e\u8e48", value: "https://javmove.com/genres/ErFZQbU/dance" },
            { title: "\u5973\u623f\u4e1c", value: "https://javmove.com/genres/KXFrltM/landlady-hostess" },
            { title: "\u517b\u5973", value: "https://javmove.com/genres/LnaSluw/adopted-daughter" },
            { title: "\u50b2\u5a07", value: "https://javmove.com/genres/GMoLTlE/tsundere" },
            { title: "\u963f\u59e8", value: "https://javmove.com/genres/KcTUphU/aunt" },
            { title: "\u6d77\u5916\u8fdb\u53e3", value: "https://javmove.com/genres/MAiNgzE/oversea-import" },
            { title: "\u8fc7\u819d\u889c", value: "https://javmove.com/genres/FRVcwag/knee-socks" },
            { title: "\u5973\u6218\u58eb", value: "https://javmove.com/genres/DifEzJU/female-warrior" },
            { title: "\u65f6\u95f4\u505c\u6b62", value: "https://javmove.com/genres/HveJUPk/time-stop" },
            { title: "\u8df3\u86cb", value: "https://javmove.com/genres/MitMZGQ/egg-vibrator" },
            { title: "\u6392\u6cc4", value: "https://javmove.com/genres/FJbEtyw/scatology" },
            { title: "\u8d5b\u8f66\u5973\u90ce", value: "https://javmove.com/genres/LfgAtZM/race-queen" },
            { title: "\u8fd0\u52a8\u5458", value: "https://javmove.com/genres/NRDYPjE/athlete" },
            { title: "\u6253\u5c41\u80a1", value: "https://javmove.com/genres/eFKjrE/spanking" },
            { title: "\u8f66\u9707", value: "https://javmove.com/genres/MdfiUEw/car-sex" },
            { title: "\u81ea\u6170\u8f85\u52a9", value: "https://javmove.com/genres/FwzVIGQ/masturbation-support" },
            { title: "\u7ffb\u767d\u773c/\u5931\u795e", value: "https://javmove.com/genres/DdRaofc/rolling-back-eyes-fainting" },
            { title: "\u533b\u9662", value: "https://javmove.com/genres/LsnwErc/hospital-clinic" },
            { title: "\u6392\u4fbf", value: "https://javmove.com/genres/EjLFNEw/defecation" },
            { title: "\u65e9\u6cc4", value: "https://javmove.com/genres/IArmipc/premature-ejaculation" },
            { title: "\u5e7b\u60f3", value: "https://javmove.com/genres/LNKVxQY/fantasy" },
            { title: "\u52a8\u4f5c", value: "https://javmove.com/genres/DYDwXTc/action" },
            { title: "\u793e\u56e2/\u7ecf\u7406", value: "https://javmove.com/genres/LSXzXhk/club-activities-manager" },
            { title: "\u51b7\u9177\u8868\u60c5", value: "https://javmove.com/genres/NgsJeMY/cruel-expression" },
            { title: "\u62f3\u4ea4", value: "https://javmove.com/genres/JhBRlls/fisting" },
            { title: "\u9152\u5e97", value: "https://javmove.com/genres/MoGrNhs/hotel" },
            { title: "\u8eab\u4f53\u610f\u8bc6", value: "https://javmove.com/genres/NTkNLlM/body-conscious" },
            { title: "\u53d8\u8eab heroine", value: "https://javmove.com/genres/DyTvzEQ/transformed-heroine" },
            { title: "\u6a21\u7279", value: "https://javmove.com/genres/LVEpUds/model" },
            { title: "\u732b\u5a18", value: "https://javmove.com/genres/KPLaBLU/catgirl" },
            { title: "\u5455\u5410", value: "https://javmove.com/genres/MLJVRaw/vomit" },
            { title: "\u65b0\u5a18", value: "https://javmove.com/genres/JmOvISo/bride" },
            { title: "\u5176\u4ed6\u4e9a\u6d32", value: "https://javmove.com/genres/EtmPsuI/other-asian" },
            { title: "\u8f6f\u4f53", value: "https://javmove.com/genres/JRMhqIo/flexible" },
            { title: "\u5973\u6027\u5411", value: "https://javmove.com/genres/LvUkiUI/for-women" },
            { title: "\u5077\u7aa5\u80f8\u90e8", value: "https://javmove.com/genres/GcdBLRU/breast-peeker" },
            { title: "\u5c55\u53f0\u5973\u90ce", value: "https://javmove.com/genres/GHahkaQ/booth-girl" },
            { title: "\u6027\u8f6c\u6362", value: "https://javmove.com/genres/HfpZJxU/sex-conversion-feminized" },
            { title: "\u88f8\u4f53\u56f4\u88d9", value: "https://javmove.com/genres/MDPCPkw/naked-apron" },
            { title: "\u6362\u59bb", value: "https://javmove.com/genres/MQXAKsY/swingers" },
            { title: "\u9f3b\u94a9", value: "https://javmove.com/genres/LHwncJM/nose-hook" },
            { title: "\u65e0\u5185\u88e4", value: "https://javmove.com/genres/MayoGQY/no-undies" },
            { title: "\u6559\u7a0b", value: "https://javmove.com/genres/MtUUWfM/how-to" },
            { title: "\u5973\u738b", value: "https://javmove.com/genres/HlDCUmw/mistress" },
            { title: "\u5973\u670d\u52a1\u5458", value: "https://javmove.com/genres/MIcgWxk/waitress" },
            { title: "\u52a8\u6f2b\u89d2\u8272", value: "https://javmove.com/genres/CXXWBNM/anime-characters" },
            { title: "\u6320\u75d2", value: "https://javmove.com/genres/PSOsvAA/tickling" },
            { title: "\u9762\u5177", value: "https://javmove.com/genres/LyBZFOg/masked" },
            { title: "\u65d7\u888d", value: "https://javmove.com/genres/PFGxumg/cheongsam" },
            { title: "\u5988\u5988\u670b\u53cb", value: "https://javmove.com/genres/LqHHTbE/mom-friends" },
            { title: "\u6ce1\u6ce1\u889c", value: "https://javmove.com/genres/QoFeRPc/loose-socks" },
            { title: "\u8bbf\u8c08", value: "https://javmove.com/genres/KfAJTdM/interview" },
            { title: "\u6276\u4ed6", value: "https://javmove.com/genres/MlaCjmA/futanari" },
            { title: "\u8001\u5976\u5976", value: "https://javmove.com/genres/RttOioY/granny" },
            { title: "\u6a21\u4eff", value: "https://javmove.com/genres/LFPzDDU/look-alike" },
            { title: "\u5168\u88f8", value: "https://javmove.com/genres/PXcWJGg/nude" },
            { title: "\u8721\u70db", value: "https://javmove.com/genres/WKrTfE/candle" },
            { title: "\u8fb1\u9a82", value: "https://javmove.com/genres/LiMpfIw/insult" },
            { title: "\u5fa1\u5b85", value: "https://javmove.com/genres/NeLUwNE/otaku" },
            { title: "\u9ed1\u6697\u7cfb", value: "https://javmove.com/genres/RmgallE/dark-system" },
            { title: "\u683c\u6597", value: "https://javmove.com/genres/DfyPmZs/fighters" },
            { title: "\u5b55\u5987", value: "https://javmove.com/genres/JZGzwhM/pregnant-woman" },
            { title: "\u4eba\u5076", value: "https://javmove.com/genres/MwBIvlE/doll" },
            { title: "\u89e6\u624b", value: "https://javmove.com/genres/Dnskxrk/tentacle" },
            { title: "\u524d\u53f0", value: "https://javmove.com/genres/LKdgIbU/receptionist" },
            { title: "\u9732\u51fa", value: "https://javmove.com/genres/NwguaQQ/exposure" },
            { title: "\u745c\u4f3d", value: "https://javmove.com/genres/RgdwMWw/yoga" },
            { title: "\u65f6\u4ee3\u5267", value: "https://javmove.com/genres/NGcQmbs/historical-play" },
            { title: "\u79d1\u5e7b", value: "https://javmove.com/genres/NOWjVsQ/sf" },
            { title: "\u84dd\u5149", value: "https://javmove.com/genres/CxnuIcY/blu-ray" },
            { title: "\u5566\u5566\u961f", value: "https://javmove.com/genres/RjXBSWA/cheerleader" },
            { title: "\u897f\u88c5\u5916\u5957", value: "https://javmove.com/genres/PnRFVwA/blazer" },
            { title: "\u98df\u7caa", value: "https://javmove.com/genres/JbnoVnE/coprophagy" },
            { title: "AI\u751f\u6210", value: "https://javmove.com/genres/LXifyZZy/ai-generated-works" },
            { title: "\u5974\u96b6", value: "https://javmove.com/genres/PHnmUew/slave" },
            { title: "\u6269\u9634\u5668", value: "https://javmove.com/genres/PiDcWeg/speculum" },
            { title: "\u641e\u7b11", value: "https://javmove.com/genres/QNgvQHs/gag-comedy" },
            { title: "\u540c\u4f34", value: "https://javmove.com/genres/KZmgLSQ/companion" },
            { title: "\u540d\u4eba", value: "https://javmove.com/genres/RrnSerM/celebrity" },
            { title: "\u5df4\u58eb\u5bfc\u6e38", value: "https://javmove.com/genres/JrcYNMg/bus-guide" },
            { title: "\u5176\u4ed6", value: "https://javmove.com/genres/NJJFfgI/other" },
            { title: "\u5973\u5fcd\u8005", value: "https://javmove.com/genres/OWwoPKg/female-ninja" },
            { title: "\u9b54\u6cd5\u5c11\u5973", value: "https://javmove.com/genres/EDhaAVU/magic-gal" },
            { title: "\u5deb\u5973", value: "https://javmove.com/genres/JBXqoVk/priestess" },
            { title: "\u518d\u7248", value: "https://javmove.com/genres/QijMWSI/reprinted-edition" },
            { title: "\u6d74\u8863", value: "https://javmove.com/genres/OpSNczk/yukata" },
            { title: "\u4f53\u9a8c\u544a\u767d", value: "https://javmove.com/genres/GXPVDpc/experience-confession" },
            { title: "\u8ff7\u4f60\u578b", value: "https://javmove.com/genres/NuAFwUY/mini-type" },
            { title: "\u5973\u62db\u5f85", value: "https://javmove.com/genres/QLAGoEI/hostesses" },
            { title: "\u5c11\u5973Cos", value: "https://javmove.com/genres/NjYyFdk/girl-cosplay" },
            { title: "\u7537\u540c", value: "https://javmove.com/genres/CnMKXhs/gay" },
            { title: "\u5076\u50cf", value: "https://javmove.com/genres/NmFmoPc/idol" },
            { title: "\u6050\u6016", value: "https://javmove.com/genres/LPrKkZE/horror" },
            { title: "\u653e\u7f6e", value: "https://javmove.com/genres/SfouVgA/neglect" },
            { title: "\u5f3a\u66b4", value: "https://javmove.com/genres/MNqKWDU/rape" },
            { title: "Cos\u670d\u88c5", value: "https://javmove.com/genres/OcKSaHk/cosplay-costumes" },
            { title: "AV OPEN2018\u604b\u7269", value: "https://javmove.com/genres/MqnfsQI/av-open-2018-mania-fetish-dept" },
            { title: "\u9006\u73a9\u6cd5", value: "https://javmove.com/genres/NBOnWdE/reverse-play" },
            { title: "\u5408\u96c6", value: "https://javmove.com/genres/SbUfGPM/omnibus" },
            { title: "AV OPEN2018\u4eba\u59bb", value: "https://javmove.com/genres/NWRBoII/av-open-2018-housewife-milf-dept" },
            { title: "4K", value: "https://javmove.com/genres/TBnUgUy/4k" },
            { title: "3D", value: "https://javmove.com/genres/FjrFNkI/3d" },
            { title: "AV OPEN2016\u5267\u60c5", value: "https://javmove.com/genres/OMVgkLM/av-open-2016-drama-documentary-dept" },
            { title: "AV OPEN2014\u4e2d\u91cf\u7ea7", value: "https://javmove.com/genres/PfWnxFc/av-open-2014-middleweight" },
            { title: "AV OPEN2014\u91cd\u91cf\u7ea7", value: "https://javmove.com/genres/OxMfskw/av-open-2014-heavyweight" },
            { title: "AV OPEN2016\u604b\u7269", value: "https://javmove.com/genres/NYxqWuA/av-open-2016-mania-fetish-dept" },
            { title: "AV OPEN2016\u4f01\u5212", value: "https://javmove.com/genres/OBuYjoY/av-open-2016-planning-dept" },
            { title: "AV OPEN2017\u4f01\u5212", value: "https://javmove.com/genres/OhXviSg/avopen-2017-planning-dept" },
            { title: "Cosplayer", value: "https://javmove.com/genres/PKUauXM/cosplayers" },
            { title: "AV OPEN2016\u7d20\u4eba", value: "https://javmove.com/genres/PPiEIxE/av-open-2016-amateur-dept" },
            { title: "AV OPEN2017\u7d20\u4eba", value: "https://javmove.com/genres/QVbNjdU/avopen-2017-amatuer-dept" },
            { title: "AV OPEN2018\u786c\u6838", value: "https://javmove.com/genres/MyhyeeY/av-open-2018-hard-dept" },
            { title: "AV OPEN2017\u72c2\u70ed", value: "https://javmove.com/genres/NLpubiQ/avopen-2017-maniac-dept" },
            { title: "AV OPEN2017\u5267\u60c5", value: "https://javmove.com/genres/NbefHrM/avopen-2017-drama-dept" },
            { title: "AV OPEN2017\u604b\u7269", value: "https://javmove.com/genres/OHICuSQ/avopen-2017-fetish-dept" },
            { title: "AV OPEN2015\u4f01\u5212", value: "https://javmove.com/genres/OUPzVnE/av-open-2015-planning-dept" },
            { title: "AV OPEN2016\u4f01\u5212", value: "https://javmove.com/genres/PNBPcps/av-open-2016-planning-dept" },
            { title: "\u604b\u7269", value: "https://javmove.com/genres/PpxttwI/fetish" },
            { title: "\u5973\u513f", value: "https://javmove.com/genres/PxsLSmg/daughter" },
            { title: "\u5176\u4ed6\u5b66\u751f", value: "https://javmove.com/genres/QDFocWY/other-students" },
            { title: "\u53f0\u6e7e\u6a21\u7279", value: "https://javmove.com/genres/LXlmHHmt/taiwan-model" },
            { title: "AV OPEN2015\u604b\u7269", value: "https://javmove.com/genres/MgMXKxs/av-open-2015-mania-fetish-dept" },
            { title: "AV OPEN2017\u7eaa\u5f55", value: "https://javmove.com/genres/OufrAmQ/avopen-2017-documentary-dept" },
            { title: "AV OPEN2017\u719f\u5973", value: "https://javmove.com/genres/OztUiYI/avopen-2017-mature-dept" },
            { title: "\u516c\u4e3b", value: "https://javmove.com/genres/PCaJRKA/princess" },
            { title: "C\u7ea7\u5b66\u751f", value: "https://javmove.com/genres/RXCzPps/c-student" },
            { title: "AV OPEN2016\u4eba\u59bb", value: "https://javmove.com/genres/BqxNARU/av-open-2016-milf-housewife-dept" },
            { title: "\u8ff7\u4f60\u88d9\u8b66\u5bdf", value: "https://javmove.com/genres/GCMzseQ/mini-skirt-police" },
            { title: "AV OPEN2018\u4f01\u5212", value: "https://javmove.com/genres/NrTQLiw/av-open-2018-planning-dept" },
            { title: "AV OPEN2016\u786c\u6838", value: "https://javmove.com/genres/OmlYyRU/av-open-2016-hardcore-dept" },
            { title: "\u6210\u4eba\u5956", value: "https://javmove.com/genres/OkEkUVc/adult-awards" },
            { title: "AV OPEN2017\u5c11\u5973", value: "https://javmove.com/genres/PaJKrGA/avopen-2017-girl-dept" },
            { title: "AV OPEN2015\u5973\u4f18", value: "https://javmove.com/genres/PcpzVBs/av-open-2015-actress-dept" },
            { title: "AV OPEN2014\u8d85\u91cd\u91cf\u7ea7", value: "https://javmove.com/genres/PkkRAaY/av-open-2014-super-heavyweight" },
            { title: "16\u5c0f\u65f6\u4ee5\u4e0a", value: "https://javmove.com/genres/ITNiaBs/over-16-hours" },
            { title: "\u4fee\u5973", value: "https://javmove.com/genres/LczMFxU/nun" },
            { title: "AV OPEN2017\u786c\u6838", value: "https://javmove.com/genres/OJorpiA/avopen-2017-hardcore-dept" },
            { title: "AV OPEN2016\u7efc\u827a", value: "https://javmove.com/genres/PUvhfxM/av-open-2016-variety-dept" },
            { title: "\u72ec\u7acb\u5236\u4f5c", value: "https://javmove.com/genres/QsUdEDs/independents" },
            { title: "\u5fc3\u7406\u60ca\u609a", value: "https://javmove.com/genres/StQWDOO/psycho-thriller" },
            { title: "DVDPG", value: "https://javmove.com/genres/BvvCTqQ/dvdpg" },
            { title: "BL", value: "https://javmove.com/genres/CptZXEo/boys-love" },
            { title: "AV OPEN2017\u5973\u4f18", value: "https://javmove.com/genres/OerHBFk/avopen-2017-actress-dept" },
            { title: "AV OPEN2018\u7d20\u4eba", value: "https://javmove.com/genres/QSuYpmg/av-open-2018-amateur-dept" },
            { title: "\u5176\u4ed6\u7656\u597d", value: "https://javmove.com/genres/QupzxpM/other-fetish" },
            { title: "AV OPEN2016\u5c11\u5973", value: "https://javmove.com/genres/SGrGNeI/av-open-2016-maiden-dept" },
            { title: "\u51fa\u9053", value: "https://javmove.com/genres/NDvcFiI/debut" },
            { title: "AV OPEN2015 SM", value: "https://javmove.com/genres/OEbNxdk/av-open-2015-sm-hard-dept" },
            { title: "AV OPEN2015\u719f\u5973", value: "https://javmove.com/genres/OrzCPVs/av-open-2015-milf-dept" },
            { title: "\u97e9\u56fd", value: "https://javmove.com/genres/QAYzyag/korean" },
            { title: "AV OPEN2018\u5c11\u5973", value: "https://javmove.com/genres/QQNjrZE/av-open-2018-maiden-dept" },
            { title: "\u5077\u7aa5", value: "https://javmove.com/genres/RLOKclU/peeping" },
            { title: "\u8bbf\u8c08", value: "https://javmove.com/genres/BpdfOvM/interview" },
            { title: "\u66b4\u6c11/\u82f1\u96c4", value: "https://javmove.com/genres/SElAjvs/mob-heroism" },
            { title: "\u809b\u4ea4(TS)", value: "https://javmove.com/genres/BHeLUWOT/anal-sex-ts" },
            { title: "\u52a8\u753b", value: "https://javmove.com/genres/NzNjnTE/anime" },
            { title: "\u6076\u641e", value: "https://javmove.com/genres/OPCVeVM/parody" },
            { title: "\u8fc7\u819d\u889c", value: "https://javmove.com/genres/QgCXRpk/knee-socks" },
            { title: "\u8fd0\u52a8\u670d", value: "https://javmove.com/genres/QxYIgfU/gym-clothes" },
            { title: "\u6dcb\u6d74", value: "https://javmove.com/genres/RRUXcpU/shower" },
            { title: "\u81ea\u7531\u804c\u4e1a", value: "https://javmove.com/genres/RbIBgPE/freeter" },
            { title: "\u7537\u4f18\u796d", value: "https://javmove.com/genres/SQEkqLs/men-festival" },
            { title: "AV OPEN2018\u5973\u4f18", value: "https://javmove.com/genres/NombcxE/av-open-2018-actress-dept" },
            { title: "\u730e\u5947", value: "https://javmove.com/genres/QITRyQw/bizarre" },
            { title: "AV OPEN2015\u5c11\u5973", value: "https://javmove.com/genres/QYICTBk/av-open-2015-maiden-dept" },
            { title: "\u59d0\u59b9\u4eec", value: "https://javmove.com/genres/QaouECQ/sisters" },
            { title: "AV OPEN2015\u7d20\u4eba", value: "https://javmove.com/genres/QdVilPM/av-open-2015-amateur-dept" },
            { title: "\u60c5\u8272", value: "https://javmove.com/genres/QlcXPHk/eros" },
            { title: "\u5973\u6027\u5411", value: "https://javmove.com/genres/RBtRhuA/for-women" },
            { title: "\u6b27\u7f8e", value: "https://javmove.com/genres/REskoIQ/us-eu-porn" },
            { title: "\u5e74\u8f7b\u8fa3\u59b9", value: "https://javmove.com/genres/RIDqugY/young-gals" },
            { title: "\u8131\u8863", value: "https://javmove.com/genres/RXsoqSw/undressing" },
            { title: "\u7ecf\u5178", value: "https://javmove.com/genres/RpALqpM/classic" },
            { title: "HD DVD", value: "https://javmove.com/genres/SkxhcSA/hd-dvd" },
            { title: "\u4e9a\u6d32", value: "https://javmove.com/genres/SpZdHlt/asian" },
            { title: "\u5192\u9669", value: "https://javmove.com/genres/BvgukhI/adventure" },
            { title: "\u8ff7\u4f60\u88d9", value: "https://javmove.com/genres/TfIJhLr/miniskirt" },
            { title: "\u6a21\u62df", value: "https://javmove.com/genres/TvsBKoW/simulation" },
          ],
        },
        { name: "page", title: "\u9875\u7801", type: "page" },
      ],
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

const BASE_URL = "https://javmove.com";
const DMM_POSTER_SIZE = "small";
const VIDEO_CACHE_TTL = 3600;
const PARTS_BUNDLE_TTL = 3600;
const DETAIL_ITEM_CACHE_TTL = 300;
var partsBundleInflight = {};
var detailInflight = {};
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0.1 Mobile/15E148 Safari/604.1",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  Referer: "https://javmove.com/",
};

function mergeHeaders(extra) {
  return Object.assign({}, HEADERS, extra || {});
}

function syncGlobalParams(params) {
  return params || {};
}

function getEffectiveParams(params) {
  return params || {};
}

function extractDetailLinkInput(link) {
  if (link && typeof link === "object") {
    return {
      url: String(link.link || link.url || link.id || link.href || "").trim(),
      params: link,
    };
  }
  return { url: String(link || "").trim(), params: {} };
}

function applyCoverBundleToItem(item, coverBundle) {
  if (!item || !coverBundle) return item;
  return stripUndefined(
    Object.assign({}, item, {
      backdropPath: coverBundle.backdropPath,
      posterPath: coverBundle.posterPath,
      detailPoster: coverBundle.detailPoster,
      coverUrl: coverBundle.coverUrl || coverBundle.backdropPath || coverBundle.detailPoster,
    })
  );
}

function hasChineseText(text) {
  return /[\u4e00-\u9fff]/.test(String(text || ""));
}

function resolveItemMovieCode(item, baseUrl, meta) {
  const fromMeta =
    meta && meta.detailInfo && meta.detailInfo.movieId
      ? formatMovieCode(meta.detailInfo.movieId, "")
      : "";
  const fromItem = item ? item.matchCode || item.code || "" : "";
  const fromUrl = extractJavCode(String(baseUrl || "").split("/").pop() || "");
  const fromFields =
    meta && meta.displayTitle
      ? resolveMovieCode(
          meta.detailInfo && meta.detailInfo.movieId,
          meta.displayTitle,
          meta.synopsisRaw || ""
        )
      : "";
  const fromItemText = item
    ? resolveMovieCode("", item.detailTitle || item.title || "", item.originalTitle || "")
    : "";
  return fromMeta || fromItem || fromFields || fromItemText || fromUrl || "";
}

function isValidDetailTitle(text, movieCode) {
  const value = sanitizeSourceText(text);
  if (!value) return false;
  if (hasChineseText(value)) return true;
  const code = sanitizeSourceText(movieCode);
  if (!code) return false;
  if (value.toUpperCase() === code.toUpperCase()) return true;
  const prefix = code.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const rest = value
    .replace(new RegExp("^" + prefix + "\\s*", "i"), "")
    .trim();
  return !!rest && hasChineseText(rest);
}

function hasDetailChineseContent(fields) {
  if (!fields) return false;
  const synopsis = sanitizeSourceText(fields.synopsisDisplay || fields.description || "");
  return !!(synopsis && hasChineseText(synopsis));
}

function extractChineseSynopsisFromDetailTitle(detailTitle, movieCode) {
  const value = sanitizeSourceText(detailTitle);
  if (!value || !hasChineseText(value)) return "";
  const code = sanitizeSourceText(movieCode);
  if (!code) return keepOnlyChineseSynopsis(value);
  const prefix = code.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const rest = value.replace(new RegExp("^" + prefix + "\\s*", "i"), "").trim();
  if (rest && hasChineseText(rest)) return keepOnlyChineseSynopsis(rest);
  if (value.toUpperCase() === code.toUpperCase()) return "";
  return keepOnlyChineseSynopsis(value);
}

async function ensureDetailTitleFields(baseUrl, movieCode) {
  let fields = readDetailMetaCache(baseUrl);
  if (!fields) {
    fields = {
      displayTitle: "",
      synopsisRaw: "",
      detailInfo: { movieId: movieCode || "" },
      parts: [],
    };
  }
  if (!fields.detailInfo) fields.detailInfo = { movieId: movieCode || "" };
  if (movieCode && !fields.detailInfo.movieId) fields.detailInfo.movieId = movieCode;
  if (hasDetailChineseContent(fields)) {
    return fields;
  }
  await applySynopsisTranslation(fields, fields.parts || []);
  if (hasDetailChineseContent(fields)) {
    writeDetailMetaCache(baseUrl, fields);
  }
  return fields;
}

async function postProcessDetailForForward(item, baseUrl) {
  if (!item) return null;
  const meta = readDetailMetaCache(baseUrl);
  const movieCode = resolveItemMovieCode(item, baseUrl, meta);
  let fields = meta;
  let chineseSynopsis = sanitizeSourceText(
    (fields && (fields.synopsisDisplay || fields.description)) ||
      item.detailSynopsis ||
      extractChineseSynopsisFromDetailTitle(item.detailTitle, movieCode) ||
      ""
  );
  if (!chineseSynopsis || !hasChineseText(chineseSynopsis)) {
    fields = await ensureDetailTitleFields(baseUrl, movieCode);
    chineseSynopsis = sanitizeSourceText(fields.synopsisDisplay || fields.description || "");
  }
  return applyForwardDisplayFields(item, movieCode, chineseSynopsis);
}

async function refreshDetailDisplayFields(item, baseUrl) {
  const updated = await postProcessDetailForForward(item, baseUrl);
  writeDetailItemCache(baseUrl, updated);
  return updated;
}

async function refreshDetailItemCover(item, pageCover, movieCode, params) {
  if (!item) return item;
  const code =
    movieCode ||
    item.matchCode ||
    item.code ||
    resolveMovieCode("", item.title || "", "");
  const coverBundle = await resolveDetailCoverBundle(
    pageCover || item.detailPoster || item.posterPath || item.backdropPath || "",
    code,
    params
  );
  return applyCoverBundleToItem(item, coverBundle);
}

function isCloudflareChallenge(html) {
  const text = String(html || "");
  if (!text) return false;
  return (
    /just a moment\.\.\./i.test(text) ||
    /cf-browser-verification|challenge-platform|cdn-cgi\/challenge/i.test(text) ||
    (/attention required/i.test(text) && /cloudflare/i.test(text))
  );
}

function isErrorPage(body) {
  if (body && typeof body === "object" && !Array.isArray(body)) {
    if (body.error || Number(body.status || body.statusCode) >= 400) return true;
    try {
      body = JSON.stringify(body);
    } catch (e) {
      return true;
    }
  }
  const text = String(body || "").trim();
  if (!text) return true;
  if (isCloudflareChallenge(text)) return true;
  if (text.length < 200) {
    return text.startsWith("{") && /"error"|"status"\s*:\s*400/.test(text);
  }
  return false;
}

async function fetchHtml(url, referer) {
  const ref = referer || BASE_URL + "/";
  let res = await Widget.http.get(url, {
    headers: mergeHeaders({ Referer: ref }),
  });
  let html = stringifyHttpBody(res && res.data);
  if (isErrorPage(html) || !/id=["']movie-list["']|<article\b|\/movie\//i.test(html)) {
    const desktopUa =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    res = await Widget.http.get(url, {
      headers: mergeHeaders({
        "User-Agent": desktopUa,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        Referer: ref,
      }),
    });
    html = stringifyHttpBody(res && res.data);
  }
  return html;
}

function extractTokenFromHtml(html) {
  const text = String(html || "");
  const patterns = [
    /id="video-player"[^>]*data-id="([^"]+)"/i,
    /data-id="([^"]+)"[^>]*id="video-player"/i,
    /id='video-player'[^>]*data-id='([^']+)'/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = text.match(patterns[i]);
    if (match && match[1]) return match[1];
  }
  return "";
}

function resolveUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return BASE_URL + "/" + href;
}

function resolveAbsoluteUrl(base, ref) {
  if (!ref) return "";
  if (ref.startsWith("http")) return ref;
  if (ref.startsWith("//")) return "https:" + ref;
  if (ref.startsWith("/")) {
    const origin = String(base).match(/^(https?:\/\/[^/]+)/);
    return origin ? origin[1] + ref : ref;
  }
  if (ref.startsWith("?")) return String(base).split("?")[0] + ref;
  const root = String(base).substring(0, String(base).lastIndexOf("/") + 1);
  return root + ref;
}

function readVideoCache(link) {
  try {
    const raw = Widget.storage.get("vurl:v3:" + String(link));
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (
      data &&
      data.videoUrl &&
      data.ts &&
      Date.now() - data.ts < VIDEO_CACHE_TTL * 1000
    ) {
      return data;
    }
  } catch (e) {}
  return null;
}

function writeVideoCache(link, videoUrl, customHeaders) {
  if (!videoUrl) return;
  try {
    Widget.storage.set(
      "vurl:v3:" + String(link),
      JSON.stringify({
        videoUrl: videoUrl,
        customHeaders: customHeaders,
        ts: Date.now(),
      })
    );
  } catch (e) {}
}

function readPartsBundle(baseUrl) {
  try {
    const raw = Widget.storage.get("parts:v3:" + String(baseUrl));
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (
      data &&
      data.html &&
      data.parts &&
      data.parts.length &&
      data.ts &&
      Date.now() - data.ts < PARTS_BUNDLE_TTL * 1000
    ) {
      return data;
    }
  } catch (e) {}
  return null;
}

function writePartsBundle(baseUrl, bundle) {
  try {
    Widget.storage.set(
      "parts:v3:" + String(baseUrl),
      JSON.stringify({
        html: bundle.html,
        parts: bundle.parts,
        resolvedParts: bundle.resolvedParts,
        ts: Date.now(),
      })
    );
  } catch (e) {}
}

async function fetchMovieHtmlBundle(baseUrl) {
  const key = normalizeMoviePageUrl(baseUrl);
  if (!key) throw new Error("invalid movie url");

  const cached = readPartsBundle(key);
  if (cached && cached.html && cached.parts && cached.parts.length) {
    return { html: cached.html, parts: cached.parts };
  }

  const html = await fetchHtml(key, BASE_URL + "/");
  const $ = safeLoadHtml(html);
  const parts = collectVideoParts($, key, html);
  writePartsBundle(key, {
    html: html,
    parts: parts,
    resolvedParts: [],
    ts: Date.now(),
  });
  return { html: html, parts: parts };
}

async function fetchMoviePartsBundle(baseUrl) {
  const key = normalizeMoviePageUrl(baseUrl);
  if (!key) throw new Error("invalid movie url");

  if (partsBundleInflight[key]) return partsBundleInflight[key];

  partsBundleInflight[key] = (async function () {
    let html = "";
    let parts = [];
    const cached = readPartsBundle(key);
    if (cached && cached.html && cached.parts && cached.parts.length) {
      html = cached.html;
      parts = cached.parts;
    } else {
      html = await fetchHtml(key, BASE_URL + "/");
      const $ = safeLoadHtml(html);
      parts = collectVideoParts($, key, html);
    }
    const resolvedParts = await resolvePartPlayback(parts, key);
    const bundle = {
      html: html,
      parts: parts,
      resolvedParts: resolvedParts,
      ts: Date.now(),
    };
    writePartsBundle(key, bundle);
    return bundle;
  })().finally(function () {
    delete partsBundleInflight[key];
  });

  return partsBundleInflight[key];
}

function extractResourceLink(params) {
  if (!params) return "";
  const keys = ["link", "id", "videoUrl", "tmdbId"];
  for (let i = 0; i < keys.length; i++) {
    const raw = params[keys[i]];
    if (!raw) continue;
    const text = String(raw);
    const base = normalizeMoviePageUrl(text.split("|ep|")[0]);
    if (base && base.indexOf("/movie/") >= 0) return base;
  }
  return "";
}

function countDistinctEpisodeLabels(parts) {
  const labels = {};
  for (let i = 0; i < (parts || []).length; i++) {
    const part = parts[i];
    if (!part) continue;
    const label = String(part.label || "").trim() || String(i + 1);
    labels[label] = true;
  }
  return Object.keys(labels).length;
}

function isMultiPartMovie(parts) {
  return countDistinctEpisodeLabels(parts) > 1;
}

async function resolveFreshPlayableParts(baseUrl) {
  const key = normalizeMoviePageUrl(baseUrl);
  if (!key) return [];

  const cached = readPartsBundle(key);
  if (
    cached &&
    cached.resolvedParts &&
    cached.resolvedParts.length &&
    cached.ts &&
    Date.now() - cached.ts < PARTS_BUNDLE_TTL * 1000
  ) {
    const playable = cached.resolvedParts.filter(function (part) {
      return part && part.videoUrl;
    });
    if (playable.length) return playable;
  }

  let html = "";
  let parts = [];
  if (cached && cached.html && cached.parts && cached.parts.length) {
    html = cached.html;
    parts = cached.parts;
  } else {
    html = await fetchHtml(key, BASE_URL + "/");
    const $ = safeLoadHtml(html);
    parts = collectVideoParts($, key, html);
  }

  const resolvedParts = await resolvePartPlayback(parts, key);
  writePartsBundle(key, {
    html: html,
    parts: parts,
    resolvedParts: resolvedParts,
    ts: Date.now(),
  });
  return resolvedParts.filter(function (part) {
    return part && part.videoUrl;
  });
}

function normalizeQualityLabel(raw) {
  let q = String(raw || "").replace(/\s+/g, " ").trim();
  if (!q) return "";
  if (/hd\s*\(\s*fixed\s*\)/i.test(q) || (/fixed/i.test(q) && /hd/i.test(q))) {
    return "HD(Fixed)";
  }
  const compact = q.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (compact === "FULLHD") return "FullHD";
  if (compact === "HDFIXED") return "HD(Fixed)";
  if (compact === "HD") return "HD";
  if (compact === "SD") return "SD";
  return q;
}

function extractQualityFromUrl(href) {
  const m = String(href || "").match(/[?&]type=([^&]+)/i);
  if (!m) return "";
  return normalizeQualityLabel(decodeURIComponent(m[1]).replace(/_/g, " "));
}

function formatStreamPartTitle(part) {
  const ep = String((part && part.label) || "1").trim();
  const quality = String((part && part.quality) || "").trim();
  const epTitle = /^\d+$/.test(ep) ? "\u7b2c" + ep + "\u96c6" : ep;
  if (quality) return epTitle + " " + quality;
  return epTitle;
}

function buildStreamResources(playable) {
  const resources = [];
  for (let i = 0; i < playable.length; i++) {
    const part = playable[i];
    const headers =
      part.customHeaders || buildPlayHeaders(part.videoUrl, part.pageUrl);
    writeVideoCache(part.pageUrl, part.videoUrl, headers);
    const multi = playable.length > 1;
    const title = formatStreamPartTitle(part);
    resources.push({
      name: multi ? title : part.quality || title || "HD",
      description: multi ? title + " | MP4" : (part.quality ? part.quality + " | MP4" : "MP4"),
      url: part.videoUrl,
      headers: headers,
      customHeaders: headers,
      playerType: "system",
    });
  }
  return resources;
}

function buildPlayHeaders(videoUrl, pageReferer) {
  const ref = pageReferer || BASE_URL + "/";
  return mergeHeaders({
    Accept: "*/*",
    Origin: "https://javmove.com",
    Referer: ref,
  });
}

function parseWatchUrl(raw) {
  if (raw == null) return "";
  if (typeof raw === "string") {
    const text = raw.trim().replace(/^"+|"+$/g, "");
    if (text.indexOf("http") === 0) return text;
    try {
      return parseWatchUrl(JSON.parse(text));
    } catch (e) {}
    const match = text.match(/https?:\/\/[^\s"'<>]+?\.(?:mp4|m3u8)[^\s"'<>]*/i);
    return match ? match[0] : "";
  }
  if (typeof raw === "object") {
    if (typeof raw.url === "string") return parseWatchUrl(raw.url);
    if (typeof raw.data === "string") return parseWatchUrl(raw.data);
    if (typeof raw.videoUrl === "string") return parseWatchUrl(raw.videoUrl);
    if (typeof raw.src === "string") return parseWatchUrl(raw.src);
  }
  return "";
}

function extractVideoUrlFromHtml(html) {
  if (!html) return "";
  const patterns = [
    /https?:\/\/[^\s"'<>]+?\.mp4[^\s"'<>]*/i,
    /https?:\/\/[^\s"'<>]+?\.m3u8[^\s"'<>]*/i,
    /["']file["']\s*:\s*["']([^"']+)["']/i,
    /["']url["']\s*:\s*["']([^"']*(?:\.mp4|\.m3u8)[^"']*)["']/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = String(html).match(patterns[i]);
    if (match) {
      const url = match[1] || match[0];
      if (url && url.indexOf("http") === 0) return url;
    }
  }
  return "";
}

async function fetchWatchUrl(token, referer) {
  if (!token) return "";
  const watchApi = BASE_URL + "/watch?token=" + encodeURIComponent(token);
  try {
    const res = await Widget.http.get(watchApi, {
      headers: {
        "User-Agent": HEADERS["User-Agent"],
        Referer: referer || BASE_URL + "/",
        Accept: "*/*",
        "Accept-Language": HEADERS["Accept-Language"],
      },
    });
    const raw = res.data;
    if (raw && typeof raw === "object" && (raw.error || raw.status === 400)) {
      return "";
    }
    const url = parseWatchUrl(raw);
    if (url) return url;
  } catch (e) {
    console.error("[fetchWatchUrl] 失败:", e.message || e);
  }
  return "";
}

function collectPartUrls($, detailUrl, html) {
  const urls = [];
  const seen = new Set();
  $(".video-source-btn").each(function (_, el) {
    const href = $(el).attr("href") || "";
    if (!href || href === "#" || href.indexOf("#") === 0) return;
    const partUrl = resolveAbsoluteUrl(detailUrl, href);
    if (partUrl && !seen.has(partUrl)) {
      seen.add(partUrl);
      urls.push(partUrl);
    }
  });
  if (urls.length) return urls;

  const re = /class="[^"]*\bvideo-source-btn\b[^"]*"[\s\S]*?href="([^"]+)"/gi;
  let match;
  while ((match = re.exec(String(html || "")))) {
    const href = match[1];
    if (!href || href === "#" || href.indexOf("#") === 0) continue;
    const partUrl = resolveAbsoluteUrl(detailUrl, href);
    if (partUrl && !seen.has(partUrl)) {
      seen.add(partUrl);
      urls.push(partUrl);
    }
  }
  return urls;
}

async function resolveTokenFromPage(pageUrl, referer) {
  try {
    const html = await fetchHtml(pageUrl, referer || BASE_URL + "/");
    const token = extractTokenFromHtml(html);
    if (token) {
      const videoUrl = await fetchWatchUrl(token, pageUrl);
      if (videoUrl) return videoUrl;
    }
    return extractVideoUrlFromHtml(html);
  } catch (e) {}
  return "";
}

async function resolveVideoUrlFromHtml($, pageUrl, html) {
  const htmlText = String(html || "");
  let mainToken = extractTokenFromHtml(htmlText);
  if (!mainToken) {
    try {
      mainToken = $("#video-player").attr("data-id") || "";
    } catch (e) {}
  }
  if (mainToken) {
    const mainUrl = await fetchWatchUrl(mainToken, pageUrl);
    if (mainUrl) return mainUrl;
  }
  return extractVideoUrlFromHtml(htmlText);
}

async function resolveVideoUrlForPage(pageUrl, referer) {
  const cached = readVideoCache(pageUrl);
  if (cached && cached.videoUrl) {
    return {
      videoUrl: cached.videoUrl,
      customHeaders: buildPlayHeaders(cached.videoUrl, pageUrl),
    };
  }
  const html = await fetchHtml(pageUrl, referer || pageUrl);
  const $ = safeLoadHtml(html);
  const videoUrl = await resolveVideoUrlFromHtml($, pageUrl, html);
  if (!videoUrl) return null;
  const customHeaders = buildPlayHeaders(videoUrl, pageUrl);
  writeVideoCache(pageUrl, videoUrl, customHeaders);
  return { videoUrl: videoUrl, customHeaders: customHeaders };
}

async function resolveVideoUrl($, detailUrl, html) {
  const htmlText = String(html || "");
  const mainUrl = await resolveVideoUrlFromHtml($, detailUrl, htmlText);
  if (mainUrl) return mainUrl;

  const partUrls = collectPartUrls($, detailUrl, htmlText);
  for (let i = 0; i < partUrls.length; i++) {
    const partVideoUrl = await resolveTokenFromPage(partUrls[i], detailUrl);
    if (partVideoUrl) return partVideoUrl;
  }

  return "";
}

function normalizeMoviePageUrl(url) {
  let u = String(url || "").split("#")[0];
  const pipe = u.indexOf("|ep|");
  if (pipe >= 0) u = u.slice(0, pipe);
  const q = u.indexOf("?");
  return q >= 0 ? u.slice(0, q) : u;
}

function extractActivePartLabel(url) {
  const text = String(url || "");
  const pipe = text.match(/\|ep\|(\d+)/i);
  if (pipe) return pipe[1];
  const query = text.match(/[?&]p=(\d+)/i);
  return query ? query[1] : "";
}

function findPartIndex(parts, label) {
  if (!label) return 0;
  for (let i = 0; i < parts.length; i++) {
    if (String(parts[i].label) === String(label)) return i;
  }
  return 0;
}

function formatDurationSeconds(sec) {
  const total = Math.max(0, Math.round(Number(sec) || 0));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = function (n) {
    return n < 10 ? "0" + n : String(n);
  };
  return pad(h) + ":" + pad(m) + ":" + pad(s);
}

function toByteArray(raw) {
  if (!raw) return null;
  if (raw instanceof Uint8Array) return raw;
  if (typeof Buffer !== "undefined" && Buffer.isBuffer(raw)) {
    return new Uint8Array(raw);
  }
  if (typeof raw === "string") {
    const arr = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i) & 255;
    return arr;
  }
  return null;
}

function parseMp4DurationBytes(buf) {
  if (!buf || buf.length < 32) return 0;
  function readBox(offset) {
    if (offset + 8 > buf.length) return null;
    const size = (buf[offset] << 24) | (buf[offset + 1] << 16) | (buf[offset + 2] << 8) | buf[offset + 3];
    let type = "";
    for (let i = 0; i < 4; i++) type += String.fromCharCode(buf[offset + 4 + i]);
    if (size < 8) return null;
    return { size: size, type: type, start: offset, end: offset + size, dataStart: offset + 8 };
  }
  function findBox(type, start, end) {
    let off = start;
    while (off + 8 <= end && off + 8 <= buf.length) {
      const box = readBox(off);
      if (!box) break;
      if (box.type === type) return box;
      if (
        box.type === "moov" ||
        box.type === "trak" ||
        box.type === "mdia" ||
        box.type === "minf"
      ) {
        const inner = findBox(type, box.dataStart, box.end);
        if (inner) return inner;
      }
      off = box.end;
    }
    return null;
  }
  const mvhd = findBox("mvhd", 0, buf.length);
  if (!mvhd) return 0;
  const ver = buf[mvhd.dataStart];
  let timescale = 0;
  let duration = 0;
  if (ver === 1) {
    timescale =
      (buf[mvhd.dataStart + 20] << 24) |
      (buf[mvhd.dataStart + 21] << 16) |
      (buf[mvhd.dataStart + 22] << 8) |
      buf[mvhd.dataStart + 23];
    const hi =
      (buf[mvhd.dataStart + 24] << 24) |
      (buf[mvhd.dataStart + 25] << 16) |
      (buf[mvhd.dataStart + 26] << 8) |
      buf[mvhd.dataStart + 27];
    const lo =
      (buf[mvhd.dataStart + 28] << 24) |
      (buf[mvhd.dataStart + 29] << 16) |
      (buf[mvhd.dataStart + 30] << 8) |
      buf[mvhd.dataStart + 31];
    duration = hi * 4294967296 + lo;
  } else {
    timescale =
      (buf[mvhd.dataStart + 12] << 24) |
      (buf[mvhd.dataStart + 13] << 16) |
      (buf[mvhd.dataStart + 14] << 8) |
      buf[mvhd.dataStart + 15];
    duration =
      (buf[mvhd.dataStart + 16] << 24) |
      (buf[mvhd.dataStart + 17] << 16) |
      (buf[mvhd.dataStart + 18] << 8) |
      buf[mvhd.dataStart + 19];
  }
  return timescale > 0 ? duration / timescale : 0;
}

function parseM3u8Duration(text) {
  let sum = 0;
  const re = /#EXTINF:([\d.]+)/g;
  let match;
  while ((match = re.exec(String(text || "")))) {
    sum += parseFloat(match[1]) || 0;
  }
  return sum;
}

const DURATION_CACHE_TTL = 86400;

function readDurationCache(videoUrl) {
  try {
    const raw = Widget.storage.get("vdur:" + String(videoUrl));
    if (!raw) return 0;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (data && data.sec > 0 && data.ts && Date.now() - data.ts < DURATION_CACHE_TTL * 1000) {
      return data.sec;
    }
  } catch (e) {}
  return 0;
}

function writeDurationCache(videoUrl, sec) {
  if (!videoUrl || !(sec > 0)) return;
  try {
    Widget.storage.set(
      "vdur:" + String(videoUrl),
      JSON.stringify({ sec: sec, ts: Date.now() })
    );
  } catch (e) {}
}

async function fetchVideoDurationSeconds(videoUrl, referer) {
  if (!videoUrl) return 0;
  const cached = readDurationCache(videoUrl);
  if (cached > 0) return cached;

  if (videoUrl.indexOf(".m3u8") >= 0) {
    try {
      const res = await Widget.http.get(videoUrl, {
        headers: mergeHeaders({ Referer: referer || BASE_URL + "/", Accept: "*/*" }),
      });
      const text = typeof res.data === "string" ? res.data : String(res.data || "");
      const sec = parseM3u8Duration(text);
      if (sec > 0) {
        writeDurationCache(videoUrl, sec);
        return sec;
      }
    } catch (e) {}
    return 0;
  }

  try {
    const res = await Widget.http.get(videoUrl, {
      headers: mergeHeaders({
        Referer: referer || BASE_URL + "/",
        Range: "bytes=0-524287",
        Accept: "*/*",
      }),
    });
    const bytes = toByteArray(res.data);
    const sec = bytes ? parseMp4DurationBytes(bytes) : 0;
    if (sec > 0) {
      writeDurationCache(videoUrl, sec);
      return sec;
    }
  } catch (e) {}
  return 0;
}

function collectVideoParts($, detailUrl, html) {
  const baseUrl = normalizeMoviePageUrl(detailUrl);
  const parts = [];
  const seen = new Set();

  function addPart(episodeLabel, quality, href) {
    const pageUrl =
      !href || href === "#" || href.indexOf("#") === 0
        ? baseUrl
        : resolveAbsoluteUrl(detailUrl, href);
    if (!pageUrl || seen.has(pageUrl)) return;
    seen.add(pageUrl);
    const label = String(episodeLabel || "").trim() || String(parts.length + 1);
    let q = normalizeQualityLabel(quality);
    if (!q) q = extractQualityFromUrl(href);
    parts.push({
      label: label,
      quality: q || "",
      pageUrl: pageUrl,
    });
  }

  let parsed = false;
  try {
    $(".video-format").each(function (_, block) {
      const $block = $(block);
      const quality = normalizeQualityLabel(
        $block.find(".video-format-header").first().text()
      );
      $block.find(".video-source-btn").each(function (_, el) {
        addPart($(el).text().trim(), quality, $(el).attr("href") || "");
      });
      if ($block.find(".video-source-btn").length) parsed = true;
    });
  } catch (e) {}

  if (!parsed) {
    const text = String(html || "");
    const sectionRe =
      /video-format-header[^>]*>([^<]*)<([\s\S]*?)(?=video-format-header|$)/gi;
    let sectionMatch;
    while ((sectionMatch = sectionRe.exec(text))) {
      const quality = normalizeQualityLabel(sectionMatch[1]);
      const btnRe = /video-source-btn[\s\S]*?href="([^"]*)"[\s\S]*?>([^<]*)</gi;
      let btnMatch;
      while ((btnMatch = btnRe.exec(sectionMatch[2]))) {
        addPart(btnMatch[2].trim(), quality, btnMatch[1]);
      }
    }
  }

  if (!parts.length) {
    const re =
      /class="[^"]*\bvideo-source-btn\b[^"]*"[\s\S]*?href="([^"]*)"[\s\S]*?>([^<]*)</gi;
    let match;
    while ((match = re.exec(String(html || "")))) {
      addPart(match[2].trim(), extractQualityFromUrl(match[1]), match[1]);
    }
  }

  if (!parts.length) {
    try {
      $(".video-source-btn").each(function (_, el) {
        const href = $(el).attr("href") || "";
        addPart($(el).text().trim(), extractQualityFromUrl(href), href);
      });
    } catch (e) {}
  }

  if (!parts.length) parts.push({ label: "1", quality: "", pageUrl: baseUrl });
  return parts;
}

function parseDetailInfo($, html) {
  const info = {
    movieId: "",
    releaseDate: "",
    publishDate: "",
    label: "",
    maker: "",
    actresses: [],
  };
  const text = String(html || "");

  function pickMeta(titleText, iconClass) {
    try {
      let value = "";
      $("li").each(function (_, el) {
        const $li = $(el);
        const hasTitle = $li.find('[title="' + titleText + '"]').length > 0;
        const hasIcon = iconClass ? $li.find("." + iconClass).length > 0 : false;
        if (!hasTitle && !hasIcon) return;
        if (iconClass === "fa-tag" && $li.find(".fa-tags").length) return;
        const anchor = $li.find("a[rel='tag']").first();
        value = anchor.length
          ? anchor.text().trim()
          : $li.find("span.rounded-full").first().text().trim();
        if (!value) value = $li.text().replace(/\s+/g, " ").trim();
        return false;
      });
      return value;
    } catch (e) {
      return "";
    }
  }

  info.movieId = pickMeta("Movie ID", "fa-id-card");
  info.releaseDate = pickMeta("Release Date", "fa-calendar-alt");
  info.publishDate = pickMeta("Publish Date", "fa-globe");
  info.label = pickMeta("Label", "fa-tag");
  info.maker = pickMeta("Maker", "fa-industry");

  try {
    $("a[href*='/stars/']").each(function (_, el) {
      const name = $(el).text().trim();
      if (name && info.actresses.indexOf(name) < 0) info.actresses.push(name);
    });
  } catch (e) {}

  if (!info.movieId) {
    const idM = text.match(/fa-id-card[\s\S]{0,260}?rounded-full[^>]*>\s*([^<\s][^<]*?)\s*</i);
    if (idM) info.movieId = decodeHtml(idM[1]).trim();
  }
  if (!info.releaseDate) {
    const relM = text.match(/fa-calendar-alt[\s\S]{0,260}?rounded-full[^>]*>\s*([^<]+?)\s*</i);
    if (relM) info.releaseDate = decodeHtml(relM[1]).trim();
  }
  if (!info.publishDate) {
    const pubM = text.match(/fa-globe[\s\S]{0,260}?rounded-full[^>]*>\s*([^<]+?)\s*</i);
    if (pubM) info.publishDate = decodeHtml(pubM[1]).trim();
  }
  if (!info.maker) {
    const makerM = text.match(/fa-industry[\s\S]{0,260}?<a[^>]+>([^<]+)<\/a>/i);
    if (makerM) info.maker = decodeHtml(makerM[1]).trim();
  }
  if (!info.label) {
    const labelM = text.match(/fa-tag[\s\S]{0,260}?<a[^>]+>([^<]+)<\/a>/i);
    if (labelM) info.label = decodeHtml(labelM[1]).trim();
  }
  if (!info.actresses.length) {
    const starRe = /href="(\/stars\/[^"]+)"[^>]*>([^<]+)</gi;
    let starMatch;
    while ((starMatch = starRe.exec(text))) {
      const name = decodeHtml(starMatch[2]).trim();
      if (name && info.actresses.indexOf(name) < 0) info.actresses.push(name);
    }
  }

  return info;
}

function buildSynopsisDescription(synopsisText) {
  return sanitizeSourceText(synopsisText) || "";
}

function keepOnlyChineseSynopsis(text) {
  let value = sanitizeSourceText(text);
  if (!value) return "";
  const firstCjk = value.search(/[\u4e00-\u9fff]/);
  if (firstCjk < 0) return "";
  if (firstCjk > 0) value = value.slice(firstCjk);
  value = value.replace(/[\u3040-\u30ff\u31f0-\u31ff]+/g, "");
  value = value.replace(/[a-zA-Z][a-zA-Z0-9'’\-.,;:!?"()\/]*/g, " ");
  value = value.replace(/\s+/g, " ").trim();
  return /[\u4e00-\u9fff]/.test(value) ? value : "";
}

function stripDuplicateTitleFromSynopsis(synopsis, displayTitle, movieCode) {
  let text = sanitizeSourceText(synopsis);
  if (!text) return "";
  const title = sanitizeSourceText(displayTitle);
  if (title) {
    if (text.toUpperCase() === title.toUpperCase()) return "";
    if (text.toUpperCase().indexOf(title.toUpperCase()) === 0) {
      text = text.slice(title.length).replace(/^[\s\-–—:,，]+/, "").trim();
    }
  }
  if (movieCode) {
    const code = String(movieCode).trim();
    text = text
      .replace(new RegExp("^" + code.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\s*", "i"), "")
      .trim();
    const looseCode = normalizeCodeToken(code);
    if (looseCode && normalizeCodeToken(text) === looseCode) return "";
  }
  return text;
}

function extractChineseOnlyText(text, sourceRaw) {
  let value = sanitizeSourceText(text);
  if (!value) return "";

  const raw = sanitizeSourceText(sourceRaw);
  if (raw) {
    if (value.indexOf(raw) === 0) {
      value = value.slice(raw.length).replace(/^[\s\n\r:：\-–—]+/, "").trim();
    }
    const rawUpper = raw.toUpperCase();
    const valueUpper = value.toUpperCase();
    if (valueUpper.indexOf(rawUpper) === 0) {
      value = value.slice(raw.length).replace(/^[\s\n\r:：\-–—]+/, "").trim();
    }
  }

  if (!/[\u4e00-\u9fff]/.test(value)) return "";

  const hasForeign =
    /[a-zA-Z]{3,}/.test(value) || /[\u3040-\u30ff]/.test(value);
  if (hasForeign) {
    const lines = value.split(/\r?\n+/);
    const chineseLines = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const cjk = (line.match(/[\u4e00-\u9fff]/g) || []).length;
      const latin = (line.match(/[a-zA-Z]/g) || []).length;
      const kana = (line.match(/[\u3040-\u30ff]/g) || []).length;
      if (cjk === 0) continue;
      if (cjk >= latin && cjk >= kana) {
        chineseLines.push(line);
      }
    }
    if (chineseLines.length) value = chineseLines.join("\n").trim();
  }

  return /[\u4e00-\u9fff]/.test(value) ? value : "";
}

async function resolvePartPlayback(parts, baseUrl) {
  const referer = baseUrl || BASE_URL + "/";
  const tasks = (parts || []).map(function (part, index) {
    return resolveVideoUrlForPage(part.pageUrl, referer).then(function (playback) {
      if (!playback && index === 0) {
        return resolveVideoUrlForPage(part.pageUrl, part.pageUrl);
      }
      return playback;
    }).then(function (playback) {
      return playback
        ? {
            label: part.label,
            quality: part.quality || "",
            pageUrl: part.pageUrl,
            videoUrl: playback.videoUrl,
            customHeaders: buildPlayHeaders(playback.videoUrl, part.pageUrl),
          }
        : {
            label: part.label,
            quality: part.quality || "",
            pageUrl: part.pageUrl,
            videoUrl: "",
            customHeaders: null,
          };
    });
  });
  return Promise.all(tasks);
}

async function measurePartDurations(resolvedParts) {
  const tasks = resolvedParts.map(function (part) {
    if (!part || !part.videoUrl) return Promise.resolve(0);
    return fetchVideoDurationSeconds(part.videoUrl, part.pageUrl);
  });
  return Promise.all(tasks);
}

function stripUndefined(obj) {
  if (!obj || typeof obj !== "object") return obj;
  const out = {};
  for (const key in obj) {
    if (obj[key] !== undefined) out[key] = obj[key];
  }
  return out;
}

function hasCompleteMeta(item) {
  return !!(
    item &&
    item.backdropPaths &&
    item.backdropPaths.length > 0 &&
    (item.seriesName || item.name || item.matchCode)
  );
}

function hasCompleteMetaFields(fields) {
  return !!(
    fields &&
    fields.backdropPaths &&
    fields.backdropPaths.length > 0 &&
    fields.parts &&
    fields.parts.length > 0
  );
}

function composeDetailMetaOnly(baseUrl, fields, parts, coverBundle) {
  const movieCode = resolveMovieCode(
    fields.detailInfo.movieId,
    fields.displayTitle,
    fields.synopsisRaw || fields.synopsisDisplay || ""
  );
  coverBundle =
    coverBundle || buildDetailCoverBundle(fields.cover, movieCode || fields.displayTitle);
  return finalizeDetailItem(
    {
      id: movieCode || baseUrl,
      type: "url",
      title: movieCode || "",
      backdropPath: coverBundle.backdropPath || undefined,
      posterPath: coverBundle.posterPath || undefined,
      detailPoster: coverBundle.detailPoster || undefined,
      coverUrl: coverBundle.coverUrl || coverBundle.backdropPath || coverBundle.detailPoster,
      backdropPaths: fields.backdropPaths,
      releaseDate: fields.detailInfo.releaseDate || undefined,
      genreItems: fields.genreItems.length > 0 ? fields.genreItems : undefined,
      peoples: fields.peoples.length > 0 ? fields.peoples : undefined,
      relatedItems: fields.relatedItems.length > 0 ? fields.relatedItems : undefined,
      link: baseUrl,
      webUrl: baseUrl,
      mediaType: "movie",
      playerType: isMultiPartMovie(parts) ? "system" : undefined,
    },
    movieCode,
    fields.synopsisDisplay || fields.description,
    fields.rating
  );
}

function readDetailMetaCache(baseUrl) {
  try {
    const raw = Widget.storage.get("detail:meta:v10:" + String(baseUrl));
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (
      data &&
      data.meta &&
      data.ts &&
      Date.now() - data.ts < DETAIL_ITEM_CACHE_TTL * 1000
    ) {
      return data.meta;
    }
  } catch (e) {}
  return null;
}

function writeDetailMetaCache(baseUrl, meta) {
  if (!meta) return;
  try {
    Widget.storage.set(
      "detail:meta:v10:" + String(baseUrl),
      JSON.stringify({ meta: meta, ts: Date.now() })
    );
  } catch (e) {}
}

function mergeFreshPlayback(item, resolvedParts) {
  if (!item || !resolvedParts || !resolvedParts.length) return item;

  const merged = Object.assign({}, item);
  const multiPart = isMultiPartMovie(resolvedParts);

  delete merged.episodeItems;
  delete merged.childItems;
  delete merged.episode;

  if (!multiPart) {
    const part = resolvedParts.find(function (p) {
      return p && p.videoUrl;
    });
    if (part) {
      merged.videoUrl = part.videoUrl;
      merged.customHeaders = buildPlayHeaders(part.videoUrl, part.pageUrl);
      merged.playerType = "system";
    }
  } else {
    delete merged.videoUrl;
    delete merged.customHeaders;
    merged.playerType = "system";
  }

  return stripUndefined(merged);
}

function readDetailItemCache(baseUrl) {
  try {
    const raw = Widget.storage.get("detail:v25:" + String(baseUrl));
    if (!raw) return null;
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (data && data.item && data.ts && Date.now() - data.ts < DETAIL_ITEM_CACHE_TTL * 1000) {
      return data.item;
    }
  } catch (e) {}
  return null;
}

function writeDetailItemCache(baseUrl, item) {
  if (!item) return;
  try {
    Widget.storage.set(
      "detail:v25:" + String(baseUrl),
      JSON.stringify({ item: item, ts: Date.now() })
    );
  } catch (e) {}
}

function normalizeCodeToken(code) {
  return String(code || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function extractGalleryBlock(html) {
  const text = String(html || "");
  const match = text.match(
    /<section[^>]*id="main-carousel"[\s\S]*?<\/section>[\s\S]*?<ul[^>]*id="thumbnails"[\s\S]*?<\/ul>/i
  );
  if (match) return match[0];
  const carousel = text.match(/<section[^>]*id="main-carousel"[\s\S]*?<\/section>/i);
  const thumbs = text.match(/<ul[^>]*id="thumbnails"[\s\S]*?<\/ul>/i);
  if (carousel || thumbs) {
    return (carousel ? carousel[0] : "") + (thumbs ? thumbs[0] : "");
  }
  const galleria = text.match(/<div[^>]*class="[^"]*galleria[^"]*"[\s\S]*?<\/div>\s*<\/div>/i);
  return galleria ? galleria[0] : "";
}

function isGalleryStillUrl(url) {
  const u = String(url || "").toLowerCase();
  return u.indexOf("/media/") >= 0;
}

function stillAltMatchesMovie(alt, movieCode, movieSlug) {
  const altNorm = normalizeCodeToken(alt);
  const codeNorm = normalizeCodeToken(movieCode);
  if (codeNorm && altNorm.indexOf(codeNorm) >= 0) return true;
  if (movieSlug && String(alt || "").toLowerCase().indexOf(movieSlug.toLowerCase()) >= 0) {
    return true;
  }
  return !codeNorm;
}

function extractMovieSlug(detailUrl) {
  const m = String(detailUrl || "").match(/\/movie\/([^/]+)/i);
  return m ? m[1] : "";
}

function extractGalleryImages(galleryHtml) {
  const results = [];
  const imgRe = /<img\b[\s\S]*?>/gi;
  let tagMatch;
  while ((tagMatch = imgRe.exec(String(galleryHtml || "")))) {
    const block = tagMatch[0];
    const srcM = block.match(/(?:src|data-src)="([^"]+)"/i);
    if (!srcM) continue;
    const altM = block.match(/alt="([^"]*)"/i);
    results.push({ src: srcM[1], alt: altM ? altM[1] : "" });
  }
  return results;
}

function extractDetailStills(html, $, cover, movieCode, detailUrl) {
  const paths = [];
  const seen = new Set();
  const coverNorm = normalizeImageUrl(cover);
  const galleryHtml = extractGalleryBlock(html);
  const movieSlug = extractMovieSlug(detailUrl);

  function add(url, alt, trustedGallery) {
    const u = normalizeImageUrl(url);
    if (!isValidCover(u) || seen.has(u)) return;
    if (coverNorm && u === coverNorm) return;
    if (!isGalleryStillUrl(u)) return;
    const altOk = stillAltMatchesMovie(alt, movieCode, movieSlug);
    const urlOk = movieCode && normalizeCodeToken(u).indexOf(normalizeCodeToken(movieCode)) >= 0;
    if (trustedGallery) {
      if (!altOk && !urlOk) return;
    } else if (!altOk) {
      return;
    }
    seen.add(u);
    paths.push(u);
  }

  const galleryImages = extractGalleryImages(galleryHtml);
  for (let i = 0; i < galleryImages.length && paths.length < 24; i++) {
    add(galleryImages[i].src, galleryImages[i].alt, true);
  }

  try {
    if ($) {
      $("#main-carousel img, #thumbnails img").each(function (_, el) {
        add(
          $(el).attr("src") || $(el).attr("data-src") || "",
          $(el).attr("alt") || "",
          true
        );
      });
    }
  } catch (e) {}

  return paths.length > 0 ? paths : undefined;
}

function parseRelatedArticle($el, seen, items, max) {
  if (items.length >= max) return false;
  const rHref = $el.find('a[rel="bookmark"]').first().attr("href") || "";
  const rDetailLink = resolveUrl(rHref);
  const relatedKey = normalizeMoviePageUrl(rDetailLink || rHref);
  if (!relatedKey || seen.has(relatedKey)) return true;
  seen.add(relatedKey);

  const h3Title =
    $el.find("h3").attr("title") || $el.find("h3").text().trim() || "";
  const rTitle = formatMovieCode("", h3Title) || h3Title.split(" ")[0] || "\u76f8\u5173\u5f71\u7247";
  const rCover = parseListCover(
    $el.html(),
    $el.find(".movie-image, img").first()
  );

  items.push({
    id: rDetailLink || relatedKey,
    type: "url",
    title: rTitle,
    backdropPath: rCover || undefined,
    posterPath: rCover || undefined,
    link: rDetailLink || relatedKey,
    mediaType: "movie",
  });
  return true;
}

function parseNextMovieRelatedItems(html, $, detailUrl, limit) {
  const items = [];
  const seen = new Set([normalizeMoviePageUrl(detailUrl)]);
  const max = limit || 12;
  const text = String(html || "");

  try {
    $("#nextMovie article").each(function (_, el) {
      if (items.length >= max) return false;
      parseRelatedArticle($(el), seen, items, max);
    });
  } catch (e) {}

  if (items.length >= max) return items;

  const blockStart = text.search(/id=["']nextMovie["']/i);
  if (blockStart < 0) return items;

  const blockSlice = text.slice(blockStart);
  const blockEnd = blockSlice.slice(20).search(/<(?:section|footer)\b/i);
  const nextBlock = blockEnd >= 0 ? blockSlice.slice(0, 20 + blockEnd) : blockSlice;
  const articleRe = /<article\b[\s\S]*?<\/article>/gi;
  let blockMatch;
  while ((blockMatch = articleRe.exec(nextBlock)) && items.length < max) {
    const hrefM = blockMatch[0].match(/href="(\/movie\/[^"]+)"[^>]*rel="bookmark"/i);
    if (!hrefM) continue;
    const rDetailLink = resolveUrl(hrefM[1]);
    const relatedKey = normalizeMoviePageUrl(rDetailLink);
    if (!relatedKey || seen.has(relatedKey)) continue;
    seen.add(relatedKey);
    const titleM =
      blockMatch[0].match(/<h3[^>]*title="([^"]+)"/i) ||
      blockMatch[0].match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const h3Title = titleM ? decodeHtml(titleM[1].replace(/<[^>]+>/g, "")) : "";
    const rCover = parseListCover(blockMatch[0]);
    items.push({
      id: rDetailLink,
      type: "url",
      title: formatMovieCode("", h3Title) || h3Title.split(" ")[0] || "\u76f8\u5173\u5f71\u7247",
      backdropPath: rCover || undefined,
      posterPath: rCover || undefined,
      link: rDetailLink,
      mediaType: "movie",
    });
  }

  return items;
}

function extractMatchCode(text) {
  let s = String(text || "").trim();
  if (!s) return "";
  s = s.toUpperCase();
  s = s.replace(/^[A-Z0-9]+(?:\.[A-Z0-9]+)+@/, "");
  s = s.replace(/^(?:HHD800|HHB800)[_\-@.\s]?/, "");
  const normalized = s.replace(/_/g, "-").replace(/\s+/g, " ").trim();
  const patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?(\d{5,8})\b/,
    /\bCARIB[- ]?(\d{6,8})\b/,
    /\b1PONDO[- ]?(\d{6,8})\b/,
    /\bHEYZO[- ]?(\d{3,6})\b/,
    /\bT28[- ]?(\d{6,8})\b/,
    /\b([A-Z]{2,15})[- ]?(\d{2,10})\b/,
    /\b(\d{6}[-_]\d{2,3})\b/,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = normalized.match(patterns[i]);
    if (!match) continue;
    if (match[1] && match[2]) return match[1] + "-" + match[2];
    if (match[1]) return match[1].replace(/\s+/g, "");
  }
  return "";
}

function extractJavCode(text) {
  const code = extractMatchCode(text);
  if (!code) return "";
  const parts = code.match(/^([A-Z0-9]+)-(\d+)$/i);
  if (parts) return parts[1] + "-" + String(parseInt(parts[2], 10));
  return code;
}

function formatMovieCode(movieId, rawTitle) {
  let code = String(movieId || "")
    .trim()
    .toUpperCase();
  if (!code && rawTitle) {
    const match = String(rawTitle).match(/^([A-Za-z]{2,12}-?\d{2,5})\b/);
    if (match) code = match[1].toUpperCase();
  }
  if (code && code.indexOf("-") < 0) {
    code = code.replace(/^([A-Z]+)(\d{2,5})$/i, "$1-$2");
  }
  return code;
}

function resolveMovieCode(movieId, displayTitle, extraText) {
  let code = formatMovieCode(movieId, "");
  if (!code && displayTitle) code = formatMovieCode("", displayTitle);
  if (!code && displayTitle) code = extractJavCode(displayTitle);
  if (!code && extraText) code = extractJavCode(extraText);
  return code || "";
}

function formatDisplayTitle(code, title) {
  code = String(code || "").trim();
  title = String(title || "").replace(/\s+/g, " ").trim();
  if (!code) return title;
  if (!title) return code;
  const upperTitle = title.toUpperCase();
  const upperCode = code.toUpperCase();
  const looseCode = upperCode.replace(/[^A-Z0-9]/g, "");
  const looseTitlePrefix = upperTitle.replace(/[^A-Z0-9]/g, "");
  if (upperTitle.indexOf(upperCode) === 0) {
    title = title.slice(code.length).replace(/^[\s\-–—:]+/, "").trim();
  } else if (looseTitlePrefix.indexOf(looseCode) === 0) {
    title = title
      .replace(/^[\s\-–—:]*/, "")
      .replace(new RegExp("^" + code.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "i"), "")
      .trim();
  }
  return title ? code + " " + title : code;
}

function parseDetailRating($, html) {
  const text = String(html || "");
  let scoreText = "";
  try {
    scoreText = $(".rating, .score, [class*='rating'], [class*='score']").first().text();
  } catch (e) {}
  if (!scoreText) {
    const match = text.match(/(?:rating|score|stars?)[^>]*>[\s\S]{0,120}?([\d.]+)/i);
    if (match) scoreText = match[1];
  }
  if (!scoreText) return 0;
  const numMatch = String(scoreText).match(/([\d.]+)/);
  if (!numMatch) return 0;
  let score = parseFloat(numMatch[1]);
  if (isNaN(score)) return 0;
  return score <= 5 ? Math.round(score * 2 * 10) / 10 : score;
}

/** Forward 详情 TMDB / 豆瓣匹配（与 javdb.js buildGuangyaMatchFields 相同） */
function buildGuangyaMatchFields(rawCode, rawTitle, description) {
  rawCode = String(rawCode || "").trim();
  rawTitle = String(rawTitle || "").replace(/\s+/g, " ").trim();
  description = String(description || "").replace(/\s+/g, " ").trim();
  const fields = {};
  if (rawCode) {
    fields.name = rawCode;
    fields.seriesName = rawCode;
    fields.episodeName = rawCode;
    fields.code = rawCode;
    fields.matchCode = rawCode;
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

function buildDetailMatchFields(movieCode, displayTitle, synopsisText, rating) {
  const match = buildGuangyaMatchFields(movieCode, "", "");
  return {
    id: movieCode || undefined,
    name: match.name,
    seriesName: match.seriesName,
    episodeName: match.episodeName,
    code: match.code,
    matchCode: match.matchCode,
    rating: rating !== undefined && rating !== null ? rating : 0,
  };
}

function applyForwardDisplayFields(item, movieCode, chineseSynopsis) {
  if (!item) return item;
  const code =
    movieCode ||
    resolveItemMovieCode(item, item.link || item.webUrl || "", null) ||
    item.matchCode ||
    item.code ||
    "";
  const titleName = sanitizeSourceText(code) || "\u672a\u77e5";
  let description = keepOnlyChineseSynopsis(sanitizeSourceText(chineseSynopsis || ""));
  if (!description || !hasChineseText(description)) {
    description = " ";
  }
  const out = Object.assign({}, item, buildDetailMatchFields(code, "", "", item.rating), {
    title: titleName,
    originalTitle: titleName,
    detailTitle: titleName,
    detailSynopsis: description.trim() || undefined,
    description: description,
  });
  delete out.episodeItems;
  delete out.childItems;
  delete out.episode;
  return stripUndefined(out);
}

function finalizeDetailItem(baseItem, movieCode, chineseSynopsis, rating) {
  const item = Object.assign({}, baseItem, buildDetailMatchFields(movieCode, "", "", rating));
  return applyForwardDisplayFields(item, movieCode, chineseSynopsis);
}

function enrichListItemMatchFields(item, rawTitle) {
  if (!item) return item;
  const fullTitle = normalizeListRawTitle(rawTitle || item.title || "");
  const movieCode = resolveMovieCode("", fullTitle, fullTitle);
  const listDescription = movieCode ? "\u756a\u53f7: " + movieCode : "";
  const match = buildGuangyaMatchFields(movieCode, "", listDescription);
  delete match.originalTitle;
  return stripUndefined(
    Object.assign({}, item, match, {
      id: movieCode || item.id || item.link,
      title: movieCode || item.title || fullTitle,
      rating: 0,
    })
  );
}

const COVER_VERIFY_MIN_BYTES = 15360;
const COVER_VERIFY_TIMEOUT_MS = 3000;

const DMM_PROBE_WORKER_BASE = "https://dmm.laotou.ccwu.cc";
const DMM_PROBE_WORKER_CACHE = {};
const DMM_PROBE_WORKER_TIMEOUT_MS = 8000;
const DMM_PROBE_STORAGE_PREFIX = "javdb.dmmProbe.v1.";
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
  try {
    const entry = { ok: !!probe, savedAt: Date.now() };
    if (probe) {
      entry.contentId = probe.contentId || "";
      entry.posterUrl = probe.posterUrl || "";
      entry.backdropUrl = probe.backdropUrl || "";
    }
    Widget.storage.set(dmmProbeStorageKey(code), JSON.stringify(entry));
  } catch (e) {}
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

function buildDetailCoverBundleFromDmm(code, siteFallback, dmmProbe) {
  const fallback = String(siteFallback || "").trim();
  if (!code || !isValidJavCatalogCode(code)) return buildCoverBundleFromUrls(fallback, fallback);
  const probe = dmmProbe !== undefined ? dmmProbe : lookupDmmProbeCover(code);
  const candidates = buildCoverCandidatesFromVideoId(code, probe);
  const hdPoster =
    resolvePosterUrlWithSiteFallback(candidates.posterCandidates[0] || "", fallback) ||
    fallback ||
    "";
  const hdBackdrop = candidates.backdropCandidates[0] || fallback || hdPoster || "";
  return buildCoverBundleFromUrls(hdPoster, hdBackdrop);
}

function buildDetailBackdropPaths(displayCode, dmmProbe) {
  const jtMeta = fetchJavTrailersMeta(displayCode, dmmProbe);
  return compactUniqueUrls([jtMeta.backdropPath].concat(jtMeta.backdropPaths || [])).filter(Boolean);
}

function pickHdCoverUrlLists(code, posterSize, dmmProbe) {
  posterSize = String(posterSize || "small").toLowerCase();
  const candidates = buildCoverCandidatesFromVideoId(code, dmmProbe);
  const posterUrls = compactUniqueUrls(candidates.posterCandidates || []);
  const backdropUrls = compactUniqueUrls(candidates.backdropCandidates || []);
  if (posterSize === "small") {
    return {
      posterUrls: posterUrls.slice(0, 2),
      backdropUrls: backdropUrls.slice(0, 2),
    };
  }
  return {
    posterUrls: compactUniqueUrls(backdropUrls.concat(posterUrls)).slice(0, 2),
    backdropUrls: backdropUrls.slice(0, 2),
  };
}

async function enrichListWithDmmCovers(items, params) {
  return enrichItemsWithDmmCovers(items, params || {}, {
    getCode: function (item) {
      return item.matchCode || resolveMovieCode("", item.title, item.title);
    },
    getSiteCover: function (item) { return item.backdropPath || ""; },
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
    out.push(applyCoverBundleToItem(item, bundle));
  }
  return out;
}

function pickBestFromSrcset(srcset) {
  const text = String(srcset || "").trim();
  if (!text) return "";
  if (text.indexOf(",") < 0 && text.indexOf("http") === 0) return text.split(/\s+/)[0];
  const parts = text.split(",");
  let best = "";
  let bestW = -1;
  for (let i = 0; i < parts.length; i++) {
    const piece = String(parts[i] || "").trim();
    if (!piece) continue;
    const chunks = piece.split(/\s+/);
    const url = chunks[0];
    let w = 0;
    if (chunks[1]) {
      const wm = chunks[1].match(/(\d+)w/i);
      if (wm) w = parseInt(wm[1], 10);
      else if (/^\d+x$/i.test(chunks[1])) w = parseInt(chunks[1], 10) || 0;
    }
    if (!best || w > bestW) {
      best = url;
      bestW = w;
    }
  }
  return best;
}

function normalizePosterUrl(url) {
  let cover = String(url || "").trim();
  if (!cover) return "";
  const at = cover.indexOf("@");
  if (at >= 0) cover = cover.slice(0, at);
  return normalizeImageUrl(cover);
}

function upgradeJavmoveCoverUrl(url) {
  let u = normalizePosterUrl(url);
  if (!u) return "";
  u = u
    .replace(/\/thumbs?\//gi, "/covers/")
    .replace(/\/media\/thumb\//gi, "/media/cover/")
    .replace(/\/small\./gi, "/large.")
    .replace(/\/small\//gi, "/large/");
  u = u.replace(/([_-])(?:small|thumb|s\d+)(\.(?:webp|jpg|jpeg|png))/i, "$1large$2");
  u = u.replace(/([_-])medium(\.(?:webp|jpg|jpeg|png))/i, "$1large$2");
  u = u.replace(/(@|\?)(?:w|h|width|height)=[^&"']+/gi, "");
  return u;
}

function resolvePageCoverUrl(raw) {
  const text = String(raw || "").trim();
  if (!text) return "";
  if (text.indexOf(",") >= 0 && /https?:\/\//.test(text)) {
    return upgradeJavmoveCoverUrl(pickBestFromSrcset(text));
  }
  return upgradeJavmoveCoverUrl(text);
}

function posterResponseSize(data) {
  if (!data) return 0;
  if (typeof data === "string") return data.length;
  if (typeof data.length === "number") return data.length;
  if (typeof data.byteLength === "number") return data.byteLength;
  return 0;
}

function isNowPrintingPosterTarget(url) {
  const u = String(url || "").toLowerCase();
  if (u.indexOf("now_printing") >= 0) return true;
  if (u.indexOf("nowprinting") >= 0) return true;
  if (/\/pics\/mono\/movie\/n\//.test(u)) return true;
  if (/imgsrc\.dmm\.(co\.jp|com)\/pics\/mono\/movie\/n\//.test(u)) return true;
  return false;
}

function isJavmoveSiteCoverUrl(url) {
  const u = String(url || "").toLowerCase();
  return u.indexOf("javmove.com") >= 0 || u.indexOf("ie2.javmove.com") >= 0;
}

function posterRequestHeaders(url) {
  const u = String(url || "").toLowerCase();
  let referer = BASE_URL + "/";
  if (u.indexOf("dmm.co.jp") >= 0 || u.indexOf("dmm.com") >= 0) {
    referer = "https://www.dmm.co.jp/";
  } else if (u.indexOf("mgstage.com") >= 0) {
    referer = "https://www.mgstage.com/";
  }
  return mergeHeaders({
    Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    Referer: referer,
  });
}

function extractPosterFinalUrl(resp, url) {
  const respObj = resp && resp.request && resp.request.res;
  if (respObj && respObj.responseUrl) return String(respObj.responseUrl);
  if (resp && resp.responseURL) return String(resp.responseURL);
  if (resp && resp.request && resp.request.uri && resp.request.uri.href) {
    return String(resp.request.uri.href);
  }
  if (resp && resp.config && resp.config.url) return String(resp.config.url);
  return String(url || "");
}

async function verifyCoverUrl(url) {
  if (!url || isNowPrintingPosterTarget(url)) return "";
  try {
    const resp = await Widget.http.get(url, {
      timeout: COVER_VERIFY_TIMEOUT_MS,
      headers: posterRequestHeaders(url),
      allow_redirects: true,
    });
    const finalUrl = extractPosterFinalUrl(resp, url);
    if (isNowPrintingPosterTarget(finalUrl)) return "";
    const size = posterResponseSize(resp && resp.data);
    if (size < COVER_VERIFY_MIN_BYTES) return "";
    return url;
  } catch (e) {
    return "";
  }
}

async function resolveFirstVerifiedCoverUrl(urls) {
  urls = compactUniqueUrls(urls || []).slice(0, 2);
  if (!urls.length) return "";
  if (urls.length === 1) return verifyCoverUrl(urls[0]);

  return new Promise(function (resolve) {
    let settled = false;
    let remaining = urls.length;
    function finish(result) {
      if (settled) return;
      if (result) {
        settled = true;
        resolve(result);
        return;
      }
      remaining--;
      if (remaining <= 0) resolve("");
    }
    for (let i = 0; i < urls.length; i++) {
      verifyCoverUrl(urls[i]).then(finish);
    }
  });
}

function resolvePagePosterFallback(pageCover) {
  return resolvePageCoverUrl(pageCover) || normalizePosterUrl(pageCover) || "";
}

function buildDetailCoverBundle(pageCover, code) {
  const pagePoster = resolvePagePosterFallback(pageCover);
  return {
    backdropPath: pagePoster || undefined,
    posterPath: undefined,
    detailPoster: pagePoster || undefined,
    coverUrl: pagePoster || undefined,
  };
}

async function resolveDetailCoverBundle(pageCover, code, params) {
  params = getEffectiveParams(params || {});
  const pagePoster = resolvePagePosterFallback(pageCover);

  if (!code || !isValidJavCatalogCode(code)) {
    return buildDetailCoverBundle(pageCover, code);
  }

  const dmmProbe = await fetchDmmProbeCover(code, params);
  const urlLists = pickHdCoverUrlLists(code, DMM_POSTER_SIZE, dmmProbe);
  const verified = await Promise.all([
    resolveFirstVerifiedCoverUrl(urlLists.posterUrls),
    resolveFirstVerifiedCoverUrl(urlLists.backdropUrls),
  ]);

  let detailPoster = verified[0] || "";
  let backdropPath = verified[1] || "";

  if (!detailPoster && pagePoster && isJavmoveSiteCoverUrl(pagePoster)) {
    detailPoster = pagePoster;
  }
  if (!detailPoster) detailPoster = pagePoster;
  if (!backdropPath) backdropPath = detailPoster || pagePoster;

  const dmmBundle = buildDetailCoverBundleFromDmm(code, pagePoster, dmmProbe);
  if (!detailPoster && dmmBundle.detailPoster) detailPoster = dmmBundle.detailPoster;
  if (!backdropPath && dmmBundle.backdropPath) backdropPath = dmmBundle.backdropPath;

  return {
    backdropPath: backdropPath || undefined,
    posterPath: detailPoster || undefined,
    detailPoster: detailPoster || undefined,
    coverUrl: backdropPath || detailPoster || undefined,
  };
}

function extractSynopsisRaw(html, rawTitle) {
  const titlePart = sanitizeSourceText(
    decodeHtml(String(rawTitle || "")).replace(/\|\s*JAVMove\s*$/i, "").trim()
  );
  return titlePart.length >= 16 ? titlePart : "";
}

function hashText(text) {
  let hash = 0;
  const value = String(text || "");
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return String(hash);
}

const TRANSLATE_CACHE_TTL = 604800;

const TRANSLATE_CACHE_PREFIX = "tr:zh:v8:";

const MYMEMORY_DE = "laotou0786@gmail.com";

function readTranslateCache(key) {
  try {
    const raw = Widget.storage.get(TRANSLATE_CACHE_PREFIX + key);
    if (!raw) return "";
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (data && data.text && data.ts && Date.now() - data.ts < TRANSLATE_CACHE_TTL * 1000) {
      if (looksLikeGarbledTranslation(data.text)) return "";
      return data.text;
    }
  } catch (e) {}
  return "";
}

function writeTranslateCache(key, text, source) {
  if (!text) return;
  if (source && shouldTranslateText(source)) {
    if (!/[\u4e00-\u9fff]/.test(text)) return;
    if (looksLikeGarbledTranslation(text)) return;
  } else if (looksLikeGarbledTranslation(text)) {
    return;
  }
  try {
    Widget.storage.set(TRANSLATE_CACHE_PREFIX + key, JSON.stringify({ text: text, ts: Date.now() }));
  } catch (e) {}
}

function sanitizeSourceText(text) {
  let value = String(text || "");
  if (value.indexOf("%") >= 0) {
    try { value = decodeURIComponent(value); } catch (e) {}
  }
  value = decodeHtml(value).trim();
  if (!value) return "";
  if (/[\u00c0-\u00ff]{2,}/.test(value) && !/[\u4e00-\u9fff\u3040-\u30ff]/.test(value)) {
    try {
      if (typeof Buffer !== "undefined") {
        const fixed = Buffer.from(value, "latin1").toString("utf8").trim();
        if (fixed && /[\u4e00-\u9fff\u3040-\u30ff]/.test(fixed)) value = fixed;
      }
    } catch (e) {}
  }
  return value.replace(/\uFFFD/g, "").replace(/\s+/g, " ").trim();
}

function stripMovieCodePrefix(text, movieCode) {
  let source = sanitizeSourceText(text);
  if (!source || !movieCode) return source;
  return source
    .replace(
      new RegExp("^" + movieCode.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\s*", "i"),
      ""
    )
    .trim();
}

function decodeUnicodeEscapes(text) {
  return String(text || "").replace(/\\u([0-9a-fA-F]{4})/g, function (_, hex) {
    return String.fromCharCode(parseInt(hex, 16));
  });
}

function stringifyHttpBody(raw) {
  if (raw == null) return "";
  if (typeof raw === "string") return raw;
  if (typeof Buffer !== "undefined" && Buffer.isBuffer(raw)) {
    return raw.toString("utf8");
  }
  if (raw instanceof Uint8Array) {
    if (typeof Buffer !== "undefined") return Buffer.from(raw).toString("utf8");
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(raw);
    }
  }
  if (typeof raw === "object") {
    try {
      return JSON.stringify(raw);
    } catch (e) {
      return "";
    }
  }
  return String(raw);
}

function normalizeTranslateOutput(text) {
  let value = decodeUnicodeEscapes(String(text || "").trim());
  if (!value) return "";
  if (/[\u4e00-\u9fff]/.test(value)) return value;
  if (/[\u00c0-\u00ff]{2,}/.test(value) || /[ÃÂâ]/.test(value)) {
    try {
      if (typeof Buffer !== "undefined") {
        const fixed = Buffer.from(value, "latin1").toString("utf8");
        if (/[\u4e00-\u9fff]/.test(fixed)) return fixed.trim();
      }
    } catch (e) {}
  }
  return value;
}

function looksLikeGarbledTranslation(translated) {
  const value = String(translated || "").trim();
  if (!value) return true;
  if (value.indexOf("\uFFFD") >= 0) return true;
  if (/[\u4e00-\u9fff]/.test(value)) return false;
  if (/[\u00c0-\u00ff]{2,}/.test(value)) return true;
  if (/[ÃÂâÃ¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©]/.test(value)) return true;
  if (/[\x00-\x08\x0e-\x1f]/.test(value)) return true;
  return false;
}

function parseMyMemoryResponse(raw) {
  let data = raw;
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!trimmed) return "";
    try {
      data = JSON.parse(trimmed);
    } catch (e) {
      return "";
    }
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) return "";
  const status = Number(data.responseStatus || 0);
  if (status && status !== 200) return "";
  const text =
    data.responseData && data.responseData.translatedText
      ? String(data.responseData.translatedText).trim()
      : "";
  if (!text || /MYMEMORY WARNING/i.test(text)) return "";
  const out = normalizeTranslateOutput(text);
  return isValidChineseTranslation(out) ? out : "";
}

function parseTranslatePayload(raw) {
  if (raw == null) return "";
  if (typeof raw === "object" && !Array.isArray(raw)) {
    return parseMyMemoryResponse(raw);
  }
  const body = stringifyHttpBody(raw);
  if (typeof body === "object" && body !== null && !Array.isArray(body)) {
    return parseMyMemoryResponse(body);
  }
  if (typeof body === "string") {
    return parseMyMemoryResponse(body);
  }
  return "";
}

function isValidChineseTranslation(text) {
  const value = String(text || "").trim();
  if (!value) return false;
  if (looksLikeGarbledTranslation(value)) return false;
  return /[\u4e00-\u9fff]/.test(value);
}

function detectTranslateSourceLang(text) {
  const source = String(text || "").trim();
  if (!source) return "";
  if (/[\u3040-\u30ff]/.test(source)) return "ja";
  if (/[\u4e00-\u9fff]/.test(source) && !/[a-zA-Z]{4,}/.test(source)) return "";
  if (/[a-zA-Z]/.test(source)) return "en";
  return "auto";
}

function shouldTranslateText(text) {
  return !!detectTranslateSourceLang(text);
}

function resolveDisplaySynopsis(source, translated) {
  const raw = sanitizeSourceText(source);
  if (!raw) return "";
  let zh = keepOnlyChineseSynopsis(extractChineseOnlyText(translated || "", raw));
  if (zh && isValidChineseTranslation(zh)) return zh;
  if (!shouldTranslateText(raw) && /[\u4e00-\u9fff]/.test(raw)) {
    return keepOnlyChineseSynopsis(extractChineseOnlyText(raw, ""));
  }
  return "";
}

async function resolveDetailChineseTitle(fields) {
  const bundle = await resolveDetailTranslation(fields);
  return bundle.detailTitle;
}

async function resolveDetailTranslation(fields) {
  const movieCode = resolveMovieCode(
    fields.detailInfo && fields.detailInfo.movieId,
    fields.displayTitle,
    fields.synopsisRaw || ""
  );
  let source = sanitizeSourceText(fields.synopsisRaw || "");
  if (!source) {
    source = sanitizeSourceText(fields.displayTitle || "")
      .replace(/\|\s*JAVMove\s*$/i, "")
      .trim();
  }
  source = stripMovieCodePrefix(source, movieCode);
  if (!source) {
    return {
      movieCode: movieCode || "",
      synopsis: "",
      detailTitle: movieCode || "",
    };
  }

  const translated = await translateSynopsisText(source);
  let zh = keepOnlyChineseSynopsis(extractChineseOnlyText(translated, source));
  zh = stripDuplicateTitleFromSynopsis(zh, fields.displayTitle, movieCode);
  const synopsis = zh && isValidChineseTranslation(zh) ? zh : "";
  return {
    movieCode: movieCode || "",
    synopsis: synopsis,
    detailTitle: movieCode || "",
  };
}

async function applySynopsisTranslation(fields, parts) {
  if (!fields) return fields;
  fields.synopsisRaw = sanitizeSourceText(fields.synopsisRaw || "");
  const bundle = await resolveDetailTranslation(fields);
  fields.detailTitle = bundle.detailTitle || bundle.movieCode || "";
  fields.synopsisDisplay = bundle.synopsis || "";
  fields.description = bundle.synopsis || "";
  return fields;
}

async function translateSynopsisText(source) {
  const text = sanitizeSourceText(source);
  if (!text) return "";
  if (!shouldTranslateText(text)) {
    if (/[\u4e00-\u9fff]/.test(text)) return extractChineseOnlyText(text, "");
    return "";
  }
  const cacheKey = hashText(text);
  const cached = readTranslateCache(cacheKey);
  if (cached && isValidChineseTranslation(cached)) {
    return extractChineseOnlyText(cached, text);
  }
  const translated = await translateToChinese(text);
  if (translated && isValidChineseTranslation(translated)) {
    return extractChineseOnlyText(translated, text);
  }
  return "";
}

async function requestMyMemoryTranslation(text, mmLang) {
  try {
    const res = await Widget.http.get(
      "https://api.mymemory.translated.net/get?q=" +
        encodeURIComponent(text) +
        "&langpair=" +
        encodeURIComponent(mmLang + "|zh-CN") +
        "&de=" +
        encodeURIComponent(MYMEMORY_DE),
      {
        timeout: 8000,
        headers: { "User-Agent": HEADERS["User-Agent"], Accept: "application/json" },
      }
    );
    return parseMyMemoryResponse(res.data);
  } catch (e) {
    return "";
  }
}

async function translateToChinese(text) {
  const source = sanitizeSourceText(text);
  if (!source) return "";
  const sl = detectTranslateSourceLang(source) || "auto";
  const cacheKey = hashText(sl + ":" + source);
  const cached = readTranslateCache(cacheKey);
  if (cached) return cached;

  const mmLang = sl === "ja" ? "ja" : sl === "en" ? "en" : "auto";
  const limits = [500, 280];
  let part = "";
  for (let i = 0; i < limits.length; i++) {
    const truncated = source.slice(0, limits[i]);
    if (!truncated) continue;
    part = await requestMyMemoryTranslation(truncated, mmLang);
    if (part) break;
  }

  if (part) {
    writeTranslateCache(cacheKey, part, source);
    return part;
  }
  return "";
}

function parseDetailMeta(html) {
  const text = String(html || "");
  const ogTitle =
    text.match(/property="og:title"\s+content="([^"]+)"/i) ||
    text.match(/content="([^"]+)"\s+property="og:title"/i);
  const ogImage =
    text.match(/property="og:image"\s+content="([^"]+)"/i) ||
    text.match(/content="([^"]+)"\s+property="og:image"/i);
  const h1 = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = decodeHtml(
    (ogTitle && ogTitle[1]) || (h1 && h1[1].replace(/<[^>]+>/g, "")) || ""
  ).trim();
  const cover = extractCoverFromHtml(text, null) || (ogImage && ogImage[1]) || "";
  return { title, cover };
}

function emptyQuery() {
  const node = {
    first: function () {
      return node;
    },
    find: function () {
      return node;
    },
    each: function () {},
    text: function () {
      return "";
    },
    attr: function () {
      return "";
    },
  };
  return node;
}

function safeLoadHtml(html) {
  try {
    const $ = Widget.html.load(html);
    if (typeof $ === "function") {
      const probe = $("body");
      if (probe && typeof probe.attr === "function") return $;
    }
  } catch (e) {}
  return function () {
    return emptyQuery();
  };
}

function decodeHtml(text) {
  return String(text || "")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function normalizeImageUrl(url) {
  const raw = decodeHtml(String(url || "").trim());
  if (!raw) return "";
  if (raw.startsWith("//")) return "https:" + raw;
  return raw;
}

function isValidCover(url) {
  const u = normalizeImageUrl(url);
  if (!u) return false;
  if (u.indexOf("data:image") === 0) return false;
  return u.indexOf("http") === 0;
}

function pickCoverFromAttrs(attrs) {
  const list = attrs || [];
  for (let i = 0; i < list.length; i++) {
    const raw = String(list[i] || "").trim();
    if (!raw) continue;
    const url = raw.indexOf(",") >= 0 ? pickBestFromSrcset(raw) : raw;
    const normalized = upgradeJavmoveCoverUrl(normalizeImageUrl(url));
    if (isValidCover(normalized)) return normalized;
  }
  return "";
}

function pickCoverFromNode($img) {
  if (!$img || !$img.length) return "";
  return pickCoverFromAttrs([
    $img.attr("data-srcset"),
    $img.attr("srcset"),
    $img.attr("data-src"),
    $img.attr("data-original"),
    $img.attr("src"),
  ]);
}

function extractCoverFromHtml(html, $) {
  const text = String(html || "");
  const srcsetMatch = text.match(
    /class="movie-image"[^>]*data-srcset="([^"]+)"/i
  );
  if (srcsetMatch) {
    const fromSrcset = resolvePageCoverUrl(srcsetMatch[1]);
    if (isValidCover(fromSrcset)) return fromSrcset;
  }
  const patterns = [
    /data-srcset="([^"]+)"/i,
    /class="movie-image"[^>]*src="(https?:\/\/[^"]+)"/i,
    /https?:\/\/ie2\.javmove\.com\/media\/[^"'\s]+\.(?:jpg|jpeg|webp|png)/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = text.match(patterns[i]);
    const raw = match && (match[1] || match[0]);
    const url = resolvePageCoverUrl(raw);
    if (isValidCover(url)) return url;
  }
  try {
    if ($) {
      const fromNode = pickCoverFromNode($(".movie-image").first());
      if (fromNode) return fromNode;
      const fromRelated = pickCoverFromNode($("img[data-srcset], img[srcset]").first());
      if (fromRelated) return fromRelated;
    }
  } catch (e) {}
  return "";
}

function parseListCover(block, $img) {
  if ($img && $img.length) {
    const fromNode = pickCoverFromNode($img);
    if (fromNode) return fromNode;
  }
  const text = String(block || "");
  const srcsetM = text.match(/data-srcset="([^"]+)"/i);
  if (srcsetM) {
    const fromSrcset = resolvePageCoverUrl(srcsetM[1]);
    if (isValidCover(fromSrcset)) return fromSrcset;
  }
  const patterns = [
    /class="movie-image"[^>]*src="(https?:\/\/[^"]+)"/i,
    /src="(https?:\/\/ie2\.javmove\.com\/[^"]+)"/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = text.match(patterns[i]);
    const url = resolvePageCoverUrl(match && match[1]);
    if (isValidCover(url)) return url;
  }
  return "";
}

function normalizeGenreId(raw) {
  const text = decodeHtml(String(raw || "").trim());
  if (!text) return "";
  if (text.indexOf("/genres/") >= 0) {
    const path = text.match(/(\/genres\/[^\s?#]+)/);
    return path ? resolveUrl(path[1]) : resolveUrl(text);
  }
  if (text.indexOf("javmove.com") >= 0 && text.indexOf("http") === 0) return text;
  return "";
}

function extractMovieListHtml(html) {
  const text = String(html || "");
  const start = text.search(/<div[^>]*\bid=["']movie-list["'][^>]*>/i);
  if (start >= 0) {
    const from = text.slice(start);
    const end = from.search(/<\/section>/i);
    if (end > 0) return from.slice(0, end + "</section>".length);
    return from.slice(0, 500000);
  }
  const match = text.match(/id=["']movie-list["'][\s\S]*?<\/section>/i);
  return match ? match[0] : text;
}

function buildGenrePageUrl(genreUrl, page) {
  let url = normalizeGenreId(genreUrl);
  if (!url) return "";
  const p = Number(page || 1);
  if (p > 1) url += (url.indexOf("?") >= 0 ? "&" : "?") + "page=" + p;
  return url;
}

async function fetchGenreVideoList(genreRef, page, params) {
  const baseUrl = normalizeGenreId(genreRef);
  if (!baseUrl) return [];
  const fetchUrl = buildGenrePageUrl(baseUrl, Math.max(1, Number(page || 1) || 1));
  try {
    const html = await fetchHtml(fetchUrl, baseUrl);
    const items = await parseVideoListWithCovers(html, params);
    if (!items.length && html) {
      console.error("[fetchGenreVideoList] parsed 0 items, url=" + fetchUrl + " htmlLen=" + String(html).length);
    }
    return items;
  } catch (e) {
    console.error("[fetchGenreVideoList] 失败:", e && e.message ? e.message : e);
    return [];
  }
}

function normalizeListRawTitle(rawTitle) {
  return sanitizeSourceText(
    decodeHtml(String(rawTitle || ""))
      .replace(/\s*Thumbnail\s*$/i, "")
      .trim()
  );
}

function buildListItemTitle(rawTitle) {
  const full = normalizeListRawTitle(rawTitle);
  const code = resolveMovieCode("", full, full);
  return code || full || "\u76f8\u5173\u5f71\u7247";
}

function parseListTitle(rawTitle) {
  return buildListItemTitle(rawTitle);
}

function parseVideoListRegex(html) {
  const items = [];
  const seen = {};
  const scoped = extractMovieListHtml(html);
  const articleRe = /<article\b[\s\S]*?<\/article>/gi;
  let match;
  while ((match = articleRe.exec(scoped)) && items.length < 60) {
    const block = match[0];
    const hrefM =
      block.match(/href="(\/movie\/[^"]+)"[^>]*rel="bookmark"/i) ||
      block.match(/rel="bookmark"[^>]*href="(\/movie\/[^"]+)"/i) ||
      block.match(/href='(\/movie\/[^']+)'[^>]*rel='bookmark'/i) ||
      block.match(/href="(\/movie\/[^"]+)"/i);
    if (!hrefM) continue;
    const href = hrefM[1];
    const detailLink = resolveUrl(href);
    if (seen[detailLink]) continue;
    seen[detailLink] = true;

    const titleM =
      block.match(/<h2[^>]*title="([^"]+)"/i) ||
      block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) ||
      block.match(/\balt="([^"]+)"/i);
    const rawTitle = titleM ? decodeHtml(titleM[1].replace(/<[^>]+>/g, "")) : href.split("/").pop();

    const coverM = parseListCover(block);
    const pubM = block.match(/datetime="([^"]+)"/i);
    const code = resolveMovieCode("", rawTitle, rawTitle);

    items.push({
      id: code || detailLink,
      type: "url",
      title: parseListTitle(rawTitle),
      backdropPath: coverM || undefined,
      releaseDate: pubM ? pubM[1].split("T")[0] : "",
      link: detailLink,
      mediaType: "movie",
    });
  }
  return items;
}

function parseVideoListSync(html) {
  if (!html) return [];
  const scoped = extractMovieListHtml(html);
  let items = [];

  try {
    const $ = Widget.html.load(scoped);
    $("#movie-list article, article").each(function (_, el) {
      const $el = $(el);
      let $link = $el.find('a[rel="bookmark"]').first();
      if (!$link || !$link.length) $link = $el.find('a[href*="/movie/"]').first();
      const href = ($link && $link.attr("href")) || "";
      const $h2 = $el.find("h2").first();
      const titleRaw =
        ($h2 && $h2.attr("title")) ||
        ($h2 && $h2.text && $h2.text().trim()) ||
        $el.find("img.movie-image").attr("alt") ||
        "";
      const listTitle = parseListTitle(titleRaw);
      if (!listTitle || listTitle === "\u76f8\u5173\u5f71\u7247" || !href) return;

      const cover = parseListCover($el.html(), $el.find("img.movie-image, .movie-image").first());
      const pubdate = $el.find("time").first().attr("datetime") || "";
      const detailLink = resolveUrl(href);
      const code = resolveMovieCode("", titleRaw, titleRaw);

      items.push({
        id: code || detailLink,
        type: "url",
        title: listTitle,
        backdropPath: cover || undefined,
        releaseDate: pubdate ? pubdate.split("T")[0] : "",
        link: detailLink,
        mediaType: "movie",
      });
    });
  } catch (e) {}

  if (items.length > 0) return items;
  return parseVideoListRegex(scoped);
}

function parseVideoList(html) {
  const items = parseVideoListSync(html);
  for (let i = 0; i < items.length; i++) {
    items[i] = enrichListItemMatchFields(items[i]);
  }
  return items;
}

async function parseVideoListWithCovers(html, params) {
  const items = parseVideoList(html);
  if (!items.length) return items;
  try {
    return await enrichListWithDmmCovers(items, params);
  } catch (e) {
    console.error("[parseVideoListWithCovers] DMM enrich failed:", e && e.message ? e.message : e);
    return items;
  }
}

async function loadGenreList(params) {
  params = syncGlobalParams(params || {});
  const genreId = normalizeGenreId(
    params.genreId || params.link || params.id || ""
  );
  if (!genreId) return [];
  return fetchGenreVideoList(genreId, params.page, params);
}

async function loadGenres(params) {
  return loadGenreList(params);
}

async function loadLatest(params) {
  params = syncGlobalParams(params || {});
  if (params.genreId) return loadGenreList(params);
  const page = Math.max(1, Number(params.page || 1) || 1);
  try {
    const url = BASE_URL + "/release?page=" + page;
    const html = await fetchHtml(url, BASE_URL + "/");
    const items = await parseVideoListWithCovers(html, params);
    if (!items.length && html) {
      console.error("[loadLatest] parsed 0 items, htmlLen=" + String(html).length);
    }
    return items;
  } catch (e) {
    console.error("[loadLatest] 失败:", e && e.message ? e.message : e);
    return [];
  }
}

async function loadUpcoming(params) {
  params = syncGlobalParams(params || {});
  if (params.genreId) return loadGenreList(params);
  const page = Math.max(1, Number(params.page || 1) || 1);
  try {
    const url = BASE_URL + "/upcoming?page=" + page;
    const html = await fetchHtml(url, BASE_URL + "/");
    const items = await parseVideoListWithCovers(html, params);
    if (!items.length && html) {
      console.error("[loadUpcoming] parsed 0 items, htmlLen=" + String(html).length);
    }
    return items;
  } catch (e) {
    console.error("[loadUpcoming] 失败:", e && e.message ? e.message : e);
    return [];
  }
}

function collectDetailGenreItems(html, $) {
  const genreItems = [];
  try {
    $("a[href*='/genres/'], a[href*='/stars/'], a[href*='/makers/']").each(
      function (_, el) {
        const $a = $(el);
        const href = resolveUrl($a.attr("href") || "");
        const text = $a.text().trim();
        const genreUrl = normalizeGenreId(href);
        if (text && genreUrl) genreItems.push({ id: genreUrl, title: text });
      }
    );
  } catch (e) {}
  if (!genreItems.length) {
    const genreRe = /href="(\/(?:genres|stars|makers)\/[^"]+)"[^>]*>([^<]+)</gi;
    let genreMatch;
    while ((genreMatch = genreRe.exec(String(html || "")))) {
      const href = resolveUrl(genreMatch[1]);
      const text = decodeHtml(genreMatch[2]).trim();
      const genreUrl = normalizeGenreId(href);
      if (text && genreUrl) genreItems.push({ id: genreUrl, title: text });
    }
  }
  return genreItems;
}

function collectDetailPeoples($) {
  const peoples = [];
  try {
    $("a[href*='/stars/']").each(function (_, el) {
      const $a = $(el);
      const href = resolveUrl($a.attr("href") || "");
      const text = $a.text().trim();
      if (text && href) peoples.push({ id: href, title: text, role: "actress" });
    });
  } catch (e) {}
  return peoples;
}

function buildDetailFieldsFromHtml(html, baseUrl, parts) {
  const $ = safeLoadHtml(html);
  const meta = parseDetailMeta(html);
  const detailInfo = parseDetailInfo($, html);
  const rawTitle =
    $("h1").first().text().trim() ||
    $('meta[property="og:title"]').attr("content") ||
    meta.title ||
    "";
  const movieCode = resolveMovieCode(detailInfo.movieId, rawTitle, "");
  const displayTitle =
    formatDisplayTitle(movieCode, rawTitle) ||
    rawTitle.split("|")[0].trim();
  const synopsisRaw = extractSynopsisRaw(html, rawTitle);
  const cover =
    extractCoverFromHtml(html, $) ||
    $('meta[property="og:image"]').attr("content") ||
    $("video").attr("poster") ||
    meta.cover ||
    "";
  const backdropPaths = extractDetailStills(
    html,
    $,
    cover,
    movieCode,
    baseUrl
  );
  const rating = parseDetailRating($, html);
  const genreItems = collectDetailGenreItems(html, $);
  const peoples = collectDetailPeoples($);
  const relatedItems = parseNextMovieRelatedItems(html, $, baseUrl, 12);
  return {
    displayTitle: displayTitle,
    cover: cover,
    backdropPaths: backdropPaths,
    description: "",
    synopsisRaw: synopsisRaw,
    synopsisDisplay: "",
    rating: rating,
    detailInfo: detailInfo,
    genreItems: genreItems,
    peoples: peoples,
    relatedItems: relatedItems,
    parts: parts,
  };
}

function composeDetailItem(baseUrl, fields, parts, resolvedParts, coverBundle) {
  const playable = resolvedParts.filter(function (part) {
    return part && part.videoUrl;
  });
  if (!playable.length) return null;

  const mainPart = playable[0];
  const movieCode = resolveMovieCode(
    fields.detailInfo.movieId,
    fields.displayTitle,
    fields.synopsisRaw || fields.synopsisDisplay || ""
  );
  coverBundle =
    coverBundle || buildDetailCoverBundle(fields.cover, movieCode || fields.displayTitle);
  const isSeries = isMultiPartMovie(parts);

  const item = finalizeDetailItem(
    {
      id: movieCode || baseUrl,
      type: "url",
      title: movieCode || "",
      backdropPath: coverBundle.backdropPath,
      posterPath: coverBundle.posterPath,
      detailPoster: coverBundle.detailPoster,
      coverUrl: coverBundle.coverUrl || coverBundle.backdropPath || coverBundle.detailPoster,
      backdropPaths: fields.backdropPaths,
      releaseDate: fields.detailInfo.releaseDate || undefined,
      genreItems: fields.genreItems.length > 0 ? fields.genreItems : undefined,
      peoples: fields.peoples.length > 0 ? fields.peoples : undefined,
      relatedItems: fields.relatedItems.length > 0 ? fields.relatedItems : undefined,
      link: baseUrl,
      webUrl: baseUrl,
      mediaType: "movie",
      playerType: "system",
    },
    movieCode,
    fields.synopsisDisplay || fields.description,
    fields.rating
  );

  if (!isSeries) {
    item.videoUrl = mainPart.videoUrl;
    item.customHeaders = buildPlayHeaders(mainPart.videoUrl, mainPart.pageUrl);
  }

  return item;
}

async function loadDetail(link, params) {
  const input = extractDetailLinkInput(link);
  params = syncGlobalParams(params || input.params || {});
  const baseUrl = normalizeMoviePageUrl(input.url);
  if (!baseUrl || baseUrl.indexOf("/movie/") < 0) return null;
  if (detailInflight[baseUrl]) return detailInflight[baseUrl];
  detailInflight[baseUrl] = loadDetailInternal(baseUrl, params).finally(function () {
    delete detailInflight[baseUrl];
  });
  return detailInflight[baseUrl];
}

async function loadDetailInternal(baseUrl, params) {
  try {
    params = syncGlobalParams(params || {});
    const activeLabel = extractActivePartLabel(String(baseUrl));

    const cachedItem = readDetailItemCache(baseUrl);
    if (cachedItem && hasCompleteMeta(cachedItem)) {
      const movieCode = resolveItemMovieCode(cachedItem, baseUrl, readDetailMetaCache(baseUrl));
      const meta = readDetailMetaCache(baseUrl);
      const parts = (meta && meta.parts) || [];
      const multiEpisode = isMultiPartMovie(parts);
      const effectiveParams = syncGlobalParams(params || {});

      let item = cachedItem;

      item = await refreshDetailItemCover(
        item,
        item.detailPoster || item.backdropPath,
        movieCode,
        effectiveParams
      );

      if (!multiEpisode && !item.videoUrl) {
        const freshParts = await resolveFreshPlayableParts(baseUrl);
        item = mergeFreshPlayback(item, freshParts);
      }

      item = await postProcessDetailForForward(item, baseUrl);
      writeDetailItemCache(baseUrl, item);
      return item;
    }

    let parts = [];
    let fields = readDetailMetaCache(baseUrl);

    if (fields && !hasCompleteMetaFields(fields)) {
      fields = null;
    }

    if (fields && fields.parts && fields.parts.length) {
      parts = fields.parts;
    } else {
      const bundle = await fetchMovieHtmlBundle(baseUrl);
      parts = bundle.parts;
      fields = buildDetailFieldsFromHtml(bundle.html, baseUrl, parts);
      writeDetailMetaCache(baseUrl, fields);
    }

    if (!parts.length || !fields) return null;

    const movieCode = resolveMovieCode(
      fields.detailInfo.movieId,
      fields.displayTitle,
      fields.synopsisRaw || fields.synopsisDisplay || ""
    );
    const effectiveParams = syncGlobalParams(params || {});

    const coverPromise = resolveDetailCoverBundle(
      fields.cover,
      movieCode || fields.displayTitle,
      effectiveParams
    );
    let resolvedPartsPromise;
    if (isMultiPartMovie(parts)) {
      resolvedPartsPromise = resolveFreshPlayableParts(baseUrl);
    } else {
      resolvedPartsPromise = resolveVideoUrlForPage(parts[0].pageUrl, baseUrl).then(function (playback) {
        if (!playback) return [];
        return [
          {
            label: parts[0].label,
            pageUrl: parts[0].pageUrl,
            videoUrl: playback.videoUrl,
            customHeaders: buildPlayHeaders(playback.videoUrl, parts[0].pageUrl),
          },
        ];
      });
    }
    const synopsisPromise = applySynopsisTranslation(fields, parts);

    const parallel = await Promise.all([
      coverPromise,
      resolvedPartsPromise,
      synopsisPromise,
    ]);
    const coverBundle = parallel[0];
    const resolvedParts = parallel[1];
    writeDetailMetaCache(baseUrl, fields);

    if (!resolvedParts.length) {
      const metaOnly = await postProcessDetailForForward(
        composeDetailMetaOnly(baseUrl, fields, parts, coverBundle),
        baseUrl
      );
      writeDetailItemCache(baseUrl, metaOnly);
      return metaOnly;
    }

    if (activeLabel) {
      let picked = null;
      for (let i = 0; i < resolvedParts.length; i++) {
        if (String(resolvedParts[i].label) === String(activeLabel)) {
          picked = resolvedParts[i];
          break;
        }
      }
      if (picked && picked.videoUrl) {
        const rest = resolvedParts.filter(function (part) {
          return String(part.label) !== String(activeLabel);
        });
        resolvedParts = [picked].concat(rest);
      }
    }

    const detailItem = await postProcessDetailForForward(
      composeDetailItem(baseUrl, fields, parts, resolvedParts, coverBundle),
      baseUrl
    );
    if (!detailItem) return null;
    writeDetailItemCache(baseUrl, detailItem);
    return detailItem;
  } catch (e) {
    console.error("[loadDetail] 失败:", e.message || e);
    return null;
  }
}

async function loadResource(params) {
  params = syncGlobalParams(params || {});
  const baseUrl = extractResourceLink(params || {});
  if (!baseUrl) return [];

  try {
    let playable = await resolveFreshPlayableParts(baseUrl);
    if (!playable.length) {
      try {
        Widget.storage.set("parts:v3:" + baseUrl, "");
      } catch (e) {}
      playable = await resolveFreshPlayableParts(baseUrl);
    }
    if (!playable.length) return [];
    return buildStreamResources(playable);
  } catch (e) {
    console.error("[loadResource] 失败:", e.message || e);
    return [];
  }
}

async function search(params) {
  params = syncGlobalParams(params || {});
  if (params.genreId) return loadGenreList(params);

  const keyword = params.keyword || "";
  const page = Math.max(1, Number(params.page || 1) || 1);
  if (!keyword) return [];

  try {
    const url =
      BASE_URL +
      "/search?q=" +
      encodeURIComponent(keyword) +
      "&page=" +
      page;
    const html = await fetchHtml(url, BASE_URL + "/");
    return await parseVideoListWithCovers(html, params);
  } catch (e) {
    console.error("[search] 失败:", e && e.message ? e.message : e);
    return [];
  }
}

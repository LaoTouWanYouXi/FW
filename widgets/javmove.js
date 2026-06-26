WidgetMetadata = {
  id: "forward.javmove",
  title: "JavMove",
  version: "1.0.23",
  requiredVersion: "0.0.1",
  description: "JavMove \u89c6\u9891\u805a\u5408\u6a21\u5757\uff0c\u652f\u6301\u6700\u65b0\u3001\u5373\u5c06\u4e0a\u6620\u3001\u5206\u7c7b\u5bfc\u822a\u3001\u641c\u7d22",
  author: "老头",
  site: "https://javmove.com",
  detailCacheDuration: 300,
  modules: [
    {
      id: "loadResource",
      title: "\u52a0\u8f7d\u8d44\u6e90",
      functionName: "loadResource",
      type: "stream",
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

function isErrorPage(body) {
  const text = String(body || "").trim();
  if (!text || text.length < 200) {
    return text.startsWith("{") && /"error"|"status"\s*:\s*400/.test(text);
  }
  return false;
}

async function fetchHtml(url, referer) {
  const ref = referer || BASE_URL + "/";
  let res = await Widget.http.get(url, {
    headers: mergeHeaders({ Referer: ref }),
  });
  let html = typeof res.data === "string" ? res.data : String(res.data || "");
  if (isErrorPage(html)) {
    res = await Widget.http.get(url, {
      headers: {
        "User-Agent": HEADERS["User-Agent"],
        Accept: "text/html",
        Referer: ref,
      },
    });
    html = typeof res.data === "string" ? res.data : String(res.data || "");
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
    const raw = Widget.storage.get("parts:v2:" + String(baseUrl));
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
      "parts:v2:" + String(baseUrl),
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
    const u = normalizeMoviePageUrl(String(raw));
    if (u && u.indexOf("/movie/") >= 0) return u;
  }
  return "";
}

async function resolveFreshPlayableParts(baseUrl) {
  const key = normalizeMoviePageUrl(baseUrl);
  if (!key) return [];

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

function buildStreamResources(playable) {
  const resources = [];
  for (let i = 0; i < playable.length; i++) {
    const part = playable[i];
    const headers =
      part.customHeaders || buildPlayHeaders(part.videoUrl, part.pageUrl);
    writeVideoCache(part.pageUrl, part.videoUrl, headers);
    resources.push({
      name:
        playable.length > 1
          ? "\u7b2c" + part.label + "\u96c6"
          : "HD",
      description:
        playable.length > 1
          ? "\u7b2c" + part.label + "\u96c6 | MP4"
          : "MP4",
      url: part.videoUrl,
      headers: headers,
      customHeaders: headers,
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

function buildEpisodeItemId(baseUrl, label) {
  return normalizeMoviePageUrl(baseUrl) + "|ep|" + label;
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

  function addPart(label, href) {
    const pageUrl =
      !href || href === "#" || href.indexOf("#") === 0
        ? baseUrl
        : resolveAbsoluteUrl(detailUrl, href);
    if (!pageUrl || seen.has(pageUrl)) return;
    seen.add(pageUrl);
    parts.push({ label: label || String(parts.length + 1), pageUrl: pageUrl });
  }

  const re =
    /class="[^"]*\bvideo-source-btn\b[^"]*"[\s\S]*?href="([^"]*)"[\s\S]*?>([^<]*)</gi;
  let match;
  while ((match = re.exec(String(html || "")))) {
    addPart(match[2].trim(), match[1]);
  }

  if (!parts.length) {
    try {
      $(".video-source-btn").each(function (_, el) {
        addPart($(el).text().trim(), $(el).attr("href") || "");
      });
    } catch (e) {}
  }

  if (!parts.length) parts.push({ label: "1", pageUrl: baseUrl });
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

function buildDetailDescription(info, partCount, totalSec, partSec, synopsisText) {
  const lines = [];
  if (synopsisText) lines.push("\u7b80\u4ecb\uff1a" + synopsisText);
  if (info.movieId) lines.push("\u756a\u53f7\uff1a" + formatMovieCode(info.movieId, ""));
  if (info.releaseDate) lines.push("\u53d1\u5e03\u65e5\u671f\uff1a" + info.releaseDate);
  if (info.publishDate) lines.push("\u4e0a\u67b6\u65e5\u671f\uff1a" + info.publishDate);
  if (info.actresses.length) {
    lines.push("\u5973\u4f18\uff1a" + info.actresses.join("\u3001"));
  }
  if (info.label) lines.push("\u53d1\u884c\u5546\uff1a" + info.label);
  if (info.maker) lines.push("\u5236\u4f5c\u5546\uff1a" + info.maker);
  if (totalSec > 0) {
    lines.push("\u65f6\u957f\uff1a" + formatDurationSeconds(totalSec));
  }
  if (partCount > 1) {
    let segmentLine =
      "\u5206\u96c6\uff1a\u5171" + partCount + "\u96c6";
    if (partSec > 0) {
      segmentLine += "\uff0c\u6bcf\u96c6\u7ea6" + formatDurationSeconds(partSec);
    }
    segmentLine +=
      "\u3002\u64ad\u653e\u5668\u9ed8\u8ba4\u7b2c1\u96c6\uff0c\u8bf7\u5728\u5267\u96c6\u5217\u8868\u5207\u6362\u540e\u7eed\u96c6\u6570\u3002";
    lines.push(segmentLine);
  }
  return lines.join("\n");
}

async function resolvePartPlayback(parts, baseUrl) {
  const referer = baseUrl || BASE_URL + "/";
  const resolved = [];
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    let playback = await resolveVideoUrlForPage(part.pageUrl, referer);
    if (!playback && index === 0) {
      playback = await resolveVideoUrlForPage(part.pageUrl, part.pageUrl);
    }
    resolved.push(
      playback
        ? {
            label: part.label,
            pageUrl: part.pageUrl,
            videoUrl: playback.videoUrl,
            customHeaders: buildPlayHeaders(playback.videoUrl, part.pageUrl),
          }
        : {
            label: part.label,
            pageUrl: part.pageUrl,
            videoUrl: "",
            customHeaders: null,
          }
    );
  }
  return resolved;
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
    item.description &&
    item.backdropPaths &&
    item.backdropPaths.length > 0
  );
}

function hasCompleteMetaFields(fields) {
  return !!(
    fields &&
    fields.description &&
    fields.backdropPaths &&
    fields.backdropPaths.length > 0 &&
    fields.parts &&
    fields.parts.length > 0
  );
}

function composeDetailMetaOnly(baseUrl, fields, parts) {
  const isSeries = parts.length > 1;
  const episodeItems = buildEpisodeItemsFromParts(
    baseUrl,
    fields.displayTitle,
    parts,
    [],
    fields.cover
  );
  const childItems = buildPartChildItemsFromParts(
    baseUrl,
    fields.displayTitle,
    parts,
    [],
    fields.cover
  );
  return stripUndefined({
    id: baseUrl,
    type: "url",
    title: fields.displayTitle,
    backdropPath: fields.cover || undefined,
    posterPath: fields.cover || undefined,
    backdropPaths: fields.backdropPaths,
    description: fields.description || undefined,
    releaseDate: fields.detailInfo.releaseDate || undefined,
    genreItems: fields.genreItems.length > 0 ? fields.genreItems : undefined,
    peoples: fields.peoples.length > 0 ? fields.peoples : undefined,
    episodeItems: isSeries ? episodeItems : undefined,
    childItems: isSeries ? childItems : undefined,
    relatedItems: fields.relatedItems.length > 0 ? fields.relatedItems : undefined,
    link: baseUrl,
    mediaType: "movie",
    seriesName: isSeries ? fields.displayTitle : undefined,
  });
}

function readDetailMetaCache(baseUrl) {
  try {
    const raw = Widget.storage.get("detail:meta:v1:" + String(baseUrl));
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
      "detail:meta:v1:" + String(baseUrl),
      JSON.stringify({ meta: meta, ts: Date.now() })
    );
  } catch (e) {}
}

function playbackMapFromResolved(resolvedParts) {
  const map = {};
  for (let i = 0; i < (resolvedParts || []).length; i++) {
    const part = resolvedParts[i];
    if (part && part.label) map[String(part.label)] = part;
  }
  return map;
}

function buildEpisodeItemsFromParts(
  baseUrl,
  displayTitle,
  parts,
  resolvedParts,
  cover
) {
  if (!parts || parts.length <= 1) return [];
  const movieUrl = normalizeMoviePageUrl(baseUrl);
  const playbackMap = playbackMapFromResolved(resolvedParts);
  const items = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const playback = playbackMap[String(part.label)];
    const epNum = Number(part.label) || i + 1;
    const epLabel = "\u7b2c" + part.label + "\u96c6";
    const item = stripUndefined({
      id: buildEpisodeItemId(movieUrl, part.label),
      type: "url",
      title: epLabel,
      episodeName: epLabel,
      episode: epNum,
      season: 1,
      link: movieUrl,
      mediaType: "movie",
      playerType: "system",
      backdropPath: cover || undefined,
      posterPath: cover || undefined,
      coverUrl: cover || undefined,
    });
    if (playback && playback.videoUrl) {
      item.videoUrl = playback.videoUrl;
      item.customHeaders = buildPlayHeaders(
        playback.videoUrl,
        playback.pageUrl || part.pageUrl
      );
    }
    items.push(item);
  }
  return items.length > 1 ? items : [];
}

function buildPartChildItemsFromParts(
  baseUrl,
  displayTitle,
  parts,
  resolvedParts,
  cover
) {
  const items = buildEpisodeItemsFromParts(
    baseUrl,
    displayTitle,
    parts,
    resolvedParts,
    cover
  );
  return items.map(function (item) {
    const child = Object.assign({}, item);
    delete child.title;
    return child;
  });
}

function readDetailItemCache(baseUrl) {
  try {
    const raw = Widget.storage.get("detail:v7:" + String(baseUrl));
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
      "detail:v7:" + String(baseUrl),
      JSON.stringify({ item: item, ts: Date.now() })
    );
  } catch (e) {}
}

function mergeFreshPlayback(item, resolvedParts) {
  if (!item || !resolvedParts || !resolvedParts.length) return item;
  const playable = resolvedParts.filter(function (part) {
    return part && part.videoUrl;
  });
  if (!playable.length) return item;

  const merged = Object.assign({}, item);
  merged.videoUrl = playable[0].videoUrl;
  merged.customHeaders = buildPlayHeaders(
    playable[0].videoUrl,
    playable[0].pageUrl
  );

  function refreshEpisodeList(listKey) {
    if (!merged[listKey] || merged[listKey].length <= 1) return;
    const nextItems = [];
    for (let i = 0; i < merged[listKey].length; i++) {
      const child = Object.assign({}, merged[listKey][i]);
      const label =
        extractActivePartLabel(child.id || "") || String(child.episode || "");
      let part = null;
      for (let j = 0; j < playable.length; j++) {
        if (String(playable[j].label) === String(label)) {
          part = playable[j];
          break;
        }
      }
      if (!part && playable[i]) part = playable[i];
      if (part && part.videoUrl) {
        child.videoUrl = part.videoUrl;
        child.customHeaders = buildPlayHeaders(part.videoUrl, part.pageUrl);
      }
      nextItems.push(child);
    }
    merged[listKey] = nextItems;
  }

  refreshEpisodeList("episodeItems");
  refreshEpisodeList("childItems");

  const currentEp = Number(merged.episode || 0);
  let playPart = playable[0];
  if (currentEp > 0) {
    for (let k = 0; k < playable.length; k++) {
      const epNum = Number(playable[k].label) || k + 1;
      if (epNum === currentEp) {
        playPart = playable[k];
        break;
      }
    }
  }
  if (playPart && playPart.videoUrl) {
    merged.videoUrl = playPart.videoUrl;
    merged.customHeaders = buildPlayHeaders(playPart.videoUrl, playPart.pageUrl);
  }

  return stripUndefined(merged);
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
  return match ? match[0] : "";
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

  function add(url, alt) {
    const u = normalizeImageUrl(url);
    if (!isValidCover(u) || seen.has(u)) return;
    if (coverNorm && u === coverNorm) return;
    if (u.indexOf("/media/") < 0) return;
    if (!stillAltMatchesMovie(alt, movieCode, movieSlug)) return;
    seen.add(u);
    paths.push(u);
  }

  const galleryImages = extractGalleryImages(galleryHtml);
  for (let i = 0; i < galleryImages.length && paths.length < 24; i++) {
    add(galleryImages[i].src, galleryImages[i].alt);
  }

  try {
    $("#main-carousel img, #thumbnails img").each(function (_, el) {
      add(
        $(el).attr("src") || $(el).attr("data-src") || "",
        $(el).attr("alt") || ""
      );
    });
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

function parseDetailRelatedItems(html, $, detailUrl, limit) {
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

  if (items.length < max) {
    const articleRe = /<article\b[\s\S]*?<\/article>/gi;
    const nextBlock = text.match(/id="nextMovie"[\s\S]*$/i);
    if (nextBlock) {
      let blockMatch;
      while ((blockMatch = articleRe.exec(nextBlock[0])) && items.length < max) {
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
    }
  }

  if (items.length < max) {
    const articleRe = /<article\b[\s\S]*?<\/article>/gi;
    let blockMatch;
    while ((blockMatch = articleRe.exec(text)) && items.length < max) {
      if (blockMatch[0].indexOf("/movie/") < 0) continue;
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
  }

  if (items.length < max) {
    try {
      $("div.thumbnail, #related article, .related-videos article").each(function (_, el) {
        if (items.length >= max) return false;
        parseRelatedArticle($(el), seen, items, max);
      });
    } catch (e) {}
  }

  return items;
}

async function enrichRelatedItems(html, $, detailUrl, limit) {
  const max = limit || 12;
  const items = parseDetailRelatedItems(html, $, detailUrl, max);
  if (items.length >= max) return items;

  const slugMatch = String(html || "").match(/var slug = "([^"]+)"/i);
  if (!slugMatch) return items;

  try {
    const url =
      BASE_URL +
      "/fragment/more?slug=" +
      encodeURIComponent(slugMatch[1]) +
      "&page=1";
    const frag = await fetchHtml(url, detailUrl);
    const seen = new Set(
      items.map(function (item) {
        return normalizeMoviePageUrl(item.link || item.id);
      })
    );
    seen.add(normalizeMoviePageUrl(detailUrl));
    const $frag = safeLoadHtml(frag);
    const more = parseDetailRelatedItems(frag, $frag, detailUrl, max);
    for (let i = 0; i < more.length && items.length < max; i++) {
      const key = normalizeMoviePageUrl(more[i].link || more[i].id);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      items.push(more[i]);
    }
  } catch (e) {}

  return items;
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

function extractSynopsisRaw(html, rawTitle) {
  let raw = decodeHtml(String(rawTitle || ""))
    .replace(/\|\s*JAVMove\s*$/i, "")
    .trim();
  if (raw) {
    const stripped = raw.replace(/^[A-Za-z0-9-]+\s+/, "").trim();
    if (stripped.length >= 16) return stripped;
  }

  const metaMatch = String(html || "").match(/name="description"\s+content="([^"]+)"/i);
  if (metaMatch) {
    let meta = decodeHtml(metaMatch[1]).replace(/^Watch online\s+/i, "").trim();
    const cut = meta.indexOf(", ");
    if (cut > 0) meta = meta.slice(0, cut);
    meta = meta.replace(/^[A-Za-z0-9-]+\s+/, "").trim();
    if (meta.length >= 16) return meta;
  }

  const titleMatch = String(html || "").match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    let pageTitle = decodeHtml(titleMatch[1])
      .replace(/\|\s*JAVMove\s*$/i, "")
      .trim();
    pageTitle = pageTitle.replace(/^[A-Za-z0-9-]+\s+/, "").trim();
    if (pageTitle.length >= 16) return pageTitle;
  }

  return raw.replace(/^[A-Za-z0-9-]+\s+/, "").trim() || raw;
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

function readTranslateCache(key) {
  try {
    const raw = Widget.storage.get("tr:zh:" + key);
    if (!raw) return "";
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (data && data.text && data.ts && Date.now() - data.ts < TRANSLATE_CACHE_TTL * 1000) {
      return data.text;
    }
  } catch (e) {}
  return "";
}

function writeTranslateCache(key, text) {
  if (!text) return;
  try {
    Widget.storage.set("tr:zh:" + key, JSON.stringify({ text: text, ts: Date.now() }));
  } catch (e) {}
}

function decodeUnicodeEscapes(text) {
  return String(text || "").replace(/\\u([0-9a-fA-F]{4})/g, function (_, hex) {
    return String.fromCharCode(parseInt(hex, 16));
  });
}

function parseTranslatePayload(raw) {
  if (raw == null) return "";
  let data = raw;
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!trimmed) return "";
    if (trimmed.charAt(0) === "[" || trimmed.charAt(0) === "{") {
      try {
        data = JSON.parse(trimmed);
      } catch (e) {
        return trimmed;
      }
    } else {
      return trimmed;
    }
  }
  if (Array.isArray(data) && Array.isArray(data[0])) {
    let out = "";
    for (let i = 0; i < data[0].length; i++) {
      if (data[0][i] && data[0][i][0]) out += data[0][i][0];
    }
    return out.trim();
  }
  if (data && data.responseData && data.responseData.translatedText) {
    return decodeUnicodeEscapes(String(data.responseData.translatedText).trim());
  }
  return "";
}

function translateCachedOnly(text) {
  const source = String(text || "").trim();
  if (!source) return "";
  return readTranslateCache(hashText(source)) || source;
}

async function translateToChinese(text) {
  const source = String(text || "").trim();
  if (!source) return "";
  const cacheKey = hashText(source);
  const cached = readTranslateCache(cacheKey);
  if (cached) return cached;

  const chunkSize = 1200;
  const chunks = [];
  for (let i = 0; i < source.length; i += chunkSize) {
    chunks.push(source.slice(i, i + chunkSize));
  }

  const translatedParts = [];
  for (let i = 0; i < chunks.length; i++) {
    let part = "";
    try {
      const googleUrl =
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=" +
        encodeURIComponent(chunks[i]);
      const res = await Widget.http.get(googleUrl, {
        headers: { "User-Agent": HEADERS["User-Agent"], Accept: "*/*" },
      });
      part = parseTranslatePayload(res.data);
    } catch (e) {}

    if (!part) {
      try {
        const mmUrl =
          "https://api.mymemory.translated.net/get?q=" +
          encodeURIComponent(chunks[i]) +
          "&langpair=en|zh-CN";
        const res = await Widget.http.get(mmUrl, {
          headers: { "User-Agent": HEADERS["User-Agent"], Accept: "application/json" },
        });
        part = parseTranslatePayload(res.data);
      } catch (e) {}
    }

    translatedParts.push(part || chunks[i]);
  }

  const translated = translatedParts.join("").trim();
  const result = translated || source;
  if (translated && translated !== source) writeTranslateCache(cacheKey, translated);
  return result;
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
    const url = normalizeImageUrl(list[i]);
    if (isValidCover(url)) return url;
  }
  return "";
}

function pickCoverFromNode($img) {
  if (!$img || !$img.length) return "";
  return pickCoverFromAttrs([
    $img.attr("data-srcset"),
    $img.attr("data-src"),
    $img.attr("data-original"),
    $img.attr("src"),
  ]);
}

function extractCoverFromHtml(html, $) {
  const text = String(html || "");
  const patterns = [
    /class="movie-image"[^>]*data-srcset="([^"]+)"/i,
    /data-srcset="(https?:\/\/[^"]+)"/i,
    /class="movie-image"[^>]*src="(https?:\/\/[^"]+)"/i,
    /https?:\/\/ie2\.javmove\.com\/media\/[^"'\s]+\.(?:jpg|jpeg|webp|png)/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = text.match(patterns[i]);
    const url = normalizeImageUrl(match && (match[1] || match[0]));
    if (isValidCover(url)) return url;
  }
  try {
    if ($) {
      const fromNode = pickCoverFromNode($(".movie-image").first());
      if (fromNode) return fromNode;
      const fromRelated = pickCoverFromNode($("img[data-srcset]").first());
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
  const patterns = [
    /data-srcset="([^"]+)"/i,
    /class="movie-image"[^>]*src="(https?:\/\/[^"]+)"/i,
    /src="(https?:\/\/ie2\.javmove\.com\/[^"]+)"/i,
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = text.match(patterns[i]);
    const url = normalizeImageUrl(match && match[1]);
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
  const match = text.match(/id="movie-list"[\s\S]*?<\/section>/i);
  return match ? match[0] : text;
}

function buildGenrePageUrl(genreUrl, page) {
  let url = normalizeGenreId(genreUrl);
  if (!url) return "";
  const p = Number(page || 1);
  if (p > 1) url += (url.indexOf("?") >= 0 ? "&" : "?") + "page=" + p;
  return url;
}

async function fetchGenreVideoList(genreRef, page) {
  const baseUrl = normalizeGenreId(genreRef);
  if (!baseUrl) return [];
  const fetchUrl = buildGenrePageUrl(baseUrl, page);
  try {
    const html = await fetchHtml(fetchUrl, baseUrl);
    return parseVideoList(html);
  } catch (e) {
    return [];
  }
}

function parseVideoListRegex(html) {
  const items = [];
  const seen = new Set();
  const scoped = extractMovieListHtml(html);
  const articleRe = /<article\b[\s\S]*?<\/article>/gi;
  let match;
  while ((match = articleRe.exec(scoped)) && items.length < 60) {
    const block = match[0];
    const hrefM =
      block.match(/href="(\/movie\/[^"]+)"[^>]*rel="bookmark"/i) ||
      block.match(/rel="bookmark"[^>]*href="(\/movie\/[^"]+)"/i);
    if (!hrefM) continue;
    const href = hrefM[1];
    const detailLink = resolveUrl(href);
    if (seen.has(detailLink)) continue;
    seen.add(detailLink);

    const titleM =
      block.match(/<h2[^>]*title="([^"]+)"/i) ||
      block.match(/\balt="([^"]+)"/i);
    const rawTitle = titleM ? decodeHtml(titleM[1]) : href.split("/").pop();
    const title = rawTitle.split(" Thumbnail")[0].split(" ")[0] || rawTitle;

    const coverM = parseListCover(block);
    const pubM = block.match(/datetime="([^"]+)"/i);

    items.push({
      id: detailLink,
      type: "url",
      title: title,
      backdropPath: coverM || undefined,
      releaseDate: pubM ? pubM[1].split("T")[0] : "",
      link: detailLink,
      mediaType: "movie",
    });
  }
  return items;
}

function parseVideoList(html) {
  if (!html) return [];
  const scoped = extractMovieListHtml(html);
  let items = [];

  try {
    const $ = Widget.html.load(scoped);
    $("#movie-list article, article").each(function (_, el) {
      const $el = $(el);
      const $link = $el.find('a[rel="bookmark"]').first();
      const href = $link.attr("href") || "";
      const $h2 = $el.find("h2").first();
      const titleRaw =
        $h2.attr("title") ||
        $h2.text().trim() ||
        $el.find("img.movie-image").attr("alt") ||
        "";
      const title = decodeHtml(titleRaw.split(" Thumbnail")[0].split(" ")[0]);
      if (!title || !href) return;

      const cover = parseListCover($el.html(), $el.find("img.movie-image, .movie-image").first());
      const pubdate = $el.find("time").first().attr("datetime") || "";
      const detailLink = resolveUrl(href);

      items.push({
        id: detailLink,
        type: "url",
        title: title,
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

async function loadGenreList(params) {
  const genreId = normalizeGenreId(
    params.genreId || params.link || params.id || ""
  );
  if (!genreId) return [];
  return fetchGenreVideoList(genreId, params.page);
}

async function loadGenres(params) {
  return loadGenreList(params);
}

async function loadLatest(params) {
  if (params.genreId) return loadGenreList(params);
  const page = Number(params.page || 1);
  try {
    const url = BASE_URL + "/release?page=" + page;
    const html = await fetchHtml(url, BASE_URL + "/");
    return parseVideoList(html);
  } catch (e) {
    return [];
  }
}

async function loadUpcoming(params) {
  if (params.genreId) return loadGenreList(params);
  const page = Number(params.page || 1);
  try {
    const url = BASE_URL + "/upcoming?page=" + page;
    const html = await fetchHtml(url, BASE_URL + "/");
    return parseVideoList(html);
  } catch (e) {
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
  const displayTitle =
    formatMovieCode(detailInfo.movieId, rawTitle) ||
    rawTitle.split("|")[0].trim();
  const synopsisRaw = extractSynopsisRaw(html, rawTitle);
  const synopsisText = translateCachedOnly(synopsisRaw);
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
    displayTitle,
    baseUrl
  );
  const description = buildDetailDescription(
    detailInfo,
    parts.length,
    0,
    0,
    synopsisText
  );
  const genreItems = collectDetailGenreItems(html, $);
  const peoples = collectDetailPeoples($);
  const relatedItems = parseDetailRelatedItems(html, $, baseUrl, 12);
  return {
    displayTitle: displayTitle,
    cover: cover,
    backdropPaths: backdropPaths,
    description: description,
    detailInfo: detailInfo,
    genreItems: genreItems,
    peoples: peoples,
    relatedItems: relatedItems,
    parts: parts,
  };
}

function composeDetailItem(baseUrl, fields, parts, resolvedParts, activeLabel) {
  const playable = resolvedParts.filter(function (part) {
    return part && part.videoUrl;
  });
  if (!playable.length) return null;

  const mainPart = playable[0];
  const cover = fields.cover;
  const displayTitle = fields.displayTitle;
  const episodeItems = buildEpisodeItemsFromParts(
    baseUrl,
    displayTitle,
    parts,
    resolvedParts,
    cover
  );
  const childItems = buildPartChildItemsFromParts(
    baseUrl,
    displayTitle,
    parts,
    resolvedParts,
    cover
  );
  const isSeries = parts.length > 1;

  return stripUndefined({
    id: baseUrl,
    type: "url",
    title: displayTitle,
    backdropPath: cover || undefined,
    posterPath: cover || undefined,
    backdropPaths: fields.backdropPaths,
    videoUrl: mainPart.videoUrl,
    playerType: "system",
    description: fields.description || undefined,
    releaseDate: fields.detailInfo.releaseDate || undefined,
    genreItems: fields.genreItems.length > 0 ? fields.genreItems : undefined,
    peoples: fields.peoples.length > 0 ? fields.peoples : undefined,
    episodeItems: isSeries ? episodeItems : undefined,
    childItems: isSeries ? childItems : undefined,
    relatedItems: fields.relatedItems.length > 0 ? fields.relatedItems : undefined,
    link: baseUrl,
    mediaType: "movie",
    seriesName: isSeries ? displayTitle : undefined,
    customHeaders: buildPlayHeaders(mainPart.videoUrl, mainPart.pageUrl),
  });
}

async function loadDetail(link) {
  const baseUrl = normalizeMoviePageUrl(String(link));
  if (!baseUrl || baseUrl.indexOf("/movie/") < 0) return null;
  if (detailInflight[baseUrl]) return detailInflight[baseUrl];
  detailInflight[baseUrl] = loadDetailInternal(link).finally(function () {
    delete detailInflight[baseUrl];
  });
  return detailInflight[baseUrl];
}

async function loadDetailInternal(link) {
  try {
    const baseUrl = normalizeMoviePageUrl(String(link));
    const activeLabel = extractActivePartLabel(String(link));

    const cachedItem = readDetailItemCache(baseUrl);
    if (cachedItem && hasCompleteMeta(cachedItem)) {
      const freshParts = await resolveFreshPlayableParts(baseUrl);
      return mergeFreshPlayback(cachedItem, freshParts);
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

    let resolvedParts = [];
    if (parts.length > 1) {
      resolvedParts = await resolveFreshPlayableParts(baseUrl);
    } else {
      const playback = await resolveVideoUrlForPage(parts[0].pageUrl, baseUrl);
      if (playback) {
        resolvedParts = [
          {
            label: parts[0].label,
            pageUrl: parts[0].pageUrl,
            videoUrl: playback.videoUrl,
            customHeaders: buildPlayHeaders(playback.videoUrl, parts[0].pageUrl),
          },
        ];
      }
    }

    if (!resolvedParts.length) {
      const metaOnly = composeDetailMetaOnly(baseUrl, fields, parts);
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

    const detailItem = composeDetailItem(
      baseUrl,
      fields,
      parts,
      resolvedParts,
      activeLabel
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
  const baseUrl = extractResourceLink(params || {});
  if (!baseUrl) return [];

  try {
    let playable = await resolveFreshPlayableParts(baseUrl);
    if (!playable.length) {
      try {
        Widget.storage.set("parts:v2:" + baseUrl, "");
      } catch (e) {}
      playable = await resolveFreshPlayableParts(baseUrl);
    }
    if (!playable.length) return [];

    const resources = buildStreamResources(playable);
    const epNum = Number((params && params.episode) || 0);
    if (epNum > 0) {
      for (let j = 0; j < playable.length; j++) {
        const partEp = Number(playable[j].label) || j + 1;
        if (partEp === epNum) return [resources[j]];
      }
    }
    return resources;
  } catch (e) {
    console.error("[loadResource] 失败:", e.message || e);
    return [];
  }
}

async function search(params) {
  if (params.genreId) return loadGenreList(params);

  const keyword = params.keyword || "";
  const page = Number(params.page || 1);
  if (!keyword) return [];

  try {
    const url =
      BASE_URL +
      "/search?q=" +
      encodeURIComponent(keyword) +
      "&page=" +
      page;
    const html = await fetchHtml(url, BASE_URL + "/");
    return parseVideoList(html);
  } catch (e) {
    return [];
  }
}

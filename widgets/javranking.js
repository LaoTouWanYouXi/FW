/**
 * JavRanking Widget for rex / ForwardWidget
 * 站点: https://javranking.cc/
 *
 * 数据策略:
 * 1. 榜单优先 Markdown；神作总榜多格式解析 + search-index 回退
 * 2. 搜索 / 番号映射: /zh-hans/search-index.json
 * 3. 详情 HTML: JSON-LD + 磁力 + 剧照；预告片 static CDN
 * 4. 高清封面: 对齐 javdb 可视化 DMM / MGStage 策略
 * 5. 磁力放入 relatedItems，按体积大→小排序；点击光鸭转存
 * 6. 今天冲谁 / 今天冲什么（search-index 随机）
 * 7. 详情 JSON/MD 优先，HTML 补磁力/剧照
 * 8. loadResource 仅本站 jvr: 预告片（无顶层按番号搜索）
 * 9. LTX 精选榜；片库探索按 filter-index.json 的真实题材标签筛选
 */
var ACTRESS_FILTER_OPTIONS = [
  {
    "title": "凉森玲梦 · 17,576",
    "value": "凉森玲梦"
  },
  {
    "title": "新有菜 · 15,776",
    "value": "新有菜"
  },
  {
    "title": "田中柠檬 · 14,437",
    "value": "田中柠檬"
  },
  {
    "title": "桃乃木香奈 · 12,294",
    "value": "桃乃木香奈"
  },
  {
    "title": "相泽南 · 11,695",
    "value": "相泽南"
  },
  {
    "title": "樱空桃 · 11,119",
    "value": "樱空桃"
  },
  {
    "title": "森日向子 · 10,593",
    "value": "森日向子"
  },
  {
    "title": "篠田优 · 10,419",
    "value": "篠田优"
  },
  {
    "title": "神木丽 · 9,825",
    "value": "神木丽"
  },
  {
    "title": "三上悠亚 · 9,809",
    "value": "三上悠亚"
  },
  {
    "title": "森泽佳奈 · 9,669",
    "value": "森泽佳奈"
  },
  {
    "title": "山岸逢花 · 9,619",
    "value": "山岸逢花"
  },
  {
    "title": "伊藤舞雪 · 9,034",
    "value": "伊藤舞雪"
  },
  {
    "title": "大桥未久 · 9,014",
    "value": "大桥未久"
  },
  {
    "title": "白峰美羽 · 8,583",
    "value": "白峰美羽"
  },
  {
    "title": "星宫一花 · 8,526",
    "value": "星宫一花"
  },
  {
    "title": "小野夕子 · 8,386",
    "value": "小野夕子"
  },
  {
    "title": "坂道美琉 · 8,253",
    "value": "坂道美琉"
  },
  {
    "title": "松下纱荣子 · 7,786",
    "value": "松下纱荣子"
  },
  {
    "title": "明里紬 · 7,766",
    "value": "明里紬"
  },
  {
    "title": "佐山爱 · 7,455",
    "value": "佐山爱"
  },
  {
    "title": "天使萌 · 7,243",
    "value": "天使萌"
  },
  {
    "title": "JULIA · 7,131",
    "value": "JULIA"
  },
  {
    "title": "凉宫遥香 · 7,056",
    "value": "凉宫遥香"
  },
  {
    "title": "七泽美亚 · 6,588",
    "value": "七泽美亚"
  },
  {
    "title": "枫芙爱 · 6,553",
    "value": "枫芙爱"
  },
  {
    "title": "铃村爱里 · 6,532",
    "value": "铃村爱里"
  },
  {
    "title": "石川澪 · 6,524",
    "value": "石川澪"
  },
  {
    "title": "铃木心春 · 6,325",
    "value": "铃木心春"
  },
  {
    "title": "佐佐木明希 · 6,186",
    "value": "佐佐木明希"
  },
  {
    "title": "波多野结衣 · 6,177",
    "value": "波多野结衣"
  },
  {
    "title": "葵司 · 6,114",
    "value": "葵司"
  },
  {
    "title": "神宫寺奈绪 · 6,016",
    "value": "神宫寺奈绪"
  },
  {
    "title": "安斋拉拉 · 5,965",
    "value": "安斋拉拉"
  },
  {
    "title": "藤浦惠 · 5,954",
    "value": "藤浦惠"
  },
  {
    "title": "小凑四叶 · 5,771",
    "value": "小凑四叶"
  },
  {
    "title": "水卜樱 · 5,712",
    "value": "水卜樱"
  },
  {
    "title": "北野未奈 · 5,664",
    "value": "北野未奈"
  },
  {
    "title": "香水纯 · 5,540",
    "value": "香水纯"
  },
  {
    "title": "美园和花 · 5,463",
    "value": "美园和花"
  },
  {
    "title": "大槻响 · 5,460",
    "value": "大槻响"
  },
  {
    "title": "橘玛丽 · 5,275",
    "value": "橘玛丽"
  },
  {
    "title": "本庄铃 · 5,267",
    "value": "本庄铃"
  },
  {
    "title": "里美尤利娅 · 5,256",
    "value": "里美尤利娅"
  },
  {
    "title": "濑户环奈 · 5,212",
    "value": "濑户环奈"
  },
  {
    "title": "新村晶 · 5,194",
    "value": "新村晶"
  },
  {
    "title": "皆月光 · 5,175",
    "value": "皆月光"
  },
  {
    "title": "七濑爱丽丝 · 5,134",
    "value": "七濑爱丽丝"
  },
  {
    "title": "蕾 · 5,026",
    "value": "蕾"
  },
  {
    "title": "美谷朱里 · 4,954",
    "value": "美谷朱里"
  },
  {
    "title": "青空光 · 4,913",
    "value": "青空光"
  },
  {
    "title": "小仓由菜 · 4,864",
    "value": "小仓由菜"
  },
  {
    "title": "栗宫双叶 · 4,863",
    "value": "栗宫双叶"
  },
  {
    "title": "三宫椿 · 4,856",
    "value": "三宫椿"
  },
  {
    "title": "小川阿佐美 · 4,830",
    "value": "小川阿佐美"
  },
  {
    "title": "梦乃爱华 · 4,733",
    "value": "梦乃爱华"
  },
  {
    "title": "松本一香 · 4,693",
    "value": "松本一香"
  },
  {
    "title": "彩月七绪 · 4,597",
    "value": "彩月七绪"
  },
  {
    "title": "三浦步美 · 4,589",
    "value": "三浦步美"
  },
  {
    "title": "宫下玲奈 · 4,527",
    "value": "宫下玲奈"
  },
  {
    "title": "明日叶美津羽 · 4,458",
    "value": "明日叶美津羽"
  },
  {
    "title": "本田岬 · 4,435",
    "value": "本田岬"
  },
  {
    "title": "有栖花绯 · 4,422",
    "value": "有栖花绯"
  },
  {
    "title": "梦实香奈惠 · 4,327",
    "value": "梦实香奈惠"
  },
  {
    "title": "古川伊织 · 4,283",
    "value": "古川伊织"
  },
  {
    "title": "葵伊吹 · 4,215",
    "value": "葵伊吹"
  },
  {
    "title": "河北彩花 · 4,208",
    "value": "河北彩花"
  },
  {
    "title": "七海蒂娜 · 4,163",
    "value": "七海蒂娜"
  },
  {
    "title": "彩美旬果 · 4,143",
    "value": "彩美旬果"
  },
  {
    "title": "楪可怜 · 4,092",
    "value": "楪可怜"
  },
  {
    "title": "蓝芽水月 · 4,027",
    "value": "蓝芽水月"
  },
  {
    "title": "园田美樱 · 4,026",
    "value": "园田美樱"
  },
  {
    "title": "石原莉奈 · 4,009",
    "value": "石原莉奈"
  },
  {
    "title": "小宵虎南 · 3,947",
    "value": "小宵虎南"
  },
  {
    "title": "希崎洁西卡 · 3,882",
    "value": "希崎洁西卡"
  },
  {
    "title": "歌野心 · 3,769",
    "value": "歌野心"
  },
  {
    "title": "希岛爱里 · 3,731",
    "value": "希岛爱里"
  },
  {
    "title": "爱花步美 · 3,715",
    "value": "爱花步美"
  },
  {
    "title": "藤环奈 · 3,709",
    "value": "藤环奈"
  },
  {
    "title": "八挂海 · 3,705",
    "value": "八挂海"
  },
  {
    "title": "椎名由奈 · 3,702",
    "value": "椎名由奈"
  },
  {
    "title": "白桃花 · 3,702",
    "value": "白桃花"
  },
  {
    "title": "水野朝阳 · 3,681",
    "value": "水野朝阳"
  },
  {
    "title": "桃谷绘里香 · 3,593",
    "value": "桃谷绘里香"
  },
  {
    "title": "吉泽明步 · 3,577",
    "value": "吉泽明步"
  },
  {
    "title": "一乃葵 · 3,568",
    "value": "一乃葵"
  },
  {
    "title": "上原亚衣 · 3,486",
    "value": "上原亚衣"
  },
  {
    "title": "天川空 · 3,380",
    "value": "天川空"
  },
  {
    "title": "本庄优花 · 3,379",
    "value": "本庄优花"
  },
  {
    "title": "小花暖 · 3,339",
    "value": "小花暖"
  },
  {
    "title": "由爱可奈 · 3,326",
    "value": "由爱可奈"
  },
  {
    "title": "鹫尾芽衣 · 3,307",
    "value": "鹫尾芽衣"
  },
  {
    "title": "岬奈奈美 · 3,278",
    "value": "岬奈奈美"
  },
  {
    "title": "美空彩香 · 3,272",
    "value": "美空彩香"
  },
  {
    "title": "小野六花 · 3,234",
    "value": "小野六花"
  },
  {
    "title": "水户香奈 · 3,219",
    "value": "水户香奈"
  },
  {
    "title": "前田香织 · 3,184",
    "value": "前田香织"
  }
];
// 题材显示名及原始值来自网站 filter-index.json；数字 ID 更新后可能重排，不固定 ID。
var EXPLORE_CATEGORY_OPTIONS = [
  { title: "全部题材", value: "all" },
  { title: "中出", value: "中出" },
  { title: "巨乳", value: "巨乳" },
  { title: "人妻少妇", value: "人妻少妇" },
  { title: "痴女主动", value: "痴女主动" },
  { title: "口交", value: "口交" },
  { title: "美少女", value: "美少女" },
  { title: "人妻出轨", value: "人妻出轨" },
  { title: "苗条", value: "苗条" },
  { title: "多人群交", value: "多人群交" },
  { title: "熟女", value: "熟女" },
  { title: "女上位/骑乘", value: "女上位/骑乘" },
  { title: "素人纪实", value: "素人纪实" },
  { title: "素人自拍", value: "素人" },
  { title: "主观视角", value: "主觀視角" },
  { title: "潮吹", value: "潮吹" },
  { title: "剧情向", value: "剧情向" },
  { title: "乳交", value: "乳交" },
  { title: "美臀", value: "美臀" },
  { title: "美乳", value: "美乳" },
  { title: "姐姐", value: "姐姐" },
  { title: "接吻", value: "接吻" },
  { title: "VR", value: "VR" },
  { title: "自慰", value: "手淫" },
  { title: "出轨偷情", value: "出轨偷情" },
  { title: "颜射", value: "颜射" },
  { title: "淫语", value: "淫语" },
  { title: "凌辱调教", value: "凌辱调教" },
  { title: "OL职场", value: "OL职场" },
  { title: "女高中生", value: "女高中生" },
  { title: "角色扮演", value: "角色扮演" },
  { title: "丝袜连裤袜", value: "丝袜连裤袜" },
  { title: "女教师", value: "女教师" },
  { title: "束缚捆绑", value: "束缚捆绑" },
  { title: "情趣玩具", value: "情趣玩具" },
  { title: "职业制服", value: "职业制服" },
  { title: "近亲禁忌", value: "近亲禁忌" },
  { title: "纪录片风格", value: "纪录片风格" },
  { title: "美腿", value: "美腿" },
  { title: "羞耻露出", value: "羞耻露出" },
  { title: "白虎无毛", value: "白虎无毛" },
  { title: "偶像艺人", value: "偶像艺人" },
  { title: "精油润滑", value: "精油润滑" },
  { title: "企划设定", value: "企划设定" },
  { title: "香汗", value: "香汗" },
  { title: "百合女同", value: "百合女同" },
  { title: "美容沙龙", value: "美容沙龙" },
  { title: "涩谷辣妹", value: "辣妹" },
  { title: "SM调教", value: "SM调教" },
  { title: "受虐男", value: "受虐男" },
  { title: "强制凌辱", value: "强制凌辱" },
  { title: "颜射吞精", value: "颜射吞精" },
  { title: "恋乳癖", value: "恋乳癖" },
  { title: "迎宾接待", value: "迎宾接待" },
  { title: "妹妹", value: "妹妹" },
  { title: "特殊恋物", value: "特殊恋物" },
  { title: "护士医者", value: "护士医者" },
  { title: "后庭肛交", value: "后庭肛交" },
  { title: "高挑身材", value: "高挑身材" },
  { title: "巨根大器", value: "巨根大器" },
  { title: "精油按摩", value: "精油按摩" },
  { title: "放尿圣水", value: "放尿圣水" },
  { title: "偷窥探秘", value: "偷窥探秘" },
  { title: "和服浴衣", value: "和服浴衣" },
  { title: "处男破处", value: "处男破处" },
  { title: "原作改编", value: "原作改编" },
  { title: "足交", value: "足交" },
  { title: "女大学生", value: "女大学生" },
  { title: "迷你短裙", value: "迷你短裙" },
  { title: "性感内衣", value: "性感内衣" },
  { title: "贫乳", value: "贫乳" },
  { title: "舔阴", value: "舔阴" },
  { title: "母亲熟女", value: "母亲熟女" },
  { title: "轮奸", value: "轮奸" },
  { title: "女仆女佣", value: "女仆女佣" },
  { title: "催情春药", value: "催情春药" },
  { title: "风俗女郎", value: "风俗女郎" },
  { title: "户外露出", value: "户外露出" },
  { title: "高颜值", value: "高颜值" },
  { title: "高跟鞋", value: "高跟鞋" },
  { title: "学生制服", value: "学生制服" },
  { title: "出道单作", value: "出道单作" },
  { title: "小恶魔属性", value: "小恶魔属性" },
  { title: "街头搭讪", value: "街头搭讪" },
  { title: "两女一男", value: "两女一男" },
  { title: "密室监禁", value: "密室监禁" },
  { title: "模特写真", value: "模特写真" },
  { title: "校园题材", value: "校园题材" },
  { title: "泳装", value: "泳装" },
  { title: "眼镜娘", value: "眼镜娘" },
  { title: "后入", value: "后入" },
  { title: "死库水泳装", value: "死库水泳装" },
  { title: "绿帽NTR", value: "绿帽NTR" },
  { title: "娇小身材", value: "娇小身材" },
  { title: "和服丧服", value: "和服丧服" },
  { title: "私拍纪实", value: "私拍纪实" },
  { title: "痴汉骚扰", value: "痴汉骚扰" },
  { title: "女检察官", value: "女检察官" },
  { title: "射精", value: "射精" },
  { title: "雪白肤色", value: "雪白肤色" },
  { title: "纯爱恋爱", value: "纯爱恋爱" },
  { title: "69体位", value: "69体位" },
  { title: "性奴调教", value: "性奴调教" },
  { title: "情景妄想", value: "情景妄想" },
  { title: "女秘书", value: "女秘书" },
  { title: "手指插入", value: "手指插入" },
  { title: "双女优合演", value: "双女优合演" },
  { title: "空姐", value: "空姐" },
  { title: "3P三人行", value: "3P三人行" },
  { title: "年下小鲜肉", value: "年下小鲜肉" },
  { title: "暴露情趣服", value: "暴露情趣服" },
  { title: "打桩抽插", value: "打桩抽插" },
  { title: "无码", value: "无码" },
  { title: "丰满微胖", value: "丰满微胖" },
  { title: "恶作剧搞怪", value: "恶作剧搞怪" },
  { title: "兔女郎", value: "兔女郎" },
  { title: "伪娘TS", value: "伪娘TS" },
  { title: "黑人演员", value: "黑人演员" },
  { title: "倒追逆推", value: "倒追逆推" },
  { title: "运动健身", value: "运动健身" },
  { title: "深喉深入", value: "深喉深入" },
  { title: "傲娇性格", value: "傲娇性格" },
  { title: "站立体位", value: "站立体位" },
  { title: "高筒长靴", value: "高筒长靴" },
  { title: "水手服", value: "水手服" },
  { title: "手交", value: "手交" },
  { title: "未亡人寡妇", value: "未亡人寡妇" },
  { title: "名器美穴", value: "名器美穴" },
  { title: "运动体操服", value: "运动体操服" },
  { title: "反向骑乘", value: "反向骑乘" },
  { title: "多男对一女", value: "多男对一女" },
  { title: "无套性交", value: "无套性交" },
  { title: "魔鬼身材", value: "魔鬼身材" },
  { title: "办公室情景", value: "办公室情景" },
  { title: "女主播", value: "女主播" },
  { title: "旅店老板娘", value: "旅店老板娘" },
  { title: "共浴洗澡", value: "共浴洗澡" },
  { title: "洛丽塔洋装", value: "洛丽塔洋装" },
  { title: "灌肠清洁", value: "灌肠清洁" },
  { title: "双插双龙", value: "二穴同入" },
  { title: "温泉旅馆", value: "温泉旅馆" },
  { title: "千金大小姐", value: "千金大小姐" },
  { title: "激烈粗暴", value: "激烈粗暴" },
  { title: "痴女调教男", value: "痴女调教男" },
  { title: "日式绳缚", value: "日式绳缚" },
  { title: "催眠洗脑", value: "催眠洗脑" },
  { title: "烂醉捡尸", value: "烂醉捡尸" },
  { title: "车震野战", value: "车震野战" },
  { title: "渔网袜", value: "渔网袜" },
  { title: "紧身连体衣", value: "紧身连体衣" },
  { title: "紧身显身材", value: "紧身显身材" },
  { title: "动作打斗", value: "动作打斗" },
  { title: "母乳出奶", value: "母乳出奶" },
  { title: "肌肉猛男", value: "肌肉猛男" },
  { title: "赛车女郎", value: "赛车女郎" },
  { title: "裸体围裙", value: "裸体围裙" },
  { title: "女王S属性", value: "女王S属性" },
  { title: "棕褐发色", value: "棕褐发色" },
  { title: "骑脸", value: "骑脸" },
  { title: "两男一女", value: "两男一女" },
  { title: "娇小萝莉", value: "娇小萝莉" },
  { title: "金发", value: "金发" },
  { title: "舞蹈跳舞", value: "舞蹈跳舞" },
  { title: "女服务员", value: "女服务员" },
  { title: "舔舐", value: "舔舐" },
  { title: "跨种族", value: "跨种族" },
  { title: "无码步兵", value: "无码步兵" },
  { title: "战斗女英雄", value: "战斗女英雄" },
  { title: "旗袍装扮", value: "旗袍装扮" },
  { title: "小麦肤色", value: "小麦肤色" },
  { title: "短裙裙底", value: "短裙裙底" },
  { title: "绑腿过膝袜", value: "绑腿过膝袜" },
  { title: "传统体位", value: "传统体位" },
  { title: "猫耳娘", value: "猫耳娘" },
  { title: "残酷硬核", value: "残酷硬核" },
  { title: "科幻未来", value: "科幻未来" },
  { title: "蕾丝薄纱", value: "蕾丝薄纱" },
  { title: "暗黑重口", value: "暗黑重口" },
  { title: "电车痴汉", value: "痴漢" },
  { title: "舔肛", value: "舔肛" },
  { title: "车站野战", value: "车站野战" },
  { title: "全裸暴露", value: "全裸暴露" },
  { title: "搞笑恶搞", value: "搞笑恶搞" },
  { title: "颜射口爆", value: "颜射口爆" },
  { title: "触手", value: "触手" },
  { title: "二次元动漫", value: "二次元动漫" },
  { title: "女忍者", value: "女忍者" },
  { title: "姐妹", value: "姐妹" },
  { title: "展台女郎", value: "展台女郎" },
  { title: "打屁股", value: "打屁股" },
  { title: "欧美白人", value: "欧美白人" },
  { title: "浓密阴毛", value: "浓密阴毛" },
  { title: "混血美女", value: "混血美女" },
  { title: "面具蒙面", value: "面具蒙面" },
  { title: "女主角", value: "女主角" },
  { title: "女祭司巫女", value: "女祭司巫女" },
  { title: "比基尼", value: "比基尼" },
  { title: "泡泡袜", value: "泡泡袜" },
  { title: "破处见红", value: "破处见红" },
  { title: "內褲", value: "內褲" },
  { title: "前后夹击", value: "前后夹击" },
  { title: "拳交重口", value: "拳交重口" },
  { title: "泡泡浴风俗", value: "泡泡浴风俗" },
  { title: "女子格斗家", value: "女子格斗家" },
  { title: "妈妈的朋友", value: "妈妈的朋友" },
  { title: "娇喘浪叫", value: "娇喘浪叫" },
  { title: "短发", value: "短发" },
  { title: "乘务员车掌", value: "乘务员车掌" },
  { title: "唯美感官", value: "唯美感官" },
  { title: "婚纱礼服", value: "婚纱礼服" },
  { title: "浴室激战", value: "浴室激战" },
  { title: "深度拘束道具", value: "深度拘束道具" },
  { title: "纹身穿孔", value: "纹身穿孔" },
  { title: "修剪阴毛", value: "修剪阴毛" },
  { title: "修女禁欲", value: "修女禁欲" },
  { title: "复古怀旧", value: "复古怀旧" },
  { title: "童颜", value: "童颜" },
  { title: "红发", value: "红发" },
  { title: "電車", value: "電車" },
  { title: "M字开腿", value: "M字开腿" },
  { title: "吊带吊袜带", value: "吊带吊袜带" },
  { title: "失禁圣水", value: "失禁圣水" },
  { title: "孕妇怀孕", value: "孕妇怀孕" },
  { title: "当众露出", value: "当众露出" },
  { title: "惊悚恐怖", value: "惊悚恐怖" },
  { title: "欧美混血", value: "欧美混血" },
  { title: "老头爷爷", value: "老头爷爷" },
  { title: "芭蕾舞服", value: "芭蕾舞服" },
  { title: "LTX破解", value: "LTX破解" },
  { title: "体育服扮演", value: "体育服扮演" },
  { title: "公共场所露出", value: "公共场所露出" },
  { title: "养女女儿", value: "养女女儿" },
  { title: "唾液调教", value: "唾液调教" },
  { title: "性感背心", value: "性感背心" },
  { title: "情趣警察", value: "情趣警察" },
  { title: "明星脸", value: "明星脸" },
  { title: "比基尼晒痕", value: "比基尼晒痕" },
  { title: "泳衣", value: "泳衣" },
  { title: "海外作品", value: "海外作品" },
  { title: "真空无胸罩", value: "真空无胸罩" },
  { title: "绝顶高潮", value: "绝顶高潮" },
  { title: "萝莉扮演", value: "萝莉扮演" },
  { title: "餐厅包厢", value: "餐厅包厢" },
];

WidgetMetadata = {
  id: "javranking.cc",
  title: "JavRanking",
  version: "1.5.0",
  requiredVersion: "0.0.1",
  description:
    "权威榜单 / LTX 最强 AI 破解 / 片库探索题材 / 神作 / 女优战力；详情点演员可看作品；今天冲可选制式（默认有码）；封面本站优先；光鸭最小保留 MB。",
  author: "老头",
  site: "https://javranking.cc/",
  icon: "https://javranking.cc/brand/javranking-logo-v3-header.webp",
  detailCacheDuration: 300,
  globalParams: [
    {
      name: "locale",
      title: "语言",
      type: "enumeration",
      value: "zh-hans",
      enumOptions: [
        { title: "简体中文", value: "zh-hans" },
        { title: "English", value: "en" },
      ],
    },
    {
      name: "guangya_token",
      title: "光鸭 refresh_token",
      type: "input",
      value: "",
      description: "www.guangyapan.com 登录后复制最新 refresh_token（gy. 开头）",
    },
    {
      name: "guangya_parent_id",
      title: "光鸭父目录 ID",
      type: "input",
      value: "",
      description: "可选，离线任务保存到指定目录；留空用根目录",
    },
    {
      name: "magnet_min_video_mb",
      title: "最小保留视频 MB",
      type: "input",
      value: "0",
      description: "对齐 javdb：过滤广告等小文件；0=仅按相对体积判断小广告片",
    },
  ],
  modules: [
    {
      id: "loadRanking",
      title: "权威榜单",
      functionName: "loadRanking",
      cacheDuration: 0,
      params: [
        {
          name: "ranking",
          title: "榜单",
          type: "enumeration",
          value: "javdb-top250",
          enumOptions: [
            { title: "JAVDB TOP250", value: "javdb-top250" },
            { title: "JavLibrary TOP250", value: "javlibrary-top250" },
            { title: "JAVDB 无码 TOP250", value: "javdb-uncensored-top250" },
            { title: "JAVDB FC2 TOP250", value: "javdb-fc2-top250" },
            { title: "DMM 本周热销", value: "dmm-weekly" },
            { title: "DMM 月榜 2026.10", value: "dmm-monthly-2026-10" },
            { title: "DMM 月榜 2025.12", value: "dmm-monthly-2025-12" },
            { title: "DMM 月榜 2025.11", value: "dmm-monthly-2025-11" },
            { title: "JAVDB TOP250 2025", value: "javdb-top250-2025" },
            { title: "JAVDB TOP250 2024", value: "javdb-top250-2024" },
            { title: "JAVDB TOP250 2023", value: "javdb-top250-2023" },
            { title: "JAVDB TOP250 2022", value: "javdb-top250-2022" },
            { title: "JAVDB TOP250 2021", value: "javdb-top250-2021" },
            { title: "JAVDB TOP250 2020", value: "javdb-top250-2020" },
            { title: "JAVDB TOP250 2019", value: "javdb-top250-2019" },
            { title: "JAVDB TOP250 2018", value: "javdb-top250-2018" },
            { title: "JAVDB TOP250 2017", value: "javdb-top250-2017" },
            { title: "JAVDB TOP250 2016", value: "javdb-top250-2016" },
          ],
        },
        { name: "page", title: "页码", type: "page", value: "1" },
        // 详情点演员会重开本模块并注入 peopleId
        { name: "peopleId", title: "人物ID", type: "input", value: "" },
      ],
    },
    {
      id: "loadLtxRanking",
      title: "LTX 最强 AI 破解",
      functionName: "loadLtxRanking",
      cacheDuration: 0,
      params: [
        { name: "page", title: "页码", type: "page", value: "1" },
        { name: "peopleId", title: "人物ID", type: "input", value: "" },
      ],
    },
    {
      id: "loadExplore",
      title: "片库探索",
      functionName: "loadExplore",
      cacheDuration: 0,
      params: [
        {
          name: "category",
          title: "题材",
          type: "enumeration",
          value: "all",
          enumOptions: EXPLORE_CATEGORY_OPTIONS,
        },
        {
          name: "scope",
          title: "制式",
          type: "enumeration",
          value: "all",
          enumOptions: [
            { title: "全部", value: "all" },
            { title: "LTX AI 去码", value: "ltx" },
            { title: "有码", value: "censored" },
            { title: "无码", value: "uncensored" },
            { title: "FC2", value: "fc2" },
          ],
        },
        {
          name: "sort",
          title: "排序",
          type: "enumeration",
          value: "random",
          enumOptions: [
            { title: "高分优先", value: "score" },
            { title: "最新发行", value: "newest" },
            { title: "最早发行", value: "oldest" },
            { title: "手气不错", value: "random" },
          ],
        },
        {
          name: "released_only",
          title: "发行状态",
          type: "enumeration",
          value: "1",
          enumOptions: [
            { title: "仅已发行", value: "1" },
            { title: "包括即将发行", value: "0" },
          ],
        },
        { name: "page", title: "页码", type: "page", value: "1" },
        { name: "peopleId", title: "人物ID", type: "input", value: "" },
        { name: "genreId", title: "题材ID", type: "input", value: "" },
      ],
    },
    {
      id: "loadHallOfFame",
      title: "全站神作总榜",
      functionName: "loadHallOfFame",
      cacheDuration: 0,
      params: [
        { name: "page", title: "页码", type: "page", value: "1" },
        { name: "peopleId", title: "人物ID", type: "input", value: "" },
      ],
    },
    {
      id: "loadRandomMasterpiece",
      title: "随机神作推荐",
      functionName: "loadRandomMasterpiece",
      cacheDuration: 0,
      params: [
        {
          name: "count",
          title: "数量",
          type: "enumeration",
          value: "24",
          enumOptions: [
            { title: "12", value: "12" },
            { title: "24", value: "24" },
            { title: "36", value: "36" },
            { title: "48", value: "48" },
          ],
        },
        { name: "peopleId", title: "人物ID", type: "input", value: "" },
      ],
    },
    {
      id: "loadTodayWho",
      title: "今天冲谁",
      functionName: "loadTodayWho",
      cacheDuration: 0,
      params: [
        {
          name: "count",
          title: "数量",
          type: "enumeration",
          value: "24",
          enumOptions: [
            { title: "12", value: "12" },
            { title: "24", value: "24" },
            { title: "36", value: "36" },
            { title: "48", value: "48" },
          ],
        },
        {
          name: "scope",
          title: "制式",
          type: "enumeration",
          value: "censored",
          enumOptions: [
            { title: "有码", value: "censored" },
            { title: "无码", value: "uncensored" },
            { title: "FC2", value: "fc2" },
            { title: "全部", value: "all" },
          ],
        },
        { name: "page", title: "页码", type: "page", value: "1" },
        // App 横向人物点击会重开本模块并注入 peopleId（见 SKILL rex）
        { name: "peopleId", title: "人物ID", type: "input", value: "" },
      ],
    },
    {
      id: "loadTodayWhat",
      title: "今天冲什么",
      functionName: "loadTodayWhat",
      cacheDuration: 0,
      params: [
        {
          name: "count",
          title: "数量",
          type: "enumeration",
          value: "24",
          enumOptions: [
            { title: "12", value: "12" },
            { title: "24", value: "24" },
            { title: "36", value: "36" },
            { title: "48", value: "48" },
          ],
        },
        {
          name: "scope",
          title: "制式",
          type: "enumeration",
          value: "censored",
          enumOptions: [
            { title: "有码", value: "censored" },
            { title: "无码", value: "uncensored" },
            { title: "FC2", value: "fc2" },
            { title: "全部", value: "all" },
          ],
        },
        { name: "peopleId", title: "人物ID", type: "input", value: "" },
      ],
    },
    {
      id: "loadActressPower",
      title: "女优战力总榜",
      functionName: "loadActressPower",
      cacheDuration: 0,
      params: [
        {
          name: "actress",
          title: "筛选女友",
          type: "enumeration",
          value: "凉森玲梦",
          enumOptions: ACTRESS_FILTER_OPTIONS,
        },
        {
          name: "works_sort",
          title: "作品排序",
          type: "enumeration",
          value: "score",
          enumOptions: [
            { title: "代表作优先", value: "score" },
            { title: "最新发行", value: "newest" },
            { title: "最早发行", value: "oldest" },
          ],
        },
        { name: "page", title: "页码", type: "page", value: "1" },
        { name: "peopleId", title: "人物ID", type: "input", value: "" },
      ],
    },
    {
      id: "loadResource",
      title: "预告片资源",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: [],
    },
  ],
};

console.log("[javranking] version: " + WidgetMetadata.version);

var SITE_ORIGIN = "https://javranking.cc";
var STATIC_ORIGIN = "https://static.javranking.cc";
var LINK_PREFIX = "jvr:";
var MAGNET_LINK_PREFIX = "gy:";
var PAGE_SIZE = 24;
var lastRequestParams = null;
var SEARCH_INDEX_CACHE_KEY = "jvr_search_index_v5";
var SEARCH_INDEX_TS_KEY = "jvr_search_index_ts_v5";
var SEARCH_INDEX_TTL_MS = 6 * 60 * 60 * 1000;
var FILTER_INDEX_CACHE_PREFIX = "jvr_filter_index_v1.";
var FILTER_INDEX_TTL_MS = 6 * 60 * 60 * 1000;
var FILTER_INDEX_MEMORY_CACHE = {};
var FILTER_INDEX_PENDING_REQUESTS = {};
var EXPLORE_RANDOM_SEED = 2026;
var LTX_RANKING_SLUG = "curated-ltx-ai-uncensored";
var MAGNET_STORE_PREFIX = "jvr.magnet.v1.";
var UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var DEFAULT_HEADERS = {
  "User-Agent": UA,
  Accept: "text/html,application/xhtml+xml,application/json,text/markdown,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  Referer: SITE_ORIGIN + "/",
};

/* ===== HD helpers injected below ===== */

/* ========================= 高清图片（可视化版策略） ========================= */

/*
 * 与“解密javdb.可视化.js”保持同一套策略：
 * - 已确认的片商番号直接拼接 DMM 高清竖图/横图
 * - Prestige 系列使用 MGStage 高清图片
 * - 其他番号继续使用 JavDB 接口/CDN 图片
 *
 * 高清候选需 HEAD 校验；不可用时回退 javranking 站点封面，避免 Rex 因 404 图加载失败。
 */

var JAVDB_CDN_BASE = "https://c0.jdbstatic.com";
var HD_IMAGE_REQUEST_TIMEOUT_MS = 1500;
var HD_IMAGE_ITEM_BUDGET_MS = 3500;
var HD_IMAGE_BATCH_BUDGET_MS = 12000;
var HD_IMAGE_MIN_CONTENT_LENGTH = 3000;
var HD_IMAGE_AVAILABLE_CACHE = {};
var HD_IMAGE_PENDING_REQUESTS = {};
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
  HAWA: "1",
  DFDM: "2",
  DFE: "2",
  ECB: "2",
  SMRA: "2",
  VDD: "24",
  NLD: "24",
  DOKS: "36",
  PS: "h_113",
  JUKF: "h_227",
  AMBI: "h_237",
  NACT: "h_237",
  ZRK: "h_1293",
  CNSTV: "h_1472",
  EROFV: "h_1472",
  HMDNV: "h_1472",
  INSTV: "h_1472",
  STSK: "h_1605",
  HNBR: "h_1664",
  HRSM: "h_1745",
  ERKR: "h_1838",
};
var DMM_CONTENT_ID_OVERRIDES = {
  "MKMP-362": "84mkmp00362",
};
var DMM_DIRECT_PREFIXES = {
  SNIS: 1,
  SNOS: 1,
  SONE: 1,
  SSIS: 1,
  SSNI: 1,
  STARS: 1,
  START: 1,
  SODS: 1,
  FSDSS: 1,
  FCDSS: 1,
  FNS: 1,
  FTHTD: 1,
  FSNF: 1,
  NHDTC: 1,
  KUSE: 1,
  MOGI: 1,
  FTAV: 1,
  WSA: 1,
  MIDV: 1,
  MIDA: 1,
  MIDE: 1,
  MIDD: 1,
  MIFD: 1,
  MIKR: 1,
  DASS: 1,
  HIKA: 1,
  MKMP: 1,
  MADM: 1,
  IPZZ: 1,
  IPZ: 1,
  IPX: 1,
  NGOD: 1,
  SDNM: 1,
  AVSA: 1,
  MNGS: 1,
  WAAA: 1,
  OFES: 1,
  OFJE: 1,
  OAE: 1,
  SIVR: 1,
  HSODA: 1,
  JUFE: 1,
  MUKA: 1,
  MIMK: 1,
  HMN: 1,
  ROYD: 1,
  SDHS: 1,
  JUR: 1,
  CAWD: 1,
  CAWB: 1,
  REBD: 1,
  ADN: 1,
  ATID: 1,
  JUL: 1,
  JUMS: 1,
  JUQ: 1,
  LULU: 1,
  MEYD: 1,
  MIAA: 1,
  MIAB: 1,
  MIRD: 1,
  PRED: 1,
  PRWF: 1,
  URE: 1,
  YUJ: 1,
  CJOD: 1,
  EBWH: 1,
  JYMA: 1,
  MDHR: 1,
  DVAJ: 1,
  ACHJ: 1,
  MFYD: 1,
  MBYD: 1,
  PFES: 1,
  MDYD: 1,
  NPJS: 1,
  ROE: 1,
  XVSR: 1,
  MVSD: 1,
  DVMM: 1,
  FPRE: 1,
  HAWA: 1,
  SAME: 1,
  FWAY: 1,
  DFDM: 1,
  DFE: 1,
  ECB: 1,
  SMRA: 1,
  VDD: 1,
  NLD: 1,
  DOKS: 1,
  UMD: 1,
  PS: 1,
  JUKF: 1,
  AMBI: 1,
  NACT: 1,
  ZRK: 1,
  CNSTV: 1,
  EROFV: 1,
  HMDNV: 1,
  INSTV: 1,
  STSK: 1,
  HNBR: 1,
  HRSM: 1,
  ERKR: 1,
  MIZD: 1,
  PPPE: 1,
  AJVR: 1,
  BLOR: 1,
  BONY: 1,
  DEAB: 1,
  DSOD: 1,
  DSS: 1,
  EYAN: 1,
  FJIN: 1,
  GQHB: 1,
  HJMO: 1,
  HNDB: 1,
  HNDS: 1,
  HNVR: 1,
  HOIZ: 1,
  HUBLK: 1,
  HUNTB: 1,
  HUNTC: 1,
  IDBD: 1,
  IPVR: 1,
  JUVR: 1,
  KBTK: 1,
  KTB: 1,
  KTKL: 1,
  MANX: 1,
  MBF: 1,
  MDON: 1,
  MDVR: 1,
  MUDR: 1,
  NPJB: 1,
  NQTD: 1,
  NSODN: 1,
  NTRH: 1,
  PBD: 1,
  PKYS: 1,
  RKI: 1,
  SAVR: 1,
  SDAM: 1,
  SDDE: 1,
  SDJS: 1,
  SDMM: 1,
  SORA: 1,
  SQDE: 1,
  SQTE: 1,
  URVRSP: 1,
  VRKM: 1,
  YAHO: 1,
  YMDD: 1,
  YMDS: 1,
};
var DMM_DIRECT_BLOCKED_CODES = {
  "START-227": 1,
  "IPZZ-899": 1,
  "START-334": 1,
  "START-302": 1,
  "START-349": 1,
  "START-339": 1,
  "START-310": 1,
  "START-314": 1,
  "START-287": 1,
  "START-273": 1,
  "START-266": 1,
  "START-304": 1,
  "START-285": 1,
  "START-276": 1,
  "START-135": 1,
  "START-62": 1,
  "START-23": 1,
  "START-14": 1,
  "STARS-977": 1,
  "STARS-917": 1,
  "STARS-915": 1,
  "STARS-91501": 1,
  "SDNM-39101": 1,
  "MIDD-946": 1,
  "MIDD-966": 1,
  "MIKR-12": 1,
  "MIKR-21": 1,
  "FLAV-421": 1,
  "SQTE-257": 1,
  "SQTE-187": 1,
  "SQTE-140": 1,
  "SQTE-128": 1,
};
var DMM_DIRECT_BLOCKED_RANGES = [
  { prefix: "SQTE", min: 1, max: 70 },
  { prefix: "SDDE", min: 1, max: 100 },
];
var MGSTAGE_COVER_RULES = {
  ABF: { maker: "prestige" },
  ABW: { maker: "prestige" },
  ABP: { maker: "prestige" },
  CHN: { maker: "prestige" },
  PPT: { maker: "prestige" },
};
var MGSTAGE_PREFIXES = { ABF: 1, ABW: 1, ABP: 1, CHN: 1, PPT: 1 };

function compactUniqueUrls(urls) {
  var seen = {};
  var result = [];
  for (var i = 0; i < (urls || []).length; i++) {
    var value = String(urls[i] || "").trim();
    if (!value) continue;
    var key = value.toLowerCase().split("?")[0].split("#")[0].replace(/\/+$/, "");
    if (!key || seen[key]) continue;
    seen[key] = true;
    result.push(value);
  }
  return result;
}

function normalizeDmmPrefix(prefix) {
  var value = String(prefix || "").toUpperCase();
  return value === "REBDB" ? "REBD" : value;
}

function extractStandardCode(value) {
  var text = String(value || "").toUpperCase();
  if (!text || text.indexOf("XXX-AV") >= 0 || /\bFC2(?:[- ]?PPV)?[- ]?\d{5,8}\b/.test(text)) return "";
  // 有分隔符时允许数字片商前缀；无分隔符时前缀必须以字母结尾，避免吞掉流水号。
  var match =
    text.match(/\b([A-Z0-9]{2,10})[\s_-]+(\d{1,8})([A-Z]?)\b/) ||
    text.match(/\b([A-Z0-9]{1,9}[A-Z])(\d{1,8})([A-Z]?)\b/);
  if (!match || !/[A-Z]/.test(match[1])) return "";
  var number = String(parseInt(match[2], 10));
  if (!number || number === "0" || number === "NaN") return "";
  return match[1] + "-" + number + (match[3] || "");
}

function parseStandardCodeParts(value) {
  var code = extractStandardCode(value);
  if (!code) return null;
  var match = code.match(/^([A-Z0-9]+)-(\d{1,8})([A-Z]?)$/);
  if (!match) return null;
  var prefix = match[1].toUpperCase();
  var number = String(parseInt(match[2], 10));
  if (!number || number === "0" || number === "NaN") return null;
  return {
    prefix: prefix,
    prefixLower: prefix.toLowerCase(),
    number: number,
    number3: number.length < 3 ? ("000" + number).slice(-3) : number,
    number5: number.length < 5 ? ("00000" + number).slice(-5) : number,
    suffix: match[3] || "",
    code: prefix + "-" + number + (match[3] || ""),
  };
}

function isDmmDirectBlockedCode(parts) {
  if (!parts) return false;
  var prefix = normalizeDmmPrefix(parts.prefix);
  var number = parseInt(parts.number, 10);
  if (DMM_DIRECT_BLOCKED_CODES[prefix + "-" + parts.number]) return true;
  if (!isFinite(number)) return false;
  for (var i = 0; i < DMM_DIRECT_BLOCKED_RANGES.length; i++) {
    var range = DMM_DIRECT_BLOCKED_RANGES[i];
    if (range.prefix === prefix && number >= range.min && number <= range.max) return true;
  }
  return false;
}

function isDirectDmmSeries(parts) {
  return !!(
    parts &&
    !isDmmDirectBlockedCode(parts) &&
    DMM_DIRECT_PREFIXES[normalizeDmmPrefix(parts.prefix)]
  );
}

function buildDmmContentIdFromParts(parts) {
  if (!parts) return "";
  var code = String(parts.code || "").toUpperCase();
  if (code && DMM_CONTENT_ID_OVERRIDES[code]) return DMM_CONTENT_ID_OVERRIDES[code];
  var prefix = normalizeDmmPrefix(parts.prefix);
  var numericPrefix = DMM_CONTENT_PREFIX_MAP[prefix] || "";
  if (!numericPrefix && /^SD[A-Z]{2,3}$/.test(prefix)) numericPrefix = "1";
  return numericPrefix + prefix.toLowerCase() + parts.number5 + String(parts.suffix || "").toLowerCase();
}

function buildDmmCoverCandidatesFromContentId(contentId) {
  var id = String(contentId || "").toLowerCase();
  if (!id) return { posterCandidates: [], backdropCandidates: [] };
  return {
    posterCandidates: [
      "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + id + "/" + id + "ps.jpg",
      "https://pics.dmm.co.jp/digital/video/" + id + "/" + id + "ps.jpg",
    ],
    backdropCandidates: [
      "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/" + id + "/" + id + "pl.jpg",
      "https://pics.dmm.co.jp/digital/video/" + id + "/" + id + "pl.jpg",
    ],
  };
}

function buildMgstageCoverCandidatesFromParts(parts, rule) {
  if (!parts || !rule || !rule.maker) return { posterCandidates: [], backdropCandidates: [] };
  var prefix = parts.prefixLower;
  var number = parts.number3;
  if (!prefix || !number) return { posterCandidates: [], backdropCandidates: [] };
  var dvdDash = prefix + "-" + number;
  var base = "https://image.mgstage.com/images/" + rule.maker + "/" + prefix + "/" + number;
  return {
    posterCandidates: [base + "/pf_e_" + dvdDash + ".jpg", base + "/pf_o1_" + dvdDash + ".jpg"],
    backdropCandidates: [base + "/pb_e_" + dvdDash + ".jpg"],
  };
}

function buildImageCandidatesFromValue(value) {
  var parts = parseStandardCodeParts(value);
  if (!parts) return { strategy: "javdb", posterCandidates: [], backdropCandidates: [] };
  if (isDirectDmmSeries(parts)) {
    var dmm = buildDmmCoverCandidatesFromContentId(buildDmmContentIdFromParts(parts));
    dmm.strategy = "direct-dmm";
    dmm.parts = parts;
    return dmm;
  }
  if (MGSTAGE_PREFIXES[parts.prefix]) {
    var mg = buildMgstageCoverCandidatesFromParts(parts, MGSTAGE_COVER_RULES[parts.prefix]);
    mg.strategy = "mgstage";
    mg.parts = parts;
    return mg;
  }
  return { strategy: "javdb", posterCandidates: [], backdropCandidates: [], parts: parts };
}

function isInvalidCoverTarget(url) {
  var value = String(url || "").toLowerCase().trim();
  if (!value || /^data:/i.test(value)) return true;
  return (
    value.indexOf("now_printing") >= 0 ||
    value.indexOf("noimage") >= 0 ||
    value.indexOf("no_image") >= 0 ||
    value.indexOf("no-image") >= 0 ||
    value.indexOf("placeholder") >= 0 ||
    /adult_pl\.jpg(?:\?|$)/i.test(value)
  );
}

function isJdbstaticUrl(url) {
  return /jdbstatic\.com/i.test(String(url || ""));
}

function normalizeJavdbCdnUrl(url) {
  var value = String(url || "").trim();
  if (!value) return "";
  value = value.replace(/^https?:\/\/(?:c\d+\.)?jdbstatic\.com/i, JAVDB_CDN_BASE);
  value = value.replace(/^https?:\/\/tp-iu\.cmastd\.com\/rhe951l4q/i, JAVDB_CDN_BASE);
  return value;
}

function buildJavdbCdnCoverUrl(movieId) {
  var id = String(movieId || "").trim();
  if (!id || id.length < 2) return "";
  return JAVDB_CDN_BASE + "/covers/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function buildJavdbCdnThumbUrl(movieId) {
  var id = String(movieId || "").trim();
  if (!id || id.length < 2) return "";
  return JAVDB_CDN_BASE + "/thumbs/" + id.slice(0, 2).toLowerCase() + "/" + id + ".jpg";
}

function sanitizeCoverUrl(url) {
  var value = normalizeJavdbCdnUrl(url);
  return !value || isInvalidCoverTarget(value) ? "" : value;
}

function chooseFirstCandidate(candidates, fallback) {
  for (var i = 0; i < (candidates || []).length; i++) {
    var value = sanitizeCoverUrl(candidates[i]);
    if (value) return value;
  }
  return sanitizeCoverUrl(fallback) || String(fallback || "").trim() || "";
}

function resolveSiteCoverFallback(url) {
  var cleaned = sanitizeCoverUrl(url);
  if (cleaned) return cleaned;
  var raw = String(url || "").trim();
  if (!raw || isInvalidCoverTarget(raw)) return "";
  return raw;
}

function buildCoverBundleFromUrls(poster, backdrop) {
  return {
    backdropPath: backdrop,
    posterPath: poster,
    detailPoster: poster,
    coverUrl: backdrop,
    image: backdrop,
  };
}

async function isHdImageAvailable(url) {
  var clean = sanitizeCoverUrl(url) || String(url || "").trim();
  if (!clean || isInvalidCoverTarget(clean)) return false;
  if (Object.prototype.hasOwnProperty.call(HD_IMAGE_AVAILABLE_CACHE, clean)) {
    return !!HD_IMAGE_AVAILABLE_CACHE[clean];
  }
  if (HD_IMAGE_PENDING_REQUESTS[clean]) {
    return await HD_IMAGE_PENDING_REQUESTS[clean];
  }
  var pending = (async function () {
    try {
      if (!Widget.http) {
        HD_IMAGE_AVAILABLE_CACHE[clean] = false;
        return false;
      }
      var headers = {
        "User-Agent": UA,
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        Referer: /mgstage\.com/i.test(clean) ? "https://www.mgstage.com/" : "https://www.dmm.co.jp/",
      };
      var resp = null;
      if (typeof Widget.http.head === "function") {
        resp = await Widget.http.head(clean, { headers: headers, timeout: HD_IMAGE_REQUEST_TIMEOUT_MS });
      } else if (typeof Widget.http.get === "function") {
        resp = await Widget.http.get(clean, { headers: headers, timeout: HD_IMAGE_REQUEST_TIMEOUT_MS });
      } else {
        HD_IMAGE_AVAILABLE_CACHE[clean] = false;
        return false;
      }
      var status = Number((resp && (resp.statusCode != null ? resp.statusCode : resp.status)) || 0);
      if (status >= 400) {
        HD_IMAGE_AVAILABLE_CACHE[clean] = false;
        return false;
      }
      var hdrs = (resp && resp.headers) || {};
      var contentLength = parseInt(
        hdrs["content-length"] || hdrs["Content-Length"] || hdrs["content_length"] || "0",
        10
      );
      if (contentLength > 0 && contentLength < HD_IMAGE_MIN_CONTENT_LENGTH) {
        HD_IMAGE_AVAILABLE_CACHE[clean] = false;
        return false;
      }
      HD_IMAGE_AVAILABLE_CACHE[clean] = true;
      return true;
    } catch (e) {
      HD_IMAGE_AVAILABLE_CACHE[clean] = false;
      return false;
    } finally {
      delete HD_IMAGE_PENDING_REQUESTS[clean];
    }
  })();
  HD_IMAGE_PENDING_REQUESTS[clean] = pending;
  return await pending;
}

async function chooseFirstAvailableCandidate(candidates, fallback) {
  var list = candidates || [];
  var started = Date.now();
  for (var i = 0; i < list.length; i++) {
    if (Date.now() - started > HD_IMAGE_ITEM_BUDGET_MS) break;
    var value = sanitizeCoverUrl(list[i]) || String(list[i] || "").trim();
    if (!value) continue;
    if (await isHdImageAvailable(value)) return value;
  }
  // 高清全部失败 → 本站兜底
  return resolveSiteCoverFallback(fallback) || "";
}

function buildListCoverBundle(code, siteFallback, sitePosterFallback) {
  var fallback = resolveSiteCoverFallback(siteFallback);
  var sitePoster =
    resolveSiteCoverFallback(sitePosterFallback) ||
    (fallback ? fallback.replace(/\/covers\//, "/small_covers/") : "") ||
    fallback;
  var candidates = buildImageCandidatesFromValue(code);
  // 同步路径仅作占位：优先拼高清候选地址；真正选用由 async 校验决定
  // 若同步结果直接给 Rex，enrich 前会先用本站图，避免未校验 404
  if (candidates.strategy === "direct-dmm" || candidates.strategy === "mgstage") {
    if (fallback || sitePoster) {
      return buildCoverBundleFromUrls(sitePoster || fallback, fallback || sitePoster);
    }
    var poster = chooseFirstCandidate(candidates.posterCandidates, "");
    var backdrop = chooseFirstCandidate(candidates.backdropCandidates, "");
    return buildCoverBundleFromUrls(poster, backdrop || poster);
  }
  return buildCoverBundleFromUrls(sitePoster || fallback, fallback || sitePoster);
}

async function buildListCoverBundleAsync(code, siteFallback, sitePosterFallback) {
  var fallback = resolveSiteCoverFallback(siteFallback);
  var sitePoster =
    resolveSiteCoverFallback(sitePosterFallback) ||
    (fallback ? fallback.replace(/\/covers\//, "/small_covers/") : "") ||
    fallback;
  var candidates = buildImageCandidatesFromValue(code);
  // 非 DMM/MGStage：直接本站
  if (candidates.strategy !== "direct-dmm" && candidates.strategy !== "mgstage") {
    return buildCoverBundleFromUrls(sitePoster || fallback, fallback || sitePoster);
  }
  // 优先高清：校验通过用 DMM/MGStage，失败再回退本站
  var poster = await chooseFirstAvailableCandidate(candidates.posterCandidates, sitePoster || fallback);
  var backdrop = await chooseFirstAvailableCandidate(
    candidates.backdropCandidates,
    fallback || sitePoster || poster
  );
  return buildCoverBundleFromUrls(
    poster || sitePoster || fallback,
    backdrop || fallback || sitePoster || poster
  );
}

function buildDetailCoverBundle(code, siteFallback, sitePosterFallback) {
  return buildListCoverBundle(code, siteFallback, sitePosterFallback);
}

function buildHighResGallery(code, count) {
  var candidates = buildImageCandidatesFromValue(code);
  var parts = candidates.parts;
  var urls = [];
  var total = Number(count || 10) || 10;
  if (candidates.strategy === "direct-dmm" && parts) {
    var contentId = buildDmmContentIdFromParts(parts);
    for (var i = 1; i <= total; i++) {
      urls.push(
        "https://pics.dmm.co.jp/digital/video/" + contentId + "/" + contentId + "jp-" + i + ".jpg"
      );
    }
  } else if (candidates.strategy === "mgstage" && parts) {
    var rule = MGSTAGE_COVER_RULES[parts.prefix] || { maker: "prestige" };
    var dvdDash = parts.prefixLower + "-" + parts.number;
    for (var j = 1; j <= total; j++) {
      urls.push(
        "https://image.mgstage.com/images/" +
          rule.maker +
          "/" +
          parts.prefixLower +
          "/" +
          parts.number +
          "/cap_e_" +
          j +
          "_" +
          dvdDash +
          ".jpg"
      );
    }
  }
  return compactUniqueUrls(urls.map(sanitizeCoverUrl)).filter(Boolean);
}

function buildDetailTrailers(previewUrl, cover) {
  var url = String(previewUrl || "").trim();
  if (!url) return [];
  var image = sanitizeCoverUrl(cover) || String(cover || "").trim();
  return [
    {
      coverUrl: image || undefined,
      posterPath: image || undefined,
      backdropPath: image || undefined,
      image: image || undefined,
      url: url,
    },
  ];
}


/* ===== JavRanking core (after HD) ===== */

function getText(v) {
  return String(v == null ? "" : v).replace(/\s+/g, " ").trim();
}

function decodeHtmlEntities(text) {
  return getText(text)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function localeOf(params) {
  var loc = getText(params && params.locale) || "zh-hans";
  if (loc === "zh" || loc === "zh-CN") return "zh-hans";
  if (loc === "en-US") return "en";
  return loc === "en" ? "en" : "zh-hans";
}

function siteCoverUrl(videoId) {
  var id = String(videoId || "").replace(/[^\d]/g, "");
  return id ? STATIC_ORIGIN + "/video/cover/" + id + ".webp" : "";
}

function sitePreviewUrl(videoId) {
  var id = String(videoId || "").replace(/[^\d]/g, "");
  return id ? STATIC_ORIGIN + "/video/preview/" + id + ".mp4" : "";
}

function siteOgUrl(videoId) {
  var id = String(videoId || "").replace(/[^\d]/g, "");
  return id ? STATIC_ORIGIN + "/video/og/" + id + ".webp" : "";
}

/** 封面候选：本站 cover/og 优先，索引 coverUrl 仅作兜底 */
function resolveVideoCoverCandidates(videoId, indexCover) {
  var fromSite = siteCoverUrl(videoId);
  var fromOg = siteOgUrl(videoId);
  var fromIndex = resolveSiteCoverFallback(indexCover) || getText(indexCover);
  var primary = fromSite || fromOg || fromIndex || "";
  var poster = fromSite || fromOg || fromIndex || "";
  return {
    primary: primary,
    poster: poster,
    backdrop: fromOg || fromSite || fromIndex || primary,
  };
}

/** ACC-006 / ACC-6 等零填充兼容键 */
function codeLookupKeys(code) {
  var c = normalizeCode(code);
  if (!c) return [];
  var keys = [c];
  var parts = parseStandardCodeParts(c);
  if (parts) {
    var base = parts.prefix + "-" + parts.number + (parts.suffix || "");
    if (keys.indexOf(base) < 0) keys.push(base);
    [2, 3, 4, 5].forEach(function (w) {
      var n = parts.number.length >= w ? parts.number : ("00000" + parts.number).slice(-w);
      var k = parts.prefix + "-" + n + (parts.suffix || "");
      if (keys.indexOf(k) < 0) keys.push(k);
    });
  }
  return keys;
}

function lookupVideoByCode(codeMap, code) {
  var keys = codeLookupKeys(code);
  for (var i = 0; i < keys.length; i++) {
    if (codeMap[keys[i]]) return codeMap[keys[i]];
  }
  return null;
}

function siteActorOgUrl(slug) {
  var s = getText(slug);
  if (!s) return "";
  if (s.indexOf("actor-") !== 0) s = "actor-" + s;
  return STATIC_ORIGIN + "/actor/og/" + s + ".webp";
}

function resolveActressAvatar(ent, slugHint) {
  var url = getText(ent && ent.imageUrl);
  if (url) {
    // 去掉缓存 bust 参数，保持稳定 URL
    return url.replace(/\?.*$/, "");
  }
  var slug = getText((ent && ent.slug) || slugHint);
  return siteActorOgUrl(slug);
}

function findActressEntity(entityMap, nameOrSlug) {
  var key = getText(nameOrSlug).toLowerCase();
  if (!key || !entityMap) return null;
  return (
    entityMap["slug:" + key] ||
    entityMap["name:" + key] ||
    null
  );
}

function findActressEntityInIndex(index, nameOrSlug, scoreHint) {
  var key = getText(nameOrSlug).toLowerCase();
  if (!key) return null;
  var entities = (index && index.entities) || [];
  var i;
  var e;
  for (i = 0; i < entities.length; i++) {
    e = entities[i];
    if (!e) continue;
    if (getText(e.slug).toLowerCase() === key) return e;
    if (getText(e.name).toLowerCase() === key) return e;
  }
  for (i = 0; i < entities.length; i++) {
    e = entities[i];
    if (!e || !Array.isArray(e.aliases)) continue;
    for (var j = 0; j < e.aliases.length; j++) {
      if (getText(e.aliases[j]).toLowerCase() === key) return e;
    }
  }
  var score = Number(scoreHint || 0) || 0;
  if (score > 0) {
    var hits = [];
    for (i = 0; i < entities.length; i++) {
      e = entities[i];
      if (!e) continue;
      if ((Number(e.score || 0) || 0) === score && isFemaleEntity(e)) hits.push(e);
    }
    if (hits.length === 1) return hits[0];
  }
  return null;
}

function normalizeCode(code) {
  return getText(code).toUpperCase().replace(/\s+/g, "");
}

function buildVideoLink(videoId, code) {
  var id = String(videoId || "").replace(/[^\d]/g, "");
  if (!id) return "";
  var c = normalizeCode(code);
  return LINK_PREFIX + "video:" + id + (c ? ":" + encodeURIComponent(c) : "");
}

function buildActressLink(nameOrSlug) {
  var n = getText(nameOrSlug);
  return n ? LINK_PREFIX + "actress:" + encodeURIComponent(n) : "";
}

function parseOwnedLink(raw) {
  var s = getText(raw);
  if (!s) return null;

  var mag =
    s.match(/^gy:([0-9a-fA-F]{32,40})$/i) ||
    s.match(/^jvr:magnet:([0-9a-fA-F]{32,40})$/i);
  if (mag) return { kind: "magnet", hash: mag[1].toLowerCase() };

  var m = s.match(/^jvr:(video|actress):(.+)$/i);
  if (m) {
    var kind = m[1].toLowerCase();
    var rest = m[2];
    if (kind === "video") {
      var parts = rest.split(":");
      var id = String(parts[0] || "").replace(/[^\d]/g, "");
      if (!id) return null;
      return {
        kind: "video",
        videoId: id,
        code: parts[1] ? decodeURIComponent(parts.slice(1).join(":")) : "",
      };
    }
    try {
      return { kind: "actress", name: decodeURIComponent(rest) };
    } catch (e) {
      return { kind: "actress", name: rest };
    }
  }

  var codeOnly = s.match(/^jvr:code:(.+)$/i);
  if (codeOnly) {
    try {
      return { kind: "code", code: decodeURIComponent(codeOnly[1]) };
    } catch (e2) {
      return { kind: "code", code: codeOnly[1] };
    }
  }

  var um = s.match(
    /^https?:\/\/(?:www\.)?javranking\.cc\/(?:zh-hans|en|zh-hant)\/videos\/(\d+)\/?(?:[?#].*)?$/i
  );
  if (um) return { kind: "video", videoId: um[1], code: "" };
  return null;
}

function pageSlice(list, page, size) {
  var p = Math.max(1, Number(page || 1) || 1);
  var n = Math.max(1, Number(size || PAGE_SIZE) || PAGE_SIZE);
  return (list || []).slice((p - 1) * n, (p - 1) * n + n);
}

function shuffleCopy(arr) {
  var a = (arr || []).slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}

async function httpGet(url, headers) {
  var res = await Widget.http.get(url, {
    headers: Object.assign({}, DEFAULT_HEADERS, headers || {}),
  });
  return res && res.data;
}

function responseToText(data) {
  if (data == null) return "";
  if (typeof data === "string") return data;
  if (typeof data === "object") {
    try {
      return JSON.stringify(data);
    } catch (e) {
      return String(data);
    }
  }
  return String(data);
}

function loadHtml(html) {
  if (Widget.html && typeof Widget.html.load === "function") {
    try {
      return Widget.html.load(html);
    } catch (e) {
      console.warn("[javranking] Widget.html.load 失败:", e && e.message);
    }
  }
  return null;
}

async function getSearchIndex(params) {
  var now = Date.now();
  try {
    var ts = Number(Widget.storage.get(SEARCH_INDEX_TS_KEY) || 0);
    var cached = Widget.storage.get(SEARCH_INDEX_CACHE_KEY);
    if (cached && now - ts < SEARCH_INDEX_TTL_MS) {
      if (typeof cached === "string") {
        try {
          return JSON.parse(cached);
        } catch (e) {}
      } else if (cached && typeof cached === "object") {
        return cached;
      }
    }
  } catch (e) {}

  var locale = localeOf(params);
  var url = SITE_ORIGIN + "/" + locale + "/search-index.json";
  var data = await httpGet(url, { Accept: "application/json" });
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch (e) {
      throw new Error("search-index.json 解析失败");
    }
  }
  if (!data || !Array.isArray(data.videos)) throw new Error("search-index.json 无效");
  try {
    Widget.storage.set(SEARCH_INDEX_CACHE_KEY, JSON.stringify(data));
    Widget.storage.set(SEARCH_INDEX_TS_KEY, String(now));
  } catch (e2) {}
  return data;
}

function isValidFilterIndex(index) {
  return !!(index && Array.isArray(index.videos) && Array.isArray(index.categories));
}

function readCachedFilterIndex(params) {
  var locale = localeOf(params);
  var key = FILTER_INDEX_CACHE_PREFIX + locale;
  var now = Date.now();
  var memory = FILTER_INDEX_MEMORY_CACHE[locale];
  if (memory && now - memory.ts < FILTER_INDEX_TTL_MS) return memory.data;

  try {
    var ts = Number(Widget.storage.get(key + ".ts") || 0);
    if (ts > 0 && now - ts < FILTER_INDEX_TTL_MS) {
      var cached = Widget.storage.get(key);
      if (typeof cached === "string") cached = JSON.parse(cached);
      if (isValidFilterIndex(cached)) {
        FILTER_INDEX_MEMORY_CACHE[locale] = { ts: ts, data: cached };
        return cached;
      }
    }
  } catch (e) {}
  return null;
}

async function getFilterIndex(params) {
  var locale = localeOf(params);
  var key = FILTER_INDEX_CACHE_PREFIX + locale;
  var cached = readCachedFilterIndex(params);
  if (cached) return cached;
  if (FILTER_INDEX_PENDING_REQUESTS[locale]) return await FILTER_INDEX_PENDING_REQUESTS[locale];
  var request = (async function () {
    var url = SITE_ORIGIN + "/" + locale + "/filter-index.json";
    var data = await httpGet(url, { Accept: "application/json" });
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (e) {
        throw new Error("filter-index.json 解析失败");
      }
    }
    if (!isValidFilterIndex(data)) throw new Error("filter-index.json 无效");
    var fetchedAt = Date.now();
    FILTER_INDEX_MEMORY_CACHE[locale] = { ts: fetchedAt, data: data };
    try {
      Widget.storage.set(key, JSON.stringify(data));
      Widget.storage.set(key + ".ts", String(fetchedAt));
    } catch (e2) {
      // 索引较大；持久缓存写入失败仍保留当前运行时的内存缓存。
      console.warn("[javranking] 题材索引缓存写入失败:", e2 && e2.message);
    }
    return data;
  })();
  FILTER_INDEX_PENDING_REQUESTS[locale] = request;
  try {
    return await request;
  } finally {
    delete FILTER_INDEX_PENDING_REQUESTS[locale];
  }
}

function buildCodeMap(index) {
  var map = {};
  (index.videos || []).forEach(function (v) {
    var code = normalizeCode(v && v.code);
    if (!code) return;
    var keys = codeLookupKeys(code);
    for (var i = 0; i < keys.length; i++) {
      if (!map[keys[i]]) map[keys[i]] = v;
    }
  });
  return map;
}

function buildEntityMap(index) {
  var map = {};
  (index.entities || []).forEach(function (e) {
    if (!e) return;
    var name = getText(e.name);
    var slug = getText(e.slug);
    if (name) map["name:" + name.toLowerCase()] = e;
    if (slug) map["slug:" + slug.toLowerCase()] = e;
    if (Array.isArray(e.aliases)) {
      e.aliases.forEach(function (alias) {
        var a = getText(alias).toLowerCase();
        if (a && !map["name:" + a]) map["name:" + a] = e;
      });
    }
  });
  return map;
}

function findVideosByKeyword(index, keyword) {
  var kw = getText(keyword).toLowerCase();
  if (!kw) return [];
  var codeKw = normalizeCode(keyword).toLowerCase();
  var out = [];
  (index.videos || []).forEach(function (v) {
    if (!v) return;
    var code = normalizeCode(v.code).toLowerCase();
    var title = getText(v.title).toLowerCase();
    var hit = false;
    if (code && (code === codeKw || code.indexOf(codeKw) >= 0 || codeKw.indexOf(code) >= 0)) hit = true;
    if (!hit && title && title.indexOf(kw) >= 0) hit = true;
    if (!hit && Array.isArray(v.actorLinks)) {
      for (var i = 0; i < v.actorLinks.length; i++) {
        var name = getText(v.actorLinks[i] && v.actorLinks[i].name).toLowerCase();
        if (name && name.indexOf(kw) >= 0) {
          hit = true;
          break;
        }
      }
    }
    if (hit) out.push(v);
  });
  out.sort(function (a, b) {
    return Number(a.rank || 1e9) - Number(b.rank || 1e9);
  });
  return out;
}

function normalizePeopleKey(raw) {
  var s = getText(raw);
  if (!s) return "";
  try {
    s = decodeURIComponent(s);
  } catch (e) {}
  s = s.replace(/^jvr:actress:/i, "").replace(/^actress:/i, "");
  return getText(s);
}

function findActressWorks(index, nameOrSlug) {
  // 详情点演员（含男优）需能出片；不再按 gender 过滤
  var target = normalizePeopleKey(nameOrSlug).toLowerCase();
  if (!target) return [];
  var out = [];
  (index.videos || []).forEach(function (v) {
    if (!v || !Array.isArray(v.actorLinks)) return;
    for (var i = 0; i < v.actorLinks.length; i++) {
      var a = v.actorLinks[i] || {};
      var n = getText(a.name).toLowerCase();
      var slug = getText(a.slug).toLowerCase();
      if (
        n === target ||
        slug === target ||
        (n && (n.indexOf(target) >= 0 || target.indexOf(n) >= 0)) ||
        (slug && slug.indexOf(target) >= 0)
      ) {
        out.push(v);
        return;
      }
    }
  });
  return out;
}

/** 详情点演员：重开任意列表模块时带 peopleId → 返回该演员作品 */
async function loadWorksIfPeopleId(params) {
  var peopleId = resolvePeopleIdFromParams(params);
  if (!peopleId) return null;
  console.log("[javranking] peopleId → works", peopleId);
  var index = await getSearchIndex(params);
  var codeMap = buildCodeMap(index);
  return await loadActressWorksByName(peopleId, index, codeMap, params);
}

function resolveWorksSort(params) {
  var raw = getText(params && (params.works_sort || params.sort || params.order)).toLowerCase();
  if (raw === "newest" || raw === "latest" || raw === "new" || raw === "release_desc") return "newest";
  if (raw === "oldest" || raw === "earliest" || raw === "old" || raw === "release_asc") return "oldest";
  // score / representative / rank / 默认：代表作优先（战力分倒序，同分 rank 升序）
  return "score";
}

function workReleaseTs(v) {
  var d = getText((v && (v.releaseDate || v.release_date || v.datePublished)) || "");
  if (!d) return 0;
  var t = Date.parse(d.length === 10 ? d + "T00:00:00Z" : d);
  return Number.isFinite(t) ? t : 0;
}

function workScoreValue(v) {
  var s = Number((v && (v.score != null ? v.score : v.rating)) || 0);
  return Number.isFinite(s) ? s : 0;
}

function workRankValue(v) {
  var r = Number((v && v.rank) || 0);
  return Number.isFinite(r) && r > 0 ? r : 1e9;
}

/** 对齐站点女优页：代表作优先 / 最新发行 / 最早发行 */
function sortActressWorks(works, sortMode) {
  var mode = resolveWorksSort({ works_sort: sortMode });
  var list = (works || []).slice();
  list.sort(function (a, b) {
    if (mode === "newest") {
      var nb = workReleaseTs(b);
      var na = workReleaseTs(a);
      if (nb !== na) return nb - na;
      return workScoreValue(b) - workScoreValue(a);
    }
    if (mode === "oldest") {
      var oa = workReleaseTs(a);
      var ob = workReleaseTs(b);
      // 无日期沉底
      if (!oa && ob) return 1;
      if (oa && !ob) return -1;
      if (oa !== ob) return oa - ob;
      return workScoreValue(b) - workScoreValue(a);
    }
    // 代表作优先：综合战力得分倒排（与站点帮助一致）；同分按 rank 升序
    var sb = workScoreValue(b);
    var sa = workScoreValue(a);
    if (sb !== sa) return sb - sa;
    return workRankValue(a) - workRankValue(b);
  });
  return list;
}

function applyHdCovers(code, siteCover, sitePoster) {
  try {
    if (typeof buildListCoverBundle === "function") {
      return buildListCoverBundle(code, siteCover, sitePoster);
    }
  } catch (e) {}
  var c = resolveSiteCoverFallback(siteCover);
  var p = resolveSiteCoverFallback(sitePoster || siteCover);
  return {
    coverUrl: c || p,
    posterPath: p || c,
    detailPoster: p || c,
    backdropPath: c || p,
  };
}

async function applyHdCoversAsync(code, siteCover, sitePoster) {
  try {
    if (typeof buildListCoverBundleAsync === "function") {
      return await buildListCoverBundleAsync(code, siteCover, sitePoster);
    }
  } catch (e) {}
  return applyHdCovers(code, siteCover, sitePoster);
}

async function enrichItemsWithVerifiedHdCovers(items) {
  items = items || [];
  if (!items.length) return items;
  var started = Date.now();
  var tasks = items.map(function (item) {
    return (async function () {
      if (!item) return item;
      if (Date.now() - started > HD_IMAGE_BATCH_BUDGET_MS) return item;
      var code = normalizeCode(item.id) || normalizeCode(item.title) || "";
      if (!code) return item;
      var site =
        resolveSiteCoverFallback(item.posterPath) ||
        resolveSiteCoverFallback(item.coverUrl) ||
        resolveSiteCoverFallback(item.backdropPath) ||
        "";
      var covers = await applyHdCoversAsync(code, site, site);
      if (covers.coverUrl) item.coverUrl = covers.coverUrl;
      if (covers.posterPath) item.posterPath = covers.posterPath;
      if (covers.detailPoster) item.detailPoster = covers.detailPoster;
      if (covers.backdropPath) item.backdropPath = covers.backdropPath;
      return item;
    })();
  });
  try {
    await Promise.all(tasks);
  } catch (e) {}
  return items;
}

function mapIndexVideo(v, extra) {
  v = v || {};
  extra = extra || {};
  var videoId = String(v.videoId || v.id || "").replace(/[^\d]/g, "");
  var code = normalizeCode(v.code);
  var title = getText(v.title || code || videoId);
  if (code && title.toUpperCase().indexOf(code) !== 0) title = code + " " + title;
  var coverCand = resolveVideoCoverCandidates(videoId, v.coverUrl);
  var covers = applyHdCovers(code || title, coverCand.primary, coverCand.poster);
  var actors = [];
  if (Array.isArray(v.actorLinks)) {
    v.actorLinks.forEach(function (a) {
      var n = getText(a && a.name);
      if (n) actors.push(n);
    });
  }
  var descParts = [];
  if (extra.rankLabel) descParts.push(extra.rankLabel);
  if (v.score != null && v.score !== "") descParts.push("战力 " + v.score);
  if (actors.length) descParts.push(actors.slice(0, 4).join(" / "));
  if (v.releaseDate) descParts.push(String(v.releaseDate).slice(0, 10));

  return {
    id: code || videoId || title,
    type: "url",
    mediaType: "movie",
    title: title,
    link: buildVideoLink(videoId, code),
    releaseDate: v.releaseDate ? String(v.releaseDate).slice(0, 10) : "",
    rating: Number(v.score || 0) || 0,
    description: descParts.join(" · "),
    coverUrl: covers.coverUrl || coverCand.primary || undefined,
    posterPath: covers.posterPath || coverCand.poster || undefined,
    detailPoster: covers.detailPoster || covers.posterPath || coverCand.poster || undefined,
    backdropPath: covers.backdropPath || coverCand.backdrop || coverCand.primary || undefined,
    previewUrl: videoId ? sitePreviewUrl(videoId) : undefined,
  };
}

function mapRankingRow(row, codeMap, rankFallback) {
  var code = normalizeCode(row.code);
  var meta = (code && lookupVideoByCode(codeMap, code)) || null;
  var rank = Number(row.rank || rankFallback || 0) || 0;
  // Markdown 自带详情 ID 时以它为准，避免同番号映射到另一条影片。
  if (meta && (!row.videoId || String(meta.videoId) === String(row.videoId))) {
    return mapIndexVideo(meta, { rankLabel: rank ? "#" + rank : "" });
  }
  var title = getText(row.title || code);
  if (code && title.toUpperCase().indexOf(code) !== 0) title = code + " " + title;
  var videoId = String(row.videoId || "").replace(/[^\d]/g, "");
  var coverCand = resolveVideoCoverCandidates(videoId, row.coverUrl || row.cover);
  var covers = applyHdCovers(code || title, coverCand.primary, coverCand.poster);
  return {
    id: code || title,
    type: "url",
    mediaType: "movie",
    title: title,
    link: videoId
      ? buildVideoLink(videoId, code)
      : code
        ? LINK_PREFIX + "code:" + encodeURIComponent(code)
        : "",
    description: rank ? "#" + rank : "",
    coverUrl: covers.coverUrl || coverCand.primary || undefined,
    posterPath: covers.posterPath || coverCand.poster || undefined,
    detailPoster: covers.detailPoster || covers.posterPath || undefined,
    backdropPath: covers.backdropPath || coverCand.backdrop || undefined,
  };
}

function parseRankingMarkdownTable(md) {
  var lines = String(md || "").split(/\r?\n/);
  var rows = [];
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (!/^\|/.test(line)) continue;
    if (/^\|\s*-+/.test(line)) continue;
    if (/Rank\s*\|\s*Code/i.test(line)) continue;
    var cells = line.split("|").map(function (c) {
      return getText(c);
    });
    if (cells.length < 4) continue;
    var rank = cells[1];
    var code = cells[2];
    var title = cells[3];
    if (!/^\d+$/.test(rank) || !code) continue;
    var videoMatch = (cells[4] || "").match(
      /\]\((?:https?:\/\/(?:www\.)?javranking\.cc)?\/(?:zh-hans|en|zh-hant)\/videos\/(\d+)\/?(?:[?#][^)]*)?\)/i
    );
    var row = { rank: Number(rank), code: code, title: title };
    if (videoMatch) row.videoId = videoMatch[1];
    rows.push(row);
  }
  return rows;
}

function parseBulletVideos(md) {
  var text = String(md || "");
  var rows = [];
  var seen = {};
  var lines = text.split(/\r?\n/);
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var m =
      line.match(/^\s*[-*]\s*([A-Z0-9][A-Z0-9._-]{2,})\s*[:：]\s*(.+?)\s*$/i) ||
      line.match(/^\s*\d+[\.、\)]\s*([A-Z0-9][A-Z0-9._-]{2,})\s*[:：]\s*(.+?)\s*$/i) ||
      line.match(/^\s*([A-Z0-9][A-Z0-9._-]{2,})\s*[:：]\s*(.+?)\s*$/i);
    if (!m) continue;
    var code = normalizeCode(m[1]);
    if (!code || seen[code]) continue;
    // 过滤说明性伪番号
    if (/^(PT|HTTP|HTTPS|WWW)$/i.test(code)) continue;
    seen[code] = true;
    rows.push({ rank: rows.length + 1, code: code, title: getText(m[2]) });
  }
  if (rows.length) return rows;

  // HTML / 混排: CODE 链接
  var re = /(?:^|[\s>])([A-Z]{2,15}[-_]?\d{2,8}[A-Z]?)\s*[:：]\s*([^\n<]{2,120})/gi;
  var mm;
  while ((mm = re.exec(text))) {
    var c2 = normalizeCode(mm[1]);
    if (!c2 || seen[c2]) continue;
    seen[c2] = true;
    rows.push({ rank: rows.length + 1, code: c2, title: getText(mm[2]) });
  }
  return rows;
}

function cleanPowerSectionName(raw) {
  return getText(raw).replace(/^#\d+\s+/, "").trim();
}

function parsePowerSections(md) {
  var lines = String(md || "").split(/\r?\n/);
  var sections = [];
  var current = null;
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var hm = line.match(/^##\s+(.+?)\s*(?:\(⭐\s*([\d,]+)\))?\s*$/);
    if (hm) {
      current = {
        name: cleanPowerSectionName(hm[1]),
        score: Number(String(hm[2] || "").replace(/,/g, "")) || 0,
        works: [],
      };
      sections.push(current);
      continue;
    }
    if (!current) continue;
    var wm = line.match(/^\s*-\s*([A-Z0-9][A-Z0-9._-]{2,})\s*[:：]\s*(.+)\s*$/i);
    if (wm) current.works.push({ code: wm[1], title: getText(wm[2]) });
  }
  return sections.filter(function (sec) {
    if (!sec || !sec.name) return false;
    if (/计算规则|algorithm|rules?/i.test(sec.name)) return false;
    return Number(sec.score || 0) > 0 || (sec.works && sec.works.length > 0);
  });
}

async function fetchMarkdown(pathName, params) {
  var locale = localeOf(params);
  var url = SITE_ORIGIN + "/" + locale + "/" + String(pathName || "").replace(/^\//, "");
  if (!/\.md$/i.test(url)) url += ".md";
  var data = await httpGet(url, { Accept: "text/markdown,text/plain,*/*" });
  var text = responseToText(data);
  if (!text || /Just a moment|cf-browser-verification/i.test(text.slice(0, 500))) {
    throw new Error("获取 Markdown 失败: " + url);
  }
  return text;
}

async function fetchHtmlPage(pathName, params) {
  var locale = localeOf(params);
  var url = SITE_ORIGIN + "/" + locale + "/" + String(pathName || "").replace(/^\/|\/$/g, "") + "/";
  var data = await httpGet(url);
  return responseToText(data);
}

async function rankingRowsToItems(rows, params) {
  var index;
  try {
    index = await getSearchIndex(params);
  } catch (e) {
    var linkedRows = (rows || []).every(function (row) { return row && row.videoId; });
    if (!linkedRows) throw e;
    console.warn("[javranking] 榜单索引不可用，使用 Markdown 详情链接:", e && e.message);
    index = { videos: [] };
  }
  var codeMap = buildCodeMap(index);
  var pageRows = pageSlice(rows, params && params.page, PAGE_SIZE);
  var items = [];
  for (var i = 0; i < pageRows.length; i++) {
    var item = mapRankingRow(pageRows[i], codeMap, pageRows[i].rank);
    if ((!item.link || item.link.indexOf("jvr:code:") === 0) && pageRows[i].code) {
      var meta = lookupVideoByCode(codeMap, pageRows[i].code);
      if (meta) item = mapIndexVideo(meta, { rankLabel: pageRows[i].rank ? "#" + pageRows[i].rank : "" });
    }
    if (item.link) items.push(item);
  }
  return await enrichItemsWithVerifiedHdCovers(items);
}

async function resolveHallOfFameRows(params) {
  var rows = [];
  try {
    var md = await fetchMarkdown("most-awarded-videos", params);
    rows = parseBulletVideos(md);
    if (!rows.length) rows = parseRankingMarkdownTable(md);
  } catch (e) {
    console.warn("[javranking] 神作 Markdown 失败:", e && e.message);
  }
  if (!rows.length) {
    try {
      var html = await fetchHtmlPage("most-awarded-videos", params);
      rows = parseBulletVideos(html);
    } catch (e2) {
      console.warn("[javranking] 神作 HTML 失败:", e2 && e2.message);
    }
  }
  if (!rows.length) {
    // search-index 按 rank 升序近似神作榜
    var index = await getSearchIndex(params);
    var sorted = (index.videos || [])
      .filter(function (v) {
        return v && normalizeCode(v.code) && Number(v.rank || 0) > 0;
      })
      .sort(function (a, b) {
        return Number(a.rank || 1e9) - Number(b.rank || 1e9);
      })
      .slice(0, 300);
    rows = sorted.map(function (v, idx) {
      return { rank: idx + 1, code: v.code, title: v.title, videoId: v.videoId };
    });
  }
  return rows;
}

function extractJsonLdMovie(html) {
  var re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  var m;
  while ((m = re.exec(html))) {
    try {
      var obj = JSON.parse(m[1]);
      if (obj && (obj["@type"] === "Movie" || obj["@type"] === "VideoObject")) return obj;
      if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
          if (obj[i] && (obj[i]["@type"] === "Movie" || obj[i]["@type"] === "VideoObject")) return obj[i];
        }
      }
    } catch (e) {}
  }
  return null;
}

function extractMagnetsFromHtml(html) {
  var magnets = [];
  var seen = {};
  var re =
    /href=["'](magnet:\?[^"']+)["'][^>]*class=["'][^"']*magnet-item__name[^"']*["'][^>]*>([\s\S]*?)<\/a>([\s\S]*?)(?:<\/div>|<div class="magnet-item__actions")/gi;
  var m;
  while ((m = re.exec(html))) {
    var href = decodeHtmlEntities(m[1]);
    var name = decodeHtmlEntities(m[2].replace(/<[^>]+>/g, ""));
    var tail = m[3] || "";
    var sizeMatch = tail.match(/magnet-tag--size[^>]*>([^<]+)</i);
    var tags = [];
    var tagRe = /class=["']magnet-tag(?![^"']*size)[^"']*["'][^>]*>([^<]+)</gi;
    var tm;
    while ((tm = tagRe.exec(tail))) tags.push(getText(tm[1]));
    if (!href || seen[href]) continue;
    seen[href] = true;
    magnets.push({
      name: name || "磁力",
      magnet: href,
      size: sizeMatch ? getText(sizeMatch[1]) : "",
      tags: tags,
    });
  }
  if (magnets.length) return magnets;
  var re2 = /href=["'](magnet:\?[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  while ((m = re2.exec(html))) {
    var h2 = decodeHtmlEntities(m[1]);
    var n2 = decodeHtmlEntities(String(m[2] || "").replace(/<[^>]+>/g, ""));
    if (!h2 || seen[h2]) continue;
    seen[h2] = true;
    magnets.push({ name: n2 || "磁力", magnet: h2, size: "", tags: [] });
  }
  return magnets;
}

function extractStillsFromHtml(html) {
  var stills = [];
  var seen = {};
  var re = /https?:\/\/c\d+\.jdbstatic\.com\/samples\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi;
  var m;
  while ((m = re.exec(html))) {
    if (seen[m[0]]) continue;
    seen[m[0]] = true;
    stills.push(m[0]);
  }
  return stills;
}

function extractGenresFromHtml(html) {
  var genres = [];
  var seen = {};
  var re = /href=["'][^"']*\/(?:zh-hans|en)\/tags\/[^"']+["'][^>]*>([^<]+)</gi;
  var m;
  while ((m = re.exec(html))) {
    var t = getText(m[1]);
    if (!t || seen[t]) continue;
    seen[t] = true;
    genres.push({ id: t, title: t });
  }
  return genres;
}

function durationFromIso(iso) {
  var s = getText(iso);
  var m = s.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/i);
  if (!m) return 0;
  return Number(m[1] || 0) * 60 + Number(m[2] || 0);
}

function extractMagnetHash(magnet) {
  var text = decodeHtmlEntities(String(magnet || ""));
  var m = text.match(/btih:([0-9a-fA-F]{40}|[0-9a-zA-Z]{32,40})/i);
  return m ? m[1].toLowerCase() : "";
}

function cacheMagnet(hash, data) {
  try {
    Widget.storage.set(MAGNET_STORE_PREFIX + hash, JSON.stringify(Object.assign({ savedAt: Date.now() }, data || {})));
  } catch (e) {}
}

function readMagnetCache(hash) {
  try {
    var raw = Widget.storage.get(MAGNET_STORE_PREFIX + hash);
    if (!raw) return null;
    return typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (e) {
    return null;
  }
}

function buildMagnetRelatedItems(magnets, ctx) {
  ctx = ctx || {};
  var items = [];
  var sorted = (typeof sortMagnetsBySizeDesc === "function"
    ? sortMagnetsBySizeDesc(magnets)
    : magnets || []
  ).slice(0, 20);
  sorted.forEach(function (m) {
    var hash = extractMagnetHash(m.magnet);
    if (!hash) return;
    var tags = (m.tags || []).join(" · ");
    var titleParts = ["🧲 " + (m.name || "磁力")];
    if (m.size) titleParts.push(m.size);
    if (tags) titleParts.push(tags);
    cacheMagnet(hash, {
      magnet: m.magnet,
      hash: hash,
      name: m.name || "",
      size: m.size || "",
      tags: m.tags || [],
      code: ctx.code || "",
      title: ctx.title || "",
      cover: ctx.cover || "",
    });
    items.push({
      id: hash,
      type: "url",
      title: titleParts.join(" · "),
      link: MAGNET_LINK_PREFIX + hash,
      description:
        (m.name || "磁力") +
        (m.size ? "\n体积: " + m.size : "") +
        (tags ? "\n特征: " + tags : "") +
        "\n来源: JavRanking\n点击自动转存到光鸭云盘\n" +
        m.magnet,
      coverUrl: ctx.cover || undefined,
      posterPath: ctx.cover || undefined,
      backdropPath: ctx.cover || undefined,
    });
  });
  return items;
}

function peopleFromLd(ld, entityMap) {
  var peoples = [];
  function pushPerson(p, role) {
    if (!p) return;
    var name = getText(p.name);
    if (!name) return;
    var url = getText(p.url);
    var sm = url.match(/\/actors\/(actor-[^/]+)\/?/i);
    var slug = sm ? sm[1] : "";
    var id = slug || name;
    var ent = null;
    if (entityMap) {
      ent = (slug && entityMap["slug:" + slug.toLowerCase()]) || entityMap["name:" + name.toLowerCase()];
    }
    var avatar = resolveActressAvatar(ent, slug || id);
    // 必须带 type+link：详情点击走 loadDetail(jvr:actress:...) 返回作品列表
    peoples.push({
      id: String(id),
      type: "url",
      mediaType: "person",
      title: name,
      role: role || "演员",
      link: buildActressLink(slug || name),
      avatar: avatar || undefined,
    });
  }
  if (Array.isArray(ld.actor)) ld.actor.forEach(function (a) { pushPerson(a, "演员"); });
  else pushPerson(ld.actor, "演员");
  // 导演不注入作品流（避免点开空列表）
  return peoples;
}

async function resolveVideoIdByCode(code, params) {
  var index = await getSearchIndex(params);
  return lookupVideoByCode(buildCodeMap(index), code);
}

async function fetchVideoDetailHtml(videoId, params) {
  var locale = localeOf(params);
  var url = SITE_ORIGIN + "/" + locale + "/videos/" + videoId + "/";
  var data = await httpGet(url);
  var html = responseToText(data);
  if (!html || /Just a moment|cf-browser-verification/i.test(html.slice(0, 800))) {
    throw new Error("详情页被拦截或为空: " + url);
  }
  return html;
}

async function loadVideoDetail(owned, params) {
  params = params || {};
  var videoId = owned.videoId;
  var codeHint = owned.code;
  var indexMeta = null;
  if (!videoId && codeHint) {
    indexMeta = await resolveVideoIdByCode(codeHint, params);
    if (!indexMeta) return null;
    videoId = String(indexMeta.videoId);
    codeHint = indexMeta.code || codeHint;
  }
  if (!videoId) return null;

  // 片库探索已缓存的完整索引可直接提供基础详情，不额外下载另一份索引。
  var filterIndex = readCachedFilterIndex(params);
  if (!indexMeta && filterIndex) {
    filterIndex.videos.some(function (v) {
      if (String(v.videoId) === String(videoId)) {
        indexMeta = v;
        return true;
      }
      return false;
    });
  }

  // JSON 优先：search-index 基础详情
  try {
    if (!indexMeta) {
      var index = await getSearchIndex(params);
      var codeMap = buildCodeMap(index);
      if (codeHint) {
        var codeMeta = lookupVideoByCode(codeMap, codeHint);
        if (codeMeta && String(codeMeta.videoId) === String(videoId)) indexMeta = codeMeta;
      }
      if (!indexMeta) {
        (index.videos || []).some(function (v) {
          if (String(v.videoId) === String(videoId)) {
            indexMeta = v;
            return true;
          }
          return false;
        });
      }
    }
  } catch (e0) {}

  var coverCandFallback = resolveVideoCoverCandidates(videoId, indexMeta && indexMeta.coverUrl);
  var coversFallback = applyHdCovers(
    codeHint || videoId,
    coverCandFallback.primary,
    coverCandFallback.poster
  );
  var base = indexMeta
    ? buildDetailFromIndex(indexMeta, params)
    : {
        id: codeHint || videoId,
        type: "url",
        mediaType: "movie",
        title: codeHint || videoId,
        link: buildVideoLink(videoId, codeHint),
        previewUrl: sitePreviewUrl(videoId),
        videoUrl: sitePreviewUrl(videoId),
        coverUrl: coversFallback.coverUrl || coverCandFallback.primary || undefined,
        posterPath: coversFallback.posterPath || coverCandFallback.poster || undefined,
        detailPoster: coversFallback.detailPoster || coversFallback.posterPath || undefined,
        backdropPath: coversFallback.backdropPath || coverCandFallback.backdrop || undefined,
      };

  // HTML 补全磁力 / 剧照 / JSON-LD（失败则返回 JSON 基础详情）
  return await enrichDetailFromHtml(base, videoId, params);
}

async function loadWorksFromActressMarkdown(name, params) {
  try {
    var md = await fetchMarkdown("most-awarded-actors", params);
    var sections = parsePowerSections(md);
    var target = normalizePeopleKey(name).toLowerCase();
    for (var i = 0; i < sections.length; i++) {
      var secName = getText(sections[i].name).toLowerCase();
      if (secName === target || secName.indexOf(target) >= 0 || target.indexOf(secName) >= 0) {
        return sections[i].works || [];
      }
    }
  } catch (e) {}
  return [];
}

async function fetchActressWorksFromActorPage(slugOrName, index, codeMap, params) {
  var key = normalizePeopleKey(slugOrName);
  if (!key) return [];
  var ent = findActressEntityInIndex(index, key);
  var slug = getText((ent && ent.slug) || (/^actor-/i.test(key) ? key : ""));
  if (!slug) return [];
  var locale = localeOf(params);
  var url = SITE_ORIGIN + "/" + locale + "/actors/" + slug + "/";
  var html = "";
  try {
    html = responseToText(await httpGet(url));
  } catch (e) {
    console.warn("[javranking] 女优页获取失败:", e && e.message);
    return [];
  }
  if (!html) return [];
  var rows = [];
  var seen = {};
  var re = /href=["'][^"']*\/videos\/(\d+)\/?["'][^>]*>([\s\S]*?)<\/a>/gi;
  var m;
  while ((m = re.exec(html))) {
    var videoId = String(m[1] || "").replace(/[^\d]/g, "");
    var text = getText(String(m[2] || "").replace(/<[^>]+>/g, ""));
    var code = "";
    var cm = text.match(/\b([A-Z]{2,15}-?\d{2,8}[A-Z]?)\b/i);
    if (cm) code = normalizeCode(cm[1]);
    var uniq = code || videoId;
    if (!uniq || seen[uniq]) continue;
    seen[uniq] = true;
    rows.push({ videoId: videoId, code: code, title: text });
  }
  return rows
    .map(function (row) {
      var meta = row.code ? lookupVideoByCode(codeMap, row.code) : null;
      if (meta) return mapIndexVideo(meta);
      var byId = null;
      (index.videos || []).some(function (v) {
        if (String(v.videoId) === String(row.videoId)) {
          byId = v;
          return true;
        }
        return false;
      });
      if (byId) return mapIndexVideo(byId);
      if (!row.videoId && !row.code) return null;
      var coverCand = resolveVideoCoverCandidates(row.videoId, row.coverUrl);
      var covers = applyHdCovers(row.code || row.videoId, coverCand.primary, coverCand.poster);
      return {
        id: row.code || row.videoId,
        type: "url",
        mediaType: "movie",
        title: (row.code ? row.code + " " : "") + (row.title || row.videoId),
        link: buildVideoLink(row.videoId, row.code),
        coverUrl: covers.coverUrl || coverCand.primary || undefined,
        posterPath: covers.posterPath || coverCand.poster || undefined,
        backdropPath: covers.backdropPath || coverCand.backdrop || undefined,
        detailPoster: covers.detailPoster || covers.posterPath || undefined,
      };
    })
    .filter(function (x) {
      return x && x.link;
    });
}

async function loadActressDetail(owned, params) {
  params = params || {};
  var index = await getSearchIndex(params);
  var codeMap = buildCodeMap(index);
  var key = normalizePeopleKey(owned.name);
  // 点进女优时优先直接返回作品列表（App 对 loadDetail 数组会按列表展示）
  var works = await loadActressWorksByName(key, index, codeMap, params);
  if (works && works.length) return works;

  var entityMap = buildEntityMap(index);
  var ent = findActressEntityInIndex(index, key) || findActressEntity(entityMap, key);
  var cover = resolveActressAvatar(ent, (ent && ent.slug) || key);
  return {
    id: getText((ent && ent.slug) || key),
    type: "url",
    mediaType: "person",
    title: getText((ent && ent.name) || key),
    description: "暂无代表作数据",
    coverUrl: cover || undefined,
    posterPath: cover || undefined,
    backdropPath: cover || undefined,
    avatar: cover || undefined,
  };
}

async function loadMagnetDetail(owned, params) {
  if (typeof handleGuangyaMagnetSave === "function") {
    return await handleGuangyaMagnetSave(owned.hash, params || lastRequestParams || {});
  }
  var cached = readMagnetCache(owned.hash);
  if (!cached || !cached.magnet) return null;
  var cover = getText(cached.cover);
  return {
    id: owned.hash,
    type: "url",
    title: "🧲 " + (cached.name || cached.code || "磁力"),
    link: MAGNET_LINK_PREFIX + owned.hash,
    description:
      "番号: " +
      (cached.code || "-") +
      "\n体积: " +
      (cached.size || "-") +
      "\n\n磁力链接:\n" +
      cached.magnet,
    coverUrl: cover || undefined,
    posterPath: cover || undefined,
    backdropPath: cover || undefined,
    videoUrl: cached.magnet,
  };
}

async function loadRanking(params) {
  params = params || {};
  rememberParams(params);
  try {
    var byPeople = await loadWorksIfPeopleId(params);
    if (byPeople) return byPeople;
    var slug = getText(params.ranking || params.slug || "javdb-top250");
    var md = await fetchMarkdown("rankings/" + slug, params);
    var rows = parseRankingMarkdownTable(md);
    if (!rows.length) throw new Error("榜单为空: " + slug);
    return await rankingRowsToItems(rows, params);
  } catch (error) {
    console.error("[javranking][loadRanking] 失败:", error.message || error);
    throw error;
  }
}

function normalizeExploreCategoryKey(value) {
  var key = getText(value);
  try {
    key = decodeURIComponent(key);
  } catch (e) {}
  return key.toLowerCase();
}

function findExploreCategory(index, value) {
  var key = normalizeExploreCategoryKey(value);
  if (!key) return null;
  var categories = (index && index.categories) || [];
  for (var i = 0; i < categories.length; i++) {
    var category = categories[i];
    if (!category) continue;
    if (category.id != null && String(category.id) === key) return category;
    var names = [category.name, category.raw].concat(category.aliases || []);
    for (var j = 0; j < names.length; j++) {
      if (normalizeExploreCategoryKey(names[j]) === key) return category;
    }
  }
  return null;
}

function resolveExploreCategoryValue(params) {
  params = params || {};
  // 详情点击题材时，genreId 优先于菜单里保留的 category。
  var keys = ["genreId", "genre_id", "category", "cat"];
  for (var i = 0; i < keys.length; i++) {
    var value = getText(params[keys[i]]);
    if (value) return value;
  }
  return "all";
}

function videoHasExploreCategory(video, categoryId) {
  var ids = (video && video.categoryIds) || [];
  for (var i = 0; i < ids.length; i++) {
    if (String(ids[i]) === String(categoryId)) return true;
  }
  return false;
}

function normalizeExploreScope(params) {
  var scope = getText((params && params.scope) || "all").toLowerCase();
  return ["all", "ltx", "censored", "uncensored", "fc2"].indexOf(scope) >= 0 ? scope : "all";
}

function videoMatchesExploreScope(video, scope) {
  if (!video || !getText(video.videoId)) return false;
  if (scope === "ltx") return video.hasLtx === true;
  return scope === "all" || getText(video.scope).toLowerCase() === scope;
}

function filterExploreVideos(index, params) {
  params = params || {};
  var value = resolveExploreCategoryValue(params);
  var key = normalizeExploreCategoryKey(value);
  var category = key === "all" ? null : findExploreCategory(index, value);
  // 不认识的题材不能回退成全部影片，避免空筛选被误认为命中。
  if (key !== "all" && !category) return [];
  var scope = normalizeExploreScope(params);
  var releasedOnly = getText(params.released_only == null ? "1" : params.released_only) !== "0";
  var today = new Date().toISOString().slice(0, 10);
  return (index.videos || []).filter(function (video) {
    if (!videoMatchesExploreScope(video, scope)) return false;
    if (releasedOnly && video.releaseDate && String(video.releaseDate).slice(0, 10) > today) return false;
    return !category || videoHasExploreCategory(video, category.id);
  });
}

function shuffleExploreVideos(videos, seed) {
  var list = (videos || []).slice();
  var state = Number(seed);
  if (!Number.isFinite(state)) state = EXPLORE_RANDOM_SEED;
  // 与站点一致的带种子 Fisher-Yates；跨页重载不会重新洗牌造成重复/遗漏。
  function random() {
    var n = state += 1831565813;
    n = Math.imul(n ^ (n >>> 15), n | 1);
    n ^= n + Math.imul(n ^ (n >>> 7), n | 61);
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
  }
  for (var i = list.length - 1; i > 0; i--) {
    var j = Math.floor(random() * (i + 1));
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
  return list;
}

function sortExploreVideos(videos, params) {
  params = params || {};
  var mode = getText(params.sort || "random").toLowerCase();
  if (["score", "newest", "oldest"].indexOf(mode) < 0) {
    return shuffleExploreVideos(videos, params.seed == null ? EXPLORE_RANDOM_SEED : params.seed);
  }
  return (videos || []).slice().sort(function (a, b) {
    var aDate = getText(a.releaseDate);
    var bDate = getText(b.releaseDate);
    var scoreDiff = workScoreValue(b) - workScoreValue(a);
    var idDiff = Number(a.videoId) - Number(b.videoId);
    if (mode === "newest") return bDate.localeCompare(aDate) || scoreDiff || idDiff;
    if (mode === "oldest") return (aDate || "9999-99-99").localeCompare(bDate || "9999-99-99") || scoreDiff || idDiff;
    return scoreDiff || bDate.localeCompare(aDate) || idDiff;
  });
}

async function loadExplore(params) {
  params = params || {};
  rememberParams(params);
  try {
    var byPeople = await loadWorksIfPeopleId(params);
    if (byPeople) return byPeople;
    var index = await getFilterIndex(params);
    var videos = sortExploreVideos(filterExploreVideos(index, params), params);
    return pageSlice(videos, params.page, PAGE_SIZE).map(function (video) {
      return mapIndexVideo(video, { rankLabel: video.hasLtx ? "LTX AI 去码" : "" });
    });
  } catch (error) {
    console.error("[javranking][loadExplore] 失败:", error.message || error);
    throw error;
  }
}

async function loadLtxRanking(params) {
  params = params || {};
  rememberParams(params);
  try {
    var byPeople = await loadWorksIfPeopleId(params);
    if (byPeople) return byPeople;
    var md = await fetchMarkdown("rankings/" + LTX_RANKING_SLUG, params);
    var rows = parseRankingMarkdownTable(md);
    if (!rows.length) throw new Error("LTX 精选榜为空");
    return await rankingRowsToItems(rows, params);
  } catch (error) {
    console.error("[javranking][loadLtxRanking] 失败:", error.message || error);
    throw error;
  }
}

async function loadHallOfFame(params) {
  params = params || {};
  rememberParams(params);
  try {
    var byPeople = await loadWorksIfPeopleId(params);
    if (byPeople) return byPeople;
    var rows = await resolveHallOfFameRows(params);
    if (!rows.length) throw new Error("神作总榜为空");
    return await rankingRowsToItems(rows, params);
  } catch (error) {
    console.error("[javranking][loadHallOfFame] 失败:", error.message || error);
    throw error;
  }
}

async function loadRandomMasterpiece(params) {
  params = params || {};
  rememberParams(params);
  try {
    var byPeople = await loadWorksIfPeopleId(params);
    if (byPeople) return byPeople;
    var count = Math.max(6, Math.min(48, Number(params.count || 24) || 24));
    // 直接从索引抽有码非 FC2 池：一次过滤，避免神作榜逐条反查 + HD 探测拖慢
    var index = await getSearchIndex(params);
    var poolVideos = (index.videos || []).filter(isPreferredCensoredVideo);
    if (!poolVideos.length) throw new Error("无可随机的有码神作");
    // 偏向高战力：取 rank 较好的前段再随机
    poolVideos = poolVideos.slice().sort(function (a, b) {
      return Number(a.rank || 1e9) - Number(b.rank || 1e9);
    });
    var topN = Math.max(count * 8, Math.min(poolVideos.length, 200));
    var picked = shuffleCopy(poolVideos.slice(0, topN)).slice(0, count);
    var items = picked.map(function (v) {
      return mapIndexVideo(v, { rankLabel: "随机神作·有码" });
    });
    // 列表用本站封面即可，不做高清 HEAD 探测
    return items;
  } catch (error) {
    console.error("[javranking][loadRandomMasterpiece] 失败:", error.message || error);
    throw error;
  }
}

async function loadActressWorksByName(name, index, codeMap, params) {
  params = params || {};
  var sortMode = resolveWorksSort(params);
  var key = normalizePeopleKey(name);
  var ent = findActressEntityInIndex(index, key);
  var lookupKeys = [];
  if (key) lookupKeys.push(key);
  if (ent) {
    if (getText(ent.name) && lookupKeys.indexOf(ent.name) < 0) lookupKeys.push(ent.name);
    if (getText(ent.slug) && lookupKeys.indexOf(ent.slug) < 0) lookupKeys.push(ent.slug);
    if (Array.isArray(ent.aliases)) {
      ent.aliases.forEach(function (a) {
        var t = getText(a);
        if (t && lookupKeys.indexOf(t) < 0) lookupKeys.push(t);
      });
    }
  }

  var works = [];
  var seen = {};
  for (var i = 0; i < lookupKeys.length; i++) {
    var part = findActressWorks(index, lookupKeys[i]);
    part.forEach(function (v) {
      var id = String((v && (v.videoId || v.code)) || "");
      if (!id || seen[id]) return;
      seen[id] = true;
      works.push(v);
    });
  }
  // 今天冲谁等场景：按制式过滤作品
  if (params.censoredOnly || params.scope) {
    var scopeFilter = normalizeTodayScope(
      params.censoredOnly && !params.scope ? { scope: "censored" } : params
    );
    if (scopeFilter !== "all") {
      works = works.filter(function (v) {
        return videoMatchesTodayScope(v, scopeFilter);
      });
    }
  }

  var mapped = [];
  if (works.length) {
    works = sortActressWorks(works, sortMode);
    mapped = pageSlice(works, params.page, PAGE_SIZE).map(function (v) {
      return mapIndexVideo(v);
    });
  }

  if (!mapped.length) {
    var mdName = getText((ent && ent.name) || key);
    var mdWorks = await loadWorksFromActressMarkdown(mdName, params);
    var mdMapped = mdWorks
      .map(function (w) {
        var meta = lookupVideoByCode(codeMap, w.code);
        return meta || { code: w.code, title: w.title, score: 0, rank: 1e9, releaseDate: "" };
      })
      .filter(Boolean);
    mdMapped = sortActressWorks(mdMapped, sortMode);
    mapped = pageSlice(mdMapped, params.page, PAGE_SIZE)
      .map(function (v) {
        return v.videoId || v.coverUrl ? mapIndexVideo(v) : mapRankingRow(v, codeMap, 0);
      })
      .filter(function (x) {
        return x && x.link;
      });
  }

  // 索引/Markdown 都没有时，抓女优页作品链接（解决 peopleId 只有头像名的问题）
  if (!mapped.length) {
    var pageItems = await fetchActressWorksFromActorPage(key, index, codeMap, params);
    // 页面项已是 map 结果；用 rating/releaseDate 再排
    pageItems = sortActressWorks(
      pageItems.map(function (it) {
        return {
          code: it.id,
          title: it.title,
          score: it.rating,
          rank: 1e9,
          releaseDate: it.releaseDate,
          _item: it,
        };
      }),
      sortMode
    ).map(function (x) {
      return x._item;
    });
    mapped = pageSlice(pageItems, params.page, PAGE_SIZE);
  }

  console.log(
    "[javranking][works]",
    key,
    "sort=",
    sortMode,
    "→",
    mapped.length,
    "ent=",
    ent && ent.name
  );
  return await enrichItemsWithVerifiedHdCovers(mapped);
}

function resolvePeopleIdFromParams(params) {
  params = params || {};
  var candidates = [
    params.peopleId,
    params.people_id,
    params.personId,
    params.person_id,
    params.PeopleId,
  ];
  for (var i = 0; i < candidates.length; i++) {
    var v = normalizePeopleKey(candidates[i]);
    if (v) return v;
  }
  return "";
}

function rememberParams(params) {
  if (params && typeof params === "object") lastRequestParams = params;
  // 对齐 javverse：列表请求时把全局光鸭参数落到 storage，供 loadDetail(仅 link) 使用
  try {
    var token =
      getText(params && params.guangya_token) ||
      getText(params && params.refresh_token) ||
      "";
    if (!token && params && params.global) {
      token = getText(params.global.guangya_token) || getText(params.global.refresh_token) || "";
    }
    if (!token && params && params.globalParams) {
      if (Array.isArray(params.globalParams)) {
        for (var i = 0; i < params.globalParams.length; i++) {
          var it = params.globalParams[i];
          if (!it) continue;
          var n = getText(it.name || it.key);
          if (n === "guangya_token" || n === "refresh_token") {
            token = getText(it.value != null ? it.value : it.val);
            if (token) break;
          }
        }
      } else {
        token = getText(params.globalParams.guangya_token) || getText(params.globalParams.refresh_token) || "";
      }
    }
    if (token && Widget.storage && typeof Widget.storage.set === "function") {
      Widget.storage.set("jvr.guangya_token", token);
    }
    var parentId =
      getText(params && params.guangya_parent_id) ||
      getText(params && params.parentId) ||
      getText(params && params.parent_id) ||
      "";
    if (!parentId && params && params.global) {
      parentId =
        getText(params.global.guangya_parent_id) ||
        getText(params.global.parentId) ||
        getText(params.global.parent_id) ||
        "";
    }
    if (!parentId && params && params.globalParams) {
      if (Array.isArray(params.globalParams)) {
        for (var j = 0; j < params.globalParams.length; j++) {
          var it2 = params.globalParams[j];
          if (!it2) continue;
          var n2 = getText(it2.name || it2.key);
          if (n2 === "guangya_parent_id" || n2 === "parentId" || n2 === "parent_id") {
            parentId = getText(it2.value != null ? it2.value : it2.val);
            if (parentId) break;
          }
        }
      } else {
        parentId =
          getText(params.globalParams.guangya_parent_id) ||
          getText(params.globalParams.parentId) ||
          getText(params.globalParams.parent_id) ||
          "";
      }
    }
    if (parentId && Widget.storage && typeof Widget.storage.set === "function") {
      Widget.storage.set("jvr.guangya_parent_id", parentId);
    }
    var minMb =
      getText(params && params.magnet_min_video_mb) ||
      getText(params && params.min_video_mb) ||
      "";
    if (!minMb && params && params.global) {
      minMb = getText(params.global.magnet_min_video_mb) || getText(params.global.min_video_mb) || "";
    }
    if (!minMb && params && params.globalParams) {
      if (Array.isArray(params.globalParams)) {
        for (var m = 0; m < params.globalParams.length; m++) {
          var it3 = params.globalParams[m];
          if (!it3) continue;
          var n3 = getText(it3.name || it3.key);
          if (n3 === "magnet_min_video_mb" || n3 === "min_video_mb") {
            minMb = getText(it3.value != null ? it3.value : it3.val);
            if (minMb) break;
          }
        }
      } else {
        minMb =
          getText(params.globalParams.magnet_min_video_mb) ||
          getText(params.globalParams.min_video_mb) ||
          "";
      }
    }
    if (minMb !== "" && Widget.storage && typeof Widget.storage.set === "function") {
      Widget.storage.set("jvr.magnet_min_video_mb", minMb);
    }
  } catch (e) {}
}

function mergeRequestParams(params) {
  // Forward 常传空对象 {}，不能用 || 回退；与上次列表参数合并
  return Object.assign({}, lastRequestParams || {}, params || {});
}

async function loadActressPower(params) {
  params = params || {};
  rememberParams(params);
  try {
    var peopleId = resolvePeopleIdFromParams(params);
    var actress = getText(params.actress || "");
    var focus = peopleId || actress;
    // 必须选择筛选女友（或 peopleId）后返回该女友影片
    if (!focus) {
      console.warn("[javranking][loadActressPower] 未选择筛选女友");
      return [];
    }
    var index = await getSearchIndex(params);
    var codeMap = buildCodeMap(index);
    console.log("[javranking][loadActressPower] focus=", focus);
    return await loadActressWorksByName(focus, index, codeMap, params);
  } catch (error) {
    console.error("[javranking][loadActressPower] 失败:", error.message || error);
    throw error;
  }
}

async function loadDetail(link, params) {
  // 对齐 javverse：详情常只有 link / 空对象，合并上次列表请求参数
  params = mergeRequestParams(params);
  rememberParams(params);
  try {
    var raw = getText(link);
    var owned = parseOwnedLink(raw);
    if (!owned) {
      console.warn("[javranking][loadDetail] 非本站链接:", raw);
      return null;
    }
    if (owned.kind === "code") {
      var meta = await resolveVideoIdByCode(owned.code, params);
      if (!meta) return null;
      return await loadVideoDetail({ kind: "video", videoId: String(meta.videoId), code: meta.code }, params);
    }
    if (owned.kind === "video") return await loadVideoDetail(owned, params);
    if (owned.kind === "actress") return await loadActressDetail(owned, params);
    if (owned.kind === "magnet") {
      if (typeof handleGuangyaMagnetSave === "function") {
        return await handleGuangyaMagnetSave(owned.hash, params || lastRequestParams || {});
      }
      return await loadMagnetDetail(owned, params);
    }
    return null;
  } catch (error) {
    console.error("[javranking][loadDetail] 失败:", error.message || error);
    throw error;
  }
}

async function loadResource(params) {
  params = params || lastRequestParams || {};
  rememberParams(params);
  try {
    var raw = params.link != null ? params.link : params.id;
    var owned = parseOwnedLink(raw);
    if (!owned) return [];
    if (owned.kind === "magnet") {
      var cached = readMagnetCache(owned.hash);
      if (!cached || !cached.magnet) return [];
      // 磁力不是可播直链；返回空，详情里已展示可复制链接
      return [];
    }
    if (owned.kind !== "video") return [];
    var videoId = owned.videoId;
    if (!videoId && owned.code) {
      var meta = await resolveVideoIdByCode(owned.code, params);
      if (!meta) return [];
      videoId = String(meta.videoId);
    }
    if (!videoId) return [];
    var preview = sitePreviewUrl(videoId);
    if (!preview) return [];
    return [
      {
        name: "JavRanking 预告片",
        description: "本站预告片 MP4",
        url: preview,
        customHeaders: { Referer: SITE_ORIGIN + "/", "User-Agent": UA },
        playerType: "app",
      },
    ];
  } catch (error) {
    console.error("[javranking][loadResource] 失败:", error.message || error);
    throw error;
  }
}

/* ========================= v1.2 extras: size sort / today / actress filters ========================= */

function parseSizeToMb(sizeText) {
  var s = getText(sizeText).toUpperCase().replace(/,/g, "");
  if (!s) return 0;
  var m = s.match(/([\d.]+)\s*(TB|GB|MB|KB|B)?/);
  if (!m) return 0;
  var n = Number(m[1]);
  if (!Number.isFinite(n)) return 0;
  var unit = m[2] || "MB";
  if (unit === "TB") return n * 1024 * 1024;
  if (unit === "GB") return n * 1024;
  if (unit === "MB") return n;
  if (unit === "KB") return n / 1024;
  return n / (1024 * 1024);
}

function sortMagnetsBySizeDesc(magnets) {
  return (magnets || []).slice().sort(function (a, b) {
    return parseSizeToMb(b && b.size) - parseSizeToMb(a && a.size);
  });
}

function isFemaleEntity(ent) {
  if (!ent) return false;
  var kind = getText(ent.kind).toLowerCase();
  if (kind && kind !== "actor" && kind !== "actress") return false;
  var gender = getText(ent.gender).toLowerCase();
  if (gender === "male" || gender === "man") return false;
  var name = getText(ent.name);
  if (!name || name.length < 2) return false;
  if (/^[\(\)\?\*·.\s]+$/.test(name)) return false;
  if (/计算规则|algorithm|rules?/i.test(name)) return false;
  return true;
}

function isFc2LikeCode(code) {
  var c = normalizeCode(code) || getText(code).toUpperCase();
  return /^FC2([-_]?\d)/i.test(c) || /^FC2PPV/i.test(c);
}

/** 有码且非 FC2（随机神作 / 今天冲谁默认制式） */
function isPreferredCensoredVideo(v) {
  if (!v || !v.videoId) return false;
  if (isFc2LikeCode(v.code)) return false;
  var scope = getText(v.scope).toLowerCase();
  // 无 scope 时仍排除 FC2；有 scope 则必须 censored
  if (scope && scope !== "censored") return false;
  return true;
}

function normalizeTodayScope(params) {
  var s = getText((params && params.scope) || "censored").toLowerCase();
  if (s === "all" || s === "censored" || s === "uncensored" || s === "fc2") return s;
  return "censored";
}

function videoMatchesTodayScope(v, scope) {
  if (!v || !v.videoId) return false;
  scope = getText(scope || "censored").toLowerCase();
  if (scope === "all") return true;
  if (scope === "censored") return isPreferredCensoredVideo(v);
  var vs = getText(v.scope).toLowerCase();
  if (scope === "fc2") return isFc2LikeCode(v.code) || vs === "fc2";
  if (scope === "uncensored") {
    if (isFc2LikeCode(v.code) || vs === "fc2") return false;
    return !vs || vs === "uncensored";
  }
  return true;
}

function buildActressKeySetForScope(index, scope) {
  scope = getText(scope || "censored").toLowerCase();
  if (scope === "censored") return buildPreferredCensoredActressKeySet(index);
  if (!index) return Object.create(null);
  var cacheKey = "_jvrActressKeys_" + scope;
  if (index[cacheKey]) return index[cacheKey];
  var keys = Object.create(null);
  if (scope === "all") {
    index[cacheKey] = keys;
    return keys;
  }
  var videos = index.videos || [];
  for (var i = 0; i < videos.length; i++) {
    var v = videos[i];
    if (!videoMatchesTodayScope(v, scope)) continue;
    var links = v.actorLinks;
    if (!Array.isArray(links)) continue;
    for (var j = 0; j < links.length; j++) {
      var a = links[j] || {};
      var gender = getText(a.gender).toLowerCase();
      if (gender && gender !== "female") continue;
      var n = getText(a.name).toLowerCase();
      var slug = getText(a.slug).toLowerCase();
      if (n) keys[n] = 1;
      if (slug) keys[slug] = 1;
    }
  }
  index[cacheKey] = keys;
  return keys;
}

/** 一次扫描 videos，建立「有有码非FC2作品」的女优 name/slug 集合（O(V) 缓存） */
function buildPreferredCensoredActressKeySet(index) {
  if (!index) return Object.create(null);
  if (index._jvrCensoredActressKeys) return index._jvrCensoredActressKeys;
  var keys = Object.create(null);
  var videos = index.videos || [];
  for (var i = 0; i < videos.length; i++) {
    var v = videos[i];
    if (!isPreferredCensoredVideo(v)) continue;
    var links = v.actorLinks;
    if (!Array.isArray(links)) continue;
    for (var j = 0; j < links.length; j++) {
      var a = links[j] || {};
      var gender = getText(a.gender).toLowerCase();
      if (gender && gender !== "female") continue;
      var n = getText(a.name).toLowerCase();
      var slug = getText(a.slug).toLowerCase();
      if (n) keys[n] = 1;
      if (slug) keys[slug] = 1;
    }
  }
  index._jvrCensoredActressKeys = keys;
  return keys;
}

function actressInCensoredKeySet(ent, keySet) {
  if (!ent || !keySet) return false;
  var name = getText(ent.name).toLowerCase();
  var slug = getText(ent.slug).toLowerCase();
  if (name && keySet[name]) return true;
  if (slug && keySet[slug]) return true;
  if (Array.isArray(ent.aliases)) {
    for (var i = 0; i < ent.aliases.length; i++) {
      var al = getText(ent.aliases[i]).toLowerCase();
      if (al && keySet[al]) return true;
    }
  }
  return false;
}

function listActressEntities(index, opts) {
  opts = opts || {};
  var kw = getText(opts.keyword).toLowerCase();
  var minScore = Number(opts.minScore || 0) || 0;
  var scope = getText(opts.scope || (opts.censoredOnly ? "censored" : "")).toLowerCase();
  var censoredOnly = !!opts.censoredOnly || scope === "censored";
  var requireAvatar = !!opts.requireAvatar;
  var preferAvatar = !!opts.preferAvatar;
  var filterByScope = scope === "censored" || scope === "uncensored" || scope === "fc2" || censoredOnly;
  var keySet = filterByScope
    ? buildActressKeySetForScope(index, scope || "censored")
    : null;
  var withAvatar = [];
  var withoutAvatar = [];
  (index.entities || []).forEach(function (e) {
    if (!isFemaleEntity(e)) return;
    var score = Number(e.score || 0) || 0;
    if (score < minScore) return;
    if (kw) {
      var name = getText(e.name).toLowerCase();
      var slug = getText(e.slug).toLowerCase();
      var aliases = Array.isArray(e.aliases) ? e.aliases.join(" ").toLowerCase() : "";
      if (name.indexOf(kw) < 0 && slug.indexOf(kw) < 0 && aliases.indexOf(kw) < 0) return;
    }
    if (keySet && !actressInCensoredKeySet(e, keySet)) return;
    var hasAvatar = !!resolveActressAvatar(e, e.slug);
    if (requireAvatar && !hasAvatar) return;
    if (preferAvatar && hasAvatar) withAvatar.push(e);
    else if (preferAvatar) withoutAvatar.push(e);
    else withAvatar.push(e);
  });
  var byScore = function (a, b) {
    return (Number(b.score || 0) || 0) - (Number(a.score || 0) || 0);
  };
  withAvatar.sort(byScore);
  withoutAvatar.sort(byScore);
  return withAvatar.concat(withoutAvatar);
}

function mapActressEntity(ent, extra) {
  ent = ent || {};
  extra = extra || {};
  var name = getText(ent.name);
  var slug = getText(ent.slug) || name;
  var avatar = resolveActressAvatar(ent, slug) || getText(extra.avatar) || "";
  var score = Number(ent.score || extra.score || 0) || 0;
  var descParts = [];
  if (score) descParts.push("战力 " + score);
  if (ent.videoCount) descParts.push("关联 " + ent.videoCount + " 部");
  if (extra.desc) descParts.push(extra.desc);
  return {
    id: String(slug || name),
    type: "url",
    mediaType: "person",
    title: name,
    // 不设 link：横向人物点击走 peopleId 重开列表；避免只打开空女优详情
    rating: score,
    description: descParts.join(" · "),
    coverUrl: avatar || undefined,
    posterPath: avatar || undefined,
    backdropPath: avatar || undefined,
    avatar: avatar || undefined,
  };
}

function mapPowerSectionToPerson(sec, entityMap, index) {
  var ent =
    findActressEntity(entityMap, sec.name) ||
    findActressEntityInIndex(index, sec.name, sec.score);
  var displayName = getText((ent && ent.name) || sec.name);
  var slug = getText(ent && ent.slug) || "";
  var peopleKey = slug || displayName;
  // 只用女优头像（search-index imageUrl / actor OG），禁止影片封面
  var avatar = resolveActressAvatar(ent, slug);
  return {
    id: String(peopleKey),
    type: "url",
    mediaType: "person",
    title: displayName,
    // 不设 link：横向人物点击注入 peopleId 返回作品列表
    rating: Number((ent && ent.score) || sec.score || 0) || 0,
    description:
      "战力 " +
      (Number((ent && ent.score) || sec.score || 0) || 0) +
      " · 代表作 " +
      ((sec.works && sec.works.length) || (ent && ent.videoCount) || 0),
    coverUrl: avatar || undefined,
    posterPath: avatar || undefined,
    backdropPath: avatar || undefined,
    avatar: avatar || undefined,
  };
}

function buildDetailFromIndex(meta, params) {
  meta = meta || {};
  var videoId = String(meta.videoId || meta.id || "").replace(/[^\d]/g, "");
  var code = normalizeCode(meta.code);
  var title = getText(meta.title || code || videoId);
  if (code && title.toUpperCase().indexOf(code) !== 0) title = code + " " + title;
  var coverCand = resolveVideoCoverCandidates(videoId, meta.coverUrl);
  var covers = applyHdCovers(code || title, coverCand.primary, coverCand.poster);
  var preview = sitePreviewUrl(videoId);
  var actors = [];
  var peoples = [];
  if (Array.isArray(meta.actorLinks)) {
    meta.actorLinks.forEach(function (a) {
      var n = getText(a && a.name);
      if (!n) return;
      actors.push(n);
      var gender = getText(a.gender).toLowerCase();
      var slug = getText(a.slug);
      peoples.push({
        id: String(slug || n),
        type: "url",
        mediaType: "person",
        title: n,
        role: gender === "male" ? "男优" : "演员",
        link: buildActressLink(slug || n),
        avatar: resolveActressAvatar(null, slug) || undefined,
      });
    });
  }
  var descParts = [];
  if (meta.score != null && meta.score !== "") descParts.push("战力 " + meta.score);
  if (actors.length) descParts.push(actors.slice(0, 4).join(" / "));
  if (meta.releaseDate) descParts.push(String(meta.releaseDate).slice(0, 10));
  if (meta.scope) descParts.push(meta.scope);
  var trailers = [];
  var coverForTrailer = covers.coverUrl || coverCand.primary || "";
  try {
    if (typeof buildDetailTrailers === "function") trailers = buildDetailTrailers(preview, coverForTrailer);
    else if (preview) trailers = [{ coverUrl: coverForTrailer || undefined, url: preview }];
  } catch (e) {
    if (preview) trailers = [{ coverUrl: coverForTrailer || undefined, url: preview }];
  }
  return {
    id: code || videoId,
    type: "url",
    mediaType: "movie",
    title: title,
    link: buildVideoLink(videoId, code),
    releaseDate: meta.releaseDate ? String(meta.releaseDate).slice(0, 10) : "",
    rating: Number(meta.score || 0) || 0,
    description: descParts.join(" · "),
    coverUrl: covers.coverUrl || coverCand.primary || undefined,
    posterPath: covers.posterPath || coverCand.poster || undefined,
    detailPoster: covers.detailPoster || covers.posterPath || coverCand.poster || undefined,
    backdropPath: covers.backdropPath || coverCand.backdrop || undefined,
    previewUrl: preview || undefined,
    videoUrl: preview || undefined,
    peoples: peoples.length ? peoples : undefined,
    trailers: trailers.length ? trailers : undefined,
  };
}

async function enrichDetailFromHtml(base, videoId, params) {
  var html = "";
  try {
    html = await fetchVideoDetailHtml(videoId, params);
  } catch (e) {
    console.warn("[javranking] 详情 HTML 不可用，使用 JSON 基础信息:", e && e.message);
    return base;
  }
  var ld = extractJsonLdMovie(html) || {};
  var magnets = sortMagnetsBySizeDesc(extractMagnetsFromHtml(html));
  var stills = extractStillsFromHtml(html);
  var genres = extractGenresFromHtml(html);
  var $ = loadHtml(html);
  if ($ && (!magnets.length || !stills.length || !genres.length)) {
    try {
      if (!magnets.length) {
        $(".magnet-item").each(function () {
          var a = $(this).find("a.magnet-item__name").first();
          var href = decodeHtmlEntities(a.attr("href") || "");
          if (!href) return;
          magnets.push({
            name: getText(a.text()) || "磁力",
            magnet: href,
            size: getText($(this).find(".magnet-tag--size").first().text()),
            tags: $(this)
              .find(".magnet-tag")
              .not(".magnet-tag--size")
              .map(function () {
                return getText($(this).text());
              })
              .get(),
          });
        });
        magnets = sortMagnetsBySizeDesc(magnets);
      }
      if (!stills.length) {
        $("img").each(function () {
          var src = $(this).attr("src") || $(this).attr("data-src") || "";
          if (/jdbstatic\.com\/samples\//i.test(src)) stills.push(src);
        });
      }
      if (!genres.length) {
        $('a[href*="/tags/"]').each(function () {
          var t = getText($(this).text());
          if (t) genres.push({ id: t, title: t });
        });
      }
    } catch (e2) {
      console.warn("[javranking] cheerio 补充解析失败:", e2 && e2.message);
    }
  }

  var code = normalizeCode(ld.alternateName || base.id || "");
  var title = getText(ld.name || base.title || code);
  if (code && title.toUpperCase().indexOf(code) !== 0) title = code + " " + title;

  // 详情封面：优先 DMM/MGStage 高清，失败回退本站
  var coverCand = resolveVideoCoverCandidates(videoId, getText(ld.image) || base.coverUrl);
  var covers = await applyHdCoversAsync(code || title, coverCand.primary, coverCand.poster);
  var coverMain =
    covers.coverUrl ||
    covers.backdropPath ||
    coverCand.primary ||
    "";
  var preview = (ld.video && (ld.video.contentUrl || ld.video.url)) || sitePreviewUrl(videoId) || base.previewUrl;
  var rating = (ld.aggregateRating && Number(ld.aggregateRating.ratingValue)) || base.rating || 0;
  var durationMin = durationFromIso(ld.duration) || base.duration || 0;
  var releaseDate = getText(ld.datePublished).slice(0, 10) || base.releaseDate || "";
  var maker = (ld.productionCompany && ld.productionCompany.name) || "";

  // 演员头像尽量用 JSON-LD；search-index 命中缓存时补全，失败不阻塞
  var entityMap = {};
  try {
    var index = await getSearchIndex(params);
    entityMap = buildEntityMap(index);
  } catch (e3) {}
  var peoples = peopleFromLd(ld, entityMap);
  if (!peoples.length && base.peoples) peoples = base.peoples;

  // 剧照直接用本站/页面图，不做 DMM 高清探测，加快详情加载
  var backdropPaths = [];
  stills.forEach(function (u) {
    if (u && backdropPaths.indexOf(u) < 0) backdropPaths.push(u);
  });
  var siteOg = siteOgUrl(videoId);
  if (siteOg && backdropPaths.indexOf(siteOg) < 0) backdropPaths.unshift(siteOg);

  if (maker && !genres.some(function (g) {
    return g.id === maker;
  })) {
    genres.unshift({ id: maker, title: maker });
  }

  var relatedItems = buildMagnetRelatedItems(magnets, {
    code: code,
    title: title,
    cover: coverMain,
  });

  var descParts = [];
  if (maker) descParts.push("片商: " + maker);
  if (releaseDate) descParts.push(releaseDate);
  if (durationMin) descParts.push(durationMin + " 分钟");
  if (magnets.length) descParts.push("磁力×" + magnets.length + "（相似作品区，按体积排序，点击转存光鸭）");
  if (ld.aggregateRating && ld.aggregateRating.ratingCount) {
    descParts.push(ld.aggregateRating.ratingCount + " 人评");
  }

  var trailers = [];
  try {
    if (typeof buildDetailTrailers === "function") trailers = buildDetailTrailers(preview, coverMain);
    else if (preview) trailers = [{ coverUrl: coverMain || undefined, url: preview }];
  } catch (e5) {
    if (preview) trailers = [{ coverUrl: coverMain || undefined, url: preview }];
  }

  return {
    id: code || videoId,
    type: "url",
    mediaType: "movie",
    title: title,
    link: buildVideoLink(videoId, code),
    releaseDate: releaseDate,
    rating: rating,
    duration: durationMin || undefined,
    durationText: durationMin ? durationMin + "分钟" : "",
    description: descParts.join(" · ") || base.description,
    coverUrl: covers.coverUrl || coverCand.primary || undefined,
    posterPath: covers.posterPath || coverCand.poster || undefined,
    detailPoster: covers.detailPoster || covers.posterPath || coverCand.poster || undefined,
    backdropPath: covers.backdropPath || coverCand.backdrop || coverCand.primary || undefined,
    backdropPaths: backdropPaths.length ? backdropPaths : undefined,
    previewUrl: preview || undefined,
    videoUrl: preview || undefined,
    peoples: peoples.length ? peoples : undefined,
    genreItems: genres.length ? genres : undefined,
    genreTitle: maker || undefined,
    trailers: trailers.length ? trailers : undefined,
    relatedItems: relatedItems.length ? relatedItems : undefined,
  };
}

async function loadTodayWho(params) {
  params = params || {};
  rememberParams(params);
  try {
    var scope = normalizeTodayScope(params);
    var peopleId = resolvePeopleIdFromParams(params);
    var index = await getSearchIndex(params);
    var codeMap = buildCodeMap(index);
    var scopeLabel =
      scope === "censored"
        ? "有码"
        : scope === "uncensored"
          ? "无码"
          : scope === "fc2"
            ? "FC2"
            : "全部";

    // rex: 横向人物点击会重开「本模块」并带 peopleId → 必须返回该女友作品，不能再返回看谁列表
    if (peopleId) {
      console.log("[javranking][loadTodayWho] peopleId=", peopleId, "scope=", scope);
      return await loadActressWorksByName(
        peopleId,
        index,
        codeMap,
        Object.assign({}, params, {
          scope: scope,
          censoredOnly: scope === "censored",
        })
      );
    }

    var count = Math.max(6, Math.min(48, Number(params.count || 24) || 24));
    // 一次扫描缓存女优集合 + 优先有头像，避免对每位女优全表扫作品
    var pool = listActressEntities(index, {
      minScore: Number(params.minScore || 1) || 1,
      scope: scope,
      censoredOnly: scope === "censored",
      preferAvatar: true,
    });
    if (!pool.length) {
      var keySet = buildActressKeySetForScope(index, scope);
      var md = await fetchMarkdown("most-awarded-actors", params);
      var sections = parsePowerSections(md);
      pool = sections
        .map(function (sec) {
          return findActressEntityInIndex(index, sec.name) || {
            name: sec.name,
            score: sec.score,
            slug: "",
            imageUrl: "",
            videoCount: (sec.works && sec.works.length) || 0,
          };
        })
        .filter(function (ent) {
          if (scope === "all") return true;
          return actressInCensoredKeySet(ent, keySet) || resolveActressAvatar(ent, ent.slug);
        });
    }
    var picked = shuffleCopy(pool.slice(0, Math.max(count * 6, Math.min(pool.length, 120)))).slice(0, count);
    return picked.map(function (ent) {
      return mapActressEntity(ent, { desc: "今天冲谁·" + scopeLabel });
    });
  } catch (error) {
    console.error("[javranking][loadTodayWho] 失败:", error.message || error);
    throw error;
  }
}

async function loadTodayWhat(params) {
  params = params || {};
  rememberParams(params);
  try {
    var byPeople = await loadWorksIfPeopleId(params);
    if (byPeople) return byPeople;
    var count = Math.max(6, Math.min(48, Number(params.count || 24) || 24));
    var scope = normalizeTodayScope(params);
    var index = await getSearchIndex(params);
    var pool = (index.videos || []).filter(function (v) {
      if (!videoMatchesTodayScope(v, scope)) return false;
      return Number(v.score || 0) > 0 || (Array.isArray(v.rankingAppearances) && v.rankingAppearances.length);
    });
    if (!pool.length) {
      pool = (index.videos || []).filter(function (v) {
        return videoMatchesTodayScope(v, scope);
      });
    }
    // 偏向高分：先取前 40% 高分再随机
    pool = pool.slice().sort(function (a, b) {
      return (Number(b.score || 0) || 0) - (Number(a.score || 0) || 0);
    });
    var topN = Math.max(count * 4, Math.min(pool.length, Math.ceil(pool.length * 0.4)));
    var picked = shuffleCopy(pool.slice(0, topN)).slice(0, count);
    var items = picked.map(function (v) {
      return mapIndexVideo(v, { rankLabel: "今天冲什么" });
    });
    return await enrichItemsWithVerifiedHdCovers(items);
  } catch (error) {
    console.error("[javranking][loadTodayWhat] 失败:", error.message || error);
    throw error;
  }
}

/* ========================= 光鸭磁力转存（精简自 javdb） ========================= */
var GUANGYA_ACCOUNT_URL = "https://account.guangyapan.com";
var GUANGYA_API_BASE = "https://api.guangyapan.com";
var GUANGYA_SITE = "https://www.guangyapan.com";
var GUANGYA_CLIENT_ID = "aMe-8VSlkrbQXpUR";
var GUANGYA_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1";
var GY_LINK_PREFIX = "gy:";
var GY_ACCESS_STORE = "jvr.guangya.access.v1";
var GY_DID_STORE = "jvr.guangya.did.v1";
var _gyTokenRefreshInflight = null;
var GY_VIDEO_EXTS = { mp4: 1, mkv: 1, avi: 1, wmv: 1, mov: 1, m4v: 1, ts: 1, flv: 1, rmvb: 1, webm: 1, "3gp": 1 };
var GY_AUTO_INDEX = 10000;

function gyRandomHex(len) {
  var out = "";
  for (var i = 0; i < len; i++) out += ((Math.random() * 16) | 0).toString(16);
  return out;
}

function gySafeText(v) {
  return String(v == null ? "" : v).replace(/\s+/g, " ").trim();
}

function gyNormalizeToken(token) {
  token = gySafeText(token);
  if (!token) return "";
  if (token.indexOf("gy.") === 0 || token.indexOf("gy-") === 0) return token;
  return token;
}

function gyReadStore(key) {
  try {
    return Widget.storage.get(key);
  } catch (e) {
    return "";
  }
}

function gyWriteStore(key, value) {
  try {
    Widget.storage.set(key, value);
  } catch (e) {}
}

async function gyEnsureDid() {
  var id = gySafeText(gyReadStore(GY_DID_STORE)).toLowerCase();
  if (id) return id;
  id = gyRandomHex(16);
  gyWriteStore(GY_DID_STORE, id);
  return id;
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

function gyExtractStatus(resp) {
  if (!resp || typeof resp !== "object") return 0;
  return Number(resp.status || resp.statusCode || resp.status_code || 0) || 0;
}

function gyParsePayload(resp) {
  if (!resp) return null;
  if (resp.data !== undefined) return resp.data;
  if (resp.body !== undefined) {
    if (typeof resp.body === "string") {
      try {
        return JSON.parse(resp.body);
      } catch (e) {
        return resp.body;
      }
    }
    return resp.body;
  }
  return resp;
}

async function gyHttpPost(url, headers, bodyObj, timeoutMs) {
  var body = bodyObj || {};
  var opts = {
    headers: headers,
    allow_redirects: true,
    timeout: timeoutMs || 30000,
    validate_status: false,
  };
  var resp = await Widget.http.post(url, body, opts);
  var status = gyExtractStatus(resp);
  var data = gyParsePayload(resp);
  if (status >= 400) {
    var msg =
      (data && (data.message || data.msg || data.error_description || data.error)) ||
      "HTTP " + status;
    throw new Error(String(msg));
  }
  return data;
}

function gyReadSession() {
  try {
    var raw = gyReadStore(GY_ACCESS_STORE);
    if (!raw) return null;
    return typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (e) {
    return null;
  }
}

function gyWriteSession(session) {
  gyWriteStore(GY_ACCESS_STORE, JSON.stringify(session || {}));
}

async function gyEnsureAccessToken(refreshToken, did) {
  refreshToken = gyNormalizeToken(refreshToken);
  if (!refreshToken) throw new Error("未配置光鸭 refresh_token");
  if (_gyTokenRefreshInflight) return _gyTokenRefreshInflight;
  _gyTokenRefreshInflight = (async function () {
    try {
      var session = gyReadSession();
      if (
        session &&
        session.accessToken &&
        Number(session.expiresAt || 0) > Date.now() + 60000 &&
        (session.refreshToken === refreshToken || session.sourceRefreshToken === refreshToken)
      ) {
        return session.accessToken;
      }
      var live =
        session && session.refreshToken && session.sourceRefreshToken === refreshToken
          ? session.refreshToken
          : refreshToken;
      var data = await gyHttpPost(
        GUANGYA_ACCOUNT_URL + "/v1/auth/token",
        gyAccountHeaders(did),
        { client_id: GUANGYA_CLIENT_ID, grant_type: "refresh_token", refresh_token: live },
        25000
      );
      if (!data || !data.access_token) throw new Error("刷新光鸭 token 失败");
      var newRefresh = gyNormalizeToken(data.refresh_token) || live;
      gyWriteSession({
        refreshToken: newRefresh,
        sourceRefreshToken: refreshToken,
        accessToken: data.access_token,
        expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000,
      });
      try {
        Widget.storage.set("jvr.guangya_token", newRefresh);
      } catch (e) {}
      return data.access_token;
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
    var s = gySafeText(values[i]);
    if (s) return s;
  }
  return "";
}

function gyExtractBtSubfiles(payload) {
  var data = payload && payload.data;
  var bt = data && data.btResInfo;
  var subs = bt && bt.subfiles;
  if (!Array.isArray(subs) || !subs.length) return [];
  var entries = [];
  for (var i = 0; i < subs.length; i++) {
    var s = subs[i] || {};
    var idx = gyToNumber(s.fileIndex != null ? s.fileIndex : s.index != null ? s.index : i);
    if (idx == null || idx < 0) idx = i;
    entries.push({
      index: idx,
      name: gyPickName([s.fileName, s.file_name, s.name, s.path]),
      size: gyToNumber(s.fileSize != null ? s.fileSize : s.size) || 0,
    });
  }
  return entries;
}

function gyIsVideoName(name) {
  var ext = String(name || "")
    .split(".")
    .pop()
    .toLowerCase();
  return !!GY_VIDEO_EXTS[ext];
}

// 对齐 javdb：广告/小文件过滤
var GY_DEFAULT_BLOCK_PATTERNS = [
  "广告|推广|宣传|加群|更多资源|最新地址|影视大站|草榴|91porn|91\\.tv|1024\\.org|1024la|直播|社[區区]|情[報报]|信誉|uu美少女",
  "(?:^|[/\\\\_.\\-\\s])(?:sample|preview|trailer|预告|预览|样片|精彩花絮)(?:[/\\\\_.\\-\\s]|\\.|$)",
  "\\.(txt|url|nfo|htm|html|jpg|jpeg|png|gif|exe|apk|torrent)$",
];

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
    ? raw
        .split(/[;|]/)
        .map(function (x) {
          return String(x || "").trim();
        })
        .filter(Boolean)
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

function gyIsObviousJunk(name) {
  return /\.(txt|url|nfo|htm|html|jpg|jpeg|png|gif|exe|apk|torrent|srt|ass)$/i.test(gyBasename(name));
}

function gyIsLikelyVideo(entry) {
  if (gyIsVideoName(entry && entry.name)) return true;
  if (Number((entry && entry.size) || 0) >= 50 * 1024 * 1024) return true;
  return false;
}

function gyMaxVideoSize(entries) {
  var max = 0;
  for (var i = 0; i < (entries || []).length; i++) {
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
  var name = String((entry && entry.name) || "");
  if (gyIsObviousJunk(name)) return { blocked: true, reason: "junk" };
  for (var i = 0; i < patterns.length; i++) {
    if (patterns[i].test(name)) return { blocked: true, reason: "pattern" };
  }
  if (videoOnly && name && !gyIsLikelyVideo(entry)) return { blocked: true, reason: "non-video" };
  var size = Number((entry && entry.size) || 0);
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
  var hasMultipart = videos.some(function (e) {
    return gyIsMultiPartName(e.name);
  });
  var maxSize = Math.max.apply(
    null,
    videos.map(function (e) {
      return Number(e.size || 0);
    })
  );
  var floor = hasMultipart ? maxSize * 0.45 : maxSize * 0.3;
  var survivors = kept.filter(function (e) {
    if (!gyIsLikelyVideo(e)) return true;
    return gyIsMultiPartName(e.name) || Number(e.size || 0) >= floor;
  });
  if (survivors.length >= kept.length) return { kept: kept, blocked: blocked };
  var survivorMap = {};
  survivors.forEach(function (e) {
    survivorMap[e.index] = 1;
  });
  var newBlocked = blocked.slice();
  kept.forEach(function (e) {
    if (!survivorMap[e.index]) newBlocked.push({ entry: e, reason: "pruned" });
  });
  return { kept: survivors, blocked: newBlocked };
}

function gyPickVideoFallback(entries, patterns) {
  var candidates = [];
  for (var i = 0; i < (entries || []).length; i++) {
    var entry = entries[i];
    var name = String((entry && entry.name) || "");
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
  if (!candidates.length) candidates = (entries || []).filter(gyIsLikelyVideo);
  if (!candidates.length) candidates = (entries || []).slice();
  candidates.sort(function (a, b) {
    return Number(b.size || 0) - Number(a.size || 0);
  });
  return candidates[0] || null;
}

function gyFilterResolvedFiles(entries, cfg) {
  cfg = cfg || {};
  var patterns = gyParseBlockPatterns(cfg);
  var minVideoMb = Number(cfg.magnet_min_video_mb || 0);
  if (!Number.isFinite(minVideoMb) || minVideoMb < 0) minVideoMb = 0;
  var videoOnly = String(cfg.magnet_video_only || "1") !== "0";
  var maxVideoSize = gyMaxVideoSize(entries);
  var kept = [];
  var blocked = [];
  for (var i = 0; i < (entries || []).length; i++) {
    var verdict = gyShouldBlock(entries[i], patterns, minVideoMb, videoOnly, maxVideoSize);
    if (verdict.blocked) blocked.push({ entry: entries[i], reason: verdict.reason });
    else kept.push(entries[i]);
  }
  if (!kept.length && entries && entries.length) {
    var fallback = gyPickVideoFallback(entries, patterns);
    if (fallback) {
      kept = [fallback];
      blocked = entries
        .filter(function (e) {
          return e.index !== fallback.index;
        })
        .map(function (e) {
          return { entry: e, reason: "fallback" };
        });
    }
  }
  return gyPruneDominantVideo(kept, blocked);
}

// 兼容旧调用名
function gyFilterVideoFiles(entries, cfg) {
  return gyFilterResolvedFiles(entries, cfg || {});
}

function resolveMagnetMinVideoMb(params) {
  params = mergeRequestParams(params);
  var raw =
    gySafeText(gyPickFromParamsTree(params, ["magnet_min_video_mb", "min_video_mb"])) ||
    gySafeText(gyReadStore("jvr.magnet_min_video_mb")) ||
    gySafeText(gyReadStore("javranking.cc.globalParams.magnet_min_video_mb")) ||
    "";
  if (!raw) {
    try {
      if (typeof Widget !== "undefined" && Widget.globalParams && typeof Widget.globalParams.then !== "function") {
        raw = gySafeText(gyPickFromObject(Widget.globalParams, ["magnet_min_video_mb", "min_video_mb"]));
      }
    } catch (e) {}
  }
  var n = Number(raw);
  if (!Number.isFinite(n) || n < 0) n = 0;
  return n;
}

async function gyResolveResource(accessToken, did, magnet) {
  return gyHttpPost(
    GUANGYA_API_BASE + "/nd.bizcloudcollection.s/v1/resolve_res",
    gyApiHeaders(accessToken, did),
    { url: magnet },
    45000
  );
}

async function gyCreateTask(accessToken, did, taskInput) {
  var body = {
    url: String(taskInput.url || "").trim(),
    parentId: gySafeText(taskInput.parentId),
  };
  if (taskInput.newName) body.newName = String(taskInput.newName).slice(0, 180);
  if (taskInput.fileIndexes && taskInput.fileIndexes.length) body.fileIndexes = taskInput.fileIndexes;
  return gyHttpPost(
    GUANGYA_API_BASE + "/nd.bizcloudcollection.s/v1/create_task",
    gyApiHeaders(accessToken, did),
    body,
    30000
  );
}

function gyTaskOk(task) {
  if (!task) return false;
  var msg = String(task.msg || "").toLowerCase();
  if (msg === "success" || msg === "") return true;
  if (task.code === 0) return true;
  return !!task.data;
}

async function saveMagnetToGuangya(magnet, cfg) {
  cfg = cfg || {};
  var did = await gyEnsureDid();
  var accessToken = await gyEnsureAccessToken(cfg.guangya_token || cfg.refresh_token, did);
  var resolved = null;
  var entries = [];
  try {
    resolved = await gyResolveResource(accessToken, did, magnet);
    entries = gyExtractBtSubfiles(resolved);
  } catch (e) {
    console.warn("[javranking][guangya] resolve 失败，尝试直接提交:", e && e.message);
  }
  var filtered = entries.length
    ? gyFilterResolvedFiles(entries, {
        magnet_min_video_mb: cfg.magnet_min_video_mb,
        magnet_block_patterns: cfg.magnet_block_patterns,
        magnet_video_only: cfg.magnet_video_only,
      })
    : { kept: [], blocked: [] };
  if (entries.length && !filtered.kept.length) throw new Error("过滤后没有可转存文件");
  var resolvedUrl = gySafeText(resolved && resolved.data && resolved.data.url) || magnet;
  var taskName =
    gySafeText(resolved && resolved.data && resolved.data.btResInfo && resolved.data.btResInfo.fileName) ||
    "javranking-magnet";
  var parentId = gySafeText(cfg.guangya_parent_id || cfg.parentId);
  var indexes = filtered.kept
    .map(function (e) {
      return e.index;
    })
    .filter(function (n) {
      return Number.isFinite(Number(n)) && Number(n) >= 0;
    });
  var attempts = [
    { url: resolvedUrl, parentId: parentId, newName: taskName, fileIndexes: indexes.length ? indexes : null },
    { url: resolvedUrl, parentId: parentId, newName: taskName, fileIndexes: null },
    { url: magnet, parentId: parentId, newName: taskName, fileIndexes: null },
  ];
  // 仅当未配置目录时才允许落到根目录；避免“填了目录 ID 却存到根”
  if (!parentId) {
    attempts.push({ url: magnet, parentId: "", newName: "", fileIndexes: null });
  }
  var lastErr = null;
  for (var i = 0; i < attempts.length; i++) {
    try {
      var task = await gyCreateTask(accessToken, did, attempts[i]);
      if (gyTaskOk(task)) {
        return {
          ok: true,
          keptCount: filtered.kept.length || 1,
          blockedCount: filtered.blocked.length,
          parentId: parentId || "",
          minVideoMb: Number(cfg.magnet_min_video_mb || 0) || 0,
          task: task,
        };
      }
      lastErr = new Error("create_task 失败");
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error("光鸭转存失败");
}

// 对齐 javverse 已修复版：异步多源取参 + rememberParams 落盘；详情常不带 params
var GY_TOKEN_ALIASES = [
  "guangya_token",
  "GUANGYA_REFRESH_TOKEN",
  "guangya_refresh_token",
  "guangyaRefreshToken",
  "refresh_token",
];
var GY_PARENT_ALIASES = [
  "guangya_parent_id",
  "GUANGYA_PARENT_ID",
  "guangyaParentId",
  "parentId",
  "parent_id",
];

function gyIsPromiseLike(val) {
  return !!(val && typeof val === "object" && typeof val.then === "function");
}

function gyScanRefreshToken(text) {
  var m = String(text || "").match(/gy\.[A-Za-z0-9_\-\.~+/=]{8,}/);
  return m ? m[0] : "";
}

function gyNormalizeParamValue(val) {
  if (val === undefined || val === null) return "";
  if (typeof val === "string") return val.trim();
  if (typeof val === "number" || typeof val === "boolean") return String(val).trim();
  if (typeof val === "object") {
    if (gyIsPromiseLike(val)) return "";
    if (typeof val.value === "string" && val.value.trim()) return val.value.trim();
    if (typeof val.token === "string" && val.token.trim()) return val.token.trim();
    if (typeof val.refresh_token === "string" && val.refresh_token.trim()) return val.refresh_token.trim();
  }
  return "";
}

function gyPickFromObject(obj, aliases) {
  if (!obj || typeof obj !== "object" || gyIsPromiseLike(obj)) return "";
  if (Array.isArray(obj)) {
    for (var a = 0; a < aliases.length; a++) {
      var want = String(aliases[a] || "");
      if (!want) continue;
      for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (!item || typeof item !== "object") continue;
        var itemName = String(item.name || item.key || item.id || "").trim();
        if (itemName !== want) continue;
        var fromItem = gyNormalizeParamValue(
          item.value !== undefined ? item.value : item.val !== undefined ? item.val : item.data
        );
        if (fromItem) return fromItem;
      }
    }
    return "";
  }
  for (var j = 0; j < aliases.length; j++) {
    if (obj[aliases[j]] === undefined || obj[aliases[j]] === null) continue;
    var val = gyNormalizeParamValue(obj[aliases[j]]);
    if (val) return val;
  }
  return "";
}

function gyPickFromParamsTree(params, aliases) {
  params = params || {};
  return (
    gyPickFromObject(params, aliases) ||
    gyPickFromObject(params.global, aliases) ||
    gyPickFromObject(params.globalParams, aliases) ||
    gyPickFromObject(params.settings, aliases) ||
    ""
  );
}

function gyWidgetId() {
  try {
    return (WidgetMetadata && WidgetMetadata.id) || "javranking.cc";
  } catch (e) {
    return "javranking.cc";
  }
}

function gyStorageKeysFor(name) {
  var id = gyWidgetId();
  var keys = [
    id + ".globalParams." + name,
    id + ".global." + name,
    "forward." + id + ".globalParams." + name,
    "jvr." + name,
    name,
  ];
  // 仅 token 别名额外查兼容旧 key；勿把 token key 混进 parent 查询
  if (/token|refresh/i.test(name)) {
    keys.push("jvr.guangya_token", "guangya_refresh_token");
  }
  if (/parent/i.test(name)) {
    keys.push("jvr.guangya_parent_id");
  }
  return keys;
}

function gyReadStorageBlob(key) {
  try {
    var raw = Widget.storage.get(key);
    if (raw == null || raw === "") return null;
    if (typeof raw === "string") {
      try {
        return JSON.parse(raw);
      } catch (e) {
        return null;
      }
    }
    if (typeof raw === "object" && !gyIsPromiseLike(raw)) return raw;
  } catch (e2) {}
  return null;
}

function gyPickFromStorage(aliases) {
  var id = gyWidgetId();
  var blobKeys = [id + ".globalParams", id + ".global", "globalParams", "forward." + id + ".globalParams"];
  var b;
  for (var i = 0; i < blobKeys.length; i++) {
    b = gyReadStorageBlob(blobKeys[i]);
    var hit = gyPickFromObject(b, aliases);
    if (hit) return hit;
  }
  for (var a = 0; a < aliases.length; a++) {
    var keys = gyStorageKeysFor(aliases[a]);
    for (var k = 0; k < keys.length; k++) {
      var v = gyNormalizeParamValue(gyReadStore(keys[k]));
      if (v) return v;
    }
  }
  return "";
}

async function gyAwaitMaybe(val) {
  if (gyIsPromiseLike(val)) {
    try {
      return await val;
    } catch (e) {
      return null;
    }
  }
  return val;
}

async function resolveGuangyaTokenAsync(params) {
  params = mergeRequestParams(params);
  var raw = gyPickFromParamsTree(params, GY_TOKEN_ALIASES) || "";
  if (!raw) {
    try {
      if (typeof Widget !== "undefined" && typeof Widget.getGlobalParams === "function") {
        var all = await gyAwaitMaybe(Widget.getGlobalParams());
        raw = gyPickFromObject(all, GY_TOKEN_ALIASES);
      }
    } catch (e) {}
  }
  if (!raw) {
    try {
      if (typeof Widget !== "undefined" && Widget.globalParams) {
        var gp = await gyAwaitMaybe(Widget.globalParams);
        raw = gyPickFromObject(gp, GY_TOKEN_ALIASES);
      }
    } catch (e2) {}
  }
  if (!raw) raw = gyPickFromStorage(GY_TOKEN_ALIASES);
  var token = gyNormalizeToken(raw) || gyNormalizeToken(gyScanRefreshToken(raw));
  if (token) {
    try {
      Widget.storage.set("jvr.guangya_token", token);
    } catch (e3) {}
  }
  return token;
}

async function resolveGuangyaParentIdAsync(params) {
  params = mergeRequestParams(params);
  var raw = gyPickFromParamsTree(params, GY_PARENT_ALIASES) || "";
  if (!raw) {
    try {
      if (typeof Widget !== "undefined" && typeof Widget.getGlobalParams === "function") {
        var all = await gyAwaitMaybe(Widget.getGlobalParams());
        raw = gyPickFromObject(all, GY_PARENT_ALIASES);
      }
    } catch (e) {}
  }
  if (!raw) {
    try {
      if (typeof Widget !== "undefined" && Widget.globalParams) {
        var gp = await gyAwaitMaybe(Widget.globalParams);
        raw = gyPickFromObject(gp, GY_PARENT_ALIASES);
      }
    } catch (e2) {}
  }
  if (!raw) raw = gyPickFromStorage(GY_PARENT_ALIASES);
  raw = gySafeText(raw);
  if (raw) {
    try {
      Widget.storage.set("jvr.guangya_parent_id", raw);
    } catch (e3) {}
  }
  return raw;
}

function resolveGuangyaTokenFromParams(params) {
  return (
    gyNormalizeToken(gyPickFromParamsTree(mergeRequestParams(params), GY_TOKEN_ALIASES)) ||
    gyNormalizeToken(gyPickFromStorage(GY_TOKEN_ALIASES)) ||
    ""
  );
}

function resolveGuangyaParentId(params) {
  return (
    gySafeText(gyPickFromParamsTree(mergeRequestParams(params), GY_PARENT_ALIASES)) ||
    gySafeText(gyPickFromStorage(GY_PARENT_ALIASES)) ||
    ""
  );
}

async function handleGuangyaMagnetSave(hash, params) {
  hash = String(hash || "")
    .trim()
    .toLowerCase();
  params = mergeRequestParams(params);
  var entry = null;
  try {
    if (typeof readMagnetCache === "function") entry = readMagnetCache(hash);
  } catch (e) {}
  if (!entry) {
    try {
      var raw = Widget.storage.get((typeof MAGNET_STORE_PREFIX !== "undefined" ? MAGNET_STORE_PREFIX : "jvr.magnet.v1.") + hash);
      entry = typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch (e2) {}
  }
  var link = GY_LINK_PREFIX + hash;
  if (!entry || !entry.magnet) {
    return {
      id: hash,
      type: "url",
      title: "转存失败",
      description: "找不到磁力缓存，请返回影片详情页重新加载后再试",
      link: link,
    };
  }
  // loadDetail 通常不带 params，必须从 Widget.globalParams / storage 异步取参
  var token = await resolveGuangyaTokenAsync(params);
  var parentId = await resolveGuangyaParentIdAsync(params);
  var minVideoMb = resolveMagnetMinVideoMb(params);
  console.log(
    "[javranking][guangya] token?",
    token ? "yes(" + token.slice(0, 6) + "...)" : "no",
    "parentId?",
    parentId || "(root)",
    "minMb?",
    minVideoMb
  );
  if (!token) {
    return {
      id: hash,
      type: "url",
      title: "未配置光鸭",
      description:
        "未读到光鸭 refresh_token。请在模块「全局参数」填写 guangya_token（gy. 开头），保存后重新打开详情再点磁力转存。",
      link: link,
      coverUrl: entry.cover || undefined,
      backdropPath: entry.cover || undefined,
    };
  }
  try {
    var result = await saveMagnetToGuangya(entry.magnet, {
      guangya_token: token,
      guangya_parent_id: parentId,
      magnet_min_video_mb: minVideoMb,
      magnet_video_only: "1",
    });
    return {
      id: hash,
      type: "url",
      title: "光鸭转存已提交",
      description:
        "名称: " +
        (entry.name || entry.code || hash) +
        "\n体积: " +
        (entry.size || "-") +
        "\n目录: " +
        (parentId || "根目录") +
        "\n最小保留: " +
        (minVideoMb > 0 ? minVideoMb + " MB" : "相对体积") +
        "\n保留文件: " +
        result.keptCount +
        "\n过滤: " +
        result.blockedCount +
        "\n\n已提交到光鸭云盘离线任务",
      link: link,
      coverUrl: entry.cover || undefined,
      backdropPath: entry.cover || undefined,
    };
  } catch (err) {
    return {
      id: hash,
      type: "url",
      title: "光鸭转存失败",
      description: String((err && err.message) || err || "未知错误"),
      link: link,
      coverUrl: entry.cover || undefined,
      backdropPath: entry.cover || undefined,
    };
  }
}


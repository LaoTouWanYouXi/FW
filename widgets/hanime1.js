/**
 * hanime1 Widget - 反混淆可视化重写版
 * 站点: https://hanime1.me
 *
 * 处理说明:
 * 1. 还原 obfuscator.io 字符串数组 / RC4 解码
 * 2. 内联代理对象包装 (obj.fn / obj.key)
 * 3. 属性访问 obj['x'] -> obj.x
 * 4. 重命名 _0x... 局部变量为 argN / vN
 *
 * 原始混淆文件请保留备份；本文件可直接阅读与维护。
 */
WidgetMetadata = {
  id: 'hanime1Tao',
  title: 'hanime1',
  description: '模块“番剧”分类做了tv伪装，其他分类默认movie，更新频道https://t.me/ner_workshop',
  author: '廿二日',
  site: 'https://hanime1.me',
  version: '2.3.2',
  requiredVersion: '0.0.2',
  detailCacheDuration: 300,
  globalParams: [
    {
      name: 'res_mode',
      title: '播放资源',
      type: 'enumeration',
      value: 'all',
      enumOptions: [
        {
          title: '全部画质',
          value: 'all',
        },
        {
          title: '最高画质',
          value: 'highest',
        },
      ],
    },
  ],
  search: {
    title: '快捷搜索',
    functionName: 'searchVideos',
    params: [
      {
        name: 'keyword',
        title: '搜索关键词',
        type: 'input',
        description: '输入关键词',
        value: '',
      },
      {
        name: 'sort_by',
        title: '排序方式',
        type: 'enumeration',
        description: '排序规则',
        value: 'all',
        enumOptions: [
          {
            title: '全部',
            value: 'all',
          },
          {
            title: '最新上市',
            value: 'new_release',
          },
          {
            title: '最新上传',
            value: 'latest_upload',
          },
          {
            title: '本日排行',
            value: 'daily_rank',
          },
          {
            title: '本周排行',
            value: 'weekly_rank',
          },
          {
            title: '本月排行',
            value: 'monthly_rank',
          },
          {
            title: '观看次数',
            value: 'views',
          },
          {
            title: '点赞比例',
            value: 'likes',
          },
          {
            title: '时长最长',
            value: 'duration',
          },
          {
            title: '他们在看',
            value: 'watching',
          },
        ],
      },
      {
        name: 'page',
        title: '页码',
        type: 'page',
        description: '页码',
        value: '1',
      },
    ],
  },
  modules: [
    {
      id: 'loadResource',
      title: '播放源',
      functionName: 'loadResource',
      type: 'stream',
      cacheDuration: 3600,
      params: [],
    },
    {
      id: 'searchModule',
      title: '搜索',
      description: '关键词与排序组合检索',
      requiresWebView: false,
      functionName: 'loadSearchList',
      cacheDuration: 300,
      params: [
        {
          name: 'keyword',
          title: '搜索关键词',
          type: 'input',
          description: '在此输入你想搜索的影片',
          value: '',
        },
        {
          name: 'sort_by',
          title: '排序方式',
          type: 'enumeration',
          description: '排序规则',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          description: '页码',
          value: '1',
        },
      ],
    },
    {
      id: 'animeModule',
      title: '番剧',
      description: '高级全标签筛选（TV剧集视图）',
      requiresWebView: false,
      functionName: 'loadAnimeGenre',
      cacheDuration: 600,
      params: [
        {
          name: 'genre',
          title: '基础大分类',
          type: 'enumeration',
          value: 'rifan',
          enumOptions: [
            {
              title: '裏番',
              value: 'rifan',
            },
            {
              title: '泡麵番',
              value: 'paomian',
            },
            {
              title: '新番預告',
              value: 'preview',
            },
          ],
        },
        {
          name: 'sort_by',
          title: '排序方式',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'upload_time',
          title: '发布日期',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '过去 24 小时',
              value: '24h',
            },
            {
              title: '过去 2 天',
              value: '2d',
            },
            {
              title: '过去 1 周',
              value: '1w',
            },
            {
              title: '过去 1 个月',
              value: '1m',
            },
            {
              title: '过去 3 个月',
              value: '3m',
            },
            {
              title: '过去 1 年',
              value: '1y',
            },
          ],
        },
        {
          name: 'duration_filter',
          title: '时长范围',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '1 分钟 +',
              value: '1m_plus',
            },
            {
              title: '5 分钟 +',
              value: '5m_plus',
            },
            {
              title: '10 分钟 +',
              value: '10m_plus',
            },
            {
              title: '20 分钟 +',
              value: '20m_plus',
            },
            {
              title: '30 分钟 +',
              value: '30m_plus',
            },
            {
              title: '60 分钟 +',
              value: '60m_plus',
            },
            {
              title: '0 - 10 分钟',
              value: '0_10m',
            },
            {
              title: '0 - 20 分钟',
              value: '0_20m',
            },
          ],
        },
        {
          name: 'tag_attr',
          title: '影片属性',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '無碼',
              value: '無碼',
            },
            {
              title: 'AI解碼',
              value: 'AI解碼',
            },
            {
              title: '中文字幕',
              value: '中文字幕',
            },
            {
              title: '中文配音',
              value: '中文配音',
            },
            {
              title: '同人作品',
              value: '同人作品',
            },
            {
              title: '斷面圖',
              value: '斷面圖',
            },
            {
              title: 'ASMR',
              value: 'ASMR',
            },
            {
              title: '1080p',
              value: '1080p',
            },
            {
              title: '60FPS',
              value: '60FPS',
            },
          ],
        },
        {
          name: 'tag_rel',
          title: '人物关系',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '近親',
              value: '近親',
            },
            {
              title: '姐',
              value: '姐',
            },
            {
              title: '妹',
              value: '妹',
            },
            {
              title: '母',
              value: '母',
            },
            {
              title: '女兒',
              value: '女兒',
            },
            {
              title: '師生',
              value: '師生',
            },
            {
              title: '情侶',
              value: '情侶',
            },
            {
              title: '青梅竹馬',
              value: '青梅竹馬',
            },
            {
              title: '同事',
              value: '同事',
            },
          ],
        },
        {
          name: 'tag_role',
          title: '角色设定',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: 'JK',
              value: 'JK',
            },
            {
              title: '處女',
              value: '處女',
            },
            {
              title: '御姐',
              value: '御姐',
            },
            {
              title: '熟女',
              value: '熟女',
            },
            {
              title: '人妻',
              value: '人妻',
            },
            {
              title: '女教師',
              value: '女教師',
            },
            {
              title: '男教師',
              value: '男教師',
            },
            {
              title: '女醫生',
              value: '女醫生',
            },
            {
              title: '女病人',
              value: '女病人',
            },
            {
              title: '護士',
              value: '護士',
            },
            {
              title: 'OL',
              value: 'OL',
            },
            {
              title: '女警',
              value: '女警',
            },
            {
              title: '大小姐',
              value: '大小姐',
            },
            {
              title: '偶像',
              value: '偶像',
            },
            {
              title: '女僕',
              value: '女僕',
            },
            {
              title: '巫女',
              value: '巫女',
            },
            {
              title: '魔女',
              value: '魔女',
            },
            {
              title: '修女',
              value: '修女',
            },
            {
              title: '風俗娘',
              value: '風俗娘',
            },
            {
              title: '公主',
              value: '公主',
            },
            {
              title: '女忍者',
              value: '女忍者',
            },
            {
              title: '女戰士',
              value: '女戰士',
            },
            {
              title: '女騎士',
              value: '女騎士',
            },
            {
              title: '魔法少女',
              value: '魔法少女',
            },
            {
              title: '異種族',
              value: '異種族',
            },
            {
              title: '天使',
              value: '天使',
            },
            {
              title: '妖精',
              value: '妖精',
            },
            {
              title: '魔物娘',
              value: '魔物娘',
            },
            {
              title: '魅魔',
              value: '魅魔',
            },
            {
              title: '吸血鬼',
              value: '吸血鬼',
            },
            {
              title: '女鬼',
              value: '女鬼',
            },
            {
              title: '獸娘',
              value: '獸娘',
            },
            {
              title: '福瑞',
              value: '福瑞',
            },
            {
              title: '乳牛',
              value: '乳牛',
            },
            {
              title: '機械娘',
              value: '機械娘',
            },
            {
              title: '碧池',
              value: '碧池',
            },
            {
              title: '痴女',
              value: '痴女',
            },
            {
              title: '雌小鬼',
              value: '雌小鬼',
            },
            {
              title: '不良少女',
              value: '不良少女',
            },
            {
              title: '傲嬌',
              value: '傲嬌',
            },
            {
              title: '病嬌',
              value: '病嬌',
            },
            {
              title: '無口',
              value: '無口',
            },
            {
              title: '無表情',
              value: '無表情',
            },
            {
              title: '眼神死',
              value: '眼神死',
            },
            {
              title: '正太',
              value: '正太',
            },
            {
              title: '偽娘',
              value: '偽娘',
            },
            {
              title: '扶他',
              value: '扶他',
            },
          ],
        },
        {
          name: 'tag_body',
          title: '外貌身材',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '短髮',
              value: '短髮',
            },
            {
              title: '馬尾',
              value: '馬尾',
            },
            {
              title: '雙馬尾',
              value: '雙馬尾',
            },
            {
              title: '丸子頭',
              value: '丸子頭',
            },
            {
              title: '巨乳',
              value: '巨乳',
            },
            {
              title: '乳環',
              value: '乳環',
            },
            {
              title: '舌環',
              value: '舌環',
            },
            {
              title: '貧乳',
              value: '貧乳',
            },
            {
              title: '黑皮膚',
              value: '黑皮膚',
            },
            {
              title: '曬痕',
              value: '曬痕',
            },
            {
              title: '眼鏡娘',
              value: '眼鏡娘',
            },
            {
              title: '獸耳',
              value: '獸耳',
            },
            {
              title: '尖耳朵',
              value: '尖耳朵',
            },
            {
              title: '異色瞳',
              value: '異色瞳',
            },
            {
              title: '美人痣',
              value: '美人痣',
            },
            {
              title: '肌肉女',
              value: '肌肉女',
            },
            {
              title: '白虎',
              value: '白虎',
            },
            {
              title: '陰毛',
              value: '陰毛',
            },
            {
              title: '腋毛',
              value: '腋毛',
            },
            {
              title: '大屌',
              value: '大屌',
            },
            {
              title: '黑屌',
              value: '黑屌',
            },
            {
              title: '著衣',
              value: '著衣',
            },
            {
              title: '水手服',
              value: '水手服',
            },
            {
              title: '體操服',
              value: '體操服',
            },
            {
              title: '泳裝',
              value: '泳裝',
            },
            {
              title: '比基尼',
              value: '比基尼',
            },
            {
              title: '死庫水',
              value: '死庫水',
            },
            {
              title: '和服',
              value: '和服',
            },
            {
              title: '兔女郎',
              value: '兔女郎',
            },
            {
              title: '圍裙',
              value: '圍裙',
            },
            {
              title: '啦啦隊',
              value: '啦啦隊',
            },
            {
              title: '絲襪',
              value: '絲襪',
            },
            {
              title: '吊襪帶',
              value: '吊襪帶',
            },
            {
              title: '熱褲',
              value: '熱褲',
            },
            {
              title: '迷你裙',
              value: '迷你裙',
            },
            {
              title: '性感內衣',
              value: '性感內衣',
            },
            {
              title: '緊身衣',
              value: '緊身衣',
            },
            {
              title: '丁字褲',
              value: '丁字褲',
            },
            {
              title: '高跟鞋',
              value: '高跟鞋',
            },
            {
              title: '睡衣',
              value: '睡衣',
            },
            {
              title: '婚紗',
              value: '婚紗',
            },
            {
              title: '旗袍',
              value: '旗袍',
            },
            {
              title: '古裝',
              value: '古裝',
            },
            {
              title: '哥德',
              value: '哥德',
            },
            {
              title: '口罩',
              value: '口罩',
            },
            {
              title: '刺青',
              value: '刺青',
            },
            {
              title: '淫紋',
              value: '淫紋',
            },
            {
              title: '身體寫字',
              value: '身體寫字',
            },
          ],
        },
        {
          name: 'tag_loc',
          title: '情境场所',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '校園',
              value: '校園',
            },
            {
              title: '教室',
              value: '教室',
            },
            {
              title: '圖書館',
              value: '圖書館',
            },
            {
              title: '保健室',
              value: '保健室',
            },
            {
              title: '體育倉庫',
              value: '體育倉庫',
            },
            {
              title: '游泳池',
              value: '游泳池',
            },
            {
              title: '愛情賓館',
              value: '愛情賓館',
            },
            {
              title: '醫院',
              value: '醫院',
            },
            {
              title: '辦公室',
              value: '辦公室',
            },
            {
              title: '浴室',
              value: '浴室',
            },
            {
              title: '窗邊',
              value: '窗邊',
            },
            {
              title: '公共廁所',
              value: '公共廁所',
            },
            {
              title: '公眾場合',
              value: '公眾場合',
            },
            {
              title: '戶外野戰',
              value: '戶外野戰',
            },
            {
              title: '電車',
              value: '電車',
            },
            {
              title: '車震',
              value: '車震',
            },
            {
              title: '遊艇',
              value: '遊艇',
            },
            {
              title: '露營帳篷',
              value: '露營帳篷',
            },
            {
              title: '電影院',
              value: '電影院',
            },
            {
              title: '健身房',
              value: '健身房',
            },
            {
              title: '沙灘',
              value: '沙灘',
            },
            {
              title: '溫泉',
              value: '溫泉',
            },
            {
              title: '夜店',
              value: '夜店',
            },
            {
              title: '監獄',
              value: '監獄',
            },
            {
              title: '教堂',
              value: '教堂',
            },
          ],
        },
        {
          name: 'tag_plot',
          title: '故事剧情',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '純愛',
              value: '純愛',
            },
            {
              title: '戀愛喜劇',
              value: '戀愛喜劇',
            },
            {
              title: '後宮',
              value: '後宮',
            },
            {
              title: '十指緊扣',
              value: '十指緊扣',
            },
            {
              title: '開大車',
              value: '開大車',
            },
            {
              title: 'NTR',
              value: 'NTR',
            },
            {
              title: '精神控制',
              value: '精神控制',
            },
            {
              title: '藥物',
              value: '藥物',
            },
            {
              title: '痴漢',
              value: '痴漢',
            },
            {
              title: '阿嘿顏',
              value: '阿嘿顏',
            },
            {
              title: '哭泣',
              value: '哭泣',
            },
            {
              title: '精神崩潰',
              value: '精神崩潰',
            },
            {
              title: '獵奇',
              value: '獵奇',
            },
            {
              title: 'BDSM',
              value: 'BDSM',
            },
            {
              title: '綑綁',
              value: '綑綁',
            },
            {
              title: '眼罩',
              value: '眼罩',
            },
            {
              title: '項圈',
              value: '項圈',
            },
            {
              title: '調教',
              value: '調教',
            },
            {
              title: '異物插入',
              value: '異物插入',
            },
            {
              title: '尋歡洞',
              value: '尋歡洞',
            },
            {
              title: '肉便器',
              value: '肉便器',
            },
            {
              title: '性奴隸',
              value: '性奴隸',
            },
            {
              title: '胃凸',
              value: '胃凸',
            },
            {
              title: '強制',
              value: '強制',
            },
            {
              title: '輪姦',
              value: '輪姦',
            },
            {
              title: '凌辱',
              value: '凌辱',
            },
            {
              title: '性暴力',
              value: '性暴力',
            },
            {
              title: '逆強制',
              value: '逆強制',
            },
            {
              title: '女王樣',
              value: '女王樣',
            },
            {
              title: '榨精',
              value: '榨精',
            },
            {
              title: '母女丼',
              value: '母女丼',
            },
            {
              title: '姐妹丼',
              value: '姐妹丼',
            },
            {
              title: '出軌',
              value: '出軌',
            },
            {
              title: '醉酒',
              value: '醉酒',
            },
            {
              title: '攝影',
              value: '攝影',
            },
            {
              title: '睡眠姦',
              value: '睡眠姦',
            },
            {
              title: '機械姦',
              value: '機械姦',
            },
            {
              title: '蟲姦',
              value: '蟲姦',
            },
            {
              title: '性轉換',
              value: '性轉換',
            },
            {
              title: '百合',
              value: '百合',
            },
            {
              title: '耽美',
              value: '耽美',
            },
            {
              title: '時間停止',
              value: '時間停止',
            },
            {
              title: '異世界',
              value: '異世界',
            },
            {
              title: '怪獸',
              value: '怪獸',
            },
            {
              title: '哥布林',
              value: '哥布林',
            },
            {
              title: '世界末日',
              value: '世界末日',
            },
          ],
        },
        {
          name: 'tag_pos',
          title: '性交体位',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '手交',
              value: '手交',
            },
            {
              title: '指交',
              value: '指交',
            },
            {
              title: '玩乳頭',
              value: '玩乳頭',
            },
            {
              title: '乳交',
              value: '乳交',
            },
            {
              title: '乳頭交',
              value: '乳頭交',
            },
            {
              title: '肛交',
              value: '肛交',
            },
            {
              title: '雙洞齊下',
              value: '雙洞齊下',
            },
            {
              title: '腳交',
              value: '腳交',
            },
            {
              title: '素股',
              value: '素股',
            },
            {
              title: '拳交',
              value: '拳交',
            },
            {
              title: '3P',
              value: '3P',
            },
            {
              title: '群交',
              value: '群交',
            },
            {
              title: '口交',
              value: '口交',
            },
            {
              title: '跪舔',
              value: '跪舔',
            },
            {
              title: '深喉嚨',
              value: '深喉嚨',
            },
            {
              title: '口爆',
              value: '口爆',
            },
            {
              title: '吞精',
              value: '吞精',
            },
            {
              title: '舔蛋蛋',
              value: '舔蛋蛋',
            },
            {
              title: '舔穴',
              value: '舔穴',
            },
            {
              title: '69',
              value: '69',
            },
            {
              title: '自慰',
              value: '自慰',
            },
            {
              title: '腋交',
              value: '腋交',
            },
            {
              title: '舔腋下',
              value: '舔腋下',
            },
            {
              title: '髮交',
              value: '髮交',
            },
            {
              title: '舔耳朵',
              value: '舔耳朵',
            },
            {
              title: '舔腳',
              value: '舔腳',
            },
            {
              title: '內射',
              value: '內射',
            },
            {
              title: '外射',
              value: '外射',
            },
            {
              title: '顏射',
              value: '顏射',
            },
            {
              title: '潮吹',
              value: '潮吹',
            },
            {
              title: '懷孕',
              value: '懷孕',
            },
            {
              title: '噴奶',
              value: '噴奶',
            },
            {
              title: '放尿',
              value: '放尿',
            },
            {
              title: '排便',
              value: '排便',
            },
            {
              title: '騎乘位',
              value: '騎乘位',
            },
            {
              title: '背後位',
              value: '背後位',
            },
            {
              title: '側面位',
              value: '側面位',
            },
            {
              title: '顏面騎乘',
              value: '顏面騎乘',
            },
            {
              title: '火車便當',
              value: '火車便當',
            },
            {
              title: '一字馬',
              value: '一字馬',
            },
            {
              title: '性玩具',
              value: '性玩具',
            },
            {
              title: '飛機杯',
              value: '飛機杯',
            },
            {
              title: '跳蛋',
              value: '跳蛋',
            },
            {
              title: '毒龙钻',
              value: '毒龍鑽',
            },
            {
              title: '触手',
              value: '觸手',
            },
            {
              title: '兽交',
              value: '獸交',
            },
            {
              title: '颈手枷',
              value: '頸手枷',
            },
            {
              title: '扯头发',
              value: '扯頭髮',
            },
            {
              title: '掐脖子',
              value: '掐脖子',
            },
            {
              title: '打屁股',
              value: '打屁股',
            },
            {
              title: '肉棒打脸',
              value: '肉棒打臉',
            },
            {
              title: '阴道外翻',
              value: '陰道外翻',
            },
            {
              title: '男乳首责',
              value: '男乳首責',
            },
            {
              title: '接吻',
              value: '接吻',
            },
            {
              title: '舌吻',
              value: '舌吻',
            },
            {
              title: 'POV',
              value: 'POV',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          value: '1',
        },
      ],
    },
    {
      id: 'categoryModule',
      title: '分类',
      description: '高级全标签筛选',
      requiresWebView: false,
      functionName: 'loadCategoryGenre',
      cacheDuration: 600,
      params: [
        {
          name: 'genre',
          title: '基础大分类',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: 'Motion Anime',
              value: 'motion',
            },
            {
              title: '3DCG',
              value: '3dcg',
            },
            {
              title: '2D 動畫',
              value: '2d',
            },
            {
              title: '2.5D',
              value: '2_5d',
            },
            {
              title: 'AI 生成',
              value: 'ai',
            },
            {
              title: 'MMD',
              value: 'mmd',
            },
            {
              title: 'Cosplay',
              value: 'cosplay',
            },
          ],
        },
        {
          name: 'sort_by',
          title: '排序方式',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'upload_time',
          title: '发布日期',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '过去 24 小时',
              value: '24h',
            },
            {
              title: '过去 2 天',
              value: '2d',
            },
            {
              title: '过去 1 周',
              value: '1w',
            },
            {
              title: '过去 1 个月',
              value: '1m',
            },
            {
              title: '过去 3 个月',
              value: '3m',
            },
            {
              title: '过去 1 年',
              value: '1y',
            },
          ],
        },
        {
          name: 'duration_filter',
          title: '时长范围',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '1 分钟 +',
              value: '1m_plus',
            },
            {
              title: '5 分钟 +',
              value: '5m_plus',
            },
            {
              title: '10 分钟 +',
              value: '10m_plus',
            },
            {
              title: '20 分钟 +',
              value: '20m_plus',
            },
            {
              title: '30 分钟 +',
              value: '30m_plus',
            },
            {
              title: '60 分钟 +',
              value: '60m_plus',
            },
            {
              title: '0 - 10 分钟',
              value: '0_10m',
            },
            {
              title: '0 - 20 分钟',
              value: '0_20m',
            },
          ],
        },
        {
          name: 'tag_attr',
          title: '影片属性',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '無碼',
              value: '無碼',
            },
            {
              title: 'AI解碼',
              value: 'AI解碼',
            },
            {
              title: '中文字幕',
              value: '中文字幕',
            },
            {
              title: '中文配音',
              value: '中文配音',
            },
            {
              title: '同人作品',
              value: '同人作品',
            },
            {
              title: '斷面圖',
              value: '斷面圖',
            },
            {
              title: 'ASMR',
              value: 'ASMR',
            },
            {
              title: '1080p',
              value: '1080p',
            },
            {
              title: '60FPS',
              value: '60FPS',
            },
          ],
        },
        {
          name: 'tag_rel',
          title: '人物关系',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '近親',
              value: '近親',
            },
            {
              title: '姐',
              value: '姐',
            },
            {
              title: '妹',
              value: '妹',
            },
            {
              title: '母',
              value: '母',
            },
            {
              title: '女兒',
              value: '女兒',
            },
            {
              title: '師生',
              value: '師生',
            },
            {
              title: '情侶',
              value: '情侶',
            },
            {
              title: '青梅竹馬',
              value: '青梅竹馬',
            },
            {
              title: '同事',
              value: '同事',
            },
          ],
        },
        {
          name: 'tag_role',
          title: '角色设定',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: 'JK',
              value: 'JK',
            },
            {
              title: '處女',
              value: '處女',
            },
            {
              title: '御姐',
              value: '御姐',
            },
            {
              title: '熟女',
              value: '熟女',
            },
            {
              title: '人妻',
              value: '人妻',
            },
            {
              title: '女教師',
              value: '女教師',
            },
            {
              title: '男教師',
              value: '男教師',
            },
            {
              title: '女醫生',
              value: '女醫生',
            },
            {
              title: '女病人',
              value: '女病人',
            },
            {
              title: '護士',
              value: '護士',
            },
            {
              title: 'OL',
              value: 'OL',
            },
            {
              title: '女警',
              value: '女警',
            },
            {
              title: '大小姐',
              value: '大小姐',
            },
            {
              title: '偶像',
              value: '偶像',
            },
            {
              title: '女僕',
              value: '女僕',
            },
            {
              title: '巫女',
              value: '巫女',
            },
            {
              title: '魔女',
              value: '魔女',
            },
            {
              title: '修女',
              value: '修女',
            },
            {
              title: '風俗娘',
              value: '風俗娘',
            },
            {
              title: '公主',
              value: '公主',
            },
            {
              title: '女忍者',
              value: '女忍者',
            },
            {
              title: '女戰士',
              value: '女戰士',
            },
            {
              title: '女騎士',
              value: '女騎士',
            },
            {
              title: '魔法少女',
              value: '魔法少女',
            },
            {
              title: '異種族',
              value: '異種族',
            },
            {
              title: '天使',
              value: '天使',
            },
            {
              title: '妖精',
              value: '妖精',
            },
            {
              title: '魔物娘',
              value: '魔物娘',
            },
            {
              title: '魅魔',
              value: '魅魔',
            },
            {
              title: '吸血鬼',
              value: '吸血鬼',
            },
            {
              title: '女鬼',
              value: '女鬼',
            },
            {
              title: '獸娘',
              value: '獸娘',
            },
            {
              title: '福瑞',
              value: '福瑞',
            },
            {
              title: '乳牛',
              value: '乳牛',
            },
            {
              title: '機械娘',
              value: '機械娘',
            },
            {
              title: '碧池',
              value: '碧池',
            },
            {
              title: '痴女',
              value: '痴女',
            },
            {
              title: '雌小鬼',
              value: '雌小鬼',
            },
            {
              title: '不良少女',
              value: '不良少女',
            },
            {
              title: '傲嬌',
              value: '傲嬌',
            },
            {
              title: '病嬌',
              value: '病嬌',
            },
            {
              title: '無口',
              value: '無口',
            },
            {
              title: '無表情',
              value: '無表情',
            },
            {
              title: '眼神死',
              value: '眼神死',
            },
            {
              title: '正太',
              value: '正太',
            },
            {
              title: '偽娘',
              value: '偽娘',
            },
            {
              title: '扶他',
              value: '扶他',
            },
          ],
        },
        {
          name: 'tag_body',
          title: '外貌身材',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '短髮',
              value: '短髮',
            },
            {
              title: '馬尾',
              value: '馬尾',
            },
            {
              title: '雙馬尾',
              value: '雙馬尾',
            },
            {
              title: '丸子頭',
              value: '丸子頭',
            },
            {
              title: '巨乳',
              value: '巨乳',
            },
            {
              title: '乳環',
              value: '乳環',
            },
            {
              title: '舌環',
              value: '舌環',
            },
            {
              title: '貧乳',
              value: '貧乳',
            },
            {
              title: '黑皮膚',
              value: '黑皮膚',
            },
            {
              title: '曬痕',
              value: '曬痕',
            },
            {
              title: '眼鏡娘',
              value: '眼鏡娘',
            },
            {
              title: '獸耳',
              value: '獸耳',
            },
            {
              title: '尖耳朵',
              value: '尖耳朵',
            },
            {
              title: '異色瞳',
              value: '異色瞳',
            },
            {
              title: '美人痣',
              value: '美人痣',
            },
            {
              title: '肌肉女',
              value: '肌肉女',
            },
            {
              title: '白虎',
              value: '白虎',
            },
            {
              title: '陰毛',
              value: '陰毛',
            },
            {
              title: '腋毛',
              value: '腋毛',
            },
            {
              title: '大屌',
              value: '大屌',
            },
            {
              title: '黑屌',
              value: '黑屌',
            },
            {
              title: '著衣',
              value: '著衣',
            },
            {
              title: '水手服',
              value: '水手服',
            },
            {
              title: '體操服',
              value: '體操服',
            },
            {
              title: '泳裝',
              value: '泳裝',
            },
            {
              title: '比基尼',
              value: '比基尼',
            },
            {
              title: '死庫水',
              value: '死庫水',
            },
            {
              title: '和服',
              value: '和服',
            },
            {
              title: '兔女郎',
              value: '兔女郎',
            },
            {
              title: '圍裙',
              value: '圍裙',
            },
            {
              title: '啦啦隊',
              value: '啦啦隊',
            },
            {
              title: '絲襪',
              value: '絲襪',
            },
            {
              title: '吊襪帶',
              value: '吊襪帶',
            },
            {
              title: '熱褲',
              value: '熱褲',
            },
            {
              title: '迷你裙',
              value: '迷你裙',
            },
            {
              title: '性感內衣',
              value: '性感內衣',
            },
            {
              title: '緊身衣',
              value: '緊身衣',
            },
            {
              title: '丁字褲',
              value: '丁字褲',
            },
            {
              title: '高跟鞋',
              value: '高跟鞋',
            },
            {
              title: '睡衣',
              value: '睡衣',
            },
            {
              title: '婚紗',
              value: '婚紗',
            },
            {
              title: '旗袍',
              value: '旗袍',
            },
            {
              title: '古裝',
              value: '古裝',
            },
            {
              title: '哥德',
              value: '哥德',
            },
            {
              title: '口罩',
              value: '口罩',
            },
            {
              title: '刺青',
              value: '刺青',
            },
            {
              title: '淫紋',
              value: '淫紋',
            },
            {
              title: '身體寫字',
              value: '身體寫字',
            },
          ],
        },
        {
          name: 'tag_loc',
          title: '情境场所',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '校園',
              value: '校園',
            },
            {
              title: '教室',
              value: '教室',
            },
            {
              title: '圖書館',
              value: '圖書館',
            },
            {
              title: '保健室',
              value: '保健室',
            },
            {
              title: '體育倉庫',
              value: '體育倉庫',
            },
            {
              title: '游泳池',
              value: '游泳池',
            },
            {
              title: '愛情賓館',
              value: '愛情賓館',
            },
            {
              title: '醫院',
              value: '醫院',
            },
            {
              title: '辦公室',
              value: '辦公室',
            },
            {
              title: '浴室',
              value: '浴室',
            },
            {
              title: '窗邊',
              value: '窗邊',
            },
            {
              title: '公共廁所',
              value: '公共廁所',
            },
            {
              title: '公眾場合',
              value: '公眾場合',
            },
            {
              title: '戶外野戰',
              value: '戶外野戰',
            },
            {
              title: '電車',
              value: '電車',
            },
            {
              title: '車震',
              value: '車震',
            },
            {
              title: '遊艇',
              value: '遊艇',
            },
            {
              title: '露營帳篷',
              value: '露營帳篷',
            },
            {
              title: '電影院',
              value: '電影院',
            },
            {
              title: '健身房',
              value: '健身房',
            },
            {
              title: '沙灘',
              value: '沙灘',
            },
            {
              title: '溫泉',
              value: '溫泉',
            },
            {
              title: '夜店',
              value: '夜店',
            },
            {
              title: '監獄',
              value: '監獄',
            },
            {
              title: '教堂',
              value: '教堂',
            },
          ],
        },
        {
          name: 'tag_plot',
          title: '故事剧情',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '純愛',
              value: '純愛',
            },
            {
              title: '戀愛喜劇',
              value: '戀愛喜劇',
            },
            {
              title: '後宮',
              value: '後宮',
            },
            {
              title: '十指緊扣',
              value: '十指緊扣',
            },
            {
              title: '開大車',
              value: '開大車',
            },
            {
              title: 'NTR',
              value: 'NTR',
            },
            {
              title: '精神控制',
              value: '精神控制',
            },
            {
              title: '藥物',
              value: '藥物',
            },
            {
              title: '痴漢',
              value: '痴漢',
            },
            {
              title: '阿嘿顏',
              value: '阿嘿顏',
            },
            {
              title: '哭泣',
              value: '哭泣',
            },
            {
              title: '精神崩潰',
              value: '精神崩潰',
            },
            {
              title: '獵奇',
              value: '獵奇',
            },
            {
              title: 'BDSM',
              value: 'BDSM',
            },
            {
              title: '綑綁',
              value: '綑綁',
            },
            {
              title: '眼罩',
              value: '眼罩',
            },
            {
              title: '項圈',
              value: '項圈',
            },
            {
              title: '調教',
              value: '調教',
            },
            {
              title: '異物插入',
              value: '異物插入',
            },
            {
              title: '尋歡洞',
              value: '尋歡洞',
            },
            {
              title: '肉便器',
              value: '肉便器',
            },
            {
              title: '性奴隸',
              value: '性奴隸',
            },
            {
              title: '胃凸',
              value: '胃凸',
            },
            {
              title: '強制',
              value: '強制',
            },
            {
              title: '輪姦',
              value: '輪姦',
            },
            {
              title: '凌辱',
              value: '凌辱',
            },
            {
              title: '性暴力',
              value: '性暴力',
            },
            {
              title: '逆強制',
              value: '逆強制',
            },
            {
              title: '女王樣',
              value: '女王樣',
            },
            {
              title: '榨精',
              value: '榨精',
            },
            {
              title: '母女丼',
              value: '母女丼',
            },
            {
              title: '姐妹丼',
              value: '姐妹丼',
            },
            {
              title: '出軌',
              value: '出軌',
            },
            {
              title: '醉酒',
              value: '醉酒',
            },
            {
              title: '攝影',
              value: '攝影',
            },
            {
              title: '睡眠姦',
              value: '睡眠姦',
            },
            {
              title: '機械姦',
              value: '機械姦',
            },
            {
              title: '蟲姦',
              value: '蟲姦',
            },
            {
              title: '性轉換',
              value: '性轉換',
            },
            {
              title: '百合',
              value: '百合',
            },
            {
              title: '耽美',
              value: '耽美',
            },
            {
              title: '時間停止',
              value: '時間停止',
            },
            {
              title: '異世界',
              value: '異世界',
            },
            {
              title: '怪獸',
              value: '怪獸',
            },
            {
              title: '哥布林',
              value: '哥布林',
            },
            {
              title: '世界末日',
              value: '世界末日',
            },
          ],
        },
        {
          name: 'tag_pos',
          title: '性交体位',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '手交',
              value: '手交',
            },
            {
              title: '指交',
              value: '指交',
            },
            {
              title: '玩乳頭',
              value: '玩乳頭',
            },
            {
              title: '乳交',
              value: '乳交',
            },
            {
              title: '乳頭交',
              value: '乳頭交',
            },
            {
              title: '肛交',
              value: '肛交',
            },
            {
              title: '雙洞齊下',
              value: '雙洞齊下',
            },
            {
              title: '腳交',
              value: '腳交',
            },
            {
              title: '素股',
              value: '素股',
            },
            {
              title: '拳交',
              value: '拳交',
            },
            {
              title: '3P',
              value: '3P',
            },
            {
              title: '群交',
              value: '群交',
            },
            {
              title: '口交',
              value: '口交',
            },
            {
              title: '跪舔',
              value: '跪舔',
            },
            {
              title: '深喉嚨',
              value: '深喉嚨',
            },
            {
              title: '口爆',
              value: '口爆',
            },
            {
              title: '吞精',
              value: '吞精',
            },
            {
              title: '舔蛋蛋',
              value: '舔蛋蛋',
            },
            {
              title: '舔穴',
              value: '舔穴',
            },
            {
              title: '69',
              value: '69',
            },
            {
              title: '自慰',
              value: '自慰',
            },
            {
              title: '腋交',
              value: '腋交',
            },
            {
              title: '舔腋下',
              value: '舔腋下',
            },
            {
              title: '髮交',
              value: '髮交',
            },
            {
              title: '舔耳朵',
              value: '舔耳朵',
            },
            {
              title: '舔腳',
              value: '舔腳',
            },
            {
              title: '內射',
              value: '內射',
            },
            {
              title: '外射',
              value: '外射',
            },
            {
              title: '顏射',
              value: '顏射',
            },
            {
              title: '潮吹',
              value: '潮吹',
            },
            {
              title: '懷孕',
              value: '懷孕',
            },
            {
              title: '噴奶',
              value: '噴奶',
            },
            {
              title: '放尿',
              value: '放尿',
            },
            {
              title: '排便',
              value: '排便',
            },
            {
              title: '騎乘位',
              value: '騎乘位',
            },
            {
              title: '背後位',
              value: '背後位',
            },
            {
              title: '側面位',
              value: '側面位',
            },
            {
              title: '顏面騎乘',
              value: '顏面騎乘',
            },
            {
              title: '火車便當',
              value: '火車便當',
            },
            {
              title: '一字馬',
              value: '一字馬',
            },
            {
              title: '性玩具',
              value: '性玩具',
            },
            {
              title: '飛機杯',
              value: '飛機杯',
            },
            {
              title: '跳蛋',
              value: '跳蛋',
            },
            {
              title: '毒龙钻',
              value: '毒龍鑽',
            },
            {
              title: '触手',
              value: '觸手',
            },
            {
              title: '兽交',
              value: '獸交',
            },
            {
              title: '颈手枷',
              value: '頸手枷',
            },
            {
              title: '扯头发',
              value: '扯頭髮',
            },
            {
              title: '掐脖子',
              value: '掐脖子',
            },
            {
              title: '打屁股',
              value: '打屁股',
            },
            {
              title: '肉棒打脸',
              value: '肉棒打臉',
            },
            {
              title: '阴道外翻',
              value: '陰道外翻',
            },
            {
              title: '男乳首责',
              value: '男乳首責',
            },
            {
              title: '接吻',
              value: '接吻',
            },
            {
              title: '舌吻',
              value: '舌吻',
            },
            {
              title: 'POV',
              value: 'POV',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          value: '1',
        },
      ],
    },
    {
      id: 'rankingModule',
      title: '排行榜',
      description: '热门与最新影片榜单聚合',
      requiresWebView: false,
      functionName: 'loadHotRankings',
      cacheDuration: 300,
      params: [
        {
          name: 'sort_by',
          title: '榜单类型',
          type: 'enumeration',
          value: 'watching',
          enumOptions: [
            {
              title: '他们在看',
              value: 'watching',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          description: '页码',
          value: '1',
        },
      ],
    },
    {
      id: 'tagAttrModule',
      title: '影片属性',
      description: '按影片属性筛选',
      requiresWebView: false,
      functionName: 'loadByTagAttr',
      cacheDuration: 600,
      params: [
        {
          name: 'sort_by',
          title: '影片属性',
          type: 'enumeration',
          value: '無碼',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '無碼',
              value: '無碼',
            },
            {
              title: 'AI解碼',
              value: 'AI解碼',
            },
            {
              title: '中文字幕',
              value: '中文字幕',
            },
            {
              title: '中文配音',
              value: '中文配音',
            },
            {
              title: '同人作品',
              value: '同人作品',
            },
            {
              title: '斷面圖',
              value: '斷面圖',
            },
            {
              title: 'ASMR',
              value: 'ASMR',
            },
            {
              title: '1080p',
              value: '1080p',
            },
            {
              title: '60FPS',
              value: '60FPS',
            },
          ],
        },
        {
          name: 'sort',
          title: '排序方式',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          value: '1',
        },
      ],
    },
    {
      id: 'tagRelModule',
      title: '人物关系',
      description: '按人物关系筛选',
      requiresWebView: false,
      functionName: 'loadByTagRel',
      cacheDuration: 600,
      params: [
        {
          name: 'sort_by',
          title: '人物关系',
          type: 'enumeration',
          value: '近親',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '近親',
              value: '近親',
            },
            {
              title: '姐',
              value: '姐',
            },
            {
              title: '妹',
              value: '妹',
            },
            {
              title: '母',
              value: '母',
            },
            {
              title: '女兒',
              value: '女兒',
            },
            {
              title: '師生',
              value: '師生',
            },
            {
              title: '情侶',
              value: '情侶',
            },
            {
              title: '青梅竹馬',
              value: '青梅竹馬',
            },
            {
              title: '同事',
              value: '同事',
            },
          ],
        },
        {
          name: 'sort',
          title: '排序方式',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          value: '1',
        },
      ],
    },
    {
      id: 'tagRoleModule',
      title: '角色设定',
      description: '按角色设定筛选',
      requiresWebView: false,
      functionName: 'loadByTagRole',
      cacheDuration: 600,
      params: [
        {
          name: 'sort_by',
          title: '角色设定',
          type: 'enumeration',
          value: 'JK',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: 'JK',
              value: 'JK',
            },
            {
              title: '處女',
              value: '處女',
            },
            {
              title: '御姐',
              value: '御姐',
            },
            {
              title: '熟女',
              value: '熟女',
            },
            {
              title: '人妻',
              value: '人妻',
            },
            {
              title: '女教師',
              value: '女教師',
            },
            {
              title: '男教師',
              value: '男教師',
            },
            {
              title: '女醫生',
              value: '女醫生',
            },
            {
              title: '女病人',
              value: '女病人',
            },
            {
              title: '護士',
              value: '護士',
            },
            {
              title: 'OL',
              value: 'OL',
            },
            {
              title: '女警',
              value: '女警',
            },
            {
              title: '大小姐',
              value: '大小姐',
            },
            {
              title: '偶像',
              value: '偶像',
            },
            {
              title: '女僕',
              value: '女僕',
            },
            {
              title: '巫女',
              value: '巫女',
            },
            {
              title: '魔女',
              value: '魔女',
            },
            {
              title: '修女',
              value: '修女',
            },
            {
              title: '風俗娘',
              value: '風俗娘',
            },
            {
              title: '公主',
              value: '公主',
            },
            {
              title: '女忍者',
              value: '女忍者',
            },
            {
              title: '女戰士',
              value: '女戰士',
            },
            {
              title: '女騎士',
              value: '女騎士',
            },
            {
              title: '魔法少女',
              value: '魔法少女',
            },
            {
              title: '異種族',
              value: '異種族',
            },
            {
              title: '天使',
              value: '天使',
            },
            {
              title: '妖精',
              value: '妖精',
            },
            {
              title: '魔物娘',
              value: '魔物娘',
            },
            {
              title: '魅魔',
              value: '魅魔',
            },
            {
              title: '吸血鬼',
              value: '吸血鬼',
            },
            {
              title: '女鬼',
              value: '女鬼',
            },
            {
              title: '獸娘',
              value: '獸娘',
            },
            {
              title: '福瑞',
              value: '福瑞',
            },
            {
              title: '乳牛',
              value: '乳牛',
            },
            {
              title: '機械娘',
              value: '機械娘',
            },
            {
              title: '碧池',
              value: '碧池',
            },
            {
              title: '痴女',
              value: '痴女',
            },
            {
              title: '雌小鬼',
              value: '雌小鬼',
            },
            {
              title: '不良少女',
              value: '不良少女',
            },
            {
              title: '傲嬌',
              value: '傲嬌',
            },
            {
              title: '病嬌',
              value: '病嬌',
            },
            {
              title: '無口',
              value: '無口',
            },
            {
              title: '無表情',
              value: '無表情',
            },
            {
              title: '眼神死',
              value: '眼神死',
            },
            {
              title: '正太',
              value: '正太',
            },
            {
              title: '偽娘',
              value: '偽娘',
            },
            {
              title: '扶他',
              value: '扶他',
            },
          ],
        },
        {
          name: 'sort',
          title: '排序方式',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          value: '1',
        },
      ],
    },
    {
      id: 'tagBodyModule',
      title: '外貌身材',
      description: '按外貌身材筛选',
      requiresWebView: false,
      functionName: 'loadByTagBody',
      cacheDuration: 600,
      params: [
        {
          name: 'sort_by',
          title: '外貌身材',
          type: 'enumeration',
          value: '短髮',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '短髮',
              value: '短髮',
            },
            {
              title: '馬尾',
              value: '馬尾',
            },
            {
              title: '雙馬尾',
              value: '雙馬尾',
            },
            {
              title: '丸子頭',
              value: '丸子頭',
            },
            {
              title: '巨乳',
              value: '巨乳',
            },
            {
              title: '乳環',
              value: '乳環',
            },
            {
              title: '舌環',
              value: '舌環',
            },
            {
              title: '貧乳',
              value: '貧乳',
            },
            {
              title: '黑皮膚',
              value: '黑皮膚',
            },
            {
              title: '曬痕',
              value: '曬痕',
            },
            {
              title: '眼鏡娘',
              value: '眼鏡娘',
            },
            {
              title: '獸耳',
              value: '獸耳',
            },
            {
              title: '尖耳朵',
              value: '尖耳朵',
            },
            {
              title: '異色瞳',
              value: '異色瞳',
            },
            {
              title: '美人痣',
              value: '美人痣',
            },
            {
              title: '肌肉女',
              value: '肌肉女',
            },
            {
              title: '白虎',
              value: '白虎',
            },
            {
              title: '陰毛',
              value: '陰毛',
            },
            {
              title: '腋毛',
              value: '腋毛',
            },
            {
              title: '大屌',
              value: '大屌',
            },
            {
              title: '黑屌',
              value: '黑屌',
            },
            {
              title: '著衣',
              value: '著衣',
            },
            {
              title: '水手服',
              value: '水手服',
            },
            {
              title: '體操服',
              value: '體操服',
            },
            {
              title: '泳裝',
              value: '泳裝',
            },
            {
              title: '比基尼',
              value: '比基尼',
            },
            {
              title: '死庫水',
              value: '死庫水',
            },
            {
              title: '和服',
              value: '和服',
            },
            {
              title: '兔女郎',
              value: '兔女郎',
            },
            {
              title: '圍裙',
              value: '圍裙',
            },
            {
              title: '啦啦隊',
              value: '啦啦隊',
            },
            {
              title: '絲襪',
              value: '絲襪',
            },
            {
              title: '吊襪帶',
              value: '吊襪帶',
            },
            {
              title: '熱褲',
              value: '熱褲',
            },
            {
              title: '迷你裙',
              value: '迷你裙',
            },
            {
              title: '性感內衣',
              value: '性感內衣',
            },
            {
              title: '緊身衣',
              value: '緊身衣',
            },
            {
              title: '丁字褲',
              value: '丁字褲',
            },
            {
              title: '高跟鞋',
              value: '高跟鞋',
            },
            {
              title: '睡衣',
              value: '睡衣',
            },
            {
              title: '婚紗',
              value: '婚紗',
            },
            {
              title: '旗袍',
              value: '旗袍',
            },
            {
              title: '古裝',
              value: '古裝',
            },
            {
              title: '哥德',
              value: '哥德',
            },
            {
              title: '口罩',
              value: '口罩',
            },
            {
              title: '刺青',
              value: '刺青',
            },
            {
              title: '淫紋',
              value: '淫紋',
            },
            {
              title: '身體寫字',
              value: '身體寫字',
            },
          ],
        },
        {
          name: 'sort',
          title: '排序方式',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          value: '1',
        },
      ],
    },
    {
      id: 'tagLocModule',
      title: '情境场所',
      description: '按情境场所筛选',
      requiresWebView: false,
      functionName: 'loadByTagLoc',
      cacheDuration: 600,
      params: [
        {
          name: 'sort_by',
          title: '情境场所',
          type: 'enumeration',
          value: '校園',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '校園',
              value: '校園',
            },
            {
              title: '教室',
              value: '教室',
            },
            {
              title: '圖書館',
              value: '圖書館',
            },
            {
              title: '保健室',
              value: '保健室',
            },
            {
              title: '體育倉庫',
              value: '體育倉庫',
            },
            {
              title: '游泳池',
              value: '游泳池',
            },
            {
              title: '愛情賓館',
              value: '愛情賓館',
            },
            {
              title: '醫院',
              value: '醫院',
            },
            {
              title: '辦公室',
              value: '辦公室',
            },
            {
              title: '浴室',
              value: '浴室',
            },
            {
              title: '窗邊',
              value: '窗邊',
            },
            {
              title: '公共廁所',
              value: '公共廁所',
            },
            {
              title: '公眾場合',
              value: '公眾場合',
            },
            {
              title: '戶外野戰',
              value: '戶外野戰',
            },
            {
              title: '電車',
              value: '電車',
            },
            {
              title: '車震',
              value: '車震',
            },
            {
              title: '遊艇',
              value: '遊艇',
            },
            {
              title: '露營帳篷',
              value: '露營帳篷',
            },
            {
              title: '電影院',
              value: '電影院',
            },
            {
              title: '健身房',
              value: '健身房',
            },
            {
              title: '沙灘',
              value: '沙灘',
            },
            {
              title: '溫泉',
              value: '溫泉',
            },
            {
              title: '夜店',
              value: '夜店',
            },
            {
              title: '監獄',
              value: '監獄',
            },
            {
              title: '教堂',
              value: '教堂',
            },
          ],
        },
        {
          name: 'sort',
          title: '排序方式',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          value: '1',
        },
      ],
    },
    {
      id: 'tagPlotModule',
      title: '故事剧情',
      description: '按故事剧情筛选',
      requiresWebView: false,
      functionName: 'loadByTagPlot',
      cacheDuration: 600,
      params: [
        {
          name: 'sort_by',
          title: '故事剧情',
          type: 'enumeration',
          value: '純愛',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '純愛',
              value: '純愛',
            },
            {
              title: '戀愛喜劇',
              value: '戀愛喜劇',
            },
            {
              title: '後宮',
              value: '後宮',
            },
            {
              title: '十指緊扣',
              value: '十指緊扣',
            },
            {
              title: '開大車',
              value: '開大車',
            },
            {
              title: 'NTR',
              value: 'NTR',
            },
            {
              title: '精神控制',
              value: '精神控制',
            },
            {
              title: '藥物',
              value: '藥物',
            },
            {
              title: '痴漢',
              value: '痴漢',
            },
            {
              title: '阿嘿顏',
              value: '阿嘿顏',
            },
            {
              title: '哭泣',
              value: '哭泣',
            },
            {
              title: '精神崩潰',
              value: '精神崩潰',
            },
            {
              title: '獵奇',
              value: '獵奇',
            },
            {
              title: 'BDSM',
              value: 'BDSM',
            },
            {
              title: '綑綁',
              value: '綑綁',
            },
            {
              title: '眼罩',
              value: '眼罩',
            },
            {
              title: '項圈',
              value: '項圈',
            },
            {
              title: '調教',
              value: '調教',
            },
            {
              title: '異物插入',
              value: '異物插入',
            },
            {
              title: '尋歡洞',
              value: '尋歡洞',
            },
            {
              title: '肉便器',
              value: '肉便器',
            },
            {
              title: '性奴隸',
              value: '性奴隸',
            },
            {
              title: '胃凸',
              value: '胃凸',
            },
            {
              title: '強制',
              value: '強制',
            },
            {
              title: '輪姦',
              value: '輪姦',
            },
            {
              title: '凌辱',
              value: '凌辱',
            },
            {
              title: '性暴力',
              value: '性暴力',
            },
            {
              title: '逆強制',
              value: '逆強制',
            },
            {
              title: '女王樣',
              value: '女王樣',
            },
            {
              title: '榨精',
              value: '榨精',
            },
            {
              title: '母女丼',
              value: '母女丼',
            },
            {
              title: '姐妹丼',
              value: '姐妹丼',
            },
            {
              title: '出軌',
              value: '出軌',
            },
            {
              title: '醉酒',
              value: '醉酒',
            },
            {
              title: '攝影',
              value: '攝影',
            },
            {
              title: '睡眠姦',
              value: '睡眠姦',
            },
            {
              title: '機械姦',
              value: '機械姦',
            },
            {
              title: '蟲姦',
              value: '蟲姦',
            },
            {
              title: '性轉換',
              value: '性轉換',
            },
            {
              title: '百合',
              value: '百合',
            },
            {
              title: '耽美',
              value: '耽美',
            },
            {
              title: '時間停止',
              value: '時間停止',
            },
            {
              title: '異世界',
              value: '異世界',
            },
            {
              title: '怪獸',
              value: '怪獸',
            },
            {
              title: '哥布林',
              value: '哥布林',
            },
            {
              title: '世界末日',
              value: '世界末日',
            },
          ],
        },
        {
          name: 'sort',
          title: '排序方式',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          value: '1',
        },
      ],
    },
    {
      id: 'tagPosModule',
      title: '性交体位',
      description: '按性交体位筛选',
      requiresWebView: false,
      functionName: 'loadByTagPos',
      cacheDuration: 600,
      params: [
        {
          name: 'sort_by',
          title: '性交体位',
          type: 'enumeration',
          value: '手交',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '手交',
              value: '手交',
            },
            {
              title: '指交',
              value: '指交',
            },
            {
              title: '玩乳頭',
              value: '玩乳頭',
            },
            {
              title: '乳交',
              value: '乳交',
            },
            {
              title: '乳頭交',
              value: '乳頭交',
            },
            {
              title: '肛交',
              value: '肛交',
            },
            {
              title: '雙洞齊下',
              value: '雙洞齊下',
            },
            {
              title: '腳交',
              value: '腳交',
            },
            {
              title: '素股',
              value: '素股',
            },
            {
              title: '拳交',
              value: '拳交',
            },
            {
              title: '3P',
              value: '3P',
            },
            {
              title: '群交',
              value: '群交',
            },
            {
              title: '口交',
              value: '口交',
            },
            {
              title: '跪舔',
              value: '跪舔',
            },
            {
              title: '深喉嚨',
              value: '深喉嚨',
            },
            {
              title: '口爆',
              value: '口爆',
            },
            {
              title: '吞精',
              value: '吞精',
            },
            {
              title: '舔蛋蛋',
              value: '舔蛋蛋',
            },
            {
              title: '舔穴',
              value: '舔穴',
            },
            {
              title: '69',
              value: '69',
            },
            {
              title: '自慰',
              value: '自慰',
            },
            {
              title: '腋交',
              value: '腋交',
            },
            {
              title: '舔腋下',
              value: '舔腋下',
            },
            {
              title: '髮交',
              value: '髮交',
            },
            {
              title: '舔耳朵',
              value: '舔耳朵',
            },
            {
              title: '舔腳',
              value: '舔腳',
            },
            {
              title: '內射',
              value: '內射',
            },
            {
              title: '外射',
              value: '外射',
            },
            {
              title: '顏射',
              value: '顏射',
            },
            {
              title: '潮吹',
              value: '潮吹',
            },
            {
              title: '懷孕',
              value: '懷孕',
            },
            {
              title: '噴奶',
              value: '噴奶',
            },
            {
              title: '放尿',
              value: '放尿',
            },
            {
              title: '排便',
              value: '排便',
            },
            {
              title: '騎乘位',
              value: '騎乘位',
            },
            {
              title: '背後位',
              value: '背後位',
            },
            {
              title: '側面位',
              value: '側面位',
            },
            {
              title: '顏面騎乘',
              value: '顏面騎乘',
            },
            {
              title: '火車便當',
              value: '火車便當',
            },
            {
              title: '一字馬',
              value: '一字馬',
            },
            {
              title: '性玩具',
              value: '性玩具',
            },
            {
              title: '飛機杯',
              value: '飛機杯',
            },
            {
              title: '跳蛋',
              value: '跳蛋',
            },
            {
              title: '毒龙钻',
              value: '毒龍鑽',
            },
            {
              title: '触手',
              value: '觸手',
            },
            {
              title: '兽交',
              value: '獸交',
            },
            {
              title: '颈手枷',
              value: '頸手枷',
            },
            {
              title: '扯头发',
              value: '扯頭髮',
            },
            {
              title: '掐脖子',
              value: '掐脖子',
            },
            {
              title: '打屁股',
              value: '打屁股',
            },
            {
              title: '肉棒打脸',
              value: '肉棒打臉',
            },
            {
              title: '阴道外翻',
              value: '陰道外翻',
            },
            {
              title: '男乳首责',
              value: '男乳首責',
            },
            {
              title: '接吻',
              value: '接吻',
            },
            {
              title: '舌吻',
              value: '舌吻',
            },
            {
              title: 'POV',
              value: 'POV',
            },
          ],
        },
        {
          name: 'sort',
          title: '排序方式',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '全部',
              value: 'all',
            },
            {
              title: '最新上市',
              value: 'new_release',
            },
            {
              title: '最新上传',
              value: 'latest_upload',
            },
            {
              title: '本日排行',
              value: 'daily_rank',
            },
            {
              title: '本周排行',
              value: 'weekly_rank',
            },
            {
              title: '本月排行',
              value: 'monthly_rank',
            },
            {
              title: '观看次数',
              value: 'views',
            },
            {
              title: '点赞比例',
              value: 'likes',
            },
            {
              title: '时长最长',
              value: 'duration',
            },
            {
              title: '他们在看',
              value: 'watching',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
          value: '1',
        },
      ],
    },
  ],
};
const BASE_URL = 'https://hanime1.me',
  REQUEST_TIMEOUT = 12000,
  S2T_MAP = {
    无码: '無碼',
    AI解码: 'AI解碼',
    中文字幕: '中文字幕',
    中文配音: '中文配音',
    同人作品: '同人作品',
    断面图: '斷面圖',
    动态: '動態',
    动画: '動畫',
    里番: '裏番',
    泡面番: '泡麵番',
    新番预告: '新番預告',
    师生: '師生',
    情侣: '情侶',
    青梅竹马: '青梅竹馬',
    处女: '處女',
    御姐: '御姐',
    熟女: '熟女',
    女教师: '女教師',
    男教师: '男教師',
    女医生: '女醫生',
    女病人: '女病人',
    护士: '護士',
    女警: '女警',
    女仆: '女僕',
    魔女: '魔女',
    风俗娘: '風俗娘',
    女战士: '女戰士',
    女骑士: '女騎士',
    异种族: '異種族',
    妖精: '妖精',
    魔物娘: '魔物娘',
    吸血鬼: '吸血鬼',
    兽娘: '獸娘',
    机械娘: '機械娘',
    痴女: '痴女',
    不良少女: '不良少女',
    傲娇: '傲嬌',
    病娇: '病嬌',
    无口: '無口',
    无表情: '無表情',
    伪娘: '偽娘',
    短发: '短髮',
    马尾: '馬尾',
    双马尾: '雙馬尾',
    丸子头: '丸子頭',
    乳环: '乳環',
    舌环: '舌環',
    贫乳: '貧乳',
    黑皮肤: '黑皮膚',
    晒痕: '曬痕',
    眼镜娘: '眼鏡娘',
    兽耳: '獸耳',
    尖耳朵: '尖耳朵',
    异色瞳: '異色瞳',
    肌肉女: '肌肉女',
    阴毛: '陰毛',
    腋毛: '腋毛',
    大屌: '大屌',
    黑屌: '黑屌',
    着衣: '著衣',
    体操服: '體操服',
    泳装: '泳裝',
    死库水: '死庫水',
    和服: '和服',
    围裙: '圍裙',
    啦啦队: '啦啦隊',
    丝袜: '絲襪',
    吊袜带: '吊襪帶',
    热裤: '熱褲',
    迷你裙: '迷你裙',
    性感内衣: '性感內衣',
    紧身衣: '緊身衣',
    丁字裤: '丁字褲',
    高跟鞋: '高跟鞋',
    睡衣: '睡衣',
    婚纱: '婚紗',
    古装: '古裝',
    刺青: '刺青',
    淫纹: '淫紋',
    身体写字: '身體寫字',
    校园: '校園',
    图书馆: '圖書館',
    体育仓库: '體育倉庫',
    游泳池: '游泳池',
    爱情宾馆: '愛情賓館',
    医院: '醫院',
    办公室: '辦公室',
    窗边: '窗邊',
    公共厕所: '公共廁所',
    公众场合: '公眾場合',
    公眾场合: '公眾場合',
    户外野战: '戶外野戰',
    电车: '電車',
    车震: '車震',
    游艇: '遊艇',
    露营帐篷: '露營帳篷',
    电影院: '電影院',
    健身房: '健身房',
    沙滩: '沙灘',
    温泉: '溫泉',
    监狱: '監獄',
    纯爱: '純愛',
    恋爱喜剧: '戀愛喜劇',
    后宫: '後宮',
    十指紧扣: '十指緊扣',
    开大车: '開大車',
    精神控制: '精神控制',
    药物: '藥物',
    痴汉: '痴漢',
    阿嘿颜: '阿嘿顏',
    哭泣: '哭泣',
    精神崩溃: '精神崩潰',
    猎奇: '獵奇',
    捆绑: '綑綁',
    捆綁: '綑綁',
    眼罩: '眼罩',
    项圈: '項圈',
    调教: '調教',
    异物插入: '異物插入',
    寻欢洞: '尋歡洞',
    肉便器: '肉便器',
    性奴隶: '性奴隸',
    胃凸: '胃凸',
    强制: '強制',
    轮奸: '輪姦',
    性暴力: '性暴力',
    逆强制: '逆強制',
    女王样: '女王樣',
    榨精: '榨精',
    出轨: '出軌',
    醉酒: '醉酒',
    摄影: '攝影',
    睡眠奸: '睡眠姦',
    机械奸: '機械姦',
    虫奸: '蟲姦',
    性转换: '性轉換',
    时间停止: '時間停止',
    异世界: '異世界',
    怪兽: '怪獸',
    哥布林: '哥布林',
    世界末日: '世界末日',
    手交: '手交',
    指交: '指交',
    玩乳头: '玩乳頭',
    乳交: '乳交',
    乳头交: '乳頭交',
    肛交: '肛交',
    双洞齐下: '雙洞齊下',
    脚交: '腳交',
    拳交: '拳交',
    群交: '群交',
    口交: '口交',
    深喉咙: '深喉嚨',
    吞精: '吞精',
    舔蛋蛋: '舔蛋蛋',
    自慰: '自慰',
    腋交: '腋交',
    舔腋下: '舔腋下',
    发交: '髮交',
    舔耳朵: '舔耳朵',
    舔脚: '舔腳',
    内射: '內射',
    外射: '外射',
    颜射: '顏射',
    潮吹: '潮吹',
    怀孕: '懷孕',
    喷奶: '噴奶',
    放尿: '放尿',
    排便: '排便',
    骑乘位: '騎乘位',
    背后位: '背後位',
    侧面位: '側面位',
    颜面骑乘: '顏面騎乘',
    火车便当: '火車便當',
    一字马: '一字馬',
    性玩具: '性玩具',
    飞机杯: '飛機杯',
    跳蛋: '跳蛋',
    毒龙钻: '毒龍鑽',
    触手: '觸手',
    兽交: '獸交',
    颈手枷: '頸手枷',
    扯头发: '扯頭髮',
    掐脖子: '掐脖子',
    打屁股: '打屁股',
    肉棒打脸: '肉棒打臉',
    阴道外翻: '陰道外翻',
    男乳首责: '男乳首責',
    接吻: '接吻',
    舌吻: '舌吻',
    POV: 'POV',
  },
  SORTED_S2T_KEYS = Object.keys(S2T_MAP).sort((arg0, arg1) => arg1.length - arg0.length);
function convertToTraditional(arg0) {
  if (!arg0) return '';
  let v0 = arg0;
  for (const v1 of SORTED_S2T_KEYS) {
    v0.includes(v1) && (v0 = v0.split(v1).join(S2T_MAP[v1]));
  }
  return v0;
}
function getCommonHeaders(arg0 = BASE_URL + '/') {
  return {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    Referer: arg0,
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  };
}
async function httpGetWithTimeout(arg0, arg1) {
  return Widget.http.get(arg0, {
    headers: getCommonHeaders(arg1),
    timeout: REQUEST_TIMEOUT,
  });
}
function normalizeImageUrl(arg0) {
  if (!arg0) return '';
  if (arg0.startsWith('//')) return 'https:' + arg0;
  if (arg0.startsWith('/')) return BASE_URL + arg0;
  if (!arg0.startsWith('http')) return BASE_URL + '/' + arg0;
  return arg0;
}
function normalizeWatchUrl(arg0) {
  if (!arg0) return '';
  if (arg0.startsWith('http')) return arg0;
  if (arg0.startsWith('/')) return BASE_URL + arg0;
  return BASE_URL + '/' + arg0;
}
function stripHtmlText(arg0) {
  return (arg0 || '').replace(/\s+/g, '\x20').trim();
}
function safeText(arg0, arg1 = '') {
  const v0 = stripHtmlText(arg0);
  return v0 || arg1;
}
function encodeLink(arg0) {
  return 'hl:' + JSON.stringify(arg0);
}
function decodeLink(arg0) {
  const v0 = String(arg0 || '');
  if (v0.startsWith('hl:'))
    try {
      return JSON.parse(v0.substring(3));
    } catch (v1) {
      return {
        url: v0.substring(3),
      };
    }
  return {
    url: v0,
  };
}
function extractCardData(arg0, arg1) {
  const v0 =
      arg0.attr('href') ||
      arg0.find('a.overlay').attr('href') ||
      arg0.find('a.video-link').attr('href') ||
      '',
    v1 = normalizeWatchUrl(v0);
  if (!v1 || arg1.has(v1) || !/\/watch\?v=\d+/.test(v1)) return null;
  const v2 = safeText(
    arg0.find('.home-rows-videos-title, .card-mobile-title, div.title').first().text()
  );
  if (!v2) return null;
  const v3 = arg0.find('img'),
    v4 = arg0.hasClass('related-watch-wrap') && v3.length >= 2 ? v3.eq(1) : v3.first(),
    v5 = v4.attr('data-src') || v4.attr('data-original') || v4.attr('src') || '',
    v6 = safeText(arg0.find('div.duration, .card-mobile-duration').first().text()) || undefined,
    v7 = arg0.find('.stat-item, .subtitle').text() || '',
    v8 = v7.match(/(\d+%)/),
    v9 = v8 ? v8[1] : undefined,
    v10 = v7.match(/\d{4}-\d{2}-\d{2}/);
  let v11 = v10 ? v10[0] : undefined;
  if (!v11) {
    const v12 = safeText(arg0.find('.subtitle-time').first().text()).replace(/^[•·\s]+/, '');
    if (v12) v11 = convertToTraditional(v12);
    else {
      const v13 = v7.match(/(\d+\s*(?:秒|分鐘|分钟|小時|小时|天|週|周|個月|个月|年)前)/);
      if (v13) v11 = convertToTraditional(v13[1]);
    }
  }
  return (
    arg1.add(v1),
    {
      link: v1,
      title: v2,
      poster: v5,
      durationText: v6,
      releaseDate: v11,
      rating: v9,
    }
  );
}
function buildCards(arg0) {
  const v0 = [],
    v1 = new Set();
  return (
    arg0('a[href*="/watch?v="]').each((arg1, arg2) => {
      const v2 = arg0(arg2);
      if (
        !v2.find('.home-rows-videos-div').length &&
        !v2.find('.home-rows-videos-title').length &&
        !v2.find('.card-mobile-title').length &&
        !v2.hasClass('overlay') &&
        !v2.find('img').length
      )
        return;
      const v3 = v2.attr('href') || '';
      if (v1.has(v3)) return;
      (v1.add(v3), v0.push(v2));
    }),
    arg0('.related-watch-wrap').each((arg1, arg2) => {
      const v2 = arg0(arg2);
      if (v2.closest('#playlist-scroll').length) return;
      const v3 = v2.find('a.overlay').attr('href') || '';
      if (v1.has(v3)) return;
      (v1.add(v3), v0.push(v2));
    }),
    arg0('div.video-item-container').each((arg1, arg2) => {
      const v2 = arg0(arg2),
        v3 = v2.find('a.video-link').attr('href') || '';
      if (v1.has(v3)) return;
      (v1.add(v3), v0.push(v2));
    }),
    v0
  );
}
function parseListHtml(arg0, arg1 = 'movie') {
  if (!arg0 || !arg0.trim()) return [];
  const v0 = Widget.html.load(arg0),
    v1 = [],
    v2 = new Set();
  return (
    buildCards(v0).forEach((arg2) => {
      const v3 = extractCardData(arg2, v2);
      if (!v3) return;
      const { link: v4, title: v5, poster: v6, durationText: v7, releaseDate: v8, rating: v9 } = v3,
        v10 = normalizeImageUrl(v6),
        v11 = convertToTraditional(v5);
      v1.push({
        id: v4,
        type: 'url',
        title: v11,
        posterPath: undefined,
        backdropPath: v10 || undefined,
        durationText: v7,
        releaseDate: v8,
        rating: v9,
        link: encodeLink({
          url: v4,
          title: v11,
          poster: v10,
          isPortrait: false,
          mediaType: arg1,
        }),
        mediaType: arg1,
        playerType: 'system',
      });
    }),
    v1
  );
}
function parseListHtmlPortrait(arg0, arg1 = 'tv') {
  if (!arg0 || !arg0.trim()) return [];
  const v0 = Widget.html.load(arg0),
    v1 = [],
    v2 = new Set();
  return (
    buildCards(v0).forEach((arg2) => {
      const v3 = extractCardData(arg2, v2);
      if (!v3) return;
      const { link: v4, title: v5, poster: v6, durationText: v7, releaseDate: v8, rating: v9 } = v3,
        v10 = normalizeImageUrl(v6),
        v11 = convertToTraditional(v5);
      v1.push({
        id: v4,
        type: 'url',
        title: v11,
        posterPath: v10 || undefined,
        backdropPath: undefined,
        durationText: v7,
        releaseDate: v8,
        rating: v9,
        link: encodeLink({
          url: v4,
          title: v11,
          poster: v10,
          isPortrait: true,
          mediaType: arg1,
        }),
        mediaType: arg1,
        playerType: 'system',
      });
    }),
    v1
  );
}
function parseListHtmlSearch(arg0, arg1 = 'movie') {
  if (!arg0 || !arg0.trim()) return [];
  const v0 = Widget.html.load(arg0),
    v1 = [],
    v2 = new Set();
  return (
    buildCards(v0).forEach((arg2) => {
      const v3 = extractCardData(arg2, v2);
      if (!v3) return;
      const { link: v4, title: v5, poster: v6, durationText: v7, releaseDate: v8, rating: v9 } = v3,
        v10 = normalizeImageUrl(v6),
        v11 = convertToTraditional(v5);
      v1.push({
        id: v4,
        type: 'url',
        title: v11,
        posterPath: v10 || undefined,
        backdropPath: v10 || undefined,
        durationText: v7,
        releaseDate: v8,
        rating: v9,
        link: encodeLink({
          url: v4,
          title: v11,
          poster: v10,
          isPortrait: false,
          mediaType: arg1,
        }),
        mediaType: arg1,
        playerType: 'system',
      });
    }),
    v1
  );
}
async function fetchAndParse(arg0, arg1, arg2 = parseListHtml, arg3 = 'movie') {
  try {
    const v0 = await httpGetWithTimeout(arg0, arg1);
    return arg2(v0.data || '', arg3);
  } catch (v0) {
    return [];
  }
}
function mapSortToApi(arg0) {
  if (!arg0) return '';
  const v0 = {
    new_release: '最新上市',
    latest_upload: '最新上傳',
    daily_rank: '本日排行',
    weekly_rank: '本週排行',
    monthly_rank: '本月排行',
    views: '觀看次數',
    likes: '讚好比例',
    duration: '時長最長',
    watching: '他們在看',
  };
  return v0[arg0] || '';
}
function mapGenreToApi(arg0) {
  if (!arg0) return '';
  const v0 = {
    rifan: '裏番',
    paomian: '泡麵番',
    motion: 'Motion Anime',
    '3dcg': '3DCG',
    '2d': '2D動畫',
    '2_5d': '2.5D',
    ai: 'AI生成',
    mmd: 'MMD',
    cosplay: 'Cosplay',
    preview: '新番預告',
  };
  return v0[arg0] || '';
}
function mapTimeToApi(arg0) {
  if (!arg0) return '';
  const v0 = {
    '24h': '過去 24 小時',
    '2d': '過去 2 天',
    '1w': '過去 1 週',
    '1m': '過去 1 個月',
    '3m': '過去 3 個月',
    '1y': '過去 1 年',
  };
  return v0[arg0] || '';
}
function mapDurationToApi(arg0) {
  if (!arg0) return '';
  const v0 = {
    '1m_plus': '1 分鐘 +',
    '5m_plus': '5 分鐘 +',
    '10m_plus': '10 分鐘 +',
    '20m_plus': '20 分鐘 +',
    '30m_plus': '30 分鐘 +',
    '60m_plus': '60 分鐘 +',
    '0_10m': '0 - 10 分鐘',
    '0_20m': '0 - 20 分鐘',
  };
  return v0[arg0] || '';
}
function buildSiteUrl(arg0, arg1 = []) {
  const v0 = arg0.startsWith('/') ? arg0 : '/' + arg0,
    v1 = arg1.filter(Boolean).join('&');
  return v1 ? '' + BASE_URL + v0 + '?' + v1 : '' + BASE_URL + v0;
}
function appendTagsToQuery(arg0, arg1) {
  const v0 = ['tag_attr', 'tag_rel', 'tag_role', 'tag_body', 'tag_plot', 'tag_loc', 'tag_pos'];
  v0.forEach((arg2) => {
    const v1 = String(arg0[arg2] || '');
    if (!v1 || v1 === 'all') return;
    v1.split(/[\s,，]+/).forEach((arg3) => {
      arg3 &&
        arg3 !== 'all' &&
        arg1.push('tags%5B%5D=' + encodeURIComponent(convertToTraditional(arg3)));
    });
  });
}
async function handleJumpUrl(arg0, arg1) {
  const v0 = String(arg0.genreId || arg0.peopleId || '');
  if (!v0 || !v0.startsWith('http')) return null;
  let v1 = v0;
  if (v1.includes('/search')) {
    const v4 = [],
      v5 = mapGenreToApi(arg0.genre);
    v5 && !/[?&]genre=/.test(v1) && v4.push('genre=' + encodeURIComponent(v5));
    const v6 = mapSortToApi(arg0.sort) || mapSortToApi(arg0.sort_by);
    v6 &&
      (/[?&]sort=/.test(v1)
        ? (v1 = v1.replace(/([?&])sort=[^&]*/, '$1sort=' + encodeURIComponent(v6)))
        : v4.push('sort=' + encodeURIComponent(v6)));
    const v7 = mapTimeToApi(arg0.upload_time);
    v7 && !/[?&]date=/.test(v1) && v4.push('date=' + encodeURIComponent(v7));
    const v8 = mapDurationToApi(arg0.duration_filter);
    v8 && !/[?&]duration=/.test(v1) && v4.push('duration=' + encodeURIComponent(v8));
    const v9 = [];
    (appendTagsToQuery(arg0, v9),
      v9.forEach((arg2) => {
        !v1.includes(arg2) && v4.push(arg2);
      }));
    if (v4.length > 0) {
      const v10 = v1.includes('?') ? '&' : '?';
      v1 = '' + v1 + v10 + v4.join('&');
    }
  }
  if (arg1 > 1) {
    const v4 = v1.includes('?') ? '&' : '?';
    v1 = '' + v1 + v4 + 'page=' + arg1;
  }
  let v2 = parseListHtml,
    v3 = 'movie';
  return (
    (v1.includes('%E8%A3%8F%E7%95%AA') ||
      v1.includes('%E6%B3%A1%E9%BA%B5%E7%95%AA') ||
      v1.includes('%E6%96%B0%E7%95%AA%E9%A0%90%E5%91%8A')) &&
      ((v2 = parseListHtmlPortrait), (v3 = 'tv')),
    fetchAndParse(v1, BASE_URL + '/', v2, v3)
  );
}
async function searchVideos(arg0 = {}) {
  const v0 = parseInt(String(arg0.page || '1'), 10) || 1,
    v1 = await handleJumpUrl(arg0, v0);
  if (v1) return v1;
  const v2 = String(arg0.keyword || '').trim(),
    v3 = mapSortToApi(arg0.sort_by || 'all'),
    v4 = [];
  if (v2) v4.push('query=' + encodeURIComponent(convertToTraditional(v2)));
  if (v3) v4.push('sort=' + encodeURIComponent(v3));
  appendTagsToQuery(arg0, v4);
  if (v0 > 1) v4.push('page=' + v0);
  const v5 = buildSiteUrl('/search', v4),
    v6 =
      v0 > 1
        ? buildSiteUrl(
            '/search',
            v4.map((arg1) => (arg1.startsWith('page=') ? 'page=' + (v0 - 1) : arg1))
          )
        : BASE_URL + '/';
  return fetchAndParse(v5, v6, parseListHtmlSearch, 'movie');
}
async function loadSearchList(arg0 = {}) {
  return searchVideos(arg0);
}
async function loadAdvancedGenreCore(arg0 = {}) {
  const v0 = parseInt(String(arg0.page || '1'), 10) || 1,
    v1 = await handleJumpUrl(arg0, v0);
  if (v1) return v1;
  const v2 = mapGenreToApi(arg0.genre),
    v3 = mapSortToApi(arg0.sort_by || 'all'),
    v4 = mapTimeToApi(arg0.upload_time),
    v5 = mapDurationToApi(arg0.duration_filter),
    v6 = [];
  if (v2) v6.push('genre=' + encodeURIComponent(v2));
  if (v3) v6.push('sort=' + encodeURIComponent(v3));
  if (v4) v6.push('date=' + encodeURIComponent(v4));
  if (v5) v6.push('duration=' + encodeURIComponent(v5));
  appendTagsToQuery(arg0, v6);
  if (v0 > 1) v6.push('page=' + v0);
  const v7 = buildSiteUrl('/search', v6),
    v8 =
      v0 > 1
        ? buildSiteUrl(
            '/search',
            v6.map((arg1) => (arg1.startsWith('page=') ? 'page=' + (v0 - 1) : arg1))
          )
        : BASE_URL + '/',
    v9 = ['rifan', 'paomian', 'preview'].includes(String(arg0.genre || '')),
    v10 = v9 ? 'tv' : 'movie';
  return fetchAndParse(v7, v8, v9 ? parseListHtmlPortrait : parseListHtml, v10);
}
async function loadAnimeGenre(arg0 = {}) {
  return loadAdvancedGenreCore({
    ...arg0,
    genre: arg0.genre || 'rifan',
  });
}
async function loadCategoryGenre(arg0 = {}) {
  return loadAdvancedGenreCore(arg0);
}
async function loadHotRankings(arg0 = {}) {
  const v0 = parseInt(String(arg0.page || '1'), 10) || 1,
    v1 = await handleJumpUrl(arg0, v0);
  if (v1) return v1;
  const v2 = String(arg0.sort_by || arg0.sort || 'watching'),
    v3 = mapSortToApi(v2) || '他們在看',
    v4 = [];
  if (v3) v4.push('sort=' + encodeURIComponent(v3));
  if (v0 > 1) v4.push('page=' + v0);
  const v5 = buildSiteUrl('/search', v4),
    v6 =
      v0 > 1
        ? buildSiteUrl(
            '/search',
            v4.map((arg1) => (arg1.startsWith('page=') ? 'page=' + (v0 - 1) : arg1))
          )
        : BASE_URL + '/';
  return fetchAndParse(v5, v6, parseListHtml, 'movie');
}
function buildTagModuleUrl(arg0) {
  const v0 = String(arg0.sort_by || ''),
    v1 = mapSortToApi(arg0.sort || 'all'),
    v2 = parseInt(String(arg0.page || '1'), 10) || 1,
    v3 = [];
  v0 && v0 !== 'all' && v3.push('tags%5B%5D=' + encodeURIComponent(convertToTraditional(v0)));
  v1 && v3.push('sort=' + encodeURIComponent(v1));
  if (v2 > 1) v3.push('page=' + v2);
  const v4 = buildSiteUrl('/search', v3),
    v5 =
      v2 > 1
        ? buildSiteUrl(
            '/search',
            v3.map((arg1) => (arg1.startsWith('page=') ? 'page=' + (v2 - 1) : arg1))
          )
        : BASE_URL + '/';
  return {
    url: v4,
    referer: v5,
  };
}
async function loadByTagCommon(arg0 = {}) {
  const v0 = parseInt(String(arg0.page || '1'), 10) || 1,
    v1 = await handleJumpUrl(arg0, v0);
  if (v1) return v1;
  const { url: v2, referer: v3 } = buildTagModuleUrl(arg0);
  return fetchAndParse(v2, v3, parseListHtml, 'movie');
}
async function loadByTagAttr(arg0 = {}) {
  return loadByTagCommon(arg0);
}
async function loadByTagRel(arg0 = {}) {
  return loadByTagCommon(arg0);
}
async function loadByTagRole(arg0 = {}) {
  return loadByTagCommon(arg0);
}
async function loadByTagBody(arg0 = {}) {
  return loadByTagCommon(arg0);
}
async function loadByTagLoc(arg0 = {}) {
  return loadByTagCommon(arg0);
}
async function loadByTagPlot(arg0 = {}) {
  return loadByTagCommon(arg0);
}
async function loadByTagPos(arg0 = {}) {
  return loadByTagCommon(arg0);
}
async function loadDetail(arg0) {
  const v0 = decodeLink(arg0),
    v1 = v0.url || arg0,
    v2 = v0.mediaType === 'tv' ? 'tv' : 'movie';
  try {
    const v3 = await httpGetWithTimeout(v1, v1),
      v4 = v3.data || '',
      v5 = Widget.html.load(v4),
      v6 = v1,
      v7 = v1.match(/v=(\d+)/),
      v8 = v7 ? v7[1] : '',
      v9 = [];
    v5('video source[src]').each((arg1, arg2) => {
      const v32 = v5(arg2),
        v33 = (v32.attr('src') || '').replace(/&amp;/g, '&'),
        v34 = parseInt(v32.attr('size') || '0', 10);
      if (v33 && v34 > 0)
        v9.push({
          size: v34,
          url: v33,
        });
    });
    if (v9.length === 0) {
      const v32 = v4.match(/https?:\/\/[^"'\s]+\.mp4[^"'\s]*/);
      if (v32)
        v9.push({
          size: 0,
          url: v32[0].replace(/&amp;/g, '&'),
        });
    }
    (v9.sort((arg1, arg2) => arg2.size - arg1.size),
      await Widget.storage.set('hanime1_res_' + v1, JSON.stringify(v9)));
    const v10 = v0.title || safeText(v5('#shareBtn-title').text()) || '影片详情';
    let v11 = v10
      .replace(/\[.*?\]|【.*?】/g, '')
      .replace(/\s*\d+\s*$/, '')
      .trim();
    v11 = convertToTraditional(v11) || convertToTraditional(v10);
    let v12 = '';
    const v13 = v5('.video-details-wrapper').text() || '',
      v14 = v13.match(/\d{4}-\d{2}-\d{2}/);
    v14 && (v12 = v14[0]);
    let v15 = '';
    const v16 = v5('.video-details-wrapper .video-caption-text');
    if (v16.length) {
      let v32 = v16.html() || '';
      v32 = v32.replace(/<br\s*\/?>/gi, '\x0a');
      const v33 = v32
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, '\x20')
        .replace(/&quot;/g, '\x22')
        .replace(/&#39;/g, '\x27');
      let v34 = v33.replace(/<[^>]+>/g, '');
      v34 = v34
        .split('\x0a')
        .map((arg1) => arg1.trim())
        .filter((arg1) => arg1.length > 0)
        .join('\x0a');
      if (v34) v15 = convertToTraditional(v34);
    }
    let v17 = [];
    v5('#playlist-scroll .playlist-hover-wrap.clickable-row').each((arg1, arg2) => {
      const v32 = v5(arg2),
        v33 = v32.attr('data-href') || '',
        v34 = v33.match(/v=(\d+)/);
      if (!v34) return;
      const v35 = v34[1],
        v36 = v32.find('.video-title a').text().trim() || v32.find('.video-title').text().trim(),
        v37 = convertToTraditional(v36),
        v38 = v32.find('.main-thumb'),
        v39 = v38.attr('data-src') || v38.attr('src'),
        v40 = normalizeImageUrl(v39) || undefined,
        v41 = safeText(v32.find('.duration').text());
      v17.push({
        vid: v35,
        linkUrl: normalizeWatchUrl(v33),
        title: v37,
        cover: v40,
        duration: v41,
        isCurrentClass: v32.hasClass('videos-scroll'),
      });
    });
    const v18 = new Set();
    v17 = v17.filter((arg1) => {
      if (v18.has(arg1.vid)) return false;
      return (v18.add(arg1.vid), true);
    });
    v17.length === 0
      ? v17.push({
          vid: v8,
          linkUrl: v1,
          title: convertToTraditional(v10),
          cover: normalizeImageUrl(v5('meta[property="og:image"]').attr('content') || v0.poster),
          duration: '',
          isCurrentClass: true,
        })
      : v17.reverse();
    let v19 = 1;
    v17.forEach((arg1, arg2) => {
      ((arg1.episode = arg2 + 1),
        arg1.vid === v8 || arg1.isCurrentClass
          ? ((arg1.isCurrent = true), (v19 = arg1.episode), (arg1.id = v1))
          : ((arg1.isCurrent = false), (arg1.id = arg1.linkUrl)));
    });
    let v20 = undefined,
      v21 = undefined;
    const v22 = normalizeImageUrl(v0.poster),
      v23 = normalizeImageUrl(v5('meta[property="og:image"]').attr('content')),
      v24 = v22 || v23;
    if (v24) {
      if (v24.includes('/cover/')) v20 = v24;
      else {
        if (v24.includes('/thumbnail/')) v21 = v24;
        else v0.isPortrait ? (v20 = v24) : (v21 = v24);
      }
    }
    let v25 = undefined;
    const v26 = [];
    if (v2 === 'tv') {
      const v32 = v17.map(async (arg1) => {
          if (arg1.isCurrent) return ((arg1.releaseDate = v12), (arg1.description = v15), arg1);
          try {
            const v34 = await httpGetWithTimeout(arg1.linkUrl, v1),
              v35 = Widget.html.load(v34.data || ''),
              v36 = v35('.video-details-wrapper').text() || '',
              v37 = v36.match(/\d{4}-\d{2}-\d{2}/);
            arg1.releaseDate = v37 ? v37[0] : undefined;
            const v38 = v35('.video-details-wrapper .video-caption-text');
            if (v38.length) {
              let v39 = v38.html() || '';
              v39 = v39.replace(/<br\s*\/?>/gi, '\x0a');
              const v40 = v39
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&nbsp;/g, '\x20')
                .replace(/&quot;/g, '\x22')
                .replace(/&#39;/g, '\x27');
              let v41 = v40.replace(/<[^>]+>/g, '');
              v41 = v41
                .split('\x0a')
                .map((arg2) => arg2.trim())
                .filter((arg2) => arg2.length > 0)
                .join('\x0a');
              if (v41) arg1.description = convertToTraditional(v41);
            }
          } catch (v34) {}
          return arg1;
        }),
        v33 = await Promise.all(v32);
      v25 = v33.map((arg1) => {
        let v34 = undefined,
          v35 = arg1.cover;
        return (
          arg1.isCurrent && ((v34 = v20), (v35 = v21 || arg1.cover)),
          {
            id: arg1.id || arg1.linkUrl,
            type: 'url',
            title: arg1.title,
            posterPath: v34,
            backdropPath: v35,
            description: arg1.description,
            durationText: arg1.duration || undefined,
            releaseDate: arg1.releaseDate,
            episode: arg1.episode,
            season: 1,
            mediaType: 'tv',
            link: encodeLink({
              url: arg1.isCurrent ? v1 : arg1.linkUrl,
              title: arg1.title,
              poster: arg1.cover,
              isPortrait: false,
              mediaType: 'tv',
            }),
          }
        );
      });
    } else
      v17.forEach((arg1) => {
        !arg1.isCurrent &&
          v26.push({
            id: arg1.linkUrl,
            type: 'url',
            title: arg1.title,
            posterPath: undefined,
            backdropPath: arg1.cover,
            description: 'ID: ' + arg1.vid,
            mediaType: 'movie',
            link: encodeLink({
              url: arg1.linkUrl,
              title: arg1.title,
              poster: arg1.cover,
              isPortrait: false,
              mediaType: 'movie',
            }),
          });
      });
    const v27 = [];
    v5('.single-video-tag a').each((arg1, arg2) => {
      const v32 = v5(arg2),
        v33 = safeText(v32.text());
      if (!v33 || v33 === 'add' || v33 === 'remove') return;
      const v34 = v33.replace(/\s*\(\d+\)$/, '').trim();
      if (!v34) return;
      let v35 = (v32.attr('href') || '').replace(/&amp;/g, '&');
      if (!v35) return;
      ((v35 = v35.replace(/[^\x00-\x7F]/g, (arg3) => encodeURIComponent(arg3))),
        v27.push({
          id: v35.startsWith('http') ? v35 : BASE_URL + v35,
          title: convertToTraditional(v34),
        }));
    });
    const v28 = [],
      v29 = new Set();
    v5('.video-details-wrapper a[href*="/user/"]').each((arg1, arg2) => {
      const v32 = v5(arg2),
        v33 = v32.parent().text() || '';
      if (v33.includes('上傳者') || v33.includes('上传者')) return;
      let v34 = v32.attr('href') || '';
      const v35 = v34.split('/user/')[1]?.['split'](/[?#]/)[0] || '';
      if (!v35) return;
      v34 = v34.replace(/[^\x00-\x7F]/g, (arg3) => encodeURIComponent(arg3));
      const v36 = v34.startsWith('http') ? v34 : BASE_URL + v34,
        v37 = v32.find('img'),
        v38 = v37.length >= 2 ? v37.eq(1) : v37.first(),
        v39 = normalizeImageUrl(v38.attr('src') || v38.attr('data-src') || ''),
        v40 = convertToTraditional(safeText(v38.attr('alt') || v32.text()));
      if (!v40 || v29.has(v36)) return;
      (v29.add(v36),
        v28.push({
          id: v36,
          title: v40,
          avatar: v39 || 'https://iili.io/KtHNnQS.png',
        }));
    });
    if (!v28.length) {
      const v32 = v5('#video-artist-name'),
        v33 = convertToTraditional(safeText(v32.text()));
      let v34 = v32.attr('href') || '';
      v33 &&
        v34 &&
        ((v34 = v34.replace(/[^\x00-\x7F]/g, (arg1) => encodeURIComponent(arg1))),
        v28.push({
          id: v34.startsWith('http') ? v34 : BASE_URL + v34,
          title: v33,
          avatar: 'https://iili.io/KtHNnQS.png',
        }));
    }
    const v30 = [],
      v31 = new Set([v1, v8]);
    return (
      v26.forEach((arg1) => {
        const v32 = String(arg1.id).match(/v=(\d+)/),
          v33 = v32 ? v32[1] : '';
        if (!v31.has(String(arg1.id)) && !v31.has(v33)) {
          v31.add(String(arg1.id));
          if (v33) v31.add(v33);
          v30.push(arg1);
        }
      }),
      v5(
        '#related-tabcontent a[href*="/watch?v="], .related-video-width a[href*="/watch?v="], .related-watch-wrap a[href*="/watch?v="]'
      ).each((arg1, arg2) => {
        const v32 = v5(arg2),
          v33 = normalizeWatchUrl(v32.attr('href')),
          v34 = v33.match(/v=(\d+)/);
        if (!v34) return;
        const v35 = v34[1];
        if (v31.has(v33) || v31.has(v35)) return;
        const v36 =
          safeText(v32.find('.home-rows-videos-title, .title, .card-mobile-title').text()) ||
          v32.closest('.video-item-container').attr('title') ||
          '';
        if (!v36 || v36.includes('点点广告') || v36.includes('贊助我們')) return;
        const v37 = v32.find('img').attr('data-src') || v32.find('img').attr('src'),
          v38 = normalizeImageUrl(v37) || undefined;
        (v31.add(v33),
          v31.add(v35),
          v30.push({
            id: v33,
            type: 'url',
            title: convertToTraditional(v36),
            posterPath: undefined,
            backdropPath: v38,
            description: 'ID: ' + v35,
            mediaType: 'movie',
            link: encodeLink({
              url: v33,
              title: convertToTraditional(v36),
              poster: v38,
              isPortrait: false,
              mediaType: 'movie',
            }),
          }));
      }),
      {
        id: v6,
        type: 'url',
        title: v11,
        description: v15,
        genreItems: v27.length > 0 ? v27 : undefined,
        peoples: v28.length > 0 ? v28 : undefined,
        releaseDate: v12 || undefined,
        posterPath: v20,
        backdropPath: v21,
        mediaType: v2,
        episode: v2 === 'tv' ? v19 : undefined,
        link: v1,
        episodeItems: v25,
        relatedItems: v30.length > 0 ? v30 : undefined,
        customHeaders: getCommonHeaders(v1),
      }
    );
  } catch (v3) {
    return {
      id: v1,
      type: 'url',
      title: '影片加载异常',
      description: '网络超时或解析异常，请刷新重试。',
      posterPath: v0.poster,
      backdropPath: v0.poster,
      mediaType: v2,
      link: v1,
    };
  }
}
async function loadResource(arg0 = {}) {
  const v0 = decodeLink(arg0.link || ''),
    v1 = v0.url || String(arg0.link || ''),
    v2 = v0.title || '影片资源';
  let v3 = v2;
  const v4 = v2.match(/(.*?)\s*(\d+)$/);
  v4 && (v3 = '[' + v4[2] + ']\x20' + v2);
  if (!v1) return [];
  let v5 = [];
  const v6 = await Widget.storage.get('hanime1_res_' + v1);
  if (v6)
    try {
      const v8 =
        typeof v6 === 'object' && v6 !== null && 'value' in v6 ? String(v6.value) : String(v6);
      v5 = JSON.parse(v8);
    } catch (v8) {}
  if (v5.length === 0)
    try {
      const v8 = await httpGetWithTimeout(v1, v1),
        v9 = v8.data || '',
        v10 = Widget.html.load(v9);
      v10('video source[src]').each((arg1, arg2) => {
        const v11 = parseInt(v10(arg2).attr('size') || '0', 10),
          v12 = (v10(arg2).attr('src') || '').replace(/&amp;/g, '&');
        if (v12 && v11 > 0)
          v5.push({
            size: v11,
            url: v12,
          });
      });
      if (v5.length === 0) {
        const v11 = v9.match(/https?:\/\/[^"'\s]+\.mp4[^"'\s]*/);
        if (v11)
          v5.push({
            size: 0,
            url: v11[0].replace(/&amp;/g, '&'),
          });
      }
      (v5.sort((arg1, arg2) => arg2.size - arg1.size),
        v5.length > 0 && (await Widget.storage.set('hanime1_res_' + v1, JSON.stringify(v5))));
    } catch (v8) {}
  if (v5.length === 0) return [];
  const v7 = arg0.res_mode || 'all';
  return (
    v7 === 'highest' && v5.length > 0 && (v5 = [v5[0]]),
    v5.map((arg1) => {
      const v8 = arg1.size > 0 ? arg1.size + 'P' : '默认画质';
      return {
        name: v3,
        description: 'Hanime1 | ' + v8,
        url: arg1.url,
        playerType: 'app',
        customHeaders: getCommonHeaders(v1),
      };
    })
  );
}

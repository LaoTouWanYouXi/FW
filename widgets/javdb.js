/**
 * 【自动生成】请勿直接大范围编辑本文件
 * 源码模块: javdb/modules/
 * 重新构建: node javdb/build-javdb.js
 * 清单说明: javdb/modules/manifest.json
 */

/* ===== module: 00-header.js ===== */

/**
 * JavDB ForwardWidget 模块 v4
 * 管道：CategoryPath → jdforrepam API（绕过 CF）→ VideoItem
 * 登录：POST /v1/sessions（账号密码 → JWT）
 * 图片：复用“解密javdb.可视化.js”的 direct-dmm / MGStage 高清候选策略
 * 详情：按番号生成高清封面/剧照；简介含剧情+短评；trailers 预告片模块
 * 磁力：relatedItems 合并 JavDB API / 短评；展示体积·特征·来源，简介含文件名与转存说明
 * 光鸭：仅磁力转存（无顶层搜索、无 loadResource 播放源）
 * 浏览：可视化厂牌/分类 + 榜单（热播/有码/无码/FC2/欧美/女优等）；已移除全量演员/系列/标签/片商枚举
 */

/* ===== module: 02-config.js ===== */

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

/* ===== module: 15-visual-browse-modules.js ===== */

/* ========================= 可视化浏览/榜单模块元数据 ========================= */
/* 自 解密javdb.可视化.js 抽取：厂牌 / 分类 / 无码·FC2·欧美榜 / Top250 */

var VISUAL_TOP250_MODULE = {
      id: 'top250',
      title: 'TOP250',
      functionName: 'loadTop250',
      cacheDuration: 3600,
      params: [
        {
          name: 'ranking_type',
          title: '榜单类型',
          type: 'enumeration',
          value: 'all',
          enumOptions: [
            {
              title: '综合',
              value: 'all',
            },
            {
              title: '有码',
              value: 'type_0',
            },
            {
              title: '无码',
              value: 'type_1',
            },
            {
              title: 'FC2',
              value: 'type_3',
            },
            {
              title: '欧美',
              value: 'type_2',
            },
            {
              title: '2026年',
              value: '2026',
            },
            {
              title: '2025年',
              value: '2025',
            },
            {
              title: '2024年',
              value: '2024',
            },
            {
              title: '2023年',
              value: '2023',
            },
            {
              title: '2022年',
              value: '2022',
            },
            {
              title: '2021年',
              value: '2021',
            },
            {
              title: '2020年',
              value: '2020',
            },
            {
              title: '2019年',
              value: '2019',
            },
            {
              title: '2018年',
              value: '2018',
            },
            {
              title: '2017年',
              value: '2017',
            },
            {
              title: '2016年',
              value: '2016',
            },
            {
              title: '2015年',
              value: '2015',
            },
            {
              title: '2014年',
              value: '2014',
            },
            {
              title: '2013年',
              value: '2013',
            },
            {
              title: '2012年',
              value: '2012',
            },
            {
              title: '2011年',
              value: '2011',
            },
            {
              title: '2010年',
              value: '2010',
            },
            {
              title: '2009年',
              value: '2009',
            },
            {
              title: '2008年',
              value: '2008',
            },
          ],
        },
        {
          name: 'rank_display_style',
          title: '图样式',
          type: 'enumeration',
          value: 'poster',
          enumOptions: [
            {
              title: '竖图（海报）',
              value: 'poster',
            },
            {
              title: '横图（宽屏）',
              value: 'backdrop',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
        },
      ],
    };

var VISUAL_UNCENSORED_MODULE = {
      id: 'loadUncensored',
      title: '无码榜',
      functionName: 'loadUncensored',
      cacheDuration: 86400,
      params: [
        {
          name: 'period',
          title: '周期',
          type: 'enumeration',
          value: 'daily',
          enumOptions: [
            {
              title: '日榜',
              value: 'daily',
            },
            {
              title: '周榜',
              value: 'weekly',
            },
            {
              title: '月榜',
              value: 'monthly',
            },
          ],
        },
        {
          name: 'sort_by',
          title: '快速切换',
          type: 'enumeration',
          value: '',
          enumOptions: [
            {
              title: '周期选择',
              value: '',
            },
            {
              title: '日榜',
              value: 'daily',
            },
            {
              title: '周榜',
              value: 'weekly',
            },
            {
              title: '月榜',
              value: 'monthly',
            },
          ],
        },
        {
          name: 'rank_display_style',
          title: '图样式',
          type: 'enumeration',
          value: 'backdrop',
          enumOptions: [
            {
              title: '横图（宽屏）',
              value: 'backdrop',
            },
            {
              title: '竖图（海报）',
              value: 'poster',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
        },
      ],
    };

var VISUAL_FC2_MODULE = {
      id: 'loadFC2',
      title: 'FC2 榜',
      functionName: 'loadFC2',
      cacheDuration: 86400,
      params: [
        {
          name: 'period',
          title: '周期',
          type: 'enumeration',
          value: 'daily',
          enumOptions: [
            {
              title: '日榜',
              value: 'daily',
            },
            {
              title: '周榜',
              value: 'weekly',
            },
            {
              title: '月榜',
              value: 'monthly',
            },
          ],
        },
        {
          name: 'sort_by',
          title: '快速切换',
          type: 'enumeration',
          value: '',
          enumOptions: [
            {
              title: '周期选择',
              value: '',
            },
            {
              title: '日榜',
              value: 'daily',
            },
            {
              title: '周榜',
              value: 'weekly',
            },
            {
              title: '月榜',
              value: 'monthly',
            },
          ],
        },
        {
          name: 'rank_display_style',
          title: '图样式',
          type: 'enumeration',
          value: 'backdrop',
          enumOptions: [
            {
              title: '横图（宽屏）',
              value: 'backdrop',
            },
            {
              title: '竖图（海报）',
              value: 'poster',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
        },
      ],
    };

var VISUAL_WESTERN_MODULE = {
      id: 'loadWestern',
      title: '欧美榜',
      functionName: 'loadWestern',
      cacheDuration: 86400,
      params: [
        {
          name: 'period',
          title: '周期',
          type: 'enumeration',
          value: 'daily',
          enumOptions: [
            {
              title: '日榜',
              value: 'daily',
            },
            {
              title: '周榜',
              value: 'weekly',
            },
            {
              title: '月榜',
              value: 'monthly',
            },
          ],
        },
        {
          name: 'sort_by',
          title: '快速切换',
          type: 'enumeration',
          value: '',
          enumOptions: [
            {
              title: '周期选择',
              value: '',
            },
            {
              title: '日榜',
              value: 'daily',
            },
            {
              title: '周榜',
              value: 'weekly',
            },
            {
              title: '月榜',
              value: 'monthly',
            },
          ],
        },
        {
          name: 'rank_display_style',
          title: '图样式',
          type: 'enumeration',
          value: 'backdrop',
          enumOptions: [
            {
              title: '横图（宽屏）',
              value: 'backdrop',
            },
            {
              title: '竖图（海报）',
              value: 'poster',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
        },
      ],
    };

var VISUAL_MAKER_MODULE = {
      id: 'loadMaker',
      title: '厂牌',
      functionName: 'loadMaker',
      cacheDuration: 86400,
      params: [
        {
          name: 'maker',
          title: '厂牌',
          type: 'enumeration',
          value: '7R',
          enumOptions: [
            {
              title: 'S1 NO.1 STYLE',
              value: '7R',
            },
            {
              title: 'SOD Create',
              value: 'q6',
            },
            {
              title: 'MOODYZ',
              value: 'zKW',
            },
            {
              title: 'FALENO',
              value: 'Y46',
            },
            {
              title: 'PRESTIGE,プレステージ',
              value: '6M',
            },
            {
              title: 'ABC/妄想族',
              value: 'DYK',
            },
            {
              title: 'ナチュラルハイ',
              value: 'gZ',
            },
            {
              title: 'ワープエンタテインメント',
              value: 'e1',
            },
            {
              title: '変态紳士倶楽部',
              value: 'ARy',
            },
            {
              title: 'JET映像',
              value: 'zbJ',
            },
            {
              title: 'ROOKIE',
              value: 'JAA',
            },
            {
              title: 'Hunter',
              value: '2Vm',
            },
            {
              title: 'Jackson',
              value: 'GP2q',
            },
            {
              title: 'セレブの友',
              value: 'deB',
            },
            {
              title: 'LEO',
              value: 'zW',
            },
            {
              title: '山と空',
              value: 'AEO',
            },
            {
              title: 'ミル',
              value: '4dR',
            },
            {
              title: '犬/妄想族',
              value: 'mw5',
            },
            {
              title: 'DAHLIA',
              value: '5458',
            },
            {
              title: 'ケイ・エム・プロデュース',
              value: '8V9',
            },
            {
              title: 'プレステージプレミアム(PRESTIGE PREMIUM)',
              value: 'Qap',
            },
            {
              title: '桃太郎映像出版',
              value: 'pk',
            },
            {
              title: 'アイエナジー',
              value: 'W7',
            },
            {
              title: 'LUNATICS',
              value: '557',
            },
            {
              title: 'シロウトTV',
              value: 'Jnxd',
            },
            {
              title: 'DANDY',
              value: '1EW',
            },
            {
              title: 'ダスッ！',
              value: 'ZyP',
            },
            {
              title: '溜池ゴロー',
              value: 'Ww7',
            },
            {
              title: '本中',
              value: '89V',
            },
            {
              title: 'ディープス',
              value: 'D8',
            },
            {
              title: 'バビロン/妄想族',
              value: 'Qvyq',
            },
            {
              title: '美',
              value: 'aeX',
            },
            {
              title: 'E-BODY',
              value: 'bgA',
            },
            {
              title: 'ラグジュTV',
              value: 'mbW5',
            },
            {
              title: 'S-Cute',
              value: 'gBA',
            },
            {
              title: 'IDEA POCKET',
              value: 'ZXX',
            },
            {
              title: 'OPPAI',
              value: 'p3k',
            },
            {
              title: 'VENUS',
              value: 'OXz',
            },
            {
              title: 'AVS',
              value: '363',
            },
            {
              title: 'マックスエー',
              value: '96p',
            },
            {
              title: 'クリスタル映像',
              value: 'KQ',
            },
            {
              title: 'アリスJAPAN',
              value: 'J2x',
            },
            {
              title: 'Fitch',
              value: 'Aby',
            },
            {
              title: 'Glory Quest',
              value: 'W17',
            },
            {
              title: 'kira★kira',
              value: 'Rkg',
            },
            {
              title: 'kawaii',
              value: 'rmZ',
            },
            {
              title: 'MARRION',
              value: '647',
            },
            {
              title: 'Attackers',
              value: 'Ywz',
            },
            {
              title: 'Digital Ark',
              value: 'RGD',
            },
            {
              title: 'エムズビデオグループ',
              value: 'dZ0',
            },
            {
              title: 'マドンナ(Madonna)',
              value: '35e',
            },
            {
              title: 'ROYAL',
              value: 'kBvm',
            },
            {
              title: 'h.m.p',
              value: 'xZg',
            },
            {
              title: 'プレミアム',
              value: '8Xd',
            },
            {
              title: 'ワンズファクトリー',
              value: '333',
            },
            {
              title: 'オフサイドトラップ',
              value: 'DPDp',
            },
            {
              title: 'グラッツコーポレーション',
              value: 'd49',
            },
            {
              title: 'ビビアン',
              value: 'J0R',
            },
            {
              title: 'Air control',
              value: '32D',
            },
            {
              title: 'FAIR&WAY',
              value: '8BEK',
            },
            {
              title: 'MARLOMEDIA',
              value: 'xeRV',
            },
          ],
        },
        {
          name: 'sort_by',
          title: '排序',
          type: 'enumeration',
          value: 'release_desc',
          enumOptions: [
            {
              title: '📅 从新到旧',
              value: 'release_desc',
            },
            {
              title: '📅 从旧到新',
              value: 'release_asc',
            },
            {
              title: '⭐ 评分最高',
              value: 'score',
            },
            {
              title: '🧲 有磁力',
              value: 'magnets',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
        },
      ],
    };

var VISUAL_CATEGORY_MODULE = {
      id: 'loadCategory',
      title: '分类',
      functionName: 'loadCategory',
      cacheDuration: 86400,
      params: [
        {
          name: 'category',
          title: '分类',
          type: 'enumeration',
          value: 'subject',
          enumOptions: [
            {
              title: '主题',
              value: 'subject',
            },
            {
              title: '角色',
              value: 'role',
            },
            {
              title: '服装',
              value: 'cloth',
            },
            {
              title: '体型',
              value: 'body',
            },
            {
              title: '行为',
              value: 'behavior',
            },
            {
              title: '玩法',
              value: 'play_method',
            },
            {
              title: '类别',
              value: 'category',
            },
            {
              title: '时长',
              value: 'duration',
            },
          ],
        },
        {
          name: 'tag_subject',
          title: '标签',
          type: 'enumeration',
          value: '淫乱真实',
          belongTo: {
            paramName: 'category',
            value: ['subject'],
          },
          enumOptions: [
            {
              title: '淫乱真实',
              value: '淫乱真实',
            },
            {
              title: '出轨',
              value: '出轨',
            },
            {
              title: '强奸',
              value: '强奸',
            },
            {
              title: '乱伦',
              value: '乱伦',
            },
            {
              title: '女同性恋',
              value: '女同性恋',
            },
            {
              title: '偷窥',
              value: '偷窥',
            },
            {
              title: '处女',
              value: '处女',
            },
            {
              title: '性爱',
              value: '性爱',
            },
            {
              title: 'M男',
              value: 'M男',
            },
            {
              title: '恋物癖',
              value: '恋物癖',
            },
            {
              title: '温泉',
              value: '温泉',
            },
            {
              title: '纯欲',
              value: '纯欲',
            },
            {
              title: '绝顶高潮',
              value: '绝顶高潮',
            },
            {
              title: '奴隶',
              value: '奴隶',
            },
          ],
        },
        {
          name: 'tag_role',
          title: '标签',
          type: 'enumeration',
          value: '高中女生',
          belongTo: {
            paramName: 'category',
            value: ['role'],
          },
          enumOptions: [
            {
              title: '高中女生',
              value: '高中女生',
            },
            {
              title: '美少女',
              value: '美少女',
            },
            {
              title: '已婚妇女',
              value: '已婚妇女',
            },
            {
              title: '姐姐',
              value: '姐姐',
            },
            {
              title: '母亲',
              value: '母亲',
            },
            {
              title: '辣妹',
              value: '辣妹',
            },
            {
              title: '女教师',
              value: '女教师',
            },
            {
              title: '女大学生',
              value: '女大学生',
            },
            {
              title: '偶像',
              value: '偶像',
            },
            {
              title: '护士',
              value: '护士',
            },
            {
              title: '妹妹',
              value: '妹妹',
            },
            {
              title: '模特儿',
              value: '模特儿',
            },
            {
              title: '秘书',
              value: '秘书',
            },
            {
              title: '新娘',
              value: '新娘',
            },
            {
              title: '荡妇',
              value: '荡妇',
            },
          ],
        },
        {
          name: 'tag_cloth',
          title: '标签',
          type: 'enumeration',
          value: '眼镜',
          belongTo: {
            paramName: 'category',
            value: ['cloth'],
          },
          enumOptions: [
            {
              title: '眼镜',
              value: '眼镜',
            },
            {
              title: '角色扮演',
              value: '角色扮演',
            },
            {
              title: '内衣',
              value: '内衣',
            },
            {
              title: '制服',
              value: '制服',
            },
            {
              title: '水手服',
              value: '水手服',
            },
            {
              title: '泳装',
              value: '泳装',
            },
            {
              title: '连裤袜',
              value: '连裤袜',
            },
            {
              title: '女佣',
              value: '女佣',
            },
            {
              title: 'OL',
              value: 'OL',
            },
            {
              title: '迷你裙',
              value: '迷你裙',
            },
            {
              title: '旗袍',
              value: '旗袍',
            },
            {
              title: '兔女郎',
              value: '兔女郎',
            },
            {
              title: '和服',
              value: '和服',
            },
            {
              title: '裸体围裙',
              value: '裸体围裙',
            },
          ],
        },
        {
          name: 'tag_body',
          title: '标签',
          type: 'enumeration',
          value: '熟女',
          belongTo: {
            paramName: 'category',
            value: ['body'],
          },
          enumOptions: [
            {
              title: '熟女',
              value: '熟女',
            },
            {
              title: '巨乳',
              value: '巨乳',
            },
            {
              title: '萝莉塔',
              value: '萝莉塔',
            },
            {
              title: '无毛',
              value: '无毛',
            },
            {
              title: '美臀',
              value: '美臀',
            },
            {
              title: '苗条',
              value: '苗条',
            },
            {
              title: '美乳',
              value: '美乳',
            },
            {
              title: '素人',
              value: '素人',
            },
            {
              title: '平胸',
              value: '平胸',
            },
            {
              title: '孕妇',
              value: '孕妇',
            },
            {
              title: '高挑',
              value: '高挑',
            },
            {
              title: '瘦小身型',
              value: '瘦小身型',
            },
            {
              title: '美脚',
              value: '美脚',
            },
            {
              title: '肌肉',
              value: '肌肉',
            },
          ],
        },
        {
          name: 'tag_behavior',
          title: '标签',
          type: 'enumeration',
          value: '乳交',
          belongTo: {
            paramName: 'category',
            value: ['behavior'],
          },
          enumOptions: [
            {
              title: '乳交',
              value: '乳交',
            },
            {
              title: '中出',
              value: '中出',
            },
            {
              title: '多P',
              value: '多P',
            },
            {
              title: '69',
              value: '69',
            },
            {
              title: '淫语',
              value: '淫语',
            },
            {
              title: '自慰',
              value: '自慰',
            },
            {
              title: '颜射',
              value: '颜射',
            },
            {
              title: '潮吹',
              value: '潮吹',
            },
            {
              title: '口交',
              value: '口交',
            },
            {
              title: '肛门肛交',
              value: '肛门肛交',
            },
            {
              title: '足交',
              value: '足交',
            },
            {
              title: '接吻',
              value: '接吻',
            },
            {
              title: '吞精',
              value: '吞精',
            },
            {
              title: '骑乘位',
              value: '骑乘位',
            },
            {
              title: '手淫',
              value: '手淫',
            },
          ],
        },
        {
          name: 'tag_play_method',
          title: '标签',
          type: 'enumeration',
          value: '凌辱',
          belongTo: {
            paramName: 'category',
            value: ['play_method'],
          },
          enumOptions: [
            {
              title: '凌辱',
              value: '凌辱',
            },
            {
              title: '捆绑',
              value: '捆绑',
            },
            {
              title: '轮奸',
              value: '轮奸',
            },
            {
              title: '玩具',
              value: '玩具',
            },
            {
              title: 'SM',
              value: 'SM',
            },
            {
              title: '户外',
              value: '户外',
            },
            {
              title: '羞耻',
              value: '羞耻',
            },
            {
              title: '调教',
              value: '调教',
            },
            {
              title: '催眠',
              value: '催眠',
            },
            {
              title: '监禁',
              value: '监禁',
            },
            {
              title: '露出',
              value: '露出',
            },
            {
              title: '汽车性爱',
              value: '汽车性爱',
            },
            {
              title: '紧缚',
              value: '紧缚',
            },
            {
              title: '拘束',
              value: '拘束',
            },
          ],
        },
        {
          name: 'tag_category',
          title: '标签',
          type: 'enumeration',
          value: '单体作品',
          belongTo: {
            paramName: 'category',
            value: ['category'],
          },
          enumOptions: [
            {
              title: '单体作品',
              value: '单体作品',
            },
            {
              title: '首次亮相',
              value: '首次亮相',
            },
            {
              title: '经典',
              value: '经典',
            },
            {
              title: 'VR',
              value: 'VR',
            },
            {
              title: '4K',
              value: '4K',
            },
            {
              title: '无码流出',
              value: '无码流出',
            },
            {
              title: '薄马赛克',
              value: '薄马赛克',
            },
            {
              title: '业余',
              value: '业余',
            },
            {
              title: '主观视角',
              value: '主观视角',
            },
            {
              title: '3D',
              value: '3D',
            },
            {
              title: '西洋片',
              value: '西洋片',
            },
            {
              title: '写真偶像',
              value: '写真偶像',
            },
            {
              title: '感谢祭',
              value: '感谢祭',
            },
            {
              title: '数位马赛克',
              value: '数位马赛克',
            },
          ],
        },
        {
          name: 'tag_duration',
          title: '标签',
          type: 'enumeration',
          value: '45分钟以内',
          belongTo: {
            paramName: 'category',
            value: ['duration'],
          },
          enumOptions: [
            {
              title: '45分钟以内',
              value: '45分钟以内',
            },
            {
              title: '45-90分钟',
              value: '45-90分钟',
            },
            {
              title: '90-120分钟',
              value: '90-120分钟',
            },
            {
              title: '120分钟以上',
              value: '120分钟以上',
            },
          ],
        },
        {
          name: 'page',
          title: '页码',
          type: 'page',
        },
      ],
    };

/* ===== module: 03-metadata.js ===== */

/* ========================= WidgetMetadata ========================= */

function firstEnumValue(options) {
  if (!options || !options.length) return "";
  for (var i = 0; i < options.length; i++) {
    if (options[i] && options[i].value) return options[i].value;
  }
  return "";
}

WidgetMetadata = {
  id: "forward.javdb",
  title: "JavDB",
  version: "4.9.2",
  requiredVersion: "0.0.1",
  description: "JavDB：榜单/厂牌/分类浏览；详情磁力转存光鸭（不提供播放源）",
  author: "老头",
  site: API_SITE,
  // 站点 logo：JavDB 180x180 PNG（已验证 200 可用）
  iconUrl: API_SITE + "/apple-touch-icon.png",
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
      description: "JavDB 登录账号（兼容可视化版 username）；TOP250 需登录",
      value: "",
    },
    {
      name: "password",
      title: "密码",
      type: "input",
      description: "与账号一并填写后自动登录；也会写入本地凭证缓存",
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
    */
    {
      name: "guangya_token",
      title: "光鸭 refresh_token",
      type: "input",
      description: "gy.- 开头；用于详情磁力转存光鸭云盘",
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
    VISUAL_TOP250_MODULE,

    {
      "id": "playbackRanking",
      "title": "热播榜",
      "functionName": "loadPlayback",
      "cacheDuration": 86400,
      "params": [
        {
          "name": "period",
          "title": "周期",
          "type": "enumeration",
          "value": "daily",
          "enumOptions": [
            {
              "title": "日榜",
              "value": "daily"
            },
            {
              "title": "周榜",
              "value": "weekly"
            },
            {
              "title": "月榜",
              "value": "monthly"
            }
          ]
        },
        {
          "name": "sort_by",
          "title": "快速切换",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "周期选择",
              "value": ""
            },
            {
              "title": "日榜",
              "value": "daily"
            },
            {
              "title": "周榜",
              "value": "weekly"
            },
            {
              "title": "月榜",
              "value": "monthly"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "censoredRanking",
      "title": "有码榜",
      "functionName": "loadCensored",
      "cacheDuration": 86400,
      "params": [
        {
          "name": "period",
          "title": "周期",
          "type": "enumeration",
          "value": "daily",
          "enumOptions": [
            {
              "title": "日榜",
              "value": "daily"
            },
            {
              "title": "周榜",
              "value": "weekly"
            },
            {
              "title": "月榜",
              "value": "monthly"
            }
          ]
        },
        {
          "name": "sort_by",
          "title": "快速切换",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "周期选择",
              "value": ""
            },
            {
              "title": "日榜",
              "value": "daily"
            },
            {
              "title": "周榜",
              "value": "weekly"
            },
            {
              "title": "月榜",
              "value": "monthly"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "newActorsRanking",
      "title": "热门新人榜",
      "functionName": "loadNewActors",
      "cacheDuration": 86400,
      "params": [
        {
          "name": "actress",
          "title": "新人",
          "type": "enumeration",
          "value": "W1Egq",
          "enumOptions": [
            {
              "title": "蒼井すず",
              "value": "W1Egq"
            },
            {
              "title": "希月あまね",
              "value": "AzvOe"
            },
            {
              "title": "平野楓",
              "value": "k4M9V"
            },
            {
              "title": "希望みう",
              "value": "W1EGe"
            },
            {
              "title": "小田倉れいか",
              "value": "akb7q"
            },
            {
              "title": "風見渚月",
              "value": "9DN55"
            },
            {
              "title": "小谷アリサ",
              "value": "mekGv"
            },
            {
              "title": "小豆もち",
              "value": "AzvDm"
            },
            {
              "title": "天城ねね",
              "value": "RdgBm"
            },
            {
              "title": "星空ねる",
              "value": "eKbAx"
            },
            {
              "title": "白石るな",
              "value": "1Bk9J"
            },
            {
              "title": "花咲ゆら",
              "value": "0R0zv"
            },
            {
              "title": "永野紬",
              "value": "45RNE"
            },
            {
              "title": "相音さな",
              "value": "9DNBV"
            },
            {
              "title": "七海まの",
              "value": "YnbB6"
            },
            {
              "title": "新垣める",
              "value": "NwdBN"
            },
            {
              "title": "北乃衣織",
              "value": "W1EJg"
            },
            {
              "title": "松本あすか",
              "value": "RdgrR"
            }
          ]
        },
        {
          "name": "sort_by",
          "title": "排序",
          "type": "enumeration",
          "value": "release_desc",
          "enumOptions": [
            {
              "title": "📅 从新到旧",
              "value": "release_desc"
            },
            {
              "title": "📅 从旧到新",
              "value": "release_asc"
            },
            {
              "title": "⭐ 评分最高",
              "value": "score"
            },
            {
              "title": "🧲 有磁力",
              "value": "magnets"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "javdbActressRanking",
      "title": "JAVDB女优榜单",
      "functionName": "loadActorsRanking",
      "cacheDuration": 86400,
      "params": [
        {
          "name": "actress",
          "title": "女优",
          "type": "enumeration",
          "value": "BzpA",
          "enumOptions": [
            {
              "title": "桃園怜奈",
              "value": "83V"
            },
            {
              "title": "水卜樱",
              "value": "0edE"
            },
            {
              "title": "本庄铃",
              "value": "BzpA"
            },
            {
              "title": "美園和花",
              "value": "qA0N"
            },
            {
              "title": "風間由美",
              "value": "82m3"
            },
            {
              "title": "美咲佳奈",
              "value": "8Nqa"
            },
            {
              "title": "西宮梦",
              "value": "7BX1"
            },
            {
              "title": "友田真希",
              "value": "Ab9n"
            },
            {
              "title": "河北彩花",
              "value": "EvkJ"
            },
            {
              "title": "梦乃爱華",
              "value": "AbBK"
            },
            {
              "title": "大槻响",
              "value": "BKMM"
            },
            {
              "title": "七泽美亚",
              "value": "NPD3"
            },
            {
              "title": "桃乃木香奈",
              "value": "0dKX"
            },
            {
              "title": "波多野結衣",
              "value": "R2Vg"
            },
            {
              "title": "明裏紲",
              "value": "M4Q7"
            },
            {
              "title": "奧田咲",
              "value": "wVVz"
            },
            {
              "title": "夏目彩春",
              "value": "kek6"
            },
            {
              "title": "JULIA",
              "value": "1KBW"
            },
            {
              "title": "神宮寺奈緒",
              "value": "ZzNm"
            },
            {
              "title": "伊藤舞雪",
              "value": "YgJx"
            },
            {
              "title": "樱空桃",
              "value": "bvWB"
            },
            {
              "title": "铃村爱裏",
              "value": "nRKm"
            },
            {
              "title": "紗倉真菜",
              "value": "J9dd"
            },
            {
              "title": "河合明日菜",
              "value": "69A0"
            },
            {
              "title": "森泽佳奈",
              "value": "A0Qy"
            },
            {
              "title": "凉森玲梦",
              "value": "KxPb"
            },
            {
              "title": "吉根柚莉爱",
              "value": "0Bw3"
            },
            {
              "title": "竹内有紀",
              "value": "pZae"
            },
            {
              "title": "八木奈々",
              "value": "gEkm"
            },
            {
              "title": "東条夏",
              "value": "A6zy"
            },
            {
              "title": "木下凜凜子",
              "value": "Wb1B"
            },
            {
              "title": "木下日葵",
              "value": "MW44"
            },
            {
              "title": "小野六花",
              "value": "zvK7"
            },
            {
              "title": "石原希望",
              "value": "QO2M"
            },
            {
              "title": "森日向子",
              "value": "bkxd"
            },
            {
              "title": "葵伊吹",
              "value": "JbER"
            },
            {
              "title": "七森莉莉",
              "value": "Ewa2"
            },
            {
              "title": "月野香澄",
              "value": "znyb"
            },
            {
              "title": "八掛海",
              "value": "p33Qb"
            },
            {
              "title": "白峰美羽",
              "value": "W1wee"
            },
            {
              "title": "楓可怜",
              "value": "p3kMZ"
            },
            {
              "title": "北野未奈",
              "value": "ZXy46"
            },
            {
              "title": "MINAMO",
              "value": "k4O90"
            },
            {
              "title": "新井莉麻",
              "value": "E2vOx"
            },
            {
              "title": "楓芙爱",
              "value": "0RkDa"
            },
            {
              "title": "石川澪",
              "value": "QV0p9"
            },
            {
              "title": "宍戸里帆",
              "value": "meyzd"
            },
            {
              "title": "宮下玲奈",
              "value": "YnZ1K"
            },
            {
              "title": "由良かな",
              "value": "k43we"
            },
            {
              "title": "藤環奈",
              "value": "p3DYE"
            },
            {
              "title": "安達夕莉",
              "value": "O21k8"
            },
            {
              "title": "九野ひなの",
              "value": "g0W2Z"
            },
            {
              "title": "葉山さゆり",
              "value": "1B0AA"
            },
            {
              "title": "清原美优",
              "value": "O2qxB"
            },
            {
              "title": "羽月乃蒼",
              "value": "J2z7B"
            },
            {
              "title": "明日葉みつは",
              "value": "658kM"
            },
            {
              "title": "黒島玲衣",
              "value": "XWGG5"
            },
            {
              "title": "九井蘇娜歐",
              "value": "352Ow"
            },
            {
              "title": "村上悠華",
              "value": "xvPx8"
            },
            {
              "title": "逢沢みゆ",
              "value": "zK98J"
            },
            {
              "title": "长浜みつり",
              "value": "zK9pQ"
            },
            {
              "title": "金松季歩",
              "value": "RdZe8"
            },
            {
              "title": "北岡果林",
              "value": "J2q7B"
            },
            {
              "title": "白上咲花",
              "value": "bAv5g"
            },
            {
              "title": "田野憂",
              "value": "8VOMx"
            },
            {
              "title": "小野坂ゆいか",
              "value": "9Dx0R"
            },
            {
              "title": "日向由奈",
              "value": "p39RE"
            },
            {
              "title": "彩月七緒",
              "value": "RdEb4"
            },
            {
              "title": "依本しおり",
              "value": "xv6BV"
            },
            {
              "title": "糸井瑠花",
              "value": "eK5gr"
            },
            {
              "title": "巴ひかり",
              "value": "W1PvB"
            },
            {
              "title": "爱才りあ",
              "value": "RdEyz"
            },
            {
              "title": "瀬戸環奈",
              "value": "neRNX"
            },
            {
              "title": "花守夏歩",
              "value": "D2EdJ"
            },
            {
              "title": "新妻ゆうか",
              "value": "QVEBJ"
            },
            {
              "title": "柏木ふみか",
              "value": "qDYDe"
            },
            {
              "title": "木村爱心",
              "value": "yrRx0"
            },
            {
              "title": "紫堂るい",
              "value": "bA2yd"
            },
            {
              "title": "守屋よしの",
              "value": "Mm1qA"
            },
            {
              "title": "纯白彩永",
              "value": "65PEn"
            },
            {
              "title": "幸村泉希",
              "value": "k47Az"
            },
            {
              "title": "福田ゆあ",
              "value": "nen2w"
            },
            {
              "title": "井上もも",
              "value": "0R1n3"
            },
            {
              "title": "铃木希",
              "value": "8VGE5"
            },
            {
              "title": "早坂奏音",
              "value": "VwnPz"
            },
            {
              "title": "博多彩葉",
              "value": "zKgPW"
            },
            {
              "title": "小松空",
              "value": "k4MbY"
            },
            {
              "title": "白石透羽",
              "value": "zKgQ5"
            },
            {
              "title": "森下茉莉",
              "value": "QVy9n"
            },
            {
              "title": "園梨音",
              "value": "eKbnd"
            },
            {
              "title": "通野未帆",
              "value": "05OX"
            },
            {
              "title": "白石茉莉奈",
              "value": "0YZq"
            },
            {
              "title": "篠崎沙帆",
              "value": "76WPZ"
            },
            {
              "title": "仲村みう",
              "value": "89BV"
            },
            {
              "title": "響蓮",
              "value": "8VJya"
            },
            {
              "title": "倉本すみれ",
              "value": "9DeMq"
            },
            {
              "title": "松本いちか",
              "value": "AOqm"
            },
            {
              "title": "結城花乃羽",
              "value": "Az8aO"
            },
            {
              "title": "虹村ゆみ",
              "value": "B8EKA"
            },
            {
              "title": "坂井美桜",
              "value": "GMB1D"
            },
            {
              "title": "ひなの花音",
              "value": "NwOmN"
            },
            {
              "title": "水戸かな",
              "value": "Rk9R"
            },
            {
              "title": "美ノ嶋めぐり",
              "value": "VwBJ2"
            },
            {
              "title": "さくらわかな",
              "value": "VwgMA"
            },
            {
              "title": "佐々木あき",
              "value": "ZOM6"
            },
            {
              "title": "三澄寧々",
              "value": "d4ndM"
            },
            {
              "title": "うんぱい",
              "value": "d4z9g"
            },
            {
              "title": "星空ねる",
              "value": "eKbAx"
            },
            {
              "title": "田中レモン",
              "value": "kzx6"
            },
            {
              "title": "篠真有",
              "value": "memxR"
            },
            {
              "title": "柏木こなつ",
              "value": "meygD"
            },
            {
              "title": "二階堂麗",
              "value": "mez5R"
            },
            {
              "title": "雛形みくる",
              "value": "neAOa"
            },
            {
              "title": "五芭",
              "value": "p3eYb"
            },
            {
              "title": "宮島めい",
              "value": "prXZ"
            },
            {
              "title": "佐々木さき",
              "value": "qDZDr"
            },
            {
              "title": "篠原いよ",
              "value": "xv6d6"
            },
            {
              "title": "美乃すずめ",
              "value": "yERr"
            },
            {
              "title": "新ありな",
              "value": "RJM8"
            },
            {
              "title": "初美なのか",
              "value": "GMBY7"
            },
            {
              "title": "あまつか亜夢",
              "value": "K4kmA"
            },
            {
              "title": "三田真鈴",
              "value": "65n5K"
            },
            {
              "title": "九重かんな",
              "value": "EKz4"
            },
            {
              "title": "新木希空",
              "value": "1BZnn"
            },
            {
              "title": "桃谷エリカ",
              "value": "gwE"
            },
            {
              "title": "橘梨紗",
              "value": "n51V"
            },
            {
              "title": "瀧本雫葉",
              "value": "neVZY"
            },
            {
              "title": "相沢みなみ",
              "value": "RAnD"
            },
            {
              "title": "青空ひかり",
              "value": "b5Z0"
            },
            {
              "title": "大桥未久",
              "value": "0JEb"
            },
            {
              "title": "三上悠亚",
              "value": "Av2e"
            }
          ]
        },
        {
          "name": "sort_by",
          "title": "排序",
          "type": "enumeration",
          "value": "release_desc",
          "enumOptions": [
            {
              "title": "📅 从新到旧",
              "value": "release_desc"
            },
            {
              "title": "📅 从旧到新",
              "value": "release_asc"
            },
            {
              "title": "⭐ 评分最高",
              "value": "score"
            },
            {
              "title": "👤 单体作品",
              "value": "solo"
            },
            {
              "title": "🧲 有磁力",
              "value": "magnets"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "dmmActressRanking",
      "title": "DMM女优榜单",
      "functionName": "loadDMMRanking",
      "cacheDuration": 86400,
      "params": [
        {
          "name": "actress",
          "title": "女优",
          "type": "enumeration",
          "value": "zK98J",
          "enumOptions": [
            {
              "title": "逢沢みゆ",
              "value": "zK98J"
            },
            {
              "title": "瀬戸環奈",
              "value": "neRNX"
            },
            {
              "title": "波多野結衣",
              "value": "R2Vg"
            },
            {
              "title": "河北彩花",
              "value": "EvkJ"
            },
            {
              "title": "彩月七緒",
              "value": "RdEb4"
            },
            {
              "title": "石川澪",
              "value": "QV0p9"
            },
            {
              "title": "北岡果林",
              "value": "J2q7B"
            },
            {
              "title": "幸村泉希",
              "value": "k47Az"
            },
            {
              "title": "博多彩葉",
              "value": "zKgPW"
            },
            {
              "title": "小野坂ゆいか",
              "value": "9Dx0R"
            },
            {
              "title": "水卜さくら",
              "value": "0edE"
            },
            {
              "title": "桃乃木かな",
              "value": "0dKX"
            },
            {
              "title": "凉森れむ",
              "value": "KxPb"
            },
            {
              "title": "鷲尾めい",
              "value": "xpbA"
            },
            {
              "title": "紫堂るい",
              "value": "bA2yd"
            },
            {
              "title": "森沢かな",
              "value": "A0Qy"
            },
            {
              "title": "宍戸里帆",
              "value": "meyzd"
            },
            {
              "title": "羽月乃蒼",
              "value": "J2z7B"
            },
            {
              "title": "JULIA",
              "value": "1KBW"
            },
            {
              "title": "铃村あいり",
              "value": "nRKm"
            },
            {
              "title": "浅野こころ",
              "value": "me7mM"
            },
            {
              "title": "爱花未滿",
              "value": "YnwDp"
            },
            {
              "title": "早坂奏音",
              "value": "VwnPz"
            },
            {
              "title": "井上もも",
              "value": "0R1n3"
            },
            {
              "title": "糸井瑠花",
              "value": "eK5gr"
            },
            {
              "title": "小那海あや",
              "value": "Mm1YA"
            },
            {
              "title": "神宮寺ナオ",
              "value": "ZzNm"
            },
            {
              "title": "伊藤舞雪",
              "value": "YgJx"
            },
            {
              "title": "花守夏歩",
              "value": "D2EdJ"
            },
            {
              "title": "宮下玲奈",
              "value": "YnZ1K"
            },
            {
              "title": "美園和花",
              "value": "qA0N"
            },
            {
              "title": "木村爱心",
              "value": "yrRx0"
            },
            {
              "title": "白上咲花",
              "value": "bAv5g"
            },
            {
              "title": "楪カレン",
              "value": "p3kMZ"
            },
            {
              "title": "月野かすみ",
              "value": "znyb"
            },
            {
              "title": "依本しおり",
              "value": "xv6BV"
            },
            {
              "title": "田野憂",
              "value": "8VOMx"
            },
            {
              "title": "小日向みゆう",
              "value": "O2qxB"
            },
            {
              "title": "葉山さゆり",
              "value": "1B0AA"
            },
            {
              "title": "新井リマ",
              "value": "E2vOx"
            },
            {
              "title": "北野未奈",
              "value": "ZXy46"
            },
            {
              "title": "吉根ゆりあ",
              "value": "0Bw3"
            },
            {
              "title": "明日葉みつは",
              "value": "658kM"
            },
            {
              "title": "长浜みつり",
              "value": "zK9pQ"
            },
            {
              "title": "黒島玲衣",
              "value": "XWGG5"
            },
            {
              "title": "小野六花",
              "value": "zvK7"
            },
            {
              "title": "園梨音",
              "value": "eKbnd"
            },
            {
              "title": "木下凛々子",
              "value": "Wb1B"
            },
            {
              "title": "楓ふうあ",
              "value": "0RkDa"
            },
            {
              "title": "七沢みあ",
              "value": "NPD3"
            },
            {
              "title": "梦乃あいか",
              "value": "AbBK"
            },
            {
              "title": "木下ひまり",
              "value": "MW44"
            },
            {
              "title": "明里つむぎ",
              "value": "M4Q7"
            },
            {
              "title": "八掛うみ",
              "value": "p33Qb"
            },
            {
              "title": "爱才りあ",
              "value": "RdEyz"
            },
            {
              "title": "巴ひかり",
              "value": "W1PvB"
            },
            {
              "title": "miru",
              "value": "vd5z"
            },
            {
              "title": "葵いぶき",
              "value": "JbER"
            },
            {
              "title": "柏木ふみか",
              "value": "qDYDe"
            },
            {
              "title": "七ツ森りり",
              "value": "Ewa2"
            },
            {
              "title": "大槻ひびき",
              "value": "BKMM"
            },
            {
              "title": "東条なつ",
              "value": "A6zy"
            },
            {
              "title": "桃園怜奈",
              "value": "83V"
            },
            {
              "title": "白石透羽",
              "value": "zKgQ5"
            },
            {
              "title": "金松季歩",
              "value": "RdZe8"
            },
            {
              "title": "村上悠華",
              "value": "xvPx8"
            },
            {
              "title": "安達夕莉",
              "value": "O21k8"
            },
            {
              "title": "森日向子",
              "value": "bkxd"
            },
            {
              "title": "本庄铃",
              "value": "BzpA"
            },
            {
              "title": "夏目彩春",
              "value": "kek6"
            },
            {
              "title": "藤かんな",
              "value": "p3DYE"
            },
            {
              "title": "奥田咲",
              "value": "wVVz"
            },
            {
              "title": "九野ひなの",
              "value": "g0W2Z"
            },
            {
              "title": "友田真希",
              "value": "Ab9n"
            },
            {
              "title": "新妻ゆうか",
              "value": "QVEBJ"
            },
            {
              "title": "九井スナオ",
              "value": "352Ow"
            },
            {
              "title": "竹内有紀",
              "value": "pZae"
            },
            {
              "title": "石原希望",
              "value": "QO2M"
            },
            {
              "title": "風間ゆみ",
              "value": "82m3"
            },
            {
              "title": "铃木希",
              "value": "8VGE5"
            },
            {
              "title": "天月あず",
              "value": "90Rp"
            },
            {
              "title": "白峰ミウ",
              "value": "W1wee"
            },
            {
              "title": "由良かな",
              "value": "k43we"
            },
            {
              "title": "八木奈々",
              "value": "gEkm"
            },
            {
              "title": "美咲かんな",
              "value": "8Nqa"
            },
            {
              "title": "福田ゆあ",
              "value": "nen2w"
            },
            {
              "title": "凪ひかる",
              "value": "1G09"
            },
            {
              "title": "紗倉まな",
              "value": "J9dd"
            },
            {
              "title": "天马ゆい",
              "value": "k4rwN"
            },
            {
              "title": "纯白彩永",
              "value": "65PEn"
            },
            {
              "title": "日向由奈",
              "value": "p39RE"
            },
            {
              "title": "西宮ゆめ",
              "value": "7BX1"
            },
            {
              "title": "MINAMO",
              "value": "k4O90"
            },
            {
              "title": "桜空もも",
              "value": "bvWB"
            },
            {
              "title": "小松空",
              "value": "k4MbY"
            },
            {
              "title": "河合あすな",
              "value": "69A0"
            },
            {
              "title": "北条麻妃",
              "value": "wZxm"
            },
            {
              "title": "守屋よしの",
              "value": "Mm1qA"
            },
            {
              "title": "莉々はるか",
              "value": "vNKW"
            },
            {
              "title": "森下茉莉",
              "value": "QVy9n"
            },
            {
              "title": "松本いちか",
              "value": "AOqm"
            },
            {
              "title": "篠田ゆう",
              "value": "WE4e"
            },
            {
              "title": "乙アリス",
              "value": "bAAa"
            },
            {
              "title": "沙月恵奈",
              "value": "zKKN7"
            },
            {
              "title": "AIKA",
              "value": "RXbR"
            },
            {
              "title": "倉本すみれ",
              "value": "9DeMq"
            },
            {
              "title": "皆月ひかる",
              "value": "Nw7rN"
            },
            {
              "title": "弥生みづき",
              "value": "Jekq"
            },
            {
              "title": "小宵こなん",
              "value": "76BeZ"
            },
            {
              "title": "月乃ルナ",
              "value": "eJmE"
            },
            {
              "title": "姫咲はな",
              "value": "a0bn"
            },
            {
              "title": "浜崎真緒",
              "value": "6v9D"
            },
            {
              "title": "春陽モカ",
              "value": "B85e9"
            },
            {
              "title": "小花のん",
              "value": "B8K29"
            },
            {
              "title": "田中ねね",
              "value": "AGAK"
            },
            {
              "title": "藤森里穂",
              "value": "8pk9"
            },
            {
              "title": "末広純",
              "value": "meyAY"
            },
            {
              "title": "三上悠亜",
              "value": "Av2e"
            },
            {
              "title": "有岡みう",
              "value": "RdEBz"
            },
            {
              "title": "深田えいみ",
              "value": "E26vd"
            },
            {
              "title": "花狩まい",
              "value": "8VNX5"
            },
            {
              "title": "七瀬アリス",
              "value": "X301"
            },
            {
              "title": "水原みその",
              "value": "E2vWM"
            },
            {
              "title": "百永さりな",
              "value": "Nmbw"
            },
            {
              "title": "川越にこ",
              "value": "k4JOz"
            },
            {
              "title": "稲場るか",
              "value": "ZX3rv"
            },
            {
              "title": "柏木こなつ",
              "value": "meygD"
            },
            {
              "title": "逢見リカ",
              "value": "1BaNn"
            },
            {
              "title": "横宮七海",
              "value": "negAX"
            },
            {
              "title": "つぼみ",
              "value": "M6mA"
            },
            {
              "title": "美谷朱音",
              "value": "gyRE"
            },
            {
              "title": "新村あかり",
              "value": "awzn"
            },
            {
              "title": "蓮実クレア",
              "value": "B0nG"
            },
            {
              "title": "工藤ララ",
              "value": "eKv91"
            },
            {
              "title": "渚みつき",
              "value": "yrYpa"
            },
            {
              "title": "椿りか",
              "value": "NJpw"
            },
            {
              "title": "尾崎えりか",
              "value": "J2Z32"
            },
            {
              "title": "水川スミレ",
              "value": "g7WA"
            },
            {
              "title": "月野江すい",
              "value": "vDA0k"
            },
            {
              "title": "中山ふみか",
              "value": "Ka7P"
            },
            {
              "title": "佐知子",
              "value": "2emw"
            },
            {
              "title": "天然美月",
              "value": "45AqZ"
            },
            {
              "title": "皆瀬あかり",
              "value": "YnZBx"
            },
            {
              "title": "さつき芽衣",
              "value": "RngD"
            },
            {
              "title": "胡桃さくら",
              "value": "9D4m8"
            },
            {
              "title": "高橋しょう子",
              "value": "x4MV"
            },
            {
              "title": "結城りの",
              "value": "Vw9NA"
            },
            {
              "title": "宮城りえ",
              "value": "W1rqR"
            },
            {
              "title": "香水じゅん",
              "value": "Nw9dZ"
            },
            {
              "title": "日下部加奈",
              "value": "21mp"
            },
            {
              "title": "綾瀬こころ",
              "value": "k4QEV"
            },
            {
              "title": "琴音華",
              "value": "zK4E6"
            },
            {
              "title": "推川ゆうり",
              "value": "ZqB6"
            }
          ]
        },
        {
          "name": "sort_by",
          "title": "排序",
          "type": "enumeration",
          "value": "release_desc",
          "enumOptions": [
            {
              "title": "📅 从新到旧",
              "value": "release_desc"
            },
            {
              "title": "📅 从旧到新",
              "value": "release_asc"
            },
            {
              "title": "⭐ 评分最高",
              "value": "score"
            },
            {
              "title": "👤 单体作品",
              "value": "solo"
            },
            {
              "title": "🧲 有磁力",
              "value": "magnets"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "fanzaMonthlyRanking",
      "title": "FANZA月度榜单",
      "functionName": "loadDMMMonthlyRanking",
      "cacheDuration": 2592000,
      "params": [
        {
          "name": "month",
          "title": "月份",
          "type": "enumeration",
          "value": "2026-10",
          "enumOptions": [
            {
              "title": "2026年6月",
              "value": "2026-06"
            },
            {
              "title": "2026年7月",
              "value": "2026-07"
            },
            {
              "title": "2026年8月",
              "value": "2026-08"
            },
            {
              "title": "2026年9月",
              "value": "2026-09"
            },
            {
              "title": "2026年10月",
              "value": "2026-10"
            }
          ]
        },
        {
          "name": "sort_by",
          "title": "排序",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "默认排序",
              "value": ""
            },
            {
              "title": "2026年6月",
              "value": "2026-06"
            },
            {
              "title": "2026年7月",
              "value": "2026-07"
            },
            {
              "title": "2026年8月",
              "value": "2026-08"
            },
            {
              "title": "2026年9月",
              "value": "2026-09"
            },
            {
              "title": "2026年10月",
              "value": "2026-10"
            }
          ]
        },
        {
          "name": "detail_identity_revision",
          "title": "详情身份版本",
          "type": "constant",
          "value": "4"
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "middleFingerRecommend",
      "title": "中指通每月推荐",
      "functionName": "loadMiddleFingerRecommend",
      "cacheDuration": 2592000,
      "params": [
        {
          "name": "month",
          "title": "月份",
          "type": "enumeration",
          "value": "2026-09",
          "enumOptions": [
            {
              "title": "2025年6月",
              "value": "2025-06"
            },
            {
              "title": "2025年7月",
              "value": "2025-07"
            },
            {
              "title": "2025年8月",
              "value": "2025-08"
            },
            {
              "title": "2025年9月",
              "value": "2025-09"
            },
            {
              "title": "2025年10月",
              "value": "2025-10"
            },
            {
              "title": "2025年11月",
              "value": "2025-11"
            },
            {
              "title": "2025年12月",
              "value": "2025-12"
            },
            {
              "title": "2026年1月",
              "value": "2026-01"
            },
            {
              "title": "2026年2月",
              "value": "2026-02"
            },
            {
              "title": "2026年3月",
              "value": "2026-03"
            },
            {
              "title": "2026年4月",
              "value": "2026-04"
            },
            {
              "title": "2026年5月",
              "value": "2026-05"
            },
            {
              "title": "2026年6月",
              "value": "2026-06"
            },
            {
              "title": "2026年7月",
              "value": "2026-07"
            },
            {
              "title": "2026年8月",
              "value": "2026-08"
            },
            {
              "title": "2026年9月",
              "value": "2026-09"
            }
          ]
        },
        {
          "name": "sort_by",
          "title": "排序",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "默认排序",
              "value": ""
            },
            {
              "title": "2025年6月",
              "value": "2025-06"
            },
            {
              "title": "2025年7月",
              "value": "2025-07"
            },
            {
              "title": "2025年8月",
              "value": "2025-08"
            },
            {
              "title": "2025年9月",
              "value": "2025-09"
            },
            {
              "title": "2025年10月",
              "value": "2025-10"
            },
            {
              "title": "2025年11月",
              "value": "2025-11"
            },
            {
              "title": "2025年12月",
              "value": "2025-12"
            },
            {
              "title": "2026年1月",
              "value": "2026-01"
            },
            {
              "title": "2026年2月",
              "value": "2026-02"
            },
            {
              "title": "2026年3月",
              "value": "2026-03"
            },
            {
              "title": "2026年4月",
              "value": "2026-04"
            },
            {
              "title": "2026年5月",
              "value": "2026-05"
            },
            {
              "title": "2026年6月",
              "value": "2026-06"
            },
            {
              "title": "2026年7月",
              "value": "2026-07"
            },
            {
              "title": "2026年8月",
              "value": "2026-08"
            },
            {
              "title": "2026年9月",
              "value": "2026-09"
            }
          ]
        },
        {
          "name": "detail_identity_revision",
          "title": "详情身份版本",
          "type": "constant",
          "value": "4"
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    VISUAL_UNCENSORED_MODULE,
    VISUAL_FC2_MODULE,
    VISUAL_WESTERN_MODULE,
    VISUAL_MAKER_MODULE,
    VISUAL_CATEGORY_MODULE,
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
          ],
          value: "published",
        },
        { name: "page", title: "页码", type: "page", value: "1" },
      ],
    },
  ],
  // 无顶层 WidgetMetadata.search；无 loadResource（不提供光鸭播放源）
};

/* ===== module: 04-storage.js ===== */

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
/** 账号字段：本组件 metadata 用 email，可视化版用 username，需双向兼容 */
var LOGIN_USER_ALIASES = ["email", "username", "account", "user", "javdb_username", "javdb_email"];
var LOGIN_PASS_ALIASES = ["password", "passwd", "pass", "javdb_password"];
var LOGIN_TOKEN_ALIASES = ["apiToken", "token", "jwt", "auth_token", "access_token"];

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
  // Forward 有时返回 [{ name, value }, ...]
  if (Array.isArray(obj)) {
    for (var a = 0; a < aliases.length; a++) {
      var want = String(aliases[a] || "");
      if (!want) continue;
      for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (!item || typeof item !== "object") continue;
        var itemName = String(item.name || item.key || item.id || "").trim();
        if (itemName !== want) continue;
        var fromItem = normalizeStoreValue(
          item.value !== undefined ? item.value : item.val !== undefined ? item.val : item.data
        );
        if (fromItem) return fromItem;
      }
    }
    return "";
  }
  for (var j = 0; j < aliases.length; j++) {
    var key = aliases[j];
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
    var aliases =
      key === "guangya_token"
        ? GUANGYA_TOKEN_ALIASES
        : key === "guangya_parent_id"
          ? GUANGYA_PARENT_ALIASES
          : key === "email"
            ? LOGIN_USER_ALIASES
            : key === "password"
              ? LOGIN_PASS_ALIASES
              : key === "apiToken"
                ? LOGIN_TOKEN_ALIASES
                : [key];
    var val = params[key];
    if (key === "email" && (val === undefined || val === null || String(val).trim() === "")) {
      val = params.username;
    }
    if (val !== undefined && val !== null && String(val).trim() !== "") {
      var normalized = normalizeStoreValue(val);
      if (normalized) {
        out[key] = normalized;
        if (key !== "guangya_token") persistGlobalParam(key, out[key]);
        if (key === "email") {
          out.username = normalized;
          persistGlobalParam("username", normalized);
        }
      } else {
        var storedVal = resolveGlobalParamSync(key, params, aliases);
        if (storedVal) out[key] = storedVal;
      }
    } else {
      var stored = resolveGlobalParamSync(key, params, aliases);
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
          : key === "email"
            ? LOGIN_USER_ALIASES
            : key === "password"
              ? LOGIN_PASS_ALIASES
              : key === "apiToken"
                ? LOGIN_TOKEN_ALIASES
                : [key];
    var current = await unwrapStoreValue(params[key]);
    // email 字段也尝试从 username 直取（可视化版参数名）
    if (!current && key === "email") {
      current = await unwrapStoreValue(params.username);
    }
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
      // 账号双写，保证可视化版 username 键与本组件 email 键都能读到
      if (key === "email") {
        params.username = current;
        persistGlobalParam("username", current);
      }
    }
  }
  return params;
}

/* ===== module: 05-category-path.js ===== */

/* ========================= CategoryPath ========================= */

function categoryParamValue(raw) {
  if (raw && typeof raw === "object") {
    if (raw.value !== undefined) return categoryParamValue(raw.value);
    if (raw.id !== undefined) return categoryParamValue(raw.id);
    return "";
  }
  return String(raw == null ? "" : raw).trim();
}

function splitIdTitle(raw) {
  raw = categoryParamValue(raw);
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
  var item = categoryParamValue(params.item);
  var peopleRaw = categoryParamValue(params.peopleId);
  var genreRaw = categoryParamValue(params.genreId);

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

  var sortRaw = categoryParamValue(params.sort_by) || "published";
  var sortKey = sortRaw.replace(/_download$/, "");
  // 旧排序缓存只决定排序，不再把所有分类强制限制为有磁力。
  var magnetOnly = params.list_filter === "magnet";
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
    if (!tagId || (!qMatch && isLibraryIndex(tPath))) {
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
  var selectedTag = /^\/tags\?/.test(path) && /[?&](?:c\d+|q)=([^&]+)/i.test(path);
  if (!path || (isLibraryIndex(bare) && !selectedTag)) return joinIdTitle(SEARCH_PREFIX + (title || bare), "");
  var id = "";
  if (bare.indexOf("/actors/") === 0) id = bare;
  else if (bare.indexOf("/series/") === 0) id = bare;
  else if (bare.indexOf("/makers/") === 0) id = bare;
  else if (bare.indexOf("/tags") === 0) id = path.replace(/^\//, "");
  else if (bare.indexOf("/v/") === 0) id = bare;
  else id = path.replace(/^\//, "");
  return joinIdTitle(id, title);
}

/* ===== module: 06-http.js ===== */

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
  var token = String(
    params.apiToken ||
      readStore("javdb.global.apiToken") ||
      readStore("javdb_token") ||
      ""
  ).trim();
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

/* ===== module: 07-login.js ===== */

/* ========================= Login (API) ========================= */
/**
 * 登录实现来自 解密javdb.可视化.js（AVDB）并适配本项目接口：
 * - 对外仍暴露 loginWithPassword / ensureApiSession（handlers 已依赖）
 * - 账号字段兼容 email / username
 * - Token 写入 javdb.global.apiToken，供 apiHeaders 使用
 * - 额外：凭证指纹、Token 过期、并发登录锁、失败冷却
 */

var JAVDB_LOGIN_TIMEOUT_MS = 6000;
// 本组件键 + 可视化版键（读写兼容，避免两套缓存互不认）
var TOKEN_STORE_KEY = "javdb.global.apiToken";
var TOKEN_STORE_KEY_ALT = "javdb_token";
var TOKEN_EXPIRES_KEY = "javdb.global.apiTokenExpires";
var TOKEN_EXPIRES_KEY_ALT = "javdb_token_expires";
var TOKEN_CREDENTIAL_KEY = "javdb.global.apiTokenCredential";
var TOKEN_CREDENTIAL_KEY_ALT = "javdb_token_credential";
var CRED_USER_KEY = "javdb.global.credUser";
var CRED_USER_KEY_ALT = "javdb_cred_user";
var CRED_PASS_KEY = "javdb.global.credPass";
var CRED_PASS_KEY_ALT = "javdb_cred_pass";
var DEVICE_UUID_KEY = "javdb.global.deviceUuid";
var TOKEN_REFRESH_BUFFER_SECONDS = 5 * 60;
var LOGIN_FAILURE_COOLDOWN_MS = 30 * 1000;
var TOKEN_TTL_SECONDS = 7 * 24 * 3600;

var _loginPromise = null;
var _loginPromiseCredential = "";
var _lastLoginFailureAt = 0;
var _lastLoginFailureCredential = "";
var _lastLoginFailureMessage = "";

/** 可视化版登录设备指纹（与 AVDB doLogin 一致） */
var LOGIN_DEVICE = {
  device_name: "MagnetBoard",
  device_model: "Server",
  platform: "ios",
  system_version: "17.4",
  app_version: "official",
  app_version_number: "1.9.29",
  app_channel: "official",
};

function ensureDeviceUuid() {
  var id = String(readStore(DEVICE_UUID_KEY) || "").trim();
  if (id) return id;
  // 可视化版固定 UUID；本项目首次生成后持久化，行为等价于固定设备
  id = "04b9534d-5118-53de-9f87-2ddded77111e";
  writeStore(DEVICE_UUID_KEY, id);
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

function credentialFingerprint(username, password) {
  return md5Hex(String(username || "") + "\n" + String(password || ""), true);
}

async function saveLoginCredentials(username, password, previous) {
  previous = previous || {};
  if (username && username !== previous.username) {
    await writeStoreAsync(CRED_USER_KEY, username);
    await writeStoreAsync(CRED_USER_KEY_ALT, username);
    await writeStoreAsync("javdb.global.email", username);
    await writeStoreAsync("javdb.global.username", username);
  }
  if (password && password !== previous.password) {
    await writeStoreAsync(CRED_PASS_KEY, password);
    await writeStoreAsync(CRED_PASS_KEY_ALT, password);
    await writeStoreAsync("javdb.global.password", password);
  }
}

async function readFirstStoreAsync(keys) {
  for (var i = 0; i < (keys || []).length; i++) {
    var val = await readStoreAsync(keys[i]);
    if (val) return val;
  }
  return "";
}

async function getStoredLoginCredentials() {
  var username = await readFirstStoreAsync([
    CRED_USER_KEY,
    CRED_USER_KEY_ALT,
    "javdb.global.email",
    "javdb.global.username",
  ]);
  var password = await readFirstStoreAsync([
    CRED_PASS_KEY,
    CRED_PASS_KEY_ALT,
    "javdb.global.password",
  ]);
  return {
    username: String(username || "").trim(),
    password: String(password || "").trim(),
  };
}

async function resolveLoginCredentials(params) {
  params = params || {};
  var stored = await getStoredLoginCredentials();
  var username = String(
    (await resolveGlobalParamAsync("email", params, LOGIN_USER_ALIASES)) ||
      (await unwrapStoreValue(params.email)) ||
      (await unwrapStoreValue(params.username)) ||
      stored.username ||
      ""
  ).trim();
  var password = String(
    (await resolveGlobalParamAsync("password", params, LOGIN_PASS_ALIASES)) ||
      (await unwrapStoreValue(params.password)) ||
      stored.password ||
      ""
  ).trim();

  if (!username || !password) {
    throw new Error("请先设置 JavDB 账号密码（设置→全局参数）");
  }

  var changed =
    !!(username && stored.username && stored.username !== username) ||
    !!(password && stored.password && stored.password !== password);

  await saveLoginCredentials(username, password, stored);

  return {
    username: username,
    password: password,
    fingerprint: credentialFingerprint(username, password),
    changed: changed,
  };
}

async function clearStoredToken() {
  var keys = [
    TOKEN_STORE_KEY,
    TOKEN_STORE_KEY_ALT,
    TOKEN_EXPIRES_KEY,
    TOKEN_EXPIRES_KEY_ALT,
    TOKEN_CREDENTIAL_KEY,
    TOKEN_CREDENTIAL_KEY_ALT,
  ];
  for (var i = 0; i < keys.length; i++) {
    if (Widget.storage && typeof Widget.storage.remove === "function") {
      try {
        await Widget.storage.remove(keys[i]);
      } catch (e) {
        await writeStoreAsync(keys[i], "");
      }
    } else {
      await writeStoreAsync(keys[i], "");
    }
  }
  writeStore(TOKEN_STORE_KEY, "");
  writeStore(TOKEN_STORE_KEY_ALT, "");
}

async function persistLoginToken(token, fingerprint) {
  var expiresAt = String(Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS);
  await writeStoreAsync(TOKEN_STORE_KEY, token);
  await writeStoreAsync(TOKEN_STORE_KEY_ALT, token);
  await writeStoreAsync(TOKEN_EXPIRES_KEY, expiresAt);
  await writeStoreAsync(TOKEN_EXPIRES_KEY_ALT, expiresAt);
  await writeStoreAsync(TOKEN_CREDENTIAL_KEY, fingerprint);
  await writeStoreAsync(TOKEN_CREDENTIAL_KEY_ALT, fingerprint);
  writeStore(TOKEN_STORE_KEY, token);
  writeStore(TOKEN_STORE_KEY_ALT, token);
}

/**
 * 可视化版 doLogin：POST /v1/sessions + jdSignature + Dart UA
 */
async function doLogin(username, password) {
  var body = Object.assign({}, LOGIN_DEVICE, {
    device_uuid: ensureDeviceUuid(),
    username: username,
    password: password,
  });

  var signature = buildJdSignature();
  var resp;
  try {
    resp = await Widget.http.post(API_BASE + "/v1/sessions", body, {
      headers: {
        jdSignature: signature,
        "User-Agent": "Dart/3.5 (dart:io)",
        "Content-Type": "application/json",
        accept: "application/json",
      },
      timeout: JAVDB_LOGIN_TIMEOUT_MS,
    });
  } catch (err) {
    var msg = String((err && err.message) || err || "");
    if (msg.indexOf("400") !== -1) {
      throw new Error("JavDB 登录 400 错误：签名或参数格式不对");
    }
    throw new Error("JavDB 登录失败: " + (msg || "未知错误"));
  }

  if (!resp || resp.data === undefined || resp.data === null) {
    throw new Error("服务器无响应");
  }

  var payload = typeof resp.data === "string" ? null : resp.data;
  if (!payload) {
    try {
      payload = JSON.parse(resp.data);
    } catch (e) {
      throw new Error("登录响应无法解析");
    }
  }

  if (payload.success === 1 && payload.data && payload.data.token) {
    return String(payload.data.token).replace(/^Bearer\s+/i, "").trim();
  }

  var token =
    extractToken(payload.data) ||
    extractToken(payload) ||
    String(getHeaderCI(resp, "Authorization") || "")
      .replace(/^Bearer\s+/i, "")
      .trim();
  if (token) return token;

  throw new Error(payload.message || "登录失败，请检查账号密码");
}

/**
 * 可视化版 loginWithLock：同凭证并发合并；失败冷却 30s
 */
async function loginWithLock(credentials, forceRefresh) {
  if (_loginPromise) {
    if (_loginPromiseCredential === credentials.fingerprint) return _loginPromise;
    try {
      await _loginPromise;
    } catch (e) {}
    return loginWithLock(credentials, forceRefresh);
  }

  var now = Date.now();
  if (
    _lastLoginFailureCredential === credentials.fingerprint &&
    now - _lastLoginFailureAt < LOGIN_FAILURE_COOLDOWN_MS
  ) {
    throw new Error(_lastLoginFailureMessage || "JavDB 登录暂时失败，请稍后重试");
  }

  _loginPromiseCredential = credentials.fingerprint;
  _loginPromise = (async function () {
    if (forceRefresh) await clearStoredToken();
    try {
      var token = await doLogin(credentials.username, credentials.password);
      await persistLoginToken(token, credentials.fingerprint);
      _lastLoginFailureAt = 0;
      _lastLoginFailureCredential = "";
      _lastLoginFailureMessage = "";
      return token;
    } catch (err) {
      _lastLoginFailureAt = Date.now();
      _lastLoginFailureCredential = credentials.fingerprint;
      _lastLoginFailureMessage = (err && err.message) || "JavDB 登录失败";
      throw err;
    }
  })().finally(function () {
    _loginPromise = null;
    _loginPromiseCredential = "";
  });

  return _loginPromise;
}

/**
 * 读缓存 Token；过期 / 凭证变更 / force 时重新登录
 */
async function getLoginTokenForCredentials(credentials, forceRefresh, preferredToken) {
  if (forceRefresh && preferredToken) {
    var cachedForced = await readFirstStoreAsync([TOKEN_STORE_KEY, TOKEN_STORE_KEY_ALT]);
    var cachedCred = await readFirstStoreAsync([TOKEN_CREDENTIAL_KEY, TOKEN_CREDENTIAL_KEY_ALT]);
    if (
      cachedForced &&
      String(cachedForced) !== String(preferredToken) &&
      cachedCred === credentials.fingerprint
    ) {
      return String(cachedForced);
    }
  }

  var token = await readFirstStoreAsync([TOKEN_STORE_KEY, TOKEN_STORE_KEY_ALT]);
  var expires = await readFirstStoreAsync([TOKEN_EXPIRES_KEY, TOKEN_EXPIRES_KEY_ALT]);
  var credKey = await readFirstStoreAsync([TOKEN_CREDENTIAL_KEY, TOKEN_CREDENTIAL_KEY_ALT]);

  if (!forceRefresh && token && expires && !credentials.changed) {
    var nowSec = Math.floor(Date.now() / 1000);
    var matched = credKey === credentials.fingerprint;
    if (!credKey) {
      await writeStoreAsync(TOKEN_CREDENTIAL_KEY, credentials.fingerprint);
      await writeStoreAsync(TOKEN_CREDENTIAL_KEY_ALT, credentials.fingerprint);
      matched = true;
    }
    if (matched && nowSec + TOKEN_REFRESH_BUFFER_SECONDS < Number(expires)) {
      writeStore(TOKEN_STORE_KEY, token);
      writeStore(TOKEN_STORE_KEY_ALT, token);
      return token;
    }
  }

  return loginWithLock(credentials, true);
}

async function loginWithPassword(params) {
  params = await ensureGlobalParams(params || {});
  var credentials = await resolveLoginCredentials(params);
  var token = await getLoginTokenForCredentials(credentials, true, "");
  params.apiToken = token;
  params.email = credentials.username;
  params.username = credentials.username;
  params.password = credentials.password;
  persistGlobalParam("email", credentials.username);
  persistGlobalParam("username", credentials.username);
  return { token: token, data: { token: token } };
}

/**
 * 对齐可视化 createJavdbRequestContext：
 * 始终从全局参数 / 本地凭证解析账号密码，再取（或刷新）Token。
 * 不再仅凭同步 readStore 里残留的 apiToken 提前返回——那会造成「已填密码仍提示去填」的假象。
 */
async function ensureApiSession(params, options) {
  options = options || {};
  params = await ensureGlobalParams(params || {});

  var preferredToken = String(
    (await resolveGlobalParamAsync("apiToken", params, LOGIN_TOKEN_ALIASES)) ||
      (await unwrapStoreValue(params.apiToken)) ||
      ""
  ).trim();

  var username = String(
    (await resolveGlobalParamAsync("email", params, LOGIN_USER_ALIASES)) ||
      (await unwrapStoreValue(params.email)) ||
      (await unwrapStoreValue(params.username)) ||
      ""
  ).trim();
  var password = String(
    (await resolveGlobalParamAsync("password", params, LOGIN_PASS_ALIASES)) ||
      (await unwrapStoreValue(params.password)) ||
      ""
  ).trim();

  if (!username || !password) {
    try {
      var stored = await getStoredLoginCredentials();
      if (!username) username = stored.username;
      if (!password) password = stored.password;
    } catch (e) {}
  }

  if (username) {
    params.email = username;
    params.username = username;
  }
  if (password) params.password = password;

  // 仅有 Token、无账号密码：允许匿名浏览带 Token；requireAuth 时也可用
  if (!username || !password) {
    if (preferredToken) {
      params.apiToken = preferredToken;
      return syncParams(params);
    }
    var cachedOnly = await readFirstStoreAsync([TOKEN_STORE_KEY, TOKEN_STORE_KEY_ALT]);
    if (cachedOnly && !options.requireAuth) {
      params.apiToken = cachedOnly;
      return syncParams(params);
    }
    if (options.requireAuth) {
      throw new Error("请先设置 JavDB 账号密码（设置→全局参数）");
    }
    return syncParams(params);
  }

  try {
    var credentials = await resolveLoginCredentials(params);
    var token = await getLoginTokenForCredentials(
      credentials,
      !!options.forceRefresh,
      preferredToken
    );
    params.apiToken = token;
    params.email = credentials.username;
    params.username = credentials.username;
    params.password = credentials.password;
  } catch (err) {
    if (options.requireAuth) throw err;
    console.error("[javdb] 登录失败（继续匿名）:", (err && err.message) || err);
  }
  return syncParams(params);
}

/* ===== module: 08-api-items.js ===== */

/* ========================= API → Items ========================= */

function safeText(value) {
  return String(value == null ? "" : value).replace(/\s+/g, " ").trim();
}

function movieLink(id) {
  return "/v/" + String(id || "").replace(/^\//, "");
}

function pickCover(movie) {
  movie = movie || {};
  var cover = sanitizeCoverUrl(movie.cover_url);
  if (cover) return cover;
  var thumb = sanitizeCoverUrl(movie.thumb_url);
  if (thumb) return thumb;
  var cdnCover = buildJavdbCdnCoverUrl(movie.id);
  if (cdnCover) return cdnCover;
  var cdnThumb = buildJavdbCdnThumbUrl(movie.id);
  if (cdnThumb) return cdnThumb;
  // DMM / MGStage 只由高清策略的白名单生成，不为未知番号猜测不存在的图片。
  return sanitizeCoverUrl(movie.small_cover_url);
}

function buildListDescription(movie) {
  var parts = [];
  if (movie.number) parts.push("番号: " + movie.number);
  if (movie.has_cnsub) parts.push("中字");
  if ((movie.magnets_count || 0) > 0) parts.push("磁链×" + movie.magnets_count);
  if (movie.has_preview_video) parts.push("预告");
  return parts.join(" | ");
}

/** 接口的磁力筛选偶尔会混入无磁力影片，按列表磁力标记再过滤一次。 */
function movieHasMagnets(movie) {
  movie = movie || {};
  var counts = [movie.magnets_count, movie.magnet_count, movie.magnetsCount, movie.magnetCount];
  for (var i = 0; i < counts.length; i++) {
    if (Number(counts[i] || 0) > 0) return true;
  }
  if (Array.isArray(movie.magnets) && movie.magnets.length > 0) return true;
  var flags = [movie.has_magnets, movie.has_magnet, movie.hasMagnets, movie.hasMagnet];
  for (var j = 0; j < flags.length; j++) {
    if (flags[j] === true || flags[j] === 1 || String(flags[j]).toLowerCase() === "true") return true;
  }
  return false;
}

function filterMoviesWithMagnets(movies) {
  return (movies || []).filter(movieHasMagnets);
}

function mapListMovie(movie) {
  var code = safeText(movie.number || "");
  var title = safeText(movie.title || code || movie.id);
  if (code && title.indexOf(code) !== 0) title = code + " " + title;
  var siteCover = pickCover(movie);
  // 对齐可视化版：命中 direct-dmm / MGStage 时直接展示高清竖图和横图。
  var covers = buildListCoverBundle(code || title, siteCover, movie.small_cover_url);
  var backdrop = sanitizeCoverUrl(covers.backdropPath) || siteCover || "";
  var poster = sanitizeCoverUrl(covers.posterPath) || siteCover || "";
  return {
    id: code || movie.id,
    type: "url",
    mediaType: "movie",
    title: title,
    link: movieLink(movie.id),
    releaseDate: movie.release_date || "",
    rating: Number(movie.score || 0) || 0,
    description: buildListDescription(movie),
    backdropPath: backdrop || undefined,
    posterPath: poster || undefined,
    detailPoster: sanitizeCoverUrl(covers.detailPoster) || poster || undefined,
    coverUrl: sanitizeCoverUrl(covers.coverUrl) || backdrop || undefined,
    image: sanitizeCoverUrl(covers.image) || backdrop || undefined,
  };
}

async function enrichListMovies(movies, params) {
  return (movies || []).map(mapListMovie);
}

function buildCategoryFilter(kind, itemId, magnetOnly) {
  var id = String(itemId || "").trim();
  var typePart = "0";
  var extra = magnetOnly ? "m" : "";
  if (kind === "tags") {
    if (/^[pmcsiv]$/i.test(id)) {
      // p/m/c/s/i/v 已是原生资源筛选，不能再重复拼接 :m。
      return typePart + ":0:x:" + id.toLowerCase();
    }
    return typePart + ":t::" + id + ":" + extra;
  }
  var kindCode = CATEGORY_KIND_CODE[kind] || "a";
  return typePart + ":" + kindCode + ":" + id + ":" + extra;
}

function resolveSortQuery(sortBy) {
  return SORT_API_MAP[sortBy] || SORT_API_MAP.published;
}

function extractApiMovies(data, depth) {
  if (Array.isArray(data)) return data;
  if (!data || typeof data !== "object" || (depth || 0) > 3) return [];
  var keys = ["movies", "videos", "items", "results", "data"];
  for (var i = 0; i < keys.length; i++) {
    var value = data[keys[i]];
    if (Array.isArray(value)) return value;
    if (value && typeof value === "object") {
      var nested = extractApiMovies(value, (depth || 0) + 1);
      if (nested.length) return nested;
    }
  }
  return [];
}

async function fetchCategoryMovies(filterBy, params) {
  params = params || {};
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
  // 列表 API 不保证包含磁力统计，不能据此丢弃已返回的分类作品。
  return extractApiMovies(data);
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
  var avatar = sanitizeCoverUrl(item.avatar_url) || "";
  return {
    id: path,
    type: "url",
    mediaType: kind === "actors" ? "person" : "movie",
    title: name,
    link: link,
    posterPath: avatar || undefined,
    backdropPath: avatar || undefined,
    coverUrl: avatar || undefined,
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
  params = params || {};
  var page = Number(params.page || params.from || 1);
  var sortRaw = String(params.sort_by || "published");
  var sortKey = sortRaw.replace(/_download$/, "");
  var query = {
    q: keyword,
    page: page,
    type: "movie",
    movie_sort_by: SEARCH_SORT_MAP[sortKey] || "release",
  };
  if (magnetOnly) query.movie_filter_by = "magnet";
  var data = await apiGet("/v2/search", query, params);
  // 列表 API 不保证包含磁力统计，不能据此丢弃已返回的分类作品。
  return extractApiMovies(data);
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
      avatar: sanitizeCoverUrl(actor.avatar_url) || "",
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
    if (m.uncensored) flags.push("破解");
    if (m.cnsub) flags.push("中字");
    if (m.uhd) flags.push("4K");
    else if (m.hd) flags.push("HD");
    var size = formatMagnetSize(m.size) || safeText(m.sizeText || "");
    var source = m.source === "review" ? "短评" : m.source === "mixed" ? "多源" : "JavDB";
    lines.push(
      (m.name || m.hash || "magnet") +
        (size ? " · " + size : "") +
        (flags.length ? " · " + flags.join("/") : "") +
        " · " +
        source +
        (m.hash ? "\nmagnet:?xt=urn:btih:" + m.hash : "")
    );
  }
  return lines.join("\n\n");
}

/* ===== module: 09-guangya-magnet.js ===== */

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
  text = String(text || "").replace(/,/g, "");
  var m = text.match(/(\d+(?:\.\d+)?)\s*(TiB|TB|GiB|GB|G|MiB|MB|M|KiB|KB|K)\b/i);
  if (!m) return 0;
  var n = Number(m[1]);
  if (!Number.isFinite(n) || n <= 0) return 0;
  var unit = m[2].toUpperCase();
  if (unit === "TB" || unit === "TIB") return n * 1024 * 1024;
  if (unit === "GB" || unit === "GIB" || unit === "G") return n * 1024;
  if (unit === "MB" || unit === "MIB" || unit === "M") return n;
  if (unit === "KB" || unit === "KIB" || unit === "K") return n / 1024;
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
  var uhd = /4k\d*|\b2160\b|\buhd\b/i.test(text);
  return {
    cnsub: /字幕|中字|中文|cnsub|chs|subbed|[-_.]C(?:H)?(?:[-_.]|$)/i.test(text),
    hd: uhd || /\bHD\b|\bFHD\b|1080|720p/i.test(text),
    uhd: uhd,
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
        uhd: flags.uhd,
        uncensored: flags.uncensored,
        source: "review",
        sources: ["review"],
        magnet: entry.magnet,
      });
    });
  });
  return out;
}

async function fetchMovieReviews(movieId, params, options) {
  options = options || {};
  var page = Number(options.page || 1) || 1;
  var limit = Number(options.limit || 15) || 15;
  // 详情页关键路径：默认最多 2 页，避免串行翻 5 页拖慢整页
  var maxPages = Number(options.maxPages != null ? options.maxPages : 2) || 2;
  var deadlineAt = Number(options.deadlineAt || 0) || 0;
  var all = [];
  for (var p = page; p < page + maxPages; p++) {
    if (deadlineAt && Date.now() >= deadlineAt) break;
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

function settleWithTimeout(promise, ms, fallback) {
  ms = Math.max(500, Number(ms) || 0);
  return new Promise(function (resolve) {
    var done = false;
    var timer = setTimeout(function () {
      if (done) return;
      done = true;
      resolve(fallback);
    }, ms);
    Promise.resolve(promise).then(
      function (value) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve(value);
      },
      function () {
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve(fallback);
      }
    );
  });
}

function collectMagnetSourceKeys(magnets) {
  var seen = {};
  (magnets || []).forEach(function (m) {
    var list = Array.isArray(m && m.sources) && m.sources.length ? m.sources : [m && m.source];
    for (var i = 0; i < list.length; i++) {
      var key = String(list[i] || "").toLowerCase();
      if (key === "api" || key === "javdb") seen.api = true;
      else if (key === "review") seen.review = true;
    }
  });
  return seen;
}

function summarizeMagnetSourceLabel(magnets, fallback) {
  var seen = collectMagnetSourceKeys(magnets);
  var labels = [];
  if (seen.api) labels.push("JavDB官方");
  if (seen.review) labels.push("短评");
  if (labels.length > 1) return "mixed";
  if (labels.length === 1) {
    if (seen.api) return "api";
    if (seen.review) return "review";
  }
  return fallback || "";
}

function formatMagnetSourceTip(source) {
  if (source === "review") return "磁力: 见下方相似作品栏（来自短评分享），点击即可转存光鸭云盘";
  if (source === "mixed") return "磁力: 见下方相似作品栏（多源已合并去重），点击即可转存光鸭云盘";
  if (source === "api") return "磁力: 见下方相似作品栏（JavDB官方），点击即可转存光鸭云盘";
  return "磁力: 见下方相似作品栏，点击即可转存光鸭云盘";
}

async function fetchDetailMagnets(movieId, params, code) {
  var apiMagnets = [];
  var reviewMagnets = [];
  var reviews = [];
  var startedAt = Date.now();
  // 详情页整体软超时：超过后用已拿到的结果，避免短评翻页卡住
  var deadlineAt = startedAt + 8000;

  var magnetPromise = Promise.resolve()
    .then(function () {
      return apiGet("/v1/movies/" + movieId + "/magnets", null, params);
    })
    .then(function (magnetData) {
      return (magnetData && magnetData.magnets) || [];
    })
    ["catch"](function () {
      return [];
    });

  var reviewPromise = Promise.resolve()
    .then(function () {
      return fetchMovieReviews(movieId, params, {
        page: 1,
        limit: 15,
        maxPages: 2,
        deadlineAt: deadlineAt,
      });
    })
    .then(function (list) {
      reviews = list || [];
      return magnetsFromReviews(reviews, code);
    })
    ["catch"](function () {
      return [];
    });

  var remainMs = Math.max(1000, deadlineAt - Date.now());
  var settled = await Promise.all([
    settleWithTimeout(magnetPromise, remainMs, []),
    settleWithTimeout(reviewPromise, remainMs, []),
  ]);
  apiMagnets = settled[0] || [];
  reviewMagnets = settled[1] || [];

  var merged = mergeAndDedupeMagnets(apiMagnets, reviewMagnets, code);
  var source = summarizeMagnetSourceLabel(merged, "");
  if (!source) {
    if (apiMagnets.length && reviewMagnets.length) source = "mixed";
    else if (apiMagnets.length) source = "api";
    else if (reviewMagnets.length) source = "review";
  }
  console.log(
    "[javdb/detail-magnets]",
    code || movieId,
    "api=" + apiMagnets.length,
    "review=" + reviewMagnets.length,
    "merged=" + merged.length,
    "elapsed=" + (Date.now() - startedAt) + "ms"
  );
  return {
    magnets: merged,
    source: source,
    reviews: reviews || [],
    counts: {
      api: apiMagnets.length,
      review: reviewMagnets.length,
      merged: merged.length,
    },
  };
}

/** 短评写入详情简介（对齐可视化：按点赞排序取前 15） */
function formatDetailReviewsForDescription(reviews) {
  var list = (reviews || [])
    .filter(function (item) {
      return item && (item.content || reviewTextFromItem(item));
    })
    .sort(function (a, b) {
      return (Number(b.likes_count) || 0) - (Number(a.likes_count) || 0);
    })
    .slice(0, 15);
  if (!list.length) return "";
  var parts = ["── 短评 ──"];
  for (var i = 0; i < list.length; i++) {
    var text = safeText(list[i].content || reviewTextFromItem(list[i]));
    if (text) parts.push(text);
  }
  return parts.length > 1 ? parts.join("\n\n") : "";
}

function normalizeMagnetSourceKey(source) {
  var key = String(source || "api").toLowerCase();
  if (key === "javdb") return "api";
  if (key === "api" || key === "review" || key === "mixed") return key;
  return "api";
}

function magnetSourceLabel(m) {
  var keys = [];
  var raw = Array.isArray(m && m.sources) && m.sources.length ? m.sources : [m && m.source];
  for (var i = 0; i < raw.length; i++) {
    var key = normalizeMagnetSourceKey(raw[i]);
    if (key === "mixed") continue;
    if (keys.indexOf(key) === -1) keys.push(key);
  }
  if (!keys.length) keys.push("api");
  var labels = keys.map(function (key) {
    if (key === "review") return "短评";
    return "JavDB官方";
  });
  return labels.join("＋");
}

function magnetSourceShort(m) {
  var label = magnetSourceLabel(m);
  if (label.indexOf("＋") >= 0) return "多源";
  if (label === "JavDB官方") return "JavDB";
  return label;
}

function normalizeMagnetEntry(raw, code, source) {
  raw = raw || {};
  var magnet = raw.magnet || raw.maglink || (raw.hash ? buildMagnetUrl(raw.hash) : "");
  var hash = String(raw.hash || extractMagnetHash(magnet) || "").trim().toLowerCase();
  if (!hash) return null;
  var name = safeText(raw.name || raw.title || hash);
  var text = name + " " + safeText(raw.description || "") + " " + safeText(raw.sizeText || "");
  var flags = parseMagnetFlags(text + " " + magnet);
  var sizeMb = Number(raw.size || 0);
  if (!Number.isFinite(sizeMb) || sizeMb <= 0) sizeMb = parseMagnetSizeFromUri(magnet);
  if (!sizeMb) sizeMb = parseMagnetSizeMb(text);
  var src = normalizeMagnetSourceKey(source || raw.source || "api");
  var sources = Array.isArray(raw.sources) && raw.sources.length
    ? raw.sources.map(normalizeMagnetSourceKey)
    : [src];
  if (sources.indexOf(src) === -1) sources.push(src);
  return {
    hash: hash,
    name: name,
    size: sizeMb,
    sizeText: safeText(raw.sizeText || ""),
    date: safeText(raw.date || raw.release_date || ""),
    seeders: Number(raw.seeders || 0) || 0,
    files_count: Number(raw.files_count || raw.files || 0) || 0,
    cnsub: !!(raw.cnsub || flags.cnsub),
    hd: !!(raw.hd || flags.hd || raw.uhd || flags.uhd),
    uhd: !!(raw.uhd || flags.uhd),
    uncensored: !!(raw.uncensored || flags.uncensored),
    source: src,
    sources: sources,
    magnet: magnet || buildMagnetUrl(hash),
  };
}

function magnetTagScore(m) {
  var score = 0;
  if (m && m.uncensored) score += 1000;
  if (m && m.cnsub) score += 100;
  if (m && m.uhd) score += 30;
  else if (m && m.hd) score += 10;
  score += Math.min(Number(m && m.seeders || 0), 80) / 10;
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

function mergeMagnetCandidateMeta(preferred, other) {
  if (!preferred) return other;
  if (!other) return preferred;
  var sources = [];
  var seen = {};
  []
    .concat(preferred.sources || [preferred.source], other.sources || [other.source])
    .forEach(function (key) {
      key = normalizeMagnetSourceKey(key);
      if (!seen[key]) {
        seen[key] = true;
        sources.push(key);
      }
    });
  preferred.sources = sources;
  preferred.source = sources.length > 1 ? "mixed" : sources[0] || preferred.source;
  if (!preferred.name || preferred.name === preferred.hash) preferred.name = other.name || preferred.name;
  if (!(Number(preferred.size) > 0) && Number(other.size) > 0) preferred.size = other.size;
  if (!preferred.sizeText && other.sizeText) preferred.sizeText = other.sizeText;
  if (!preferred.date && other.date) preferred.date = other.date;
  if (!(Number(preferred.seeders) > 0) && Number(other.seeders) > 0) preferred.seeders = other.seeders;
  if (!(Number(preferred.files_count) > 0) && Number(other.files_count) > 0) {
    preferred.files_count = other.files_count;
  }
  preferred.cnsub = !!(preferred.cnsub || other.cnsub);
  preferred.hd = !!(preferred.hd || other.hd || preferred.uhd || other.uhd);
  preferred.uhd = !!(preferred.uhd || other.uhd);
  preferred.uncensored = !!(preferred.uncensored || other.uncensored);
  if ((!preferred.magnet || preferred.magnet.length < 20) && other.magnet) preferred.magnet = other.magnet;
  return preferred;
}

function pickBetterMagnet(current, candidate) {
  if (!current) return candidate;
  if (!candidate) return current;
  var better = compareMagnetPriority(candidate, current) > 0 ? candidate : current;
  var other = better === candidate ? current : candidate;
  return mergeMagnetCandidateMeta(better, other);
}

function mergeMagnetLists(apiMagnets, reviewMagnets, code) {
  var map = {};
  function ingest(list, source) {
    (list || []).forEach(function (raw) {
      var item = normalizeMagnetEntry(raw, code, source);
      if (!item) return;
      map[item.hash] = pickBetterMagnet(map[item.hash], item);
    });
  }
  ingest(apiMagnets, "api");
  ingest(reviewMagnets, "review");
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

function buildMagnetTraitFlags(m) {
  var flags = [];
  if (m && m.uncensored) flags.push("破解");
  if (m && m.cnsub) flags.push("中字");
  if (m && m.uhd) flags.push("4K");
  else if (m && m.hd) flags.push("HD");
  return flags;
}

function buildMagnetItemTitle(m, code) {
  var flags = buildMagnetTraitFlags(m);
  var size = formatMagnetSize(m.size) || safeText(m.sizeText || "");
  var parts = [];
  if (size) parts.push(size);
  if (flags.length) parts.push(flags.join("/"));
  var src = magnetSourceShort(m);
  if (src) parts.push(src);
  if (!parts.length) {
    var fallback = stripCodeFromMagnetName(safeText(m.name || m.hash || "磁力"), code);
    if (fallback) parts.push(fallback);
  }
  return parts.join(" · ") || "磁力";
}

function buildMagnetItemDescription(m, code) {
  var lines = [];
  var displayName = stripCodeFromMagnetName(safeText(m.name || ""), code);
  if (displayName && displayName.toUpperCase() !== safeText(code).toUpperCase()) {
    lines.push(displayName);
  } else if (safeText(m.name || "") && safeText(m.name) !== m.hash) {
    lines.push(safeText(m.name));
  }

  var meta = [];
  var size = formatMagnetSize(m.size) || safeText(m.sizeText || "");
  if (size) meta.push("体积 " + size);
  if (Number(m.files_count) > 0) meta.push(Number(m.files_count) + " 个文件");
  if (Number(m.seeders) > 0) meta.push("做种 " + Number(m.seeders));
  if (safeText(m.date || "")) meta.push(safeText(m.date));
  if (meta.length) lines.push(meta.join(" · "));

  var traits = [];
  if (m.uncensored) traits.push("破解/无码");
  if (m.cnsub) traits.push("中文字幕");
  if (m.uhd) traits.push("4K/UHD");
  else if (m.hd) traits.push("高清");
  if (traits.length) lines.push("特征: " + traits.join(" · "));

  lines.push("来源: " + magnetSourceLabel(m));
  if (m.hash) lines.push("Hash: " + String(m.hash).slice(0, 8) + "…");
  lines.push("点击转存到光鸭云盘");
  return lines.join("\n");
}

function buildMagnetRelatedItems(magnets, ctx) {
  ctx = ctx || {};
  var items = [];
  var list = magnets || [];
  for (var i = 0; i < list.length && i < 12; i++) {
    var m = list[i];
    var hash = String(m.hash || "").trim().toLowerCase();
    if (!hash) continue;
    cacheMagnetEntry(hash, {
      magnet: m.magnet || buildMagnetUrl(hash),
      hash: hash,
      name: safeText(m.name || hash),
      size: m.size || 0,
      sizeText: m.sizeText || "",
      date: m.date || "",
      seeders: m.seeders || 0,
      files_count: m.files_count || 0,
      cnsub: !!m.cnsub,
      hd: !!m.hd,
      uhd: !!m.uhd,
      uncensored: !!m.uncensored,
      movieId: ctx.movieId || "",
      code: ctx.code || "",
      title: ctx.title || "",
      backdropPath: ctx.backdropPath || "",
      source: m.source || "api",
      sources: Array.isArray(m.sources) ? m.sources.slice() : [m.source || "api"],
    });
    items.push({
      id: hash,
      type: "url",
      // 不设 mediaType:movie，避免被当成可播线路/按需解析占位
      title: buildMagnetItemTitle(m, ctx.code),
      link: MAGNET_LINK_PREFIX + hash,
      backdropPath: ctx.backdropPath || undefined,
      description: buildMagnetItemDescription(m, ctx.code),
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

/* ===== module: 10-visual-hd-images.js ===== */

/* ========================= 高清图片（可视化版策略） ========================= */

/*
 * 与“解密javdb.可视化.js”保持同一套策略：
 * - 已确认的片商番号直接拼接 DMM 高清竖图/横图
 * - Prestige 系列使用 MGStage 高清图片
 * - 其他番号继续使用 JavDB 接口/CDN 图片
 *
 * 这里不再调用 dmm-cover Probe Worker。
 */

var JAVDB_CDN_BASE = "https://c0.jdbstatic.com";
var HD_IMAGE_REQUEST_TIMEOUT_MS = 1200;
var HD_IMAGE_BATCH_BUDGET_MS = 4000;
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
  return sanitizeCoverUrl(fallback) || "";
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

function buildListCoverBundle(code, siteFallback, sitePosterFallback) {
  var fallback = sanitizeCoverUrl(siteFallback);
  var candidates = buildImageCandidatesFromValue(code);
  if (candidates.strategy !== "direct-dmm" && candidates.strategy !== "mgstage") {
    // 对齐可视化版：非高清策略优先用接口竖图，缺失时由 covers 路径转为 small_covers。
    var sitePoster = sanitizeCoverUrl(sitePosterFallback) || fallback.replace(/\/covers\//, "/small_covers/");
    return buildCoverBundleFromUrls(sitePoster || fallback, fallback || sitePoster);
  }
  var poster = chooseFirstCandidate(candidates.posterCandidates, fallback);
  var backdrop = chooseFirstCandidate(candidates.backdropCandidates, fallback);
  return buildCoverBundleFromUrls(poster || fallback, backdrop || fallback || poster);
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

/* ===== module: 11-handlers.js ===== */

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
  var text = String(raw || "all").trim();
  if (!text || text === "all") return { type: "all", type_value: "" };
  // 可视化 ranking_type：type_0 / type_1 / type_2 / type_3
  if (/^type_[0-3]$/i.test(text)) {
    return { type: "video_type", type_value: text.replace(/^type_/i, "") };
  }
  if (text === "censored" || text === "0") return { type: "video_type", type_value: "0" };
  if (text === "uncensored" || text === "1") return { type: "video_type", type_value: "1" };
  if (text === "western" || text === "2") return { type: "video_type", type_value: "2" };
  if (text === "fc2" || text === "3") return { type: "video_type", type_value: "3" };
  if (/^[0-3]$/.test(text)) return { type: "video_type", type_value: text };
  // 年份榜：2026 / 2025 ...
  if (/^\d{4}$/.test(text)) return { type: "year", type_value: text };
  return { type: "all", type_value: "" };
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
    var rankingType = params.ranking_type || params.type || "all";
    var norm = normalizeTop250Type(rankingType);
    var query = {
      type: norm.type,
      page: page,
      limit: 20,
      start_rank: 1,
      ignore_watched: false,
    };
    if (norm.type_value) query.type_value = norm.type_value;
    var data = await apiGet("/v1/movies/top", query, params);
    var movies = (data && data.movies) || [];
    if (!movies.length) throw new Error("TOP250 无数据（请确认已登录）");
    return enrichListMovies(movies, params);
  } catch (error) {
    var msg = String((error && error.message) || error || "");
    if (/请先设置 JavDB 账号密码|请填写账号|请在全局参数填写/i.test(msg)) {
      throw new Error("TOP250 需要登录：请在设置→全局参数填写账号和密码后重试");
    }
    if (/請登錄|请登录|JWT|登录失败|帳號|账号密码/i.test(msg)) {
      throw new Error("TOP250 登录失败：" + msg);
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

    // 与可视化版一致：按番号选择 direct-dmm / MGStage 高清图，其他番号回退站点/CDN。
    var siteCover = pickCover(movie);
    var coverBundle = buildDetailCoverBundle(code || title, siteCover, movie.small_cover_url);
    var posterUrl = sanitizeCoverUrl(coverBundle.posterPath) || siteCover || "";
    var coverUrl = sanitizeCoverUrl(coverBundle.backdropPath) || siteCover || posterUrl;

    var galleryUrls = buildHighResGallery(code, 10);
    if (!galleryUrls.length) {
      (movie.preview_images || []).forEach(function (img) {
        var u = sanitizeCoverUrl((img && (img.large_url || img.thumb_url)) || "");
        if (u) galleryUrls.push(u);
      });
    }
    var backdropPaths = compactUniqueUrls(
      [].concat(coverUrl ? [coverUrl] : [], galleryUrls || [])
    ).filter(Boolean);

    var previewUrl = safeText(movie.preview_video_url || "");
    var trailers = buildDetailTrailers(previewUrl, coverUrl || posterUrl);

    var meta = parseDetailMeta(movie);
    var relatedItems = [];
    var magnetSource = "";
    var detailReviews = [];
    try {
      var magnetBundle = await fetchDetailMagnets(movieId, params, code);
      magnetSource = magnetBundle.source || "";
      detailReviews = magnetBundle.reviews || [];
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
    if (movie.summary) {
      descParts.push("── 剧情简介 ──\n\n" + safeText(movie.summary));
    }
    if (movie.maker_name) descParts.push("厂牌: " + movie.maker_name);
    var stats = [];
    if (movie.want_watch_count) stats.push("想看 " + movie.want_watch_count);
    if (movie.watched_count) stats.push("观看 " + movie.watched_count);
    if (movie.reviews_count) stats.push("评价 " + movie.reviews_count);
    if (stats.length) descParts.push(stats.join("  "));
    var shortReviewBlock = formatDetailReviewsForDescription(detailReviews);
    if (shortReviewBlock) descParts.push(shortReviewBlock);
    if (relatedItems.length) {
      descParts.push(formatMagnetSourceTip(magnetSource));
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
      description: descParts.join("\n\n"),
      // 预告走 trailers；本脚本不提供正片播放源
      trailers: trailers,
      // 对齐 netflav：条目不带 videoId（App 资源上下文字段），
      // 有 videoId 而无 loadResource 时详情页会渲染空的播放资源占位框
      number: code || "",
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
    movieHasMagnets: movieHasMagnets,
    filterMoviesWithMagnets: filterMoviesWithMagnets,
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
    buildMagnetItemDescription: buildMagnetItemDescription,
    formatMagnetSourceTip: formatMagnetSourceTip,
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

/* ===== module: 12-ranking-static.js ===== */

/* ========================= Ranking static data (from AVDB) ========================= */
/** [SKIP UNLESS NEEDED] 榜单静态数据，未更新月榜/推荐时勿读写本文件 */

var MIDDLE_FINGER_DATA = {
  '2025-06': [
    {
      id: 'JUR-354',
      javdbId: 'Ww3pkp',
      originalTitle:
        '汗ほとばしる人妻の圧倒的な腰振りで、僕は一度も腰を動かさずに中出ししてしまった。 めぐり',
      releaseDate: '2025-06-10',
      actress: '惠理',
    },
    {
      id: 'SONE-720',
      javdbId: 'deROGe',
      originalTitle:
        '【FANZA限定】最強ヒロインに会える風俗店 瀬戸環奈 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-06-11',
      actress: '濑户环奈',
    },
    {
      id: 'MIDA-208',
      javdbId: 'WwVKDp',
      originalTitle:
        '仲村みう×MOODYZ 遂にグラビアクイーンが参戦！ ひとりバコバコバスツアー2025 芸能人！ファン大感謝スペシャル！！素人男子と20発中出し大乱交！！ （ブルーレイディスク）',
      releaseDate: '2025-06-17',
      actress: '中村美羽',
    },
    {
      id: 'IPZZ-598',
      javdbId: 'BzKMW4',
      originalTitle:
        '試着販売と囁き淫語と中出しで売上No.1巨乳ランジェリー販売員の営業術とエロテクが凄い 全編エロ下着痴女プレイ！！ 桜空もも （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-06-11',
      actress: '樱空桃',
    },
    {
      id: 'SONE-769',
      javdbId: '82qPRa',
      originalTitle:
        'バイト先の地味なノーマーク女子と一緒に飲んだら… まさかのSEX大好きエロモンスターで精液透明になるまで何度もヌカれた。 兒玉七海 生写真3枚付き',
      releaseDate: '2025-06-25',
      actress: '儿玉七海',
    },
    {
      id: 'MIDA-180',
      javdbId: 'pkx0xe',
      originalTitle:
        'デビュー5周年記念企画！チキチキ小野六花31変化～！1ヶ月分の日替わり31コスプレ4時間31変化SPECIAL',
      releaseDate: '2025-06-03',
      actress: '小野六花',
    },
    {
      id: 'MIDA-139',
      javdbId: 'AqE3EM',
      originalTitle:
        '変態店長に深夜シフトでノーブラ巨乳ノーパン接客させられています 全裸羞恥調教アルバイト 百田光稀',
      releaseDate: '2025-06-03',
      actress: '百田光希',
    },
    {
      id: 'MIMK-216',
      javdbId: '96qpqX',
      originalTitle:
        '見習いくの一が房中術（エロ）で不良を成敗する！ それイけ！くのいち乙羽ちゃん 実写版 販売数160，000部以上！AV初！？影分身3P性交！ 乙アリス （BOD）',
      releaseDate: '2025-06-17',
      actress: '乙爱丽丝',
    },
    {
      id: 'SDHS-059',
      javdbId: 'Xe4NnG',
      originalTitle: '神木麗の休日 彼氏の自宅でハメ撮り、ノンストップ2本番と顔射。',
      releaseDate: '2025-06-25',
      actress: '神木丽',
    },
    {
      id: 'SONE-708',
      javdbId: 'e84P2E',
      originalTitle:
        '村上悠華を【強力媚薬】でぶっ壊したい。この肉体がイキ跳ねて大痙攣するエビ反り超媚薬漬けアクメ 生写真3枚付き',
      releaseDate: '2025-06-11',
      actress: '村上悠华',
    },
    {
      id: 'SONE-751',
      javdbId: 'qAPWne',
      originalTitle:
        'Lカップで顔も超可愛い 雲の上の最高ビジュ女子学生！と見せかけて隙だらけなドジっ子がおっぱい大き過ぎて何度もポロリ 田野憂',
      releaseDate: '2025-06-10',
      actress: '田野忧',
    },
    {
      id: 'MIDA-200',
      javdbId: 'r3Y4YN',
      originalTitle:
        'アノヒトがシテくれなくても… 上司の色白美尻若奥さんのノーパン肛門誘惑に負けたアナル見せゲス不倫 宮下玲奈 （BOD）',
      releaseDate: '2025-06-17',
      actress: '宫下玲奈',
    },
    {
      id: 'MIAB-488',
      javdbId: '96eKe8',
      originalTitle:
        '僕の性癖に刺さる美脚女上司のノーパン直穿きパンスト挑発に負け上から目線で痴女られ20発射精し絶賛ドはまり中 木下ひまり （BOD）',
      releaseDate: '2025-06-03',
      actress: '木下日葵',
    },
    {
      id: 'SONE-776',
      javdbId: 'Rk2WER',
      originalTitle:
        '175cm Kカップ ワールドクラスの肉体 全解剖 乳も尻も全ての揺れを逃さぬ究極女体特化・肉感アングル映像 みなみ羽琉 生写真3枚付き',
      releaseDate: '2025-06-25',
      actress: '南羽琉',
    },
    {
      id: 'SONE-563',
      javdbId: '4Ddxap',
      originalTitle:
        'エスワン20周年記念 AV業界史に残る最強タッグ作品 たまったら射精しよう わたしたち おチ●ポテクニシャンです。 本郷愛 河北彩伽 金松季歩 miru 三田真鈴 七ツ森りり 浅野こころ 奥田咲 楓ふうあ 明日葉みつは （ブルーレイディスク）',
      releaseDate: '2025-06-24',
      title: 'S120周年大共演',
    },
    {
      id: 'SONE-787',
      javdbId: '2mqXEp',
      originalTitle:
        '女神はやはり実在した_神のLカップを性感開発する初体験3本番 木村愛心 （ブルーレイディスク）',
      releaseDate: '2025-06-24',
      actress: '木村爱心',
    },
    {
      id: 'DASS-705',
      javdbId: 'xAgOGO',
      originalTitle:
        'このセレブ雌、欲求不満につき。ムラつけば即ペニス喰らって何度も喉しゃくり。垂れ流し肉壺ディープ性交 沙月ふみの',
      releaseDate: '2025-06-24',
      actress: '沙月文奈',
    },
    {
      id: 'DASS-650',
      javdbId: 'pkqe09',
      originalTitle: '常識改変NTR 妻は寝取られるのが当たり前だと歪ませられた世界編。 橘メアリー',
      releaseDate: '2025-06-24',
      actress: '橘玛丽',
    },
    {
      id: 'SONE-729',
      javdbId: 'wKkMy1',
      originalTitle:
        '愛する弟を守るため絶倫資産家のデカ乳肉便器となりマゾ堕ちした10日間 神楽ももか 生写真3枚付き',
      releaseDate: '2025-06-25',
      actress: '神乐桃香',
    },
    {
      id: 'IPZZ-586',
      javdbId: 'RkG3X4',
      originalTitle:
        '日本よ、これがアイポケだー。 BEAUTY VENUS THE HARLEM もう絶対に揃わない夢の究極共演！！ 痴女プレイ全10コーナー330分！ 桜空もも 長浜みつり 西宮ゆめ 古川ほのか さくらわかな 佐々木さき 愛才りあ 役野満里奈',
      releaseDate: '2025-06-10',
      title: 'BEAUTY VENUS THE HARLEM',
    },
    {
      id: 'PRED-779',
      javdbId: 'degQOQ',
      originalTitle:
        '妻と倦怠期中の僕はつむぎ（義妹）に誘惑されて何度も、何度も、中出しをしてしまった…。 明里つむぎ',
      releaseDate: '2025-06-17',
      actress: '明里紬',
    },
    {
      id: 'WAAA-511',
      javdbId: 'YwrO3p',
      originalTitle:
        '美谷朱音と山岸あや花のW凄テクを我慢できれば生★中出しSEX！ 特別編 （ブルーレイディスク）',
      releaseDate: '2025-07-01',
      actress: '山岸逢花,美谷朱里',
    },
  ],
  '2025-07': [
    {
      id: 'SONE-566',
      javdbId: '2mq66Z',
      originalTitle:
        'エスワン20周年記念 AV業界史に残る最強タッグ作品 1×18。AVメーカーS1所属の新人ADの俺は、最高セクシー女優様たちにこっそりシコられ、ハメられ、エロいことに巻き込まれる、AV職場ラッキーSEX （ブルーレイディスク）',
      releaseDate: '2025-07-22',
    },
    {
      id: 'SONE-758',
      javdbId: 'YwrOPe',
      originalTitle:
        '最強ヒロインと最高のオナニー体験を！セトカンが全力でちんしこサポート夢の8コーナー3時間スペシャル 瀬戸環奈 （ブルーレイディスク）',
      releaseDate: '2025-07-08',
      actress: '瀨户環奈',
    },
    {
      id: 'JUR-380',
      javdbId: 'YwrkZd',
      originalTitle: '身も心も相性抜群の2人ー。’想い’と’唇’が重なる濃密接吻ソープ めぐり',
      releaseDate: '2025-07-08',
      actress: '惠理',
    },
    {
      id: 'MDON-077',
      javdbId: 'Xe4DOP',
      originalTitle: '配信限定 マドンナ専属女優の『リアル』解禁。 MADOOOON！！！！ めぐり ハメ撮り',
      releaseDate: '2025-07-01',
    },
    {
      id: 'MIDA-241',
      javdbId: 'AqK7Oe',
      originalTitle:
        '【FANZA限定】24時間奉仕でムレムレになった長～い脚で何発も何発もヌイてくれる黒ストッキング痴女メイド 宮下玲奈 生写真2枚付き',
      releaseDate: '2025-07-16',
      actress: '宮下玲奈',
    },
    {
      id: 'START-368',
      javdbId: 'V4NDxq',
      originalTitle:
        'SODSTAR×SENZ-セックスが溶け込んでいる日常- 常に性交美容室 表●道人気店 小倉由菜×唯井まひろ',
      releaseDate: '2025-08-07',
      actress: '唯井真尋,小倉由菜',
    },
    {
      id: 'DASS-695',
      javdbId: '2mqx5P',
      originalTitle:
        'この高飛車女に恨みあるやつ全員集合！超キモメンの粘着バチボコ拷姦で精神崩壊！中出しタン壺誕生SEX！ Nia',
      releaseDate: '2025-07-08',
      actress: 'NIA',
    },
    {
      id: 'SONE-786',
      javdbId: '1A437A',
      originalTitle:
        '毎朝見かける胸がデッカい女子●生を我慢できずにメチャクチャ痴●してやったら...まさかの性に目覚めてオッパイ揉まれたい体に。 田野憂 （ブルーレイディスク）',
      releaseDate: '2025-07-08',
      actress: '田野憂',
    },
    {
      id: 'MIDA-235',
      javdbId: '96qm2X',
      originalTitle:
        '親友のお姉ちゃんに早漏絶倫がバレた僕は 全身舐めじゃくり＆逆追撃中出しでたった3日のお泊り中に30射精分弄ばれ続けた… うんぱい （ブルーレイディスク）',
      releaseDate: '2025-07-15',
      actress: 'UNPAI',
    },
    {
      id: 'START-355',
      javdbId: 'P92kJN',
      originalTitle:
        '温泉旅行中の単独客やカップル 夫婦の男性を誘惑 館内で寝取りセックスをくり返す淫乱美人な若女将 本庄鈴',
      releaseDate: '2025-07-24',
      actress: '本庄铃',
    },
    {
      id: 'SONE-807',
      javdbId: '96qmZ6',
      originalTitle:
        '【FANZA限定】「先生のおっぱいがクソエロいせいだ！」おっとり天然な女教師は不用心な濡れ透け密着Jカップで生徒を欲情させ散らかす。 篠真有 生写真3枚付き',
      releaseDate: '2025-07-09',
      actress: '篠真有',
    },
    {
      id: 'MIDA-234',
      javdbId: 'WwVNmq',
      originalTitle:
        'パンスト会社に勤める彼女のお姉さんの猥褻ストッキング美脚のムレムレ中出し誘惑に逆らえない… 新ありな （ブルーレイディスク）',
      releaseDate: '2025-07-15',
      actress: '新有菜',
    },
    {
      id: 'DASS-662',
      javdbId: 'OXW0YO',
      originalTitle: '毒手チ〇ポNTR 橘メアリー',
      releaseDate: '2025-07-22',
      actress: '橘瑪莉',
    },
    {
      id: 'OFES-015',
      javdbId: '0edKXJ',
      originalTitle:
        '再就職先は限界集落の訪問性介助サービス 射精改善治療を行っていたはずが…発情した異常性欲おじさんにどハマりした無断中出しも受け入れる20代女性の映像記録 設楽ゆうひ',
      releaseDate: '2025-07-29',
      actress: '設樂系日',
    },
    {
      id: 'DEAB-001',
      javdbId: 'P92AYJ',
      originalTitle: 'むっちりスケベな爆乳姉妹に犯●れ一つ屋根の下で変態逆3P性活',
      releaseDate: '2025-07-15',
      actress: '葉月美音,塚田詩織',
    },
    {
      id: 'EYAN-203',
      javdbId: 'kKy8AN',
      originalTitle:
        '夫に見られながら見知らぬ男根でロケット乳を揺らせてアエぐ美人妻は返済代わりのお手軽肉便器 宮本留衣',
      releaseDate: '2025-07-15',
      actress: '宮本留衣',
    },
    {
      id: 'MIDA-198',
      javdbId: 'ZNdw9V',
      originalTitle:
        '※台本一切無し！一ヶ月禁欲した七沢みあを焦らして寸止めを繰り返し極限まで感度を高めた後のケダモノ大乱交 （ブルーレイディスク）',
      releaseDate: '2025-07-15',
      actress: '七泽美亚',
    },
    {
      id: 'SONE-790',
      javdbId: 'DRVG82',
      originalTitle:
        'S1デビュー1周年記念 グラビア芸能人金松季歩 一般ユーザー遂に解禁！総勢20名で痴女ってハメて混浴温泉でぶっかけまくった1泊2日のファン感謝祭 （ブルーレイディスク）',
      releaseDate: '2025-07-08',
      actress: '金松季步',
    },
    {
      id: 'SONE-793',
      javdbId: 'kKy87e',
      originalTitle:
        '【FANZA限定】上半身は仕事着、下半身は丸出しでリモート会議するズボラお姉ちゃんの半裸在宅勤務がたまらない！！ 明日葉みつは 生写真3枚付き',
      releaseDate: '2025-07-09',
      actress: '明日葉三葉',
    },
    {
      id: 'PRED-772',
      javdbId: '82q4nx',
      originalTitle:
        '女上司のミスを全て肩代わりした部下の僕達とのいつでも、どこでも、肉便器契約。美尻ノーパンパンスト出勤アナル見せ中出し輪● 山岸あや花 （ブルーレイディスク）',
      releaseDate: '2025-06-17',
      actress: '山岸绮花',
    },
    {
      id: 'OFES-025',
      javdbId: 'kKyvWN',
      originalTitle:
        'BEAUTY VENUS THE HARLEM-episode2- 最高峰巨乳美女たちが国賓並みにおもてなしご奉仕してくれる超高級ハーレム風俗ハシゴツアー （ブルーレイディスク）',
      releaseDate: '2025-07-29',
      actress: '樱空桃,长濱蜜璃,役野滿里奈',
    },
    {
      id: 'SONE-753',
      javdbId: 'AqKB8n',
      originalTitle:
        '【FANZA限定】大人しい新入女子社員を一泊出張に同行させ相部屋に連れ込むと…まさかのド淫乱メスに変身して精液透明になるまで絞りヌカれた… 乃坂ひより 生写真3枚付き',
      releaseDate: '2025-07-09',
      actress: '乃坂日和',
    },
    {
      id: 'OFES-005',
      javdbId: 'Bzg3w9',
      originalTitle: '巨乳ママ借金取り立て自宅訪問レ×プ ～夫、息子、ママ友のすぐ傍で…～ 木村玲衣',
      releaseDate: '2025-07-29',
      actress: '木村玲衣',
    },
    {
      id: 'SONE-814',
      javdbId: 've01rb',
      originalTitle:
        '素人ファン乳ぶっかけ感謝祭 夢乃あいかの神おっぱいで射精しまくれ！発射数が多ければご褒美セックス （BOD）',
      releaseDate: '2025-07-22',
      actress: '梦乃爱華',
    },
    {
      id: 'PRED-785',
      javdbId: 'kKy2nV',
      originalTitle:
        '常にマウント目線の女上司つむぎさんのノーパンパンスト足コキで、毎日ムレ足射精管理されているボク。 明里つむぎ',
      releaseDate: '2025-07-15',
      actress: '明里紬',
    },
    {
      id: 'IPZZ-599',
      javdbId: 'gyqndG',
      originalTitle:
        '美麗でクールな痴女お姉さんが命令口調JOI（オナニー指示）してくれる 顔面特化オナニーサポート 明里つむぎ',
      releaseDate: '2025-07-08',
    },
    {
      id: 'MIMK-217',
      javdbId: '7yq7OP',
      originalTitle:
        '実写版 夫の連れ子に、困ってます。 キモエロい性欲モンスターの絶倫チ○ポに何度も犯●れる日々… 佐山愛 （BOD）',
      releaseDate: '2025-07-15',
      actress: '佐山爱',
    },
    {
      id: 'SONE-852',
      javdbId: 'xAg1rV',
      originalTitle:
        '結婚式間近の花嫁、新郎との愛あるSEXよりも男性ウェディングプランナーから無理やり犯●れるほうがま●こビチャ濡れでイキまくる。 七ツ森りり （BOD）',
      releaseDate: '2025-07-22',
      actress: '七森莉莉',
    },
    {
      id: 'OFES-001',
      javdbId: 'ZNd6m8',
      originalTitle:
        '地味で真面目で大人しいと思っていた部下が仕事も家庭も全部ダメな僕をからかうように焦らして精子を搾り取ってくるんです。 安位薫',
      releaseDate: '2025-07-29',
      actress: '安位薰',
    },
    {
      id: 'MIDA-240',
      javdbId: '82qAg3',
      originalTitle:
        '10秒だけ挿れさせてあげて…！【童貞同盟】を組んでいた親友に彼女を一瞬だけ貸してあげたら…まさかまさかの相性抜群すぎたのか最近彼女の様子がおかしい！！ 水卜さくら （ブルーレイディスク）',
      releaseDate: '2025-07-15',
      actress: '水卜樱',
    },
    {
      id: 'ABF-243',
      javdbId: 'bKwbNg',
      originalTitle: 'FETISH TOKYO 鈴村あいり 【限定特典映像25分付き】',
      releaseDate: '2025-07-03',
      actress: '铃村爱里',
    },
  ],
  '2025-08': [
    {
      id: 'SONE-811',
      javdbId: 'ZNdEbV',
      originalTitle:
        '1000年に一人の女子〇生から求愛を受けた担任教師は全てを捨て教え子との禁断性交に溺れた。 瀬戸環奈 （ブルーレイディスク）',
      releaseDate: '2025-08-12',
      actress: '瀨户環奈',
    },
    {
      id: 'MIRD-259',
      javdbId: '82qKZ5',
      originalTitle:
        'MOODYZ創立25周年記念 King’s＆Queen’s メガトンKカップとテラトンQカップ共演SPECIAL Himari みなみ羽琉 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-08-06',
      actress: 'みなと羽琉,Himari',
    },
    {
      id: 'START-398',
      javdbId: 'XeYGWP',
      originalTitle:
        'むしゃぶりつきたい身体のイイ女がほろよいノーガードで性欲むき出しに…よく呑みよく笑う完全OFFな神木麗が本能のままにイキまくる生々しいプライベート交尾',
      releaseDate: '2025-09-10',
      actress: '神木麗',
    },
    {
      id: 'PRED-792',
      javdbId: 'Ebq2md',
      originalTitle:
        '1日1組限定。子種を欲しがる女将の無制限中出し秘境ソープで20発搾って頂いたボク。 楪カレン （ブルーレイディスク）',
      releaseDate: '2025-08-19',
      actress: '楪カレン',
    },
    {
      id: 'SONE-855',
      javdbId: '824qk5',
      originalTitle:
        'どんな命令も完全合意するキレかわドMメイドを俺が飽きるまでむちゃくちゃにヤリ散らしてヤッた。 浅野こころ （ブルーレイディスク）',
      releaseDate: '2025-08-26',
      actress: '浅野こころ',
    },
    {
      id: 'FTAV-013',
      javdbId: 'qAdgwP',
      originalTitle:
        '台湾発 新世代の美少女 齋齋いつき 日本AV界に参戦！SOD史上初 台湾人専属女優‘憧れ‘をパワーに。トップ級インフルエンサーから日本のAV女優へ…',
      releaseDate: '2025-09-10',
    },
    {
      id: 'ABF-253',
      javdbId: 'QNWBOK',
      originalTitle: '俺の従順ペット候補生 08 鈴村あいり 【限定特典映像20分付き】',
      releaseDate: '2025-07-31',
      actress: '铃村あいり',
    },
    {
      id: 'SONE-870',
      javdbId: 'kKydWm',
      originalTitle:
        '元子役グラドル芸能人 専属NO.1 STYLE 紫堂るいエスワンデビュー （ブルーレイディスク）',
      releaseDate: '2025-08-12',
      actress: '紫堂るい',
    },
    {
      id: 'MIDA-258',
      javdbId: '4DdQxv',
      originalTitle:
        '彼女の姉の濡れ‘神乳’誘惑がエロすぎて…。彼女が不在の24時間、一生分の精子出すほどハメまくった…！ 百田光稀 生写真2枚付き',
      releaseDate: '2025-08-06',
      actress: '百田光稀',
    },
    {
      id: 'JUR-444',
      javdbId: 'wKkr9b',
      originalTitle:
        '理不尽な夫の上司に尽くす人妻バニーガール ～恥じらいの猥褻コスプレ中出し接待～ 神宮寺ナオ',
      releaseDate: '2025-08-12',
      actress: '神宮寺ナオ',
    },
    {
      id: 'PKYS-016',
      javdbId: 'Rk2w6n',
      originalTitle:
        '完全プライベート映像 最締名器の乳首舐め名手 Niaちゃんと初めての二人きりお泊まり （BOD）',
      releaseDate: '2025-08-05',
      actress: '伊東める',
    },
    {
      id: 'MKMP-659',
      javdbId: 've0g8O',
      originalTitle: '専属 朝から夜まで薬漬けで汗と潮を撒き散らす24時間媚薬耐久コース 乙アリス',
      releaseDate: '2025-08-12',
      actress: '乙アリス',
    },
    {
      id: 'HMN-717',
      javdbId: '5n4BKz',
      originalTitle:
        '性交に飢えたM男クンのお宅に1ヶ月禁欲させた七瀬アリスを派遣してSEX我慢指令！！互いに極限まで焦らし合い、我慢の限界に達して勝手に暴走生中出しスペシャル！！',
      releaseDate: '2025-08-26',
      actress: '七瀬アリス',
    },
    {
      id: 'START-353',
      javdbId: 'P92Dw9',
      originalTitle:
        '僕の住むアパートの隣室の美人妻は欲求不満だった。夫婦喧嘩で空いた直径10cmの壁穴越しに立ちバックで膣奥を突きまくった密かな不倫関係5日間。 青空ひかり',
      releaseDate: '2025-08-07',
      actress: '青空ひかり',
    },
    {
      id: 'MIMK-245',
      javdbId: '4D85gJ',
      originalTitle:
        'SNSで大バズり！300万インプレッション超！ 短小包茎はお断りな世界 実写版 粗チンに人権ナシの世界線！【種付け師】のデカチン調教にメロメロ即堕ちNTR 胡桃さくら （BOD）',
      releaseDate: '2025-08-19',
      actress: '胡桃さくら',
    },
    {
      id: 'JUR-390',
      javdbId: 'V4NKRD',
      originalTitle:
        'ボーナス完全消失。妻が帰省中の1週間、極上デリヘル嬢・ゆうかさんを「完全貸切」して中出し‘無制限’同棲 ≪神美貌！！≫新妻ゆうかと夢のような同棲生活。',
      releaseDate: '2025-08-12',
      actress: '新妻ゆうか',
    },
    {
      id: 'SONE-851',
      javdbId: 'YwZGgD',
      originalTitle:
        '隠れ爆乳OLが今月のノルマ未達成のため本日より1週間全裸出社 私のカラダで皆様を全力ご奉仕・フォローさせていただきます。 鷲尾めい （BOD）',
      releaseDate: '2025-08-26',
      actress: '鷲尾めい',
    },
    {
      id: 'START-375',
      javdbId: 'nKqMbw',
      originalTitle:
        '「ゴムをつけてといいましたよね…」販売数約10万ダウンロード超えの超人気作完全実写化！！！ 恋渕ももな',
      releaseDate: '2025-08-21',
      actress: '恋渕ももな',
    },
    {
      id: 'ABF-255',
      javdbId: 'yx4P5W',
      originalTitle:
        '耳元でそっとささやく家庭崩壊確定な不倫のお誘い。 涼森れむ【限定特典映像35分付き】',
      releaseDate: '2025-08-07',
      actress: '凉森れむ',
    },
    {
      id: 'SONE-853',
      javdbId: '964qA5',
      originalTitle:
        '8月26日 花火大会の夜 ずっと両片想いだった僕らは結ばれ 十数年分の’好き’をぶつけ合うように身体を貪り合った 河北彩伽 （ブルーレイディスク）',
      releaseDate: '2025-08-26',
      actress: '河北彩花',
    },
  ],
  '2025-09': [
    {
      id: 'MIMK-233',
      javdbId: 'QNJRq4',
      originalTitle:
        '1000円カットのおネエさんにスいてもらう本。4 実写版 原作 越山弱衰 シリーズ累計25万部突破巨乳度300％コミック待望の実写化第4弾！ （BOD）',
      releaseDate: '2025-09-02',
    },
    {
      id: 'SONE-846',
      javdbId: 'Mb4ZdR',
      originalTitle:
        '絶頂の向こう側へ 最強ヒロインに巨根ピストンを 瀬戸環奈 （ブルーレイディスク）',
      releaseDate: '2025-09-09',
    },
    {
      id: 'MKMP-668',
      javdbId: 'mOyR7r',
      originalTitle:
        '真面目で物静かな北野さんは、チ○ポを見ると淫らな言葉をペラペラとしゃべりながら、卑猥なおしゃぶりを誰にでもする。 北野未奈',
      releaseDate: '2025-09-09',
    },
    {
      id: 'SDJS-334',
      javdbId: 'V428eq',
      originalTitle:
        '会社で服を着ていないのは一人だけ！ハダカの尊さを身をもって学ぶ SOD女子社員 全裸業務 タオル一枚男湯入ってみませんか？ミッションテストプレイ編 社内露出＆普段一緒に働く同僚（たまに男優さん）からザーメン採取5名報告',
      releaseDate: '2025-10-22',
    },
    {
      id: 'HAWA-358',
      javdbId: 'mOJRzd',
      originalTitle:
        '彼女のいない貧乏な自分にあるのは有り余る性欲と安アパートだけ 風俗に行く金も無いし若い子はノリが苦手…だからおとなしそうな人妻を捕まえてSEXしたら自分以上に性欲が凄かった！！ （仮名）スナオさん',
      releaseDate: '2025-06-26',
    },
    {
      id: 'FJIN-098',
      javdbId: '8244rV',
      originalTitle:
        'キメセクの巣「日本チ◎ポ大好き」北欧美女が俺んちで脳バグ汗まみれ絶頂！ メロディー・雛・マークス',
      releaseDate: '2025-08-01',
    },
    {
      id: 'MIDA-317',
      javdbId: 'nKq7ka',
      originalTitle:
        '「手でさするのは浮気にならないよ？」 三連泊した宿場で彼女の妹の小悪魔手コキに擦り堕ち20発射精して寝取られたボク 八木奈々 （BOD）',
      releaseDate: '2025-09-02',
    },
    {
      id: 'SONE-871',
      javdbId: 'pkO5Xw',
      originalTitle:
        'エスワン第二章 元子役グラドル紫堂るいが普通のSEXでは満足できなくなった理由… （ブルーレイディスク）',
      releaseDate: '2025-09-09',
    },
    {
      id: 'MIDA-277',
      javdbId: 'XeYN5a',
      originalTitle:
        'AV引退 平成生まれのHカップ佐山愛 さよならおっぱい平成、令和18年間ありがとうスペシャル！！ （BOD）',
      releaseDate: '2025-09-16',
    },
    {
      id: 'IPZZ-654',
      javdbId: 'Kk6NJA',
      originalTitle:
        'ランジェリーメーカー勤務の私は巨乳がバレて会社のために一肌も二肌も脱いでいます 実演下着モデル！そのままSEX接客！！全コーナーランジェリー性交 長浜みつり',
      releaseDate: '2025-09-09',
    },
    {
      id: 'DASS-709',
      javdbId: '964wNX',
      originalTitle:
        '華奢スレンダー巨乳な彼女が俺の親父に寝取られ種付けプレスされていた。 七瀬アリス',
      releaseDate: '2025-09-09',
    },
    {
      id: 'SONE-889',
      javdbId: 'RkJRV7',
      originalTitle:
        '【FANZA限定】誘惑ボディタッチ！強引キスキスキス！馬乗りセックス！夏合宿の片思い逆NTR大作戦 川越にこ 生写真3枚付き',
      releaseDate: '2025-09-10',
    },
    {
      id: 'MNGS-013',
      javdbId: 'mOyBRd',
      originalTitle:
        'ほろ酔い和花パイ街ブラ竿ハント ドMオタク男子を痴女ロックオン！気が済むまでヌキちぎるまで帰りまセン。飲み歩き爆即ヌキ生ハメ密着25発 美園和花 （BOD）',
      releaseDate: '2025-09-16',
    },
    {
      id: 'START-411',
      javdbId: 'J0VbO8',
      originalTitle:
        '現役工場女子が一日寮母！SODSTAR天音かんなに工場社宅でお世話させてくださいっ！出勤前帰宅後にヌキヌキっ！ストレス発散5名10発',
      releaseDate: '2025-10-08',
    },
    {
      id: 'DASS-729',
      javdbId: '0e6w07',
      originalTitle:
        '脳が焼けるほど妻に焦らされ寸止めされた僕は、しつこい乳首責めと、ささやき淫語で追い詰められ、気が狂うほど蜜月絶頂。 東條なつ',
      releaseDate: '2025-09-09',
    },
    {
      id: 'DLDSS-289',
      javdbId: '82Ve1d',
      originalTitle:
        '欲求不満のパート妻達の性欲は底なしで奪い合うように短時間で3回づつ計6回射精さられた…。 美乃すずめ 小野夕子',
      releaseDate: '2024-04-25',
    },
    {
      id: 'JUR-479',
      javdbId: 'wK5XGb',
      originalTitle:
        '妻の妊娠中、オナニーすらも禁じられた僕は上京してきた義母・真由香さんに何度も種付けSEXをしてしまった…。 瑶真由香',
      releaseDate: '2025-09-23',
    },
    {
      id: 'SONE-905',
      javdbId: 'wK5J7D',
      originalTitle:
        '「えっここでヤルの？」密かな変態性がシコい！浅野こころのプライベートに完全密着！隙あらばいきなり即ズボッ大絶頂！前代未聞ドッキリAVドキュメント （ブルーレイディスク）',
      releaseDate: '2025-09-23',
    },
    {
      id: 'PRED-799',
      javdbId: 'e82Mdp',
      originalTitle:
        '「一緒に変態になろ…」～会社の同僚・あや花さんと裏垢で繋がって秘密の性癖丸出し中出しセフレになった日々…～ 山岸あや花 （ブルーレイディスク）',
      releaseDate: '2025-09-16',
    },
    {
      id: 'MIDA-324',
      javdbId: 'a8qQ93',
      originalTitle:
        '退屈すぎるド田舎の夏にムラムラを抑えきれない汗だく密着囁き痴女メイド 七沢みあ （ブルーレイディスク）',
      releaseDate: '2025-09-16',
    },
    {
      id: 'WSA-002',
      javdbId: 'NQqJW4',
      originalTitle: '新人 世界的美少女 AV Debut Aiyo Zao （BOD）',
      releaseDate: '2025-10-04',
    },
    {
      id: 'MIAB-539',
      javdbId: 'mOyPOR',
      originalTitle:
        '僕だけに見せてくる白衣の中身 絶対声が出せない状況でエッチしよッと過激水着で中出し誘惑してくる巨乳保健先生 宍戸里帆 （BOD）',
      releaseDate: '2025-09-02',
    },
    {
      id: 'SONE-891',
      javdbId: 'YwZNkp',
      originalTitle:
        '見た目は地味だが脱いでコレだったらどうする…？部活しかしてこなかった性欲強い隠れ巨乳女子大生 田野憂 （ブルーレイディスク）',
      releaseDate: '2025-09-09',
    },
    {
      id: 'SXLF-002',
      javdbId: 'ZNp6pP',
      originalTitle:
        'エロ系Yout●berの生ハメSEX配信中！かなのとSEXしたい人、今からおいで！本田かなの',
      releaseDate: '2025-08-29',
    },
    {
      id: 'MOON-047',
      javdbId: 'kK3gv4',
      originalTitle: '不倫した夫と一緒に鑑賞する「フェラ顔ごっくんビデオレター」 森沢かな',
      releaseDate: '2025-09-25',
    },
    {
      id: 'SONE-860',
      javdbId: 'DRWq83',
      originalTitle:
        '温泉旅行で友達と自画撮りしてたらまさかの強・姦・魔・襲来！そのまま自撮りが生々しいハメ撮りレ●プに！ 白上咲花 （BOD）',
      releaseDate: '2025-09-23',
    },
    {
      id: 'IPZZ-694',
      javdbId: 'xAb03E',
      originalTitle:
        '天真爛漫な制服美少女は趣味:フェラチオに夢中すぎて今日も校内でおしゃぶり三昧 山田鈴奈',
      releaseDate: '2025-09-09',
    },
    {
      id: 'PRED-804',
      javdbId: 'ZNpXDV',
      originalTitle:
        '窓際社員で出世も見込めないのに性欲だけ異常に強い俺が職場の地味メガネ経理をお持ち帰りしたら…目つきが豹変！ドスケベ本性晒しエグい性欲で強●的に精子搾られ続けた…。 白峰ミウ',
      releaseDate: '2025-08-19',
    },
  ],
  '2025-10': [
    {
      id: 'SONE-912',
      javdbId: '5n40z8',
      originalTitle: '最強ヒロインのパイズリ挟射 瀬戸環奈 （ブルーレイディスク）',
      releaseDate: '2025-10-14',
      actress: '瀬戸環奈',
    },
    {
      id: 'MIMK-249',
      javdbId: 'NQqJMZ',
      originalTitle:
        'パワハラ女上司と社畜くん実写版 残業中にオフィスでオナニーしていた上司の弱みに付け込み立場逆転中出しセックスで仕返し！ 吉根ゆりあ （BOD）',
      releaseDate: '2025-10-07',
      actress: '吉根ゆりあ',
    },
    {
      id: 'PRED-809',
      javdbId: 'OX8WMD',
      originalTitle: '巨漢反社クレーマーに中出しされ続けて…翼をもがれたエリート細身巨乳CA 楪カレン',
      releaseDate: '2025-10-21',
      actress: '楪カレン',
    },
    {
      id: 'HMN-755',
      javdbId: 'BzWvDr',
      originalTitle:
        '7人の少女を集団監禁孕ませ密室ぎゅうぎゅう中出し 7人の女の子を六畳一間に押し込み洗脳・支配するSEXカルト教団の生ハメの儀に密着！！ヤバイ施設の儀式に潜入！',
      releaseDate: '2025-10-28',
    },
    {
      id: 'IPZZ-671',
      javdbId: '2mGapZ',
      originalTitle:
        '【FANZA限定】携帯ナースコールで24時間口内射精OK！即尺超好きおしゃぶり痴女ナース 西宮ゆめ 生写真3枚付き',
      releaseDate: '2025-10-15',
      actress: '西宮ゆめ',
    },
    {
      id: 'SONE-978',
      javdbId: 'kKQz2m',
      originalTitle:
        '街行く男の視線を独占する 10度見級Kカップのエッロい女を連れて デカ乳露出街ぶらりした後ホテルに入って即ハメSEXしたくない？ みなみ羽琉 生写真3枚付き',
      releaseDate: '2025-10-29',
      actress: 'みなみ羽琉',
    },
    {
      id: 'JUR-557',
      javdbId: 'QNzgMG',
      originalTitle:
        '職場で軽蔑されているセクハラ上司に狙われて―。 いやらし柔乳への粘着ベロ舐め性交 城ヶ崎百瀬',
      releaseDate: '2025-10-28',
      actress: '城ヶ崎百瀬',
    },
    {
      id: 'START-406',
      javdbId: 'J01W6B',
      originalTitle:
        '遠征中NTR サッカー選手の美人嫁がチー牛義兄にこっそり種付けされていたワンシーズン MINAMO',
      releaseDate: '2025-11-05',
      actress: 'MINAMO',
    },
    {
      id: 'SONE-977',
      javdbId: 'QNzVgq',
      originalTitle:
        '就職した水着メーカーは女性社員が水着姿の世界。勃起しても巨乳上司2人がダブルHカップで常に抜いてくれるので僕の金玉は毎日カラッポ。 南沢海香 小日向みゆう （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-10-15',
      actress: '南沢海香,小日向みゆう',
    },
    {
      id: 'SONE-964',
      javdbId: 'Rk4dbm',
      originalTitle:
        '下着メーカーに今も残る下劣ハラスメント… 仕事の出来ない女子社員（25）は、ランジェリー着用しか許されない。 篠真有 （BOD）',
      releaseDate: '2025-10-14',
      actress: '篠真有',
    },
    {
      id: 'IPZZ-734',
      javdbId: 'V42w1D',
      originalTitle:
        '【FANZA限定】出張先で高嶺の花の女社長と相部屋に… 圧倒的美巨乳にフル勃起した童貞の僕を受け入れてくれた優しさに甘えて朝まで暴走むしゃぶりつき性交 ひなの花音 生写真3枚付き',
      releaseDate: '2025-10-15',
      actress: 'ひなの花音',
    },
    {
      id: 'SONE-919',
      javdbId: 'r3DQ1Z',
      originalTitle:
        'S1専属12年AV女優2人が飲んで語って生々しいプライベート感で完熟おま●こに交互に挿れまくる！研ぎ澄まされた熟練テク！スーパーコンビネーション逆3Pハメ撮り 夢乃あいか 奥田咲 （ブルーレイディスク）',
      releaseDate: '2025-10-14',
      actress: '梦乃あいか,奥田咲',
    },
    {
      id: 'SIVR-440',
      javdbId: 'r3eyrD',
      originalTitle:
        '【VR】憧れのS1専属Wレジェンド 神おっぱい 超絶テク 究極シンクロ 超密着サンドイッチ二輪車ソープランド 奥田咲 夢乃あいか',
      releaseDate: '2025-10-18',
      actress: '梦乃あいか,奥田咲',
    },
    {
      id: 'MIDA-359',
      javdbId: 'e82RwN',
      originalTitle:
        '五条恋 MOODYZ情熱移籍 禁欲30日後に解禁中出し （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-10-08',
      actress: '五条恋',
    },
    {
      id: 'MIDA-344',
      javdbId: 'EbqweQ',
      originalTitle:
        '【FANZA限定】担任教師の僕は生徒の誘惑に負けて放課後ラブホで何度も、何度も、セックスしてしまった… 輝星きら （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-10-08',
      actress: '輝星きら',
    },
    {
      id: 'SONE-920',
      javdbId: 'pk43mE',
      originalTitle: 'めんこい村娘は男衆みなの慰み者 miru （BOD）',
      releaseDate: '2025-10-14',
      actress: 'miru',
    },
    {
      id: 'MIMK-253',
      javdbId: '96YqG6',
      originalTitle:
        '【FANZA限定】入り浸りギャルにマ○コ使わせて貰う話2実写版 令和イチ売れた最強エロ同人待望の続編 斎藤あみり 生写真2枚付き',
      releaseDate: '2025-10-22',
      actress: '斎藤あみり',
    },
    {
      id: 'CJOD-489',
      javdbId: 'gyeb9Z',
      originalTitle:
        'ドスケベ爆乳ボディ人妻のワ・タ・シがラブホ代払うからぁ ニュルゥッニュルゥッ体密着させて中出しOK不倫ママ活してみなぁ～いッ 紗愛さん',
      releaseDate: '2025-10-28',
      actress: '紗爱さん',
    },
    {
      id: 'SORA-613',
      javdbId: 'V4PqmA',
      originalTitle:
        'じんかくそうさ洗脳催● ハゲタカファンドの女ボスさま。月月火水木金金の精神で洗脳・羞恥・催●・屈辱でお・も・て・な・し編 メロディー・雛・マークス',
      releaseDate: '2025-10-07',
      actress: 'Melody Marks',
    },
    {
      id: 'SONE-937',
      javdbId: '82eVy5',
      originalTitle: '元子役グラドル芸能人 人生初禁欲でじっとりねっとり大絶頂 紫堂るい',
      releaseDate: '2025-10-14',
      actress: '紫堂るい',
    },
    {
      id: 'SONE-969',
      javdbId: 'Aq9z0e',
      originalTitle: '新人NO.1 STYLE リアルはたちのJ 渡部ほの AVデビュー',
      releaseDate: '2025-10-14',
      actress: '渡部ほ',
    },
    {
      id: 'MDON-083',
      javdbId: '7yGN4B',
      originalTitle:
        '配信限定 マドンナ専属女優の『リアル』解禁。SEASON2 MADOOOON！！！！ 篠原いよ ハメ撮り',
      releaseDate: '2025-10-06',
      actress: '篠原いよ',
    },
    {
      id: 'MDON-084',
      javdbId: 'e8Ey2p',
      originalTitle:
        '配信限定 マドンナ専属女優の『リアル』解禁。SEASON2 MADOOOON！！！！ めぐり ハメ撮り',
      releaseDate: '2025-10-06',
      actress: 'めぐり',
    },
    {
      id: 'SONE-970',
      javdbId: 'V4215W',
      originalTitle:
        '誰も助けに来ない山奥深くのキャンプ場でひと際目立つKカップソロキャンパーが襲われる！胸元ゆるゆるキャンプ 鷲尾めい （ブルーレイディスク）',
      releaseDate: '2025-10-28',
      actress: '鷲尾めい',
    },
    {
      id: 'MIDA-346',
      javdbId: '6d4Zbn',
      originalTitle:
        '人生初！ナマ挿入！そして中出し解禁！！ 百田光稀 （ブルーレイディスク） 生写真2枚付き',
      releaseDate: '2025-10-08',
      actress: '百田光稀',
    },
    {
      id: 'MIRD-264',
      javdbId: '7y4pXb',
      originalTitle:
        '【FANZA限定】アイドルハーレム超SUPER 囲まれ、挟まれ、同時に責められお宅スケベ訪問デリバリーSEX 【MOODYZ創立25周年記念】 葵いぶき 石原希望 未歩なな 古川ほのか （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-10-08',
      actress: '葵いぶき,石原希望,未歩なな,古川ほのか',
    },
    {
      id: 'MIAB-385',
      javdbId: 'qAQ2aN',
      originalTitle:
        'メモリアルヌードモデルの代役になったボクのビンビンに膨らんでいるチ●ポに目をつけて愛液ダラダラ滴っている巨乳お姉さんが5分休憩の度に何度も何度もヌキ鎮めてきます… （BOD）',
      releaseDate: '2025-02-18',
      actress: '辻井ほのか',
    },
    {
      id: 'MIDA-366',
      javdbId: 'Ywxrgp',
      originalTitle:
        'M性感で会った女王様はまさかの新卒部下！会社でも続く痴女プレイで立場逆転射精させられまくっているオレ… 七沢みあ （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-10-22',
      actress: '七沢みあ',
    },
    {
      id: 'JUR-494',
      javdbId: 'pk4Xgq',
      originalTitle:
        '【FANZA限定】輪●されたくなかったら旦那のチ○ポ当てて見ろ。 七海ティナ 生写真とパンツ付き',
      releaseDate: '2025-10-29',
      actress: '七海ティナ',
    },
    {
      id: 'MIDA-368',
      javdbId: '1Aa40d',
      originalTitle:
        '入り浸り幼馴染ギャルの無防備パンチラにド欲情。コンドーム箱を使い切るまで発情ピストンした童貞卒業ヲタク僕 宮下玲奈 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-10-22',
      actress: '宮下玲奈',
    },
    {
      id: 'START-424',
      javdbId: 'KkgGKb',
      originalTitle:
        '市役所の窓口勤務の青空さんは悪質なカスハラ親父の肉便器です。平凡で真面目な同僚が性処理ペットに成り下がる姿に思わずクズ勃起 青空ひかり',
      releaseDate: '2025-11-05',
      actress: '青空ひかり',
    },
    {
      id: 'ABF-280',
      javdbId: 'verMmY',
      originalTitle: '八掛うみが素人♂を逆ナン！ 八掛うみ【限定特典映像30分付き】',
      releaseDate: '2025-10-23',
      actress: '八掛うみ',
    },
  ],
  '2025-11': [
    {
      id: 'IPZZ-698',
      javdbId: '0eJQ6k',
      originalTitle:
        '-FINAL IMPRESSION- アイポケレジェンド桃乃木かな、引退。 （ブルーレイディスク）',
      releaseDate: '2025-11-11',
    },
    {
      id: 'IPVR-317',
      javdbId: 'J0dz0W',
      originalTitle:
        '【VR】-FINAL VR IMPRESSION- 10年分の感謝を込めてアナタは寝ているだけ完全受け身でOK 甘淫語ささやき快感射精へ誘うプレミアムな時間 引退 アイポケレジェンド桃乃木かな8K VR',
      releaseDate: '2025-11-20',
    },
    {
      id: 'SNOS-001',
      javdbId: 'DRNmxJ',
      originalTitle:
        'なめくじ社長の悪趣味で生乳モロ見えで給仕させられる 秘書課のみなみさん（29歳、8年目） 乳輪舐め、乳首舐め、甘噛みetc.…舌使いに支配された私のオフィスルーティン みなみ羽琉 生写真3枚付き',
      releaseDate: '2025-11-26',
    },
    {
      id: 'MIDA-290',
      javdbId: 'P9PAVX',
      originalTitle:
        'マンスジマニアックス 【ワレメ特化】ぷにぷに無毛おま○こタテスジ際立つ卑猥フェティッシュ映像 松本いちか （BOD）',
      releaseDate: '2025-11-04',
    },
    {
      id: 'PRED-819',
      javdbId: 'qAn196',
      originalTitle:
        'ー綺麗なお姉さんを究極に孕ますー 元・女子アナ和香なつきに「もうイッてるってばぁ」状態でエンドレス中出し！スレンダーボディぶっ壊れ追撃ピストンで半泣き上納アクメ！ （ブルーレイディスク）',
      releaseDate: '2025-11-18',
    },
    {
      id: 'IPZZ-708',
      javdbId: 'pk4AOk',
      originalTitle:
        '溢れ出る色気と艶で雄を求める美女と快楽のままに貪り合う濃厚ベロキスと官能セックス 三澄寧々 （ブルーレイディスク）',
      releaseDate: '2025-11-11',
    },
    {
      id: 'START-463',
      javdbId: '2m0gpp',
      originalTitle:
        'SODSTAR卒業記念 ぶっかけ＆ごっくんW解禁！【発射無制限】二十人の男たちと酒池肉林の精子ダクダク大乱交スペシャル 彩月七緒',
      releaseDate: '2025-12-17',
    },
    {
      id: 'MIDA-348',
      javdbId: 'nKWGqm',
      originalTitle:
        'ヤリたい盛りのいぶきパイセンに反則ハイレグ水着とセックス筋肉で誘惑され彼女がいるのに練習の一貫で痴女られヌキ堕ちた逆NTRハメトレ中出し 葵いぶき （BOD）',
      releaseDate: '2025-11-04',
    },
    {
      id: 'IPZ-899',
      javdbId: 'NGxx',
      originalTitle:
        'デビュー作でセックスの味を覚えてから、ここ最近、何かと調子に乗り気味の上園さんに上司から緊急辞令のパワハラ4本番！＋大量メガネ発射フェラ！ 上園ゆりか',
      releaseDate: '2017-03-01',
    },
    {
      id: 'MIDA-389',
      javdbId: 'J01W7q',
      originalTitle:
        '引きニート喪女な妹のオナニーを目撃してしまった僕は理性が崩壊。妹がイッてるのに気づかず爆走ピストン 八木奈々 （ブルーレイディスク）',
      releaseDate: '2025-11-04',
    },
    {
      id: 'DASS-800',
      javdbId: '3nEqGz',
      originalTitle: '-性域- 相撲部屋のしきたりを汚した女記者を媚薬力水でかわいがりNTR 橘メアリー',
      releaseDate: '2025-11-25',
    },
    {
      id: 'MIDA-383',
      javdbId: 'z4eYBE',
      originalTitle:
        '友達の妹が常にノーブラぽろり！！可愛すぎるビンビン乳首をこねくりたい 輝星きら （BOD）',
      releaseDate: '2025-11-04',
    },
    {
      id: 'START-443',
      javdbId: 'kKeY4z',
      originalTitle: '初めての全裸わ○せつスポーツテスト 神木麗',
      releaseDate: '2025-12-03',
    },
    {
      id: 'JERA-026',
      javdbId: 'GZzrzb',
      originalTitle:
        'バック大好き！！美尻セフレちゃん逢沢みゆとラブホをはしごして丸1日巣ごもり尻揉み中出しデート',
      releaseDate: '2025-11-06',
    },
    {
      id: 'AKDL-332',
      javdbId: 'kKyNkJ',
      originalTitle: '高身長の女って大嫌いだけど、死ぬほど勃起しちゃった俺 巴ひかり',
      releaseDate: '2025-06-26',
    },
    {
      id: 'MIDA-356',
      javdbId: 'OX8kVO',
      originalTitle:
        'むっちり太ももデカ尻ビッ痴女教師 ドMチ○ポを見下し甘サド美脚で挟みシゴいて中出しFUCK！ 神宮寺ナオ （BOD）',
      releaseDate: '2025-11-04',
    },
    {
      id: 'SONE-968',
      javdbId: 'qAnmJ6',
      originalTitle:
        '今日もグラドル家庭教師のおっぱいが気になって授業に集中できない 紫堂るい （ブルーレイディスク）',
      releaseDate: '2025-11-11',
    },
    {
      id: 'MIDA-400',
      javdbId: 'xAr1yV',
      originalTitle: 'MOODYZ創立25周年記念 ドリームウーマンVol.100 新ありな （ブルーレイディスク）',
      releaseDate: '2025-11-18',
    },
    {
      id: 'MIAB-565',
      javdbId: '2mGY2Z',
      originalTitle:
        '出禁にした極道の逆恨みレ×プ のぼせ上がるまで汗まみれで犯●れ続けた浴場中出し輪●12発 柏木こなつ （BOD）',
      releaseDate: '2025-11-04',
    },
    {
      id: 'SNOS-025',
      javdbId: '7yGgq1',
      originalTitle:
        '新人NO.1 STYLE 過激グラビアがバズりすぎて垢バンされた 伝説の黒髪ボブインフルエンサー Soa AVデビュー （ブルーレイディスク）',
      releaseDate: '2025-11-11',
    },
    {
      id: 'START-453',
      javdbId: 'ZNvqXJ',
      originalTitle: '小倉由菜さんを探しています。',
      releaseDate: '2025-12-03',
    },
    {
      id: 'MIAB-554',
      javdbId: 'Ebzrz2',
      originalTitle:
        '乳首ビンビン巨乳占い師の誘惑 勃起チ○ポで占うママの妖艶フェベチオ・くねらせ腰振り騎乗位＆浄化ホールドパイズリで邪念ザーメン搾られ開運導かれちゃったボク みうさん 有岡みう （BOD）',
      releaseDate: '2025-11-04',
    },
    {
      id: 'START-425',
      javdbId: '3nEwJD',
      originalTitle:
        '「MINAMOさん、俺たち夫婦でしょ！！」仕事一筋で 3 年セックスしていない捜査官MINAMOが部下男子と夫婦の演技をしていたら本当にセックスをすることに。捜査官から女になるまでの一週間捜査記録。',
      releaseDate: '2025-12-03',
    },
    {
      id: 'MIAB-586',
      javdbId: 'WwyYY7',
      originalTitle:
        '低身長な坊ちゃまのためにガニ股＆低姿勢キープで恥辱ご奉仕させられる長身Icupメイド 雨宮ひびき （BOD）',
      releaseDate: '2025-11-18',
    },
    {
      id: 'SONE-974',
      javdbId: 'e8EXO1',
      originalTitle:
        '最強ヒロインと超キス キス キス ディープな接吻セックス 瀬戸環奈 （ブルーレイディスク）',
      releaseDate: '2025-11-11',
    },
    {
      id: 'SONE-954',
      javdbId: '2mGJqB',
      originalTitle:
        'オッサンばっかりの職場の社員旅行に娘ほど歳の離れた隙だらけ新卒社員が唯一の女性で参加！ このあと風呂を覗かれ媚薬を盛られ全社員にチ●ポ挿れられちゃいます。 川越にこ （ブルーレイディスク）',
      releaseDate: '2025-11-11',
    },
    {
      id: 'START-423',
      javdbId: 'RkYGdR',
      originalTitle:
        '那須塩原温泉を訪れた小笠原菜乃ちゃん（20）タオル一枚男湯入ってみませんか？HARD',
      releaseDate: '2025-12-03',
    },
    {
      id: 'PRED-812',
      javdbId: '3nEVXe',
      originalTitle:
        '綺麗なお姉さんがチ○ポバカになるまでヌイてくれる種搾りメンズエステ 三好佑香 （ブルーレイディスク）',
      releaseDate: '2025-11-18',
    },
    {
      id: 'MVSD-662',
      javdbId: 'kKQ0Xe',
      originalTitle: 'バリキャリな未奈先輩がこんなえげつない変態乳首セックスするなんて！ 北野未奈',
      releaseDate: '2025-11-18',
    },
    {
      id: 'JUFE-590',
      javdbId: 'Aq91XO',
      originalTitle:
        '北野未奈が遂に解禁！撮影までの1か月間、肛門を自撮り開発して臨んだ最初にして最高のアナルドキュメント！',
      releaseDate: '2025-11-04',
    },
    {
      id: 'SONE-976',
      javdbId: '7yGMqR',
      originalTitle:
        '無邪気で絶対Hさせてくれそうな彼女の巨乳妹が終電逃して泊まりに来た。 田野憂 （ブルーレイディスク）',
      releaseDate: '2025-11-11',
    },
    {
      id: 'DASS-769',
      javdbId: '4DGY2b',
      originalTitle: '逆コス誘惑してくるオタクリケジョと最高に気持ちよいセックス 美谷朱音',
      releaseDate: '2025-11-11',
    },
    {
      id: 'YMDS-235',
      javdbId: 'Aq9NQy',
      originalTitle: 'いちゃラブ密着特濃せっくちゅ 憧れの小那海あやを独占した一夜。',
      releaseDate: '2025-11-04',
    },
    {
      id: 'JUR-053',
      javdbId: '4DGYda',
      originalTitle:
        '上羽絢 引退ー。 呼吸をするだけで色気が溢れ出るJcupを狂おしい程に堪能する最後の性交 南国中出しドキュメント （ブルーレイディスク）',
      releaseDate: '2025-11-11',
    },
    {
      id: 'SONE-998',
      javdbId: '7yGVJB',
      originalTitle:
        '未歩なな引退発表ラストハードSEX 玩具やったら巨チン挿れて媚薬やったら大乱交やって 継ぎ足し継ぎ足し継ぎ足しオーバーキル100イカセ 生写真3枚付き',
      releaseDate: '2025-11-26',
    },
    {
      id: 'CJOD-488',
      javdbId: 'bKXpRv',
      originalTitle:
        '大会直後の禁欲明け美筋肉お姉さん 逆ナン男子をホテルへ連れ込み汗だくハァハァぐっちょり猛烈マッスルピストンで雌獣中出しチートDAY 竹内有紀',
      releaseDate: '2025-11-25',
    },
    {
      id: 'FTAV-014',
      javdbId: '1AMWNA',
      originalTitle:
        'total12時間ずぅーーーーーーとカメラ目線生活チャレンジ！！ 移動中も、食事中も、おち○ぽハメられ中だって…齋齋いつきにはいつだってコッチを向いていて欲しい！！！！！',
      releaseDate: '2025-12-17',
    },
  ],
  '2025-12': [
    {
      id: 'SONE-991',
      javdbId: '6dRezE',
      originalTitle:
        '最強ヒロインが彼女になって毎日ヌイてくれるイチャラブ半同棲 瀬戸環奈 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-12-10',
      actress: '瀬戸環奈',
    },
    {
      id: 'MIDA-439',
      javdbId: '4DA4Ab',
      originalTitle: '伝説・直球AV女優新ありな最後の引退作！！',
      releaseDate: '2025-12-16',
      actress: '新有菜',
    },
    {
      id: 'MIDA-473',
      javdbId: 'qAxqn9',
      originalTitle: '永遠にキミだけのありな LAST・新ありなAV引退特別版220分スペシャル！！',
      releaseDate: '2025-12-16',
    },
    {
      id: 'MIDA-490',
      javdbId: 'e8qDEd',
      originalTitle: '再見 新ありな',
      releaseDate: '2025-12-16',
    },
    {
      id: 'MDVR-374',
      javdbId: 'a8epx4',
      originalTitle:
        '【VR】9年間、ありなに寄り添ってくれてありがとう これから別々の道を歩むことになったけど最後にもう一度だけ、アナタとセックスがしたい 新ありな',
      releaseDate: '2025-12-03',
    },
    {
      id: 'MKMP-690',
      javdbId: 'YwmqB8',
      originalTitle:
        '【FANZA限定】全裸通学の村 平然と学生生活を謳歌する一人の女子生徒を丸裸にするべく、記者として僕は密着した。 乙アリス 生写真付き',
      releaseDate: '2025-12-10',
      actress: '乙アリス',
    },
    {
      id: 'MIKR-055',
      javdbId: 'Kkq4p0',
      originalTitle:
        'Re:vival 復活 きれいなお姉さんは好きですか？専属 佐々木あきAV Come back！ MOODYZ創立25周年記念',
      releaseDate: '2025-12-02',
      actress: '佐々木あき',
    },
    {
      id: 'IPZZ-719',
      javdbId: 'ZNvqm8',
      originalTitle:
        'DIGITAL CHANNEL DC142 桜空もも初ぶっかけ解禁 アイポケ伝説のシリーズ8年ぶり復活！ （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-12-10',
      actress: '桜空もも',
    },
    {
      id: 'FPRE-212',
      javdbId: '2m0rqy',
      originalTitle:
        'ある日突然僕が住んでるボロ家に転がり込んできた 露出過剰なボディコン姉妹が童貞チ○ポを奪い合う爆乳密着抜きまくりセックス 生写真セット',
      releaseDate: '2025-12-17',
      actress: '桃園怜奈,宍戸里帆',
    },
    {
      id: 'MIDA-387',
      javdbId: 'e8qKNb',
      originalTitle:
        '「穿いてください、石川さん…」屋内露出ノーパン健康法で無自覚誘惑してくる衛生委員長と健全淫交に溺れ何度もハメて元気になり過ぎた 石川澪',
      releaseDate: '2025-12-02',
      actress: '石川澪',
    },
    {
      id: 'START-473',
      javdbId: 'DRKwDJ',
      originalTitle: '催罠光線で支配された人気レースクイーン 神木麗',
      releaseDate: '2026-01-07',
      actress: '神木麗',
    },
    {
      id: 'URE-129',
      javdbId: 'ZNv9RJ',
      originalTitle:
        '累計15万DL越え！！ 原作:ミツミツにく レべチなスワッピング 妊活に悩む平凡な夫婦の日常を狂わせる過激で淫らな夫婦交姦！！',
      releaseDate: '2025-12-23',
      actress: '逢见リカ,椿りか',
    },
    {
      id: 'DASS-777',
      javdbId: 'P9GMk0',
      originalTitle: '純正肛門中毒の女 全力欲張りSP 北野未奈',
      releaseDate: '2025-12-09',
      actress: '北野未奈',
    },
    {
      id: 'IPZZ-727',
      javdbId: 'GZwdb7',
      originalTitle:
        '【FANZA限定】生意気だし絶対’ナメ’られてるけどメスガキ教え子のディープスロートフェラに今日もフル勃起で屈してしまう… 佐々木さき 生写真3枚付き',
      releaseDate: '2025-12-10',
      actress: '佐々木さき',
    },
    {
      id: 'SNOS-008',
      javdbId: 'a8eBd3',
      originalTitle:
        '目を覚ますと下着姿のグラドルとホテルで二人きり…慌てる僕を横目に誘惑してくる芸能人一体酔っている間に何があった！？ 紫堂るい （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-12-10',
      actress: '紫堂るい',
    },
    {
      id: 'FPRE-210',
      javdbId: 'xA4vME',
      originalTitle:
        '【FANZA限定】今にも崩れそうなボロ屋なのに外国人旅行者の予約が1年先までいっぱい！ 一晩に10発以上射精するまで帰国できない 黒人のデカマラが大好きな女将がいる民宿 姫咲はな 生写真付き',
      releaseDate: '2025-12-03',
      actress: '姫咲はな',
    },
    {
      id: 'MIDA-446',
      javdbId: 'NQg7PZ',
      originalTitle:
        '【FANZA限定】親が不在の3日間、ボーイッシュで男友達みたいな幼馴染が僕専用のメイドになった。中出ししまくり子作り同棲生活 石原希望 生写真2枚セット',
      releaseDate: '2025-12-17',
      actress: '石原希望',
    },
    {
      id: 'MIRD-270',
      javdbId: '0ep2d3',
      originalTitle:
        'MOODYZ初専属超ハーレム MOODYZ ONLY ONE STARS みんな好きだ。 【MOODYZ創立25周年記念作品】 （ブルーレイディスク） 生写真2枚セット',
      releaseDate: '2025-12-17',
    },
    {
      id: 'SNOS-033',
      javdbId: 'P9GY70',
      originalTitle:
        '未歩なな引退作 ガチファン感謝祭「私と勝負して勝ったらヤらせてあ・げ・る」引退だから本気でファンと向き合った泥と涙と体液まみれのSEX運動会 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2025-12-24',
      actress: '未歩なな',
    },
    {
      id: 'IPZZ-740',
      javdbId: 'Ywmqv8',
      originalTitle:
        '10年ぶりに再会した幼馴染は今や国民的アイドルなのに童貞の僕を小悪魔パンチラ誘惑！？ 彼女の掌の上で転がされ続け2日間で10発も搾りとられました… 山田鈴奈 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-12-10',
      actress: '山田铃奈',
    },
    {
      id: 'START-478',
      javdbId: 'BzV3gO',
      originalTitle: '【4K60p】星乃莉子 全裸わ〇せつ十種競技',
      releaseDate: '2026-01-21',
      actress: '星乃莉子',
    },
    {
      id: 'MIDA-410',
      javdbId: 'Kkq42M',
      originalTitle:
        '【FANZA限定】メスガキ妹を3日間…俺（兄）専用メイドにして理解らせる。 松本いちか 生写真2枚付き',
      releaseDate: '2025-12-03',
      actress: '松本いちか',
    },
    {
      id: 'IPZZ-751',
      javdbId: '1AMyzJ',
      originalTitle:
        '同窓会の夜、酔った勢いで懐かしの母校へ 俺のことをずっと好きだった2人の幼馴染と 一夜限りの奪い合い背徳不倫 西宮ゆめ miru （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-12-10',
      actress: '西宮ゆめ,坂道みる',
    },
    {
      id: 'ABF-293',
      javdbId: 'J0d69x',
      originalTitle: '男だらけの引越し業者に鈴村あいり、置いてきた。【限定特典映像30分付き】',
      releaseDate: '2025-12-04',
      actress: '铃村あいり',
    },
    {
      id: 'HMN-746',
      javdbId: '3nkJwD',
      originalTitle:
        '【FANZA限定】引退 サヨナラ痴女の天才 最後の美谷朱音をその目に焼き付けろ！！ （ブルーレイディスク） 生写真2枚セット',
      releaseDate: '2025-12-24',
      actress: '美谷朱音',
    },
    {
      id: 'DASS-770',
      javdbId: '7y2K7d',
      originalTitle: 'これは引退じゃない。美谷朱音の『卒業』',
      releaseDate: '2025-12-09',
    },
    {
      id: 'MIUM-423',
      javdbId: 'QnBk8',
      originalTitle:
        'イキ方がエロ(すご)過ぎる美人ダンサー！！！韓国にハマり過ぎて将来の夢が大真面目に〝韓流アイドル〟というダンス歴18年の経歴が謎過ぎる美女！！！普段の顔を全く見せないミステリアスな彼女の、18年間ダンスで鍛え抜いたエロ過ぎるグラインド騎乗位＆度肝を抜く程のイキ潮大洪水はガチで絶対必見の撮れ高だった！！！：夜の巷を徘徊する〝激レア素人〟！！ 17',
      releaseDate: '2019-04-04',
    },
  ],
  '2026-01': [
    {
      id: 'SNOS-037',
      javdbId: 'wKV24B',
      originalTitle:
        'グラドルと同棲生活しちゃう？ 紫堂るいの完全主観オナニーサポート （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '紫堂るい',
    },
    {
      id: 'IPZZ-743',
      javdbId: '2m06XP',
      originalTitle:
        '【FANZA限定】痴●常習犯はこう言った。 女子●生は若くてロクなSEX経験がないから媚薬と痴●でいとも簡単に快楽堕ちさせることができる 佐々木さき 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '佐々木さき',
    },
    {
      id: 'MIDA-458',
      javdbId: '829ybO',
      originalTitle:
        '卒業旅行NTR 大学生最後のバカンスに酔いしれナンパ現地調達のチャラ男達に朝までハメられまくったカノジョ 輝星きら （BOD）',
      releaseDate: '2026-01-06',
      actress: '輝星きら',
    },
    {
      id: 'PRED-832',
      javdbId: 'Eb43yJ',
      originalTitle:
        '【FANZA限定】淫語ハァハァ囁きながら1発、2発、3発とヌイてくれる回春メンエス 中出しOK、追撃23発、悶絶男潮、絶頂ヘロヘロSpecial オイル増し増しですぞいッ！ 山岸あや花 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-21',
      actress: '山岸あや花',
    },
    {
      id: 'ABF-306',
      javdbId: 'kKeEze',
      originalTitle: 'ヤリ過ぎ中出し温泉旅館 涼森れむ【限定特典映像20分付き】',
      releaseDate: '2026-01-08',
      actress: '凉森れむ',
    },
    {
      id: 'MIAB-588',
      javdbId: 'wKVdEb',
      originalTitle:
        '高身長172cm巨乳118cmのエリートボディ ガチ元代表候補の女子バスケ選手 本気バスケ映像と指導的レ●プ輪● 辻井ほのか （BOD）',
      releaseDate: '2026-01-06',
      actress: '辻井ほのか',
    },
    {
      id: 'DVAJ-724',
      javdbId: 've32zW',
      originalTitle:
        '【FANZA限定】向かい窓でバック突きされてる乳ワイパー妻にせつなシコい目で見つめられて夫の居ぬ間にご自宅密会 アヘ吐息で窓ガラスが曇るほど不倫ハメしまくった 辻井ほのか パンティと生写真セット',
      releaseDate: '2026-01-14',
      actress: '辻井ほのか',
    },
    {
      id: 'SNOS-038',
      javdbId: 'BzV2a9',
      originalTitle:
        'AVデビュー1周年記念作品 最強ヒロインとSEXできるファン感謝祭 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '瀬戸環奈',
    },
    {
      id: 'IPZZ-703',
      javdbId: 'J0d7P8',
      originalTitle:
        '楓カレン大乱交解禁ノーカットSP 総勢16名20発オーバーの大ぶっかけ祭り （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '楓カレン',
    },
    {
      id: 'SNOS-066',
      javdbId: '4DAXDb',
      originalTitle:
        '禁欲明けの敏感Lcupボディに【焦らし・媚薬・おっぱい性感開発・大量玩具責め・吊り下げイカセ・追撃ピストン】全部乗せで最高火力の快楽を！ ヤッバイ絶頂！ 木村愛心',
      releaseDate: '2026-01-27',
      actress: '木村爱心',
    },
    {
      id: 'MIDA-493',
      javdbId: 'a8eJMp',
      originalTitle: '井上もも 奇跡のザ・原石 AV DEBUT （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-07',
      actress: '井上もも',
    },
    {
      id: 'DASS-821',
      javdbId: 'kKe2q6',
      originalTitle:
        'THE時間停止 憧れの女子アナに悪戯痴● 勃起チ○ポこすり付けて孕ませナマ射精してやったww 白峰ミウ',
      releaseDate: '2026-01-13',
      actress: '白峰ミウ',
    },
    {
      id: 'JUR-589',
      javdbId: 'NQgMbN',
      originalTitle:
        '愛を認めさせたくて妻と絶倫の後輩を2人きりにして3時間…抜かずの追撃中出し計16発で妻を奪われた僕のNTR話 めぐり',
      releaseDate: '2026-01-13',
      actress: 'めぐり',
    },
    {
      id: 'ACHJ-078',
      javdbId: 'RkYN27',
      originalTitle:
        '圧倒的上から目線でM男くんのチ○ポを挑発 美脚お姉さんの非日常パンストフェティッシュ遊戯ー。 竹内有紀',
      releaseDate: '2026-01-27',
      actress: '竹内有紀',
    },
    {
      id: 'IPZZ-748',
      javdbId: 'QN2A7p',
      originalTitle:
        '気品溢れる美人お姉さんがフェロモンを振り撒きながら唾液まみれで勃起チ○ポをむしゃぶり尽くす最高のフェラチオ顔射 三澄寧々 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '三澄寧々',
    },
    {
      id: 'EBWH-294',
      javdbId: 'ZNv6WA',
      originalTitle:
        'あの手この手で媚薬仕込まれ、100日後に義父ペニスに子宮溺れる、奥ゆかしたわわ乳嫁 柏木ふみか （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-21',
      actress: '柏木ふみか',
    },
    {
      id: 'MVSD-673',
      javdbId: 've36Y9',
      originalTitle:
        '【FANZA限定】グラドル温泉肉体面接 有名になりたいんだろ？これくらい皆んなやってるんだよ（笑） 宍戸里帆 生写真3枚セット',
      releaseDate: '2026-01-21',
      actress: '宍戸里帆',
    },
    {
      id: 'PRED-833',
      javdbId: 'Eb437J',
      originalTitle:
        '憧れの三好先生が競泳水着姿で中出しされるのを見ていることしか出来なかった…どころか一緒になって美尻を貪り犯してしまった最低なボク。 三好佑香',
      releaseDate: '2026-01-20',
      actress: '三好佑香',
    },
    {
      id: 'MIDA-470',
      javdbId: 'P9GrN0',
      originalTitle:
        '国宝級美少女 アヘアヘ放心淫れイキ4本番 福田ゆあ （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-07',
      actress: '福田ゆあ',
    },
    {
      id: 'SNOS-073',
      javdbId: '6dRV5Z',
      originalTitle:
        '作業中に押しつぶされる超肉感バストが男の理性を破壊する…Mcupガテン女子の乳ワイパー誘惑 みなみ羽琉 （BOD）',
      releaseDate: '2026-01-27',
      actress: 'みなみ羽琉',
    },
    {
      id: 'ABF-314',
      javdbId: 'OXr2zv',
      originalTitle: '制服のまま、恋してる。完全主観性春3SEX 三佳詩【限定特典映像35分付き】',
      releaseDate: '2026-01-22',
      actress: '三佳詩',
    },
    {
      id: 'HMN-779',
      javdbId: 'bKE6Na',
      originalTitle:
        '【FANZA限定】BITCH MELTDOWN 早朝、路上で寝る女の子たち 新●区歌●伎町ホスト帰りみに娘編 生写真2枚セット',
      releaseDate: '2026-01-21',
      actress: '由良かな',
    },
    {
      id: 'MIDA-474',
      javdbId: 'GZw3eD',
      originalTitle:
        '都会のイケメン彼氏に婚約破棄された幼馴染ギャルと帰省先で再会。 コンビニすらないド田舎でコンドームも買えずにヤケクソ腰振りラッキー中出し14発できちゃったボク。 うんぱい 生写真3枚セット',
      releaseDate: '2026-01-21',
      actress: 'うんぱい',
    },
    {
      id: 'SNOS-017',
      javdbId: 'yxd6zX',
      originalTitle:
        '金松季歩のプライベートはエロ過ぎた…完全オフの真の姿をぜんぶ曝け出す！筋書きのない生々ハメ撮り貪欲FUCK （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '金松季歩',
    },
    {
      id: 'START-480',
      javdbId: 'RkX6vm',
      originalTitle:
        'どえっっろい素SEX解禁！ ホントはめっちゃキスが好きな小笠原菜乃の休日デートSEX',
      releaseDate: '2026-02-04',
      actress: '小笠原菜乃',
    },
    {
      id: 'YMDD-478',
      javdbId: 'XeAJD5',
      originalTitle:
        'シロウト観察 モニタリング エッチなファンミーティングで憧れのアイドルが個別オーダーセックス？！ DVD販売店編 ＆ 10発ヌくまで帰れまてん編 逢沢みゆ',
      releaseDate: '2026-01-06',
      actress: '逢沢みゆ',
    },
    {
      id: 'SNOS-049',
      javdbId: '0ep7EJ',
      originalTitle:
        '女性社員がブラジャー、パンティしか身に付けない下着メーカーに就職した僕！そして素敵な女上司が業務向上のためボッキする度にヌイてくれるなんて… miru （BOD）',
      releaseDate: '2026-01-13',
      actress: 'miru',
    },
  ],
  '2026-02': [
    {
      id: 'SNOS-064',
      javdbId: 'a8VKP4',
      originalTitle:
        '最強ヒロインが身も心もトロけさせちゃう楽園メンズエステ 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-02-11',
      actress: '瀨户環奈',
    },
    {
      id: 'JUR-636',
      javdbId: 'r34v9z',
      originalTitle:
        '無防備すぎるノイキャン巨乳人妻 無音のまま背後30cmに迫る絶倫ストーカー 桃園怜奈',
      releaseDate: '2026-02-24',
      actress: '桃園伶奈',
    },
    {
      id: 'MNGS-039',
      javdbId: 'P9J0q2',
      originalTitle:
        '【FANZA限定】ゴミ部屋貧乏人でもご主人様になってみたい！ギャルなのに甘々奉仕してくれる即尺中出し受精OKメイド 春陽モカ 生写真2枚セット',
      releaseDate: '2026-02-18',
      actress: '春陽萌花',
    },
    {
      id: 'HMN-786',
      javdbId: '3nW9O9',
      originalTitle:
        '【FANZA限定】妻と倦怠期中でごぶさたご主人様の爆発寸前チ●ポを狙い喰い！卑猥な乳輪ハミ尻挑発と下品に舐めしゃぶりPtoMで中出し精子搾り取る乳首ビンビン痴女ギャルメイド 春陽モカ 生写真2枚セット',
      releaseDate: '2026-02-25',
      actress: '春陽萌花',
    },
    {
      id: 'MIDA-506',
      javdbId: 'deQga9',
      originalTitle:
        '神尻松本いちか30スタイル 令和が生んだ小悪魔おしり痴女が30種類の卑猥な尻コスを見せつける究極の神尻フェチ映像 生写真3枚セット',
      releaseDate: '2026-02-04',
      actress: '松本一香',
    },
    {
      id: 'MIDA-546',
      javdbId: 'pkeYgq',
      originalTitle:
        '終電後僕の部屋に入り浸りギャル 4次会ビッ痴酔いパーティ 密着ヌルッヌルッのローション風呂ナイトプールごっこで朝までブッコ抜かれお泊り 松本いちか 春陽モカ 生写真3枚セット',
      releaseDate: '2026-03-04',
      actress: '松本一香',
    },
    {
      id: 'SNOS-112',
      javdbId: '6dWQ8a',
      originalTitle:
        '巨乳グラドルはやはり痴●に狙われやすいらしい 紫堂るい （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-02-11',
      actress: '紫堂留衣',
    },
    {
      id: 'DASS-787',
      javdbId: 'NQ6mB4',
      originalTitle:
        '無防備に黒パンストを見せつける姉ちゃんのデカ尻を揉み倒して中出ししてしまった僕。 橘メアリー',
      releaseDate: '2026-02-24',
      actress: '橘瑪莉',
    },
    {
      id: 'MNGS-040',
      javdbId: 'GZn45b',
      originalTitle:
        '目標達成オタク部員をご褒美おま●こちんしこサポート 中出しOKマンモロGALマネージャー 七瀬アリス （BOD）',
      releaseDate: '2026-02-03',
      actress: '七瀨爱麗絲',
    },
    {
      id: 'IPZZ-820',
      javdbId: 'EbnOVJ',
      originalTitle: '神秘的な華奢美少女がエクスタシーに溺れるびしょ濡れ接吻エロス 林芽依',
      releaseDate: '2026-02-10',
      actress: '林芽依',
    },
    {
      id: 'SNOS-111',
      javdbId: '2mXD0p',
      originalTitle:
        '石田佳蓮のガリ細ボディに次から次へとチ●ポをブッ挿しまくるノンストップ追撃マッスルピストン大乱交 生写真3枚セット',
      releaseDate: '2026-02-11',
      actress: '石田佳蓮',
    },
    {
      id: 'MNGS-038',
      javdbId: 'NQ6Pvx',
      originalTitle:
        '痴女のカリスマ・復活 囁き淫語責めとスパイダー杭打ち騎乗位で痴女られっぱなし中出し3本番スペシャル！ 蓮実クレア （BOD）',
      releaseDate: '2026-02-03',
      actress: '蓮实克蕾儿',
    },
    {
      id: 'EBWH-302',
      javdbId: 'J0nGOz',
      originalTitle:
        '親戚の巨乳ちゃんが風呂キャン界隈娘なんだって？ じゃあ叔父さんがスミズミまで舐め洗ってあげようネ。 莉々はるか （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-02-18',
      actress: '莉莉遥香',
    },
    {
      id: 'START-518',
      javdbId: '2mXx9Z',
      originalTitle:
        'ギャルコンビ時間停止 観光地で悪態をつく映えに必死なコンビニバイトの女2人を懲らしめろ！ 恋渕ももな×星乃莉子',
      releaseDate: '2026-02-17',
      actress: '恋淵桃菜,星乃莉子',
    },
    {
      id: 'SNOS-095',
      javdbId: 'OXrRE8',
      originalTitle:
        'いつも胸見てくるクソ陰キャな部下と出張先でまさかの相部屋に… 朝まで続く絶倫性交で不覚にもイカされまくったLカップ女上司 木村愛心',
      releaseDate: '2026-02-24',
      actress: '木村爱心',
    },
    {
      id: 'EBWH-298',
      javdbId: 'RkXA5n',
      originalTitle:
        'ネトラレ乳ワイパー ガチムチ絶倫オヤジの鬼バックピストンでむぎゅっと押し付けられるJカップ爆乳 神スタイルOLが堕ちた社内NTR 清宮仁愛 生写真3枚セット',
      releaseDate: '2026-02-18',
      actress: '清宮仁爱',
    },
    {
      id: 'MIDA-524',
      javdbId: '6dWwxQ',
      originalTitle:
        '視姦に興奮する地味メガネJカップのコンビニ深夜バイト羞恥ノーブラ勤務チャレンジ 篠真有 生写真2枚セット',
      releaseDate: '2026-02-18',
      actress: '篠真有',
    },
    {
      id: 'SNOS-079',
      javdbId: 'BzPOQ6',
      originalTitle:
        '人気学生カップルインフルエンサーがSNSでバズりたくて迷い込んだ先は濃厚絶倫オヤジが住む淫欲まみれの変態村だった…。 白上咲花 生写真3枚セット',
      releaseDate: '2026-02-25',
      actress: '白上咲花',
    },
    {
      id: 'MIAB-585',
      javdbId: 'kKbqOV',
      originalTitle:
        '授業参観日ボディコンママ 透け乳首ビンビンッ！デカ乳ぶるるんッ！肉尻パンチラ欲情挑発！中出し回数分だけ息子の成績を向上スケベ根回ししちゃう私 波多野結衣 生写真3枚セット',
      releaseDate: '2026-02-18',
      actress: '波多野結衣',
    },
    {
      id: 'PPPE-395',
      javdbId: 'bKORgE',
      originalTitle:
        '生徒の巨乳に理性を失った僕は放課後ラブホで何度も何度もふみかと中出しセックスしてしまった 中山ふみか',
      releaseDate: '2026-02-17',
      actress: '中山文香',
    },
    {
      id: 'MIKR-075',
      javdbId: '2mXwVX',
      originalTitle:
        '「ねぇねぇ…いつも私のオッパイ見てるよね」彼女のお姉さんから仲良し家族旅行中に逆NTRお誘い相部屋 卑猥な高級ランジェリー挑発に性欲暴走してしまった僕 白浜果歩 生写真3枚セット',
      releaseDate: '2026-02-18',
      actress: '白濱果步',
    },
    {
      id: 'SNOS-085',
      javdbId: 'xAO34B',
      originalTitle:
        '【FANZA限定】あどけない彼女が僕の目移りで精子透明になるまでヌイてくるジェラシー痴女になっちゃった！ 川越にこ 生写真3枚セット',
      releaseDate: '2026-02-11',
      actress: '川越仁子',
    },
    {
      id: 'MIDA-518',
      javdbId: 'AqnMKK',
      originalTitle:
        'その他には塩対応なのにボクだけヌイてくれるノーブラ乳首びんびん即ヌキ女神マネージャーとヌキ約束20発 宮下玲奈',
      releaseDate: '2026-02-17',
      actress: '宮下玲奈',
    },
    {
      id: 'IPZZ-750',
      javdbId: 'kKbrPP',
      originalTitle:
        '【FANZA限定】就職したコスプレメーカーは女性社員全員がエロコス着用勤務！？でも勃起しちゃう僕を教育担当の先輩が笑顔で何発でも抜いて面倒を見てくれる良い職場です 長浜みつり （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-02-11',
      actress: '长濱蜜璃',
    },
    {
      id: 'DASS-870',
      javdbId: 'de37R8',
      originalTitle:
        '人妻ギャルの授業参観日の誘惑。「お前の母ちゃん、エロすぎじゃね？」 黒川すみれ',
      releaseDate: '2026-01-27',
      actress: '黑川堇',
    },
    {
      id: 'HNDS-082',
      javdbId: 'MbKZ4X',
      originalTitle:
        '今日、中出ししまくりました。だれのマ●コが1番キモチ良い？美女13人のおちんちん奪い合い！センター目指して大乱交スペシャル！！',
      releaseDate: '2026-02-17',
      title: '本中',
    },
    {
      id: 'MIRD-274',
      javdbId: '0e4dnk',
      originalTitle:
        '私立MOODYZスケベ特進科 青春フェラチオ学園 いつでも、どこでも、奪い合い超ハーレム！ぶっこ抜きバキュームで痴女られちゃうボク。 MOODYZ創立25周年記念 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-02-04',
      title: 'MOODYZ',
    },
    {
      id: 'DVMM-352',
      javdbId: '2mXw2B',
      originalTitle:
        '一般男女モニタリングAV 家族旅行中にW不倫しちゃった男女のその後まで追跡スペシャル 巨乳妻が初対面のデカチン既婚男性とタオル一枚で相席混浴！スケベ本性剥き出しの連続射精セックス！！…が忘れられない男女がお互いのパートナーの目を盗んで何度も繰り返す中出し密会…',
      releaseDate: '2026-02-17',
      actress: '推川悠里',
    },
    {
      id: 'MKMP-702',
      javdbId: '96yKWV',
      originalTitle:
        'ドスケベ酒クズお姉さんが、僕の家に棲み付いて…昼夜問わず、ね～っとりと上下のクチでチ〇ポを咥え込まれる濃密性活。 推川ゆうり',
      releaseDate: '2026-01-27',
      actress: '推川悠里',
    },
    {
      id: 'ABF-315',
      javdbId: 'RkXJMR',
      originalTitle: '親友の人妻と背徳不倫。禁断中出し小旅行。 鈴村あいり【限定特典映像15分付き】',
      releaseDate: '2026-01-29',
      actress: '铃村爱里',
    },
    {
      id: 'MUDR-339',
      javdbId: 'MbKZYQ',
      originalTitle:
        'オタク友達とのセックスは最高に気持ちいい3 一か月の禁欲生活で理性がぶっ飛び獣のように欲望のまま生ハメ＆中出しSEXでイキまくる 姫咲はな',
      releaseDate: '2026-02-17',
      actress: '姬咲華',
    },
  ],
  '2026-03': [
    {
      id: 'ABF-326',
      javdbId: 'deQ5zB',
      originalTitle: '鈴村あいりが素人♂を逆ナン！【限定特典映像40分付き】',
      releaseDate: '2026-03-05',
      actress: '铃村爱里',
    },
    {
      id: 'SNOS-161',
      javdbId: 'BzPp5O',
      originalTitle:
        '【FANZA限定】貧困問題に取り組むボランティア女子大生、支援先で性被害も体験しちゃう！ 白上咲花 生写真3枚セット',
      releaseDate: '2026-03-25',
      actress: '白上咲花',
    },
    {
      id: 'IPZZ-789',
      javdbId: '7yYeJd',
      originalTitle:
        '大金持ちなら爆美女だって洗脳できる媚薬に堕ちた一流グラドル2人のチ○ポ奪い合いキメセクハーレム 長浜みつり 金松季歩 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '金松季步,长濱蜜璃',
    },
    {
      id: 'SNOS-106',
      javdbId: 'Kkr5AP',
      originalTitle:
        '日が昇って、沈むまでず～っと絶頂8時間！？金松おま●こ、キャパオーバー 金松季歩 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '金松季步',
    },
    {
      id: 'MIKR-082',
      javdbId: '82ZYEO',
      originalTitle:
        '電車通学中、こっそり痴●中出しさせてくれるタイトスカート女教師のひなこ先生 森日向子 生写真2枚セット',
      releaseDate: '2026-03-18',
      actress: '森日向子',
    },
    {
      id: 'START-498',
      javdbId: 'MbKMG1',
      originalTitle:
        'ハプバーでSEXをしたのは親友の旦那。もっと責めたい女と責められたい女…正反対の人妻二人が快楽堕ちして夫婦交換スワッピング4Pする仲になるまで。 青空ひかり 神木麗',
      releaseDate: '2026-04-08',
      actress: '青空光,神木麗',
    },
    {
      id: 'START-539',
      javdbId: '0e4Qqk',
      originalTitle:
        '神木麗の壁尻パネルを出張レンタル！暴走する精子満タン男たちのザーメンを膣で受け止め白濁マン汁まみれでガクイキする二日間に密着！',
      releaseDate: '2026-04-08',
      actress: '神木麗',
    },
    {
      id: 'SNOS-093',
      javdbId: 'OXr49A',
      originalTitle:
        '彼女の妹は最強ヒロイン！？ 僕を好きになりコッソリ迫られる 世界最高の浮気誘惑 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '瀨户環奈',
    },
    {
      id: 'MIDA-533',
      javdbId: 'z4b9O7',
      originalTitle:
        'いつでもどこでもマ○コ丸出し卑猥ポーズいつでも使える僕専用オナホ生徒 石川澪 （ブルーレイディスク） 生写真2枚セット',
      releaseDate: '2026-03-04',
      actress: '石川澪',
    },
    {
      id: 'SNOS-146',
      javdbId: '7yYWmR',
      originalTitle:
        '制服から覗く異様に長い手脚と規格外の170cm高身長は公衆の面前で痴●沼に晒される 渡部ほの',
      releaseDate: '2026-03-24',
      actress: '渡部穗乃',
    },
    {
      id: 'IPZZ-814',
      javdbId: '6dWO29',
      originalTitle:
        '【FANZA限定】超かわちぃ小悪魔妹が顔面特化距離で汗だく密着痴女してくる 佐々木さき 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '佐佐木紗希望',
    },
    {
      id: 'MIMK-268',
      javdbId: '1AWgNA',
      originalTitle:
        '【FANZA限定】友達の義母 実写版 「もっとすごいの…見せてあげよっか？」親友とその義母との禁断の関係をこっそり覗き見してしまった僕は… JULIA チェキセット',
      releaseDate: '2026-03-04',
      actress: 'JULIA',
    },
    {
      id: 'JUR-633',
      javdbId: 'gyQKMN',
      originalTitle:
        '息子の友人ともう5年間、セフレ関係を続けていますー。 年下の子と不埒な火遊び…中出し情事に溺れる私。 めぐり',
      releaseDate: '2026-03-10',
      actress: '惠理',
    },
    {
      id: 'SNOS-152',
      javdbId: 'yx5AJr',
      originalTitle:
        '500日間セックス我慢_ 女性フェロモン大量分泌！ 艶っぽい顔とカラダに進化！ 焦らし焦らされてからの禁欲超開放オーガズム 安達 夕莉 安達夕莉 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '安達夕莉',
    },
    {
      id: 'SNOS-144',
      javdbId: 'gyQKmy',
      originalTitle:
        '就職した水着メーカーは女性社員が水着姿の世界。勃起してもKカップの教育担当・神楽さんが抜いてくれるのでボクの金玉は毎日カラッポ 神楽ももか 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '神樂桃香',
    },
    {
      id: 'HMN-812',
      javdbId: 'BzP9V4',
      originalTitle:
        '密着こそこそ囁き内見中の夫婦の旦那を誘惑即ハメ20発中出し契約もぎ取る不動産レディ 五日市芽依',
      releaseDate: '2026-03-17',
      actress: '爱花未滿',
    },
    {
      id: 'ABF-328',
      javdbId: 'bKO2xA',
      originalTitle: '朝勃ちチ○ポで起き抜けからハメまくる土曜日。 涼森れむ【限定特典映像30分付き】',
      releaseDate: '2026-03-12',
      actress: '凉森铃梦',
    },
    {
      id: 'ADN-764',
      javdbId: 'a8VD6p',
      originalTitle:
        '「僕のことなんて好きになるはずない…」 女性不信の僕を全肯定で認めてくれる美女に情けなさ丸出しで射精した日。 白峰ミウ',
      releaseDate: '2026-03-03',
      actress: '白峰美羽',
    },
    {
      id: 'IPZZ-781',
      javdbId: 'MbK5rP',
      originalTitle:
        '100本以上AV撮影をして絶頂マンネリ化している桜空ももをODギリギリまで強力媚薬漬けにしてぶっ壊れ鬼イカセ 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '樱空桃',
    },
    {
      id: 'IPZZ-802',
      javdbId: '1AWqnw',
      originalTitle: 'DIGITAL CHANNEL DC144 楓カレン 美しき女神 初ぶっかけ解禁 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '楓可怜',
    },
    {
      id: 'MIDA-558',
      javdbId: 'wKgApb',
      originalTitle:
        'さくらってリア充で幸せそうでムカつくから時間停止オジサンに好き放題レ●プしてもらったんだ。 水卜さくら 生写真2枚セット',
      releaseDate: '2026-03-18',
      actress: '水卜樱',
    },
    {
      id: 'SNOS-135',
      javdbId: 'XeVxmJ',
      originalTitle:
        '【FANZA限定】顔よりデカい胸のせいで…乳だけで身バレしてしまった人妻風俗嬢の末路…。 旦那不在の間、ご近所さん御用達のヤラれ放題Mカップ みなみ羽琉 生写真3枚セット',
      releaseDate: '2026-03-25',
      actress: '南羽琉',
    },
    {
      id: 'ATID-663',
      javdbId: 'P9JY30',
      originalTitle:
        '大嫌いな男に腹筋がビクビクするほどイキ我慢させられ、作業着びしょ濡れになるまで失禁したガテン系女子 栗山莉緒',
      releaseDate: '2026-03-03',
      actress: '栗山莉',
    },
    {
      id: 'ABF-330',
      javdbId: 'J0ngyA',
      originalTitle: '男だらけの雀荘に瀧本雫葉、置いてきた。【限定特典映像55分付き】',
      releaseDate: '2026-03-12',
      actress: '瀧本雫葉',
    },
    {
      id: 'IPZZ-788',
      javdbId: 'pkeVwB',
      originalTitle:
        '艶めく色気の美神 下品解禁ー。怒涛の快楽責めで痙攣・失禁・仰け反り連発 本人史上最大エクスタシー 三澄寧々 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '三澄寧々',
    },
  ],
  '2026-04': [
    {
      id: 'SNOS-131',
      javdbId: 'Ebn763',
      originalTitle:
        '最強ヒロインが壊れるほどの快楽を！ 禁欲・おっぱい性感開発・焦らし・媚薬・追撃ピストン・目隠し拘束・大量玩具責め・全部のせ！ やりすぎエクスタシー 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-04-15',
      actress: '瀬戸環奈',
    },
    {
      id: 'JUR-687',
      javdbId: '5nb7B7',
      originalTitle:
        '『週3日、妻とSEXをしている。』と自慢してきた友人から週5日、毎回3，4発、合計19発中出ししてそいつの妻を寝取ってやった。 めぐり',
      releaseDate: '2026-04-14',
      actress: '藤浦めぐ',
    },
    {
      id: 'JUVR-276',
      javdbId: 'bKOk9a',
      originalTitle:
        '【VR】圧倒的上から目線で生徒の僕を挑発 メガネ、黒スト、競泳水着…卑猥な三種の神器を纏うめぐり先生の非日常パンストフェティッシュVR',
      releaseDate: '2026-04-06',
      actress: '藤浦めぐ',
    },
    {
      id: 'REBD-1026',
      javdbId: 'bKO6NA',
      originalTitle: 'Meguri2 再臨のヴィーナス・めぐり',
      releaseDate: '2026-04-16',
      actress: '藤浦めぐ',
    },
    {
      id: 'MANX-028',
      javdbId: '2mXMqW',
      originalTitle:
        '【FANZA限定】死ぬほどシコれる卑猥なドスケベ肉感ポーズ 貴方に向かって淫語を連発する巨乳美女編 めぐり 生写真セット',
      releaseDate: '2026-04-22',
      actress: '藤浦めぐ',
    },
    {
      id: 'ABF-336',
      javdbId: 'OXr0dA',
      originalTitle: '下町ママのねっとり誘惑スナック 鈴村あいり【限定特典映像15分付き】',
      releaseDate: '2026-04-02',
      actress: '铃村あいり',
    },
    {
      id: 'EBWH-322',
      javdbId: 'GZnVnb',
      originalTitle:
        '優しさにつけ込まれたB（バスト）100cm新妻→ごめんなさい乳ワイパー堕ち。 ガラスにむぎゅっ。夫の目の前で押し潰されイカされる。 柏木ふみか',
      releaseDate: '2026-04-21',
      actress: '柏木ふみか',
    },
    {
      id: 'START-540',
      javdbId: 'V4V3YX',
      originalTitle:
        '無慈悲で無表情な上級性処理官の女 常勤の看守では手に負えない重度のわい●つ罪受刑者の治療にあたる厚生施設の一日 本庄鈴',
      releaseDate: '2026-04-22',
      actress: '本庄铃',
    },
    {
      id: 'IPZZ-846',
      javdbId: '96p7eE',
      originalTitle:
        '【FANZA限定】セレブに憧れた女社長が海外顔負けの爆乳露出ファッションで出勤してきて目のやり場に困っています ひなの花音 生写真3枚セット',
      releaseDate: '2026-04-15',
      actress: 'ひなの花音',
    },
    {
      id: 'MNGS-052',
      javdbId: 'qAb0n6',
      originalTitle:
        'セックスしたすぎて成仏できないギャル幽霊と不意うち痴女られ無責任中出し同棲生活 春陽モカ （BOD）',
      releaseDate: '2026-04-21',
      actress: '春陽モカ',
    },
    {
      id: 'MIDA-581',
      javdbId: 'V4VM8A',
      originalTitle:
        '胸キュン淫語でスキスキ洗脳しちゃう小悪魔コスプレイヤー 発情オフパコ中出し乱交パーティー 松本いちか （BOD）',
      releaseDate: '2026-04-07',
      actress: '松本いちか',
    },
    {
      id: 'START-542',
      javdbId: 'veybyY',
      originalTitle:
        '会社では性格がキツすぎるパワハラ女上司に飲みに誘われて、愚痴を聞いたらまさかの豹変！甘々メンヘラで立場逆転して、何度もおねだり中出しセックス 神木麗',
      releaseDate: '2026-05-06',
      actress: '神木麗',
    },
    {
      id: 'SNOS-165',
      javdbId: 'mOb6gv',
      originalTitle:
        '潰れかけ古着屋を復活させたMカップの看板店員 規格外おっぱいの誘惑接客で奇跡のV字回復劇 みなみ羽琉 （BOD）',
      releaseDate: '2026-04-28',
      actress: 'みなと羽琉',
    },
    {
      id: 'ABF-338',
      javdbId: '82Z8AE',
      originalTitle: '空っぽになるまで搾り取られる 生ハメ騎乗位 涼森れむ',
      releaseDate: '2026-04-09',
      actress: '凉森れむ',
    },
    {
      id: 'SNOS-115',
      javdbId: '4Dx3dZ',
      originalTitle:
        '新人NO.1 STYLE ビジュ爆発！新時代 グラビアアイドル 博多彩葉 AVデビュー （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-04-15',
      actress: '博多彩葉',
    },
    {
      id: 'MIDA-597',
      javdbId: 'ZNxGvX',
      originalTitle:
        '怪我で動けない俺のご無沙汰チ○ポを神くびれGカップのクール系訪問ヘルパーが 優しくでも淡々と射精のお手伝い20発 水卜さくら （BOD）',
      releaseDate: '2026-04-21',
      actress: '水卜さくら',
    },
    {
      id: 'START-548',
      javdbId: '1AWGW9',
      originalTitle:
        '皆から好かれる院内のムードメーカー看護師A（26）職場で隠れモテしている既婚ドクターYが調合した謎のビタミン剤を盛られキメセク漬け ガンギマリよだれ垂れ流しグラインド騎乗位中毒者に 青空ひかり',
      releaseDate: '2026-05-06',
      actress: '青空ひかり',
    },
    {
      id: 'MIDA-573',
      javdbId: '7yYDK1',
      originalTitle:
        '※台本一切無し！一ヶ月禁欲した輝星きらを焦らして寸止めを繰り返し極限まで感度を高めた後のケダモノ大乱交 （BOD）',
      releaseDate: '2026-04-07',
      actress: '輝星きら',
    },
    {
      id: 'SNOS-167',
      javdbId: '3nW4r0',
      originalTitle:
        '【FANZA限定】駆け出しグラドル、ロケ先の温泉旅館で大御所芸人に寝取られてしまう 紫堂るい （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-04-15',
      actress: '紫堂るい',
    },
    {
      id: 'MIMK-274',
      javdbId: 'r34kYD',
      originalTitle:
        '宗教勧誘に来た母娘の胸がエロかったので、部屋に連れ込んだら、肉オナホにできた話。 奥田咲 美園和花 生写真3枚セット',
      releaseDate: '2026-04-22',
      actress: '奥田咲,美園和花',
    },
    {
      id: 'SNOS-150',
      javdbId: 'xAO2DO',
      originalTitle:
        '【FANZA限定】美脚スポーツキャスターは局から人気格闘家にあてがわれても断れず…力任せの串挿しピストンで口とマ○コ同時に犯●れ死ぬほどイカされる。 明日葉みつは 生写真3枚セット',
      releaseDate: '2026-04-15',
      actress: '明日葉みつは',
    },
    {
      id: 'MIDA-641',
      javdbId: 'QNrMW7',
      originalTitle:
        '汗びちょむんむんデカパイとドM開脚プリ尻挑発で勃起若マラ喰い下品にガニ股アクメ中出しねだる欲求不満な変態ジム通い妻 篠真有 生写真2枚セット',
      releaseDate: '2026-04-22',
      actress: '篠真有',
    },
    {
      id: 'DASS-881',
      javdbId: 'P9JkGX',
      originalTitle:
        'トレーナーの子宮をエグるバックピストンにイキ堕ちして毎日寝取られに通う巨乳妻 宍戸里帆',
      releaseDate: '2026-04-14',
      actress: '宍戸里帆',
    },
    {
      id: 'MIDA-574',
      javdbId: 'P9JxMr',
      originalTitle:
        '「もうこれで最後…ねッ？お願いぃッ！」と朝セク決められ脚ガクガク痙攣しながらアクメ通勤してる私 同棲を始めて毎朝カレシが私の出社前パンストを破って困ってます 石川澪 （BOD）',
      releaseDate: '2026-04-07',
      actress: '石川澪',
    },
    {
      id: 'MKMP-718',
      javdbId: 'MbKpYP',
      originalTitle:
        '【FANZA限定】【全世界70万DL突破】爆乳看守じわ堕ち監獄RPG 実写版KARRYN’S PRISON 乙アリス 生写真付き',
      releaseDate: '2026-04-15',
      actress: '乙アリス',
    },
  ],
  '2026-05': [
    {
      id: 'SNOS-183',
      javdbId: 'AqnZBM',
      originalTitle:
        '最強ヒロインと 一緒に終電逃して ホテル泊まって 朝までヤリたい！ 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-13',
      actress: '瀨户環奈',
    },
    {
      id: 'SNOS-233',
      javdbId: 'P91MB9',
      originalTitle: '‘あの’河北彩伽とお泊まりデートで痴女られたら1日20発は余裕だよね？',
      releaseDate: '2026-05-26',
      actress: '河北彩花',
    },
    {
      id: 'MIRD-277',
      javdbId: 'Ebnw8Q',
      originalTitle:
        'MOODYZファン感謝祭バコバコバスツアー2026 25周年専属大集合！大乱交！大感謝スペシャル！',
      releaseDate: '2026-05-19',
      title: 'MOODYZ粉絲感谢祭',
    },
    {
      id: 'DASS-945',
      javdbId: '1AWGVZ',
      originalTitle:
        'いっぱいチュウチュウしてね？魅惑的エロ乳輪を押しつけ国宝Iカップ授乳手コキを施してくれるチソポ大好き女神のトリートメントエッチ。 彩月七緒',
      releaseDate: '2026-05-12',
      actress: '彩月七緒',
    },
    {
      id: 'JUR-753',
      javdbId: 'Ebn8eJ',
      originalTitle:
        '昔俺の事が好きだった地味な幼馴染が、色気漂う巨乳人妻に進化していたので、性欲が尽き果てるまで生ハメしまくった…。',
      releaseDate: '2026-05-12',
      actress: '彩月七緒',
    },
    {
      id: 'MIDA-590',
      javdbId: 'veyJmG',
      originalTitle:
        'ダブルJcupスリム巨乳独占ハーレム！！ムカつく地味メガネ女上司を自宅で立場逆転いいなりご奉仕全裸メイド 百田光稀 篠真有 （BOD）',
      releaseDate: '2026-05-05',
      actress: '筱真有,百田光希',
    },
    {
      id: 'SNOS-207',
      javdbId: 'Xe7qkM',
      originalTitle:
        '【FANZA限定】チビでニートの非モテ兄を巨乳の高身長のリア充妹が見下ろしからかい小悪魔SEX 渡部ほの 生写真3枚セット',
      releaseDate: '2026-05-27',
      actress: '渡部穗乃',
    },
    {
      id: 'CJOD-514',
      javdbId: 'Yw3qD6',
      originalTitle: '蛇舌フェベチオ占い師 邪精子ブッコ抜きするしゃぶりの館 辻井ほのか',
      releaseDate: '2026-05-26',
      actress: '辻井穗乃果',
    },
    {
      id: 'JUR-752',
      javdbId: 'Xe7q94',
      originalTitle:
        '『はぁはぁ…私が満足するまで、何回イッても終わらせないわよ。』 エアコン修理に来た可愛い青年に超強力媚薬入り麦茶を飲ませて、昼下がりに汗だく勃起チ○ポを馬乗りで生ハメしまくった人妻。',
      releaseDate: '2026-05-26',
      actress: '沙月芽衣',
    },
    {
      id: 'IPZZ-827',
      javdbId: 'OXrnmO',
      originalTitle:
        '【FANZA限定】美貌・色気・テクニック 大人の魅力を凝縮した美麗お姉さんに脳とチ○ポをトロけさせられる最高の受け身オナサポ体験 三澄寧々 生写真3枚セット',
      releaseDate: '2026-05-13',
      actress: '三澄寧寧',
    },
    {
      id: 'JUR-708',
      javdbId: 'e8D4Qx',
      originalTitle:
        '吹き出る汗、吹き飛ぶ理性―。 宙に浮くほどイキ飛び跳ねる、真夏の大痙攣エビ反り不倫SEX。',
      releaseDate: '2026-05-26',
      actress: '爱弓凉',
    },
    {
      id: 'EBWH-332',
      javdbId: 'Yw3w2x',
      originalTitle:
        '従来の「着衣巨乳」では届かなかった、圧倒的なピタピタ感 史上最薄、0.01mm。 「極薄」ナマ着衣セックス 柏木ふみか （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-20',
      actress: '柏木文香',
    },
    {
      id: 'SNOS-240',
      javdbId: 'r3zPar',
      originalTitle:
        '【FANZA限定】大好きな彼女は 僕の上司、同期、後輩… 誰にでも股開く 社内共有マ●コでした。 でも…悔し勃起しちゃう無様な僕。 村上悠華 生写真3枚セット',
      releaseDate: '2026-05-27',
      actress: '村上悠華',
    },
    {
      id: 'SNOS-217',
      javdbId: 'qAqPrP',
      originalTitle:
        '隣のMcup団地妻がメロンサイズ特大ブラを干す昼下がりは旦那不在のサインです…。 みなみ羽琉 （BOD）',
      releaseDate: '2026-05-26',
      actress: '南羽琉',
    },
    {
      id: 'MIDA-633',
      javdbId: '5nNnO7',
      originalTitle:
        '息子が通う保育園に新米巨乳先生が入園してきたので…妻子がいない間に神乳チュパちゅぱ赤ちゃんプレイ不倫セックス。 水卜さくら 生写真3枚セット',
      releaseDate: '2026-05-20',
      actress: '水卜樱',
    },
    {
      id: 'DASS-943',
      javdbId: '6dveKK',
      originalTitle:
        'おち○ぽ狂のメス豚堕ち。最低カスハラ上司の綺麗な嫁さんが隠れてキャバクラで働いてたので、倍返しの復讐本指名。その身体でチャラでいいよ。 白峰ミウ',
      releaseDate: '2026-05-26',
      actress: '白峰美羽',
    },
    {
      id: 'SNOS-166',
      javdbId: 'RkX3Rp',
      originalTitle:
        '「ご主人様、私にかけて」僕のチ●ポが好きすぎて生搾りザーメン奪い合う顔射おねだりWメイド 安達夕莉 新木希空 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-13',
      actress: '安達夕莉,新木希空',
    },
    {
      id: 'MIRD-283',
      javdbId: 'NQ7QO3',
      originalTitle:
        '本格レズ＆共演 初解禁 溺れよう、美の洪水。きれいなお姉さん2人とエロ汁止まらない中出しハーレムセックス 仲村みう 佐々木あき （BOD）',
      releaseDate: '2026-05-19',
      actress: '仲村美羽,佐佐木明希',
    },
    {
      id: 'JYMA-105',
      javdbId: 'r3zPkq',
      originalTitle:
        '夫が出張中に男達のチ○ポを喰い漁る 美爆乳尻ビッチ妻 発情した肉感ボディでヤリまくるドスケベ嫁',
      releaseDate: '2026-05-26',
      actress: '波多野結衣',
    },
    {
      id: 'SNOS-237',
      javdbId: '96ne7V',
      originalTitle:
        '【FANZA限定】ヤリサーの男達に雑に寝取られといてピースなんかすんなよ… 僕の大切な年下彼女が大学のチャラ男たちとノリノリSEXを楽しんでいた…。 浅野こころ （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-27',
      actress: '浅野心',
    },
    {
      id: 'MIDA-624',
      javdbId: 'wKgzb1',
      originalTitle:
        '法事同窓会NTR ヤンチャな過去を持つ妻が6年ぶりに仲間の法事で地元に帰った 再会した地元のゲス友たちに酔わされて昔のヤリマンに戻った妻の寝取られ中出し映像 葵いぶき 生写真3枚セット',
      releaseDate: '2026-05-06',
      actress: '葵伊吹',
    },
    {
      id: 'SNOS-192',
      javdbId: 'z4bnYE',
      originalTitle: 'もしグラビアアイドルにパイズリ誘惑されても断れますか？ 紫堂るい',
      releaseDate: '2026-05-12',
      actress: '紫堂留衣',
    },
    {
      id: 'MDHR-002',
      javdbId: 'YwG60d',
      originalTitle:
        'イクイク依存症！現役最狂マゾ女優のクチ・マ○コ・アナル3穴めった挿し！！気持ち良すぎるアナル解禁 どうなったか見たくないか？！ 月野江すい （BOD）',
      releaseDate: '2026-05-05',
      actress: '月野江翠',
    },
    {
      id: 'MIRD-278',
      javdbId: '2mr8By',
      originalTitle:
        'MOODYZファン感謝祭 うらバコバコバスツアー2026 補欠者召喚！魔法少女おまんちょエンジェル！！淫魔の野望を打ち砕くマジカルFUCKイクイク大乱交 （BOD）',
      releaseDate: '2026-06-16',
      actress: '松本一香,春陽萌花,七瀨爱麗絲',
    },
  ],
  '2026-06': [
    {
      id: 'SNOS-209',
      javdbId: 'AqVrm0',
      originalTitle:
        '最強ヒロインが アナタのちんちん100％支配… 24時間犯してあげる 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-06-10',
      actress: '瀨戶環奈',
    },
    {
      id: 'MIDA-649',
      javdbId: 'kKDr4P',
      originalTitle:
        'ムレムレ家庭教師のからかい淫語とはぁはぁ吐息で汗だく密着されてもう堪らんです…！ 石川澪 生写真2枚セット',
      releaseDate: '2026-06-03',
      actress: '石川澪',
    },
    {
      id: 'PRWF-012',
      javdbId: 'Rk6E7K',
      originalTitle:
        '本物Gカップ若妻 人生初中出し解禁 危険日に初ナマ性交でいきなり種付け大絶頂Special 小松空',
      releaseDate: '2026-06-16',
      actress: '小松空',
    },
    {
      id: 'SNOS-234',
      javdbId: 'z4VAz7',
      originalTitle: 'グラビアアイドルの際どい水着は撮影スタッフのレ●プ欲を掻き立てる 紫堂るい',
      releaseDate: '2026-06-09',
      actress: '紫堂留衣',
    },
    {
      id: 'IPZZ-854',
      javdbId: 'OX7Rbv',
      originalTitle:
        '【FANZA限定】理性を奪う背徳の課外授業 艶やかな美貌…溢れ出す大人の色気…彼女の姉で担任教師「寧々先生」の誘惑に我を忘れた僕は放課後校内でラブホで何度も彼女を裏切る背徳性交を…。 三澄寧々 生写真3枚セット',
      releaseDate: '2026-06-10',
      actress: '三澄寧寧',
    },
    {
      id: 'JUR-732',
      javdbId: 'ZN30EJ',
      originalTitle:
        '学級委員の僕だけが知る生徒指導・めぐり先生の裏の顔。放課後、学校イチ生真面目な女教師と校内露出に明け暮れていますー。',
      releaseDate: '2026-06-09',
      actress: '惠理',
    },
    {
      id: 'SNOS-232',
      javdbId: 'Mb7Ar1',
      originalTitle:
        '金松季歩を秒で全裸！秒でSEX！「えっ！ここは本当にムりぃぃぃ！！！」ドッキリ即ズボGP！ （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-06-10',
      actress: '金松季步',
    },
    {
      id: 'MIDA-614',
      javdbId: 'mOD7eR',
      originalTitle:
        '家に住み憑くワケアリ地味巨乳な幽霊を乳揉みセクハラ挑発していたら…毎晩俺に勝手に跨りこねくり腰振り 中出しをねだるエロメス狂いに豹変！ 百田光稀 生写真2枚セット',
      releaseDate: '2026-06-03',
      actress: '百田光希',
    },
    {
      id: 'SNOS-283',
      javdbId: 'vezpEn',
      originalTitle:
        '【FANZA限定】雨の日にコインランドリーに現れ、洗濯が終わるまでエッチな体が完全無防備な隙だらけお姉さん 楓ふうあ 生写真3枚セット',
      releaseDate: '2026-06-10',
      actress: '楓富愛',
    },
    {
      id: 'IPZZ-850',
      javdbId: 'P918X9',
      originalTitle:
        'ニートのボクを心配した幼なじみの「もも」が社会復帰を賭けTTM（勃ったら負け）ゲームを提案！ドスケベBODYを駆使した過激過ぎるエロ誘惑に秒殺フル勃起のフルボッコ射精させられたボク。 桜空もも 生写真3枚セット',
      releaseDate: '2026-06-10',
      actress: '櫻空桃',
    },
    {
      id: 'OFES-049',
      javdbId: '3nNK30',
      originalTitle:
        '俺が退室したと勘違いした地味なラブホ清掃員のパツンパツンデカパイがエロすぎて…乳ワイパー性交で延長中出ししまくった。 波多野結衣',
      releaseDate: '2026-06-30',
      actress: '波多野結衣',
    },
    {
      id: 'MIDA-669',
      javdbId: 'mODmAR',
      originalTitle:
        '家事も出来ないドジっ娘ダメイドは全裸にひん剥いて媚薬でお仕置きアへ顔キメセク全裸メイド 水卜さくら （BOD）',
      releaseDate: '2026-06-16',
      actress: '水卜櫻',
    },
    {
      id: 'SNOS-260',
      javdbId: 'r3z83r',
      originalTitle:
        'タダマンナース Lカップ看護師が患者に弱み握られおっぱい吐精処理、乱暴SEXされ放題 木村愛心',
      releaseDate: '2026-06-23',
      actress: '木村愛心',
    },
    {
      id: 'MNGS-060',
      javdbId: 'Mb7EzJ',
      originalTitle:
        '高飛車な女上司が結婚するらしいので超強淫な感度1000倍の媚薬リモバイで調教して寸止め絶頂地獄の失禁結婚式にしてやった。 美園和花 （BOD）',
      releaseDate: '2026-06-16',
      actress: '美園和花',
    },
    {
      id: 'DASS-969',
      javdbId: 'Xe7JqP',
      originalTitle:
        '人妻ギャルの授業参観日の誘惑。「お前の母ちゃん、エロすぎじゃね？」 百永さりな',
      releaseDate: '2026-06-23',
      actress: '百永紗里奈',
    },
    {
      id: 'MIMK-284',
      javdbId: '82BRKE',
      originalTitle: '紫陽さんちの箱入りお嬢様に性欲処理残業させられる話 実写版 香水じゅん （BOD）',
      releaseDate: '2026-06-16',
      actress: '香水純',
    },
    {
      id: 'HMN-876',
      javdbId: 'vezNDn',
      originalTitle:
        '【FANZA限定】ぷりぷり桃尻コスプレイヤーがカメコおじ達に全力尻押し！食べごろヒップをバックでガン突きされても笑顔で中出しイキまくるオフパコ枕営業 香水じゅん 生写真2枚セット',
      releaseDate: '2026-06-24',
      actress: '香水純',
    },
    {
      id: 'ABF-363',
      javdbId: 'deDyw5',
      originalTitle:
        '完全主観×鬼イカせ イッても止めない激FUCK！！！追撃5.000ピストン 三佳詩【限定特典映像30分付き】',
      releaseDate: '2026-06-25',
      actress: '三佳詩',
    },
    {
      id: 'MNGS-071',
      javdbId: 'pkz9Jb',
      originalTitle:
        '「私は2番目でもイイですよ」妻子が実家帰省中に、乳デカ保母さんの誘いに負けて始まる仮ソメ同棲不倫中出し1週間 彩月七緒 （BOD）',
      releaseDate: '2026-06-16',
      actress: '彩月七緒',
    },
    {
      id: 'CAWD-987',
      javdbId: 'yxzYpg',
      originalTitle:
        'いいなりセーラーぶっかけ当番。教師に大量顔射されまくる、本日は●●ちゃんの番です。 彩月七緒',
      releaseDate: '2026-06-02',
      actress: '彩月七緒',
    },
    {
      id: 'DASS-977',
      javdbId: '4D4W2p',
      originalTitle:
        '【チツハラ復讐】恨まれた生徒にじわじわ子宮を汚される彩月先生。肉厚おま○こ陰湿イカセ計画。 彩月七緒',
      releaseDate: '2026-06-09',
      actress: '彩月七緒',
    },
    {
      id: 'MIDA-648',
      javdbId: 'Yw3zEx',
      originalTitle:
        '親友の妹がデリヘル嬢だと知った僕は入店初日から全オプションを注文してめちゃくちゃ本番しまくった。 輝星きら （BOD）',
      releaseDate: '2026-06-02',
      actress: '輝星綺羅',
    },
    {
      id: 'START-596',
      javdbId: 'qAqmee',
      originalTitle:
        '俺が目を付けたパーソナルインストラクターが結婚してたなんて許さない 洗脳エステで俺の思い通りにしてやる！ 神木麗',
      releaseDate: '2026-07-08',
      actress: '神木麗',
    },
    {
      id: 'OFES-050',
      javdbId: '2mrzVN',
      originalTitle:
        '巨乳でムカつく後輩‘りほ’を絶対妊娠ドロップアウトさせてやる。 私立中出し学園水泳部 孕ませ輪●計画 宍戸里帆 由良かな 皆月ひかる',
      releaseDate: '2026-06-30',
      actress: '宍戶里帆,皆月光,由良佳奈',
    },
    {
      id: 'MIMK-283',
      javdbId: '96n8vq',
      originalTitle: '隣人は有名配信者3人目 5人目 佐々木さき （BOD）',
      releaseDate: '2026-06-16',
      actress: '佐佐木佐木',
    },
    {
      id: 'JUR-086',
      javdbId: 'Bzakbr',
      originalTitle: '衝撃移籍 松岡すず Madonnaデビュー 美女の中の絶対的『美女』、マドンナ降臨ー。',
      releaseDate: '2026-06-23',
      actress: '松岡鈴',
    },
    {
      id: 'MIDA-642',
      javdbId: 'pkz7Ne',
      originalTitle: 'ズルい程、最高にエロいカラダ 普段はOL 副業AV DEBUT 1本限定 森下茉莉',
      releaseDate: '2026-06-02',
      actress: '森下茉莉',
    },
    {
      id: 'SNOS-250',
      javdbId: 'NQ7mv4',
      originalTitle:
        '【FANZA限定】生真面目すぎる経理部の先輩社員miruさんとまさかM女デリヘルで遭遇！ 「ヒヒwwこれをネタにいっぱい調教してやるぅ」（僕） 生写真3枚セット',
      releaseDate: '2026-06-10',
      actress: 'miru',
    },
    {
      id: 'URE-139',
      javdbId: 'yxzkJZ',
      originalTitle:
        'シリーズ累計30万DL！！ 原作:HGTラボ 自治会の人妻はとてもHでした。実写版 童貞を翻弄する人妻たちの筆おろし＆圧倒的な誘惑痴態が完全版で再実写化！！',
      releaseDate: '2026-06-09',
      actress: '椎名由奈,九井沙緒',
    },
    {
      id: 'JUR-081',
      javdbId: '0e2m3b',
      originalTitle: 'ヌードモデルNTR 上司と羞恥に溺れた妻の衝撃的浮気映像',
      releaseDate: '2026-06-09',
      actress: '一花',
    },
    {
      id: 'MIDA-670',
      javdbId: 'wK4yP7',
      originalTitle:
        '「マ○コ見せたら許してやるよ」怯える万引き少女を脅してネチネチ性器イジくる変質コンビニ店長が分からせ粘着レ×プ あの日から性処理バイト便女となった私… 宮下玲奈 生写真3枚セット',
      releaseDate: '2026-06-17',
      actress: '宮下玲奈',
    },
  ],
  '2026-07': [
    {
      id: 'MIRD-284',
      javdbId: 'nKDNJ6',
      originalTitle:
        '金桜九舞 最高峰な妻たち。令和の専属ドリーム大共演 【MOODYZ創立25周年記念】 九野ひなの 金松季歩 桜空もも 伊藤舞雪 生写真5枚セット',
      releaseDate: '2026-07-22',
      actress: '九野雛乃、櫻空桃、金松季步、伊藤舞雪',
    },
    {
      id: 'SNOS-258',
      javdbId: 'Ww7RYR',
      originalTitle:
        '最強ヒロインの 濃厚フェラチオと 大量顔射 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-07-15',
      actress: '瀬戸環奈',
    },
    {
      id: 'IPZZ-859',
      javdbId: '4D4YZE',
      originalTitle:
        '【FANZA限定】生意気な地雷系メスガキに大人の怖さをわからせるドMペット化調教記録 佐々木さき 生写真3枚セット',
      releaseDate: '2026-07-15',
      actress: '佐佐木佐木',
    },
    {
      id: 'MIDA-726',
      javdbId: '82BAMW',
      originalTitle:
        '「澪の恥ずかしい肛門ペロペロして欲しいな」モジモジしながらプリ尻ノーパン誘惑ケツ穴くぱぁ！ドM先生にアナル舐めさせて赤面ヒクヒクおねだり学園 石川澪 生写真3枚セット',
      releaseDate: '2026-07-08',
      actress: '石川澪',
    },
    {
      id: 'SNOS-292',
      javdbId: 'P913y9',
      originalTitle:
        '100年前の美人をAV化 ご令嬢と召使いの禁断の恋、たった一晩だけ許された情熱性交 七ツ森りり （BOD）',
      releaseDate: '2026-07-28',
      actress: '七森莉莉',
    },
    {
      id: 'MIDA-717',
      javdbId: 'r3zyRJ',
      originalTitle:
        '【FANZA限定】夫とのレスに悩む中、私のカフェに通う10年来の常連さんの強引な告白に密会交尾。即濡れ即潮漏らしご無沙汰おま○こ連続中出し20発 篠真有 生写真2枚セット',
      releaseDate: '2026-07-22',
      actress: '篠真有',
    },
    {
      id: 'MIDA-678',
      javdbId: 'wK4bzB',
      originalTitle:
        '【FANZA限定】囮捜査官マユ-キメセク媚薬中出し 航空・潜入捜査編- 篠真有 生写真2枚セット',
      releaseDate: '2026-07-08',
      actress: '篠真有',
    },
    {
      id: 'IPZZ-898',
      javdbId: '7ybM0B',
      originalTitle:
        '【FANZA限定】恥ずかし過ぎるタイトミニスカを履かされて…私は気色が悪いパンストマニアの変態社長の性処理秘書として毎日、服従勤務しています。 藤咲まい 生写真3枚セット',
      releaseDate: '2026-07-15',
      actress: '藤咲舞',
    },
    {
      id: 'EBWH-339',
      javdbId: '4D4BJZ',
      originalTitle:
        'ヤレそうな尻軽ギャルゴルファーはボディラインがピタピタ過ぎ！思わず手を出したら172cmの性豪アスリートのエグい腰使いに返り討ちにされコーチ完敗 清宮仁愛',
      releaseDate: '2026-07-21',
      actress: '清宮仁愛',
    },
    {
      id: 'JUR-769',
      javdbId: 'AqVNmP',
      originalTitle:
        '会社の地味な人妻経理を≪濃厚マゾ潮≫吹き散らかす、俺専用の愛人に仕立て上げた―。 めぐり （BOD）',
      releaseDate: '2026-07-14',
      actress: '惠理',
    },
    {
      id: 'SNOS-316',
      javdbId: 'Ww76PZ',
      originalTitle: 'いいなりセフレの 大ぶりオッパイで エグいハメ撮り 撮りました！ 木村愛心',
      releaseDate: '2026-07-28',
      actress: '木村愛心',
    },
    {
      id: 'IPZZ-876',
      javdbId: 'EbPyg4',
      originalTitle:
        '【FANZA限定】美人でスタイル抜群な艶やかお姉さんの2時間で22射精させる凄技痴女テクニック 三澄寧々 生写真3枚セット',
      releaseDate: '2026-07-15',
      actress: '三澄寧寧',
    },
    {
      id: 'START-608',
      javdbId: 'EbO6md',
      originalTitle:
        '性欲処理専門セックス外来医院27 特別編 SODSTAR 神木麗 妻として、看護師として、性医療に生きる。',
      releaseDate: '2026-08-05',
      actress: '神木麗',
    },
    {
      id: 'DSOD-014',
      javdbId: 'qAqmkr',
      originalTitle: '台本・演出・演技一切ナシ 本能の赴くまま、快楽に身をゆだねる1VS1 竹内有紀',
      releaseDate: '2026-07-14',
      actress: '竹内有紀',
    },
    {
      id: 'SNOS-276',
      javdbId: 'J0PXRd',
      originalTitle: '清楚系グラドルの裏顔はドS愛人に調教済のいいなりマゾペット 紫堂るい',
      releaseDate: '2026-07-14',
      actress: '紫堂留衣',
    },
    {
      id: 'MIDA-696',
      javdbId: 'z4VaKb',
      originalTitle:
        '全裸羞恥調教アルバイト変態店長に深夜シフトでノーブラ巨乳ノーパン接客させられています （BOD）',
      releaseDate: '2026-07-07',
      actress: '葵伊吹',
    },
    {
      id: 'JUR-096',
      javdbId: 'wK4N6B',
      originalTitle:
        '【FANZA限定】麗しきランジェリー、唾液と精液で汚れた酬いの人妻保険外交員 三比菜々美 生写真とパンティセット',
      releaseDate: '2026-07-15',
      actress: '三比菜菜美',
    },
    {
      id: 'MIMK-275',
      javdbId: 'r3zamq',
      originalTitle:
        '美少女催●で性教育 実写版 つるぺたJ●を常識改変レ×プで理解らせNTR 松本いちか （BOD）',
      releaseDate: '2026-07-07',
      actress: '松本一香',
    },
    {
      id: 'MNGS-067',
      javdbId: 'kKDVR6',
      originalTitle:
        '合宿レ×プ輪● 憧れの女子マネージャーが絶倫部員達の激ピストン連続中出しでおま○こブリブリ精子逆流アクメ 彩月七緒 （BOD）',
      releaseDate: '2026-07-07',
      actress: '彩月七緒',
    },
    {
      id: 'PRED-886',
      javdbId: 'Xe7bb4',
      originalTitle:
        '毎晩セックスの声が大きい彼女のお姉さんに彼女不在中、誘惑されて何度も中出しさせられたボク 彩月七緒',
      releaseDate: '2026-07-21',
      actress: '彩月七緒',
    },
    {
      id: 'MIDA-705',
      javdbId: 'KkPROP',
      originalTitle:
        '解禁 初めての中出し 天上天下唯我独尊カワイイ娘の「もうイってるってばぁ」状態で初・膣射 宮下玲奈 （BOD）',
      releaseDate: '2026-07-21',
      actress: '宮下玲奈',
    },
    {
      id: 'JUR-816',
      javdbId: 'z4Vp0b',
      originalTitle:
        'Madonna電撃専属 春原未来 本能を揺さぶる接吻と理性を壊す超濃厚中出し3本番 （BOD）',
      releaseDate: '2026-07-28',
      actress: '春原未来',
    },
    {
      id: 'KTB-119',
      javdbId: 'a83dkp',
      originalTitle:
        '性処理派遣OLのお仕事2♪クレーム処理編 長身美尻OLゆいかさんはクレーム処理中ならオッパイもお口もアソコも使い放題！ 小野坂ゆいか',
      releaseDate: '2026-07-07',
      actress: '小野坂唯花(小野坂唯香)',
    },
    {
      id: 'DVMM-422',
      javdbId: 'vezv19',
      originalTitle:
        'Kカップ爆乳×デカ尻×バキューム痴女 どすけべ乳輪肉食水泳コーチがじゅぼじゅぼノーハンドフェラ指導 二羽紗愛',
      releaseDate: '2026-07-21',
      actress: '二羽紗愛',
    },
    {
      id: 'SNOS-308',
      javdbId: 'mOD6nD',
      originalTitle:
        '陽キャの悪ノリに便乗して こっそりオッパイ触ってた奥手な僕が ついに憧れの寮母さんとおこぼれSEXさせてもらえた話。 みなみ羽琉 （BOD）',
      releaseDate: '2026-07-28',
      actress: '南羽琉（湊羽琉）',
    },
    {
      id: 'ABF-364',
      javdbId: 'Yw3dge',
      originalTitle: '平日女教師、週末オナホ。 鈴村あいり',
      releaseDate: '2026-07-02',
      actress: '鈴村愛里',
    },
    {
      id: 'SNOS-301',
      javdbId: 'z4Vpg7',
      originalTitle:
        '【主従逆転】仕えるだけじゃ物足りない。本当はわたくしに支配されたいんでしょう？ 浅野こころ （BOD）',
      releaseDate: '2026-07-28',
      actress: '淺野心',
    },
    {
      id: 'SNOS-269',
      javdbId: '96nkAV',
      originalTitle:
        '【FANZA限定】高級デリヘル呼んだら憧れのレジェンドグラドル金松季歩と奇跡の鉢合わせそのまま秘密の関係に… （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-07-15',
      actress: '金松季步',
    },
    {
      id: 'EBWH-342',
      javdbId: 'a83Y1R',
      originalTitle:
        '防犯カメラに映る「僕の知らない柏木さん」客・バイト・業者・クレーマー…あらゆるチ●ポにまんざらでもない顔で穴を貸す時給1，050円のパート妻 柏木ふみか',
      releaseDate: '2026-07-21',
      actress: '柏木文香',
    },
    {
      id: 'SNOS-271',
      javdbId: 'e8D6yp',
      originalTitle:
        '出張先ホテルで令和のゆるムチ生意気新卒と相部屋に…媚薬と昭和の絶倫チ●ポでこの社会の厳しさを分からせてやった。 渡部ほの （BOD）',
      releaseDate: '2026-07-28',
      actress: '渡部穗乃',
    },
    {
      id: 'MIDA-686',
      javdbId: 'deDpm5',
      originalTitle:
        '【FANZA限定】射精大好きユウト君と欲求不満Jcupお姉ちゃんの新婚中出しごっこ 百田光稀 生写真2枚セット',
      releaseDate: '2026-07-08',
      actress: '百田光希',
    },
  ],
  '2026-08': [
    {
      id: 'SNOS-334',
      javdbId: 'nK7zbV',
      originalTitle:
        '最強ビジュOLさん、出張先で死ぬほど嫌いな中年上司と相部屋… でも過激セクハラにまさかの快楽堕ちしちゃう！ 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-08-12',
      actress: '瀨戶環奈',
    },
    {
      id: 'IPZZ-932',
      javdbId: 'NQkPaw',
      originalTitle:
        '仕事が終わらず普段厳しい社長秘書の家へお泊まり…酒の勢いで襲ってしまったら僕のチ●ポで感じまくる普段とのギャップが可愛過ぎて翌日も朝勃ち止まらずヤリまくってしまった 生写真3枚セット',
      releaseDate: '2026-08-12',
      actress: '楓カレン',
    },
    {
      id: 'MIDA-732',
      javdbId: 'nK7eRe',
      originalTitle:
        '訪問先の異常なワケアリ住人に卑猥ランジェリーを着させられ監禁調教にイキ堕ちた地味メガネ美乳介護士 八木奈々 （BOD）',
      releaseDate: '2026-08-04',
      actress: '八木奈々',
    },
    {
      id: 'SNOS-335',
      javdbId: 'deq539',
      originalTitle:
        '「アナタの痴●なしじゃ生きていけない…」生真面目な女性教師が初めての電車痴●でまさかの官能テクとスリルの虜に。 木村愛心 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-08-26',
      actress: '木村愛心',
    },
    {
      id: 'MIDA-727',
      javdbId: 'DRX262',
      originalTitle:
        '「君の綺麗なオッパイをザーメンや唾液でベトベトにしてあげるね」隣のゴミ部屋に監禁された爆乳OLは異常性欲オヤジの精液ぶっかけ種付けレ×プで汚されてイク… 百田光稀 生写真3枚セット',
      releaseDate: '2026-08-05',
      actress: '百田光希',
    },
    {
      id: 'DSOD-001',
      javdbId: 'gy3qmA',
      originalTitle:
        'イカセゲーム2 大嫌いな男たちにイカされ狂わされた巨乳彼女。 美園和花 由良かな 中丸未来 松丸香澄 柊もみじ',
      releaseDate: '2026-08-11',
      actress: '美園和花',
    },
    {
      id: 'MNGS-076',
      javdbId: 'wK777n',
      originalTitle:
        'ドコでも即ハメおねだり中出しOKレンタル彼女～恋人代行なのに利用時間が過ぎても帰してくれない性欲ビースト24時～ 美園和花 （BOD）',
      releaseDate: '2026-08-18',
      actress: '美園和花',
    },
    {
      id: 'CJOD-591',
      javdbId: 'r37G7N',
      originalTitle: 'M男専用密着ささやき淫語で何度もヌカれちゃう無制限射精ソープ 結城りの',
      releaseDate: '2026-08-25',
      actress: '結城梨乃',
    },
    {
      id: 'WAAA-679',
      javdbId: '7yQ6nZ',
      originalTitle: '「もうイッてるってばぁ！」状態で何度も中出し！ 結城りの',
      releaseDate: '2026-08-04',
      actress: '結城梨乃',
    },
    {
      id: 'SNOS-309',
      javdbId: 'P9m2zE',
      originalTitle:
        '大停電の夜に…美人上司と二人きり 憧れの巨乳と色気と暗闇に理性を失い夜が明けるまで一晩中射精しまくった 金松季歩 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-08-12',
      actress: '金松季歩',
    },
    {
      id: 'CAWD-989',
      javdbId: '82JVYa',
      originalTitle:
        '女教師は言いなりスクール水着。男生徒に逆らえず学生スク水で辱められ卒業するまで水泳部専用の肉オナホにされました。 伊藤舞雪',
      releaseDate: '2026-08-04',
      actress: '伊藤舞雪',
    },
    {
      id: 'FPRE-239',
      javdbId: 'veqqyp',
      originalTitle:
        '【FANZA限定】女上司と相部屋！新婚の僕をアナル丸見えポーズで強●勃起させて●す淫語痴女 菊乃らん 生写真2枚セット',
      releaseDate: '2026-08-19',
      actress: '菊乃蘭',
    },
    {
      id: 'SNOS-365',
      javdbId: '82JREx',
      originalTitle:
        '濡れ透けピンク乳首がいつも見えちゃうズブ濡れドジっ娘がエッロ！！ 白上咲花 生写真3枚セット',
      releaseDate: '2026-08-26',
      actress: '白上咲花',
    },
    {
      id: 'IPZZ-907',
      javdbId: 'e8NO31',
      originalTitle: '明日葉みつは史上【最大絶頂】 中出し解禁 生ハメオーガズム （BOD）',
      releaseDate: '2026-08-11',
      actress: '明日葉三葉',
    },
    {
      id: 'EBWH-353',
      javdbId: '4DEEmZ',
      originalTitle:
        '「私たちオープンマリッジだからセーフっしょ？笑」 夫公認！？ 免罪符にSNSに群がる種付け男達と対戦しまくる勘違いヤリ妻×2の入れ食いナマFUCK 小花のん 莉々はるか',
      releaseDate: '2026-08-18',
      actress: '小花暖、莉莉遙香',
    },
    {
      id: 'SNOS-373',
      javdbId: 'KkpEqQ',
      originalTitle: '超・新人！！スーパー美乳ボディ 早坂奏音のドキドキ風俗体験',
      releaseDate: '2026-08-25',
      actress: '早坂奏音',
    },
    {
      id: 'JUR-102',
      javdbId: 'e8NO1E',
      originalTitle:
        '【FANZA限定】世界でいちばん熱い夏、きっとアナタは彼女に恋をする。Madonna超大型新人 山田ゆり 28 歳 AV DEBUT 生写真とパンツセット',
      releaseDate: '2026-08-12',
      actress: '山田百合',
    },
    {
      id: 'SNOS-321',
      javdbId: '96QqMR',
      originalTitle:
        '弱みを握られた元グラドルの水泳部顧問は今日もギリギリ限界の水着で犯●れる 紫堂るい',
      releaseDate: '2026-08-11',
      actress: '紫堂留衣',
    },
    {
      id: 'SNOS-065',
      javdbId: 'ZNzdMX',
      originalTitle:
        '就職した水着メーカーは女性社員が水着姿の世界。 勃起してもLカップの世話焼き上司・田野さんが金玉カラッカラになるまでヌイてくれる。 田野憂 （BOD）',
      releaseDate: '2026-08-11',
      actress: '田野憂',
    },
    {
      id: 'MIDA-762',
      javdbId: 'V4zwgA',
      originalTitle: '巨根ピストン大絶頂 初体験の限界拡張おま●こ快感 石川澪 生写真4枚セット',
      releaseDate: '2026-08-05',
      actress: '石川澪',
    },
    {
      id: 'MNGS-057',
      javdbId: 'XezWgG',
      originalTitle:
        '【FANZA限定】性処理で家賃格安スケベ女子向け 顔・胸・膣・尻穴いつでもぶっかけOK肉オナホ付きシェアハウス 七瀬アリス 生写真3枚セット',
      releaseDate: '2026-08-05',
      actress: '七瀬愛麗絲',
    },
    {
      id: 'MIDA-735',
      javdbId: 'AqXzJw',
      originalTitle:
        '【FANZA限定】妻が絶対にさせてくれない顔射を妻の親友が射精直後も敏感チ○ポこねくりお掃除フェラ10連発ヌいてくれた。 松本いちか 生写真3枚セット',
      releaseDate: '2026-08-05',
      actress: '松本一香',
    },
    {
      id: 'CAWB-012',
      javdbId: 'GZQMqq',
      originalTitle:
        '【FANZA限定】【重大発表】ウエスト52cm 美乳くびれボディ 美しき天才バレリーナ ようやく中出し大解禁 50発超エロティシズム 清野咲 生写真3枚セット',
      releaseDate: '2026-08-05',
      actress: '清野咲',
    },
    {
      id: 'MIDA-703',
      javdbId: 'gy33eE',
      originalTitle:
        '親戚にメスガキ呼ばわりされている私だけどうんと年下のエロショタにヒィヒィ言わされて…マジ最悪だったよぉぉ～！ 七沢みあ 生写真2枚セット',
      releaseDate: '2026-08-19',
      actress: '七澤米亞',
    },
    {
      id: 'ABF-376',
      javdbId: 'V4zzYQ',
      originalTitle: '新人女子アナ 『性』いっぱい頑張りますっ…！！ 涼森れむ',
      releaseDate: '2026-08-13',
      actress: '涼森玲夢',
    },
    {
      id: 'MIDA-728',
      javdbId: 'nK7e86',
      originalTitle:
        '担任教師の僕は生徒の誘惑に負けて放課後ラブホで何度も、何度も、セックスしてしまった… 井上もも 生写真3枚セット',
      releaseDate: '2026-08-05',
      actress: '井上桃',
    },
    {
      id: 'SNOS-352',
      javdbId: 'Ywz2xK',
      originalTitle:
        '男性客の顔におっぱい当てまくるHカップ美容師さん、指名が欲しいの？チンチン欲しいの？どっちも欲しいの？ 夢乃あいか 生写真3枚セット',
      releaseDate: '2026-08-26',
      actress: '夢乃愛華',
    },
    {
      id: 'ADN-801',
      javdbId: 'z4ZKgb',
      originalTitle:
        '「お店のコンドームが無くなるまでエッチしよっ！」 誤発注で在庫過多になってしまったコンドームを使い切るまで、 見た目は清楚なのに意外とビッチなコンビニバイトの女子大生に毎日枯れるほど抜いてもらう話。',
      releaseDate: '2026-08-04',
      actress: '彩月七緒',
    },
    {
      id: 'ABF-378',
      javdbId: 'P9mOMe',
      originalTitle: '俺に沼ってる最高の女。-男本位の避妊なし中出しSEX- 河合あすな',
      releaseDate: '2026-08-20',
      actress: '河合明日菜',
    },
  ],
  '2026-09': [
    {
      id: 'SNOS-377',
      javdbId: 'nK7mNX',
      originalTitle:
        '「今日はアブノーマルなエッチがしたい…」 そう甘えるCA彼女を無茶苦茶にしたらドMに目覚めた 河北彩花 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-09-23',
      actress: '河北彩花',
    },
    {
      id: 'EBWH-352',
      javdbId: 'P9mpdN',
      originalTitle:
        'チ○ポ出して整列しなさい！先生たちがエッチな水着で痴女ってあげる 清宮仁愛 百田光稀',
      releaseDate: '2026-09-15',
      actress: '清宫仁爱、百田光希',
    },
    {
      id: 'DSOD-060',
      javdbId: 'e8Nwnp',
      originalTitle:
        '優しさこぼれ落ちるほどの超乳彼女がDQNな先輩に寝取られ種付けプレスされていた。 彩月七緒',
      releaseDate: '2026-09-08',
      actress: '彩月七绪',
    },
    {
      id: 'SNOS-355',
      javdbId: 'bKzNxB',
      originalTitle:
        'おっとりグラドル紫堂るい ねっとり接吻と柔らかIcupを武器に人生初の痴女に挑戦。',
      releaseDate: '2026-09-08',
      actress: '紫堂留衣',
    },
    {
      id: 'IPZZ-916',
      javdbId: 'ZNzk58',
      originalTitle:
        '高貴な美人秘書がトラブルで真夏に電車通勤 弱者の汗だく肉体労働者の立場逆転サイレント痴●レ×プに屈する 三澄寧々 （BOD）',
      releaseDate: '2026-09-08',
      actress: '三澄宁宁',
    },
    {
      id: 'MIDA-814',
      javdbId: 'DRX1yM',
      originalTitle:
        '性欲強すぎて夫に逃げられ、田舎に離婚帰省した発情期のケダモノ痴女に汗ダックダクで貪り犯●れた夏 （BOD）',
      releaseDate: '2026-09-01',
      actress: '神宫寺奈绪',
    },
    {
      id: 'ACHJ-089',
      javdbId: 'wK7RBn',
      originalTitle:
        '童貞の僕が変態と化したワケ…隣に住む美しい人妻に「これが普通よ！」と教え込まれた七つの調教 （BOD）',
      releaseDate: '2026-09-08',
      actress: '惠理',
    },
    {
      id: 'SNOS-374',
      javdbId: 'kKrXrN',
      originalTitle:
        '【FANZA限定】美人の自覚ありまくりの女医さん、色気全開で患者がギンギンになったら…ペニスマッサージまでしてあ・げ・る 川越にこ 生写真3枚セット',
      releaseDate: '2026-09-09',
      actress: '川越仁子',
    },
    {
      id: 'JUR-854',
      javdbId: '7yQpdR',
      originalTitle:
        '世界を股にかけるイイオンナ 水川スミレ 引退 発情密着お泊りデート＆別れを惜しむ中出しSEX',
      releaseDate: '2026-09-29',
      actress: '水川堇',
    },
    {
      id: 'SNOS-397',
      javdbId: 'xA3yd6',
      originalTitle:
        '【FANZA限定】【深夜コンビニのレジ越しで】バイトの僕をとろけ堕ちさせるホロ酔い夜系お姉さんのねっとり甘々お酒混じりベロチュウ誘惑 倉木華 生写真3枚セット',
      releaseDate: '2026-09-23',
      actress: '仓木华',
    },
    {
      id: 'SNOS-310',
      javdbId: 'pk7ZYq',
      originalTitle:
        '【FANZA限定】グラビアボディとめちゃかワご奉仕で思わず恋に落ちちゃうぞ博多彩葉の新時代風俗6 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-09-09',
      actress: '博多彩叶',
    },
    {
      id: 'IPZZ-934',
      javdbId: 'wK7ZEe',
      originalTitle:
        'フラれた元カノが幸せでムカつくから悪友たちと家凸して今彼の前で輪●してみた 楓カレン 生写真3枚セット',
      releaseDate: '2026-09-02',
      actress: '枫可怜',
    },
    {
      id: 'PRPM-002',
      javdbId: 'mO7YEZ',
      originalTitle: '濃厚親父×姉妹洗脳 私達、新しいお義父さんの性玩具。 逢沢みゆ 彩月七緒',
      releaseDate: '2026-09-15',
      actress: '逢泽美优、彩月七绪',
    },
    {
      id: 'SNOS-336',
      javdbId: '96QVQX',
      originalTitle: '異世界から召喚されたとろけるLcupのメイド 田野憂 生写真3枚セット',
      releaseDate: '2026-09-09',
      actress: '田野忧',
    },
    {
      id: 'SNOS-385',
      javdbId: '0eE3EX',
      originalTitle:
        'おっぱいリモバイお散歩 Lcupデカ乳首に玩具ハメて公共の場を連れ回し！声出し厳禁、ビクビク喘ぎ、強●羞恥エクスタシー 木村愛心',
      releaseDate: '2026-09-29',
      actress: '木村爱心',
    },
    {
      id: 'MIDA-781',
      javdbId: 'kKrn5Y',
      originalTitle:
        '「フェラチオだ～いすき」親の再婚で家族になった思春期のチンしゃぶ義妹は卑猥コスで竿ねだり お掃除も最後の一滴までじゅるる 奥井千晴 （BOD）',
      releaseDate: '2026-09-15',
      actress: '奥井千晴',
    },
    {
      id: 'SNOS-403',
      javdbId: '5naVZ9',
      originalTitle:
        '【FANZA限定】授業中ですら隠れオナニーする思春期ドバドバ性ホルモン少女から毎日校内でこっそりハメられちゃう同級生の僕。 白上咲花 生写真3枚セット',
      releaseDate: '2026-09-23',
      actress: '白上咲花',
    },
    {
      id: 'SNOS-313',
      javdbId: 'ZNzk9q',
      originalTitle:
        '最強ヒロインの全部でオナニーしようよ【ベロキス・フェラ・パイズリ・手コキ・脚コキ・美顔面・おま●こ特化】全身全技ズリネタコンプリート 極上オナニーサポート 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-09-09',
      actress: '濑户环奈',
    },
    {
      id: 'MNGS-066',
      javdbId: 'a8KpaW',
      originalTitle:
        '【FANZA限定】「お金も身長も顔面も自信ないなら…チ●ポで勝つしかないでしょう？」 非モテダメンズを緩急ヤバすぎ寸止めおま●こ騎乗位教育＆アメムチ淫語指導で爆モテチ●ポにしちゃうスパルタ痴女婚活アドバイザー 七瀬アリス 生写真3枚セット',
      releaseDate: '2026-09-02',
      actress: '七濑爱丽丝',
    },
    {
      id: 'SNOS-398',
      javdbId: 'V4z5mX',
      originalTitle:
        '規律と道徳、そして秩序を重んじる新しく派遣されてきたPTAの鷲尾さんが度を超えて厳しくてクソ爆乳でとにかくエロい。 生写真3枚セット',
      releaseDate: '2026-09-23',
      actress: '鹫尾芽衣',
    },
    {
      id: 'IPZZ-960',
      javdbId: 'DRXeEJ',
      originalTitle:
        '就職先は‘勤務中エロコス着用義務’の刺激強すぎピンクホワイト企業！？ もし勃起しても美人爆乳社長がシモの世話までしてくれる手厚い職場です ひなの花音 （BOD）',
      releaseDate: '2026-09-08',
      actress: '雏乃花音',
    },
    {
      id: 'MIDA-790',
      javdbId: 'YwzW1b',
      originalTitle:
        '【FANZA限定】二股学園-SIDEうんぱい- 2つの物語が交わる青春三角関係中出し 2作品連動企画・第1弾 うんぱい 松本いちか 生写真2枚セット',
      releaseDate: '2026-09-16',
      actress: '松本一香、Unpai',
    },
    {
      id: 'SNOS-405',
      javdbId: 'r37WMN',
      originalTitle:
        '人混みで揉まれた快感が忘れられずノーブラで満員車両に乗り込む痴●サレたいスケベOL 夢乃あいか 生写真3枚セット',
      releaseDate: '2026-09-23',
      actress: '梦乃爱华',
    },
    {
      id: 'IPZZ-902',
      javdbId: '96Qmpq',
      originalTitle: 'DIGITAL CHANNEL DC145 長浜みつり 初ぶっかけ解禁 （BOD）',
      releaseDate: '2026-09-01',
      actress: '长滨蜜璃',
    },
    {
      id: 'EBWH-343',
      javdbId: 'YwzzG8',
      originalTitle:
        '【FANZA限定】救助まで100時間、極限の廃墟 男たちの性欲を喰らい尽くし、彼女は女王になった 清宮仁愛 生写真3枚セット',
      releaseDate: '2026-08-19',
      actress: '清宫仁爱',
    },
    {
      id: 'JUR-822',
      javdbId: 'EbOeE4',
      originalTitle:
        '妻には口が裂けても言えません、義母さんを孕ませてしまったなんて…。-1泊2日の温泉旅行で、我を忘れて中出ししまくった僕。- （BOD）',
      releaseDate: '2026-09-08',
      actress: '一花',
    },
  ],
};

var DMM_MONTHLY_DATA_2026_06 = [
    {
      rank: 1,
      cid: 'SQTE-633',
      javdbId: 'deGg95',
      originalTitle: 'いつでも使えるオナホ後輩 依本しおり',
      releaseDate: '2025-10-21',
      actress: '依本しおり',
    },
    {
      rank: 2,
      cid: 'SNOS-183',
      javdbId: 'AqnZBM',
      originalTitle:
        '最強ヒロインと 一緒に終電逃して ホテル泊まって 朝までヤリたい！ 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-13',
      actress: '瀬戸環奈',
    },
    {
      rank: 3,
      cid: 'SONE-615',
      javdbId: 'DROqWa',
      originalTitle: '最強ヒロインAV初体験3本番 瀬戸環奈',
      releaseDate: '2025-03-11',
      actress: '瀬戸環奈',
    },
    {
      rank: 4,
      cid: 'SNOS-093',
      javdbId: 'OXr49A',
      originalTitle:
        '彼女の妹は最強ヒロイン！？ 僕を好きになりコッソリ迫られる 世界最高の浮気誘惑 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '瀬戸環奈',
    },
    {
      rank: 5,
      cid: 'SNOS-038',
      javdbId: 'BzV2a9',
      originalTitle:
        'AVデビュー1周年記念作品 最強ヒロインとSEXできるファン感謝祭 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '瀬戸環奈',
    },
    {
      rank: 6,
      cid: 'VRKM-1777',
      javdbId: 'z4VRn6',
      originalTitle:
        '【VR】2016～2026KMPVR10周年記念珠玉の名作を大量収録！！2000分アニバーサリーBOX 8KVer.',
      releaseDate: '2026-04-17',
    },
    {
      rank: 7,
      cid: 'NQTD-022',
      javdbId: 'kKyyOY',
      originalTitle:
        '【超お得90％OFF！！】コスパ最強ベストバイ福袋1200分DXBOX厳選10作品ノーカット収録（NQTD-022）',
      releaseDate: '2025-05-20',
    },
    {
      rank: 8,
      cid: 'OFJE-594',
      javdbId: '5nmPxz',
      originalTitle:
        'S1オールスター23名大集合 全7タイトル全部入り 完全ベスト版16時間 未公開の40人越え乱交初収録 （ブルーレイディスク）',
      releaseDate: '2025-12-30',
      actress: '河北彩花 他',
    },
    {
      rank: 9,
      cid: 'SNOS-149',
      javdbId: '82ZzAO',
      originalTitle:
        '新時代グラドル絶頂解禁 震えが止まらない初絶頂でイクッ！未体験3本番 博多彩葉 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-13',
      actress: '博多彩葉',
    },
    {
      rank: 10,
      cid: 'MIDA-459',
      javdbId: '96yg9q',
      originalTitle:
        '潤んだ瞳にドキドキ、可愛い仕草に胸キュン、美しい裸体にビンビン、勃ったら即尺【全編主観】【射精無制限】究極の全裸メイド 石川澪 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-07',
      actress: '石川澪',
    },
    {
      rank: 11,
      cid: 'SAVR-1001',
      javdbId: '82ZndV',
      originalTitle:
        '【VR】「孕ませオンナ絶対宅配クラブ」大人を舐め腐ったトー○地雷系ミナちゃんが嫌々ながらも膣穴ザーメン漬けにされる末路',
      releaseDate: '2026-03-20',
    },
    {
      rank: 12,
      cid: 'OFJE-512',
      javdbId: 'YwqX4e',
      originalTitle:
        'キングオブエロ痴女優21人 トップ美女たちがSEXを！快感を！思う存分楽しむ 女性上位のアンアン イクイク 騎乗位100 （ブルーレイディスク）',
      releaseDate: '2025-05-27',
      actress: '河北彩花 他',
    },
    {
      rank: 13,
      cid: 'MIZD-432',
      javdbId: '2mKmkW',
      originalTitle: '水卜さくら12時間12作品ベストVol.4',
      releaseDate: '2025-04-01',
      actress: '水卜さくら',
    },
    {
      rank: 14,
      cid: 'MIZD-441',
      javdbId: 'pkPwqb',
      originalTitle: '篠田ゆう MOODYZ完全版 極コンプリート1440分BEST',
      releaseDate: '2025-03-18',
      actress: '篠田ゆう',
    },
    {
      rank: 15,
      cid: 'SNOS-233',
      javdbId: 'P91MB9',
      originalTitle: '‘あの’河北彩伽とお泊まりデートで痴女られたら1日20発は余裕だよね？',
      releaseDate: '2026-05-26',
      actress: '河北彩花',
    },
    {
      rank: 16,
      cid: 'MIDA-470',
      javdbId: 'P9GrN0',
      originalTitle:
        '国宝級美少女 アヘアヘ放心淫れイキ4本番 福田ゆあ （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-07',
      actress: '福田ゆあ',
    },
    {
      rank: 17,
      cid: 'SNOS-037',
      javdbId: 'wKV24B',
      originalTitle:
        'グラドルと同棲生活しちゃう？ 紫堂るいの完全主観オナニーサポート （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '紫堂るい',
    },
    {
      rank: 18,
      cid: 'HSODA-098',
      javdbId: '6dR7wE',
      originalTitle:
        '制服を脱いだ彼女は僕だけのもの。深夜のコンビニで一緒に働くことになった美少女と生中セックス。 望実かなえ',
      releaseDate: '2026-01-13',
      actress: '望実かなえ',
    },
    {
      rank: 19,
      cid: 'MIMK-267',
      javdbId: 'Ebnwx4',
      originalTitle:
        'シリーズ累計販売数800万部 カラミざかり同窓会編 【MOODYZ創立25周年作品】 石川澪 生写真2枚セット',
      releaseDate: '2026-05-06',
      actress: '石川澪',
    },
    {
      rank: 20,
      cid: 'START-373',
      javdbId: 'yxn5da',
      originalTitle:
        '息子が通う保育園の美人保育士と妻子が実家に帰省中に自宅密会をして1週間ヤリまくった自宅密会で絶倫不倫セックス 青空ひかり',
      releaseDate: '2025-08-05',
      actress: '青空ひかり',
    },
    {
      rank: 21,
      cid: 'MIRD-253',
      javdbId: 'OXKbpA',
      originalTitle:
        'MOODYZファン感謝祭 バコバコバスツアー2025 素人17名とAV女優17名の1泊2日大乱交 新世代AVオールスター覚醒！ （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-03-19',
      actress: '小野六花 他',
    },
    {
      rank: 22,
      cid: 'SQTE-683',
      javdbId: 'GZPZED',
      originalTitle: 'いつでも使えるオナホ後輩 花守夏歩',
      releaseDate: '2026-05-19',
      actress: '花守夏歩',
    },
    {
      rank: 23,
      cid: 'SIVR-444',
      javdbId: '1A8YRd',
      originalTitle:
        '【VR】VR NO.1 STYLE 最強ヒロイン 瀬戸環奈 解禁 せとかんとSEXできるVR 瀬戸環奈',
      releaseDate: '2025-09-11',
      actress: '瀬戸環奈',
    },
    {
      rank: 24,
      cid: 'BLOR-289',
      javdbId: 'e87Yyd',
      originalTitle:
        'ドSな美人絵師さん 男を責めるのが趣味の強めクールビューティーがチ●ポ堕ち 最初は余裕たっぷりだったが、正確な巨根ピストン喰らい続け メス顔晒してイってしまう！',
      releaseDate: '2026-02-24',
    },
    {
      rank: 25,
      cid: 'NAMH-064',
      javdbId: 'EbPOWQ',
      originalTitle: '元気なパイパン膣に13発 はじめての真正中出し解禁 花守夏歩',
      releaseDate: '2026-06-04',
      actress: '花守夏歩',
    },
    {
      rank: 26,
      cid: 'ADN-762',
      javdbId: '4Dxv7p',
      originalTitle: 'あなたの為に、私は… 不倫の言い訳を探す汗まみれの若妻 幸村泉希',
      releaseDate: '2026-03-03',
      actress: '幸村泉希',
    },
    {
      rank: 27,
      cid: 'MIMK-159',
      javdbId: 'xAvRAn',
      originalTitle:
        'アタシがヌいてあげよっか？-実写版- 原作:暗中模索 即10，000部突破の快作！ 五日市芽依 （BOD）',
      releaseDate: '2024-05-21',
      actress: '五日市芽依',
    },
    {
      rank: 28,
      cid: 'SAVR-1028',
      javdbId: 'MbKgp4',
      originalTitle:
        '【VR】【KMPVR-彩-1，000タイトル突破記念版】果てたら負け！何度射精してもクラスの女子が目の色を変えて僕をイカせまくる学園SEXバトルロワイヤル',
      releaseDate: '2026-04-09',
      actress: '小那海あや 他',
    },
    {
      rank: 29,
      cid: 'SODS-082',
      javdbId: 'r34n3A',
      originalTitle:
        'MINAMO 初総集編！超大型新人としてAV DEBUTを飾った唯一無二のSODSTAR 25タイトル豪華10時間スペシャル',
      releaseDate: '2026-01-20',
      actress: 'MINAMO',
    },
    {
      rank: 30,
      cid: 'DSS-246',
      javdbId: '5nNnEz',
      originalTitle:
        '素人ナンパGET！！No.246 ハロウィンクイーンのイタズラじゃ済まない絶頂ソニック編',
      releaseDate: '2026-05-05',
    },
    {
      rank: 31,
      cid: 'SONE-641',
      javdbId: 'e8pz4b',
      originalTitle:
        '就職した水着メーカーは女性社員が水着姿の世界。勃起してもKカップの教育担当・鷲尾さんが抜いてくれるのでボクの金玉は毎日カラッポ 鷲尾めい （BOD）',
      releaseDate: '2025-02-25',
      actress: '鷲尾めい',
    },
    {
      rank: 32,
      cid: 'SNOS-166',
      javdbId: 'RkX3Rp',
      originalTitle:
        '「ご主人様、私にかけて」僕のチ●ポが好きすぎて生搾りザーメン奪い合う顔射おねだりWメイド 安達夕莉 新木希空 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-13',
      actress: '安達夕莉,新木希空',
    },
    {
      rank: 33,
      cid: 'SGKI-080',
      javdbId: '5nbD8z',
      originalTitle:
        'ここで撮影した写真を貼れば絶対合格するというピストンバイブ証明写真ボックス 大学受験前の顔面SS級女子学生がどんなに突かれても笑顔をキープ',
      releaseDate: '2026-02-19',
    },
    {
      rank: 34,
      cid: 'SONE-638',
      javdbId: 'RkG2b8',
      originalTitle:
        '最強ヒロインの素顔とリアルセックスが見たい！筋書きなしで性欲のままに何度もずっと求め合うエロくて生々しい2泊3日SEXデート 瀬戸環奈',
      releaseDate: '2025-04-08',
      actress: '瀬戸環奈',
    },
    {
      rank: 35,
      cid: 'STZY-019',
      javdbId: 'DRN64a',
      originalTitle:
        'AVデビュー前の秘蔵映像公開！Iカップシャカリキアルバイター女子大学生（20）小笠原菜乃',
      releaseDate: '2025-09-29',
      actress: '小笠原菜乃',
    },
    {
      rank: 36,
      cid: 'MIDA-533',
      javdbId: 'z4b9O7',
      originalTitle:
        'いつでもどこでもマ○コ丸出し卑猥ポーズいつでも使える僕専用オナホ生徒 石川澪 （ブルーレイディスク） 生写真2枚セット',
      releaseDate: '2026-03-04',
      actress: '石川澪',
    },
    {
      rank: 37,
      cid: 'NAMH-038',
      javdbId: 'gyzrKE',
      originalTitle: '元アイドルが奇跡の13発 はじめての真正中出し解禁 本城はな',
      releaseDate: '2025-09-24',
      actress: '本城はな',
    },
    {
      rank: 38,
      cid: '3DSVR-1786',
      javdbId: '6dRGAZ',
      originalTitle:
        '【VR】【8K】VR CHANNEL 007 8KVR MINAMOを感じる5コーナー（身体、尻、素、口、顔）',
      releaseDate: '2025-11-30',
      actress: 'MINAMO',
    },
    {
      rank: 39,
      cid: 'PFES-115',
      javdbId: 'DRnkPJ',
      originalTitle:
        '【Hカップおっとり妹系】【Jカップイケイケギャル】【Iカップ甘やかしお姉さん】 会社の先パイ3人に誘われ男はボクひとり！？囲まれ挟まれ揉んで甘えて、、爆乳だらけのハーレム女子旅 莉々はるか 清宮仁愛 柏木ふみか （ブルーレイディスク）',
      releaseDate: '2026-03-31',
      actress: '莉々はるか 他',
    },
    {
      rank: 40,
      cid: 'MKMP-660',
      javdbId: '1A47p4',
      originalTitle:
        'いつでもどこでも呼びつけたらすぐに駆け付ける 抱き心地最高の都合のいい地味セフレ 羽月乃蒼',
      releaseDate: '2025-08-12',
      actress: '羽月乃蒼',
    },
    {
      rank: 41,
      cid: 'START-285V',
      javdbId: 'Ww3YRQ',
      originalTitle:
        '一泊二日で13発射精しちゃうヤリまくりイチャイチャ温泉旅行 神木麗【特典映像付き】',
      releaseDate: '2025-04-10',
      actress: '神木麗',
    },
    {
      rank: 42,
      cid: 'MURIKURI-009',
      javdbId: 'gyQ9RE',
      originalTitle:
        '「水泳部J●痴●ガチナマ路線 引き締まったマ●コを生精子で汚されていく人生初中出し指導」',
      releaseDate: '2026-05-07',
    },
    {
      rank: 43,
      cid: 'MIDA-493',
      javdbId: 'a8eJMp',
      originalTitle: '井上もも 奇跡のザ・原石 AV DEBUT （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-07',
      actress: '井上もも',
    },
    {
      rank: 44,
      cid: 'SONE-682',
      javdbId: 'pkxmQk',
      originalTitle: '最強ヒロインの潜在的エロス爆発 瀬戸環奈',
      releaseDate: '2025-05-13',
      actress: '瀬戸環奈',
    },
    {
      rank: 45,
      cid: 'MIRD-277',
      javdbId: 'Ebnw8Q',
      originalTitle:
        'MOODYZファン感謝祭バコバコバスツアー2026 25周年専属大集合！大乱交！大感謝スペシャル！',
      releaseDate: '2026-05-19',
      actress: '八木奈々 他',
    },
    {
      rank: 46,
      cid: 'SIVR-467',
      javdbId: '96pBnV',
      originalTitle:
        '【VR】VR NO.1 STYLE 紫堂るい 解禁 アナザーストーリー 家庭教師が憧れの天然Icupグラビアアイドルだったら…',
      releaseDate: '2026-02-03',
      actress: '紫堂るい',
    },
    {
      rank: 47,
      cid: 'URVRSP-527',
      javdbId: 'deQw3M',
      originalTitle:
        '【VR】【8K】特別な検査でカラダの全てを確認してくれる人間ドックで、業務だからと何度も精子を抜いてくるナースさんたちに倒れるまで抜き倒された',
      releaseDate: '2026-02-06',
      actress: '西元めいさ',
    },
    {
      rank: 48,
      cid: 'RKI-698',
      javdbId: '96dX4E',
      originalTitle:
        'もう一度、してみたい。 性格は最悪だけどチ〇ポだけは超好み。身体の相性が最高すぎてまさかのリピートで生姦SEXヤリまくり 逢沢みゆ',
      releaseDate: '2025-03-11',
      actress: '逢沢みゆ',
    },
    {
      rank: 49,
      cid: 'MIZD-502',
      javdbId: '5nmEaB',
      originalTitle:
        '愛憎渦巻く至高の青春NTRドラマ カラミざかり8時間BEST 小野六花 石原希望 伊藤舞雪 八木奈々',
      releaseDate: '2025-12-02',
      actress: '小野六花 他',
    },
    {
      rank: 50,
      cid: 'GQHB-024',
      javdbId: '6dWJ0n',
      originalTitle:
        '【超放尿1266分】美少女・美熟女がカメラの前で見せつけるおしっこ935連発 総尿量241，045mlの大放出！',
      releaseDate: '2026-03-31',
      actress: '美園和花',
    },
    {
      rank: 51,
      cid: 'HRSM-087',
      javdbId: 'r3OWXJ',
      originalTitle:
        '「寝起きでSEXしよ？」すっぴんだってカワイイ彼女を目覚ましイタズラ生中出しww パンティと生写真付き',
      releaseDate: '2025-03-14',
    },
    {
      rank: 52,
      cid: 'NTRH-006',
      javdbId: 'QN24xK',
      originalTitle:
        '担任教師のコトが大好きな生徒の私は放課後ラブホへ先生拉致って、ビッタンビッタン杭打ちまたがり何度も、何度も、中出しさせるの 逢沢みゆ （ブルーレイディスク）',
      releaseDate: '2025-12-30',
      actress: '逢沢みゆ',
    },
    {
      rank: 53,
      cid: 'FKAW-004',
      javdbId: 'e8EQ5p',
      originalTitle: '無許可でドピュ！フェラうま素人娘にいきなり口内射精！4 18名',
      releaseDate: '2025-10-19',
    },
    {
      rank: 54,
      cid: 'PRED-759',
      javdbId: 'J0AeBq',
      originalTitle: '濃厚親父×姉妹洗脳 私達、新しいお義父さんの性玩具。 北岡果林 天馬ゆい',
      releaseDate: '2025-05-20',
      actress: '北岡果林,天马ゆい',
    },
    {
      rank: 55,
      cid: 'SNOS-081',
      javdbId: 'nK3VpY',
      originalTitle:
        '新人NO.1 STYLE あの話題の超庶民お姉ちゃん 鈴木希21歳 AVデビュー （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '铃木希',
    },
    {
      rank: 56,
      cid: 'MDVR-388',
      javdbId: 'MbnYm1',
      originalTitle:
        '【VR】MOODYZファン感謝祭 バコバコバスツアー2025VR 超人気AV企画にアナタも参加できる！！史上最強AV女優15名と1泊2日 夢の… 葵いぶき 新井リマ 石原希望 小野六花 木下ひまり 桜ゆの 七瀬アリス 波多野結衣 春陽モカ 松本いちか 美園和花 森日向子 山岸あや花 莉々はるか',
      releaseDate: '2025-11-10',
      actress: '葵いぶき 他',
    },
    {
      rank: 57,
      cid: 'START-158',
      javdbId: 'MbbGd1',
      originalTitle:
        '性欲処理専門セックス外来医院 23 特別編 SODstar MINAMO 絶対的エース看護師の美巨尻ワシ掴み、ハードピストンぶつかり性交治療',
      releaseDate: '2024-10-08',
      actress: 'MINAMO',
    },
    {
      rank: 58,
      cid: 'SQDE-023',
      javdbId: 'verV8p',
      originalTitle: 'S-Cute可愛い子だけSEX29連発！ノーカット収録1496分！',
      releaseDate: '2025-10-17',
      actress: '宮沢ちはる',
    },
    {
      rank: 59,
      cid: 'SAVR-978',
      javdbId: 'wKg3Gz',
      originalTitle: '【VR】肉感スポ女子の肉体観察3種目 乙アリス',
      releaseDate: '2026-02-26',
      actress: '乙アリス',
    },
    {
      rank: 60,
      cid: 'SODS-074',
      javdbId: 'P9Vz12',
      originalTitle:
        'ゆるふわ系保育科女子大生 やさしい笑顔・Hカップ・くびれで癒される10時間！18作品18本番 彩月七緒',
      releaseDate: '2025-10-08',
      actress: '彩月七緒',
    },
    {
      rank: 61,
      cid: 'JUR-583',
      javdbId: 'de3JPM',
      originalTitle: '女教師NTR 不良生徒に最愛の妻を寝取られてー。 新妻ゆうか',
      releaseDate: '2026-01-13',
      actress: '新妻ゆうか',
    },
    {
      rank: 62,
      cid: 'RKI-694',
      javdbId: 'wKpdw2',
      originalTitle:
        '勝手に住みついてる陰キャ幽霊のカラダを好き勝手する話 幽霊だからいくら中出ししたって妊娠しない！ スタイル抜群でかわいいドエロい女の幽霊に中出し三昧！ 月野かすみ',
      releaseDate: '2025-05-13',
      actress: '月野かすみ',
    },
    {
      rank: 63,
      cid: 'OFJE-701',
      javdbId: '96pNZg',
      originalTitle:
        '現役最強AV女優の全てが詰まった S1コンプリート100SEX 12時間 デビュー作，FANZAランキングで1位を獲った作品、人気名作シリーズまで大ボリューム完全保存版',
      releaseDate: '2026-03-24',
      actress: '瀬戸環奈',
    },
    {
      rank: 64,
      cid: 'URVRSP-559',
      javdbId: '96pKJ8',
      originalTitle:
        '【VR】【8K】大乱交！ヤリサー合宿VR！！ エロすぎる乱痴気パーティーゲームでテンアゲMAX酒池肉林！！ ハメっぱなし！射精しっぱなし！の1泊2日',
      releaseDate: '2026-04-03',
    },
    {
      rank: 65,
      cid: 'DVMM-337',
      javdbId: 'ZNv6Q6',
      originalTitle:
        'マジックミラー便 全員38歳over！年齢を感じさせない美しい人妻さん 初めての公開ディープキス編 vol.13 顔出し解禁！ 総勢15人全員SEXスペシャル！若い男子との濃厚接吻で久しぶりに熱くトロけてしまったオマ○コは青年の硬いデカチ○ポが欲しくてたまらない！2枚組9時…',
      releaseDate: '2026-01-20',
    },
    {
      rank: 66,
      cid: 'SNOS-131',
      javdbId: 'Ebn763',
      originalTitle:
        '最強ヒロインが壊れるほどの快楽を！ 禁欲・おっぱい性感開発・焦らし・媚薬・追撃ピストン・目隠し拘束・大量玩具責め・全部のせ！ やりすぎエクスタシー 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-04-15',
      actress: '瀬戸環奈',
    },
    {
      rank: 67,
      cid: 'MDVR-406',
      javdbId: '2mXRGP',
      originalTitle: '【VR】国宝級にカワイイ最強笑顔プリンセス福田ゆあを味わい尽くすVR',
      releaseDate: '2026-02-09',
      actress: '福田ゆあ',
    },
    {
      rank: 68,
      cid: 'HNVR-176',
      javdbId: 'r3zGND',
      originalTitle:
        '【VR】夢のピンサロ10回転コース 10人のピンサロ嬢と入れ替わりノンストップ10回転 この中で中出しできる女の子は誰だ！？さらに本サロ嬢が増えた？無法地帯になったピンサロ店をリアル再現',
      releaseDate: '2026-05-19',
      actress: '椿りか',
    },
    {
      rank: 69,
      cid: 'SNOS-115',
      javdbId: '4Dx3dZ',
      originalTitle:
        '新人NO.1 STYLE ビジュ爆発！新時代 グラビアアイドル 博多彩葉 AVデビュー （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-04-15',
      actress: '博多彩葉',
    },
    {
      rank: 70,
      cid: 'AJVR-309',
      javdbId: 'gyQggq',
      originalTitle:
        '【VR】常にダブル乳首舐め＆騎乗位ローテで回転イカされ9発！ビジュ強すぎGAL3名に計89分ずっとW乳首舐め＋杭打ちピストンで何度もチクシャ全員中出しオールナイト',
      releaseDate: '2026-03-06',
      actress: '倉木しおり',
    },
    {
      rank: 71,
      cid: 'SONE-592',
      javdbId: '82X7Ex',
      originalTitle:
        '妻の学生時代を知らない俺は姪っ子の制服を盗み着していた妻の姿に異様な興奮を覚えて…5年ぶりに抱いた妻が最高すぎた 夢乃あいか （BOD）',
      releaseDate: '2025-02-25',
      actress: '梦乃あいか',
    },
    {
      rank: 72,
      cid: 'EBWH-218',
      javdbId: 'gy4VXE',
      originalTitle:
        '可愛さと色気の融和。〇〇大学附属病院 現役看護師（人妻）結婚3年目 29歳 Iカップ 柏木ふみか AVデビュー',
      releaseDate: '2025-05-20',
      actress: '柏木ふみか',
    },
    {
      rank: 73,
      cid: 'SONE-670',
      javdbId: 'e84ObM',
      originalTitle:
        'ヤリサーの男達に雑に寝取られといてピースなんかすんなよ… 僕の大切な年下彼女が大学のチャラ男たちとノリノリSEXを楽しんでいた…。 村上悠華 生写真3枚付き',
      releaseDate: '2025-04-09',
      actress: '村上悠華',
    },
    {
      rank: 74,
      cid: 'MUDR-297',
      javdbId: 'kKBWy6',
      originalTitle:
        '旅先で仲良くなった子が男と思ってたら女の子だった件！！EX 日焼けあとの残るボーイッシュな美少女と中出し三昧！ 倉本すみれ',
      releaseDate: '2025-03-18',
      actress: '倉本すみれ',
    },
    {
      rank: 75,
      cid: 'KTKL-139',
      javdbId: 'r347nA',
      originalTitle:
        '東南アジア・タイ・バンコクの小娘たちよ、お世話になりました。ありがとう。君たちは今どんな人生を送っていますか？幸せだったらオジサンは嬉しいです。8時間2枚組',
      releaseDate: '2026-02-10',
    },
    {
      rank: 76,
      cid: 'SNOS-050',
      javdbId: 'NQgM74',
      originalTitle:
        '【FANZA限定】彼女、彼女の妹との温泉旅行で妹の方が二人きりになるたびに甘え密着ボディタッチからのおねだりキッス、 たまらず勃起するとジュボジュボしゃぶり始め暴発寸前チ●ポを色んな体位でハメてきて意のままに大… 川越にこ （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '川越にこ',
    },
    {
      rank: 77,
      cid: 'SQTE-647',
      javdbId: 'ZNvn6v',
      originalTitle:
        'この子ヤバイ！！挿れてくれなきゃ怒っちゃう！？エロカワ彼女のおねだりSEX 花守夏歩',
      releaseDate: '2026-01-06',
      actress: '花守夏歩',
    },
    {
      rank: 78,
      cid: 'EBWH-317',
      javdbId: 'V4V9Xz',
      originalTitle:
        'この少女、身も心も純白。 男が汚したくなる素朴な一重まぶた まっしろな絹肌Fカップ 某大学病院で実習する医学部の規律育ち女子大生 白羽舞菜（22） （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-02-18',
      actress: '白羽舞菜',
    },
    {
      rank: 79,
      cid: 'LULU-423',
      javdbId: 'KkrKVA',
      originalTitle:
        'オフパコ枕営業している巨乳コスプレイヤーに媚薬を仕込んで白目アヘ顔で痙攣オホ声イキする潮射ま○こにキメセク中出し鬼ピストンした。 九井スナオ',
      releaseDate: '2026-02-03',
      actress: '九井スナオ',
    },
    {
      rank: 80,
      cid: 'MIRD-268',
      javdbId: 'Eb4Ra2',
      originalTitle:
        '一人暮らしする僕の家がクラスの女子のたまり場に！4人の入り浸り美少女と四六時中ハメまくりのヤリ部屋生活 MOODYZ創立25周年記念 小野六花 純白彩永 松本いちか 八木奈々',
      releaseDate: '2026-01-06',
      actress: '小野六花 他',
    },
    {
      rank: 81,
      cid: 'MIDV-946',
      javdbId: 'r33W8q',
      originalTitle:
        '日曜の朝、寝起きの澪が可愛くて起き抜けに一発、二発、三発と…朝勃ちビンビンな僕のチ○ポでイキまくる澪 興奮冷めずに夕暮れまでヤリまくっただけの1日。 石川澪',
      releaseDate: '2024-12-03',
      actress: '石川澪',
    },
    {
      rank: 82,
      cid: 'START-480',
      javdbId: 'RkX6vm',
      originalTitle:
        'どえっっろい素SEX解禁！ ホントはめっちゃキスが好きな小笠原菜乃の休日デートSEX',
      releaseDate: '2026-02-04',
      actress: '小笠原菜乃',
    },
    {
      rank: 83,
      cid: 'SSIS-808',
      javdbId: 'ne0Kzw',
      originalTitle:
        '常に揉みしゃぶりOKのあざとい美乳ポロリ服 ロリ巨乳嬢と巡る王道風俗ツアー 安達夕莉 （ブルーレイディスク） （BOD）',
      releaseDate: '2023-07-25',
      actress: '安達夕莉',
    },
    {
      rank: 84,
      cid: 'SSIS-595',
      javdbId: 'PQ8O7v',
      originalTitle: 'あなたを虜にさせる最高峰メンズエステ 河北彩花 （ブルーレイディスク）',
      releaseDate: '2023-02-28',
      actress: '河北彩花',
    },
    {
      rank: 85,
      cid: 'HNVR-170',
      javdbId: '6dWGNK',
      originalTitle:
        '【VR】全裸学園 転校してきたら男は僕ひとりだけ！？「全裸当番」という決まりがあってクラスみんなのすっぽんぽんを見られる不思議な学園生活。',
      releaseDate: '2026-01-28',
      actress: '逢沢みゆ',
    },
    {
      rank: 86,
      cid: 'JUR-041',
      javdbId: 'veZv9n',
      originalTitle:
        '夫と子作りSEXをした後はいつも義父に中出しされ続けています…。 ズルい程イイオンナが背徳中出しに溺れる濃密3本番ー！！ 篠原いよ',
      releaseDate: '2025-05-27',
      actress: '篠原いよ',
    },
    {
      rank: 87,
      cid: 'DVMM-191',
      javdbId: 'XeBB8M',
      originalTitle:
        '顔出しMM号 女子大生限定 ザ・マジックミラー 牛乳を口に含んで→巨乳モミモミ→乳首こねくりイキ我慢！我慢出来たら100万円！イッたらデカチン即ハメ！初めてのチクイキ絶頂で敏感になったJDオマ○コに激ピストンで生中出し！',
      releaseDate: '2025-01-21',
    },
    {
      rank: 88,
      cid: 'JERA-026',
      javdbId: 'GZzrzb',
      originalTitle:
        'バック大好き！！美尻セフレちゃん逢沢みゆとラブホをはしごして丸1日巣ごもり尻揉み中出しデート',
      releaseDate: '2025-11-06',
      actress: '逢沢みゆ',
    },
    {
      rank: 89,
      cid: 'BLOR-294',
      javdbId: 'YwGaEz',
      originalTitle:
        'インドアオタク女子 チ●ポで堕ちる 推しキャラにキャッキャする様子が可愛すぎ おちんちんへの興味が抑えられずAVに出てしまう。結果…「チ●ポきもちいぃぃ」絶叫中イキ',
      releaseDate: '2026-04-28',
    },
    {
      rank: 90,
      cid: 'START-568',
      javdbId: '96nrmR',
      originalTitle:
        '苦手な同僚と飲み会帰りに勢いでワンナイトしてしまったら膣奥フィットするチ〇ポの相性が良すぎて人生最高の絶頂感を味わってしまい…全然好きじゃないのにおかわりセックスしまくった 青空ひかり',
      releaseDate: '2026-06-03',
      actress: '青空ひかり',
    },
    {
      rank: 91,
      cid: 'HOIZ-178',
      javdbId: 'deGkq0',
      originalTitle:
        'ホイホイtower（6） 素人ホイホイtower・個人撮影・セフレ・自宅・ 素人・美少女・お姉さん・ハメ撮り・巨乳・美乳・巨尻・顔射・潮吹き・ 電マ・変態・露出狂・色白・スレンダー・M女・ドキュメンタリー',
      releaseDate: '2025-11-04',
    },
    {
      rank: 92,
      cid: 'SNOS-017',
      javdbId: 'yxd6zX',
      originalTitle:
        '金松季歩のプライベートはエロ過ぎた…完全オフの真の姿をぜんぶ曝け出す！筋書きのない生々ハメ撮り貪欲FUCK （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '金松季歩',
    },
    {
      rank: 93,
      cid: 'SDMM-181',
      javdbId: 'WwwJaK',
      originalTitle:
        '【大増量5時間35分！8名出演】マジックミラー号 保健体育の課外授業 現役女子○生の目の前でオトナの濃厚SEXを見せつける！思春期の性的好奇心に火を点けて初めての杭打ち騎乗位で中イキ体験2',
      releaseDate: '2024-10-24',
      actress: '弥生みづき',
    },
    {
      rank: 94,
      cid: 'MKMP-705',
      javdbId: 'kKbrrP',
      originalTitle:
        '【FANZA限定】これが変態セレブの道楽 借金まみれの貧困カップルを誘い込み、泣き叫ぶパートナーの前で徹底的に寝取るバイセクシャルな婦人 乙アリス 生写真付き',
      releaseDate: '2026-02-11',
      actress: '乙アリス',
    },
    {
      rank: 95,
      cid: 'SNOS-208',
      javdbId: 'Ww73GR',
      originalTitle:
        '新人NO.1STYLE 幻の博多アイドル候補生 白石透羽 AVデビュー （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-27',
      actress: '白石透羽',
    },
    {
      rank: 96,
      cid: 'SNOS-039',
      javdbId: 'de3JD5',
      originalTitle:
        '思春期で急成長した私の乳房を大嫌いな義父が揉みしゃぶってくる。鳥肌立つほどキモかったのに…なんでなんで…こんなに感じちゃうの… 田野憂 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '田野憂',
    },
    {
      rank: 97,
      cid: 'VRKM-1765',
      javdbId: 'WwrJeg',
      originalTitle:
        '【VR】近未来先取り！少子化対策！巨乳人妻一夫多妻制度！！ 羽月乃蒼・鈴木真夕・凰華りん',
      releaseDate: '2026-02-27',
      actress: '羽月乃蒼 他',
    },
    {
      rank: 98,
      cid: 'LULU-421',
      javdbId: 'OXrWOz',
      originalTitle:
        '巨乳叔母に無邪気なフル勃起オナニーを何度も見せつけたら甥っ子性欲若硬ち○ぽをしっかり握って密着しながらお叱り手コキでたっぷり搾り射（だ）された。 波多野結衣',
      releaseDate: '2026-02-03',
      actress: '波多野結衣',
    },
    {
      rank: 99,
      cid: 'NSODN-009',
      javdbId: 'DRK4eJ',
      originalTitle: '田舎に移住した若い夫婦に密着取材中、奥さんとハメた流出映像。',
      releaseDate: '2025-12-09',
    },
    {
      rank: 100,
      cid: 'JUR-036',
      javdbId: 'a8BypX',
      originalTitle:
        '超大型新人 専属第2章 中出し解禁！！ 夫と子作りSEXをした後はいつも義父に中出しされ続けています…。 新妻ゆうか',
      releaseDate: '2025-04-08',
      actress: '新妻ゆうか',
    },
  ];

var DMM_MONTHLY_DATA_2026_07 = [
    {
      rank: 1,
      cid: 'HMN-673',
      javdbId: 'Ebv7kA',
      originalTitle:
        '【FANZA限定】ギリギリおち○こかすめる鼠径部マッサージと五感を刺激する囁き誘惑Gcupセラピストの秘密の裏オプ中出し爆ヌキ20発メンズエステ 五日市芽依 生写真2枚付き',
      releaseDate: '2025-02-19',
    },
    {
      rank: 2,
      cid: 'CJOD-447',
      javdbId: 'veeEWG',
      originalTitle:
        'キレカワお姉さんにラブホに呼び出され涎ぐっちょりベロキス中出しで痴女られた僕 北岡果林',
      releaseDate: '2024-11-26',
    },
    {
      rank: 3,
      cid: 'PPPE-296',
      javdbId: '1AeeQd',
      originalTitle: '彼女のお姉さんは巨乳と中出しOKで僕を誘惑 春陽モカ',
      releaseDate: '2025-01-21',
    },
    {
      rank: 4,
      cid: 'PBD-446',
      javdbId: 'vD25OY',
      originalTitle: '篠田ゆう 55本番24時間20作品1440分プレミアム総集編',
      releaseDate: '2023-08-15',
    },
    {
      rank: 5,
      cid: 'YAHO-041',
      javdbId: 'xvvxDP',
      originalTitle:
        'しろうとヤッホーギャルシェアリング＃01 【1.沖縄最強美人（びじんちゅ）Hカップ】＆【2.神スタイル関西弁ヤッホーギャル】＆【3.天然爆乳Iカップ露出ギャル】＆【4.ヤバ潮吹きびしょ濡れギャル】 最強の巨乳ギャルカルテットで中出ししまくり限界必至427分！！',
      releaseDate: '2022-07-07',
    },
    {
      rank: 6,
      cid: 'JUR-258',
      javdbId: 'P9M2Ra',
      originalTitle:
        '隠れIカップの元芸能人、まさかの《中出し》解禁―。 感情剥き出しで骨の髄まで貪り尽くす、汗まみれ濃密中出し性交。 紗弥佳',
      releaseDate: '2025-04-08',
    },
    {
      rank: 7,
      cid: 'DASS-412',
      javdbId: 'GZMx0q',
      originalTitle:
        '媚薬を盛られ発汗発情！自然と下品ガニ股ジョバジョバお漏らし！ガクガク痙攣敏感ホットヨガ教室 月野江すい',
      releaseDate: '2024-06-11',
    },
    {
      rank: 8,
      cid: 'SIVR-490',
      javdbId: 'vezabn',
      originalTitle:
        '【VR】手繋いで、見つめあって、告白されて…一晩中イチャイチャ初めてのお泊まりデート 瀬戸環奈の恋人になれるVR',
      releaseDate: '2026-06-04',
    },
    {
      rank: 9,
      cid: 'MIZD-362',
      javdbId: 'MmR7bQ',
      originalTitle:
        'MOODYZ2022年厳選100タイトルオール本番コレクション 12時間 進化の止まらない石川澪の人気作品！超新星・宮下玲奈のデビュー作！ヒット作連発した奇跡の1年！',
      releaseDate: '2024-01-02',
    },
    {
      rank: 10,
      cid: 'DASS-158',
      javdbId: '9DgrY8',
      originalTitle:
        '綺麗だと憧れていた友達のお母さんとマッチングアプリで再会。緊張の糸が切れた二人は、理性を捨てて本能のまま交じり合った。 森沢かな',
      releaseDate: '2023-05-23',
    },
    {
      rank: 11,
      cid: 'MIDE-786',
      javdbId: '02Wqk',
      originalTitle: '輸給學生誘惑的我與美亞放學後到愛情賓館持續做愛… 七澤美亞',
      releaseDate: '2020-06-13',
    },
    {
      rank: 12,
      cid: 'SONE-229',
      javdbId: 'MbmRg1',
      originalTitle:
        'タイトワンピ店員さんが無自覚に勃起させちゃうボディライン丸出し接客 小宵こなん 生写真3枚付き',
      releaseDate: '2024-07-24',
    },
    {
      rank: 13,
      cid: 'EBWH-092',
      javdbId: 'r3mYpr',
      originalTitle:
        '誰もが振り返る高嶺の花が貴方を夜通し王様並みにもてなす甘くてエロいご奉仕不倫性交 七瀬アリス 生写真3枚付き',
      releaseDate: '2024-04-17',
    },
    {
      rank: 14,
      cid: 'SONE-258',
      javdbId: 'qADVvP',
      originalTitle:
        '今いちばん抱きたいカラダ 川越にこ、理性吹き飛ぶ。【禁欲×媚薬漬け】童顔悶える異常絶頂アクメ （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2024-07-10',
    },
    {
      rank: 15,
      cid: 'FPRE-045',
      javdbId: 'z4KVky',
      originalTitle:
        'オヤジのハメ撮りドキュメント ねっとり濃厚に貪り尽くす体液ドロドロ汗だく性交 似鳥日菜',
      releaseDate: '2024-05-07',
    },
    {
      rank: 16,
      cid: 'YAKO-073',
      javdbId: 'QN0qnM',
      originalTitle: '若くてピチピチの生撮り欧米娘たち、現地撮りまとめ。200分超',
      releaseDate: '2025-06-12',
    },
    {
      rank: 17,
      cid: 'SONE-136',
      javdbId: 'wKqYGD',
      originalTitle:
        '生々しい個人撮影AVをネットで拾ったら愛するボクの婚約者でした。 miru 生写真3枚付き',
      releaseDate: '2024-04-10',
    },
    {
      rank: 18,
      cid: 'HJMO-652',
      javdbId: '1ABDWZ',
      originalTitle:
        '残酷ミラーゲームに負けるとエロ罰ゲーム あじわった事のないデカチンで清楚な若妻達が隣に旦那がいる状態でもおかまいなしで中出しSEX！なんとオカワリしてきた若妻も！！12',
      releaseDate: '2024-06-18',
    },
    {
      rank: 19,
      cid: 'URE-109',
      javdbId: 'AqzyBe',
      originalTitle:
        'シリーズ累計12万DL超え！！ 原作:越山弱衰 イイ湯湧いてます ムッチリビキニFUCKを描いた続編「イイ湯湧いてますかぽ～ん」＆実写だけのオリジナルエピソードも追加！！ 日下部加奈 （ブルーレイディスク）',
      releaseDate: '2024-05-28',
    },
    {
      rank: 20,
      cid: 'JUQ-682',
      javdbId: 'AqzJNy',
      originalTitle:
        '合鍵をもらった人妻が、男子学生が卒業するまで中出しされた一人暮らし部屋。 神宮寺ナオ',
      releaseDate: '2024-05-14',
    },
    {
      rank: 21,
      cid: 'MIAB-157',
      javdbId: '1ABxAw',
      originalTitle:
        '「ウチらと3Pやろうぜ」 僕の幼馴染が地元で有名なヤリマンギャル軍団に！ 帰省した2日間ドMペットにされて13発も射精した夏の思い出 AIKA 鳳カレン （BOD）',
      releaseDate: '2024-05-07',
    },
    {
      rank: 22,
      cid: 'HNDB-127',
      javdbId: 'AqZMy',
      originalTitle: '椎名そら初コンプリートBEST12時間',
      releaseDate: '2018-11-25',
    },
    {
      rank: 23,
      cid: 'FPRE-038',
      javdbId: 'gy00Rm',
      originalTitle:
        '結婚祝いNTRキャンプ 会社で企画してくれたイベント中に快感に溺れていく僕の婚約者 橘内ひなた',
      releaseDate: '2024-04-02',
    },
    {
      rank: 24,
      cid: 'CAWD-712',
      javdbId: 'z4K7BJ',
      originalTitle:
        'キュッとしたクビレ、キリッとした顔立ち。 ウエスト55cm 美しきベビーフェイス双葉れぇなAVデビュー。 私は誰かのおもちゃになって壊されたい。',
      releaseDate: '2024-08-06',
    },
    {
      rank: 25,
      cid: 'SNOS-248',
      javdbId: 'pkzWw9',
      originalTitle:
        '新人NO.1STYLE 水泳一筋 純情なお姉さん 園梨音 AVデビュー （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-06-10',
    },
    {
      rank: 26,
      cid: 'EBWH-081',
      javdbId: 'J026y8',
      originalTitle:
        '一世を風靡したAV女優がカラダもエロも色気を増して戻ってきたー。 パイズリ女王 高橋ゆら 10年ぶりの電撃復活 生写真3枚付き',
      releaseDate: '2024-04-17',
    },
    {
      rank: 27,
      cid: 'SNOS-209',
      javdbId: 'AqVrm0',
      originalTitle:
        '最強ヒロインが アナタのちんちん100％支配… 24時間犯してあげる 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-06-10',
    },
    {
      rank: 28,
      cid: 'SKMJ-757',
      javdbId: '82BPRE',
      originalTitle:
        '「えっまだするの？何回、私の中に出すつもり？もう無理！イキ過ぎて頭おかしくなっちゃう！！」素人女子大生vsイケメンAV男優 中出し鬼ごっこ 追いかけまわして捕まったら超絶高速ピストンで無制限生中出し！！3',
      releaseDate: '2026-06-12',
    },
    {
      rank: 29,
      cid: 'DVMM-246',
      javdbId: 'deR7ga',
      originalTitle:
        '顔出しMM号 女子大生限定 ザ・マジックミラー 徹底検証！男女の友情は成立する！？友達関係のリアル素人大学生3人が日本一エロ～い車の中で初めての逆3P体験！女友達とのハーレムSEXでW生中出しスペシャル！',
      releaseDate: '2025-06-03',
    },
    {
      rank: 30,
      cid: 'SONE-720',
      javdbId: 'deROGe',
      originalTitle:
        '【FANZA限定】最強ヒロインに会える風俗店 瀬戸環奈 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-06-11',
    },
    {
      rank: 31,
      cid: 'SONE-641',
      javdbId: 'e8pz4b',
      originalTitle:
        '就職した水着メーカーは女性社員が水着姿の世界。勃起してもKカップの教育担当・鷲尾さんが抜いてくれるのでボクの金玉は毎日カラッポ 鷲尾めい （BOD）',
      releaseDate: '2025-02-25',
    },
    {
      rank: 32,
      cid: 'SNOS-275',
      javdbId: 'ZN3nNq',
      originalTitle:
        '河北彩花の尊い美顔を心おきなく拝みたい。 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-06-24',
    },
    {
      rank: 33,
      cid: 'OFJE-512',
      javdbId: 'YwqX4e',
      originalTitle:
        'キングオブエロ痴女優21人 トップ美女たちがSEXを！快感を！思う存分楽しむ 女性上位のアンアン イクイク 騎乗位100 （ブルーレイディスク）',
      releaseDate: '2025-05-27',
    },
    {
      rank: 34,
      cid: 'SNOS-183',
      javdbId: 'AqnZBM',
      originalTitle:
        '最強ヒロインと 一緒に終電逃して ホテル泊まって 朝までヤリたい！ 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-13',
    },
    {
      rank: 35,
      cid: 'SONE-162',
      javdbId: '96DYxR',
      originalTitle:
        'キレかわ清楚の女子●生を我慢できずにメチャクチャ痴●してやったら…彼氏よりも俺のテクの虜に。 浅野こころ 生写真3枚付き',
      releaseDate: '2024-04-24',
    },
    {
      rank: 36,
      cid: 'NPJB-099',
      javdbId: 'W1Jn5B',
      originalTitle: 'エロ過ぎて…困る。女子生徒に中出しBEST 厳選4名 総尺410分',
      releaseDate: '2023-05-30',
    },
    {
      rank: 37,
      cid: 'ASTR-032',
      javdbId: 'V4NJ8A',
      originalTitle: '配信サイト売筋ランキング1位獲得記念 MOON FORCE 2nd 超人気作BEST vol.02',
      releaseDate: '2025-06-14',
    },
    {
      rank: 38,
      cid: 'BLOR-289',
      javdbId: 'e87Yyd',
      originalTitle:
        'ドSな美人絵師さん 男を責めるのが趣味の強めクールビューティーがチ●ポ堕ち 最初は余裕たっぷりだったが、正確な巨根ピストン喰らい続け メス顔晒してイってしまう！',
      releaseDate: '2026-02-24',
    },
    {
      rank: 39,
      cid: 'VRKM-1577',
      javdbId: 'WwrJyq',
      originalTitle:
        '【VR】絶ッ対に満足できるハズレなし仕様の完全保存版、ここに完成！ レビュー高評価4.5以上1294分15タイトルノーカットBEST',
      releaseDate: '2025-06-11',
    },
    {
      rank: 40,
      cid: 'SNOS-257',
      javdbId: 'pkzmkq',
      originalTitle:
        '新人NO.1STYLE ひ・と・き・わ20歳 京都の女子大生 蜜このはAVデビュー （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-06-24',
    },
    {
      rank: 41,
      cid: 'MIZD-341',
      javdbId: '5EyMW9',
      originalTitle: '七沢みあ10タイトル！大放出！12時間 BEST',
      releaseDate: '2023-08-29',
    },
    {
      rank: 42,
      cid: 'PFES-058',
      javdbId: '5nEEvB',
      originalTitle:
        '「もう私以外とエッチできないよね？」 大学で初めて彼女が出来たのに、嫉妬した隣のお姉さんが、美脚とパンチラで僕を焦らし続けて中出しさせてきた。 森日向子',
      releaseDate: '2024-04-01',
    },
    {
      rank: 43,
      cid: 'OFJE-517',
      javdbId: 'RkG34n',
      originalTitle:
        '衣服を剥ぎ取りボロンさせちゃう！ けしからん着衣おっぱい 爆乳むきむき性交55本番12時間',
      releaseDate: '2025-06-10',
    },
    {
      rank: 44,
      cid: 'SNOS-213',
      javdbId: 'bK3JKB',
      originalTitle:
        'イキすぎちゃって、ごめんなさい…ウブなIcupボディに与えた怒涛の強●快楽と超痙攣オルガズム 早坂奏音',
      releaseDate: '2026-06-23',
    },
    {
      rank: 45,
      cid: 'SDMM-226',
      javdbId: 'ZNx28X',
      originalTitle:
        'マジックミラー号 オーバーオール姿の美巨乳大学生限定！！ 初めてのDEEP乳揉みで感度を上げて素人娘とガチSEX',
      releaseDate: '2026-02-24',
    },
    {
      rank: 46,
      cid: 'SNOS-172',
      javdbId: 'Rk6WVR',
      originalTitle:
        '新世代グラドル生々しく嘘のないリアル4セックス 博多彩葉 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-06-10',
    },
    {
      rank: 47,
      cid: 'SONE-071',
      javdbId: 'K4zV5m',
      originalTitle:
        'ナースコールはチ・ク・ビ・ナ・メのサイン 何度も射精させてくれる舐めずりペロペロ痴女ナース 河北彩花 （ブルーレイディスク）',
      releaseDate: '2024-02-27',
    },
    {
      rank: 48,
      cid: 'SAVR-1001',
      javdbId: '82ZndV',
      originalTitle:
        '【VR】「孕ませオンナ絶対宅配クラブ」大人を舐め腐ったトー○地雷系ミナちゃんが嫌々ながらも膣穴ザーメン漬けにされる末路',
      releaseDate: '2026-03-20',
    },
    {
      rank: 49,
      cid: 'MIDA-139',
      javdbId: 'AqE3EM',
      originalTitle:
        '変態店長に深夜シフトでノーブラ巨乳ノーパン接客させられています 全裸羞恥調教アルバイト 百田光稀',
      releaseDate: '2025-06-03',
    },
    {
      rank: 50,
      cid: 'SDJS-374',
      javdbId: 'Rk6R04',
      originalTitle: 'SOD女子社員 中条彩那 営業部 中途2年目 初単独AV出演業務',
      releaseDate: '2026-07-08',
    },
    {
      rank: 51,
      cid: 'MNGS-071',
      javdbId: 'pkz9Jb',
      originalTitle:
        '「私は2番目でもイイですよ」妻子が実家帰省中に、乳デカ保母さんの誘いに負けて始まる仮ソメ同棲不倫中出し1週間 彩月七緒 （BOD）',
      releaseDate: '2026-06-16',
    },
    {
      rank: 52,
      cid: 'HUNTB-731',
      javdbId: 'Az6D8M',
      originalTitle:
        '「まだ起きないで…動いたら挿いっちゃう…擦るだけだから…」朝勃ちハミチン勃起に我慢出来ず少し動いただけでも挿いりそうなギリギリで擦る巨乳姉！',
      releaseDate: '2023-12-12',
    },
    {
      rank: 53,
      cid: 'IPZZ-849',
      javdbId: '7ybd3B',
      originalTitle:
        'FIRST IMPRESSION 192 ほんわか癒し系だけど頼れる上司のオトナっぽ可愛い丸の内OL AVデビュー 篠崎沙帆 生写真3枚セット',
      releaseDate: '2026-06-10',
    },
    {
      rank: 54,
      cid: 'SIVR-494',
      javdbId: 'QN7DYJ',
      originalTitle:
        '【VR】入院先のナースさんがお世話になってるIcupグラドルに超そっくり！思わず勃起した僕のち●ぽにやさし～く寄り添ってパイズリとおま●こで性処理手伝ってくれる夢の入院性活 紫堂るい',
      releaseDate: '2026-06-20',
    },
    {
      rank: 55,
      cid: 'SONE-200',
      javdbId: 'GZMEbD',
      originalTitle:
        '1発の射精では満足できないくらい 官能的で貪欲なセックスをー。 河北彩花 （ブルーレイディスク）',
      releaseDate: '2024-05-28',
    },
    {
      rank: 56,
      cid: 'SVVRT-075',
      javdbId: '0e4Mxv',
      originalTitle:
        '部活帰りのデカ尻女子〇生限定！外したら即ハメ中出し壁尻スタイルDE利きバイブチャレンジ！極太バイブで膣奥を刺激されスケベ尻丸出しイキ潮噴射が止まらない！！3',
      releaseDate: '2026-02-19',
    },
    {
      rank: 57,
      cid: 'SGKI-080',
      javdbId: '5nbD8z',
      originalTitle:
        'ここで撮影した写真を貼れば絶対合格するというピストンバイブ証明写真ボックス 大学受験前の顔面SS級女子学生がどんなに突かれても笑顔をキープ',
      releaseDate: '2026-02-19',
    },
    {
      rank: 58,
      cid: 'MIZD-461',
      javdbId: 'mOJbJY',
      originalTitle: '百田光希（百田光稀） 1年分！大放出！12時間',
      releaseDate: '2025-06-17',
    },
    {
      rank: 59,
      cid: 'SSIS-308',
      javdbId: 'dXWVe',
      originalTitle: '新 交織的體液、濃密的性愛 河北彩花',
      releaseDate: '2022-01-25',
    },
    {
      rank: 60,
      cid: 'FAVR-004',
      javdbId: 'DRPZ58',
      originalTitle:
        '【VR】八蜜凛 解禁 8KVR Hカップバイオレンスボディを堪能させてくれる都合の良すぎる愛人',
      releaseDate: '2026-06-15',
    },
    {
      rank: 61,
      cid: 'SONE-242',
      javdbId: 'V4wJOW',
      originalTitle:
        '温泉旅行で独り占めする 艶やかに汗ばんだKcup爆乳愛人と のぼせるほど高揚する性交 神楽ももか （BOD）',
      releaseDate: '2024-05-28',
    },
    {
      rank: 62,
      cid: 'NUKA-081',
      javdbId: '82ZYaK',
      originalTitle: '抜かずの六発中出し 母と息子の密着交尾 長澤史華',
      releaseDate: '2026-03-05',
    },
    {
      rank: 63,
      cid: 'KKWZ-001',
      javdbId: 'qAPBP9',
      originalTitle: 'お気に入り数3000越人気20作品総集編 よくばりセット極',
      releaseDate: '2025-04-24',
    },
    {
      rank: 64,
      cid: 'IPZZ-722',
      javdbId: 'verG0b',
      originalTitle:
        '純朴な教え子からの猛アプローチ そして清楚な見た目からは想像つかない淫らな腰使いに理性が崩壊し今日も放課後ホテル密会 愛才りあ （ブルーレイディスク）',
      releaseDate: '2025-11-11',
    },
    {
      rank: 65,
      cid: 'HRSM-087',
      javdbId: 'r3OWXJ',
      originalTitle:
        '「寝起きでSEXしよ？」すっぴんだってカワイイ彼女を目覚ましイタズラ生中出しww パンティと生写真付き',
      releaseDate: '2025-03-14',
    },
    {
      rank: 66,
      cid: 'OFES-032',
      javdbId: 'AqV1yM',
      originalTitle:
        '熊本から来た、 ふつうの馬術部少女 まだ方言が残る、 ずっしりHカップ 東峯日奈子 （ブルーレイディスク）',
      releaseDate: '2026-06-30',
    },
    {
      rank: 67,
      cid: 'SIVR-492',
      javdbId: 'Yw3XQb',
      originalTitle:
        '【VR】VR NO.1 STYLE 早坂奏音 解禁 ベールに包まれたプライベートに触れる 汚れを知らないIcupウブボディ独占 無垢、故にエロい。初めてのお泊まりデート',
      releaseDate: '2026-06-16',
    },
    {
      rank: 68,
      cid: 'SVVRT-072',
      javdbId: 'Kkq7gb',
      originalTitle:
        '素人バラエティ 壁マ〇コスタイルDEお膣の中身は何だろな？街行くJDが異物挿入当てゲームに挑戦！全員中出し＆ぶっかけ！合計11射精！',
      releaseDate: '2025-12-17',
    },
    {
      rank: 69,
      cid: 'JUVR-234',
      javdbId: 'ZNd9bX',
      originalTitle:
        '【VR】篠原いよ 初VR Hカップのズルい程イイオンナを目の前で体感できる超高画質8K 「私、あなたのせいでもっと敏感になっちゃった…」 産後、感度が上がった部長の嫁・いよさんと不倫関係の僕は 月に1度、部長が地方出張の度に種付け中出しを続けています。',
      releaseDate: '2025-06-06',
    },
    {
      rank: 70,
      cid: 'MBF-059',
      javdbId: 'Ww7KG7',
      originalTitle:
        '【FANZA独占】【配信専用】MAX-Aダイヤモンドセレクション THE LEGEND3.5 小倉奈々 オグナナの単体作品には収録されていないプレミアSEX13発お届けスペシャルBEST ～お宝映像300分～',
      releaseDate: '2026-04-30',
    },
    {
      rank: 71,
      cid: 'TSDS-43094',
      javdbId: 'deDW1M',
      originalTitle: '天月愛 あまぱい',
      releaseDate: '2026-06-25',
    },
    {
      rank: 72,
      cid: '3DSVR-1947',
      javdbId: '2mXPKw',
      originalTitle:
        '【VR】【8K】最近付き合った彼女と布団の中でダラダラセックスする怠惰な土曜の夜 天神羽衣初 VR',
      releaseDate: '2026-04-01',
    },
    {
      rank: 73,
      cid: 'SONE-033',
      javdbId: 'MmVaGQ',
      originalTitle:
        '「お風呂はお父さんと一緒がいいもん！」乳だけは大人に実った甘えんぼう連れ子と刺激的すぎる密着バスタイム 安達夕莉 生写真3枚付き',
      releaseDate: '2024-01-24',
    },
    {
      rank: 74,
      cid: 'SDDE-766',
      javdbId: '82BA89',
      originalTitle:
        '（10分だけ）時間を止められる男は実在した！～お前らの青春、真っ白に染めてやる。ムカつくJ〇に無責任中出し編～',
      releaseDate: '2026-07-08',
    },
    {
      rank: 75,
      cid: 'START-498-V',
      javdbId: 'pkedg9',
      originalTitle:
        '【特典版】ハプバーでSEXをしたのは親友の旦那。もっと責めたい女と責められたい女…正反対の人妻二人が快楽堕ちして夫婦交換スワッピング4Pする仲になるまで。 青空ひかり 神木麗',
      releaseDate: '2026-04-08',
    },
    {
      rank: 76,
      cid: 'EBWH-233',
      javdbId: 'WwVVAg',
      originalTitle:
        '「彼女のお姉ちゃんだから浮気にならないよ」彼女と3人での温泉旅行中に母性全開の巨乳見せつけ誘惑！彼女の目の前で逆NTRされてしまったボク 柏木ふみか （ブルーレイディスク）',
      releaseDate: '2025-06-17',
    },
    {
      rank: 77,
      cid: 'IPZZ-766',
      javdbId: 'BzPXX1',
      originalTitle:
        '【FANZA限定】仕事終わり制服リフレを呼んだら自分の教え子が…。 お互い弱みを握った教師と生徒の背徳的でイケナイ関係 佐々木さき 生写真3枚セット',
      releaseDate: '2026-02-11',
    },
    {
      rank: 78,
      cid: 'DVMM-406',
      javdbId: 'OX7EbO',
      originalTitle:
        '一般男女モニタリングAV マジックミラーの向こうには実の娘（=彼女）！「娘がダメなら私が…」巨乳母がデカチンすぎて童貞卒業できない娘の彼氏を優しく筆おろし！2 フル勃起デカチ○ポを根元まで受け挿れたご無沙汰オマ○コと性欲溢れる童貞チ○ポの中出しセックスは1…',
      releaseDate: '2026-06-16',
    },
    {
      rank: 79,
      cid: 'HUNTB-700',
      javdbId: 'p3JxVb',
      originalTitle:
        '女性専用アパートの大家兼管理人となったボク！欲求不満だらけのお姉さんたちは常にボクのチ〇ポを狙って気が付いたらいつの間にかヤリチン中出し生活',
      releaseDate: '2023-11-28',
    },
    {
      rank: 80,
      cid: '3DSVR-1933',
      javdbId: '96pBMV',
      originalTitle: '【VR】【8K】Iカップ黄金比美ボディグラビアアイドル 小笠原菜乃VR解禁',
      releaseDate: '2026-02-18',
    },
    {
      rank: 81,
      cid: 'MIDV-719',
      javdbId: 'J02P0d',
      originalTitle:
        '隣に引っ越してきたギャルを助けた日から…ボク（オタク）にベタ惚れ巨乳ギャルと毎日10発 妊娠OK中出しヤリ放題！ 葵いぶき （BOD）',
      releaseDate: '2024-05-07',
    },
    {
      rank: 82,
      cid: 'JUVR-296',
      javdbId: 'DRP7RM',
      originalTitle:
        '【VR】家賃滞納中の巨乳妻のノーブラ誘惑 肉体返済を受けいれた僕は飢えた人妻の搾精SEXに耐えられず何度も中出ししまくった…。【超高画質8KVR】 七海ティナ',
      releaseDate: '2026-06-09',
    },
    {
      rank: 83,
      cid: 'IPZZ-729',
      javdbId: 'Wwk3NR',
      originalTitle:
        'これはレ×プじゃない…あくまで合意の下のSEX…だよなww 宅飲みで同級生達に廻された2人の巨乳美女。 全員遠慮なしの輪●。 「女2人で参加したのが間違いでした…」 役野満里奈 小野坂ゆいか 生写真3枚付き',
      releaseDate: '2025-12-10',
    },
    {
      rank: 84,
      cid: 'SODS-084',
      javdbId: 'pkedBB',
      originalTitle:
        '【本物人妻総集編】本物人妻15名が初めてのAV体験で見せたカメラの前での初セックス＆緊張と溢れる興奮を抑えきれない初中出し合計17SEX収録2枚組 10時間',
      releaseDate: '2026-04-08',
    },
    {
      rank: 85,
      cid: 'SIVR-479',
      javdbId: '4D4Y93',
      originalTitle:
        '【VR】出張先の方言コンカフェで東北美人と意気投合 田舎の冬はセックスしかヤルことなくて きめ細かい美肌でぬくぬく超密着サンドイッチ逆3P 明日葉みつは 村上悠華',
      releaseDate: '2026-06-08',
    },
    {
      rank: 86,
      cid: 'SONE-208',
      javdbId: 'Kk4dyO',
      originalTitle:
        '清楚な見た目で下品に下半身うねらせ ガニ股！スパイダー！グラインド！杭打ちピストン！11の腰使いを持つマルチ騎乗位の才女 浅野こころ （BOD）',
      releaseDate: '2024-05-28',
    },
    {
      rank: 87,
      cid: 'SDMM-201',
      javdbId: 'YwZwvp',
      originalTitle:
        'マジックミラー号からの脱出!7 LIKEとLOVEの違いが分からない18歳応援SP!制限時間100分でSEXしないと脱出できないマジックミラー号に、絶対にヤってはイケない関係の2人を閉じ込めたら…禁断のSEXをしてしまうのか!?',
      releaseDate: '2025-07-10',
    },
    {
      rank: 88,
      cid: 'SIVR-485',
      javdbId: 'xAe81B',
      originalTitle:
        '【VR】VR NO.1 STYLE 鈴木希 解禁 親近感ある笑顔と、着衣おっぱいーー あの話題の超庶民お姉ちゃんのスケベが爆発しちゃうイチャイチャ同棲生活 鈴木希',
      releaseDate: '2026-06-06',
    },
    {
      rank: 89,
      cid: 'SNOS-233',
      javdbId: 'P91MB9',
      originalTitle: '‘あの’河北彩伽とお泊まりデートで痴女られたら1日20発は余裕だよね？',
      releaseDate: '2026-05-26',
    },
    {
      rank: 90,
      cid: 'OFJE-426',
      javdbId: 'RdBkx4',
      originalTitle:
        'ハリ、形、大きさ全てがパーフェクト鷲尾めいのメガトンJcupを揉んで吸って挟んで揺らす62コーナーおっぱい堪能12時間スペシャル',
      releaseDate: '2023-09-12',
    },
    {
      rank: 91,
      cid: 'KBTK-008',
      javdbId: 'yrEKOr',
      originalTitle:
        '東京恋人的、美人不倫妻ベストナイン～Premium season～売上ランキング10時間18セックス20発射！！',
      releaseDate: '2023-11-14',
    },
    {
      rank: 92,
      cid: 'MIDV-547',
      javdbId: 'ZXVpbJ',
      originalTitle:
        '「手でさするのは浮気にならないよ？」三連泊した宿場で彼女の妹の小悪魔手コキに擦り堕ち13発射精して寝取られたボク 石川澪',
      releaseDate: '2023-12-05',
    },
    {
      rank: 93,
      cid: 'BONY-178',
      javdbId: '0e4EaX',
      originalTitle: '媚薬拘束潮吹きイカセ 10枚組25人 3755分 62時間',
      releaseDate: '2026-02-10',
    },
    {
      rank: 94,
      cid: 'DVMM-337',
      javdbId: 'ZNv6Q6',
      originalTitle:
        'マジックミラー便 全員38歳over！年齢を感じさせない美しい人妻さん 初めての公開ディープキス編 vol.13 顔出し解禁！ 総勢15人全員SEXスペシャル！若い男子との濃厚接吻で久しぶりに熱くトロけてしまったオマ○コは青年の硬いデカチ○ポが欲しくてたまらない！2枚組9時…',
      releaseDate: '2026-01-20',
    },
    {
      rank: 95,
      cid: 'MURIKURI-010',
      javdbId: 'xAe3V6',
      originalTitle:
        '長時間放置「ケツ突き出しバイブ拘束」でイキ壊れ！感度バグって尻ブル振動×腰クネ回転痙攣オナホマ●コ女に魔改造',
      releaseDate: '2026-06-04',
    },
    {
      rank: 96,
      cid: 'SONE-081',
      javdbId: 'pk3aAZ',
      originalTitle:
        '「ウチになら泊まっていいわよ」終電なくなりデキる美人社長の自宅に…無防備Jカップ部屋着のギャップに興奮した僕はSEX交渉ゴリ押しで朝までハメ続けた。 凪ひかる （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2024-06-12',
    },
    {
      rank: 97,
      cid: 'SSIS-722',
      javdbId: '5Eyn6Y',
      originalTitle:
        '10発射精しても、朝を迎えても 小宵こなんとラブホお泊まり会でひたすら犯●れたい… （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2023-08-23',
    },
    {
      rank: 98,
      cid: 'SAVR-1018',
      javdbId: 'z4VkX7',
      originalTitle:
        '【VR】放課後ヌキトレ水泳部 スク水姿に勃起して部活に身が入らないボクを強●射精でサポートしてくれる幼馴染の濡れ髪J〇コンビ',
      releaseDate: '2026-04-24',
    },
    {
      rank: 99,
      cid: 'SDNM-537',
      javdbId: 'RkXgpn',
      originalTitle:
        '結婚2年目 国分寺在住 朝日奈肖 30歳 母親になる前の「最後のワガママ」聞いて欲しい 旦那以外の男と最後の生中出し 自宅で不倫性交',
      releaseDate: '2026-02-24',
    },
    {
      rank: 100,
      cid: 'SQTE-683',
      javdbId: 'GZPZED',
      originalTitle: 'いつでも使えるオナホ後輩 花守夏歩',
      releaseDate: '2026-05-19',
    },
  ];

var DMM_MONTHLY_DATA_2026_08 = [
    {
      rank: 1,
      cid: 'MIDA-387',
      javdbId: 'e8qKNb',
      originalTitle:
        '「穿いてください、石川さん…」屋内露出ノーパン健康法で無自覚誘惑してくる衛生委員長と健全淫交に溺れ何度もハメて元気になり過ぎた 石川澪',
      releaseDate: '2025-12-02',
      actress: '藍井優太、石川澪',
    },
    {
      rank: 2,
      cid: 'SONE-367',
      javdbId: '1AAQ5d',
      originalTitle:
        '束縛もないし気も使わないただ欲望を満たすSEXも出来る女ともだち。 本郷愛 生写真3枚付き',
      releaseDate: '2024-10-23',
      actress: '藍井優太、本郷愛',
    },
    {
      rank: 3,
      cid: 'SONE-744',
      javdbId: 'OXpnVK',
      originalTitle:
        '後輩の頼みは絶対に断らない バレー部の優し～い’みつは先輩’に本気で甘えたらSEXできた話 明日葉みつは 生写真3枚付き',
      releaseDate: '2025-06-11',
      actress: '左慈半造、明日葉みつは',
    },
    {
      rank: 4,
      cid: 'SONE-682',
      javdbId: 'pkxmQk',
      originalTitle: '最強ヒロインの潜在的エロス爆発 瀬戸環奈',
      releaseDate: '2025-05-13',
      actress: '鮫島、小田切ジュン、野島誠、マッスル澤野、瀬戸環奈',
    },
    {
      rank: 5,
      cid: 'IPZZ-729',
      javdbId: 'Wwk3NR',
      originalTitle:
        'これはレ×プじゃない…あくまで合意の下のSEX…だよなww 宅飲みで同級生達に廻された2人の巨乳美女。 全員遠慮なしの輪●。 「女2人で参加したのが間違いでした…」 役野満里奈 小野坂ゆいか 生写真3枚付き',
      releaseDate: '2025-12-10',
      actress: 'TECH、ひがし、マリモン、役野満里奈、小野坂ゆいか、エニフ、ラヴズ、羽田貴史',
    },
    {
      rank: 6,
      cid: 'SONE-720',
      javdbId: 'deROGe',
      originalTitle:
        '【FANZA限定】最強ヒロインに会える風俗店 瀬戸環奈 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-06-11',
      actress: 'タイ、鮫島、小田切ジュン、瀬戸環奈',
    },
    {
      rank: 7,
      cid: 'SNOS-149',
      javdbId: '82ZzAO',
      originalTitle:
        '新時代グラドル絶頂解禁 震えが止まらない初絶頂でイクッ！未体験3本番 博多彩葉 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-13',
      actress: '小田切ジュン、貞松大輔、橋本誠吾、マッスル澤野、博多彩葉',
    },
    {
      rank: 8,
      cid: 'MIRD-277',
      javdbId: 'Ebnw8Q',
      originalTitle:
        'MOODYZファン感謝祭バコバコバスツアー2026 25周年専属大集合！大乱交！大感謝スペシャル！',
      releaseDate: '2026-05-19',
      actress:
        '安倍亜沙美、波多野結衣、佐々木あき、松本いちか、八木奈々、七瀬アリス、柏木こなつ、歌野こころ、春陽モカ、小野坂ゆいか、山田鈴奈',
    },
    {
      rank: 9,
      cid: 'SONE-968',
      javdbId: 'qAnmJ6',
      originalTitle:
        '今日もグラドル家庭教師のおっぱいが気になって授業に集中できない 紫堂るい （ブルーレイディスク）',
      releaseDate: '2025-11-11',
      actress: '左慈半造、紫堂るい',
    },
    {
      rank: 10,
      cid: 'SODS-067',
      javdbId: 'OXpbG0',
      originalTitle:
        '総集編ベスト 恋渕ももな3周年記念おっぱいまみれの10時間 ～MカップからOカップへの軌跡～ デビュー作を含めた20作品の中から選び抜かれた珠玉の20コーナー',
      releaseDate: '2025-06-12',
      actress: '恋渕ももな',
    },
    {
      rank: 11,
      cid: 'EBWH-296',
      javdbId: 'nK460M',
      originalTitle:
        '極悪ジムトレーナーに媚薬プロテインを仕込まれ 力強マッスルピストンでドーピングアクメが止まらないぴちむち女子大生 桜野桃 生写真3枚セット',
      releaseDate: '2026-01-21',
      actress: 'イセドン内村、桜野桃',
    },
    {
      rank: 12,
      cid: 'STARS-997',
      javdbId: 'XW014M',
      originalTitle:
        'おねだり淫語で何度も中出しをせがんでくる都合の良すぎる俺専用肉オナホ人妻愛人 青空ひかり',
      releaseDate: '2024-02-06',
      actress: '青空ひかり',
    },
    {
      rank: 13,
      cid: 'PBD-514',
      javdbId: 'qAbYdx',
      originalTitle: '白峰ミウ PERFECTベスト 24時間25作品66本番',
      releaseDate: '2026-03-17',
      actress: '白峰ミウ',
    },
    {
      rank: 14,
      cid: 'IPZZ-598',
      javdbId: 'BzKMW4',
      originalTitle:
        '試着販売と囁き淫語と中出しで売上No.1巨乳ランジェリー販売員の営業術とエロテクが凄い 全編エロ下着痴女プレイ！！ 桜空もも （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-06-11',
      actress: '桜空もも、武田大樹',
    },
    {
      rank: 15,
      cid: 'IDBD-964',
      javdbId: 'kKYpxN',
      originalTitle: '佐々木さき はつベスト12作品12時間35本番',
      releaseDate: '2025-05-13',
      actress: '佐々木さき',
    },
    {
      rank: 16,
      cid: 'SDJS-304',
      javdbId: 'Eb66QA',
      originalTitle: '【特典版】宣伝部 松永あかり 初AV出演',
      releaseDate: '2025-05-08',
      actress: '松永あかり',
    },
    {
      rank: 17,
      cid: 'MIDA-564',
      javdbId: 'QNr4Jq',
      originalTitle: '解禁 生まれて初めての中出し性交 篠真有 （BOD）',
      releaseDate: '2026-03-17',
      actress: '野島誠、マッスル澤野、武田大樹、篠真有',
    },
    {
      rank: 18,
      cid: 'IPZZ-586',
      javdbId: 'RkG3X4',
      originalTitle:
        '日本よ、これがアイポケだー。 BEAUTY VENUS THE HARLEM もう絶対に揃わない夢の究極共演！！ 痴女プレイ全10コーナー330分！ 桜空もも 長浜みつり 西宮ゆめ 古川ほのか さくらわかな 佐々木さき 愛才りあ 役野満里奈',
      releaseDate: '2025-06-10',
      actress:
        '西宮ゆめ、桜空もも、貞松大輔、野島誠、マッスル澤野、武田大樹、かめじろう、TECH、松本ケン、古川ほのか、さくらわかな、佐々木さき、長浜みつり、役野満里奈、愛才りあ、羽田貴史',
    },
    {
      rank: 19,
      cid: 'CAWD-983',
      javdbId: '96p07q',
      originalTitle:
        '隣人のゴミ部屋で異臭中年おやじに抜かずの連撃中出し73発で孕まされたアイドル級に可愛い制服姉妹たちの末路…',
      releaseDate: '2026-05-05',
      actress: '北岡果林、幸村泉希、デカ吉',
    },
    {
      rank: 20,
      cid: 'START-328',
      javdbId: '0ed1Av',
      originalTitle:
        '悩める男性を緩急つけた手淫・口淫と優しい多幸淫語で正しい射精へ導いてくれる 出張専門母性溢れるオナニーセラピスト 青空ひかり',
      releaseDate: '2025-07-10',
      actress: '青空ひかり、アベ、成上奏',
    },
    {
      rank: 21,
      cid: 'HNDS-081',
      javdbId: '6dD799',
      originalTitle:
        '【FANZA限定】秘密の中出し学園祭 エッチな願いが叶う魔法のステッキでクラスでぼっちの僕が可愛い美少女10人のマ●コ・ア●ル丸見せ大乱交スペシャル！！ 生写真2枚付き',
      releaseDate: '2025-02-19',
      actress:
        '安倍亜沙美、美園和花、タイ、弥生みづき、松本いちか、東條なつ、沙月恵奈、平ボンド、貞松大輔、羽田、えりぐち、香水じゅん、倉本すみれ、柏木こなつ、日森一、じゅうもんじ、ナイアガラ翔、春陽モカ、虹村ゆみ、トイボーイ相沢、ラヴズ、羽田貴史',
    },
    {
      rank: 22,
      cid: 'MIMK-269',
      javdbId: 'qAb4Ox',
      originalTitle:
        '自由にセックスできる女子陸上部 実写版 地域との交流を重んじる九咲創女子学園は近隣住民の出入り自由でいつでもヤリ放題。 生写真2枚セット',
      releaseDate: '2026-02-18',
      actress: '吉村卓、ゴロー',
    },
    {
      rank: 23,
      cid: 'SNOS-091',
      javdbId: '2m0PZw',
      originalTitle:
        '【FANZA限定】一般女性が決意のAVデビューから早3本目にしてプロ男優の洗礼を受ける。 ゲリラ撮影ながら高水準VTR撮影に成功。 現役看護師 絶頂！潮吹き！仰け反り大痙攣エクスタシー 桜みお （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-28',
      actress: '左慈半造、貞松大輔、吉野篤史、桜みお',
    },
    {
      rank: 24,
      cid: 'START-214',
      javdbId: 'Bz4qXM',
      originalTitle:
        '出張先の小さなスナックで出会った気丈なバツ1子持ち若ママの女の顔に欲情して…慰め合うように何度もまぐわった3日間限定不倫 青空ひかり',
      releaseDate: '2024-12-03',
      actress: '青空ひかり',
    },
    {
      rank: 25,
      cid: 'MIDA-616',
      javdbId: 'DRnBea',
      originalTitle:
        '彼女の妹のノーブラ誘惑に負け巨乳ナマ乳沼に溺れたサイテーなボク 福田ゆあ （BOD）',
      releaseDate: '2026-05-05',
      actress: '日森一、福田ゆあ',
    },
    {
      rank: 26,
      cid: 'HUNTC-262',
      javdbId: 'kKKEKz',
      originalTitle:
        '神待ち家出少女に「家に泊めてあげるから」と言って自宅に招き入れ即押し倒しずーっとそのままSEXしまくり！友達も呼んで代わる代わるハメまくり！',
      releaseDate: '2024-11-26',
      actress: '柏木こなつ、藍瀬ミナ',
    },
    {
      rank: 27,
      cid: 'JUR-530',
      javdbId: 'qAxPm3',
      originalTitle: '麗しきランジェリー、唾液と精液で汚れた酬いの人妻保険外交員 新妻ゆうか',
      releaseDate: '2025-12-09',
      actress: '小沢とおる、新妻ゆうか',
    },
    {
      rank: 28,
      cid: 'SSIS-586',
      javdbId: 'W14M5q',
      originalTitle:
        '出張先で軽蔑している中年セクハラ上司とまさかの相部屋に…朝まで続く絶倫性交に不覚にも感じてしまった私 河北彩花 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2023-01-25',
      actress: '河北彩花、武田大樹',
    },
    {
      rank: 29,
      cid: 'SONE-948',
      javdbId: 'KkgG9O',
      originalTitle:
        '「皆に必要とされたくて…」ぼっち女子美大生が自ら志願した恥ずかしめヌードモデル 白上咲花 （BOD）',
      releaseDate: '2025-10-28',
      actress: '白上咲花、トイボーイ相沢、青沼、伊崎悠人',
    },
    {
      rank: 30,
      cid: 'HNDB-258',
      javdbId: '1AEDK9',
      originalTitle:
        '松本いちか4th本中専属いっちゃんの6作品がほぼ丸ごと収録された12時間BESTでたゾっ！',
      releaseDate: '2025-02-25',
      actress: '松本いちか',
    },
    {
      rank: 31,
      cid: 'NHDTC-164',
      javdbId: 'a8VPOp',
      originalTitle:
        '最低な元父親に育てられた連れ子は新しい父親の僕にも迷うことなくごっくん奉仕をしてしまう 【望月家】',
      releaseDate: '2026-02-19',
      actress: '畑中哲也',
    },
    {
      rank: 32,
      cid: 'MIDA-605',
      javdbId: '1AWpaY',
      originalTitle: '新人 現役女子大生Hカップ専属 奥井千晴 AV Debut！ （BOD）',
      releaseDate: '2026-04-21',
      actress: '貞松大輔、マッスル澤野、フランクフルト林、日森一、奥井千晴',
    },
    {
      rank: 33,
      cid: 'MIKR-037',
      javdbId: '6d40ME',
      originalTitle:
        '「脳内グチャグチャにしてアゲる」ベロキス顔面特化オナサポ！唾液まみれベチョ濡れ舐めシャブり淫語お姉さんに溺れイキ！〈五感を刺激するバイノーラル主観〉 森日向子 （ブルーレイディスク）',
      releaseDate: '2025-09-16',
      actress: '森日向子、ASMR',
    },
    {
      rank: 34,
      cid: 'DVAJ-698',
      javdbId: 'OXW69D',
      originalTitle:
        '酔ったノリでキスしたせいで経理のメガネ女子に惚れられてしまい…翌朝から意外すぎる巨乳で連日誘惑された僕は何度も乳揉み接吻中出ししてしまった 羽月乃蒼 （BOD）',
      releaseDate: '2025-07-08',
      actress: 'アベ、羽月乃蒼',
    },
    {
      rank: 35,
      cid: 'MIDA-615',
      javdbId: '5nbYMp',
      originalTitle:
        '真面目で無口な幼馴染がモジモジ誘惑パンチラで赤面アピールラブ 僕のギンギン視線にムラムラ興奮して濡れ染みビッチョリ！ 井上もも 生写真3枚セット',
      releaseDate: '2026-05-06',
      actress: 'イセドン内村、井上もも',
    },
    {
      rank: 36,
      cid: 'HSODA-109',
      javdbId: 'kKbrAV',
      originalTitle:
        'マジックミラーNTRエステ 隣で美乳スレンダーな彼女が寝取られているのに、僕は巨乳お姉さんの凄テクに抗えず、生中セックスしてしまった。 依本しおり 末広純',
      releaseDate: '2026-02-10',
      actress: '左慈半造、市川哲也、末広純、依本しおり',
    },
    {
      rank: 37,
      cid: 'EBWH-241',
      javdbId: 'pkOdQ9',
      originalTitle:
        '上品でおしとやかなのにお酒を飲んだ後のアフターSEXはイキ潮が溢れ出ちゃう 西麻布の高級店で働く美巨乳潮吹きラウンジ嬢 AVデビュー 千咲ちな',
      releaseDate: '2025-09-16',
      actress: '貞松大輔、かめじろう、ハメ鳥の人、千咲ちな',
    },
    {
      rank: 38,
      cid: 'SDHS-062',
      javdbId: 'AqKAAy',
      originalTitle: '彩月七緒の休日 引っ越し直前の自宅でハメ撮りノーカットSEXと顔射 彩月七緒',
      releaseDate: '2025-07-16',
      actress: 'ひがし、彩月七緒',
    },
    {
      rank: 39,
      cid: 'START-490',
      javdbId: 'yx53xg',
      originalTitle:
        '全員彼女持ちだって言うから参加したのに全員に朝までマワされ中出しされていた新年おでんパーティー 星乃莉子',
      releaseDate: '2026-01-20',
      actress: '細田あつし、渋谷優太、星乃莉子、ラヴズ、羽田貴史、天道一然',
    },
    {
      rank: 40,
      cid: 'MIDA-513',
      javdbId: '1AWJeZ',
      originalTitle:
        'うんぱにーカンパニー主催！AVデビュー4周年記念！！ ファンの自宅に突撃訪問 ご奉仕エロテクに我慢デキたらナマ中出しSEX素人ファン感謝祭 うんぱい 生写真2枚セット',
      releaseDate: '2026-02-18',
      actress: 'うんぱい',
    },
    {
      rank: 41,
      cid: 'PRED-829',
      javdbId: 'a8e6vW',
      originalTitle:
        '受験失敗した教え子に10秒だけ挿入を許したら…相性良すぎてうまのり騎乗位で跨り狂うようになってしまった家庭教師 楪カレン',
      releaseDate: '2026-01-20',
      actress: '楪カレン、ニック',
    },
    {
      rank: 42,
      cid: 'HUNTC-234',
      javdbId: '3nrNKw',
      originalTitle:
        'ラブホ代わりにボクのアパート貸します 一人暮らしのボクは金欠の友達に部屋を数時間ほど激安で貸し出し。こっそり盗撮していたら女の子にバレて…',
      releaseDate: '2025-06-24',
      actress: 'トルティーヤ鈴木、ぷーてゃん、ワタリ',
    },
    {
      rank: 43,
      cid: 'NHDTC-078',
      javdbId: 'Xe4d5G',
      originalTitle:
        '引っ越し屋でバイトする社会を知らない地味巨乳女に難癖つけてセクハラ乳揉みをくり返す変態店長2 皐月ゆらさんの紙パンティとチェキ付き',
      releaseDate: '2025-07-10',
      actress: '野島誠、畑中哲也',
    },
    {
      rank: 44,
      cid: 'HMN-774',
      javdbId: 'P9GWM9',
      originalTitle:
        '借金のカタに狂った富豪に孕まされるワタシ。～妊娠したら追加報酬と言われて危険日種付けレ●プを受け入れさせられた制服美少女～ 東條なつ',
      releaseDate: '2026-01-27',
      actress: '東條なつ、トニー大木',
    },
    {
      rank: 45,
      cid: 'JUR-492',
      javdbId: 'QNr9y9',
      originalTitle: '夫の年下上司に飼い慣らされる私は’愛玩ケツ穴奴●’―。 愛弓りょう',
      releaseDate: '2026-02-24',
      actress: '三浦歩美、左慈半造',
    },
    {
      rank: 46,
      cid: 'PPPE-395',
      javdbId: 'bKORgE',
      originalTitle:
        '生徒の巨乳に理性を失った僕は放課後ラブホで何度も何度もふみかと中出しセックスしてしまった 中山ふみか',
      releaseDate: '2026-02-17',
      actress: '中山ふみか、磯山道',
    },
    {
      rank: 47,
      cid: 'SNOS-370',
      javdbId: 'AqVayn',
      originalTitle: '新人NO.1STYLE 新卒新人 星空ねる 22歳 AV デビュー',
      releaseDate: '2026-07-28',
      actress: '小田切ジュン、真田京、武田大樹、星空ねる',
    },
    {
      rank: 48,
      cid: 'DLDSS-389',
      javdbId: '3n3rVN',
      originalTitle:
        '妻の大親友がナイトプールで逆NTR『脱いだらモデル級のビキニ姿に興奮して勃起しているのがバレて…笑顔の誘惑に我慢できず何度も浮気中出ししちゃいました。』 美乃すずめ パンティと写真付き',
      releaseDate: '2025-01-23',
      actress: '美乃すずめ、ナイアガラ翔',
    },
    {
      rank: 49,
      cid: 'START-258',
      javdbId: 'bKqZ4P',
      originalTitle:
        '限界集落に赴任した看護師は性欲異常な島民の子種を毎日子宮で受胎している。 青空ひかり',
      releaseDate: '2025-02-04',
      actress: '青空ひかり',
    },
    {
      rank: 50,
      cid: 'START-373',
      javdbId: 'yxn5da',
      originalTitle:
        '息子が通う保育園の美人保育士と妻子が実家に帰省中に自宅密会をして1週間ヤリまくった自宅密会で絶倫不倫セックス 青空ひかり',
      releaseDate: '2025-08-05',
      actress: '青空ひかり、北山シロ',
    },
    {
      rank: 51,
      cid: 'SNOS-320',
      javdbId: '82B3RW',
      originalTitle:
        '出張先、二人きりの温泉旅館 僕を慕う圧倒的美人な後輩に迫られたら寝取られても仕方がない 河北彩花',
      releaseDate: '2026-07-28',
      actress: '河北彩花、羽田貴史',
    },
    {
      rank: 52,
      cid: 'SDJS-351',
      javdbId: 'r34bDA',
      originalTitle: 'SOD女子社員 制作部 中途1年目 岡島明来（24） 工口勉 初AV成果報告',
      releaseDate: '2026-05-06',
      actress: 'フランクフルト林、一条真斗、岡島明来',
    },
    {
      rank: 53,
      cid: 'SDMM-181',
      javdbId: 'WwwJaK',
      originalTitle:
        '【大増量5時間35分！8名出演】マジックミラー号 保健体育の課外授業 現役女子○生の目の前でオトナの濃厚SEXを見せつける！思春期の性的好奇心に火を点けて初めての杭打ち騎乗位で中イキ体験2',
      releaseDate: '2024-10-24',
      actress: '栄川乃亜、弥生みづき',
    },
    {
      rank: 54,
      cid: 'START-248',
      javdbId: '2m9zrW',
      originalTitle: '星乃莉子 初めての全裸わ〇せつスポーツテスト',
      releaseDate: '2025-02-20',
      actress: '星乃莉子',
    },
    {
      rank: 55,
      cid: 'START-558',
      javdbId: 'yx5Ong',
      originalTitle: '松永あかり SODSTAR研修デビュー 初乱交×3 発射×39',
      releaseDate: '2026-05-06',
      actress:
        'イセドン内村、今井勇太、ハッピー池田、ナルシス小林、フランクフルト林、イェーイ高島、ジャイアント廣田、いち、松永あかり、カチカチ山田',
    },
    {
      rank: 56,
      cid: 'DLDSS-419',
      javdbId: 'DRWg9a',
      originalTitle:
        'スワッピングNTR マンネリ解消の夫婦交換で巨乳妻を総取りされた温泉旅行 美乃すずめ 角奈保 角奈保さんのパンティと写真付き',
      releaseDate: '2025-09-11',
      actress: '美乃すずめ、左慈半造、吉野篤史、角奈保',
    },
    {
      rank: 57,
      cid: 'START-158',
      javdbId: 'MbbGd1',
      originalTitle:
        '性欲処理専門セックス外来医院 23 特別編 SODstar MINAMO 絶対的エース看護師の美巨尻ワシ掴み、ハードピストンぶつかり性交治療',
      releaseDate: '2024-10-08',
      actress: 'MINAMO',
    },
    {
      rank: 58,
      cid: 'DCDSS-003',
      javdbId: 'z45Am7',
      originalTitle:
        '美乃すずめ DAHLIA専属 2nd BEST8時間 最もエロティックで、最もフェティッシュで、最もエレガントなオンナ！',
      releaseDate: '2025-06-26',
      actress: '美乃すずめ',
    },
    {
      rank: 59,
      cid: 'SNOS-152',
      javdbId: 'yx5AJr',
      originalTitle:
        '500日間セックス我慢_ 女性フェロモン大量分泌！ 艶っぽい顔とカラダに進化！ 焦らし焦らされてからの禁欲超開放オーガズム 安達 夕莉 安達夕莉 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '小田切ジュン、安達夕莉',
    },
    {
      rank: 60,
      cid: 'SDJS-368',
      javdbId: '0e4947',
      originalTitle:
        'SOD女子社員11名が愛情たっぷり濃厚ベロチュウで癒します！ディープキス（*´ε‘*）チュッチュ忘年会780分 時間内無制限で射精挿入し放題超乱交＆個別性接待SEXでみーんな気持ち良くなれました',
      releaseDate: '2026-05-06',
      actress:
        '岩ヶ谷暁美、釜谷明日華、阪本一乃、津田蛍琉、名取乃蒼、瀬古芽泉、大隈睦心、木村なの葉、網野稜喜、神保陽葵、南部和瑚',
    },
    {
      rank: 61,
      cid: 'HAWA-363',
      javdbId: 'RkJ6Qm',
      originalTitle:
        '自堕落な僕の性処理をしてくれる母性と性欲が強い熟妻は最高に具合のイイ玩具です 熟れたおばさん肉オナホに発射し放題！！',
      releaseDate: '2025-08-21',
      actress: '渋谷優太、伊崎悠人',
    },
    {
      rank: 62,
      cid: 'FNS-035',
      javdbId: 'gyqpKE',
      originalTitle:
        '史上最高ボディがエビ反るイカレ絶頂マッサージ 痙攣イキ性感焦らしオイルエステ 女神ジュン パンティと写真付き',
      releaseDate: '2025-06-26',
      actress: '鮫島、小田切ジュン、マッスル澤野、女神ジュン、ラヴズ',
    },
    {
      rank: 63,
      cid: 'START-183',
      javdbId: 'YwwVk8',
      originalTitle:
        '彼女の妹はいつもノーブラで美乳がポロン！誘惑されて理性崩壊した僕は何度も可愛い顔に顔射した 彩月七緒',
      releaseDate: '2024-10-08',
      actress: '彩月七緒',
    },
    {
      rank: 64,
      cid: 'FCDSS-068',
      javdbId: '35p5g0',
      originalTitle:
        '五十嵐なつ FALENO専属初ベスト16時間 ～決意のAVデビューから1年間12タイトルの軌跡～',
      releaseDate: '2024-02-08',
      actress: '五十嵐なつ',
    },
    {
      rank: 65,
      cid: 'FCDSS-073',
      javdbId: 'Kk4rN7',
      originalTitle: '本郷愛 FALENOコンプリート16時間ベスト',
      releaseDate: '2024-04-25',
      actress: '本郷愛',
    },
    {
      rank: 66,
      cid: 'SDMM-204',
      javdbId: 'degYgv',
      originalTitle:
        '【たった1枚のミラーを挟んで味わう究極の背徳感】優しい子持ちのママにこっそりデカチンを見せつけて 素股で擦りつけて育児でレス気味の欲求不満オ○ンコに旦那の目の前でヌルっと生挿入 産後の柔らかい膣穴が気持ち良すぎて中出し不倫SEX',
      releaseDate: '2025-08-21',
      actress: '鮫島、西島雄介',
    },
    {
      rank: 67,
      cid: 'SONE-846',
      javdbId: 'Mb4ZdR',
      originalTitle:
        '絶頂の向こう側へ 最強ヒロインに巨根ピストンを 瀬戸環奈 （ブルーレイディスク）',
      releaseDate: '2025-09-09',
      actress: '鮫島、小田切ジュン、セツネヒデユキ、黒田悠斗、ウルフ田中、瀬戸環奈、ラヴズ',
    },
    {
      rank: 68,
      cid: 'START-402',
      javdbId: 'nKq266',
      originalTitle:
        '苦手な同僚と飲み会帰り勢いでワンナイトしてしまったら 膣奥フィットするチ〇ポの相性が良すぎて人生最高の絶頂感を味わってしまい… 全然好きじゃないのにおかわりセックスしまくった 本庄鈴',
      releaseDate: '2025-09-24',
      actress: '本庄鈴、ひがし',
    },
    {
      rank: 69,
      cid: 'HAWA-349',
      javdbId: 'kKY4qm',
      originalTitle:
        '素人妻が一般大学生の自宅にコンドーム1つ渡され一泊一度のゴム姦では満足できず宿泊中2度もガチ中出しを許してしまう騎乗位でイキ乱れるFカップ妻 ゆみさん32歳',
      releaseDate: '2025-03-20',
      actress: '及川うみ、しめじ',
    },
    {
      rank: 70,
      cid: 'OFJE-524',
      javdbId: 'Eb6702',
      originalTitle:
        '小日向みゆう 2nd Anniversaryベスト おっぱい尽くしの最新12タイトル12時間スペシャル （ブルーレイディスク）',
      releaseDate: '2025-07-22',
      actress: '清原みゆう',
    },
    {
      rank: 71,
      cid: 'DLDSS-314',
      javdbId: 'RkdQ1g',
      originalTitle:
        '年上の性欲強すぎ巨乳インストラクターの年下彼ピにさせられた 美乃すずめ パンティと写真付き',
      releaseDate: '2024-07-25',
      actress: '美乃すずめ、日森一',
    },
    {
      rank: 72,
      cid: 'STARS-951',
      javdbId: 'nepDeV',
      originalTitle:
        '5年目で初出勤！ 無制限発射 OK で連続ナマ中出しさせてくれる完全会員制ソープ 青空ひかり',
      releaseDate: '2023-12-05',
      actress: '青空ひかり',
    },
    {
      rank: 73,
      cid: 'NHDTC-186',
      javdbId: 'qAbm2N',
      originalTitle:
        '対面羞恥で何度もイカされ糸が引くほど舌を絡ませるベロキス発情娘7 女子〇生限定Ver. 真白ふわりさんの紙パンティとチェキ付き',
      releaseDate: '2026-04-09',
      actress: 'イセドン内村、かめじろう、市川哲也、ラヴズ',
    },
    {
      rank: 74,
      cid: 'START-212',
      javdbId: 'ZNyqX6',
      originalTitle:
        '遠足旅行でぼっち行動してた僕に同情し真面目な爆乳先生がこっそりヌイてくれた10発射精の宿泊記録。 恋渕ももな',
      releaseDate: '2024-12-24',
      actress: '恋渕ももな',
    },
    {
      rank: 75,
      cid: 'START-082',
      javdbId: 'OX2GmK',
      originalTitle:
        '超絶品ボディから溢れ滴る汗潮涎 体液まみれで絶叫イキを繰り返す濃密性交 彩月七緒',
      releaseDate: '2024-05-28',
      actress: '彩月七緒',
    },
    {
      rank: 76,
      cid: 'DRPT-107',
      javdbId: '96pxpw',
      originalTitle:
        '【FANZA限定】乳輪が敏感なことが妹にバレて笑われながらさんざん弄ばれるザコ乳首姉3 広瀬美結 由良かな 広瀬美結さんのパンティとチェキ付き',
      releaseDate: '2026-03-05',
      actress: '由良かな、広瀬美結',
    },
    {
      rank: 77,
      cid: 'IPZZ-789',
      javdbId: '7yYeJd',
      originalTitle:
        '大金持ちなら爆美女だって洗脳できる媚薬に堕ちた一流グラドル2人のチ○ポ奪い合いキメセクハーレム 長浜みつり 金松季歩 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '鮫島、長浜みつり、金松季歩',
    },
    {
      rank: 78,
      cid: 'FSDSS-993',
      javdbId: 'yx07Zd',
      originalTitle:
        '射精無限大の神サービスの本物の女神の笑顔で癒され、必ず10発ヌいてくれる極上ソープ 女神ジュン パンティと写真付き',
      releaseDate: '2025-04-10',
      actress: '野島誠、ゴロー、えりぐち、女神ジュン',
    },
    {
      rank: 79,
      cid: 'SNOS-263',
      javdbId: 'qAq6eP',
      originalTitle:
        'ひ・と・き・わ20歳 京都の女子大生 ‘蜜このは’ 早熟のグラマーボディに 初体験3本番',
      releaseDate: '2026-07-28',
      actress: '吉村卓、マッスル澤野、ウルフ田中、TECH、蜜このは',
    },
    {
      rank: 80,
      cid: 'SODS-086',
      javdbId: 'AqXVDq',
      originalTitle:
        'SNSで1年間約1000万人におっぱいを見られ経験人数が8人増えた Hカップ爆乳SOD女子社員 営業部中途入社3年目:中条彩那 入社一年目での性体験記録333分',
      releaseDate: '2026-08-19',
      actress: '艦長、辻隼人、原口、タクト、トイボーイ相沢、中条彩那',
    },
    {
      rank: 81,
      cid: 'CJOD-522',
      javdbId: 'EbP3pJ',
      originalTitle:
        'ドスケベ愛人二人の奪い合い中出し不倫。ジェラシー淫語と暴走杭打ち騎乗位で朝まで射精され続けたボク… 逢沢みゆ 彩月七緒',
      releaseDate: '2026-07-28',
      actress: '吉野篤史、逢沢みゆ、彩月七緒',
    },
    {
      rank: 82,
      cid: 'START-418',
      javdbId: 'z4B2pJ',
      originalTitle:
        '【完全主観×乳首責め騎乗位×淫語ASMR】超変態的な馬乗り痴女お姉さんの悶絶トライアングルSPECIAL！！！ 小倉由菜',
      releaseDate: '2025-09-10',
      actress: '小倉由菜、ASMR',
    },
    {
      rank: 83,
      cid: 'SNOS-081',
      javdbId: 'nK3VpY',
      originalTitle:
        '新人NO.1 STYLE あの話題の超庶民お姉ちゃん 鈴木希21歳 AVデビュー （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '小田切ジュン、武田大樹、ラヴズ、鈴木希',
    },
    {
      rank: 84,
      cid: 'START-395',
      javdbId: 'V4Pe7Q',
      originalTitle:
        '【特典映像付き】続・射精依存改善治療センター 初めての密着から2年。異例の主任抜擢、そして結婚…。旦那への葛藤を抱きながら性欲異常者を過激な連続膣中射精で医療従事者Aさん（既婚）がサポートします。 青空ひかり',
      releaseDate: '2025-10-08',
      actress: '青空ひかり、吉村卓、アベ、カルロス、ピエール剣',
    },
    {
      rank: 85,
      cid: 'DANDY-976',
      javdbId: 'xAMKwg',
      originalTitle:
        'ワザと手コキのような陰部洗浄で暴発させて青年患者を虜にするおばさん看護師VOL.2',
      releaseDate: '2025-05-22',
      actress: '矢野慎二、浅野あたる、吉野篤史',
    },
    {
      rank: 86,
      cid: 'FSDSS-931',
      javdbId: 'nKKk26',
      originalTitle:
        '男友達の家で目が覚めた土曜の朝。お昼ご飯食べてセックスして夜のコンビニ行ってセックスしてまた一緒に寝る日曜の夜。時田亜美 パンティと写真付き',
      releaseDate: '2024-12-26',
      actress: 'タツ、時田亜美',
    },
    {
      rank: 87,
      cid: 'START-401',
      javdbId: 'V4Pdrq',
      originalTitle:
        '限界集落に赴任した看護師は性欲異常な島民の子種を毎日子宮で受胎している。 小湊よつ葉',
      releaseDate: '2025-09-24',
      actress: '杉山、畑中哲也、今井勇太、杉浦ボッ樹、小湊よつ葉',
    },
    {
      rank: 88,
      cid: 'SNOS-316',
      javdbId: 'Ww76PZ',
      originalTitle: 'いいなりセフレの 大ぶりオッパイで エグいハメ撮り 撮りました！ 木村愛心',
      releaseDate: '2026-07-28',
      actress: '大沢真司、木村愛心',
    },
    {
      rank: 89,
      cid: 'SNOS-326',
      javdbId: 'Rk6vE8',
      originalTitle: '7月28日はぶっかけの日 ファイト100発！ 白上咲花 新木希空',
      releaseDate: '2026-07-28',
      actress: 'セツネヒデユキ、マッスル澤野、黒田悠斗、白上咲花、新木希空',
    },
    {
      rank: 90,
      cid: 'PIYO-216',
      javdbId: 'nKMrAa',
      originalTitle:
        '【FANZA限定】（女の子の感度をバグらせて）『痙攣するほどイカせてみたい！』ひよこ女子の究極’’奥イキ’’開発×いちゃいちゃポルチオSEXのすすめ。その2 松井日奈子ちゃんのパンティとチェキ付き',
      releaseDate: '2025-06-12',
      actress: '貞松大輔、武田大樹、ピエール剣、北岡果林、松井日奈子、美咲音',
    },
    {
      rank: 91,
      cid: 'FSDSS-777',
      javdbId: 'AqzvAK',
      originalTitle:
        '陸上部の大好きなスレンダーポニテ彼女が 最低なゲス先輩に性感帯をシゴキ開発されて肉オナホにされていた一部始終。 永野鈴 パンティと写真付き',
      releaseDate: '2024-05-23',
      actress: '結城結弦、松本ケン、永野鈴',
    },
    {
      rank: 92,
      cid: 'FSDSS-978',
      javdbId: 'qAP0KP',
      originalTitle:
        '亡き夫の父に迫られ肉棒で心の隙間を埋める禁断の背徳性交 森あやみ パンティと写真付き',
      releaseDate: '2025-05-22',
      actress: '田淵正浩、森あやみ',
    },
    {
      rank: 93,
      cid: 'DSOD-021',
      javdbId: '5nNeyY',
      originalTitle:
        '【催淫トランスASMR】脳髄を蝕む囁きと耳舐め二重奏。両耳責めで思考を奪う究極寸止めオナサポ 北野未奈 宍戸里帆',
      releaseDate: '2026-07-28',
      actress: '北野未奈、宍戸里帆',
    },
    {
      rank: 94,
      cid: 'DLDSS-394',
      javdbId: 'V4826A',
      originalTitle:
        '夫の愚痴を聞いてくれる上司と欲求不満が解消するまで唾液を絡ませ求め合った接吻中出し性交 小沢菜穂 パンティと写真付き',
      releaseDate: '2025-04-10',
      actress: '小沢菜穂、小沢とおる',
    },
    {
      rank: 95,
      cid: 'SKMJ-650',
      javdbId: 'xAg1nn',
      originalTitle:
        '男女の同僚同士が仕事の合間に密着オイルエステぬるぬる素股体験！？彼有り女同僚とドキドキのオイルマッサージ…高まる異性への意識＆性欲wwおま●ことち●ぽをグチュグチュ擦り合わせる同僚たちは理性を保てず欲望のままにヌルっと挿入… パンティと生写真付き',
      releaseDate: '2025-07-25',
      actress: 'フランクフルト林、タッキー、ひがし、カチカチ山田',
    },
    {
      rank: 96,
      cid: 'START-377',
      javdbId: 'Wwy3qR',
      originalTitle:
        '【特典版】Iカップ最強の黄金比美ボディ 新人グラビアアイドル AV DEBUT 小笠原菜乃',
      releaseDate: '2025-09-22',
      actress: '鮫島、小田切ジュン、イセドン内村、小笠原菜乃',
    },
    {
      rank: 97,
      cid: 'HUBLK-076',
      javdbId: 'AqVaBP',
      originalTitle: '集団時間停止レ×プ オフィス編2',
      releaseDate: '2026-07-28',
      actress: '浅野あたる、TECH',
    },
    {
      rank: 98,
      cid: 'HMN-878',
      javdbId: 'ZN36w7',
      originalTitle:
        'ギリギリおち○こかすめる鼠径部マッサージと五感を刺激する囁き誘惑Icupセラピストの秘密の裏オプ 中出し爆ヌキ18発メンズエステ 彩月七緒',
      releaseDate: '2026-07-28',
      actress: 'タイ、タツ、タツ、彩月七緒',
    },
    {
      rank: 99,
      cid: 'FSDSS-907',
      javdbId: 'P99pJ0',
      originalTitle:
        '沼らせるステップ誘惑で放課後から朝まで男性●師を束縛するイジワル駆け引き女子●生 絵恋空 パンティと写真付き',
      releaseDate: '2024-11-07',
      actress: '藍井優太、絵恋空',
    },
    {
      rank: 100,
      cid: 'OFJE-525',
      javdbId: '6dq7ga',
      originalTitle:
        'エッロい痙攣イキと反りカーブ女体美を同時堪能！！ 究極エビ反り絶頂98本番 （ブルーレイディスク）',
      releaseDate: '2025-07-22',
      actress:
        '安倍亜沙美、安齋らら、小島みなみ、有栖花あか、楓ふうあ、山手梨愛、安達夕莉、歌野こころ、金松季歩、田野憂、篠真有',
    },
    {
      rank: 101,
      cid: 'FNS-031',
      javdbId: '5nXGOp',
      originalTitle:
        '信頼していた上司に裏切られキメセク漬けで取引先にSEX上納された美人女子社員 時田亜美',
      releaseDate: '2025-06-26',
      actress: '武田大樹、えりぐち、吉野篤史、時田亜美',
    },
    {
      rank: 102,
      cid: 'START-383',
      javdbId: 'bK98Oa',
      originalTitle: 'ネットで出会った巨乳彼女と会ったら搾り取られまくった話。MINAMO',
      releaseDate: '2025-10-08',
      actress: 'MINAMO、コグレハルト',
    },
    {
      rank: 103,
      cid: 'NHDTC-208',
      javdbId: '2mrDPw',
      originalTitle:
        '2穴同時リモバイ開発羞恥 遠隔Wアクメで身動き取れず激潮漏らし絶頂する美尻バイト娘 皐月ゆらさんの紙パンティとチェキ付き',
      releaseDate: '2026-06-04',
      actress: '畑中哲也、ジャイアント廣田、カチカチ山田',
    },
    {
      rank: 104,
      cid: 'START-364',
      javdbId: '6d40m7',
      originalTitle:
        '【合宿輪●テロ】エース部員を贔屓する美人顧問を性処理係にして徹底的に理解らせたwww 神木麗',
      releaseDate: '2025-08-07',
      actress: '神木麗、タクト',
    },
    {
      rank: 105,
      cid: 'SGKI-045',
      javdbId: '82NXKK',
      originalTitle:
        'ここで撮影した写真を貼れば絶対合格するというピストンバイブ証明写真ボックス 大学受験前の女子学生がどんなに突かれても笑顔をキープ',
      releaseDate: '2025-01-23',
    },
    {
      rank: 106,
      cid: 'SDAM-134',
      javdbId: 'Ww370Q',
      originalTitle:
        '箱根で見つけた温泉大好きお嬢さん タオル一枚男湯入ってみませんか?60 ぽかぽか特典版 SOD女子社員 松丸香澄初入湯 20周年記念スペシャル ご愛顧感謝の全員セックスミッションでこってり濃熱ザ～汁ゲット こんなに湧き出た9名535分',
      releaseDate: '2025-03-16',
      actress: '松丸香澄',
    },
    {
      rank: 107,
      cid: 'NAMH-002',
      javdbId: '652W19',
      originalTitle:
        '保育士さんを初真正中出し撮影 子宮に本物ザーメン9発 みなみ（彼氏持ち） 前田美波',
      releaseDate: '2023-12-21',
      actress: '前田美波',
    },
    {
      rank: 108,
      cid: 'SNOS-318',
      javdbId: '96n38w',
      originalTitle:
        '口に舌を入れてくるセクハラ上司とベロキスで濡れるようになった控えめ女子社員―狂気の両思いヨダレ接吻性交 榊原萌 （BOD）',
      releaseDate: '2026-07-28',
      actress: '野島誠、榊原萌',
    },
    {
      rank: 109,
      cid: 'NHDTC-139',
      javdbId: '6dRven',
      originalTitle:
        'カスハラ男の家で杭打ち謝罪させられハメ潮をダダ漏らす巨尻女 若月もあさんの紙パンティとチェキ付き',
      releaseDate: '2025-12-18',
      actress: '原口、ジャイアント廣田、ラヴズ',
    },
    {
      rank: 110,
      cid: 'OFJE-653',
      javdbId: 'P913r9',
      originalTitle: '最強ヒロイン 瀬戸環奈 ベストコレクション',
      releaseDate: '2026-07-28',
      actress: '瀬戸環奈',
    },
    {
      rank: 111,
      cid: 'SONE-826',
      javdbId: 'P92kkX',
      originalTitle:
        'Newカワイイ女子の大量顔射シコシコサポート10色 新木希空 （ブルーレイディスク）',
      releaseDate: '2025-07-22',
      actress: '新木希空',
    },
    {
      rank: 112,
      cid: 'HNAMH-004',
      javdbId: '357a21',
      originalTitle: '初めての真正中出し解禁5発 渋谷のラブホで無制限生姦',
      releaseDate: '2023-11-20',
      actress: '泉りおん',
    },
    {
      rank: 113,
      cid: 'PIYO-228',
      javdbId: 'BzPqEG',
      originalTitle:
        'ひよこ7周年記念。本物中出し超孕ませドクター。第2病棟～けなげなひよこ女子に俺の子を孕ませる極悪医療～ 桃瀬ひまりちゃんのパンティとチェキ付き',
      releaseDate: '2026-01-22',
    },
    {
      rank: 114,
      cid: 'STARS-981',
      javdbId: 'B8N7Z4',
      originalTitle: '本気の接吻。がむしゃらに粘膜が絡み合って性欲が尽きるまで求め合う  小湊よつ葉',
      releaseDate: '2023-12-26',
      actress: '小湊よつ葉',
    },
    {
      rank: 115,
      cid: 'FCDSS-092',
      javdbId: 'RkKmVz',
      originalTitle:
        '本郷愛 チ〇ポを狂わすノンストップ超誘惑セックス8時間ベスト！【FALENOセレクション】',
      releaseDate: '2025-02-06',
      actress: '本郷愛',
    },
    {
      rank: 116,
      cid: 'SNOS-122',
      javdbId: 'z4bmdb',
      originalTitle:
        '芸能界に蔓延するキメセクに元子役グラドルが挑戦 紫堂るい （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '鮫島、貞松大輔、えりぐち、TECH、紫堂るい',
    },
    {
      rank: 117,
      cid: 'NHDTB-964',
      javdbId: '7yydXR',
      originalTitle:
        'ナチュラルハイ25周年記念作品 生中集団9 増量SP＋シリーズ厳選11人総集編付き2枚組 菜月ひかるさんのパンティとチェキ付き',
      releaseDate: '2024-09-26',
    },
    {
      rank: 118,
      cid: 'START-337',
      javdbId: 'r3YY3Z',
      originalTitle:
        '閉店後の棚卸しで終電を逃した俺はバイトの子の家に泊まることに 頑なにすっぴんを拒む姿が可愛くて火が付いたが逆に絶倫腰フリマシーンと化した彼女に朝までしぼり取られた 星乃莉子',
      releaseDate: '2025-06-26',
      actress: 'ひがし、星乃莉子',
    },
    {
      rank: 119,
      cid: 'DANDYA-009',
      javdbId: 'QNzQg7',
      originalTitle:
        '「若い子のパンツじゃなくていいの？」叔母さんだけが何度もイキまくる射精禁止のお仕置きSEXが下着を盗んだ僕の罰',
      releaseDate: '2025-11-20',
      actress: '堀内ハジメ、ラビットけんと',
    },
    {
      rank: 120,
      cid: 'FSDSS-906',
      javdbId: 'RkkNez',
      originalTitle: '体液で交感する絶え間ない官能セックス 女神ジュン パンティと写真付き',
      releaseDate: '2024-12-12',
      actress: '吉村卓、貞松大輔、マッスル澤野、女神ジュン',
    },
    {
      rank: 121,
      cid: 'SONE-788',
      javdbId: 'qAJ22N',
      originalTitle:
        '大きくて柔らかくて尊い― 神のおっぱいでシコり尽くす 神話級Lカップ超堪能3時間スペシャル 木村愛心 （ブルーレイディスク）',
      releaseDate: '2025-07-22',
      actress: '鮫島、小田切ジュン、マッスル澤野、アベ、木村愛心',
    },
    {
      rank: 122,
      cid: 'DLDSS-437',
      javdbId: 'bKXpdE',
      originalTitle:
        '妊娠中の妻にこっそり隠れて行った人妻デリヘルで義母と遭遇！「内緒にしてくれるなら…奈々の妊娠中はワタシが…」とお店以外でも欲求不満を満たし合う関係に…。 小沢菜穂',
      releaseDate: '2025-11-20',
      actress: '小沢菜穂、平ボンド',
    },
    {
      rank: 123,
      cid: 'MNGS-051',
      javdbId: '96p0mV',
      originalTitle:
        '【FANZA限定】マッサージ師に際どい秘部をほぐされすぎて快楽に我慢できず尿道決壊でカーテンに大量アクメ潮飛び散らせNTRれました… 彩月七緒 生写真3枚セット',
      releaseDate: '2026-05-06',
      actress: '彩月七緒',
    },
  ];

var DMM_MONTHLY_DATA_2026_09 = [
    {
      rank: 1,
      cid: 'SPONE-001',
      javdbId: 'OXRbKD',
      originalTitle:
        '【特典映像収録版】新人NO.1STYLE 国宝級清純フェイスに最強ボディとんでもない原石が遂に、脱ぐ 蒼井すずAVデビュー',
      releaseDate: '2026-10-13',
      actress: '蒼井すず',
    },
    {
      rank: 2,
      cid: 'ZOOOZ-002',
      javdbId: 'WwyJYZ',
      originalTitle:
        '世界の美女 46人1414分 イケてるハイレベルな美女限定！金髪・黒人・アジアン！ スタイル抜群美女とハメハメした日本人軍団のセックスの記録',
      releaseDate: '2025-10-08',
    },
    {
      rank: 3,
      cid: 'SIVR-525',
      javdbId: '4Dvp4b',
      originalTitle: '【VR】最強ヒロイン瀬戸環奈にいちゃいちゃ戯れながら責められてみない？',
      releaseDate: '2026-10-11',
      actress: '瀬戸環奈',
    },
    {
      rank: 4,
      cid: 'SNOS-384',
      javdbId: 'RkPrn4',
      originalTitle:
        '最強ヒロインと24時間パイズリ・手コキ・本番で射精（イカ）され続ける…全てアドリブ‘素’の瀬戸環奈 合計10射精【密着24時間映像】 生写真3枚セット',
      releaseDate: '2026-10-14',
      actress: '瀬戸環奈',
    },
    {
      rank: 5,
      cid: 'HUNTC-592',
      javdbId: 'nKYvK4',
      originalTitle:
        '時間停止スプラッシュエステ！悪徳施術師の‘停止装置’でカラダの時を止められエビ反りロック！止まった世界で快感だけは止まらず決壊潮吹きエンドレス！',
      releaseDate: '2026-10-13',
    },
    {
      rank: 6,
      cid: 'HHKL-209',
      javdbId: 'WwyM6R',
      originalTitle:
        '『オマエ童貞で悩んでるの！？』『マジうけるんだけど！』『ヤラセてあげてもいいよよ！』義姉はボクが苦手なギャル！でも実は優しかった！だって…ボクが童貞で悩んでいたら童貞卒業させてくれるって言うんだもん！！口は悪いけど… 百永さりな',
      releaseDate: '2025-10-03',
      actress: '百永さりな',
    },
    {
      rank: 7,
      cid: 'MDVR-433',
      javdbId: 'mODMPR',
      originalTitle:
        '【VR】抜きナシ×お触り禁止×健全メンエス店 期待を裏切らない厳選美女と出会える超高級マンションエステに通い詰めたら…澪ちゃんから挿入を匂わせてきたんだ。 石川澪',
      releaseDate: '2026-07-04',
      actress: '石川澪',
    },
    {
      rank: 8,
      cid: 'SNOS-338',
      javdbId: 'J0MwO8',
      originalTitle:
        '新人NO.1STYLE 国宝級清純フェイスに最強ボディとんでもない原石が遂に、脱ぐ 蒼井すずAVデビュー 生写真3枚セット',
      releaseDate: '2026-10-14',
      actress: '蒼井すず',
    },
    {
      rank: 9,
      cid: 'SDJS-370',
      javdbId: 'nKDpqe',
      originalTitle: '姉弟だが、お互いのカラダでオナニーし合う日常。守屋よしの',
      releaseDate: '2026-07-22',
      actress: '守屋よしの',
    },
    {
      rank: 10,
      cid: 'MURIKURI-015',
      javdbId: 'mO7YOr',
      originalTitle: 'デカ乳首J●痴●ガチナマ路線 調教いじりで感度ぶっ壊れちびマン痙攣膣絞め中出し',
      releaseDate: '2026-09-17',
    },
    {
      rank: 11,
      cid: 'SIVR-494',
      javdbId: 'QN7DYJ',
      originalTitle:
        '【VR】入院先のナースさんがお世話になってるIcupグラドルに超そっくり！思わず勃起した僕のち●ぽにやさし～く寄り添ってパイズリとおま●こで性処理手伝ってくれる夢の入院性活 紫堂るい',
      releaseDate: '2026-06-20',
      actress: '紫堂るい',
    },
    {
      rank: 12,
      cid: 'BLOR-278',
      javdbId: 'OXVzdD',
      originalTitle: '絶頂女子まとめ01 性感マッサージと巨根で徹底的にイカされる女子たち',
      releaseDate: '2025-10-07',
    },
    {
      rank: 13,
      cid: 'OFJE-593',
      javdbId: 'bKE2B6',
      originalTitle: '本郷愛 引退 S1全19作コンプリート 15時間BOX （ブルーレイディスク）',
      releaseDate: '2025-12-30',
      actress: '本郷愛',
    },
    {
      rank: 14,
      cid: 'NEKK-009',
      javdbId: 'KkPpkv',
      originalTitle:
        '【女性用風俗】【実録盗撮】ガチイキ性感マッサージ！性に悩める美少女を裏オプションでイキ狂わせるッ！女風初体験4名245分',
      releaseDate: '2026-06-02',
    },
    {
      rank: 15,
      cid: 'MIDA-812',
      javdbId: '6dQXOZ',
      originalTitle: '尊すぎる原石 最強幼ビジュAV DEBUT 平野楓 生写真3枚セット',
      releaseDate: '2026-10-07',
      actress: '平野楓',
    },
    {
      rank: 16,
      cid: 'OFJE-594',
      javdbId: '5nmPxz',
      originalTitle:
        'S1オールスター23名大集合 全7タイトル全部入り 完全ベスト版16時間 未公開の40人越え乱交初収録 （ブルーレイディスク）',
      releaseDate: '2025-12-30',
      actress:
        '河北彩花（河北彩伽）本郷愛金松季歩田野憂明日葉みつは楓ふうあ奥田咲浅野こころ七ツ森りり三田真鈴',
    },
    {
      rank: 17,
      cid: 'MIKR-039',
      javdbId: 'GZWgx5',
      originalTitle:
        '【FANZA限定】いつも強気な年下の女上司は激ピスされたがりのドMマ●コでした。 お酒に弱い女上司を介抱してベッドに寝かせたあと、無防備な腋チラとパンチラに欲情して襲ってしまうと、俺の絶倫チ○ポを「もっと…」と欲しがり、何度も何度もイキ… 幸村泉希 生写真2枚付き',
      releaseDate: '2025-10-08',
      actress: '幸村泉希',
    },
    {
      rank: 18,
      cid: 'JUVR-296',
      javdbId: 'DRP7RM',
      originalTitle:
        '【VR】家賃滞納中の巨乳妻のノーブラ誘惑 肉体返済を受けいれた僕は飢えた人妻の搾精SEXに耐えられず何度も中出ししまくった…。【超高画質8KVR】 七海ティナ',
      releaseDate: '2026-06-09',
      actress: '七海ティナ',
    },
    {
      rank: 19,
      cid: 'PFES-115',
      javdbId: 'DRnkPJ',
      originalTitle:
        '【Hカップおっとり妹系】【Jカップイケイケギャル】【Iカップ甘やかしお姉さん】 会社の先パイ3人に誘われ男はボクひとり！？囲まれ挟まれ揉んで甘えて、、爆乳だらけのハーレム女子旅 莉々はるか 清宮仁愛 柏木ふみか （ブルーレイディスク）',
      releaseDate: '2026-03-31',
      actress: '莉々はるか清宮仁愛柏木ふみか',
    },
    {
      rank: 20,
      cid: 'JJGG-009',
      javdbId: 'yxkNQ0',
      originalTitle: 'Mカップ43歳。イキ果てる。豊満な体の本物セックス…孕むまで中出し。 綱島礼香',
      releaseDate: '2026-10-02',
      actress: '綱島礼香',
    },
    {
      rank: 21,
      cid: 'SNOS-381',
      javdbId: '82WdM9',
      originalTitle:
        '僕の性欲までフォローしてくれる思いやりあり過ぎ美人上司のシコシコサポート付き新人研修 園梨音 生写真3枚セット',
      releaseDate: '2026-10-14',
      actress: '園梨音',
    },
    {
      rank: 22,
      cid: 'START-588',
      javdbId: 'e8DXyb',
      originalTitle:
        'スワッピング趣味の変態夫婦にNTR性癖を植えつけられる！純粋ウブな庶民妻を金持ち夫妻に貸出したことでインモラルな快楽に沼ってしまう 青空ひかり',
      releaseDate: '2026-07-08',
      actress: '青空ひかり美咲かんな',
    },
    {
      rank: 23,
      cid: 'SNOS-343',
      javdbId: 'dePwm9',
      originalTitle:
        '私の教師人生は、誰もが振り返るこの奇跡の顔と体を持つ教え子のせいで終わりそうです 博多彩葉 生写真3枚セット',
      releaseDate: '2026-10-14',
      actress: '博多彩葉',
    },
    {
      rank: 24,
      cid: 'SIVR-467',
      javdbId: '96pBnV',
      originalTitle:
        '【VR】VR NO.1 STYLE 紫堂るい 解禁 アナザーストーリー 家庭教師が憧れの天然Icupグラビアアイドルだったら…',
      releaseDate: '2026-02-03',
      actress: '紫堂るい',
    },
    {
      rank: 25,
      cid: 'START-583',
      javdbId: '3nNz81',
      originalTitle:
        '絶対ヌケる！絶頂の向こう側 ガチでイキすぎ失禁痙攣トランス 泣いてもわめいても容赦なく突き刺す追撃HARDピストン 天神羽衣',
      releaseDate: '2026-07-08',
      actress: '天神羽衣',
    },
    {
      rank: 26,
      cid: 'SNOS-166',
      javdbId: 'RkX3Rp',
      originalTitle:
        '「ご主人様、私にかけて」僕のチ●ポが好きすぎて生搾りザーメン奪い合う顔射おねだりWメイド 安達夕莉 新木希空 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-05-13',
      actress: '安達夕莉新木希空',
    },
    {
      rank: 27,
      cid: 'SNOS-334',
      javdbId: 'nK7zbV',
      originalTitle:
        '最強ビジュOLさん、出張先で死ぬほど嫌いな中年上司と相部屋… でも過激セクハラにまさかの快楽堕ちしちゃう！ 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-08-12',
      actress: '瀬戸環奈',
    },
    {
      rank: 28,
      cid: 'EBWH-294',
      javdbId: 'ZNv6WA',
      originalTitle:
        'あの手この手で媚薬仕込まれ、100日後に義父ペニスに子宮溺れる、奥ゆかしたわわ乳嫁 柏木ふみか （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-21',
      actress: '柏木ふみか',
    },
    {
      rank: 29,
      cid: 'JUVR-281',
      javdbId: 'Kk0yaP',
      originalTitle:
        '【VR】MadonnaVR史上初！！専属美熟女10人大集合！！町内会の合宿で欲求不満な人妻たちが僕1人を求め合い奪い合う超ハーレム温泉中出し乱交 8KVR',
      releaseDate: '2026-10-01',
      actress:
        '白石茉莉奈木下凛々子愛弓りょう篠原いよ椎名ゆなYUUKA（新妻ゆうか）めぐり（藤浦めぐ）古東まりこ友田真希風間ゆみ',
    },
    {
      rank: 30,
      cid: 'HUNVR-210',
      javdbId: 'wK47a7',
      originalTitle:
        '【VR】【VR史上最高峰のタイパ】最初から最後までほぼヌキどころ！だって開始約20秒で即エッチな事が始まっちゃってるんですから！ 顔面偏差値＆SEX偏差値共に激高！ハイスペックな4人の巨乳女子大生と最初から最後までエッチしまくり！！女子大生だらけのシェアハウスに…',
      releaseDate: '2026-05-06',
    },
    {
      rank: 31,
      cid: '3DSVR-2009',
      javdbId: 'nK7xZ6',
      originalTitle: '【VR】【8K】性欲処理専門セックス外来医院VR 特別編 SODSTAR MINAMO',
      releaseDate: '2026-07-26',
      actress: 'MINAMO',
    },
    {
      rank: 32,
      cid: 'KWBD-410',
      javdbId: 'Kk6XY7',
      originalTitle:
        '伊藤舞雪 7周年 全てが圧倒的クイーン さらなるエロティシズムSEX 最新52コーナー12時間',
      releaseDate: '2025-10-07',
      actress: '伊藤舞雪',
    },
    {
      rank: 33,
      cid: 'SONE-912',
      javdbId: '5n40z8',
      originalTitle: '最強ヒロインのパイズリ挟射 瀬戸環奈 （ブルーレイディスク）',
      releaseDate: '2025-10-14',
      actress: '瀬戸環奈',
    },
    {
      rank: 34,
      cid: 'JUR-281',
      javdbId: 'dePv40',
      originalTitle:
        'こんな母乳妻に甘えたいー。小豆もち 30 歳 AV デビュー！！ 餅のような柔乳Hcup 乳房から零れおちる神秘的ミルクー。 （BOD）',
      releaseDate: '2026-10-13',
      actress: '小豆もち',
    },
    {
      rank: 36,
      cid: 'NSODN-027',
      javdbId: 'mOP0KY',
      originalTitle:
        '町中華NTR 地元の常連客に愛される30年続く人気町中華の絶倫店主がワケあり爆乳人妻パートさんと店内でハメまくる寝取られ性交記録。',
      releaseDate: '2026-10-13',
    },
    {
      rank: 37,
      cid: 'MDVR-444',
      javdbId: '0ea1xX',
      originalTitle: '【VR】「私の唾液飲み干して」ベロキス回春エステで痴女られたボク 美園和花',
      releaseDate: '2026-10-05',
      actress: '美園和花',
    },
    {
      rank: 38,
      cid: 'HUNTC-487',
      javdbId: 'nK38AX',
      originalTitle:
        '親に隠れて妹とキスだけの約束の生活。「キスだけ…兄妹なんだから…」大人になった妹とキスだけの約束のはずが我慢できず…。久しぶりに帰省したら…2',
      releaseDate: '2026-02-24',
    },
    {
      rank: 39,
      cid: 'SNOS-377',
      javdbId: 'nK7mNX',
      originalTitle:
        '「今日はアブノーマルなエッチがしたい…」 そう甘えるCA彼女を無茶苦茶にしたらドMに目覚めた 河北彩花 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-09-23',
      actress: '河北彩花（河北彩伽）',
    },
    {
      rank: 40,
      cid: 'KAVR-527',
      javdbId: 'kKaMDe',
      originalTitle:
        '【VR】Hカップ巨乳上司と出張先相部屋 セクハラ接待の憂さ晴らし係の僕は彩月さんの気が済むまでエグい腰振り騎乗位で何度も何度も慰め中出し 彩月七緒',
      releaseDate: '2026-10-06',
      actress: '彩月七緒',
    },
    {
      rank: 41,
      cid: 'SODS-074',
      javdbId: 'P9Vz12',
      originalTitle:
        'ゆるふわ系保育科女子大生 やさしい笑顔・Hカップ・くびれで癒される10時間！18作品18本番 彩月七緒',
      releaseDate: '2025-10-08',
      actress: '彩月七緒',
    },
    {
      rank: 42,
      cid: 'SIVR-495',
      javdbId: 'Ww72w7',
      originalTitle:
        '【VR】えっ、今！？僕の困る顔が見たくてゲリラ的にエロがってくる猟奇的なドスケベ戯れサド彼女 川越にこ',
      releaseDate: '2026-06-30',
      actress: '川越にこ',
    },
    {
      rank: 43,
      cid: 'MIHD-015',
      javdbId: 'BzQwM1',
      originalTitle: 'ハメドリ 配信限定 MOODYZ専属のナチュラルSEXを解禁 神宮寺ナオ',
      releaseDate: '2026-10-12',
      actress: '神宮寺ナオ',
    },
    {
      rank: 44,
      cid: 'ADN-762',
      javdbId: '4Dxv7p',
      originalTitle: 'あなたの為に、私は… 不倫の言い訳を探す汗まみれの若妻 幸村泉希',
      releaseDate: '2026-03-03',
      actress: '幸村泉希',
    },
    {
      rank: 45,
      cid: 'IPBZ-021',
      javdbId: 'r3zrAq',
      originalTitle: '配信限定:ナチュポケ REC:ひなの花音 ハメ撮り IP女優のありのまま解禁',
      releaseDate: '2026-05-30',
      actress: 'ひなの花音',
    },
    {
      rank: 46,
      cid: 'START-525',
      javdbId: 'mObvXy',
      originalTitle:
        '新卒で入った会社の研修がしんどくて息抜きにピンサロ行ったらめちゃ怖いOJT女上司と遭遇「副業バラされたくなければ…」とカマかけたら見事本番OK 以来会社でも自宅でも生ハメしまくり最高にハッピー 青空ひかり',
      releaseDate: '2026-04-08',
      actress: '青空ひかり',
    },
    {
      rank: 47,
      cid: 'YMBP-001',
      javdbId: '6dQJy7',
      originalTitle: '借金漬けヤンママAV返済 須藤かおる',
      releaseDate: '2026-09-22',
      actress: '須藤かおる',
    },
    {
      rank: 48,
      cid: '3DSVR-1968',
      javdbId: 'deDagQ',
      originalTitle:
        '【VR】ダークエルフVR ※性欲の種族値が高いらしい注意 身体がめちゃくちゃいいメスのダークエルフを 召喚させてアへアへになるまで何日もかけて、人間のチ●ポと射精でわからせる。',
      releaseDate: '2026-06-24',
    },
    {
      rank: 49,
      cid: 'SONE-720',
      javdbId: 'deROGe',
      originalTitle:
        '【FANZA限定】最強ヒロインに会える風俗店 瀬戸環奈 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-06-11',
      actress: '瀬戸環奈',
    },
    {
      rank: 50,
      cid: 'SNOS-378',
      javdbId: 'e8vJrr',
      originalTitle:
        '大晦日、タレントと寮長2人きりの学生寮 純白Icupに欲情し解雇覚悟で手を出してしまった中年チ●ポに寂しさ埋めたいグラドルマ●コが感じまくる芸能人背徳性交 紫堂るい',
      releaseDate: '2026-10-13',
      actress: '紫堂るい',
    },
    {
      rank: 51,
      cid: 'SIVR-514',
      javdbId: 'GZqeAz',
      originalTitle:
        '【VR】S1女優 ‘金松季歩’の艶かしいエロス解放 生々しく濃密に絡み合う危険なワンナイト',
      releaseDate: '2026-10-14',
      actress: '金松季歩',
    },
    {
      rank: 52,
      cid: 'MIZD-487',
      javdbId: '9640zX',
      originalTitle:
        '【FANZA限定】乙アリス MOODYZ1200分BEST アリス in Wonderful world！ 生写真2枚付き',
      releaseDate: '2025-10-08',
      actress: '乙アリス',
    },
    {
      rank: 53,
      cid: 'URVRSP-595',
      javdbId: 'veREYY',
      originalTitle:
        '【VR】【8K】シンフォニック淫ボイス ∞囁き妊娠淫語で洗脳中出しさせる強●子づくり監禁ハウス 逢沢みゆ',
      releaseDate: '2026-09-11',
      actress: '逢沢みゆ',
    },
    {
      rank: 54,
      cid: 'SNOS-313',
      javdbId: 'ZNzk9q',
      originalTitle:
        '最強ヒロインの全部でオナニーしようよ【ベロキス・フェラ・パイズリ・手コキ・脚コキ・美顔面・おま●こ特化】全身全技ズリネタコンプリート 極上オナニーサポート 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-09-09',
      actress: '瀬戸環奈',
    },
    {
      rank: 55,
      cid: 'SNOS-404',
      javdbId: 'AqJpGK',
      originalTitle:
        '【FANZA限定】モテまくりH経験豊富な女友達と付き合えることになった僕。でも… 元カレ達の歴戦チ●ポと比べられ！見下され！痴女られる！ 悔シコどぴゅどぴゅダサ射精！ 安達夕莉 生写真3枚セット',
      releaseDate: '2026-10-14',
      actress: '安達夕莉',
    },
    {
      rank: 56,
      cid: 'SNOS-037',
      javdbId: 'wKV24B',
      originalTitle:
        'グラドルと同棲生活しちゃう？ 紫堂るいの完全主観オナニーサポート （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-14',
      actress: '紫堂るい',
    },
    {
      rank: 57,
      cid: 'SDMM-195',
      javdbId: 'Ww3Wde',
      originalTitle:
        'マジックミラー号 絶対に気持ちよくなってはイケない！！！愛する彼氏とはミラー越し30cmの状況でくすぐり我慢ゲームと称して凄腕AV男優の妙技でHにいじくりたおす！！！音が鳴ったらイッた合図！見てるこっちが恥ずかしくなるほどの熱熱カップルさんSP 10組収録',
      releaseDate: '2025-04-24',
    },
    {
      rank: 58,
      cid: 'KAVR-525',
      javdbId: 'nKxXpX',
      originalTitle:
        '【VR】グラビア撮影って嘘なんだ、ごめんね。おけけハミ出して可愛いね。発育途中のちっぱいも初心ま●こもたっぷり可愛がってあげるね。 齋藤かさね',
      releaseDate: '2026-10-08',
      actress: '齋藤かさね',
    },
    {
      rank: 59,
      cid: 'SONE-638',
      javdbId: 'RkG2b8',
      originalTitle:
        '最強ヒロインの素顔とリアルセックスが見たい！筋書きなしで性欲のままに何度もずっと求め合うエロくて生々しい2泊3日SEXデート 瀬戸環奈',
      releaseDate: '2025-04-08',
      actress: '瀬戸環奈',
    },
    {
      rank: 60,
      cid: 'SIVR-511',
      javdbId: 'P9Yyq2',
      originalTitle:
        '【VR】世話焼きブラコン姉の私が、思春期の弟にお風呂で凸ハメされた日。弟チ●ポを射精まで面倒見てあげる甘やかし近親性活3年目 川越にこ',
      releaseDate: '2026-10-07',
      actress: '川越にこ',
    },
    {
      rank: 61,
      cid: 'IPVR-388',
      javdbId: 'nKxBnw',
      originalTitle:
        '【VR】舐めたがりビジュ最強メイドの全身ぺろぺろ涎まみれご奉仕とねっとり視姦フェラチオ 愛才りあ',
      releaseDate: '2026-10-10',
      actress: '愛才りあ',
    },
    {
      rank: 62,
      cid: 'IPZZ-964',
      javdbId: 'gyP70G',
      originalTitle:
        '身代わり肉便器 射精しても射精しても終わらない絶倫極道オヤジとの10日間監禁生活 ひなの花音 （BOD）',
      releaseDate: '2026-10-13',
      actress: 'ひなの花音',
    },
    {
      rank: 63,
      cid: 'JUVR-314',
      javdbId: 'gyxk2g',
      originalTitle:
        '【VR】松岡すず Madonna VR初登場 妻の友人が働くマッサージ店に行ってみたら 連続射精でチ〇ポがバカになるまでヌイてくれる 超優良な人妻奉仕メンズエステだった！！ 超高画質8K',
      releaseDate: '2026-10-12',
      actress: '松岡すず',
    },
    {
      rank: 64,
      cid: 'MMGO-007',
      javdbId: 'pN7dq',
      originalTitle:
        'ディープス20周年記念スペシャル作品！3枚組15時間！素人ナンパNo.1宣言！ザ・マジックミラー総集編 超永久保存版！二度と出会えない素人美女図鑑 全員顔出し！本物素人娘 総勢202人！！',
      releaseDate: '2018-11-07',
    },
    {
      rank: 65,
      cid: 'NAMH-051',
      javdbId: 'DRKp3K',
      originalTitle: '極小パイパン膣＆146cmの美少女 はじめての真正中出し解禁13発 南日菜乃',
      releaseDate: '2026-01-21',
      actress: '南日菜乃',
    },
    {
      rank: 66,
      cid: 'CJVR-073',
      javdbId: 'Aq2vVn',
      originalTitle:
        '【VR】「大人のキスを教えてアゲル」唾液たっぷりベロキス接吻レクチャー家庭教師に痴女られたボク 釈アリス',
      releaseDate: '2026-10-06',
      actress: '釈アリス',
    },
    {
      rank: 67,
      cid: 'SCDC-011',
      javdbId: 'EbJRGd',
      originalTitle:
        '【アナル＆マ●コ2穴同時挿入→アへ顔美貌崩壊】初撮り清純レイヤーが超素直なので…尻穴フルコース開発試してみたら規格外の超絶ドMだった件【人生初6P乱交】',
      releaseDate: '2026-10-13',
    },
    {
      rank: 68,
      cid: 'IPVR-341',
      javdbId: 'yx7MV0',
      originalTitle:
        '【VR】桃乃木かな10th anniversary 初VRベスト SNS総フォロワー350万人超えのトップインフルエンサーとの夢のSEX体験 全11タイトル11本番完全ノーカット収録',
      releaseDate: '2025-10-09',
      actress: '桃乃木かな',
    },
    {
      rank: 69,
      cid: 'URVRSP-604',
      javdbId: 'KkJGmm',
      originalTitle:
        '【VR】【8K】追い込むようなつゆだくベロチュウと窒息責めで脳がトロけるまで快楽漬けにされる小悪魔J系コンビの放課後呼吸管理ヘルス 西元めいさ・皆月ひかる',
      releaseDate: '2026-10-07',
      actress: '西元めいさ皆月ひかる',
    },
    {
      rank: 70,
      cid: 'SDDE-770',
      javdbId: '6dnzaa',
      originalTitle: '妄想シミュレーター 俺の妄想が現実になり、思うがまま俺はすべてを手に入れた',
      releaseDate: '2026-11-04',
      actress: '北岡果林笹倉彩夏川あゆみ',
    },
    {
      rank: 71,
      cid: 'SNOS-059',
      javdbId: '4DxEm6',
      originalTitle:
        '見るからにエッチな彼女のお姉さんに僕のちんちん食べられる。 金松季歩 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-02-11',
      actress: '金松季歩',
    },
    {
      rank: 72,
      cid: 'MIHD-002',
      javdbId: 'kKDaG4',
      originalTitle: 'ハメドリ 配信限定 MOODYZ専属のナチュラルSEXを解禁 宮下玲奈',
      releaseDate: '2026-05-13',
      actress: '宮下玲奈',
    },
    {
      rank: 73,
      cid: 'LULU-401',
      javdbId: 'XeY3Me',
      originalTitle:
        '【FANZA限定】巨乳の陰キャオタク友達の無防備パンチラ食い込みハミまんにチンピクしてしまいエロ漫画で学んだマン肉舐めしゃぶり交尾を実践したらお互いに性欲猿化して金玉空っぽになるまで孕ませ中出し汁を子宮にプレゼントしまくった。 夕美しおん チェキとパンティ付き',
      releaseDate: '2025-10-08',
      actress: '夕美しおん',
    },
    {
      rank: 74,
      cid: 'KTKF-1005',
      javdbId: 'nKWJZ4',
      originalTitle:
        '※福袋※輪〇レ〇プ永久保存版 女10vs男80（推定）の逆ハーレム・パラダイス 22時間51分（1371分）',
      releaseDate: '2025-10-13',
    },
    {
      rank: 75,
      cid: 'OFJE-545',
      javdbId: 'V4PEDG',
      originalTitle:
        '浅野こころデビュー2周年 最新12タイトル12時間 拝啓、浅野こころ様貴女がデビューしてから2年が経ちました。 （ブルーレイディスク）',
      releaseDate: '2025-10-14',
      actress: '浅野こころ川越にこ',
    },
    {
      rank: 76,
      cid: 'MDVR-439',
      javdbId: 'OXyw9B',
      originalTitle:
        '【VR】石原希望’ほぼ‘ノーカット×ハメ撮り×8KVR 最高の没入感でアナタのチ○ポでイキまくるイチャLOVE SEX',
      releaseDate: '2026-10-08',
      actress: '石原希望',
    },
    {
      rank: 77,
      cid: 'SNOS-376',
      javdbId: 'Ww4M27',
      originalTitle:
        '真面目な経理部の田野さんとまさかのデリヘルで遭遇！しかも脱がしたら乳デケェ！「ヒヒwwこれをネタにいっぱいパイズリしてやるぅ」 田野憂 生写真3枚セット',
      releaseDate: '2026-10-14',
      actress: '田野憂',
    },
    {
      rank: 78,
      cid: 'MVSD-614',
      javdbId: 'DRRRqJ',
      originalTitle:
        'お前らが大好きな国民的グラドル「M・H」のハメ撮り動画あるけど見たい奴いる？ 【胸糞】清楚系グラドルがキモ豚権力おやじのチ○ポをしゃぶりまくる肉便器オーディション',
      releaseDate: '2024-08-20',
    },
    {
      rank: 79,
      cid: 'ACHJ-093',
      javdbId: 'V4gJBA',
      originalTitle:
        '童貞の僕が変態と化したワケ…隣に住む美しい人妻に「これが普通よ！」と教え込まれた七つの調教 神宮寺ナオ （BOD）',
      releaseDate: '2026-10-13',
      actress: '神宮寺ナオ',
    },
    {
      rank: 80,
      cid: 'DVMM-294',
      javdbId: '0e63GJ',
      originalTitle:
        '顔出しMM号 仲良し夫婦限定 ザ・マジックミラー 清楚な奥様が過激な絶頂寸止め焦らし体験！極限まで全身の感度が高まった人妻オマ○コにズボっと生挿入！旦那の目の前で絶叫のけ反り即イキ無限絶頂！全員NTR生中出し！',
      releaseDate: '2025-10-07',
    },
    {
      rank: 81,
      cid: 'NAMH-053',
      javdbId: 'r34PNv',
      originalTitle: '現役アイドルの膣奥8発 極上パイパン真正中出し解禁 西元めいさ',
      releaseDate: '2026-02-05',
      actress: '西元めいさ',
    },
    {
      rank: 82,
      cid: 'NAMH-052',
      javdbId: 'EbndN3',
      originalTitle: '元子役のパイパン膣に13発 明るいお姉さん真正中出し解禁 RUU',
      releaseDate: '2026-02-04',
      actress: 'RUU（十束るう）',
    },
    {
      rank: 83,
      cid: 'SDAM-182',
      javdbId: '82gYOx',
      originalTitle:
        '塩原温泉で見つけた女子旅お嬢さんタオル一枚男湯入ってみませんか？64 美容にビンカンな清楚ギャル6名に声かけ 温泉でエステをうけてもっと綺麗になりませんか？特別ミッション「男性客に美容オイルで全身マッサージしてもらう」編',
      releaseDate: '2026-11-04',
    },
    {
      rank: 84,
      cid: 'IPZZ-856',
      javdbId: 'r34NrR',
      originalTitle:
        '【FANZA限定】清楚なのに隠れスケベでいつでもエッチOK 顔面優勝彼女と過ごす顔射しまくり最高主観同棲 愛才りあ 生写真3枚セット',
      releaseDate: '2026-05-13',
      actress: '愛才りあ',
    },
    {
      rank: 85,
      cid: 'IPZZ-942',
      javdbId: 'r308mN',
      originalTitle:
        '艶やか美神 三澄寧々 覚醒大乱交ノーカットSP 総勢21名18発オーバーの大ザーメン祭り！ 三澄寧々 （BOD）',
      releaseDate: '2026-10-13',
      actress: '三澄寧々',
    },
    {
      rank: 86,
      cid: 'FWAY-104',
      javdbId: 'YwgkAz',
      originalTitle: '好きだぜコノヤロー 生写真3枚セット',
      releaseDate: '2026-10-14',
      actress: '瀬戸環奈',
    },
    {
      rank: 87,
      cid: 'JUR-845',
      javdbId: 'GZK9M5',
      originalTitle:
        '「またヌキたくなったらおいで」 叔母・凛々子さんと真夏の密室で 涎、汗、淫汁が垂れ堕ちる秘密の密着騎乗位搾精エステ （BOD）',
      releaseDate: '2026-10-13',
      actress: '木下凛々子',
    },
    {
      rank: 88,
      cid: 'IPZZ-970',
      javdbId: 'yxWwrb',
      originalTitle:
        'エステ店に就職が決まったおっとり清楚な僕の彼女はクズ客に跨り施術を強要され勃起チ○ポを布越し挿入され吐息を漏らし自ら腰を振りながら嬉し顔で何度も背徳絶頂するふしだらエステティシャンになっていました。 花咲澪 （BOD）',
      releaseDate: '2026-10-13',
      actress: '花咲澪',
    },
    {
      rank: 89,
      cid: 'URVRSP-614',
      javdbId: 'P9YrNe',
      originalTitle: '【VR】【8K】射精師～アナザーストーリー～3 由奈・紗和・ゆの・しおり',
      releaseDate: '2026-10-09',
    },
    {
      rank: 90,
      cid: 'IPZZ-973',
      javdbId: 'dePw8B',
      originalTitle:
        '【FANZA限定】元芸能人お姉さんがマイクをチ○ポに持ち替えておしゃぶり舐める丁寧フェラチオと凄まじい顔面ザーメンシャワー 白石るな 生写真3枚セット',
      releaseDate: '2026-10-14',
      actress: '白石るな',
    },
    {
      rank: 91,
      cid: 'NAMH-038',
      javdbId: 'gyzrKE',
      originalTitle: '元アイドルが奇跡の13発 はじめての真正中出し解禁 本城はな',
      releaseDate: '2025-09-24',
      actress: '本城はな',
    },
    {
      rank: 92,
      cid: 'START-582',
      javdbId: 'AqVBgK',
      originalTitle:
        '初ソープ研修 SOD新卒3年目シャカリキ奮闘ご奉仕 こあくまつなが発動！？アニメ声の気持ちよさにヤラレちまいなSP 松永あかり',
      releaseDate: '2026-07-08',
      actress: '松永あかり岬さくら',
    },
    {
      rank: 93,
      cid: 'SNOS-392',
      javdbId: 'mOPqwy',
      originalTitle:
        '【FANZA限定】同窓会から始まった裏切りNTR 最低クズ元彼の絶倫ピストンに10年ぶりに滅茶苦茶狂わされ人生で一番乱れ堕ちた最低な私。 金松季歩 生写真3枚セット',
      releaseDate: '2026-10-14',
      actress: '金松季歩',
    },
    {
      rank: 94,
      cid: 'NHDTC-256',
      javdbId: 'yxWwpd',
      originalTitle:
        '居酒屋串刺し理解らせ。 個室でイチャつく巨乳女を潰れた彼氏の前で代わる代わる連続中出し',
      releaseDate: '2026-10-08',
    },
    {
      rank: 95,
      cid: 'MIDA-176',
      javdbId: 'a8q0Gn',
      originalTitle:
        'ずぶ濡れ不倫愛 一度ハメた競泳水着の教え子に絶倫チ○ポを惚れられて何度も何度もSEXした練習後のプールサイド 石川澪 （ブルーレイディスク） 生写真2枚付き',
      releaseDate: '2025-10-08',
      actress: '石川澪',
    },
    {
      rank: 96,
      cid: 'EBWH-309',
      javdbId: 'ZNxOdv',
      originalTitle:
        '【FANZA限定】オレが痴●をヤメられないのはだらしないデカパイ人妻がスキだらけで電車に乗るせいだろ？ 柏木ふみか （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-03-18',
      actress: '柏木ふみか',
    },
    {
      rank: 97,
      cid: 'MIRD-275',
      javdbId: 'GZPEyz',
      originalTitle:
        '【FANZA限定】MOODYZ 初専属超ハーレム 完全版 みんな、最高だぜ MOODYZ25周年記念作品全6作品完全ノーカット収録18時間 生写真3枚セット',
      releaseDate: '2026-06-17',
      actress:
        '小野六花純白彩永松本いちか百田光稀（百田光希）石原希望うんぱい天宮花南泉ももか輝星きら九野ひなの',
    },
    {
      rank: 98,
      cid: 'PXVR-502',
      javdbId: 'pkYRzq',
      originalTitle:
        '【VR】肉感Iカップの密着おっぱいプレイで精液カラっぽ骨抜き連射！脳が悲鳴を上げるまで搾り取る！ドスケベ痴女巨乳風俗 桜野桃【8K】',
      releaseDate: '2026-10-06',
      actress: '桜野桃',
    },
    {
      rank: 99,
      cid: 'MURIKURI-010',
      javdbId: 'xAe3V6',
      originalTitle:
        '長時間放置「ケツ突き出しバイブ拘束」でイキ壊れ！感度バグって尻ブル振動×腰クネ回転痙攣オナホマ●コ女に魔改造',
      releaseDate: '2026-06-04',
    },
    {
      rank: 100,
      cid: 'IPZZ-788',
      javdbId: 'pkeVwB',
      originalTitle:
        '艶めく色気の美神 下品解禁ー。怒涛の快楽責めで痙攣・失禁・仰け反り連発 本人史上最大エクスタシー 三澄寧々 生写真3枚セット',
      releaseDate: '2026-03-11',
      actress: '三澄寧々',
    },
  ];

var DMM_MONTHLY_DATA_2026_10 = [
    {
      rank: 1,
      cid: 'SNOS-377',
      javdbId: 'nK7mNX',
      originalTitle:
        '「今日はアブノーマルなエッチがしたい…」 そう甘えるCA彼女を無茶苦茶にしたらドMに目覚めた 河北彩花 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-09-23',
      actress: '河北彩花（河北彩伽）',
    },
    {
      rank: 2,
      cid: 'HOIZ-174',
      javdbId: 'pkOdMw',
      originalTitle:
        'ホイホイチャンプ Vol.06【同人AVレジェンダリー】全員美少女！全員爆乳！ドスケベ’逆バニー’神ベスツ！【即ヌキ特化エディション】8名340分素人・美少女・個撮・同人・コスプレイヤー・巨乳・巨尻・顔射・ごっくん・イラマチオ・ローション・オイル・パイズリ・ハメ撮り',
      releaseDate: '2025-09-16',
      actress: '',
    },
    {
      rank: 3,
      cid: 'SNOS-313',
      javdbId: 'ZNzk9q',
      originalTitle:
        '最強ヒロインの全部でオナニーしようよ【ベロキス・フェラ・パイズリ・手コキ・脚コキ・美顔面・おま●こ特化】全身全技ズリネタコンプリート 極上オナニーサポート 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-09-09',
      actress: '瀬戸環奈',
    },
    {
      rank: 4,
      cid: 'SNOS-299',
      javdbId: 'Mb0ey4',
      originalTitle:
        '【FANZA限定】特大号新人 NO.1 STYLE 希望みう AV デビュー （ブルーレイディスク） 生写真3枚と特典DVDセット',
      releaseDate: '2026-09-09',
      actress: '希望みう',
    },
    {
      rank: 5,
      cid: 'SNOS-334',
      javdbId: 'nK7zbV',
      originalTitle:
        '最強ビジュOLさん、出張先で死ぬほど嫌いな中年上司と相部屋… でも過激セクハラにまさかの快楽堕ちしちゃう！ 瀬戸環奈 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-08-12',
      actress: '瀬戸環奈',
    },
    {
      rank: 6,
      cid: 'SQTE-683',
      javdbId: 'GZPZED',
      originalTitle: 'いつでも使えるオナホ後輩 花守夏歩',
      releaseDate: '2026-05-19',
      actress: '花守夏歩',
    },
    {
      rank: 7,
      cid: 'NPS-472',
      javdbId: 'J0Pv2d',
      originalTitle:
        'ガチナンパ！ 結婚式帰りの女性がお口だけでコンドーム装着に挑戦！妊娠願望が強くなって最後はゴムを外して何度も中出し懇願！',
      releaseDate: '2026-05-15',
      actress: '',
    },
    {
      rank: 8,
      cid: 'OFJE-540',
      javdbId: 'r3D57z',
      originalTitle:
        '顔だけでヌケるのに脱いでも凄い！天が二物を与えた顔も体もSクラス神女優26名との80SEX （ブルーレイディスク）',
      releaseDate: '2025-09-23',
      actress:
        '瀬戸環奈、河北彩花（河北彩伽）、金松季歩、田野憂、三上悠亜、倉木華、川越にこ、明日葉みつは、三田真鈴、篠真有',
    },
    {
      rank: 9,
      cid: 'OFJE-538',
      javdbId: 'kK3qzm',
      originalTitle:
        '「デビューしてから1年分のセックス、ぜんぶ見てくださいー」綺麗と可愛いが共存する奇跡 倉木華 初ベスト 最新12タイトル12時間 （ブルーレイディスク）',
      releaseDate: '2025-09-09',
      actress: '倉木華',
    },
    {
      rank: 10,
      cid: 'MIRD-255',
      javdbId: '2m2Y3q',
      originalTitle:
        'MOODYZファン感謝祭バコバコバスツアー2025 完全版 バコバス11時間＋うらバコ4時間＋未公開シーン収録17時間 （ブルーレイディスク）',
      releaseDate: '2025-09-16',
      actress:
        '小野六花、うんぱい、天宮花南、松本いちか、山岸あや花（山岸逢花）、弥生みづき、七瀬アリス、木下ひまり（花沢ひまり）、宍戸里帆、天馬ゆい',
    },
    {
      rank: 11,
      cid: 'OFES-056',
      javdbId: 'OX7xQk',
      originalTitle:
        '担任教師のコトが大好きな生徒の私は放課後ラブホへ先生拉致って、ビッタンビッタン杭打ちまたがり何度も、何度も、中出しさせるの 彩月七緒',
      releaseDate: '2026-06-30',
      actress: '彩月七緒',
    },
    {
      rank: 12,
      cid: 'SONE-720',
      javdbId: 'deROGe',
      originalTitle:
        '【FANZA限定】最強ヒロインに会える風俗店 瀬戸環奈 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-06-11',
      actress: '瀬戸環奈',
    },
    {
      rank: 13,
      cid: 'SAVR-1135',
      javdbId: 'NQkgBg',
      originalTitle:
        '【VR】交姦キメセクNTR 都内某所。最愛の彼女と、興味本位で参加した怪しげなパ―ティー。見るだけのはずだったのに…。生ハメ スワッピング レズ etc. 何でもありな無法地帯の乱痴気騒ぎに飲み込まれてしまった話。',
      releaseDate: '2026-07-17',
      actress: '沙月恵奈、月野かすみ、桜ゆの、胡桃さくら、宮西ひかる、末広純、天馬ゆい',
    },
    {
      rank: 14,
      cid: 'OAE-291',
      javdbId: 'XeYQzG',
      originalTitle: '裸神 瀬戸環奈 （ブルーレイディスク）',
      releaseDate: '2025-09-23',
      actress: '瀬戸環奈',
    },
    {
      rank: 15,
      cid: 'SNOS-056',
      javdbId: 'xA4Vn6',
      originalTitle:
        'なんてことない日常生活で繰り広げられる、お酒の勢いで一線を超えてしまった男女のふしだらな土日。生々しくて普通だけど一番エロいSEX 河北彩伽 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-01-28',
      actress: '河北彩花（河北彩伽）',
    },
    {
      rank: 16,
      cid: 'EBWH-365',
      javdbId: 'OXAZN0',
      originalTitle: 'おっとり優しい兄嫁さんに「母乳飲ませて」とお願いしてみたら…。 柏木ふみか',
      releaseDate: '2026-09-15',
      actress: '柏木ふみか',
    },
    {
      rank: 17,
      cid: 'IDBD-975',
      javdbId: '6d4wOD',
      originalTitle:
        '身動き取れない超絶美女たちを容赦なくイカせ倒す完全拘束強●アクメBEST 8時間 総絶頂数647回！',
      releaseDate: '2025-09-09',
      actress:
        '役野満里奈、桃乃木かな、花守夏歩、愛才りあ、梓ヒカリ、都月るいさ、杏ここ、希島あいり、さくらわかな、小野坂ゆいか',
    },
    {
      rank: 18,
      cid: 'MKMP-660',
      javdbId: '1A47p4',
      originalTitle:
        'いつでもどこでも呼びつけたらすぐに駆け付ける 抱き心地最高の都合のいい地味セフレ 羽月乃蒼',
      releaseDate: '2025-08-12',
      actress: '羽月乃蒼',
    },
    {
      rank: 19,
      cid: 'MIRD-281',
      javdbId: 'Rk80On',
      originalTitle:
        'MOODYZファン感謝祭バコバコバスツアー2026 20時間25分 バコバス13時間40分＋うらバコ4時間＋未公開シーン収録 完全版',
      releaseDate: '2026-09-15',
      actress:
        '八木奈々、佐々木あき、ひなたなつ（日向なつ）、浅野こころ、松本いちか、彩月七緒、波多野結衣、春陽モカ、小野坂ゆいか、七瀬アリス',
    },
    {
      rank: 20,
      cid: 'SNOS-213',
      javdbId: 'bK3JKB',
      originalTitle:
        'イキすぎちゃって、ごめんなさい…ウブなIcupボディに与えた怒涛の強●快楽と超痙攣オルガズム 早坂奏音',
      releaseDate: '2026-06-23',
      actress: '早坂奏音',
    },
    {
      rank: 21,
      cid: 'SONE-846',
      javdbId: 'Mb4ZdR',
      originalTitle:
        '絶頂の向こう側へ 最強ヒロインに巨根ピストンを 瀬戸環奈 （ブルーレイディスク）',
      releaseDate: '2025-09-09',
      actress: '瀬戸環奈',
    },
    {
      rank: 22,
      cid: 'SNOS-275',
      javdbId: 'ZN3nNq',
      originalTitle:
        '河北彩花の尊い美顔を心おきなく拝みたい。 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-06-24',
      actress: '河北彩花（河北彩伽）',
    },
    {
      rank: 23,
      cid: 'SSNI-608',
      javdbId: 'g4gd7',
      originalTitle:
        '快感潮吹き絶頂マ●コを怒涛の追撃ピストンでひたすら大量潮吹きオーガズム 坂道みる',
      releaseDate: '2019-11-07',
      actress: '坂道みる',
    },
    {
      rank: 24,
      cid: 'SVMGM-054',
      javdbId: 'mO32an',
      originalTitle:
        'マジックミラー号ハードボイルド 街行く女子大生限定！マン圧クレーンゲームチャレンジ！マ〇コの締め付けで景品をキャッチ！すれば賞金GET！制限時間20分間取り放題！！ただし潮吹きしたらOUT！即ハメSEX！！',
      releaseDate: '2026-10-21',
      actress: '',
    },
    {
      rank: 25,
      cid: 'SNOS-008',
      javdbId: 'a8eBd3',
      originalTitle:
        '目を覚ますと下着姿のグラドルとホテルで二人きり…慌てる僕を横目に誘惑してくる芸能人一体酔っている間に何があった！？ 紫堂るい （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2025-12-10',
      actress: '紫堂るい',
    },
    {
      rank: 26,
      cid: 'MIMK-268',
      javdbId: '1AWgNA',
      originalTitle:
        '【FANZA限定】友達の義母 実写版 「もっとすごいの…見せてあげよっか？」親友とその義母との禁断の関係をこっそり覗き見してしまった僕は… JULIA チェキセット',
      releaseDate: '2026-03-04',
      actress: 'JULIA',
    },
    {
      rank: 27,
      cid: 'MIDA-726',
      javdbId: '82BAMW',
      originalTitle:
        '「澪の恥ずかしい肛門ペロペロして欲しいな」モジモジしながらプリ尻ノーパン誘惑ケツ穴くぱぁ！ドM先生にアナル舐めさせて赤面ヒクヒクおねだり学園 石川澪 生写真3枚セット',
      releaseDate: '2026-07-08',
      actress: '石川澪',
    },
    {
      rank: 28,
      cid: 'OFJE-586',
      javdbId: 'P9PXE2',
      originalTitle:
        '早熟のミニマム巨乳 安達夕莉 全21タイトル 初ベスト16時間 （ブルーレイディスク）',
      releaseDate: '2025-11-25',
      actress: '安達夕莉',
    },
    {
      rank: 29,
      cid: 'EBWH-218',
      javdbId: 'gy4VXE',
      originalTitle:
        '可愛さと色気の融和。〇〇大学附属病院 現役看護師（人妻）結婚3年目 29歳 Iカップ 柏木ふみか AVデビュー',
      releaseDate: '2025-05-20',
      actress: '柏木ふみか',
    },
    {
      rank: 30,
      cid: 'JUR-093',
      javdbId: 'NQkGWZ',
      originalTitle:
        '【FANZA限定】NON TITLE 無名の原石妻 28歳 AV出演。 遅れてきた大本命、次世代ミセス誕生ー。 生写真とパンツセット',
      releaseDate: '2026-09-23',
      actress: '宝生みさと',
    },
    {
      rank: 31,
      cid: 'BONY-191',
      javdbId: 'GZPd3z',
      originalTitle: '抜かずに連射で膣内シェイク！！ まんキャパオーバー無制限中出し 波多野結衣',
      releaseDate: '2026-05-26',
      actress: '波多野結衣',
    },
    {
      rank: 32,
      cid: 'OFES-033',
      javdbId: 'kKDVB4',
      originalTitle:
        '「え？ウチは毎日、弟とお風呂はいってるよ」 友達の家に泊まったら巨乳お姉ちゃんと混浴！僕のおチンチンも皮剥いて洗ってくれる優しさに思わず勃起してしまって…我慢できず何度も何度も中出しお泊りSEX 彩月七緒',
      releaseDate: '2026-06-30',
      actress: '彩月七緒',
    },
    {
      rank: 33,
      cid: 'SIVR-444',
      javdbId: '1A8YRd',
      originalTitle:
        '【VR】VR NO.1 STYLE 最強ヒロイン 瀬戸環奈 解禁 せとかんとSEXできるVR 瀬戸環奈',
      releaseDate: '2025-09-11',
      actress: '瀬戸環奈',
    },
    {
      rank: 34,
      cid: 'IDBD-967',
      javdbId: 'Ww3pr7',
      originalTitle: '長浜みつり初ベスト12タイトル12時間36本番SPECIAL',
      releaseDate: '2025-06-10',
      actress: '長浜みつり',
    },
    {
      rank: 35,
      cid: 'MIMK-271',
      javdbId: 'mObnpR',
      originalTitle:
        '寝てる間体を自由に使わせてくれるクラスメイトの森田さん ひたすら可愛い画と理想のシチュエーションの融合 今もっともシコれるサークルひやしまくら×MOODYZ初コラボ 泉ももか 生写真3枚セット',
      releaseDate: '2026-03-18',
      actress: '泉ももか',
    },
    {
      rank: 36,
      cid: 'NAMH-076',
      javdbId: 'yxW9R0',
      originalTitle: '神パイパン膣に特濃21発 ノーカット真正中出し2本番 花守夏歩',
      releaseDate: '2026-10-08',
      actress: '花守夏歩',
    },
    {
      rank: 37,
      cid: 'SONE-768',
      javdbId: 'xAgOKB',
      originalTitle:
        '思春期の夏休み幼馴染がふざけて女子同士でキス…見てた僕も興奮しベロキス3Pしまくった 渚あいり 白上咲花 （ブルーレイディスク）',
      releaseDate: '2025-06-24',
      actress: '渚あいり、白上咲花',
    },
    {
      rank: 38,
      cid: 'MUCD-335',
      javdbId: 'kK3NAz',
      originalTitle:
        '部活帰りの汗だく美少女と練習着のまま即ハメ青春SEX！ 運動部女子6人 性が乱れる中出しBEST',
      releaseDate: '2025-09-16',
      actress: '',
    },
    {
      rank: 39,
      cid: 'JERA-006',
      javdbId: 'ZNKe26',
      originalTitle:
        '職場で知り合った美人パートの長瀬麻美さんは人生で一度も精子を飲んだことが無いみたいで、ラブホ飲みで距離感縮めてSEXしたらゴックンしてくれたので旦那が帰宅するPM22:00まで何度も精飲と中出しをした。',
      releaseDate: '2025-11-20',
      actress: '長瀬麻美',
    },
    {
      rank: 40,
      cid: 'SONE-711',
      javdbId: 'deRva9',
      originalTitle:
        '教師の僕に2人の生徒が惚れて…元気な川越にこと清楚な浅野こころのコンビ誘惑に負けて学校でも、自宅でも、何度も背徳性交に溺れてしまった。',
      releaseDate: '2025-05-13',
      actress: '川越にこ、浅野こころ',
    },
    {
      rank: 41,
      cid: 'JUR-356',
      javdbId: 'wKk4ab',
      originalTitle:
        '妻には口が裂けても言えません、義母さんを孕ませてしまったなんて…。-1泊2日の温泉旅行で、我を忘れて中出ししまくった僕。- 篠原いよ',
      releaseDate: '2025-06-24',
      actress: '篠原いよ',
    },
    {
      rank: 42,
      cid: 'MIHD-001',
      javdbId: '0e2aVv',
      originalTitle: 'ハメドリ 配信限定 MOODYZ専属のナチュラルSEXを解禁 葵いぶき',
      releaseDate: '2026-05-13',
      actress: '葵いぶき',
    },
    {
      rank: 43,
      cid: 'SQTE-674',
      javdbId: 'wKgaYD',
      originalTitle: '金玉からっぽにしてあげる。北岡果林×花守夏歩',
      releaseDate: '2026-04-07',
      actress: '北岡果林、花守夏歩',
    },
    {
      rank: 44,
      cid: 'SNOS-310',
      javdbId: 'pk7ZYq',
      originalTitle:
        '【FANZA限定】グラビアボディとめちゃかワご奉仕で思わず恋に落ちちゃうぞ博多彩葉の新時代風俗6 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-09-09',
      actress: '博多彩葉',
    },
    {
      rank: 45,
      cid: 'SLN-015',
      javdbId: 'kKrGnP',
      originalTitle: 'すれてない バーガーショップ アルバイト しほ21さい 柴又しほ',
      releaseDate: '2026-09-03',
      actress: '柴又しほ',
    },
    {
      rank: 46,
      cid: 'SAVR-1205',
      javdbId: 'z4GJgW',
      originalTitle:
        '【VR】まるでマ〇コのような口内で、カリ首から根元までまとわりつき、腰が抜けるほどの吸引力でシャブり尽くすボクの彼女。 逢沢みゆ',
      releaseDate: '2026-09-10',
      actress: '逢沢みゆ',
    },
    {
      rank: 47,
      cid: 'SKMJ-719',
      javdbId: 'e87qEM',
      originalTitle:
        '湘南ビーチで彼氏とはしゃぐビキニギャルが好きピに内緒で早漏童貞君のデカチン連続射精チャレンジwwドピュドピュ大量精子を暴発しちゃう敏感なデカマラにムラムラ赤面発情！恋人の目の前なのに生ハメ筆おろし//とにかく中出しFESTIVAL',
      releaseDate: '2026-02-13',
      actress: '',
    },
    {
      rank: 48,
      cid: 'JUR-031',
      javdbId: '2m96rw',
      originalTitle:
        'マドンナALL専属バスツアー2025 極上の美女を1人占めするのは僕だ！！夢のハーレムを掴み取れ！！総勢37名の大乱交SPECIAL！！前編',
      releaseDate: '2025-02-25',
      actress:
        '篠原いよ、吉永塔子、吉澤友貴、古東まりこ、広瀬ゆり、推川ゆうり、日下部加奈、栗山莉緒、愛弓りょう、神宮寺ナオ',
    },
    {
      rank: 49,
      cid: 'MURIKURI-015',
      javdbId: 'mO7YOr',
      originalTitle: 'デカ乳首J●痴●ガチナマ路線 調教いじりで感度ぶっ壊れちびマン痙攣膣絞め中出し',
      releaseDate: '2026-09-17',
      actress: '',
    },
    {
      rank: 50,
      cid: 'SAVR-1143',
      javdbId: 'yxYXD0',
      originalTitle:
        '【VR】「私のお口とマ〇コを好きに使ってください♪」 全肯定しながら、いつでもどこでも生処理してくれる新人性社員 持野蓬',
      releaseDate: '2026-07-31',
      actress: '持野蓬',
    },
    {
      rank: 51,
      cid: 'MDVR-446',
      javdbId: 'a83G1p',
      originalTitle: '【VR】初8KMOODYZVRBEST1116分-18時間超-',
      releaseDate: '2026-06-06',
      actress: '',
    },
    {
      rank: 52,
      cid: 'FZAA-001',
      javdbId: 'P9Gnm9',
      originalTitle:
        'ザーメンをぶっかけられた顔射直後のスケベ顔で敏感チ〇ポをひょっとこバキュームするおしゃぶり大好き素人娘たちのご奉仕フェラチオ',
      releaseDate: '2025-12-19',
      actress: '',
    },
    {
      rank: 53,
      cid: 'URVRSP-618',
      javdbId: 'QN9bdp',
      originalTitle:
        '【VR】【8K】自宅ではノーパンノーブラ先輩に我慢できず押し倒して強引正常位したら、欲求不満発情OLに萎える暇もなくチ○ポを刺激され続け仕返し強●連続射精させられた。 釈アリス',
      releaseDate: '2026-09-24',
      actress: '釈アリス',
    },
    {
      rank: 54,
      cid: 'PRVR-091',
      javdbId: 'WwrMmK',
      originalTitle:
        '【VR】専属・三好佑香の初VR！ 新卒 元地方局アナウンサーと距離感＆明るさバッチリで全身丸裸8KVR！最高にシコれるイチャラブ同棲生活長尺158分の2SEX！',
      releaseDate: '2026-01-27',
      actress: '三好佑香',
    },
    {
      rank: 55,
      cid: 'SAVR-1141',
      javdbId: '96QreE',
      originalTitle:
        '【VR】長身女のちくび術 弱点責められたら絶倫になってしまうボクは、獣みたいな性欲セフレから逃れられません。',
      releaseDate: '2026-07-24',
      actress: '',
    },
    {
      rank: 56,
      cid: 'HUNTC-487',
      javdbId: 'nK38AX',
      originalTitle:
        '親に隠れて妹とキスだけの約束の生活。「キスだけ…兄妹なんだから…」大人になった妹とキスだけの約束のはずが我慢できず…。久しぶりに帰省したら…2',
      releaseDate: '2026-02-24',
      actress: '',
    },
    {
      rank: 57,
      cid: 'NAMH-075',
      javdbId: 'pkp5D9',
      originalTitle: 'Gカップ健康ボディに13発 優しいお姉さん真正中出し解禁 羽川るる',
      releaseDate: '2026-10-07',
      actress: '羽川るる',
    },
    {
      rank: 58,
      cid: 'SNOS-080',
      javdbId: 'xAO39A',
      originalTitle:
        '新人NO.1STYLE 雛形みくる AVデビュー 幼顔Icup 実はとんでもないくびれで170cmの高身長 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-02-11',
      actress: '雛形みくる',
    },
    {
      rank: 59,
      cid: 'SONE-266',
      javdbId: '4D5XME',
      originalTitle:
        '「キス、してください…」 終電逃し会社の後輩宅に泊めてもらうと…宅飲みほろ酔いでキス魔となってあまりの魔力に抵抗できず彼女を裏切り朝まで濃厚ベロキス浮気。 河北彩花 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2024-07-24',
      actress: '河北彩花（河北彩伽）',
    },
    {
      rank: 60,
      cid: 'MIAB-677',
      javdbId: 'mO7YXy',
      originalTitle: 'ドリームウーマンVol.101 逢沢みゆ （BOD）',
      releaseDate: '2026-09-15',
      actress: '逢沢みゆ',
    },
    {
      rank: 61,
      cid: 'MIMK-253',
      javdbId: '96YqG6',
      originalTitle:
        '【FANZA限定】入り浸りギャルにマ○コ使わせて貰う話2実写版 令和イチ売れた最強エロ同人待望の続編 斎藤あみり 生写真2枚付き',
      releaseDate: '2025-10-22',
      actress: '斎藤あみり',
    },
    {
      rank: 62,
      cid: 'KBTK-018',
      javdbId: 'a8yMrR',
      originalTitle:
        '東京恋人的、美人不倫妻ベストナイン～Luxury season～売上ランキング12時間20セックス20発射！！',
      releaseDate: '2025-07-22',
      actress: '',
    },
    {
      rank: 63,
      cid: 'BIGC-004',
      javdbId: '96qpKE',
      originalTitle:
        '小さい女の子に巨大チ〇ポ超デカマラでちびワレメ肉マクレ返る激ピストン悲鳴悶絶イラマ泣き＆痙攣イキ潮噴射止まらないオマ●コに中出し精子漬けぶっ壊れるまでハメ撮り巨編',
      releaseDate: '2025-06-24',
      actress: '',
    },
    {
      rank: 64,
      cid: 'MIDA-530',
      javdbId: '96p2bw',
      originalTitle:
        '担任教師の僕は生徒の誘惑に負けて放課後ラブホで何度も、何度も、セックスしてしまった… 純白彩永 生写真3枚セット',
      releaseDate: '2026-03-04',
      actress: '純白彩永',
    },
    {
      rank: 65,
      cid: 'EROFV-225',
      javdbId: '35bv3a',
      originalTitle:
        '素人JD【限定】ゆずはちゃん20歳 ネットを中心にグラビアアイドル活動をしているJDちゃんと奇跡のマッチング！いつもは見られない布の向こう側に大興奮して勢い任せに大量中出し！！',
      releaseDate: '2023-12-12',
      actress: '',
    },
    {
      rank: 66,
      cid: 'SONE-405',
      javdbId: 'QNNmQp',
      originalTitle:
        '教員生活27年で一番美人な教え子の甘い求愛に人生を棒にふりそうな俺 河北彩伽 （ブルーレイディスク） 生写真3枚付き',
      releaseDate: '2024-10-23',
      actress: '河北彩花（河北彩伽）',
    },
    {
      rank: 67,
      cid: '3DSVR-2032',
      javdbId: 'ZNYEBq',
      originalTitle:
        '【VR】【8K】超高級下着メーカーの女社長（絶倫）は、ランジェリーをウブ社員の僕（早漏）に見せつけて焦らしセクハラの反応を楽しんでいます。 釈アリス',
      releaseDate: '2026-09-20',
      actress: '釈アリス',
    },
    {
      rank: 68,
      cid: 'MIDA-547',
      javdbId: '2mXzKy',
      originalTitle:
        'イッてもイッてもイカされガクブルエクスタシー！はじめての追撃絶頂 井上もも （BOD）',
      releaseDate: '2026-04-07',
      actress: '井上もも',
    },
    {
      rank: 69,
      cid: 'YMBP-001',
      javdbId: '6dQJy7',
      originalTitle: '借金漬けヤンママAV返済 須藤かおる',
      releaseDate: '2026-09-22',
      actress: '須藤かおる',
    },
    {
      rank: 70,
      cid: 'OFJE-588',
      javdbId: 'xA4M8O',
      originalTitle:
        'ぢゅぱぢゅぱジュルルぅぅ 見ているだけで超勃起…顔面最強美女によるディープキス性交 110本番12時間',
      releaseDate: '2025-12-09',
      actress:
        '瀬戸環奈、河北彩花（河北彩伽）、金松季歩、新木希空、架乃ゆら、未歩なな、三上悠亜、楓ふうあ、鷲尾めい、安達夕莉',
    },
    {
      rank: 71,
      cid: 'START-202',
      javdbId: 'Wwwq6g',
      originalTitle:
        '超美乳Hカップと優しい囁きで男心を鷲掴みしハッスルタイム後も馬乗りのまま裏オプ本番を誘ってくるおっパブ嬢 彩月七緒',
      releaseDate: '2024-10-29',
      actress: '彩月七緒',
    },
    {
      rank: 72,
      cid: 'DVAJ-740',
      javdbId: 'xAOJXA',
      originalTitle:
        '【FANZA限定】夜勤ナースに寝静まるカーテンの中アヘ吐息かかる顔近スパイダー騎乗位でこっそり腰振られながら囁かれる看護淫語ASMRでマ○コがグチョヌチャ卑猥音を奏でるまで何度も中出し介抱付き入院性活【男の音・雑音全カット！プレ… 月野かすみ パンティと生写真セット',
      releaseDate: '2026-05-13',
      actress: '月野かすみ',
    },
    {
      rank: 73,
      cid: 'MIDA-533',
      javdbId: 'z4b9O7',
      originalTitle:
        'いつでもどこでもマ○コ丸出し卑猥ポーズいつでも使える僕専用オナホ生徒 石川澪 （ブルーレイディスク） 生写真2枚セット',
      releaseDate: '2026-03-04',
      actress: '石川澪',
    },
    {
      rank: 74,
      cid: 'SNOS-260',
      javdbId: 'r3z83r',
      originalTitle:
        'タダマンナース Lカップ看護師が患者に弱み握られおっぱい吐精処理、乱暴SEXされ放題 木村愛心',
      releaseDate: '2026-06-23',
      actress: '木村愛心',
    },
    {
      rank: 75,
      cid: 'SNOS-367',
      javdbId: 'pk7vBw',
      originalTitle:
        '目立たない同級生が脱いだら凄いオッパイ！本人は無自覚すぎる早熟Iカップの誘惑 早坂奏音',
      releaseDate: '2026-09-22',
      actress: '早坂奏音',
    },
    {
      rank: 76,
      cid: 'MFYD-099',
      javdbId: 'NQ6pPb',
      originalTitle: 'TAMEIKE20周年特別企画ー。夢実かなえホンモノザーメンごっくん104発',
      releaseDate: '2026-02-17',
      actress: '夢実かなえ',
    },
    {
      rank: 77,
      cid: 'MTAFB-001',
      javdbId: '6dE4QM',
      originalTitle: '【福袋】 松本菜奈実Jカップ神乳vol.1 854分約14時間',
      releaseDate: '2025-09-24',
      actress: '松本菜奈実',
    },
    {
      rank: 78,
      cid: 'MDVR-390',
      javdbId: 'P9Gpka',
      originalTitle:
        '【VR】ただいまっ！くのひなっ！パワーアップした小悪魔イタズラ誘惑 性欲マシマシ発情ヒロインと学園中の男子が嫉妬するほどエロがっちゃった！！ 九野ひなの',
      releaseDate: '2025-12-13',
      actress: '九野ひなの',
    },
    {
      rank: 79,
      cid: 'SIVR-483',
      javdbId: '2mX58P',
      originalTitle:
        '【VR】隣に越してきたモラハラ夫から身を隠す訳アリ巨乳人妻‘めいさん’とたった一度だけ身を寄せ合い貪り合ったアノ夜 鷲尾めい',
      releaseDate: '2026-04-04',
      actress: '鷲尾めい',
    },
    {
      rank: 80,
      cid: 'RCTD-759',
      javdbId: 'gyPgrZ',
      originalTitle: 'ROCKET18周年記念ユーザーリクエスト祭り レズビアン・ラフファイト極',
      releaseDate: '2026-10-07',
      actress: '宍戸里帆、広瀬美結、皆瀬あかり、美咲音',
    },
    {
      rank: 81,
      cid: 'ROYD-290',
      javdbId: 'de37e5',
      originalTitle:
        'ノーが言えない。家政婦さんの無自覚な誘惑 ホスピタリティ抜群 射精後の精子も丁寧にお掃除 ゴム無デカケツ生ハメOK！ 千咲ちな',
      releaseDate: '2026-01-27',
      actress: '千咲ちな',
    },
    {
      rank: 82,
      cid: 'JUVR-309',
      javdbId: '4Dnv06',
      originalTitle:
        '【VR】いち花 初VR 新時代ナンバーワンの神乳Hカップがゼロ距離密着！！妻の親友の爆乳妻に誘われて…最高にエロいカラダと中出しSEXに溺れた僕。【超高画質8K】',
      releaseDate: '2026-09-14',
      actress: 'いち花',
    },
    {
      rank: 83,
      cid: 'MIMK-255',
      javdbId: '82eqWV',
      originalTitle:
        '【FANZA限定】あの！お母さんの詳細 実写版 はいとく先生伝説の初期作品を映像化！頼まれるがままなし崩し的にハメまくる母子相姦！ 竹内有紀 生写真2枚付き',
      releaseDate: '2025-10-22',
      actress: '竹内有紀',
    },
    {
      rank: 84,
      cid: 'JUVR-251',
      javdbId: 'YwZ4Mp',
      originalTitle:
        '【VR】超高画質8K 篠原いよと濃密に舌を絡め合い唾液滴る顔面密着キス特化VR 「うち、近いからおいで」 帰り道、ゲリラ豪雨でびしょ濡れの僕は 一緒にいた篠原先生の家に緊急避難！！ 冷えた身体をお互い密着させて 温め合う中出し不貞SEXに溺れた',
      releaseDate: '2025-09-11',
      actress: '篠原いよ',
    },
    {
      rank: 85,
      cid: 'MIZD-421',
      javdbId: 'J00br3',
      originalTitle: 'ムーディーズNo.1のエロイイ女！神宮寺ナオ3rdBEST12時間',
      releaseDate: '2024-12-17',
      actress: '神宮寺ナオ',
    },
    {
      rank: 86,
      cid: 'SONE-969',
      javdbId: 'Aq9z0e',
      originalTitle: '新人NO.1 STYLE リアルはたちのJ 渡部ほの AVデビュー',
      releaseDate: '2025-10-14',
      actress: '渡部ほの',
    },
    {
      rank: 87,
      cid: 'CJOD-452',
      javdbId: 'QNn008',
      originalTitle: 'エッチな清楚アイドルが痴女ってくる中出しOK回春アジアンメンズエステ 逢沢みゆ',
      releaseDate: '2025-01-28',
      actress: '逢沢みゆ',
    },
    {
      rank: 88,
      cid: 'SNOS-355',
      javdbId: 'bKzNxB',
      originalTitle:
        'おっとりグラドル紫堂るい ねっとり接吻と柔らかIcupを武器に人生初の痴女に挑戦。',
      releaseDate: '2026-09-08',
      actress: '紫堂るい',
    },
    {
      rank: 89,
      cid: 'MIAB-301',
      javdbId: 'pkkD9Z',
      originalTitle:
        '【FANZA限定】やっぱり、妻が好きだ！倦怠期だった僕ら夫婦が久しぶりにSEXしたら…やっぱり体の相性抜群で朝まで何度も求め合った！！ 森日向子 生写真3枚付き',
      releaseDate: '2024-09-04',
      actress: '森日向子',
    },
    {
      rank: 90,
      cid: 'MIMK-196',
      javdbId: 'veWWan',
      originalTitle:
        '憧れのひとはもう終わり！実写版 3年間憧れ続けた先生が、友人に食われた… （BOD）',
      releaseDate: '2025-01-21',
      actress: '',
    },
    {
      rank: 91,
      cid: 'MBF-059',
      javdbId: 'Ww7KG7',
      originalTitle:
        '【FANZA独占】【配信専用】MAX-Aダイヤモンドセレクション THE LEGEND3.5 小倉奈々 オグナナの単体作品には収録されていないプレミアSEX13発お届けスペシャルBEST ～お宝映像300分～',
      releaseDate: '2026-04-30',
      actress: '小倉奈々',
    },
    {
      rank: 92,
      cid: 'SNOS-444',
      javdbId: 'OXANGB',
      originalTitle:
        '【FANZA限定】170cmGカップ‘新卒’AV女優、フレッシュおま●こ大痙攣―社会人最高女子が潮吹き、仰け反り、人生初の大絶頂アクメ 星空ねる （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-09-23',
      actress: '星空ねる',
    },
    {
      rank: 93,
      cid: 'SONE-817',
      javdbId: 'qAnvKe',
      originalTitle: '朝、目が覚めたら僕が河北彩伽のご主人様に！？ （ブルーレイディスク）',
      releaseDate: '2025-10-28',
      actress: '河北彩花（河北彩伽）',
    },
    {
      rank: 94,
      cid: 'SNOS-117',
      javdbId: 'kKbAJN',
      originalTitle:
        '大嫌いな義父に媚薬で犯●れ続けて… 新木希空 （ブルーレイディスク） 生写真3枚セット',
      releaseDate: '2026-02-25',
      actress: '新木希空',
    },
    {
      rank: 95,
      cid: 'MIHD-007',
      javdbId: 'AqV21q',
      originalTitle: 'ハメドリ 配信限定 MOODYZ専属のナチュラルSEXを解禁 八木奈々',
      releaseDate: '2026-05-13',
      actress: '八木奈々',
    },
    {
      rank: 96,
      cid: 'HOIZ-173',
      javdbId: 'Mb4MPR',
      originalTitle:
        'ホイホイロード9 ～素人ホイホイZの軌跡～全員美少女！全員爆乳！’厳選映像vs未公開映像’熱盛ベスツ！最強肉感！ハメ撮り頂上決戦！上玉20人11時間ハメ撮り・個撮・ワンナイト・マッチングアプリ・巨乳・巨尻・SNS・潮吹き・顔射・ごっくん・ドキュメント・素人・痴女',
      releaseDate: '2025-09-16',
      actress: '',
    },
    {
      rank: 97,
      cid: 'SONE-272',
      javdbId: 'mOeZ8D',
      originalTitle:
        '年末年始、広い学生寮で女学生とおじさん管理人が2人きり… 禁断シチュに欲情した中年ち●ぽと寂しさ埋めたい若い少女おま●こは相性良すぎて合体し続けた。 浅野こころ 生写真3枚付き',
      releaseDate: '2024-07-24',
      actress: '浅野こころ',
    },
    {
      rank: 98,
      cid: 'SIVR-490',
      javdbId: 'vezabn',
      originalTitle:
        '【VR】手繋いで、見つめあって、告白されて…一晩中イチャイチャ初めてのお泊まりデート 瀬戸環奈の恋人になれるVR',
      releaseDate: '2026-06-04',
      actress: '瀬戸環奈',
    },
    {
      rank: 99,
      cid: 'EBWH-179',
      javdbId: 'GZJ7mg',
      originalTitle:
        '都会で童貞を馬鹿にされ帰省したら僕を可愛がる母性丸出し巨乳お義姉ちゃんたちとの筆おろしと甘々SEXで7発射精させてもらった 莉々はるか 宍戸里帆 生写真3枚付き',
      releaseDate: '2025-02-19',
      actress: '莉々はるか、宍戸里帆',
    },
    {
      rank: 100,
      cid: 'EBWH-322',
      javdbId: 'GZnVnb',
      originalTitle:
        '優しさにつけ込まれたB（バスト）100cm新妻→ごめんなさい乳ワイパー堕ち。 ガラスにむぎゅっ。夫の目の前で押し潰されイカされる。 柏木ふみか',
      releaseDate: '2026-04-21',
      actress: '柏木ふみか',
    },
  ];

/* ===== module: 13-ranking-handlers.js ===== */

/* ========================= Ranking handlers（自 AVDB 可视化迁入） ========================= */

var RANKING_PAGE_LIMIT = 30;

function rankingPeriod(params) {
  var value = String((params && (params.sort_by || params.period)) || "daily").trim();
  if (!value) value = "daily";
  return value;
}

function rankingActressSort(params) {
  var sortRaw = String((params && params.sort_by) || "release_desc").trim() || "release_desc";
  var filterExtra = "";
  if (sortRaw === "solo") {
    filterExtra = ":s";
    sortRaw = "release_desc";
  } else if (sortRaw === "magnets") {
    filterExtra = ":m";
    sortRaw = "release_desc";
  }
  return {
    sortRaw: sortRaw,
    filterExtra: filterExtra,
    sort_by: sortRaw === "score" ? "score" : "release",
    order_by: sortRaw === "release_asc" ? "asc" : "desc",
  };
}

async function fetchActressTagMovies(params, actressId) {
  var sort = rankingActressSort(params);
  var filterBy = "0:a:" + actressId + sort.filterExtra;
  var page = Number((params && params.page) || 1) || 1;
  var data = await apiGet(
    "/v1/movies/tags",
    {
      filter_by: filterBy,
      sort_by: sort.sort_by,
      order_by: sort.order_by,
      page: page,
      limit: RANKING_PAGE_LIMIT,
    },
    params
  );
  return (data && data.movies) || [];
}

/** 热播榜 */
async function loadPlayback(params) {
  try {
    params = await ensureApiSession(params || {});
    var period = rankingPeriod(params);
    var page = Number(params.page || 1) || 1;
    var data = await apiGet(
      "/v1/rankings/playback",
      {
        period: period,
        filter_by: "high_score",
        page: page,
        limit: RANKING_PAGE_LIMIT,
      },
      params
    );
    var movies = (data && data.movies) || [];
    if (!movies.length) {
      console.warn("[javdb] loadPlayback 空数据 period=", period, "page=", page);
    }
    return enrichListMovies(movies, params);
  } catch (error) {
    console.error("[javdb] 热播榜失败:", (error && error.message) || error);
    throw error;
  }
}

async function loadRankingByType(params, typeCode, label) {
  try {
    params = await ensureApiSession(params || {});
    var period = rankingPeriod(params);
    var page = Number(params.page || 1) || 1;
    var data = await apiGet(
      "/v1/rankings",
      {
        type: String(typeCode),
        period: period,
        page: page,
        limit: RANKING_PAGE_LIMIT,
      },
      params
    );
    var movies = (data && data.movies) || [];
    if (!movies.length) {
      console.warn("[javdb] " + label + " 空数据 period=", period, "page=", page);
    }
    return enrichListMovies(movies, params);
  } catch (error) {
    console.error("[javdb] " + label + "失败:", (error && error.message) || error);
    throw error;
  }
}

/** 有码榜 */
async function loadCensored(params) {
  return loadRankingByType(params, "0", "有码榜");
}

/** 无码榜 */
async function loadUncensored(params) {
  return loadRankingByType(params, "1", "无码榜");
}

/** FC2 榜 */
async function loadFC2(params) {
  return loadRankingByType(params, "3", "FC2榜");
}

/** 欧美榜 */
async function loadWestern(params) {
  return loadRankingByType(params, "2", "欧美榜");
}

/** 厂牌（可视化精选枚举） */
async function loadMaker(params) {
  try {
    params = await ensureApiSession(params || {});
    var makerId = String((params && params.maker) || "7R").trim() || "7R";
    var sortRaw = String((params && params.sort_by) || "release_desc").trim() || "release_desc";
    var filterBy = "0:m:" + makerId;
    if (sortRaw === "magnets") {
      filterBy += ":m";
      sortRaw = "release_desc";
    }
    var sort_by = sortRaw === "score" ? "score" : "release";
    var order_by = sortRaw === "release_asc" ? "asc" : "desc";
    var page = Number((params && params.page) || 1) || 1;
    var data = await apiGet(
      "/v1/movies/tags",
      {
        filter_by: filterBy,
        sort_by: sort_by,
        order_by: order_by,
        page: page,
        limit: RANKING_PAGE_LIMIT,
      },
      params
    );
    return enrichListMovies((data && data.movies) || [], params);
  } catch (error) {
    console.error("[javdb] 厂牌浏览失败:", (error && error.message) || error);
    throw error;
  }
}

/** 分类标签（可视化：主题/角色/服装…） */
async function loadCategory(params) {
  try {
    params = await ensureApiSession(params || {});
    var category = String((params && params.category) || "subject").trim() || "subject";
    var tag = String((params && params["tag_" + category]) || "").trim();
    if (!tag) {
      return [{ id: "tip", type: "text", title: "请选择分类和标签" }];
    }
    var page = Number((params && params.page) || 1) || 1;
    var data = await apiGet(
      "/v2/search",
      {
        q: tag,
        type: "video",
        movie_sort_by: "release",
        page: page,
        limit: RANKING_PAGE_LIMIT,
      },
      params
    );
    var movies = (data && data.movies) || [];
    if (!movies.length) throw new Error("未找到相关影片");
    return enrichListMovies(movies, params);
  } catch (error) {
    console.error("[javdb] 分类浏览失败:", (error && error.message) || error);
    throw error;
  }
}

/** 热门新人榜 */
async function loadNewActors(params) {
  try {
    params = await ensureApiSession(params || {});
    var actressId = String((params && params.actress) || "W1Egq").trim() || "W1Egq";
    var movies = await fetchActressTagMovies(params, actressId);
    return enrichListMovies(movies, params);
  } catch (error) {
    console.error("[javdb] 热门新人榜失败:", (error && error.message) || error);
    throw error;
  }
}

/**
 * JAVDB女优榜单
 * 注意：原「演员」分类模块仍走 loadPage；本函数专用于女优榜单。
 */
async function loadActorsRanking(params) {
  try {
    params = await ensureApiSession(params || {});
    var actressId = String((params && params.actress) || "BzpA").trim() || "BzpA";
    var movies = await fetchActressTagMovies(params, actressId);
    return enrichListMovies(movies, params);
  } catch (error) {
    console.error("[javdb] JAVDB女优榜单失败:", (error && error.message) || error);
    throw error;
  }
}

/** DMM女优榜单（接口同 tags 演员过滤） */
async function loadDMMRanking(params) {
  try {
    params = await ensureApiSession(params || {});
    var actressId = String((params && params.actress) || "zK98J").trim() || "zK98J";
    var movies = await fetchActressTagMovies(params, actressId);
    return enrichListMovies(movies, params);
  } catch (error) {
    console.error("[javdb] DMM女优榜单失败:", (error && error.message) || error);
    throw error;
  }
}

function mapStaticRankingEntry(entry, extraDesc) {
  entry = entry || {};
  var code = safeText(entry.cid || entry.id || "");
  var javdbId = safeText(entry.javdbId || "");
  var titleBase = safeText(entry.originalTitle || entry.title || code);
  var title = code && titleBase.indexOf(code) !== 0 ? code + " " + titleBase : titleBase || code;
  var siteCover = sanitizeCoverUrl(buildJavdbCdnCoverUrl(javdbId));
  var covers = buildListCoverBundle(code, siteCover);
  var backdrop = sanitizeCoverUrl(covers.backdropPath) || siteCover || "";
  var poster = sanitizeCoverUrl(covers.posterPath) || siteCover || "";
  var desc = [];
  if (entry.rank) desc.push("排名: " + entry.rank);
  if (entry.actress) desc.push("演员: " + entry.actress);
  if (extraDesc) desc.push(extraDesc);
  return {
    id: javdbId || code,
    type: "url",
    mediaType: "movie",
    title: title,
    link: movieLink(javdbId || code),
    releaseDate: entry.releaseDate || "",
    description: desc.join(" | "),
    posterPath: poster || undefined,
    backdropPath: backdrop || undefined,
    detailPoster: sanitizeCoverUrl(covers.detailPoster) || poster || undefined,
    coverUrl: sanitizeCoverUrl(covers.coverUrl) || backdrop || undefined,
    image: sanitizeCoverUrl(covers.image) || backdrop || undefined,
  };
}

async function enrichStaticRankingEntries(rows, params, extraDesc) {
  return (rows || []).map(function (row) {
    return mapStaticRankingEntry(row, extraDesc);
  });
}

function paginateArray(list, page, limit) {
  var p = Number(page || 1) || 1;
  var size = Number(limit || RANKING_PAGE_LIMIT) || RANKING_PAGE_LIMIT;
  var start = (p - 1) * size;
  return (list || []).slice(start, start + size);
}

/** 中指通每月推荐（静态数据） */
async function loadMiddleFingerRecommend(params) {
  try {
    params = params || {};
    var month = String(params.sort_by || params.month || "2026-09").trim() || "2026-09";
    var rows = (typeof MIDDLE_FINGER_DATA !== "undefined" && MIDDLE_FINGER_DATA[month]) || [];
    if (!rows.length) {
      return [{ id: "tip", type: "text", title: "暂无推荐数据（" + month + "）" }];
    }
    var pageRows = paginateArray(rows, params.page, RANKING_PAGE_LIMIT);
    if (!pageRows.length) return [];
    return enrichStaticRankingEntries(pageRows, params, month);
  } catch (error) {
    console.error("[javdb] 中指通推荐失败:", (error && error.message) || error);
    throw error;
  }
}

function resolveDmmMonthlyRows(month) {
  if (month === "2026-10") return DMM_MONTHLY_DATA_2026_10 || [];
  if (month === "2026-09") return DMM_MONTHLY_DATA_2026_09 || [];
  if (month === "2026-08") return DMM_MONTHLY_DATA_2026_08 || [];
  if (month === "2026-07") return DMM_MONTHLY_DATA_2026_07 || [];
  if (month === "2026-06") return DMM_MONTHLY_DATA_2026_06 || [];
  return [];
}

/** FANZA / DMM 月度榜单（静态数据） */
async function loadDMMMonthlyRanking(params) {
  try {
    params = params || {};
    var month = String(params.sort_by || params.month || "2026-10").trim() || "2026-10";
    var rows = resolveDmmMonthlyRows(month);
    if (!rows.length) {
      return [{ id: "tip", type: "text", title: "暂无月度榜单（" + month + "）" }];
    }
    var pageRows = paginateArray(rows, params.page, RANKING_PAGE_LIMIT);
    if (!pageRows.length) return [];
    return enrichStaticRankingEntries(pageRows, params, "FANZA " + month);
  } catch (error) {
    console.error("[javdb] FANZA月度榜单失败:", (error && error.message) || error);
    throw error;
  }
}

/* 补充导出（11-handlers 的 exports 在本文件之前执行） */
if (typeof module !== "undefined" && module.exports) {
  module.exports.loadPlayback = loadPlayback;
  module.exports.loadCensored = loadCensored;
  module.exports.loadUncensored = loadUncensored;
  module.exports.loadFC2 = loadFC2;
  module.exports.loadWestern = loadWestern;
  module.exports.loadMaker = loadMaker;
  module.exports.loadCategory = loadCategory;
  module.exports.loadNewActors = loadNewActors;
  module.exports.loadActorsRanking = loadActorsRanking;
  module.exports.loadDMMRanking = loadDMMRanking;
  module.exports.loadMiddleFingerRecommend = loadMiddleFingerRecommend;
  module.exports.loadDMMMonthlyRanking = loadDMMMonthlyRanking;
}

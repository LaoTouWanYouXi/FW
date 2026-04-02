var WidgetMetadata = {
    id: "hanimel_me_style",
    title: "Hanime1",
    description: "Tips：需要纯净度较高ip，获取 Hanime1 动画，原作者 skywazzle，更新 @ios151",
    author: "ios151",
    site: "https://hanime1.me",
    version: "2.5.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 300,
    modules: [
        {
            title: "搜索影片",
            description: "搜索 Hanime1 影片内容",
            requiresWebView: false,
            functionName: "searchVideos",
            cacheDuration: 1800,
            params: [
                {
                    name: "keyword",
                    title: "搜索关键词",
                    type: "input",
                    description: "输入搜索关键词（标题、番号、作者等）",
                    value: ""
                },
                {
                    name: "genre",
                    title: "分类",
                    type: "enumeration",
                    description: "筛选分类",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "里番", value: "rifan" },
                        { title: "泡面番", value: "paomian" },
                        { title: "Motion Anime", value: "motion" },
                        { title: "3DCG", value: "3dcg" },
                        { title: "2.5D", value: "2.5d" },
                        { title: "2D 动画", value: "2d" },
                        { title: "AI生成", value: "ai" },
                        { title: "MMD", value: "mmd" },
                        { title: "Cosplay", value: "cosplay" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    description: "排序方式",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "最新上市", value: "new_release" },
                        { title: "最新上传", value: "latest_upload" },
                        { title: "本日排行", value: "daily_rank" },
                        { title: "本周排行", value: "weekly_rank" },
                        { title: "本月排行", value: "monthly_rank" },
                        { title: "观看次数", value: "view_count" },
                        { title: "赞好比例", value: "like_ratio" },
                        { title: "时长最长", value: "longest" },
                        { title: "他们在看", value: "watching" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本日热门",
            description: "本日热门影片",
            requiresWebView: false,
            functionName: "loadDailyHot",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本周热门",
            description: "本周热门影片",
            requiresWebView: false,
            functionName: "loadWeeklyHot",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本月热门",
            description: "本月热门影片",
            requiresWebView: false,
            functionName: "loadMonthlyHot",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "最新上市",
            description: "最新上市影片",
            requiresWebView: false,
            functionName: "loadNewRelease",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "中文字幕",
            description: "中文字幕影片",
            requiresWebView: false,
            functionName: "loadChineseSubtitle",
            cacheDuration: 1800,
            params: [
                {
                    name: "genre",
                    title: "分类",
                    type: "enumeration",
                    description: "筛选分类",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "里番", value: "rifan" },
                        { title: "泡面番", value: "paomian" },
                        { title: "Motion Anime", value: "motion" },
                        { title: "3DCG", value: "3dcg" },
                        { title: "2.5D", value: "2.5d" },
                        { title: "2D 动画", value: "2d" },
                        { title: "AI生成", value: "ai" },
                        { title: "MMD", value: "mmd" },
                        { title: "Cosplay", value: "cosplay" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    description: "排序方式",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "最新上市", value: "new_release" },
                        { title: "最新上传", value: "latest_upload" },
                        { title: "本日排行", value: "daily_rank" },
                        { title: "本月排行", value: "monthly_rank" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "影片分类",
            description: "浏览不同分类的影片",
            requiresWebView: false,
            functionName: "loadByGenre",
            cacheDuration: 1800,
            params: [
                {
                    name: "genre",
                    title: "选择分类",
                    type: "enumeration",
                    description: "选择具体分类",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "里番", value: "rifan" },
                        { title: "泡面番", value: "paomian" },
                        { title: "Motion Anime", value: "motion" },
                        { title: "3DCG", value: "3dcg" },
                        { title: "2.5D", value: "2.5d" },
                        { title: "2D 动画", value: "2d" },
                        { title: "AI生成", value: "ai" },
                        { title: "MMD", value: "mmd" },
                        { title: "Cosplay", value: "cosplay" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    description: "排序方式",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "最新上市", value: "new_release" },
                        { title: "最新上传", value: "latest_upload" },
                        { title: "本日排行", value: "daily_rank" },
                        { title: "本月排行", value: "monthly_rank" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "新番预告",
            description: "查看即将上映的新番",
            requiresWebView: false,
            functionName: "loadPreviews",
            cacheDuration: 3600,
            params: []
        }
    ]
};

const BASE_URL = "https://hanime1.me";
const REQUEST_TIMEOUT = 10000;

function getCommonHeaders() {
    return {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Language": "zh-TW,zh;q=0.9",
        "Referer": BASE_URL,
        "sec-ch-ua": "\"\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
    };
}

// 网络请求
async function httpGetWithTimeout(url) {
    return Widget.http.get(url, {
        headers: getCommonHeaders(),
        timeout: REQUEST_TIMEOUT
    });
}

// 整理图片
function normalizeImageUrl(src) {
    if (!src) return "";
    if (src.startsWith("//")) return "https:" + src;
    if (src.startsWith("/")) return BASE_URL + src;
    if (!src.startsWith("http")) return BASE_URL + "/" + src;
    return src;
}

// 解析列表页
async function fetchAndParse(url, genre = '') {
    try {
        const response = await httpGetWithTimeout(url);
        const $ = Widget.html.load(response.data);
        const items = [];

        // 遍历卡片
        $('.video-item-container').each((i, el) => {
            const $container = $(el);

            // 过滤广告
            const $link = $container.find('a.video-link').first();
            const href = $link.attr('href') || '';
            if (!href || !href.includes('/watch?v=')) return;
            if (href.includes('erodalabs') || href.includes('erolabs')) return;

            let link = href;
            if (!link.startsWith('http')) {
                link = BASE_URL + (link.startsWith('/') ? '' : '/') + link;
            }

            // 去重
            if (items.some(it => it.link === link)) return;

            // 缩略图
            const $img = $container.find('img.main-thumb').first();
            let poster = $img.attr('data-src') || $img.attr('src') || '';
            if (poster.includes('background.jpg')) poster = '';
            poster = normalizeImageUrl(poster);

            // 标题
            let title = $container.find('.title').first().text().trim();
            if (!title) title = $img.attr('alt') || $container.attr('title') || '';
            if (!title) return;

            // 时长
            const duration = $container.find('.duration').first().text().trim();

            // 数据统计
            let likePercent = '';
            let viewCount = '';
            $container.find('.stat-item').each((j, statEl) => {
                const text = $(statEl).text().trim();
                if (text.includes('%')) {
                    const match = text.match(/(\d+)%/);
                    if (match) likePercent = match[1] + '%';
                } else if (text.includes('次')) {
                    viewCount = text.trim();
                }
            });

            // 作者时间
            const subtitle = $container.find('.subtitle').first().text().trim();
            let author = '';
            let timeAgo = '';
            if (subtitle) {
                const parts = subtitle.split('•');
                author = (parts[0] || '').trim();
                timeAgo = (parts[1] || '').trim();
            }

            // 转换评分
            let rating = '';
            if (likePercent) {
                const pct = parseInt(likePercent);
                rating = (pct / 10).toFixed(1);
            }

            // 组合描述
            const baseInfo = [timeAgo, rating ? `⭐${rating}` : '', viewCount].filter(Boolean).join(" · ");
            const desc = `${author ? '👤 ' + author : '未知'} · ⏳${duration}`;

            // all 和 rifan 分类使用纵向封面(posterPath)，其余分类使用横向封面(backdropPath)
            const usePoster = (genre === 'all' || genre === 'rifan');

            items.push({
                id: link,
                type: "url", // Forward list
                title: title,
                subTitle: baseInfo, // 用于网格模式显示
                description: `${baseInfo}\n${desc}`, // 用于列表模式显示
                releaseDate: timeAgo,
                // rating: rating ? parseFloat(rating) : 0, // 避免与原生评分组件冲突
                posterPath: usePoster ? poster : '',
                backdropPath: poster,
                mediaType: "movie",
                durationText: duration,
                link: link
            });
        });

        // 兼容简易网格模式 (例如直接点某些分类进来的页面是纯网格)
        if (items.length === 0) {
            $('a[href*="/watch?v="]').each((i, el) => {
                const $a = $(el);
                
                // 排除不相关的链接
                const href = $a.attr('href') || '';
                if (href.includes('erodalabs') || href.includes('erolabs')) return;

                let link = href;
                if (!link.startsWith('http')) {
                    link = BASE_URL + (link.startsWith('/') ? '' : '/') + link;
                }

                if (items.some(it => it.link === link)) return;

                const $img = $a.find('img').first();
                if ($img.length === 0) return;

                let poster = $img.attr('data-src') || $img.attr('src') || '';
                if (poster.includes('background.jpg')) poster = '';
                poster = normalizeImageUrl(poster);

                let title = $a.find('.home-rows-videos-title, [class*="title"]').first().text().trim();
                if (!title) title = $img.attr('alt') || '';
                if (!title) return;

                const usePoster2 = (genre === 'all' || genre === 'rifan');

                items.push({
                    id: link,
                    type: "url",
                    title: title,
                    subTitle: '• 暂无详细属性', // 网格模式下网页本身未提供评分和时长
                    description: title,
                    posterPath: usePoster2 ? poster : '',
                    backdropPath: poster,
                    mediaType: "movie",
                    link: link
                });
            });
        }

        return items;
    } catch (e) {
        console.error(`Fetch error for ${url}:`, e);
        return [];
    }
}

// 排序映射
function mapSortToApi(sortValue) {
    const map = {
        "new_release": "最新上市",
        "latest_upload": "最新上傳",
        "daily_rank": "本日排行",
        "weekly_rank": "本週排行",
        "monthly_rank": "本月排行",
        "view_count": "觀看次數",
        "like_ratio": "讚好比例",
        "longest": "時長最長",
        "watching": "他們在看"
    };
    return map[sortValue] || "";
}

function mapGenreToApi(genreValue) {
    const map = {
        "rifan": "裏番",
        "paomian": "泡麵番",
        "motion": "Motion Anime",
        "3dcg": "3DCG",
        "2.5d": "2.5D",
        "2d": "2D動畫",
        "ai": "AI生成",
        "mmd": "MMD",
        "cosplay": "Cosplay"
    };
    return map[genreValue] || "";
}

// 模块函数

async function searchVideos(params) {
    const page = params.page || 1;
    const keyword = params.keyword || "";
    const genreKey = params.genre || 'all';
    const sort = mapSortToApi(params.sort_by);
    const genre = mapGenreToApi(genreKey);

    let url = `${BASE_URL}/search`;
    const queryParts = [];
    if (keyword) queryParts.push(`query=${encodeURIComponent(keyword)}`);
    if (genre) queryParts.push(`genre=${encodeURIComponent(genre)}`);
    if (sort) queryParts.push(`sort=${encodeURIComponent(sort)}`);
    if (page > 1) queryParts.push(`page=${page}`);

    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }
    return fetchAndParse(url, genreKey);
}

async function loadDailyHot(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('本日排行')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url, 'all');
}

async function loadWeeklyHot(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('本週排行')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url, 'all');
}

async function loadMonthlyHot(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('本月排行')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url, 'all');
}

async function loadNewRelease(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('最新上市')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url, 'all');
}

async function loadChineseSubtitle(params) {
    const page = params.page || 1;
    const genreKey = params.genre || 'all';
    const sort = mapSortToApi(params.sort_by);
    const genre = mapGenreToApi(genreKey);

    let url = `${BASE_URL}/search?tags%5B%5D=${encodeURIComponent('中文字幕')}`;

    if (sort) url += `&sort=${encodeURIComponent(sort)}`;
    if (genre) url += `&genre=${encodeURIComponent(genre)}`;
    if (page > 1) url += `&page=${page}`;

    return fetchAndParse(url, genreKey);
}

async function loadByGenre(params) {
    const page = params.page || 1;
    const genreKey = params.genre || 'all';
    const genre = mapGenreToApi(genreKey);
    const sort = mapSortToApi(params.sort_by);

    let url = `${BASE_URL}/search`;
    const queryParts = [];
    if (genre) queryParts.push(`genre=${encodeURIComponent(genre)}`);
    if (sort) queryParts.push(`sort=${encodeURIComponent(sort)}`);
    if (page > 1) queryParts.push(`page=${page}`);

    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }
    return fetchAndParse(url, genreKey);
}

// 预览页解析
function parsePreviewsHtml(html) {
    const $ = Widget.html.load(html);
    const items = [];

    $('.hidden-sm.hidden-md.hidden-lg .preview-image-modal-trigger').each((i, el) => {
        const $img = $(el);
        const poster = $img.attr('src') || $img.attr('data-src');
        if (!poster) return;

        let title = $img.attr('alt') || "";
        if (!title) {
            const $caption = $img.closest('div').find('h5.caption');
            if ($caption.length) {
                title = $caption.text().trim();
                title = title.split('\n')[0];
            }
        }
        if (!title) title = "新番预告";
        if (title.length > 40) title = title.substring(0, 40) + "...";

        const link = `${BASE_URL}/previews`;

        items.push({
            id: link,
            type: "url",
            title: title,
            posterPath: normalizeImageUrl(poster),
            backdropPath: normalizeImageUrl(poster),
            mediaType: "movie",
            description: "新番预告",
            link: link
        });
    });

    return items;
}

async function loadPreviews(params) {
    const d = new Date();
    const year = d.getFullYear();
    let month = d.getMonth() + 1;
    if (month < 10) month = '0' + month;

    const url = `${BASE_URL}/previews/${year}${month}`;

    try {
        const response = await httpGetWithTimeout(url);
        return parsePreviewsHtml(response.data);
    } catch (e) {
        console.error("Preview load failed", e);
        return [];
    }
}

// 详情加载

async function loadDetail(link) {
    try {
        const response = await httpGetWithTimeout(link);
        const html = response.data;
        const $ = Widget.html.load(html);

        // 提取链接
        let videoUrl = "";
        let quality = "";

        // CDN直链
        const mp4Re = /https:\/\/(?:vdownload(?:-\d+)?\.hembed\.com|cdne?-?(?:mobile)?\.youjizz\.com)[^"'\s>]+\.mp4\?[^"'\s>]+/g;
        let urls = [...html.matchAll(mp4Re)].map(m => m[0].replace(/&amp;/g, '&'));

        // 预载链接
        if (urls.length === 0) {
            const preloadRe = /href="(https?:\/\/[^"]+\.mp4\?[^"]+)"\s+type="video\/mp4"/g;
            urls = [...html.matchAll(preloadRe)].map(m => m[1].replace(/&amp;/g, '&'));
        }

        // input兜底
        if (urls.length === 0) {
            const qualityIds = ['#video-1080p', '#video-720p', '#video-hd', '#video-sd'];
            for (const id of qualityIds) {
                const val = $(id).val();
                if (val) { urls.push(val); break; }
            }
        }

        // source兜底
        if (urls.length === 0) {
            const src = $('video source').attr('src');
            if (src) urls.push(src);
        }

        if (urls.length > 0) {
            // 筛选画质
            urls.sort((a, b) => {
                const qa = parseInt(a.match(/-(\d+)p/)?.[1] || '0');
                const qb = parseInt(b.match(/-(\d+)p/)?.[1] || '0');
                return qb - qa;
            });
            videoUrl = urls[0].replace(/&amp;/g, '&');
            const qMatch = videoUrl.match(/-(\d+)p/);
            if (qMatch) quality = qMatch[1] + 'p';
        }

        if (!videoUrl) {
            throw new Error("video_url_not_found");
        }

        // 基础信息
        const title = $('meta[property="og:title"]').attr('content') || "标题未知";
        const desc = $('meta[property="og:description"]').attr('content') || "";
        const cover = $('meta[property="og:image"]').attr('content') || "";
        const keywords = $('meta[name="keywords"]').attr('content') || "";

        // 发行日期
        let releaseDate = "";
        const relDateMatch = desc.match(/Release\s*\/\s*販売日:\s*([\d/]+)/i);
        if (relDateMatch) {
            releaseDate = relDateMatch[1];
        }
        if (!releaseDate) {
            const viewDateMatch = html.match(/觀看次數[：:][^<]*?(\d{4}-\d{2}-\d{2})/);
            if (viewDateMatch) releaseDate = viewDateMatch[1];
        }

        // 评分
        let rating = "";
        const likeMatch = html.match(/thumb_up<\/i>\s*(\d+)%/);
        if (likeMatch) {
            rating = (parseInt(likeMatch[1]) / 10).toFixed(1);
        }

        // 播放量
        let viewCount = "";
        const hitsMatch = html.match(/觀看次數[：:]\s*([\d,.]+\s*(?:萬|億)?\s*次)/);
        if (hitsMatch) viewCount = hitsMatch[1].trim();

        // 制作组
        let studio = "";
        const brandMatch = desc.match(/Brand\s*\/\s*ブランド:\s*(.+?)(?:Release|File|$)/i);
        if (brandMatch) studio = brandMatch[1].trim();

        // 时长
        let durationText = "";
        const durMatch = html.match(/<meta\s+property="og:video:duration"\s+content="(\d+)"/i);
        if (durMatch) {
            const totalSec = parseInt(durMatch[1]);
            const min = Math.floor(totalSec / 60);
            const sec = totalSec % 60;
            durationText = `${min}:${sec.toString().padStart(2, '0')}`;
        }

        // 组合描述
        const baseTitle = [releaseDate, rating ? `⭐${rating}` : '', viewCount, durationText].filter(Boolean).join(' · ');
        let displayDesc = `${baseTitle}\n制作: ${studio || '未知'}\n\n${desc || '暂无简介'}`;
        if (keywords) displayDesc += `\n\n🏷 ${keywords}`;

        // 推荐视频
        const childItems = [];
        $('.home-rows-videos-div a[href*="/watch?v="]').each((i, el) => {
            if (i >= 10) return false;

            const $a = $(el);
            let recLink = $a.attr('href');
            if (!recLink) return;
            if (!recLink.startsWith('http')) {
                recLink = BASE_URL + (recLink.startsWith('/') ? '' : '/') + recLink;
            }

            const $img = $a.find('img').first();
            let recPoster = $img.attr('data-src') || $img.attr('src') || "";
            recPoster = normalizeImageUrl(recPoster);

            let recTitle = $a.find('.home-rows-videos-title, [class*="title"]').first().text().trim();
            if (!recTitle) recTitle = $img.attr('alt') || "相关视频";

            childItems.push({
                id: recLink,
                type: "url",
                title: recTitle,
                posterPath: recPoster,
                backdropPath: recPoster,
                mediaType: "movie",
                link: recLink
            });
        });

        return {
            id: link,
            type: "detail",
            videoUrl: videoUrl,
            title: title,
            subTitle: baseTitle, // 详情页副标题
            description: displayDesc,
            posterPath: normalizeImageUrl(cover),
            backdropPath: normalizeImageUrl(cover),
            mediaType: "movie",
            link: link,
            releaseDate: releaseDate,
            // rating: rating ? parseFloat(rating) : undefined,
            durationText: durationText || undefined,
            childItems: childItems,
            headers: getCommonHeaders()
        };

    } catch (error) {
        console.error("Detail load error:", error);
        let errorMsg = "无法加载视频，请重试。";
        if (error.message === "video_url_not_found") {
            errorMsg = "未找到视频地址，可能需登录或该视频已失效。";
        }
        return {
            id: link,
            type: "detail",
            videoUrl: link,
            title: "加载失败",
            description: errorMsg,
            posterPath: "",
            mediaType: "movie",
            link: link
        };
    }
}
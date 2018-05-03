require.config({
    baseUrl:"/js/",
    paths:{
        // 工具
        "jquery":"libs/jquery-2.1.1.min",
        "Handlebars":"libs/handlebars-v4.0.11",
        "swiper":"libs/swiper-3.4.2.min",
        "text":"libs/text",
        "BScroll":"libs/bscroll",
        // util
        // "storage":"util/storage", // 本次缓存配置
        "render":"util/render",
        // 每页js
        "index":"page/index",
        "details":"page/details",
        // handlebars模板
        "banTpl":"../page/tpl/ban-tpl.html",
        "tbtpl":"../page/tpl/t-b-tpl.html",
        "headertpl":"../page/tpl/header-tpl.html"


    }
});
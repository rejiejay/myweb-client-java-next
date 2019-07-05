/**
 * nuxt.config.js 文件
 * nuxt.config.js 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。
 * 若无额外配置，则该目录不能被重命名。。
 * 文档： https://zh.nuxtjs.org/guide/configuration
 */
module.exports = {
    mode: 'spa',

    /*
    ** Headers of the page
    */
    head: {
        title: '曾杰杰-Rejiejay Web站',
        htmlAttrs: {
            lang: 'zh',
        },
        meta: [
            { charset: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '尝试新技术与JAVA配合' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { charset: 'utf-8', href: 'https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/js/jweixin-1.4.0.js' },
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/element-ui'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
    ],
    /*
    ** Build configuration
    */
    build: {
        transpile: [/^element-ui/],
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}

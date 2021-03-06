/*
 * @Date           : 2020-08-31 16:40:01
 * @FilePath       : /learning-space/quasar.conf.js
 * @Description    : 
 */
// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

console.log('process.env.MODE-------------------------');
console.log(process.env.MODE);
console.log( process.argv );
console.log('process.env.MODE-------------------------');
//构建输出到 GitHub
const for_github = (process.argv[2] || '') .trim() =='g'
const path = require('path')
module.exports = function (ctx) {
  return {

    // https://quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,



    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/cli-documentation/boot-files
    boot: [
      'i18n',
      'axios',
      "utils",
      "lodash"
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      'app.scss',
      "github-markdown.css",
      'scroll.scss'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v4',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: 'material-icons', // Quasar icon set
      lang: 'en-us', // Quasar language pack
      config: {},

      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: 'all',

      // For special cases outside of where "auto" importStrategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [
        "Cookies"
      ]
    },


    // https://quasar.dev/quasar-cli/cli-documentation/supporting-ie
    supportIE: true,
    //https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-htmlVariables
    htmlVariables: {
      title: 'NATI',
      description:'成长空间',
      icon_path: ctx.dev?'img/logo/favicon.ico':  (for_github ?'/learning-space/public/img/logo/favicon.ico':'img/logo/favicon.ico')
  
    },
    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build


    build: {
      distDir: process.argv[3]=='electron'? "./dist/dist-electron":(for_github?"./docs-2":'./dist/dist-spa-server') ,
      scopeHoisting: true,
      vueRouterMode: 'hash', // available values: 'hash', 'history'
      // vueRouterMode: 'history', // available values: 'hash', 'history'
      showProgress: true,
      // ignorePublicFolder:true,
      gzip: false,
      analyze: false,
      // publicPath:"https://github.com/jinnianwushuang/learning-space/blob/master/public/",  mode
      publicPath: for_github?"/learning-space/public/":"/",
      env: {
        last_update_time:  new Date().getTime(),
        for_github
      },
      // Options below are automatically set depending on the env, set them if you want to override
      // preloadChunks: false,
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/cli-documentation/handling-webpack
      extendWebpack (cfg) {
        // cfg.resolve.alias = {
        //   ...cfg.resolve.alias, // This adds the existing alias

        //   // Add your own alias like this
        //   myalias: path.resolve(__dirname, './src/somefolder'),
        // }
      },
      chainWebpack(config, { isServer, isClient }){
                config.module .rule("xlsx")
        .test(/\.xls.?$/)
        .use("excel-loader")
        // node_modules\excel-loader\index.js
        .loader("./node_modules/excel-loader/index.js")
        // config.module .rule("md")
        // .test(/\.md$/)
        // .use("vue-loader")
        // .loader("vue-loader")
        // .end()
        // .use("vue-markdown-loader")
        // .loader("vue-markdown-loader/lib/markdown-compiler")
        // .options({
        //   raw: true
        // });
     
        config.module .rule("docx")
        .test(/\.docx$/)
        .use("docx-loader")
        // node_modules\excel-loader\index.js
        .loader("./node_modules/docx-loader/index.js")
        .options({
          removeLinks: true
        })

          config.resolve.alias
            .set('public', path.resolve(__dirname, './public'))
        
      },
      //https://github.com/webpack-contrib/terser-webpack-plugin/#minify
      uglifyOptions:{

      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 48080,
      open: true // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: 'Quasar App',
        short_name: 'Quasar App',
        description: 'A Quasar Framework app',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
      // id: 'org.cordova.quasar.app'
    },


    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'learning-space',
        // output:'./dist-electron',
        // distDir:"./dist-electron",
        directories:{
          // output:'./dist-electron'
        }
      },

      // keep in sync with /src-electron/main-process/electron-main
      // > BrowserWindow > webPreferences > nodeIntegration
      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      }
    }
  }
}

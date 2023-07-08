import colors from 'vuetify/es5/util/colors'

const appEnv = process.env.NODE_ENV || 'development';

export default {
  publicRuntimeConfig: {
    apiUrlV2: appEnv === 'development'
    ? 'https://apiuinnv2.uinn.cl'
    : 'https://apiuinnv2.uinn.cl',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'UINN',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Unidad de innovación' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/spacingToClass.js' },
    { src: '~/plugins/objectToQueryString.js' },
    // { src: '~/plugins/fontawesome.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/postcss8',
    '@nuxtjs/moment',
  ],

  image: {

  },

  // Moment js config
  moment: {
    defaultLocale: 'es',
    locales: ['es'],
    defaultTimezone: 'America/Santiago'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      icons: {
        iconfont: 'mdiSvg',
      },
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    // optimization :{
    //   splitChunks: {
    //     chunks: 'all',
    //     automaticNameDelimiter: '.',
    //     name: 'app',
    //     maxSize : 256000
    //   }
    // }
  }
}

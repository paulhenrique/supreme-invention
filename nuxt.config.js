export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ais-nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vue-instantsearch.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-content-algolia'],
  nuxtContentAlgolia: {
    // Application ID
    appId: '34IIDW6KKR',

    // Admin API Key
    // !IMPORTANT secret key should always be an environment variable
    // this is not your search only key but the key that grants access to modify the index
    apiKey: '3f8d80be6c42bb030d27a7f108eb75f8',

    paths: [
      {
        name: 'articles',
        index: process.env.ALGOLIA_INDEX || 'articles',
        fields: ['title', 'description', 'tags', 'bodyPlainText'],
      },
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-algolia',
  ],
  publicRuntimeConfig: {
    algolia: {
      applicationId: 'B1G2GM9NG0',
      apiKey: 'aadef574be1f9252bb48d4ea09b5cfe5',
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },
}

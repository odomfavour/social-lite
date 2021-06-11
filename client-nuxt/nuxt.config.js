export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'client-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-tour.js',
    '~/plugins/mixins.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/auth'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:5000',
        // LocalStorage token
        tokenName: 'apollo-token',
        // Sets the authentication type for any authorized request.
        authenticationType: 'Bearer', 
      }
    },
    errorHandler: '~/plugins/errorhandler.apollo.js'
  },

  bootstrapVue: {
      icons: true
    },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: false,
          register: false,
          user: false,
          logout: false
        }
      }
    }
  },

}

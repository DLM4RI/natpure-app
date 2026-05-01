import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },

  app: {
    baseURL: '/natpure-app/',
  },
})
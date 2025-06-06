// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true,},
  devServer:{
    port:7000,
  },
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/scripts',
    '@nuxt/ui'
  ]
})
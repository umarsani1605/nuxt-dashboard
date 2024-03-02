// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    'nuxt-headlessui',
    "@morev/vue-transitions/nuxt"
  ],
  tailwindcss: {exposeConfig: true},
  headlessui: {
    prefix: 'H'
  },
  app: {
    head: {
      title: 'Analytics',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.svg'},
        { rel: 'stylesheet', href: 'https://rsms.me/inter.css'},
        { rel: 'preconnect', href: 'https://rsms.me/'}
      ]
    }
  }
})

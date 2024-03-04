// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000',
    }
  },
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'},
        { rel: 'stylesheet', href: './node_modules/apexcharts/dist/apexcharts.css'}
      ]
    }
  }
})

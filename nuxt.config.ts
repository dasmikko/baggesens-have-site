// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/assets/css/main.css'],
  nitro: {
    preset: 'static'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/content',
    '@formkit/auto-animate/nuxt',
    "@nuxtjs/sitemap",
    '@primevue/nuxt-module'
  ],

  content: {
  },
  routeRules: {
    '/': { prerender: true }
  },
  site: {
    url: 'https://holbaek3dprint.dk',
  },

  compatibilityDate: '2024-07-04',
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})
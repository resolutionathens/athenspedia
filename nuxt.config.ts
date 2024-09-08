// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/seo",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],

  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

  compatibilityDate: "2024-09-08",
});
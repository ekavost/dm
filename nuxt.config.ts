// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  app: {
    // En GitHub Pages (repo que no es <usuario>.github.io) la app vive en
    // https://<usuario>.github.io/<repo>/ — el workflow de deploy define
    // NUXT_APP_BASE_URL='/<repo>/' al construir. En local o con dominio
    // propio se queda en '/'.
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
    head: {
      htmlAttrs: { lang: "ru" },
      title: "DM Marketing — Настройка и ведение рекламы в Казахстане",
      meta: [
        {
          name: "description",
          content:
            "Настройка и ведение контекстной, таргетированной рекламы и веб-аналитики в Казахстане: Google Ads, Яндекс.Директ, Facebook/Instagram, GTM.",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
        },
      ],
    },
  },

  ui: {
    fonts: false,
  },

  nitro: {
    preset: "github-pages",
  },
});

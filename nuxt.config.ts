// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  app: {
    head: {
      title: "abcjpega",
      htmlAttrs: {
        lang: "pt-br",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

      script: [
        {
          src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
          type: "text/javascript",
        },
        {
          hid: "stripe",
          src: "https://www.gstatic.com/charts/loader.js",
          defer: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/sweetalert2@11",
          type: "text/javascript",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css", "~/assets/css/style.min.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  middleware: ["auth"],
  components: true,
  plugins: [{ src: "@/plugins/axios.js" }],
  serverMiddleware: [{ path: "/api/register/store", handler: "~/api/register.js" }],
};

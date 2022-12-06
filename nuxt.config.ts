// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/css/main.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@pinia/nuxt"],
  app: {
    // + accesibility
    head: {
      htmlAttrs: {
        lang: "en",
      },
      //dont know how to access the store in this file,
      //could have set the head in a layout but I liked it more here
      title: "Contact List",
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Victor atempts to join Valtech by showing off his rusty vue skills",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [],
    },
  },
});

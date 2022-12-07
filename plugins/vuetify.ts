import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// importing all directives and components instead of being picky due to lack of time

// TODO: proper custome theme
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#736f6f",
  },
  variables: {},
};
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#e9e9e9",
  },
  variables: {},
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      // extra care for your eyes :)
      defaultTheme: "lightTheme",
      themes: {
        darkTheme,
        lightTheme
      }
    },

  });

  nuxtApp.vueApp.use(vuetify);
});

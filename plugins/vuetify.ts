import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// importing all directives and components instead of being picky due to lack of time

//TODO: custome theme
// const primaryTheme: ThemeDefinition = {
//   colors: {},
//   variables: {},
// };

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      // extra care for your eyes :)
      defaultTheme: "dark",
    },
  });

  nuxtApp.vueApp.use(vuetify);
});

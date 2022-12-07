<template>
  <v-navigation-drawer v-model="drawer">
    <v-sheet class="pa-4">
      <v-avatar class="mb-4" color="grey-darken-1" size="80">
        <img src="~/public/images/avatar.jpeg" alt="victor">
      </v-avatar>
      <div>victorribera92@.com</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <template v-slot:prepend>
          <v-icon>{{ icon }}</v-icon>
        </template>

        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
//old options api, will try to do the rest with composition
export default {
  data: () => ({
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
  }),
};
</script>

<style lang="scss" scoped>
// quick hack, issues with vuetify3 v-img src attribute
  img {
    height: 110px;
  }
</style>

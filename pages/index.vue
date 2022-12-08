<template>
  <v-app id="">
    <SideBar />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-btn
          variant="tonal"
          prepend-icon="mdi-account-multiple-plus"
          class="mb-4"
          @click="mainStore.getUsers()"
          >ADD USERS (120)</v-btn
        >
        <ThemeToggler />
        <v-card>
          <TabComponent :tabs="tabs" />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { storeToRefs } from "pinia";
  import { useMainStore } from "~~/store/MainStore";

  const mainStore = useMainStore();
  const { tabs } = storeToRefs(mainStore);
</script>

<style lang="scss">
  // Quick hack to remove full width from overlays (prevented clicks on the side)
  .v-overlay-container .v-overlay .v-overlay__content {
    max-width: 350px;
  }
</style>

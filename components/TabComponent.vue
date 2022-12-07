<template>
  <v-tabs
    next-icon="mdi-arrow-right-bold-circle-outline"
    prev-icon="mdi-arrow-left-bold-circle-outline"
    v-model="tab"
    center-active
    bg-color="primary"
  >
    <v-tab v-for="tab in tabs" :value="tab">{{ tab }}</v-tab>
  </v-tabs>

  <v-card-text>
    <v-window v-model="tab">
      <v-window-item v-for="tab in tabs" :value="tab">
        <v-list>
          <v-list-item>
            <template v-slot:prepend>
              <v-avatar color="grey-darken-1"></v-avatar>
            </template>

            <v-list-item-title>{{ tab }}</v-list-item-title>

            <v-list-item-subtitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              repellendus distinctio similique
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-window-item>

      <v-window-item value="two"> Two </v-window-item>

      <v-window-item value="three"> Three </v-window-item>
    </v-window>
  </v-card-text>
</template>

<script setup>
    import { useMainStore } from "~~/store/MainStore";

    const mainStore = useMainStore();
    const tabs = mainStore.appConfig.tabs;
    const tab = ref(null);
</script>

<style scoped></style>

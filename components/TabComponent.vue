<template>
  <v-tabs
    next-icon="mdi-arrow-right-bold-circle-outline"
    prev-icon="mdi-arrow-left-bold-circle-outline"
    v-model="tab"
    center-active
    bg-color="primary"
    show-arrows
  >
    <v-tab v-for="tab in tabs" :value="tab.tabName">{{ tab.tabName }}</v-tab>
  </v-tabs>
  <!-- TODO LOADING SPINNER -->
  <v-card-text class="py-0 py-0-lg-3">
    <v-window v-model="tab">
      <v-window-item v-for="tab in tabs" :value="tab.tabName">
        <v-list>
          <ContactRow v-for="user in tab.filteredUsers" :user="user" />
        </v-list>
      </v-window-item>
    </v-window>
  </v-card-text>
</template>

<script setup>
  // PROPS
  const props = defineProps({
    tabs: {
      type: Object,
    },
  });

  // V by default so you cant try to find victors
  const tab = ref("v");
</script>

<style scoped></style>

<template>
  <v-container>
    <h5>Contact details:</h5>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="2"> <v-icon large> mdi-map-marker </v-icon></v-col>
      <v-col cols="10">{{ user.location.street.name }}, {{ user.location.city }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="2"> <v-icon large> mdi-email </v-icon></v-col>
      <v-col cols="10"><a href="mailto:{{ user.email }}">{{ user.email }}</a></v-col>
    </v-row>
    <v-row>
      <v-col cols="2"> <v-icon large> mdi-phone-classic </v-icon></v-col>
      <v-col cols="10"><a href="tel:{{ user.phone }}">Phone: {{ user.phone }}</a></v-col>
    </v-row>
    <v-row>
      <v-col cols="2"> <v-icon large> mdi-cellphone </v-icon></v-col>
      <v-col cols="10"><a href="tel:{{ user.cell }}">Phone: {{ user.cell }}</a></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  // PROPS
  const props = defineProps({
    user: {
      type: Object,
    },
  });
</script>

<style scoped></style>

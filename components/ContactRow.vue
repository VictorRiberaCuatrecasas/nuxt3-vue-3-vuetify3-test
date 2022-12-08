<!-- TODO, BREAK DOWN INTO SMALLER COMPONENTS -->
<template>
  <v-list-item>

    <!-- ROW DETAILS -->
    <template v-slot:prepend>
      <v-avatar @click="dialog = true" color="grey-darken-1">
        <v-img class="contact-avatar" :src="user.picture.thumbnail"></v-img>
      </v-avatar>
    </template>
    <v-list-item-title>{{ user.name.first }} {{ user.name.last }}</v-list-item-title>
    <v-list-item-subtitle class="d-none d-lg-flex justify-space-between">
      <v-row>
        <v-col><span class="mr-4">Email: {{ user.email }}</span></v-col>
        <v-col><span class="mx-4">Phone: {{ user.phone }}</span></v-col>
        <v-col><span class="ml-4">Cell: {{ user.cell }}</span></v-col>
      </v-row>
    </v-list-item-subtitle>

    <!-- CARD MODAL -->
    <v-dialog v-model="dialog">
      <v-card class="mx-auto" max-width="350px">
        <v-container>
          <v-row class="card-header align-center" primary>
            <v-col>
              <v-avatar @click="dialog = true" color="grey-darken-1" size="80">
                <v-img
                  class="contact-avatar"
                  :src="user.picture.medium"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col>
              <strong>{{ user.name.first }} {{ user.name.last }}</strong>
            </v-col>
            <v-col>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  @click="dialog = false"
                  size="medium"
                  icon="mdi-close"
                ></v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
        <!-- CARD DETAILS -->
        <ContactCardDetails :user="user" />
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup>
  // PROPS
  const props = defineProps({
    user: {
      type: Object,
    },
  });

  const dialog = ref(false);
</script>

<style lang="scss" scope>
  .card-header {
    background-color: rgb(var(--v-theme-primary));
  }
  .contact-avatar {
    &:hover {
      cursor: pointer;
    }
  }
</style>

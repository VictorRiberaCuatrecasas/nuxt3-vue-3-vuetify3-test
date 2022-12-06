<!-- auto routing in nuxt using file name under pages folder. index serves as homepage -->
<template>
  <v-app id="">
    <SideBar></SideBar>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-card>
          <v-list lines="two">
            <v-list-subheader>contact list</v-list-subheader>

            <v-list-item>
              <template v-slot:prepend>
                <v-avatar color="grey-darken-1"></v-avatar>
              </template>

              <v-list-item-title>Message</v-list-item-title>

              <v-list-item-subtitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                repellendus distinctio similique
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
  <h1 style="color: white">test {{ appConfig }} test</h1>
</template>

<script setup>
import { useMainStore } from "~~/store/MainStore";
  const mainStore = useMainStore();
  const appConfig = mainStore.appConfig;
  const uri = `${appConfig.userUrl}/api/?results=${appConfig.numberCards}`;

  const {data: users} = await useFetch(uri)
  console.log(users.value, users)


</script>

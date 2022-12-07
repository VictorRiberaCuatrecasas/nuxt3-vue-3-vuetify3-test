<!-- auto routing in nuxt using file name under pages folder. index serves as homepage -->
<template>
  <v-app id="">
    <SideBar></SideBar>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-card>
          <TabComponent/>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { useMainStore } from "~~/store/MainStore";
  const mainStore = useMainStore();
  const appConfig = mainStore.appConfig;
  const uri = `${appConfig.userUrl}/api/?results=${appConfig.numberCards}`;

  const { data: users } = await useFetch(uri);
  // console.log(users.value.results, "test", users);
</script>

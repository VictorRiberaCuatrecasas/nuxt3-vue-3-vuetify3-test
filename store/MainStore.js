import { defineStore } from "pinia";
import AppConfig from "../project_config/configuration.json";

export const useMainStore = defineStore("main", {
  state: () => ({
    appConfig: AppConfig,
    totalUsers: [],
    tabs: [],
    isLoading: false,
  }),
  actions: {
    async getUsers() {
      this.isLoading = true;

      const uri = "https://randomuser.me/api/?results=120";
      const { data: users } = await useFetch(uri);
      this.totalUsers = this.totalUsers.concat(users.value.results);
      let updatedTabs = [];

      for (const tab of this.appConfig.tabs) {
        let hydratedTab = {
          ["tabName"]: tab,
          ["filteredUsers"]: [],
        };
        let filteredUsers = [];

        for (const user of this.totalUsers) {
          if (user.name.first.toUpperCase().startsWith(tab.toUpperCase())) {
            filteredUsers.push(user);
          }
          hydratedTab["filteredUsers"] = filteredUsers;
        }

        hydratedTab.filteredUsers.sort(function (a, b) {
          if (a.name.last < b.name.last) {
            return -1;
          }
          if (a.name.last > b.name.last) {
            return 1;
          }
          return 0;
        });

        updatedTabs.push(hydratedTab);
      }
      this.tabs = updatedTabs;
      this.isLoading = false;
    },
  },
  getters: {},
});

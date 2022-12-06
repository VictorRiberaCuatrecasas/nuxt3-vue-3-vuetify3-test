import { defineStore } from "pinia";
import AppConfig from "../project_config/configuration.json";

export const useMainStore = defineStore("main", {
    state: () => ({
        appConfig: AppConfig,
        users: [],
        message: "custom message"
      })
})
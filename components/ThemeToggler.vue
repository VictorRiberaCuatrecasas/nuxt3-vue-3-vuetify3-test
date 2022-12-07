<template>
  <v-btn
    prepend-icon="mdi-weather-sunny"
    append-icon="mdi-weather-night"
    block
    variant="tonal"
    class="mb-4"
    @click="toggleTheme"
    >toggle theme</v-btn>
</template>

<script setup>
    import { useTheme } from "vuetify";
    const theme = useTheme();

    const toggleTheme = () =>
    (theme.global.name.value = theme.global.current.value.dark
        ? "lightTheme"
        : "darkTheme");
</script>

<style lang="scss" scoped></style>

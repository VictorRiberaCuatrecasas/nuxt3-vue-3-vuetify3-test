<!-- hopefully not used -->
<template>
  <div>
    <p>{{ error.statusCode }}</p>
    <p>Ooops. Forgive Victor for whatever happened</p>
    <p>{{ error.message }}</p>
    <button @click="handleClearError">Go Home...</button>
  </div>
</template>

<script setup>
    defineProps(["error"]);
    // clear error is built in nuxt to clear errors
    const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>

<template>
  <h1>404 Page not found</h1>
  <p class="va-text-center va-h3">
    <RouterLink to="/">Home</RouterLink>
  </p>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 40px;
  margin-top: 50px;
}
</style>
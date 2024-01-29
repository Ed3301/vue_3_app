<template>
  <VaNavbar color="#00BD7EFF" class="mb-3">
    <template #left>
      <VaNavbarItem class="logo">
        <RouterLink :to="isLoggedIn ? '/admin/dashboard' : '/'">{{ isLoggedIn ? 'DASHBOARD' : 'HOME' }}</RouterLink>
      </VaNavbarItem>
    </template>
    <template #right>
      <VaNavbarItem class="hidden sm:block" v-if="!isLoggedIn">
        <RouterLink to="/news">News</RouterLink>
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block" v-if="isLoggedIn">
        <VaButton preset="secondary" @click="logout()">
          Logout
        </VaButton>
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block" v-else>
        <RouterLink to="/login">Login</RouterLink>
      </VaNavbarItem>
    </template>
  </VaNavbar>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

let isLoggedIn = computed(() => store.getters.isLoggedIn);

const logout = () => {
  store.commit('logout');
  router.push('/login');
}
</script>

<style scoped>
a {
  color: black;
}
</style>
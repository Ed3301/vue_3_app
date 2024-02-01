<template>
  <div class="flex-direction-column">
    <div>
      <VaInput
          v-model="email"
          placeholder="email"
          label="Email"
          :rules="[(v) => (v.length > 3 && v.includes('@')) || `Input valid email`]"
      />
    </div>
    <div class="mt-3 mb-3">
      <VaInput
          v-model="password"
          type="password"
          placeholder="password"
          label="Password"
          :rules="[(v) => v.length > 3 || `Input valid password`]"
      />
    </div>
    <div>
      <VaButton
          color="info"
          gradient
          class="mr-6 mb-2"
          @click="login()"
      >
        Login
      </VaButton>
    </div>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const email = ref('');
const password = ref('');

onMounted(() => {
  !store.state.admins.length && store.dispatch('getAdmins');
});

const login = () => {
  const user = store.state.admins.find((obj) => obj.email == email.value);
  if(!user) {
    alert('User not found');
  } else {
    if(user.pwd == password.value) {
      store.commit('setToken', user.token);
      store.commit('setUser', user);
      router.push('/admin/dashboard');
    } else {
      alert('Incorrect password');
    }
  }
}

</script>
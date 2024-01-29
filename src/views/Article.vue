<template>
  <NewsItem :article="article" />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from "vuex";
import NewsItem from "../components/NewsItem.vue";

const route = useRoute();
const store = useStore();


const article = computed(() => {
  const id = route.params.id;
  return store.state.articles.find(el => el.id == id);
});
</script>

<style scoped>

</style>
<template>
  <NewsItem v-for="item in articles" :article="item" @click="$router.push(`/article/${item.id}`)"/>
</template>
<script setup>
import {onMounted, computed } from 'vue';
import { useStore } from "vuex";
import NewsItem from "../components/NewsItem.vue";

const store = useStore();
const articles = computed(() => {
  return store.state.articles;
});

onMounted(() => {
  !articles.value.length && store.dispatch('getArticles');
});

</script>
<style>

</style>

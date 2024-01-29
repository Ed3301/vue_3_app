<template>
  <NewsItem v-for="item in articles" :article="item" @click="$router.push(`/article/${item.id}`)"/>
</template>
<script setup>
import { useStore } from "vuex";
import NewsItem from "../components/NewsItem.vue";

const store = useStore();
const articles = store.state.articles;

</script>
<style>

</style>

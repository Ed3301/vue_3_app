<template>
  <VaCard tag="b" class="mb-2 pointer">
    <VaCardTitle>Title</VaCardTitle>
    <VaCardContent>
      {{ article.title }}
    </VaCardContent>
    <VaCardTitle>Body</VaCardTitle>
    <VaCardContent>
      {{ article.body }}
    </VaCardContent>
  </VaCard>
</template>

<script setup>
const props = defineProps(['article']);
</script>

<style scoped>

</style>
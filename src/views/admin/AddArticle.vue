<template>
  <div>
    <VaInput
        v-model="article.title"
        label="Title"
    />
  </div>
  <div>
    <VaInput
        v-model="article.body"
        label="Body"
        class="mt-3 mb-3"
    />
  </div>
  <div>
    <VaButton
        color="info"
        gradient
        class="mr-3"
        @click="add()"
    >
      ADD
    </VaButton>
  </div>
</template>

<script>
export default {
  name: "AddArticle",
  data() {
    return {
      article: {
        title: '',
        body: '',
      }
    }
  },
  async mounted() {
    this.$store.dispatch('getAuthors');
  },
  methods: {
    add() {
      if(!this.article.title || !this.article.body) {
        alert('Value is empty')
      } else {
        this.$store.commit('addArticle', {
          ...this.article,
          id: +(new Date),
          author_id: this.$store.state.authors[0].id,
          created_at: new Date().toDateString(),
          updated_at: new Date().toDateString(),
        });
        alert('Article added');
      }
    }
  }
}
</script>

<style scoped>

</style>
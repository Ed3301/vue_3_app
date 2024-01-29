<template>
  <div>
    <VaInput
        v-model="article.title"
        label="Title"
        autofocus
    />
  </div>
  <div>
    <VaInput
        v-model="article.body"
        label="Body"
        class="mt-3 mb-3"
        autofocus
    />
  </div>
  <div>
    <VaButton
        color="info"
        gradient
        class="mr-3"
        @click="save()"
    >
      Save
    </VaButton>
    <VaButton
        v-if="user.super"
        color="danger"
        gradient
        @click="deleteArticle()"
    >
      Delete
    </VaButton>
  </div>

</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      user: this.$store.getters.getUser
    }
  },
  methods: {
    save() {
      this.$store.commit('updateArticle', this.article);
      alert('Article updated');
    },
    deleteArticle() {
      this.$store.commit('deleteArticle', this.article.id);
      alert('Article deleted');
      this.$router.push('/admin/dashboard');
    }
  },
  computed: {
    article() {
      const id = this.$route.params.id;
      return this.$store.state.articles.find(el => el.id == id);
    }
  }
}
</script>

<style scoped>

</style>
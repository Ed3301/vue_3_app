<template>
  <p class="va-text-center va-h2 mb-4 mt-3">ARTICLES</p>
  <VaDataTable
      v-model="selectedItems"
      :items="items"
      :columns="columns"
      hoverable
      clickable
      selectable
      select-mode="multiple"
      selected-color="primary"
      @row:click="handleClick"
  />
  <VaButton
      color="info"
      gradient
      class="mt-3"
      @click="addArticle()"
  >
    + Add article
  </VaButton>
  <div>
    <VaButton
        color="info"
        gradient
        class="mt-3"
        v-if="selectedItems.length && user.super"
        @click="deleteItems()"
    >
      Delete {{ selectedItems.length > 1 ? selectedItems.length + ' items' : selectedItems.length + ' item' }}
    </VaButton>
  </div>

</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      items: this.$store.state.articles,
      columns: [
        { key: "id", sortable: true },
        { key: "title", sortable: true },
        { key: "body", sortable: true },
        { key: "author_id", sortable: true },
        { key: "created_at", sortable: true },
        { key: "updated_at", sortable: true },
        { key: "deleted_at", sortable: true }
      ],
      selectedItems: [],
      user: this.$store.getters.getUser
    };
  },
  methods: {
    addArticle() {
      this.$router.push(`/admin/article/add`);
    },
    handleClick(event) {
      this.$router.push(`/admin/article/${event.item.id}`);
    },
    deleteItems() {
      this.selectedItems.map(obj => {
        this.$store.commit('deleteArticle', obj.id);
      });
      this.selectedItems = [];
    }
  }
};
</script>
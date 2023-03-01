<template>
  <v-container>
    <div class="max-w-screen-xl mx-auto py-20">
      <div class="grid grid-cols-12">
        <BlockComponent
          v-for="block in page.blocks"
          :key="block.id"
          :block="block"
        >
        </BlockComponent>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("pages/loadPage", "acerca-nuestro");
  },
  computed: {
    page() {
      return this.$store.getters["pages/activePage"];
    },
  },
};
</script>

<style></style>

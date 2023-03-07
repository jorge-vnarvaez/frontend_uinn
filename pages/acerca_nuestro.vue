<template>
  <v-container class="max-w-screen-xl mx-auto">
      <v-row>
        <BlockComponent
          v-for="block in page.blocks"
          :key="block.id"
          :block="block"
        >
        </BlockComponent>
      </v-row>
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

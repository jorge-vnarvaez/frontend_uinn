<template>
  <div>
    <InfoHeroSection />

    <v-container class="max-w-screen-xl mx-auto">
      <v-row>
          <BlockComponent v-for="block in page.blocks" :key="block.id" :block="block">
          </BlockComponent>
      </v-row>
    </v-container>

    <TypesServices :services="page.services" />
    <!-- <TypesTestimonies /> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: "UINN - Unidad de Innovación",
    };
  },
  async fetch() {
    await this.$store.dispatch("pages/loadPage", "inicio");
  },
  mounted() {
    this.$store.commit("ui/setActiveColor", "#000000");
  },
  computed: {
    page() {
      return this.$store.getters["pages/activePage"];
    },
  },
};
</script>

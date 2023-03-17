<template>
  <div v-if="page">
    <v-container class="max-w-screen-xl mx-auto" v-if="page.blocks">
      <v-row>
        <BlockComponent
          v-for="block in page.blocks"
          :key="block.id"
          :block="block"
        >
        </BlockComponent>
      </v-row>
    </v-container>
    
    <TypesServices :services="page.services" id="servicios" />

    <InfoInicioFeedback v-if="page" :page="page" />
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
    this.$store.commit(
      "ui/setIndexHeroImage",
      this.$config.apiUrlV2 + "/assets/" + this.page.header.hero_image.id
    );

     this.$store.commit(
      "ui/setActiveHeroImage",
      this.$config.apiUrlV2 + "/assets/" + this.page.header.hero_image.id
    );
  },
  mounted() {
    this.$store.commit("ui/setActiveParentType", "page");
  },
  computed: {
    page() {
      return this.$store.getters["pages/activePage"];
    },
  },
};
</script>

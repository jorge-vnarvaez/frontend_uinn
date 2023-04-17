<template>
  <div class="bg-slate-50">
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
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("pages/loadPage", "acerca-nuestro");

    this.$store.commit("ui/setActiveParentType", "page")

    if (this.page.header) {
      this.$store.commit("ui/setActiveHeroImage", this.$config.apiUrlV2 + "/assets/" + this.page.header.hero_image);
    }
  },
  mounted() {},
  computed: {
    page() {
      return this.$store.getters["pages/activePage"];
    },
    core_values() {
      return this.$store.getters["general/coreValues"];
    }
  },
};
</script>

<style></style>

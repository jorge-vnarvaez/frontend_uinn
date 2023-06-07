<template>
  <div>
    <div v-for="section in page.sections" 
        :key="section.id" 
        :style="{ 
          backgroundColor: section.sections_id.color_from,
          padding: $vuetify.breakpoint.mobile ? '0% 10%' : ''
         }" >
            <v-container class="max-w-screen-xl mx-auto px-0" v-if="section.sections_id.blocks">
              <v-row>
                <BlockComponent
                  v-for="block in section.sections_id.blocks"
                  :key="block.id"
                  :block="block"
                >
                </BlockComponent>
              </v-row>
            </v-container> 
    </div>
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
    
    // this.$store.commit(
    //   "ui/setIndexHeroImage",
    //   this.$config.apiUrlV2 + "/assets/" + this.page.header.hero_image.id
    // );

    //  this.$store.commit(
    //   "ui/setActiveHeroImage",
    //   this.$config.apiUrlV2 + "/assets/" + this.page.header.hero_image.id
    // );
  },
  mounted() {
    this.$store.commit("ui/setActiveParentType", "page");

    console.log(this.page)
  },
  computed: {
    page() {
      return this.$store.getters["pages/activePage"];
    },
  },
};
</script>

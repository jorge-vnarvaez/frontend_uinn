<template>
  <div class="pb-0 w-full py-0">
    <!-- <TypesPopup /> -->

    <div v-for="section in page.sections" class="py-0" 
        :key="section.id" 
        :style="{ 
          height: $sectionHeight(section.sections_id.full_height),
          display: section.sections_id.full_height ? 'flex' : '',
          alignItems: section.sections_id.full_height ? 'center' : '',
          backgroundColor: section.sections_id.color_from,
          padding: $generalPadding()
         }" >
            <v-container class="max-w-screen-xl mx-auto px-0 py-0" v-if="section.sections_id.blocks">
              <v-row class="py-0">
                <BlockComponent
                  v-for="block in section.sections_id.blocks"
                  :key="block.id"
                  :block="block"
                >
                </BlockComponent>
              </v-row>
            </v-container> 
    </div>

    <NavSocialMediaContainer v-if="!$vuetify.breakpoint.mobile" parent_type="page"  />
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
    this.$store.commit("ui/setActiveParentType", "page");
  },
  computed: {
    page() {
      return this.$store.getters["pages/activePage"];
    },
  },
};
</script>

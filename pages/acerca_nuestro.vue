<template>
  <div>
    <div v-for="section in page.sections" 
        :key="section.id" 
        :style="{
           height: section.sections_id.full_height ? '100vh' : '100%',
           display: section.sections_id.full_height ? 'flex' : '',
           alignItems: section.sections_id.full_height ? 'center' : '',
           backgroundColor: section.sections_id.color_from,
           backgroundImage: section.sections_id.pattern ? 'url(' + $config.apiUrlV2 + '/assets/' + section.sections_id.pattern + ')' : 'none',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center center',
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

    <NavSocialMediaContainer v-if="!$vuetify.breakpoint.mobile" parent_type="page"  />
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("pages/loadPage", "nosotros");

    // this.$store.commit("ui/setActiveParentType", "page")

    // if (this.page.header) {
    //   this.$store.commit("ui/setActiveHeroImage", this.$config.apiUrlV2 + "/assets/" + this.page.header.hero_image);
    // }
  },
  mounted() {},
  computed: {
    page() {
      return this.$store.getters["pages/activePage"];
    },
    // core_values() {
    //   return this.$store.getters["general/coreValues"];
    // }
  },
};
</script>

<style></style>

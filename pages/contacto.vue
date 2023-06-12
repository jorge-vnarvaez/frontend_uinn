<template>
  <div class="pb-0 w-full">
    <div
      v-for="section in page.sections"
      class="py-0"
      :key="section.id"
      :style="{
        height: $sectionHeight(section.sections_id.full_height),
        display: section.sections_id.full_height ? 'flex' : '',
        alignItems: section.sections_id.full_height ? 'center' : '',
        backgroundColor: section.sections_id.color_from,
        padding: $generalPadding(),
      }"
    >
      <v-container
        class="max-w-screen-xl mx-auto px-0 py-0"
        v-if="section.sections_id.blocks"
      >
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

    <NavSocialMediaContainer
      v-if="!$vuetify.breakpoint.mobile"
      parent_type="page"
    />

    <v-container>
      <div class="py-12 max-w-screen-xl mx-auto" :style="{ padding: $vuetify.breakpoint.mobile ? '0% 5%' : ''}">
        <script>
          hbspt.forms.create({
            region: "na1",
            portalId: "39490607",
            formId: "5c25268f-1840-405b-ba01-c846cf3b5025",
          });
        </script>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("pages/loadPage", "contacto");

    this.$store.commit("ui/setActiveParentType", "page");

    // if (this.page.header) {
    //   this.$store.commit(
    //     "ui/setActiveHeroImage",
    //     this.$config.apiUrlV2 + "/assets/" + this.page.header.hero_image.id
    //   );
    // }
  },
  computed: {
    page() {
      return this.$store.getters["pages/activePage"];
    },
  },
};
</script>

<style></style>

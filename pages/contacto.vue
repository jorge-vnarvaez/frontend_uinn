<template>
  <div  class="py-20">
    <v-container class="max-w-screen-xl mx-auto">
      <v-row>
         <BlockComponent
          v-for="block in page.blocks"
          :key="block.id"
          :block="block"
        >
        </BlockComponent>
      </v-row>

      <script>
        hbspt.forms.create({
          region: "na1",
          portalId: "39490607",
          formId: "5c25268f-1840-405b-ba01-c846cf3b5025",
        });
      </script>
    </v-container>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("pages/loadPage", "contacto");

    this.$store.commit("ui/setActiveParentType", 'page');

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

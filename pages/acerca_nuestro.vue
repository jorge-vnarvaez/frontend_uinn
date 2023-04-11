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

      <!-- <v-row class="pb-20">
        <v-col cols="12" lg="4" v-for="core_value in core_values" :key="core_value.id" class="pr-4 pb-20">
          <div>
            <div class="w-6/12">
                <span class="block font-gotham text-[18px] uppercase">
                  {{ core_value.title }}
                </span>

                <v-divider class="my-4"></v-divider>
            </div>
          </div>

          <span class="block font-inter text-[18px] w-10/12">
            {{ core_value.excerpt }}
          </span>
        </v-col>
      </v-row>

      <v-divider></v-divider> -->
    </v-container>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("pages/loadPage", "acerca-nuestro");

    this.$store.commit("ui/setActiveParentType", "page")

    if (this.page.header) {
      this.$store.commit("ui/setActiveHeroImage", this.$config.apiUrlV2 + "/assets/" + this.page.header.hero_image.id);
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

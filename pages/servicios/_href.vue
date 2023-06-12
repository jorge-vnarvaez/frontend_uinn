<template>
  <div>
    <div class="pt-16">
      <div
        v-for="section in service.sections"
        :key="section.id"
        :style="{ 
            height: $sectionHeight(section.sections_id.full_height),
            display: section.sections_id.full_height ? 'flex' : '',
            alignItems: section.sections_id.full_height ? 'center' : '',
            backgroundColor: section.sections_id.color_from,
            padding: $generalPadding()
       }"
       class="py-0"
      >
        <v-container
          class="max-w-screen-xl mx-auto px-0"
          v-if="section.sections_id.blocks"
        >
          <v-row>
            <BlockComponent
              v-for="block in section.sections_id.blocks"
              :key="block.id"
              :block="block"
            >
            </BlockComponent>
          </v-row>
        </v-container>

        <!-- <NavSocialMediaContainer v-if="!$vuetify.breakpoint.mobile && section.sections_id.plugin_social_media" parent_type="page"  /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config, route }) {
    const { data } = await $axios
      .get(`${$config.apiUrlV2}/items/services`, {
        params: {
          fields: [
            "*.*",
            "sections.sections_id.*",
            "sections.sections_id.blocks.*.*.*.*.*",
          ],
          filter: {
            slug: {
              _eq: route.params.href,
            },
          },
        },
      })
      .then((res) => res.data);
    return {
      service: data[0],
    };
  },
  mounted() {
    this.$store.commit("ui/setActiveParentType", "service");

    if (this.service) {
      this.$store.commit("services/setCurrentService", this.service);
    }
  },
};
</script>

<style lang="postcss">
</style>

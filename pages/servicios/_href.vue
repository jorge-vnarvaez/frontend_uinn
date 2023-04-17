<template>
  <div>
    <div class="max-w-screen-xl mx-auto py-20">
      <v-container>
        <!-- BLOCKS -->
        <v-row align="center">
          <BlockComponent
            v-for="block in service.blocks"
            :key="block.id"
            :block="block"
          >
          </BlockComponent>
        </v-row>
        <!-- BLOCKS -->
      </v-container>

      <!-- CLIENTS -->
      <TypesClients v-if="service.clients.length > 0" :clients="service.clients" ></TypesClients>
      <!-- CLIENTS -->
      
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
            "header.icon_color_mode",
            "header.hero_image",
            "header.blocks.*.*.*",
            "title",
            "illustration",
            "description",
            "color",
            "color_bg",
            "blocks.id",
            "blocks.visibility",
            "blocks.link_to",
            "blocks.outlined",
            "blocks.text_color",
            "blocks.mobile_align",
            "blocks.align",
            "blocks.title",
            "blocks.description",
            "blocks.detail",
            "blocks.mobile_size",
            "blocks.size",
            "blocks.mobile_y_axis_padding",
            "blocks.y_axis_padding",
            "blocks.right_padding",
            "blocks.mobile_y_axis_margin",
            "blocks.y_axis_margin",
            "blocks.mobile_margin_right",
            "blocks.margin_right",
            "blocks.mobile_margin_bottom",
            "blocks.margin_bottom",
            "blocks.mobile_title_font_size",
            "blocks.title_font_size",
            "blocks.mobile_font_size",
            "blocks.font_size",
            "blocks.parent_block",
            "blocks.format",
            "blocks.image",
            "blocks.features_list.icon",
            "blocks.features_list.icon_image",
            "blocks.features_list.title",
            "blocks.features_list.description",
            "blocks.features_list.bg_color",
            "blocks.labels_list.id",
            "blocks.labels_list.title",
            "blocks.team_members.photo",
            "blocks.projects.*.*",
            "blocks.courses.*.*",
            "blocks.groups.*.*",
            "blocks.childs.*.*.*",
            "clients.clients_id.name",
            "clients.clients_id.name_abbrevation",
            "clients.clients_id.logo",
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
      this.$store.commit("ui/setActiveColor", this.service.color);
      this.$store.commit("services/setCurrentService", this.service);
    }
  },
};
</script>

<style lang="postcss">
</style>

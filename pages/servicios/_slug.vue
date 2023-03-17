<template>
  <div>
    <div class="max-w-screen-xl mx-auto py-20">
      <v-container>
        <!-- BLOCKS -->
        <v-row>
          <BlockComponent
            v-for="block in service.blocks"
            :key="block.id"
            :block="block"
          >
          </BlockComponent>
        </v-row>
        <!-- BLOCKS -->

        <!-- CLIENTS -->
        <div v-if="service.clients" class="mt-12">
          <div
            v-if="service.clients.length > 0"
            class="flex flex-col align-center"
          >
            <span class="block mb-4 text-3xl">Clientes</span>

            <span class="text-lg text-center"
              >Lorem ipsum dolor sit amet, consetetur sadipscing.</span
            >

            <v-row class="mt-8">
              <v-col
                v-for="(client, index) in service.clients"
                :key="index"
                cols="12"
                :lg="12 / service.clients.length"
                align="center"
              >
                <v-img
                  v-if="client.clients_id.logo"
                  :src="$config.apiUrlV2 + '/assets/' + client.clients_id.logo"
                  :width="$vuetify.breakpoint.mobile ? '75%' : '100%'"
                  :height="$vuetify.breakpoint.mobile ? '75%' : '100%'"
                  contain
                ></v-img>

                <span class="block mt-2 text-2xl font-semibold">
                  {{ client.clients_id.name_abbrevation }}
                </span>
              </v-col>
            </v-row>
          </div>
        </div>
        <!-- CLIENTS -->
      </v-container>
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
            "blocks.groups.*.*",
            "blocks.childs.*.*.*",
            "clients.clients_id.name",
            "clients.clients_id.name_abbrevation",
            "clients.clients_id.logo",
          ],
          filter: {
            slug: {
              _eq: route.params.slug,
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

<style>
</style>

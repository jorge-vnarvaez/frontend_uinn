<template>
  <div>
    <!-- TITLE AND DESCRIPTION -->
    <div class="py-20" :style="`background-color: ${service.color_bg}`">
      <v-container>
        <div class="max-w-screen-xl mx-auto">
          <span class="block text-2xl lg:text-5xl mb-4 text-neutral-800">
            {{ service.title }}
          </span>

          <span
            class="block text-xl lg:text-3xl w-full lg:w-10/12 mb-8 text-slate-800"
            v-html="service.description"
          ></span>
        </div>
      </v-container>
    </div>
    <!-- TITLE AND DESCRIPTION -->

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
            <span class="block mb-10 text-3xl">Nuestros Clientes</span>

            <div class="flex flex-wrap justify-center align-center space-x-0 lg:space-x-16">
              <div v-for="(data, index) in service.clients" :key="index">
                <v-img
                  v-if="data.clients_id.logo"
                  :src="$config.apiUrlV2 + '/assets/' + data.clients_id.logo"
                  contain
                ></v-img>
              </div>
            </div>
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
            "description",
            "color",
            "color_bg",
            "blocks.id",
            "blocks.visibility",
            "blocks.link_to",
            "blocks.outlined",
            "blocks.text_color",
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
    if(this.service) {
      this.$store.commit('ui/setActiveColor', this.service.color_bg);
    }
  },
};
</script>

<style></style>

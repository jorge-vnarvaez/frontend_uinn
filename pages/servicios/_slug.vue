<template>
  <div>
    <!-- TITLE AND DESCRIPTION -->
    <div class="py-20" :style="`background-color: ${service.color_bg}`">
      <v-container>
        <div class="max-w-screen-xl mx-auto">
          <span class="block text-5xl mb-4 text-neutral-800">
            {{ service.title }}
          </span>

          <span
            class="block text-3xl w-10/12 mb-8 text-slate-800"
            v-html="service.description"
          ></span>
        </div>
      </v-container>
    </div>
    <!-- TITLE AND DESCRIPTION -->

    <div class="max-w-screen-xl mx-auto py-20">
      <v-container>
        <!-- BLOCKS -->
        <div class="grid grid-cols-12">
          <BlockComponent
            v-for="block in service.blocks"
            :key="block.id"
            :block="block"
          >
          </BlockComponent>
        </div>
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
            "blocks.text_color",
            "blocks.align",
            "blocks.title",
            "blocks.description",
            "blocks.detail",
            "blocks.size",
            "blocks.mobile_size",
            "blocks.parent_block",
            "blocks.format",
            "blocks.image",
            "blocks.features_list.icon",
            "blocks.features_list.title",
            "blocks.features_list.description",
            "blocks.projects.*.*",
            "blocks.groups.*.*",
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

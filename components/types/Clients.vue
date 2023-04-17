<template>
  <!-- CLIENTS -->
  <div v-if="clients" class="py-20">
    <div class="flex flex-col align-center">
      <span class="block mb-4 text-center uppercase font-gotham text-3xl"
        >Nuestros clientes</span
      >

      <span class="text-lg text-center"
        >Esto lo logramos mediante la integración de estrategia, diseño y
        gestión tecnológica.</span
      >

      <v-container class="max-w-screen-xl mx-auto">
        <div id="client-wrapper">
          <v-col
            v-for="(client, index) in clients"
            :key="index"
            cols="12"
            lg="3"
            align="center"
            flat
          >
            <v-img
              v-if="!page && client.clients_id && client.clients_id.logo"
              :src="$config.apiUrlV2 + '/assets/' + client.clients_id.logo"
              :width="$vuetify.breakpoint.mobile ? '65%' : '75%'"
              :height="$vuetify.breakpoint.mobile ? '65%' : '75%'"
              contain
            ></v-img>

            <v-img
              v-if="page && client && client.logo"
              :src="$config.apiUrlV2 + '/assets/' + client.logo"
              :width="$vuetify.breakpoint.mobile ? '65%' : '75%'"
              :height="$vuetify.breakpoint.mobile ? '65%' : '75%'"
              contain
            ></v-img>

            <span
              class="block mt-2 text-2xl font-semibold"
              v-if="!page && client.clients_id && client.clients_id.name_abbrevation"
            >
              {{ client.clients_id.name_abbrevation }}
            </span>

            <span
              class="block mt-2 text-2xl font-semibold"
              v-if="page && client && client.name_abbrevation"
            >
              {{ client.name_abbrevation }}
            </span>
          </v-col>
        </div>
      </v-container>
    </div>
  </div>
  <!-- CLIENTS -->
</template>

<script>
export default {
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
    parent_type: {
      type: String,
      default: () => 'service',
    },
  },
  computed: {
    page() {
        return this.parent_type == 'page'
    }
  }
};
</script>

<style lang="postcss">
#client-wrapper {
  @apply snap-x;
  @apply pb-12;
  display: flex;
  overflow-x: scroll;
}

#client-wrapper::-webkit-scrollbar {
  height: 8px;
}

#client-wrapper::-webkit-scrollbar-track {
  background: #f1f5f9;
}
#client-wrapper::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 5px;
  max-width: 100px;
}
</style>

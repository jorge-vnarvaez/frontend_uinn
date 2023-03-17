<template>
  <v-col cols="12" lg="6" align="center" class="py-12 py-lg-0">
    <span class="block mb-6 text-3xl font-semibold">Clientes</span>
    <span class="text-slate-900 text-lg">
      Lorem ipsum dolor sit amet, consetetur sadipscing.
    </span>

    <div class="py-8">
      <v-row align-content="center">
        <v-col
          v-for="client in clients"
          :key="client.id"
          cols="12"
          lg="6"
          align-self="center"
        >
          <v-img
            v-if="client.logo"
            :src="$config.apiUrlV2 + '/assets/' + client.logo"
            class="h-52 w-52"
          >
          </v-img>
          <span class="text-2xl font-semibold">
            {{ client.name_abbrevation }}
          </span>
        </v-col>
      </v-row>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>

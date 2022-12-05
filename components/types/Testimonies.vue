<template>
  <v-container>
    <div class="max-w-screen-lg mx-auto pb-32">
      <div class="flex justify-between">
        <!-- LAST TESTIMONY -->
        <v-card width="320" elevation="0">
          
            <v-img
              :src="$config.apiUrlV2 + '/assets/' + lastTestimony.image"
              alt=""
            ></v-img>
          <div class="bg-amber-100 p-4">
            <span class="block text-sm text-yellow-700">{{
              lastTestimony.testimony
            }}</span>
            <span class="block mt-2 text-xs text-yellow-600">
              {{ lastTestimony.person_name }},
              {{ lastTestimony.person_position }}
              {{ lastTestimony.client.name }}
            </span>
          </div>
        </v-card>
        <!-- LAST TESTIMONY -->

        <!-- CLIENTS -->
        <div class="w-6/12">
          <div
            class="flex flex-wrap justify-center align-center space-x-16 mt-12"
          >
          <div v-for="(client, index) in clients" :key="index">
            <v-img
              v-if="client.logo"
              :src="$config.apiUrlV2 + '/assets/' + client.logo"
              contain
            ></v-img>
          </div>
          </div>
        </div>
        <!-- CLIENTS -->
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("testimonies/loadTestimonies");
  },
  computed: {
    lastTestimony() {
      return this.$store.getters["testimonies/getLastTestimony"];
    },
    clients() {
      return this.$store.getters["testimonies/getClientsWithTestimonies"];
    },
  },
};
</script>

<style>
</style>
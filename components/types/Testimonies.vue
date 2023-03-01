<template>
  <div>
    <v-container v-if="testimonies" class="py-12">
      <div v-if="testimonies.length > 0" class="max-w-screen-xl mx-auto pb-32">
        <div class="flex flex-col lg:flex-row lg:justify-between align-center">
          <!-- LAST TESTIMONY -->
          <v-card width="350" elevation="0">
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
          <div class="w-6/12" v-if="clients.length > 0">
            <div class="grid grid-cols-12">
              <div
                v-for="(client, index) in clients"
                :key="index"
                class="col-span-12 lg:col-span-6"
              >
                <v-img
                  v-if="client.logo"
                  :src="$config.apiUrlV2 + '/assets/' + client.logo.id"
                  contain
                  width="160"
                  height="140"
                  class="w-full"
                ></v-img>
              </div>
            </div>
          </div>
          <!-- CLIENTS -->
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch("testimonies/loadTestimonies");
    await this.$store.dispatch("clientes/loadFeaturedClients");
  },
  computed: {
    testimonies() {
      return this.$store.getters["testimonies/getTestimonies"];
    },
    lastTestimony() {
      return this.$store.getters["testimonies/getLastTestimony"];
    },
    clients() {
      return this.$store.getters["clientes/getFeaturedClients"];
    },
  },
};
</script>

<style></style>

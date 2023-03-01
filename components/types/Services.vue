<template>
  <div class="py-20">
    <v-container>
      <div class="flex justify-center">
        <div
          class="grid grid-cols-12 gap-y-20 gap-x-0 lg:gap-x-8 max-w-screen-xl mx-auto"
        >
          <div
            class="col-span-12 lg:col-span-6"
            v-for="service in services"
            :key="service.id"
          >
            <div
              class="w-full h-2"
              :style="`background-color: ${service.color}`"
            ></div>

            <!-- :style="...bg('#f312f3')" -->
            <span
              class="block text-3xl font-medium mb-5 w-8/12 my-4"
              :style="`color: ${service.color}`"
            >
              {{ service.excerpt }}
            </span>

            <!-- create a v-btn with :color="service.color" and opacity 0.5 where opacity doesn't apply to text -->
            <v-btn
              :style="`background-color: ${service.color_negativo}`"
              :color="service.color"
              text
              :to="`servicios/${service.slug}`"
              class="text-capitalize text-sm"
              depressed
              small
            >
              {{ service.title }}
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("services/loadServices");
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },
  computed: {
    services() {
      return this.$store.getters["services/getServices"];
    },
  },
};
</script>

<style></style>

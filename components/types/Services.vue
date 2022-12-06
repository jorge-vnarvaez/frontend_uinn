<template>
  <v-container>
    <div class="flex justify-center py-20">
      <div class="grid grid-cols-12 gap-y-20 gap-x-0 lg:gap-x-8 max-w-screen-lg mx-auto">
        <div class="col-span-12 lg:col-span-6" v-for="service in services" :key="service.id">
          
          <div class="w-full h-2" :style="`background-color: ${service.color}`"></div>
          
          <!-- :style="...bg('#f312f3')" -->
          <span class="block text-3xl font-bold mb-5 w-8/12 my-4" :style="`color: ${service.color}`">
            {{ service.excerpt }}
          </span>

          <v-btn
            class="text-capitalize"
            text
            :color="service.color"
            depressed
            :to="'/servicios/' + service.slug"
            >{{ service.title }}</v-btn
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      services: [],
    };
  },
  async fetch() {
    const  data  = await fetch(
      this.$config.apiUrlV2 + "/services"
    ).then((res) => res.json());


    this.services = data;
  },
};
</script>

<style></style>

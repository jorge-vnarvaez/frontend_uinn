<template>
  <v-container>
    <div class="flex justify-center py-20">
      <div class="grid grid-cols-12 gap-y-20 gap-x-20 max-w-screen-lg mx-auto">
        <div class="col-span-6" v-for="service in services" :key="service.id">
          
          <div :class="`${service.color_bg}` + ' w-full h-2'"></div>
          
          
          <span
            :class="`${service.color}` + ' block text-2xl font-bold mb-5 w-8/12 my-4'"
          >
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

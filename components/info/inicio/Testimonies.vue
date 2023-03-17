<template>
  <v-col cols="12" lg="6" align="center">
    <span class="block mb-6 text-3xl font-semibold">Testimonios</span>
    <span class="text-slate-900 text-lg">
      Lorem ipsum dolor sit amet, consetetur sadipscing.
    </span>

    <v-carousel
      cycle
      height="600"
      interval="5000"
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
      class="mt-4"
    >
      <v-carousel-item v-for="testimony in testimonies" :key="testimony.id">
        <v-card
          class="bg-slate-50 py-12 px-6 rounded-sm shadow-xl shadow-slate-300"
          min-width="300"
          max-width="424"
        >
          <v-img
            v-if="testimony.image"
            :src="$config.apiUrlV2 + '/assets/' + testimony.image"
            class="rounded-full"
            width="208"
            height="208"
          ></v-img>

          <span class="mt-8 mb-4 block text-sm font-semibold">
            "{{ testimony.text }}"
          </span>

          <div class="flex justify-center space-x-2 w-[25px] h-[25px]">
            <v-icon
              v-for="star in parseInt(testimony.rating)"
              :key="testimony.id + '_star_' + star"
              color="#FACF55"
              >mdi-star</v-icon
            >
          </div>

          <div class="mt-8">
            <span class="block text-xl font-semibold mb-4">{{
              testimony.person_name
            }}</span>
            <span>{{ testimony.person_position }}</span>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-col>
</template>

<script>
export default {
  props: {
    testimonies: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>

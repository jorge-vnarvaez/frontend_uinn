<template>
  <div class="py-10">
    <v-container class="max-w-screen-xl mx-auto p-0">
      <div class="flex justify-center">
        <div
          class="grid grid-cols-12 gap-y-8 lg:gap-y-8 gap-x-0 lg:gap-x-8"
        >
          <v-card
            class="col-span-12 lg:col-span-6 p-4 lg:p-8 bg-slate-50 rounded-2xl shadow-lg shadow-slate-200 grid grid-cols-12"
            v-for="service in services"
            :key="service.id"
          >

            <div class="col-span-9 lg:col-span-8">
              <span class="block text-base lg:text-xl font-semibold mb-5 w-7/12 my-4 h-32 z-10">
                {{ service.excerpt }}
              </span>

              <v-btn
                :color="service.color"
                :to="`servicios/${service.slug}`"
                class="text-capitalize text-xs lg:text-sm text-white z-10"
                depressed
                small
              >
                {{ service.title }}
              </v-btn>
            </div>

            <div class="col-span-3 lg:col-span-4">
                <v-img 
                  v-if="service.illustration"
                  :src="$config.apiUrlV2 + '/assets/' + service.illustration" 
                  :height="$vuetify.breakpoint.mobile ? 140 : 221"
                  :width="$vuetify.breakpoint.mobile ? 310 :  214"
                  contain
                ></v-img>
            </div>
              
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style></style>

<template>
  <div class="pb-48">
    <v-container class="max-w-screen-xl mx-auto p-0">
      <v-row>
        <v-col cols="12" lg="4" v-for="service in services" :key="service.id">
          <v-card 
            class="border border-slate-200"
            rounded="xl"
            height="449"
            outlined>
            <div>
              <div class="py-8 px-10 ">
                  <v-img :src="$config.apiUrlV2 + '/assets/' + service.illustration" width="112" height="78" contain></v-img>

                  <span class="block my-4 w-40 font-bold font-gotham">{{ service.title }}</span>

                  <span v-html="service.description" class="block w-8/12 h-[124px] text-slate-800"></span>
              </div>

              <v-divider class="mt-8 bg-slate-100"></v-divider>
              
              <div class="px-10 h-16 flex align-center">
                  <nuxt-link :to="'/servicios/' + service.href">
                    <v-icon class="border border-slate-600 rounded-full p-1 cursor-pointer">mdi-plus</v-icon>
                  </nuxt-link>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>

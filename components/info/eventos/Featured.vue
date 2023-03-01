<template>
    <div v-if="featuredEvent">
    <v-container>
      <div class="max-w-screen-xl mx-auto">
        <v-card
          v-if="featuredEvent.featured_image"
          :to="`/eventos/${featuredEvent.slug}`"
          :style="{
            backgroundImage: `url(${
              $config.apiUrlV2 + '/assets/' + featuredEvent.featured_image
            })`,
            backgroundPosition: 'center',
          }"
          class="bg-fixed bg-cover rounded-lg"
          height="400"
          elevation="0"
        >
        <div class="bg-slate-800/70 text-white p-10 h-full flex flex-col justify-end align-start">
          <div class="flex align-end">
              <div class="flex align-center h-10 mb-4 space-x-2">
                <v-chip label>Evento</v-chip>
                <span class="text-uppercase text-xs lg:text-base" v-if="featuredEvent.date_start">{{ this.$moment(featuredEvent.date_start).format('LL') }}</span>
              </div>
          </div>
          
          <span class="block mb-2 text-xl lg:text-4xl font-bold">{{ featuredEvent.title }}</span>
          <span class="text-sm lg:text-xl font-light">{{ featuredEvent.excerpt }}</span>
        </div>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
    computed: {
        featuredEvent() {
            return this.$store.getters['eventos/getFeaturedEvent']
        }
    }
}
</script>

<style>

</style>
<template>
    <div v-if="featuredNotice">
    <v-container>
      <div class="max-w-screen-xl mx-auto">
        <v-card
          v-if="featuredNotice.featured_image"
          :to="`/noticias/${featuredNotice.slug}`"
          :style="{
            backgroundImage: `url(${
              $config.apiUrlV2 + '/assets/' + featuredNotice.featured_image.id
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
                <v-chip label>Noticia</v-chip>
                <span class="text-uppercase">{{ this.$moment(featuredNotice.date_published).format('LL') }}</span>
              </div>
          </div>
          
          <span class="block mb-2 text-xl lg:text-4xl font-bold">{{ featuredNotice.title }}</span>
          <span class="text-sm lg:text-xl font-light">{{ featuredNotice.excerpt }}</span>
        </div>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
    computed: {
        featuredNotice() {
            return this.$store.getters['noticias/getFeaturedNotice']
        }
    }
}
</script>

<style>

</style>
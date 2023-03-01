<template>
    <div v-if="noticias.length > 0">
        <v-container>
            <div class="max-w-screen-xl mx-auto">
                <v-row>
                    <v-col v-for="notice in noticias" :key="notice.id" cols="12" md="6" lg="4">
                        <nuxt-link :to="`/noticias/${notice.slug}`">
                            <v-img v-if="notice.featured_image" :src="$config.apiUrlV2 + '/assets/' + notice.featured_image.id" class="rounded-tl-lg rounded-tr-lg"></v-img>
                            <div class="rounded-lg shadow-md bg-white p-4 text-neutral-700">
                                <span class="block font-medium mb-2">{{ $moment(notice.date_published).format('DD MMM') }}</span>
                                <span class="font-semibold">{{ notice.title }}</span>
                                <span class="block mt-2">{{ notice.excerpt.slice(0, 80) }} ...</span>
                            </div>
                        </nuxt-link>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    computed: {
        noticias() {
            return this.$store.getters['noticias/getNoticias']
        }
    }
}
</script>

<style>

</style>
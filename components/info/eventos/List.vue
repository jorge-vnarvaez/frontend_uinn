<template>
    <div v-if="eventos.length > 0">
        <v-container>
            <div class="max-w-screen-xl mx-auto">
                <v-row>
                    <v-col v-for="event in eventos" :key="event.id" cols="12" md="6" lg="4">
                        <nuxt-link :to="`/eventos/${event.slug}`">
                            <v-img v-if="event.featured_image" :src="$config.apiUrlV2 + '/assets/' + event.featured_image" class="rounded-tl-lg rounded-tr-lg"></v-img>
                            <div class="rounded-lg shadow-md bg-white p-4 text-neutral-700">
                                <span class="block font-medium mb-2" v-if="event.date_start">{{ $moment(event.date_start).format('DD MMM') }}</span>
                                <span class="font-semibold">{{ event.title }}</span>
                                <span class="block mt-2">{{ event.excerpt.slice(0, 80) }} ...</span>
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
        eventos() {
            return this.$store.getters['eventos/getEvents']
        }
    }
}
</script>

<style>
<template>
  <v-container v-if="is_index" class="max-w-screen-xl mx-auto">
    <div class="relative top-16" v-if="liveActivity">
        <v-container class="absolute z-10">
          <div class="max-w-screen-xl mx-auto mt-1">
            <div
              class="bg-slate-800 rounded-sm w-full px-4 py-1 text-lg flex flex-col lg:flex-row justify-between space-x-2 lg:space-x-0"
            >
              <div class="flex flex-col lg:flex-row space-x-2">
                <div class="inline">
                  <v-icon color="red darken-1" small>mdi-circle</v-icon>
                  <span class="text-slate-400">En Vivo</span>
                </div>
                
                <span class="text-slate-200">{{ liveActivity.title }}</span>
              </div>

              <div class="text-slate-400">
                <span>{{
                  this.$moment(new Date(liveActivity.date_start).getTime()).format("HH:mm")
                }}</span>
                -
                <span>{{
                  this.$moment(new Date(liveActivity.date_end).getTime()).format("HH:mm")
                }}</span>
              </div>
            </div>
          </div>
        </v-container>
      </div>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("activities/liveActivity");
  },
  computed: {
    liveActivity() {
      return this.$store.getters["activities/getLiveActivity"];
    },
    is_index() {
      return this.$route.path === "/";
    }
  },
}
</script>

<style>

</style>
<template>
  <div class="relative" v-if="liveEvent">
    <v-container :class="`${$vuetify.breakpoint.mobile ? 'left-0' : 'left-16'}` + ' absolute z-10'">
      <div class="max-w-screen-xl mx-auto mt-1">
        <div
          class="bg-slate-800 rounded-sm w-full px-4 py-1 text-lg flex flex-col lg:flex-row justify-between space-x-2 lg:space-x-0"
        >
          <div class="flex flex-col lg:flex-row space-x-2">
            <div class="inline">
              <v-icon color="red darken-1" small>mdi-circle</v-icon>
              <span class="text-slate-400">En Vivo</span>
            </div>
            
            <span class="text-slate-200">{{ liveEvent.title }}</span>
          </div>

          <div class="text-slate-400">
            <span>{{
              this.$moment(liveEvent.date_start + 10800000).format("HH:mm")
            }}</span>
            -
            <span>{{
              this.$moment(liveEvent.date_end + 10800000).format("HH:mm")
            }}</span>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("eventos/liveEvent");
  },
  computed: {
    liveEvent() {
      return this.$store.getters["eventos/getLiveEvent"];
    },
  },
};
</script>

<style></style>

<template>
  <v-container class="max-w-screen-xl mx-auto">
    <v-row>
      <v-col v-for="activity in activities" :key="activity.id" cols="12" lg="4">
        <v-card elevation="0" class="rounded-2xl border border-slate-200 px-4 py-4">
          <div>
            <v-img
              v-if="activity.imagen"
              :src="$config.apiUrlV2 + '/assets/' + activity.imagen.id"
              height="250"
              class="rounded-md"
            ></v-img>
          </div>

          <v-card-title class="text-lg whitespace-normal break-normal h-20">
            {{ activity.name }}
          </v-card-title>

          <v-card-text class="whitespace-normal break-normal h-48">
            {{ activity.excerpt }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("activities/loadActivities");
  },
  computed: {
    activities() {
      return this.$store.getters["activities/getActivities"];
    },
  },
};
</script>

<style></style>

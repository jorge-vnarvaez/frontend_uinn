<template>
  <v-container class="max-w-screen-xl mx-auto">
    <v-row>
      <v-col v-for="activity in activities" :key="activity.id" cols="12" lg="4">
        <v-card elevation="0" class="rounded-2xl border border-slate-200">
          <div>
            <v-img
              v-if="activity.featured_image"
              :src="$config.apiUrlV2 + '/assets/' + activity.featured_image.id"
              height="250"
              class="rounded-t-2xl"
            ></v-img>
          </div>

          <v-card-title class="text-lg w-11/12 h-20">
            {{ activity.title }}
          </v-card-title>

          <v-card-text>
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

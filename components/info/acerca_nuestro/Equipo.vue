<template>
  <div class="flex flex-col align-center pb-20">
    <span class="block text-3xl font-semibold mb-4">Nuestro Equipo</span>
    <span class="text-lg">
      Lorem ipsum dolor sit amet, consetetur sadipscing.
    </span>

    <v-row class="mt-12">
      <v-col v-for="team_member in team_members" :key="team_member.id" cols="6" lg="4" align="center">
        <v-img
          v-if="team_member.photo"
          :src="$config.apiUrlV2 + '/assets/' + team_member.photo"
          height="200"
          width="200"
          contain
        >
        </v-img>

        <span class="block mt-4 font-semibold text-xl">
            {{ team_member.name }}
        </span>

        <span class="block text-lg mb-6">
            {{ team_member.position }}
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("equipo/loadTeamMembers");
  },
  computed: {
    team_members() {
      return this.$store.getters["equipo/getTeamMembers"];
    },
  },
};
</script>

<style></style>

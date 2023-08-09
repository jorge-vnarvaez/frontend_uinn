<template>
  <div>
    <v-row v-if="ranking_by_ubicacion[activeUbication]?.ranking?.length > 0">
      <!-- MOST RELEVANT -->
      <v-col cols="12" lg="6" md="6">
        <span class="text-lg text-blue-900 font-bold">Más relevantes</span>
        <TypesGamificacionFoco
          v-for="relevant_foco, index in ranking_by_ubicacion[activeUbication]?.ranking.slice(0, 7)"
          :key="relevant_foco.winner_id"
          :foco="relevant_foco"
          :index="index"
        >
        </TypesGamificacionFoco>
      </v-col>
      <!-- MOST RELEVANT -->

      <!-- LESS RELEVANT -->
      <v-col cols="12" lg="6" v-if="ranking_by_ubicacion[activeUbication]?.ranking?.length > 8">
        <span class="text-lg text-blue-900 font-bold">Menos relevantes</span>
        
        <TypesGamificacionFoco
          v-for="irrelevant_foco, index in ranking_by_ubicacion[
            activeUbication
          ].ranking.slice(8, 16)"
          :key="irrelevant_foco.winner_id"
          :foco="irrelevant_foco"
          :index="index"
          :irrelevant="true"
          :activeMission="activeMission"
        >
        </TypesGamificacionFoco>
      </v-col>
      <!-- LESS RELEVANT -->
    </v-row>

    <TypesGamificacionNoData  v-if="ranking_by_ubicacion[activeUbication]?.ranking?.length == 0"  />
  </div>
</template>

<script>
export default {
  props: {
    activeUbication: {
      type: String,
      default: null,
    },
    activeMission: {
      type: String,
      default: null,
    },
  },
  data() {
    return { 
      activeFoco: null
    }
  },
  async fetch() {
    await this.$store.dispatch("stadistic/getRankingByUbicacion");
  },
  methods: {
    opacity(mission_id) {
      if (this.activeMission == mission_id) {
        return "opacity-100";
      } else {
        return "opacity-50";
      }
    },
    cursor_status(mission_id) {
      if (this.activeMission == mission_id) {
        return "cursor-pointer";
      } else {
        return "cursor-not-allowed";
      }
    },
    visibility(mission_id) {
      if (this.activeMission == mission_id) {
        return "visible";
      } else {
        return "hidden";
      }
    },
  },
  computed: {
    ranking_by_ubicacion() {
      return this.$store.getters["stadistic/ranking_by_ubicacion"];
    },
  },
};
</script>

<style></style>
<template>
  <div class="col-span-12">
    <v-card class="px-8 py-6" flat>
        <div class="grid grid-cols-12 gap-x-6 gap-y-12">
            <div class="col-span-12 lg:col-span-3 flex space-x-4" v-for="sector, index in tfParticipantes" :key="index">
                <v-icon size="42px">{{ labels[index].icon }}</v-icon>

                <div class="flex flex-col">
                    <span class="text-sm font-semibold">
                        {{ labels[index].label }}
                    </span>
                    <span class="text-sm">
                        {{ sector.total }} Participantes
                    </span>
                </div>
            </div>
        </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: {
        Pesca: { icon: 'mdi-fish', label: "Pesca" },
        Energía: { icon: 'mdi-lightning-bolt', label: "Energía" },
        "Servicio Público": { icon: 'mdi-town-hall', label: "Servicio Público" },
        "Servicios administrativos": {
          icon: 'mdi-chair-rolling',
          label: "Servicios administrativos",
        },
        Logística: { icon: 'mdi-human-dolly', label: "Logística" },
        Comercio: { icon: 'mdi-credit-card', label: "Comercio" },
        Comunicaciones: { icon: 'mdi-cctv', label: "Comunicaciones" },
        Construcción: { icon: 'mdi-excavator', label: "Construcción" },
        Educación: { icon: 'mdi-account-school', label: "Educación" },
        "Industria Manufacturera": {
          icon: 'mdi-robot-industrial',
          label: "Industria Manufacturera",
        },
        Inmobiliaria: { icon: 'mdi-home-city', label: "Inmobiliaria" },
        Salud: { icon: 'mdi-hospital-box', label: "Salud" },
        "Transporte y almacenamiento": {
          icon: 'mdi-truck',
          label: "Transporte y almacenamiento",
        },
        Turismo: { icon: 'mdi-map', label: "Turismo" },
        "Agricultura y ganadería": {
          icon: 'mdi-leaf',
          label: "Agricultura y ganadería",
        },
        "No me encuentro trabajando": {
          icon: 'mdi-account-badge',
          label: "No me encuentro trabajando",
        },
        "Otra área": { icon: 'mdi-account-question', label: "Otra área" },
      },
    };
  },
  async fetch() {
    await this.$store.dispatch("stadistic/loadTfParticipantesSector");
  },
  computed: {
    tfParticipantes() {
      return this.$store.getters["stadistic/tf_participantes_sector"];
    },
  },
};
</script>

<style>
</style>
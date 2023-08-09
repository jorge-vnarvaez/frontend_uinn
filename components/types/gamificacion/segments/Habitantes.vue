<template>
  <div class="col-span-12">
    <v-card class="px-8 py-6 flex flex-col align-center" flat>
      <span class="block mb-8 text-xl">b. Participantes de la Comuna</span>

      <div class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 align-center">
        <div v-for="provincia, index in tfParticipantes" :key="index + 'p'" class="flex flex-col align-center">
          <p class="text-xl font-bold">
            {{ labels[index].label }}
          </p>

          <p class="text-4xl font-black">
            {{ provincia }}
          </p>

          <p>
            Participantes
          </p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acum: 0,
      angles: [],
      colors: ["#01adac", "#ff6469", "#253771", "#feb821"],
      labels: {
        "habitante": {
          label: "Habitante de la Comuna",
          imagen: "https://i.ibb.co/0jZ3Q0H/Icono-1.png",
        },
        "no_habitante": {
          label: "No habitante de la Comuna",
        },
      }
    };
  },
  async fetch() {
    await this.$store.dispatch("stadistic/loadNParticipantes");
    await this.$store.dispatch("stadistic/loadTfProvincias");
  },
  methods: {
    p_radius(total) {
      return (total * 360) / this.totalParticipants;
    },
    p_participantes(total) {
      return Math.round((total * 100) / this.totalParticipants);
    },
  },
  computed: {
    plotWidth() {
      return this.$vuetify.breakpoint.mobile ? 150 : 300;
    },
    plotHeight() {
      return this.$vuetify.breakpoint.mobile ? 150 : 300;
    },
    totalParticipants() {
      return this.$store.getters["stadistic/n_participantes"];
    },
    tfParticipantes() {
      return this.$store.getters["stadistic/tf_provincias"];
    },
    // maxValueGenre() {
    //   return this.tfParticipantes.reduce((max, item) => {
    //     return Math.max(max, Object.values(item)[0]);
    //   }, 0);
    // },
    // col_span() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case "xs":
    //       return "col-span-12";
    //     case "sm":
    //       return "col-span-12";
    //     case "md":
    //       return "col-span-6";
    //     case "lg":
    //       return "col-span-6";
    //     case "xl":
    //       return "col-span-4";
    //   }
    // },
  },
};
</script>

<style></style>
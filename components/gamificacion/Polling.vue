<template>
  <div class="py-32 max-w-screen-xl mx-auto">
    <div
      v-if="!loading && !has_ended && combinations.length > 0"
      class="h-screen flex flex-col justify-center align-center"
    >
      <span
        class="block text-2xl lg:text-4xl font-black text-center text-[#1c355e]"
      >
        Como Comuna de Coronel, debemos enfocar nuestros esfuerzos en:
      </span>

      <!-- OPTIONS -->
      <div
        class="grid grid-cols-12 mt-12 lg:gap-x-8 gap-y-8 lg:gap-y-0 px-8 lg:px-0"
      >
        <!-- OPTION 1 -->
        <div class="rounded-xl shadow-2xl col-span-12 lg:col-span-6">
          <v-card
            @click="optionSelected(combinations[first_option].first_phrase.id)"
            class="px-8 py-8 d-flex flex-column align-center justify-center"
            height="240"
            style="cursor: pointer"
            flat
          >
            <span class="block text-base lg:text-lg text-center text-[#2929c6]">
              {{ combinations[first_option].first_phrase.name }}
            </span>
          </v-card>
        </div>
        <!-- OPTION 1 -->

        <!-- OPTION 2 -->
        <div class="rounded-xl shadow-2xl col-span-12 lg:col-span-6">
          <v-card
            @click="optionSelected(combinations[first_option].second_phrase.id)"
            class="px-8 py-8 d-flex flex-column align-center justify-center"
            height="240"
            style="cursor: pointer"
            flat
          >
            <span class="text-base lg:text-lg text-center text-[#2929c6]">
              {{ combinations[first_option].second_phrase.name }}
            </span>
          </v-card>
        </div>
        <!-- OPTION 2 -->
      </div>

      <!-- OPTIONS -->

      <div class="d-flex flex-column align-center mt-12 space-y-4 lg:px-0 px-8">
        <!-- SIN PREFERENCIA -->
        <v-btn
          @click="noPreferences"
          color="#1c355e"
          class="text-capitalize white--text mb-4"
          >No tengo preferencia</v-btn
        >
        <!-- SIN PREFERENCIA -->

        <!-- SALIR -->
        <span class="text-xs text-center" v-if="opciones_seleccionadas == 0"
          >Debes seleccionar al menos 15 opciones para ver los resultados</span
        >

        <span
          class="text-xs text-center"
          v-if="opciones_seleccionadas > 0 && opciones_seleccionadas < 15"
        >
          Haz seleccionado
          <span class="text-[#1c355e] font-bold">{{
            opciones_seleccionadas
          }}</span>
          de 15 opciones.
        </span>

        <span class="text-xs text-center" v-if="opciones_seleccionadas >= 15">
          Ahora tienes
          <span class="text-[#1c355e] font-bold">{{
            opciones_seleccionadas
          }}</span>
          opciones seleccionadas, puedes seguir seleccionando o ver los
          resultados
        </span>

        <v-progress-linear
          v-if="opciones_seleccionadas < 15"
          class="w-80"
          color="#73bb29"
          :value="(opciones_seleccionadas * 100) / 15"
        ></v-progress-linear>

        <v-btn
          color="purple darken-4"
          class="white--text text-capitalize"
          :disabled="opciones_seleccionadas < 15"
          @click="verResultados"
          >Ver Resultados</v-btn
        >
        <!-- SALIR -->
      </div>
    </div>

    <div
      v-if="has_ended"
      class="h-screen flex flex-col justify-center align-center"
    >
      <span class="block text-2xl lg:text-4xl font-black text-center">
        ¡Gracias por participar!
      </span>

      <p class="text-center font-sans text-xl mt-4">
        De acuerdo a nuestros registros, ya has votado por todas las opciones
        disponibles. Agradecemos enormemente tu participación por lo que te
        recomendamos revisar los resultados de la encuesta y estar al pendiente
        de este instrumento, en caso de que se agreguen nuevas opciones.
      </p>

      <p class="text-center font-sans text-xl mt-4">
        Recuerda que la información que nos haz entregado es anónima y será
        utilizada únicamente para fines de investigación. Nuevamente, te
        agradecemos por tu participación. Al presionar el botón de abajo podrás
        revisar los resultados generales de la encuesta
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_option: 0,
      second_option: 1,
      opciones_seleccionadas: 0,
      loading: true,
      has_ended: false,
      winner: null,
      loser: null,
    };
  },
  async fetch() {
    await this.$store
      .dispatch("encuesta/fetchCombinations")
      .then(() => (this.loading = false));

    await this.$store.dispatch("encuesta/fetchCombinationsPlayed");

    if (this.combinations_played >= 120) {
      this.has_ended = true;
    }
  },
  methods: {
    async optionSelected(id) {
      this.winner = id;

      this.loser =
        this.combinations[this.first_option].second_phrase.id != id
          ? this.combinations[this.first_option].second_phrase.id
          : this.combinations[this.first_option].first_phrase.id;

      await this.$store.dispatch("encuesta/submitMatch", {
        winner_id: this.winner,
        loser_id: this.loser,
        user: this.$cookies.get("gec_user_id"),
      });

      this.moveToNextPair();
    },
    moveToNextPair() {
      this.opciones_seleccionadas++;
      this.first_option = (this.first_option + 1) % this.combinations.length;
      this.second_option = this.first_option + 1;
    },
    async noPreferences() {
      await this.$store.dispatch("encuesta/submitMatch", {
        winner_id: null,
        loser_id: null,
        user: this.$cookies.get("gec_user_id"),
        pair: [
          {
            frases_id: this.combinations[this.first_option].first_phrase.id,
          },
          {
            frases_id: this.combinations[this.first_option].second_phrase.id,
          },
        ],
      });

      this.moveToNextPair();
    },
    verResultados() {
      this.$router.push("/encuesta-coronel/resultados");
    },
  },
  watch: {
    async first_option(val) {
      await this.$store.dispatch("encuesta/fetchCombinationsPlayed");

      if (this.combinations_played >= 120) {
        this.has_ended = true;
      }
    },
  },
  computed: {
    combinations() {
      return this.$store.getters["encuesta/combinations"];
    },
    combinations_played() {
      return this.$store.getters["encuesta/combinationsPlayed"];
    },
  },
};
</script>

<style>
</style>
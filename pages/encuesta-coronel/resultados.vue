<template>
  <div class="bg-slate-100">
    <div
      class="py-32 bg-gradient-to-br from-neutral-900 to-indigo-950"
      :style="{
        padding: $vuetify.breakpoint.mobile ? '0% 4%' : '',
      }"
    >
      <div class="max-w-screen-xl mx-auto text-white">
        <v-container>
          <p class="text-4xl font-black">Resultados</p>

          <p class="text-2xl leading-loose lg:leading-loose">
            ¡Conoce los temas que importan para la comuna de Coronel! Los
            resultados de la encuesta, recolectados de la participación de
            habitantes y no habitantes de la comuna de Coronel revelan los focos
            de actuación más críticos que requieren nuestra atención. ¡No te
            pierdas esta valiosa perspectiva sobre los desafíos y oportunidades
            que enfrenta la comuna!
          </p>

          <div class="mt-9" v-if="!user_is_back">
            <p class="text-3xl font-bold">
              ¿Quieres participar de la encuesta?
            </p>
            <v-btn to="/encuesta-coronel" color="white">Participar</v-btn>
          </div>

          <div class="mt-9" v-if="user_is_back">
            <p class="text-3xl font-bold">
              ¿Quieres continuar priorizando focos?
            </p>
            <v-btn to="/encuesta-coronel/gamificacion" color="white">Continuar</v-btn>
          </div>
        </v-container>
      </div>
    </div>

    <div
      class="py-20 max-w-screen-xl mx-auto text-slate-800"
      :style="{
        padding: $vuetify.breakpoint.mobile ? '0% 4%' : '',
      }"
    >
      <v-container>

      <p class="text-4xl font-black">Priorización en cifras</p>

      <span class="col-span-12 text-sm lg:text-xl lg:leading-loose">
        <span class="font-semibold">a. Participantes según género:</span> La
        distribución de participantes en la priorización de focos según su
        género (masculino, femenino, otro, prefiere no decirlo).
        <span class="font-semibold">b. Participantes de la comuna:</span> La
        distribución de participantes en la priorización de focos de acuerdo a
        si reside o no en la Comuna de Coronel.
        <span class="font-semibold">c. Participantes según rango de edad:</span>
        La distribución de participantes en la priorización de focos en
        determinados rangos de edad.
      </span>

      <div class="grid grid-cols-12 gap-y-8 lg:gap-x-8 mt-10">
        <TypesGamificacionSegmentsParticipantes />
        <TypesGamificacionSegmentsParticipantesEdad />
        <TypesGamificacionSegmentsHabitantes />
      </div>

      <div class="mt-16">
        <p class="text-3xl font-black">Distribución por sector</p>
        <span class="text-sm lg:text-xl">
          La distribución de participantes en la priorización de focos de
          acuerdo al sector económico al que pertenecen.
        </span>

        <div class="grid grid-cols-12 gap-y-8 lg:gap-x-8 mt-10">
          <TypesGamificacionSegmentsSectores />
        </div>
      </div>

      <div class="mt-16">
        <p class="text-3xl font-black">Priorizaciones de la comunidad</p>
        <span class="text-sm lg:text-xl">
          Revisa los focos de actuación priorizados por la comunidad de acuerdo
          a su nivel de aceptación.
        </span>

        <div class="grid grid-cols-12 gap-y-8 lg:gap-x-8 mt-10">
          <TypesGamificacionSegmentsRanking />
        </div>
      </div>

      </v-container>
    </div>

    <div class="bg-gradient-to-b from-stone-900 to-blue-900 py-16">
      <div
        class="text-white max-w-screen-xl mx-auto"
        :style="{
          padding: $vuetify.breakpoint.mobile ? '0% 4%' : '',
        }"
      >
        <v-container>
            <!-- COMO FUNCIONA LA PRIORIZACION -->
            <span class="block text-xl lg:text-4xl font-bold text-white mb-4"
              >¿Cómo funciona la priorización de focos de actuación?</span
            >
            <div
              class="flex text-sm lg:text-xl leading-loose lg:leading-loose mb-16"
            >
              <span
                >En la práctica el sistema de clasificación
                <a
                  href="https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/"
                  target="_blank"
                  ><span class="text-[#ffac00] font-black"
                    >True Skill&#8482;</span
                  ></a
                >
                se utiliza para clasificar jugadores y/o equipos en videojuegos
                competitivos utilizando como criterio su skill o habilidad para
                jugar. Para el caso práctico de los focos de actuación de esta
                encuesta el
                <b>nivel de aceptación</b>
                (<v-icon color="white"> mdi-star-shooting ></v-icon>) de un foco se
                ha de utilizar como un criterio de clasificación (priorización) en
                escala de 1 a 100 de los focos que impulsarán el desarrollo en la
                comuna de Coronel. Usando la
                <a
                  href="https://es.wikipedia.org/wiki/Inferencia_bayesiana"
                  target="_blank"
                  ><span class="text-[#ffac00] font-black"
                    >inferencia bayesiana</span
                  ></a
                >, el sistema de clasificación se caracteriza por su capacidad de
                adaptar el nivel de aceptación de los focos en base a la
                incertidumbre de la naturaleza estadística, debido a que es
                altamente probable que el nivel de aceptación de un foco varíe a lo
                largo del tiempo.
              </span>
            </div>
            <!-- COMO FUNCIONA LA PRIORIZACION -->

            <!-- COMO SE AJUSTA LA PRIORIZACION -->
            <span class="block text-xl lg:text-4xl font-bold text-white mb-4"
              >¿Cómo se ajusta el nivel de aceptación de un foco?</span
            >
            <span
              class="block text-sm lg:text-xl leading-loose lg:leading-loose mb-16"
            >
              En esta encuesta, se analiza cómo la aceptación de un foco no depende
              solo del número de victorias o derrotas, sino también de dos factores:
              el "nivel de aceptación" (μ) y el grado de incertidumbre en la
              aceptación de un foco de cada uno de los usuarios participantes.
              Teniendo siempre presente que cada usuario tiene criterios y
              preferencias sobre los focos que se deben priorizar en la comuna, es
              por esto que cada votación se individualiza para posteriormente, crear
              una ponderación general en base a la votación de todos los
              participantes. Para entender esto, utilizamos un método llamado
              "inferencia bayesiana", que nos permite clasificar los focos
              basándonos en cómo cambian nuestras creencias sobre ellas. Por
              ejemplo, si creemos que un foco A tiene un alto nivel de aceptación
              (90 puntos) y un bajo grado de incertidumbre (4.3), pero lo comparamos
              con un foco B con un nivel de aceptación más bajo (50 puntos) y un
              mayor grado de incertidumbre (8.3), es posible que el foco B gane en
              popularidad y su aceptación aumente drásticamente. Sin embargo, al
              continuar haciendo elecciones y comparando los focos, los niveles de
              aceptación y grado de incertidumbre se estabilizarán y se obtendrán
              resultados más precisos y justos gracias a la inferencia bayesiana.
            </span>
            <!-- COMO SE AJUSTA LA PRIORIZACION -->

            <!-- CUANTOS HAN PARTICIPADO -->
            <span class="block text-xl lg:text-4xl font-bold text-white mb-4"
              >Participación en la encuesta: ¡Conoce el número de
              participantes!</span
            >
            <div class="text-sm lg:text-xl leading-loose">
              <div
                class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12"
              >
                <div>
                  <span
                    ><span class="text-2xl lg:text-5xl font-bold text-[#ffac00]">{{
                      totalParticipants
                    }}</span>
                    participantes</span
                  >
                </div>

                <div>
                  <span class="text-2xl lg:text-5xl font-bold text-[#ffac00]">{{
                    totalMatchs
                  }}</span>
                  priorizaciones
                </div>
              </div>
            </div>
            <!-- CUANTOS HAN PARTICIPADO -->
          
        </v-container>
      </div>
    </div>

    <div
      class="py-8 lg:py-20 max-w-screen-xl mx-auto text-slate-800"
      :style="{
        padding: $vuetify.breakpoint.mobile ? '0% 4%' : '',
      }"
    >
      <v-container>

      <p class="text-3xl font-black">Priorizaciones</p>
      <span class="text-sm lg:text-xl">
        Aquí podrás ver el ranking de priorización de focos, ordenados de mayor
        a menor. El ranking se compone de aquellos focos que han obtenido el
        mejor nivel de aceptación entre todos los usuarios y segmentos
        participantes.
      </span>

      <TypesGamificacionResultados />

      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_is_back: false,
    }
  },
  async asyncData({ store }) {
    await store.dispatch("stadistic/loadNMatches");
    await store.dispatch("stadistic/loadNParticipantes");
  },
  mounted() {
    this.user_is_back = this.$cookies.get('gec_user_id') || false
  },
  computed: {
    totalParticipants() {
      return this.$store.getters["stadistic/n_participantes"];
    },
    totalMatchs() {
      return this.$store.getters["stadistic/n_matches"];
    },
  },
};
</script>

<style>
</style>
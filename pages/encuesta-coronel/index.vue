<template>
  <div>
    <v-card
      :height="$vuetify.breakpoint.mobile ? 'auto' : '100vh'"
      class="bg-cover bg-fixed h-fit py-32"
      :style="{
        backgroundImage: `url(/img/encuesta_web.png)`,
        backgroundPosition: 'center',
        borderWidth: '0px',
        padding: $vuetify.breakpoint.mobile ? '0% 4%' : ''
      }"
      flat
      tile
    >
      <v-container>
        <div
          class="max-w-screen-xl mx-auto flex flex-col align-center justify-center w-4/ text-white text-lg lg:text-xl"
        >
          <p class="text-center">
            Te damos la bienvenida a la
            <b class="font-black">"Encuesta de vocación productiva de la comuna de Coronel"</b>
            diseñada especialmente para toda la comunidad de Coronel.
          </p>

          <p class="text-center">
            Con los resultados de esta encuesta nos ayudarás a construir un camino
            económico sostenible y justo para la comuna de Coronel.
          </p>

          <p class="text-center">
            Ya hemos identificado 16 focos de actuación para la comuna de Coronel.
            En esta encuesta te pediremos que nos ayudes a priorizarlos. ¿Quieres
            conocer los resultados parciales de esta encuesta? Haz
            <nuxt-link to="/encuesta-coronel/resultados" class="text-[#feb821] font-bold">clic aquí.</nuxt-link>
          </p>

          <p class="text-center">
            Los resultados serán publicados conservando el anonimato de los
            participantes. Al presionar "Participar" aceptas los términos y
            condiciones de la encuesta.
          </p>

          <v-btn class="mt-4" to="/encuesta-coronel/iniciar" outlined color="white"
            >Participar</v-btn
          >
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundClass: {},
    };
  },
};
</script>

<style>
</style>
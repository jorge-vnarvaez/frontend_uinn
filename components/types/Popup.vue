<template>
  <v-overlay
      :value="overlay"
      :style="{ display: 'flex', flexDirection: 'column', padding: $vuetify.breakpoint.mobile ? '3% 7%' : '3% 7%', 'z-index': 1000 }"
    >
      <div
        class="bg-white drop-shadow-xl rounded-full h-8 w-8 flex align-center justify-center absolute z-50 -top-4 -right-2 cursor-pointer"
        @click="overlay = false"
      >
        <v-icon color="black">mdi-close</v-icon>
      </div>


      <div
        class="bg-[#02aead] w-full lg:w-[800px]"
      >
        <div class="grid grid-cols-12 h-full">
            <div class="bg-[#bcfeff] col-span-12 lg:col-span-9 my-4">
                <div :style="{ padding: $vuetify.breakpoint.mobile ? '5% 7%' : '10% 0% 2% 7%' }"> 
                    <p class="uppercase text-[#02aead] lg:text-xl">Encuesta:</p>
                    <p class="font-black text-xl lg:text-2xl uppercase text-slate-900">¿Qué quiere Coronel para su futuro?</p>
                </div>

                <div class="bg-white ml-4 p-6">
                    <p class="font-bold text-2xl text-neutral-900">Participa de esta encuesta sobre la vocación productiva de la comuna.</p>

                    <p class="text-lg lg:text-xl text-neutral-700 w-9/12">
                        Comparte tu visión y ayudanos a construir un camino económico sostenible y justo para Coronel.
                    </p>
                    <v-btn to="/encuesta-coronel" color="#02aead" class="mt-4" depressed>
                        Participa
                    </v-btn>
                </div>
            </div>

            <v-img v-if="$vuetify.breakpoint.name" class="col-span-3 brightness-200" src="/img/encuesta_web.png">

            </v-img>
        </div>
      </div>
    </v-overlay>
</template>

<script>
export default {
    data() {
        return {
            overlay: true
        }
    }
}
</script>

<style>

</style>
<template>
  <div class="col-span-12">
    <v-card class="px-8 py-6" flat>
      <p class="text-slate-400">
        Selecciona un segmento para ver el ranking de los focos de actuación.
      </p>

      <v-chip-group mandatory active-class="bg-slate-900 white--text">
        <v-chip
          v-for="option in options"
          :key="'option_' + option.id"
          class="cursor-pointer"
          label
          @click="activeOption = option.id"
          >{{ option.label }}</v-chip
        >
      </v-chip-group>

      <div class="flex flex-col space-y-2">
        <v-select
          v-if="activeOption === 1"
          :disabled="activeOption !== 1"
          v-model="activeGenre"
          :items="genres"
          :item-text="(genres) => genres.label"
          :item-value="(genres) => genres.key"
          menu-props="auto"
          hide-details
          prepend-icon="mdi-gender-male-female"
          single-line
          class="w-80"
        ></v-select>

        <v-select
          v-if="activeOption === 2"
          :disabled="activeOption !== 2"
          v-model="activeSector"
          :items="sectors"
          :item-text="(sectors) => sectors.label"
          :item-value="(sectors) => sectors.label"
          menu-props="auto"
          hide-details
          prepend-icon="mdi-hand-coin"
          single-line
          class="w-80"
        ></v-select>

         <v-select
          v-if="activeOption === 3"
          :disabled="activeOption !== 3"
          v-model="activeUbication"
          :items="ubications"
          :item-text="(ubications) => ubications.label"
          :item-value="(ubications) => ubications.label"
          menu-props="auto"
          hide-details
          prepend-icon="mdi-map"
          single-line
          class="w-80"
        ></v-select>
      </div>

      <div class="mt-8">
        <TypesGamificacionSegmentsRankingByGender
          v-if="activeOption === 1"
          :active-genre="activeGenre"
        />

        <TypesGamificacionSegmentsRankingByEconomicSector
          v-if="activeOption === 2"
          :active-sector="activeSector"
        />

        <TypesGamificacionSegmentsRankingByUbicacion
          v-if="activeOption === 3"
          :active-ubication="activeUbication"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeOption: 1,
      activeGenre: "Masculino",
      activeSector: 'Pesca',
      activeUbication: 'Habitante',
      options: [
        { id: 1, label: "Género" },
        { id: 2, label: "Sector económico" },
        { id: 3, label: "Ubicación" },
      ],
      genres: [
        { id: 1, label: "Masculino", key: "Masculino" },
        { id: 2, label: "Femenino", key: "Femenino" },
        { id: 3, label: "Prefiero no decirlo", key: "Prefiero no decirlo" },
        { id: 4, label: "Otro", key: "Otro" },
      ],
      sectors: [
        { label: "Pesca" },
        { label: "Energía" },
        { label: "Servicio Público" },
        {
          label: "Servicios administrativos",
        },
        { label: "Logística" },
        { label: "Comercio" },
        { label: "Comunicaciones" },
        { label: "Construcción" },
        { label: "Educación" },
        {
          label: "Industria Manufacturera",
        },
        { label: "Inmobiliaria" },
        { label: "Salud" },
        {
          label: "Transporte y almacenamiento",
        },
        { label: "Turismo" },
        {
          label: "Agricultura y ganadería",
        },
        {
          label: "No me encuentro trabajando",
        },
        { label: "Otra área" },
      ],
      ubications: [
        { label: 'Habitante' },
        { label: 'No habitante' }
      ]
    };
  },
};
</script>

<style>
</style>
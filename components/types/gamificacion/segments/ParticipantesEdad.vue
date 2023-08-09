<template>
  <div :class="$gridColsTransformer($vuetify.breakpoint.name)">
    <v-card class="px-8 py-6" flat>
      <span class="block mb-8 text-xl">c. Participantes según rango de edad</span>
      <div class="flex flex-col lg:flex-row  justify-center space-y-8 lg:space-y-0 lg:space-x-8 align-center">
        <ChartSvg contain :width="plotWidth" heigth="1800">
          <ChartG
            :scales="{
              colors: {
                scale: 'scaleLinear',
                domain: [0, Object.values(tfEdadParticipantes).length - 1],
                range: ['#272f82', '#3d4ace'],
              },
            }"
          >
            <template #default="{ scales }">
              <ChartArc
                v-for="(item, index) in angles"
                :key="index + 'arc'"
                :bx="150"
                :by="110"
                :startAngle="index == 0 ? 0 : angles[index - 1]"
                :endAngle="index == angles.length - 1 ? 360 : angles[index]"
                :fill="scales.colors(index)"
                class="cursor-pointer text-capitalize"
                v-tippy
                :content="Object.values(tfEdadParticipantes)[index].label.replace(/_/g, ' ').replace('  ', ' - ') + ' (' + p_participantes(Object.values(tfEdadParticipantes)[index].total) + '%)'"
              >
              </ChartArc>
            </template>
          </ChartG>
        </ChartSvg>

        <ChartSvg>
          <ChartG
            :scales="{
              colors: {
                scale: 'scaleLinear',
                domain: [0, Object.values(tfEdadParticipantes).length - 1],
                range: ['#272f82', '#3d4ace'],
              },
            }"
          >
            <template #default="{ scales }" class="flex align-center">
              <ChartRect
                v-for="(item, index) in Object.values(tfEdadParticipantes)"
                :key="index + 'rect'"
                :width="15"
                :height="15"
                :by="index * 25 + 10"
                :ty="150"
                :fill="scales.colors(index)"
              ></ChartRect>

              <ChartText
                v-for="(item, index) in Object.values(tfEdadParticipantes)"
                :key="index + 'text'"
                :by="index * 25 + 10"
                :font-size="$vuetify.breakpoint.mobile ? 12 : 19"
                :ty="150"
                :tx="20"
                >
                {{ item.total }} entre
                {{
                 
                    item.label.replace(/_/g, ' ').replace('  ', ' - ')
                }}
                ({{ p_participantes(item.total) }}%)</ChartText
              >
            </template>
          </ChartG>
        </ChartSvg>
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
      colors: ["#3e5cbd", "#3333ff", "#ff6469", "#253771"],
    };
  },
  async fetch() {
    await this.$store.dispatch("stadistic/loadNParticipantes");
    await this.$store.dispatch("stadistic/loadTfParticipantesEdad");

    Object.values(this.tfEdadParticipantes).forEach((item) => {
      const p_arc = this.p_radius(item.total);
      this.acum += p_arc;
      this.angles.push(this.acum);
    });

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
    tfEdadParticipantes() {
      return this.$store.getters["stadistic/tf_participantes_edad"];
    },
    maxValue() {
      return this.tf_edad_participantes.reduce((max, item) => {
        return Math.max(max, Object.values(item)[0]);
      }, 0);
    },
  },
};
</script>

<style></style>
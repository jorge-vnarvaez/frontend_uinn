<template>
  <!-- TITLE AND DESCRIPTION -->
  <div
    class="py-20"
    :style="`background-color: ${service.color}; color: white`"
  >
    <v-container>
      <div class="max-w-screen-xl mx-auto">
        <v-row
          align-content-lg="center"
          class="flex align-center space-y-20 lg:space-y-0"
        >
          <v-col cols="12" lg="6">
            <span class="block text-2xl lg:text-6xl mb-4 font-semibold">
              {{ service.title }}
            </span>

            <span
              class="block text-lg w-full mb-8"
              v-html="service.description"
            ></span>
          </v-col>

          <v-col cols="12" lg="6">
            <v-img
              v-if="service.illustration"
              :src="$config.apiUrlV2 + '/assets/' + service.illustration"
              contain
              width="400"
              height="400"
            >
            </v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
  <!-- TITLE AND DESCRIPTION -->
</template>

<script>
export default {
    computed: {
        service() {
            return this.$store.getters['services/getCurrentService']
        }
    }
};
</script>

<style></style>

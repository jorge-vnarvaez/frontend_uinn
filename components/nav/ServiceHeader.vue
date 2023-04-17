<template>
  <!-- TITLE AND DESCRIPTION -->
  <div
    v-if="service.header"
    class="py-20 h-screen"
    :style="`background-color: ${service.color}; color: white`"
  >
    <div :style="ui_settings">
      <v-container>
        <div class="max-w-screen-xl mx-auto h-screen">
            <v-row class="h-full d-flex align-lg-center">
                <BlockComponent
                  v-for="block in service.header.blocks"
                  :key="block.id"
                  :block="block"
                ></BlockComponent>
            </v-row>

            <NavSocialMediaContainer v-if="!$vuetify.breakpoint.mobile" parent_type="service" :icon_color_mode="service.header.icon_color_mode" />
        </div>
      </v-container>
    </div>
  </div>
  <!-- TITLE AND DESCRIPTION -->
</template>

<script>
export default {
    computed: {
        service() {
            return this.$store.getters['services/getCurrentService']
        },
        ui_settings() {
          return this.$store.getters["ui/getUiSettings"];
        },
    }
};
</script>

<style></style>

<template>
  <v-app>
      <div v-if="!contentWasRendered">
        <PageLoader />
      </div>
      <div v-if="contentWasRendered">
        <NavHeader />
        <Nuxt :style="uiSettingsLoaded ? ui_settings : {}" />
        <NavFooter />
      </div>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      uiSettingsLoaded: false,
      contentWasRendered: false
    };
  },
  async beforeMount() {
    await Promise.all([this.$store.dispatch("ui/loadUiSettings")]).then((res) => {
      this.uiSettingsLoaded = true;
      setTimeout(() => {
        this.contentWasRendered = true;
      }, 300)
    })
  },
  computed: {
    ui_settings() {
      return this.$store.getters['ui/getUiSettings'];
    }
  }
};
</script>

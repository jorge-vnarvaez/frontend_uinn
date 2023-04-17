<template>
  <v-app>
    <script
      charset="utf-8"
      type="text/javascript"
      src="//js.hsforms.net/forms/embed/v2.js"
    ></script>
    <div v-if="!contentWasRendered">
      <PageLoader :percentage="progress" />
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
      contentWasRendered: false,
      totalTime: 1000,
      startTime: 0,
      progress: 0,
    };
  },
  async beforeMount() {
    this.startTime = new Date().getTime();
    await Promise.all([
      this.$store.dispatch("ui/loadUiSettings"),
      this.$store.dispatch("services/loadServices"),
      this.$store.dispatch("social_media/loadSocialMediaObject"),
      ]).then(
      (res) => {
        this.uiSettingsLoaded = true;
        let interval = setInterval(() => {
          let currentTime = new Date().getTime();
          let timeElapsed = currentTime - this.startTime;

          this.progress = Math.round((timeElapsed / this.totalTime) * 100);
          if (this.progress >= 100) {
            this.progress = 100;
            clearInterval(interval);
            this.contentWasRendered = true;
          }
        }, 100);
      }
    );
  },
  computed: {
    ui_settings() {
      return this.$store.getters["ui/getUiSettings"];
    },
  },
};
</script>

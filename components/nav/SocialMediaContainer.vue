<template>
  <v-container class="max-w-screen-xl mx-auto px-0">
    <div
      :class="[
        'absolute right-0 w-80 h-screen',
        parent_type == 'page' ? 'top-0' : 'top-20',
      ]"
    >
      <div class="h-full flex flex-col space-y-8 align-center justify-center">
        <!-- LINKEDIN -->
        <a :href="linkedin" target="_blank">
          <font-awesome-icon
            icon="fa-brands fa-linkedin-in"
            class="w-8 h-8"
            :color="icon_color_mode"
          />
        </a>
        <!-- LINKEDIN -->

        <!-- TWITTER -->
        <font-awesome-icon
          icon="fa-brands fa-twitter"
          class="w-8 h-8"
          :color="icon_color_mode"
        />
        <!-- TWITTER -->

        <!-- INSTAGRAM -->
        <a :href="instagram" target="_blank">
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="w-8 h-8"
            :color="icon_color_mode"
          />
        </a>
        <!-- INSTAGRAM -->

        <!-- FACEBOOK -->
        <font-awesome-icon
          icon="fa-brands fa-facebook-f"
          class="w-8 h-8"
          :color="icon_color_mode"
        />
        <!-- FACEBOOK -->
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    parent_type: {
      type: String,
      required: true,
    },
    icon_color_mode: {
      type: String,
      required: false,
      default: "white",
    },
  },
  computed: {
    instagram() {
      return this.$store.getters["social_media/getInstagram"];
    },
    linkedin() {
      return this.$store.getters["social_media/getLinkedin"];
    },
  },
};
</script>

<style></style>

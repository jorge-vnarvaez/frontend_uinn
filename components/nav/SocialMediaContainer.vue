<template>
  <v-container class="max-w-screen-xl mx-auto px-0 py-0">
    <div
      :class="[
        'fixed right-20 w-10 h-screen flex align-center',
        parent_type == 'page' ? 'top-0' : 'top-20',
      ]"
    >
      <div class="h-64 bg-[#39f8c5] flex flex-col space-y-8 align-center justify-center rounded-full">
        <!-- LINKEDIN -->
        <a :href="linkedin" target="_blank">
          <v-icon color="black">mdi-linkedin</v-icon>
          <!-- <font-awesome-icon icon="fa-brands fa-linkedin-in" class="w-6 h-6" :color="icon_color_mode" -->
        </a>
        <!-- LINKEDIN -->

        <!-- TWITTER -->
        <a :href="twitter" target="_blank">
          <v-icon color="black">mdi-twitter</v-icon>
          <!-- <font-awesome-icon icon="fa-brands fa-twitter" class="w-6 h-6" :color="icon_color_mode" -->
        </a>
        <!-- TWITTER -->

        <!-- INSTAGRAM -->
        <a :href="instagram" target="_blank">
          <v-icon color="black">mdi-instagram</v-icon>
          <!-- <font-awesome-icon icon="fa-brands fa-instagram" class="w-6 h-6" :color="icon_color_mode" -->
        </a>
        <!-- INSTAGRAM -->

        <!-- FACEBOOK -->
        <a :href="facebook" target="_blank">
          <v-icon color="black">mdi-facebook</v-icon>
          <!-- <font-awesome-icon icon="fa-brands fa-facebook-f" class="w-6 h-6" :color="icon_color_mode" -->
        </a>
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
      default: "black",
    },
  },
  computed: {
    instagram() {
      return this.$store.getters["social_media/getInstagram"];
    },
    linkedin() {
      return this.$store.getters["social_media/getLinkedin"];
    },
    facebook() {
      return this.$store.getters["social_media/getFacebook"];
    },
    twitter() {
      return this.$store.getters["social_media/getTwitter"];
    },
  },
};
</script>

<style></style>

<template>
  <footer class="bg-[#5811F1] py-8">
    <v-container class="px-0">
      <div class="max-w-screen-xl mx-auto" :style="{ padding: $vuetify.breakpoint.mobile ? $generalPadding() : '' }">
        <div class="grid grid-cols-12 gap-y-12 lg:gap-y-0">
          <div class="flex flex-col text-white col-span-12 lg:col-span-4">
            <v-img
              src="/img/uinn_logo_w.png"
              width="91"
              height="55"
              contain
              class="mb-8"
            ></v-img>
            <span class="font-bold text-lg">Hagamos Innovación</span>
            <span class="block w-10/12 mt-1 text-sm text-slate-100">
              Somos una organización dedicada al desarrollo de proyectos de
              innovación en empresas.</span
            >

            <!-- SOCIAL MEDIA -->
            <div class="mt-4 flex space-x-6">
              <!-- LINKEDIN -->
              <a :href="linkedin" target="_blank">
                <font-awesome-icon
                  icon="fa-brands fa-linkedin-in"
                  class="w-8 h-8 text-white"
                />
              </a>
              <!-- LINKEDIN -->

              <!-- TWITTER -->
              <a :href="twitter" target="_blank">
                <font-awesome-icon icon="fa-brands fa-twitter" class="w-8 h-8 text-white" />
              </a>
              <!-- TWITTER -->

              <!-- INSTAGRAM -->
              <a :href="instagram" target="_blank">
                <font-awesome-icon
                  icon="fa-brands fa-instagram"
                  class="w-8 h-8 text-white"
                />
              </a>
              <!-- INSTAGRAM -->

              <!-- FACEBOOK -->
              <a :href="facebook" target="_blank">
                <font-awesome-icon
                  icon="fa-brands fa-facebook-f"
                  class="w-8 h-8 text-white"
                />
              </a>
              <!-- FACEBOOK -->
            </div>
            <!-- SOCIAL MEDIA -->
          </div>
          <!-- UINN FOOTER -->

          <!-- META LINKS -->
          <div
            class="text-white grid grid-cols-12 col-span-12 lg:col-span-8 gap-y-8 lg:gap-y-0"
          >
            <!-- NOSOTROS -->
            <div class="flex flex-col cursor-pointer col-span-12 lg:col-span-4">
              <span class="block mb-2 font-bold text-lg">Nosotros</span>
              <div class="flex flex-col text-sm space-y-2">
                <nuxt-link :to="{ path: '/acerca_nuestro' }"
                  ><span class="text-white">Acerca nuestro</span></nuxt-link
                >
                <nuxt-link to="actividades"
                  ><span class="text-white">Noticias</span></nuxt-link
                >
                <nuxt-link to="actividades"
                  ><span class="text-white">Eventos</span></nuxt-link
                >
              </div>
            </div>
            <!-- NOSOTROS -->

            <!-- SERVICIOS -->
            <div class="flex flex-col col-span-12 lg:col-span-4">
              <span class="block mb-2 font-bold text-lg">Servicios</span>
              <div class="flex flex-col text-sm space-y-2">
                <div v-for="service in services" :key="service.id">
                  <nuxt-link :to="{ path: '/servicios/' + service.slug }"
                    ><span class="text-white normal-case">{{
                      service.name
                    }}</span></nuxt-link
                  >
                </div>
              </div>
            </div>
            <!-- SERVICIOS -->
          </div>
          <!-- META LINKS -->
        </div>

        <v-divider color="white" class="mt-20 mb-6"></v-divider>

        <div
          class="w-full text-white flex flex-col lg:flex-row justify-center align-center lg:space-x-4"
        >
          <span class="font-semibold">uinn.cl</span>
          <v-divider vertical class="bg-white"></v-divider>
          <span class="font-semibold">2019-2023</span>

          <span>Todos los derechos reservados &#174;</span>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script>
export default {
  computed: {
    services() {
      return this.$store.getters["services/getServices"];
    },
    ui_settings() {
      return this.$store.getters["ui/getUiSettings"];
    },
    social_media() {
      return this.$store.getters["social_media/getSocialMedia"];
    },
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

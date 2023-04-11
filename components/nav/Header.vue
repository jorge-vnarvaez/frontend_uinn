<template>
  <div v-if="page.header">
    <nav class="shadow-2xl" :style="$vuetify.breakpoint.mobile ? ui_settings : {}">
      <v-container>
        <div class="max-w-screen-xl mx-auto">
          <div class="flex align-center justify-between">
            <!-- LOGO -->
            <div @click="home" class="cursor-pointer z-30">
              <v-img
                src="/uinn-logo.png"
                width="75"
                height="40"
                contain
              ></v-img>
            </div>
            <!-- LOGO -->

            <!-- DESKTOP MENU -->
            <MenuDesktop v-if="!$vuetify.breakpoint.mobile" :list="navItems" />
            <!-- DESKTOP MENU -->

            <!-- MOBILE MENU -->
            <MenuMobile v-if="$vuetify.breakpoint.mobile" :list="navItems" />
            <!-- MOBILE MENU -->

            <!-- SEARCH -->
            <div class="cursor-pointer" v-if="!$vuetify.breakpoint.mobile">
              <v-icon class="text-slate-900">mdi-magnify</v-icon>
            </div>
            <!-- SEARCH -->

            <!-- OPEN MENU -->
            <div class="cursor-pointer" v-if="$vuetify.breakpoint.mobile && !navigationDrawerState" @click="$store.commit('ui/setNavigationDrawerState', true)">
              <v-icon class="text-slate-900">mdi-menu</v-icon>
            </div>
            <!-- OPEN MENU -->
          </div>
        </div>
      </v-container>
    </nav>

    <!-- LIVE EVENT -->
    <!-- <div>
      <InfoEventosLive />
    </div> -->
    <!-- LIVE EVENT -->

    <!-- HEADER HERO -->
    <div :style="page.header.hero_image == null ? { height: '100vh' } : bg">
      <div
        class="max-w-screen-xl mx-auto"
        v-if="is_page && !blank_page"
        :style="$vuetify.breakpoint.mobile ? ui_settings : {}"
      >
        <div class="text-white h-screen flex align-center" v-if="page.header">
          <v-container class="px-6">
            <v-row>
              <BlockComponent
                v-for="block in page.header.blocks"
                :key="block.id"
                :block="block"
              ></BlockComponent>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
    <!-- HEADER HERO -->

    <!-- HEADER SERVICE -->
    <div v-if="!is_page && !blank_page">
      <NavServiceHeader />
    </div>
    <!-- HEADER SERVICE -->

    <!-- HERO IMAGE -->
    <div v-if="is_page && page.hero">
      <div :style="{ backgroundColor: page.hero.bg_color, height: '100vh'}">
        <div
          class="max-w-screen-xl mx-auto"
          v-if="is_page && !blank_page"
          :style="$vuetify.breakpoint.mobile ? ui_settings : {}"
        >
          <div class="text-white h-screen flex align-center" v-if="page.hero">
            <v-container class="px-6">
              <v-row>
                <BlockComponent
                  v-for="block in page.hero.blocks"
                  :key="block.id"
                  :block="block"
                ></BlockComponent>
              </v-row>
            </v-container>
          </div>
        </div>
      </div>
    </div>
    <!-- HERO IMAGE -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicesCard: false,
      navItems: [
        {
          id: 2,
          title: "Inicio",
          href: "/",
        },
        {
          id: 3,
          title: "Acerca nuestro",
          href: "/acerca_nuestro",
        },
        {
          id: 4,
          title: "Productos y servicios",
          href: "/#servicios",
        },
        {
          id: 5,
          title: "Actividades",
          href: "/actividades",
        },
        {
          id: 6,
          title: "Contacto",
          href: "/contacto",
        }
      ],
    };
  },
  methods: {
    async home() {
      this.$store.commit(
        "ui/setActiveHeroImage",
        this.$store.getters["ui/getIndexHeroImage"]
      );

      await this.$store.dispatch("pages/loadPage", "inicio");

      this.$router.push("/");
    },
  },
  computed: {
    bg() {
      const image_config = {
        "background-image": `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${this.$store.getters["ui/getActiveHeroImage"]})`,
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
        height: "100vh",
      };

      const color_config = {
        "background-color": this.$store.getters["ui/getActiveColor"],
      };

      return this.is_page ? image_config : color_config;
    },
    page() {
      return this.$store.getters["pages/activePage"];
    },
    is_page() {
      return this.$store.getters["ui/getActiveParentType"] == "page";
    },
    blank_page() {
      return this.$store.getters["ui/getActiveParentType"] == null;
    },
    services() {
      return this.$store.getters["services/getServices"];
    },
    ui_settings() {
      return this.$store.getters["ui/getUiSettings"];
    },
    navigationDrawerState() {
      return this.$store.getters["ui/getNavigationDrawerState"];
    },
  },
};
</script>

<style></style>

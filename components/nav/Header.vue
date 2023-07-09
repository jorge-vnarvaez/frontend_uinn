<template>
  <div>
    <nav
      class="shadow-lg fixed top-0 z-50 bg-white w-full"
    >
      <v-container class="px-0">
        <div class="max-w-screen-xl mx-auto" :style="{
          padding: $vuetify.breakpoint.mobile ? '0% 8%' : ''
        }">
          <div class="flex align-center justify-between">
            <!-- LOGO -->
            <div @click="home" class="cursor-pointer z-30">
              <v-img
                src="/uinn-logo.png"
                :width="70"
                :height="40"
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
            <div class="cursor-pointer" v-if="!$vuetify.breakpoint.mobile" @click="searchBar = true">
              <v-icon class="text-slate-900">mdi-magnify</v-icon>
            </div>

          
            <!-- SEARCH -->

            <!-- OPEN MENU -->
            <div
              class="cursor-pointer"
              v-if="$vuetify.breakpoint.mobile && !navigationDrawerState"
              @click="$store.commit('ui/setNavigationDrawerState', true)"
            >
              <v-icon class="text-slate-900">mdi-menu</v-icon>
            </div>
            <!-- OPEN MENU -->
          </div>
        </div>

           
      </v-container>

      <!-- <div v-if="searchBar" class="bg-white drop-shadow-xl absolute top-0 w-full z-50">
        <v-container>
          <div class="max-w-screen-xl mx-auto py-6">
            <div class="flex justify-between">
              <span>
                Search bar yay!
              </span>

                <div class="cursor-pointer" v-if="!$vuetify.breakpoint.mobile & searchBar" @click="searchBar = false">
              <v-icon class="text-slate-900">mdi-close</v-icon>
            </div>
            </div>
          </div>
        </v-container>
      </div> -->
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicesCard: false,
      searchBar: false,
      navItems: [
        {
          id: 2,
          title: "Inicio",
          href: "/",
        },
        {
          id: 3,
          title: "Nosotros",
          href: "/acerca_nuestro",
        },
        {
          id: 4,
          title: "Productos y servicios",
          href: null,
          hoverable: true,
          childrens: [
            {
              slug: "gestion-de-la-innovacion",
              title: "Gestión de la innovación",
              href: "/servicios/gestion-de-la-innovacion",
              img: 'https://apiuinnv2.uinn.cl/assets/992c1f78-fd89-493c-bcd7-d580fa3c85ec'
            },
            {
              slug: "desarrollo-de-ecosistemas",
              title: "Desarrollo de ecosistemas",
              href: "/servicios/desarrollo-de-ecosistemas",
              img: 'https://apiuinnv2.uinn.cl/assets/ce7f23d6-256d-424f-8194-466b41d7d40e'
            },
            {
              slug: "estrategia-transformacional",
              title: "Estrategia transformacional",
              href: "/servicios/estrategia-transformacional",
              img: 'https://apiuinnv2.uinn.cl/assets/a069fd9f-e324-4976-b5ff-6f704a110dde'
            },
          ],
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
        },
      ],
    };
  },
  methods: {
    async home() {
      await this.$store.dispatch("pages/loadPage", "inicio");

      this.$router.push("/");
    },
  },
  computed: {
    page() {
      return this.$store.getters["pages/activePage"];
    },
    is_page() {
      return this.$store.getters["ui/getActiveParentType"] == "page";
    },
    blank_page() {
      return this.$store.getters["ui/getActiveParentType"] == null;
    },
    // services() {
    //   return this.$store.getters["services/getServices"];
    // },
    // ui_settings() {
    //   return this.$store.getters["ui/getUiSettings"];
    // },
    navigationDrawerState() {
      return this.$store.getters["ui/getNavigationDrawerState"];
    },
  },
};
</script>

<style></style>

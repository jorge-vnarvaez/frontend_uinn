<template>
  <div>
    <nav
      class="shadow-lg fixed top-0 z-50 bg-white w-full"
    >
      <v-container class="px-0">
        <div class="max-w-screen-xl mx-auto" :style="{
          padding: $vuetify.breakpoint.mobile ? '0% 10%' : ''
        }">
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
    </nav>

    <!-- LIVE EVENT -->
    <!-- <div v-if="liveActivity">
      <InfoActivitiesLive :liveActivity="liveActivity" />
    </div> -->
    <!-- LIVE EVENT -->

    <!-- HEADER HERO -->
    <!-- <div v-if="is_page">
      <div
        v-if="page.header"
        :style="page.header.hero_image == null ? { height: '100vh' } : bg"
      >
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

              <NavSocialMediaContainer v-if="!$vuetify.breakpoint.mobile" parent_type="page" :icon_color_mode="page.header.icon_color_mode" />
            </v-container>
          </div>
        </div>
      </div>
    </div> -->
    <!-- HEADER HERO -->

    <!-- HEADER SERVICE -->
    <!-- <div v-if="!is_page && !blank_page">
      <NavServiceHeader />
    </div> -->
    <!-- HEADER SERVICE -->

    <!-- HERO IMAGE -->
    <!-- <div v-if="is_page">
      <div
        v-if="page.hero != null"
        :style="{
          backgroundColor: page.hero.bg_color,
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }"
      >
        <div
          class="max-w-screen-xl mx-auto"
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
    </div> -->
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
              slug: "estrategia-transformacional",
              title: "Estrategia transformacional",
              href: "/servicios/estrategia-transformacional",
            },
            // {
            //   slug: "seguimiento-estrategico",
            //   title: "Seguimiento estratégico",
            //   href: "/servicios/estrategia-organizacional",
            // },
            // {
            //   slug: "formacion-ejecutiva",
            //   title: "Formación ejecutiva",
            //   href: "/servicios/formacion-ejecutiva",
            // },
            {
              slug: "gestion-de-la-innovacion",
              title: "Gestión de la innovación",
              href: "/servicios/gestion-de-la-innovacion",
            },
            // {
            //   slug: "desarrollo-de-ecosistemas",
            //   title: "Desarrollo de ecosistemas",
            //   href: "/servicios/desarrollo-de-ecosistemas",
            // },
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

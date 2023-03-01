<template>
  <nav :style="bg" v-if="!$vuetify.breakpoint.mobile">
    <v-container>
      <div class="max-w-screen-xl mx-auto">
        <div class="flex align-center">
          <!-- Logo -->
          <nuxt-link to="/">
            <v-img
              src="/img/uinn_logo_w.png"
              width="75"
              height="40"
              contain
            ></v-img>
          </nuxt-link>
          <!-- Logo -->

          <!-- Menu -->
          <div
            class="flex space-x-20 justify-center align-center font-semibold"
          >
            <span
              class="text-white relative cursor-pointer"
              @mouseover="servicesCard = true"
            >
              Servicios
              <div
                v-if="servicesCard"
                class="absolute z-10 top-10 w-[250px] bg-white text-slate-700 rounded-lg shadow-md"
                @mouseover="servicesCard = true"
                @mouseleave="servicesCard = false"
              >
                <nuxt-link
                  v-for="(service, index) in services"
                  :key="service.id"
                  :class="[
                    'block',
                    'py-4',
                    'px-6',
                    'hover:text-white text-slate-700',
                    hoverColor(service.color),
                    index == 0 ? 'rounded-tr-lg rounded-tl-lg' : '',
                    index == services.length - 1
                      ? 'rounded-br-lg rounded-bl-lg'
                      : '',
                  ]"
                  :to="{ path: '/servicios/' + service.slug }"
                >
                    {{ service.title }}
                </nuxt-link>
              </div>
            </span>

            <nuxt-link
              v-for="item in navItems"
              :key="item.id"
              :to="item.href"
              class="text-white"
            >
              <span @mouseover="servicesCard = false">
                {{ item.title }}
              </span>
            </nuxt-link>
          </div>
          <!-- Menu -->

          <!-- Search -->
          <div>
            <span>Search</span>
          </div>
          <!-- Search -->
        </div>
      </div>
    </v-container>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      servicesCard: false,
      navItems: [
        {
          id: 2,
          title: "Noticias",
          href: "/noticias",
        },
        {
          id: 3,
          title: "Eventos",
          href: "/eventos",
        },
        {
          id: 4,
          title: "Aprende Innovación",
          href: "/aprende-innovacion",
        },
      ],
    };
  },
  methods: {
    hoverColor(service_color) {
      switch (service_color) {
        case "#4F46E5":
          return "hover:bg-indigo-600 hover:text-white";
        case "#10B981":
          return "hover:bg-emerald-500 hover:text-white";
        case "#E11D48":
          return "hover:bg-rose-600 hover:text-white";
        case "#475569":
          return "hover:bg-slate-600 hover:text-white";
      }
    },
  },
  computed: {
    bg() {
      return "background-color: " + this.$store.getters["ui/getActiveColor"];
    },
    services() {
      return this.$store.getters["services/getServices"];
    },
  },
};
</script>

<style></style>

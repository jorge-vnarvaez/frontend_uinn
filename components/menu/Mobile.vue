<template>
  <div v-if="drawer" class="fixed top-0 left-0 w-full h-full z-50">
    <div
      class="bg-white w-full max-w-md rounded-b-lg shadow-lg z-50"
      :style="ui_settings"
    >
      <v-container>
        <div class="flex justify-between align-center">
          <nuxt-link to="/">
            <v-img
              src="/uinn-logo.png"
              width="75"
              height="40"
              contain
              @click="$store.commit('ui/setNavigationDrawerState', false)"
            ></v-img>
          </nuxt-link>
          <v-icon @click="$store.commit('ui/setNavigationDrawerState', false)"
            >mdi-close</v-icon
          >
        </div>

        <div class="py-4">
          <v-divider></v-divider>
        </div>

        <div class="flex flex-col">
          <nuxt-link
            v-for="item in list"
            :key="item.id"
            :to="{ path: item.href }"
            class="pb-2"
          >
            <span
              class="text-slate-900"
              @click="$store.commit('ui/setNavigationDrawerState', false)"
              >{{ item.title }}</span
            >
          </nuxt-link>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    drawer() {
      return this.$store.getters["ui/getNavigationDrawerState"];
    },
    ui_settings() {
      return this.$store.getters["ui/getUiSettings"];
    },
  },
};
</script>

<style></style>

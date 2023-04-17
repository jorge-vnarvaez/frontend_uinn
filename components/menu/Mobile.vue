<template>
  <div v-if="drawer" class="fixed top-0 left-0 w-full h-full z-50">
    <div
      class="bg-white w-full max-w-screen-xl mx-auto rounded-b-lg shadow-lg z-50"
      :style="ui_settings"
    >
      <v-container class="px-0">
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
          <v-icon @click="$store.commit('ui/setNavigationDrawerState', false); parentActive = null"
            >mdi-close</v-icon
          >
        </div>

        <div class="py-4">
          <v-divider></v-divider>
        </div>

        <div v-if="parentActive">
          <div class="flex pb-4">
            <v-icon @click="parentActive = null">mdi-chevron-left</v-icon>
            <span class="block font-bold">{{ parent.title }}</span>
          </div>

          <v-divider></v-divider>

          <div class="pt-4" v-if="parent.childrens.length > 0">
            <div v-for="children in parent.childrens" :key="children.slug" class="py-2">
              <nuxt-link :to="children.href">
                <span class="block text-sm text-slate-500">{{ children.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div v-if="!parentActive" class="flex flex-col">
          <nuxt-link
            v-for="item in list"
            :key="item.id"
            :to="{ path: item.href }"
            class="pb-2"
          >
            <div class="flex justify-between">
              <span
                class="text-slate-900"
                @click="$store.commit('ui/setNavigationDrawerState', false)"
                >{{ item.title }}</span
              >

              <v-icon v-if="item.hoverable" @click="parentActive = item.id">mdi-chevron-down</v-icon>
              <v-icon v-if="item.hoverable && parentActive != null" @click="parentActive = null">mdi-chevron-up</v-icon>
            </div>
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
  data() {
    return {
      parentActive: null,
    }
  },
  computed: {
    parent() {
      return this.list.find((item) => item.id === this.parentActive);
    },
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

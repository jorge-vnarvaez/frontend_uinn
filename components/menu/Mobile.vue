<template>
  <div v-if="drawer" class="fixed top-0 left-0 w-full h-full z-50">
    <div
      class="bg-white w-full max-w-screen-xl mx-auto rounded-b-lg shadow-lg z-50"
      :style="{
        padding: $vuetify.breakpoint.mobile ? '0% 8%' : '',
      }"
    >
      <v-container class="px-0">
        <div class="flex justify-between align-center pb-4">

          <v-icon v-if="parentActive" @click="parentActive = null" class="pt-2" small color="black">mdi-chevron-left</v-icon>

          <nuxt-link to="/" v-if="parentActive == null">
            <v-img
              src="/uinn-logo.png"
              width="70"
              height="40"
              contain
              @click="$store.commit('ui/setNavigationDrawerState', false)"
            ></v-img>
          </nuxt-link>

          <div v-if="parentActive" class="pt-2">
            <!-- <v-icon @click="parentActive = null">mdi-chevron-left</v-icon> -->
            <span class="block font-bold uppercase">{{ parent.title }}</span>
          </div>

          <v-icon
          class="pt-2"
            small
            @click="
              $store.commit('ui/setNavigationDrawerState', false);
              parentActive = null;
            "
            color="black"
            >mdi-close</v-icon
          >
        </div>

        <div v-if="parentActive">
          <v-divider></v-divider>

          <div class="pt-4" v-if="parent.childrens.length > 0">
            <div
              v-for="children in parent.childrens"
              :key="children.slug"
              class="py-2"
                @click="
                  parentActive = null;
                  $store.commit('ui/setNavigationDrawerState', false);
                "
            >
              <nuxt-link
                :to="children.href"
              
              >
                <span class="block text-sm text-slate-800 uppercase">{{
                  children.title
                }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div v-if="!parentActive" class="flex flex-col">
          <div v-for="item in list" :key="item.id" class="py-2">
            <nuxt-link v-if="!item.hoverable" :to="item.href">
              <span
                class="text-slate-900"
                @click="$store.commit('ui/setNavigationDrawerState', false)"
                >{{ item.title }}</span
              >
            </nuxt-link>

            <div v-if="item.hoverable">
              <div class="flex justify-between">
                <span
                  class="text-slate-900"
                  @click="$store.commit('ui/setNavigationDrawerState', false)"
                  >{{ item.title }}</span
                >

                <v-icon v-if="item.hoverable" @click="parentActive = item.id"
                  >mdi-chevron-down</v-icon
                >
                <v-icon
                  v-if="item.hoverable && parentActive != null"
                  @click="parentActive = null"
                  >mdi-chevron-up</v-icon
                >
              </div>
            </div>
          </div>
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
    };
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

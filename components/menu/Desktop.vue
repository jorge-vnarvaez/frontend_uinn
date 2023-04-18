<template>
<div>
  <div class="flex space-x-20 justify-center align-center">
    <div v-for="item in list" :key="item.id">
      <nuxt-link v-if="!item.hoverable" :to="item.href" class="text-slate-900">
          <span>{{ item.title }}</span>
      </nuxt-link>

      <div v-if="item.hoverable">
          <div @mouseover="item.hoverable ? servicesCard = true : servicesCard = false">
          <span>{{ item.title }}</span>
          <div v-if="item.hoverable && servicesCard && item.hoverable" class="absolute bg-white shadow-2xl mt-6 z-10 top-10 rounded-lg" @mouseleave="servicesCard = false; childrenOnHover = null">
            <div class="px-4 py-2 rounded-lg" v-for="children in item.childrens" :key="children.slug">
              <nuxt-link :to="children.href" class="flex justify-between lg:space-x-6">
                <span  @mouseover="childrenOnHover = children.slug"  class="text-slate-900 hover:font-bold">
                  {{ children.title }}
                </span>

                <v-icon :class="[childrenOnHover == children.slug ? 'visible font-bold' : 'collapse']" small>mdi-arrow-top-right</v-icon>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Menu -->
</div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      childrenOnHover: false,
      servicesCard: false,
    };
  }
};
</script>

<style></style>

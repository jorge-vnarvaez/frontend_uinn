<template>
<div>
  <div class="flex space-x-20 justify-center align-center">
    <div v-for="item in list" :key="item.id">
      <nuxt-link v-if="!item.hoverable" :to="item.href" class="text-slate-900 cursor-pointer">
          <span @mouseover="servicesCard = false">{{ item.title }}</span>
      </nuxt-link>

      <div v-if="item.hoverable">
          <div @mouseover="item.hoverable ? servicesCard = true : servicesCard = false">
          <span>{{ item.title }}</span>
          <div v-if="item.hoverable && servicesCard && item.hoverable" 
          class="absolute bg-white shadow-2xl mt-6 z-10 top-10 w-[250px]" @mouseleave="servicesCard = false; childrenOnHover = null">
            <div class="px-4 cursor-pointer py-3 rounded-lg" v-for="children in item.childrens" :key="children.slug">
              <nuxt-link :to="children.href" class="flex justify-between lg:space-x-6 cursor-pointer">
                <span @mouseover="childrenOnHover = children.slug"  class="text-slate-900 hover:font-bold cursor-pointer">
                  {{ children.title }}
                </span>
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

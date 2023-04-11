<template>
  <div>
    <div
      class="flex space-x-20 justify-center align-center"
    >
      <nuxt-link
        v-for="item in list"
        :key="item.id"
        :to="item.href"
        class="text-slate-900"
      >
        <span @mouseover="servicesCard = false">
          {{ item.title }}
        </span>
      </nuxt-link>
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
};
</script>

<style></style>

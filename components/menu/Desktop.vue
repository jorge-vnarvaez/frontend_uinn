<template>
  <div>
    <div
      class="flex space-x-20 justify-center align-center font-semibold"
    >
      <nuxt-link
        v-for="item in list"
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

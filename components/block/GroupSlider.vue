<template>
  <v-row justify="space-between">
    <!-- <v-col cols="4" lg="2" class="bg-red-200">4 columnas</v-col>
    <v-col cols="3" lg="6" class="bg-green-200">3 columnas</v-col> -->

    <!-- <BlockComponent v-for="block in blocks" :key="block.id" :block="block"></BlockComponent> -->
  </v-row>
</template>

<script>
export default {
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>

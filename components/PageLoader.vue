<template>
  <div class="loader-container">
    <div class="flex flex-col align-center">
      <v-img src="/uinn-logo.png" width="80" height="40" contain ></v-img>

      <v-divider class="my-6"></v-divider>

      <span>
        Cargando {{ percentage }}%
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0,
    },
  }
};
</script>

<style>
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

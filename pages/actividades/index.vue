<template>
  <div class="py-32">
    <InfoActivitiesList />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("ui/setActiveParentType", null);
  },
};
</script>

<style></style>

<template>
  <div>
    <InfoHeroSection />

    <TypesServices />

    <TypesTestimonies />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'UINN - Unidad de Innovación',
    };
  },
  mounted() {
    this.$store.commit('ui/setActiveColor', '#000000');
  }
}
</script>

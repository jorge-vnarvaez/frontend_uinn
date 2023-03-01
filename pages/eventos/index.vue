<template>
  <div class="py-12">
    <InfoEventosFeatured />

    <InfoEventosList />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Eventos",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Eventos UINN",
        },
      ],
    };
  },
  async mounted() {
    this.$store.dispatch("eventos/loadEvents");
    this.$store.commit('ui/setActiveColor', '#000000');
  },
}
</script>

<style>

</style>
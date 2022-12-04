<template>
  <div>
    {{ noticias }}
  </div>
</template>

<script>
export default {
    async mounted() {
        this.$store.dispatch('noticias/loadNoticias');
    },
    computed: {
        noticias() {
            return this.$store.getters['noticias/getNoticias'];
        }
    }
}
</script>

<style>

</style>
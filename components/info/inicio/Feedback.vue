<template>
  <div class="max-w-screen-xl mx-auto py-20 px-0">
    <v-container class="p-0">
      <v-row>
        <InfoInicioTestimonies :testimonies="page.testimonies" />
        <InfoInicioClients :clients="page.clients" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    props: {
        page: {
            type: Object,
            default: () => {},
        },
    }
};
</script>

<style></style>

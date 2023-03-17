<template>
  <div>
    <v-img
      :src="$config.apiUrlV2 + '/assets/' + image"
      max-width="100%"
      height="auto"
      contain
    ></v-img>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  computed: {
    image() {
      return typeof(this.block.image) == 'string' ? this.block.image : this.block.image.id;
    },
  }
};
</script>

<style></style>

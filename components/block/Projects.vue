<template>
  <div id="projects-wrapper">
    <v-card
      width="650"
      min-width="450"
      elevation="0"
      v-for="project in block.projects"
      :key="project.id"
      class="mt-4 bg-white border border-slate-200 rounded-t-2xl"
    >
      <v-img
        v-if="project.featured_image"
        :src="$config.apiUrlV2 + '/assets/' + project.featured_image.id"
      ></v-img>

      <v-card-title class="px-8 pt-6 w-10/12 h-20">
        <span class="block text-xl font-medium text-slate-700 mb-4">{{
          project.title
        }}</span>
      </v-card-title>

      <v-card-subtitle class="px-8 py-6">
        <span class="block mb-12 text-slate-600">{{
          project.description
        }}</span>
      </v-card-subtitle>
    </v-card>
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
};
</script>

<style lang="postcss">
#projects-wrapper {
  @apply snap-x space-x-8;
  @apply pb-20;
  display: flex;
  overflow-x: scroll;
}

#projects-wrapper::-webkit-scrollbar {
  height: 8px;
}

#projects-wrapper::-webkit-scrollbar-track {
  background: #f1f5f9;
}
#projects-wrapper::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 5px;
  max-width: 100px;
}
</style>

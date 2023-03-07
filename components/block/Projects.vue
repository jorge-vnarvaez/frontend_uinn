<template>
  <div id="projects-wrapper">
    <v-card width="650" min-width="450" elevation="0" v-for="project in block.projects" :key="project.id" class="mt-4">
      <span class="block text-3xl font-medium text-slate-700 mb-4 h-20">{{ project.title }}</span>
      <span class="block mb-12 text-slate-600">{{ project.description }}</span>
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
  }
}
</script>

<style lang="postcss">
#projects-wrapper {
  @apply snap-x space-x-8;
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
<template>
    <div :class="block.size + ' ' + block.mobile_size + ' ' + block.align">
        <!-- TITLE AND TEXT -->
        <div v-if="['Title + Text'].includes(block.format)">
          <span class="block text-3xl mb-4 font-medium">{{ block.title }}</span>
          <span class="block text-2xl w-10/12 text-slate-700" v-html="block.description" :style="`color: ${block.text_color}`"></span>
        </div>
        <!-- TITLE AND TEXT -->

        <!-- IMAGE -->
        <div v-if="['Big Image'].includes(block.format)" class="py-14">
          <v-img
            :src="$config.apiUrlV2 + '/assets/' + block.image"
            height="200"
            contain
          ></v-img>
        </div>
        <!-- IMAGE -->

        <!-- FEATURE LIST -->
        <div v-if="['Features List'].includes(block.format)" class="grid grid-cols-12 lg:gap-x-20 pt-12">
          <span class="block text-2xl col-span-12 font-medium mb-4 text-slate-700">{{ block.title}}</span>
          <span class="block text-xl col-span-12 lg:col-span-6 mb-8 text-slate-600" v-html="block.description"></span>
          <div class="col-span-12 lg:col-span-6">
            <span
              class="block pb-2 text-slate-500"
              v-for="feature in block.features_list"
              :key="feature.id"
              >{{ feature.title }}</span
            >
          </div>
        </div>
        <!-- FEATURE LIST -->

        <!-- ICONO FEATURE -->
        <div v-if="['Feature Icon'].includes(block.format)" class="grid grid-cols-12 mt-12">
          <div
            v-for="feature in block.features_list"
            :key="feature.id"
            class="col-span-12 lg:col-span-4"
          >
            <span class="block text-2xl lg:h-24 w-7/12 font-medium text-slate-700 mt-8 lg:mt-0">{{feature.title}}</span>
            <span class="block w-8/12 text-slate-600" v-html="feature.description"></span>
          </div>
        </div>
        <!-- ICONO FEATURE -->

        <!-- PROJECTS SLIDE -->
        <div v-if="['Projects'].includes(block.format)">
          <span class="block text-4xl mb-4 text-neutral-800">Algunos de nuestros proyectos</span>

          <div id="projects-wrapper">
            <v-card width="650" min-width="450" elevation="0" v-for="project in block.projects" :key="project.id" class="mt-4">
              <span class="block text-3xl font-medium text-slate-700 mb-4">{{ project.title }}</span>
              <span class="block mb-12 text-slate-600">{{ project.description }}</span>
            </v-card>
          </div>
        </div>
        <!-- PROJECTS SLIDE -->

        <!-- PESTAÑAS -->
        <div v-if="['Tab'].includes(block.format)" class="mt-12 h-24">
            <span @click="$store.commit('tabs/setActiveTab', block.id)" :class="activeTabClass(block.id) + ' text-4xl cursor-pointer block'">{{ block.title }}</span>
        </div>
        <!-- PESTAÑAS -->

        <!-- GROUP -->
        <div v-if="['Group'].includes(block.format)">
          <div v-if="activeTab == block.parent_block">
              <span class="text-3xl text-slate-700" v-html="block.description"></span>
              <span class="text-xl text-slate-600">{{ block.detail }}</span>

              <div class="grid grid-cols-12">
                  <div
                  v-for="feature in block.features_list"
                  :key="feature.id"
                  class="col-span-12 lg:col-span-4"
                  >
                    <span class="block text-2xl lg:h-24 w-[250px] font-medium text-slate-700 mt-8 lg:mt-0">{{feature.title}}</span>
                    <span class="block w-8/12 text-slate-600 text-xl" v-html="feature.description"></span>
                </div>
              </div>
          </div>
        </div>
        <!-- GROUP -->
    </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      default: "default",
    },
  },
  computed: {
    activeTab() {
      return this.$store.getters['tabs/getActiveTab'];
    },
    activeTabClass() {
      return (id) => {
        return this.activeTab == id ? 'text-slate-800 font-medium' : 'text-slate-200';
      }
    }
  }
};
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

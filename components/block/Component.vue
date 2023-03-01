<template>
    <div :class="[block.mobile_size, block.size]">
        <div :class="[block.mobile_y_axis_padding, block.y_axis_padding, block.mobile_y_axis_margin, block.y_axis_margin]">
          <!-- TITLE AND TEXT -->
          <div v-if="['Title + Text'].includes(block.format)">

            <!-- DON'T REMOVE, THIS SPAN IS USED TO PRELOAD ALL FONT SIZES FROM TAILWIND CSS IN JIT MODE -->
            <span :class="[
              $data._xs_font_size,
              $data._small_font_size,
              $data._base_font_size,
              $data._large_font_size, 
              $data._extra_large_font_size, 
              $data._2_extra_large_font_size, 
              $data._3_extra_large_font_size, 
              $data._4_extra_large_font_size
            ]"></span> 
            <!-- DON'T REMOVE, THIS SPAN IS USED TO PRELOAD ALL FONT SIZES FROM TAILWIND CSS IN JIT MODE -->

            <span class="block mb-4 font-medium" :class="[block.mobile_title_font_size, block.title_font_size]">{{ block.title }}</span>
            <div class="block w-full lg:w-10/12" :class="[block.mobile_font_size, block.font_size]" v-html="block.description" :style="`color: ${block.text_color}`"></div>
            <span v-if="block.detail" class="text-slate-600" :class="[block.font_size]">{{ block.detail }}</span>
          </div>
          <!-- TITLE AND TEXT -->

          <!-- LABELS LIST -->
          <div v-if="['Labels'].includes(block.format)" class="flex flex-col lg:flex-row align-center lg:justify-center space-y-8 lg:space-y-0 lg:space-x-8 mt-12">
            <div v-for="label in block.labels_list" :key="label.id">
              <span class="text-3xl text-slate-700">{{ label.title }}</span>
            </div>
          </div>
          <!-- LABELS LIST -->

          <!-- IMAGE -->
          <div v-if="['Big Image'].includes(block.format)">
            <v-img
              :src="$config.apiUrlV2 + '/assets/' + block.image"
              max-width="100%"
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
              <div
                class="flex mb-4 text-slate-500"
                v-for="feature in block.features_list"
                :key="feature.id"
                >
                <font-awesome-icon icon="fa-solid fa-dash" class="w-10 h-4" />
                <span class="block w-96">{{ feature.title }}</span>
              </div>
            </div>
          </div>
          <!-- FEATURE LIST -->

          <!-- ICONO FEATURE -->
          <div v-if="['Feature Icon'].includes(block.format)" class="grid grid-cols-12 mt-12">
            <div
              v-for="feature in block.features_list"
              :key="feature.id"
              class="col-span-12 lg:col-span-4 flex flex-col align-center align-lg-start"
            >
              <div>
                <v-img v-if="feature.icon_image" :src="$config.apiUrlV2 + '/assets/' + feature.icon_image" height="105" width="85" contain></v-img>
              </div>
              <span class="block text-2xl lg:h-16 w-full lg:w-8/12 font-medium text-slate-700 mt-8 lg:mt-0 text-center text-lg-start">{{feature.title}}</span>
              <span class="block w-8/12 text-slate-600 text-center text-lg-start mt-4 mt-xl-4" v-html="feature.description"></span>
            </div>
          </div>
          <!-- ICONO FEATURE -->

          <!-- PROJECTS SLIDE -->
          <div v-if="['Projects'].includes(block.format)" class="py-10">
            <span class="block text-4xl mb-4 text-gray-900 font-medium">Algunos de nuestros proyectos</span>

            <div id="projects-wrapper">
              <v-card width="650" min-width="450" elevation="0" v-for="project in block.projects" :key="project.id" class="mt-4">
                <span class="block text-3xl font-medium text-slate-700 mb-4 h-20">{{ project.title }}</span>
                <span class="block mb-12 text-slate-600">{{ project.description }}</span>
              </v-card>
            </div>
          </div>
          <!-- PROJECTS SLIDE -->

          <!-- TAB -->
          <div v-if="['Tab'].includes(block.format)">
              <span 
              @click="setActiveTab(block.id)" 
              :class="activeTabClass(block.id) + ' ' + block.mobile_font_size + ' '  + block.font_size + ' cursor-pointer block'">
                {{ block.title }}
              </span>
          </div>
          <!-- TAB -->

          <!-- INNER TAB -->
          <div v-if="['Inner Tab'].includes(block.format)" class="mt-2">
            <div class="w-full">
              <span @click="setActiveInnerTab(block.id)" :class="activeInnerTabClass(block.id) + ' ' + block.mobile_font_size + ' '  + block.font_size + ' cursor-pointer block'">{{ block.title }}</span>
            </div>
          </div>
          <!-- INNER TAB -->

          <!-- GROUP -->
          <div v-if="['Group'].includes(block.format)">
            <div v-if="block.parent_block == null">
                <div class="grid grid-cols-12">
                    <BlockComponent  
                      v-for="child in block.childs"
                      :key="child.id" 
                      :block="child">
                    </BlockComponent>
                </div>
            </div>
            
            <!-- SUPERIOR GROUP TAB -->
            <div v-if="(activeTab == block.parent_block) && (block.parent_block != null)">
                <div class="grid grid-cols-12">
                    <BlockComponent  
                      v-for="child in block.childs"
                      :key="child.id" 
                      :block="child">
                    </BlockComponent>
                </div>
            </div>
            <!-- SUPERIOR GROUP TAB -->

            <!-- INFERIOR GROUP TAB -->
            <div v-if="(activeInnerTab == block.parent_block) && (block.parent_block != null)">
                <div class="grid grid-cols-12">
                    <BlockComponent  
                      v-for="child in block.childs"
                      :key="child.id" 
                      :block="child">
                    </BlockComponent>
                </div>
            </div>
            <!-- INFERIOR GROUP TAB -->
          </div>
          <!-- GROUP -->


          <!-- TEAM MEMBERS -->
          <div v-if="['Team Members'].includes(block.format)">
              <div class="grid grid-cols-12 lg:gap-x-16 gap-y-8">
                <div v-for="team_member in block.team_members" :key="team_member.id" class="col-span-12 lg:col-span-4">
                  <div class="w-full">
                      <v-img 
                      :src="$config.apiUrlV2 + '/assets/' + team_member.photo"
                      max-width="100%"
                      min-width="100%"
                      >
                      </v-img>
                  </div>

                  <span class="block mt-2 font-bold text-lg">{{ team_member.name }}</span>
                  <span class="block mb-4">{{ team_member.position }}</span>
                  
                  <div class="flex flex-col lg:flex-row lg:flex-wrap">
                    <div 
                        v-for="tag, index in team_member.tags" 
                        :key="tag.labels_id.id" >
                      <v-chip 
                        class="mr-4 mb-4"
                        outlined label  :color="index == 0 ? 'purple' : 'black'">
                        {{ tag.labels_id.title }}
                      </v-chip>
                    </div>
                  </div>
                </div>
              </div>  
          </div>
          <!-- TEAM MEMBERS -->
       </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      _xs_font_size: 'text-xs lg:text-xs',
      _small_font_size: 'text-sm lg:text-sm',
      _base_font_size: 'text-base lg:text-base',
      _large_font_size: 'text-lg lg:text-lg',
      _extra_large_font_size: 'text-xl lg:text-xl',
      _2_extra_large_font_size: 'text-2xl lg:text-2xl',
      _3_extra_large_font_size: 'text-3xl lg:text-3xl',
      _4_extra_large_font_size: 'text-4xl lg:text-4xl',
    }
  },
  props: {
    block: {
      type: Object,
      default: "default",
    },
  },
  methods: {
    setActiveTab(block_id) {
      this.$store.commit('tabs/setActiveInnerTab', null)
      this.$store.commit('tabs/setActiveTab', block_id)
    },
    setActiveInnerTab(block_id) {
      this.$store.commit('tabs/setActiveInnerTab', block_id)
    }
  },
  computed: {
    activeTab() {
      return this.$store.getters['tabs/getActiveTab'];
    },
    activeInnerTab() {
      return this.$store.getters['tabs/getActiveInnerTab'];
    },
    activeTabClass() {
      return (id) => {
        return this.activeTab == id ? 'text-slate-800 font-medium' : 'text-slate-300';
      }
    },
    activeInnerTabClass() {
      return (id) => {
        return this.activeInnerTab == id ? 'text-slate-800 font-medium' : 'text-slate-400';
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
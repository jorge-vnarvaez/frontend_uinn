<template>
    <v-col 
        :cols="block.mobile_size" 
        :lg="block.size"
        :offset="$vuetify.breakpoint.mobile ? 0: block.align == 'center' ? (12 - block.size) / 2 : 0"
        :align="block.align"
        :class="[
        block.mobile_y_axis_padding, 
        block.y_axis_padding,
        block.mobile_y_axis_margin,
        block.y_axis_margin,
        'pa-0'
        ]"
        :style="{ 
          'margin-right': $vuetify.breakpoint.mobile ? $getMarginValue(block.mobile_margin_right) : $getMarginValue(block.margin_right),
          'margin-bottom':$vuetify.breakpoint.mobile ? $getMarginValue(block.mobile_margin_bottom) : $getMarginValue(block.margin_bottom) }"
      >
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

            <BlockTitleText :block="block"></BlockTitleText>
        </div>
        <!-- TITLE AND TEXT -->

        <!-- BUTTON -->
        <div v-if="['Button'].includes(block.format)">
            <BlockButton :block="block"></BlockButton>
        </div>
        <!-- BUTTON -->

        <!-- LABELS LIST -->
        <div v-if="['Labels'].includes(block.format)" class="flex flex-col lg:flex-row align-center lg:justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div v-for="label in block.labels_list" :key="label.id">
            <BlockLabel :block="label"></BlockLabel>
          </div>
        </div>
        <!-- LABELS LIST -->

        <!-- IMAGE -->
        <div v-if="['Big Image'].includes(block.format)">
            <BlockImage :block="block"></BlockImage>
        </div>
        <!-- IMAGE -->

        <!-- FEATURE LIST -->
        <div v-if="['Features List'].includes(block.format)" class="grid grid-cols-12 lg:gap-x-20">
            <BlockFeatureList :block="block"></BlockFeatureList>
        </div>
        <!-- FEATURE LIST -->

        <!-- ICONO FEATURE -->
        <div v-if="['Feature Icon'].includes(block.format)" class="grid grid-cols-12 mt-6 gap-y-12 lg:gap-y-0">
            <BlockFeatureIcon :block="block"></BlockFeatureIcon>
        </div>
        <!-- ICONO FEATURE -->

        <!-- PROJECTS SLIDE -->
        <div v-if="['Projects'].includes(block.format)" class="py-10">
          <span class="block text-4xl mb-4 text-gray-900 font-medium">Algunos de nuestros proyectos</span>
          <BlockProjects :block="block"></BlockProjects>
        </div>
        <!-- PROJECTS SLIDE -->

          <!-- TAB -->
          <div v-if="['Tab'].includes(block.format)">
              <span 
              @click="setActiveTab(block.id)" 
              :class="[activeTabClass(block.id), block.mobile_font_size, block.font_size, 'cursor-pointer block']">
                {{ block.title }}
              </span>
          </div>
          <!-- TAB -->

          <!-- INNER TAB -->
          <div v-if="['Inner Tab'].includes(block.format)" class="mt-2">
              <span @click="setActiveInnerTab(block.id)" :class="activeInnerTabClass(block.id) + ' ' + block.mobile_font_size + ' '  + block.font_size + ' cursor-pointer block'">{{ block.title }}</span>
          </div>
          <!-- INNER TAB -->

          <!-- GROUP -->
          <div v-if="['Group'].includes(block.format)">
            <div v-if="!block.visibility">
                <v-container class="max-w-screen-xl mx-auto">
                    <v-row>
                      <BlockComponent  
                        v-for="child in block.childs"
                        :key="child.id" 
                        :block="child">
                      </BlockComponent>
                    </v-row>
                </v-container>
            </div>
            
            <!-- SUPERIOR GROUP TAB -->
            <div v-if="(activeTab == block.parent_block) && (block.parent_block != null) && (block.visibility)">
                <v-container class="max-w-screen-xl mx-auto">
                  <v-row :gutter="16">
                      <BlockComponent  
                        v-for="child in block.childs"
                        :key="child.id" 
                        :block="child">
                      </BlockComponent>
                  </v-row>
                </v-container>
            </div>
            <!-- SUPERIOR GROUP TAB -->

            <!-- INFERIOR GROUP TAB -->
            <div v-if="(activeInnerTab == block.parent_block) && (block.parent_block != null) && (block.visibility)">
                <v-container class="max-w-screen-xl mx-auto">
                  <v-row :gutter="16">
                    <BlockComponent  
                      v-for="child in block.childs"
                      :key="child.id" 
                      :block="child">
                    </BlockComponent>
                  </v-row>
                </v-container>
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
  </v-col>
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

</style>
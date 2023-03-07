<template>
  <div>
    <span v-if="block.title" class="block mb-4 font-medium" :class="[block.mobile_title_font_size, block.title_font_size]">{{ block.title }}</span>
    <div class="block" :class="[block.mobile_font_size, block.font_size]" v-html="block.description" :style="`color: ${block.text_color}`"></div>
    <span v-if="block.detail"  :class="[block.font_size, 'text-slate-700']">{{ block.detail }}</span>
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

<style>

</style>
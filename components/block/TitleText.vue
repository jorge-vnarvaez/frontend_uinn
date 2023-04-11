<template>
  <div class="flex flex-col justify-center">
    <span v-if="block.title" class="font-gotham block mb-4 font-medium" :class="[block.mobile_title_font_size, block.title_font_size]" :style="`color: ${block.text_color}`">{{ block.title }}</span>
    <div v-if="block.description" :class="['block', block.mobile_font_size, 'font-inter', block.font_size]" v-html="block.description" :style="`color: ${block.text_color}`"></div>
    <span v-if="block.detail"  :class="[block.font_size, 'font-inter',  'text-slate-700']">{{ block.detail }}</span>
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
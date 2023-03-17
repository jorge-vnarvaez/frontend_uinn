<template>
    <v-btn 
        :color="block.bg_color"  
        :to="{ path: block.link_to }" 
        :outlined="block.outlined"
        class="rounded-lg w-full capitalize"
    >
        <span :style="{ 'color': block.text_color}">{{ block.title }}</span>
    </v-btn>
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
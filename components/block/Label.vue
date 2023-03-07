<template>
    <span class="text-3xl text-slate-700">{{ block.title }}</span>
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
<template>
    <div>
        {{ groups }}
    </div>
</template>

<script>
export default {
    props: {
        groups: {
            type: Array,
            default: "default",
        },
    }
}
</script>

<style>

</style>
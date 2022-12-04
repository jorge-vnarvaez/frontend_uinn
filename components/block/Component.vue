<template>
    <div>
        <div v-if="['Title + Text'].includes(block.format)">
            <span class="block text-3xl mb-4 font-medium">{{ block.title }}</span>
            <span class="block text-2xl w-10/12" v-html="block.description"></span>
        </div>

        <div v-if="['Big Image'].includes(block.format)" class="py-14">
            <v-img :src="$config.apiUrlV2 + '/assets/' + block.image" height="400" contain></v-img>
        </div>

        <div v-if="['Features List'].includes(block.format)" class="grid grid-cols-12 gap-x-10">
            <span class="block text-2xl col-span-12 font-medium mb-4">{{ block.title }}</span>
            <span class="block text-xl col-span-6 mb-8" v-html="block.description"></span>
            <div class="col-span-6">
                <span class="block pb-2" v-for="feature in block.features_list" :key="feature.id">{{ feature.title }}</span>
            </div>
        </div>  

        <div v-if="['Icono Feature'].includes(block.format)" class="grid grid-cols-12 mt-12">
            <div v-for="feature in block.features_list" :key="feature.id" class="col-span-4 ">
                <span class="block text-2xl h-24 w-7/12 font-medium">{{ feature.title }}</span>
                <span class="block w-8/12" v-html="feature.description"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: 'default'
        }
    }
}
</script>

<style>

</style>
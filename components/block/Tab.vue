<template>
  <span
    @click="setActiveTab(block.id)"
    :class="[
      activeTabClass(block.id),
      block.mobile_font_size,
      block.font_size,
      'cursor-pointer block',
    ]"
  >
    {{ block.title }}
  </span>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setActiveTab(block_id) {
      this.$store.commit("tabs/setActiveInnerTab", null);
      this.$store.commit("tabs/setActiveTab", block_id);
    },
  },
  computed: {
    activeTab() {
      return this.$store.getters["tabs/getActiveTab"];
    },
    activeTabClass() {
      return (id) => {
        return this.activeTab == id
          ? "text-slate-800 font-medium"
          : "text-slate-300";
      };
    },
  },
};
</script>

<style></style>

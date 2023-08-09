<template>
  <div
    :class="[
      'relative my-2 px-4 py-2 cursor-pointer',
      irrelevant ? 'bg-blue-900' : 'bg-[#27AAA6]',
      activeMission == null ? 'opacity-100' : opacity(foco.winner_mision_id),
      activeMission == null ? 'cursor-pointer' : cursor_status(foco.winner_mision_id),
    ]"
    @mouseover="activeFoco = foco.winner_id"
    @mouseleave="activeFoco = null"
  >
    <span :class="['text-sm text-white font-bold']">{{ foco.winner_title }}</span>

    <TypesGamificacionStadistic
      v-if="activeFoco == foco.winner_id"
      :foco_data="foco"
      :index="index"
      :irrelevant="irrelevant"
    ></TypesGamificacionStadistic>
  </div>
</template>

<script>
export default {
  props: {
    activeProvince: {
      type: String,
      default: null,
    },
    activeMission: {
      type: String,
      default: null,
    },
    foco: {
      type: Object,
      default: null,
    },
    irrelevant: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      activeFoco: null
    }
  },
  methods: {
    opacity(mission_id) {
      if (this.activeMission == mission_id) {
        return "opacity-100";
      } else {
        return "opacity-50";
      }
    },
    cursor_status(mission_id) {
      if (this.activeMission == mission_id) {
        return "cursor-pointer";
      } else {
        return "cursor-not-allowed";
      }
    },
  },
};
</script>

<style></style>                                                                                                                               
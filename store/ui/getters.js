export default {
    getUiSettings(state) {
        return state.ui_settings
    },
    getActiveColor(state) {
        return state.active_bg_color
    },
    getActiveHeroImage(state) {
        return state.active_bg_hero_image
    },
    getActiveParentType(state) {
        return state.active_parent_type
    },
    getIndexHeroImage(state) {
        return state.index_bg_hero_image
    },
    getNavigationDrawerState(state) {
        return state.navigation_drawer
    }
}
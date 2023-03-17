export default {
    setUiSettings(state, settings) {
        state.ui_settings = settings
    },
    setActiveColor(state, color) {
        state.active_bg_color = color
    },
    setActiveHeroImage(state, image) {
        state.active_bg_hero_image = null
        state.active_bg_hero_image = image
    },
    setActiveParentType(state, type) {
        state.active_parent_type = type
    },
    setIndexHeroImage(state, image) {
        state.index_bg_hero_image = image
    },
    setNavigationDrawerState(state, value) {
        state.navigation_drawer = value
    }
}
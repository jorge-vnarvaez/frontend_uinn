export default {
    async loadUiSettings({ commit }) {
        const route = '/items/ui_settings';
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const { data } = await fetch(fetchString).then((res) => res.json());

        commit('setUiSettings', data);
    },
}
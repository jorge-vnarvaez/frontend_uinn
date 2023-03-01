export default {
    async loadServices({ commit }) {
        let route = '/items/services'

        let fetchString = `${this.$config.apiUrlV2}${route}`

        const { data } = await fetch(fetchString).then(res => res.json())

        commit('setServices', { data: data })
    }
}
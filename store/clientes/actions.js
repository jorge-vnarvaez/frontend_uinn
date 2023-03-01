export default {
    async loadFeaturedClients({ commit }) {
        let route = '/items/clients'
        let params = this.$objectToQueryString({
            fields: ['*.*'],
            filter: {
                is_featured: {
                    _eq: true
                }
            }
        })

        let fetchString = `${this.$config.apiUrlV2}${route}?${params}`

        const { data } = await fetch(fetchString).then(res => res.json())

        commit('updateFeaturedClients', { data: data })
    }
}
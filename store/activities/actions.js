export default {
    async loadActivities({ commit }) {
        let route = '/items/activities'
        let params = this.$objectToQueryString({
            fields: ['*.*'],
            sort: ['-date_published']
        })

        let fetchString = `${this.$config.apiUrlV2}${route}?${params}`

        const { data } = await fetch(fetchString).then(res => res.json())


        commit('setActivities', { data: data })

    }
}
export default {
    async loadNoticias({ commit }) {
    
        let route = '/items/posts'
        let params = this.$objectToQueryString({
            fields: ['*.*'],
            sort: ['-date_created']
        })

        let fetchString = `${this.$config.apiUrlV2}${route}?${params}`

        const { data } = await fetch(fetchString).then(res => res.json())


        commit('updateNoticias', { data: data })

    }
}
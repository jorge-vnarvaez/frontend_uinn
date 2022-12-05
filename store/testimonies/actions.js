export default {
    async loadTestimonies({ commit }) {
        let route = '/items/testimonies'
        let params = this.$objectToQueryString({
            fields: [
                'image',
                'testimony', 
                'person_name', 
                'person_position', 
                'client.name',
                'client.logo',
            ],
            sort: ['-date_created']
        })

        let fetchString = `${this.$config.apiUrlV2}${route}?${params}`

        const { data } = await fetch(fetchString).then(res => res.json())


        commit('setTestimonies', { data: data })
    }
}
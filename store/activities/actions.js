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

    },
    async liveActivity({ commit }) {
        let route = '/items/activities'

        let fetchString = `${this.$config.apiUrlV2}${route}`

        const { data } = await fetch(fetchString).then(res => res.json())

        // filter event that date_start is now minus 1 hour
        const today = new Date().getTime()


        const liveActivity = data.filter((event) => {
            // parse to unix timestamp
            const dateStart = new Date(event.date_start).getTime()
            const dateEnd = new Date(event.date_end).getTime()

            return today >= dateStart && today <= dateEnd
        })

        console.log(liveActivity)

        commit('updateLiveActivity', { data: liveActivity })
    }
}
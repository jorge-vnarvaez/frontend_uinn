export default {
    async loadEvents({ commit }) {
        let route = '/events'

        let fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('updateEvents', { data: data })
    },
    async liveEvent({ commit }) {
        let route = '/events'

        let fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        // filter event that date_start is now minus 1 hour
        const today = new Date() - 3600000

        const liveEvent = data.filter((event) => {
            const dateStart = event.date_start + 10800000
            const dateEnd = event.date_end + 10800000
            return today >= dateStart && today <= dateEnd
        })

        commit('updateLiveEvent', { data: liveEvent })
    }
}
export default {
    async loadNParticipantes({ commit }) {
        const route = '/ranking/n_participantes'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setNParticipantes', data)
    },
    async loadNMatches({ commit }) {
        const route = '/ranking/n_matches'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setNMatches', data)
    },
    async loadTfParticipantes({ commit }) {
        const route = '/ranking/tf_participantes'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setTfParticipantes', data)
    },
    async loadTfParticipantesEdad({ commit }) {
        const route = '/ranking/tf_edad_participantes'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setTfParticipantesEdad', data)
    },
    async loadTfProvincias({ commit }) {
        const route = '/ranking/tf_provincias'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setTfProvincias', data)
    },
    async loadTfParticipantesSector({ commit }) {
        const route = '/ranking/tf_participantes_por_sector'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setTfParticipantesSector', data)
    },
    async getRankingByGender({ commit }) {
        const route = '/ranking/ranking_by_gender'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setRankingByGender', data)
    },
    async getRankingBySector({ commit }) {
        const route = '/ranking/ranking_by_sector'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setRankingBySector', data)
    },
    async getRankingByUbicacion({ commit }) {
        const route = '/ranking/ranking_by_ubicacion'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setRankingByUbicacion', data)
    },
    async loadRanking({ commit }) {
        const route = '/ranking'
        const fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString).then(res => res.json())

        commit('setRanking', data)
    }
}
export default {
    async loadSectores({ commit }) {
        let route = '/items/sectores'
        let params = this.$objectToQueryString({
            fields: ['id', 'name'],
            sort: ['id']
        })

        let fetchString = `${this.$config.apiUrlV2}${route}?${params}`

        const { data } = await fetch(fetchString).then(res => res.json())

        commit('setSectores', { data })
    },
    async fetchCombinations({ commit }) {
        let route = '/gamificacion/generate_combinations'
        let fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.$cookies.get('gec_user_id')
            })

        }).then(res => res.json())

        commit('setCombinations', { data })
    },
    async fetchCombinationsPlayed({ commit }) {
        let route = '/gamificacion/combinations_played'
        let fetchString = `${this.$config.apiUrlV2}${route}`

        const data = await fetch(fetchString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.$cookies.get('gec_user_id')
            })

        }).then(res => res.json())

        commit('setCombinationsPlayed', data)
    },
    async submitMatch({ commit }, { winner_id, loser_id, user, pair }) {
        let route = '/gamificacion/new_match'
        let fetchString = `${this.$config.apiUrlV2}${route}`

        let body = {
            id: user,
            winner_id,
            loser_id,
            pair: pair
        }

        const data = await fetch(fetchString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        return data
    }
}
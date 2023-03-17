export default {
    async loadTeamMembers({ commit }) {

        const route = '/items/team_members'

        const fetchString = `${this.$config.apiUrlV2}${route}`

        const { data } = await fetch(fetchString).then(res => res.json())

        commit('setTeamMembers', data)
    }
}
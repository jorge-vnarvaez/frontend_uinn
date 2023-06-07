export default {
    async loadPage({ commit }, page) {

        let route = '/items/pages'
        let params = this.$objectToQueryString({
            fields: [
                '*.*',
                "sections.sections_id.*",
                "sections.sections_id.blocks.*.*.*.*.*",
                "blocks.childs.*.*",
                // 'blocks.team_members.name',
                // 'blocks.team_members.position',
                // 'blocks.team_members.email',
                // 'blocks.team_members.photo',
                // 'blocks.team_members.tags.labels_id.id',
                // 'blocks.team_members.tags.labels_id.title',
                // "clients.*"
            ],
            filter: {
                slug: {
                    _eq: page
                }
            }
        })

        let fetchString = `${this.$config.apiUrlV2}${route}?${params}`

        const { data } = await fetch(fetchString).then(res => res.json())


        commit('setCurrentPage', data)
    }
}
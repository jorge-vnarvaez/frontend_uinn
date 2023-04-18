export default {
    async loadSocialMediaObject({ commit }) {
        let route = '/items/social_media'

        let fetchString = `${this.$config.apiUrlV2}${route}`

        const { data } = await fetch(fetchString).then(res => res.json())

        commit('setSocialMediaObject', { data: data })
    }
}
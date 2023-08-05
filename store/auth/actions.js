export default {
    async userExists({ commit }, email) {
        let route = '/gamificacion/user/exists'
        let query = `?email=${email}`
        let fetchString = `${this.$config.apiUrlV2}${route}${query}`

        const response = await fetch(fetchString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())

        return response
    },

    async createUser({ commit, dispatch }, credentials) {
        let route = '/users'
        let fetchString = `${this.$config.apiUrlV2}${route}`

        const response = await fetch(fetchString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
                nombre_completo: credentials?.name,
                genero: credentials?.genero,
                sector: credentials?.sector,
                fecha_nacimiento: credentials?.date_birth,
                habitante_de_coronel: credentials?.habitante
            })
        })

        dispatch('login', credentials)
    },
    async login({ commit, dispatch }, credentials) {
        let route = '/auth/login'
        let fetchString = `${this.$config.apiUrlV2}${route}`

        // Login the user
        const response = await fetch(fetchString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        }).then((res) => res.json())

        dispatch('current', response?.data?.access_token)
    },
    async current ({ commit, $cookies }, access_token) {
        let route = '/users/me'

        let fetchString = `${this.$config.apiUrlV2}${route}`

        const response = await fetch(fetchString, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        }).then((res) => res.json())

        this.$cookies.set('gec_access_token', access_token)
        this.$cookies.set('gec_user_id', response?.data?.id)
    }
}
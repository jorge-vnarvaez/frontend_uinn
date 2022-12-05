export default {
    getTestimonies(state) {
        return state.testimonies
    },
    getLastTestimony(state) {
        return state.testimonies[0]
    },
    getClientsWithTestimonies(state) {
        return state.testimonies.map(testimony => testimony.client)
    }
}
export default {
    getTestimonies(state) {
        return state.testimonies
    },
    getLastTestimony(state) {
        return state.testimonies[0]
    },
}
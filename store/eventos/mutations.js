export default {
    updateEvents(state, { data }) {
        state.events = data.slice(1, data.length)
        state.featuredEvent = data[0]
    },
    updateLiveEvent(state, { data }) {
        state.liveEvent = data[0]
    }
}
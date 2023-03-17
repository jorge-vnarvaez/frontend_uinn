export default {
    setServices(state, { data }) {
        state.services = data
    },
    setCurrentService(state, service) {
        state.currentService = service
    }
}
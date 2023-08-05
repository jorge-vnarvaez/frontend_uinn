export default {
    setSectores(state, { data }) {
        state.sectores = data
    },
    setCombinations(state, { data }) {
        state.combinations = data
    },
    setCombinationsPlayed(state, data) {
        state.combinationsPlayed = data.combinations
    },
    removeCombination(state, index) {
        state.combinations = state.combinations.splice(index, 1)
    }
}
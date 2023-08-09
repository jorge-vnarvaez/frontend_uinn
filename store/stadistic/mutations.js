export default {
    setNParticipantes(state, data) {
        state.nParticipantes = data
    },
    setNMatches(state, data) {
        state.nMatches = data
    },
    setTfParticipantes(state, data) {
        state.tf_participantes = data
    },
    setTfParticipantesEdad(state, data) {
        state.tf_participantes_edad = data
    },
    setTfProvincias(state, data) {
        state.tf_provincias = data
    },
    setTfParticipantesSector(state, data) {
        state.tf_participantes_sector = data
    },
    setRankingByGender(state, data) {
        state.rankingByGender = data
    },
    setRankingBySector(state, data) {
        state.rankingBySector = data
    },
    setRankingByUbicacion(state, data) {
        state.rankingByUbicacion = data
    },
    setRanking(state, data) {
        state.ranking = data
    }
}
export default {
    updateNoticias(state, { data }){
      state.noticias = data.slice(1, data.length)
      state.featuredNotice = data[0]
    },
}
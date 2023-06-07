export default ({ app, $vuetify }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('getMarginValue', (value) => {
      return value
    })

    inject('getPaddingValue', (value) => {
        return value
    })
  }
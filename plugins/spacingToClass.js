export default ({ app, $vuetify }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('getMarginValue', (value) => {
      return value
    })
    inject('getPaddingValue', (value) => {
        return value
    })
    inject('generalPadding', (value) => {
        if($vuetify.breakpoint.mobile) {
          return '0% 10%'
        } else {
          if($vuetify.breakpoint.width == 1280) {
            return '0% 5%'
          } 
          else if ($vuetify.breakpoint.width == 1440) {
            return '0% 10%'
          }
          else if ($vuetify.breakpoint.width == 1366) {
            return '0% 8%'
          }
          else {
            return '0% 0%'
          }
        }
    })
    inject('sectionHeight', (full_height) => {
      if($vuetify.breakpoint.mobile) {
        return '100%'
      } else {
        if(full_height) {
          return '100vh'
        } else {
          return 'auto'
        }
      }
    })
  }
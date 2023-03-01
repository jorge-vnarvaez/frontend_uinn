export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('spacingToClass', className => {
      switch(className) {
        case 'py-0':
            return 'py-0 lg:py-0';
        case 'py-1':
            return 'py-1 lg:py-1';
        case 'py-2':
            return 'py-2 lg:py-2';
        case 'py-3':
            return 'py-3 lg:py-3';
        case 'py-4':
            return 'py-4 lg:py-4';
        case 'py-5':
            return 'py-5 lg:py-5';
        case 'py-6':
            return 'py-6 lg:py-6';
        case 'py-7':
            return 'py-7 lg:py-7';
        case 'py-8':
            return 'py-8 lg:py-8';
      }
    })
  }
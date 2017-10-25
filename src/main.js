// Uncomment to use your own custom styles
require('./sass/custom.scss')
// OR
// Use the default vueable component styles
// require(`vueable/dist/production/default.css`)

import Vue from 'vue'
import App from './App'
import router from './router'
import Vueable from 'vueable'
import * as components from 'vueable'

Vue.use(Vueable, { components })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})

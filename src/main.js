// Uncomment to use your own custom styles
// require('./sass/custom.scss')
// OR
// Use the default vueable component styles
require(`vueable/dist/production/default.css`)


import Vue from 'vue'
import App from './App'
import router from './router'
import Vueable from 'vueable'


Vue.use(Vueable, { /* options */ })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

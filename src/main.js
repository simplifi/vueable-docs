import Vue from 'vue'
import App from './App'
import router from './router'
import Vueable from 'vueable'

Vue.use(Vueable, { /* options */ })

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router
})

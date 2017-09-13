import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Alert from '@/components/Alert'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { name: 'index', path: '/', component: Home },
    { name: 'alert', path: '/alert', component: Alert },
    { path: '*', redirect: { name: 'index' } }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Alert from '@/components/Alert'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index,
      redirect: { name: 'home' },
      children: [
        { name: 'home', path: '', component: Home },
        { name: 'alert', path: 'alert', component: Alert }
      ]
    },
    { path: '*', redirect: { name: 'index' } }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import project from '@/components/project/project'
import top from '@/components/top/top'
import details from '@/components/details/details'
import discuss from '@/components/discuss/discuss'
import home from '@/components/home/home'
import buy from '@/components/buy/buy'
import store from '@/components/store/store'
import back from '@/components/back/back'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/project'
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/id/:id',
      name: 'details',
      component: details
    },
    {
      path: '/discuss',
      name: 'discuss',
      component: discuss
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/back',
      name: 'back',
      component: back
    }
  ]
})

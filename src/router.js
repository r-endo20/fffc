import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: "",
  routes: [{
      path: '/',
      name: 'mainpage',
      component: () => import('./views/Mainpage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
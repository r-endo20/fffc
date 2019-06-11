import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: "",
  routes: [{
      path: '/gatherer',
      name: 'gatherer',
      component: () => import('./views/GathererLevel.vue')
    },

    {

      path: '/battle',
      name: 'battle',
      component: () => import('./views/BattleLevel.vue')
    },
    {
      path: '/updateview',
      name: 'updateview',
      component: () => import('./views/Updateview.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }, {
      path: '/history',
      name: 'history',
      component: () => import('./views/UpdateHistory.vue')
    },
    {
      path: '/',
      name: 'level',
      component: () => import('./views/Level.vue')
    }
  ]
})
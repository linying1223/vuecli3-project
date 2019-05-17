import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      redirect: '/order',
      children: [
        {
          path: '/order',
          name: 'order',
          component: resolve => require(['@/views/order'], resolve)
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login'], resolve)
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import storage from '@/utils/storage'

Vue.use(Router)

let router = new Router({
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
    },
    {
      path: '*',
      name: 'notFound',
      component: resolve => require(['@/views/notFound'], resolve)
    }
  ]
})
// 判断是否登录
router.beforeEach((to, from, next) => {
  // to.name !== 'login' 不写该条件将陷入死循环
  if (!(storage && storage.get('token')) && to.name !== 'login') {
    next({
      name: 'login',
      path: '/'
    })
  } else {
    next()
  }
})
export default router
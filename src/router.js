import Vue from 'vue'
import Router from 'vue-router'
import storage from '@/utils/storage'

Vue.use(Router)

// 动态路由
const routerList = []
function importAll(r) {
  r.keys().forEach(
    (key) => routerList.push(r(key).default)
  )
}
importAll(require.context('.', true, /\.routes\.js/))

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login'], resolve)
    },
    ...routerList,
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
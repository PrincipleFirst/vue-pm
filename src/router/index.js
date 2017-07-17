import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from 'pages/login/login'
import Projects from 'pages/projects/projects'

Vue.use(Router)

const routes = {
  mode: 'history',
  routes: [
    {
      path: '/projects',
      meta: {
        requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Projects,
      alias: '/' || '/projects'
    },
    {
      path: '/login',
      component: Login
    }
  ]
}

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router

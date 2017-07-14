import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/login'
import Projects from 'pages/projects/projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/projects',
      component: Projects,
      alias: '/' || '/projects'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('pages/login/login')), 'login')
// const Login = (resolve) => {
//   import('pages/login/login').then((module) => {
//     resolve(module)
//   })
// }
const Home = r => require.ensure([], () => r(require('pages/home/home')), 'home')
// const Home = (resolve) => {
//   import('pages/home/home').then((module) => {
//     resolve(module)
//   })
// }

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/login'
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/home',
      component: Home
    }
  ]}
)

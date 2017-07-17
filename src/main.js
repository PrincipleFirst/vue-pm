import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import axios from 'common/js/http'
import store from 'store'
import router from 'router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import first from './components/first'
import second from './components/second'

Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: '/first',
      component: first
    },
    {
      path: '/second',
      component: second
    }
  ]
})

Vue.use(Router)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

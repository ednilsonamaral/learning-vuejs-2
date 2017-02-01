import Vue from 'vue'
import App from './App'
import router from './router/'
// import store from './vuex/'

/* eslint-disable no-new */
new Vue({
  router, // router: router
  // store, // store: store
  el: '#app',
  render: h => h(App)
})

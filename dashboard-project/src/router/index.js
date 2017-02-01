import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// Chamando o vue-router
Vue.use(VueRouter)

// Iniciar o processo do vue-router
const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
})

export default router

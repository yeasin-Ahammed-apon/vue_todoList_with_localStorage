import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import To from '../views/To.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/todo',
    name: 'To',
    component: To
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

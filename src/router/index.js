import Vue from 'vue'
import VueRouter from 'vue-router'
import To from '../views/To.vue'
import Member from "../views/Members.vue"
import Problems from "../views/Problems.vue"
import Web from '../views/Web.vue'

Vue.use(VueRouter)

const routes = [ 
  {
    path: '/',
    name: 'Problems',
    component: Problems
  },  
  {
    path: '/todo',
    name: 'To',
    component: To
  }, 
  {
    path: '/member_list',
    name: 'Member',
    component: Member
  }
  , 
  {
    path: '/web',
    name: 'Web',
    component: Web
  }, 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

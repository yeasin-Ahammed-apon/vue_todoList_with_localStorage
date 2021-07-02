import Vue from 'vue'
import VueRouter from 'vue-router'
import To from '../views/To.vue'
import Member from "../views/Members.vue"
import Problems from "../views/Problems.vue"

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
  }, 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

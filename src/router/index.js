import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/person/:id',
    name: 'Person',
    component: () => import('@/views/Person'),
  },
  {
    path: '/portfolio/:id',
    name: 'Portfolio',
    component: () => import('@/views/Portfolio')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

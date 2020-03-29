import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: [
        { name: 'Home' }
      ]
    }
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../components/UserDetails.vue'),
    props: true,
    meta: {
      breadcrumb: [
        { name: 'Home', link: '/' },
        { 
          name: user => user.first_name, 
          bcGetter: 'getUserById'
        }
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

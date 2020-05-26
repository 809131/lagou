import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import List from '../views/List'
import Movie from '../views/Movie'
import User from '../views/User'
import Login from '../views/Login'
import Register from '../views/Register'
import Detail from '../views/Detail'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/movie',
    component: Movie
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

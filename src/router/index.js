import Vue from 'vue'
import VueRouter from 'vue-router'
const UserView = () => import('@/views/UserView');
const Login = () => import('@/views/Login');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Usuários',
    component: UserView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

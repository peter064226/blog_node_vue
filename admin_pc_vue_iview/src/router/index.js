import Vue from 'vue'
import VueRouter from 'vue-router'
import AddBlog from '../views/AddBlog.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/blogs'
  },
  {
    path: '/addBlog/:blogId?',
    name: 'AddBlog',
    component: AddBlog
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blogs.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router

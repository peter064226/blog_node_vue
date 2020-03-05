import Vue from 'vue'
import VueRouter from 'vue-router'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Blogs
  },
  {
    path: '/blogs/:typeId?',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router

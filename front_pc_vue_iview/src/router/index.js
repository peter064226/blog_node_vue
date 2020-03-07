import Vue from 'vue'
import VueRouter from 'vue-router'
// import Blogs from '../views/Blogs.vue'
// import Blog from '../views/Blog.vue'
// import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Blogs,
    component: () => import(/* webpackChunkName: "blogs" */ '../views/Blogs.vue')
  },
  {
    path: '/blogs/:typeId?',
    name: 'blogs',
    // component: Blogs,
    component: () => import(/* webpackChunkName: "blogs" */ '../views/Blogs.vue')
  },
  {
    path: '/blog/:id',
    name: 'blog',
    // component: Blog,
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    // component: Login,
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router

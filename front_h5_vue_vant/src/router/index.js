import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Type from '../views/Type.vue'
import Blog from '../views/Blog.vue'
import Tabbars from '../components/Tabbars.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Tabbars',
    component:Tabbars,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/type',
        name: 'Type',
        component: Type
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
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: Blog
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router

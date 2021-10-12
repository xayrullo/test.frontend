import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Home
  },
  {
    path: '/comments',
    name: 'Comments',
    component: () => import('../views/Comments.vue')
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import('../views/Todos.vue')
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import('../views/Photos.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    children: [
      {
        path: '',
        name: 'users-list',
        component: () => import('../views/Users/index.vue')
      },
      {
        path: ':childId',
        name: 'user-detail',
        component: () => import('../views/Users/_index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

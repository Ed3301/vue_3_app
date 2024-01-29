import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Article from '../views/admin/Article.vue'
import AddArticle from '../views/admin/AddArticle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (News.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/News.vue')
    },
    {
      path: '/article/:id',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (Article.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Article.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/article/:id',
      name: 'edit_article',
      component: Article,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/article/add',
      name: 'add_article',
      component: AddArticle,
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFound
    }
  ]
})

export default router

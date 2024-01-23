import { createRouter, createWebHistory } from 'vue-router'
import Routing from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      meta: {
        title: 'IMSOUND || Каталог'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/CatalogPage.vue')
    },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   meta: {
    //     title: 'IMSOUND || Корзина'
    //   },
    //   component: () => import('../pages/CartPage.vue')
    
    // }
  ]})

  router.beforeEach((to, from) => {
    document.title = to.meta?.title  as string ?? 'IMSOUND'
  })

export default router;

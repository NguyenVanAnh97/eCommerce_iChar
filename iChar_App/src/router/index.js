import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/Product_Details_View.vue'
import CartView from '../views/CartView.vue'
import Service_Us from '@/views/Service_Us.vue'
import Contact_Us from '@/views/Contact_Us.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: HomeView
    }
    ,
    {
      path: '/product/:id',
      name: 'Product',
      component: ProductDetailView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView
    },
    {
      path: '/services',
      name: 'services',
      component: Service_Us
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact_Us
    }
  ]
})

export default router

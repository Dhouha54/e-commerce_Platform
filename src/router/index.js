import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import CategoryDisplay from '../views/Category/CategoryDisplay.vue'
import WishItems from '../views/WishItems.vue'
import ShoppingBascket from '../views/ShoppingBascket.vue'
import LoginRegister from "../views/LoginRegister.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'CategoryDisplay',
    component: CategoryDisplay
  },
  {
    path: '/wishes',
    name: 'wishesItems',
    component: WishItems
  },
  {
    path: '/shopping/bascket',
    name: 'shopping_bascket',
    component: ShoppingBascket
  },
  {
    path: '/LoginRegister',
    name: 'LoginRegister',
    component: LoginRegister
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

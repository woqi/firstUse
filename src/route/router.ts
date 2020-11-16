import { createWebHashHistory, createRouter } from 'vue-router'
import Woqi from '../components/Woqi.vue'
import Woqi2 from '../components/Woqi2.vue'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Woqi
    }, {
      path: '/x',
      component: Woqi2
    }]
})

export default router 
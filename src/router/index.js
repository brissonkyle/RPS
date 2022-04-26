import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import GameView from '@/views/GameView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/LoginView.vue',
    name: 'login',
    component: LoginView
  },
  {
    path: '/@/views/GameView.vue',
    name: 'game',
    component: GameView
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    //重定向
    { path: '/', redirect: '/login' },
    //登录的路由规则
    { path: '/login', component: Login },
    { path: '/home', component: Home}
  ]
})

export default router

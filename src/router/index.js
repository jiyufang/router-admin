import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    //重定向
    { path: '/', redirect: '/login' },
    //登录的路由规则
    { path: '/login', component: Login },
    {
      path: '/home', component: Home, children: [
        { path: 'users', component: Users },
        { path: 'rights', component: Rights },
        { path: 'goods', component: Goods },
        { path: 'orders', component: Orders },
        { path: 'settings', component: Settings },
        
    ] }
  ]
})

// 全局前置守卫
router.beforeEach(function (to, from, next) {
  // 如果跳转的页面为home 先判断有无token
  if (to.path === '/home') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router

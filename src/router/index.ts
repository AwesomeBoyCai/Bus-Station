import { createRouter, createWebHistory } from 'vue-router'
//createRouter方法，用于创建路由器实例，可以管理多个路由

export default createRouter({
  //路由模式的设置
  history: createWebHistory(),
  //管理路由
  routes: [
    {
      path: '/home',
      component: () => import('@/pages/home/index.vue'),
      children: [
        {
          path: 'first',
          component: () => import('@/pages/home/first/index.vue')
        },
        {
          path: 'refund',
          component: () => import('@/pages/home/refund/index.vue')
        },
        {
          path: 'help',
          component: () => import('@/pages/home/help/index.vue')
        },
        {
          path: 'advise',
          component: () => import('@/pages/home/advise/index.vue')
        },
        {
          path: 'about',
          component: () => import('@/pages/home/about/index.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

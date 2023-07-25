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
          component: () => import('@/views/first/index.vue')
        },
        {
          path: 'refund',
          component: () => import('@/views/refund/index.vue')
        },
        {
          path: 'help',
          component: () => import('@/views/help/index.vue')
        },
        {
          path: 'advise',
          component: () => import('@/views/advise/index.vue')
        },
        {
          path: 'about',
          component: () => import('@/views/about/index.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/pages/userLogin/index.vue'),
      redirect: '/login/userLogin',
      children: [
        {
          path: 'userLogin',
          component: () => import('@/pages/userLogin/login.vue')
        },
        {
          path: 'register',
          component: () => import('@/pages/userLogin/register.vue')
        },
        {
          path: 'codeLogin',
          component: () => import('@/pages/userLogin/codeLogin.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/home/first'
    }
  ],
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

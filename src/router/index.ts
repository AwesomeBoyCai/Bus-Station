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
          component: () => import('@/views/first/index.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: 'refund',
          component: () => import('@/views/refund/index.vue'),
          meta: {
            title: '退票'
          }
        },
        {
          path: 'help',
          component: () => import('@/views/help/index.vue'),
          meta: {
            title: '帮助中心'
          }
        },
        {
          path: 'advise',
          component: () => import('@/views/advise/index.vue'),
          meta: {
            title: '投诉建议'
          }
        },
        {
          path: 'about',
          component: () => import('@/views/about/index.vue'),
          meta: {
            title: '关于我们'
          }
        }
      ]
    },
    {
      path: '/purchase',
      component: () => import('@/pages/bus_ticket/index.vue'),
      meta: {
        title: '购票中心'
      },
      redirect: '/purchase/searchTicket',
      children: [
        {
          path: 'searchTicket',
          component: () => import('@/pages/bus_ticket/searchTicket/index.vue'),
          meta: {
            title: '查询车票'
          }
        }
      ]
    },
    {
      path: '/person',
      component: () => import('@/pages/person/index.vue'),
      meta: {
        title: '个人中心'
      },
      redirect: '/person/baseInfo',
      children: [
        {
          path: 'baseInfo',
          component: () => import('@/pages/person/baseInfo/index.vue'),
          meta: {
            title: '基本资料'
          }
        },
        {
          path: 'changePassword',
          component: () => import('@/pages/person/changePassword/index.vue'),
          meta: {
            title: '修改密码'
          }
        },
        {
          path: 'passenger',
          component: () => import('@/pages/person/passenger/index.vue'),
          meta: {
            title: '常用乘车人'
          }
        },
        {
          path: 'allOrder',
          component: () => import('@/pages/person/allOrder/index.vue'),
          meta: {
            title: '所有订单'
          }
        },
        {
          path: 'paidOrder',
          component: () => import('@/pages/person/paidOrder/index.vue'),
          meta: {
            title: '已支付订单'
          }
        },
        {
          path: 'waitOrder',
          component: () => import('@/pages/person/waitOrder/index.vue'),
          meta: {
            title: '待支付订单'
          }
        },
        {
          path: 'refundOrder',
          component: () => import('@/pages/person/refundOrder/index.vue'),
          meta: {
            title: '退款完成'
          }
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
          component: () => import('@/pages/userLogin/login.vue'),
          meta: {
            title: '登录'
          }
        },
        {
          path: 'register',
          component: () => import('@/pages/userLogin/register.vue'),
          meta: {
            title: '注册'
          }
        },
        {
          path: 'codeLogin',
          component: () => import('@/pages/userLogin/codeLogin.vue'),
          meta: {
            title: '验证码登录'
          }
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

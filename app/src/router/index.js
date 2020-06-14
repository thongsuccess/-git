import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/index.vue'
import Test from '@/page/test/index.vue'
import Shop from '@/page/shop/index.vue'
import notFount from '@/page/notfount/index.vue'
import Login from '@/page/login/index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/page/shop/index.vue')
      // beforeEnter: (to, from, next) => {
      //   const name = localStorage.getItem('userInfo')
      //   console.log(name);

      //   if (name || to.path === '/login') {
      //     // 如果有   /  -->  /home
      //     next()
      //   } else {
      //     next('/login')
      //   }
      // }
    },
    {
      path: '*',
      name: 'notfount',
      component: notFount
    }
  ]
})

// 关于next的使用

// next() 等价于 next( true ) 表示可以从当前路由跳转到目标路由
// next( false ) 表示不通过， 表示从当前路由跳转不到目标路由
// next(’/login’) 等价于 next({path:’/login’}) 跳转指定的路由
// next(’/login’) 等价于 next({path:’/login’,params,query})
// next( fn ) 数据预载
// 当我们进入到一个项目的首页时，但是当我们没有注册账号时，它主动跳转到了注册/登录页
router.beforeEach((to, from, next) => {
  const toekn = localStorage.getItem('token')
  console.log(toekn);

  if (toekn || to.path === '/login') {
    // 如果有   /  -->  /home
    next()
  } else {
    next('/login')
  }
})

export default router;
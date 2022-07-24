import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
    beforeEnter(to, from, next) {
      const isLogin = sessionStorage.isLogin === undefined ? false : JSON.parse(sessionStorage.isLogin)
      isLogin ? next({ name: 'HomeView' }) : next()
    }
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
    beforeEnter(to, from, next) {
      const isLogin = sessionStorage.isLogin === undefined ? false : JSON.parse(sessionStorage.isLogin)
      isLogin ? next({ name: 'HomeView' }) : next()
    }
  },
  {
    path: '/shop/:id',
    name: 'ShopView',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
  },
  {
    path: '/shopCarList',
    name: 'ShopCarList',
    component: () => import(/* webpackChunkName: "ShopCarList" */ '../views/shopCarList/ShopCarList')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由跳转之前
router.beforeEach((to, from, next) => {
  const isLogin = sessionStorage.isLogin === undefined ? false : JSON.parse(sessionStorage.isLogin)
  // 如果没有登陆那么就跳转到登陆页面  不加to.name === 'login'会导致死循环  isLogin会一直是false
  if (!isLogin && (to.name !== 'LoginView' && to.name !== 'RegisterView')) {
    next({ name: 'LoginView' })
  } else {
    next()
  }
})

export default router

import router from './index'

router.beforeEach((to, from, next) => {
// 修改页面title
  if (to.meta.title) document.title = to.meta.title
  // 判断是否需要登陆
  const userInfo = sessionStorage.getItem('userInfo') || null
  if (!userInfo && to.meta.auth) {
    next('/login')
  } else {
    next()
  }
})

import type { Router } from 'vue-router'
import { useAuthStore, useGlobalStore, useUserStore } from '@/stores'
import { initDynamicRouter } from '@/routers/utils'
import { LOGIN_URL, ROUTER_WHITE_LIST } from '@/config'
import NProgress from '@/config/nprogress'

export function setupRouterGuard(router: Router) {
  const authStore = useAuthStore()
  const userStore = useUserStore()
  const globalStore = useGlobalStore()

  /* 移除所有路由 */
  function resetRouter() {
    authStore.flatMenuList.forEach((route) => {
      const { name } = route
      if (name && router.hasRoute(name))
        router.removeRoute(name)
    })
  }

  /* 全局前置守卫  */
  router.beforeEach(async (to, from, next) => {
    const isRefresh = !from.name && to.name !== LOGIN_URL
    // 1.NProgress 开始，如果是刷新页面则不需要进度条(避免进度条颜色闪烁)
    if (!isRefresh)
      NProgress.start()
    // 2.动态设置标题
    const appTitle = import.meta.env.VITE_APP_TITLE
    useTitle(to.meta.title as string, { titleTemplate: `%s | ${appTitle}` })

    // 4.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
    if (ROUTER_WHITE_LIST.includes(to.path))
      return next()
    // 3.判断是访问登陆页，有 Token 则停留在当前页，没有 Token 重置路由到登陆页
    if (to.path.toLocaleLowerCase() === LOGIN_URL) {
      if (userStore.token)
        return next(from.fullPath)
      resetRouter()
      return next()
    }

    // 5.判断是否有 Token，没有重定向到 login 页面
    if (!userStore.token) {
      userStore.setPreRouter(to) // 并记录跳转目标页
      return next({ path: LOGIN_URL, replace: true })
    }
    else {
      // 若从登录页而来，且有目标页，则跳转到目标页，并且要跳转的目标不是和上一次保存的不相等
      const canPushPreRouter = from.path.toLocaleLowerCase() === LOGIN_URL && userStore.preRouter && to.path !== userStore.preRouter.path
      if (canPushPreRouter) {
        const { path } = userStore.preRouter
        return next({ path, replace: true })
      }
    }

    // 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
    if (!authStore.authRouteList.length) {
      await initDynamicRouter()
      return next({ ...to, replace: true })
    }
    // 随机切换动画效果
    globalStore.randomAnimate()
    // 7.存储 routerName 做按钮权限筛选
    authStore.setRouteName(to.name as string)

    // 8.正常访问页面
    next()
  })

  /* 全局后置守卫 */
  router.afterEach((to) => {
    NProgress.done()
    const needRecord = router.options.routes.every(route => route.path !== to.path)
    if (needRecord)
      userStore.setPreRouter(to)
  })

  /* 路由跳转错误 */
  router.onError((error) => {
    NProgress.done()
    console.warn('路由错误', error.message)
  })
}

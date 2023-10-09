import { defineStore } from 'pinia'
import { requestAuthButtonList, requestAuthRouteList } from '@/api/modules/login'
import { getAllBreadcrumbList, getFlatMenuList, getShowMenuList } from '@/utils'

interface AuthButtonList {
  [key: string]: string[]
}
export const useAuthStore = defineStore('store-auth', () => {
  // 按钮权限列表
  const authButtonList = ref<AuthButtonList>({})
  // 授权路由列表
  const authRouteList = ref<Menu.MenuOptions[]>([])
  // 当前页面的 router name，用来做按钮权限筛选
  const routeName = ref('')

  // 路由权限列表 ==> 左侧菜单栏渲染，剔除隐式路由
  const authMenuList = computed(() => getShowMenuList(authRouteList.value))
  // 菜单权限列表 ==> 扁平化之后的一维数组菜单，用来添加动态路由
  const flatMenuList = computed(() => getFlatMenuList(authRouteList.value))
  // 递归处理后的所有面包屑导航列表
  const breadcrumbList = computed(() => getAllBreadcrumbList(authRouteList.value))

  // 获取按钮权限
  async function getAuthButtonList() {
    const { data } = await requestAuthButtonList()
    authButtonList.value = data
  }
  // 获取路由权限
  async function getAuthMenuList() {
    const { data } = await requestAuthRouteList()
    authRouteList.value = data
  }
  // 设置当前路由name
  function setRouteName(name: string) {
    routeName.value = name
  }
  return { authButtonList, authRouteList, routeName, authMenuList, flatMenuList, breadcrumbList, getAuthButtonList, getAuthMenuList, setRouteName }
})

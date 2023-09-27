import { defineStore } from 'pinia'
import type { AuthState } from '@/stores/interface'
import { getAuthButtonList, getAuthRouteList } from '@/api/modules/login'
import { getAllBreadcrumbList, getFlatMenuList, getShowMenuList } from '@/utils'

export const useAuthStore = defineStore({
  id: 'geeker-auth',
  state: (): AuthState => ({
    // 按钮权限列表
    authButtonList: {},
    // 授权路由列表
    authRouteList: [],
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: '',
  }),
  getters: {
    // 路由权限列表 ==> 左侧菜单栏渲染，剔除隐式路由
    authMenuList: state => getShowMenuList(state.authRouteList),
    // 菜单权限列表 ==> 扁平化之后的一维数组菜单，用来添加动态路由
    flatMenuList: state => getFlatMenuList(state.authRouteList),
    // 递归处理后的所有面包屑导航列表
    breadcrumbList: state => getAllBreadcrumbList(state.authRouteList),
  },
  actions: {
    async getAuthButtonList() {
      const { data } = await getAuthButtonList()
      this.authButtonList = data
    },
    async getAuthMenuList() {
      const { data } = await getAuthRouteList()
      this.authRouteList = data
    },
    async setRouteName(name: string) {
      this.routeName = name
    },
  },
})

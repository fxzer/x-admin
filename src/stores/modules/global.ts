import { defineStore } from 'pinia'
import type { GlobalState, LayoutSize } from '@/stores/interface'
import { DEFAULT_PRIMARY } from '@/config'
import { usePiniaPersistConfig } from '@/hooks'

export const useGlobalStore = defineStore({
  id: 'geeker-global',
  // 修改默认值之后，需清除 localStorage 数据
  state: () => ({
    // 布局模式 (纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns)
    layout: 'vertical',
    // element 组件大小
    assemblySize: 'default',
    // 当前系统语言
    language: null,
    // 当前页面是否全屏
    maximize: false,
    // 主题颜色
    primary: DEFAULT_PRIMARY,
    // 深色模式
    isDark: false,
    // 灰色模式
    isGrey: false,
    // 色弱模式
    isWeak: false,
    // 侧边栏反转
    asideInverted: false,
    // 头部反转
    headerInverted: false,
    // 折叠菜单
    isCollapse: false,
    // 菜单手风琴
    accordion: false,
    // 面包屑导航
    breadcrumb: true,
    // 面包屑导航图标
    breadcrumbIcon: true,
    // 标签页
    tabs: true,
    // 标签页图标
    tabsIcon: true,
    // 页脚
    footer: true,
    sizeList: [
      {
        label: '大型',
        key: 'large',
        menu: {
          fold: '64px',
          unfold: '210px',
        },
      },
      {
        label: '默认',
        key: 'default',
        menu: {
          fold: '56px',
          unfold: '200px',
        },
      },
      {
        label: '小型',
        key: 'small',
        menu: {
          fold: '48px',
          unfold: '190px',
        },
      },
    ],
  }),
  getters: {
    menuSize(): any {
      return this.sizeList.find((item) => {
        return item.key === this.assemblySize
      })?.menu
    },
  },
  actions: {
    // 设置全局状态
    setGlobalState(...args: ObjToKeyValArray<GlobalState>) {
      this.$patch({ [args[0]]: args[1] })
    },
  },
  persist: usePiniaPersistConfig('geeker-global'),
})

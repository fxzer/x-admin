import { defineStore } from 'pinia'
import type { LanguageType, LayoutType, SizeConfig, SizeType } from '../interface'
import { DEFAULT_PRIMARY } from '@/config'
import { initLanguage } from '@/utils/language'

export const useGlobalStore = defineStore('store-global', () => {
  const layout = ref<LayoutType>('vertical')
  const size = ref<SizeType>('default')
  const language = ref<LanguageType>(initLanguage())
  const maximize = ref(false)
  const primary = ref(DEFAULT_PRIMARY)
  const isDark = ref(false)
  const isGrey = ref(false)
  const isWeak = ref(false)
  const isCollapse = ref(false)
  const isAccordion = ref(false)
  const showBreadcurmb = ref(true)
  const showBreadcrumbIcon = ref(true)
  const showTab = ref(true)
  const showTabIcon = ref(true)
  const showFooter = ref(true)
  const asideInverted = ref(false)
  const headerInverted = ref(false)
  const sizeList = ref<SizeConfig[]>([
    {
      label: '大型',
      key: 'large',
      menu: {
        fold: '64px',
        unfold: '210px',
        height: '60px',
      },
      header: {
        height: '60px',
      },
    },
    {
      label: '默认',
      key: 'default',
      menu: {
        fold: '52px',
        unfold: '200px',
        height: '50px',
      },
      header: {
        height: '48px',
      },
    },
    {
      label: '小型',
      key: 'small',
      menu: {
        fold: '48px',
        unfold: '190px',
        height: '46px',
      },
      header: {
        height: '44px',
      },
    },
  ])
  const currentSize = computed(() => {
    return sizeList.value.find((item) => {
      return item.key === size.value
    })
  })

  function setHtmlProperty(key: string, value: string) {
    document.documentElement.style.setProperty(key, value)
  }
  // 监听所选尺寸变化
  watch(size, () => {
    // 设置 html 变量
    const { menu, header } = sizeList.value.find(item => item.key === size.value) || sizeList.value[1]
    // 设置菜单子项高度
    setHtmlProperty('--el-menu-item-height', menu.height)
    // 设置 el-header 全局高度变量
    setHtmlProperty('--el-header-height-global', header.height)
  }, {
    immediate: true,
  })
  function toggleMenu() {
    isCollapse.value = !isCollapse.value
  }
  return { layout, currentSize, size, language, maximize, primary, isDark, isGrey, isWeak, asideInverted, headerInverted, isCollapse, isAccordion, showBreadcurmb, showBreadcrumbIcon, showTab, showTabIcon, showFooter, sizeList, toggleMenu }
}, {
  persist: true,
})
// 根据传参设置修改 Store
export function setGlobalState(...args: any[]) {
  const globalStore = useGlobalStore()
  globalStore.$patch({ [args[0]]: args[1] })
}

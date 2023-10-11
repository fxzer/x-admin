<script setup lang='ts'>
import { useGlobalStore } from '@/stores'

const props = defineProps({
  showLogo: {
    type: Boolean,
    default: true,
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
})
const { showTitle } = toRefs(props)
const appTitle = import.meta.env.VITE_APP_TITLE
const globalStore = useGlobalStore()
const { isCollapse, menuWidth, layout } = toRefs(globalStore)
const title = computed(() => isCollapse.value ? (appTitle.charAt(0) || 'X').toUpperCase() : appTitle)

// 先判断传参是否要显示，在判断是否是分栏布局，如果是分栏布局，就显示，如果不是分栏布局，就判断是否折叠，如果折叠就不显示，如果不折叠就显示
const titleVisable = computed(() => showTitle.value && (layout.value === 'columns' ? true : !isCollapse.value))
</script>

<template>
  <div
    class="h-[var(--el-menu-item-height)] flex-center overflow-hidden duration-300 space-x-1"
    :style="{ width: showTitle ? menuWidth : 'auto', height: showTitle ? '' : '70px' }"
  >
    <img v-if="showLogo" class="wh-7 rounded-full object-contain" src="@/assets/images/logo.svg" alt="logo">
    <span v-show="titleVisable" class="truncate text-xl font-semibold text-[var(--el-color-primary)]">{{ title
    }}</span>
  </div>
</template>

<style scoped lang='scss'>

</style>

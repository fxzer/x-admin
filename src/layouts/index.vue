<!-- 💥 一次性加载 LayoutComponents -->
<script setup lang="ts" name="layout">
import { type Component } from 'vue'
import ThemeDrawer from './components/ThemeDrawer/index.vue'
import LayoutVertical from './LayoutVertical/index.vue'
import LayoutClassic from './LayoutClassic/index.vue'
import LayoutTransverse from './LayoutTransverse/index.vue'
import LayoutColumns from './LayoutColumns/index.vue'
import { useGlobalStore } from '@/stores/modules/global'
import type { LayoutType } from '@/stores/interface'

const LayoutComponents: Record<LayoutType, Component> = {
  vertical: LayoutVertical,
  classic: LayoutClassic,
  transverse: LayoutTransverse,
  columns: LayoutColumns,
}

const globalStore = useGlobalStore()
const layout = computed(() => globalStore.layout as LayoutType)
</script>

<template>
  <component :is="LayoutComponents[layout]" />
  <ThemeDrawer />
</template>

<style scoped lang="scss">
.layout {
  min-width: 600px;
}
</style>

<!-- 💥 异步加载 LayoutComponents -->
<script setup lang="ts" name="layoutAsync">
import type { Component } from 'vue'
import Settings from './components/Settings/index.vue'

import type { LayoutType } from '@/stores'
import { useGlobalStore } from '@/stores'
import Loading from '@/components/common/Loading/index.vue'

const LayoutComponents: Record<LayoutType, Component> = {
  vertical: defineAsyncComponent(() => import('./LayoutVertical/index.vue')),
  classic: defineAsyncComponent(() => import('./LayoutClassic/index.vue')),
  transverse: defineAsyncComponent(() => import('./LayoutTransverse/index.vue')),
  columns: defineAsyncComponent(() => import('./LayoutColumns/index.vue')),
}

const globalStore = useGlobalStore()
const { layout, settingsVisible } = storeToRefs(globalStore)
</script>

<template>
  <suspense>
    <template #default>
      <component :is="LayoutComponents[layout]" />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </suspense>
  <Settings v-model="settingsVisible" />
</template>

<style scoped lang="scss">
.layout {
  min-width: 600px;
}
</style>

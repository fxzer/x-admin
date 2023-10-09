<script setup lang="ts">
import { setGlobalState, useGlobalStore } from '@/stores'
import type { SizeType } from '@/stores'

const globalStore = useGlobalStore()

const { size, sizeList } = storeToRefs(globalStore)

function setSize(item: SizeType) {
  if (size.value === item)
    return
  setGlobalState('size', item)
}
</script>

<template>
  <el-dropdown @command="setSize">
    <i-fluent:text-font-size-20-regular />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in sizeList"
          :key="item.key"
          :command="item.key"
          :disabled="size === item.key"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

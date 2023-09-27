<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'
import type { AssemblySizeType } from '@/stores/interface'

const globalStore = useGlobalStore()
const assemblySize = computed(() => globalStore.assemblySize)

const assemblySizeList = [
  { label: '大型', value: 'large' },
  { label: '默认', value: 'default' },
  { label: '小型', value: 'small' },
]

function setAssemblySize(item: AssemblySizeType) {
  if (assemblySize.value === item)
    return
  globalStore.setGlobalState('assemblySize', item)
}
</script>

<template>
  <el-dropdown @command="setAssemblySize">
    <i-fluent:text-font-size-20-regular />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in assemblySizeList"
          :key="item.value"
          :command="item.value"
          :disabled="assemblySize === item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

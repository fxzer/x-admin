<script setup lang='ts'>
import { darkThemes } from '@/constants'
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { darkTheme } = storeToRefs(globalStore)
</script>

<template>
  <el-popover :width="252" trigger="click">
    <template #reference>
      <i-arcticons:galaxy-themes class="hover:text-primary" />
    </template>
    <el-radio-group v-model="darkTheme" size="small">
      <el-radio-button v-for="theme in darkThemes" :key="theme.name" :label="theme.value">
        {{ theme.name }}
      </el-radio-button>
    </el-radio-group>
  </el-popover>
</template>

<style scoped lang='scss'>

</style>

<script setup lang="ts" name="SwitchDark">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useTheme } from '@/hooks/useTheme'
import { useGlobalStore } from '@/stores'

const { switchDark } = useTheme()
const globalStore = useGlobalStore()
const { isDark } = storeToRefs(globalStore)
</script>

<template>
  <el-switch v-model="isDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" @change="switchDark" />
</template>

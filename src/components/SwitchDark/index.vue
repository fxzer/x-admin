<script setup lang="ts" name="SwitchDark">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/stores'
import { toggleDarkAnimate } from '@/hooks'

const { isDark } = storeToRefs(useGlobalStore())
</script>

<template>
  <el-switch :model-value="isDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" @click="toggleDarkAnimate" />
</template>

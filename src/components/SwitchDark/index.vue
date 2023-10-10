<script setup lang="ts" name="SwitchDark">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/stores'

const { isDark } = storeToRefs(useGlobalStore())
</script>

<template>
  <el-switch v-model="isDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" />
</template>

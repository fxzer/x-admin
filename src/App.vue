<script setup lang="ts">
import { computed, reactive } from 'vue'

import { useI18n } from 'vue-i18n'
import { ElConfigProvider } from 'element-plus'
import en from 'element-plus/es/locale/lang/en'
import zh from 'element-plus/es/locale/lang/zh-cn'

import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { size, language } = storeToRefs(globalStore)

const i18n = useI18n()
onMounted(() => {
  i18n.locale.value = language.value!
})

const locale = computed(() => {
  return language.value === 'zh' ? zh : en
})

// element button config
const buttonConfig = reactive({ autoInsertSpace: false })
</script>

<template>
  <ElConfigProvider :locale="locale" :size="size" :button="buttonConfig">
    <router-view />
  </ElConfigProvider>
</template>

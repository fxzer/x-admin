<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElConfigProvider } from 'element-plus'
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import type { LanguageType } from './stores/interface'
import { getBrowserLang } from '@/utils'
import { useTheme } from '@/hooks/useTheme'
import { useGlobalStore } from '@/stores/modules/global'

const globalStore = useGlobalStore()

// init theme
const { initTheme } = useTheme()
initTheme()

// init language
const i18n = useI18n()
onMounted(() => {
  const language = globalStore.language ?? getBrowserLang()
  i18n.locale.value = language
  globalStore.setGlobalState('language', language as LanguageType)
})

// element language
const locale = computed(() => {
  if (globalStore.language === 'zh')
    return zhCn
  if (globalStore.language === 'en')
    return en
  return getBrowserLang() === 'zh' ? zhCn : en
})

// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize)

// element button config
const buttonConfig = reactive({ autoInsertSpace: false })
</script>

<template>
  <ElConfigProvider :locale="locale" :size="assemblySize" :button="buttonConfig">
    <router-view />
  </ElConfigProvider>
</template>

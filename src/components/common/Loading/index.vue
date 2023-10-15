<script setup lang="ts">
import { loadings } from '@/constants'

const loadName = ref('LoadingA')
onMounted(() => {
  const globalState = localStorage.getItem('store-global')
  const globalStore = globalState && JSON.parse(globalState)
  if (globalStore) {
    const { isDark, loadingName } = globalStore
    if (loadingName)
      loadName.value = loadingName
    const html: HTMLHtmlElement = document.querySelector('html')!
    // const dots: NodeListOf<HTMLElement> = document.querySelectorAll('.dot i')
    // dots.forEach(item => (item.style.background = primary))
    if (isDark)
      html.style.background = '#141414'
  }
})
</script>

<template>
  <div class="loading-wrap wh-screen flex-center">
    <div class="loading-box wh-50 flex-center">
      <component :is="loadings[loadName]" />
    </div>
  </div>
</template>

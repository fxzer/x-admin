<script setup lang="ts">
onMounted(() => {
  const globalState = localStorage.getItem('store-global')
  const globalStore = globalState && JSON.parse(globalState)
  if (globalStore) {
    const { isDark, primary } = globalStore
    const html: HTMLHtmlElement = document.querySelector('html')!
    const dots: NodeListOf<HTMLElement> = document.querySelectorAll('.dot i')
    dots.forEach(item => (item.style.background = primary))
    if (isDark)
      html.style.background = '#141414'
  }
})
</script>

<template>
  <div class="loading-box">
    <div class="loading-wrap">
      <span class="dot dot-spin"><i /><i /><i /><i /></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>

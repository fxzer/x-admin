<script setup lang="ts">
import mittBus from '@/utils/mittBus'

function openDrawer() {
  mittBus.emit('openThemeDrawer')
}
</script>

<template>
  <div class="theme-setting">
    <i-ep-setting class="wh-6" @click="openDrawer" />
  </div>
</template>

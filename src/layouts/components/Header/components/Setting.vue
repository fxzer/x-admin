<script setup lang="ts">
import { useGlobalStore } from '@/stores'

const { openSettings } = useGlobalStore()
</script>

<template>
  <div class="theme-setting">
    <i-ep-setting @click="openSettings" />
  </div>
</template>

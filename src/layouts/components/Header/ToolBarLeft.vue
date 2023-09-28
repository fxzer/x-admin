<script setup lang="ts">
import CollapseIcon from './components/CollapseIcon.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import { useGlobalStore } from '@/stores/modules/global'

const globalStore = useGlobalStore()
</script>

<template>
  <div class="flex-center overflow-hidden text-nowrap">
    <CollapseIcon />
    <Breadcrumb v-if="globalStore.breadcrumb" />
  </div>
</template>

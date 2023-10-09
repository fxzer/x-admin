<script setup lang="ts">
import CollapseIcon from './components/CollapseIcon.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { showBreadcurmb } = storeToRefs(globalStore)
</script>

<template>
  <div class="flex-center overflow-hidden text-nowrap">
    <CollapseIcon />
    <Breadcrumb v-if="showBreadcurmb" class="block lt-md:hidden" />
  </div>
</template>

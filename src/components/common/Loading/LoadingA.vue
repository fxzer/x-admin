<script setup lang="ts">
import Logo from '@/layouts/components/Header/components/Logo.vue'

const loadingClasses = [
  'left-0 top-0',
  'left-0 bottom-0 animate-delay-500',
  'right-0 top-0 animate-delay-1000',
  'right-0 bottom-0 animate-delay-1500',
]
</script>

<template>
  <div class="fixed-center flex-col">
    <Logo :show-title="false" />
    <div class="my-36px h-56px w-56px">
      <div class="relative h-full animate-spin">
        <div
          v-for="(item, index) in loadingClasses"
          :key="index"
          class="absolute h-16px w-16px animate-pulse rounded-8px bg-primary"
          :class="item"
        />
      </div>
    </div>
    <h2 class="text-28px font-500 text-#646464">
      x-admin
    </h2>
  </div>
</template>

<style scoped></style>

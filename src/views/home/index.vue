<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="card h-150 flex-center text-4xl">
    {{ route.meta.title }}
  </div>
</template>

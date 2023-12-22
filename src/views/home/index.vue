<script lang="ts" setup>
fetch('/api/test')
  .then(res => res.json())
  .then(res => console.log(res))
const route = useRoute()
</script>

<template>
  <div class="card h-150 flex-center text-4xl">
    {{ route.meta.title }}
  </div>
</template>

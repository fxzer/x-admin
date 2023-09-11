<script setup lang='ts'>
import { useDark } from '@vueuse/core'

const isDark = useDark()
// const globalStore = useGlobalStore()

async function handleAnimate(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY

  if (!document.startViewTransition) {
    isDark.value = !isDark.value
    return
  }

  const endRadius = Math.ceil(Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)))
  const transition = document.startViewTransition(() => {
    isDark.value = !isDark.value
  })

  await transition.ready
  const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]

  document.documentElement.animate(
    {
      clipPath: isDark.value ? clipPath : clipPath.reverse(),
    },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: isDark.value ? '::view-transition-new(root)' : '::view-transition-old(root)',
    },
  )
}
</script>

<template>
  <span @click="handleAnimate">
    <i-mdi-moon-waning-crescent v-if="isDark" class="wh-5 text-blue/80" />
    <i-mdi-white-balance-sunny v-else class="wh-5 text-amber/80" />
  </span>
</template>

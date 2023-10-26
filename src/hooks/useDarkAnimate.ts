import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { toggleDark } = globalStore
// @ts-expect-error: Transition API
const isAppearanceTransition = document.startViewTransition
&& !window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function toggleDarkAnimate(event?: MouseEvent) {
  console.log('[ event ]-10', event)
  if (!isAppearanceTransition || !event) {
    toggleDark()
    return
  }
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    toggleDark()
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: globalStore.isDark
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: globalStore.isDark
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}

<script lang="ts" setup>
defineOptions({ name: 'HoverContainer' })
const props = withDefaults(defineProps<Props>(), {
  tooltipContent: '',
  placement: 'bottom',
  contentClass: '',
  inverted: false,
})
type Placement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
interface Props {
  /** 提示文本 */
  tooltipContent?: string
  /** tooltip的位置 */
  placement?: Placement
  /** class类 */
  contentClass?: string
  /** 反转模式下 */
  inverted?: boolean
}

const showTooltip = computed(() => Boolean(props.tooltipContent))

const invertedClass = computed(
  () => `${props.contentClass} ${props.inverted ? 'hover:bg-primary' : 'hover:bg-#f6f6f6'}`,
)
</script>

<template>
  <!-- 不加外层 div 响应不了点击事件 -->
  <div v-if="showTooltip">
    <el-tooltip :placement="placement" trigger="hover">
      <template #default>
        <div class="h-full flex-center cursor-pointer dark:hover:bg-#333" :class="invertedClass">
          <slot />
        </div>
      </template>
      <template #content>
        {{ tooltipContent }}
      </template>
    </el-tooltip>
  </div>

  <div v-else class="h-full flex-center cursor-pointer dark:hover:bg-#333" :class="invertedClass">
    <slot />
  </div>
</template>

<style scoped></style>

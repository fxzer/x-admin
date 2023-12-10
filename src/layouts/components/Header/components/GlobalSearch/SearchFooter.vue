<template>
  <div class="flex-y-center whitespace-nowrap text-gray-400 space-x-2 dark:text-gray-500/80 md:space-x-6">
    <span class="flex-center flex-1">
      <i-mdi-keyboard-return class="icon" />
      <span>确认</span>
    </span>
    <span class="flex-center flex-1">
      <i-mdi-arrow-up-thin class="icon" />
      <i-mdi-arrow-down-thin class="icon" />
      <span>切换</span>
    </span>
    <span class="flex-y-center flex-1 lt-md:hidden">
      <i-material-symbols:keyboard-command-key class="icon" /><span class="icon mr-2 px-1.5 py-2px text-12px">K</span>
      <span>打开</span>
    </span>
    <span class="flex-center flex-1">
      <i-mdi-keyboard-esc class="icon" />
      <span>关闭</span>
    </span>
  </div>
</template>

<style scoped lang='scss'>
.icon {
  box-shadow:
    inset 0 -2px var(--el-border-color),
    inset 0 0 1px 1px var(--el-border-color),
    0 1px 2px 1px var(--el-bg-color-page);
  @apply mr-2 p-2px;
}
</style>

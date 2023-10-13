<script setup lang='ts'>
import type { LayoutType } from '@/stores'
import { layouts } from '@/constants'

const props = defineProps<{ layout: LayoutType }>()
const emit = defineEmits(['update:layout'])
const activeLayout = useVModel(props, 'layout', emit)
// 设置布局方式
function setLayout(val: LayoutType) {
  activeLayout.value = val
}
const index = computed(() => layouts.findIndex(item => item.value === activeLayout.value))
// 通过 index 坐标计算出激活边框的定位
const style = computed(() => {
  const x = index.value % 2 * 146
  const y = Math.floor(index.value / 2) * 92
  return {
    transform: `translate(${x}px, ${y}px)`,
  }
})
</script>

<template>
  <div class="layout-box relative">
    <el-tooltip v-for="{ name, value } in layouts" :key="value" effect="dark" :content="name" placement="top" :show-after="200">
      <div
        class="layout-item" :class="[`layout-${value}`]"
        @click="setLayout(value)"
      >
        <template v-if="value === 'vertical'">
          <div class="layout-menu" />
          <div class="layout-container">
            <div class="layout-header" />
            <div class="layout-content" />
          </div>
        </template>
        <template v-if="value === 'classic'">
          <div class="layout-menu" />
          <div class="layout-container">
            <div class="layout-header" />
            <div class="layout-content" />
          </div>
        </template>
        <template v-if="value === 'transverse'">
          <div class="layout-menu" />
          <div class="layout-content" />
        </template>
        <template v-if="value === 'columns'">
          <div class="layout-menu" />
          <div class="layout-header" />
          <div class="layout-content" />
        </template>
        <el-icon v-if="activeLayout === value">
          <IEpCircleCheckFilled />
        </el-icon>
      </div>
    </el-tooltip>
    <div
      class="absolute top-0 h-18 w-25 cursor-pointer border-2px border-primary rounded-5px transition-all duration-300"
      :style="style"
    />
  </div>
</template>

<style scoped lang='scss'>
.layout-box {
     display: flex;
     align-items: center;
     justify-content: space-between;
     flex-wrap: wrap;
  .layout-item {
    position: relative;
    width: 100px;
    height: 72px;
    padding: 6px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px var(--el-border-color-dark);
    transition: all 0.2s;
    & *{
      border-radius: 3px;
    }
    .layout-menu {
      background-color: var(--el-color-primary);
    }
    .layout-header {
      background-color: var(--el-color-primary-light-5);
    }
    .layout-content {
      background-color: var(--el-color-primary-light-8);
      border: 1px dashed var(--el-color-primary);
    }
    .el-icon {
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: var(--el-color-primary);
      transition: all 0.2s;
    }
    &:hover {
      box-shadow: 0 0 5px 1px var(--el-text-color-secondary);
    }
  }
  .is-active {
    box-shadow: 0 0 0 2px var(--el-color-primary) !important;
  }
  .layout-vertical {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .layout-menu {
      width: 20%;
    }
    .layout-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex:1;
      margin-left:5px;
      .layout-header {
        height: 20%;
        margin-bottom: 5px;
      }
      .layout-content {
        flex:1;
      }
    }
  }
  .layout-classic {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    .layout-menu {
      height: 22%;
      margin-bottom: 5px;
    }
    .layout-container {
      flex:1;
      display: flex;
      justify-content: space-between;
      .layout-header {
        width: 20%;
        margin-right: 5px;
      }
      .layout-content {
       flex:1;
      }
    }
  }
  .layout-transverse {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    .layout-menu {
      height: 20%;
      margin-bottom: 5px;
    }
    .layout-content {
      flex:1;
    }
  }
  .layout-columns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .layout-menu {
      width: 14%;
      margin-right: 5px;
    }
    .layout-header {
      width: 18%;
      margin-right: 5px;
    }
    .layout-content {
      flex:1;
    }
  }
}
</style>

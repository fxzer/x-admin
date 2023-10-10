<script setup lang="ts">
import { storeToRefs } from 'pinia'
import LayoutSelect from './components/LayoutSelect.vue'
import MoreColorIcon from './components/MoreColorIcon.vue'
import MoreColorDialog from './components/MoreColorDialog.vue'

import { useGlobalStore } from '@/stores'
import { DEFAULT_PRIMARY } from '@/config'
import SwitchDark from '@/components/SwitchDark/index.vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const visible = useVModel(props, 'modelValue', emit)

const moreColorVisible = ref(false)
const globalStore = useGlobalStore()
const {
  layout,
  primary,
  isGrey,
  isWeak,
  isAccordion,
  showTab,
  showTabIcon,
  showFooter,
  showBreadcurmb,
  showBreadcrumbIcon,
  asideInverted,
  onlyEffectPrimary,
} = storeToRefs(globalStore)

// 预定义主题颜色
const colorList = [
  DEFAULT_PRIMARY,
  '#daa96e',
  '#0c819f',
  '#27ae60',
  '#ff5c93',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6',
]
function handleClear() {
  localStorage.clear()
  location.reload()
}
</script>

<template>
  <el-drawer v-model="visible" title="偏好设置" size="290px">
    <!-- 布局样式 -->
    <el-divider class="divider !mt0">
      <el-icon><IEpNotification /></el-icon>
      布局样式
    </el-divider>
    <LayoutSelect v-model:layout="layout" />

    <!-- 全局主题 -->
    <el-divider class="divider">
      <el-icon><IEpColdDrink /></el-icon>
      全局主题
    </el-divider>
    <div class="setting-item">
      <span>暗黑模式</span>
      <SwitchDark />
    </div>
    <div class="setting-item">
      <span>主题颜色</span>
      <div class="group flex-y-center space-x-2">
        <el-tooltip content="更多颜色" placement="top">
          <MoreColorIcon @click="moreColorVisible = true" />
        </el-tooltip>
        <el-color-picker v-model="primary" :predefine="colorList" />
      </div>
    </div>
    <div class="setting-item">
      <span>
        仅影响主色
        <el-tooltip effect="dark" content="若开启则主题颜色仅影响主色，反之，其他场景颜色(Success,Warning,Danger,Info)会混入主色调">
          <el-icon><IEpQuestionFilled /></el-icon>
        </el-tooltip>
      </span>
      <el-switch v-model="onlyEffectPrimary" />
    </div>
    <div class="setting-item">
      <span>
        侧边栏反转色
        <el-tooltip effect="dark" content="侧边栏颜色变为深色模式">
          <el-icon><IEpQuestionFilled /></el-icon>
        </el-tooltip>
      </span>
      <el-switch v-model="asideInverted" />
    </div>

    <div class="setting-item">
      <span>灰色模式</span>
      <el-switch v-model="isGrey" />
    </div>
    <div class="setting-item mb40">
      <span>色弱模式</span>
      <el-switch v-model="isWeak" />
    </div>

    <!-- 界面设置 -->
    <el-divider class="divider">
      <el-icon><IEpSetting /></el-icon>
      界面设置
    </el-divider>
    <div class="setting-item">
      <span>菜单手风琴
        <el-tooltip effect="dark" content="开启后，展开菜单时将自动收起其他展开项">
          <el-icon><IEpQuestionFilled /></el-icon>
        </el-tooltip>
      </span>
      <el-switch v-model="isAccordion" />
    </div>
    <div class="setting-item">
      <span>面包屑</span>
      <el-switch v-model="showBreadcurmb" />
    </div>
    <div class="setting-item">
      <span>面包屑图标</span>
      <el-switch v-model="showBreadcrumbIcon" />
    </div>
    <div class="setting-item">
      <span>标签栏</span>
      <el-switch v-model="showTab" />
    </div>
    <div class="setting-item">
      <span>标签栏图标</span>
      <el-switch v-model="showTabIcon" />
    </div>
    <div class="setting-item">
      <span>页脚</span>
      <el-switch v-model="showFooter" />
    </div>
    <div class="flex-x-center">
      <el-button type="primary" @click="handleClear">
        清空缓存并退出
      </el-button>
    </div>
    <MoreColorDialog v-model="moreColorVisible" />
  </el-drawer>
</template>

<style scoped lang="scss">
.divider {
  margin-top: 15px;
  .el-icon {
    position: relative;
    top: 2px;
    right: 5px;
    font-size: 15px;
  }
}
.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  margin: 10px 0;
  span {
    display: flex;
    align-items: center;
    font-size: 14px;
    .el-icon {
      margin-left: 3px;
      font-size: 15px;
      color: var(--el-text-color-regular);
      cursor: pointer;
    }
  }
}
</style>

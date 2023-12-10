<script setup lang="ts">
import { storeToRefs } from 'pinia'
import LayoutSelect from './components/LayoutSelect.vue'
import MoreColorIcon from './components/MoreColorIcon.vue'
import MoreColorDialog from './components/MoreColorDialog.vue'
import BreadAnimates from './components/BreadAnimates.vue'
import DarkThemes from './components/DarkThemes.vue'
import LoadingAnimates from './components/LoadingAnimates.vue'
import ClearCache from './components/ClearCache.vue'
import { useGlobalStore } from '@/stores'
import { DEFAULT_PRIMARY } from '@/config'
import { rainbowColors } from '@/constants'
import SwitchDark from '@/components/SwitchDark/index.vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const visible = useVModel(props, 'modelValue', emit)

const moreColorVisible = ref(false)
const globalStore = useGlobalStore()
const {
  layout,
  primary,
  isGray,
  isWeak,
  isFollowSystem,
  isAccordion,
  showTab,
  showTabIcon,
  showFooter,
  showBreadcurmb,
  showBreadcrumbIcon,
  asideInverted,
  isMixinPrimary,
  animationName,
  isRandownAnimate,
  animationList,
  breadcrumbType,
  breadAnimateName,
  isRainbow,
  menuClass,
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
const { counter: colorIndex, reset, pause, resume } = useInterval(3000, { controls: true })
watch(colorIndex, () => {
  if (isRainbow.value)
    primary.value = rainbowColors[colorIndex.value]
  if (colorIndex.value >= rainbowColors.length)
    reset()
})
watch(isRainbow, () => {
  if (isRainbow.value)
    resume()
  else
    pause()
})
onMounted(resume)
onUnmounted(pause)
</script>

<template>
  <el-drawer v-model="visible" title="偏好设置" size="290px" class="text-[var(--el-text-color-primary)]">
    <!-- 布局样式 -->
    <el-divider class="divider">
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
      <span>暗黑模式
        <DarkThemes />
      </span>
      <SwitchDark />
    </div>
    <div class="setting-item">
      <span>跟随系统</span>
      <el-switch v-model="isFollowSystem" />
    </div>
    <div class="setting-item">
      <span>主题颜色
        <el-tooltip content="跑马灯">
          <i-game-icons:lamprey-mouth class="mx-1 !wh-18px" :class="{ 'text-primary': isRainbow }" @click="isRainbow = !isRainbow" />
        </el-tooltip>
        <el-tooltip content="其他场景颜色(Success,Warning,Danger,Info)混入主色调">
          <i-ph:circles-four :class="{ 'text-primary': isMixinPrimary }" @click="isMixinPrimary = !isMixinPrimary" />
        </el-tooltip>
      </span>
      <div class="group flex-y-center space-x-2">
        <el-tooltip content="更多颜色">
          <MoreColorIcon @click="moreColorVisible = true" />
        </el-tooltip>
        <ElColorPicker v-model="primary" :predefine="colorList" />
      </div>
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
    <Transition name="slide-bottom" appear mode="out-in">
      <div v-if="!isWeak" class="setting-item">
        <span>灰色模式</span>
        <el-switch v-model="isGray" />
      </div>
    </Transition>
    <Transition name="slide-bottom" appear mode="out-in">
      <div v-if="!isGray" class="setting-item mb40">
        <span>色弱模式</span>
        <el-switch v-model="isWeak" />
      </div>
    </Transition>
    <!-- 界面设置 -->
    <el-divider class="divider">
      <el-icon><IEpSetting /></el-icon>
      界面设置
    </el-divider>
    <div class="setting-item">
      <span> 菜单风格</span>
      <el-radio-group v-model="menuClass">
        <el-radio-button label="menu-default">
          默认
        </el-radio-button>
        <el-radio-button label="menu-card">
          卡片
        </el-radio-button>
      </el-radio-group>
    </div>
    <div class="setting-item">
      <span>菜单手风琴
        <el-tooltip effect="dark" content="开启后，展开菜单时将自动收起其他展开项">
          <el-icon><IEpQuestionFilled /></el-icon>
        </el-tooltip>
      </span>
      <el-switch v-model="isAccordion" />
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
    <div class="setting-item">
      <span>面包屑</span>
      <el-switch v-model="showBreadcurmb" />
    </div>
    <div class="setting-item">
      <span>面包屑图标</span>
      <el-switch v-model="showBreadcrumbIcon" />
    </div>
    <div class="setting-item">
      <span>面包屑风格</span>
      <el-radio-group v-model="breadcrumbType">
        <el-radio-button label="default">
          默认
        </el-radio-button>
        <el-radio-button label="arrow">
          箭头
        </el-radio-button>
      </el-radio-group>
    </div>
    <el-divider class="divider">
      <el-icon><IEpSetting /></el-icon>
      动画设置
    </el-divider>
    <div class="setting-item">
      <span>动画类型
        <el-tooltip content="随机">
          <i-fad:random-1dice
            :class="{
              'text-primary': isRandownAnimate,
            }"
            @click="isRandownAnimate = !isRandownAnimate"
          />
        </el-tooltip>

      </span>
      <el-select v-model="animationName" class="w-36" placeholder="选择动画">
        <el-option
          v-for="{ label, value } in animationList"
          :key="label"
          :label="label"
          :value="value"
        />
      </el-select>
    </div>
    <div class="setting-item">
      <span>面包屑动画</span>
      <BreadAnimates v-model="breadAnimateName" />
    </div>
    <div class="setting-item">
      <span>加载动画</span>
      <LoadingAnimates />
    </div>
    <ClearCache />
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

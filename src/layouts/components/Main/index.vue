<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Maximize from './components/Maximize.vue'
import { useGlobalStore } from '@/stores/modules/global'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'
import Tabs from '@/layouts/components/Tabs/index.vue'

const globalStore = useGlobalStore()
const { maximize, isCollapse, layout, tabs, footer } = storeToRefs(globalStore)

const keepAliveStore = useKeepAliveStore()
const { aliveNames } = storeToRefs(keepAliveStore)

// 注入刷新页面方法
const isRouterShow = ref(true)
const refreshCurrentPage = (val: boolean) => (isRouterShow.value = val)
provide('refresh', refreshCurrentPage)

// 监听当前页面是否最大化，动态添加 class
watch(
  () => maximize.value,
  () => {
    const app = document.getElementById('app') as HTMLElement
    if (maximize.value)
      app.classList.add('main-maximize')
    else app.classList.remove('main-maximize')
  },
  { immediate: true },
)

// 监听布局变化，在 body 上添加相对应的 layout class
watch(
  () => layout.value,
  () => {
    const body = document.body as HTMLElement
    body.setAttribute('class', layout.value)
  },
  { immediate: true },
)

// // 监听窗口大小变化，折叠侧边栏
// const screenWidth = ref(0)
// const listeningWindow = useDebounceFn(() => {
//   screenWidth.value = document.body.clientWidth
//   if (!isCollapse.value && screenWidth.value < 1200)
//     globalStore.setGlobalState('isCollapse', true)
//   if (isCollapse.value && screenWidth.value > 1200)
//     globalStore.setGlobalState('isCollapse', false)
// }, 100)
// window.addEventListener('resize', listeningWindow, false)
// onBeforeUnmount(() => {
//   window.removeEventListener('resize', listeningWindow)
// })
</script>

<template>
  <Maximize v-if="maximize" />
  <Tabs v-if="tabs" />
  <el-main class="main-box">
    <!-- TODO:动画过渡 -->
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive :include="aliveNames">
          <component :is="Component" v-if="isRouterShow" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
  <!-- <el-footer v-if="footer" class="absolute bottom-0 left-0 right-0">
    <Footer />
  </el-footer> -->
</template>

<style scoped lang="scss">
.el-main {
  padding: 10px;
  overflow-x: hidden;
  height: calc(100vh - 100px);
  background-color: var(--el-bg-color-page);
}
.el-footer {
  height: auto;
  padding: 0;
}
</style>

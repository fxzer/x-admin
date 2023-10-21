<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Maximize from './components/Maximize.vue'
import { useGlobalStore, useKeepAliveStore } from '@/stores'
import Tabs from '@/layouts/components/Tabs/index.vue'

const globalStore = useGlobalStore()
const { maximize, layout, showTab, showFooter, animationName, enterActiveClass, leaveActiveClass } = storeToRefs(globalStore)

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
</script>

<template>
  <Maximize v-if="maximize" />
  <Tabs v-if="showTab" />
  <el-main class="main-box relative" :class="{ '!pb-42px': showFooter }">
    <!-- TODO:动画过渡 -->
    <router-view v-slot="{ Component, route }">
      <transition
        :name="animationName" mode="out-in"
        :enter-active-class="enterActiveClass"
        :leave-active-class="leaveActiveClass"
      >
        <keep-alive :include="aliveNames">
          <component :is="Component" v-if="isRouterShow" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
    <!-- <Footer v-if="showFooter" /> -->
  </el-main>
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

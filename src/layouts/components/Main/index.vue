<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Maximize from './components/Maximize.vue'
import { useGlobalStore, useKeepAliveStore } from '@/stores'
import Tabs from '@/layouts/components/Tabs/index.vue'
import Footer from '@/layouts/components/Footer/index.vue'

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
    <el-scrollbar>
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
    </el-scrollbar>

    <Footer v-if="showFooter" />
  </el-main>
</template>

<style scoped lang="scss">
.el-main {
  padding: 10px;
  // overflow:auto;
  height: calc(100vh - 88px);
  background-color: var(--el-bg-color-page);
  // position: relative;
}
.el-footer {
  height: auto;
  padding: 0;
}
</style>

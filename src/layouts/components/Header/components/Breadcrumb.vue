<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { HOME_URL } from '@/config'
import { useAuthStore, useGlobalStore } from '@/stores'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const globalStore = useGlobalStore()
const { showBreadcrumbIcon } = storeToRefs(globalStore)
const breadcrumbList = computed(() => {
  const lastPath = route.matched[route.matched.length - 1].path
  let breadcrumbData = authStore.breadcrumbList[lastPath] ?? []
  // 🙅‍♀️不需要首页面包屑可删除以下判断
  if (breadcrumbData[0].path !== HOME_URL)
    breadcrumbData = [{ path: HOME_URL, meta: { icon: 'IEpHomeFilled', title: '首页' } }, ...breadcrumbData]

  return breadcrumbData
})

// Click Breadcrumb
function onClick(item: Menu.MenuOptions, index: number) {
  if (index !== breadcrumbList.value.length - 1)
    router.push(item.path)
}
</script>

<template>
  <el-breadcrumb class="flex overflow-hidden">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
        <div class="el-breadcrumb__inner is-link flex-y-center space-x-2" @click="onClick(item, index)">
          <el-icon v-show="item.meta.icon && showBreadcrumbIcon" class="breadcrumb-icon">
            <component :is="item.meta.icon" />
          </el-icon>
          <span class="breadcrumb-title">{{ item.meta.title }}</span>
        </div>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter-from{
  opacity: 0;
  transform: translateX(-40px);
}
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
//不会出现挤出空白的情况
.breadcrumb-leave-active {
  position: absolute;
}
</style>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { HOME_URL } from '@/config'
import { useAuthStore, useGlobalStore } from '@/stores'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const globalStore = useGlobalStore()
const { showBreadcrumbIcon, breadcrumbType, breadcrumbAnimateName } = storeToRefs(globalStore)
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
  <el-breadcrumb
    class="relative flex overflow-hidden" :class="{
      arrow: breadcrumbType === 'arrow',
    }"
  >
    <transition-group :name="breadcrumbAnimateName" appear>
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
/* 向下滑入 */
.slide-bottom-enter-active {
  transition: all 0.3s;
}

.slide-bottom-enter-from,
.slide-bottom-leave-active{
  opacity: 0;
  transform: translateY(-20px) skewX(-45deg);
}
/* 向上滑入 */
.slide-top-enter-active {
  transition: all 0.3s;
}

.slide-top-enter-from,
.slide-top-leave-active {
  opacity: 0;
  transform: translateY(20px) skewX(-45deg);
}
/* 向左滑入 */
.slide-left-enter-active {
  transition: all 0.3s;
}

.slide-left-enter-from,
.slide-left-leave-active {
  opacity: 0;
  position:absolute;
  transform: translateX(20px) skewX(-45deg);
}
/* 向右滑入 */
.slide-right-enter-active {
  transition: all 0.3s;
}

.slide-right-enter-from,
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(-20px) skewX(-45deg);
}

.el-breadcrumb.arrow {

  :deep(.el-breadcrumb__item) {
    .el-breadcrumb__inner {
      background-color: var(--el-fill-color);
      transition: background-color .3s, var(--el-transition-color);
      padding: 2px 8px;
      -webkit-clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%, 8px 50%);
      clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%, 8px 50%);
    }

    .el-breadcrumb__separator {
      display: none;
    }

  }
}
</style>

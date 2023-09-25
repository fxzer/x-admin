<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { HOME_URL } from '@/config'
import { useAuthStore } from '@/stores/modules/auth'
import { useGlobalStore } from '@/stores/modules/global'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const globalStore = useGlobalStore()

const breadcrumbList = computed(() => {
  let breadcrumbData = authStore.breadcrumbListGet[route.matched[route.matched.length - 1].path] ?? []
  // 🙅‍♀️不需要首页面包屑可删除以下判断
  if (breadcrumbData[0].path !== HOME_URL)
    breadcrumbData = [{ path: HOME_URL, meta: { icon: 'IEpHomeFilled', title: '首页' } }, ...breadcrumbData]

  return breadcrumbData
})

// Click Breadcrumb
function onBreadcrumbClick(item: Menu.MenuOptions, index: number) {
  if (index !== breadcrumbList.value.length - 1)
    router.push(item.path)
}
</script>

<template>
  <div class="mask-image">
    <el-breadcrumb>
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
          <div class="el-breadcrumb__inner is-link flex-y-center space-x-2" @click="onBreadcrumbClick(item, index)">
            <el-icon v-show="item.meta.icon && globalStore.breadcrumbIcon" class="breadcrumb-icon">
              <component :is="item.meta.icon" />
            </el-icon>
            <span class="breadcrumb-title">{{ item.meta.title }}</span>
          </div>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

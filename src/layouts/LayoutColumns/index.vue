<!-- 分栏布局 -->
<script setup lang="ts" name="layoutColumns">
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore, useGlobalStore } from '@/stores'
import Main from '@/layouts/components/Main/index.vue'
import ToolBarLeft from '@/layouts/components/Header/ToolBarLeft.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import HeaderWrap from '@/layouts/components/Header/HeaderWrap.vue'
import Logo from '@/layouts/components/Header/components/Logo.vue'
import { getStrWidth } from '@/utils'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const globalStore = useGlobalStore()
const { isAccordion, isCollapse, menuWidth, menuClass, asideInverted } = toRefs(globalStore)
const { authMenuList } = toRefs(authStore)
const activeMenu = computed(() => (route.meta.activeMenu || route.path) as string)

const subMenuList = ref<Menu.MenuOptions[]>([])
const splitActive = ref('')
watch(
  () => [authMenuList, route],
  () => {
    // 当前菜单没有数据直接 return
    if (!authMenuList.value.length)
      return
    splitActive.value = route.path
    const menuItem = authMenuList.value.filter((item: Menu.MenuOptions) => route.path.includes(item.path))
    if (menuItem[0].children?.length)
      return (subMenuList.value = menuItem[0].children)
    subMenuList.value = []
  },
  {
    deep: true,
    immediate: true,
  },
)

function changeSubMenu(item: Menu.MenuOptions) {
  splitActive.value = item.path
  if (item.children?.length)
    return (subMenuList.value = item.children)
  subMenuList.value = []
  router.push(item.path)
}
function isTitleOverflow(title: string): boolean {
  return getStrWidth(title) > 60
}
</script>

<template>
  <el-container>
    <div class="border-right first-menu" :class="{ inverted: asideInverted }">
      <Logo :show-title="false" />
      <el-scrollbar>
        <div class="first-menu-list flex-1" :class="menuClass">
          <div
            v-for="item in authMenuList"
            :key="item.path"
            class="first-menu-item h-70px flex-center flex-col cursor-pointer overflow-hidden px-1 text-[var(--el-menu-text-color)] duration-300"
            :class="[{ 'is-active': splitActive.includes(item.path) }]"
            @click="changeSubMenu(item)"
          >
            <i :class="item.meta.icon" text-xl />
            <!-- 菜单文本溢出处理 -->
            <el-tooltip v-if="isTitleOverflow(item.meta.title)" :content="item.meta.title" placement="right">
              <span class="title mt-2 w-full truncate text-xs">{{ item.meta.title }}</span>
            </el-tooltip>
            <span v-else class="title mt-2 w-full truncate text-center text-xs">{{ item.meta.title }}</span>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <!-- 展开栏 -->
    <el-aside class="border-right" :class="{ 'is-hide': !subMenuList.length }" :style="{ width: menuWidth }">
      <Logo :show-logo="false" />
      <el-scrollbar>
        <el-menu
          :class="menuClass"
          :router="false"
          :default-active="activeMenu"
          :collapse="isCollapse"
          :unique-opened="isAccordion"
          :collapse-transition="false"
        >
          <SubMenu :menu-list="subMenuList" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container direction="vertical">
      <HeaderWrap>
        <ToolBarLeft />
        <ToolBarRight />
      </HeaderWrap>
      <Main />
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
@import './index.scss';
@import '../styles/el-menu.scss';
@import '../styles/menu-card.scss';
</style>

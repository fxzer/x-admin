<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/modules/auth'

const router = useRouter()
const authStore = useAuthStore()
const menuList = computed(() => authStore.flatMenuListGet.filter(item => !item.meta.isHide))

function searchMenuList(queryString: string, cb: Function) {
  const results = queryString ? menuList.value.filter(filterNodeMethod(queryString)) : menuList.value
  cb(results)
}

// 打开搜索框
const isShowSearch = ref(false)
const menuInputRef = ref()
const searchMenu = ref('')
function handleOpen() {
  isShowSearch.value = true
  nextTick(() => {
    setTimeout(() => {
      menuInputRef.value.focus()
    })
  })
}

// 搜索窗关闭
function closeSearch() {
  isShowSearch.value = false
}

// 筛选菜单
function filterNodeMethod(queryString: string) {
  return (restaurant: Menu.MenuOptions) => {
    return (
      restaurant.path.toLowerCase().includes(queryString.toLowerCase())
      || restaurant.meta.title.toLowerCase().includes(queryString.toLowerCase())
    )
  }
}

// 点击菜单跳转
function handleClickMenu(menuItem: Menu.MenuOptions | Record<string, any>) {
  searchMenu.value = ''
  if (menuItem.meta.isLink)
    window.open(menuItem.meta.isLink, '_blank')
  else router.push(menuItem.path)
  closeSearch()
}
</script>

<template>
  <div class="menu-search-dialog">
    <i class="iconfont icon-sousuo" @click="handleOpen" />
    <el-dialog v-model="isShowSearch" :modal="false" :show-close="false" fullscreen destroy-on-close @click="closeSearch">
      <el-autocomplete
        ref="menuInputRef"
        v-model="searchMenu"
        value-key="path"
        placeholder="菜单搜索 ：支持菜单名称、路径"
        :fetch-suggestions="searchMenuList"
        @select="handleClickMenu"
        @click.stop
      >
        <template #prefix>
          <el-icon>
            <Search />
          </el-icon>
        </template>
        <template #default="{ item }">
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <span> {{ item.meta.title }} </span>
        </template>
      </el-autocomplete>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.menu-search-dialog {
  :deep(.el-dialog) {
    background-color: rgb(0 0 0 / 50%);
    border-radius: 0 !important;
    box-shadow: unset !important;
    .el-dialog__header {
      border-bottom: none !important;
    }
  }
  :deep(.el-autocomplete) {
    position: absolute;
    top: 100px;
    left: 50%;
    width: 550px;
    transform: translateX(-50%);
    .el-input__wrapper {
      background-color: var(--el-bg-color);
    }
  }
}
.el-autocomplete__popper {
  .el-icon {
    position: relative;
    top: 2px;
    font-size: 16px;
  }
  span {
    margin: 0 0 0 10px;
    font-size: 14px;
  }
}
</style>

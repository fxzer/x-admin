<script setup lang="ts" name="tabs">
import { useRoute, useRouter } from 'vue-router'
import { CircleClose, FolderDelete, FullScreen, Promotion, Refresh, Remove } from '@element-plus/icons-vue'
import { HOME_URL } from '@/config'
import { setGlobalState, useKeepAliveStore, useTabsStore } from '@/stores'

const route = useRoute()
const router = useRouter()
const tabStore = useTabsStore()
const keepAliveStore = useKeepAliveStore()

// 刷新当前页
const refreshCurrentPage: Function = inject('refresh') as Function
function refresh() {
  setTimeout(() => {
    keepAliveStore.removeAliveName(route.name as string)
    refreshCurrentPage(false)
    nextTick(() => {
      keepAliveStore.addAliveName(route.name as string)
      refreshCurrentPage(true)
    })
  }, 0)
}

// 设置 Tab 标题
const tabsTitle = ref('')
function editTabsTitle() {
  tabStore.setTabTitle(tabsTitle.value)
}

// 当前页全屏
function maximize() {
  setGlobalState('maximize', true)
}

// 关闭当前页
function closeCurrentTab() {
  if (route.meta.isAffix)
    return
  tabStore.removeTab(route.fullPath)
  keepAliveStore.removeAliveName(route.name as string)
}

// 关闭其他
function closeOtherTab() {
  tabStore.closeMultipleTab(route.fullPath)
  keepAliveStore.setAliveNames([route.name] as string[])
}

// 全部关闭
function closeAllTab() {
  tabStore.closeMultipleTab()
  keepAliveStore.setAliveNames()
  router.push(HOME_URL)
}

// 打开详情页
function handleToDetail(id: string) {
  router.push(`/assembly/tabs/detail/${id}`)
}
</script>

<template>
  <div class="card content-box">
    <span class="text"> 标签页操作 🍓🍇🍈🍉123</span>
    <div class="mb30">
      <el-input v-model="tabsTitle" placeholder="请输入内容" style="width: 500px">
        <template #append>
          <el-button type="primary" @click="editTabsTitle">
            设置 Tab 标题
          </el-button>
        </template>
      </el-input>
    </div>
    <el-space class="mb30">
      <el-button type="primary" :icon="Refresh" @click="refresh">
        刷新当前页
      </el-button>
      <el-button type="primary" :icon="FullScreen" @click="maximize">
        当前页全屏
      </el-button>
      <el-button type="primary" :icon="Remove" @click="closeCurrentTab">
        关闭当前页
      </el-button>
      <el-button type="primary" :icon="CircleClose" @click="closeOtherTab">
        关闭其他
      </el-button>
      <el-button type="primary" :icon="FolderDelete" @click="closeAllTab">
        全部关闭
      </el-button>
    </el-space>
    <el-space class="mb30">
      <el-button type="info" :icon="Promotion" @click="handleToDetail('1')">
        打开详情页1
      </el-button>
      <el-button type="info" :icon="Promotion" @click="handleToDetail('2')">
        打开详情页2
      </el-button>
      <el-button type="info" :icon="Promotion" @click="handleToDetail('3')">
        打开详情页3
      </el-button>
      <el-button type="info" :icon="Promotion" @click="handleToDetail('4')">
        打开详情页4
      </el-button>
      <el-button type="info" :icon="Promotion" @click="handleToDetail('5')">
        打开详情页5
      </el-button>
    </el-space>
  </div>
</template>

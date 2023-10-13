<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import InfoDialog from './InfoDialog.vue'
import PasswordDialog from './PasswordDialog.vue'
import { useUserStore } from '@/stores'
import { logoutApi } from '@/api/modules/login'
import { LOGIN_URL } from '@/config'

const router = useRouter()
const userStore = useUserStore()
const { userInfo: { name = '' }, setToken } = userStore

// 退出登录
function logout() {
  ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    // 1.执行退出登录接口
    await logoutApi()

    // 2.清除 Token
    setToken('')

    // 3.重定向到登陆页
    router.replace(LOGIN_URL)
    ElMessage.success('退出登录成功！')
  })
}

// 打开修改密码和个人信息弹窗
const infoRef = ref<InstanceType<typeof InfoDialog> | null>(null)
const passwordRef = ref<InstanceType<typeof PasswordDialog> | null>(null)
function openDialog(ref: string) {
  if (ref === 'infoRef')
    infoRef.value?.openDialog()
  if (ref === 'passwordRef')
    passwordRef.value?.openDialog()
}
</script>

<template>
  <el-dropdown>
    <div class="wh-8 cursor-pointer overflow-hidden rounded-full">
      <img src="@/assets/images/avatar.png" alt="avatar">
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <p v-copy="name" class="max-w-20 w-full truncate text-center" :title="name">
            {{ name }}
          </p>
        </el-dropdown-item>
        <el-dropdown-item @click="openDialog('infoRef')">
          <el-icon><IEpUser /></el-icon>{{ $t("header.personalData") }}
        </el-dropdown-item>
        <el-dropdown-item @click="openDialog('passwordRef')">
          <el-icon><IEpEdit /></el-icon>{{ $t("header.changePassword") }}
        </el-dropdown-item>
        <el-dropdown-item divided @click="logout">
          <el-icon><IEpSwitchButton /></el-icon>{{ $t("header.logout") }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- infoDialog -->
  <InfoDialog ref="infoRef" />
  <!-- passwordDialog -->
  <PasswordDialog ref="passwordRef" />
</template>

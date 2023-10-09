<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElForm, ElNotification } from 'element-plus'
import { CircleClose, UserFilled } from '@element-plus/icons-vue'
import md5 from 'md5'
import { HOME_URL } from '@/config'
import { getTimeState } from '@/utils'
import type { Login } from '@/api/interface'
import { loginApi } from '@/api/modules/login'
import { useKeepAliveStore, useTabsStore, useUserStore } from '@/stores'
import { initDynamicRouter } from '@/routers/utils'

const router = useRouter()
const userStore = useUserStore()
const tabsStore = useTabsStore()
const keepAliveStore = useKeepAliveStore()

type FormInstance = InstanceType<typeof ElForm>
const loginFormRef = ref<FormInstance>()
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

const loading = ref(false)
const loginForm = reactive<Login.ReqLoginForm>({
  username: 'admin',
  password: '123456',
})

// login
function login(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.validate(async (valid) => {
    if (!valid)
      return
    loading.value = true
    try {
      // 1.执行登录接口
      const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) })
      userStore.setToken(data.access_token)

      // 2.添加动态路由
      await initDynamicRouter()

      // 3.清空 tabs、keepAlive 数据
      tabsStore.closeMultipleTab()
      keepAliveStore.setAliveNames()

      // 4.跳转到首页
      router.push(HOME_URL)
      ElNotification({
        title: getTimeState(),
        message: '欢迎登录 modern-adminx',
        type: 'success',
        duration: 3000,
      })
    }
    finally {
      loading.value = false
    }
  })
}

// resetForm
function resetForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.resetFields()
}

onMounted(() => {
  // 监听 enter 事件（调用登录）
  document.onkeydown = (e: KeyboardEvent) => {
    e = (window.event as KeyboardEvent) || e
    if (e.code === 'Enter' || e.code === 'enter' || e.code === 'NumpadEnter') {
      if (loading.value)
        return
      login(loginFormRef.value)
    }
  }
})
</script>

<template>
  <ElForm ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon">
            <IEpUser />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" type="password" placeholder="密码：123456" show-password autocomplete="new-password">
        <template #prefix>
          <el-icon class="el-input__icon">
            <IEpLock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </ElForm>
  <div class="login-btn">
    <el-button :icon="CircleClose" round size="large" @click="resetForm(loginFormRef)">
      重置
    </el-button>
    <el-button :icon="UserFilled" round size="large" type="primary" :loading="loading" @click="login(loginFormRef)">
      登录
    </el-button>
  </div>
</template>

<style scoped lang="scss">
@import "../index.scss";
</style>

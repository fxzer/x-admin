<script lang="ts" setup>
import { ElMessage } from 'element-plus'

function open1() {
  ElMessage('this is a message.')
}
function open2() {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    customClass: 'ant',
    duration: 0,
  })
}
function open3() {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
    customClass: 'ant',
    duration: 0,
  })
}
function open4() {
  ElMessage.error('Oops, this is a error message.')
}
</script>

<template>
  <div class="card home flex-col text-pink">
    <!-- <img class="home-bg" src="@/assets/images/welcome.png" alt="welcome"> -->
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain>
        Plain
      </el-button>
      <el-button type="primary" plain>
        Primary
      </el-button>
      <el-button type="success" plain>
        Success
      </el-button>
      <el-button type="info" plain>
        Info
      </el-button>
      <el-button type="warning" plain>
        Warning
      </el-button>
      <el-button type="danger" plain>
        Danger
      </el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button round>
        Round
      </el-button>
      <el-button type="primary" round>
        Primary
      </el-button>
      <el-button type="success" round>
        Success
      </el-button>
      <el-button type="info" round>
        Info
      </el-button>
      <el-button type="warning" round>
        Warning
      </el-button>
      <el-button type="danger" round>
        Danger
      </el-button>
    </el-row>
    <el-button :plain="true" @click="open2">
      success
    </el-button>
    <el-button :plain="true" @click="open3">
      warning
    </el-button>
    <el-button :plain="true" @click="open1">
      message
    </el-button>
    <el-button :plain="true" @click="open4">
      error
    </el-button>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>

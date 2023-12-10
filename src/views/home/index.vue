<script lang="ts" setup>
</script>

<template>
  <div class="card home flex-col text-pink">
    <!-- <img class="home-bg" src="@/assets/images/welcome.png" alt="welcome"> -->
    <el-row class="mb-4">
      <el-button v-wave>
        Default
      </el-button>
      <el-button v-wave type="primary">
        Primary
      </el-button>
      <el-button v-wave type="success">
        Success
      </el-button>
      <el-button v-wave type="info">
        Info
      </el-button>
      <el-button v-wave type="warning">
        Warning
      </el-button>
      <el-button v-wave type="danger">
        Danger
      </el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button v-wave plain>
        Plain
      </el-button>
      <el-button v-wave type="primary" plain>
        Primary
      </el-button>
      <el-button v-wave type="success" plain>
        Success
      </el-button>
      <el-button v-wave type="info" plain>
        Info
      </el-button>
      <el-button v-wave type="warning" plain>
        Warning
      </el-button>
      <el-button v-wave type="danger" plain>
        Danger
      </el-button>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>

<script setup lang="ts" name="home">
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
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>

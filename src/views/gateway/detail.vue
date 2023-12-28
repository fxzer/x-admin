<script setup>
const activeTabName = ref('baseInfo')
</script>

<template>
  <div
    class="detail-wrapper"
    element-loading-background="rgba(0, 0, 0, 0.5)"
  >
    <el-tabs
      v-model="activeTabName"
      type="border-card"
    >
      <el-tab-pane label="基本信息" name="baseInfo">
        <!-- 头部操作选项 -->
        <div class="tab-header">
          <div class="opts">
            <el-dropdown>
              <el-button type="primary">
                更多<i class="el-icon-arrow-down el-icon--right" />
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    移除
                  </el-dropdown-item>
                  <el-dropdown-item>
                    初始化
                  </el-dropdown-item>
                  <el-dropdown-item>
                    开启HUB
                  </el-dropdown-item>
                  <el-dropdown-item>
                    关闭HUB
                  </el-dropdown-item>

                  <el-dropdown-item>
                    切换主备链路
                  </el-dropdown-item>
                  <el-dropdown-item>
                    系统重启
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <img src="/cpe/cpe-detail.png">
      </el-tab-pane>

      <el-tab-pane label="网络信息" name="portConfig">
        <img src="/cpe/cpe-net.png">
      </el-tab-pane>
      <el-tab-pane label="QOS配置" name="qosConfig">
        <img src="/cpe/qos-alarm.png">
      </el-tab-pane>

      <el-tab-pane label="自定义监控" name="customMonitor">
        <img src="/cpe/custom-monitor.png">
      </el-tab-pane>
      <el-tab-pane label="流量分析" name="analysis">
        流量分析
      </el-tab-pane>
      <el-tab-pane label="防火墙" name="firewall">
        防火墙
      </el-tab-pane>
      <!-- <el-tab-pane

        label="端到端监控"
        name="businessMonitor"
      >
        <img src="/cpe/duan-duan.png">
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.tab-header {
  margin-bottom: 10px;
  &::after {
    display: table;
    content: ' ';
    clear: both;
  }
}
.cpe-name {
  padding-left: 20px;
  font-size: 16px;
  font-weight: 600;
}
.opts {
  float: right;
  display: flex;
  justify-content: flex-end;
  .el-button {
    margin-left: 5px;
    padding: 5px;
  }
}
h3 {
  height: 36px;
  line-height: 36px;
}
.link-container {
  display: flex !important;
}
.link-container .link-desc-item .link-info {
  margin-bottom: 10px;
}
.link-container .link-desc-main .link-desc-body {
  flex: 1 1 0;
}
.link-container .link-desc-main .link-desc-body:first-child {
  margin-right: 5px;
}
.link-container .link-desc-main .link-desc-body:last-child {
  margin-left: 5px;
}
.link-container .title-info {
  line-height: 28px;
  font-size: 14px;
}

.link-container .link-desc-item {
  margin-top: 15px;
  flex: 1 1 0;
}
.link-container .link-desc-item:first-child {
  margin-right: 10px;
}
.link-desc-item:nth-last-child(1) {
  margin-left: 20px;
}
::v-deep .el-descriptions__header {
  margin-bottom: 12px;
}
.el-tag {
  margin-right: 10px;
}
</style>

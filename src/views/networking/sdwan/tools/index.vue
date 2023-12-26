<script>
export default {
  name: 'TestTools',
  components: {},
  props: {},
  data() {
    return {
      isProxy: false,
      colors: [
        '#8C9EFF',
        '#fd726d',
        '#f39c12',
        '#27ae60',
      ],
      toolList: [
        {
          name: '打流工具',
          path: '/testTools/testFlow',
          iconfont: 'icon-flow-01',
        },
        {
          name: '拨测工具',
          path: '/testTools/dialingTest',
          iconfont: 'icon-boce',
        },
        {
          name: 'Ping/Trace工具',
          path: '/testTools/pingOrTrace',
          iconfont: 'icon-PING',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="test-tools">
    <div v-for="tool, index in toolList" :key="index" class="tool-item">
      <div class="iconfont" :class="`${tool.iconfont}`" :style="{ color: colors[index] }" />
      <div class="tool-name">
        {{ tool.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.test-tools {
  display: flex;
  flex-wrap: wrap;

  .tool-item {
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      border-color: #409eff;
    }

    .iconfont {
      font-size: 56px;
    }

    .tool-name {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
}
</style>

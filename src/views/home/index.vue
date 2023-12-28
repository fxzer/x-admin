<script lang="ts" setup>
</script>

<template>
  <div>
    <ul class="business-wrapper-list app-list clearfix">
      <li>
        <div class="left">
          <h4>故障告警</h4>
          <div class="des">
            <div class="text">
              <p> 123</p> 今日告警
            </div>
            <div class="text">
              <p>34</p> 未恢复告警
            </div>
          </div>
        </div>
        <div class="right">
          <img src="/home/alarm.svg" alt="">
        </div>
      </li>
      <li>
        <div class="left">
          <h4>智能网关</h4>
          <div class="des">
            <div class="text">
              <p> 3</p> 总
            </div>
            <div class="text">
              <p>0</p> 离线
            </div>
          </div>
        </div>
        <div class="right">
          <img src="/home/gateway.svg" alt="">
        </div>
      </li>
      <li>
        <div class="left">
          <h4>云网络</h4>
          <div class="des">
            <div class="text">
              <p> 1</p>网
            </div>
            <div class="text">
              <p>3</p> 站点
            </div>
          </div>
        </div>
        <div class="right">
          <img src="/home/cloud.svg">
        </div>
      </li>
      <li>
        <div class="left">
          <h4>SD-Wan组网</h4>
          <div class="des">
            <div class="text">
              <p> 1</p>网
            </div>
            <div class="text">
              <p>4</p> 站点
            </div>
          </div>
        </div>
        <div class="right">
          <img src="/home/sdwan.svg" alt="">
        </div>
      </li>
      <li>
        <div class="left">
          <h4>云专线</h4>
          <div class="mt-8 text-center text-xl">
            未开通
          </div>
        </div>
        <div class="right">
          <img src="/home/tunnel.svg" alt="">
        </div>
      </li>
      <li>
        <div class="left">
          <h4>SD-Wan上云</h4>
          <div class="mt-8 text-center text-xl">
            未开通
          </div>
        </div>
        <div class="right">
          <img src="/home/tocloud.svg" alt="">
        </div>
      </li>
      <li>
        <div class="left">
          <h4>智能加速</h4>
          <div class="mt-8 text-center text-xl">
            未开通
          </div>
        </div>
        <div class="right">
          <img src="/home/accel.svg" alt="">
        </div>
      </li>

      <li>
        <div class="left">
          <h4>互联网出口</h4>
          <div class="mt-8 text-center text-xl">
            未开通
          </div>
        </div>
        <div class="right">
          <img src="/home/export.svg" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.app-list {
  margin: 10px;
  li {
    width: 400px;
    margin-top: 10px;
    box-sizing: border-box;
    color: #fff;
    padding: 15px;
    height: 135px;
    border-radius: 5px;
    float: left;
    margin-right: 20px;
    padding-right: 120px;
    background: linear-gradient(to right, #64a0ff, #2b7eff);
    position: relative;

    h4 {
      text-align: center;
      font-size: 18px;
    }

    .left {
      .des {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        p {
          font-size: 30px;
          font-weight: bold;
        }
      }
    }

    .right {
      position: absolute;
      right: 0;
      top: 0;
      width: 110px;
      height: 100%;
      background: linear-gradient(to bottom, #6ba4ff, #2b7eff);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 60px;
      }
    }
    &:nth-child(1) {
      background: linear-gradient(to right, #f79b9b, #f93032);

      .right {
        background: linear-gradient(to bottom, #f79b9b, #f93032);
      }
    }
    // &:nth-child(2) {
    //   background: linear-gradient(to right, #8b85ff, #6757fc);

    //   .right {
    //     background: linear-gradient(to bottom, #958bfe, #6757fc);
    //   }
    // }
    &:nth-child(2) {
      background: linear-gradient(to right, #8bde8b, #2eda54);

      .right {
        background: linear-gradient(to bottom, #badb8a, #52da29);
      }
    }
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      background: linear-gradient(to right, #dcdcdd, #979898);

      .right {
        background: linear-gradient(to bottom, #dcdcdd, #979898);
      }
    }
  }
}
</style>

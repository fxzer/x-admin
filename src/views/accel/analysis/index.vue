<script setup lang='ts'>
import flowhotOption from './flowhot'
import { useEcharts } from '@/hooks/echarts'
import type { ECOption } from '@/hooks/echarts'

const appTop5 = [
  {
    name: 'ChatGPT',
    logo: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.9IEbnkCw6T9xgPRyPqriogHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    name: 'Google',
    logo: 'https://sias.syscxp.com/logo/google.png',
  },
  {
    name: 'Github',
    logo: 'https://sias.syscxp.com/logo/github.jpg',
  },
  {
    name: 'Tiktok',
    logo: 'https://sias.syscxp.com/logo/tiktok.jpeg',
  },
  {
    name: 'YouTube',
    logo: 'https://sias.syscxp.com/logo/youtube.jpg',
  },
]
const appFlowOption = ref<ECOption>({
  title: {
    text: 'TOP5应用流量占比',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%',
  },
  legend: {
    orient: 'vertical',
    left: 'right',
  },
  series: [
    {
      name: '访问流量',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 34.34, name: 'ChatGPT' },
        { value: 24.08, name: 'Google' },
        { value: 19.01, name: 'Github' },
        { value: 15.85, name: 'Tiktok' },
        { value: 9.83, name: 'YouTube' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
const accessOption = ref<ECOption>({
  title: {
    text: '访问者排名',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}M',
  },
  legend: {
    orient: 'vertical',
    left: 'right',
  },
  series: [
    {
      name: '访问流量',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '张三' },
        { value: 735, name: '李四' },
        { value: 580, name: '王五' },
        { value: 484, name: '赵六' },
        { value: 300, name: '孙七' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
const { domRef: topAppRef } = useEcharts(ref(flowhotOption))
const { domRef: piexRef } = useEcharts(appFlowOption)
const { domRef: pieyRef } = useEcharts(accessOption)
</script>

<template>
  <div bg-white p2>
    <div class="top">
      <div class="title">
        应用访问热度 TOP5
      </div>
      <div class="mt-4 flex">
        <ul space-y-2>
          <li v-for="(app, idx) in appTop5" :key="idx" border rounded-lg p1 :class="idx === 0 ? 'border-green' : 'border-gray/30'">
            <img :src="app.logo" mx-auto wh-12 rounded-md bg-green:40>
            <div class="name" text-center text-xs :class="idx === 0 ? '  text-green-500 font-bold' : 'text-gray-600'">
              {{ app.name }}
            </div>
          </li>
        </ul>
        <div ref="topAppRef" class="top ml-5 h-100 w-full" />
      </div>
    </div>
    <div class="bottom mt2 flex-around-center">
      <div ref="piexRef" h-100 w-130 />
      <div ref="pieyRef" h-100 w-130 />
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>

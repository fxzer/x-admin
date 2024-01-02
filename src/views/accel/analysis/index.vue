<script setup lang='ts'>
import flowhotOption from './flowhot'
import { useEcharts } from '@/hooks/echarts'
import type { ECOption } from '@/hooks/echarts'

const appTop5 = [
  {
    name: 'ChatGPT',
    logo: 'https://img.alicdn.com/tfs/TB1Z3Q1u4n1gK0jSZKPXXXvUXXa-200-200.png',
  },
  {
    name: 'Google',
    logo: 'https://img.alicdn.com/tfs/TB1Z3Q1u4n1gK0jSZKPXXXvUXXa-200-200.png',
  },
  {
    name: 'Github',
    logo: 'https://img.alicdn.com/tfs/TB1Z3Q1u4n1gK0jSZKPXXXvUXXa-200-200.png',
  },
  {
    name: 'Tiktok',
    logo: 'https://img.alicdn.com/tfs/TB1Z3Q1u4n1gK0jSZKPXXXvUXXa-200-200.png',
  },
  {
    name: 'AWS',
    logo: 'https://img.alicdn.com/tfs/TB1Z3Q1u4n1gK0jSZKPXXXvUXXa-200-200.png',
  },
]
const appFlowOption = ref<ECOption>({
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
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
const { domRef: pieyRef } = useEcharts(appFlowOption)
</script>

<template>
  <div>
    <div class="top">
      <div class="title">
        应用访问热度 TOP5
      </div>
      <div class="mt-4 flex">
        <ul space-y-2>
          <li v-for="(app, idx) in appTop5" :key="idx">
            <img :src="app.logo" wh-15 rounded-md bg-green:40>
            <div class="name" text-center text-sm text-gray-600>
              {{ app.name }}
            </div>
          </li>
        </ul>
        <div ref="topAppRef" class="top ml-5 h-120 w-full" />
      </div>
    </div>
    <div class="bottom flex">
      <div ref="piexRef" h-100 flex-1 />
      <div ref="pieyRef" h-100 flex-1 />
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>

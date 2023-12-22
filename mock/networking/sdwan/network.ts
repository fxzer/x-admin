import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

const data = Mock.mock({
  'list|1-5': [{
    'id|+1': 1,
    'datetime': '@datetime',
    'status': '@boolean',
    'name|+1': [
      '拨测网络',
      '组网测试',
      '加速网络',
    ],
  }],
})
export default [
  {
    url: '/api/networking/sdwan/network',
    timeout: 1000,
    method: 'get',
    response: () => {
      return data
    },
  },
] as MockMethod[]

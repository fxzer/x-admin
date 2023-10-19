import { ElMessage } from 'element-plus'

const statusMap = {
  400: '请求失败！请您稍后重试',
  401: '登录失效！请您重新登录',
  403: '当前账号无权限访问！',
  404: '你所访问的资源不存在！',
  405: '请求方式不正确！',
  500: '服务器内部错误！',
}
export type StatusNumber = keyof typeof statusMap

/** 校验网络请求状态码 */
export function checkStatus(status: StatusNumber) {
  const message = statusMap[status] || '请求失败！请您稍后重试'
  ElMessage.error(message)
}

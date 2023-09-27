import type { App } from 'vue'
import { ElNotification } from 'element-plus'

/**
 * @description 全局代码错误捕捉
 */
function errorHandler(error: any) {
  // 过滤 HTTP 请求错误
  if (error.status || error.status === 0)
    return false
  const errorMap: { [key: string]: string } = {
    URIError: 'URI错误',
    TypeError: '类型错误',
    RangeError: '范围错误',
    EvalError: 'Eval错误',
    SyntaxError: '语法错误',
    InternalError: '内部错误',
    ReferenceError: '引用错误',
  }
  const errorName = errorMap[error.name] || '未知错误'
  ElNotification({
    title: errorName,
    message: error,
    type: 'error',
    duration: 5000,
  })
}

export function setupErrorHandler(app: App) {
  app.config.errorHandler = errorHandler
}

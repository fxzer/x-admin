import type { Login } from '@/api/interface/index'
import { PORT1 } from '@/api/config/servicePort'
import http from '@/api'

/**
 * @name 登录模块
 */
// 用户登录
export function loginApi(params: Login.ReqLoginForm) {
  return http.post<Login.ResLogin>(`${PORT1}/login`, params, { noLoading: true }) // 正常 post json 请求  ==>  application/json
}

// 获取菜单列表
export function requestAuthRouteList() {
  return http.get<Menu.MenuOptions[]>(`${PORT1}/menu/list`, {}, { noLoading: true })
  // 如果想让菜单变为本地数据，注释上一行代码，并引入本地 authRouteList.json 数据
}

// 获取按钮权限
export function requestAuthButtonList() {
  return http.get<Login.ResAuthButtons>(`${PORT1}/auth/buttons`, {}, { noLoading: true })
}

// 用户退出登录
export function logoutApi() {
  return http.post(`${PORT1}/logout`)
}

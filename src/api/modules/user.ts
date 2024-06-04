import type { ResPage, User } from '@/api/interface/index'
import { PORT1 } from '@/api/config/servicePort'
import http from '@/api'

/**
 * @name 用户管理模块
 */
// 获取用户列表
export function getUserList(params: User.ReqUserParams) {
  return http.post<ResPage<User.ResUserList>>(`${PORT1}/user/list`, params)
}

// 获取树形用户列表
export function getUserTreeList(params: User.ReqUserParams) {
  return http.post<ResPage<User.ResUserList>>(`${PORT1}/user/tree/list`, params)
}

// 新增用户
export function addUser(params: { id: string }) {
  return http.post(`${PORT1}/user/add`, params)
}

// 批量添加用户
export function BatchAddUser(params: FormData) {
  return http.post(`${PORT1}/user/import`, params)
}

// 编辑用户
export function editUser(params: { id: string }) {
  return http.post(`${PORT1}/user/edit`, params)
}

// 删除用户
export function deleteUser(params: { id: string[] }) {
  return http.post(`${PORT1}/user/delete`, params)
}

// 切换用户状态
export function changeUserStatus(params: { id: string, status: number }) {
  return http.post(`${PORT1}/user/change`, params)
}

// 重置用户密码
export function resetUserPassWord(params: { id: string }) {
  return http.post(`${PORT1}/user/rest_password`, params)
}

// 导出用户数据
export function exportUserInfo(params: User.ReqUserParams) {
  return http.download(`${PORT1}/user/export`, params)
}

// 获取用户状态字典
export function getUserStatus() {
  return http.get<User.ResStatus[]>(`${PORT1}/user/status`)
}

// 获取用户性别字典
export function getUserGender() {
  return http.get<User.ResGender[]>(`${PORT1}/user/gender`)
}

// 获取用户部门列表
export function getUserDepartment() {
  return http.get<User.ResDepartment[]>(`${PORT1}/user/department`)
}

// 获取用户角色字典
export function getUserRole() {
  return http.get<User.ResRole[]>(`${PORT1}/user/role`)
}

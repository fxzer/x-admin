import { Regs } from '@/constants'

export function checkPhoneNumber(rule: any, value: any, callback: any) {
  if (value === '')
    callback('请输入手机号码')
  if (!Regs.phone.test(value))
    callback(new Error('请输入正确的手机号码'))
  else
    return callback()
}

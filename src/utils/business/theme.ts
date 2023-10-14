import { darken, lighten, mix } from './color'

const baseColorTypeMap = {
  primary: '#409EFF',
  success: '#67C23A',
  warning: '#E6A23C',
  danger: '#F56C6C',
  info: '#909399',
}
// 推断场景类型
type SceneType = keyof typeof baseColorTypeMap

/* ================================= */
// 操作 html style 变量
export function setHtmlProperty(key: string, value: string) {
  document.documentElement.style.setProperty(key, value)
}
export function removeHtmlProperty(key: string) {
  document.documentElement.style.removeProperty(key)
}
/* 方案一：逐个循环设置属性 */
/* 由模式、主色计算色彩层次 */
export function setPropertyPrimary(isDark: boolean, type: SceneType, mode: string, level: number, color: string) {
  for (let i = 1; i <= level; i++) {
    let chex = ''
    const level = i / 10
    // 通过当前模式，判断是加深还是变浅
    if (isDark)
      chex = mode === 'dark' ? lighten(color, level) : darken(color, level)
    else
      chex = mode === 'dark' ? darken(color, level) : lighten(color, level)
    document.documentElement.style.setProperty(`--el-color-${type}-${mode}-${i}`, chex)
  }
}
/** 修改 html style 变量 ，设置 `element-plus` 主题色 */
export function setEpHtmlVars(isDark: boolean, primaryColor: string, isMixinPrimary = false) {
  baseColorTypeMap.primary = primaryColor
  Object.entries(baseColorTypeMap).forEach(([type, baseColor]) => {
    if (isMixinPrimary && type !== 'primary')
      baseColor = mix(baseColor, primaryColor, 0.8)

    setHtmlProperty(`--el-color-${type}`, baseColor)
    setPropertyPrimary(isDark, type as SceneType, 'dark', 2, baseColor)
    setPropertyPrimary(isDark, type as SceneType, 'light', 9, baseColor)
  })
}

/* 方案二：一次性设置替换，会影响原来的 hmtl 变量 */
/* 生成模式对应的色值层次数组 */
// function handleColorLevel(mode: string, type: SceneType, color: string, level: number) {
//   const arr = []
//   for (let i = 1; i <= level; i++) {
// const level = i / 10
//     const c = mode === 'dark' ? darken(color, level) : lighten(color, level)
//     arr.push(`--el-color-${type}-${mode}-${i}:${c}`)
//   }

//   return arr
// }

// export function setHtmlVars(primaryColor: string, isMixinPrimary = false, weight = 0.8) {
//   baseColorTypeMap.primary = primaryColor
//   const arr = Object.entries(baseColorTypeMap).map(([type, baseColor]) => {
//     if (isMixinPrimary && type !== 'primary')
//       baseColor = mix(baseColor, primaryColor, weight)

//     const pArr = []
//     pArr.push(`--el-color-${type}:${baseColor}`)
//     const darkArr = handleColorLevel('dark', type as SceneType, baseColor, 2)
//     const lightArr = handleColorLevel('light', type as SceneType, baseColor, 9)
//     return [...pArr, ...darkArr, ...lightArr].join(';')
//   })
//   document.documentElement.style.cssText = arr.join(';')
// }

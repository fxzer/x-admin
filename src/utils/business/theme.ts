import { darken, lighten } from '@pureadmin/utils'

const baseColorTypeMap = {
  primary: '#409EFF',
  success: '#67C23A',
  warning: '#E6A23C',
  danger: '#F56C6C',
  info: '#909399',
}
// 推断场景类型
type SceneType = keyof typeof baseColorTypeMap

/* origin:原本各类型对应的基础色，currentPrimary：当前的主色 */
export function mix(origin: string, currentPrimary: string, weight = 0.8) {
  /* weight:(0-1) 越趋近于0，生成的颜色越偏向【当前的主色】； 趋近于 1，颜色 偏向【原本各类型对应的基础色】, */
  const originRGB = toRGB(origin)
  const currentPrimaryRGB = toRGB(currentPrimary)

  // 根据权重计算混合后的颜色值
  const w = weight * 2 - 1
  const w1 = (w / 1 + 1) / 2
  const w2 = 1 - w1
  const blended = [
    Math.round(originRGB[0] * w1 + currentPrimaryRGB[0] * w2),
    Math.round(originRGB[1] * w1 + currentPrimaryRGB[1] * w2),
    Math.round(originRGB[2] * w1 + currentPrimaryRGB[2] * w2),
  ]
  // 将颜色值转换为 16 进制表示形式
  const newColor = toHex(blended)
  return newColor
}

// 辅助函数：将颜色值转换为 [r, g, b] 数组形式
export function toRGB(color: string) {
  const matchedValues = color.match(/[A-Za-z0-9]{2}/g)
  return matchedValues!.map(value => Number.parseInt(value, 16))
}

// 辅助函数：将 [r, g, b] 数组形式的颜色值转换为 16 进制表示形式
export function toHex(rgb: number[]) {
  return `#${rgb.map(value => value.toString(16).padStart(2, '0')).join('')}`
}
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
    // 通过当前模式，判断是加深还是变浅
    if (isDark)
      chex = mode === 'dark' ? lighten(color, i / 10) : darken(color, i / 10)
    else
      chex = mode === 'dark' ? darken(color, i / 10) : lighten(color, i / 10)
    document.documentElement.style.setProperty(`--el-color-${type}-${mode}-${i}`, chex)
  }
}
/** 修改 html style 变量 ，设置 `element-plus` 主题色 */
export function setEpHtmlVars(isDark: boolean, primaryColor: string, onlyEffectPrimary = false) {
  baseColorTypeMap.primary = primaryColor
  Object.entries(baseColorTypeMap).forEach(([type, baseColor]) => {
    if (!onlyEffectPrimary && type !== 'primary')
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
//     const c = mode === 'dark' ? darken(color, i / 10) : lighten(color, i / 10)
//     arr.push(`--el-color-${type}-${mode}-${i}:${c}`)
//   }

//   return arr
// }

// export function setHtmlVars(primaryColor: string, onlyEffectPrimary = false, weight = 0.8) {
//   baseColorTypeMap.primary = primaryColor
//   const arr = Object.entries(baseColorTypeMap).map(([type, baseColor]) => {
//     if (!onlyEffectPrimary && type !== 'primary')
//       baseColor = mix(baseColor, primaryColor, weight)

//     const pArr = []
//     pArr.push(`--el-color-${type}:${baseColor}`)
//     const darkArr = handleColorLevel('dark', type as SceneType, baseColor, 2)
//     const lightArr = handleColorLevel('light', type as SceneType, baseColor, 9)
//     return [...pArr, ...darkArr, ...lightArr].join(';')
//   })
//   document.documentElement.style.cssText = arr.join(';')
// }

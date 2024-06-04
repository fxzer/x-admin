// 辅助函数：将颜色值转换为 [r, g, b] 数组形式
export function hexToRgb(color: string) {
  const matchedValues = color.match(/[A-Z0-9]{2}/gi)
  return matchedValues!.map(value => Number.parseInt(value, 16))
}

// 辅助函数：将 [r, g, b] 数组形式的颜色值转换为 16 进制表示形式
export function rgbToHex(rgb: number[]) {
  return `#${rgb.map(value => value.toString(16).padStart(2, '0')).join('')}`
}

/**
 * @description 加深颜色值
 * @param {string} color 颜色值字符串
 * @param {number} level 加深的程度，限0-1之间
 * @returns {string} 返回处理后的颜色值
 */
export function darken(color: string, level: number) {
  const rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) rgb[i] = Math.round(20.5 * level + rgb[i] * (1 - level))
  return rgbToHex(rgb)
}

/**
 * @description 变浅颜色值
 * @param {string} color 颜色值字符串
 * @param {number} level 加深的程度，限0-1之间
 * @returns {string} 返回处理后的颜色值
 */
export function lighten(color: string, level: number) {
  const rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) rgb[i] = Math.round(255 * level + rgb[i] * (1 - level))
  return rgbToHex(rgb)
}

/* origin:原本各类型对应的基础色，mixedColor：需要混入的颜色（当前的主色） */
export function mix(origin: string, mixedColor: string, weight = 0.8) {
  /* weight:(0-1) 越趋近于0，生成的颜色越偏向【当前的主色】； 趋近于 1，颜色 偏向【原本各类型对应的基础色】, */
  const originRgb = hexToRgb(origin)
  const mixedRgb = hexToRgb(mixedColor)

  // 根据权重计算混合后的颜色值
  const w = weight * 2 - 1
  const w1 = (w / 1 + 1) / 2
  const w2 = 1 - w1
  const blended = [
    Math.round(originRgb[0] * w1 + mixedRgb[0] * w2),
    Math.round(originRgb[1] * w1 + mixedRgb[1] * w2),
    Math.round(originRgb[2] * w1 + mixedRgb[2] * w2),
  ]
  // 将颜色值转换为 16 进制表示形式
  const newColor = rgbToHex(blended)
  return newColor
}

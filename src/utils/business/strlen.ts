// 获取节点宽度
export const getStrWidth = (() => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  return (text: string, font = 'normal 12px Arial') => {
    context!.font = font
    const metrics = context!.measureText(text)
    return Math.ceil(metrics.width)
  }
})()

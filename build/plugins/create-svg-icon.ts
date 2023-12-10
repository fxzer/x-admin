import { resolve } from 'node:path'
import process from 'node:process'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 用于生成 svg 雪碧图
export function setupCreateSvgIcon() {
  return createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [resolve(process.cwd(), 'src/assets/svg-icons')],
    // 指定symbolId格式  dir:用于区分svg-icons下二级文件夹有同名的svg
    symbolId: 'icon-[dir]-[name]',
  })
}

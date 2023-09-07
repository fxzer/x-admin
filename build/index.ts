import { resolve } from 'node:path'
import type { PluginOption } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import UnoCSS from 'unocss/vite'
import { setupCompression, setupVitePWA } from './plugins'

/**
 * 创建 vite 插件
 * @param viteEnv
 */
export function setupVitePlugins(viteEnv: ViteEnv): (PluginOption | PluginOption[])[] {
  const { VITE_GLOB_APP_TITLE, VITE_REPORT, VITE_PWA } = viteEnv
  return [
    vue(),
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    UnoCSS(),
    // esLint 报错信息显示在浏览器界面上
    // name 可以写在 script 标签上
    vueSetupExtend({}),
    // 创建打包压缩配置
    setupCompression(viteEnv),
    // 注入变量到 html 文件
    createHtmlPlugin({
      inject: {
        data: { title: VITE_GLOB_APP_TITLE },
      },
    }),
    // 使用 svg 图标
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    // vitePWA
    VITE_PWA && setupVitePWA(viteEnv),
    // 是否生成包预览，分析依赖包大小做优化处理
    VITE_REPORT && (visualizer({ filename: 'stats.html', gzipSize: true, brotliSize: true }) as PluginOption),
  ]
}
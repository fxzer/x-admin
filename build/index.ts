import type { PluginOption } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'

import Inspect from 'vite-plugin-inspect'
import VueDevTools from 'vite-plugin-vue-devtools'
import { configMockPlugin, setupAtuoComponent, setupAtuoImport, setupCompression, setupCreateSvgIcon, setupPrintBuildInfo, setupVitePWA, setupWebUpdateNotification } from './plugins'

export function setupVitePlugins(viteEnv: ViteEnv): (PluginOption | PluginOption[])[] {
  const { VITE_APP_TITLE, VITE_REPORT, VITE_INSPECT } = viteEnv
  return [
    vue(),
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    UnoCSS(),
    VITE_INSPECT && Inspect(), // Vite调试插件
    VueDevTools(),
    setupAtuoImport(viteEnv),
    setupAtuoComponent(viteEnv),
    setupPrintBuildInfo(),
    setupWebUpdateNotification(),
    // 按需自动安装 iconify 图标
    Icons({
      // scale: 0.8, // icon 大小缩放比例
      autoInstall: true, // 自动安装图标集
      defaultClass: 'cursor-pointer wh-5', // 默认类名
    }),
    vueSetupExtend({}),
    // 创建打包压缩配置
    setupCompression(viteEnv),
    // 注入变量到 html 文件
    createHtmlPlugin({
      inject: {
        data: { title: VITE_APP_TITLE },
      },
    }),
    setupCreateSvgIcon(),
    configMockPlugin({ isBuild: viteEnv.VITE_USER_NODE_ENV === 'build' }),
    // vitePWA
    setupVitePWA(viteEnv),
    // 是否生成包预览，分析依赖包大小做优化处理
    VITE_REPORT && (visualizer({ gzipSize: true, brotliSize: true }) as PluginOption),
  ]
}

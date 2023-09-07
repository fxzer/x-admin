// 自动导入 API
import AutoImport from 'unplugin-auto-import/vite'

// ElementPlus 解析器
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export function setupAtuoImport() {
  // 自动导入 相关库的 API
  return AutoImport({
    // 指定要进行自动导入的文件类型
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    // 指定需自动导入的库
    imports: [
      // 预定义
      'vue', // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      'pinia',
      // '@vueuse/core',
    ],
    resolvers: [
      ElementPlusResolver({ importStyle: 'sass' }),
    ],
    // dirs: ['src/hooks'],
    // 指定生成路径 注：需是相对路径
    dts: 'src/types/auto-imports.d.ts',
  })
}

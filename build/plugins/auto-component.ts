// 自动按需导入组件
import Components from 'unplugin-vue-components/vite'

// ElementPlus 解析器
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'

export function setupAtuoComponent() {
  // 自动导入 相关库的 API
  return Components({
    resolvers: [
      // ElementPlusResolver(), // 自动导入组件
      IconsResolver(), // 自动注册解析到的图标为组件
    ],
    deep: true, // 搜索子目录
    // dirs: ['src/components'], // 指定扫描的文件夹
    dts: 'src/types/components.d.ts',
  })
}

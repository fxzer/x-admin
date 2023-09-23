// 自动按需导入组件
import Components from 'unplugin-vue-components/vite'
import { setupAtuoEpComponent } from './auto-element-plus'

export function setupAtuoComponent(viteEnv: ViteEnv) {
  const { VITE_AUTO_EP } = viteEnv
  // 自动导入 相关库的 API
  return Components({
    resolvers: [
      ...(VITE_AUTO_EP ? setupAtuoEpComponent() : []),
    ],
    deep: true, // 搜索子目录
    // dirs: ['src/components'], // 指定扫描的文件夹
    dts: 'src/types/components.d.ts',
  })
}

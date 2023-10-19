// ElementPlus 解析器
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import IconsResolver from 'unplugin-icons/resolver'

/**  按需自动导入 Element Plus API */
export function setupAtuoEpApi() {
  return [
    // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
    ElementPlusResolver({ importStyle: 'sass' }),
    /*
        // 自动导入图标组件，使用方式：
         1: <i-ep-share />
         2: <IEpShare />
         3: <el-icon color="#409EFC"><IEpShare /></el-icon>
     */
    IconsResolver(),
  ]
}

/**
 * @description: 按需自动导入 Element Plus 组件和和图标组件
 */
export function setupAtuoEpComponent() {
  return [
    // 自动导入 Element Plus 组件
    ElementPlusResolver(),
    // 自动注册图标组件
    IconsResolver({
      // enabledCollections: ['ep'],
    }),
  ]
}

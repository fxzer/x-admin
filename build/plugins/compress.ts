import viteCompression from 'vite-plugin-compression'
import type { PluginOption } from 'vite'

/** 根据 compress 压缩模式配置，生成不同的压缩规则 */
export function setupCompression(viteEnv: ViteEnv): PluginOption | PluginOption[] {
  const { VITE_COMPRESS_ALGORITHM = 'none', VITE_DELETE_COMPRESS_ORIGIN_FILE } = viteEnv
  const algorithmList = VITE_COMPRESS_ALGORITHM.split(',')
  const plugins: PluginOption[] = []
  // 压缩模式
  const compressModeMap = {
    gzip: viteCompression({
      ext: '.gz',
      algorithm: 'gzip',
      deleteOriginFile: VITE_DELETE_COMPRESS_ORIGIN_FILE,
    }),
    brotli: viteCompression({
      ext: '.br',
      algorithm: 'brotliCompress',
      deleteOriginFile: VITE_DELETE_COMPRESS_ORIGIN_FILE,
    }),
  }
  if (algorithmList.includes('gzip'))
    plugins.push(compressModeMap.gzip)

  if (algorithmList.includes('brotli'))
    plugins.push(compressModeMap.brotli)
  return plugins
}

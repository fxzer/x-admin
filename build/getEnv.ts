import path from 'node:path'

export function isDevFn(mode: string): boolean {
  return mode === 'development'
}

export function isProdFn(mode: string): boolean {
  return mode === 'production'
}

export function isTestFn(mode: string): boolean {
  return mode === 'test'
}

// 处理 vite环境变量，将值转换为对应的类型
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const viteEnv: any = {}

  for (const envKey of Object.keys(envConf)) {
    let envValue = envConf[envKey].replace(/\\n/g, '\n')
    envValue = envValue === 'true' ? true : envValue === 'false' ? false : envValue
    if (envKey === 'VITE_PORT')
      envValue = Number(envValue)
    if (envKey === 'VITE_PROXY')
      envValue = JSON.parse(envValue)

    viteEnv[envKey] = envValue
  }
  return viteEnv
}

/**
 * Get user root directory
 * @param dir file path
 */
export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir)
}

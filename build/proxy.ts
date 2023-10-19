import type { ProxyOptions } from 'vite'

type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

type ProxyTargetList = Record<string, ProxyOptions>

/** 创建代理，用于解析 .env.development 代理配置 */
// https://github.com/http-party/node-http-proxy#options
export function setupProxy(proxyList: ProxyList = []) {
  const ret: ProxyTargetList = {}
  for (const [prefix, target] of proxyList) {
    const isHttps = /^https:\/\//.test(target)
    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: path => path.replace(prefix, ''),
      secure: !isHttps,
    }
  }
  return ret
}

import type { Plugin } from 'vite'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import utils from '@pureadmin/utils'
import duration from 'dayjs/plugin/duration'
import { blue, bold, green } from 'picocolors'
import pkg from '../../package.json'

dayjs.extend(duration)

export function setupPrintBuildInfo(): Plugin {
  let config: { command: string }
  let startTime: Dayjs
  let endTime: Dayjs
  let outDir: string
  return {
    name: 'vite:PrintBuildInfo',
    configResolved(resolvedConfig) {
      config = resolvedConfig
      outDir = resolvedConfig.build?.outDir ?? 'dist'
    },
    buildStart() {
      const { name, version, repository: { url } } = pkg
      // eslint-disable-next-line no-console
      console.log(bold(green(`👏欢迎使用${blue(`[${name}]:${version}`)}，如果您感觉不错，记得点击后面链接给个star哦💖${url} `)))
      if (config.command === 'build')
        startTime = dayjs(new Date())
    },
    closeBundle() {
      if (config.command !== 'build')
        return
      endTime = dayjs(new Date())
      const timeString = dayjs.duration(endTime.diff(startTime)).format('mm分ss秒')
      utils.getPackageSize({
        folder: outDir,
        callback: (size: string) => {
          // eslint-disable-next-line no-console
          console.log(bold(green(`🎉恭喜打包完成（总用时${timeString}，总体积${size}）`)),
          )
        },
      })
    },
  }
}

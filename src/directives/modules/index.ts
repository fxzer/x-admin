import type { Directive } from 'vue'

const modules = import.meta.glob('./**/*.ts', { eager: true })

function handleModuleDirectives(modules: any) {
  const directivesMap: { [key: string]: Directive } = {}
  Object.keys(modules).forEach((key) => {
    const item = modules[key].default
    if (item)
      directivesMap[key.replace(/(\.\/|\.ts)/g, '')] = item // 去除头部的 './' 和尾部的 '.ts'
    else
      console.error(`指令模块解析出错: key = ${key}`)
  })
  return directivesMap
}

export default handleModuleDirectives(modules)

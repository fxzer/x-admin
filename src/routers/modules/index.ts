const modules = import.meta.glob('./**/*.ts', { eager: true })

function sortRoutes(routes: any[]) {
  return routes
    .sort((next, pre) => Number(next.meta?.order) - Number(pre.meta?.order))
    .map((i) => {
      if (i.children)
        sortRoutes(i.children)
      return i
    })
}
function handleModuleRoutes(modules: any) {
  const routes: any[] = []
  Object.keys(modules).forEach((key) => {
    const item = modules[key].default
    if (item)
      routes.push(item)
    else
      window.console.error(`路由模块解析出错: key = ${key}`)
  })

  return sortRoutes(routes)
}

export const routes = handleModuleRoutes(modules)

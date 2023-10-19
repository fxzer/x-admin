# x-admin

### 介绍 📖

x-admin 一款基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。

### 在线预览 👀

- Link：

### 代码仓库 ⭐

- Gitee：https://gitee.com/fxzer/x-admin.git
- GitHub：https://github.com/fxzer/x-admin.git

### 项目文档 📚

- 项目更新日志：[CHANGELOG.md](./CHANGELOG.md)

- 项目文档地址：

### 项目功能 🔨

- 使用 Vue3.3 + TypeScript 开发，单文件组件**＜ script setup ＞**
- 采用 Vite4 作为项目开发、打包工具（配置 Gzip 打包、TSX 语法、跨域代理…）
- 使用 Pinia Composition API 替代 Vuex，集成 Pinia 持久化插件
- 使用 TypeScript 对 Axios 整个二次封装（请求拦截、取消、常用请求封装…）
- 支持 Element 组件大小切换、暗黑模式、暗黑主题选择、i18n 国际化
- 使用 VueRouter 进行路由权限拦截、页面按钮权限配置、路由懒加载
- 使用 KeepAlive 对页面进行缓存，支持多级嵌套页面缓存
- 常用自定义指令开发（权限、复制、水印、拖拽、节流、防抖、长按…）
- 集成 unocss 进行样式编写、全局主题变量管理，
- 使用 @antfu/eslint-config和@unocss/eslint-config 自动检查、格式化代码，自动整理排序 UnoCss 类名，无需进行繁琐的Prettier、 ESLint、Stylelint插件安装和配置、及冲突解决
- 使用 simple-git-hooks、lint-staged、commitlint、czg、cz-git、standard-version， 简化 git-hook 配置，规范提交信息，提交前自动修复和格式化代码，及自动生成更新日志文档

### 使用步骤 📔

- **Clone：**

```text
# Gitee
git clone https://gitee.com/fxzer/x-admin.git
# GitHub
git clone https://github.com/fxzer/x-admin.git
```

- **Install：**

```text
pnpm install
```

- **Run：**

```text
pnpm dev
```

- **Build：**

```text
# 开发环境
pnpm build:dev

# 测试环境
pnpm build:test

# 生产环境
pnpm build:pro
```

- **Lint：**

```text
# eslint 检测代码
pnpm lint

#  Eslint 修复并格式化代码
pnpm lint:fix

```

- **commit：**

```text
# 提交代码（提交前会自动执行 lint:lint-staged 命令）
pnpm commit

# 交互式提交
git cz
```


### 目录说明 📚

```text
x-admin
```

### 浏览器支持 🌎

- 本地开发推荐使用 Chrome 最新版浏览器 [Download](https://www.google.com/intl/zh-CN/chrome/)。
- 生产环境支持现代浏览器，不再支持 IE 浏览器，更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)。

| ![IE](https://i.imgtg.com/2023/04/11/8z7ot.png) | ![Edge](https://i.imgtg.com/2023/04/11/8zr3p.png) | ![Firefox](https://i.imgtg.com/2023/04/11/8zKiU.png) | ![Chrome](https://i.imgtg.com/2023/04/11/8zNrx.png) | ![Safari](https://i.imgtg.com/2023/04/11/8zeGj.png) |
| :---------------------------------------------: | :-----------------------------------------------: | :--------------------------------------------------: | :-------------------------------------------------: | :-------------------------------------------------: |
|                   not support                   |                  last 2 versions                  |                   last 2 versions                    |                   last 2 versions                   |                   last 2 versions                   |


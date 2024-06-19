# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# testament-web

## 简介
基于 vue3 和 vite 搭建的模版，用于快速开发

## 项目创建

- 创建：npm create vite@latest

## 项目运行/打包

- 安装依赖包：npm install
- 开发环境：npm run dev/build:dev
- 测试环境：npm run test/build:test
- 生产环境：npm run prod/build:prod

## 所用技术栈

- 包管理器：npm
- 依赖管理：node v18.x以上, 如果你已经使用nvm，可以参考[Github: nvm](https://github.com/nvm-sh/nvm#deeper-shell-integration)来实现node版本的自动切换
- 前端框架： [Vue3.x](https://v3.cn.vuejs.org/)
- 构建工具： [Vite](https://vitejs.dev/)
- 前端UI框架： [element-plus](https://element-plus.org/)
- 代码规范：
  - [ESLint](https://eslint.org/)
  - [Prettier](https://www.prettier.cn/)
  - [Stylelint](https://stylelint.io/)
- 模版引擎： [pug](https://pugjs.org/api/getting-started.html)
- css预处理器1： [stylus](https://stylus.bootcss.com/)
- css预处理器2： [scss](https://sass-lang.com/)
- 状态管理工具：[pinia](https://pinia.vuejs.org/)
- pinia数据持久化插件：[pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/guide/config.html)
- vite插件：
  - vue3等插件hooks自动引入：[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
  - 组件自动按需导入：[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
  - 样式自动导入：[vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import)
  - 使用gzip/brotli压缩资源：[vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression)
  - 自动重启vite服务：[vite-plugin-restart](https://github.com/antfu/vite-plugin-restart)
  - 打包分析插件：[rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)
  
## TODO

- 提交规范：
  - [husky](https://typicode.github.io/husky/#/)
  - npm i husky -D
  - npx husky install
  - npx husky add .husky/pre-commit
  - [commitlint](https://commitlint.js.org/#/)
  - 全局安装：npm install commitizen -g
  - 项目内初始化：commitizen init cz-conventional-changelog --save --save-exact
  - [lint-staged](https://www.npmjs.com/package/lint-staged)
- 版本检测

## 工程目录

```shell
.
├── .hbuilderx hbuilderx编译器配置文件
├── .vscode
│   ├── extensions.json vscode工作区插件推荐
│   └── settings.json vscode工作区设置
├── env 环境配置
├── src
│   ├── api 接口
│   ├── components 公共组件
│   ├── config 项目配置
│   ├── model 模型
│   │   ├── data 静态数据
│   │   ├── enum 枚举
│   │   ├── interface 接口
│   ├── pages 页面目录
│   ├── service 服务
│   │   ├── base-service 公共服务
│   │   ├── data-service 业务服务
│   ├── store 状态管理
│   ├── styles 样式
│   └── utils 工具包
│   ├── App.vue 入口文件
│   ├── main.js 主入口
│   └── style.css vue3内置的常用样式
├── .editorconfig 自定义编辑器行为(需要vscode扩展安装EditorConfig)
├── .eslintignore eslint忽略配置
├── .eslintrc eslint配置
├── .gitignore git忽略配置
├── .prettierrc.js prettier代码格式化配置
├── commitlint.config.js git提交规范配置
├── index.html 项目入口
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js vite配置
```

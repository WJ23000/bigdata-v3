/*
 * @Author: 汪军 624473119@qq.com
 * @Date: 2023-10-24 08:59:41
 * @LastEditors: 汪军 624473119@qq.com
 * @LastEditTime: 2024-04-17 09:37:36
 * @FilePath: \testament-web\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";
import viteCompression from "vite-plugin-compression";
import ViteRestart from "vite-plugin-restart";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    base: "./",
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router", "vuex", "@vueuse/head"],
        dts: "src/auto-import.d.ts",
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dirs: ["src/components"], // 目标文件夹
        extensions: ["vue", "jsx"], // 文件类型
        dts: "src/components.d.ts", // 输出文件，里面都是一些import的组件键值对
        resolvers: [ElementPlusResolver()],
      }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: "element-plus",
            esModule: true,
            resolveStyle: (name) => {
              return `element-plus/theme-chalk/${name}.css`;
            },
          },
        ],
      }),
      viteCompression(),
      ViteRestart({
        restart: ["vite.config.js"],
      }),
      visualizer(),
    ],
    optimizeDeps: {
      // 开发时 解决这些commonjs包转成esm包
      include: [
        "@jiaminghi/c-render",
        "@jiaminghi/c-render/lib/plugin/util",
        "@jiaminghi/charts/lib/util/index",
        "@jiaminghi/charts/lib/util",
        "@jiaminghi/charts/lib/extend/index",
        "@jiaminghi/charts",
        "@jiaminghi/color",
      ],
    },
    build: {
      assetsInlineLimit: 1,
    },
    define: {
      "process.env": {},
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"), // 路径别名
      },
      extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    esbuild: {
      drop: ["debugger"], // 删除所有的debugger
    },
    server: {
      // host: "https://api2.1919kd.cn",
      cors: true,
      // port: 8888,
      open: false, //自动打开
      proxy: {
        // 如果接口中没有统一的后缀可自定义；如果有统一后缀, 如api, 直接写api即可, 也不用rewrite了
        "^/api": {
          target: env.VITE_BASE_API, // 真实接口地址, 后端给的基地址
          changeOrigin: true, // 允许跨域
          secure: false, // 关键参数，不懂的自己去查
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});

// @ts-nocheck
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
// import { loadEnv } from 'vite';
import config from './app.config.js'

// https://vitepress.dev/reference/site-config
// export default defineConfig({
export default defineConfig(async ({command, mode}) => {

  // const env = loadEnv(mode, process.cwd(), '');

  return {
    srcDir: 'src',
    outDir: 'dist',
    lastUpdated: true,
    // 应用级配置选项
    ...config(mode),
    cleanUrls: true,
    rewrites: {
      'views/:page/index.md': ':page.md'
    },
    // https://cn.vite.dev/config/
    vite: {
      server: {
        port: 5173,
      },
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ['legacy-js-api', 'import']
          }
        }
      },
      resolve: {
        alias: [
        ]
      }
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入node提供内置模块path:可以获取绝对路径
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  //配置代理跨域
  server: {
    proxy: {
      '/bus-ticket': {
        target: 'http://8.137.17.16:8060/bus-ticket',
        changeOrigin: true,

        rewrite: path => path.replace(/^\/bus-ticket/, '') //重写路径,替换/api
      }
    }
  }
})

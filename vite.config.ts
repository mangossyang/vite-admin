import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
import { parseEnv } from './vite/util'
import WindiCSS from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, 'src'),
//       'views': resolve(__dirname, 'src/views'),
//     }
//   }
// })


export default ({ command, mode }: ConfigEnv) => {
  const env = parseEnv(loadEnv(mode, '.'))
  const isBuild = command === 'build'
  return {
    plugins: [vue(), WindiCSS(),
    viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: !isBuild,
    }),],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        'views': resolve(__dirname, 'src/views'),
      }
    }
  }
}
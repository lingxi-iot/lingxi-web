import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

export default defineConfig({
  plugins: [vue(),vueJsx({})],
  css: {
    preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
              api: 'modern-compiler', // or 'modern'
        }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

})

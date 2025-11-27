import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const distDir = path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'dist')
        const indexHtml = path.join(distDir, 'index.html')
        const notFoundHtml = path.join(distDir, '404.html')

        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml)
          console.log('Copied index.html to 404.html')
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

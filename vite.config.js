import { resolve } from 'path'
import { defineConfig } from 'vite'

module.exports = {
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        nested: resolve(__dirname, './src/nested/about.html'),
      },
    }
  },
  base: '/apple-lab',
}
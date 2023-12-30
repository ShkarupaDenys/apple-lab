import { resolve } from 'path'

module.exports = {
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        nested: resolve(__dirname, './src/nested/about.html'),
        nested: resolve(__dirname, './src/nested/ui-kit.html'),
      },
    }
  },
  base: '/apple-lab',
}
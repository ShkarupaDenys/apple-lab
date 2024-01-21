import { resolve } from 'path'

module.exports = {
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        model: resolve(__dirname, './src/model.html'),
        model: resolve(__dirname, './src/category.html'),
        model: resolve(__dirname, './src/fault.html'),
        model: resolve(__dirname, './src/city.html'),
      },
    }
  },
  base: '/apple-lab',
}
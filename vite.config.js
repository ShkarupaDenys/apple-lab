import { resolve } from 'path'

module.exports = {
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        model: resolve(__dirname, './src/model.html'),
        category: resolve(__dirname, './src/category.html'),
        fault: resolve(__dirname, './src/fault.html'),
        city: resolve(__dirname, './src/city.html'),
        android: resolve(__dirname, './src/android.html'),
        contacts: resolve(__dirname, './src/contacts.html'),
        'about-us': resolve(__dirname, './src/about-us.html'),
        'contacts-general': resolve(__dirname, './src/contacts-general.html'),
        'technical-page': resolve(__dirname, './src/technical-page.html'),
      },
    }
  },
  base: '/apple-lab',
}
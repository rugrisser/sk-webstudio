module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles.scss";'
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Sk.WebStudio'
        return args
      })
  }
}
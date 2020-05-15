module.exports = {
  publicPath: process.env.BASE_URL,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100 // 1rem == 100px
          })
        ]
      }

    }
  }
}

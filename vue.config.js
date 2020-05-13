module.exports = {
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

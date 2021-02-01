module.exports = {
  publicPath: '/learn-vue-online-shop/',
  css: {
    loaderOptions: {
      sass: {
        prependData: ` @import "@/assets/styles/scss/styles.scss"; `
      }
    }
  }
}

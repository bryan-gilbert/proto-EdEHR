module.exports = {

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:27000',
        pathRewrite: {'^/api': ''}
      }
    }
  }
}

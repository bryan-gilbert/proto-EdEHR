module.exports = {
  env: {
    production: {
      presets: ['@vue/app', '@babel/env'],
      comments: false
    },
    test: {
      presets: ['@babel/env']
    }
  }
}

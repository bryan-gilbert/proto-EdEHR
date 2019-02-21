module.exports = {
  env: {
    development: {
      presets: ['@vue/app', '@babel/env'],
      comments: false
    },
    production: {
      presets: ['@vue/app', '@babel/env'],
      comments: false
    },
    test: {
      presets: ['@babel/env']
    }
  }
}

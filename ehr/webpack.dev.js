// var path = require('path')
var webpack = require('webpack')
// const MiniCssExtractPlugin = require(`mini-css-extract-plugin`)

process.env.NODE_ENV = 'development'

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
  mode: 'development',
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  // TODO delete following after confirming the dev server script takes care of these configuration settings
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: true,
  //   overlay: true
  // },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

// const sassLoader = config.module.rules.find(({ test }) => test.test(`.scss`))
// // Replace the `vue-style-loader` with
// // the MiniCssExtractPlugin loader.
// sassLoader.use[0] = MiniCssExtractPlugin.loader

// const sassLoader = config.module.rules.find(({ test }) => test.test(`.scss`))
// Replace the `vue-style-loader` with
// the MiniCssExtractPlugin loader.
// sassLoader.use[0] = MiniCssExtractPlugin.loader

module.exports = config

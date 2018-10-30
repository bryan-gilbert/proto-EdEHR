// var path = require('path')
// var webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`)
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`)
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`)

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(),
    // Since webpack v4, specifying mode automatically configures DefinePlugin
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // Todo consider addng the following after understanding how they relate to the plugins below
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
  ],
  devtool: '#source-map',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  }
})

const sassLoader = config.module.rules.find(({ test }) => test.test(`.scss`))
// Replace the `vue-style-loader` with
// the MiniCssExtractPlugin loader.
sassLoader.use[0] = MiniCssExtractPlugin.loader

module.exports = config

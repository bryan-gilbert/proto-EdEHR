const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeSassMagicImporter = require(`node-sass-magic-importer`)
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const env = process.env.NODE_ENV || 'development'
const minify = env === `production`

module.exports = {
  entry: path.join(__dirname, `src`, `main.js`),
  optimization: {
    splitChunks: {
      // Must be specified for HtmlWebpackPlugin to work correctly.
      // See: https://github.com/jantimon/html-webpack-plugin/issues/882
      chunks: `all`
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'What\'s your name bud',
      filename: path.join(__dirname, `dist`, `index.html`),
      template: path.join(__dirname, `static`, `index.html`),
      inject: true,
      minify: minify ? {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // More options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      } : false
    })
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: `vue-loader`
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        include: [path.join(__dirname, `src`)]
      },
      {
        test: /\.scss$/,
        use: [
          `vue-style-loader`,
          {
            loader: `css-loader`,
            options: {
              sourceMap: true
            }
          },
          {
            loader: `sass-loader`,
            options: {
              importer: nodeSassMagicImporter(),
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
}

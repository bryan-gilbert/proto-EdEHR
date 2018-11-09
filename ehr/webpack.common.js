const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeSassMagicImporter = require(`node-sass-magic-importer`)
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`)

const env = process.env.NODE_ENV || 'development'
const destination = env === `production` ? 'dist' : 'dev'
const hints = env === 'production' ? 'warning' : false

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
    new CleanWebpackPlugin([destination]),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, destination, `index.html`),
      template: path.join(__dirname, `static`, `index.html`)
    }),
    new MiniCssExtractPlugin()
  ],
  performance: {
    hints: hints
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, destination)
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
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
          MiniCssExtractPlugin.loader,
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

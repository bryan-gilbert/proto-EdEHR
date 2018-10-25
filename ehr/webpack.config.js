var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const nodeSassMagicImporter = require(`node-sass-magic-importer`)
const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`)
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`)
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`)

const env = process.env.NODE_ENV || 'development'
const minify = env === `production`
const sourceMap = env === `development`

const config = {
  entry: path.join(__dirname, `src`, `main.js`),
  mode: env,
  output: {
    publicPath: `/`
  },
  optimization: {
    splitChunks: {
      // Must be specified for HtmlWebpackPlugin to work correctly.
      // See: https://github.com/jantimon/html-webpack-plugin/issues/882
      chunks: `all`
    }
  },
  devtool: sourceMap ? `cheap-module-eval-source-map` : undefined,
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
              sourceMap
            }
          },
          {
            loader: `sass-loader`,
            options: {
              importer: nodeSassMagicImporter(),
              sourceMap
            }
          }
        ]
      }
    ]
  },
  // TODO consider need for resolve later
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
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
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
  }
}

// TODO untested
if (minify) {
  config.optimization.minimizer = [
    new OptimizeCSSAssetsPlugin(),
    // Enabled by default in production mode if
    // the `minimizer` option isn't overridden.
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  // TODO untested
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

if (env !== `development`) {
  config.plugins.push(new MiniCssExtractPlugin())

  const sassLoader = config.module.rules.find(({ test }) => test.test(`.scss`))
  // Replace the `vue-style-loader` with
  // the MiniCssExtractPlugin loader.
  sassLoader.use[0] = MiniCssExtractPlugin.loader
}

module.exports = config

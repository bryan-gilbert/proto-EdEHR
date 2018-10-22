const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const openBrowser = require(`./lib/open-browser`)

const config = require('../webpack.config')
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  port: 5000,
  historyApiFallback: {
    index: 'index.html'
  }
}
process.on('unhandledRejection', function (error, promise) {
  console.error('UNHANDLED REJECTION', error.stack)
})

process.on('uncaughtException', function (error) {
  console.error('UNCAUGHT EXCEPTION', error, error.stack)
})

WebpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, options)

server.listen(options.port, options.host, () => {
  console.log('dev server listening on port  ', options.port, options)
  openBrowser(`http://${options.host}:${options.port}`)
})

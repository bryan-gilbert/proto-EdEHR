const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const openBrowser = require(`./lib/open-browser`)

var port = process.env.PORT || '5000'
var host = process.env.HOST || 'localhost'

const config = require('./webpack.dev')
const options = {
  hot: true,
  host: host,
  disableHostCheck: true,
  port: port,
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

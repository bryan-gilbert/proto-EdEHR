'use strict'

function Configuration (env) {
  var defaultData = {
    apiHost: 'localhost',
    apiPort: 27000,
    apiPath: 'api'
  } // configData['default']
  this.globalOptions = Object.assign({}, defaultData)
}

var _innerDef = Configuration.prototype

/*
 Get http or https as defined by Configuration. Defaults to http.
 */
_innerDef.getApiScheme = function () {
  var scheme = this.getOption('apiScheme') || 'http'
  return scheme
}
_innerDef.getApiHost = function () {
  return this.getOption('apiHost')
}
_innerDef.getApiPort = function () {
  var port = this.getOption('apiPort')
  return port
}
_innerDef.getApiPath = function () {
  var path = this.getOption('apiPath')
  return path
}

_innerDef.getApiUrl = function () {
  var path = this.getApiPath()
  return this.getBaseUrl() + path + '/'
}

_innerDef.getBaseUrl = function () {
  var scheme = this.getApiScheme()
  var port = this.getApiPort()
  port = port ? ':' + port : ''
  var ipAddress = this.getApiHost()
  return scheme + '://' + ipAddress + port + '/'
}

_innerDef.getApiLoggedOnUrl = function () {
  return this.getApiUrl() + 'isLoggedOn'
}

_innerDef.setOption = function (key, value) {
  this.globalOptions[key] = value
  return this // return this to allow chaining
}

_innerDef.getOption = function (key) {
  return this.globalOptions[key]
}

export default Configuration

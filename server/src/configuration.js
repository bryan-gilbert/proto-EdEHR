'use strict'
var assert = require('./prod-dev-assert')
var logger = require('./logger')
logger.level = 'silly'

var defaultEnv = process.env.NODE_ENV || 'test';

(function () {
  var Configuration = (function () {
    var Configuration = function (env) {
      env = env || defaultEnv
      assert.typeOf(env, 'string')
      assert.isTrue(env === Configuration.testEnv ||
        env === Configuration.devEnv ||
        env === Configuration.betaEnv ||
        env === Configuration.prodEnv
      )
      try {
        // console.log("Load Configuration for env: " + env);
        var configData = require('../config.json')
        // console.log(configData);
        var envData = configData[env]
        var defaultData = configData['default']
        this.globalOptions = Object.assign({}, defaultData, envData)
        this.setOption('env', env)
        this.setOption('platform', require('os').platform())
      } catch (err) { logger.error(err) }
      assert.isDefined(this.globalOptions)
    }
    Configuration.assertValidEnv = function (storageEnvironment) {
      assert.typeOf(storageEnvironment, 'string')
      assert.isTrue(storageEnvironment === Configuration.testEnv ||
        storageEnvironment === Configuration.devEnv ||
        storageEnvironment === Configuration.beta ||
        storageEnvironment === Configuration.prodEnv
      )
    }
    Configuration.testEnv = 'test'
    Configuration.devEnv = 'development'
    Configuration.prodEnv = 'production'
    Configuration.betaEnv = 'beta'

    var _innerDef = Configuration.prototype
    _innerDef.getBCryptRounds = function () {
      var r = this.getOption('bcryptRounds')
      // console.log("BCrypt rounds: " + r);
      return r
    }
    _innerDef.getEnv = function () {
      return this.getOption('env')
    }
    _innerDef.isProduction = function () {
      return Configuration.prodEnv == this.getOption('env')
    }

    _innerDef.getPlatform = function () {
      return this.getOption('platform')
    }
    _innerDef.getDbUser = function () {
      return this.getOption('user')
    }
    _innerDef.getDbCreateUser = function () {
      return this.getOption('super')
    }
    _innerDef.getDbUserPassword = function () {
      return this.getOption('pw')
    }
    _innerDef.getDbCreateUserPassword = function () {
      return this.getOption('superPw')
    }
    _innerDef.getMainDatabaseName = function () {
      return this.getOption('db')
    }

    _innerDef.getAppLogLevel = function () {
      var level = this.getOption('appLogLevel') || 'info'
      return level
    }
    _innerDef.getWebLogLevel = function () {
      var level = this.getOption('webLogLevel') || 'info'
      return level
    }

    /*
     Get http or https as defined by Configuration. Defaults to http.
     */
    _innerDef.getAppScheme = function () {
      var scheme = this.getOption('appScheme') || 'http'
      return scheme
    }
    _innerDef.getAppIPAddress = function () {
      return this.getOption('appIp')
    }
    _innerDef.getAppPort = function () {
      var port = this.getOption('appPort')
      return port
    }
    _innerDef.getAppPath = function () {
      var path = this.getOption('appPath') || 'thoht'
      return path
    }
    _innerDef.getAppUrl = function () {
      var scheme = this.getAppScheme()
      var port = this.getAppPort()
      port = port ? ':' + port : ''
      var ipAddress = this.getAppIPAddress()
      return scheme + '//' + ipAddress + port + '/'
    }

    _innerDef.getWebUrl = function () {
      var isMac = this.getPlatform() == 'darwin'
      var scheme = this.getOption(isMac ? 'webSchemeMac' : 'webScheme')
      var url = this.getOption(isMac ? 'webURLMac' : 'webURL')
      return scheme + '://' + url + '/'
    }
    /**
     * Set a global option
     * @static
     * @param {string} key
     * @param {*} value
     * @returns {Configuration}
     */
    _innerDef.setOption = function (key, value) {
      this.globalOptions[key] = value
      return this
    }

    /**
     * Get a global option
     * @static
     * @param {string} key
     * @returns {*}
     */
    _innerDef.getOption = function (key) {
      return this.globalOptions[key]
    }

    // finish defining the module function
    return Configuration
  })()
  // EXPORT the module ....
  var root = this
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Configuration
  } else {
    root.Configuration = Configuration
  }
}).call(this)

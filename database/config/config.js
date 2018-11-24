'use strict'

/**
 * Module dependencies.
 */
var _, chalk, glob, fs, path
_ = require('lodash')
chalk = require('chalk')
glob = require('glob')
fs = require('fs')
path = require('path')

/**
 * Validate NODE_ENV existence
 */
var validateEnvironmentVariable = function () {
  var environmentFiles = glob.sync(
    './config/env/' + process.env.NODE_ENV + '.js'
  )
  console.log()
  if (!environmentFiles.length) {
    if (process.env.NODE_ENV) {
      console.error(
        chalk.red(
          '+ Error: No configuration file found for "' +
            process.env.NODE_ENV +
            '" environment using development instead'
        )
      )
    } else {
      console.error(
        chalk.red(
          '+ Error: NODE_ENV is not defined! Using default development environment'
        )
      )
    }
    process.env.NODE_ENV = 'development'
  }
  // Reset console color
  console.log(chalk.white(''))
}

/**
 * Validate Secure=true parameter can actually be turned on
 * because it requires certs and key files to be available
 */
var validateSecureMode = function (config) {
  if (!config.secure || config.secure.ssl !== true) {
    return true
  }

  var privateKey = fs.existsSync(path.resolve(config.secure.privateKey))
  var certificate = fs.existsSync(path.resolve(config.secure.certificate))

  if (!privateKey || !certificate) {
    console.log(
      chalk.red(
        '+ Error: Certificate file or key file is missing, falling back to non-SSL mode'
      )
    )
    console.log(
      chalk.red(
        '  To create them, simply run the following from your shell: sh ./scripts/generate-ssl-certs.sh'
      )
    )
    console.log()
    config.secure.ssl = false
  }
}

/**
 * Initialize global configuration
 */
var initGlobalConfig = function () {
  // Validate NODE_ENV existence
  validateEnvironmentVariable()

  // Get the default config
  var defaultConfig = require(path.join(process.cwd(), 'config/env/default'))

  // Get the current config
  var environmentConfig =
    require(path.join(process.cwd(), 'config/env/', process.env.NODE_ENV)) ||
    {}

  // Merge config files
  var config = _.merge(defaultConfig, environmentConfig)

  // Validate Secure SSL mode can be used
  validateSecureMode(config)

  return config
}

/**
 * Set configuration object
 */
module.exports = initGlobalConfig()

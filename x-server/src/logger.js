'use strict'
var winston = require('winston')
// var moment = require('moment')
var innerLogger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({ level: 'info' })
//        new (winston.transports.Console)({'timestamp':function() {
//            return moment().format('YYYY MM DD HH:mm:ss');
//        } ,'colorize':true})
        //, new (winston.transports.File)({ filename: 'somefile.log' })
  ]
})

// innerLogger.transports.console.level = 'info'

const logger = {}
logger.verbose = function () {
  innerLogger.verbose.apply(this, arguments)
}
logger.warn = function () {
  innerLogger.warn.apply(this, arguments)
}
logger.info = function () {
  innerLogger.info.apply(this, arguments)
}
logger.error = function () {
  innerLogger.error.apply(this, arguments)
}

logger.restoreDefaultLevel = function () {
  innerLogger.transports.console.level = 'info'
}

logger.isVerbose = function () { return innerLogger.transports.console.level === 'verbose' }

logger.__setLevel = function (level) {
  var oldLevel = innerLogger.transports.console.level
  innerLogger.transports.console.level = level
  return oldLevel
}

logger.setLevel = function (level) {
  return this.__setLevel(level)
}

logger.setVerboseLevel = function () {
  return this.__setLevel('verbose')
}

logger.setInfoLevel = function () {
  return this.__setLevel('info')
}

logger.setWarnLevel = function () {
  return this.__setLevel('warn')
}

module.exports = logger

/*
 (function () {
 console.log("level 1");
 var logger = (function () {
 var logger = function() {

 }
 console.log("level 2");
 //var ThohtCollection = function (userData, storageEnvironment, verbose) {
 var winstonLogger = new (winston.Logger)({
 transports: [
 new (winston.transports.Console)({'timestamp':function() {
 return moment().format('YYYY MM DD HH:mm:ss');
 } ,'colorize':true})
 //, new (winston.transports.File)({ filename: 'somefile.log' })
 ]
 });
 winston.remove(winston.transports.Console);
 winston.add(winston.transports.Console);
 //         winston.remove(winston.transports.Console);
 //         winston.add(winston.transports.Console, {'timestamp':true,'colorize':true);
 return logger;
 })();
 var root = this;
 if (typeof module !== 'undefined' && module.exports) {
 module.exports = logger;
 } else {
 root.Logger = logger;
 }
 }).call(this);

 */
/* ************
 Below is some code snipped from the web that contains bits that might be useful when I come to
 make a production logging system.
 */

/*
 'use strict';

 var util = require('util'),
 winston = require('winston'),
 logger = new winston.Logger(),
 production = (process.env.NODE_ENV || '').toLowerCase() === 'production';

 module.exports = {
 middleware: function(req, res, next){
 console.info(req.method, req.url, res.statusCode);
 next();
 },
 production: production
 };

 // Override the built-in console methods with winston hooks
 switch((process.env.NODE_ENV || '').toLowerCase()){
 case 'production':
 production = true;
 logger.add(winston.transports.File, {
 filename: __dirname + '/application.log',
 handleExceptions: true,
 exitOnError: false,
 level: 'warn'
 });
 break;
 case 'test':
 // Don't set up the logger overrides
 return;
 default:
 logger.add(winston.transports.Console, {
 colorize: true,
 timestamp: true,
 level: 'info'
 });
 break;
 }

 function formatArgs(args){
 return [util.format.apply(util.format, Array.prototype.slice.call(args))];
 }

 console.log = function(){
 logger.info.apply(logger, formatArgs(arguments));
 };
 console.info = function(){
 logger.info.apply(logger, formatArgs(arguments));
 };
 console.warn = function(){
 logger.warn.apply(logger, formatArgs(arguments));
 };
 console.error = function(){
 logger.error.apply(logger, formatArgs(arguments));
 };
 console.debug = function(){
 logger.debug.apply(logger, formatArgs(arguments));
 };
 */

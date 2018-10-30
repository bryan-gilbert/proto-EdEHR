const nodeAssert = require('assert').strict

var nil = function () { }
var equal = nil
var notEqual = nil
var ok = nil
var isTrue = nil
var isDefined = nil
var typeOf = nil

if (process.env.mode !== 'production') {
  equal = function (actual, expected, message) {
    nodeAssert.equal(actual, expected, message)
  }
  notEqual = function (actual, expected, message) {
    nodeAssert.notEqual(actual, expected, message)
  }
  ok = function (value, message) {
    nodeAssert.ok(value, message)
  }
  isTrue = function (value, message) {
    nodeAssert.equal(true, value, message)
  }
  isDefined = function (value, message) {
    nodeAssert.notEqual(undefined, value, message)
  }
  typeOf = function (value, type, message) {
    nodeAssert.equal(typeof value, type, message)
  }
}

module.exports = {
  equal,
  notEqual,
  ok,
  isTrue,
  isDefined,
  typeOf
}

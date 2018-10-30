'use strict'
var expect = require('chai').expect
var logger = require('../src/logger')

/* global describe it */
describe('Test logger', function () {
  it("logger has method 'log'", function () {
    expect(logger).itself.to.respondTo('warn')
    expect(logger).itself.to.respondTo('verbose')
    expect(logger).itself.to.respondTo('info')
    expect(logger).itself.to.respondTo('error')
  })
  it('info a message', function () {
    logger.info('Info: During Tests this should appear on stdout')
  })
  it('warn a message', function () {
    logger.warn('Warn: During Tests this should appear on stdout')
  })
  it('error a message', function () {
    logger.error('Error: During Tests this should appear on stdout')
  })
})

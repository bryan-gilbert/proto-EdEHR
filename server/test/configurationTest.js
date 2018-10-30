'use strict'
var assert = require('chai').assert
var Configuration = require('../src/configuration')

/* global describe it */
describe('Configuration Tests.', function () {
  describe('Development Environment.', function () {
    var configDev = new Configuration(Configuration.devEnv)
    it('can assert type of configuration', function (done) {
      assert.instanceOf(configDev, Configuration)
      done()
    })
    it('validate main database name for development env', function (done) {
      var mainDbName = configDev.getMainDatabaseName()
      assert.equal('db_dev', mainDbName)
      done()
    })
  })

  describe('Test Environment.', function () {
    var configTest = new Configuration(Configuration.testEnv)
    it('can assert type of configuration', function (done) {
      assert.instanceOf(configTest, Configuration)
      done()
    })
    it('validate main database name for development env', function (done) {
      var mainDbName = configTest.getMainDatabaseName()
      assert.equal('db_test', mainDbName)
      done()
    })
  })

  describe('Production Environment.', function () {
    var configTest = new Configuration(Configuration.prodEnv)
    it('Can assert type of configuration object', function (done) {
      assert.instanceOf(configTest, Configuration)
      done()
    })
    it('validate main database name for development env', function (done) {
      var mainDbName = configTest.getMainDatabaseName()
      assert.equal('db_prod', mainDbName)
      done()
    })
  })

  describe('Cross Env Check.', function () {
    var configTest = new Configuration(Configuration.testEnv)
    var configDev = new Configuration(Configuration.devEnv)
    var configProd = new Configuration(Configuration.prodEnv)
    it('dev and test have different db names', function (done) {
      var devDbName = configDev.getMainDatabaseName()
      var testDbName = configTest.getMainDatabaseName()
      assert.notEqual(devDbName, testDbName)
      done()
    })
    it('dev and prod have different db names', function (done) {
      var devDbName = configDev.getMainDatabaseName()
      var testDbName = configTest.getMainDatabaseName()
      var prodDbName = configProd.getMainDatabaseName()
      assert.notEqual(devDbName, prodDbName)
      done()
    })
    it('prod and test have different db names', function (done) {
      var devDbName = configDev.getMainDatabaseName()
      var testDbName = configTest.getMainDatabaseName()
      var prodDbName = configProd.getMainDatabaseName()
      assert.notEqual(prodDbName, testDbName)
      done()
    })

    it('check for property defaults to work', function (done) {
      var dev = configDev.getOption('aDefaultProperty')
      var test = configTest.getOption('aDefaultProperty')
      var prod = configProd.getOption('aDefaultProperty')
      assert.equal(prod, dev, 'prod == dev aDefaultProperty')
      assert.equal(prod, test, 'prod == test aDefaultProperty')
      assert.equal(dev, test, 'dev == test aDefaultProperty')
      done()
    })

    it('check for property default overrides to work', function (done) {
      var dev = configDev.getOption('aTestProperty')
      var test = configTest.getOption('aTestProperty')
      var prod = configProd.getOption('aTestProperty')
      assert.equal(prod, dev, 'prod == dev aTestProperty')
      assert.notEqual(prod, test, 'prod != test aTestProperty')
      assert.notEqual(dev, test, 'dev != test aTestProperty')
      done()
    })
  })
})

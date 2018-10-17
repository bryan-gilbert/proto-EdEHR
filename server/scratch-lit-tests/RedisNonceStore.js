const redis = require('redis')
const RedisNonceStore = require('../src/redis-nonce-store')
const shared = require('./shared')
/* global describe it   */
describe('RedisNonceStore', function () {
  const redisClient = redis.createClient()

  shared.shouldBehaveLikeNonce(() => {
    return new RedisNonceStore(redisClient)
  })

  it('should put the client on redis property (private)', function () {
    const store = new RedisNonceStore(redisClient)

    store.redis.should.equal(redisClient)
  })

  it('should ignore old consumer_key arg as first argument', function () {
    const store = new RedisNonceStore('consumer_key', redisClient)

    store.redis.should.equal(redisClient)
  })
})

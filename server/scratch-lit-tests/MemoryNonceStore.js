const MemoryNonceStore = require('../src/memory-nonce-store')
const shared = require('./shared')

/* global describe  */
describe('MemoryNonceStore', () =>
  shared.shouldBehaveLikeNonce(() => {
    return new MemoryNonceStore()
  }))

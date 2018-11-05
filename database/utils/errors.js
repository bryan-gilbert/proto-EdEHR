
class ParameterError extends Error {
  constructor (message) {
    super(...arguments)
    this.name = 'ParameterError'
    this.status = 400
    this.message = message
  }
}
/*
Possible other error classes. To use consider setting the name and/or status properties

class ConsumerError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class ExtensionError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class StoreError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class SignatureError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class NonceError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
class OutcomeResponseError extends Error {
  constructor (message) {
    super(...arguments)
    this.message = message
  }
}
*/

module.exports = {
  // ConsumerError,
  // ExtensionError,
  // StoreError,
  // SignatureError,
  // NonceError,
  // OutcomeResponseError
  ParameterError
}

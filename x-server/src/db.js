const axios = require('axios')
const debug = require('debug')('db')

const URN = `http://localhost:5678/testSpace`

const DB = {}

DB.namespaces = []

DB.createNamespace = function (namespace, done) {
  const url = `${URN}/`
  // ${namespace}/`
  console.log("Send to ", url)
  axios.post(url, {foo: 1})
  .then(res => {
    debug('create namespace results ', res)
    DB.namespaces.push(namespace)
    done(null, res)
  })
  .catch(error => {
    debug(`create namespace error ${error.message}`)
    done(error, null)
  })
}

DB.lookup = function lookup (type, id, done) {
  debug(`Inside lookup type ${type} id: ${id}`)
  const url = `${URN}/${type}/${id}`
  axios.get(url)
  .then(res => {
    debug(`lookup results ${res.data.id}`)
    done(null, res.data)
  })
  .catch(error => {
    if (error && error.response.status === 404) {
      debug(`could not find user info`)
      done(null, false)
    } else {
      debug(`lookupUser error ${error.message}`)
      done(error, null)
    }
  })
}
DB.updateUser = function updateUser (user, done) {
  debug(`Inside update user for ${user.id}`)
  const url = `${URN}/${user.id}`
  axios.put(url, user)
  .then(res => {
    debug('updateUser results ', res.data.id)
    done(null, res.data)
  })
  .catch(error => {
    debug(`update error ${error.message}`)
    done(error, null)
  })
}
DB.storeUser = function storeUser (user, done) {
  debug(`Inside store user ${user}`)
  const url = `${URN}`
  user.id = user.id ? user.id : user.user_id
  axios.post(url, user)
  .then(res => {
    debug('store results do we need to return the id? ', res.data)
    done(null, res.data)
  })
  .catch(error => {
    debug(`store error ${error.message}`)
    done(error)
  })
}
DB.findCreate = function findCreate (id, userInfo, done) {
  const _this = this
  _this.lookupUser(id, function (err, data) {
    if (err) {
      return done(err, null)
    }
    if (!data) {
      return _this.storeUser(userInfo, done)
    }
    done(null, data)
  })
}

module.exports = { DB }

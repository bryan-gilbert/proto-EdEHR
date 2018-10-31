const axios = require('axios')
const debug = require('debug')('server')

const UserData = {}
const URL = 'http://localhost:5678/userData'

UserData.lookupUserData = function lookupUserData (userId, done) {
  debug(`Inside lookupUserData ${userId}`)
  axios.get(`${URL}/${userId}`)
  .then(res => {
    debug(`lookupUserData results ${res.data.id}`)
    done(null, res.data)
  })
  .catch(error => {
    debug(`lookupUserData error  ${error.message}`)
    if (error && error.response.status === 404) {
      done(null, false)
    } else {
      done(error, null)
    }
  })
}
UserData.storeUserData = function storeUserData (userData, done) {
  debug(`Inside storeUserData  ${userData}`)
  const url = `${URL}`
  axios.post(url, userData)
  .then(res => {
    debug(`storeUserData  ${res.data.id}`)
    done(null, res.data)
  })
  .catch(error => {
    debug(`storeUserData error ${error.message}`)
    done(error, null)
  })
}
UserData.updateUserData = function updateUserData (userData, done) {
  debug(`Inside updateUserData ${JSON.stringify(userData)}`)
  const url = `${URL}/${userData.id}`
  axios.put(url, userData)
  .then(res => {
    debug(`updateUserData results ${res.data.id}`)
    done(null, res.data)
  })
  .catch(error => {
    debug(`updateUserData url: ${url} error: ${error.message}`)
    done(error, null)
  })
}

UserData.upsertUserData = function upsertUserData (userData, done) {
  const _this = this
  const id = userData.id
  debug(`upsertUserData id ${id}`)
  _this.lookupUserData(id, function (err, data) {
    if (err) {
      return done(err, null)
    }
    if (!data) {
      debug(`upsertUserData not found so store data ${userData}`)
      return _this.storeUserData(userData, done)
    }
    debug(`upsertUserData found data so update data ${userData}`)
    return _this.updateUserData(userData, done)
  })
}

module.exports = { UserData }

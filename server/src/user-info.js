const axios = require('axios')
const debug = require('debug')('server')
const UserInfo = {}
const URN = `http://localhost:5678/users`

UserInfo.lookupUser = function lookupUser (userId, done) {
  debug(`Inside lookup user and searching for ${userId}`)
  const url = `${URN}/${userId}`
  axios.get(url)
  .then(res => {
    debug(`lookupUser results ${res.data.id}`)
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
UserInfo.updateUser = function updateUser (user, done) {
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
UserInfo.storeUser = function storeUser (user, done) {
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
UserInfo.findCreate = function findCreate (id, userInfo, done) {
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

// TODO move this back into app and then put into a session management module
UserInfo.extractUniqueUserId = function extractUniqueUserId (user, done) {
  // what element of the user record do we want to store in the session?
  // e.g. req.session.passport.user = {id: '..'}
  debug(`extractUniqueUserId id: '${user.id}'`)
  const userId = user.id
  // A user ids is only unique to the tool consumer. So if we store just the user id we be
  // assuming there is only one tool consumer out in the wild.  We must prepend the key given to the
  // tool consumer to make the user id unique.
  // TODO create some namespace based on tool consumer key
  done(null, userId)
}

module.exports = { UserInfo }

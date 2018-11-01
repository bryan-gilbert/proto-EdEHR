function findObject (model, idKey, type) {
  return (req, res, next, value) => {
    var s = {}
    s[idKey] = value
    model.find(s)
    .then((item) => {
      req[type] = item
      next()
    })
    .catch((err) => {
      res.status(404).send('No ' + type)
    })
  }
}

module.exports = findObject

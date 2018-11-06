import { Router } from 'express'
import pluralize from 'pluralize'
import {ok, fail} from './utils'

const MAX_RESULTS = 100
// var emptyPromise = function (t) {return new Promise (function (r, e) { r (t); }); };

/**
  Generic controller that provides CRUD operations for a given Mongoose model
*/
export default class BaseController {
  /**
    @param model Mongoose model
    @param key primary key of the model that will be used for searching, removing
    and reading
  */
  constructor (model, key) {
    this.model = model
    this.modelName = model.modelName.toLowerCase()
    this.key = key
    this.baseQ = {}
    this.populate = ''
    this.fields = undefined
  }

  setFields (fieldList) {
    this.fields = fieldList
  }

  create (data) {
    return this.model
      .create(data)
      .then((modelInstance) => {
        var response = {}
        response[this.modelName] = modelInstance
        return response
      })
  }

  read (id) {
    var filter = {}
    filter[this.key] = id

    return this.model
    .findOne(filter)
    .then((modelInstance) => {
      var response = {}
      response[this.modelName] = modelInstance
      return response
    })
  }

  list () {
    return this.model
      .find({})
      .limit(MAX_RESULTS)
      .then((modelInstances) => {
        var response = {}
        response[pluralize(this.modelName)] = modelInstances
        return response
      })
  }

  delete (id) {
    const filter = {}
    filter[this.key] = id

    return this.model
      .deleteMany(filter)
      .then(() => {
        return {}
      })
  }

  clearConsumer (toolConsumerId) {
    const filter = {}
    filter['toolConsumer'] = toolConsumerId
    return this.model
    .deleteMany(filter)
    .then(() => {
      return {}
    })
  }

  clearAll () {
    console.log('Warning removing all documents from collection ', this.model.modelName)
    return this.model
    .deleteMany({})
    .then(() => {
      return {}
    })
  }

  /**
   */
  update (id, data) {
    var filter = {}
    filter[this.key] = id

    return this.model
      .findOne(filter)
      .then((modelInstance) => {
        for (var attribute in data) {
          if (data.hasOwnProperty(attribute) && attribute !== this.key && attribute !== '_id') {
            modelInstance[attribute] = data[attribute]
          }
        }

        return modelInstance.save()
      })
      .then((modelInstance) => {
        var response = {}
        response[this.modelName] = modelInstance
        return response
      })
  }

  findOne (query, fields) {
    // console.log('base.findOne:', query, fields)
    var self = this
    query = query || {}
    return new Promise(function (resolve, reject) {
      if (self.err) return reject(self.err)
      var q = Object.assign({}, self.baseQ, query)
      // console.log('base.findOne q = ', q)
      self.model.findOne(q)
      .populate(self.populate)
      .select(fields)
      .exec()
      // .then(self.sanitizeData)
      .then((results) => {
        resolve(results)
      })
      .catch(() => self.complete(reject, 'findone'))
    })
  }

  complete (reject, funct) {
    return function (err) {
      console.log('dbmodel.' + funct + ': ' + err.message)
      reject(new Error('dbmodel.' + funct + ': ' + err.message))
    }
  }

  route () {
    const router = new Router()

    router.get('/', (req, res) => {
      this
        .list()
        .then(ok(res))
        .then(null, fail(res))
    })

    router.post('/', (req, res) => {
      this
        .create(req.body)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.get('/:key', (req, res) => {
      this
        .read(req.params.key)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.put('/:key', (req, res) => {
      this
        .update(req.params.key, req.body)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.delete('/toolConsumer/:id', (req, res) => {
      this
      .clearConsumer(req.params.id)
      .then(ok(res))
      .then(null, fail(res))
    })


    router.delete('/all/', (req, res) => {
      this
      .clearAll()
      .then(ok(res))
      .then(null, fail(res))
    })

    router.delete('/:key', (req, res) => {
      this
      .delete(req.params.key)
      .then(ok(res))
      .then(null, fail(res))
    })


    return router
  }
}

import express from 'express'
import bodyParser from 'body-parser'
import db from './db'
import apiMiddle from './middleware/api.js'

const debug = require('debug')('server')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
db(() => {
  apiMiddle(app).then((api) => {
    app.use('/', api)

    // const sessionCounter = require('./middleware/session-counter')
    // app.use(sessionCounter)



// catch 404 and forward to error handler
    app.use(function (req, res, next) {
      let { url } = req
      var env = process.env.NODE_ENV
      if (url.includes('favicon')) {
        debug('Another request for the favicon')
        res.status(404).send('No favicon')
      } else {
        res.status(404).send('Could not find ' + url + '. Environment: ' + env)
        // var ce = createError(404, 'Could not find ' + url + '. Environment: ' + env)
        // debug('not found error ', ce)
        // next(ce)
      }
    })

// error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      // res.locals.message = err.message
      // res.locals.error = req.app.get('env') === 'development' ? err : {}
      debug('error handler ' + err.message)
      // render the error page
      res.status(err.status || 500)
      res.send(err.message)
    })

    const port = 27000
    app.listen(port, () => console.log('Server running...'))
  })
})

export default app

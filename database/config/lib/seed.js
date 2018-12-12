import IntegrationController from '../../controllers/integration-controller'

const IntegrationModel = new IntegrationController()

var chalk = require('chalk')
console.log(chalk.bold.red('Warning:  Database seeding is turned on'))

// =========================================================================
//
// !!!! IMPORTANT !!!!
//
// This will drop schemas first if set to true
//
// =========================================================================
var DROP_SCHEMAS = false

if (DROP_SCHEMAS) {
  require('../seed-data/dropschemas')(DROP_SCHEMAS)
}

// =========================================================================
//
// This will force all integrations if set to true
//
// =========================================================================
var FORCE = false

// -------------------------------------------------------------------------
//
// check if the database seeding was performed, can override
//
// -------------------------------------------------------------------------
var checkIntegration = function (name, override) {
  return new Promise(function (resolve /* reject */) {
    if (override) return resolve(true)
    IntegrationModel.findOne({ module: name })
    .then((row) => {
      if (row) {
        console.log('seeding ' + name + ' is done')
        return resolve(override)
      }
      IntegrationModel.create({ module: name })
        .then((integration) => {
          var i = integration
          console.log('seeding ' + name)
          i.save()
          resolve(true)
        })
    })
    .catch((err) => {
      console.error('Error seeding ' + name + ' : ', err)
    })
  })
}

function doIntegrations () {
  checkIntegration('consumers', false).then((go) => {
    if (go) {
      require('../seed-data/consumers')(true)
    }
  })

  checkIntegration('assignments6').then((go) => {
    if (go) {
      require('../seed-data/assignments')(true)
    }
  })

  // =========================================================================
  //
  // Things in this section are split into production and non-production
  //
  // =========================================================================
  if (process.env.NODE_ENV === 'production') {
    // -------------------------------------------------------------------------
    //
    // add production admin user
    //
    // -------------------------------------------------------------------------
    // require('../seed-data/users-production')()
  } else {
    // -------------------------------------------------------------------------
    //
    // add non-production test user accounts
    //
    // -------------------------------------------------------------------------
    // require('../seed-data/users-other')()
    // -------------------------------------------------------------------------
  }
}
export default function () {
  console.log('begin asynchronous seeding...')

  Promise.resolve()
  .then(() => {
    if (FORCE) {
      return IntegrationModel.clearAll()
    }
  })
  .then(() => {
    return doIntegrations()
  })
}

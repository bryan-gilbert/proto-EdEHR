import camelCase from 'camelcase'

/*
This file contains string constants that are likely to be changed many times during the
development of the prototype.

The functionality in this file could be put outside of the app and injected via configuration
*/
export default class EhrPaths {
  constructor() {
    this.routes = [
      {
        path: '/ehr',
        name: 'ehr',
        meta: { layout: 'inside' },
        children: [this._makePatient(), this._makeCurrent()]
      }
    ]
  }

  /**
   * Get the Vue Route configuration for the EHR side of the EdEHR application
   * @return {*[]|*}
   */
  getRoutes() {
    return this.routes
  }

  /**
   * Get an array of {path,label} objects that define all the routes in the EHR
   * @return {Array}
   */
  getPaths() {
    function iterate(route, stack, path) {
      path = path + '/' + route.path
      if (route.component) {
        stack.push({ path: path, name: route.name, label: route.meta.label })
      }
      if (route.children) {
        route.children.forEach(gChild => {
          iterate(gChild, stack, path)
        })
      }
    }
    var pathStack = []
    var root = this.routes[0]
    root.children.forEach(child => {
      iterate(child, pathStack, root.path)
    })
    return pathStack
  }

  /**
   * Create the routes for the 'assessents' path
   * @return {{path: *, name: *, meta: {layout: string}}}
   * @private
   */
  _makePatient() {
    var children = [
      this._makeRouterPath('progress-note', 'Patient Notes'),
      this._makeRouterPath('demographics', 'Patient Demographics')
    ]
    var route = this._makeRouterPath('patient', undefined, children)
    return route
  }

  /**
   * Create the routes for the 'current' path
   * @return {{path: *, name: *, meta: {layout: string}}}
   * @private
   */
  _makeCurrent() {
    var assessments = []
    assessments.push(this._makeRouterPath('bio', 'Biopsychosocial'))
    assessments.push(this._makeRouterPath('car', 'Cardiovascular'))
    var children = [
      this._makeRouterPath('billing', 'Billing'),
      this._makeRouterPath('details', 'Details'),
      this._makeRouterPath('discharge', 'Discharge'),
      this._makeRouterPath('mar', 'Mar'),
      this._makeRouterPath('vital-signs', 'Vital Signs'),
      this._makeRouterPath('assessments', undefined, assessments)
    ]
    var route = this._makeRouterPath('current', 'Current', children)
    return route
  }

  _makeRouterPath(name, label, children) {
    /*
    Create a Vue Router route configuration object
     */
    var route = {
      path: name,
      name: name,
      meta: { layout: 'inside' }
    }
    /*
    the label and the component names are, by design, tied together.  Be sure all EHR
    components are named as pascalCase.  For example, the path label 'Vital Signs'
    is matched to a  Vue component names VitalSigns.
    If there is no label for this route then that means it's just in intermediate route
    without a component.
     */
    if (label) {
      // store the label in the meta data to keep it out of the way of the Vue Router.
      route.meta.label = label
      var componentName = camelCase(label, { pascalCase: true })
      // console.log('look for component named', componentName)
      // load the component via import which returns a promise.
      // the component's code (chunk) will be the named based on the component (request) and
      // index (order of chunks packed by webpack
      route.component = () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ `./pages/${componentName}`)
    }
    /*
    If this route has children then add them
     */
    if (children) {
      route.children = children
    }
    return route
  }
}

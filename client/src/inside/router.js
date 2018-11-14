export default class EhrPaths {
  constructor() {
    console.log('build inside routes')
    this.routes = [
      {
        path: '/ehr',
        name: 'ehr',
        meta: { layout: 'inside' },
        children: [this._makePatient(), this._makeCurrent()]
      }
    ]
    console.log('inside routes', this.routes)
  }

  getPaths() {
    console.log('path stack')
    function iterate(route, stack, path) {
      path = path + '/' + route.path
      if (route.component) {
        stack.push(path)
      }
      if (route.children) {
        route.children.forEach(gChild => {
          console.log('iterate into grand child', gChild)
          iterate(gChild, stack, path)
        })
      }
    }
    var pathStack = []
    var root = this.routes[0]
    root.children.forEach(child => {
      console.log('iterate into child', child)
      iterate(child, pathStack, root.path)
    })
    console.log('path stack', pathStack)
    return pathStack
  }

  getRoutes() {
    return this.routes
  }

  _makePatient() {
    var children = [
      this._makeRouterPath('progress-note', 'PatientNotes'),
      this._makeRouterPath('demographics', 'PatientDemographics')
    ]
    var route = this._makeRouterPath('patient', undefined, children)
    return route
  }

  _makeCurrent() {
    var assessments = []
    assessments.push(this._makeRouterPath('bio', 'Biopsychosocial'))
    assessments.push(this._makeRouterPath('car', 'Cardiovascular'))
    var children = [
      this._makeRouterPath('billing', 'Billing'),
      this._makeRouterPath('details', 'Details'),
      this._makeRouterPath('discharge', 'Discharge'),
      this._makeRouterPath('mar', 'Mar'),
      this._makeRouterPath('vital-signs', 'VitalSigns'),
      this._makeRouterPath('assessments', undefined, assessments)
    ]
    var route = this._makeRouterPath('current', undefined, children)
    return route
  }

  _makeRouterPath(name, componentName, children) {
    // var relativeModulePath = './pages/' + componentName
    var route = {
      path: name,
      name: name,
      meta: { layout: 'inside' }
    }
    if (componentName) {
      route.component = () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ `./pages/${componentName}`)
    }
    if (children) {
      route.children = children
    }
    return route
  }
}

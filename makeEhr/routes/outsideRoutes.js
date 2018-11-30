export function outside() {
  return [
    {
      path: '/account',
      name: 'account',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Account.vue'),
      meta: { layout: 'outside', label: 'Account', topLevel: 'undefined' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Dashboard.vue'),
      meta: { layout: 'outside', label: 'Dashboard', topLevel: 'undefined' }
    },
    {
      path: '/help',
      name: 'help',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Help.vue'),
      meta: { layout: 'outside', label: 'Help', topLevel: 'undefined' }
    },
    {
      path: '/student',
      name: 'student',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Student.vue'),
      meta: { layout: 'outside', label: 'Student', topLevel: 'undefined' }
    },
    {
      path: '/courses',
      name: 'courses',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Courses.vue'),
      meta: { layout: 'outside', label: 'Courses', topLevel: 'undefined' }
    },
    {
      path: '/assignments-listing',
      name: 'assignments-listing',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/AssignmentsListing.vue'),
      meta: {
        layout: 'outside',
        label: 'Assignments Listing',
        topLevel: 'undefined'
      }
    },
    {
      path: '/activity-list/:activityId',
      name: 'activity-list/:activityId',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/ActivityList.vue'),
      meta: { layout: 'outside', label: 'Activity List', topLevel: 'undefined' }
    },
    {
      path: '/assignments',
      name: 'assignments',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Assignments.vue'),
      meta: { layout: 'outside', label: 'Assignments', topLevel: 'undefined' }
    },
    {
      path: '/instructor',
      name: 'instructor',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Instructor.vue'),
      meta: { layout: 'outside', label: 'Instructor', topLevel: 'undefined' }
    },
    {
      path: '/db-tables',
      name: 'db-tables',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/DbTables.vue'),
      meta: { layout: 'outside', label: 'Db Tables', topLevel: 'undefined' }
    }
  ]
}

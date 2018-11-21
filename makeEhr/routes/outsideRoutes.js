export function outside() {
  return [
    {
      path: '/account',
      name: 'account',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Account.vue'),
      meta: { layout: 'outside', label: 'Account' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Dashboard.vue'),
      meta: { layout: 'outside', label: 'Dashboard' }
    },
    {
      path: '/help',
      name: 'help',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Help.vue'),
      meta: { layout: 'outside', label: 'Help' }
    },
    {
      path: '/student',
      name: 'student',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Student.vue'),
      meta: { layout: 'outside', label: 'Student' }
    },
    {
      path: '/courses',
      name: 'courses',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Courses.vue'),
      meta: { layout: 'outside', label: 'Courses' }
    },
    {
      path: '/assignments',
      name: 'assignments',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Assignments.vue'),
      meta: { layout: 'outside', label: 'Assignments' }
    },
    {
      path: '/instructor',
      name: 'instructor',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Instructor.vue'),
      meta: { layout: 'outside', label: 'Instructor' }
    },
    {
      path: '/db-tables',
      name: 'db-tables',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/DbTables.vue'),
      meta: { layout: 'outside', label: 'Db Tables' }
    }
  ]
}

export function outside() {
  return [
    {
      path: '/account',
      name: 'account',
      meta: { layout: 'outside' },
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Account.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { layout: 'outside' },
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Dashboard.vue')
    },
    {
      path: '/help',
      name: 'help',
      meta: { layout: 'outside' },
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Help.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/components/Student.vue')
    },
    {
      path: '/student/courses',
      name: 'courses',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/components/Courses.vue')
    },
    {
      path: '/student/assignments',
      name: 'assignments',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/components/Assignments.vue')
    },
    {
      path: '/instructor',
      name: 'instructor',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/components/Instructor.vue')
    },
    {
      path: '/dbtables',
      name: 'dbtables',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/DbTables.vue')
    }
  ]
}

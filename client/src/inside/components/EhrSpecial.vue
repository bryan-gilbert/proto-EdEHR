<template lang="pug">
  div(:class="$options.name")
    p This is the EHR special content panel
    div(:class="`${$options.name}__special`")
    hr
    div(v-show="isInstructor")
      h3 Instructor Data
      p sInstructorReturnUrl {{ sInstructorReturnUrl }}
      p sCurrentEvaluationStudentId: {{ sCurrentEvaluationStudentId }}
      p Class List with Student Visit
      div(:class="`${$options.name}__data`")
        li(class="classList", v-for="studentVisit in classList")
          p Visit._id: {{ studentVisit._id }}
          p Student: {{ studentVisit.user.fullName }}
          p _id: {{ studentVisit.user._id }}
          p Course: {{ studentVisit.activity.context_title}}
          p Activity: {{ studentVisit.activity.resource_link_title}}
          p Activity Description: {{ studentVisit.activity.resource_link_description}}
        hr
        h3 sCurrentStudentData
        div(:class="`${$options.name}__data`")
          li(v-for="(value, propertyName) in sCurrentStudentData", v-bind:key="propertyName")
            strong {{ propertyName }}
            span : {{ value }}
    hr
    h3 Ehr Data
    div(:class="`${$options.name}__data`")
      p assignmentData: {{ assignmentData }}
      p mergedData: {{ mergedData }}
      p scratchData: {{ scratchData }}
      p evaluationData: {{ evaluationData }}
    hr
    h3 Visit
    div(:class="`${$options.name}__data`")
      p apiUrl: {{ apiUrl }}
      p topLevelMenu: {{ topLevelMenu }}
      p isLoggedIn: {{ isLoggedIn }}
      p visitInfo properties:
      li(v-for="(value, propertyName) in visitInfo", v-bind:key="propertyName", v-if="skipVisitProp(propertyName)")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 User
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in userInfo", v-bind:key="propertyName", v-if="propertyName !== 'ltiData'")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 sActivityData
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in sActivityData", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 Assignment
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in visitInfo.assignment", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 LMS Consumer
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in visitInfo.toolConsumer", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 Assignments in system
    div(:class="`${$options.name}__data`")
      table.table
        thead
          tr
            th.name(title="Name") EdEHR Assignment Name
            th.description(title="Description") Description
            th.external(title="External Id") Assignment External Id
            th.ehrRoute(title="Route") Internal Route
            th.seedData(title="Seed Data") Seed Data
        tbody
          tr(v-for="item in assignmentsListing")
            td.name {{ item.name }}
            td.description {{ item.description}}
            td.external {{ item.externalId}}
            td.ehrRoute {{ item.ehrRouteName}}
            td.seedData(v-bind:title="asString(item.seedData)") {{ item.seedData ? 'seed hover' : '&nbsp;' }}
</template>

<script>
export default {
  name: 'EhrSpecial',
  data() {
    return {}
  },
  computed: {
    userInfo() {
      return this.$store.state.visit.sUserInfo || {}
    },
    visitInfo() {
      return this.$store.state.visit.sVisitInfo || {}
    },
    assignmentsListing() {
      return this.$store.state.assignment.assignmentsListing
    },
    assignment() {
      var vi = this.visitInfo
      var act = vi && vi.assignment ? vi.assignment : {}
      return act
    },
    assignmentData() {
      return this.$store.getters['ehrData/assignmentData']
    },
    mergedData() {
      return this.$store.getters['ehrData/mergedData']
    },
    scratchData() {
      return this.$store.getters['ehrData/scratchData']
    },
    evaluationData() {
      return this.$store.getters['ehrData/evaluationData']
    },
    sActivityData() {
      return this.$store.state.ehrData.sActivityData
    },
    sCurrentStudentData() {
      return this.$store.state.ehrData.sCurrentStudentData
    },
    classList() {
      return this.$store.state.instructor.sClassList || []
    },
    courses() {
      return this.$store.state.instructor.sCourses || []
    },
    sInstructorReturnUrl() {
      return this.$store.state.instructor.sInstructorReturnUrl
    },
    sCurrentEvaluationStudentId() {
      return this.$store.state.instructor.sCurrentEvaluationStudentId
    },
    isInstructor() {
      return this.$store.getters['visit/isInstructor']
    },
    apiUrl() {
      return this.$store.state.visit.apiUrl
    },
    topLevelMenu() {
      return this.$store.state.visit.topLevelMenu
    },
    isLoggedIn() {
      return this.$store.state.visit.isLoggedIn
    }
  },
  methods: {
    skipVisitProp(prop) {
      return !(
        prop === 'user' ||
        prop === 'toolConsumer' ||
        prop === 'activity' ||
        prop === 'assignment'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';

.EhrSpecial {
  @include wrapper('page');
  background-color: lavender;
  padding: 5rem 2rem;
  z-index: 10;

  h3 {
    font-size: 1.5rem;
  }
  &__data {
    li {
      margin-left: 2rem;
    }
    .classList {
      list-style-type: numbered;
    }
  }
}
</style>

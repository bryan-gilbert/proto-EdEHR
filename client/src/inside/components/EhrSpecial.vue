<template lang="pug">
  div(:class="$options.name")
    p This is the EHR special content panel
    div(:class="`${$options.name}__special`")
    hr
    div(v-show="isInstructor")
      h3 Instructor Data
      p  Current Student Visit _id: {{ currentEvaluationStudentId }}
      div(:class="`${$options.name}__data`")
        li(class="classList", v-for="studentVisit in classList")
          p Visit._id: {{ studentVisit._id }}
          p Student: {{ studentVisit.user.fullName }}
          p _id: {{ studentVisit.user._id }}
          p Course: {{ studentVisit.activity.context_title}}
          p Activity: {{ studentVisit.activity.resource_link_title}}
          p Activity Description: {{ studentVisit.activity.resource_link_description}}
      hr
    h3 Visit
    div(:class="`${$options.name}__data`")
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
    h3 LMS Consumer
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in visitInfo.toolConsumer", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 Activity
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in visitInfo.activity", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 Assignment
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in visitInfo.assignment", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}
</template>

<script>
export default {
  name: 'EhrSpecial',
  data() {
    return {}
  },
  computed: {
    userInfo() {
      // var vi = this.$store.state.sVisitInfo
      // var uInfo = vi.user ? vi.user : {}
      // return uInfo
      return this.$store.state.visit.sUserInfo || {}
    },
    visitInfo() {
      return this.$store.state.visit.sVisitInfo || {}
    },
    data() {
      var vi = this.visitInfo
      var act = vi && vi.assignmentData ? vi.assignmentData : {}
      return act
    },
    assignment() {
      var vi = this.visitInfo
      var act = vi && vi.assignment ? vi.assignment : {}
      return act
    },
    activity() {
      var act = this.$store.state.sCurrentActivity
      return act
    },
    currentEvaluationStudentId() {
      return this.$store.state.sCurrentEvaluationStudentId
    },
    classList() {
      return this.$store.state.sClassList || []
    },
    isInstructor() {
      var vi = this.visitInfo
      return vi ? vi.isInstructor : false
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
  }
}
</style>

<template lang="pug">
  div(:class="$options.name")
    div(class="courses", v-for="course in courses")
      div Course: {{ course.name }} ( id: {{ course.id }})
      div Description: {{ course.label }}
      div(class="activities", v-for="activity in course.activities")
        div(class="activities-inner")
          activity-header(:activity="activity")
          button(v-on:click="activateActivity(activity._id)") {{ activity._id }}
          accordion(:theme="theme")
            div(class="classList" )
            table.table
              thead
                tr
                  th Student name
                  th User id
                  th Email
                  th Date submitted
                  th Evaluation Notes
                  th Status
              tbody
                tr(v-for="sv in classList")
                  td {{ sv.user.fullName }}
                  td {{ sv.user.user_id }}
                  td {{ sv.user.emailPrimary }}
                  td some date
                  td
                  td unknown
    router-view
</template>

<script>
import accordion from '../../app/components/accordion'
import ActivityHeader from './ActivityHeader'
import StudentAssignmentInfo from '../components/StudentAssignmentInfo'

export default {
  name: 'AsInstructor',
  components: {
    accordion,
    ActivityHeader,
    StudentAssignmentInfo
  },
  computed: {
    courses() {
      return this.$store.state.instructor.sCourses
    },
    classList() {
      return this.$store.state.instructor.sClassList || []
    },
    theme() {
      return 'grayTheme'
    }
  },
  methods: {
    activateActivity(activityId) {
      localStorage.setItem('activityId', activityId)
      this.$store.dispatch('instructor/loadActivity', activityId)
      this.$store.dispatch('instructor/loadClassList', activityId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color.scss';

.AsInstructor {
  margin-left: 1.5rem;
  .courses {
    margin-left: 0;
  }
  .table {
    width: 100%;
  }
  .aName {
    display: inline-block;
    width: 10rem;
    font-weight: 600;
  }
  .aValue {
    display: inline;
  }
  .activities {
    margin-bottom: 2rem;
    background-color: $grey03;
    border: 1px solid $grey60;
    .activities-inner {
      margin-left: 0;
    }
  }
  .students {
    border-bottom: 1px solid $grey40;
  }
  &__main {
    background-color: $grey03;
  }
}
</style>

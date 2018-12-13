<template lang="pug">
  div(:class="$options.name")
    activity-header(:activity="activity")
    div(v-if="visitInfo.isInstructor")
      div(class="classList", v-for="studentVisit in classList")
        student-assignment-info(v-bind:studentVisit="studentVisit")
        hr
</template>

<script>
import axios from '../../../node_modules/axios/dist/axios.min'

import StudentAssignmentInfo from '../components/StudentAssignmentInfo'
import ActivityHeader from '../components/ActivityHeader'

export default {
  name: 'ClassList',
  components: {
    StudentAssignmentInfo,
    ActivityHeader
  },
  computed: {
    activity() {
      return this.$store.state.ehrData.sActivityData
    },
    userInfo() {
      return this.$store.state.visit.sUserInfo
    },
    visitInfo() {
      return this.$store.state.visit.sVisitInfo
    },
    classList() {
      return this.$store.state.instructor.sClassList || []
    },
    courses() {
      return this.$store.state.instructor.sCourses
    }
  },
  methods: {
    asString: function(obj) {
      return JSON.stringify(obj)
    }
  },
  created: function() {
    let activityId = this.$route.params.activityId
    this.$store.dispatch('ehrData/loadActivityData', activityId)
    this.$store.dispatch('instructor/loadClassList', activityId)
  }
}
</script>

<style lang="scss" scoped>
.Instructor {
  &__main {
    background-color: #f6fbfe;
  }
}
</style>

<template lang="pug">
  div(:class="$options.name")
    activity-header(:activity="activity")
    div(v-if="visitInfo.isInstructor")
      div(class="classList", v-for="studentVisit in classList")
        student-assignment-info(v-bind:studentVisit="studentVisit")
        hr
</template>

<script>
import StudentAssignmentInfo from '../components/StudentAssignmentInfo'
import ActivityHeader from '../components/ActivityHeader'

export default {
  name: 'ActivityList',
  components: {
    StudentAssignmentInfo,
    ActivityHeader
  },
  computed: {
    activity() {
      return this.$store.state.instructor.sCurrentActivity
    },
    visitInfo() {
      return this.$store.state.visit.sVisitInfo
    },
    classList() {
      return this.$store.state.instructor.sClassList || []
    }
  },
  methods: {
    asString: function(obj) {
      return JSON.stringify(obj)
    }
  },
  created: function() {
    // TODO move this to a location that centralizes API like calls.Note this is replicated, almost, in App.vue
    let activityId = this.$route.params.activityId
    localStorage.setItem('activityId', activityId)
    this.$store.dispatch('instructor/loadActivity', activityId)
    this.$store.dispatch('instructor/loadClassList', activityId)
  }
}
</script>

<style lang="scss" scoped>
.ActivityList {
}
</style>

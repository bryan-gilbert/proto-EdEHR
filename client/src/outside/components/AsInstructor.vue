<template lang="pug">
  div(class="as-instructor section")
    div(class="courses", v-for="course in courses")
      div(class="course-header")
        div(class="course-header-item course-title") {{ course.name }} (Id: {{ course.id }})
        div(class="course-header-item") {{ course.label }}
      div(class="activities", v-for="activity in course.activities")
        div(:ref="`activity-${activity._id}`")
          class-list(:activity="activity")
    router-view
</template>

<script>
import ClassList from './ClassList'

export default {
  name: 'AsInstructor',
  components: {
    ClassList
  },
  computed: {
    courses() {
      return this.$store.state.instructor.sCourses
    }
  },
  mounted: function() {
    /*
    TODO get scroll into view working
    The following is not working. Nor is the attempt to scroll in the class list view.
    I'm leaving this code here hoping that taking a look again later might help.
    let activityId = localStorage.getItem('activityId')
    if (activityId) {
      const _this = this
      let id = `activity-${activityId}`
      this.$nextTick(function() {
        // console.log('Look for element with ref', id)
        let elem = this.$refs[id]
        // console.log('scroll to ', elem)
        _this.$scrollTo(elem)
      })
    }
     */
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.as-instructor {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  .courses {
    margin-left: 0;
    border: 1px solid $grey60;
  }
  .course-header {
    margin-left: 1rem;
    margin-bottom: 10px;
  }
  .course-header-item {
    font-size: 1.1rem;
  }

  .course-title {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .activities {
    margin-bottom: 2rem; /* space between activities / class lists */
    background-color: $grey03;
    border: 1px solid $grey60;
    overflow: hidden;
  }
}
</style>

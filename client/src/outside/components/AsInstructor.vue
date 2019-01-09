<template lang="pug">
  div(:class="$options.name")
    div(class="courses", v-for="course in courses")
      div Course: {{ course.name }} ( id: {{ course.id }})
      div Description: {{ course.label }}
      div(class="activities", v-for="activity in course.activities")
        div(class="activities-inner")
          activity-header(:activity="activity")
          div
            router-link(v-bind:to="`/activity-list/${activity._id}`") class list
    router-view
</template>

<script>
import ActivityHeader from './ActivityHeader'
export default {
  name: 'AsInstructor',
  components: {
    ActivityHeader
  },
  computed: {
    courses() {
      return this.$store.state.instructor.sCourses
    }
  },
  methods: {
    asString: function(obj) {
      return JSON.stringify(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color.scss';

.AsInstructor {
  margin-left: 1.5rem;
  .courses {
    margin-left: 0rem;
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
      margin-left: 15px;
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

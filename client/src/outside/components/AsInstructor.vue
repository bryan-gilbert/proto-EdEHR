<template lang="pug">
  div(:class="$options.name")
    div(class="courses", v-for="course in courses")
      div Course: {{ course.name }} ( id: {{ course.id }})
      div Description: {{ course.label }}
      div(class="activities", v-for="activity in course.activities")
        div(class="activities-inner")
          div(class="activities-header")
            div(class="aName") Activity:
            div(class="aValue") {{ activity.name }} ( id: {{ activity.id }} )
          div(class="activities-info")
            div
              div(class="aName") Description:
              div(class="aValue") {{ activity.label }}
            div
              div(class="aName") EHR Assignment:
              div(class="aValue") {{ activity.assignment }}  ( id: {{ activity.externalId }} )
            div
              div(class="aName") Internals
              div(class="aValue") route: {{ activity.route }}
            div
              div(class="aName") Seed
              div(class="aValue", :title="seedData(activity)") hover mouse here to see seed
        div(class="students", v-for="student in activity.students")
          student-assignment-info(:student="student")
</template>

<script>
import axios from '../../../node_modules/axios/dist/axios.min'
import StudentAssignmentInfo from './StudentAssignmentInfo'

export default {
  name: 'AsInstructor',
  components: {
    StudentAssignmentInfo
  },
  props: {
    visitorType: { type: String, default: 'Instructor' }
  },
  computed: {
    courses() {
      // console.log('seek sCourses', this.$store.state.sCourses)
      return this.$store.state.sCourses
    },
    activities() {
      // console.log('seek activities', this.$store.state.sActivities)
      return this.$store.state.sActivities
    }
  },
  methods: {
    seedData: function(activity) {
      return JSON.stringify(activity.seed)
    },
    assignmentData: function(student) {
      var d = JSON.stringify(student.assignmentData, null, 2)
      // console.log('student a data', d)
      return d
    },
    workData: function(assignmentData) {
      return JSON.stringify(assignmentData)
    },
    loadData: function() {
      var apiUrl = this.$store.state.apiUrl
      let userId = this.$store.state.sUserInfo._id
      // Load information from server
      var asType = 'as' + this.visitorType
      var asVisitsType = asType + 'Visits'
      // console.log('asVisitsType', asVisitsType)
      return new Promise(() => {
        let url = `${apiUrl}/users/${asType}/${userId}`
        // console.log('In load asVisitor data ', url)
        axios.get(url).then(response => {
          // console.log(response.data)
          var courses = response.data['courses']
          this.$store.commit('setCourses', courses)
        })
      })
    }
  },
  created: function() {
    this.loadData()
  }
}
</script>

<style lang="scss" scoped>
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
    background-color: #f8f9fa;
    border: 1px solid #444;
    .activities-inner {
      margin-left: 15px;
    }
  }
  .students {
    border-bottom: 1px solid #888;
  }
  &__main {
    background-color: #f6fbfe;
  }
}
</style>

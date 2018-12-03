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
import axios from '../../../node_modules/axios/dist/axios.min'
import ActivityHeader from './ActivityHeader'
export default {
  name: 'AsInstructor',
  components: {
    ActivityHeader
  },
  computed: {
    courses() {
      return this.$store.state.sCourses
    }
  },
  methods: {
    asString: function(obj) {
      return JSON.stringify(obj)
    },
    loadData: function() {
      var apiUrl = this.$store.state.apiUrl
      let userId = this.$store.state.sUserInfo._id
      console.log('In load instructor courses data url/id: ' + apiUrl + ' / ' + userId)
      return new Promise(() => {
        let url = `${apiUrl}/users/instructor/courses/${userId}`
        // console.log('In load instructor courses data ', url)
        axios.get(url).then(response => {
          // console.log('load courses', response.data)
          var courses = response.data['courses']
          this.$store.commit('setCourses', courses)
        })
      })
    }
  },
  mounted: function() {
    var vm = this
    this.$nextTick(function () {
      // give the main component time to load the user and visit information
      vm.loadData()
    })
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

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
  // TO DO  test this component after store refactoring
  // data: function() {
  //   return {
  //     activity: { assignment: {} }
  //   }
  // },
  computed: {
    activity() {
      return this.$store.state.ehrData.sActivityData
    },
    userInfo() {
      return this.$store.state.sUserInfo
    },
    visitInfo() {
      return this.$store.state.sVisitInfo
    },
    classList() {
      return this.$store.state.sClassList || []
    },
    courses() {
      return this.$store.state.sCourses
    }
  },
  methods: {
    asString: function(obj) {
      return JSON.stringify(obj)
    },
    // loadActivityData: function() {
    //   var apiUrl = this.$store.state.visit.apiUrl
    //   let activityId = this.$route.params.activityId
    //   return new Promise(() => {
    //     let url = `${apiUrl}/activities/flushed/${activityId}`
    //     axios.get(url).then(response => {
    //       // console.log('Got activity information ', response.data)
    //       this.activity = response.data
    //     })
    //   })
    // },
    loadClassList: function() {
      var apiUrl = this.$store.state.visit.apiUrl
      let activityId = this.$route.params.activityId
      return new Promise(() => {
        let url = `${apiUrl}/activities/class/${activityId}`
        // console.log('In load instructor activities data ', url)
        axios.get(url).then(response => {
          // console.log('load activities', response.data)
          var classList = response.data['classList']
          this.$store.commit('setClassList', classList)
        })
      })
    }
  },
  created: function() {
    let activityId = this.$route.params.activityId
    this.$store.dispatch('ehr/loadActivityData', activityId)
    // this.loadActivityData()
    this.loadClassList()
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

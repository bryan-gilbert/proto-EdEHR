<template lang="pug">
  div(:class="$options.name")
    h2(class="hello") Instructor {{activityInfo.context_title}}
    h2(class="hello") Course {{activityInfo.context_title}}
    table.table
      thead
        tr
          th Assignment Id
          th Assignment Name
          th Course Name
          th Course Id
          th Activity Name
          th Activity Id
          th Seed
          th Work
      tbody
        tr(v-for="{assignmentData, assignment, activity } in asInstructorVisits")
          td {{ assignment.externalId }}
          td {{ assignment.name }}
          td {{ activity.context_title }}
          td {{ activity.context_id }}
          td {{ activity.resource_link_title }}
          td {{ activity.resource_link_id }}
          td(v-bind:title="seedData(assignment)") seed
          td(v-bind:title="workData(assignmentData)") {{ assignmentData }}
</template>

<script>
import Configuration from '../../configuration'
import axios from '../../../node_modules/axios/dist/axios.min'
var config = new Configuration(process.env.NODE_ENV)

//         li(v-for="(value, propertyName) in visit", v-bind:key="propertyName")
// strong {{ propertyName }}
// span : {{ value }}

export default {
  name: 'Instructor',
  props: {
    id: {
      type: String,
      default: 'Teacher'
    }
  },
  computed: {
    activityInfo() {
      return this.$store.getters.sActivityInfo
    }
  },
  data: function() {
    return {
      asInstructorVisits: []
    }
  },
  methods: {
    seedData: function(assignment) {
      return JSON.stringify(assignment.seedData)
    },
    workData: function(assignmentData) {
      return JSON.stringify(assignmentData)
    },
    loadData: function() {
      var apiUrl = this.$store.state.apiUrl
      let userId = this.$store.state.sUserInfo._id
      // Load information from server
      return new Promise((resolve, reject) => {
        let url = apiUrl + '/users/asInstructor/' + userId
        console.log('In load instructor data ', url)
        axios.get(url).then(response => {
          console.log(response.data)
          this.asInstructorVisits = response.data.asInstructorVisits
        })
      })
    }
  },
  created: function() {
    this.loadData()
  }
  // http://localhost:27000/api/users/asInstructor/5bf9bce39bf1a4c3ffeb6461
}
</script>

<style lang="scss" scoped>
  .Instructor {
    &__main {
      background-color: #f6fbfe;
    }
  }
</style>
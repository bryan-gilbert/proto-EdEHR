<template lang="pug">
  div(:class="$options.name")
    table.table
      thead
        tr
          th Course Name
          th Course Id
          th Activity Name
          th Activity Id
          th Assignment Id
          th Assignment Name
          th Seed
          th Work
      tbody
        tr(v-for="{assignmentData, assignment, activity } in asVisits")
          td {{ activity.context_title }}
          td {{ activity.context_id }}
          td {{ activity.resource_link_title }}
          td {{ activity.resource_link_id }} ({{ activity._id }})
          td {{ assignment.externalId }}
          td {{ assignment.name }}
          td(v-bind:title="seedData(assignment)") seed
          td(v-bind:title="workData(assignmentData)") {{ assignmentData }}
</template>

<script>
import axios from '../../../node_modules/axios/dist/axios.min'

export default {
  name: 'AsVisitor',
  props: {
    visitorType: { type: String, default: 'Instructor' }
  },
  data: function() {
    return {
      asVisits: []
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
      var apiUrl = this.$store.state.visit.apiUrl
      let userId = this.$store.state.visit.sUserInfo._id
      // Load information from server
      var asType = 'as' + this.visitorType
      var asVisitsType = asType + 'Visits'
      console.log('asVisitsType', asVisitsType)
      return new Promise(() => {
        let url = `${apiUrl}/users/${asType}/${userId}`
        console.log('In load asVisitor data ', url)
        axios.get(url).then(response => {
          console.log(response.data)
          this.asVisits = response.data[asVisitsType]
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
@import '../../scss/styles.scss';

.AsVisitor {
  &__main {
    background-color: $grey03;
  }
}
</style>

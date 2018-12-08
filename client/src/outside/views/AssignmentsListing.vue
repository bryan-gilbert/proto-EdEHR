<template lang="pug">
  div
    h1 Ed EHR Assignments
    div(v-if="error")
      p Error: {{ error }}
      p Your LMS is asking for "{{ activity.custom_assignment }}" which must exist in the listing below
    div
      p Below is a listing of assignments supported by this Ed EHR
    table.table
      thead
        tr
          th.name(title="Name") EdEHR Assignment Name
          th.external(title="External Id") Assignment External Id
          th.ehrRoute(title="Route") Internal Route
      tbody
        tr(v-for="item in assignmentsListing")
          td.name {{ item.name }}
          td.external {{ item.externalId}}
          td.ehrRoute {{ item.ehrRouteName}}
          td.seedData {{ item.seedData}}
    table.table
      thead
        tr
          th Name
          th Value
      tbody
        tr
          td Course Name
          td {{ activity.context_title }}
        tr
          td Course Label
          td {{ activity.context_label }}
        tr
          td Course Id
          td {{ activity.context_id }}
        tr
          td Activity Name
          td {{ activity.resource_link_title }}
        tr
          td Activity Description
          td {{ activity.resource_link_description }}
        tr
          td Activity Id
          td {{ activity.resource_link_id }}
    a(:href="currentVisit.launch_presentation_return_url") Return to LMS
</template>

<script>
import Configuration from '../../configuration'
import axios from '../../../node_modules/axios/dist/axios.min'
var config = new Configuration()

export default {
  name: 'AssignmentsListing',
  components: {},
  computed: {
    currentVisit() {
      return this.$store.state.sVisitInfo
    },
    activity() {
      var vi = this.$store.state.sVisitInfo
      var act = vi.activity ? vi.activity : {}
      return act
    }
  },
  data: function() {
    return {
      error: null,
      assignmentsListing: []
    }
  },
  methods: {
    loadAssignments: function() {
      var apiUrl = this.$store.state.apiUrl
      return new Promise((resolve, reject) => {
        let url = apiUrl + '/assignments/'
        axios.get(url).then(response => {
          console.log('what is the get assignments response? ', response.data.assignments)
          let list = response.data.assignments
          if (!list) {
            console.error('ERROR the system should have assignments')
            reject(new Error('No assignments'))
          }
          this.assignmentsListing = list
        })
      })
    }
  },
  mounted: function() {
    var url2 = new URL(window.location)
    var params2 = new URLSearchParams(url2.search)
    this.error = params2.get('error')
    this.loadAssignments()
  }
}
</script>

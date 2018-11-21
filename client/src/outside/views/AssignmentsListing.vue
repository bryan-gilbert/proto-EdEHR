<template lang="pug">
  div
    h1 Ed EHR Assignments
    p Below is a listing of assignments supported by this Ed EHR
    p Your LMS is asking for "{{ activity.custom_assignment }}" which must exist in the listing below
    table.table
      thead
        tr
          th.name(title="Name") EdEHR Assignment Name
          th.external(title="External Id") Assignment External Id
          th.ehrRoute(title="Route") Internal Route
      tbody
        tr(v-for="item in assignmentsListing")
          td.name {{ item.name }}
          td.external {{ item.external_id}}
          td.ehrRoute {{ item.ehrRoute}}
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
export default {
  name: 'AssignmentsListing',
  components: {},
  computed: {
    isLoggedOn() {
      return this.$store.state.isLoggedOn
    },
    userInfo() {
      return this.$store.state.sUserInfo
    },
    currentVisit() {
      return this.$store.state.sVisitInfo
    },
    activity() {
      return this.$store.state.sActivityInfo
    },
    visitData() {
      return this.$store.state.sVisitDataInfo
    },
    assignmentsListing() {
      return this.$store.state.sAssignments
    }
  }
}
</script>

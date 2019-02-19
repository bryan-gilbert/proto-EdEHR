<template lang="pug">
  div(:class="$options.name")
    h1 Ed EHR Assignments
    div(v-if="error")
      p Error: {{ error }}
      p Your LMS is asking for "{{ activity.custom_assignment }}".
      p Adjust your LMS to use an assignment from the listing below
    div
    table.table
      thead
        tr
          th.name(title="Name") EdEHR Assignment Name
          th.description(title="Description") Description
          th.external(title="External Id") Assignment External Id
          th.seedData(title="Seed Data") Seed Data
      tbody
        tr(v-for="item in assignmentsListing")
          td.name {{ item.name }}
          td.description {{ item.description}}
          td.external {{ item.externalId}}
          td.seedData(v-bind:title="asString(item.seedData)") {{ item.seedData ? 'seed hover' : '&nbsp;' }}
    current-lms-activity
</template>

<script>
  import CurrentLmsActivity from '../components/CurrentLmsActivity'

import { getIncomingParams } from '../../helpers/ehr-utills'

export default {
  name: 'AssignmentsListing',
  components: {CurrentLmsActivity},
  computed: {
    assignmentsListing() {
      return this.$store.state.assignment.assignmentsListing
    },
    activity() {
      return this.$store.state.ehrData.sActivityData
    }
  },
  data: function() {
    return {
      error: null
    }
  },
  methods: {
    asString: function(obj) {
      let str = JSON.stringify(obj)
      // console.log('what is here? ', str)
      return str
      // return JSON.stringify(item.seedData)
    },
    loadAssignments: function() {
      console.log('load assignments for AssignmentListing component')
      this.$store.dispatch('assignment/loadAssignments')
    }
  },
  mounted: function() {
    let params2 = getIncomingParams()
    this.error = params2['error']
    this.loadAssignments()
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.AssignmentsListing {
}
.seedDataPop {
  background: $grey10;
}
.tooltip {
  &.popover {
    .popover-inner {
      background: $grey03;
      color: $black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba($black, 0.1);
    }

    .popover-arrow {
      border-color: $grey03;
    }
  }
}
</style>

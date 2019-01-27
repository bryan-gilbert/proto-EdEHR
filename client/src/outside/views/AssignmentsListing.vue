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
          th.ehrRoute(title="Route") Internal Route
          th.seedData(title="Seed Data") Seed Data
      tbody
        tr(v-for="item in assignmentsListing")
          td.name {{ item.name }}
          td.description {{ item.description}}
          td.external {{ item.externalId}}
          td.ehrRoute {{ item.ehrRouteName}}
          td.seedData(v-bind:title="asString(item.seedData)") {{ item.seedData ? 'seed hover' : '&nbsp;' }}
    h1 Current LMS Activity
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
    a(:href="returnUrl") Return to LMS
</template>

<script>
  /*
              v-popover
              button Click me
              template(slot="popover")
                div {{ asString(item.seedData) }}

   */
export default {
  name: 'AssignmentsListing',
  components: {},
  computed: {
    assignmentsListing() {
      return this.$store.state.assignment.assignmentsListing
    },
    currentVisit() {
      return this.$store.state.sVisitInfo
    },
    activity() {
      var act = this.$store.state.ehrData.sActivityData
      return act
    },
    returnUrl() {
      return this.$store.getters['visit/returnUrl']
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
      console.log('what is here? ', str)
      return str
      // return JSON.stringify(item.seedData)
    },
    loadAssignments: function() {
      console.log('load assignments for AssignmentListing component')
      this.$store.dispatch('assignment/loadAssignments')
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

<style lang="scss" scoped>
@import '../../scss/styles.scss';

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

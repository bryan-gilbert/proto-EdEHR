<template lang="pug">
  div(:class="$options.name")
    h1 Ed EHR Assignments
    div(v-if="isRespondingToError")
      p Error: {{ isRespondingToError }}
      p Your LMS is asking for "{{ activity.custom_assignment }}".
      p Adjust your LMS to use an assignment from the listing below
    div
    table.table
      thead
        tr
          th(title="Name") EdEHR Assignment Name
          th(title="Description") Description
          th(title="External Id") Assignment External Id
          th(v-show="isDeveloper", title="Seed Data") Seed Data
      tbody
        tr(v-for="item in assignmentsListing")
          td {{ item.name }}
          td {{ item.description}}
          td {{ item.externalId}}
          td(v-show="isDeveloper") {{ item.seedDataId}}
</template>

<script>
import { getIncomingParams } from '../../helpers/ehr-utills'

export default {
  name: 'AssignmentsListing',
  components: { },
  computed: {
    isDeveloper() {
      return this.$store.getters['visit/isDeveloper']
    },
    assignmentsListing() {
      return this.$store.state.assignment.assignmentsListing
    },
    activity() {
      return this.$store.state.ehrData.sActivityData
    }
  },
  data: function() {
    return {
      isRespondingToError: null
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
      const _this = this
      console.log('load assignments for AssignmentListing component')
      this.$store.commit('system/setLoading', true)
      Promise.all([
        _this.$store.dispatch('seedStore/loadSeedDataList'),
        _this.$store.dispatch('assignment/loadAssignments')
      ])
      .then( () => {
        _this.$store.commit('system/setLoading', false)
      })
    }
  },
  mounted: function() {
    let params2 = getIncomingParams()
    this.isRespondingToError = params2['error']
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

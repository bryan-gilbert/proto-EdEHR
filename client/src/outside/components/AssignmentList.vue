<template lang="pug">
  div(id="assignmentList", class="assignment-list")
    h1 Ed EHR Assignments
    div(class="assignment-list-header columns", v-on:click="activateActivity")
      div Click here to see list of assignments
    div(class="assignment-list-body")
      accordion-element(theme="grayTheme", :show="show")
        div Body
        div(class="classlist-body")
          table.table
            thead
              tr
                th Name
                th External Id
                th Description
                th Seed Id
            tbody
              tr(v-for="sv in assignmentList")
                td {{sv.name}}
                td {{sv.externalId}}
                td {{sv.description}}
                td {{sv.seedDataId}}
</template>

<script>
import AccordionElement from '../../app/components/AccordionElement'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'ActivityList',
  components: {
    AccordionElement,
    UiButton
  },
  data() {
    return {
      show: false,
      indicator: '+'
    }
  },
  props: {
  },
  computed: {
    assignmentList() {
      return this.$store.state.assignment.assignmentsListing || []
    }
  },
  methods: {
    setShow: function(value) {
      this.show = value
      this.indicator = value ? '-' : '+'
    },
    activateActivity() {
      if (this.show) {
        this.setShow(false)
        return
      }
      this.loadAssignments()
    },
    loadAssignments() {
      const _this = this
      return this.$store
        .dispatch('assignments/assignment')
        .then(() => {
          return this.$store.dispatch('assignment/loadAssignments')
        })
        .then(() => {
          _this.$nextTick(function() {
            _this.setShow(true)
          })
        })
    }
  },
  mounted: function() {
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.assignment-list {
  padding: 0;
}
.assignment-list-header {
  background-color: $grey03;
  margin-bottom: 0;

  .header-column {
    padding: 1rem 1.5rem;
  }
  .header-item {
    display: block;
  }
  .header-icon {
    font-size: 2rem;
    font-weight: bold;
    text-align: right;
  }
}

.assignment-list-body {
  background-color: $grey10;
  overflow: hidden;
  margin-bottom: 0;

  .classlist-header {
    padding: .5rem 1.5rem;
    background-color: $grey10;
    border: 1px solid $grey20;
    box-sizing: border-box;
  }
  .classlist-header-item {
    display: inline-block;
    margin-right: 2rem;
  }
  .classlist-body {
    padding: 1rem 1.5rem;
    background-color: $white;
    border: 1px solid $grey20;
    box-sizing: border-box;
    overflow: hidden;
  }
  .table {
    overflow: hidden;
    width: 100%;
  }
}
</style>

<template lang="pug">
  div(class="activity-list")
    div(class="activity-list-header columns", v-on:click="activateActivity")
      div(class="header-column is-10 column")
        div(class="header-item header-title", :title="activity._id") {{ activity.resource_link_title }}
        div(class="header-item") {{ activity.resource_link_description }}
        div(class="header-item") {{ assignment.name }}  ( Id for LMS: {{ assignment.externalId }} )
      div(class="header-column is-2 column")
        div(class="header-item header-icon") {{ indicator }}
    div(class="activity-list-body")
      accordion-element(theme="grayTheme", :show="show")
        div(class="classlist-header")
          div(class="classlist-header-item") Student analytics placeholder
          div(class="classlist-header-item") Evaluation notes placeholder
        div(class="classlist-body")
          table.table
            thead
              tr
                th Student name
                th User id
                th Email
                th Date submitted
                th Evaluation Notes
                th Status
            tbody
              tr(v-for="sv in classList")
                td {{ sv.user.fullName }}
                td {{ sv.user.user_id }}
                td {{ sv.user.emailPrimary }}
                td some date
                td
                td unknown
</template>

<script>
import AccordionElement from '../../app/components/AccordionElement'

export default {
  name: 'ActivityList',
  components: {
    AccordionElement
  },
  data() {
    return {
      show: false,
      indicator: '+'
    }
  },
  props: {
    activity: { type: Object }
  },
  computed: {
    // activity() {
    //   return this.$store.state.instructor.sCurrentActivity
    // },
    assignment() {
      // console.log('What is in activity', this.activity)
      let a = this.activity.assignment || {}
      return a
    },
    visitInfo() {
      return this.$store.state.visit.sVisitInfo
    },
    classList() {
      return this.$store.state.instructor.sClassList || []
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show
      this.indicator = this.show ? '-' : '+'
    },
    activateActivity() {
      const _this = this
      if (this.show) {
        this.show = false
        this.indicator = '+'
        return
      }
      let activityId = this.activity._id
      localStorage.setItem('activityId', activityId)
      this.$store
        .dispatch('instructor/loadActivity', activityId)
        .then(() => {
          return this.$store.dispatch('instructor/loadClassList', activityId)
        })
        .then(() => {
          _this.show = true
          _this.indicator = '-'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color.scss';
.activity-list {
  padding: 0;
}
.activity-list-header {
  background-color: $grey10;
  margin-bottom: 0;

  .header-column {
    padding: 1rem 2rem 1rem 2rem;
  }
  .header-item {
    display: block;
  }
  .header-icon {
    font-size: 2rem;
    font-weight: bold;
  }
  .header-title {
    font-weight: bold;
    font-size: 1.2rem;
  }
}

.activity-list-body {
  background-color: $grey10;
  overflow: hidden;
  margin-bottom: 0;
  .classlist-header {
    padding: 1rem;
    background-color: $grey20;
    border: 1px solid $grey80;
  }
  .classlist-header-item {
    display: inline-block;
    margin-right: 2rem;
  }
  .classlist-body {
    padding: 1rem;
    background-color: $white;
    border: 1px solid $grey80;
    overflow: hidden;
  }
  .table {
    overflow: hidden;
    width: 100%;
  }
}
</style>

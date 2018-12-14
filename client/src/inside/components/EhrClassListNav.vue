<template lang="pug">
  div(:class="$options.name", v-show="isInstructor")
    div(:class="`${$options.name}__content columns`")
      div(class="column rows")
        div(class="row textField") Course: {{ panelInfo.courseTitle}}
        div(class="row textField") Activity: {{ panelInfo.activityTitle}}
          ui-info(:text="panelInfo.activityDescription")
        div(class="row textField") Assignment: {{ panelInfo.assignmentName}}
          ui-info(:text="panelInfo.assignmentDescription")
      div(class="column rows")
        div(class="row textField") Evaluating: {{ panelInfo.studentName }}
        div(class="row textField") Last visit: {{ panelInfo.lastVisitDate | moment("YYYY-MM-DD h:mm a") }}
      div(:class="`${$options.name}__controls column`")
        ui-button(v-on:buttonClicked="previousStudent", :class="`${$options.name}__navItem`")
          fas-icon(icon="arrow-left")
        ui-button(v-on:buttonClicked="nextStudent", :class="`${$options.name}__navItem`")
          fas-icon(icon="arrow-right")
        ui-button(v-on:buttonClicked="showEvaluationNotes", :class="`${$options.name}__navItem`")
          fas-icon(icon="notes-medical")
        ehr-evaluation-dialog(v-show="showingEvaluationDialog", @canceled="canceled", @saved="saved")
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiInfo from '../../app/ui/UiInfo'
import EhrEvaluationDialog from './EhrEvaluationDialog'
export default {
  name: 'EhrClassListNav',
  components: { UiButton, EhrEvaluationDialog, UiInfo },
  data: function() {
    return {
      showingEvaluationDialog: false
    }
  },
  computed: {
    panelInfo() {
      let evalInfo = this.$store.state.ehrData.sCurrentStudentInfo || {}
      let evalData = this.$store.state.ehrData.sCurrentStudentData || {}
      let activity = this.$store.state.instructor.sCurrentActivity || {}
      let data = {
        studentName: evalInfo.studentName,
        courseTitle: activity.context_title,
        activityTitle: activity.resource_link_title,
        activityDescription: activity.resource_link_description,
        lastVisitDate: evalData.lastDate,
        assignmentName: evalInfo.assignmentName,
        assignmentDescription: evalInfo.assignmentDescription
      }
      return data
    },
    classList() {
      return this.$store.state.sClassList || []
    },
    isInstructor() {
      return this.$store.getters['visit/isInstructor']
    }
  },
  methods: {
    canceled() {
      this.showingEvaluationDialog = false
    },
    saved() {
      this.showingEvaluationDialog = false
    },
    previousStudent() {
      console.log('previous pressed')
    },
    nextStudent() {
      console.log('next pressed')
    },
    showEvaluationNotes() {
      this.showingEvaluationDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.EhrClassListNav {

  .textField
  {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__content {
    display: flex;
    flex-direction: row;
    div {
      flex: 1 0 auto;
    }
  }
  &__navItem {
    &:not(:first-child) {
      margin-left: 1.5em;
      &::before {
        margin-right: 0.5em;
      }
    }
  }
}
</style>

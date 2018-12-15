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
        div(class="row")
          ui-button(v-on:buttonClicked="previousStudent", :class="`${$options.name}__navItem`", :disabled="!enablePrev")
            fas-icon(icon="arrow-left")
          ui-button(v-on:buttonClicked="nextStudent", :class="`${$options.name}__navItem`", :disabled="!enableNext")
            fas-icon(icon="arrow-right")
          ui-button(v-on:buttonClicked="showEvaluationNotes", :class="`${$options.name}__navItem`")
            fas-icon(icon="notes-medical")
          ehr-evaluation-dialog(ref="evalDialog", v-show="showingEvaluationDialog", @canceled="canceled", @saved="saved")
        div(class="row")
          div(class="indicator")
            div(class="indicator-label") A:
            div(class="indicator-shape indicate-assignment-data", :class="hasAssignmentData") &nbsp;
            div(class="indicator-label") E:
            div(class="indicator-shape indicate-evaluation-notes", :class="hasEvaluationNotes") &nbsp;
</template>

<script>
// ehr-evaluation-dialog(v-show="showingEvaluationDialog", @canceled="canceled", @saved="saved")

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
    enablePrev() {
      var list = this.$store.state.instructor.sClassList || []
      var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      var indx = list.findIndex(function(elem) {
        return elem._id === id
      })
      // console.log('EhrClassListNav enablePrev', id, indx, list)
      return indx > 0
    },
    enableNext() {
      var list = this.$store.state.instructor.sClassList || []
      var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      var indx = list.findIndex(function(elem) {
        return elem._id === id
      })
      // console.log('EhrClassListNav enableNext', id, indx, list)
      return indx < list.length  - 1
    },
    panelInfo() {
      let evalInfo = this.$store.state.ehrData.sCurrentStudentInfo || {}
      let evalData = this.$store.state.ehrData.sCurrentStudentData || {}
      let activity = this.$store.state.instructor.sCurrentActivity || {}
      let data = {
        studentName: evalInfo.studentName,
        courseTitle: activity.context_title,
        activityTitle: activity.resource_link_title,
        activityDescription: activity.resource_link_description,
        lastVisitDate: evalData.lastDate || {},
        assignmentData: evalData.assignmentData,
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
    },
    hasAssignmentData() {
      return this.panelInfo.assignmentData ? 'has-assignment-data' : ''
    },
    hasEvaluationNotes() {
      let edata = this.$store.getters['ehrData/evaluationData']
      return edata && edata.trim().length > 0 ? 'has-evaluation-notes' : ''
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
      // console.log('previous pressed')
      var list = this.$store.state.instructor.sClassList || []
      var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      var indx = list.findIndex(function(elem) {
        return elem._id === id
      })
      if (indx > 0) {
        let s = list[indx-1]
        let pid = s._id
        // console.log('EhrClassListNav go to prev', pid)
        this.$store.dispatch('instructor/changeCurrentEvaluationStudentId', pid)
      }
    },
    nextStudent() {
      // console.log('next pressed')
      var list = this.$store.state.instructor.sClassList || []
      var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      var indx = list.findIndex(function(elem) {
        return elem._id === id
      })
      if (indx < list.length  - 1) {
        let s = list[indx+1]
        let pid = s._id
        // console.log('EhrClassListNav go to next', pid)
        this.$store.dispatch('instructor/changeCurrentEvaluationStudentId', pid)
      }
    },
    showEvaluationNotes() {
      this.showingEvaluationDialog = true
      /*
      The trick is to add a ref attribute to the dialog component. This lets us invoke
      a method in that component. Here we tell the dialog to load the data from the
      vuex storage.  This lets the component perpare for a possible cancel/restore.
       */
      this.$refs.evalDialog.loadDialog()
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

  $indicatorColor: #006400;
  .indicator {
    display: flex;
    flex-direction: row;
  }
  .indicator-label {
    flex: 0 1 auto;
    margin-right: 5px;
  }
  .indicator-shape {
    flex: 0 0 20px;
    width: 20px;
    height: 20px;
    border: 1px solid #222;
    margin-top: 10px;
  }
  .indicate-assignment-data {
    // square
  }
  .indicate-evaluation-notes {
    border-radius: 50%; // circle
  }
  .has-assignment-data {
    background: $indicatorColor;
  }
  .has-evaluation-notes {
    background: $indicatorColor;
  }

}
</style>

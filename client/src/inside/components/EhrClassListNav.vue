<template lang="pug">
  div(class="classlist", v-show="isInstructor")
    div(class="classlist_content columns")
      div(class="is-6 column")
        div(class="textField") Course: {{ panelInfo.courseTitle}}
        div(class="textField") Activity: {{ panelInfo.activityTitle}}
          ui-info(:text="panelInfo.activityDescription")
        div(class="textField") Assignment: {{ panelInfo.assignmentName}}
          ui-info(:text="panelInfo.assignmentDescription")
      div(class="is-4 column")
        div(class="textField") Evaluating: {{ panelInfo.studentName }}
        div(class="textField") Last visit: {{ panelInfo.lastVisitDate | moment("YYYY-MM-DD h:mm a") }}
      div(class="is-3 column")
        div(class="columns")
          div(class="classlist_nav_item is-2 column")
            ui-button(v-on:buttonClicked="previousStudent", class="", :disabled="!enablePrev")
              span <
            //fas-icon(icon="arrow-left")
          div(class="classlist_counter column")
            span 3/14
          div(class="classlist_nav_item is-2 column")
            ui-button(v-on:buttonClicked="nextStudent", class="", :disabled="!enableNext")
              span >
            //fas-icon(icon="arrow-right")
    div(class="evaluation-label")
      div(class="textField") Evaluation notes
      ehr-evaluation-input(ref="evaluationNoteComponent")
</template>

<script>
// ehr-evaluation-dialog(v-show="showingEvaluationDialog", @canceled="canceled", @saved="saved")

import UiButton from '../../app/ui/UiButton'
import UiInfo from '../../app/ui/UiInfo'
import EhrEvaluationDialog from './EhrEvaluationDialog'
import EhrEvaluationInput from './EhrEvaluationInput'

export default {
  name: 'EhrClassListNav',
  components: { UiButton, EhrEvaluationDialog, EhrEvaluationInput, UiInfo },
  data: function() {
    return {
      showingEvaluationDialog: false,
      evalNotes: ''
    }
  },
  computed: {
    enablePrev() {
      let { list, indx } = this.findCurrentIndex()
      // var list = this.$store.state.instructor.sClassList || []
      // var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      // var indx = list.findIndex(function(elem) {
      //   return elem._id === id
      // })
      // // console.log('EhrClassListNav enablePrev', id, indx, list)
      return indx > 0
    },
    enableNext() {
      let { list, indx } = this.findCurrentIndex()
      //
      // var list = this.$store.state.instructor.sClassList || []
      // var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      // var indx = list.findIndex(function(elem) {
      //   return elem._id === id
      // })
      // console.log('EhrClassListNav enableNext', id, indx, list)
      return indx < list.length - 1
    },
    panelInfo() {
      let evalInfo = this.$store.state.ehrData.sCurrentStudentInfo || {}
      let evalData = this.$store.state.ehrData.sCurrentStudentData || {}
      let activity = this.$store.state.instructor.sCurrentActivity || {}
      let data = {
        studentName: evalInfo.studentName,
        studentId: evalInfo.studentName,
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
    findCurrentIndex() {
      var list = this.$store.state.instructor.sClassList || []
      var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      var indx = list.findIndex(function(elem) {
        return elem._id === id
      })
      return { list, indx }
    },
    previousStudent() {
      let { list, indx } = this.findCurrentIndex()
      // console.log('previous pressed')
      // var list = this.$store.state.instructor.sClassList || []
      // var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      // var indx = list.findIndex(function(elem) {
      //   return elem._id === id
      // })
      if (indx > 0) {
        let s = list[indx - 1]
        this.changeStudent.call(list, s)
        let pid = s._id
        // console.log('EhrClassListNav go to prev', pid)
        this.$store.dispatch('instructor/changeCurrentEvaluationStudentId', pid)
      }
    },
    nextStudent() {
      // console.log('next pressed')
      let { list, indx } = this.findCurrentIndex()
      // var list = this.$store.state.instructor.sClassList || []
      // var id = this.$store.state.instructor.sCurrentEvaluationStudentId
      // var indx = list.findIndex(function(elem) {
      //   return elem._id === id
      // })
      if (indx < list.length - 1) {
        let s = list[indx + 1]
        this.changeStudent.call(list, s)
      }
    },
    changeStudent(list, s) {
      let pid = s._id
      console.log('EhrClassListNav go to ', pid)
      this.$store.dispatch('instructor/changeCurrentEvaluationStudentId', pid).then(() => {
        this.$refs.evaluationNoteComponent.loadDialog()
      })
    },
    showEvaluationNotes() {
      this.showingEvaluationDialog = true
      /*
      The trick is to add a ref attribute to the dialog component. This lets us invoke
      a method in that component. Here we tell the dialog to load the data from the
      vuex storage.  This lets the component perpare for a possible cancel/restore.
       */
      this.$refs.evaluationNoteComponent.loadDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.classlist {
  .textField {
    max-width: 30rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .classlist_nav_item {
    overflow: hidden;
    button {
      width: 2rem;
      max-width: 4rem;
    }
  }
  .classlist_counter {
    max-width: 5rem;
  }

  &_classlist &__navItem {
    &:not(:first-child) {
      margin-left: 1.5em;
      &::before {
        margin-right: 0.5em;
      }
    }
  }

  $indicatorColor: $brand-primary;
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
    border: 1px solid $grey80;
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

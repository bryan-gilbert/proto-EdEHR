<template lang="pug">
  accordion(:theme="theme")
    div(slot="header")
      div {{ studentName }}
    div(class="body")
      div(class="inner")
        div
          div(class="aName") LMS Student Id:
          div(class="aValue") {{ studentInfo.user_id }}
        div
          div(class="aName") Email
          div(class="aValue") {{ studentInfo.emailPrimary }}
        div
          div(class="aName") Last visit:
          div(class="aValue") {{ studentVisit.lastVisitDate }}
      div
        pre {{ assignmentData(studentVisit)}}
      div(class="evaluation")
        evaluation-note(:studentVisitId="studentVisit._id")
</template>
<script>
import accordion from '../../app/components/accordion'
import EvaluationNote from './EvaluationNote'
// (v-model="inputs.notes")
export default {
  name: 'StudentAssignmentInfo',
  components: {
    accordion,
    EvaluationNote
  },
  props: {
    studentVisit: { type: Object } // a visit record
  },
  computed: {
    theme() {
      return 'blueTheme'
    },
    studentInfo() {
      return this.studentVisit.user || []
    },
    studentName() {
      var user = this.studentVisit.user || {}
      return user.givenName + ' ' + user.familyName
    },
    activityData() {
      var activityData = this.studentVisit.activityData || {}
      return activityData
    }
  },
  data: function() {
    return {
      evalNotes: ''
    }
  },
  methods: {
    assignmentData: function(studentVisit) {
      var activityData = studentVisit.activityData || {}
      var assignmentData = activityData.assignmentData
      var d = JSON.stringify(assignmentData, null, 2)
      return d
    }
  }
}
</script>

<style lang="scss" scoped>
.aName {
  display: inline-block;
  width: 10rem;
}
.aValue {
  display: inline;
}
.inner {
  padding: 0 40px 0 8px;
}
.evaluation {
  padding: 0 40px 0 8px;
  .evaluation-label,
  .evaluation-input {
    display: inline-block;
  }
  .evaluation-label {
    vertical-align: top;
    margin-right: 1rem;
  }
  .evaluation-input {
    border: 1px solid #cbced1;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 rgba(21, 26, 36, 0.5);
    height: 6rem;
    width: 80%;
  }
}
</style>

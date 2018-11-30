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
          div(class="aValue") {{ student.lastVisitDate }}
      div
        pre {{ assignmentData(student)}}
      div(class="evaluation")
        div(class="evaluation-label")
          label Evaluation notes
          div(class="evaluation-controls")
            button(v-on:click="cancelEval") cancel
            button(v-on:click="saveEvaluationNotes")  save
        textarea(class="evaluation-input", v-model="evalNotes")
</template>
<script>
import accordion from '../../app/components/accordion'
// (v-model="inputs.notes")
export default {
  name: 'StudentAssignmentInfo',
  components: {
    accordion
  },
  props: {
    student: { type: Object }
  },
  computed: {
    theme() {
      return 'blueTheme'
    },
    studentInfo() {
      return this.student.user || []
    },
    studentName() {
      var user = this.student.user || {}
      return user.givenName + ' ' + user.familyName
    },
    userInfo() {
      return this.$store.state.sUserInfo
    }
  },
  data: function() {
    return {
      evalNotes: ''
    }
  },
  methods: {
    assignmentData: function(student) {
      var activityData = student.activityData || {}
      var assignmentData = activityData.assignmentData
      var d = JSON.stringify(assignmentData, null, 2)
      return d
    },
    evaluationNotes: function() {
      var ed = this.student.evaluationData
      var initialNotes = ed ? ed.pocNotes : ''
      this.evalNotes = initialNotes
    },
    cancelEval: function() {
      this.evaluationNotes()
    },
    saveEvaluationNotes: function() {
      this.$store.dispatch('addEvalutationNotes', {
        note: this.evalNotes,
        studentVisitId: this.student.studentVisitId
      })
    }
  },
  mounted: function() {
    this.evaluationNotes()
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

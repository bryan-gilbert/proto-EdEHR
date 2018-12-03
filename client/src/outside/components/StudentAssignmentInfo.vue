<template lang="pug">
  accordion(:theme="theme")
    div(slot="header")
      div(class="header-content")
        div(class="header-content-item") {{ studentName }}
        div(class="header-content-item")
          div(class="indicator")
            div(class="indicator-label") Assignment Data:
            div(class="indicator-shape indicate-assignment-data", :class="hasAssignmentData") &nbsp;
        div(class="header-content-item")
          div(class="indicator")
            div(class="indicator-label") Evaluation Notes:
            div(class="indicator-shape indicate-evaluation-notes", :class="hasEvaluationNotes") &nbsp;
        div(class="header-content-item")
          ui-button(v-on:buttonClicked="goToEhr") Evaluate in EHR
    div(class="body")
      div(class="inner")
        div
          div(class="aName") LMS Student Id:
          div(class="aValue") {{ studentInfo.user_id }} {{url}}
        div
          div(class="aName") Email
          div(class="aValue") {{ studentInfo.emailPrimary }}
        div
          div(class="aName") Last visit:
          div(class="aValue") {{ studentVisit.lastVisitDate }}
        div
          div(class="aName") route:
          div(class="aValue") {{ studentVisit.assignment.ehrRoute }}
      div(class="evaluation")
        evaluation-note(:studentVisitId="studentVisit._id")
</template>
<script>
import accordion from '../../app/components/accordion'
import EvaluationNote from './EvaluationNote'
import UiButton from '../../app/ui/UiButton.vue'
// div
// pre {{ asString(activityData.assignmentData)}}

export default {
  name: 'StudentAssignmentInfo',
  components: {
    accordion,
    UiButton,
    EvaluationNote
  },
  props: {
    studentVisit: { type: Object }
  },
  computed: {
    url() {
      return window.location.href
    },
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
    },
    hasAssignmentData() {
      return this.activityData.assignmentData ? 'has-assignment-data' : ''
    },
    hasEvaluationNotes() {
      return this.activityData.evaluationData && this.activityData.evaluationData.trim().length > 0
        ? 'has-evaluation-notes' : ''
    }
  },
  data: function() {
    return {
      evalNotes: ''
    }
  },
  methods: {
    asString: function(obj) {
      return JSON.stringify(obj, null, 2)
    },
    goToEhr() {
      this.$store.commit('setInstructorReturnUrl',window.location.href)
      var name = this.studentVisit.assignment.ehrRoute
      this.$router.push(name)
    }
  }
}
</script>

<style lang="scss" scoped>

.header-content {
  display: flex;
  flex-direction: row;

  .header-content-item {
    flex: 1 0 auto;
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

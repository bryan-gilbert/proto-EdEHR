<template lang="pug">
  div(class="evaluation")
    div(class="evaluation-label")
      label Evaluation notes
      div(class="evaluation-controls")
        button(v-on:click="cancelEval") cancel
        button(v-on:click="saveEvaluationNotes")  save
    textarea(class="evaluation-input", v-model="evalNotes")
</template>
<script>
export default {
  name: 'EvaluationNote',
  components: {},
  props: {
    studentVisitId: { type: String }
  },
  computed: {
    activityData() {
      var classList = this.$store.state.instructor.sClassList
      var currentStudentVisit = classList.find(sv => {
        return sv._id === this.studentVisitId
      })
      return currentStudentVisit.activityData
    }
  },
  data: function() {
    return {
      evalNotes: ''
    }
  },
  methods: {
    cancelEval: function() {
      this.initializeEvaluationNotes()
    },
    saveEvaluationNotes: function() {
      this.$store
        .dispatch('saveEvaluationNotes', {
          evalNotes: this.evalNotes,
          activityDataId: this.activityData._id
        })
        .then(results => {
          var ad = results || {}
          var ed = ad.evaluationData || ''
          // update this components local copy
          this.evalNotes = ed
          // update the global storage ... just the new data
          this.activityData.evaluationData = ed
        })
    },
    initializeEvaluationNotes: function() {
      var ad = this.activityData
      var ed = ad.evaluationData
      var initialNotes = ed ? ed : ''
      this.evalNotes = initialNotes
      return initialNotes
    }
  },
  created: function() {
    this.initializeEvaluationNotes()
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
    padding: 5px;
  }
  .evaluation-controls button {
    margin: 10px;
  }
}
</style>

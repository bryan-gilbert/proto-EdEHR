<template lang="pug">
  div(class="ehr-eval-input")
    div(class="evaluation-notes")
      textarea(v-model="theNotes")
    div(class="evaluation-controls")
      button(v-on:click="cancelEvaluationNotes") cancel
      button(v-on:click="saveEvaluationNotes")  save

</template>

<script>
export default {
  name: 'EhrEvaluationInput',
  data: function() {
    return {
      theNotes: ''
    }
  },
  computed: {
    studentName() {
      let sInfo = this.$store.state.ehrData.sCurrentStudentInfo || {}
      return sInfo.studentName
    }
  },
  methods: {
    loadDialog: function() {
      /*
      The containing component needs to invoke this load method when it shows
      this component/dialog. Here we get the data and store it for use in the form.
      It is also possible to use this method to restore the data to what is in the db.
       */
      let edata = this.$store.getters['ehrData/evaluationData']
      // console.log('EhrEvaluationDialog computed eval notes =', edata)
      this.theNotes = edata
    },
    cancelEvaluationNotes: function() {
      this.loadDialog() // reset the data for next time
      this.$emit('canceled')
    },
    saveEvaluationNotes: function() {
      // console.log('Save the evaluation notes', this.theNotes)
      this.$store.dispatch('ehrData/sendEvaluationNotes', this.theNotes).then(() => {
        this.$emit('saved')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';
@import '../../scss/settings/color.scss';

.ehr-eval-input {
  color: $white;
  width: 100%;

  .evaluation-notes {
    width: 100%;
    textarea {
      width: 100%;
      height: 4rem;
    }
  }
}
</style>

<template lang="pug">
  div(:class="$options.name")
    app-dialog(:isModal="false", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") Evaluation [ TO DO  put student's name here ]
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-full")
              textarea(v-model="theNotes")
        div
          p The notes: {{theNotes}}
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'EhrEvaluationDialog',
  components: {
    UiButton,
    AppDialog
  },
  data: function() {
    return {
      theNotes: ''
    }
  },
  computed: {
  },
  methods: {
    loadDialog: function() {
      let edata = this.$store.getters['ehrData/evaluationData']
      console.log('EhrEvaluationDialog computed eval notes =', edata)
      this.theNotes = edata
    },
    cancelDialog: function() {
      this.loadDialog() // reset the data for next time
      this.$emit('canceled')
    },
    saveDialog: function() {
      console.log('Save the evaluation notes', this.theNotes)
      this.$store
        .dispatch('ehrData/sendEvaluationNotes', this.theNotes)
        .then( () => {
          this.$emit('saved')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';

.EhrEvaluationDialog {
  color: black;
}
</style>

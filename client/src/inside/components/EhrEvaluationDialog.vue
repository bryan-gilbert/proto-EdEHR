<template lang="pug">
  div(:class="$options.name",  v-if="showEvalNotes")
    app-dialog(:isModal="false", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") Evaluation [ ToDo  put student's name here ]
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-full")
              textarea(v-model="evalNotes")
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
      populate: true,
      evalNotes: '',
    }
  },
  methods: {
    clearInputs: function() {
      this.evalNotes = ''
    },
    cancelDialog: function() {
      this.clearInputs()
      console.log('cancel')
      this.$emit('canceled')
    },
    saveDialog: function() {
      console.log('Saving evaluation notes', this.evalNotes)
      this.$emit('saved')
      // this.$store.dispatch('addPNotes', { note: this.inputs })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';

.EhrEvaluationDialog {
  margin-top: auto;
  margin-bottom: 30px;
  &__bottom {
    padding: 15px;
  }
  &__button {
    width: 100%;
  }
}
</style>

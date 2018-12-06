<template lang="pug">
  div(:class="$options.name")
    div(:class="`${$options.name}__bottom`")
      ui-button(v-on:buttonClicked="showDialog", :class="`${$options.name}__button`") Scratch Pad
    app-dialog( v-if="showingDialog", :isModal="false", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") Your private notes
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-full")
              textarea(v-model="scratchPad")
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'EhrScratchPad',
  components: {
    UiButton,
    AppDialog
  },
  data: function() {
    return {
      showingDialog: false,
      populate: true,
      scratchPad: ''
    }
  },
  methods: {
    clearInputs: function() {
      this.scratchPad = ''
    },
    showDialog: function() {
      this.clearInputs()
      this.showingDialog = true
    },    
    cancelDialog: function() {
      this.clearInputs()
      this.showingDialog = false
    },
    saveDialog: function() {
      this.showingDialog = false
      console.log('Saving Scratch Pad', this.scratchPad)
      // this.$store.dispatch('addPNotes', { note: this.inputs })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';

.EhrScratchPad {
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

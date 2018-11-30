<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Patient Notes
    ehr-panel-content
      ui-button(v-on:buttonClicked="showDialog") Add a new progress notes
      div(style="display: inline-block; margin-left: 1rem;")
        input(type="checkbox", id="populate", v-model="populate")
        label(style="margin-left: 3px;", for="populate") {{ populateMsg }}
      div(:class="`${$options.name}__main`")
        table.table
          thead
            tr
              th.name(title="Name") Name
              th.position(title="Position") Position
              th.unit(title="Unit") Unit
              th.day(title="Day") Day
              th.time(title="Time") Time
              th.notes(title="Progress Notes") Progress Notes
          tbody
            tr(v-for="item in progressNotes")
              td.name {{ item.name }}
              td.position {{ item.position}}
              td.unit {{ item.unit }}
              td.day {{ item.day }}
              td.time {{ item.time }}
              td.notes {{ item.notes }}
    modal( v-if="showModal", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
      h3(slot="header") Create a new progress note
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-medium input-name")
              label Name
              input(type="text", v-model="inputs.name")
            div(class="input-element input-element-medium")
              label Profession
              input(type="text", v-model="inputs.profession")
            div(class="input-element input-element-small")
              label Unit
              input(type="text", v-model="inputs.unit")
            div(class="input-element input-element-small")
              label Day
              input(type="text", v-model="inputs.day")
            div(class="input-element input-element-small")
              label Time
              input(type="text", v-model="inputs.time")
        hr
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-full")
              label Progress notes
              textarea(v-model="inputs.notes")
      span(slot="button1") Create and close
</template>

<script>
import UiButton from '../../app/ui/UiButton.vue'
import { getPhrase, getName } from '../poc-utils'
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import Modal from '../../app/components/Modal'

export default {
  name: 'ProgressNotes',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    Modal,
    UiButton
  },
  data: function() {
    return {
      showModal: false,
      populate: true,
      inputs: {},
      errorList: []
    }
  },
  computed: {
    populateMsg() {
      return 'Add with sample data ' + (this.populate ? 'enabled' : 'disabled')
    },
    disableActions() {
      let isValid = !!this.$store.state.sVisitInfo
      // console.log('User is valid? ', isValid)
      return !isValid
    },
    progressNotes() {
      let activityData = this.$store.state.sActivityData
      if (activityData) {
        return activityData.currentData.progressNotes
      }
      return {}
    }
  },
  methods: {
    clearInputs: function() {
      this.inputs = {
        name: '',
        profession: '',
        unit: '',
        day: '0',
        time: '',
        notes: ''
      }
      this.errorList = []
    },
    validateInputs: function() {
      var inputs = this.inputs
      // console.log('validate the inputs', inputs.name, this.inputs.name)
      inputs.name = inputs.name.trim()
      inputs.notes = inputs.notes.trim()
      inputs.unit = inputs.unit.trim()
      inputs.profession = inputs.profession.trim()
      inputs.day = inputs.day.trim()
      inputs.time = inputs.time.trim()
      var vm = this
      function check(prop, msg) {
        if (prop.length == 0) {
          vm.errorList.push(msg)
        }
      }
      check(this.inputs.name, 'Name is required')
      check(this.inputs.profession, 'Profession is required')
      check(this.inputs.unit, 'Unit is required')
      check(this.inputs.day, 'Day is required')
      check(this.inputs.time, 'Time is required')
      check(this.inputs.notes, 'Notes are required')
      return this.errorList.length === 0
    },
    showDialog: function() {
      // console.log('show dialog')
      this.clearInputs()
      if (this.populate) {
        var inputs = this.inputs
        inputs.name = getName()
        inputs.notes = getPhrase(14)
        inputs.profession = 'Nurse'
        inputs.unit = 'ER'
        inputs.day = '0'
        inputs.time = '07:00'
        // console.log("Prepop with ", this.inputs.notes)
      }
      // this.validateInputs()
      this.showModal = true
    },
    cancelDialog: function() {
      this.clearInputs()
      this.showModal = false
    },
    saveDialog: function() {
      if (this.validateInputs()) {
        this.showModal = false
        // console.log('Saving Progress Notes', this.inputs)
        this.$store.dispatch('addPNotes', { note: this.inputs })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$contentMinHeigth: 500px;
.ProgressNotes {
  padding: 1rem;
  &__main {
    font-size: 0.8rem;
    max-height: $contentMinHeigth;
    overflow-y: auto;

    .table th {
      border-bottom: 2px solid #979797;
    }
  }
}
</style>

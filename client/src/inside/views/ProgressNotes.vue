<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Patient Notes
    ehr-panel-content
      div(v-show="isStudent")
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
            tr(v-for="item in theData")
              td.name {{ item.name }}
              td.position {{ item.profession}}
              td.unit {{ item.unit }}
              td.day {{ item.day }}
              td.time {{ item.time }}
              td.notes {{ item.notes }}
    app-dialog( v-if="showModal", :isModal="true", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
      h3(slot="header") Create a new progress note
      div(slot="body", class="ehr-page")
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
      span(slot="save-button") Create and close
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrHelp from '../ehr-helper'
import UiButton from '../../app/ui/UiButton.vue'
import AppDialog from '../../app/components/AppDialogShell'
import moment from 'moment'
import { getPhrase } from '../poc-utils'

export default {
  name: 'ProgressNotes',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    AppDialog,
    UiButton
  },
  data: function() {
    return {
      dataKey: 'progressNotes',
      ehrHelp: {},
      hasForm: false,
      loading: false,
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
    username() {
      let info = this.$store.state.visit.sUserInfo
      return info ? info.fullName : ''
    },
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    notEditing() {
      return !this.ehrHelp.isEditing()
    },
    theData() {
      return this.ehrHelp.theData()
    },
    progressNotes() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let pn = data.progressNotes || []
      console.log('get PN ', data, pn)
      return pn
    },
    isStudent() {
      return this.$store.getters['visit/isStudent']
    }
  },
  methods: {
    clearDialogInputs: function() {
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
      this.clearDialogInputs()
      var today = moment().format('DD MMM')
      var time = moment().format('HH:mm')
      console.log('date is ', today, time)
      if (this.populate) {
        var inputs = this.inputs
        inputs.name = this.username
        inputs.notes = getPhrase(14)
        inputs.profession = 'Nurse'
        inputs.unit = 'ER'
        inputs.day = today
        inputs.time = time
      }
      this.showModal = true
    },
    cancelDialog: function() {
      this.clearDialogInputs()
      this.showModal = false
    },
    saveDialog: function() {
      if (this.validateInputs()) {
        const _this = this
        this.loading = true
        this.showModal = false
        // console.log('Saving Progress Notes', this.inputs)
        // We wish to send a modified object to the API server and not directly update our client side copy.
        // Because the data is stored in our Vuex store we need to make a deep clone to prevent this error:
        // "Do not mutate vuex store state outside mutation handlers."
        let data = this.$store.getters['ehrData/assignmentData'] || {}
        var modifiedValue = data.progressNotes || []
        modifiedValue = modifiedValue ? JSON.parse(JSON.stringify(modifiedValue)) : []
        modifiedValue.push(this.inputs)
        // Prepare a payload to tell the API which property inside the assignment data to change
        let payload = {
          property: 'progressNotes',
          value: modifiedValue
        }
        this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
          _this.loading = false
        })
      }
    }
  },
  created() {
    this.ehrHelp = new EhrHelp(this, this.$store, this.dataKey, this.hasForm)
  },
  beforeRouteLeave(to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';
.ProgressNotes {
  &__main {
  }
}
</style>

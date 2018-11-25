<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Patient Notes
    ehr-panel-content
      ui-button(v-on:buttonClicked="showDialog") Dialog
      ui-button(v-on:buttonClicked="addNote" v-bind:disabled="disableActions") Add a new progress note
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
    modal( v-if="showModal" @close="showModal = false")
      h3(slot="header") Create a new progress note
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-medium input-name")
              label Name
              input(type="text", style="width: 15rem;")
            div(class="input-element input-element-medium")
              label Profession
              input(type="text", style="width: 15rem;")
            div(class="input-element input-element-small")
              label Unit
              input(type="text", style="width: 5rem;")
            div(class="input-element input-element-small")
              label Day
              input(type="text", style="width: 5rem;")
            div(class="input-element input-element-small")
              label Time
              input(type="text", style="width: 5rem;")
        hr
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-full")
              label Progress notes
              textarea
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
      showModal: true
    }
  },
  computed: {
    disableActions() {
      let isValid = !!this.$store.state.sVisitInfo
      console.log('User is valid? ', isValid)
      return !isValid
    },
    progressNotes() {
      let data = this.$store.state.sVisitInfo
      console.log('assignment data ', data)
      if (data) {
        console.log('EhrPanelContent data.currentData', data.currentData)
        return data.currentData.progressNotes
      }
      return {}
    }
  },
  methods: {
    showDialog: function() {
      this.showModal = !this.showModal
    },
    addNote: function(event) {
      console.log('EhrPanelContent Add note clicked ', event.target.textContent)
      var time = Math.floor(Math.random() * 9)
      var newRow = {
        name: getName(),
        position: 'Nurse',
        unit: 'ER',
        day: '0',
        time: `0${time}:00`,
        notes: getPhrase(15)
      }
      this.$store.dispatch('addPNotes', { note: newRow })
      // this.progressNotes.push(newRow);
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

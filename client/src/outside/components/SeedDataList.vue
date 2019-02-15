<template lang="pug">
  div(id="seedDataList", class="seedData-list")
    h1 Seed Data
    div(class="seedData-list-header columns", v-on:click="activateActivity")
      div Click here to see list of data seeds used by assignments
    div(class="seedData-list-body")
      accordion-element(theme="grayTheme", :show="expandAccordion")
        div
          ui-button(v-on:buttonClicked="showCreateDialog") Create new seed
        div(class="classlist-body")
          table.table
            thead
              tr
                th Name
                th Version
                th Description
                th Seed Id
            tbody
              tr(v-for="sv in seedDataList")
                td {{sv.name}}
                td {{sv.version}}
                td {{sv.description}}
                td {{sv._id}}
                td
                  ui-button(v-on:buttonClicked="showEditDialog", :value="sv._id")
                    fas-icon(icon="edit")
                td
                  ui-button(v-on:buttonClicked="gotoEhrWithSeed", :value="sv._id")
                    fas-icon(icon="notes-medical")

    app-dialog( v-if="showingDialog", :isModal="true", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Name
                input(class="input", type="text", v-model="aSeed.name")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Version
                input(class="input", type="text", v-model="aSeed.version")
            div(class="ehrdfe")
              div(class="input-element input-element-full")
                textarea(class="textarea",v-model="aSeed.description")
            div(class="ehrdfe")
              div(class="input-element input-element-full")
                textarea(class="textarea",v-model="aSeed.ehrData")

</template>

<script>
import AccordionElement from '../../app/components/AccordionElement'
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'ActivityList',
  components: {
    AccordionElement,
    AppDialog,
    UiButton
  },
  data() {
    return {
      expandAccordion: false,
      indicator: '+',
      showingDialog: false,
      aSeed: {},
      dialogHeader: '',
      actionType: '',
      seedId: ''
    }
  },
  props: {},
  computed: {
    seedDataList() {
      return this.$store.state.assignment.seedDataList
    }
  },
  methods: {
    findSeed: function(id) {
      return this.seedDataList.find(e => {
        return e._id === id
      })
    },
    setShow: function(value) {
      this.expandAccordion = value
      this.indicator = value ? '-' : '+'
    },
    activateActivity() {
      if (this.expandAccordion) {
        this.setShow(false)
        return
      }
      this.loadSeedDataList()
    },
    loadSeedDataList() {
      const _this = this
      return this.$store.dispatch('assignment/loadSeedDataList').then(() => {
        _this.$nextTick(function() {
          _this.setShow(true)
        })
      })
    },
    gotoEhrWithSeed: function(event) {
      const _this = this
      let seedId = event.target.value
      console.log('gotoEhrWithSeed with seed id', seedId)
      this.$store.commit('ehrData/setSeedId', seedId)
      this.$store.dispatch('ehrData/loadSeedContent', seedId).then(() => {
        console.log('go to demographics')
        _this.$router.push({ name: 'demographics' })
      })
    },
    showEditDialog: function(event) {
      this.seedId = event.target.value
      // clone to decouple data from storage before using in dialog
      let sData = Object.assign({}, this.findSeed(this.seedId))
      this.actionType = 'edit'
      this.aSeed = sData
      this.aSeed.ehrData = JSON.stringify(this.aSeed.ehrData,null,2)
      this.dialogHeader = 'Edit seed data properties'
      this.showingDialog = true
    },
    showCreateDialog: function() {
      this.aSeed = {}
      this.actionType = 'create'
      this.dialogHeader = 'Create a new seed for assignments'
      this.showingDialog = true
    },
    cancelDialog: function() {
      this.showingDialog = false
    },
    saveDialog: function() {
      console.log('saveDialog ', this.actionType, this.aSeed)
      const _this = this
      this.aSeed.ehrData = JSON.parse(this.aSeed.ehrData)
      this.showingDialog = false
      this.expandAccordion = false
      if (this.actionType === 'edit') {
        console.log('Seed Data saving ', this.aSeed)
        this.$store
          .dispatch('assignment/updateSeedData', { id: this.seedId, payload: this.aSeed })
          .then(() => {
            _this.expandAccordion = true
          })
      } else if (this.actionType === 'create') {
        console.log('Seed Data saving ', this.aSeed)
        this.$store.dispatch('assignment/createSeedData', this.aSeed).then(() => {
          _this.expandAccordion = true
        })
      }
    }
  },
  mounted: function() {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.seedData-list {
  padding: 0;
}
.seedData-list-header {
  background-color: $grey03;
  margin-bottom: 0;

  .header-column {
    padding: 1rem 1.5rem;
  }
  .header-item {
    display: block;
  }
  .header-icon {
    font-size: 2rem;
    font-weight: bold;
    text-align: right;
  }
}

.seedData-list-body {
  background-color: $grey10;
  overflow: hidden;
  margin-bottom: 0;

  .classlist-header {
    padding: 0.5rem 1.5rem;
    background-color: $grey10;
    border: 1px solid $grey20;
    box-sizing: border-box;
  }
  .classlist-header-item {
    display: inline-block;
    margin-right: 2rem;
  }
  .classlist-body {
    padding: 1rem 1.5rem;
    background-color: $white;
    border: 1px solid $grey20;
    box-sizing: border-box;
    overflow: hidden;
  }
  .table {
    overflow: hidden;
    width: 100%;
  }
}
</style>

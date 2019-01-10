// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ uiProps.pageTitle }}
      div(slot="controls", v-show="showEditControls")
        ehr-edit-controls(v-bind:ehrHelp="ehrHelp", @controlsCallback="controlsCallback")
    ehr-panel-content
      div(class="region ehr-page-content")
        ehr-page-form(v-if="uiProps.hasForm", v-bind:formDefs="uiProps.page_form", v-bind:theData="theData", v-bind:notEditing="notEditing")
        div(v-if="uiProps.hasTable")
          ehr-page-table(v-for="tableDef in uiProps.tables", :tableDef="tableDef", :key="tableDef.tableKey", :theData="tableData(tableDef)", :ehrHelp="ehrHelp", :showEditControls="showEditControls")
    div(style="display:none") {{currentData}}
    div(style="display:none")
      p This Immunization page is generated.
      p Label: Immunization
      p Data Key: immunization
      p Component name: Immunization
      p Redirect: 
      p Route name: immunization
      p Full path: /ehr/patient/history/immunization
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrEditControls from '../components/EhrEditControls.vue'
import EhrPageTable from '../components/EhrPageTable'
import EhrPageForm from '../components/EhrPageForm.vue'
import EhrHelp from '../ehr-helper'

export default {
  name: 'Immunization',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageForm,
    EhrPageTable,
    EhrEditControls
  },
  data: function() {
    return {
      dataKey: 'immunization',
      theData: {},
      ehrHelp: undefined
    }
  },
  computed: {
    uiProps() {
      return this.ehrHelp ? this.ehrHelp.getPageDefinition(this.dataKey) : {}
    },
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    notEditing() {
      return !this.ehrHelp.isEditing()
    },
    currentData() {
      // Note this property is invoked in a div above. Then hidden from view.
      // By invoking this property theData is set (intentional side-effect)
      // and theData contains data from the database
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.theData = this.ehrHelp ? this.ehrHelp.mergedProperty(this.dataKey) : {}
      // console.log('page current data', this.theData)
      return this.theData
    }
  },
  methods: {
    controlsCallback(callback) {
      callback(this.theData)
    },
    getCurrentData() {
      return this.theData
    },
    tableData(tableDef) {
      // console.log('return table data', tableDef.tableKey)
      let td = this.theData[tableDef.tableKey]
      return td
    }
  },
  created() {
    this.ehrHelp = new EhrHelp(this, this.$store, this.dataKey, this.uiProps)
  },
  beforeRouteLeave(to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';
</style>

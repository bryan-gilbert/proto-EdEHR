// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ uiProps.pageTitle }}
      div(slot="controls", v-show="showEditControls")
        ehr-edit-controls(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey", @controlsCallback="controlsCallback")
    ehr-panel-content
      div(class="region ehr-page-content")
        ehr-page-form(v-if="uiProps.hasForm", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey",)
        div(v-if="uiProps.hasTable")
          ehr-page-table(v-for="tableDef in uiProps.tables", :tableDef="tableDef", :key="tableDef.tableKey", :theData="tableData(tableDef)", :ehrHelp="ehrHelp", :showEditControls="showEditControls")
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
      pageDataKey: 'immunization',
      theData: {},
      ehrHelp: undefined
    }
  },
  computed: {
    uiProps() {
      return this.ehrHelp ? this.ehrHelp.getPageDefinition(this.pageDataKey) : {}
    },
    showEditControls() {
      return this.ehrHelp.showEditControls()
    }
  },
  methods: {
    controlsCallback(callback) {
      callback(this.theData)
    },
    tableData(tableDef) {
      // console.log('return table data', tableDef.tableKey)
      let td = this.theData[tableDef.tableKey]
      return td
    }
  },
  created() {
    this.ehrHelp = new EhrHelp(this, this.$store, this.pageDataKey, this.uiProps)
  },
  beforeRouteLeave(to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';
</style>

// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ uiProps.pageTitle }}
      div(slot="controls", v-show="showEditControls")
        ehr-edit-controls(v-bind:ehrHelp="ehrHelp", @controlsCallback="controlsCallback")
    ehr-panel-content
      div(class="region ehr-page-content")
        ehr-page-form(v-bind:formDefs="uiProps.page_form", v-bind:theData="theData", v-bind:notEditing="notEditing")
    div(style="display:none") {{currentData}}
    div(style="display:none")
      p This Family History page is generated.
      p Label: Family History
      p Data Key: family-history
      p Component name: FamilyHistory
      p Redirect: 
      p Route name: family-history
      p Full path: /ehr/patient/history/family-history
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrEditControls from '../components/EhrEditControls.vue'
import EhrPageForm from '../components/EhrPageForm.vue'
import EhrHelp from '../ehr-helper'

export default {
  name: 'FamilyHistory',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageForm,
    EhrEditControls
  },
  data: function() {
    return {
      dataKey: 'family-history',
      theData: {},
      ehrHelp: {},
      hasForm: true,
      loading: false
    }
  },
  computed: {
    uiProps() {
      let defs = require('../defs/patient-profile')()
      let pageDef = defs[this.dataKey]
      console.log('pageDef ', this.dataKey, pageDef)
      return defs[this.dataKey]
    },
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    notEditing() {
      return !this.ehrHelp.isEditing()
    },
    currentData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.theData = this.ehrHelp.mergedProperty()
      return this.theData
    }
  },
  methods: {
    controlsCallback(callback) {
      callback(this.theData)
    },
    getCurrentData() {
      return this.theData
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

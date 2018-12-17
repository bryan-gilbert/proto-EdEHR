// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Referrals
    ehr-panel-content
      div(class="region")
        p This Referrals page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Referrals to other disciplines
        p Component name: Referrals
        p Redirect: 
        p Route name: referrals
        p Full path: /ehr/current/no-med/referrals
        p Assignment Data: referrals
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Referrals',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    referrals() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.referrals || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Referrals {
}
</style>

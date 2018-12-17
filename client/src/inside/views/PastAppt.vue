// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Past Appt
    ehr-panel-content
      div(class="region")
        p This Past Appt page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Past appointments
        p Component name: PastAppt
        p Redirect: 
        p Route name: past-appt
        p Full path: /ehr/patient/past-appt
        p Assignment Data: pastAppt
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'PastAppt',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    pastAppt() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.pastAppt || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.PastAppt {
}
</style>

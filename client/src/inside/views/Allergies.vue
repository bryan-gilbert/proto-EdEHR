// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Allergies
    ehr-panel-content
      div(class="region")
        p This Allergies page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Allergies
        p Component name: Allergies
        p Redirect: 
        p Route name: allergies
        p Full path: /ehr/patient/allergies
        p Assignment Data: allergies
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Allergies',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    allergies() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.allergies || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Allergies {
}
</style>

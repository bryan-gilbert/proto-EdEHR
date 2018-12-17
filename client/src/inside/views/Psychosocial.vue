// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Psychosocial
    ehr-panel-content
      div(class="region")
        p This Psychosocial page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Psychosocial
        p Component name: Psychosocial
        p Redirect: 
        p Route name: psychosocial
        p Full path: /ehr/patient/history/psychosocial
        p Assignment Data: psychosocial
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Psychosocial',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    psychosocial() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.psychosocial || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Psychosocial {
}
</style>

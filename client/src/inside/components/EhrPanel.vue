<template>
  <div :class="$options.name">
    <ehr-panel-header> </ehr-panel-header>
    <ehr-panel-content> This is the EHR main content panel </ehr-panel-content>
  </div>
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'EhrPanel',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  }
}
</script>

<style lang="scss" scoped>
.EhrPanel {
}
</style>

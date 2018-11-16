<template>
  <div :class="$options.name">
    <ehr-panel-header>

    </ehr-panel-header>
    <ehr-panel-content>
      This is the EHR main content panel
    </ehr-panel-content>
  </div>
</template>

<script>
  import EhrPanelHeader from '../app/EhrPanelHeader.vue';
  import EhrPanelContent from '../app/EhrPanelContent.vue';

export default {
  name: `EhrPanel`,
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
};
</script>

<style lang="scss" scoped>
.EhrPanel {
}
</style>

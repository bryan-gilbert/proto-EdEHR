<template>
  <div :class="$options.name">
    <ehr-banner>

    </ehr-banner>
    <ehr-panel>

    </ehr-panel>
  </div>
</template>

<script>
import EhrBanner from '../app/EhrBanner.vue';
import EhrPanel from '../app/EhrPanel.vue';

export default {
  name: `EhrPagePoc`,
  components: {
    EhrBanner,
    EhrPanel
  },
};
</script>

<style lang="scss" scoped>
.EhrPagePoc {
  $section-spacing: 3em;

}
</style>

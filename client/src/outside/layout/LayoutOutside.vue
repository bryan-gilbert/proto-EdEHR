<template lang="pug">
  div(class="outside-layout")
    slot(name="outside-header", class="outside-header")
      app-header
    main(class="outside-main")
      div(name="mainContent", class="outside-content")
        slot
    slot(name="outside-footer", class="outside-footer")
      app-footer
    input(class="checkbox", type="checkbox", v-model="showingSpecial")
    div(v-show="showingSpecial")
      ehr-special
  </div>
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import OutPanelNav from '../components/OutPanelNav.vue'
import EhrSpecial from '../../inside/components/EhrSpecial.vue'

export default {
  name: 'LayoutOutside',
  components: {
    OutPanelNav,
    AppFooter,
    AppHeader,
    EhrSpecial
  },
  data: function() {
    return {
      showingSpecial: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';
@import '../../scss/settings/color.scss';

body {
  background: $grey10;
}

.outside-layout {
  .outside-main-content {
    color: $grey60;
    background-color: $white;
    @include wrapper('page');
  }
  .outside-header {
  }
  .outside-content {
    margin: 0;
  }
}
</style>

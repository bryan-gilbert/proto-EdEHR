<template lang="pug">
  div(class="ehr_layout")
    div(class="ehr_layout__wrapper")
      ui-spinner(:loading="isLoading")
      app-header
      ehr-context-banner
      main(class="ehr_layout__main columns")
        div(class="ehr_layout__nav column")
          ehr-nav-panel
        div(class="ehr_layout__content column")
          div(class="ehr_layout__content_banner")
            div(class="ehr_layout__content_banner_content")
              ehr-banner
          div(class="ehr_layout__content_page")
            slot Main EHR content for a component will appear here. The component is selected by the router
      app-footer
      input(class="checkbox", type="checkbox", v-model="showingSpecial")
      div(v-show="showingSpecial")
        ehr-special
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import EhrSpecial from '../components/EhrSpecial.vue'
import EhrNavPanel from '../components/EhrNavPanel.vue'
import EhrBanner from '../components/EhrBanner.vue'
import EhrContextBanner from '../components/EhrContextBanner'
import UiSpinner from '../../app/ui/UiSpinner'

export default {
  name: 'LayoutEhr',
  components: {
    AppHeader,
    AppFooter,
    EhrBanner,
    // EhrPanel,
    EhrNavPanel,
    EhrContextBanner,
    EhrSpecial,
    UiSpinner
  },
  data: function() {
    return {
      showingSpecial: false
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.system.isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
$contentMinHeight: 700px;
$navMinWidth: 235px;
/* $navMaxWidth: 360px; */
/* for dev on my small box only ... */
$navMaxWidth: 280px;
$pageWidth: 1024px;
@import '../../scss/styles.scss';

.ehr_layout {
  margin: 1px;
  background-color: $grey60;
  &__wrapper {
    width: 100%;
    border: $border-width solid $border1;
    margin: 2px;
  }
  &__main {
    color: $grey60;
    background-color: $white;
    /*padding-left: 0;*/
    overflow: hidden;
    border: $border-width solid $border2;
    margin: 2px;
  }
  &__main_content {
    /*margin: 0;*/
    border: $border-width solid $border3;
    margin: 2px;
  }
  &__nav {
    /* max-width: $navWidth; */
    min-width: $navMinWidth;
    max-width: $navMaxWidth;
    width: 20%; /* of page width */
    padding: 0;
    /*margin: 0;*/
    border: $border-width solid $border4;
    margin: 2px;
  }
  &__content {
    padding: 0;
    border: $border-width solid $border4;
    margin: 1px;
    /*
    height: $contentMinHeight;
    margin: 0;
    overflow-y: auto;
    */
  }
  &__content_banner {
    background-color: $grey10;
    color: $grey60;
    border: $border-width solid $border6;
    margin: 1px;
    padding: 0;
  }
  &__content_banner_content {
    border: $border-width solid $border7;
    margin: 1px;
    padding: 0;
    max-width: 80%;
  }
  &__content_page {
    border: $border-width solid $border6;
    margin: 1px;
    padding: 0;
    width: 100%;
  }
}
</style>

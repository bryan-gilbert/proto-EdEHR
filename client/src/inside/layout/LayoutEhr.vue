<template>
  <div :class="$options.name">
    <app-header />
    <ehr-context-banner />
    <main :class="`${$options.name}__main`">
      <div name="mainContent" :class="`${$options.name}__main_content columns`">
        <div name="nav" :class="`${$options.name}__nav column`"><ehr-nav-panel /></div>
        <div name="content" :class="`${$options.name}__content column`">
          <ehr-banner></ehr-banner>
          <slot>
            Main EHR content for a component will appear here. The component is selected by the router
          </slot>
        </div>
      </div>
    </main>
    <app-footer />
    <ehr-special />
  </div>
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import EhrSpecial from '../components/EhrSpecial.vue'
import EhrNavPanel from '../components/EhrNavPanel.vue'
import EhrBanner from '../components/EhrBanner.vue'
import EhrContextBanner from '../components/EhrContextBanner'

export default {
  name: 'LayoutDefault',
  components: {
    AppHeader,
    AppFooter,
    EhrBanner,
    // EhrPanel,
    EhrNavPanel,
    EhrContextBanner,
    EhrSpecial
  },
  computed: {
    path() {
      // console.log('this.$route', this.$route)
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';
$contentMinHeigth: 700px;
$navWidth: 234px;
$pageWidth: 1024px;

.LayoutDefault {
  background-color: #4f545c;
  h1 {
    font-size: 3rem;
  }
  &__main {
    color: #6a6c73;
    background-color: white;
    /*padding-left: 0;*/
    @include wrapper('page');
    overflow: hidden;
  }
  &__header {
    max-width: $pageWidth;
  }
  &__main_content {
    margin: 0;
  }
  &__nav {
    // @include wrapper('narrow');
    max-width: $navWidth;
    height: $contentMinHeigth;
    padding: 0;
    margin: 0;
  }
  &__content {
    height: $contentMinHeigth;
    padding: 0;
    margin: 0;
    overflow-y: auto;
  }
}
</style>

<template>
  <div :class="$options.name">
    <slot name="outside-header" :class="`${$options.name}__header`">
      <app-header />
    </slot>
    <main :class="`${$options.name}__main`">
      <div name="mainContent" :class="`${$options.name}__main_content`">
        <div name="nav" :class="`${$options.name}__nav`">
          <out-panel-nav />
        </div>
        <div name="content" :class="`${$options.name}__content`">
          <slot />
        </div>
      </div>
    </main>
    <slot name="outside-footer"> <app-footer></app-footer> </slot>
  </div>
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import OutPanelNav from '../components/OutPanelNav.vue'

export default {
  name: 'LayoutOutside',
  components: {
    OutPanelNav,
    AppFooter,
    AppHeader
  },
  computed: {
    path() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';
$contentMinHeigth: 800px;
$navWidth: 234px;
$pageWidth: 1024px;
body {
  background: #e9ebed;
}

.LayoutOutside {
  &__main {
    color: #6a6c73;
    background-color: white;
    @include wrapper('page');
  }
  &__header {
  }
  &__main_content {
    margin: 0;
  }
  &__nav {
    // @include wrapper('narrow');
    padding: 0;
    margin: 0;
  }
  &__content {
    min-height: $contentMinHeigth;
    padding: 0;
    margin: 0;
  }
}
</style>

<template>
  <div :class="$options.name">
    <slot name="header" :class="`${$options.name}__header`">
      <app-header/>
    </slot>
    <main :class="`${$options.name}__main`">
      <div name="mainContent" :class="`${$options.name}__main_content columns`">
        <div name="nav" :class="`${$options.name}__nav column`">
         <ehr-nav-panel/>
        </div>
        <div name="content" :class="`${$options.name}__content column`">
          <slot/>
        </div>
      </div>
    </main>
    <slot name="footer">
      <ehr-special/>
    </slot>
  </div>
</template>

<script>
import AppHeader from '../app/AppHeader.vue';
import AppFooter from '../app/AppFooter.vue';
import EhrNavPanel from '../app/EhrNavPanel.vue';
import EhrSpecial from '../app/EhrSpecial.vue';

export default {
  name: `LayoutDefault`,
  components: {
    EhrNavPanel,
    AppHeader,
    EhrSpecial,
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';
$contentMinHeigth: 800px;
$navWidth: 234px;
$pageWidth: 1024px;

.LayoutDefault {
  &__main {
    color: #6a6c73;
    background-color: white;
    /*padding-left: 0;*/
    @include wrapper('page');
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
  }
}
</style>

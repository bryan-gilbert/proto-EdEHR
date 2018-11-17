<template>
  <div :class="$options.name">
    <slot name="outside-header" :class="`${$options.name}__header`">
      <app-header />
    </slot>
    <main :class="`${$options.name}__main`">
      <div name="mainContent" :class="`${$options.name}__main_content columns`">
        <div name="content" :class="`${$options.name}__content column`">
          {{ path }} <slot />
        </div>
      </div>
    </main>
    <slot name="outside-footer"> <app-footer></app-footer> </slot>
  </div>
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'

export default {
  name: 'LayoutOutside',
  components: {
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
    max-width: $navWidth;
    min-height: $contentMinHeigth;
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

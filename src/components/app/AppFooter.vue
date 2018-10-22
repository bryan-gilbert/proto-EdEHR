<template>
  <footer :class="$options.name">
    <div :class="`${$options.name}__wrapper`">

      <ui-link :to="{ name: `home` }">Home</ui-link>
      |
      <ui-link :to="{ name: `article` }">Articled</ui-link>
      |
      <ui-link :to="{ name: `dev` }">Dev</ui-link>
      |
      <ui-link :to="{ name: `blog` }">Blog</ui-link>
      |
      <ui-link :to="{ name: `list` }">List</ui-link>
    </div>
  </footer>
</template>

<script>
import UiLink from '../ui/UiLink.vue'

export default {
  name: `AppFooter`,
  components: {
    UiLink,
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppFooter {
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: $color-secondary;
  text-align: center;

  &__wrapper {
    @include wrapper();
  }
}
</style>

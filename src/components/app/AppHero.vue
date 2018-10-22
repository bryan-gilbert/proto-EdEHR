<template>
  <div :class="$options.name">
    <app-headline>
      <slot name="headline"/>
    </app-headline>

    <ui-intro :class="`${$options.name}__intro`">
      <slot/>
    </ui-intro>

    <ui-button
      v-if="action"
      :to="action.to"
      :class="`${$options.name}__action`">
      {{ action.label }}
    </ui-button>
  </div>
</template>

<script>
import UiButton from '../ui/UiButton.vue';
import AppHeadline from './AppHeadline.vue';
import UiIntro from '../ui/UiIntro.vue';

export default {
  name: `AppHero`,
  components: {
		UiButton,
    AppHeadline,
    UiIntro,
  },
  props: {
    action: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';

.AppHero {
  @include wrapper(s);

  text-align: center;

  &__intro {
    margin-top: 1em;
  }

  &__action {
    margin-top: 1em;
    font-size: 1.25em;
  }
}
</style>

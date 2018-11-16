<template>
  <div :class="$options.name">
    <app-headline :level="3">
      <slot name="headline"/>
    </app-headline>

    <ui-text :class="`${$options.name}__text`">
      <slot/>
    </ui-text>

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
import UiText from '../ui/UiText.vue';

export default {
  name: `AppTeaser`,
  components: {
		UiButton,
    AppHeadline,
    UiText,
  },
  props: {
    action: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/card.mixin';

.AppTeaser {
  @include card();

  &__text,
  &__action {
    margin-top: 1em;
  }
}
</style>

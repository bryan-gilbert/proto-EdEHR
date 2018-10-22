<template>
  <div :class="$options.name">
      <slot name="link"/>
  </div>
</template>

<script>
import UiButton from '../ui/UiButton.vue';
import AppHeadline from './AppHeadline.vue';
import UiText from '../ui/UiText.vue';

export default {
  name: `EhrNav`,
  components: {
  },
  props: {
    action: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

.EhrNav {
}
</style>

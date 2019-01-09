<template lang="pug">
	div(:class="$options.name")
		slot
</template>

<script>
export default {
  name: 'OutPanelContent',
  components: {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color.scss';

.OutPanelContent {
  padding: 20px 1.5rem;

  &__main {
    font-size: 0.8rem;

    .table th {
      border-bottom: 2px solid $grey40;
    }
  }
}
</style>

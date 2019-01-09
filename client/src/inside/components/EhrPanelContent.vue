<template lang="pug">
	div(:class="$options.name")
		slot
</template>

<script>
export default {
  name: 'EhrPanelContent',
  components: {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color.scss';

.EhrPanelContent {
  padding: 20px 1.5rem;
    font-size: 0.8rem;

  &__main {

    .table th {
      border-bottom: 2px solid $grey60;
    }
  }
}
</style>

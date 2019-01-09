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
  padding: 1.5rem 2rem 6rem;

  &__main {

    .table th {
      border-bottom: 2px solid $grey60;
    }
  }
}
</style>

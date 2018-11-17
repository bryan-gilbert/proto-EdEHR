<template lang="pug">
	div(:class="$options.name")
		slot
</template>

<script>

export default {
  name: 'EhrPanelContent',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.EhrPanelContent {
  padding: 20px 1.5rem;

  &__main {
    font-size: 0.8rem;

    .table th {
      border-bottom: 2px solid #979797;
    }
  }
}
</style>

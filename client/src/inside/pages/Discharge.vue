<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {{$options.name}}
</template>

<script>
export default {
  name: 'Discharge'
}
</script>

<style lang="scss" scoped>
.Discharge {
  &__main {
  }
}
</style>

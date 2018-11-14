<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {{$options.name}}
</template>

<script>
export default {
  name: 'VitalSigns'
}
</script>

<style lang="scss" scoped>
.VitalSigns {
  &__main {
  }
}
</style>

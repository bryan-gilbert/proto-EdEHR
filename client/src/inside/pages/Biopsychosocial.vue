<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {{$options.name}}
</template>

<script>
export default {
  name: 'Biopsychosocial'
}
</script>

<style lang="scss" scoped>
.Biopsychosocial {
  &__main {
  }
}
</style>

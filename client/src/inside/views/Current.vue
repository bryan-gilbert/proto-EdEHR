<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Current
		p redirect: 
		p path: base/current
</template>

<script>
export default {
  name: 'Current',
}
</script>

<style lang="scss" scoped>
.Current {,
  &__main {
  }
}
</style>'
<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Chart
		p redirect: 
		p path: base/chart
</template>

<script>
export default {
  name: 'Chart'
}
</script>

<style lang="scss" scoped>
.Chart {
  &__main {
  }
}
</style>'
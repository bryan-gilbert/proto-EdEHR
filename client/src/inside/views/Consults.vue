<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Consults
		p redirect: 
		p path: base/chart/reports/consults
</template>

<script>
export default {
  name: 'Consults',
}
</script>

<style lang="scss" scoped>
.Consults {,
  &__main {
  }
}
</style>'
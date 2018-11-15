<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Reports
		p redirect: base/chart/reports/consults
		p path: base/chart/reports
</template>

<script>
export default {
  name: 'Reports'
}
</script>

<style lang="scss" scoped>
.Reports {
  &__main {
  }
}
</style>'
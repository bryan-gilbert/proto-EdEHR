<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: DiagnosticReports
		p redirect: 
		p path: base/chart/reports/diagnostic-reports
</template>

<script>
export default {
  name: 'DiagnosticReports',
}
</script>

<style lang="scss" scoped>
.DiagnosticReports {,
  &__main {
  }
}
</style>'
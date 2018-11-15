<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: LabReports
		p redirect: 
		p path: base/chart/reports/lab-reports
</template>

<script>
export default {
  name: 'LabReports'
}
</script>

<style lang="scss" scoped>
.LabReports {
  &__main {
  }
}
</style>'
<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: OperativeAnaesthesia
		p redirect: 
		p path: base/chart/reports/operative-anaesthesia
</template>

<script>
export default {
  name: 'OperativeAnaesthesia'
}
</script>

<style lang="scss" scoped>
.OperativeAnaesthesia {
  &__main {
  }
}
</style>'
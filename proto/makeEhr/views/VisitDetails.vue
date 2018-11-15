<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: VisitDetails
		p redirect: 
		p path: base/current/visit-details
</template>

<script>
export default {
  name: 'VisitDetails'
}
</script>

<style lang="scss" scoped>
.VisitDetails {
  &__main {
  }
}
</style>'
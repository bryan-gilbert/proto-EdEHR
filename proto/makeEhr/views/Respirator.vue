<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Respirator
		p redirect: 
		p path: base/current/assessments/respirator
</template>

<script>
export default {
  name: 'Respirator'
}
</script>

<style lang="scss" scoped>
.Respirator {
  &__main {
  }
}
</style>'
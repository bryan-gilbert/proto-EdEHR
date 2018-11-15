<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Cardiovascular
		p redirect: 
		p path: base/current/assessments/cardiovascular
</template>

<script>
export default {
  name: 'Cardiovascular'
}
</script>

<style lang="scss" scoped>
.Cardiovascular {
  &__main {
  }
}
</style>'
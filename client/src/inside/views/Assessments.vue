<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Assessments
		p redirect: base/current/assessments/neurological
		p path: base/current/assessments
</template>

<script>
export default {
  name: 'Assessments',
}
</script>

<style lang="scss" scoped>
.Assessments {,
  &__main {
  }
}
</style>'
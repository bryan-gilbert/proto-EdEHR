<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Biopsychosocial
		p redirect: 
		p path: base/current/assessments/biopsychosocial
</template>

<script>
export default {
  name: 'Biopsychosocial',
}
</script>

<style lang="scss" scoped>
.Biopsychosocial {,
  &__main {
  }
}
</style>'
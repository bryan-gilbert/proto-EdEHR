<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Genitourinary
		p redirect: 
		p path: base/current/assessments/genitourinary
</template>

<script>
export default {
  name: 'Genitourinary',
}
</script>

<style lang="scss" scoped>
.Genitourinary {,
  &__main {
  }
}
</style>'
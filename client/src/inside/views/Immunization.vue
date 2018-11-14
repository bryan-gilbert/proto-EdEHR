<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Immunization
		p redirect: 
		p path: base/patient/history/immunization
</template>

<script>
export default {
  name: 'Immunization',
}
</script>

<style lang="scss" scoped>
.Immunization {,
  &__main {
  }
}
</style>'
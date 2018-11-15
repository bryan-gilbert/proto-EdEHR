<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Allegies
		p redirect: 
		p path: base/patient/allegies
</template>

<script>
export default {
  name: 'Allegies'
}
</script>

<style lang="scss" scoped>
.Allegies {
  &__main {
  }
}
</style>'
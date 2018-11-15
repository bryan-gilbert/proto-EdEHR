<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Gastrointestinal
		p redirect: 
		p path: base/current/assessments/gastrointestinal
</template>

<script>
export default {
  name: 'Gastrointestinal'
}
</script>

<style lang="scss" scoped>
.Gastrointestinal {
  &__main {
  }
}
</style>'
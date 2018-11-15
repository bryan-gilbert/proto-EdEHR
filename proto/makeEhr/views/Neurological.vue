<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Neurological
		p redirect: 
		p path: base/current/assessments/neurological
</template>

<script>
export default {
  name: 'Neurological'
}
</script>

<style lang="scss" scoped>
.Neurological {
  &__main {
  }
}
</style>'
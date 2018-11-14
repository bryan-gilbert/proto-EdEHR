<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Musculoskeletal
		p redirect: 
		p path: base/current/assessments/musculoskeletal
</template>

<script>
export default {
  name: 'Musculoskeletal',
}
</script>

<style lang="scss" scoped>
.Musculoskeletal {,
  &__main {
  }
}
</style>'
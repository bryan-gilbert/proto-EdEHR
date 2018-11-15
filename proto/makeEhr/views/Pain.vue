<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Pain
		p redirect: 
		p path: base/current/assessments/pain
</template>

<script>
export default {
  name: 'Pain'
}
</script>

<style lang="scss" scoped>
.Pain {
  &__main {
  }
}
</style>'
<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Demographics
		p redirect: 
		p path: base/patient/demographics
</template>

<script>
export default {
  name: 'Demographics',
}
</script>

<style lang="scss" scoped>
.Demographics {,
  &__main {
  }
}
</style>'
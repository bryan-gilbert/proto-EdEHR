<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: CareTeam
		p redirect: 
		p path: base/patient/care-team
</template>

<script>
export default {
  name: 'CareTeam',
}
</script>

<style lang="scss" scoped>
.CareTeam {,
  &__main {
  }
}
</style>'
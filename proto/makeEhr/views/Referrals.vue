<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Referrals
		p redirect: 
		p path: base/current/no-med/referrals
</template>

<script>
export default {
  name: 'Referrals'
}
</script>

<style lang="scss" scoped>
.Referrals {
  &__main {
  }
}
</style>'
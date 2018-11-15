<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Billing
		p redirect: 
		p path: base/current/billing
</template>

<script>
export default {
  name: 'Billing'
}
</script>

<style lang="scss" scoped>
.Billing {
  &__main {
  }
}
</style>'
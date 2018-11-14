<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {{$options.name}}
		p Billing
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
</style>

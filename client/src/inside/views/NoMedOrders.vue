<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: NoMedOrders
		p redirect: 
		p path: base/current/no-med/no-med-orders
</template>

<script>
export default {
  name: 'NoMedOrders',
}
</script>

<style lang="scss" scoped>
.NoMedOrders {,
  &__main {
  }
}
</style>'
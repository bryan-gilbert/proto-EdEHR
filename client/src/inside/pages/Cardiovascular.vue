<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {{$options.name}}
</template>

<script>
export default {
  name: 'Cardiovascular'
}
</script>

<style lang="scss" scoped>
.Cardiovascular {
  &__main {
  }
}
</style>

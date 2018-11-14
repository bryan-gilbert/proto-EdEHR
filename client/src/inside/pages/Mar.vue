<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {{$options.name}}
</template>

<script>
export default {
  name: 'MAR'
}
</script>

<style lang="scss" scoped>
.MAR {
  &__main {
  }
}
</style>

<template>
  <div class="post">
    <h2 class="hello">Current panel</h2>
    <div>
      <li v-for="(value, propertyName) in activity" v-bind:key="propertyName">
        <strong>{{ propertyName }}</strong> : {{ value }}
      </li>
    </div>
  </div>
</template>

<script>
console.log('Have we loaded details?')
export default {
  name: 'Current',
  props: {
    id: {
      type: String,
      default: 'Current'
    }
  },
  computed: {
    activity() {
      console.log('Have we loaded activity?')
      return this.$store.state.sActivityInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.Current {
  color: black;
  &__main {
  }
}
</style>

<template>
  <div class="post">
    <h2 class="hello">Instructor {{id}} {{ $attrs }}</h2>
    <div>
      <li v-for="(value, propertyName) in activity" v-bind:key="propertyName">
        <strong>{{ propertyName }}</strong> : {{ value }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'Teacher'
    }
  },
  computed: {
    activity() {
      return this.$store.state.sActivityInfo
    }
  }
}
</script>

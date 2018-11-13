<template>
  <div class="courses">
    <h2 class="hello">Courses for {{id}} {{ $attrs }}</h2>
    <ul>
      <li>Course 1</li>
      <li>Course 2</li>
    </ul>
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
      default: 'Newbie'
    }
  },
  computed: {
    activity() {
      return this.$store.state.sActivityInfo
    }
  }
}
</script>

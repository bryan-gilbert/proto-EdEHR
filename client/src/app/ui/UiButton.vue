<template>
  <button v-on:click="buttonClicked" v-bind:class="classObject">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    secondary: {
      type: Boolean
    }
  },
  computed: {
    classObject: function() {
      var def = {
        button: true
      }
      if (this.secondary) {
        def['is-light'] = true
      } else {
        def['is-primary'] = true
      }
      return def
    }
  },
  methods: {
    buttonClicked: function(event) {
      this.$emit('buttonClicked', event)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

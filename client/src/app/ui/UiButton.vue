<template>
  <button v-on:click="buttonClicked" v-bind:class="classObject"><slot /></button>
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
@import '../../scss/settings/color.scss';
@import '../../scss/styles.scss';

button,
.button,
.button.is-primary {
  background-color: $brand-primary;
  font-family: $bodyFontFamily;
  font-size: $bodyFontSize;
  margin-bottom: 2em;
  padding: 0.3rem 1rem;
}

button:hover,
.button:hover,
.button.is-primary:hover {
  background-color: $brand-primary-hover;
  transition-duration: 0.3s;
  transition-property: background-color;
}

.button.is-light {
  background-color: $white;
  border: 1px solid $brand-primary;
  box-sizing: border-box;
  color: $brand-primary;
  font-family: $bodyFontFamily;
  font-size: $bodyFontSize;
  margin-bottom: 2em;
  padding: 0.3rem 1rem;
}

.button.is-light:hover {
  background-color: $white;
  border: 1px solid $brand-primary-hover;
  color: $brand-primary-hover;
  transition-duration: 0.3s;
  transition-property: color, background-color;
}
</style>

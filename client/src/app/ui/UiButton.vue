<template>
  <!--
    clicking <router-link :to="..."> is the equivalent of calling router.push(...).
  -->
  <!--
    the :is attribute can change what the button will be. If the 'to' property is set then
    make the button into a Vue router-link component https://router.vuejs.org/api/
    otherwise leave the button as a button.  The :to attribute is used by the router-link, if it's there.
  -->
  <button
    :is="to ? `router-link` : `button`"
    :to="to"
    v-on:click="buttonClicked"
    v-bind:class="classObject"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    to: {
      type: Object
    }
  },
  computed: {
    classObject: function() {
      return {
        'is-link': this.to !== undefined,
        'is-primary': this.to === undefined,
        button: true
      }
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
@import '../../scss/settings/color';

.UiButton {
}
</style>

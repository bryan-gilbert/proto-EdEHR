<template lang="pug">
  div
    label(v-if="element.inputType !== 'checkbox'", v-bind:for="element.elementKey") {{element.label}} {{element.elementKey}} val: {{inputVal}}
    input(v-if="element.inputType === 'text'", class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    textarea(v-if="element.inputType === 'textarea'", class="ehr-page-form-textarea", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    div(v-if="element.inputType === 'select'", class="select")
      select(v-bind:name="element.elementKey", v-bind:disabled="notEditing", v-model="inputVal")
        option(disabled,value="") Please select one
        option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}
    input(v-if="element.inputType === 'checkbox'", class="checkbox", type="checkbox", v-bind:name="element.elementKey", v-model="inputVal")
    label(v-if="element.inputType === 'checkbox'", class="label-checkbox", v-bind:for="element.elementKey") {{element.label}}
    div {{computedValue}} {{inputVal}}
</template>

<script>
import EventBus from '../../event-bus'

// TODO checkboxes may not be reading data from the seed correctly
// TODO day and time types
export default {
  name: 'EhrPageForm',
  data: function() {
    return {
      inputVal: this.computedValue,
      eventHandler: {}
    }
  },
  props: {
    notEditing: { type: Boolean },
    element: { type: Object },
    ehrHelp: { type: Object },
    initialValue: {
      // to accept any object type we provide a validator that accepts all types
      validator: function (value) {
        return true
      }
    }
  },
  computed: {
    computedValue() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.inputVal = this.initialValue
      return this.initialValue
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import '../../scss/settings/_forms.scss';
</style>
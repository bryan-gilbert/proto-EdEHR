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
    div(style="display:none") {{computedValue}} {{inputVal}}
</template>

<script>
import EventBus from '../../event-bus'
import { PAGE_FORM_INPUT_EVENT } from '../ehr-helper'
import { PAGE_DATA_REFRESH_EVENT } from '../ehr-helper'

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
      validator: function(value) {
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
  methods: {
    refresh() {
      let pageData = this.ehrHelp.getAsLoadedPageData()
      let key = this.element.elementKey
      let value = pageData[key]
      console.log('EhrPageForm refresh page data ', key, value, this.notEditing)
      this.inputVal = value
    }
  },
  watch: {
    inputVal(val) {
      if (this.notEditing) {
        // only broadcast if user is editing the form
        return
      }
      // console.log('EhrPageForm watch inputValue', val, PAGE_FORM_INPUT_EVENT)
      // Send event when any input changes. The listener (EhrHelper) will collect the changes
      // and be ready to send the changes to the server.
      EventBus.$emit(PAGE_FORM_INPUT_EVENT, { value: val, element: this.element })
    },
    initialValue(val) {
      console.log('EhrPageForm page form element watching initial value', val)
    }
  },
  mounted: function() {
    const _this = this
    this.refreshEventHandler = function() {
      console.log('EhrPageForm received page refresh event')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function() {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/settings/_forms.scss';
</style>

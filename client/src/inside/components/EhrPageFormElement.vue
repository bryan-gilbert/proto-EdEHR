<template lang="pug">
  div
    label(v-if="element.inputType !== 'checkbox' && element.formOption !== 'hideLabel'", v-bind:for="element.elementKey") {{element.label}}
    input(v-if="element.inputType === 'text'", class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    datepicker(v-if="element.inputType === 'date'", placeholder="Select Date", class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    textarea(v-if="element.inputType === 'textarea'", class="ehr-page-form-textarea", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    div(v-if="element.inputType === 'select'", class="select")
      select(v-bind:name="element.elementKey", v-bind:disabled="notEditing", v-model="inputVal")
        option(disabled,value="") Please select one
        option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}
    input(v-if="element.inputType === 'checkbox'", class="checkbox", type="checkbox", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    label(v-if="element.inputType === 'checkbox'", class="label-checkbox", v-bind:for="element.elementKey") {{element.label}}
    div(style="display:none") {{computedValue}} {{inputVal}}
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import EventBus from '../../event-bus'
import { PAGE_FORM_INPUT_EVENT } from '../../event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../event-bus'
/*
TODO perhaps the markup could be a series of divs selected by inputType
and their content could then be clean and clear markup for each of the input types.
The way it is now is tight code but it's hard to understand.

TODO date, day and time types

TODO document the hideLabel value in the formOption property

TODO on the Immunization and other pages there are fields that should only be active
if the checkbox is checked. Implement the event based dependency
that I've done in the EhrDialogFormElement
 */

export default {
  name: 'EhrPageFormElement',
  components: {
    Datepicker
  },
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
      // let key = this.element.elementKey
      // console.log('EhrPageFormElement initialValue', key,  this.initialValue)
      // TODO check if this approach to initialization is the best. If so the document it here...
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.inputVal = this.initialValue
      return this.initialValue
    }
  },
  methods: {
    refresh() {
      let pageDataKey = this.element.pageDataKey
      let pageData = this.ehrHelp.getAsLoadedPageData(pageDataKey)
      let key = this.element.elementKey
      let value = pageData[key]
      // console.log('EhrPageFormElement refresh page data ', key, value, this.notEditing)
      this.inputVal = value
    }
  },
  watch: {
    inputVal(val) {
      if (this.notEditing) {
        // only broadcast if user is editing the form
        return
      }
      // Send event when any input changes. The listener (EhrHelper) will collect the changes
      // and be ready to send the changes to the server.
      let pageDataKey = this.element.pageDataKey
      let pfuEventChannel = PAGE_FORM_INPUT_EVENT + pageDataKey
      console.log('EhrPageFormElement watch inputValue', pfuEventChannel,  val, this.element)
      EventBus.$emit(pfuEventChannel, { value: val, element: this.element })
    }
    // ,
    // initialValue(val) {
    //   // TODO why watch?
    //   console.log('EhrPageFormElement page form element (TODO WHY) watching initial value', val)
    // }
  },
  mounted: function() {
    const _this = this
    this.refreshEventHandler = function() {
      console.log('EhrPageFormElement received page refresh event')
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

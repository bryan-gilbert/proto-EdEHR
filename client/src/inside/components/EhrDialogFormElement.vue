<template lang="pug">
  div(class="input-element", :class="def.classList")
    div(v-if="def.inputType === 'text'")
      label {{def.label}}
      input(class="input", type="text", v-model="inputVal")
    div(v-if="def.inputType === 'date'")
      label {{def.label}}
      input(class="input", type="text", v-model="inputVal")
    div(v-if="def.inputType === 'textarea'")
      label {{def.label}}
      textarea(v-model="inputVal")
    div(v-if="def.inputType === 'checklistWithOther'", class="checklistWithOther")
      li(v-for="opt in def.options")
        input(class="radio", type="radio", :id="opt.text" @click="emitGlobalClickEvent()", :name="def.key", :value="opt.text", v-model="inputVal")
        label(class="label-radio", :for="opt.text") {{ opt.text }}
    div(v-if="def.inputType === 'dependant'",  class="otherForChecklist", v-show="gotHit")
      input(class="input", type="text", v-model="inputVal")
</template>

<script>
import EventBus from '../../event-bus'
import { DIALOG_INPUT_EVENT } from '../ehr-helper'

// TODO day, time types

/*
  Note that when the dialog is opened each form element definition is given a reference
  to the ehrHelp. See ehrHelp.showDialog()
 */

export default {
  name: 'EhrPageForm',
  props: {
    inputs: { type: Object },
    def: { type: Object }
  },
  data() {
    return {
      inputVal: this.computedValue,
      gotHit: false,
      eventHandler: {}
    }
  },
  computed: {
    computedValue() {
      let cV = this.def.helper.getInputValue(this.def)
      console.log('computedValue', cV)
      return cV
    },
    parentData() {
      if (this.def.parent) {
        let pVal = this.inputs[this.def.parent.elementKey]
        console.log('this.inputs', this.inputs)
        console.log('daf.parent', this.def.parent, 'pVal', pVal)
        return pVal
      }
      return ''
    },
    eventChannelListen() {
      if (this.def.parent) {
        // console.log('eventChannelListen daf.parent', this.def.parent)
        return 'radio:' + this.def.parent.elementKey
      }
      return null
    },
    eventChannelBroadcast() {
      return 'radio:' + this.def.elementKey
    }
  },
  methods: {
    emitGlobalClickEvent() {
      const _this = this
      this.$nextTick(function() {
        // Send an event on our transmission channel with a payload containing this component's value
        let eData = { key: _this.def, value: _this.inputVal }
        // console.log('emit event',eData, _this.eventChannelBroadcast)
        EventBus.$emit(_this.eventChannelBroadcast, eData)
      })
    },
    receiveEvent(eData) {
      // TODO targetValue where is this set?
      // we're receiving an event transmitted by another instance of this component. An instance
      // that has sent a message on the channel this component listens on.
      this.gotHit = this.def.targetValue === eData.value
      // console.log(`On channel ${this.eventChannelListen} from key ${eData.key} got hit? ${this.gotHit}`)
    }
  },
  mounted: function() {
    // TODO do I need this set of input value? If so then we need a way to get the helper during mount
    console.log('helper? ')
    // this.inputVal = this.def.helper.getInputValue(this.def)
    if (this.eventChannelListen) {
      const _this = this
      // register listener if needed
      this.eventHandler = function(eData) {
        _this.receiveEvent(eData)
      }
      EventBus.$on(this.eventChannelListen, this.eventHandler) // eData => { this.receiveEvent(eData) })
    }
  },
  beforeDestroy: function() {
    if (this.eventChannelListen && this.eventHandler) {
      // console.log('beforeDestroy, remove listener',this.eventChannelListen)
      EventBus.$off(this.eventChannelListen, this.eventHandler)
    }
  },
  watch: {
    inputVal(val) {
      // console.log('watch inputValue', val, DIALOG_INPUT_EVENT)
      let def = this.def
      EventBus.$emit(DIALOG_INPUT_EVENT, { key: def.elementKey, value: val, def: def })
    }
  }
}
</script>

<style scoped>
.otherForChecklist {
  margin-left: 1rem;
}
</style>

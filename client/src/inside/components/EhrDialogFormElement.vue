<template lang="pug">
  div(class="input-element", :class="def.classList")
    div(v-if="def.type === 'text'")
      label {{def.label}}
      input(class="input", type="text", v-model="inputVal")
    div(v-if="def.type === 'textarea'")
      label {{def.label}}
      textarea(v-model="inputVal")
    div(v-if="def.type === 'checklistWithOther'", class="checklistWithOther")
      li(v-for="opt in def.options")
        input(class="radio", type="radio", :id="opt.text" @click="emitGlobalClickEvent()", :name="def.key", :value="opt.text", v-model="inputVal")
        label(class="label-radio", :for="opt.text") {{ opt.text }}
    div(v-if="def.type === 'dependant'",  class="otherForChecklist", v-show="gotHit")
      input(class="input", type="text", v-model="inputVal")
</template>

<script>
import EventBus from '../../event-bus'
export default {
  name: 'EhrPageForm',
  props: {
    value: {type: String},
    inputs: {type : Object},
    def: {type: Object}
  },
  data() {
    return { inputVal: this.value, gotHit: false, eventHandler: {}  }
  },
  computed: {
    parentData() {
      if (this.def.parent) {
        let pVal =  this.inputs[this.def.parent.key]
        console.log('this.inputs',this.inputs)
        console.log('daf.parent', this.def.parent, 'pVal', pVal)
        return pVal
      }
      return ''
    },
    eventChannelListen() {
      if (this.def.parent) {
        console.log('daf.parent', this.def.parent)
        return 'radio:' + this.def.parent.key
      }
      return null
    },
    eventChannelBroadcast() {
      return 'radio:' + this.def.key
    }
  },
  methods: {
    emitGlobalClickEvent() {
      const _this = this
      this.$nextTick(function () {
        // Send an event on our transmission channel with a payload containing this component's value
        let eData = {key: _this.def.key, value: _this.inputVal }
        console.log('emit event',eData, _this.eventChannelBroadcast)
        EventBus.$emit(_this.eventChannelBroadcast, eData)
      })
    },
    receiveEvent(eData) {
      // we're receiving an event transmitted by another instance of this component. An instance
      // that has sent a message on the channel this component listens on.
      this.gotHit = this.def.targetValue === eData.value
      console.log(`On channel ${this.eventChannelListen} from key ${eData.key} got hit? ${this.gotHit}`)
    }

  },
  mounted: function() {
    if(this.eventChannelListen) {
      const _this = this
      // register listener if needed
      this.eventHandler = function(eData) { _this.receiveEvent(eData)}
      EventBus.$on(this.eventChannelListen, this.eventHandler) // eData => { this.receiveEvent(eData) })
    }
  },
  beforeDestroy: function() {
    if(this.eventHandler) {
      // register listener if needed
      EventBus.$off(this.eventChannelListen, this.eventHandler)
    }
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>
  .otherForChecklist {
    margin-left: 1rem;
  }
</style>

<template lang="pug">
  div(class="input-element", :class="def.classList")
    div(v-if="def.type === 'text'")
      label {{def.label}}
      input(class="input", type="text", v-model="inputVal")
    div(v-if="def.type === 'textarea'")
      label {{def.label}}
      textarea(v-model="inputVal")
    div(v-if="def.type === 'checklistWithOther'", class="checklistWithOther")
      li(v-for="option in def.options")
        input(class="checkbox", type="checkbox", v-bind:name="option.text", v-model="inputVal")
        label(v-bind:for="option.text") {{ option.text }}
      input(class="input", type="text", v-model="inputVal")

</template>

<script>
export default {
  name: 'EhrPageForm',
  props: {
    value: {type: String},
    def: {type: Object}
  },
  data() {
    return { inputVal: this.value }
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>
</style>

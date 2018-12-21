<template lang="pug">
  div
    div(v-if="def.type === 'text'")
      label {{def.label}}
      input(class="input", type="text", v-model="inputVal")
    div(v-if="def.type === 'textarea'")
      label {{def.label}}
      textarea(v-model="inputVal")
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

<template lang="pug">
  div
    div(:class="row.classList", v-for="row in formDefs.rows", v-bind:key="row.rowNumber")
      div(class="column" :class="element.classList", v-for="element in row.elements", v-bind:key="element.elementKey")
        label(v-if="element.inputType !== 'checkbox'", v-bind:for="element.elementKey") {{element.label}}
        input(v-if="element.inputType === 'text'", class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="theData[element.elementKey]")
        textarea(v-if="element.inputType === 'textarea'", class="ehr-page-form-textarea", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="theData[element.elementKey]")
        div(v-if="element.inputType === 'select'", class="select")
          select(v-bind:name="element.elementKey", v-bind:disabled="notEditing", v-model="theData[element.elementKey]")
            option(disabled,value="") Please select one
            option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}
        input(v-if="element.inputType === 'checkbox'", class="checkbox", type="checkbox", v-bind:name="element.elementKey", v-model="theData[element.elementKey]")
        label(v-if="element.inputType === 'checkbox'", class="label-checkbox", v-bind:for="element.elementKey") {{element.label}}

</template>

<script>
export default {
  name: 'EhrPageForm',
  props: {
    formDefs: { type: Object },
    theData: { type: Object },
    notEditing: { type: Boolean }
  }
}
</script>

<style lang="scss">
@import '../../scss/settings/_forms.scss';
</style>

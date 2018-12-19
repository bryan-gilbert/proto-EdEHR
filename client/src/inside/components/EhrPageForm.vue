<template lang="pug">
  div
    div(:class="row.classList", v-for="row in uiProps.rows", v-bind:key="row.rowNumber")
      div(:class="element.classList", v-for="element in row.elements", v-bind:key="element.propertyKey")
        label(v-if="element.type !== 'checkbox'", v-bind:for="element.propertyKey") {{element.label}}
        input(v-if="element.type === 'input'", class="input", v-bind:disabled="notEditing", v-bind:name="element.propertyKey", v-model="theData[element.propertyKey]")
        div(v-if="element.type === 'select'", class="select")
          select(v-bind:name="element.propertyKey", v-bind:disabled="notEditing", v-model="theData[element.propertyKey]")
            option(disabled,value="") Please select one
            option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}
        input(v-if="element.type === 'checkbox'", class="checkbox", type="checkbox", v-bind:name="element.propertyKey", v-model="theData[element.propertyKey]")
        label(v-if="element.type === 'checkbox'", v-bind:for="element.propertyKey") No address

</template>

<script>
export default {
  name: 'EhrPageForm',
  props: {
    uiProps: { type: Object },
    theData: { type: Object },
    notEditing: { type: Boolean }

  },
}
</script>

<style scoped>
</style>

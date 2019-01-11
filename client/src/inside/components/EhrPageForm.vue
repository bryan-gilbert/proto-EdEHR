<template lang="pug">
  div
    div  {{pageDataKey}} kk
    div(:class="row.classList", v-for="row in formDefs.rows", v-bind:key="row.rowNumber")
      div(class="column" :class="element.classList", v-for="element in row.elements", v-bind:key="element.elementKey")
        label(v-if="element.inputType !== 'checkbox'", v-bind:for="element.elementKey") {{element.label}} {{element.elementKey}} {{theData[element.elementKey]}} qed
        input(v-if="element.inputType === 'text'", class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="theData[element.elementKey]")
        textarea(v-if="element.inputType === 'textarea'", class="ehr-page-form-textarea", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="theData[element.elementKey]")
        div(v-if="element.inputType === 'select'", class="select")
          select(v-bind:name="element.elementKey", v-bind:disabled="notEditing", v-model="theData[element.elementKey]")
            option(disabled,value="") Please select one
            option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}
        input(v-if="element.inputType === 'checkbox'", class="checkbox", type="checkbox", v-bind:name="element.elementKey", v-model="theData[element.elementKey]")
        label(v-if="element.inputType === 'checkbox'", class="label-checkbox", v-bind:for="element.elementKey") {{element.label}}
    div(style="display:none") {{currentData}}
</template>

<script>
// TODO checkboxes may not be reading data from the seed correctly
// TODO ? day and time types
export default {
  name: 'EhrPageForm',
  data: function() {
    return {
      theData: {}
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object }
  },
  computed: {
    // v-bind:formDefs="uiProps.page_form", v-bind:theData="theData", v-bind:notEditing="notEditing"
    formDefs() {
      let pageDef = this.ehrHelp
        ? this.ehrHelp.getPageDefinition(this.pageDataKey)
        : { page_form: {} }
      return pageDef.page_form
    },
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    notEditing() {
      return !this.ehrHelp.isEditing()
    },
    currentData() {
      // Note this property is invoked in a div above. Then hidden from view.
      // By invoking this property theData is set (intentional side-effect)
      // and theData contains data from the database
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.theData = this.setUpDefaults()
      console.log('EHR Page Form: page current data', this.theData)
      return this.theData
    }
  },
  methods: {
    setUpDefaults() {
      let theData = this.ehrHelp.mergedProperty(this.pageDataKey)
      let pageDef = this.ehrHelp.getPageDefinition(this.pageDataKey)
      let formDefs = pageDef.page_form
      let rows = formDefs.rows
      rows.forEach(row => {
        row.elements.forEach(element => {
          // console.log(element)
          let defaultValue = element.defaultValue || ''
          // TODO see about date, time, and boolean default values
          if (!theData[element.elementKey]) {
            this.$set(theData, element.elementKey, defaultValue)
          }
        })
      })
      return theData
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/settings/_forms.scss';
</style>
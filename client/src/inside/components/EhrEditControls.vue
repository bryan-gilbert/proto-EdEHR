<template lang="pug">
  div
    button(v-on:click="beginEdit", v-show="!isEditing")
      fas-icon(icon="edit")
    button(v-on:click="saveEdit", v-show="isEditing")
      fas-icon(icon="check-circle")
    button(v-on:click="cancelEdit", v-show="isEditing")
      fas-icon(icon="times-circle")
</template>

<script>
export default {
  name: 'EhrEditControls',
  components: {},
  data: function() {
    return {}
  },
  props: {
    ehrHelp: { type: Object }
  },
  computed: {
    isEditing() {
      return this.ehrHelp.isEditing()
    }
  },
  methods: {
    beginEdit: function() {
      this.ehrHelp.beginEdit()
    },
    cancelEdit: function() {
      this.ehrHelp.cancelEdit()
    },
    saveEdit: function() {
      this.ehrHelp.saveEdit()
    }
  }
}
</script>

<style scoped>
</style>

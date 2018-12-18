<template lang="pug">
  div(slot="controls", v-show="isStudent")
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
    return {
      cacheAsString: ''
    }
  },
  props: {
    ehrHelp: { type: Object }
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    isEditing() {
      return this.$store.state.system.isEditing
    }
  },
  methods: {
    beginEdit: function() {
      var _this = this
      this.$store.commit('system/setEditing', true)
      this.$emit('controlsCallback', function(dataDef) {
        _this.cacheAsString = JSON.stringify(dataDef.value)
        _this.ehrHelp.cacheData(_this.cacheAsString)
      })
    },
    cancelEdit: function() {
      const _this = this
      _this.$store.commit('system/setEditing', false)
      _this.$store.commit('system/setLoading', true)
      // let activityId = localStorage.getItem('activityId')
      // this.$store.dispatch('ehrData/loadActivityData', { forStudent: true, id: activityId })
      setTimeout(function() {
        _this.$store.commit('system/setLoading', false)
      }, 1000)
    },
    saveEdit: function() {
      const _this = this
      _this.$store.commit('system/setEditing', false)
      _this.$store.commit('system/setLoading', true)
      this.$emit('controlsCallback', function(payload) {
        _this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
          _this.$store.commit('system/setLoading', false)
        })
      })
    }
  }
}
</script>

<style scoped></style>

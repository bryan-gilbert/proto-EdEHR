<template lang="pug">
	div(:class="$options.name")
		slot
</template>

<script>
import UiButton from '../../app/ui/UiButton.vue'
import { getPhrase, getName } from '../poc-utils'

export default {
  name: 'EhrPanelContent',
  components: {
    UiButton
  },
  data: function() {
    return {
      count: 0
    }
  },
  computed: {
    disableActions() {
      let isInvalid = !this.$store.state.isValidUser
      console.log('USer is valid? ', isInvalid)
      return isInvalid
    },
    progressNotes() {
      let data = this.$store.state.sVisitDataInfo.data
      if (data) {
        console.log('EhrPanelContent data', data.progressNotes)
        return data.progressNotes
      }
      return {}
    }
  },
  methods: {
    addNote: function(event) {
      console.log('EhrPanelContent Add note clicked ', event.target.textContent)
      var newRow = {
        name: getName(),
        position: 'Nurse',
        unit: 'ER',
        day: '0',
        time: '07:00',
        notes: getPhrase(15)
      }
      this.$store.dispatch('addPNotes', { note: newRow })
      // this.progressNotes.push(newRow);
    }
  }
}
</script>

<style lang="scss" scoped>
.EhrPanelContent {
  padding: 20px 1.5rem;

  &__main {
    font-size: 0.8rem;

    .table th {
      border-bottom: 2px solid #979797;
    }
  }
}
</style>

<template lang="pug">
	div(:class="$options.name")
		div#progressNote
			ui-button(v-on:buttonClicked="addNote" v-bind:disabled="disableActions") Add a new progress note
			div(:class="`${$options.name}__main`")
				table.table
					thead
						tr
							th.name(title="Name") Name
							th.position(title="Position") Position
							th.unit(title="Unit") Unit
							th.day(title="Day") Day
							th.time(title="Time") Time
							th.notes(title="Progress Notes") Progress Notes
					tbody
						tr(v-for="item in progressNotes")
							td.name {{ item.name }}
							td.position {{ item.position}}
							td.unit {{ item.unit }}
							td.day {{ item.day }}
							td.time {{ item.time }}
							td.notes {{ item.notes }}
</template>

<script>
  import UiButton from '../ui/UiButton.vue';
  import bus from "../eventBus.js"
  import {getPhrase, getName} from '../../poc-utils'

  export default {
    name: `EhrPanelContent`,
    components: {
      UiButton
    },
    data: function () {
      return {
        count: 0
      }
    },
    computed: {
      disableActions () {
        let st = this.$store.state
        let isInvalid = !this.$store.state.isValidUser
		  console.log("USer is valid? ", isInvalid)
		  return isInvalid
		},
      progressNotes () {
        let data = this.$store.state.sVisitDataInfo.data
        if(data) {
          console.log("EhrPanelContent data", data.progressNotes)
          return data.progressNotes
        }
        return {}
      }
    },
    methods: {
      addNote: function(event) {
        console.log("EhrPanelContent Add note clicked ", event.target.textContent)
        var newRow = {
          name: getName(),
          position: 'Nurse',
          unit: 'ER',
          day: '0',
          time: '07:00',
          notes: getPhrase(15)
        }
        this.$store.dispatch('addPNotes',{note: newRow})
        // this.progressNotes.push(newRow);
      }
    }
  };

</script>

<style lang="scss" scoped>
	.EhrPanelContent {
		padding: 1rem;

		&__main {
			font-size: 0.8rem;

			.table th {
				border-bottom: 2px solid #979797
			}
		}
	}
</style>

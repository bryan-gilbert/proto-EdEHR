<template>
  <div :class="$options.name">
     <div contentItemKey="progressNote">
        <ui-button v-on:buttonClicked="addNote">Add a new progress note</ui-button>
        <div  :class="`${$options.name}__main`">
           <table class="table">
              <thead>
              <tr>
                 <th><span title="Name">Name</span></th>
                 <th><span title="Position">Position</span></th>
                 <th><span title="Unit">Unit</span></th>
                 <th><span title="Day">Day</span></th>
                 <th><span title="Time">Time</span></th>
                 <th><span title="Progress Notes">Progress Notes</span></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in items">
                 <td>{{ item.name }}</td>
                 <td>{{ item.position }}</td>
                 <td>{{ item.unit }}</td>
                 <td>{{ item.day }}</td>
                 <td>{{ item.time }}</td>
                 <td>{{ item.notes }}</td>
              </tr>
              </tbody>
           </table>
        </div>
     </div>
  </div>
</template>

<script>
  import UiButton from '../ui/UiButton.vue';
  import bus from "../eventBus.js"

export default {
  name: `EhrPanelContent`,
  components: {
    UiButton
  },
  data: function () {
    return {
      items: [],
      count: 0
    }
  },
  methods: {
    addNote: function(event) {
      console.log("Add note clicked ", event.target.textContent)
      var newRow = {
        name: 'Amanada Healey',
        position: 'Nurse',
        unit: 'ER',
        day: '0',
        time: '07:00',
        notes:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntt.'
      }
      this.items.push(newRow);
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

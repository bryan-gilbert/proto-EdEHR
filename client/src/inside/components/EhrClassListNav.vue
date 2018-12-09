<template lang="pug">
  div(:class="$options.name", v-show="isInstructor")
    div(:class="`${$options.name}__content`")
      div Evaluating: {{ currentEvaluationStudent.user.fullName }}
      div Course: {{ currentEvaluationStudent.activity.context_title}}
      div Activity: {{ currentEvaluationStudent.activity.resource_link_title}}
      div(:class="`${$options.name}__controls`")
        ui-button(v-on:buttonClicked="previousStudent", :class="`${$options.name}__navItem`") Previous
        ui-button(v-on:buttonClicked="nextStudent", :class="`${$options.name}__navItem`") Next
        ui-button(v-on:buttonClicked="showEvaluationNotes", :class="`${$options.name}__navItem`") Eval Notes
        ehr-evaluation-dialog(v-show="showEvaluationDialog", @canceled="canceled", @saved="saved")
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import EhrEvaluationDialog from './EhrEvaluationDialog'
export default {
  name: 'EhrClassListNav',
  components: { UiButton, EhrEvaluationDialog },
  data: function() {
    return {
      showDetails: false,
      showEvaluationDialog: false
    }
  },
  computed: {
    currentEvaluationStudentId() {
      return this.$store.state.sCurrentEvaluationStudentId
    },
    classList() {
      return this.$store.state.sClassList || []
    },
    isInstructor() {
      return this.$store.getters.isInstructor
    },
    currentEvaluationStudent() {
      return this.$store.getters.currentEvaluationStudent
    }
  },
  methods: {
    canceled() {
      this.showEvaluationDialog = false
    },
    saved() {
      this.showEvaluationDialog = false
    },
    previousStudent() {
      console.log('previous pressed')
    },
    nextStudent() {
      console.log('next pressed')
    },
    showEvaluationNotes() {
      this.showEvaluationDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.EhrClassListNav {
  &__content {
    display: flex;
    flex-direction: row;
    div {
      flex: 1 0 auto;
    }
  }
  &__navItem {
    &:not(:first-child) {
      margin-left: 1.5em;
      &::before {
        margin-right: 0.5em;
      }
    }
  }
}
</style>

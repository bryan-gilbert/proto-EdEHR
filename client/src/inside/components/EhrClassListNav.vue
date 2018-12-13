<template lang="pug">
  div(:class="$options.name", v-show="isInstructor")
    div(:class="`${$options.name}__content`")
      div Evaluating: {{ panelInfo.studentName }}
      div Course: {{ panelInfo.courseTitle}}
      div Activity: {{ panelInfo.activityTitle}}
      div(:class="`${$options.name}__controls`")
        ui-button(v-on:buttonClicked="previousStudent", :class="`${$options.name}__navItem`") Previous
        ui-button(v-on:buttonClicked="nextStudent", :class="`${$options.name}__navItem`") Next
        ui-button(v-on:buttonClicked="showEvaluationNotes", :class="`${$options.name}__navItem`") Eval Notes
        ehr-evaluation-dialog(v-show="showingEvaluationDialog", @canceled="canceled", @saved="saved")
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import EhrEvaluationDialog from './EhrEvaluationDialog'
export default {
  name: 'EhrClassListNav',
  components: { UiButton, EhrEvaluationDialog },
  data: function() {
    return {
      showingEvaluationDialog: false
    }
  },
  computed: {
    panelInfo() {
      let ces = this.$store.getters.currentEvaluationStudent || {user:{},activity:{}}
      let data = {
        studentName: ces.user.fullName,
        courseTitle: ces.activity.context_title,
        activityTitle: ces.activity.resource_link_title
      }
      return data
    },
    classList() {
      return this.$store.state.sClassList || []
    },
    isInstructor() {
      return this.$store.getters.isInstructor
    }
  },
  methods: {
    canceled() {
      this.showingEvaluationDialog = false
    },
    saved() {
      this.showingEvaluationDialog = false
    },
    previousStudent() {
      console.log('previous pressed')
    },
    nextStudent() {
      console.log('next pressed')
    },
    showEvaluationNotes() {
      this.showingEvaluationDialog = true
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

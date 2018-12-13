<template lang="pug">
  div(:class="$options.name", v-show="isInstructor")
    ehr-class-list-nav
</template>

<script>
  /*
      div(v-show="showDetails")
      p Current Student Visit _id: {{ currentEvaluationStudentId }}
      p Visit._id: {{ currentEvaluationStudent._id }}
      p Student: {{ currentEvaluationStudent.user.fullName }}
      p _id: {{ currentEvaluationStudent.user._id }}
      p Course: {{ currentEvaluationStudent.activity.context_title}}
      p Activity: {{ currentEvaluationStudent.activity.resource_link_title}}
      p Activity Description: {{ currentEvaluationStudent.activity.resource_link_description}}
      div(:class="`${$options.name}__data`")
        li(class="classList", v-for="studentVisit in classList")
          p Visit._id: {{ studentVisit._id }}
          p Student: {{ studentVisit.user.fullName }}
          p _id: {{ studentVisit.user._id }}
          p Course: {{ studentVisit.activity.context_title}}
          p Activity: {{ studentVisit.activity.resource_link_title}}
          p Activity Description: {{ studentVisit.activity.resource_link_description}}

   */
import EhrClassListNav from './EhrClassListNav'
export default {
  name: 'EhrContextBanner',
  components: { EhrClassListNav },
  data: function() {
    return {
      // showDetails: false
    }
  },
  computed: {
    isInstructor() {
      return this.$store.getters['visit/isInstructor']
    },
    // currentEvaluationStudentId() {
    //   return this.$store.state.sCurrentEvaluationStudentId
    // },
    // currentEvaluationStudent() {
    //   return this.$store.getters.currentEvaluationStudent || {}
    // },
    // classList() {
    //   return this.$store.state.sClassList || []
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.EhrContextBanner {
  background: $context-banner-background-color;
  color: $context-banner-color;
  @include wrapper('page');
  padding: 10px;
  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__home {
    text-decoration: none;
    font-weight: 500;
  }

  &__nav {
  }

  &__navList {
    display: flex;
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

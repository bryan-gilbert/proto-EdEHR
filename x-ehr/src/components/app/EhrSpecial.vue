<template>
  <div :class="$options.name">
    <p>This is the EHR special content panel</p>
    <div :class="`${$options.name}__special`">
      <hr/>
      <h2>User</h2>
      <div>LMS   id:  {{userInfo.user_id}}</div>
      <div>Full Name:  {{userInfo.givenName}} {{userInfo.familyName}}</div>
      <div>EdEHR id:  {{userInfo._id}}</div>
      <hr/>
      <h2>Visit Data</h2>
      <div>data:  {{visitData.data}}</div>
      <div>EdEHR id:  {{visitData._id}}</div>
      <hr/>
      <h2>Current Visit</h2>
      <div>isInstructor:  {{currentVisit.isInstructor}}</div>
      <div>isStudent:  {{currentVisit.isStudent}}</div>
      <div>lti_roles:  {{currentVisit.lti_roles}}</div>
      <div>rtnUrl:  {{currentVisit.launch_presentation_return_url}}</div>
      <div>lastVisitDate:  {{currentVisit.lastVisitDate}}</div>
      <div>EdEHR id:  {{currentVisit._id}}</div>
      <hr/>
      <h2>Activity</h2>
      <div>context_id:  {{activity.context_id}}</div>
      <div>context_label:  {{activity.context_label}}</div>
      <div>context_title:  {{activity.context_title}}</div>
      <div>context_type:  {{activity.context_type}}</div>
      <div>resource_link_id:  {{activity.resource_link_id}}</div>
      <div>resource_link_title:  {{activity.resource_link_title}}</div>
      <div>resource_link_description:  {{activity.resource_link_description}}</div>
      <div>custom_assignment:  {{activity.custom_assignment}}</div>
      <div>EdEHR id:  {{activity._id}}</div>
    </div>
    <hr/>
    <div :class="`${$options.name}__special`">
      <div>Is user logged on? {{isLoggedOn}}</div>
    </div>

    <hr/>
    <div  :class="`${$options.name}__data`">
      <li v-for="(value, propertyName) in userInfo">
        {{ propertyName }} :  {{ value }}
      </li>
    </div>


  </div>
</template>

<script>
  import EhrPanelHeader from '../app/EhrPanelHeader.vue';
  import EhrPanelContent from '../app/EhrPanelContent.vue';
  import bus from "../eventBus.js"

export default {
  name: `EhrSpecial`,
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  data () {
    return {  }
  },
  computed: {
    isLoggedOn () {
      return this.$store.state.isLoggedOn
    },
    userInfo () {
      return this.$store.state.sUserInfo
    },
    currentVisit () {
      return this.$store.state.sVisitInfo
    },
    activity () {
      return this.$store.state.sActivityInfo
    },
    visitData () {
      return this.$store.state.sVisitDataInfo
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.EhrSpecial {
}
</style>

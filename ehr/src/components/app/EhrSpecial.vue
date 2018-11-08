<template>
  <div :class="$options.name">
    <p>This is the EHR special content panel</p>
    <div :class="`${$options.name}__special`">
      <div>user_id:  {{userInfo.user_id}}</div>
      <div>Full Name:  {{userInfo.givenName}} {{userInfo.familyName}}</div>
      <div>Session/Visit</div>
      <div>sessionData:  {{currentVisit.sessionData}}</div>
      <div>isInstructor:  {{currentVisit.isInstructor}}</div>
      <div>isStudent:  {{currentVisit.isStudent}}</div>
      <div>lti_roles:  {{currentVisit.lti_roles}}</div>
      <div>rtnUrl:  {{currentVisit.launch_presentation_return_url}}</div>
      <div>lastVisitDate:  {{currentVisit.lastVisitDate}}</div>
      <div>Activity</div>
      <div>context_id:  {{activity.context_id}}</div>
      <div>context_label:  {{activity.context_label}}</div>
      <div>context_title:  {{activity.context_title}}</div>
      <div>context_type:  {{activity.context_type}}</div>
      <div>resource_link_id:  {{activity.resource_link_id}}</div>
      <div>resource_link_title:  {{activity.resource_link_title}}</div>
      <div>resource_link_description:  {{activity.resource_link_description}}</div>
      <div>custom_assignment:  {{activity.custom_assignment}}</div>
    </div>
    <div>UserData: {{userData}}</div>
    <hr/>
    <div :class="`${$options.name}__special`">
      <div>Is user logged on? {{isLoggedOn}}</div>
    </div>

    <hr/>
    <div  :class="`${$options.name}__data`">
      <li v-for="(value, propertyName) in userInformation">
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
    userInformation () {
      let userInfo = this.$store.state.sUserInfo
      if(userInfo) {
        console.log("EhrPanelContent this.$store.state.sUserInfo ltiConsumerKey", userInfo.ltiConsumerKey)
        return userInfo
      }
      return {}
    },
    isLoggedOn () {
      return this.$store.state.isLoggedOn
    },
    userInfo () {
      let result = this.$store.state.sUserInfo || {}
      return result
    },
    currentVisit () {
      let result = this.userInfo
      result = result.currentVisit ? result.currentVisit : {}
      return result
    },
    activity () {
      let result = this.currentVisit
      result = result.activity ? result.activity : {}
      return result
    },
    userData () {
      return this.$store.state.sUserData
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

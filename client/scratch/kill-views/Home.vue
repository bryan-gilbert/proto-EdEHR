<template>
  <div class="outside-view home">

    <HelloWorld msg="Welcome to the EdEHR Proof Of Concept"/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
		 <router-link to="/ehr">EHR</router-link> |
      <router-link to="/help">Help</router-link> |
      <router-link to="/student">Student</router-link> |
      <router-link to="/instructor">Instructor</router-link> |
      <!--<router-link to="/bar">Bar</router-link> |-->
      <!--<router-link to="/bar/baz">Baz</router-link>-->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div class="home">

    <HelloWorld msg="Welcome to the EdEHR Proof Of Concept"/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
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

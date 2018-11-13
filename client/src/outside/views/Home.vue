<template>
  <div class="outside-view home">

    <HelloWorld msg="Welcome to the EdEHR Proof Of Concept"/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/outside/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

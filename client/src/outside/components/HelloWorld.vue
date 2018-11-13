<template>
  <div class="hello">
    <h1><img alt="EHR logo" src="../../assets/ehr.png">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 img {
  vertical-align: middle;
}
</style>

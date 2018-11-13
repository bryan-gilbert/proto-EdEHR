<template>
  <div class="post">
    <h2 class="hello">Dashboard {{id}} {{ $attrs }}</h2>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: 'Vue!'
    }
  },
}
</script>

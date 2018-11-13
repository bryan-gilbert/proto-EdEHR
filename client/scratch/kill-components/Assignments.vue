<template>
  <div class="courses">
    <h2 class="hello">Assignments for {{id}} {{ $attrs }}</h2>
    <ul>
      <li>Assignment 1</li>
      <li>Assignment 2</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: 'Newbie'
    }
  },
}
</script>

<template>
  <div class="courses">
    <h2 class="hello">Courses for {{ id }} {{ $attrs }}</h2>
    <ul>
      <li>Course 1</li>
      <li>Course 2</li>
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
  }
}
</script>

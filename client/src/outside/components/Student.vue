<template>
  <div class="post">
    <h2 class="hello">Student {{id}} {{ $attrs }}</h2>
    <div id="nav">
      <router-link to="/student/courses">Courses</router-link> |
      <router-link to="/student/assignments">Assignments</router-link>
    </div>

    <router-view/>
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

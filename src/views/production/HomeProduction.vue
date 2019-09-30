<!--总览 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{routername}}
  </div>

</template>
<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  computed: {
    routername () {
      return this.$route.params
    }
  },
  created () {

  }
}
</script>

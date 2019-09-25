<template>
  <div class="home">
    我是{{this.$route.name}},今年{{this.$route.params.age}}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{routername}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    routername () {
      return this.$route.params.name
    }
  }
}
</script>

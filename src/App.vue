<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      title: 'You first Vue App'
    }
  },
  methods: {
    greeting: function() {
      return 'Heeeeyyyy Cowboyyy!';
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
// registering 'Ninjas' component locally...
import Ninjas from './components/Ninjas.vue'

export default {
  name: 'app',
  components: {
    'ninjas': Ninjas
  },
  data() {
    return {
      title: 'You first Vue App'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>

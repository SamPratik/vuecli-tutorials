<template>
  <div>
    <app-header></app-header>
    <!-- sending 'ninjas' array as props to 'ninjas' compoenent... -->
    <!-- 'v-bind' is used to bind the 'ninjas' props with 'ninjas' array... -->
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'ninjas': Ninjas
  },
  data() {
    return {
      // this array will be sent as props to 'ninjas' component...
      ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    }
  }
}
</script>

<style scoped>

</style>

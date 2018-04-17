<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <hr>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
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
    'app-ninjas': Ninjas
  },
  data() {
    return {
      ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
      title: "Vue Ninjas"
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  },
  // Life cycle hooks
  beforeCreate() {
    //do something before creating vue instance
    alert('beforeCreate');
  },
  created() {
    //do something after creating vue instance...
    // have access to data in this hook. fetching data from database occurs here...
    alert('created');
  },
  beforeMount() {
    //do something before mounting vue instance
    alert('beforeMount');
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered...
      alert('mounted');
    })
  },
  beforeUpdate() {
    //do something before updating vue instance
    alert('beforeUpdate');
  },
  updated: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      alert('updated');
    })
  }
}
</script>

<style scoped>

</style>

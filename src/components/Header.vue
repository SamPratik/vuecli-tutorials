<template>
  <div id="">
    <header>
      <h1 v-on:click="changeTitle">{{title}}</h1>
    </header>
  </div>
</template>
<script>
import {bus} from '../main';

export default {
  name: "",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    // firing event on the bus...
    changeTitle: function() {
      this.title = "Vue Wizards";
      // sending data with the event so that the title of recepient component
      // can change the title to this data...
      bus.$emit('changeTitle', 'Vue Wizards');
    }
  }
}
</script>
<style scoped>
  header{
      background: lightgreen;
      padding: 10px;
  }
  h1{
      color: #222;
      text-align: center;
  }
</style>

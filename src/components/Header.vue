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
    changeTitle: function() {
      this.title = "Vue Wizards";
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

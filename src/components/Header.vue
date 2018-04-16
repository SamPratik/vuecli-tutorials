<template>
  <div id="">
    <header>
      <!-- Clicking 'h1' to update primitive data 'title' in only 'Header' -->
      <!-- Component... -->
      <h1 v-on:click="changeTitle">{{title}}</h1>
    </header>
  </div>
</template>
<script>
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
      this.title = "Vue Wizards"
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

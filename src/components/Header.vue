<template>
  <div id="">
    <header>
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
      // '$emit' will fire an event from this component which will be
      // listened in the parent component so that the parent component
      // can update the 'title'. as a result every ither child component
      // which are using this 'title' as props from parent component gets
      // re-rendered and show the updated 'title' value...

      // first argument: name of the event
      // second argument: data(value of title) which will be passed with the event...
      this.$emit('changeTitle', 'Vue Wizards');
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

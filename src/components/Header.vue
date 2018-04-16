<template>
  <div id="">
    <header>
      <h1>{{title}}</h1>
    </header>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    title: 'Vue Ninjas'
  })
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

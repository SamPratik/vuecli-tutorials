<template>
  <div id="">
    <footer>
      <p>{{copyright}}</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    copyright: 'Copyright 2017 @Vue Ninjas'
  })
}
</script>
<style scoped>
  footer{
      background: #222;
      padding: 6px;
  }
  p{
      color: lightgreen;
      text-align: center;
  }
</style>

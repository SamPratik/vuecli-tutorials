<template>
  <div id="">
    <h1>List of Ninjas</h1>
    <li v-for="ninja in ninjas">{{ninja}}</li>
  </div>
</template>

<script>

export default {
  data: () => ({
    ninjas: ['Pratik', 'Affan', 'Ratul', 'Shihab']
  })
}
</script>

<style scoped>
  h1 {
    color: green;
  }
</style>

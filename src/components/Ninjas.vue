<template>
  <div id="">
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
</style>

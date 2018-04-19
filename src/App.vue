<template>
  <div>
      <add-blog></add-blog>
  </div>
</template>

<script>

import AddBlog from './components/addBlog.vue'

export default {
  name: 'app',
  components: {
      'add-blog': AddBlog
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>

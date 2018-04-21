<template>
  <div>
      <show-blogs></show-blogs>
  </div>
</template>

<script>

import AddBlog from './components/addBlog.vue'
import ShowBlogs from './components/showBlogs.vue'

export default {
  name: 'app',
  components: {
      'add-blog': AddBlog,
      'show-blogs': ShowBlogs
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>

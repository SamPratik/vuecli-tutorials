<template>
  <div>
      <show-blogs></show-blogs>
      <list-blogs></list-blogs>
  </div>
</template>

<script>

import AddBlog from './components/addBlog.vue'
import ShowBlogs from './components/showBlogs.vue'
import ListBlogs from './components/listBlogs.vue'

export default {
  name: 'app',
  components: {
      'add-blog': AddBlog,
      'show-blogs': ShowBlogs,
      'list-blogs': ListBlogs
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>

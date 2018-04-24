<template>
  <div>
      <app-header></app-header>
      <router-view></router-view>
  </div>
</template>

<script>

import AddBlog from './components/addBlog.vue'
import ShowBlogs from './components/showBlogs.vue'
import ListBlogs from './components/listBlogs.vue'
import Header from './components/header.vue'

export default {
  name: 'app',
  components: {
      'add-blog': AddBlog,
      'show-blogs': ShowBlogs,
      'list-blogs': ListBlogs,
      'app-header': Header
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>

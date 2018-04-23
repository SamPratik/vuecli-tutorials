<template>
  <div id="show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" placeholder="Search here..." v-model="search">
      <div v-for="blog in filteredBlogs" class="single-blog">
          <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
          <article>{{ blog.body | snippet }}</article>
      </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
      blogs: [],
      search: ''
  }),
  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
        console.log(data);
        this.blogs = data.body.slice(0,10);
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    'to-uppercase': function(value) {
        return value.toUpperCase();
    }
    /*
      // another methods
      toUpperCase: function(value) {
        return value.toUpperCase();
      }
      toUpperCase(value) {
        return value.toUpperCase();
      }
    */
    // we can add more filter adding commas...
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
    // we can add more directives adding commas...
  }
}
</script>
<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>

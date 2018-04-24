<template>
  <div id="show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" placeholder="Search here..." v-model="search">
      <div v-for="blog in filteredBlogs" class="single-blog">
          <h2 v-rainbow><router-link v-bind:to="'/blog/'+blog.id">{{ blog.title | to-uppercase }}</router-link></h2>
          <article>{{ blog.body | snippet }}</article>
      </div>
  </div>
</template>
<script>
import searchMixin from '../mixins/searchMixin';
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

  },
  filters: {
    'to-uppercase': function(value) {
        return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
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

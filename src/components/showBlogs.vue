<template>
  <!-- Directive Values... -->
  <!-- whatever goes after '=' sign of a directive is called value which -->
  <!-- is accessible through 'binding.value'... -->
  <!-- string values need to be defined inside quotation... -->
  <!-- values can be any type 'object', 'array' etc... -->

  <!-- Directive Arguments... -->
  <!-- whatever goes after ':' of a directive name is called argument... -->
  <!-- It can be accessed using 'binding.arg'... -->

  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <div v-for="blog in blogs" class="single-blog">
          <h2 v-rainbow>{{ blog.title }}</h2>
          <article>{{ blog.body }}</article>
      </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
      blogs: []
  }),
  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
        console.log(data);
        this.blogs = data.body.slice(0,10);
      });
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
